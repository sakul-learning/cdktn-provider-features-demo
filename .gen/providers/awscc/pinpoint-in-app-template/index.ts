// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PinpointInAppTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}
  */
  readonly content?: PinpointInAppTemplateContent[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}
  */
  readonly customConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}
  */
  readonly layout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}
  */
  readonly templateDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}
  */
  readonly templateName: string;
}
export interface PinpointInAppTemplateContentBodyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}
  */
  readonly alignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}
  */
  readonly textColor?: string;
}

export function pinpointInAppTemplateContentBodyConfigToTerraform(struct?: PinpointInAppTemplateContentBodyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alignment: cdktn.stringToTerraform(struct!.alignment),
    body: cdktn.stringToTerraform(struct!.body),
    text_color: cdktn.stringToTerraform(struct!.textColor),
  }
}


export function pinpointInAppTemplateContentBodyConfigToHclTerraform(struct?: PinpointInAppTemplateContentBodyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alignment: {
      value: cdktn.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktn.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktn.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentBodyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentBodyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentBodyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignment = undefined;
      this._body = undefined;
      this._textColor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignment = value.alignment;
      this._body = value.body;
      this._textColor = value.textColor;
    }
  }

  // alignment - computed: true, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // text_color - computed: true, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}
export interface PinpointInAppTemplateContentHeaderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}
  */
  readonly alignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}
  */
  readonly textColor?: string;
}

export function pinpointInAppTemplateContentHeaderConfigToTerraform(struct?: PinpointInAppTemplateContentHeaderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alignment: cdktn.stringToTerraform(struct!.alignment),
    header: cdktn.stringToTerraform(struct!.header),
    text_color: cdktn.stringToTerraform(struct!.textColor),
  }
}


export function pinpointInAppTemplateContentHeaderConfigToHclTerraform(struct?: PinpointInAppTemplateContentHeaderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alignment: {
      value: cdktn.stringToHclTerraform(struct!.alignment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktn.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentHeaderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentHeaderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.alignment = this._alignment;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentHeaderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alignment = undefined;
      this._header = undefined;
      this._textColor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alignment = value.alignment;
      this._header = value.header;
      this._textColor = value.textColor;
    }
  }

  // alignment - computed: true, optional: true, required: false
  private _alignment?: string; 
  public get alignment() {
    return this.getStringAttribute('alignment');
  }
  public set alignment(value: string) {
    this._alignment = value;
  }
  public resetAlignment() {
    this._alignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignmentInput() {
    return this._alignment;
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // text_color - computed: true, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}
export interface PinpointInAppTemplateContentPrimaryBtnAndroid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}
  */
  readonly buttonAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}
  */
  readonly link?: string;
}

export function pinpointInAppTemplateContentPrimaryBtnAndroidToTerraform(struct?: PinpointInAppTemplateContentPrimaryBtnAndroid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    button_action: cdktn.stringToTerraform(struct!.buttonAction),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function pinpointInAppTemplateContentPrimaryBtnAndroidToHclTerraform(struct?: PinpointInAppTemplateContentPrimaryBtnAndroid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    button_action: {
      value: cdktn.stringToHclTerraform(struct!.buttonAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentPrimaryBtnAndroid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonAction = this._buttonAction;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentPrimaryBtnAndroid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonAction = undefined;
      this._link = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonAction = value.buttonAction;
      this._link = value.link;
    }
  }

  // button_action - computed: true, optional: true, required: false
  private _buttonAction?: string; 
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }
  public set buttonAction(value: string) {
    this._buttonAction = value;
  }
  public resetButtonAction() {
    this._buttonAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonActionInput() {
    return this._buttonAction;
  }

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface PinpointInAppTemplateContentPrimaryBtnDefaultConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}
  */
  readonly borderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}
  */
  readonly buttonAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}
  */
  readonly textColor?: string;
}

export function pinpointInAppTemplateContentPrimaryBtnDefaultConfigToTerraform(struct?: PinpointInAppTemplateContentPrimaryBtnDefaultConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background_color: cdktn.stringToTerraform(struct!.backgroundColor),
    border_radius: cdktn.numberToTerraform(struct!.borderRadius),
    button_action: cdktn.stringToTerraform(struct!.buttonAction),
    link: cdktn.stringToTerraform(struct!.link),
    text: cdktn.stringToTerraform(struct!.text),
    text_color: cdktn.stringToTerraform(struct!.textColor),
  }
}


