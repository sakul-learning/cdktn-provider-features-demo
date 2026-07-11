// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_memory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockagentcoreMemoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_memory#id DataAwsccBedrockagentcoreMemory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockagentcoreMemoryIndexedKeys {
}

export function dataAwsccBedrockagentcoreMemoryIndexedKeysToTerraform(struct?: DataAwsccBedrockagentcoreMemoryIndexedKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryIndexedKeysToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryIndexedKeys): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryIndexedKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryIndexedKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryIndexedKeys | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreMemoryIndexedKeysList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryIndexedKeysOutputReference {
    return new DataAwsccBedrockagentcoreMemoryIndexedKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_to_prompt - computed: true, optional: false, required: false
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_to_prompt - computed: true, optional: false, required: false
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // max_items - computed: true, optional: false, required: false
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_validation - computed: true, optional: false, required: false
  private _numberValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }

  // string_list_validation - computed: true, optional: false, required: false
  private _stringListValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }

  // string_validation - computed: true, optional: false, required: false
  private _stringValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // llm_extraction_instruction - computed: true, optional: false, required: false
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // llm_extraction_config - computed: true, optional: false, required: false
  private _llmExtractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction_config - computed: true, optional: false, required: false
  private _extractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaOutputReference {
    return new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata_schema - computed: true, optional: false, required: false
  private _metadataSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_to_prompt - computed: true, optional: false, required: false
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }

  // memory_record_schema - computed: true, optional: false, required: false
  private _memoryRecordSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // namespace_templates - computed: true, optional: false, required: false
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consolidation - computed: true, optional: false, required: false
  private _consolidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }

  // extraction - computed: true, optional: false, required: false
  private _extraction = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }

  // reflection - computed: true, optional: false, required: false
  private _reflection = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionOutputReference(this, "reflection");
  public get reflection() {
    return this._reflection;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // payload_delivery_bucket_name - computed: true, optional: false, required: false
  public get payloadDeliveryBucketName() {
    return this.getStringAttribute('payload_delivery_bucket_name');
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_count - computed: true, optional: false, required: false
  public get messageCount() {
    return this.getNumberAttribute('message_count');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_session_timeout - computed: true, optional: false, required: false
  public get idleSessionTimeout() {
    return this.getNumberAttribute('idle_session_timeout');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token_count - computed: true, optional: false, required: false
  public get tokenCount() {
    return this.getNumberAttribute('token_count');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message_based_trigger - computed: true, optional: false, required: false
  private _messageBasedTrigger = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerOutputReference(this, "message_based_trigger");
  public get messageBasedTrigger() {
    return this._messageBasedTrigger;
  }

  // time_based_trigger - computed: true, optional: false, required: false
  private _timeBasedTrigger = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerOutputReference(this, "time_based_trigger");
  public get timeBasedTrigger() {
    return this._timeBasedTrigger;
  }

  // token_based_trigger - computed: true, optional: false, required: false
  private _tokenBasedTrigger = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerOutputReference(this, "token_based_trigger");
  public get tokenBasedTrigger() {
    return this._tokenBasedTrigger;
  }
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsOutputReference {
    return new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // historical_context_window_size - computed: true, optional: false, required: false
  public get historicalContextWindowSize() {
    return this.getNumberAttribute('historical_context_window_size');
  }

  // invocation_configuration - computed: true, optional: false, required: false
  private _invocationConfiguration = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationOutputReference(this, "invocation_configuration");
  public get invocationConfiguration() {
    return this._invocationConfiguration;
  }

  // trigger_conditions - computed: true, optional: false, required: false
  private _triggerConditions = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsList(this, "trigger_conditions", false);
  public get triggerConditions() {
    return this._triggerConditions;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_to_prompt - computed: true, optional: false, required: false
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_to_prompt - computed: true, optional: false, required: false
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consolidation - computed: true, optional: false, required: false
  private _consolidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }

  // extraction - computed: true, optional: false, required: false
  private _extraction = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_to_prompt - computed: true, optional: false, required: false
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consolidation - computed: true, optional: false, required: false
  private _consolidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_to_prompt - computed: true, optional: false, required: false
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_to_prompt - computed: true, optional: false, required: false
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consolidation - computed: true, optional: false, required: false
  private _consolidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }

  // extraction - computed: true, optional: false, required: false
  private _extraction = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // episodic_override - computed: true, optional: false, required: false
  private _episodicOverride = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideOutputReference(this, "episodic_override");
  public get episodicOverride() {
    return this._episodicOverride;
  }

  // self_managed_configuration - computed: true, optional: false, required: false
  private _selfManagedConfiguration = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationOutputReference(this, "self_managed_configuration");
  public get selfManagedConfiguration() {
    return this._selfManagedConfiguration;
  }

  // semantic_override - computed: true, optional: false, required: false
  private _semanticOverride = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideOutputReference(this, "semantic_override");
  public get semanticOverride() {
    return this._semanticOverride;
  }

  // summary_override - computed: true, optional: false, required: false
  private _summaryOverride = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideOutputReference(this, "summary_override");
  public get summaryOverride() {
    return this._summaryOverride;
  }

  // user_preference_override - computed: true, optional: false, required: false
  private _userPreferenceOverride = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideOutputReference(this, "user_preference_override");
  public get userPreferenceOverride() {
    return this._userPreferenceOverride;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // max_items - computed: true, optional: false, required: false
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_validation - computed: true, optional: false, required: false
  private _numberValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }

  // string_list_validation - computed: true, optional: false, required: false
  private _stringListValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }

  // string_validation - computed: true, optional: false, required: false
  private _stringValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // llm_extraction_instruction - computed: true, optional: false, required: false
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // llm_extraction_config - computed: true, optional: false, required: false
  private _llmExtractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction_config - computed: true, optional: false, required: false
  private _extractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata_schema - computed: true, optional: false, required: false
  private _metadataSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // memory_record_schema - computed: true, optional: false, required: false
  private _memoryRecordSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_templates - computed: true, optional: false, required: false
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // max_items - computed: true, optional: false, required: false
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_validation - computed: true, optional: false, required: false
  private _numberValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }

  // string_list_validation - computed: true, optional: false, required: false
  private _stringListValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }

  // string_validation - computed: true, optional: false, required: false
  private _stringValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // llm_extraction_instruction - computed: true, optional: false, required: false
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // llm_extraction_config - computed: true, optional: false, required: false
  private _llmExtractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction_config - computed: true, optional: false, required: false
  private _extractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata_schema - computed: true, optional: false, required: false
  private _metadataSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // max_items - computed: true, optional: false, required: false
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_validation - computed: true, optional: false, required: false
  private _numberValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }

  // string_list_validation - computed: true, optional: false, required: false
  private _stringListValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }

  // string_validation - computed: true, optional: false, required: false
  private _stringValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // llm_extraction_instruction - computed: true, optional: false, required: false
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // llm_extraction_config - computed: true, optional: false, required: false
  private _llmExtractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction_config - computed: true, optional: false, required: false
  private _extractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaOutputReference {
    return new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata_schema - computed: true, optional: false, required: false
  private _metadataSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_record_schema - computed: true, optional: false, required: false
  private _memoryRecordSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }

  // namespace_templates - computed: true, optional: false, required: false
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // memory_record_schema - computed: true, optional: false, required: false
  private _memoryRecordSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_templates - computed: true, optional: false, required: false
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // reflection_configuration - computed: true, optional: false, required: false
  private _reflectionConfiguration = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationOutputReference(this, "reflection_configuration");
  public get reflectionConfiguration() {
    return this._reflectionConfiguration;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // max_items - computed: true, optional: false, required: false
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_validation - computed: true, optional: false, required: false
  private _numberValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }

  // string_list_validation - computed: true, optional: false, required: false
  private _stringListValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }

  // string_validation - computed: true, optional: false, required: false
  private _stringValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // llm_extraction_instruction - computed: true, optional: false, required: false
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // llm_extraction_config - computed: true, optional: false, required: false
  private _llmExtractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction_config - computed: true, optional: false, required: false
  private _extractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata_schema - computed: true, optional: false, required: false
  private _metadataSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // memory_record_schema - computed: true, optional: false, required: false
  private _memoryRecordSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_templates - computed: true, optional: false, required: false
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // max_items - computed: true, optional: false, required: false
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_validation - computed: true, optional: false, required: false
  private _numberValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }

  // string_list_validation - computed: true, optional: false, required: false
  private _stringListValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }

  // string_validation - computed: true, optional: false, required: false
  private _stringValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // llm_extraction_instruction - computed: true, optional: false, required: false
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // llm_extraction_config - computed: true, optional: false, required: false
  private _llmExtractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction_config - computed: true, optional: false, required: false
  private _extractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata_schema - computed: true, optional: false, required: false
  private _metadataSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // memory_record_schema - computed: true, optional: false, required: false
  private _memoryRecordSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_templates - computed: true, optional: false, required: false
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }

  // max_items - computed: true, optional: false, required: false
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number_validation - computed: true, optional: false, required: false
  private _numberValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }

  // string_list_validation - computed: true, optional: false, required: false
  private _stringListValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }

  // string_validation - computed: true, optional: false, required: false
  private _stringValidation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // llm_extraction_instruction - computed: true, optional: false, required: false
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // llm_extraction_config - computed: true, optional: false, required: false
  private _llmExtractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction_config - computed: true, optional: false, required: false
  private _extractionConfig = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata_schema - computed: true, optional: false, required: false
  private _metadataSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // memory_record_schema - computed: true, optional: false, required: false
  private _memoryRecordSchema = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_templates - computed: true, optional: false, required: false
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface DataAwsccBedrockagentcoreMemoryMemoryStrategies {
}

