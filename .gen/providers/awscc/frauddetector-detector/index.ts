// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FrauddetectorDetectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The models to associate with this detector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#associated_models FrauddetectorDetector#associated_models}
  */
  readonly associatedModels?: FrauddetectorDetectorAssociatedModels[] | cdktn.IResolvable;
  /**
  * The description of the detector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * The ID of the detector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}
  */
  readonly detectorId: string;
  /**
  * The desired detector version status for the detector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#detector_version_status FrauddetectorDetector#detector_version_status}
  */
  readonly detectorVersionStatus?: string;
  /**
  * The event type to associate this detector with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#event_type FrauddetectorDetector#event_type}
  */
  readonly eventType: FrauddetectorDetectorEventType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}
  */
  readonly ruleExecutionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}
  */
  readonly rules: FrauddetectorDetectorRules[] | cdktn.IResolvable;
  /**
  * Tags associated with this detector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorTags[] | cdktn.IResolvable;
}
export interface FrauddetectorDetectorAssociatedModels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
}

export function frauddetectorDetectorAssociatedModelsToTerraform(struct?: FrauddetectorDetectorAssociatedModels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function frauddetectorDetectorAssociatedModelsToHclTerraform(struct?: FrauddetectorDetectorAssociatedModels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrauddetectorDetectorAssociatedModelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorAssociatedModels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrauddetectorDetectorAssociatedModels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}

export class FrauddetectorDetectorAssociatedModelsList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorAssociatedModels[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorAssociatedModelsOutputReference {
    return new FrauddetectorDetectorAssociatedModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorEventTypeEntityTypesTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}
  */
  readonly value?: string;
}