export function pinpointInAppTemplateContentPrimaryBtnDefaultConfigToHclTerraform(struct?: PinpointInAppTemplateContentPrimaryBtnDefaultConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background_color: {
      value: cdktn.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    border_radius: {
      value: cdktn.numberToHclTerraform(struct!.borderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    button_action: {
      value: cdktn.stringToHclTerraform(struct!.buttonAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktn.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentPrimaryBtnDefaultConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._borderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderRadius = this._borderRadius;
    }
    if (this._buttonAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonAction = this._buttonAction;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentPrimaryBtnDefaultConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._borderRadius = undefined;
      this._buttonAction = undefined;
      this._link = undefined;
      this._text = undefined;
      this._textColor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._borderRadius = value.borderRadius;
      this._buttonAction = value.buttonAction;
      this._link = value.link;
      this._text = value.text;
      this._textColor = value.textColor;
    }
  }

  // background_color - computed: true, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // border_radius - computed: true, optional: true, required: false
  private _borderRadius?: number; 
  public get borderRadius() {
    return this.getNumberAttribute('border_radius');
  }
  public set borderRadius(value: number) {
    this._borderRadius = value;
  }
  public resetBorderRadius() {
    this._borderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderRadiusInput() {
    return this._borderRadius;
  }

  // button_action - computed: true, optional: true, required: false
  private _buttonAction?: string; 
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }
  public set buttonAction(value: string) {
    this._buttonAction = value;
  }
  public resetButtonAction() {
    this._buttonAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonActionInput() {
    return this._buttonAction;
  }

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // text_color - computed: true, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}
export interface PinpointInAppTemplateContentPrimaryBtnIos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}
  */
  readonly buttonAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}
  */
  readonly link?: string;
}

export function pinpointInAppTemplateContentPrimaryBtnIosToTerraform(struct?: PinpointInAppTemplateContentPrimaryBtnIos | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    button_action: cdktn.stringToTerraform(struct!.buttonAction),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function pinpointInAppTemplateContentPrimaryBtnIosToHclTerraform(struct?: PinpointInAppTemplateContentPrimaryBtnIos | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    button_action: {
      value: cdktn.stringToHclTerraform(struct!.buttonAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentPrimaryBtnIosOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentPrimaryBtnIos | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonAction = this._buttonAction;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentPrimaryBtnIos | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonAction = undefined;
      this._link = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonAction = value.buttonAction;
      this._link = value.link;
    }
  }

  // button_action - computed: true, optional: true, required: false
  private _buttonAction?: string; 
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }
  public set buttonAction(value: string) {
    this._buttonAction = value;
  }
  public resetButtonAction() {
    this._buttonAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonActionInput() {
    return this._buttonAction;
  }

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface PinpointInAppTemplateContentPrimaryBtnWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}
  */
  readonly buttonAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}
  */
  readonly link?: string;
}

export function pinpointInAppTemplateContentPrimaryBtnWebToTerraform(struct?: PinpointInAppTemplateContentPrimaryBtnWeb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    button_action: cdktn.stringToTerraform(struct!.buttonAction),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function pinpointInAppTemplateContentPrimaryBtnWebToHclTerraform(struct?: PinpointInAppTemplateContentPrimaryBtnWeb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    button_action: {
      value: cdktn.stringToHclTerraform(struct!.buttonAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentPrimaryBtnWebOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentPrimaryBtnWeb | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonAction = this._buttonAction;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentPrimaryBtnWeb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonAction = undefined;
      this._link = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonAction = value.buttonAction;
      this._link = value.link;
    }
  }

  // button_action - computed: true, optional: true, required: false
  private _buttonAction?: string; 
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }
  public set buttonAction(value: string) {
    this._buttonAction = value;
  }
  public resetButtonAction() {
    this._buttonAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonActionInput() {
    return this._buttonAction;
  }

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface PinpointInAppTemplateContentPrimaryBtn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}
  */
  readonly android?: PinpointInAppTemplateContentPrimaryBtnAndroid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}
  */
  readonly defaultConfig?: PinpointInAppTemplateContentPrimaryBtnDefaultConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}
  */
  readonly ios?: PinpointInAppTemplateContentPrimaryBtnIos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}
  */
  readonly web?: PinpointInAppTemplateContentPrimaryBtnWeb;
}