export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesToTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryMemoryStrategiesToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryMemoryStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryMemoryStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryMemoryStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_memory_strategy - computed: true, optional: false, required: false
  private _customMemoryStrategy = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyOutputReference(this, "custom_memory_strategy");
  public get customMemoryStrategy() {
    return this._customMemoryStrategy;
  }

  // episodic_memory_strategy - computed: true, optional: false, required: false
  private _episodicMemoryStrategy = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyOutputReference(this, "episodic_memory_strategy");
  public get episodicMemoryStrategy() {
    return this._episodicMemoryStrategy;
  }

  // semantic_memory_strategy - computed: true, optional: false, required: false
  private _semanticMemoryStrategy = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyOutputReference(this, "semantic_memory_strategy");
  public get semanticMemoryStrategy() {
    return this._semanticMemoryStrategy;
  }

  // summary_memory_strategy - computed: true, optional: false, required: false
  private _summaryMemoryStrategy = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyOutputReference(this, "summary_memory_strategy");
  public get summaryMemoryStrategy() {
    return this._summaryMemoryStrategy;
  }

  // user_preference_memory_strategy - computed: true, optional: false, required: false
  private _userPreferenceMemoryStrategy = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyOutputReference(this, "user_preference_memory_strategy");
  public get userPreferenceMemoryStrategy() {
    return this._userPreferenceMemoryStrategy;
  }
}

