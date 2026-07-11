// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightDashboardConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * <p>Dashboard publish options.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}
  */
  readonly dashboardPublishOptions?: QuicksightDashboardDashboardPublishOptions;
  /**
  * <p>The display name of the dashboard.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name?: string;
  /**
  * <p>A list of QuickSight parameters and the list's override values.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}
  */
  readonly parameters?: QuicksightDashboardParameters;
  /**
  * <p>A structure that contains the permissions of the dashboard. You can use this structure
  *             for granting permissions by providing a list of IAM action information for each
  *             principal ARN. </p>
  *
  *         <p>To specify no permissions, omit the permissions list.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}
  */
  readonly permissions?: QuicksightDashboardPermissions[] | cdktn.IResolvable;
  /**
  * <p>Dashboard source entity.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}
  */
  readonly sourceEntity: QuicksightDashboardSourceEntity;
  /**
  * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
  *             dashboard.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}
  */
  readonly tags?: QuicksightDashboardTags[] | cdktn.IResolvable;
  /**
  * <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
  *             you add a value for this field, it overrides the value that is used in the source
  *             entity. The theme ARN must exist in the same AWS account where you create the
  *             dashboard.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}
  */
  readonly themeArn?: string;
  /**
  * <p>A description for the first version of the dashboard being created.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}
  */
  readonly versionDescription?: string;
}
export interface QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: true, optional: true, required: false
  private _availabilityStatus?: string;
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsExportToCsvOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
  */
  readonly availabilityStatus?: string;
}

export function quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportToCsvOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_status: cdktn.stringToTerraform(struct!.availabilityStatus),
  }
}


export function quicksightDashboardDashboardPublishOptionsExportToCsvOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportToCsvOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_status: {
      value: cdktn.stringToHclTerraform(struct!.availabilityStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsExportToCsvOption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityStatus = this._availabilityStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsExportToCsvOption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityStatus = value.availabilityStatus;
    }
  }

  // availability_status - computed: true, optional: true, required: false
  private _availabilityStatus?: string;
  public get availabilityStatus() {
    return this.getStringAttribute('availability_status');
  }
  public set availabilityStatus(value: string) {
    this._availabilityStatus = value;
  }
  public resetAvailabilityStatus() {
    this._availabilityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityStatusInput() {
    return this._availabilityStatus;
  }
}
export interface QuicksightDashboardDashboardPublishOptionsSheetControlsOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}
  */
  readonly visibilityState?: string;
}

export function quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetControlsOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    visibility_state: cdktn.stringToTerraform(struct!.visibilityState),
  }
}


export function quicksightDashboardDashboardPublishOptionsSheetControlsOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetControlsOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    visibility_state: {
      value: cdktn.stringToHclTerraform(struct!.visibilityState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptionsSheetControlsOption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._visibilityState !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityState = this._visibilityState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptionsSheetControlsOption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._visibilityState = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._visibilityState = value.visibilityState;
    }
  }

  // visibility_state - computed: true, optional: true, required: false
  private _visibilityState?: string;
  public get visibilityState() {
    return this.getStringAttribute('visibility_state');
  }
  public set visibilityState(value: string) {
    this._visibilityState = value;
  }
  public resetVisibilityState() {
    this._visibilityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityStateInput() {
    return this._visibilityState;
  }
}
export interface QuicksightDashboardDashboardPublishOptions {
  /**
  * <p>Ad hoc (one-time) filtering option.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}
  */
  readonly adHocFilteringOption?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption;
  /**
  * <p>Export to .csv option.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#export_to_csv_option QuicksightDashboard#export_to_csv_option}
  */
  readonly exportToCsvOption?: QuicksightDashboardDashboardPublishOptionsExportToCsvOption;
  /**
  * <p>Sheet controls option.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#sheet_controls_option QuicksightDashboard#sheet_controls_option}
  */
  readonly sheetControlsOption?: QuicksightDashboardDashboardPublishOptionsSheetControlsOption;
}