export function pinpointInAppTemplateContentPrimaryBtnToTerraform(struct?: PinpointInAppTemplateContentPrimaryBtn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    android: pinpointInAppTemplateContentPrimaryBtnAndroidToTerraform(struct!.android),
    default_config: pinpointInAppTemplateContentPrimaryBtnDefaultConfigToTerraform(struct!.defaultConfig),
    ios: pinpointInAppTemplateContentPrimaryBtnIosToTerraform(struct!.ios),
    web: pinpointInAppTemplateContentPrimaryBtnWebToTerraform(struct!.web),
  }
}


export function pinpointInAppTemplateContentPrimaryBtnToHclTerraform(struct?: PinpointInAppTemplateContentPrimaryBtn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    android: {
      value: pinpointInAppTemplateContentPrimaryBtnAndroidToHclTerraform(struct!.android),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentPrimaryBtnAndroid",
    },
    default_config: {
      value: pinpointInAppTemplateContentPrimaryBtnDefaultConfigToHclTerraform(struct!.defaultConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentPrimaryBtnDefaultConfig",
    },
    ios: {
      value: pinpointInAppTemplateContentPrimaryBtnIosToHclTerraform(struct!.ios),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentPrimaryBtnIos",
    },
    web: {
      value: pinpointInAppTemplateContentPrimaryBtnWebToHclTerraform(struct!.web),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentPrimaryBtnWeb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentPrimaryBtnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentPrimaryBtn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._android?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.android = this._android?.internalValue;
    }
    if (this._defaultConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConfig = this._defaultConfig?.internalValue;
    }
    if (this._ios?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ios = this._ios?.internalValue;
    }
    if (this._web?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentPrimaryBtn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._android.internalValue = undefined;
      this._defaultConfig.internalValue = undefined;
      this._ios.internalValue = undefined;
      this._web.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._android.internalValue = value.android;
      this._defaultConfig.internalValue = value.defaultConfig;
      this._ios.internalValue = value.ios;
      this._web.internalValue = value.web;
    }
  }

  // android - computed: true, optional: true, required: false
  private _android = new PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(this, "android");
  public get android() {
    return this._android;
  }
  public putAndroid(value: PinpointInAppTemplateContentPrimaryBtnAndroid) {
    this._android.internalValue = value;
  }
  public resetAndroid() {
    this._android.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get androidInput() {
    return this._android.internalValue;
  }

  // default_config - computed: true, optional: true, required: false
  private _defaultConfig = new PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(this, "default_config");
  public get defaultConfig() {
    return this._defaultConfig;
  }
  public putDefaultConfig(value: PinpointInAppTemplateContentPrimaryBtnDefaultConfig) {
    this._defaultConfig.internalValue = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig.internalValue;
  }

  // ios - computed: true, optional: true, required: false
  private _ios = new PinpointInAppTemplateContentPrimaryBtnIosOutputReference(this, "ios");
  public get ios() {
    return this._ios;
  }
  public putIos(value: PinpointInAppTemplateContentPrimaryBtnIos) {
    this._ios.internalValue = value;
  }
  public resetIos() {
    this._ios.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosInput() {
    return this._ios.internalValue;
  }

  // web - computed: true, optional: true, required: false
  private _web = new PinpointInAppTemplateContentPrimaryBtnWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: PinpointInAppTemplateContentPrimaryBtnWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }
}
export interface PinpointInAppTemplateContentSecondaryBtnAndroid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}
  */
  readonly buttonAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}
  */
  readonly link?: string;
}