export class DataAwsccBedrockagentcoreMemoryMemoryStrategiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryMemoryStrategiesOutputReference {
    return new DataAwsccBedrockagentcoreMemoryMemoryStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations {
}

export function dataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsToTerraform(struct?: DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsOutputReference {
    return new DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis {
}

export function dataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisToTerraform(struct?: DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_configurations - computed: true, optional: false, required: false
  private _contentConfigurations = new DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsList(this, "content_configurations", false);
  public get contentConfigurations() {
    return this._contentConfigurations;
  }

  // data_stream_arn - computed: true, optional: false, required: false
  public get dataStreamArn() {
    return this.getStringAttribute('data_stream_arn');
  }
}
export interface DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResources {
}

export function dataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesToTerraform(struct?: DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kinesis - computed: true, optional: false, required: false
  private _kinesis = new DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }
}

export class DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesOutputReference {
    return new DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockagentcoreMemoryStreamDeliveryResources {
}

export function dataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesToTerraform(struct?: DataAwsccBedrockagentcoreMemoryStreamDeliveryResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesToHclTerraform(struct?: DataAwsccBedrockagentcoreMemoryStreamDeliveryResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockagentcoreMemoryStreamDeliveryResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockagentcoreMemoryStreamDeliveryResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_memory awscc_bedrockagentcore_memory}
*/
export class DataAwsccBedrockagentcoreMemory extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_memory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockagentcoreMemory resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockagentcoreMemory to import
  * @param importFromId The id of the existing DataAwsccBedrockagentcoreMemory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_memory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockagentcoreMemory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_memory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrockagentcore_memory awscc_bedrockagentcore_memory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockagentcoreMemoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockagentcoreMemoryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_memory',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encryption_key_arn - computed: true, optional: false, required: false
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }

  // event_expiry_duration - computed: true, optional: false, required: false
  public get eventExpiryDuration() {
    return this.getNumberAttribute('event_expiry_duration');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
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

  // indexed_keys - computed: true, optional: false, required: false
  private _indexedKeys = new DataAwsccBedrockagentcoreMemoryIndexedKeysList(this, "indexed_keys", false);
  public get indexedKeys() {
    return this._indexedKeys;
  }

  // memory_arn - computed: true, optional: false, required: false
  public get memoryArn() {
    return this.getStringAttribute('memory_arn');
  }

  // memory_execution_role_arn - computed: true, optional: false, required: false
  public get memoryExecutionRoleArn() {
    return this.getStringAttribute('memory_execution_role_arn');
  }

  // memory_id - computed: true, optional: false, required: false
  public get memoryId() {
    return this.getStringAttribute('memory_id');
  }

  // memory_strategies - computed: true, optional: false, required: false
  private _memoryStrategies = new DataAwsccBedrockagentcoreMemoryMemoryStrategiesList(this, "memory_strategies", false);
  public get memoryStrategies() {
    return this._memoryStrategies;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stream_delivery_resources - computed: true, optional: false, required: false
  private _streamDeliveryResources = new DataAwsccBedrockagentcoreMemoryStreamDeliveryResourcesOutputReference(this, "stream_delivery_resources");
  public get streamDeliveryResources() {
    return this._streamDeliveryResources;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
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