export function quicksightDashboardDashboardPublishOptionsToTerraform(struct?: QuicksightDashboardDashboardPublishOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ad_hoc_filtering_option: quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct!.adHocFilteringOption),
    export_to_csv_option: quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct!.exportToCsvOption),
    sheet_controls_option: quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct!.sheetControlsOption),
  }
}


export function quicksightDashboardDashboardPublishOptionsToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ad_hoc_filtering_option: {
      value: quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToHclTerraform(struct!.adHocFilteringOption),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption",
    },
    export_to_csv_option: {
      value: quicksightDashboardDashboardPublishOptionsExportToCsvOptionToHclTerraform(struct!.exportToCsvOption),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDashboardDashboardPublishOptionsExportToCsvOption",
    },
    sheet_controls_option: {
      value: quicksightDashboardDashboardPublishOptionsSheetControlsOptionToHclTerraform(struct!.sheetControlsOption),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDashboardDashboardPublishOptionsSheetControlsOption",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardDashboardPublishOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDashboardDashboardPublishOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adHocFilteringOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adHocFilteringOption = this._adHocFilteringOption?.internalValue;
    }
    if (this._exportToCsvOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToCsvOption = this._exportToCsvOption?.internalValue;
    }
    if (this._sheetControlsOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetControlsOption = this._sheetControlsOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardDashboardPublishOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adHocFilteringOption.internalValue = undefined;
      this._exportToCsvOption.internalValue = undefined;
      this._sheetControlsOption.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adHocFilteringOption.internalValue = value.adHocFilteringOption;
      this._exportToCsvOption.internalValue = value.exportToCsvOption;
      this._sheetControlsOption.internalValue = value.sheetControlsOption;
    }
  }

  // ad_hoc_filtering_option - computed: true, optional: true, required: false
  private _adHocFilteringOption = new QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference(this, "ad_hoc_filtering_option");
  public get adHocFilteringOption() {
    return this._adHocFilteringOption;
  }
  public putAdHocFilteringOption(value: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption) {
    this._adHocFilteringOption.internalValue = value;
  }
  public resetAdHocFilteringOption() {
    this._adHocFilteringOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adHocFilteringOptionInput() {
    return this._adHocFilteringOption.internalValue;
  }

  // export_to_csv_option - computed: true, optional: true, required: false
  private _exportToCsvOption = new QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference(this, "export_to_csv_option");
  public get exportToCsvOption() {
    return this._exportToCsvOption;
  }
  public putExportToCsvOption(value: QuicksightDashboardDashboardPublishOptionsExportToCsvOption) {
    this._exportToCsvOption.internalValue = value;
  }
  public resetExportToCsvOption() {
    this._exportToCsvOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToCsvOptionInput() {
    return this._exportToCsvOption.internalValue;
  }

  // sheet_controls_option - computed: true, optional: true, required: false
  private _sheetControlsOption = new QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference(this, "sheet_controls_option");
  public get sheetControlsOption() {
    return this._sheetControlsOption;
  }
  public putSheetControlsOption(value: QuicksightDashboardDashboardPublishOptionsSheetControlsOption) {
    this._sheetControlsOption.internalValue = value;
  }
  public resetSheetControlsOption() {
    this._sheetControlsOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetControlsOptionInput() {
    return this._sheetControlsOption.internalValue;
  }
}
export interface QuicksightDashboardParametersDateTimeParameters {
  /**
  * <p>A display name for the date-time parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name?: string;
  /**
  * <p>The values for the date-time parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
  */
  readonly values?: string[];
}

export function quicksightDashboardParametersDateTimeParametersToTerraform(struct?: QuicksightDashboardParametersDateTimeParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function quicksightDashboardParametersDateTimeParametersToHclTerraform(struct?: QuicksightDashboardParametersDateTimeParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardParametersDateTimeParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDashboardParametersDateTimeParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParametersDateTimeParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: true, optional: true, required: false
  private _values?: string[];
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class QuicksightDashboardParametersDateTimeParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightDashboardParametersDateTimeParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDashboardParametersDateTimeParametersOutputReference {
    return new QuicksightDashboardParametersDateTimeParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardParametersDecimalParameters {
  /**
  * <p>A display name for the decimal parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name?: string;
  /**
  * <p>The values for the decimal parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
  */
  readonly values?: number[];
}

export function quicksightDashboardParametersDecimalParametersToTerraform(struct?: QuicksightDashboardParametersDecimalParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function quicksightDashboardParametersDecimalParametersToHclTerraform(struct?: QuicksightDashboardParametersDecimalParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardParametersDecimalParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDashboardParametersDecimalParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParametersDecimalParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: true, optional: true, required: false
  private _values?: number[];
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class QuicksightDashboardParametersDecimalParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightDashboardParametersDecimalParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDashboardParametersDecimalParametersOutputReference {
    return new QuicksightDashboardParametersDecimalParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardParametersIntegerParameters {
  /**
  * <p>The name of the integer parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name?: string;
  /**
  * <p>The values for the integer parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
  */
  readonly values?: number[];
}

export function quicksightDashboardParametersIntegerParametersToTerraform(struct?: QuicksightDashboardParametersIntegerParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function quicksightDashboardParametersIntegerParametersToHclTerraform(struct?: QuicksightDashboardParametersIntegerParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardParametersIntegerParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDashboardParametersIntegerParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParametersIntegerParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: true, optional: true, required: false
  private _values?: number[];
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class QuicksightDashboardParametersIntegerParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightDashboardParametersIntegerParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDashboardParametersIntegerParametersOutputReference {
    return new QuicksightDashboardParametersIntegerParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardParametersStringParameters {
  /**
  * <p>A display name for a string parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
  */
  readonly name?: string;
  /**
  * <p>The values of a string parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
  */
  readonly values?: string[];
}

export function quicksightDashboardParametersStringParametersToTerraform(struct?: QuicksightDashboardParametersStringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function quicksightDashboardParametersStringParametersToHclTerraform(struct?: QuicksightDashboardParametersStringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardParametersStringParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDashboardParametersStringParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParametersStringParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: true, optional: true, required: false
  private _values?: string[];
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class QuicksightDashboardParametersStringParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightDashboardParametersStringParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDashboardParametersStringParametersOutputReference {
    return new QuicksightDashboardParametersStringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardParameters {
  /**
  * <p>Date-time parameters.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#date_time_parameters QuicksightDashboard#date_time_parameters}
  */
  readonly dateTimeParameters?: QuicksightDashboardParametersDateTimeParameters[] | cdktn.IResolvable;
  /**
  * <p>Decimal parameters.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#decimal_parameters QuicksightDashboard#decimal_parameters}
  */
  readonly decimalParameters?: QuicksightDashboardParametersDecimalParameters[] | cdktn.IResolvable;
  /**
  * <p>Integer parameters.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#integer_parameters QuicksightDashboard#integer_parameters}
  */
  readonly integerParameters?: QuicksightDashboardParametersIntegerParameters[] | cdktn.IResolvable;
  /**
  * <p>String parameters.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#string_parameters QuicksightDashboard#string_parameters}
  */
  readonly stringParameters?: QuicksightDashboardParametersStringParameters[] | cdktn.IResolvable;
}

export function quicksightDashboardParametersToTerraform(struct?: QuicksightDashboardParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_time_parameters: cdktn.listMapper(quicksightDashboardParametersDateTimeParametersToTerraform, false)(struct!.dateTimeParameters),
    decimal_parameters: cdktn.listMapper(quicksightDashboardParametersDecimalParametersToTerraform, false)(struct!.decimalParameters),
    integer_parameters: cdktn.listMapper(quicksightDashboardParametersIntegerParametersToTerraform, false)(struct!.integerParameters),
    string_parameters: cdktn.listMapper(quicksightDashboardParametersStringParametersToTerraform, false)(struct!.stringParameters),
  }
}


export function quicksightDashboardParametersToHclTerraform(struct?: QuicksightDashboardParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_time_parameters: {
      value: cdktn.listMapperHcl(quicksightDashboardParametersDateTimeParametersToHclTerraform, false)(struct!.dateTimeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightDashboardParametersDateTimeParametersList",
    },
    decimal_parameters: {
      value: cdktn.listMapperHcl(quicksightDashboardParametersDecimalParametersToHclTerraform, false)(struct!.decimalParameters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightDashboardParametersDecimalParametersList",
    },
    integer_parameters: {
      value: cdktn.listMapperHcl(quicksightDashboardParametersIntegerParametersToHclTerraform, false)(struct!.integerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightDashboardParametersIntegerParametersList",
    },
    string_parameters: {
      value: cdktn.listMapperHcl(quicksightDashboardParametersStringParametersToHclTerraform, false)(struct!.stringParameters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightDashboardParametersStringParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDashboardParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dateTimeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeParameters = this._dateTimeParameters?.internalValue;
    }
    if (this._decimalParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalParameters = this._decimalParameters?.internalValue;
    }
    if (this._integerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerParameters = this._integerParameters?.internalValue;
    }
    if (this._stringParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringParameters = this._stringParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dateTimeParameters.internalValue = undefined;
      this._decimalParameters.internalValue = undefined;
      this._integerParameters.internalValue = undefined;
      this._stringParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dateTimeParameters.internalValue = value.dateTimeParameters;
      this._decimalParameters.internalValue = value.decimalParameters;
      this._integerParameters.internalValue = value.integerParameters;
      this._stringParameters.internalValue = value.stringParameters;
    }
  }

  // date_time_parameters - computed: true, optional: true, required: false
  private _dateTimeParameters = new QuicksightDashboardParametersDateTimeParametersList(this, "date_time_parameters", false);
  public get dateTimeParameters() {
    return this._dateTimeParameters;
  }
  public putDateTimeParameters(value: QuicksightDashboardParametersDateTimeParameters[] | cdktn.IResolvable) {
    this._dateTimeParameters.internalValue = value;
  }
  public resetDateTimeParameters() {
    this._dateTimeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeParametersInput() {
    return this._dateTimeParameters.internalValue;
  }

  // decimal_parameters - computed: true, optional: true, required: false
  private _decimalParameters = new QuicksightDashboardParametersDecimalParametersList(this, "decimal_parameters", false);
  public get decimalParameters() {
    return this._decimalParameters;
  }
  public putDecimalParameters(value: QuicksightDashboardParametersDecimalParameters[] | cdktn.IResolvable) {
    this._decimalParameters.internalValue = value;
  }
  public resetDecimalParameters() {
    this._decimalParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalParametersInput() {
    return this._decimalParameters.internalValue;
  }

  // integer_parameters - computed: true, optional: true, required: false
  private _integerParameters = new QuicksightDashboardParametersIntegerParametersList(this, "integer_parameters", false);
  public get integerParameters() {
    return this._integerParameters;
  }
  public putIntegerParameters(value: QuicksightDashboardParametersIntegerParameters[] | cdktn.IResolvable) {
    this._integerParameters.internalValue = value;
  }
  public resetIntegerParameters() {
    this._integerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerParametersInput() {
    return this._integerParameters.internalValue;
  }

  // string_parameters - computed: true, optional: true, required: false
  private _stringParameters = new QuicksightDashboardParametersStringParametersList(this, "string_parameters", false);
  public get stringParameters() {
    return this._stringParameters;
  }
  public putStringParameters(value: QuicksightDashboardParametersStringParameters[] | cdktn.IResolvable) {
    this._stringParameters.internalValue = value;
  }
  public resetStringParameters() {
    this._stringParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringParametersInput() {
    return this._stringParameters.internalValue;
  }
}
export interface QuicksightDashboardPermissions {
  /**
  * <p>The IAM action to grant or revoke permissions on.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}
  */
  readonly actions?: string[];
  /**
  * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
  *             following:</p>
  *         <ul>
  *             <li>
  *                 <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
  *             </li>
  *             <li>
  *                 <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
  *             </li>
  *             <li>
  *                 <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
  *                     ARN. Use this option only to share resources (templates) across AWS accounts.
  *                     (This is less common.) </p>
  *             </li>
  *          </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}
  */
  readonly principal?: string;
}

export function quicksightDashboardPermissionsToTerraform(struct?: QuicksightDashboardPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function quicksightDashboardPermissionsToHclTerraform(struct?: QuicksightDashboardPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktn.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDashboardPermissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardPermissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principal = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principal = value.principal;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions?: string[];
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal - computed: true, optional: true, required: false
  private _principal?: string;
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class QuicksightDashboardPermissionsList extends cdktn.ComplexList {
  public internalValue? : QuicksightDashboardPermissions[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDashboardPermissionsOutputReference {
    return new QuicksightDashboardPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardSourceEntitySourceTemplateDataSetReferences {
  /**
  * <p>Dataset Amazon Resource Name (ARN).</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}
  */
  readonly dataSetArn?: string;
  /**
  * <p>Dataset placeholder.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}
  */
  readonly dataSetPlaceholder?: string;
}

export function quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktn.stringToTerraform(struct!.dataSetPlaceholder),
  }
}


export function quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToHclTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_set_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataSetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_set_placeholder: {
      value: cdktn.stringToHclTerraform(struct!.dataSetPlaceholder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetArn = this._dataSetArn;
    }
    if (this._dataSetPlaceholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetPlaceholder = this._dataSetPlaceholder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSetArn = undefined;
      this._dataSetPlaceholder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSetArn = value.dataSetArn;
      this._dataSetPlaceholder = value.dataSetPlaceholder;
    }
  }

  // data_set_arn - computed: true, optional: true, required: false
  private _dataSetArn?: string;
  public get dataSetArn() {
    return this.getStringAttribute('data_set_arn');
  }
  public set dataSetArn(value: string) {
    this._dataSetArn = value;
  }
  public resetDataSetArn() {
    this._dataSetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetArnInput() {
    return this._dataSetArn;
  }

  // data_set_placeholder - computed: true, optional: true, required: false
  private _dataSetPlaceholder?: string;
  public get dataSetPlaceholder() {
    return this.getStringAttribute('data_set_placeholder');
  }
  public set dataSetPlaceholder(value: string) {
    this._dataSetPlaceholder = value;
  }
  public resetDataSetPlaceholder() {
    this._dataSetPlaceholder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetPlaceholderInput() {
    return this._dataSetPlaceholder;
  }
}

export class QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList extends cdktn.ComplexList {
  public internalValue? : QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference {
    return new QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardSourceEntitySourceTemplate {
  /**
  * <p>The Amazon Resource Name (ARN) of the resource.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}
  */
  readonly arn?: string;
  /**
  * <p>Dataset references.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#data_set_references QuicksightDashboard#data_set_references}
  */
  readonly dataSetReferences?: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | cdktn.IResolvable;
}

export function quicksightDashboardSourceEntitySourceTemplateToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    data_set_references: cdktn.listMapper(quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform, false)(struct!.dataSetReferences),
  }
}


export function quicksightDashboardSourceEntitySourceTemplateToHclTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplate | cdktn.IResolvable): any {
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
    data_set_references: {
      value: cdktn.listMapperHcl(quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToHclTerraform, false)(struct!.dataSetReferences),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardSourceEntitySourceTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDashboardSourceEntitySourceTemplate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._dataSetReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSetReferences = this._dataSetReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardSourceEntitySourceTemplate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._dataSetReferences.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._dataSetReferences.internalValue = value.dataSetReferences;
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

  // data_set_references - computed: true, optional: true, required: false
  private _dataSetReferences = new QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList(this, "data_set_references", false);
  public get dataSetReferences() {
    return this._dataSetReferences;
  }
  public putDataSetReferences(value: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | cdktn.IResolvable) {
    this._dataSetReferences.internalValue = value;
  }
  public resetDataSetReferences() {
    this._dataSetReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetReferencesInput() {
    return this._dataSetReferences.internalValue;
  }
}
export interface QuicksightDashboardSourceEntity {
  /**
  * <p>Dashboard source template.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#source_template QuicksightDashboard#source_template}
  */
  readonly sourceTemplate?: QuicksightDashboardSourceEntitySourceTemplate;
}

export function quicksightDashboardSourceEntityToTerraform(struct?: QuicksightDashboardSourceEntity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_template: quicksightDashboardSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}


export function quicksightDashboardSourceEntityToHclTerraform(struct?: QuicksightDashboardSourceEntity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_template: {
      value: quicksightDashboardSourceEntitySourceTemplateToHclTerraform(struct!.sourceTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDashboardSourceEntitySourceTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDashboardSourceEntityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDashboardSourceEntity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTemplate = this._sourceTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardSourceEntity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceTemplate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceTemplate.internalValue = value.sourceTemplate;
    }
  }

  // source_template - computed: true, optional: true, required: false
  private _sourceTemplate = new QuicksightDashboardSourceEntitySourceTemplateOutputReference(this, "source_template");
  public get sourceTemplate() {
    return this._sourceTemplate;
  }
  public putSourceTemplate(value: QuicksightDashboardSourceEntitySourceTemplate) {
    this._sourceTemplate.internalValue = value;
  }
  public resetSourceTemplate() {
    this._sourceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTemplateInput() {
    return this._sourceTemplate.internalValue;
  }
}
export interface QuicksightDashboardTags {
  /**
  * <p>Tag key.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#key QuicksightDashboard#key}
  */
  readonly key?: string;
  /**
  * <p>Tag value.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#value QuicksightDashboard#value}
  */
  readonly value?: string;
}

export function quicksightDashboardTagsToTerraform(struct?: QuicksightDashboardTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightDashboardTagsToHclTerraform(struct?: QuicksightDashboardTags | cdktn.IResolvable): any {
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

export class QuicksightDashboardTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDashboardTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightDashboardTags | cdktn.IResolvable | undefined) {
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

export class QuicksightDashboardTagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightDashboardTags[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDashboardTagsOutputReference {
    return new QuicksightDashboardTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardVersionErrors {
}

export function quicksightDashboardVersionErrorsToTerraform(struct?: QuicksightDashboardVersionErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightDashboardVersionErrorsToHclTerraform(struct?: QuicksightDashboardVersionErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightDashboardVersionErrorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDashboardVersionErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardVersionErrors | undefined) {
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

export class QuicksightDashboardVersionErrorsList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightDashboardVersionErrorsOutputReference {
    return new QuicksightDashboardVersionErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardVersionSheets {
}

export function quicksightDashboardVersionSheetsToTerraform(struct?: QuicksightDashboardVersionSheets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightDashboardVersionSheetsToHclTerraform(struct?: QuicksightDashboardVersionSheets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightDashboardVersionSheetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDashboardVersionSheets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardVersionSheets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sheet_id - computed: true, optional: false, required: false
  public get sheetId() {
    return this.getStringAttribute('sheet_id');
  }
}

export class QuicksightDashboardVersionSheetsList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightDashboardVersionSheetsOutputReference {
    return new QuicksightDashboardVersionSheetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDashboardVersion {
}

export function quicksightDashboardVersionToTerraform(struct?: QuicksightDashboardVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightDashboardVersionToHclTerraform(struct?: QuicksightDashboardVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightDashboardVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDashboardVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDashboardVersion | undefined) {
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

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_set_arns - computed: true, optional: false, required: false
  public get dataSetArns() {
    return this.getListAttribute('data_set_arns');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new QuicksightDashboardVersionErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // sheets - computed: true, optional: false, required: false
  private _sheets = new QuicksightDashboardVersionSheetsList(this, "sheets", false);
  public get sheets() {
    return this._sheets;
  }

  // source_entity_arn - computed: true, optional: false, required: false
  public get sourceEntityArn() {
    return this.getStringAttribute('source_entity_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // theme_arn - computed: true, optional: false, required: false
  public get themeArn() {
    return this.getStringAttribute('theme_arn');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard awscc_quicksight_dashboard}
*/
export class QuicksightDashboard extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightDashboard resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightDashboard to import
  * @param importFromId The id of the existing QuicksightDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/quicksight_dashboard awscc_quicksight_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_dashboard',
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
    this._awsAccountId = config.awsAccountId;
    this._dashboardId = config.dashboardId;
    this._dashboardPublishOptions.internalValue = config.dashboardPublishOptions;
    this._name = config.name;
    this._parameters.internalValue = config.parameters;
    this._permissions.internalValue = config.permissions;
    this._sourceEntity.internalValue = config.sourceEntity;
    this._tags.internalValue = config.tags;
    this._themeArn = config.themeArn;
    this._versionDescription = config.versionDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string;
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string;
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // dashboard_publish_options - computed: true, optional: true, required: false
  private _dashboardPublishOptions = new QuicksightDashboardDashboardPublishOptionsOutputReference(this, "dashboard_publish_options");
  public get dashboardPublishOptions() {
    return this._dashboardPublishOptions;
  }
  public putDashboardPublishOptions(value: QuicksightDashboardDashboardPublishOptions) {
    this._dashboardPublishOptions.internalValue = value;
  }
  public resetDashboardPublishOptions() {
    this._dashboardPublishOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPublishOptionsInput() {
    return this._dashboardPublishOptions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_published_time - computed: true, optional: false, required: false
  public get lastPublishedTime() {
    return this.getStringAttribute('last_published_time');
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

  // parameters - computed: true, optional: true, required: false
  private _parameters = new QuicksightDashboardParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: QuicksightDashboardParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions = new QuicksightDashboardPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: QuicksightDashboardPermissions[] | cdktn.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // source_entity - computed: false, optional: false, required: true
  private _sourceEntity = new QuicksightDashboardSourceEntityOutputReference(this, "source_entity");
  public get sourceEntity() {
    return this._sourceEntity;
  }
  public putSourceEntity(value: QuicksightDashboardSourceEntity) {
    this._sourceEntity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityInput() {
    return this._sourceEntity.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QuicksightDashboardTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightDashboardTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // theme_arn - computed: true, optional: true, required: false
  private _themeArn?: string;
  public get themeArn() {
    return this.getStringAttribute('theme_arn');
  }
  public set themeArn(value: string) {
    this._themeArn = value;
  }
  public resetThemeArn() {
    this._themeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeArnInput() {
    return this._themeArn;
  }

  // version - computed: true, optional: false, required: false
  private _version = new QuicksightDashboardVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }

  // version_description - computed: true, optional: true, required: false
  private _versionDescription?: string;
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      dashboard_id: cdktn.stringToTerraform(this._dashboardId),
      dashboard_publish_options: quicksightDashboardDashboardPublishOptionsToTerraform(this._dashboardPublishOptions.internalValue),
      name: cdktn.stringToTerraform(this._name),
      parameters: quicksightDashboardParametersToTerraform(this._parameters.internalValue),
      permissions: cdktn.listMapper(quicksightDashboardPermissionsToTerraform, false)(this._permissions.internalValue),
      source_entity: quicksightDashboardSourceEntityToTerraform(this._sourceEntity.internalValue),
      tags: cdktn.listMapper(quicksightDashboardTagsToTerraform, false)(this._tags.internalValue),
      theme_arn: cdktn.stringToTerraform(this._themeArn),
      version_description: cdktn.stringToTerraform(this._versionDescription),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_id: {
        value: cdktn.stringToHclTerraform(this._dashboardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_publish_options: {
        value: quicksightDashboardDashboardPublishOptionsToHclTerraform(this._dashboardPublishOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightDashboardDashboardPublishOptions",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: quicksightDashboardParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightDashboardParameters",
      },
      permissions: {
        value: cdktn.listMapperHcl(quicksightDashboardPermissionsToHclTerraform, false)(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightDashboardPermissionsList",
      },
      source_entity: {
        value: quicksightDashboardSourceEntityToHclTerraform(this._sourceEntity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightDashboardSourceEntity",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightDashboardTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightDashboardTagsList",
      },
      theme_arn: {
        value: cdktn.stringToHclTerraform(this._themeArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_description: {
        value: cdktn.stringToHclTerraform(this._versionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
