// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreMemoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Description of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}
  */
  readonly description?: string;
  /**
  * ARN format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Duration in days until memory events expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}
  */
  readonly eventExpiryDuration: number;
  /**
  * List of indexed keys for the memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#indexed_keys BedrockagentcoreMemory#indexed_keys}
  */
  readonly indexedKeys?: BedrockagentcoreMemoryIndexedKeys[] | cdktn.IResolvable;
  /**
  * ARN format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}
  */
  readonly memoryExecutionRoleArn?: string;
  /**
  * List of memory strategies attached to this memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#memory_strategies BedrockagentcoreMemory#memory_strategies}
  */
  readonly memoryStrategies?: BedrockagentcoreMemoryMemoryStrategies[] | cdktn.IResolvable;
  /**
  * Name of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#stream_delivery_resources BedrockagentcoreMemory#stream_delivery_resources}
  */
  readonly streamDeliveryResources?: BedrockagentcoreMemoryStreamDeliveryResources;
  /**
  * A map of tag keys and values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface BedrockagentcoreMemoryIndexedKeys {
  /**
  * Key name for metadata fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}
  */
  readonly key?: string;
  /**
  * Supported data types for metadata values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreMemoryIndexedKeysToTerraform(struct?: BedrockagentcoreMemoryIndexedKeys | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryIndexedKeysToHclTerraform(struct?: BedrockagentcoreMemoryIndexedKeys | cdktn.IResolvable): any {
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

export class BedrockagentcoreMemoryIndexedKeysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryIndexedKeys | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryIndexedKeys | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
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

export class BedrockagentcoreMemoryIndexedKeysList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryIndexedKeys[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryIndexedKeysOutputReference {
    return new BedrockagentcoreMemoryIndexedKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation {
  /**
  * Text prompt for model instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#append_to_prompt BedrockagentcoreMemory#append_to_prompt}
  */
  readonly appendToPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#model_id BedrockagentcoreMemory#model_id}
  */
  readonly modelId?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: true, optional: true, required: false
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  public resetAppendToPrompt() {
    this._appendToPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction {
  /**
  * Text prompt for model instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#append_to_prompt BedrockagentcoreMemory#append_to_prompt}
  */
  readonly appendToPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#model_id BedrockagentcoreMemory#model_id}
  */
  readonly modelId?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: true, optional: true, required: false
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  public resetAppendToPrompt() {
    this._appendToPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_value BedrockagentcoreMemory#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#min_value BedrockagentcoreMemory#min_value}
  */
  readonly minValue?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.numberToTerraform(struct!.maxValue),
    min_value: cdktn.numberToTerraform(struct!.minValue),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktn.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_items BedrockagentcoreMemory#max_items}
  */
  readonly maxItems?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
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
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._maxItems = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._maxItems = value.maxItems;
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

  // max_items - computed: true, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
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
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#number_validation BedrockagentcoreMemory#number_validation}
  */
  readonly numberValidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_list_validation BedrockagentcoreMemory#string_list_validation}
  */
  readonly stringListValidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_validation BedrockagentcoreMemory#string_validation}
  */
  readonly stringValidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_validation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct!.numberValidation),
    string_list_validation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct!.stringListValidation),
    string_validation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct!.stringValidation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct!.numberValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation",
    },
    string_list_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct!.stringListValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation",
    },
    string_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct!.stringValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValidation = this._numberValidation?.internalValue;
    }
    if (this._stringListValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
    }
    if (this._stringValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValidation = this._stringValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = undefined;
      this._stringListValidation.internalValue = undefined;
      this._stringValidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = value.numberValidation;
      this._stringListValidation.internalValue = value.stringListValidation;
      this._stringValidation.internalValue = value.stringValidation;
    }
  }

  // number_validation - computed: true, optional: true, required: false
  private _numberValidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }
  public putNumberValidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation) {
    this._numberValidation.internalValue = value;
  }
  public resetNumberValidation() {
    this._numberValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValidationInput() {
    return this._numberValidation.internalValue;
  }

  // string_list_validation - computed: true, optional: true, required: false
  private _stringListValidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }
  public putStringListValidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation) {
    this._stringListValidation.internalValue = value;
  }
  public resetStringListValidation() {
    this._stringListValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValidationInput() {
    return this._stringListValidation.internalValue;
  }

  // string_validation - computed: true, optional: true, required: false
  private _stringValidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
  public putStringValidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation) {
    this._stringValidation.internalValue = value;
  }
  public resetStringValidation() {
    this._stringValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValidationInput() {
    return this._stringValidation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
  /**
  * Definition for the metadata schema entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#definition BedrockagentcoreMemory#definition}
  */
  readonly definition?: string;
  /**
  * LLM extraction instruction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction BedrockagentcoreMemory#llm_extraction_instruction}
  */
  readonly llmExtractionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#validation BedrockagentcoreMemory#validation}
  */
  readonly validation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
    validation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct!.validation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_extraction_instruction: {
      value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._llmExtractionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._llmExtractionInstruction = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._llmExtractionInstruction = value.llmExtractionInstruction;
      this._validation.internalValue = value.validation;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // llm_extraction_instruction - computed: true, optional: true, required: false
  private _llmExtractionInstruction?: string; 
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }
  public set llmExtractionInstruction(value: string) {
    this._llmExtractionInstruction = value;
  }
  public resetLlmExtractionInstruction() {
    this._llmExtractionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionInstructionInput() {
    return this._llmExtractionInstruction;
  }

  // validation - computed: true, optional: true, required: false
  private _validation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_config BedrockagentcoreMemory#llm_extraction_config}
  */
  readonly llmExtractionConfig?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    llm_extraction_config: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct!.llmExtractionConfig),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    llm_extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct!.llmExtractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llmExtractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
    }
  }

  // llm_extraction_config - computed: true, optional: true, required: false
  private _llmExtractionConfig = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
  public putLlmExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig) {
    this._llmExtractionConfig.internalValue = value;
  }
  public resetLlmExtractionConfig() {
    this._llmExtractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionConfigInput() {
    return this._llmExtractionConfig.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction_config BedrockagentcoreMemory#extraction_config}
  */
  readonly extractionConfig?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig;
  /**
  * Key name for metadata fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}
  */
  readonly key?: string;
  /**
  * Supported data types for metadata values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction_config: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct!.extractionConfig),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct!.extractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = value.extractionConfig;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // extraction_config - computed: true, optional: true, required: false
  private _extractionConfig = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }
  public putExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaExtractionConfig) {
    this._extractionConfig.internalValue = value;
  }
  public resetExtractionConfig() {
    this._extractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionConfigInput() {
    return this._extractionConfig.internalValue;
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

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaOutputReference {
    return new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema {
  /**
  * List of metadata schema entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#metadata_schema BedrockagentcoreMemory#metadata_schema}
  */
  readonly metadataSchema?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_schema: cdktn.listMapper(bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaToTerraform, false)(struct!.metadataSchema),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_schema: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaToHclTerraform, false)(struct!.metadataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = value.metadataSchema;
    }
  }

  // metadata_schema - computed: true, optional: true, required: false
  private _metadataSchema = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
  public putMetadataSchema(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable) {
    this._metadataSchema.internalValue = value;
  }
  public resetMetadataSchema() {
    this._metadataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaInput() {
    return this._metadataSchema.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection {
  /**
  * Text prompt for model instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#append_to_prompt BedrockagentcoreMemory#append_to_prompt}
  */
  readonly appendToPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#memory_record_schema BedrockagentcoreMemory#memory_record_schema}
  */
  readonly memoryRecordSchema?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#model_id BedrockagentcoreMemory#model_id}
  */
  readonly modelId?: string;
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespace_templates BedrockagentcoreMemory#namespace_templates}
  */
  readonly namespaceTemplates?: string[];
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespaces BedrockagentcoreMemory#namespaces}
  */
  readonly namespaces?: string[];
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    memory_record_schema: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaToTerraform(struct!.memoryRecordSchema),
    model_id: cdktn.stringToTerraform(struct!.modelId),
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
    namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_record_schema: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaToHclTerraform(struct!.memoryRecordSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._memoryRecordSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._memoryRecordSchema.internalValue = undefined;
      this._modelId = undefined;
      this._namespaceTemplates = undefined;
      this._namespaces = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
      this._modelId = value.modelId;
      this._namespaceTemplates = value.namespaceTemplates;
      this._namespaces = value.namespaces;
    }
  }

  // append_to_prompt - computed: true, optional: true, required: false
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  public resetAppendToPrompt() {
    this._appendToPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
  }

  // memory_record_schema - computed: true, optional: true, required: false
  private _memoryRecordSchema = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }
  public putMemoryRecordSchema(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionMemoryRecordSchema) {
    this._memoryRecordSchema.internalValue = value;
  }
  public resetMemoryRecordSchema() {
    this._memoryRecordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRecordSchemaInput() {
    return this._memoryRecordSchema.internalValue;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }

  // namespace_templates - computed: true, optional: true, required: false
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  public resetNamespaceTemplates() {
    this._namespaceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#consolidation BedrockagentcoreMemory#consolidation}
  */
  readonly consolidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction BedrockagentcoreMemory#extraction}
  */
  readonly extraction?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#reflection BedrockagentcoreMemory#reflection}
  */
  readonly reflection?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consolidation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationToTerraform(struct!.consolidation),
    extraction: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionToTerraform(struct!.extraction),
    reflection: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionToTerraform(struct!.reflection),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consolidation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationToHclTerraform(struct!.consolidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation",
    },
    extraction: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionToHclTerraform(struct!.extraction),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction",
    },
    reflection: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionToHclTerraform(struct!.reflection),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consolidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidation = this._consolidation?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._reflection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reflection = this._reflection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consolidation.internalValue = undefined;
      this._extraction.internalValue = undefined;
      this._reflection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consolidation.internalValue = value.consolidation;
      this._extraction.internalValue = value.extraction;
      this._reflection.internalValue = value.reflection;
    }
  }

  // consolidation - computed: true, optional: true, required: false
  private _consolidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidationOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }
  public putConsolidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideConsolidation) {
    this._consolidation.internalValue = value;
  }
  public resetConsolidation() {
    this._consolidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationInput() {
    return this._consolidation.internalValue;
  }

  // extraction - computed: true, optional: true, required: false
  private _extraction = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideExtraction) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // reflection - computed: true, optional: true, required: false
  private _reflection = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflectionOutputReference(this, "reflection");
  public get reflection() {
    return this._reflection;
  }
  public putReflection(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideReflection) {
    this._reflection.internalValue = value;
  }
  public resetReflection() {
    this._reflection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflectionInput() {
    return this._reflection.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#payload_delivery_bucket_name BedrockagentcoreMemory#payload_delivery_bucket_name}
  */
  readonly payloadDeliveryBucketName?: string;
  /**
  * ARN format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#topic_arn BedrockagentcoreMemory#topic_arn}
  */
  readonly topicArn?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    payload_delivery_bucket_name: cdktn.stringToTerraform(struct!.payloadDeliveryBucketName),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    payload_delivery_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.payloadDeliveryBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payloadDeliveryBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadDeliveryBucketName = this._payloadDeliveryBucketName;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payloadDeliveryBucketName = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payloadDeliveryBucketName = value.payloadDeliveryBucketName;
      this._topicArn = value.topicArn;
    }
  }

  // payload_delivery_bucket_name - computed: true, optional: true, required: false
  private _payloadDeliveryBucketName?: string; 
  public get payloadDeliveryBucketName() {
    return this.getStringAttribute('payload_delivery_bucket_name');
  }
  public set payloadDeliveryBucketName(value: string) {
    this._payloadDeliveryBucketName = value;
  }
  public resetPayloadDeliveryBucketName() {
    this._payloadDeliveryBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadDeliveryBucketNameInput() {
    return this._payloadDeliveryBucketName;
  }

  // topic_arn - computed: true, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#message_count BedrockagentcoreMemory#message_count}
  */
  readonly messageCount?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_count: cdktn.numberToTerraform(struct!.messageCount),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_count: {
      value: cdktn.numberToHclTerraform(struct!.messageCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCount = this._messageCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageCount = value.messageCount;
    }
  }

  // message_count - computed: true, optional: true, required: false
  private _messageCount?: number; 
  public get messageCount() {
    return this.getNumberAttribute('message_count');
  }
  public set messageCount(value: number) {
    this._messageCount = value;
  }
  public resetMessageCount() {
    this._messageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCountInput() {
    return this._messageCount;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#idle_session_timeout BedrockagentcoreMemory#idle_session_timeout}
  */
  readonly idleSessionTimeout?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_session_timeout: cdktn.numberToTerraform(struct!.idleSessionTimeout),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.idleSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSessionTimeout = this._idleSessionTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleSessionTimeout = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleSessionTimeout = value.idleSessionTimeout;
    }
  }

  // idle_session_timeout - computed: true, optional: true, required: false
  private _idleSessionTimeout?: number; 
  public get idleSessionTimeout() {
    return this.getNumberAttribute('idle_session_timeout');
  }
  public set idleSessionTimeout(value: number) {
    this._idleSessionTimeout = value;
  }
  public resetIdleSessionTimeout() {
    this._idleSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTimeoutInput() {
    return this._idleSessionTimeout;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#token_count BedrockagentcoreMemory#token_count}
  */
  readonly tokenCount?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    token_count: cdktn.numberToTerraform(struct!.tokenCount),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    token_count: {
      value: cdktn.numberToHclTerraform(struct!.tokenCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenCount = this._tokenCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenCount = value.tokenCount;
    }
  }

  // token_count - computed: true, optional: true, required: false
  private _tokenCount?: number; 
  public get tokenCount() {
    return this.getNumberAttribute('token_count');
  }
  public set tokenCount(value: number) {
    this._tokenCount = value;
  }
  public resetTokenCount() {
    this._tokenCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCountInput() {
    return this._tokenCount;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#message_based_trigger BedrockagentcoreMemory#message_based_trigger}
  */
  readonly messageBasedTrigger?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#time_based_trigger BedrockagentcoreMemory#time_based_trigger}
  */
  readonly timeBasedTrigger?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#token_based_trigger BedrockagentcoreMemory#token_based_trigger}
  */
  readonly tokenBasedTrigger?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message_based_trigger: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToTerraform(struct!.messageBasedTrigger),
    time_based_trigger: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToTerraform(struct!.timeBasedTrigger),
    token_based_trigger: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToTerraform(struct!.tokenBasedTrigger),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message_based_trigger: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerToHclTerraform(struct!.messageBasedTrigger),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger",
    },
    time_based_trigger: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerToHclTerraform(struct!.timeBasedTrigger),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger",
    },
    token_based_trigger: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerToHclTerraform(struct!.tokenBasedTrigger),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageBasedTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBasedTrigger = this._messageBasedTrigger?.internalValue;
    }
    if (this._timeBasedTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedTrigger = this._timeBasedTrigger?.internalValue;
    }
    if (this._tokenBasedTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenBasedTrigger = this._tokenBasedTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageBasedTrigger.internalValue = undefined;
      this._timeBasedTrigger.internalValue = undefined;
      this._tokenBasedTrigger.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageBasedTrigger.internalValue = value.messageBasedTrigger;
      this._timeBasedTrigger.internalValue = value.timeBasedTrigger;
      this._tokenBasedTrigger.internalValue = value.tokenBasedTrigger;
    }
  }

  // message_based_trigger - computed: true, optional: true, required: false
  private _messageBasedTrigger = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTriggerOutputReference(this, "message_based_trigger");
  public get messageBasedTrigger() {
    return this._messageBasedTrigger;
  }
  public putMessageBasedTrigger(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsMessageBasedTrigger) {
    this._messageBasedTrigger.internalValue = value;
  }
  public resetMessageBasedTrigger() {
    this._messageBasedTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBasedTriggerInput() {
    return this._messageBasedTrigger.internalValue;
  }

  // time_based_trigger - computed: true, optional: true, required: false
  private _timeBasedTrigger = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTriggerOutputReference(this, "time_based_trigger");
  public get timeBasedTrigger() {
    return this._timeBasedTrigger;
  }
  public putTimeBasedTrigger(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTimeBasedTrigger) {
    this._timeBasedTrigger.internalValue = value;
  }
  public resetTimeBasedTrigger() {
    this._timeBasedTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedTriggerInput() {
    return this._timeBasedTrigger.internalValue;
  }

  // token_based_trigger - computed: true, optional: true, required: false
  private _tokenBasedTrigger = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTriggerOutputReference(this, "token_based_trigger");
  public get tokenBasedTrigger() {
    return this._tokenBasedTrigger;
  }
  public putTokenBasedTrigger(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsTokenBasedTrigger) {
    this._tokenBasedTrigger.internalValue = value;
  }
  public resetTokenBasedTrigger() {
    this._tokenBasedTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBasedTriggerInput() {
    return this._tokenBasedTrigger.internalValue;
  }
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsOutputReference {
    return new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#historical_context_window_size BedrockagentcoreMemory#historical_context_window_size}
  */
  readonly historicalContextWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#invocation_configuration BedrockagentcoreMemory#invocation_configuration}
  */
  readonly invocationConfiguration?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#trigger_conditions BedrockagentcoreMemory#trigger_conditions}
  */
  readonly triggerConditions?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    historical_context_window_size: cdktn.numberToTerraform(struct!.historicalContextWindowSize),
    invocation_configuration: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToTerraform(struct!.invocationConfiguration),
    trigger_conditions: cdktn.listMapper(bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToTerraform, false)(struct!.triggerConditions),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    historical_context_window_size: {
      value: cdktn.numberToHclTerraform(struct!.historicalContextWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invocation_configuration: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationToHclTerraform(struct!.invocationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration",
    },
    trigger_conditions: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsToHclTerraform, false)(struct!.triggerConditions),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._historicalContextWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.historicalContextWindowSize = this._historicalContextWindowSize;
    }
    if (this._invocationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationConfiguration = this._invocationConfiguration?.internalValue;
    }
    if (this._triggerConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerConditions = this._triggerConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._historicalContextWindowSize = undefined;
      this._invocationConfiguration.internalValue = undefined;
      this._triggerConditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._historicalContextWindowSize = value.historicalContextWindowSize;
      this._invocationConfiguration.internalValue = value.invocationConfiguration;
      this._triggerConditions.internalValue = value.triggerConditions;
    }
  }

  // historical_context_window_size - computed: true, optional: true, required: false
  private _historicalContextWindowSize?: number; 
  public get historicalContextWindowSize() {
    return this.getNumberAttribute('historical_context_window_size');
  }
  public set historicalContextWindowSize(value: number) {
    this._historicalContextWindowSize = value;
  }
  public resetHistoricalContextWindowSize() {
    this._historicalContextWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalContextWindowSizeInput() {
    return this._historicalContextWindowSize;
  }

  // invocation_configuration - computed: true, optional: true, required: false
  private _invocationConfiguration = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfigurationOutputReference(this, "invocation_configuration");
  public get invocationConfiguration() {
    return this._invocationConfiguration;
  }
  public putInvocationConfiguration(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationInvocationConfiguration) {
    this._invocationConfiguration.internalValue = value;
  }
  public resetInvocationConfiguration() {
    this._invocationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConfigurationInput() {
    return this._invocationConfiguration.internalValue;
  }

  // trigger_conditions - computed: true, optional: true, required: false
  private _triggerConditions = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditionsList(this, "trigger_conditions", false);
  public get triggerConditions() {
    return this._triggerConditions;
  }
  public putTriggerConditions(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationTriggerConditions[] | cdktn.IResolvable) {
    this._triggerConditions.internalValue = value;
  }
  public resetTriggerConditions() {
    this._triggerConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConditionsInput() {
    return this._triggerConditions.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation {
  /**
  * Text prompt for model instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#append_to_prompt BedrockagentcoreMemory#append_to_prompt}
  */
  readonly appendToPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#model_id BedrockagentcoreMemory#model_id}
  */
  readonly modelId?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: true, optional: true, required: false
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  public resetAppendToPrompt() {
    this._appendToPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction {
  /**
  * Text prompt for model instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#append_to_prompt BedrockagentcoreMemory#append_to_prompt}
  */
  readonly appendToPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#model_id BedrockagentcoreMemory#model_id}
  */
  readonly modelId?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: true, optional: true, required: false
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  public resetAppendToPrompt() {
    this._appendToPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#consolidation BedrockagentcoreMemory#consolidation}
  */
  readonly consolidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction BedrockagentcoreMemory#extraction}
  */
  readonly extraction?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consolidation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationToTerraform(struct!.consolidation),
    extraction: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionToTerraform(struct!.extraction),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consolidation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationToHclTerraform(struct!.consolidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation",
    },
    extraction: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionToHclTerraform(struct!.extraction),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consolidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidation = this._consolidation?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consolidation.internalValue = undefined;
      this._extraction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consolidation.internalValue = value.consolidation;
      this._extraction.internalValue = value.extraction;
    }
  }

  // consolidation - computed: true, optional: true, required: false
  private _consolidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidationOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }
  public putConsolidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideConsolidation) {
    this._consolidation.internalValue = value;
  }
  public resetConsolidation() {
    this._consolidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationInput() {
    return this._consolidation.internalValue;
  }

  // extraction - computed: true, optional: true, required: false
  private _extraction = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideExtraction) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation {
  /**
  * Text prompt for model instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#append_to_prompt BedrockagentcoreMemory#append_to_prompt}
  */
  readonly appendToPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#model_id BedrockagentcoreMemory#model_id}
  */
  readonly modelId?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: true, optional: true, required: false
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  public resetAppendToPrompt() {
    this._appendToPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#consolidation BedrockagentcoreMemory#consolidation}
  */
  readonly consolidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consolidation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationToTerraform(struct!.consolidation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consolidation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationToHclTerraform(struct!.consolidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consolidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidation = this._consolidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consolidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consolidation.internalValue = value.consolidation;
    }
  }

  // consolidation - computed: true, optional: true, required: false
  private _consolidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidationOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }
  public putConsolidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideConsolidation) {
    this._consolidation.internalValue = value;
  }
  public resetConsolidation() {
    this._consolidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationInput() {
    return this._consolidation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation {
  /**
  * Text prompt for model instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#append_to_prompt BedrockagentcoreMemory#append_to_prompt}
  */
  readonly appendToPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#model_id BedrockagentcoreMemory#model_id}
  */
  readonly modelId?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: true, optional: true, required: false
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  public resetAppendToPrompt() {
    this._appendToPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction {
  /**
  * Text prompt for model instructions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#append_to_prompt BedrockagentcoreMemory#append_to_prompt}
  */
  readonly appendToPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#model_id BedrockagentcoreMemory#model_id}
  */
  readonly modelId?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    append_to_prompt: cdktn.stringToTerraform(struct!.appendToPrompt),
    model_id: cdktn.stringToTerraform(struct!.modelId),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    append_to_prompt: {
      value: cdktn.stringToHclTerraform(struct!.appendToPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_id: {
      value: cdktn.stringToHclTerraform(struct!.modelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToPrompt = this._appendToPrompt;
    }
    if (this._modelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelId = this._modelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendToPrompt = undefined;
      this._modelId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendToPrompt = value.appendToPrompt;
      this._modelId = value.modelId;
    }
  }

  // append_to_prompt - computed: true, optional: true, required: false
  private _appendToPrompt?: string; 
  public get appendToPrompt() {
    return this.getStringAttribute('append_to_prompt');
  }
  public set appendToPrompt(value: string) {
    this._appendToPrompt = value;
  }
  public resetAppendToPrompt() {
    this._appendToPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToPromptInput() {
    return this._appendToPrompt;
  }

  // model_id - computed: true, optional: true, required: false
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  public resetModelId() {
    this._modelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#consolidation BedrockagentcoreMemory#consolidation}
  */
  readonly consolidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction BedrockagentcoreMemory#extraction}
  */
  readonly extraction?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    consolidation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationToTerraform(struct!.consolidation),
    extraction: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionToTerraform(struct!.extraction),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    consolidation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationToHclTerraform(struct!.consolidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation",
    },
    extraction: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionToHclTerraform(struct!.extraction),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consolidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidation = this._consolidation?.internalValue;
    }
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consolidation.internalValue = undefined;
      this._extraction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consolidation.internalValue = value.consolidation;
      this._extraction.internalValue = value.extraction;
    }
  }

  // consolidation - computed: true, optional: true, required: false
  private _consolidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidationOutputReference(this, "consolidation");
  public get consolidation() {
    return this._consolidation;
  }
  public putConsolidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideConsolidation) {
    this._consolidation.internalValue = value;
  }
  public resetConsolidation() {
    this._consolidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationInput() {
    return this._consolidation.internalValue;
  }

  // extraction - computed: true, optional: true, required: false
  private _extraction = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideExtraction) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#episodic_override BedrockagentcoreMemory#episodic_override}
  */
  readonly episodicOverride?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#self_managed_configuration BedrockagentcoreMemory#self_managed_configuration}
  */
  readonly selfManagedConfiguration?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#semantic_override BedrockagentcoreMemory#semantic_override}
  */
  readonly semanticOverride?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#summary_override BedrockagentcoreMemory#summary_override}
  */
  readonly summaryOverride?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#user_preference_override BedrockagentcoreMemory#user_preference_override}
  */
  readonly userPreferenceOverride?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    episodic_override: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideToTerraform(struct!.episodicOverride),
    self_managed_configuration: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationToTerraform(struct!.selfManagedConfiguration),
    semantic_override: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideToTerraform(struct!.semanticOverride),
    summary_override: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideToTerraform(struct!.summaryOverride),
    user_preference_override: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideToTerraform(struct!.userPreferenceOverride),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    episodic_override: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideToHclTerraform(struct!.episodicOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride",
    },
    self_managed_configuration: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationToHclTerraform(struct!.selfManagedConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration",
    },
    semantic_override: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideToHclTerraform(struct!.semanticOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride",
    },
    summary_override: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideToHclTerraform(struct!.summaryOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride",
    },
    user_preference_override: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideToHclTerraform(struct!.userPreferenceOverride),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._episodicOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.episodicOverride = this._episodicOverride?.internalValue;
    }
    if (this._selfManagedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedConfiguration = this._selfManagedConfiguration?.internalValue;
    }
    if (this._semanticOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticOverride = this._semanticOverride?.internalValue;
    }
    if (this._summaryOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOverride = this._summaryOverride?.internalValue;
    }
    if (this._userPreferenceOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPreferenceOverride = this._userPreferenceOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._episodicOverride.internalValue = undefined;
      this._selfManagedConfiguration.internalValue = undefined;
      this._semanticOverride.internalValue = undefined;
      this._summaryOverride.internalValue = undefined;
      this._userPreferenceOverride.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._episodicOverride.internalValue = value.episodicOverride;
      this._selfManagedConfiguration.internalValue = value.selfManagedConfiguration;
      this._semanticOverride.internalValue = value.semanticOverride;
      this._summaryOverride.internalValue = value.summaryOverride;
      this._userPreferenceOverride.internalValue = value.userPreferenceOverride;
    }
  }

  // episodic_override - computed: true, optional: true, required: false
  private _episodicOverride = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverrideOutputReference(this, "episodic_override");
  public get episodicOverride() {
    return this._episodicOverride;
  }
  public putEpisodicOverride(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationEpisodicOverride) {
    this._episodicOverride.internalValue = value;
  }
  public resetEpisodicOverride() {
    this._episodicOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get episodicOverrideInput() {
    return this._episodicOverride.internalValue;
  }

  // self_managed_configuration - computed: true, optional: true, required: false
  private _selfManagedConfiguration = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfigurationOutputReference(this, "self_managed_configuration");
  public get selfManagedConfiguration() {
    return this._selfManagedConfiguration;
  }
  public putSelfManagedConfiguration(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSelfManagedConfiguration) {
    this._selfManagedConfiguration.internalValue = value;
  }
  public resetSelfManagedConfiguration() {
    this._selfManagedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedConfigurationInput() {
    return this._selfManagedConfiguration.internalValue;
  }

  // semantic_override - computed: true, optional: true, required: false
  private _semanticOverride = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverrideOutputReference(this, "semantic_override");
  public get semanticOverride() {
    return this._semanticOverride;
  }
  public putSemanticOverride(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSemanticOverride) {
    this._semanticOverride.internalValue = value;
  }
  public resetSemanticOverride() {
    this._semanticOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticOverrideInput() {
    return this._semanticOverride.internalValue;
  }

  // summary_override - computed: true, optional: true, required: false
  private _summaryOverride = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverrideOutputReference(this, "summary_override");
  public get summaryOverride() {
    return this._summaryOverride;
  }
  public putSummaryOverride(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationSummaryOverride) {
    this._summaryOverride.internalValue = value;
  }
  public resetSummaryOverride() {
    this._summaryOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOverrideInput() {
    return this._summaryOverride.internalValue;
  }

  // user_preference_override - computed: true, optional: true, required: false
  private _userPreferenceOverride = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverrideOutputReference(this, "user_preference_override");
  public get userPreferenceOverride() {
    return this._userPreferenceOverride;
  }
  public putUserPreferenceOverride(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationUserPreferenceOverride) {
    this._userPreferenceOverride.internalValue = value;
  }
  public resetUserPreferenceOverride() {
    this._userPreferenceOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPreferenceOverrideInput() {
    return this._userPreferenceOverride.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_value BedrockagentcoreMemory#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#min_value BedrockagentcoreMemory#min_value}
  */
  readonly minValue?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.numberToTerraform(struct!.maxValue),
    min_value: cdktn.numberToTerraform(struct!.minValue),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktn.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_items BedrockagentcoreMemory#max_items}
  */
  readonly maxItems?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
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
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._maxItems = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._maxItems = value.maxItems;
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

  // max_items - computed: true, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
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
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#number_validation BedrockagentcoreMemory#number_validation}
  */
  readonly numberValidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_list_validation BedrockagentcoreMemory#string_list_validation}
  */
  readonly stringListValidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_validation BedrockagentcoreMemory#string_validation}
  */
  readonly stringValidation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_validation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct!.numberValidation),
    string_list_validation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct!.stringListValidation),
    string_validation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct!.stringValidation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct!.numberValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation",
    },
    string_list_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct!.stringListValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation",
    },
    string_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct!.stringValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValidation = this._numberValidation?.internalValue;
    }
    if (this._stringListValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
    }
    if (this._stringValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValidation = this._stringValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = undefined;
      this._stringListValidation.internalValue = undefined;
      this._stringValidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = value.numberValidation;
      this._stringListValidation.internalValue = value.stringListValidation;
      this._stringValidation.internalValue = value.stringValidation;
    }
  }

  // number_validation - computed: true, optional: true, required: false
  private _numberValidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }
  public putNumberValidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation) {
    this._numberValidation.internalValue = value;
  }
  public resetNumberValidation() {
    this._numberValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValidationInput() {
    return this._numberValidation.internalValue;
  }

  // string_list_validation - computed: true, optional: true, required: false
  private _stringListValidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }
  public putStringListValidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation) {
    this._stringListValidation.internalValue = value;
  }
  public resetStringListValidation() {
    this._stringListValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValidationInput() {
    return this._stringListValidation.internalValue;
  }

  // string_validation - computed: true, optional: true, required: false
  private _stringValidation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
  public putStringValidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation) {
    this._stringValidation.internalValue = value;
  }
  public resetStringValidation() {
    this._stringValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValidationInput() {
    return this._stringValidation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
  /**
  * Definition for the metadata schema entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#definition BedrockagentcoreMemory#definition}
  */
  readonly definition?: string;
  /**
  * LLM extraction instruction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction BedrockagentcoreMemory#llm_extraction_instruction}
  */
  readonly llmExtractionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#validation BedrockagentcoreMemory#validation}
  */
  readonly validation?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
    validation: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct!.validation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_extraction_instruction: {
      value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._llmExtractionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._llmExtractionInstruction = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._llmExtractionInstruction = value.llmExtractionInstruction;
      this._validation.internalValue = value.validation;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // llm_extraction_instruction - computed: true, optional: true, required: false
  private _llmExtractionInstruction?: string; 
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }
  public set llmExtractionInstruction(value: string) {
    this._llmExtractionInstruction = value;
  }
  public resetLlmExtractionInstruction() {
    this._llmExtractionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionInstructionInput() {
    return this._llmExtractionInstruction;
  }

  // validation - computed: true, optional: true, required: false
  private _validation = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_config BedrockagentcoreMemory#llm_extraction_config}
  */
  readonly llmExtractionConfig?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    llm_extraction_config: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct!.llmExtractionConfig),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    llm_extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct!.llmExtractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llmExtractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
    }
  }

  // llm_extraction_config - computed: true, optional: true, required: false
  private _llmExtractionConfig = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
  public putLlmExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig) {
    this._llmExtractionConfig.internalValue = value;
  }
  public resetLlmExtractionConfig() {
    this._llmExtractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionConfigInput() {
    return this._llmExtractionConfig.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction_config BedrockagentcoreMemory#extraction_config}
  */
  readonly extractionConfig?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig;
  /**
  * Key name for metadata fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}
  */
  readonly key?: string;
  /**
  * Supported data types for metadata values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction_config: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct!.extractionConfig),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct!.extractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = value.extractionConfig;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // extraction_config - computed: true, optional: true, required: false
  private _extractionConfig = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }
  public putExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig) {
    this._extractionConfig.internalValue = value;
  }
  public resetExtractionConfig() {
    this._extractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionConfigInput() {
    return this._extractionConfig.internalValue;
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

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema {
  /**
  * List of metadata schema entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#metadata_schema BedrockagentcoreMemory#metadata_schema}
  */
  readonly metadataSchema?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_schema: cdktn.listMapper(bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform, false)(struct!.metadataSchema),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_schema: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform, false)(struct!.metadataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = value.metadataSchema;
    }
  }

  // metadata_schema - computed: true, optional: true, required: false
  private _metadataSchema = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
  public putMetadataSchema(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable) {
    this._metadataSchema.internalValue = value;
  }
  public resetMetadataSchema() {
    this._metadataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaInput() {
    return this._metadataSchema.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#configuration BedrockagentcoreMemory#configuration}
  */
  readonly configuration?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration;
  /**
  * Creation timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#created_at BedrockagentcoreMemory#created_at}
  */
  readonly createdAt?: string;
  /**
  * Description of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#memory_record_schema BedrockagentcoreMemory#memory_record_schema}
  */
  readonly memoryRecordSchema?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema;
  /**
  * Name of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}
  */
  readonly name?: string;
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespace_templates BedrockagentcoreMemory#namespace_templates}
  */
  readonly namespaceTemplates?: string[];
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespaces BedrockagentcoreMemory#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Status of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#status BedrockagentcoreMemory#status}
  */
  readonly status?: string;
  /**
  * Unique identifier for the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#strategy_id BedrockagentcoreMemory#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * Type of memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
  /**
  * Last update timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#updated_at BedrockagentcoreMemory#updated_at}
  */
  readonly updatedAt?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationToTerraform(struct!.configuration),
    created_at: cdktn.stringToTerraform(struct!.createdAt),
    description: cdktn.stringToTerraform(struct!.description),
    memory_record_schema: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaToTerraform(struct!.memoryRecordSchema),
    name: cdktn.stringToTerraform(struct!.name),
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
    namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
    status: cdktn.stringToTerraform(struct!.status),
    strategy_id: cdktn.stringToTerraform(struct!.strategyId),
    type: cdktn.stringToTerraform(struct!.type),
    updated_at: cdktn.stringToTerraform(struct!.updatedAt),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration",
    },
    created_at: {
      value: cdktn.stringToHclTerraform(struct!.createdAt),
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
    memory_record_schema: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaToHclTerraform(struct!.memoryRecordSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_id: {
      value: cdktn.stringToHclTerraform(struct!.strategyId),
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
    updated_at: {
      value: cdktn.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._memoryRecordSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._createdAt = undefined;
      this._description = undefined;
      this._memoryRecordSchema.internalValue = undefined;
      this._name = undefined;
      this._namespaceTemplates = undefined;
      this._namespaces = undefined;
      this._status = undefined;
      this._strategyId = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._createdAt = value.createdAt;
      this._description = value.description;
      this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
      this._name = value.name;
      this._namespaceTemplates = value.namespaceTemplates;
      this._namespaces = value.namespaces;
      this._status = value.status;
      this._strategyId = value.strategyId;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // memory_record_schema - computed: true, optional: true, required: false
  private _memoryRecordSchema = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }
  public putMemoryRecordSchema(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyMemoryRecordSchema) {
    this._memoryRecordSchema.internalValue = value;
  }
  public resetMemoryRecordSchema() {
    this._memoryRecordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRecordSchemaInput() {
    return this._memoryRecordSchema.internalValue;
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

  // namespace_templates - computed: true, optional: true, required: false
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  public resetNamespaceTemplates() {
    this._namespaceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strategy_id - computed: true, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_value BedrockagentcoreMemory#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#min_value BedrockagentcoreMemory#min_value}
  */
  readonly minValue?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.numberToTerraform(struct!.maxValue),
    min_value: cdktn.numberToTerraform(struct!.minValue),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktn.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_items BedrockagentcoreMemory#max_items}
  */
  readonly maxItems?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
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
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._maxItems = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._maxItems = value.maxItems;
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

  // max_items - computed: true, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
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
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#number_validation BedrockagentcoreMemory#number_validation}
  */
  readonly numberValidation?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_list_validation BedrockagentcoreMemory#string_list_validation}
  */
  readonly stringListValidation?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_validation BedrockagentcoreMemory#string_validation}
  */
  readonly stringValidation?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_validation: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct!.numberValidation),
    string_list_validation: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct!.stringListValidation),
    string_validation: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct!.stringValidation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct!.numberValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation",
    },
    string_list_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct!.stringListValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation",
    },
    string_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct!.stringValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValidation = this._numberValidation?.internalValue;
    }
    if (this._stringListValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
    }
    if (this._stringValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValidation = this._stringValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = undefined;
      this._stringListValidation.internalValue = undefined;
      this._stringValidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = value.numberValidation;
      this._stringListValidation.internalValue = value.stringListValidation;
      this._stringValidation.internalValue = value.stringValidation;
    }
  }

  // number_validation - computed: true, optional: true, required: false
  private _numberValidation = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }
  public putNumberValidation(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation) {
    this._numberValidation.internalValue = value;
  }
  public resetNumberValidation() {
    this._numberValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValidationInput() {
    return this._numberValidation.internalValue;
  }

  // string_list_validation - computed: true, optional: true, required: false
  private _stringListValidation = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }
  public putStringListValidation(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation) {
    this._stringListValidation.internalValue = value;
  }
  public resetStringListValidation() {
    this._stringListValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValidationInput() {
    return this._stringListValidation.internalValue;
  }

  // string_validation - computed: true, optional: true, required: false
  private _stringValidation = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
  public putStringValidation(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation) {
    this._stringValidation.internalValue = value;
  }
  public resetStringValidation() {
    this._stringValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValidationInput() {
    return this._stringValidation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
  /**
  * Definition for the metadata schema entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#definition BedrockagentcoreMemory#definition}
  */
  readonly definition?: string;
  /**
  * LLM extraction instruction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction BedrockagentcoreMemory#llm_extraction_instruction}
  */
  readonly llmExtractionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#validation BedrockagentcoreMemory#validation}
  */
  readonly validation?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
    validation: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct!.validation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_extraction_instruction: {
      value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._llmExtractionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._llmExtractionInstruction = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._llmExtractionInstruction = value.llmExtractionInstruction;
      this._validation.internalValue = value.validation;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // llm_extraction_instruction - computed: true, optional: true, required: false
  private _llmExtractionInstruction?: string; 
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }
  public set llmExtractionInstruction(value: string) {
    this._llmExtractionInstruction = value;
  }
  public resetLlmExtractionInstruction() {
    this._llmExtractionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionInstructionInput() {
    return this._llmExtractionInstruction;
  }

  // validation - computed: true, optional: true, required: false
  private _validation = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_config BedrockagentcoreMemory#llm_extraction_config}
  */
  readonly llmExtractionConfig?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    llm_extraction_config: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct!.llmExtractionConfig),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    llm_extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct!.llmExtractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llmExtractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
    }
  }

  // llm_extraction_config - computed: true, optional: true, required: false
  private _llmExtractionConfig = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
  public putLlmExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig) {
    this._llmExtractionConfig.internalValue = value;
  }
  public resetLlmExtractionConfig() {
    this._llmExtractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionConfigInput() {
    return this._llmExtractionConfig.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction_config BedrockagentcoreMemory#extraction_config}
  */
  readonly extractionConfig?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig;
  /**
  * Key name for metadata fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}
  */
  readonly key?: string;
  /**
  * Supported data types for metadata values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction_config: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct!.extractionConfig),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct!.extractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = value.extractionConfig;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // extraction_config - computed: true, optional: true, required: false
  private _extractionConfig = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }
  public putExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig) {
    this._extractionConfig.internalValue = value;
  }
  public resetExtractionConfig() {
    this._extractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionConfigInput() {
    return this._extractionConfig.internalValue;
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

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema {
  /**
  * List of metadata schema entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#metadata_schema BedrockagentcoreMemory#metadata_schema}
  */
  readonly metadataSchema?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_schema: cdktn.listMapper(bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform, false)(struct!.metadataSchema),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_schema: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform, false)(struct!.metadataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = value.metadataSchema;
    }
  }

  // metadata_schema - computed: true, optional: true, required: false
  private _metadataSchema = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
  public putMetadataSchema(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable) {
    this._metadataSchema.internalValue = value;
  }
  public resetMetadataSchema() {
    this._metadataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaInput() {
    return this._metadataSchema.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_value BedrockagentcoreMemory#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#min_value BedrockagentcoreMemory#min_value}
  */
  readonly minValue?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.numberToTerraform(struct!.maxValue),
    min_value: cdktn.numberToTerraform(struct!.minValue),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktn.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_items BedrockagentcoreMemory#max_items}
  */
  readonly maxItems?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
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
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._maxItems = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._maxItems = value.maxItems;
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

  // max_items - computed: true, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
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
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#number_validation BedrockagentcoreMemory#number_validation}
  */
  readonly numberValidation?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_list_validation BedrockagentcoreMemory#string_list_validation}
  */
  readonly stringListValidation?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_validation BedrockagentcoreMemory#string_validation}
  */
  readonly stringValidation?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_validation: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct!.numberValidation),
    string_list_validation: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct!.stringListValidation),
    string_validation: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct!.stringValidation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct!.numberValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation",
    },
    string_list_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct!.stringListValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation",
    },
    string_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct!.stringValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValidation = this._numberValidation?.internalValue;
    }
    if (this._stringListValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
    }
    if (this._stringValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValidation = this._stringValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = undefined;
      this._stringListValidation.internalValue = undefined;
      this._stringValidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = value.numberValidation;
      this._stringListValidation.internalValue = value.stringListValidation;
      this._stringValidation.internalValue = value.stringValidation;
    }
  }

  // number_validation - computed: true, optional: true, required: false
  private _numberValidation = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }
  public putNumberValidation(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation) {
    this._numberValidation.internalValue = value;
  }
  public resetNumberValidation() {
    this._numberValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValidationInput() {
    return this._numberValidation.internalValue;
  }

  // string_list_validation - computed: true, optional: true, required: false
  private _stringListValidation = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }
  public putStringListValidation(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation) {
    this._stringListValidation.internalValue = value;
  }
  public resetStringListValidation() {
    this._stringListValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValidationInput() {
    return this._stringListValidation.internalValue;
  }

  // string_validation - computed: true, optional: true, required: false
  private _stringValidation = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
  public putStringValidation(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation) {
    this._stringValidation.internalValue = value;
  }
  public resetStringValidation() {
    this._stringValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValidationInput() {
    return this._stringValidation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
  /**
  * Definition for the metadata schema entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#definition BedrockagentcoreMemory#definition}
  */
  readonly definition?: string;
  /**
  * LLM extraction instruction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction BedrockagentcoreMemory#llm_extraction_instruction}
  */
  readonly llmExtractionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#validation BedrockagentcoreMemory#validation}
  */
  readonly validation?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
    validation: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct!.validation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_extraction_instruction: {
      value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._llmExtractionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._llmExtractionInstruction = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._llmExtractionInstruction = value.llmExtractionInstruction;
      this._validation.internalValue = value.validation;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // llm_extraction_instruction - computed: true, optional: true, required: false
  private _llmExtractionInstruction?: string; 
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }
  public set llmExtractionInstruction(value: string) {
    this._llmExtractionInstruction = value;
  }
  public resetLlmExtractionInstruction() {
    this._llmExtractionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionInstructionInput() {
    return this._llmExtractionInstruction;
  }

  // validation - computed: true, optional: true, required: false
  private _validation = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_config BedrockagentcoreMemory#llm_extraction_config}
  */
  readonly llmExtractionConfig?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    llm_extraction_config: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct!.llmExtractionConfig),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    llm_extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct!.llmExtractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llmExtractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
    }
  }

  // llm_extraction_config - computed: true, optional: true, required: false
  private _llmExtractionConfig = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
  public putLlmExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig) {
    this._llmExtractionConfig.internalValue = value;
  }
  public resetLlmExtractionConfig() {
    this._llmExtractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionConfigInput() {
    return this._llmExtractionConfig.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction_config BedrockagentcoreMemory#extraction_config}
  */
  readonly extractionConfig?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig;
  /**
  * Key name for metadata fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}
  */
  readonly key?: string;
  /**
  * Supported data types for metadata values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction_config: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct!.extractionConfig),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct!.extractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = value.extractionConfig;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // extraction_config - computed: true, optional: true, required: false
  private _extractionConfig = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }
  public putExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaExtractionConfig) {
    this._extractionConfig.internalValue = value;
  }
  public resetExtractionConfig() {
    this._extractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionConfigInput() {
    return this._extractionConfig.internalValue;
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

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaOutputReference {
    return new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema {
  /**
  * List of metadata schema entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#metadata_schema BedrockagentcoreMemory#metadata_schema}
  */
  readonly metadataSchema?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_schema: cdktn.listMapper(bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaToTerraform, false)(struct!.metadataSchema),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_schema: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaToHclTerraform, false)(struct!.metadataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = value.metadataSchema;
    }
  }

  // metadata_schema - computed: true, optional: true, required: false
  private _metadataSchema = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
  public putMetadataSchema(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable) {
    this._metadataSchema.internalValue = value;
  }
  public resetMetadataSchema() {
    this._metadataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaInput() {
    return this._metadataSchema.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#memory_record_schema BedrockagentcoreMemory#memory_record_schema}
  */
  readonly memoryRecordSchema?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema;
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespace_templates BedrockagentcoreMemory#namespace_templates}
  */
  readonly namespaceTemplates?: string[];
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespaces BedrockagentcoreMemory#namespaces}
  */
  readonly namespaces?: string[];
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    memory_record_schema: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaToTerraform(struct!.memoryRecordSchema),
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
    namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    memory_record_schema: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaToHclTerraform(struct!.memoryRecordSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema",
    },
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryRecordSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
    }
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memoryRecordSchema.internalValue = undefined;
      this._namespaceTemplates = undefined;
      this._namespaces = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
      this._namespaceTemplates = value.namespaceTemplates;
      this._namespaces = value.namespaces;
    }
  }

  // memory_record_schema - computed: true, optional: true, required: false
  private _memoryRecordSchema = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }
  public putMemoryRecordSchema(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationMemoryRecordSchema) {
    this._memoryRecordSchema.internalValue = value;
  }
  public resetMemoryRecordSchema() {
    this._memoryRecordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRecordSchemaInput() {
    return this._memoryRecordSchema.internalValue;
  }

  // namespace_templates - computed: true, optional: true, required: false
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  public resetNamespaceTemplates() {
    this._namespaceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy {
  /**
  * Creation timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#created_at BedrockagentcoreMemory#created_at}
  */
  readonly createdAt?: string;
  /**
  * Description of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#memory_record_schema BedrockagentcoreMemory#memory_record_schema}
  */
  readonly memoryRecordSchema?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema;
  /**
  * Name of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}
  */
  readonly name?: string;
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespace_templates BedrockagentcoreMemory#namespace_templates}
  */
  readonly namespaceTemplates?: string[];
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespaces BedrockagentcoreMemory#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#reflection_configuration BedrockagentcoreMemory#reflection_configuration}
  */
  readonly reflectionConfiguration?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration;
  /**
  * Status of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#status BedrockagentcoreMemory#status}
  */
  readonly status?: string;
  /**
  * Unique identifier for the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#strategy_id BedrockagentcoreMemory#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * Type of memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
  /**
  * Last update timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#updated_at BedrockagentcoreMemory#updated_at}
  */
  readonly updatedAt?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    created_at: cdktn.stringToTerraform(struct!.createdAt),
    description: cdktn.stringToTerraform(struct!.description),
    memory_record_schema: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaToTerraform(struct!.memoryRecordSchema),
    name: cdktn.stringToTerraform(struct!.name),
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
    namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
    reflection_configuration: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationToTerraform(struct!.reflectionConfiguration),
    status: cdktn.stringToTerraform(struct!.status),
    strategy_id: cdktn.stringToTerraform(struct!.strategyId),
    type: cdktn.stringToTerraform(struct!.type),
    updated_at: cdktn.stringToTerraform(struct!.updatedAt),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    created_at: {
      value: cdktn.stringToHclTerraform(struct!.createdAt),
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
    memory_record_schema: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaToHclTerraform(struct!.memoryRecordSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reflection_configuration: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationToHclTerraform(struct!.reflectionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_id: {
      value: cdktn.stringToHclTerraform(struct!.strategyId),
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
    updated_at: {
      value: cdktn.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._memoryRecordSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._reflectionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reflectionConfiguration = this._reflectionConfiguration?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._description = undefined;
      this._memoryRecordSchema.internalValue = undefined;
      this._name = undefined;
      this._namespaceTemplates = undefined;
      this._namespaces = undefined;
      this._reflectionConfiguration.internalValue = undefined;
      this._status = undefined;
      this._strategyId = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._description = value.description;
      this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
      this._name = value.name;
      this._namespaceTemplates = value.namespaceTemplates;
      this._namespaces = value.namespaces;
      this._reflectionConfiguration.internalValue = value.reflectionConfiguration;
      this._status = value.status;
      this._strategyId = value.strategyId;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // memory_record_schema - computed: true, optional: true, required: false
  private _memoryRecordSchema = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }
  public putMemoryRecordSchema(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyMemoryRecordSchema) {
    this._memoryRecordSchema.internalValue = value;
  }
  public resetMemoryRecordSchema() {
    this._memoryRecordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRecordSchemaInput() {
    return this._memoryRecordSchema.internalValue;
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

  // namespace_templates - computed: true, optional: true, required: false
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  public resetNamespaceTemplates() {
    this._namespaceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // reflection_configuration - computed: true, optional: true, required: false
  private _reflectionConfiguration = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfigurationOutputReference(this, "reflection_configuration");
  public get reflectionConfiguration() {
    return this._reflectionConfiguration;
  }
  public putReflectionConfiguration(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyReflectionConfiguration) {
    this._reflectionConfiguration.internalValue = value;
  }
  public resetReflectionConfiguration() {
    this._reflectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflectionConfigurationInput() {
    return this._reflectionConfiguration.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strategy_id - computed: true, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_value BedrockagentcoreMemory#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#min_value BedrockagentcoreMemory#min_value}
  */
  readonly minValue?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.numberToTerraform(struct!.maxValue),
    min_value: cdktn.numberToTerraform(struct!.minValue),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktn.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_items BedrockagentcoreMemory#max_items}
  */
  readonly maxItems?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
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
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._maxItems = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._maxItems = value.maxItems;
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

  // max_items - computed: true, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
}

export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
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
}
export interface BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#number_validation BedrockagentcoreMemory#number_validation}
  */
  readonly numberValidation?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_list_validation BedrockagentcoreMemory#string_list_validation}
  */
  readonly stringListValidation?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_validation BedrockagentcoreMemory#string_validation}
  */
  readonly stringValidation?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_validation: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct!.numberValidation),
    string_list_validation: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct!.stringListValidation),
    string_validation: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct!.stringValidation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct!.numberValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation",
    },
    string_list_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct!.stringListValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation",
    },
    string_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct!.stringValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValidation = this._numberValidation?.internalValue;
    }
    if (this._stringListValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
    }
    if (this._stringValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValidation = this._stringValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = undefined;
      this._stringListValidation.internalValue = undefined;
      this._stringValidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = value.numberValidation;
      this._stringListValidation.internalValue = value.stringListValidation;
      this._stringValidation.internalValue = value.stringValidation;
    }
  }

  // number_validation - computed: true, optional: true, required: false
  private _numberValidation = new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }
  public putNumberValidation(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation) {
    this._numberValidation.internalValue = value;
  }
  public resetNumberValidation() {
    this._numberValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValidationInput() {
    return this._numberValidation.internalValue;
  }

  // string_list_validation - computed: true, optional: true, required: false
  private _stringListValidation = new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }
  public putStringListValidation(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation) {
    this._stringListValidation.internalValue = value;
  }
  public resetStringListValidation() {
    this._stringListValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValidationInput() {
    return this._stringListValidation.internalValue;
  }

  // string_validation - computed: true, optional: true, required: false
  private _stringValidation = new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
  public putStringValidation(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation) {
    this._stringValidation.internalValue = value;
  }
  public resetStringValidation() {
    this._stringValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValidationInput() {
    return this._stringValidation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
  /**
  * Definition for the metadata schema entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#definition BedrockagentcoreMemory#definition}
  */
  readonly definition?: string;
  /**
  * LLM extraction instruction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction BedrockagentcoreMemory#llm_extraction_instruction}
  */
  readonly llmExtractionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#validation BedrockagentcoreMemory#validation}
  */
  readonly validation?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
    validation: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct!.validation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_extraction_instruction: {
      value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._llmExtractionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._llmExtractionInstruction = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._llmExtractionInstruction = value.llmExtractionInstruction;
      this._validation.internalValue = value.validation;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // llm_extraction_instruction - computed: true, optional: true, required: false
  private _llmExtractionInstruction?: string; 
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }
  public set llmExtractionInstruction(value: string) {
    this._llmExtractionInstruction = value;
  }
  public resetLlmExtractionInstruction() {
    this._llmExtractionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionInstructionInput() {
    return this._llmExtractionInstruction;
  }

  // validation - computed: true, optional: true, required: false
  private _validation = new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_config BedrockagentcoreMemory#llm_extraction_config}
  */
  readonly llmExtractionConfig?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig;
}

export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    llm_extraction_config: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct!.llmExtractionConfig),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    llm_extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct!.llmExtractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llmExtractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
    }
  }

  // llm_extraction_config - computed: true, optional: true, required: false
  private _llmExtractionConfig = new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
  public putLlmExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig) {
    this._llmExtractionConfig.internalValue = value;
  }
  public resetLlmExtractionConfig() {
    this._llmExtractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionConfigInput() {
    return this._llmExtractionConfig.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction_config BedrockagentcoreMemory#extraction_config}
  */
  readonly extractionConfig?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig;
  /**
  * Key name for metadata fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}
  */
  readonly key?: string;
  /**
  * Supported data types for metadata values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction_config: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct!.extractionConfig),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct!.extractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = value.extractionConfig;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // extraction_config - computed: true, optional: true, required: false
  private _extractionConfig = new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }
  public putExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig) {
    this._extractionConfig.internalValue = value;
  }
  public resetExtractionConfig() {
    this._extractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionConfigInput() {
    return this._extractionConfig.internalValue;
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

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema {
  /**
  * List of metadata schema entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#metadata_schema BedrockagentcoreMemory#metadata_schema}
  */
  readonly metadataSchema?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_schema: cdktn.listMapper(bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform, false)(struct!.metadataSchema),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_schema: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform, false)(struct!.metadataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = value.metadataSchema;
    }
  }

  // metadata_schema - computed: true, optional: true, required: false
  private _metadataSchema = new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
  public putMetadataSchema(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable) {
    this._metadataSchema.internalValue = value;
  }
  public resetMetadataSchema() {
    this._metadataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaInput() {
    return this._metadataSchema.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy {
  /**
  * Creation timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#created_at BedrockagentcoreMemory#created_at}
  */
  readonly createdAt?: string;
  /**
  * Description of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#memory_record_schema BedrockagentcoreMemory#memory_record_schema}
  */
  readonly memoryRecordSchema?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema;
  /**
  * Name of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}
  */
  readonly name?: string;
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespace_templates BedrockagentcoreMemory#namespace_templates}
  */
  readonly namespaceTemplates?: string[];
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespaces BedrockagentcoreMemory#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Status of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#status BedrockagentcoreMemory#status}
  */
  readonly status?: string;
  /**
  * Unique identifier for the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#strategy_id BedrockagentcoreMemory#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * Type of memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
  /**
  * Last update timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#updated_at BedrockagentcoreMemory#updated_at}
  */
  readonly updatedAt?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    created_at: cdktn.stringToTerraform(struct!.createdAt),
    description: cdktn.stringToTerraform(struct!.description),
    memory_record_schema: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaToTerraform(struct!.memoryRecordSchema),
    name: cdktn.stringToTerraform(struct!.name),
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
    namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
    status: cdktn.stringToTerraform(struct!.status),
    strategy_id: cdktn.stringToTerraform(struct!.strategyId),
    type: cdktn.stringToTerraform(struct!.type),
    updated_at: cdktn.stringToTerraform(struct!.updatedAt),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    created_at: {
      value: cdktn.stringToHclTerraform(struct!.createdAt),
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
    memory_record_schema: {
      value: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaToHclTerraform(struct!.memoryRecordSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_id: {
      value: cdktn.stringToHclTerraform(struct!.strategyId),
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
    updated_at: {
      value: cdktn.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._memoryRecordSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._description = undefined;
      this._memoryRecordSchema.internalValue = undefined;
      this._name = undefined;
      this._namespaceTemplates = undefined;
      this._namespaces = undefined;
      this._status = undefined;
      this._strategyId = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._description = value.description;
      this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
      this._name = value.name;
      this._namespaceTemplates = value.namespaceTemplates;
      this._namespaces = value.namespaces;
      this._status = value.status;
      this._strategyId = value.strategyId;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // memory_record_schema - computed: true, optional: true, required: false
  private _memoryRecordSchema = new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }
  public putMemoryRecordSchema(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyMemoryRecordSchema) {
    this._memoryRecordSchema.internalValue = value;
  }
  public resetMemoryRecordSchema() {
    this._memoryRecordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRecordSchemaInput() {
    return this._memoryRecordSchema.internalValue;
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

  // namespace_templates - computed: true, optional: true, required: false
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  public resetNamespaceTemplates() {
    this._namespaceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strategy_id - computed: true, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_value BedrockagentcoreMemory#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#min_value BedrockagentcoreMemory#min_value}
  */
  readonly minValue?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.numberToTerraform(struct!.maxValue),
    min_value: cdktn.numberToTerraform(struct!.minValue),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktn.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_items BedrockagentcoreMemory#max_items}
  */
  readonly maxItems?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
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
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._maxItems = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._maxItems = value.maxItems;
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

  // max_items - computed: true, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
}

export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
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
}
export interface BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#number_validation BedrockagentcoreMemory#number_validation}
  */
  readonly numberValidation?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_list_validation BedrockagentcoreMemory#string_list_validation}
  */
  readonly stringListValidation?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_validation BedrockagentcoreMemory#string_validation}
  */
  readonly stringValidation?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_validation: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct!.numberValidation),
    string_list_validation: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct!.stringListValidation),
    string_validation: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct!.stringValidation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct!.numberValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation",
    },
    string_list_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct!.stringListValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation",
    },
    string_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct!.stringValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValidation = this._numberValidation?.internalValue;
    }
    if (this._stringListValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
    }
    if (this._stringValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValidation = this._stringValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = undefined;
      this._stringListValidation.internalValue = undefined;
      this._stringValidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = value.numberValidation;
      this._stringListValidation.internalValue = value.stringListValidation;
      this._stringValidation.internalValue = value.stringValidation;
    }
  }

  // number_validation - computed: true, optional: true, required: false
  private _numberValidation = new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }
  public putNumberValidation(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation) {
    this._numberValidation.internalValue = value;
  }
  public resetNumberValidation() {
    this._numberValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValidationInput() {
    return this._numberValidation.internalValue;
  }

  // string_list_validation - computed: true, optional: true, required: false
  private _stringListValidation = new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }
  public putStringListValidation(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation) {
    this._stringListValidation.internalValue = value;
  }
  public resetStringListValidation() {
    this._stringListValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValidationInput() {
    return this._stringListValidation.internalValue;
  }

  // string_validation - computed: true, optional: true, required: false
  private _stringValidation = new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
  public putStringValidation(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation) {
    this._stringValidation.internalValue = value;
  }
  public resetStringValidation() {
    this._stringValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValidationInput() {
    return this._stringValidation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
  /**
  * Definition for the metadata schema entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#definition BedrockagentcoreMemory#definition}
  */
  readonly definition?: string;
  /**
  * LLM extraction instruction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction BedrockagentcoreMemory#llm_extraction_instruction}
  */
  readonly llmExtractionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#validation BedrockagentcoreMemory#validation}
  */
  readonly validation?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
    validation: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct!.validation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_extraction_instruction: {
      value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._llmExtractionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._llmExtractionInstruction = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._llmExtractionInstruction = value.llmExtractionInstruction;
      this._validation.internalValue = value.validation;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // llm_extraction_instruction - computed: true, optional: true, required: false
  private _llmExtractionInstruction?: string; 
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }
  public set llmExtractionInstruction(value: string) {
    this._llmExtractionInstruction = value;
  }
  public resetLlmExtractionInstruction() {
    this._llmExtractionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionInstructionInput() {
    return this._llmExtractionInstruction;
  }

  // validation - computed: true, optional: true, required: false
  private _validation = new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_config BedrockagentcoreMemory#llm_extraction_config}
  */
  readonly llmExtractionConfig?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig;
}

export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    llm_extraction_config: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct!.llmExtractionConfig),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    llm_extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct!.llmExtractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llmExtractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
    }
  }

  // llm_extraction_config - computed: true, optional: true, required: false
  private _llmExtractionConfig = new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
  public putLlmExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig) {
    this._llmExtractionConfig.internalValue = value;
  }
  public resetLlmExtractionConfig() {
    this._llmExtractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionConfigInput() {
    return this._llmExtractionConfig.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction_config BedrockagentcoreMemory#extraction_config}
  */
  readonly extractionConfig?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig;
  /**
  * Key name for metadata fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}
  */
  readonly key?: string;
  /**
  * Supported data types for metadata values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction_config: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct!.extractionConfig),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct!.extractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = value.extractionConfig;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // extraction_config - computed: true, optional: true, required: false
  private _extractionConfig = new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }
  public putExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig) {
    this._extractionConfig.internalValue = value;
  }
  public resetExtractionConfig() {
    this._extractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionConfigInput() {
    return this._extractionConfig.internalValue;
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

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema {
  /**
  * List of metadata schema entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#metadata_schema BedrockagentcoreMemory#metadata_schema}
  */
  readonly metadataSchema?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_schema: cdktn.listMapper(bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform, false)(struct!.metadataSchema),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_schema: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform, false)(struct!.metadataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = value.metadataSchema;
    }
  }

  // metadata_schema - computed: true, optional: true, required: false
  private _metadataSchema = new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
  public putMetadataSchema(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable) {
    this._metadataSchema.internalValue = value;
  }
  public resetMetadataSchema() {
    this._metadataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaInput() {
    return this._metadataSchema.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy {
  /**
  * Creation timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#created_at BedrockagentcoreMemory#created_at}
  */
  readonly createdAt?: string;
  /**
  * Description of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#memory_record_schema BedrockagentcoreMemory#memory_record_schema}
  */
  readonly memoryRecordSchema?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema;
  /**
  * Name of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}
  */
  readonly name?: string;
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespace_templates BedrockagentcoreMemory#namespace_templates}
  */
  readonly namespaceTemplates?: string[];
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespaces BedrockagentcoreMemory#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Status of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#status BedrockagentcoreMemory#status}
  */
  readonly status?: string;
  /**
  * Unique identifier for the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#strategy_id BedrockagentcoreMemory#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * Type of memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
  /**
  * Last update timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#updated_at BedrockagentcoreMemory#updated_at}
  */
  readonly updatedAt?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    created_at: cdktn.stringToTerraform(struct!.createdAt),
    description: cdktn.stringToTerraform(struct!.description),
    memory_record_schema: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaToTerraform(struct!.memoryRecordSchema),
    name: cdktn.stringToTerraform(struct!.name),
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
    namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
    status: cdktn.stringToTerraform(struct!.status),
    strategy_id: cdktn.stringToTerraform(struct!.strategyId),
    type: cdktn.stringToTerraform(struct!.type),
    updated_at: cdktn.stringToTerraform(struct!.updatedAt),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    created_at: {
      value: cdktn.stringToHclTerraform(struct!.createdAt),
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
    memory_record_schema: {
      value: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaToHclTerraform(struct!.memoryRecordSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_id: {
      value: cdktn.stringToHclTerraform(struct!.strategyId),
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
    updated_at: {
      value: cdktn.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._memoryRecordSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._description = undefined;
      this._memoryRecordSchema.internalValue = undefined;
      this._name = undefined;
      this._namespaceTemplates = undefined;
      this._namespaces = undefined;
      this._status = undefined;
      this._strategyId = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._description = value.description;
      this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
      this._name = value.name;
      this._namespaceTemplates = value.namespaceTemplates;
      this._namespaces = value.namespaces;
      this._status = value.status;
      this._strategyId = value.strategyId;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // memory_record_schema - computed: true, optional: true, required: false
  private _memoryRecordSchema = new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }
  public putMemoryRecordSchema(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyMemoryRecordSchema) {
    this._memoryRecordSchema.internalValue = value;
  }
  public resetMemoryRecordSchema() {
    this._memoryRecordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRecordSchemaInput() {
    return this._memoryRecordSchema.internalValue;
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

  // namespace_templates - computed: true, optional: true, required: false
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  public resetNamespaceTemplates() {
    this._namespaceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strategy_id - computed: true, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_value BedrockagentcoreMemory#max_value}
  */
  readonly maxValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#min_value BedrockagentcoreMemory#min_value}
  */
  readonly minValue?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_value: cdktn.numberToTerraform(struct!.maxValue),
    min_value: cdktn.numberToTerraform(struct!.minValue),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_value: {
      value: cdktn.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktn.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: true, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: true, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#max_items BedrockagentcoreMemory#max_items}
  */
  readonly maxItems?: number;
}

export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
    max_items: cdktn.numberToTerraform(struct!.maxItems),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable): any {
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
    max_items: {
      value: cdktn.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._maxItems = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._maxItems = value.maxItems;
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

  // max_items - computed: true, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#allowed_values BedrockagentcoreMemory#allowed_values}
  */
  readonly allowedValues?: string[];
}

export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedValues),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
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
}
export interface BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#number_validation BedrockagentcoreMemory#number_validation}
  */
  readonly numberValidation?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_list_validation BedrockagentcoreMemory#string_list_validation}
  */
  readonly stringListValidation?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#string_validation BedrockagentcoreMemory#string_validation}
  */
  readonly stringValidation?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_validation: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToTerraform(struct!.numberValidation),
    string_list_validation: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToTerraform(struct!.stringListValidation),
    string_validation: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToTerraform(struct!.stringValidation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationToHclTerraform(struct!.numberValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation",
    },
    string_list_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationToHclTerraform(struct!.stringListValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation",
    },
    string_validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationToHclTerraform(struct!.stringValidation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValidation = this._numberValidation?.internalValue;
    }
    if (this._stringListValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringListValidation = this._stringListValidation?.internalValue;
    }
    if (this._stringValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValidation = this._stringValidation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = undefined;
      this._stringListValidation.internalValue = undefined;
      this._stringValidation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValidation.internalValue = value.numberValidation;
      this._stringListValidation.internalValue = value.stringListValidation;
      this._stringValidation.internalValue = value.stringValidation;
    }
  }

  // number_validation - computed: true, optional: true, required: false
  private _numberValidation = new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidationOutputReference(this, "number_validation");
  public get numberValidation() {
    return this._numberValidation;
  }
  public putNumberValidation(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationNumberValidation) {
    this._numberValidation.internalValue = value;
  }
  public resetNumberValidation() {
    this._numberValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValidationInput() {
    return this._numberValidation.internalValue;
  }

  // string_list_validation - computed: true, optional: true, required: false
  private _stringListValidation = new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidationOutputReference(this, "string_list_validation");
  public get stringListValidation() {
    return this._stringListValidation;
  }
  public putStringListValidation(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringListValidation) {
    this._stringListValidation.internalValue = value;
  }
  public resetStringListValidation() {
    this._stringListValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListValidationInput() {
    return this._stringListValidation.internalValue;
  }

  // string_validation - computed: true, optional: true, required: false
  private _stringValidation = new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidationOutputReference(this, "string_validation");
  public get stringValidation() {
    return this._stringValidation;
  }
  public putStringValidation(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationStringValidation) {
    this._stringValidation.internalValue = value;
  }
  public resetStringValidation() {
    this._stringValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValidationInput() {
    return this._stringValidation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig {
  /**
  * Definition for the metadata schema entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#definition BedrockagentcoreMemory#definition}
  */
  readonly definition?: string;
  /**
  * LLM extraction instruction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_instruction BedrockagentcoreMemory#llm_extraction_instruction}
  */
  readonly llmExtractionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#validation BedrockagentcoreMemory#validation}
  */
  readonly validation?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation;
}

export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    definition: cdktn.stringToTerraform(struct!.definition),
    llm_extraction_instruction: cdktn.stringToTerraform(struct!.llmExtractionInstruction),
    validation: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToTerraform(struct!.validation),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    definition: {
      value: cdktn.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_extraction_instruction: {
      value: cdktn.stringToHclTerraform(struct!.llmExtractionInstruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation: {
      value: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._llmExtractionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionInstruction = this._llmExtractionInstruction;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._llmExtractionInstruction = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._llmExtractionInstruction = value.llmExtractionInstruction;
      this._validation.internalValue = value.validation;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // llm_extraction_instruction - computed: true, optional: true, required: false
  private _llmExtractionInstruction?: string; 
  public get llmExtractionInstruction() {
    return this.getStringAttribute('llm_extraction_instruction');
  }
  public set llmExtractionInstruction(value: string) {
    this._llmExtractionInstruction = value;
  }
  public resetLlmExtractionInstruction() {
    this._llmExtractionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionInstructionInput() {
    return this._llmExtractionInstruction;
  }

  // validation - computed: true, optional: true, required: false
  private _validation = new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#llm_extraction_config BedrockagentcoreMemory#llm_extraction_config}
  */
  readonly llmExtractionConfig?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig;
}

export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    llm_extraction_config: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToTerraform(struct!.llmExtractionConfig),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    llm_extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigToHclTerraform(struct!.llmExtractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llmExtractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmExtractionConfig = this._llmExtractionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llmExtractionConfig.internalValue = value.llmExtractionConfig;
    }
  }

  // llm_extraction_config - computed: true, optional: true, required: false
  private _llmExtractionConfig = new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfigOutputReference(this, "llm_extraction_config");
  public get llmExtractionConfig() {
    return this._llmExtractionConfig;
  }
  public putLlmExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigLlmExtractionConfig) {
    this._llmExtractionConfig.internalValue = value;
  }
  public resetLlmExtractionConfig() {
    this._llmExtractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmExtractionConfigInput() {
    return this._llmExtractionConfig.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#extraction_config BedrockagentcoreMemory#extraction_config}
  */
  readonly extractionConfig?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig;
  /**
  * Key name for metadata fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}
  */
  readonly key?: string;
  /**
  * Supported data types for metadata values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction_config: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToTerraform(struct!.extractionConfig),
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction_config: {
      value: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigToHclTerraform(struct!.extractionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractionConfig = this._extractionConfig?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractionConfig.internalValue = value.extractionConfig;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // extraction_config - computed: true, optional: true, required: false
  private _extractionConfig = new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfigOutputReference(this, "extraction_config");
  public get extractionConfig() {
    return this._extractionConfig;
  }
  public putExtractionConfig(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaExtractionConfig) {
    this._extractionConfig.internalValue = value;
  }
  public resetExtractionConfig() {
    this._extractionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionConfigInput() {
    return this._extractionConfig.internalValue;
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

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference {
    return new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema {
  /**
  * List of metadata schema entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#metadata_schema BedrockagentcoreMemory#metadata_schema}
  */
  readonly metadataSchema?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata_schema: cdktn.listMapper(bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaToTerraform, false)(struct!.metadataSchema),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata_schema: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaToHclTerraform, false)(struct!.metadataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSchema = this._metadataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataSchema.internalValue = value.metadataSchema;
    }
  }

  // metadata_schema - computed: true, optional: true, required: false
  private _metadataSchema = new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchemaList(this, "metadata_schema", false);
  public get metadataSchema() {
    return this._metadataSchema;
  }
  public putMetadataSchema(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaMetadataSchema[] | cdktn.IResolvable) {
    this._metadataSchema.internalValue = value;
  }
  public resetMetadataSchema() {
    this._metadataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaInput() {
    return this._metadataSchema.internalValue;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy {
  /**
  * Creation timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#created_at BedrockagentcoreMemory#created_at}
  */
  readonly createdAt?: string;
  /**
  * Description of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#memory_record_schema BedrockagentcoreMemory#memory_record_schema}
  */
  readonly memoryRecordSchema?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema;
  /**
  * Name of the Memory resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}
  */
  readonly name?: string;
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespace_templates BedrockagentcoreMemory#namespace_templates}
  */
  readonly namespaceTemplates?: string[];
  /**
  * List of namespaces for memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#namespaces BedrockagentcoreMemory#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Status of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#status BedrockagentcoreMemory#status}
  */
  readonly status?: string;
  /**
  * Unique identifier for the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#strategy_id BedrockagentcoreMemory#strategy_id}
  */
  readonly strategyId?: string;
  /**
  * Type of memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
  /**
  * Last update timestamp of the memory strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#updated_at BedrockagentcoreMemory#updated_at}
  */
  readonly updatedAt?: string;
}

export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    created_at: cdktn.stringToTerraform(struct!.createdAt),
    description: cdktn.stringToTerraform(struct!.description),
    memory_record_schema: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaToTerraform(struct!.memoryRecordSchema),
    name: cdktn.stringToTerraform(struct!.name),
    namespace_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceTemplates),
    namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
    status: cdktn.stringToTerraform(struct!.status),
    strategy_id: cdktn.stringToTerraform(struct!.strategyId),
    type: cdktn.stringToTerraform(struct!.type),
    updated_at: cdktn.stringToTerraform(struct!.updatedAt),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    created_at: {
      value: cdktn.stringToHclTerraform(struct!.createdAt),
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
    memory_record_schema: {
      value: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaToHclTerraform(struct!.memoryRecordSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_id: {
      value: cdktn.stringToHclTerraform(struct!.strategyId),
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
    updated_at: {
      value: cdktn.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._memoryRecordSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRecordSchema = this._memoryRecordSchema?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceTemplates = this._namespaceTemplates;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._strategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyId = this._strategyId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._description = undefined;
      this._memoryRecordSchema.internalValue = undefined;
      this._name = undefined;
      this._namespaceTemplates = undefined;
      this._namespaces = undefined;
      this._status = undefined;
      this._strategyId = undefined;
      this._type = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._description = value.description;
      this._memoryRecordSchema.internalValue = value.memoryRecordSchema;
      this._name = value.name;
      this._namespaceTemplates = value.namespaceTemplates;
      this._namespaces = value.namespaces;
      this._status = value.status;
      this._strategyId = value.strategyId;
      this._type = value.type;
      this._updatedAt = value.updatedAt;
    }
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // memory_record_schema - computed: true, optional: true, required: false
  private _memoryRecordSchema = new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchemaOutputReference(this, "memory_record_schema");
  public get memoryRecordSchema() {
    return this._memoryRecordSchema;
  }
  public putMemoryRecordSchema(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyMemoryRecordSchema) {
    this._memoryRecordSchema.internalValue = value;
  }
  public resetMemoryRecordSchema() {
    this._memoryRecordSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRecordSchemaInput() {
    return this._memoryRecordSchema.internalValue;
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

  // namespace_templates - computed: true, optional: true, required: false
  private _namespaceTemplates?: string[]; 
  public get namespaceTemplates() {
    return this.getListAttribute('namespace_templates');
  }
  public set namespaceTemplates(value: string[]) {
    this._namespaceTemplates = value;
  }
  public resetNamespaceTemplates() {
    this._namespaceTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTemplatesInput() {
    return this._namespaceTemplates;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strategy_id - computed: true, optional: true, required: false
  private _strategyId?: string; 
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }
  public set strategyId(value: string) {
    this._strategyId = value;
  }
  public resetStrategyId() {
    this._strategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyIdInput() {
    return this._strategyId;
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}
export interface BedrockagentcoreMemoryMemoryStrategies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#custom_memory_strategy BedrockagentcoreMemory#custom_memory_strategy}
  */
  readonly customMemoryStrategy?: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#episodic_memory_strategy BedrockagentcoreMemory#episodic_memory_strategy}
  */
  readonly episodicMemoryStrategy?: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#semantic_memory_strategy BedrockagentcoreMemory#semantic_memory_strategy}
  */
  readonly semanticMemoryStrategy?: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#summary_memory_strategy BedrockagentcoreMemory#summary_memory_strategy}
  */
  readonly summaryMemoryStrategy?: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#user_preference_memory_strategy BedrockagentcoreMemory#user_preference_memory_strategy}
  */
  readonly userPreferenceMemoryStrategy?: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy;
}

export function bedrockagentcoreMemoryMemoryStrategiesToTerraform(struct?: BedrockagentcoreMemoryMemoryStrategies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_memory_strategy: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyToTerraform(struct!.customMemoryStrategy),
    episodic_memory_strategy: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyToTerraform(struct!.episodicMemoryStrategy),
    semantic_memory_strategy: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyToTerraform(struct!.semanticMemoryStrategy),
    summary_memory_strategy: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyToTerraform(struct!.summaryMemoryStrategy),
    user_preference_memory_strategy: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyToTerraform(struct!.userPreferenceMemoryStrategy),
  }
}


export function bedrockagentcoreMemoryMemoryStrategiesToHclTerraform(struct?: BedrockagentcoreMemoryMemoryStrategies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_memory_strategy: {
      value: bedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyToHclTerraform(struct!.customMemoryStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy",
    },
    episodic_memory_strategy: {
      value: bedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyToHclTerraform(struct!.episodicMemoryStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy",
    },
    semantic_memory_strategy: {
      value: bedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyToHclTerraform(struct!.semanticMemoryStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy",
    },
    summary_memory_strategy: {
      value: bedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyToHclTerraform(struct!.summaryMemoryStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy",
    },
    user_preference_memory_strategy: {
      value: bedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyToHclTerraform(struct!.userPreferenceMemoryStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryMemoryStrategiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryMemoryStrategies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMemoryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMemoryStrategy = this._customMemoryStrategy?.internalValue;
    }
    if (this._episodicMemoryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.episodicMemoryStrategy = this._episodicMemoryStrategy?.internalValue;
    }
    if (this._semanticMemoryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticMemoryStrategy = this._semanticMemoryStrategy?.internalValue;
    }
    if (this._summaryMemoryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryMemoryStrategy = this._summaryMemoryStrategy?.internalValue;
    }
    if (this._userPreferenceMemoryStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPreferenceMemoryStrategy = this._userPreferenceMemoryStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryMemoryStrategies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMemoryStrategy.internalValue = undefined;
      this._episodicMemoryStrategy.internalValue = undefined;
      this._semanticMemoryStrategy.internalValue = undefined;
      this._summaryMemoryStrategy.internalValue = undefined;
      this._userPreferenceMemoryStrategy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMemoryStrategy.internalValue = value.customMemoryStrategy;
      this._episodicMemoryStrategy.internalValue = value.episodicMemoryStrategy;
      this._semanticMemoryStrategy.internalValue = value.semanticMemoryStrategy;
      this._summaryMemoryStrategy.internalValue = value.summaryMemoryStrategy;
      this._userPreferenceMemoryStrategy.internalValue = value.userPreferenceMemoryStrategy;
    }
  }

  // custom_memory_strategy - computed: true, optional: true, required: false
  private _customMemoryStrategy = new BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategyOutputReference(this, "custom_memory_strategy");
  public get customMemoryStrategy() {
    return this._customMemoryStrategy;
  }
  public putCustomMemoryStrategy(value: BedrockagentcoreMemoryMemoryStrategiesCustomMemoryStrategy) {
    this._customMemoryStrategy.internalValue = value;
  }
  public resetCustomMemoryStrategy() {
    this._customMemoryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMemoryStrategyInput() {
    return this._customMemoryStrategy.internalValue;
  }

  // episodic_memory_strategy - computed: true, optional: true, required: false
  private _episodicMemoryStrategy = new BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategyOutputReference(this, "episodic_memory_strategy");
  public get episodicMemoryStrategy() {
    return this._episodicMemoryStrategy;
  }
  public putEpisodicMemoryStrategy(value: BedrockagentcoreMemoryMemoryStrategiesEpisodicMemoryStrategy) {
    this._episodicMemoryStrategy.internalValue = value;
  }
  public resetEpisodicMemoryStrategy() {
    this._episodicMemoryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get episodicMemoryStrategyInput() {
    return this._episodicMemoryStrategy.internalValue;
  }

  // semantic_memory_strategy - computed: true, optional: true, required: false
  private _semanticMemoryStrategy = new BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategyOutputReference(this, "semantic_memory_strategy");
  public get semanticMemoryStrategy() {
    return this._semanticMemoryStrategy;
  }
  public putSemanticMemoryStrategy(value: BedrockagentcoreMemoryMemoryStrategiesSemanticMemoryStrategy) {
    this._semanticMemoryStrategy.internalValue = value;
  }
  public resetSemanticMemoryStrategy() {
    this._semanticMemoryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticMemoryStrategyInput() {
    return this._semanticMemoryStrategy.internalValue;
  }

  // summary_memory_strategy - computed: true, optional: true, required: false
  private _summaryMemoryStrategy = new BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategyOutputReference(this, "summary_memory_strategy");
  public get summaryMemoryStrategy() {
    return this._summaryMemoryStrategy;
  }
  public putSummaryMemoryStrategy(value: BedrockagentcoreMemoryMemoryStrategiesSummaryMemoryStrategy) {
    this._summaryMemoryStrategy.internalValue = value;
  }
  public resetSummaryMemoryStrategy() {
    this._summaryMemoryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryMemoryStrategyInput() {
    return this._summaryMemoryStrategy.internalValue;
  }

  // user_preference_memory_strategy - computed: true, optional: true, required: false
  private _userPreferenceMemoryStrategy = new BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategyOutputReference(this, "user_preference_memory_strategy");
  public get userPreferenceMemoryStrategy() {
    return this._userPreferenceMemoryStrategy;
  }
  public putUserPreferenceMemoryStrategy(value: BedrockagentcoreMemoryMemoryStrategiesUserPreferenceMemoryStrategy) {
    this._userPreferenceMemoryStrategy.internalValue = value;
  }
  public resetUserPreferenceMemoryStrategy() {
    this._userPreferenceMemoryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPreferenceMemoryStrategyInput() {
    return this._userPreferenceMemoryStrategy.internalValue;
  }
}

export class BedrockagentcoreMemoryMemoryStrategiesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryMemoryStrategies[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryMemoryStrategiesOutputReference {
    return new BedrockagentcoreMemoryMemoryStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations {
  /**
  * The level of content detail to deliver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#level BedrockagentcoreMemory#level}
  */
  readonly level?: string;
  /**
  * The type of content to deliver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type?: string;
}

export function bedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsToTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    level: cdktn.stringToTerraform(struct!.level),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsToHclTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    level: {
      value: cdktn.stringToHclTerraform(struct!.level),
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

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._type = value.type;
    }
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsOutputReference {
    return new BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#content_configurations BedrockagentcoreMemory#content_configurations}
  */
  readonly contentConfigurations?: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations[] | cdktn.IResolvable;
  /**
  * ARN format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#data_stream_arn BedrockagentcoreMemory#data_stream_arn}
  */
  readonly dataStreamArn?: string;
}

export function bedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisToTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_configurations: cdktn.listMapper(bedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsToTerraform, false)(struct!.contentConfigurations),
    data_stream_arn: cdktn.stringToTerraform(struct!.dataStreamArn),
  }
}


export function bedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisToHclTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_configurations: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsToHclTerraform, false)(struct!.contentConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsList",
    },
    data_stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentConfigurations = this._contentConfigurations?.internalValue;
    }
    if (this._dataStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStreamArn = this._dataStreamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentConfigurations.internalValue = undefined;
      this._dataStreamArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentConfigurations.internalValue = value.contentConfigurations;
      this._dataStreamArn = value.dataStreamArn;
    }
  }

  // content_configurations - computed: true, optional: true, required: false
  private _contentConfigurations = new BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurationsList(this, "content_configurations", false);
  public get contentConfigurations() {
    return this._contentConfigurations;
  }
  public putContentConfigurations(value: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisContentConfigurations[] | cdktn.IResolvable) {
    this._contentConfigurations.internalValue = value;
  }
  public resetContentConfigurations() {
    this._contentConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigurationsInput() {
    return this._contentConfigurations.internalValue;
  }

  // data_stream_arn - computed: true, optional: true, required: false
  private _dataStreamArn?: string; 
  public get dataStreamArn() {
    return this.getStringAttribute('data_stream_arn');
  }
  public set dataStreamArn(value: string) {
    this._dataStreamArn = value;
  }
  public resetDataStreamArn() {
    this._dataStreamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamArnInput() {
    return this._dataStreamArn;
  }
}
export interface BedrockagentcoreMemoryStreamDeliveryResourcesResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#kinesis BedrockagentcoreMemory#kinesis}
  */
  readonly kinesis?: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis;
}

export function bedrockagentcoreMemoryStreamDeliveryResourcesResourcesToTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kinesis: bedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisToTerraform(struct!.kinesis),
  }
}


export function bedrockagentcoreMemoryStreamDeliveryResourcesResourcesToHclTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kinesis: {
      value: bedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisToHclTerraform(struct!.kinesis),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStreamDeliveryResourcesResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesis = this._kinesis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStreamDeliveryResourcesResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinesis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinesis.internalValue = value.kinesis;
    }
  }

  // kinesis - computed: true, optional: true, required: false
  private _kinesis = new BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: BedrockagentcoreMemoryStreamDeliveryResourcesResourcesKinesis) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourcesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStreamDeliveryResourcesResources[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStreamDeliveryResourcesResourcesOutputReference {
    return new BedrockagentcoreMemoryStreamDeliveryResourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStreamDeliveryResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#resources BedrockagentcoreMemory#resources}
  */
  readonly resources?: BedrockagentcoreMemoryStreamDeliveryResourcesResources[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStreamDeliveryResourcesToTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resources: cdktn.listMapper(bedrockagentcoreMemoryStreamDeliveryResourcesResourcesToTerraform, false)(struct!.resources),
  }
}


export function bedrockagentcoreMemoryStreamDeliveryResourcesToHclTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resources: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStreamDeliveryResourcesResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStreamDeliveryResourcesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryStreamDeliveryResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStreamDeliveryResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new BedrockagentcoreMemoryStreamDeliveryResourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: BedrockagentcoreMemoryStreamDeliveryResourcesResources[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory awscc_bedrockagentcore_memory}
*/
export class BedrockagentcoreMemory extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_memory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreMemory resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreMemory to import
  * @param importFromId The id of the existing BedrockagentcoreMemory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreMemory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_memory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrockagentcore_memory awscc_bedrockagentcore_memory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreMemoryConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreMemoryConfig) {
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
    this._description = config.description;
    this._encryptionKeyArn = config.encryptionKeyArn;
    this._eventExpiryDuration = config.eventExpiryDuration;
    this._indexedKeys.internalValue = config.indexedKeys;
    this._memoryExecutionRoleArn = config.memoryExecutionRoleArn;
    this._memoryStrategies.internalValue = config.memoryStrategies;
    this._name = config.name;
    this._streamDeliveryResources.internalValue = config.streamDeliveryResources;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // encryption_key_arn - computed: true, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }

  // event_expiry_duration - computed: false, optional: false, required: true
  private _eventExpiryDuration?: number; 
  public get eventExpiryDuration() {
    return this.getNumberAttribute('event_expiry_duration');
  }
  public set eventExpiryDuration(value: number) {
    this._eventExpiryDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventExpiryDurationInput() {
    return this._eventExpiryDuration;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // indexed_keys - computed: true, optional: true, required: false
  private _indexedKeys = new BedrockagentcoreMemoryIndexedKeysList(this, "indexed_keys", false);
  public get indexedKeys() {
    return this._indexedKeys;
  }
  public putIndexedKeys(value: BedrockagentcoreMemoryIndexedKeys[] | cdktn.IResolvable) {
    this._indexedKeys.internalValue = value;
  }
  public resetIndexedKeys() {
    this._indexedKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedKeysInput() {
    return this._indexedKeys.internalValue;
  }

  // memory_arn - computed: true, optional: false, required: false
  public get memoryArn() {
    return this.getStringAttribute('memory_arn');
  }

  // memory_execution_role_arn - computed: true, optional: true, required: false
  private _memoryExecutionRoleArn?: string; 
  public get memoryExecutionRoleArn() {
    return this.getStringAttribute('memory_execution_role_arn');
  }
  public set memoryExecutionRoleArn(value: string) {
    this._memoryExecutionRoleArn = value;
  }
  public resetMemoryExecutionRoleArn() {
    this._memoryExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryExecutionRoleArnInput() {
    return this._memoryExecutionRoleArn;
  }

  // memory_id - computed: true, optional: false, required: false
  public get memoryId() {
    return this.getStringAttribute('memory_id');
  }

  // memory_strategies - computed: true, optional: true, required: false
  private _memoryStrategies = new BedrockagentcoreMemoryMemoryStrategiesList(this, "memory_strategies", false);
  public get memoryStrategies() {
    return this._memoryStrategies;
  }
  public putMemoryStrategies(value: BedrockagentcoreMemoryMemoryStrategies[] | cdktn.IResolvable) {
    this._memoryStrategies.internalValue = value;
  }
  public resetMemoryStrategies() {
    this._memoryStrategies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStrategiesInput() {
    return this._memoryStrategies.internalValue;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stream_delivery_resources - computed: true, optional: true, required: false
  private _streamDeliveryResources = new BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference(this, "stream_delivery_resources");
  public get streamDeliveryResources() {
    return this._streamDeliveryResources;
  }
  public putStreamDeliveryResources(value: BedrockagentcoreMemoryStreamDeliveryResources) {
    this._streamDeliveryResources.internalValue = value;
  }
  public resetStreamDeliveryResources() {
    this._streamDeliveryResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamDeliveryResourcesInput() {
    return this._streamDeliveryResources.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
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
      description: cdktn.stringToTerraform(this._description),
      encryption_key_arn: cdktn.stringToTerraform(this._encryptionKeyArn),
      event_expiry_duration: cdktn.numberToTerraform(this._eventExpiryDuration),
      indexed_keys: cdktn.listMapper(bedrockagentcoreMemoryIndexedKeysToTerraform, false)(this._indexedKeys.internalValue),
      memory_execution_role_arn: cdktn.stringToTerraform(this._memoryExecutionRoleArn),
      memory_strategies: cdktn.listMapper(bedrockagentcoreMemoryMemoryStrategiesToTerraform, false)(this._memoryStrategies.internalValue),
      name: cdktn.stringToTerraform(this._name),
      stream_delivery_resources: bedrockagentcoreMemoryStreamDeliveryResourcesToTerraform(this._streamDeliveryResources.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
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
      encryption_key_arn: {
        value: cdktn.stringToHclTerraform(this._encryptionKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_expiry_duration: {
        value: cdktn.numberToHclTerraform(this._eventExpiryDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indexed_keys: {
        value: cdktn.listMapperHcl(bedrockagentcoreMemoryIndexedKeysToHclTerraform, false)(this._indexedKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreMemoryIndexedKeysList",
      },
      memory_execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._memoryExecutionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_strategies: {
        value: cdktn.listMapperHcl(bedrockagentcoreMemoryMemoryStrategiesToHclTerraform, false)(this._memoryStrategies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreMemoryMemoryStrategiesList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_delivery_resources: {
        value: bedrockagentcoreMemoryStreamDeliveryResourcesToHclTerraform(this._streamDeliveryResources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreMemoryStreamDeliveryResources",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