export function frauddetectorDetectorEventTypeEntityTypesTagsToTerraform(struct?: FrauddetectorDetectorEventTypeEntityTypesTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function frauddetectorDetectorEventTypeEntityTypesTagsToHclTerraform(struct?: FrauddetectorDetectorEventTypeEntityTypesTags | cdktn.IResolvable): any {
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

export class FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorEventTypeEntityTypesTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FrauddetectorDetectorEventTypeEntityTypesTags | cdktn.IResolvable | undefined) {
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

export class FrauddetectorDetectorEventTypeEntityTypesTagsList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorEventTypeEntityTypesTags[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference {
    return new FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorEventTypeEntityTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the entity type was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktn.IResolvable;
  /**
  * The time when the entity type was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this entity type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorEventTypeEntityTypesTags[] | cdktn.IResolvable;
}

export function frauddetectorDetectorEventTypeEntityTypesToTerraform(struct?: FrauddetectorDetectorEventTypeEntityTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    created_time: cdktn.stringToTerraform(struct!.createdTime),
    description: cdktn.stringToTerraform(struct!.description),
    inline: cdktn.booleanToTerraform(struct!.inline),
    last_updated_time: cdktn.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktn.stringToTerraform(struct!.name),
    tags: cdktn.listMapper(frauddetectorDetectorEventTypeEntityTypesTagsToTerraform, false)(struct!.tags),
  }
}


export function frauddetectorDetectorEventTypeEntityTypesToHclTerraform(struct?: FrauddetectorDetectorEventTypeEntityTypes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_time: {
      value: cdktn.stringToHclTerraform(struct!.createdTime),
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
    inline: {
      value: cdktn.booleanToHclTerraform(struct!.inline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_updated_time: {
      value: cdktn.stringToHclTerraform(struct!.lastUpdatedTime),
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
    tags: {
      value: cdktn.listMapperHcl(frauddetectorDetectorEventTypeEntityTypesTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorEventTypeEntityTypesTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrauddetectorDetectorEventTypeEntityTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorEventTypeEntityTypes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._createdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdTime = this._createdTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inline !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline;
    }
    if (this._lastUpdatedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdatedTime = this._lastUpdatedTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrauddetectorDetectorEventTypeEntityTypes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._createdTime = undefined;
      this._description = undefined;
      this._inline = undefined;
      this._lastUpdatedTime = undefined;
      this._name = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._createdTime = value.createdTime;
      this._description = value.description;
      this._inline = value.inline;
      this._lastUpdatedTime = value.lastUpdatedTime;
      this._name = value.name;
      this._tags.internalValue = value.tags;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // created_time - computed: true, optional: true, required: false
  private _createdTime?: string;
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }
  public set createdTime(value: string) {
    this._createdTime = value;
  }
  public resetCreatedTime() {
    this._createdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimeInput() {
    return this._createdTime;
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

  // inline - computed: true, optional: true, required: false
  private _inline?: boolean | cdktn.IResolvable;
  public get inline() {
    return this.getBooleanAttribute('inline');
  }
  public set inline(value: boolean | cdktn.IResolvable) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // last_updated_time - computed: true, optional: true, required: false
  private _lastUpdatedTime?: string;
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }
  public set lastUpdatedTime(value: string) {
    this._lastUpdatedTime = value;
  }
  public resetLastUpdatedTime() {
    this._lastUpdatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedTimeInput() {
    return this._lastUpdatedTime;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new FrauddetectorDetectorEventTypeEntityTypesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FrauddetectorDetectorEventTypeEntityTypesTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FrauddetectorDetectorEventTypeEntityTypesList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorEventTypeEntityTypes[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorEventTypeEntityTypesOutputReference {
    return new FrauddetectorDetectorEventTypeEntityTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorEventTypeEventVariablesTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}
  */
  readonly value?: string;
}

export function frauddetectorDetectorEventTypeEventVariablesTagsToTerraform(struct?: FrauddetectorDetectorEventTypeEventVariablesTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function frauddetectorDetectorEventTypeEventVariablesTagsToHclTerraform(struct?: FrauddetectorDetectorEventTypeEventVariablesTags | cdktn.IResolvable): any {
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

export class FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorEventTypeEventVariablesTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FrauddetectorDetectorEventTypeEventVariablesTags | cdktn.IResolvable | undefined) {
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

export class FrauddetectorDetectorEventTypeEventVariablesTagsList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorEventTypeEventVariablesTags[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference {
    return new FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorEventTypeEventVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the event variable was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#data_source FrauddetectorDetector#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#data_type FrauddetectorDetector#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#default_value FrauddetectorDetector#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktn.IResolvable;
  /**
  * The time when the event variable was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this event variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorEventTypeEventVariablesTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#variable_type FrauddetectorDetector#variable_type}
  */
  readonly variableType?: string;
}

export function frauddetectorDetectorEventTypeEventVariablesToTerraform(struct?: FrauddetectorDetectorEventTypeEventVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    created_time: cdktn.stringToTerraform(struct!.createdTime),
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    data_type: cdktn.stringToTerraform(struct!.dataType),
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    inline: cdktn.booleanToTerraform(struct!.inline),
    last_updated_time: cdktn.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktn.stringToTerraform(struct!.name),
    tags: cdktn.listMapper(frauddetectorDetectorEventTypeEventVariablesTagsToTerraform, false)(struct!.tags),
    variable_type: cdktn.stringToTerraform(struct!.variableType),
  }
}


export function frauddetectorDetectorEventTypeEventVariablesToHclTerraform(struct?: FrauddetectorDetectorEventTypeEventVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_time: {
      value: cdktn.stringToHclTerraform(struct!.createdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: cdktn.stringToHclTerraform(struct!.dataSource),
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
    inline: {
      value: cdktn.booleanToHclTerraform(struct!.inline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_updated_time: {
      value: cdktn.stringToHclTerraform(struct!.lastUpdatedTime),
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
    tags: {
      value: cdktn.listMapperHcl(frauddetectorDetectorEventTypeEventVariablesTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorEventTypeEventVariablesTagsList",
    },
    variable_type: {
      value: cdktn.stringToHclTerraform(struct!.variableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrauddetectorDetectorEventTypeEventVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorEventTypeEventVariables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._createdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdTime = this._createdTime;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
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
    if (this._inline !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline;
    }
    if (this._lastUpdatedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdatedTime = this._lastUpdatedTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._variableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableType = this._variableType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrauddetectorDetectorEventTypeEventVariables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._createdTime = undefined;
      this._dataSource = undefined;
      this._dataType = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._inline = undefined;
      this._lastUpdatedTime = undefined;
      this._name = undefined;
      this._tags.internalValue = undefined;
      this._variableType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._createdTime = value.createdTime;
      this._dataSource = value.dataSource;
      this._dataType = value.dataType;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._inline = value.inline;
      this._lastUpdatedTime = value.lastUpdatedTime;
      this._name = value.name;
      this._tags.internalValue = value.tags;
      this._variableType = value.variableType;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // created_time - computed: true, optional: true, required: false
  private _createdTime?: string;
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }
  public set createdTime(value: string) {
    this._createdTime = value;
  }
  public resetCreatedTime() {
    this._createdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimeInput() {
    return this._createdTime;
  }

  // data_source - computed: true, optional: true, required: false
  private _dataSource?: string;
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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

  // inline - computed: true, optional: true, required: false
  private _inline?: boolean | cdktn.IResolvable;
  public get inline() {
    return this.getBooleanAttribute('inline');
  }
  public set inline(value: boolean | cdktn.IResolvable) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // last_updated_time - computed: true, optional: true, required: false
  private _lastUpdatedTime?: string;
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }
  public set lastUpdatedTime(value: string) {
    this._lastUpdatedTime = value;
  }
  public resetLastUpdatedTime() {
    this._lastUpdatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedTimeInput() {
    return this._lastUpdatedTime;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new FrauddetectorDetectorEventTypeEventVariablesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FrauddetectorDetectorEventTypeEventVariablesTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // variable_type - computed: true, optional: true, required: false
  private _variableType?: string;
  public get variableType() {
    return this.getStringAttribute('variable_type');
  }
  public set variableType(value: string) {
    this._variableType = value;
  }
  public resetVariableType() {
    this._variableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableTypeInput() {
    return this._variableType;
  }
}

export class FrauddetectorDetectorEventTypeEventVariablesList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorEventTypeEventVariables[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorEventTypeEventVariablesOutputReference {
    return new FrauddetectorDetectorEventTypeEventVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorEventTypeLabelsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}
  */
  readonly value?: string;
}

export function frauddetectorDetectorEventTypeLabelsTagsToTerraform(struct?: FrauddetectorDetectorEventTypeLabelsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function frauddetectorDetectorEventTypeLabelsTagsToHclTerraform(struct?: FrauddetectorDetectorEventTypeLabelsTags | cdktn.IResolvable): any {
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

export class FrauddetectorDetectorEventTypeLabelsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorEventTypeLabelsTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FrauddetectorDetectorEventTypeLabelsTags | cdktn.IResolvable | undefined) {
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

export class FrauddetectorDetectorEventTypeLabelsTagsList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorEventTypeLabelsTags[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorEventTypeLabelsTagsOutputReference {
    return new FrauddetectorDetectorEventTypeLabelsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorEventTypeLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the label was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktn.IResolvable;
  /**
  * The time when the label was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorEventTypeLabelsTags[] | cdktn.IResolvable;
}

export function frauddetectorDetectorEventTypeLabelsToTerraform(struct?: FrauddetectorDetectorEventTypeLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    created_time: cdktn.stringToTerraform(struct!.createdTime),
    description: cdktn.stringToTerraform(struct!.description),
    inline: cdktn.booleanToTerraform(struct!.inline),
    last_updated_time: cdktn.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktn.stringToTerraform(struct!.name),
    tags: cdktn.listMapper(frauddetectorDetectorEventTypeLabelsTagsToTerraform, false)(struct!.tags),
  }
}


export function frauddetectorDetectorEventTypeLabelsToHclTerraform(struct?: FrauddetectorDetectorEventTypeLabels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_time: {
      value: cdktn.stringToHclTerraform(struct!.createdTime),
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
    inline: {
      value: cdktn.booleanToHclTerraform(struct!.inline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_updated_time: {
      value: cdktn.stringToHclTerraform(struct!.lastUpdatedTime),
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
    tags: {
      value: cdktn.listMapperHcl(frauddetectorDetectorEventTypeLabelsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorEventTypeLabelsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrauddetectorDetectorEventTypeLabelsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorEventTypeLabels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._createdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdTime = this._createdTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inline !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline;
    }
    if (this._lastUpdatedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdatedTime = this._lastUpdatedTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrauddetectorDetectorEventTypeLabels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._createdTime = undefined;
      this._description = undefined;
      this._inline = undefined;
      this._lastUpdatedTime = undefined;
      this._name = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._createdTime = value.createdTime;
      this._description = value.description;
      this._inline = value.inline;
      this._lastUpdatedTime = value.lastUpdatedTime;
      this._name = value.name;
      this._tags.internalValue = value.tags;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // created_time - computed: true, optional: true, required: false
  private _createdTime?: string;
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }
  public set createdTime(value: string) {
    this._createdTime = value;
  }
  public resetCreatedTime() {
    this._createdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimeInput() {
    return this._createdTime;
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

  // inline - computed: true, optional: true, required: false
  private _inline?: boolean | cdktn.IResolvable;
  public get inline() {
    return this.getBooleanAttribute('inline');
  }
  public set inline(value: boolean | cdktn.IResolvable) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // last_updated_time - computed: true, optional: true, required: false
  private _lastUpdatedTime?: string;
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }
  public set lastUpdatedTime(value: string) {
    this._lastUpdatedTime = value;
  }
  public resetLastUpdatedTime() {
    this._lastUpdatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedTimeInput() {
    return this._lastUpdatedTime;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new FrauddetectorDetectorEventTypeLabelsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FrauddetectorDetectorEventTypeLabelsTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FrauddetectorDetectorEventTypeLabelsList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorEventTypeLabels[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorEventTypeLabelsOutputReference {
    return new FrauddetectorDetectorEventTypeLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorEventTypeTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}
  */
  readonly value?: string;
}

export function frauddetectorDetectorEventTypeTagsToTerraform(struct?: FrauddetectorDetectorEventTypeTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function frauddetectorDetectorEventTypeTagsToHclTerraform(struct?: FrauddetectorDetectorEventTypeTags | cdktn.IResolvable): any {
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

export class FrauddetectorDetectorEventTypeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorEventTypeTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FrauddetectorDetectorEventTypeTags | cdktn.IResolvable | undefined) {
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

export class FrauddetectorDetectorEventTypeTagsList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorEventTypeTags[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorEventTypeTagsOutputReference {
    return new FrauddetectorDetectorEventTypeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorEventType {
  /**
  * The description of the event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#entity_types FrauddetectorDetector#entity_types}
  */
  readonly entityTypes?: FrauddetectorDetectorEventTypeEntityTypes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#event_variables FrauddetectorDetector#event_variables}
  */
  readonly eventVariables?: FrauddetectorDetectorEventTypeEventVariables[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#labels FrauddetectorDetector#labels}
  */
  readonly labels?: FrauddetectorDetectorEventTypeLabels[] | cdktn.IResolvable;
  /**
  * The name for the event type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorEventTypeTags[] | cdktn.IResolvable;
}

export function frauddetectorDetectorEventTypeToTerraform(struct?: FrauddetectorDetectorEventType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    entity_types: cdktn.listMapper(frauddetectorDetectorEventTypeEntityTypesToTerraform, false)(struct!.entityTypes),
    event_variables: cdktn.listMapper(frauddetectorDetectorEventTypeEventVariablesToTerraform, false)(struct!.eventVariables),
    inline: cdktn.booleanToTerraform(struct!.inline),
    labels: cdktn.listMapper(frauddetectorDetectorEventTypeLabelsToTerraform, false)(struct!.labels),
    name: cdktn.stringToTerraform(struct!.name),
    tags: cdktn.listMapper(frauddetectorDetectorEventTypeTagsToTerraform, false)(struct!.tags),
  }
}


export function frauddetectorDetectorEventTypeToHclTerraform(struct?: FrauddetectorDetectorEventType | cdktn.IResolvable): any {
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
    entity_types: {
      value: cdktn.listMapperHcl(frauddetectorDetectorEventTypeEntityTypesToHclTerraform, false)(struct!.entityTypes),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorEventTypeEntityTypesList",
    },
    event_variables: {
      value: cdktn.listMapperHcl(frauddetectorDetectorEventTypeEventVariablesToHclTerraform, false)(struct!.eventVariables),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorEventTypeEventVariablesList",
    },
    inline: {
      value: cdktn.booleanToHclTerraform(struct!.inline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktn.listMapperHcl(frauddetectorDetectorEventTypeLabelsToHclTerraform, false)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorEventTypeLabelsList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(frauddetectorDetectorEventTypeTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorEventTypeTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrauddetectorDetectorEventTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FrauddetectorDetectorEventType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._entityTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTypes = this._entityTypes?.internalValue;
    }
    if (this._eventVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventVariables = this._eventVariables?.internalValue;
    }
    if (this._inline !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrauddetectorDetectorEventType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._entityTypes.internalValue = undefined;
      this._eventVariables.internalValue = undefined;
      this._inline = undefined;
      this._labels.internalValue = undefined;
      this._name = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._entityTypes.internalValue = value.entityTypes;
      this._eventVariables.internalValue = value.eventVariables;
      this._inline = value.inline;
      this._labels.internalValue = value.labels;
      this._name = value.name;
      this._tags.internalValue = value.tags;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // entity_types - computed: true, optional: true, required: false
  private _entityTypes = new FrauddetectorDetectorEventTypeEntityTypesList(this, "entity_types", false);
  public get entityTypes() {
    return this._entityTypes;
  }
  public putEntityTypes(value: FrauddetectorDetectorEventTypeEntityTypes[] | cdktn.IResolvable) {
    this._entityTypes.internalValue = value;
  }
  public resetEntityTypes() {
    this._entityTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypesInput() {
    return this._entityTypes.internalValue;
  }

  // event_variables - computed: true, optional: true, required: false
  private _eventVariables = new FrauddetectorDetectorEventTypeEventVariablesList(this, "event_variables", false);
  public get eventVariables() {
    return this._eventVariables;
  }
  public putEventVariables(value: FrauddetectorDetectorEventTypeEventVariables[] | cdktn.IResolvable) {
    this._eventVariables.internalValue = value;
  }
  public resetEventVariables() {
    this._eventVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventVariablesInput() {
    return this._eventVariables.internalValue;
  }

  // inline - computed: true, optional: true, required: false
  private _inline?: boolean | cdktn.IResolvable;
  public get inline() {
    return this.getBooleanAttribute('inline');
  }
  public set inline(value: boolean | cdktn.IResolvable) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // labels - computed: true, optional: true, required: false
  private _labels = new FrauddetectorDetectorEventTypeLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: FrauddetectorDetectorEventTypeLabels[] | cdktn.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // tags - computed: true, optional: true, required: false
  private _tags = new FrauddetectorDetectorEventTypeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FrauddetectorDetectorEventTypeTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface FrauddetectorDetectorRulesOutcomesTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}
  */
  readonly value?: string;
}

export function frauddetectorDetectorRulesOutcomesTagsToTerraform(struct?: FrauddetectorDetectorRulesOutcomesTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function frauddetectorDetectorRulesOutcomesTagsToHclTerraform(struct?: FrauddetectorDetectorRulesOutcomesTags | cdktn.IResolvable): any {
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

export class FrauddetectorDetectorRulesOutcomesTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorRulesOutcomesTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FrauddetectorDetectorRulesOutcomesTags | cdktn.IResolvable | undefined) {
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

export class FrauddetectorDetectorRulesOutcomesTagsList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorRulesOutcomesTags[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorRulesOutcomesTagsOutputReference {
    return new FrauddetectorDetectorRulesOutcomesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorRulesOutcomes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the outcome was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}
  */
  readonly inline?: boolean | cdktn.IResolvable;
  /**
  * The time when the outcome was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}
  */
  readonly name?: string;
  /**
  * Tags associated with this outcome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorRulesOutcomesTags[] | cdktn.IResolvable;
}

export function frauddetectorDetectorRulesOutcomesToTerraform(struct?: FrauddetectorDetectorRulesOutcomes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    created_time: cdktn.stringToTerraform(struct!.createdTime),
    description: cdktn.stringToTerraform(struct!.description),
    inline: cdktn.booleanToTerraform(struct!.inline),
    last_updated_time: cdktn.stringToTerraform(struct!.lastUpdatedTime),
    name: cdktn.stringToTerraform(struct!.name),
    tags: cdktn.listMapper(frauddetectorDetectorRulesOutcomesTagsToTerraform, false)(struct!.tags),
  }
}


export function frauddetectorDetectorRulesOutcomesToHclTerraform(struct?: FrauddetectorDetectorRulesOutcomes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_time: {
      value: cdktn.stringToHclTerraform(struct!.createdTime),
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
    inline: {
      value: cdktn.booleanToHclTerraform(struct!.inline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_updated_time: {
      value: cdktn.stringToHclTerraform(struct!.lastUpdatedTime),
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
    tags: {
      value: cdktn.listMapperHcl(frauddetectorDetectorRulesOutcomesTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorRulesOutcomesTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrauddetectorDetectorRulesOutcomesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorRulesOutcomes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._createdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdTime = this._createdTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inline !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline;
    }
    if (this._lastUpdatedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdatedTime = this._lastUpdatedTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrauddetectorDetectorRulesOutcomes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._createdTime = undefined;
      this._description = undefined;
      this._inline = undefined;
      this._lastUpdatedTime = undefined;
      this._name = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._createdTime = value.createdTime;
      this._description = value.description;
      this._inline = value.inline;
      this._lastUpdatedTime = value.lastUpdatedTime;
      this._name = value.name;
      this._tags.internalValue = value.tags;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // created_time - computed: true, optional: true, required: false
  private _createdTime?: string;
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }
  public set createdTime(value: string) {
    this._createdTime = value;
  }
  public resetCreatedTime() {
    this._createdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimeInput() {
    return this._createdTime;
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

  // inline - computed: true, optional: true, required: false
  private _inline?: boolean | cdktn.IResolvable;
  public get inline() {
    return this.getBooleanAttribute('inline');
  }
  public set inline(value: boolean | cdktn.IResolvable) {
    this._inline = value;
  }
  public resetInline() {
    this._inline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline;
  }

  // last_updated_time - computed: true, optional: true, required: false
  private _lastUpdatedTime?: string;
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }
  public set lastUpdatedTime(value: string) {
    this._lastUpdatedTime = value;
  }
  public resetLastUpdatedTime() {
    this._lastUpdatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedTimeInput() {
    return this._lastUpdatedTime;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new FrauddetectorDetectorRulesOutcomesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FrauddetectorDetectorRulesOutcomesTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FrauddetectorDetectorRulesOutcomesList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorRulesOutcomes[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorRulesOutcomesOutputReference {
    return new FrauddetectorDetectorRulesOutcomesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorRulesTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}
  */
  readonly value?: string;
}

export function frauddetectorDetectorRulesTagsToTerraform(struct?: FrauddetectorDetectorRulesTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function frauddetectorDetectorRulesTagsToHclTerraform(struct?: FrauddetectorDetectorRulesTags | cdktn.IResolvable): any {
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

export class FrauddetectorDetectorRulesTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorRulesTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FrauddetectorDetectorRulesTags | cdktn.IResolvable | undefined) {
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

export class FrauddetectorDetectorRulesTagsList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorRulesTags[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorRulesTagsOutputReference {
    return new FrauddetectorDetectorRulesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}
  */
  readonly arn?: string;
  /**
  * The time when the event type was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}
  */
  readonly createdTime?: string;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}
  */
  readonly detectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#expression FrauddetectorDetector#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#language FrauddetectorDetector#language}
  */
  readonly language?: string;
  /**
  * The time when the event type was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#outcomes FrauddetectorDetector#outcomes}
  */
  readonly outcomes?: FrauddetectorDetectorRulesOutcomes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#rule_id FrauddetectorDetector#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#rule_version FrauddetectorDetector#rule_version}
  */
  readonly ruleVersion?: string;
  /**
  * Tags associated with this event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}
  */
  readonly tags?: FrauddetectorDetectorRulesTags[] | cdktn.IResolvable;
}

export function frauddetectorDetectorRulesToTerraform(struct?: FrauddetectorDetectorRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    created_time: cdktn.stringToTerraform(struct!.createdTime),
    description: cdktn.stringToTerraform(struct!.description),
    detector_id: cdktn.stringToTerraform(struct!.detectorId),
    expression: cdktn.stringToTerraform(struct!.expression),
    language: cdktn.stringToTerraform(struct!.language),
    last_updated_time: cdktn.stringToTerraform(struct!.lastUpdatedTime),
    outcomes: cdktn.listMapper(frauddetectorDetectorRulesOutcomesToTerraform, false)(struct!.outcomes),
    rule_id: cdktn.stringToTerraform(struct!.ruleId),
    rule_version: cdktn.stringToTerraform(struct!.ruleVersion),
    tags: cdktn.listMapper(frauddetectorDetectorRulesTagsToTerraform, false)(struct!.tags),
  }
}


export function frauddetectorDetectorRulesToHclTerraform(struct?: FrauddetectorDetectorRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_time: {
      value: cdktn.stringToHclTerraform(struct!.createdTime),
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
    detector_id: {
      value: cdktn.stringToHclTerraform(struct!.detectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktn.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_updated_time: {
      value: cdktn.stringToHclTerraform(struct!.lastUpdatedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outcomes: {
      value: cdktn.listMapperHcl(frauddetectorDetectorRulesOutcomesToHclTerraform, false)(struct!.outcomes),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorRulesOutcomesList",
    },
    rule_id: {
      value: cdktn.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_version: {
      value: cdktn.stringToHclTerraform(struct!.ruleVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(frauddetectorDetectorRulesTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "FrauddetectorDetectorRulesTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrauddetectorDetectorRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._createdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdTime = this._createdTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._detectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectorId = this._detectorId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._lastUpdatedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdatedTime = this._lastUpdatedTime;
    }
    if (this._outcomes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outcomes = this._outcomes?.internalValue;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._ruleVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleVersion = this._ruleVersion;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrauddetectorDetectorRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._createdTime = undefined;
      this._description = undefined;
      this._detectorId = undefined;
      this._expression = undefined;
      this._language = undefined;
      this._lastUpdatedTime = undefined;
      this._outcomes.internalValue = undefined;
      this._ruleId = undefined;
      this._ruleVersion = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._createdTime = value.createdTime;
      this._description = value.description;
      this._detectorId = value.detectorId;
      this._expression = value.expression;
      this._language = value.language;
      this._lastUpdatedTime = value.lastUpdatedTime;
      this._outcomes.internalValue = value.outcomes;
      this._ruleId = value.ruleId;
      this._ruleVersion = value.ruleVersion;
      this._tags.internalValue = value.tags;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // created_time - computed: true, optional: true, required: false
  private _createdTime?: string;
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }
  public set createdTime(value: string) {
    this._createdTime = value;
  }
  public resetCreatedTime() {
    this._createdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimeInput() {
    return this._createdTime;
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

  // detector_id - computed: true, optional: true, required: false
  private _detectorId?: string;
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  public resetDetectorId() {
    this._detectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
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

  // language - computed: true, optional: true, required: false
  private _language?: string;
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // last_updated_time - computed: true, optional: true, required: false
  private _lastUpdatedTime?: string;
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }
  public set lastUpdatedTime(value: string) {
    this._lastUpdatedTime = value;
  }
  public resetLastUpdatedTime() {
    this._lastUpdatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedTimeInput() {
    return this._lastUpdatedTime;
  }

  // outcomes - computed: true, optional: true, required: false
  private _outcomes = new FrauddetectorDetectorRulesOutcomesList(this, "outcomes", false);
  public get outcomes() {
    return this._outcomes;
  }
  public putOutcomes(value: FrauddetectorDetectorRulesOutcomes[] | cdktn.IResolvable) {
    this._outcomes.internalValue = value;
  }
  public resetOutcomes() {
    this._outcomes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outcomesInput() {
    return this._outcomes.internalValue;
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string;
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // rule_version - computed: true, optional: true, required: false
  private _ruleVersion?: string;
  public get ruleVersion() {
    return this.getStringAttribute('rule_version');
  }
  public set ruleVersion(value: string) {
    this._ruleVersion = value;
  }
  public resetRuleVersion() {
    this._ruleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVersionInput() {
    return this._ruleVersion;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new FrauddetectorDetectorRulesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FrauddetectorDetectorRulesTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class FrauddetectorDetectorRulesList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorRules[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorRulesOutputReference {
    return new FrauddetectorDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrauddetectorDetectorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}
  */
  readonly value?: string;
}

export function frauddetectorDetectorTagsToTerraform(struct?: FrauddetectorDetectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function frauddetectorDetectorTagsToHclTerraform(struct?: FrauddetectorDetectorTags | cdktn.IResolvable): any {
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

export class FrauddetectorDetectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FrauddetectorDetectorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FrauddetectorDetectorTags | cdktn.IResolvable | undefined) {
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

export class FrauddetectorDetectorTagsList extends cdktn.ComplexList {
  public internalValue? : FrauddetectorDetectorTags[] | cdktn.IResolvable

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
  public get(index: number): FrauddetectorDetectorTagsOutputReference {
    return new FrauddetectorDetectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector awscc_frauddetector_detector}
*/
export class FrauddetectorDetector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_frauddetector_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FrauddetectorDetector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FrauddetectorDetector to import
  * @param importFromId The id of the existing FrauddetectorDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FrauddetectorDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_frauddetector_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/frauddetector_detector awscc_frauddetector_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrauddetectorDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: FrauddetectorDetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_frauddetector_detector',
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
    this._associatedModels.internalValue = config.associatedModels;
    this._description = config.description;
    this._detectorId = config.detectorId;
    this._detectorVersionStatus = config.detectorVersionStatus;
    this._eventType.internalValue = config.eventType;
    this._ruleExecutionMode = config.ruleExecutionMode;
    this._rules.internalValue = config.rules;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associated_models - computed: true, optional: true, required: false
  private _associatedModels = new FrauddetectorDetectorAssociatedModelsList(this, "associated_models", false);
  public get associatedModels() {
    return this._associatedModels;
  }
  public putAssociatedModels(value: FrauddetectorDetectorAssociatedModels[] | cdktn.IResolvable) {
    this._associatedModels.internalValue = value;
  }
  public resetAssociatedModels() {
    this._associatedModels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedModelsInput() {
    return this._associatedModels.internalValue;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string;
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
  }

  // detector_version_id - computed: true, optional: false, required: false
  public get detectorVersionId() {
    return this.getStringAttribute('detector_version_id');
  }

  // detector_version_status - computed: true, optional: true, required: false
  private _detectorVersionStatus?: string;
  public get detectorVersionStatus() {
    return this.getStringAttribute('detector_version_status');
  }
  public set detectorVersionStatus(value: string) {
    this._detectorVersionStatus = value;
  }
  public resetDetectorVersionStatus() {
    this._detectorVersionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorVersionStatusInput() {
    return this._detectorVersionStatus;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType = new FrauddetectorDetectorEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: FrauddetectorDetectorEventType) {
    this._eventType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // rule_execution_mode - computed: true, optional: true, required: false
  private _ruleExecutionMode?: string;
  public get ruleExecutionMode() {
    return this.getStringAttribute('rule_execution_mode');
  }
  public set ruleExecutionMode(value: string) {
    this._ruleExecutionMode = value;
  }
  public resetRuleExecutionMode() {
    this._ruleExecutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleExecutionModeInput() {
    return this._ruleExecutionMode;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new FrauddetectorDetectorRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: FrauddetectorDetectorRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new FrauddetectorDetectorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FrauddetectorDetectorTags[] | cdktn.IResolvable) {
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
      associated_models: cdktn.listMapper(frauddetectorDetectorAssociatedModelsToTerraform, false)(this._associatedModels.internalValue),
      description: cdktn.stringToTerraform(this._description),
      detector_id: cdktn.stringToTerraform(this._detectorId),
      detector_version_status: cdktn.stringToTerraform(this._detectorVersionStatus),
      event_type: frauddetectorDetectorEventTypeToTerraform(this._eventType.internalValue),
      rule_execution_mode: cdktn.stringToTerraform(this._ruleExecutionMode),
      rules: cdktn.listMapper(frauddetectorDetectorRulesToTerraform, false)(this._rules.internalValue),
      tags: cdktn.listMapper(frauddetectorDetectorTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_models: {
        value: cdktn.listMapperHcl(frauddetectorDetectorAssociatedModelsToHclTerraform, false)(this._associatedModels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrauddetectorDetectorAssociatedModelsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_id: {
        value: cdktn.stringToHclTerraform(this._detectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_version_status: {
        value: cdktn.stringToHclTerraform(this._detectorVersionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_type: {
        value: frauddetectorDetectorEventTypeToHclTerraform(this._eventType.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FrauddetectorDetectorEventType",
      },
      rule_execution_mode: {
        value: cdktn.stringToHclTerraform(this._ruleExecutionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktn.listMapperHcl(frauddetectorDetectorRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrauddetectorDetectorRulesList",
      },
      tags: {
        value: cdktn.listMapperHcl(frauddetectorDetectorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrauddetectorDetectorTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
