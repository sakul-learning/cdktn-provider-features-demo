// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connect_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConnectWorkspaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connect_workspace#id DataAwsccConnectWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConnectWorkspaceMedia {
}

export function dataAwsccConnectWorkspaceMediaToTerraform(struct?: DataAwsccConnectWorkspaceMedia): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceMediaToHclTerraform(struct?: DataAwsccConnectWorkspaceMedia): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceMediaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectWorkspaceMedia | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceMedia | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccConnectWorkspaceMediaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectWorkspaceMediaOutputReference {
    return new DataAwsccConnectWorkspaceMediaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectWorkspacePages {
}

export function dataAwsccConnectWorkspacePagesToTerraform(struct?: DataAwsccConnectWorkspacePages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspacePagesToHclTerraform(struct?: DataAwsccConnectWorkspacePages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspacePagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectWorkspacePages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspacePages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_data - computed: true, optional: false, required: false
  public get inputData() {
    return this.getStringAttribute('input_data');
  }

  // page - computed: true, optional: false, required: false
  public get page() {
    return this.getStringAttribute('page');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}

export class DataAwsccConnectWorkspacePagesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectWorkspacePagesOutputReference {
    return new DataAwsccConnectWorkspacePagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectWorkspaceTags {
}

export function dataAwsccConnectWorkspaceTagsToTerraform(struct?: DataAwsccConnectWorkspaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceTagsToHclTerraform(struct?: DataAwsccConnectWorkspaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectWorkspaceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceTags | undefined) {
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

export class DataAwsccConnectWorkspaceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectWorkspaceTagsOutputReference {
    return new DataAwsccConnectWorkspaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectWorkspaceThemeDarkPaletteCanvas {
}

export function dataAwsccConnectWorkspaceThemeDarkPaletteCanvasToTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPaletteCanvas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeDarkPaletteCanvasToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPaletteCanvas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeDarkPaletteCanvas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeDarkPaletteCanvas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_background - computed: true, optional: false, required: false
  public get activeBackground() {
    return this.getStringAttribute('active_background');
  }

  // container_background - computed: true, optional: false, required: false
  public get containerBackground() {
    return this.getStringAttribute('container_background');
  }

  // page_background - computed: true, optional: false, required: false
  public get pageBackground() {
    return this.getStringAttribute('page_background');
  }
}
export interface DataAwsccConnectWorkspaceThemeDarkPaletteHeader {
}

export function dataAwsccConnectWorkspaceThemeDarkPaletteHeaderToTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPaletteHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeDarkPaletteHeaderToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPaletteHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeDarkPaletteHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeDarkPaletteHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // invert_actions_colors - computed: true, optional: false, required: false
  public get invertActionsColors() {
    return this.getBooleanAttribute('invert_actions_colors');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // text_hover - computed: true, optional: false, required: false
  public get textHover() {
    return this.getStringAttribute('text_hover');
  }
}
export interface DataAwsccConnectWorkspaceThemeDarkPaletteNavigation {
}

export function dataAwsccConnectWorkspaceThemeDarkPaletteNavigationToTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPaletteNavigation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeDarkPaletteNavigationToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPaletteNavigation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeDarkPaletteNavigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeDarkPaletteNavigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // invert_actions_colors - computed: true, optional: false, required: false
  public get invertActionsColors() {
    return this.getBooleanAttribute('invert_actions_colors');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // text_active - computed: true, optional: false, required: false
  public get textActive() {
    return this.getStringAttribute('text_active');
  }

  // text_background_active - computed: true, optional: false, required: false
  public get textBackgroundActive() {
    return this.getStringAttribute('text_background_active');
  }

  // text_background_hover - computed: true, optional: false, required: false
  public get textBackgroundHover() {
    return this.getStringAttribute('text_background_hover');
  }

  // text_hover - computed: true, optional: false, required: false
  public get textHover() {
    return this.getStringAttribute('text_hover');
  }
}
export interface DataAwsccConnectWorkspaceThemeDarkPalettePrimary {
}

export function dataAwsccConnectWorkspaceThemeDarkPalettePrimaryToTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPalettePrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeDarkPalettePrimaryToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPalettePrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeDarkPalettePrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeDarkPalettePrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getStringAttribute('active');
  }

  // contrast_text - computed: true, optional: false, required: false
  public get contrastText() {
    return this.getStringAttribute('contrast_text');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }
}
export interface DataAwsccConnectWorkspaceThemeDarkPalette {
}

export function dataAwsccConnectWorkspaceThemeDarkPaletteToTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeDarkPaletteToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeDarkPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeDarkPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canvas - computed: true, optional: false, required: false
  private _canvas = new DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference(this, "canvas");
  public get canvas() {
    return this._canvas;
  }

  // header - computed: true, optional: false, required: false
  private _header = new DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }

  // navigation - computed: true, optional: false, required: false
  private _navigation = new DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference(this, "navigation");
  public get navigation() {
    return this._navigation;
  }

  // primary - computed: true, optional: false, required: false
  private _primary = new DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
}
export interface DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily {
}

export function dataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyToTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }
}
export interface DataAwsccConnectWorkspaceThemeDarkTypography {
}

