// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ElementalinferenceFeedConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}
  */
  readonly outputs: ElementalinferenceFeedOutputs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface ElementalinferenceFeedOutputsOutputConfigClipping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#callback_metadata ElementalinferenceFeed#callback_metadata}
  */
  readonly callbackMetadata?: string;
}

export function elementalinferenceFeedOutputsOutputConfigClippingToTerraform(struct?: ElementalinferenceFeedOutputsOutputConfigClipping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    callback_metadata: cdktn.stringToTerraform(struct!.callbackMetadata),
  }
}


export function elementalinferenceFeedOutputsOutputConfigClippingToHclTerraform(struct?: ElementalinferenceFeedOutputsOutputConfigClipping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    callback_metadata: {
      value: cdktn.stringToHclTerraform(struct!.callbackMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElementalinferenceFeedOutputsOutputConfigClippingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElementalinferenceFeedOutputsOutputConfigClipping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callbackMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackMetadata = this._callbackMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElementalinferenceFeedOutputsOutputConfigClipping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callbackMetadata = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callbackMetadata = value.callbackMetadata;
    }
  }

  // callback_metadata - computed: true, optional: true, required: false
  private _callbackMetadata?: string; 
  public get callbackMetadata() {
    return this.getStringAttribute('callback_metadata');
  }
  public set callbackMetadata(value: string) {
    this._callbackMetadata = value;
  }
  public resetCallbackMetadata() {
    this._callbackMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackMetadataInput() {
    return this._callbackMetadata;
  }
}
export interface ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#height ElementalinferenceFeed#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#width ElementalinferenceFeed#width}
  */
  readonly width?: number;
}

export function elementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioToTerraform(struct?: ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    height: cdktn.numberToTerraform(struct!.height),
    width: cdktn.numberToTerraform(struct!.width),
  }
}


export function elementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioToHclTerraform(struct?: ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._width = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._width = value.width;
    }
  }

  // height - computed: true, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // width - computed: true, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface ElementalinferenceFeedOutputsOutputConfigSubtitling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#aspect_ratio ElementalinferenceFeed#aspect_ratio}
  */
  readonly aspectRatio?: ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#dictionary ElementalinferenceFeed#dictionary}
  */
  readonly dictionary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#language ElementalinferenceFeed#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#profanity_filter ElementalinferenceFeed#profanity_filter}
  */
  readonly profanityFilter?: string;
}

export function elementalinferenceFeedOutputsOutputConfigSubtitlingToTerraform(struct?: ElementalinferenceFeedOutputsOutputConfigSubtitling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aspect_ratio: elementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioToTerraform(struct!.aspectRatio),
    dictionary: cdktn.stringToTerraform(struct!.dictionary),
    language: cdktn.stringToTerraform(struct!.language),
    profanity_filter: cdktn.stringToTerraform(struct!.profanityFilter),
  }
}


