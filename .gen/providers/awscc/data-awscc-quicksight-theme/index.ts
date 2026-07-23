// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQuicksightThemeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_theme#id DataAwsccQuicksightTheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQuicksightThemeConfigurationDataColorPalette {
}

export function dataAwsccQuicksightThemeConfigurationDataColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeConfigurationDataColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationDataColorPaletteToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationDataColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfigurationDataColorPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationDataColorPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // colors - computed: true, optional: false, required: false
  public get colors() {
    return this.getListAttribute('colors');
  }

  // empty_fill_color - computed: true, optional: false, required: false
  public get emptyFillColor() {
    return this.getStringAttribute('empty_fill_color');
  }

  // min_max_gradient - computed: true, optional: false, required: false
  public get minMaxGradient() {
    return this.getListAttribute('min_max_gradient');
  }
}
export interface DataAwsccQuicksightThemeConfigurationSheetTileBorder {
}

export function dataAwsccQuicksightThemeConfigurationSheetTileBorderToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileBorder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationSheetTileBorderToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileBorder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfigurationSheetTileBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationSheetTileBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}
export interface DataAwsccQuicksightThemeConfigurationSheetTile {
}

export function dataAwsccQuicksightThemeConfigurationSheetTileToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationSheetTileToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationSheetTileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfigurationSheetTile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationSheetTile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // border - computed: true, optional: false, required: false
  private _border = new DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
}
export interface DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter {
}

export function dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}
export interface DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin {
}

export function dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}
export interface DataAwsccQuicksightThemeConfigurationSheetTileLayout {
}

export function dataAwsccQuicksightThemeConfigurationSheetTileLayoutToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationSheetTileLayoutToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheetTileLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfigurationSheetTileLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationSheetTileLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gutter - computed: true, optional: false, required: false
  private _gutter = new DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(this, "gutter");
  public get gutter() {
    return this._gutter;
  }

  // margin - computed: true, optional: false, required: false
  private _margin = new DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(this, "margin");
  public get margin() {
    return this._margin;
  }
}
export interface DataAwsccQuicksightThemeConfigurationSheet {
}

export function dataAwsccQuicksightThemeConfigurationSheetToTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationSheetToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationSheet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationSheetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfigurationSheet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationSheet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tile - computed: true, optional: false, required: false
  private _tile = new DataAwsccQuicksightThemeConfigurationSheetTileOutputReference(this, "tile");
  public get tile() {
    return this._tile;
  }

  // tile_layout - computed: true, optional: false, required: false
  private _tileLayout = new DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference(this, "tile_layout");
  public get tileLayout() {
    return this._tileLayout;
  }
}
export interface DataAwsccQuicksightThemeConfigurationTypographyFontFamilies {
}

export function dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct?: DataAwsccQuicksightThemeConfigurationTypographyFontFamilies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationTypographyFontFamiliesToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationTypographyFontFamilies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightThemeConfigurationTypographyFontFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationTypographyFontFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
}