export function pinpointInAppTemplateContentSecondaryBtnAndroidToTerraform(struct?: PinpointInAppTemplateContentSecondaryBtnAndroid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    button_action: cdktn.stringToTerraform(struct!.buttonAction),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function pinpointInAppTemplateContentSecondaryBtnAndroidToHclTerraform(struct?: PinpointInAppTemplateContentSecondaryBtnAndroid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    button_action: {
      value: cdktn.stringToHclTerraform(struct!.buttonAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentSecondaryBtnAndroid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonAction = this._buttonAction;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentSecondaryBtnAndroid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonAction = undefined;
      this._link = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonAction = value.buttonAction;
      this._link = value.link;
    }
  }

  // button_action - computed: true, optional: true, required: false
  private _buttonAction?: string; 
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }
  public set buttonAction(value: string) {
    this._buttonAction = value;
  }
  public resetButtonAction() {
    this._buttonAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonActionInput() {
    return this._buttonAction;
  }

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface PinpointInAppTemplateContentSecondaryBtnDefaultConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}
  */
  readonly borderRadius?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}
  */
  readonly buttonAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}
  */
  readonly textColor?: string;
}

export function pinpointInAppTemplateContentSecondaryBtnDefaultConfigToTerraform(struct?: PinpointInAppTemplateContentSecondaryBtnDefaultConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background_color: cdktn.stringToTerraform(struct!.backgroundColor),
    border_radius: cdktn.numberToTerraform(struct!.borderRadius),
    button_action: cdktn.stringToTerraform(struct!.buttonAction),
    link: cdktn.stringToTerraform(struct!.link),
    text: cdktn.stringToTerraform(struct!.text),
    text_color: cdktn.stringToTerraform(struct!.textColor),
  }
}


export function pinpointInAppTemplateContentSecondaryBtnDefaultConfigToHclTerraform(struct?: PinpointInAppTemplateContentSecondaryBtnDefaultConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background_color: {
      value: cdktn.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    border_radius: {
      value: cdktn.numberToHclTerraform(struct!.borderRadius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    button_action: {
      value: cdktn.stringToHclTerraform(struct!.buttonAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktn.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentSecondaryBtnDefaultConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._borderRadius !== undefined) {
      hasAnyValues = true;
      internalValueResult.borderRadius = this._borderRadius;
    }
    if (this._buttonAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonAction = this._buttonAction;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentSecondaryBtnDefaultConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._borderRadius = undefined;
      this._buttonAction = undefined;
      this._link = undefined;
      this._text = undefined;
      this._textColor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._borderRadius = value.borderRadius;
      this._buttonAction = value.buttonAction;
      this._link = value.link;
      this._text = value.text;
      this._textColor = value.textColor;
    }
  }

  // background_color - computed: true, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // border_radius - computed: true, optional: true, required: false
  private _borderRadius?: number; 
  public get borderRadius() {
    return this.getNumberAttribute('border_radius');
  }
  public set borderRadius(value: number) {
    this._borderRadius = value;
  }
  public resetBorderRadius() {
    this._borderRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderRadiusInput() {
    return this._borderRadius;
  }

  // button_action - computed: true, optional: true, required: false
  private _buttonAction?: string; 
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }
  public set buttonAction(value: string) {
    this._buttonAction = value;
  }
  public resetButtonAction() {
    this._buttonAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonActionInput() {
    return this._buttonAction;
  }

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // text_color - computed: true, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}
export interface PinpointInAppTemplateContentSecondaryBtnIos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}
  */
  readonly buttonAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}
  */
  readonly link?: string;
}

export function pinpointInAppTemplateContentSecondaryBtnIosToTerraform(struct?: PinpointInAppTemplateContentSecondaryBtnIos | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    button_action: cdktn.stringToTerraform(struct!.buttonAction),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function pinpointInAppTemplateContentSecondaryBtnIosToHclTerraform(struct?: PinpointInAppTemplateContentSecondaryBtnIos | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    button_action: {
      value: cdktn.stringToHclTerraform(struct!.buttonAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentSecondaryBtnIosOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentSecondaryBtnIos | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonAction = this._buttonAction;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentSecondaryBtnIos | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonAction = undefined;
      this._link = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonAction = value.buttonAction;
      this._link = value.link;
    }
  }

  // button_action - computed: true, optional: true, required: false
  private _buttonAction?: string; 
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }
  public set buttonAction(value: string) {
    this._buttonAction = value;
  }
  public resetButtonAction() {
    this._buttonAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonActionInput() {
    return this._buttonAction;
  }

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface PinpointInAppTemplateContentSecondaryBtnWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}
  */
  readonly buttonAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}
  */
  readonly link?: string;
}

export function pinpointInAppTemplateContentSecondaryBtnWebToTerraform(struct?: PinpointInAppTemplateContentSecondaryBtnWeb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    button_action: cdktn.stringToTerraform(struct!.buttonAction),
    link: cdktn.stringToTerraform(struct!.link),
  }
}


