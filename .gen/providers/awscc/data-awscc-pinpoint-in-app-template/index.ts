// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pinpoint_in_app_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPinpointInAppTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pinpoint_in_app_template#id DataAwsccPinpointInAppTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccPinpointInAppTemplateContentBodyConfig {
}

export function dataAwsccPinpointInAppTemplateContentBodyConfigToTerraform(struct?: DataAwsccPinpointInAppTemplateContentBodyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentBodyConfigToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentBodyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentBodyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentBodyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alignment - computed: true, optional: false, required: false
  public get alignment() {
    return this.getStringAttribute('alignment');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // text_color - computed: true, optional: false, required: false
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
}
export interface DataAwsccPinpointInAppTemplateContentHeaderConfig {
}

export function dataAwsccPinpointInAppTemplateContentHeaderConfigToTerraform(struct?: DataAwsccPinpointInAppTemplateContentHeaderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentHeaderConfigToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentHeaderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentHeaderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentHeaderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alignment - computed: true, optional: false, required: false
  public get alignment() {
    return this.getStringAttribute('alignment');
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // text_color - computed: true, optional: false, required: false
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
}
export interface DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid {
}

export function dataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidToTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_action - computed: true, optional: false, required: false
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }
}
export interface DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig {
}

export function dataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigToTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // border_radius - computed: true, optional: false, required: false
  public get borderRadius() {
    return this.getNumberAttribute('border_radius');
  }

  // button_action - computed: true, optional: false, required: false
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // text_color - computed: true, optional: false, required: false
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
}
export interface DataAwsccPinpointInAppTemplateContentPrimaryBtnIos {
}

export function dataAwsccPinpointInAppTemplateContentPrimaryBtnIosToTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtnIos): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentPrimaryBtnIosToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtnIos): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentPrimaryBtnIos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentPrimaryBtnIos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_action - computed: true, optional: false, required: false
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }
}
export interface DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb {
}

export function dataAwsccPinpointInAppTemplateContentPrimaryBtnWebToTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentPrimaryBtnWebToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_action - computed: true, optional: false, required: false
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }
}
export interface DataAwsccPinpointInAppTemplateContentPrimaryBtn {
}

export function dataAwsccPinpointInAppTemplateContentPrimaryBtnToTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentPrimaryBtnToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentPrimaryBtn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentPrimaryBtn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentPrimaryBtn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // android - computed: true, optional: false, required: false
  private _android = new DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(this, "android");
  public get android() {
    return this._android;
  }

  // default_config - computed: true, optional: false, required: false
  private _defaultConfig = new DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(this, "default_config");
  public get defaultConfig() {
    return this._defaultConfig;
  }

  // ios - computed: true, optional: false, required: false
  private _ios = new DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference(this, "ios");
  public get ios() {
    return this._ios;
  }

  // web - computed: true, optional: false, required: false
  private _web = new DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
}
export interface DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid {
}

export function dataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidToTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_action - computed: true, optional: false, required: false
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }
}
export interface DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig {
}

export function dataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigToTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // border_radius - computed: true, optional: false, required: false
  public get borderRadius() {
    return this.getNumberAttribute('border_radius');
  }

  // button_action - computed: true, optional: false, required: false
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // text_color - computed: true, optional: false, required: false
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
}
export interface DataAwsccPinpointInAppTemplateContentSecondaryBtnIos {
}

export function dataAwsccPinpointInAppTemplateContentSecondaryBtnIosToTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtnIos): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentSecondaryBtnIosToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtnIos): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentSecondaryBtnIos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentSecondaryBtnIos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_action - computed: true, optional: false, required: false
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }
}
export interface DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb {
}

export function dataAwsccPinpointInAppTemplateContentSecondaryBtnWebToTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentSecondaryBtnWebToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // button_action - computed: true, optional: false, required: false
  public get buttonAction() {
    return this.getStringAttribute('button_action');
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }
}
export interface DataAwsccPinpointInAppTemplateContentSecondaryBtn {
}

export function dataAwsccPinpointInAppTemplateContentSecondaryBtnToTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentSecondaryBtnToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContentSecondaryBtn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPinpointInAppTemplateContentSecondaryBtn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContentSecondaryBtn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // android - computed: true, optional: false, required: false
  private _android = new DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(this, "android");
  public get android() {
    return this._android;
  }

  // default_config - computed: true, optional: false, required: false
  private _defaultConfig = new DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(this, "default_config");
  public get defaultConfig() {
    return this._defaultConfig;
  }

  // ios - computed: true, optional: false, required: false
  private _ios = new DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference(this, "ios");
  public get ios() {
    return this._ios;
  }

  // web - computed: true, optional: false, required: false
  private _web = new DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
}
export interface DataAwsccPinpointInAppTemplateContent {
}

export function dataAwsccPinpointInAppTemplateContentToTerraform(struct?: DataAwsccPinpointInAppTemplateContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPinpointInAppTemplateContentToHclTerraform(struct?: DataAwsccPinpointInAppTemplateContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPinpointInAppTemplateContentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPinpointInAppTemplateContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPinpointInAppTemplateContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // body_config - computed: true, optional: false, required: false
  private _bodyConfig = new DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference(this, "body_config");
  public get bodyConfig() {
    return this._bodyConfig;
  }

  // header_config - computed: true, optional: false, required: false
  private _headerConfig = new DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference(this, "header_config");
  public get headerConfig() {
    return this._headerConfig;
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // primary_btn - computed: true, optional: false, required: false
  private _primaryBtn = new DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference(this, "primary_btn");
  public get primaryBtn() {
    return this._primaryBtn;
  }

  // secondary_btn - computed: true, optional: false, required: false
  private _secondaryBtn = new DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference(this, "secondary_btn");
  public get secondaryBtn() {
    return this._secondaryBtn;
  }
}

export class DataAwsccPinpointInAppTemplateContentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPinpointInAppTemplateContentOutputReference {
    return new DataAwsccPinpointInAppTemplateContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pinpoint_in_app_template awscc_pinpoint_in_app_template}
*/
export class DataAwsccPinpointInAppTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pinpoint_in_app_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPinpointInAppTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPinpointInAppTemplate to import
  * @param importFromId The id of the existing DataAwsccPinpointInAppTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPinpointInAppTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pinpoint_in_app_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/pinpoint_in_app_template awscc_pinpoint_in_app_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPinpointInAppTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPinpointInAppTemplateConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataAwsccPinpointInAppTemplateContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // custom_config - computed: true, optional: false, required: false
  public get customConfig() {
    return this.getStringAttribute('custom_config');
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

  // layout - computed: true, optional: false, required: false
  public get layout() {
    return this.getStringAttribute('layout');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // template_description - computed: true, optional: false, required: false
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
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