export function elementalinferenceFeedOutputsOutputConfigSubtitlingToHclTerraform(struct?: ElementalinferenceFeedOutputsOutputConfigSubtitling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aspect_ratio: {
      value: elementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioToHclTerraform(struct!.aspectRatio),
      isBlock: true,
      type: "struct",
      storageClassType: "ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio",
    },
    dictionary: {
      value: cdktn.stringToHclTerraform(struct!.dictionary),
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
    profanity_filter: {
      value: cdktn.stringToHclTerraform(struct!.profanityFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElementalinferenceFeedOutputsOutputConfigSubtitling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aspectRatio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspectRatio = this._aspectRatio?.internalValue;
    }
    if (this._dictionary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._profanityFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.profanityFilter = this._profanityFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElementalinferenceFeedOutputsOutputConfigSubtitling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aspectRatio.internalValue = undefined;
      this._dictionary = undefined;
      this._language = undefined;
      this._profanityFilter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aspectRatio.internalValue = value.aspectRatio;
      this._dictionary = value.dictionary;
      this._language = value.language;
      this._profanityFilter = value.profanityFilter;
    }
  }

  // aspect_ratio - computed: true, optional: true, required: false
  private _aspectRatio = new ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference(this, "aspect_ratio");
  public get aspectRatio() {
    return this._aspectRatio;
  }
  public putAspectRatio(value: ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio) {
    this._aspectRatio.internalValue = value;
  }
  public resetAspectRatio() {
    this._aspectRatio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspectRatioInput() {
    return this._aspectRatio.internalValue;
  }

  // dictionary - computed: true, optional: true, required: false
  private _dictionary?: string; 
  public get dictionary() {
    return this.getStringAttribute('dictionary');
  }
  public set dictionary(value: string) {
    this._dictionary = value;
  }
  public resetDictionary() {
    this._dictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary;
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

  // profanity_filter - computed: true, optional: true, required: false
  private _profanityFilter?: string; 
  public get profanityFilter() {
    return this.getStringAttribute('profanity_filter');
  }
  public set profanityFilter(value: string) {
    this._profanityFilter = value;
  }
  public resetProfanityFilter() {
    this._profanityFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profanityFilterInput() {
    return this._profanityFilter;
  }
}
export interface ElementalinferenceFeedOutputsOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#clipping ElementalinferenceFeed#clipping}
  */
  readonly clipping?: ElementalinferenceFeedOutputsOutputConfigClipping;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#cropping ElementalinferenceFeed#cropping}
  */
  readonly cropping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#subtitling ElementalinferenceFeed#subtitling}
  */
  readonly subtitling?: ElementalinferenceFeedOutputsOutputConfigSubtitling;
}

export function elementalinferenceFeedOutputsOutputConfigToTerraform(struct?: ElementalinferenceFeedOutputsOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clipping: elementalinferenceFeedOutputsOutputConfigClippingToTerraform(struct!.clipping),
    cropping: cdktn.stringToTerraform(struct!.cropping),
    subtitling: elementalinferenceFeedOutputsOutputConfigSubtitlingToTerraform(struct!.subtitling),
  }
}


export function elementalinferenceFeedOutputsOutputConfigToHclTerraform(struct?: ElementalinferenceFeedOutputsOutputConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clipping: {
      value: elementalinferenceFeedOutputsOutputConfigClippingToHclTerraform(struct!.clipping),
      isBlock: true,
      type: "struct",
      storageClassType: "ElementalinferenceFeedOutputsOutputConfigClipping",
    },
    cropping: {
      value: cdktn.stringToHclTerraform(struct!.cropping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitling: {
      value: elementalinferenceFeedOutputsOutputConfigSubtitlingToHclTerraform(struct!.subtitling),
      isBlock: true,
      type: "struct",
      storageClassType: "ElementalinferenceFeedOutputsOutputConfigSubtitling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElementalinferenceFeedOutputsOutputConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElementalinferenceFeedOutputsOutputConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clipping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipping = this._clipping?.internalValue;
    }
    if (this._cropping !== undefined) {
      hasAnyValues = true;
      internalValueResult.cropping = this._cropping;
    }
    if (this._subtitling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitling = this._subtitling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElementalinferenceFeedOutputsOutputConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clipping.internalValue = undefined;
      this._cropping = undefined;
      this._subtitling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clipping.internalValue = value.clipping;
      this._cropping = value.cropping;
      this._subtitling.internalValue = value.subtitling;
    }
  }

  // clipping - computed: true, optional: true, required: false
  private _clipping = new ElementalinferenceFeedOutputsOutputConfigClippingOutputReference(this, "clipping");
  public get clipping() {
    return this._clipping;
  }
  public putClipping(value: ElementalinferenceFeedOutputsOutputConfigClipping) {
    this._clipping.internalValue = value;
  }
  public resetClipping() {
    this._clipping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clippingInput() {
    return this._clipping.internalValue;
  }

  // cropping - computed: true, optional: true, required: false
  private _cropping?: string; 
  public get cropping() {
    return this.getStringAttribute('cropping');
  }
  public set cropping(value: string) {
    this._cropping = value;
  }
  public resetCropping() {
    this._cropping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get croppingInput() {
    return this._cropping;
  }

  // subtitling - computed: true, optional: true, required: false
  private _subtitling = new ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference(this, "subtitling");
  public get subtitling() {
    return this._subtitling;
  }
  public putSubtitling(value: ElementalinferenceFeedOutputsOutputConfigSubtitling) {
    this._subtitling.internalValue = value;
  }
  public resetSubtitling() {
    this._subtitling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitlingInput() {
    return this._subtitling.internalValue;
  }
}
export interface ElementalinferenceFeedOutputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#description ElementalinferenceFeed#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#output_config ElementalinferenceFeed#output_config}
  */
  readonly outputConfig: ElementalinferenceFeedOutputsOutputConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#status ElementalinferenceFeed#status}
  */
  readonly status: string;
}

export function elementalinferenceFeedOutputsToTerraform(struct?: ElementalinferenceFeedOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    output_config: elementalinferenceFeedOutputsOutputConfigToTerraform(struct!.outputConfig),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function elementalinferenceFeedOutputsToHclTerraform(struct?: ElementalinferenceFeedOutputs | cdktn.IResolvable): any {
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_config: {
      value: elementalinferenceFeedOutputsOutputConfigToHclTerraform(struct!.outputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "ElementalinferenceFeedOutputsOutputConfig",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElementalinferenceFeedOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ElementalinferenceFeedOutputs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfig = this._outputConfig?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElementalinferenceFeedOutputs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._outputConfig.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._outputConfig.internalValue = value.outputConfig;
      this._status = value.status;
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

  // output_config - computed: false, optional: false, required: true
  private _outputConfig = new ElementalinferenceFeedOutputsOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: ElementalinferenceFeedOutputsOutputConfig) {
    this._outputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
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
}

export class ElementalinferenceFeedOutputsList extends cdktn.ComplexList {
  public internalValue? : ElementalinferenceFeedOutputs[] | cdktn.IResolvable

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
  public get(index: number): ElementalinferenceFeedOutputsOutputReference {
    return new ElementalinferenceFeedOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed awscc_elementalinference_feed}
*/
export class ElementalinferenceFeed extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elementalinference_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ElementalinferenceFeed resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElementalinferenceFeed to import
  * @param importFromId The id of the existing ElementalinferenceFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElementalinferenceFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elementalinference_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/elementalinference_feed awscc_elementalinference_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElementalinferenceFeedConfig
  */
  public constructor(scope: Construct, id: string, config: ElementalinferenceFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elementalinference_feed',
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
    this._name = config.name;
    this._outputs.internalValue = config.outputs;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_endpoints - computed: true, optional: false, required: false
  public get dataEndpoints() {
    return this.getListAttribute('data_endpoints');
  }

  // feed_id - computed: true, optional: false, required: false
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // outputs - computed: false, optional: false, required: true
  private _outputs = new ElementalinferenceFeedOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: ElementalinferenceFeedOutputs[] | cdktn.IResolvable) {
    this._outputs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      outputs: cdktn.listMapper(elementalinferenceFeedOutputsToTerraform, false)(this._outputs.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outputs: {
        value: cdktn.listMapperHcl(elementalinferenceFeedOutputsToHclTerraform, false)(this._outputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ElementalinferenceFeedOutputsList",
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