export function pinpointInAppTemplateContentSecondaryBtnWebToHclTerraform(struct?: PinpointInAppTemplateContentSecondaryBtnWeb | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    button_action: {
      value: cdktn.stringToHclTerraform(struct!.buttonAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktn.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentSecondaryBtnWebOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentSecondaryBtnWeb | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonAction = this._buttonAction;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentSecondaryBtnWeb | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonAction = undefined;
      this._link = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonAction = value.buttonAction;
      this._link = value.link;
    }
  }

  // button_action - computed: true, optional: true, required: false
  private _buttonAction?: string; 
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }
  public set buttonAction(value: string) {
    this._buttonAction = value;
  }
  public resetButtonAction() {
    this._buttonAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonActionInput() {
    return this._buttonAction;
  }

  // link - computed: true, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }
}
export interface PinpointInAppTemplateContentSecondaryBtn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}
  */
  readonly android?: PinpointInAppTemplateContentSecondaryBtnAndroid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}
  */
  readonly defaultConfig?: PinpointInAppTemplateContentSecondaryBtnDefaultConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}
  */
  readonly ios?: PinpointInAppTemplateContentSecondaryBtnIos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}
  */
  readonly web?: PinpointInAppTemplateContentSecondaryBtnWeb;
}

export function pinpointInAppTemplateContentSecondaryBtnToTerraform(struct?: PinpointInAppTemplateContentSecondaryBtn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    android: pinpointInAppTemplateContentSecondaryBtnAndroidToTerraform(struct!.android),
    default_config: pinpointInAppTemplateContentSecondaryBtnDefaultConfigToTerraform(struct!.defaultConfig),
    ios: pinpointInAppTemplateContentSecondaryBtnIosToTerraform(struct!.ios),
    web: pinpointInAppTemplateContentSecondaryBtnWebToTerraform(struct!.web),
  }
}


export function pinpointInAppTemplateContentSecondaryBtnToHclTerraform(struct?: PinpointInAppTemplateContentSecondaryBtn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    android: {
      value: pinpointInAppTemplateContentSecondaryBtnAndroidToHclTerraform(struct!.android),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentSecondaryBtnAndroid",
    },
    default_config: {
      value: pinpointInAppTemplateContentSecondaryBtnDefaultConfigToHclTerraform(struct!.defaultConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentSecondaryBtnDefaultConfig",
    },
    ios: {
      value: pinpointInAppTemplateContentSecondaryBtnIosToHclTerraform(struct!.ios),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentSecondaryBtnIos",
    },
    web: {
      value: pinpointInAppTemplateContentSecondaryBtnWebToHclTerraform(struct!.web),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentSecondaryBtnWeb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentSecondaryBtnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PinpointInAppTemplateContentSecondaryBtn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._android?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.android = this._android?.internalValue;
    }
    if (this._defaultConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConfig = this._defaultConfig?.internalValue;
    }
    if (this._ios?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ios = this._ios?.internalValue;
    }
    if (this._web?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContentSecondaryBtn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._android.internalValue = undefined;
      this._defaultConfig.internalValue = undefined;
      this._ios.internalValue = undefined;
      this._web.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._android.internalValue = value.android;
      this._defaultConfig.internalValue = value.defaultConfig;
      this._ios.internalValue = value.ios;
      this._web.internalValue = value.web;
    }
  }

  // android - computed: true, optional: true, required: false
  private _android = new PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(this, "android");
  public get android() {
    return this._android;
  }
  public putAndroid(value: PinpointInAppTemplateContentSecondaryBtnAndroid) {
    this._android.internalValue = value;
  }
  public resetAndroid() {
    this._android.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get androidInput() {
    return this._android.internalValue;
  }

  // default_config - computed: true, optional: true, required: false
  private _defaultConfig = new PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(this, "default_config");
  public get defaultConfig() {
    return this._defaultConfig;
  }
  public putDefaultConfig(value: PinpointInAppTemplateContentSecondaryBtnDefaultConfig) {
    this._defaultConfig.internalValue = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig.internalValue;
  }

  // ios - computed: true, optional: true, required: false
  private _ios = new PinpointInAppTemplateContentSecondaryBtnIosOutputReference(this, "ios");
  public get ios() {
    return this._ios;
  }
  public putIos(value: PinpointInAppTemplateContentSecondaryBtnIos) {
    this._ios.internalValue = value;
  }
  public resetIos() {
    this._ios.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosInput() {
    return this._ios.internalValue;
  }

  // web - computed: true, optional: true, required: false
  private _web = new PinpointInAppTemplateContentSecondaryBtnWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: PinpointInAppTemplateContentSecondaryBtnWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }
}
export interface PinpointInAppTemplateContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}
  */
  readonly bodyConfig?: PinpointInAppTemplateContentBodyConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}
  */
  readonly headerConfig?: PinpointInAppTemplateContentHeaderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}
  */
  readonly primaryBtn?: PinpointInAppTemplateContentPrimaryBtn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}
  */
  readonly secondaryBtn?: PinpointInAppTemplateContentSecondaryBtn;
}