export function dataAwsccConnectWorkspaceThemeDarkTypographyToTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeDarkTypographyToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeDarkTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeDarkTypography | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeDarkTypography | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_family - computed: true, optional: false, required: false
  private _fontFamily = new DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference(this, "font_family");
  public get fontFamily() {
    return this._fontFamily;
  }
}
export interface DataAwsccConnectWorkspaceThemeDark {
}

export function dataAwsccConnectWorkspaceThemeDarkToTerraform(struct?: DataAwsccConnectWorkspaceThemeDark): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeDarkToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeDark): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeDarkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeDark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeDark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // palette - computed: true, optional: false, required: false
  private _palette = new DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference(this, "palette");
  public get palette() {
    return this._palette;
  }

  // typography - computed: true, optional: false, required: false
  private _typography = new DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }
}
export interface DataAwsccConnectWorkspaceThemeLightPaletteCanvas {
}

export function dataAwsccConnectWorkspaceThemeLightPaletteCanvasToTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPaletteCanvas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeLightPaletteCanvasToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPaletteCanvas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeLightPaletteCanvas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeLightPaletteCanvas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_background - computed: true, optional: false, required: false
  public get activeBackground() {
    return this.getStringAttribute('active_background');
  }

  // container_background - computed: true, optional: false, required: false
  public get containerBackground() {
    return this.getStringAttribute('container_background');
  }

  // page_background - computed: true, optional: false, required: false
  public get pageBackground() {
    return this.getStringAttribute('page_background');
  }
}
export interface DataAwsccConnectWorkspaceThemeLightPaletteHeader {
}

export function dataAwsccConnectWorkspaceThemeLightPaletteHeaderToTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPaletteHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeLightPaletteHeaderToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPaletteHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeLightPaletteHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeLightPaletteHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // invert_actions_colors - computed: true, optional: false, required: false
  public get invertActionsColors() {
    return this.getBooleanAttribute('invert_actions_colors');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // text_hover - computed: true, optional: false, required: false
  public get textHover() {
    return this.getStringAttribute('text_hover');
  }
}
export interface DataAwsccConnectWorkspaceThemeLightPaletteNavigation {
}

export function dataAwsccConnectWorkspaceThemeLightPaletteNavigationToTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPaletteNavigation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeLightPaletteNavigationToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPaletteNavigation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeLightPaletteNavigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeLightPaletteNavigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // invert_actions_colors - computed: true, optional: false, required: false
  public get invertActionsColors() {
    return this.getBooleanAttribute('invert_actions_colors');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // text_active - computed: true, optional: false, required: false
  public get textActive() {
    return this.getStringAttribute('text_active');
  }

  // text_background_active - computed: true, optional: false, required: false
  public get textBackgroundActive() {
    return this.getStringAttribute('text_background_active');
  }

  // text_background_hover - computed: true, optional: false, required: false
  public get textBackgroundHover() {
    return this.getStringAttribute('text_background_hover');
  }

  // text_hover - computed: true, optional: false, required: false
  public get textHover() {
    return this.getStringAttribute('text_hover');
  }
}
export interface DataAwsccConnectWorkspaceThemeLightPalettePrimary {
}