export class DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference {
    return new DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightThemeConfigurationTypography {
}

export function dataAwsccQuicksightThemeConfigurationTypographyToTerraform(struct?: DataAwsccQuicksightThemeConfigurationTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationTypographyToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationTypographyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfigurationTypography | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationTypography | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_families - computed: true, optional: false, required: false
  private _fontFamilies = new DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList(this, "font_families", false);
  public get fontFamilies() {
    return this._fontFamilies;
  }
}
export interface DataAwsccQuicksightThemeConfigurationUiColorPalette {
}

export function dataAwsccQuicksightThemeConfigurationUiColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeConfigurationUiColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationUiColorPaletteToHclTerraform(struct?: DataAwsccQuicksightThemeConfigurationUiColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfigurationUiColorPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfigurationUiColorPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accent - computed: true, optional: false, required: false
  public get accent() {
    return this.getStringAttribute('accent');
  }

  // accent_foreground - computed: true, optional: false, required: false
  public get accentForeground() {
    return this.getStringAttribute('accent_foreground');
  }

  // danger - computed: true, optional: false, required: false
  public get danger() {
    return this.getStringAttribute('danger');
  }

  // danger_foreground - computed: true, optional: false, required: false
  public get dangerForeground() {
    return this.getStringAttribute('danger_foreground');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // dimension_foreground - computed: true, optional: false, required: false
  public get dimensionForeground() {
    return this.getStringAttribute('dimension_foreground');
  }

  // measure - computed: true, optional: false, required: false
  public get measure() {
    return this.getStringAttribute('measure');
  }

  // measure_foreground - computed: true, optional: false, required: false
  public get measureForeground() {
    return this.getStringAttribute('measure_foreground');
  }

  // primary_background - computed: true, optional: false, required: false
  public get primaryBackground() {
    return this.getStringAttribute('primary_background');
  }

  // primary_foreground - computed: true, optional: false, required: false
  public get primaryForeground() {
    return this.getStringAttribute('primary_foreground');
  }

  // secondary_background - computed: true, optional: false, required: false
  public get secondaryBackground() {
    return this.getStringAttribute('secondary_background');
  }

  // secondary_foreground - computed: true, optional: false, required: false
  public get secondaryForeground() {
    return this.getStringAttribute('secondary_foreground');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getStringAttribute('success');
  }

  // success_foreground - computed: true, optional: false, required: false
  public get successForeground() {
    return this.getStringAttribute('success_foreground');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // warning_foreground - computed: true, optional: false, required: false
  public get warningForeground() {
    return this.getStringAttribute('warning_foreground');
  }
}
export interface DataAwsccQuicksightThemeConfiguration {
}

export function dataAwsccQuicksightThemeConfigurationToTerraform(struct?: DataAwsccQuicksightThemeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeConfigurationToHclTerraform(struct?: DataAwsccQuicksightThemeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_color_palette - computed: true, optional: false, required: false
  private _dataColorPalette = new DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference(this, "data_color_palette");
  public get dataColorPalette() {
    return this._dataColorPalette;
  }

  // sheet - computed: true, optional: false, required: false
  private _sheet = new DataAwsccQuicksightThemeConfigurationSheetOutputReference(this, "sheet");
  public get sheet() {
    return this._sheet;
  }

  // typography - computed: true, optional: false, required: false
  private _typography = new DataAwsccQuicksightThemeConfigurationTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }

  // ui_color_palette - computed: true, optional: false, required: false
  private _uiColorPalette = new DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference(this, "ui_color_palette");
  public get uiColorPalette() {
    return this._uiColorPalette;
  }
}
export interface DataAwsccQuicksightThemePermissions {
}

export function dataAwsccQuicksightThemePermissionsToTerraform(struct?: DataAwsccQuicksightThemePermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemePermissionsToHclTerraform(struct?: DataAwsccQuicksightThemePermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemePermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightThemePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export class DataAwsccQuicksightThemePermissionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightThemePermissionsOutputReference {
    return new DataAwsccQuicksightThemePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightThemeTags {
}

export function dataAwsccQuicksightThemeTagsToTerraform(struct?: DataAwsccQuicksightThemeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeTagsToHclTerraform(struct?: DataAwsccQuicksightThemeTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightThemeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeTags | undefined) {
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

export class DataAwsccQuicksightThemeTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightThemeTagsOutputReference {
    return new DataAwsccQuicksightThemeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationDataColorPalette {
}

export function dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationDataColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationDataColorPaletteToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationDataColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationDataColorPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationDataColorPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // colors - computed: true, optional: false, required: false
  public get colors() {
    return this.getListAttribute('colors');
  }

  // empty_fill_color - computed: true, optional: false, required: false
  public get emptyFillColor() {
    return this.getStringAttribute('empty_fill_color');
  }

  // min_max_gradient - computed: true, optional: false, required: false
  public get minMaxGradient() {
    return this.getListAttribute('min_max_gradient');
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder {
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationSheetTileBorderToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationSheetTile {
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationSheetTileToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationSheetTile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationSheetTile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // border - computed: true, optional: false, required: false
  private _border = new DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference(this, "border");
  public get border() {
    return this._border;
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter {
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin {
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show - computed: true, optional: false, required: false
  public get show() {
    return this.getBooleanAttribute('show');
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout {
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gutter - computed: true, optional: false, required: false
  private _gutter = new DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference(this, "gutter");
  public get gutter() {
    return this._gutter;
  }

  // margin - computed: true, optional: false, required: false
  private _margin = new DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference(this, "margin");
  public get margin() {
    return this._margin;
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationSheet {
}

export function dataAwsccQuicksightThemeVersionConfigurationSheetToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationSheetToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationSheet): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationSheet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationSheet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tile - computed: true, optional: false, required: false
  private _tile = new DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference(this, "tile");
  public get tile() {
    return this._tile;
  }

  // tile_layout - computed: true, optional: false, required: false
  private _tileLayout = new DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference(this, "tile_layout");
  public get tileLayout() {
    return this._tileLayout;
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies {
}

export function dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
}

export class DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference {
    return new DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationTypography {
}

export function dataAwsccQuicksightThemeVersionConfigurationTypographyToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationTypographyToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationTypography): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationTypography | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationTypography | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_families - computed: true, optional: false, required: false
  private _fontFamilies = new DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList(this, "font_families", false);
  public get fontFamilies() {
    return this._fontFamilies;
  }
}
export interface DataAwsccQuicksightThemeVersionConfigurationUiColorPalette {
}

export function dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationUiColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationUiColorPaletteToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfigurationUiColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfigurationUiColorPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfigurationUiColorPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accent - computed: true, optional: false, required: false
  public get accent() {
    return this.getStringAttribute('accent');
  }

  // accent_foreground - computed: true, optional: false, required: false
  public get accentForeground() {
    return this.getStringAttribute('accent_foreground');
  }

  // danger - computed: true, optional: false, required: false
  public get danger() {
    return this.getStringAttribute('danger');
  }

  // danger_foreground - computed: true, optional: false, required: false
  public get dangerForeground() {
    return this.getStringAttribute('danger_foreground');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // dimension_foreground - computed: true, optional: false, required: false
  public get dimensionForeground() {
    return this.getStringAttribute('dimension_foreground');
  }

  // measure - computed: true, optional: false, required: false
  public get measure() {
    return this.getStringAttribute('measure');
  }

  // measure_foreground - computed: true, optional: false, required: false
  public get measureForeground() {
    return this.getStringAttribute('measure_foreground');
  }

  // primary_background - computed: true, optional: false, required: false
  public get primaryBackground() {
    return this.getStringAttribute('primary_background');
  }

  // primary_foreground - computed: true, optional: false, required: false
  public get primaryForeground() {
    return this.getStringAttribute('primary_foreground');
  }

  // secondary_background - computed: true, optional: false, required: false
  public get secondaryBackground() {
    return this.getStringAttribute('secondary_background');
  }

  // secondary_foreground - computed: true, optional: false, required: false
  public get secondaryForeground() {
    return this.getStringAttribute('secondary_foreground');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getStringAttribute('success');
  }

  // success_foreground - computed: true, optional: false, required: false
  public get successForeground() {
    return this.getStringAttribute('success_foreground');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // warning_foreground - computed: true, optional: false, required: false
  public get warningForeground() {
    return this.getStringAttribute('warning_foreground');
  }
}
export interface DataAwsccQuicksightThemeVersionConfiguration {
}

export function dataAwsccQuicksightThemeVersionConfigurationToTerraform(struct?: DataAwsccQuicksightThemeVersionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionConfigurationToHclTerraform(struct?: DataAwsccQuicksightThemeVersionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_color_palette - computed: true, optional: false, required: false
  private _dataColorPalette = new DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference(this, "data_color_palette");
  public get dataColorPalette() {
    return this._dataColorPalette;
  }

  // sheet - computed: true, optional: false, required: false
  private _sheet = new DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference(this, "sheet");
  public get sheet() {
    return this._sheet;
  }

  // typography - computed: true, optional: false, required: false
  private _typography = new DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference(this, "typography");
  public get typography() {
    return this._typography;
  }

  // ui_color_palette - computed: true, optional: false, required: false
  private _uiColorPalette = new DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference(this, "ui_color_palette");
  public get uiColorPalette() {
    return this._uiColorPalette;
  }
}
export interface DataAwsccQuicksightThemeVersionErrors {
}

export function dataAwsccQuicksightThemeVersionErrorsToTerraform(struct?: DataAwsccQuicksightThemeVersionErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionErrorsToHclTerraform(struct?: DataAwsccQuicksightThemeVersionErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionErrorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightThemeVersionErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersionErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccQuicksightThemeVersionErrorsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightThemeVersionErrorsOutputReference {
    return new DataAwsccQuicksightThemeVersionErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightThemeVersion {
}

export function dataAwsccQuicksightThemeVersionToTerraform(struct?: DataAwsccQuicksightThemeVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightThemeVersionToHclTerraform(struct?: DataAwsccQuicksightThemeVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightThemeVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightThemeVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightThemeVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_theme_id - computed: true, optional: false, required: false
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccQuicksightThemeVersionConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataAwsccQuicksightThemeVersionErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_theme awscc_quicksight_theme}
*/
export class DataAwsccQuicksightTheme extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQuicksightTheme resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQuicksightTheme to import
  * @param importFromId The id of the existing DataAwsccQuicksightTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQuicksightTheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/quicksight_theme awscc_quicksight_theme} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightThemeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_theme',
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

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // base_theme_id - computed: true, optional: false, required: false
  public get baseThemeId() {
    return this.getStringAttribute('base_theme_id');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccQuicksightThemeConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataAwsccQuicksightThemePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQuicksightThemeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // theme_id - computed: true, optional: false, required: false
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  private _version = new DataAwsccQuicksightThemeVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }

  // version_description - computed: true, optional: false, required: false
  public get versionDescription() {
    return this.getStringAttribute('version_description');
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