export function pinpointInAppTemplateContentToTerraform(struct?: PinpointInAppTemplateContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background_color: cdktn.stringToTerraform(struct!.backgroundColor),
    body_config: pinpointInAppTemplateContentBodyConfigToTerraform(struct!.bodyConfig),
    header_config: pinpointInAppTemplateContentHeaderConfigToTerraform(struct!.headerConfig),
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    primary_btn: pinpointInAppTemplateContentPrimaryBtnToTerraform(struct!.primaryBtn),
    secondary_btn: pinpointInAppTemplateContentSecondaryBtnToTerraform(struct!.secondaryBtn),
  }
}


export function pinpointInAppTemplateContentToHclTerraform(struct?: PinpointInAppTemplateContent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background_color: {
      value: cdktn.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_config: {
      value: pinpointInAppTemplateContentBodyConfigToHclTerraform(struct!.bodyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentBodyConfig",
    },
    header_config: {
      value: pinpointInAppTemplateContentHeaderConfigToHclTerraform(struct!.headerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentHeaderConfig",
    },
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_btn: {
      value: pinpointInAppTemplateContentPrimaryBtnToHclTerraform(struct!.primaryBtn),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentPrimaryBtn",
    },
    secondary_btn: {
      value: pinpointInAppTemplateContentSecondaryBtnToHclTerraform(struct!.secondaryBtn),
      isBlock: true,
      type: "struct",
      storageClassType: "PinpointInAppTemplateContentSecondaryBtn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PinpointInAppTemplateContentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PinpointInAppTemplateContent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._bodyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyConfig = this._bodyConfig?.internalValue;
    }
    if (this._headerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerConfig = this._headerConfig?.internalValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._primaryBtn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryBtn = this._primaryBtn?.internalValue;
    }
    if (this._secondaryBtn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBtn = this._secondaryBtn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PinpointInAppTemplateContent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._bodyConfig.internalValue = undefined;
      this._headerConfig.internalValue = undefined;
      this._imageUrl = undefined;
      this._primaryBtn.internalValue = undefined;
      this._secondaryBtn.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._bodyConfig.internalValue = value.bodyConfig;
      this._headerConfig.internalValue = value.headerConfig;
      this._imageUrl = value.imageUrl;
      this._primaryBtn.internalValue = value.primaryBtn;
      this._secondaryBtn.internalValue = value.secondaryBtn;
    }
  }

  // background_color - computed: true, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // body_config - computed: true, optional: true, required: false
  private _bodyConfig = new PinpointInAppTemplateContentBodyConfigOutputReference(this, "body_config");
  public get bodyConfig() {
    return this._bodyConfig;
  }
  public putBodyConfig(value: PinpointInAppTemplateContentBodyConfig) {
    this._bodyConfig.internalValue = value;
  }
  public resetBodyConfig() {
    this._bodyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyConfigInput() {
    return this._bodyConfig.internalValue;
  }

  // header_config - computed: true, optional: true, required: false
  private _headerConfig = new PinpointInAppTemplateContentHeaderConfigOutputReference(this, "header_config");
  public get headerConfig() {
    return this._headerConfig;
  }
  public putHeaderConfig(value: PinpointInAppTemplateContentHeaderConfig) {
    this._headerConfig.internalValue = value;
  }
  public resetHeaderConfig() {
    this._headerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerConfigInput() {
    return this._headerConfig.internalValue;
  }

  // image_url - computed: true, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // primary_btn - computed: true, optional: true, required: false
  private _primaryBtn = new PinpointInAppTemplateContentPrimaryBtnOutputReference(this, "primary_btn");
  public get primaryBtn() {
    return this._primaryBtn;
  }
  public putPrimaryBtn(value: PinpointInAppTemplateContentPrimaryBtn) {
    this._primaryBtn.internalValue = value;
  }
  public resetPrimaryBtn() {
    this._primaryBtn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryBtnInput() {
    return this._primaryBtn.internalValue;
  }

  // secondary_btn - computed: true, optional: true, required: false
  private _secondaryBtn = new PinpointInAppTemplateContentSecondaryBtnOutputReference(this, "secondary_btn");
  public get secondaryBtn() {
    return this._secondaryBtn;
  }
  public putSecondaryBtn(value: PinpointInAppTemplateContentSecondaryBtn) {
    this._secondaryBtn.internalValue = value;
  }
  public resetSecondaryBtn() {
    this._secondaryBtn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBtnInput() {
    return this._secondaryBtn.internalValue;
  }
}

export class PinpointInAppTemplateContentList extends cdktn.ComplexList {
  public internalValue? : PinpointInAppTemplateContent[] | cdktn.IResolvable

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
  public get(index: number): PinpointInAppTemplateContentOutputReference {
    return new PinpointInAppTemplateContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template awscc_pinpoint_in_app_template}
*/
export class PinpointInAppTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pinpoint_in_app_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PinpointInAppTemplate to import
  * @param importFromId The id of the existing PinpointInAppTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PinpointInAppTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pinpoint_in_app_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pinpoint_in_app_template awscc_pinpoint_in_app_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PinpointInAppTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PinpointInAppTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_pinpoint_in_app_template',
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
    this._content.internalValue = config.content;
    this._customConfig = config.customConfig;
    this._layout = config.layout;
    this._tags = config.tags;
    this._templateDescription = config.templateDescription;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content - computed: true, optional: true, required: false
  private _content = new PinpointInAppTemplateContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: PinpointInAppTemplateContent[] | cdktn.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // custom_config - computed: true, optional: true, required: false
  private _customConfig?: string; 
  public get customConfig() {
    return this.getStringAttribute('custom_config');
  }
  public set customConfig(value: string) {
    this._customConfig = value;
  }
  public resetCustomConfig() {
    this._customConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // layout - computed: true, optional: true, required: false
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  public resetLayout() {
    this._layout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template_description - computed: true, optional: true, required: false
  private _templateDescription?: string; 
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }
  public set templateDescription(value: string) {
    this._templateDescription = value;
  }
  public resetTemplateDescription() {
    this._templateDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDescriptionInput() {
    return this._templateDescription;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktn.listMapper(pinpointInAppTemplateContentToTerraform, false)(this._content.internalValue),
      custom_config: cdktn.stringToTerraform(this._customConfig),
      layout: cdktn.stringToTerraform(this._layout),
      tags: cdktn.stringToTerraform(this._tags),
      template_description: cdktn.stringToTerraform(this._templateDescription),
      template_name: cdktn.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktn.listMapperHcl(pinpointInAppTemplateContentToHclTerraform, false)(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PinpointInAppTemplateContentList",
      },
      custom_config: {
        value: cdktn.stringToHclTerraform(this._customConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layout: {
        value: cdktn.stringToHclTerraform(this._layout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_description: {
        value: cdktn.stringToHclTerraform(this._templateDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktn.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