export function dataAwsccConnectWorkspaceThemeLightPalettePrimaryToTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPalettePrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeLightPalettePrimaryToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPalettePrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeLightPalettePrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeLightPalettePrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getStringAttribute('active');
  }

  // contrast_text - computed: true, optional: false, required: false
  public get contrastText() {
    return this.getStringAttribute('contrast_text');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }
}
export interface DataAwsccConnectWorkspaceThemeLightPalette {
}

export function dataAwsccConnectWorkspaceThemeLightPaletteToTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeLightPaletteToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeLightPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeLightPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeLightPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeLightPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canvas - computed: true, optional: false, required: false
  private _canvas = new DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference(this, "canvas");
  public get canvas() {
    return this._canvas;
  }

  // header - computed: true, optional: false, required: false
  private _header = new DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }

  // navigation - computed: true, optional: false, required: false
  private _navigation = new DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference(this, "navigation");
  public get navigation() {
    return this._navigation;
  }

  // primary - computed: true, optional: false, required: false
  private _primary = new DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
}
export interface DataAwsccConnectWorkspaceThemeLightTypographyFontFamily {
}

export function dataAwsccConnectWorkspaceThemeLightTypographyFontFamilyToTerraform(struct?: DataAwsccConnectWorkspaceThemeLightTypographyFontFamily): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeLightTypographyFontFamilyToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeLightTypographyFontFamily): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeLightTypographyFontFamily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeLightTypographyFontFamily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }
}
export interface DataAwsccConnectWorkspaceThemeLightTypography {
}

export function dataAwsccConnectWorkspaceThemeLightTypographyToTerraform(struct?: DataAwsccConnectWorkspaceThemeLightTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeLightTypographyToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeLightTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeLightTypographyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeLightTypography | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeLightTypography | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_family - computed: true, optional: false, required: false
  private _fontFamily = new DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference(this, "font_family");
  public get fontFamily() {
    return this._fontFamily;
  }
}
export interface DataAwsccConnectWorkspaceThemeLight {
}

export function dataAwsccConnectWorkspaceThemeLightToTerraform(struct?: DataAwsccConnectWorkspaceThemeLight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeLightToHclTerraform(struct?: DataAwsccConnectWorkspaceThemeLight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeLightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceThemeLight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceThemeLight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // palette - computed: true, optional: false, required: false
  private _palette = new DataAwsccConnectWorkspaceThemeLightPaletteOutputReference(this, "palette");
  public get palette() {
    return this._palette;
  }

  // typography - computed: true, optional: false, required: false
  private _typography = new DataAwsccConnectWorkspaceThemeLightTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }
}
export interface DataAwsccConnectWorkspaceTheme {
}

export function dataAwsccConnectWorkspaceThemeToTerraform(struct?: DataAwsccConnectWorkspaceTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectWorkspaceThemeToHclTerraform(struct?: DataAwsccConnectWorkspaceTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectWorkspaceThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectWorkspaceTheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectWorkspaceTheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dark - computed: true, optional: false, required: false
  private _dark = new DataAwsccConnectWorkspaceThemeDarkOutputReference(this, "dark");
  public get dark() {
    return this._dark;
  }

  // light - computed: true, optional: false, required: false
  private _light = new DataAwsccConnectWorkspaceThemeLightOutputReference(this, "light");
  public get light() {
    return this._light;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connect_workspace awscc_connect_workspace}
*/
export class DataAwsccConnectWorkspace extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConnectWorkspace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConnectWorkspace to import
  * @param importFromId The id of the existing DataAwsccConnectWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connect_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConnectWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/connect_workspace awscc_connect_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_workspace',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associations - computed: true, optional: false, required: false
  public get associations() {
    return this.getListAttribute('associations');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // media - computed: true, optional: false, required: false
  private _media = new DataAwsccConnectWorkspaceMediaList(this, "media", false);
  public get media() {
    return this._media;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pages - computed: true, optional: false, required: false
  private _pages = new DataAwsccConnectWorkspacePagesList(this, "pages", false);
  public get pages() {
    return this._pages;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccConnectWorkspaceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // theme - computed: true, optional: false, required: false
  private _theme = new DataAwsccConnectWorkspaceThemeOutputReference(this, "theme");
  public get theme() {
    return this._theme;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
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
