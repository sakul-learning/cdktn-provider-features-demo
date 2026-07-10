// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * <p>A display name for the template.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#name QuicksightTemplate#name}
  */
  readonly name?: string;
  /**
  * <p>A list of resource permissions to be set on the template. </p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#permissions QuicksightTemplate#permissions}
  */
  readonly permissions?: QuicksightTemplatePermissions[] | cdktn.IResolvable;
  /**
  * <p>The source entity of the template.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#source_entity QuicksightTemplate#source_entity}
  */
  readonly sourceEntity: QuicksightTemplateSourceEntity;
  /**
  * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#tags QuicksightTemplate#tags}
  */
  readonly tags?: QuicksightTemplateTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}
  */
  readonly templateId: string;
  /**
  * <p>A description of the current template version being created. This API operation creates the
  * 			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
  * 			version is created. Each version of the template maintains a description of the version
  * 			in the <code>VersionDescription</code> field.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#version_description QuicksightTemplate#version_description}
  */
  readonly versionDescription?: string;
}
export interface QuicksightTemplatePermissions {
  /**
  * <p>The IAM action to grant or revoke permissions on.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#principal QuicksightTemplate#principal}
  */
  readonly principal?: string;
}

export function quicksightTemplatePermissionsToTerraform(struct?: QuicksightTemplatePermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function quicksightTemplatePermissionsToHclTerraform(struct?: QuicksightTemplatePermissions | cdktn.IResolvable): any {
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

export class QuicksightTemplatePermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTemplatePermissions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplatePermissions | cdktn.IResolvable | undefined) {
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

export class QuicksightTemplatePermissionsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTemplatePermissions[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTemplatePermissionsOutputReference {
    return new QuicksightTemplatePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences {
  /**
  * <p>Dataset Amazon Resource Name (ARN).</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#data_set_arn QuicksightTemplate#data_set_arn}
  */
  readonly dataSetArn?: string;
  /**
  * <p>Dataset placeholder.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#data_set_placeholder QuicksightTemplate#data_set_placeholder}
  */
  readonly dataSetPlaceholder?: string;
}

export function quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktn.stringToTerraform(struct!.dataSetPlaceholder),
  }
}


export function quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToHclTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktn.IResolvable): any {
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

export class QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences | cdktn.IResolvable | undefined) {
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

export class QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList extends cdktn.ComplexList {
  public internalValue? : QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference {
    return new QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateSourceEntitySourceAnalysis {
  /**
  * <p>The Amazon Resource Name (ARN) of the resource.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}
  */
  readonly arn?: string;
  /**
  * <p>A structure containing information about the dataset references used as placeholders
  *             in the template.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#data_set_references QuicksightTemplate#data_set_references}
  */
  readonly dataSetReferences?: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | cdktn.IResolvable;
}

export function quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    data_set_references: cdktn.listMapper(quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToTerraform, false)(struct!.dataSetReferences),
  }
}


export function quicksightTemplateSourceEntitySourceAnalysisToHclTerraform(struct?: QuicksightTemplateSourceEntitySourceAnalysis | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(quicksightTemplateSourceEntitySourceAnalysisDataSetReferencesToHclTerraform, false)(struct!.dataSetReferences),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTemplateSourceEntitySourceAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTemplateSourceEntitySourceAnalysis | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateSourceEntitySourceAnalysis | cdktn.IResolvable | undefined) {
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
  private _dataSetReferences = new QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList(this, "data_set_references", false);
  public get dataSetReferences() {
    return this._dataSetReferences;
  }
  public putDataSetReferences(value: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[] | cdktn.IResolvable) {
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
export interface QuicksightTemplateSourceEntitySourceTemplate {
  /**
  * <p>The Amazon Resource Name (ARN) of the resource.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}
  */
  readonly arn?: string;
}

export function quicksightTemplateSourceEntitySourceTemplateToTerraform(struct?: QuicksightTemplateSourceEntitySourceTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function quicksightTemplateSourceEntitySourceTemplateToHclTerraform(struct?: QuicksightTemplateSourceEntitySourceTemplate | cdktn.IResolvable): any {
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

export class QuicksightTemplateSourceEntitySourceTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTemplateSourceEntitySourceTemplate | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateSourceEntitySourceTemplate | cdktn.IResolvable | undefined) {
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
export interface QuicksightTemplateSourceEntity {
  /**
  * <p>The source analysis of the template.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#source_analysis QuicksightTemplate#source_analysis}
  */
  readonly sourceAnalysis?: QuicksightTemplateSourceEntitySourceAnalysis;
  /**
  * <p>The source template of the template.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#source_template QuicksightTemplate#source_template}
  */
  readonly sourceTemplate?: QuicksightTemplateSourceEntitySourceTemplate;
}

export function quicksightTemplateSourceEntityToTerraform(struct?: QuicksightTemplateSourceEntity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_analysis: quicksightTemplateSourceEntitySourceAnalysisToTerraform(struct!.sourceAnalysis),
    source_template: quicksightTemplateSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}


export function quicksightTemplateSourceEntityToHclTerraform(struct?: QuicksightTemplateSourceEntity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_analysis: {
      value: quicksightTemplateSourceEntitySourceAnalysisToHclTerraform(struct!.sourceAnalysis),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTemplateSourceEntitySourceAnalysis",
    },
    source_template: {
      value: quicksightTemplateSourceEntitySourceTemplateToHclTerraform(struct!.sourceTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightTemplateSourceEntitySourceTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightTemplateSourceEntityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTemplateSourceEntity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAnalysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAnalysis = this._sourceAnalysis?.internalValue;
    }
    if (this._sourceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTemplate = this._sourceTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateSourceEntity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceAnalysis.internalValue = undefined;
      this._sourceTemplate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceAnalysis.internalValue = value.sourceAnalysis;
      this._sourceTemplate.internalValue = value.sourceTemplate;
    }
  }

  // source_analysis - computed: true, optional: true, required: false
  private _sourceAnalysis = new QuicksightTemplateSourceEntitySourceAnalysisOutputReference(this, "source_analysis");
  public get sourceAnalysis() {
    return this._sourceAnalysis;
  }
  public putSourceAnalysis(value: QuicksightTemplateSourceEntitySourceAnalysis) {
    this._sourceAnalysis.internalValue = value;
  }
  public resetSourceAnalysis() {
    this._sourceAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAnalysisInput() {
    return this._sourceAnalysis.internalValue;
  }

  // source_template - computed: true, optional: true, required: false
  private _sourceTemplate = new QuicksightTemplateSourceEntitySourceTemplateOutputReference(this, "source_template");
  public get sourceTemplate() {
    return this._sourceTemplate;
  }
  public putSourceTemplate(value: QuicksightTemplateSourceEntitySourceTemplate) {
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
export interface QuicksightTemplateTags {
  /**
  * <p>Tag key.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#key QuicksightTemplate#key}
  */
  readonly key?: string;
  /**
  * <p>Tag value.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#value QuicksightTemplate#value}
  */
  readonly value?: string;
}

export function quicksightTemplateTagsToTerraform(struct?: QuicksightTemplateTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightTemplateTagsToHclTerraform(struct?: QuicksightTemplateTags | cdktn.IResolvable): any {
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

export class QuicksightTemplateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTemplateTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightTemplateTags | cdktn.IResolvable | undefined) {
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

export class QuicksightTemplateTagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightTemplateTags[] | cdktn.IResolvable

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
  public get(index: number): QuicksightTemplateTagsOutputReference {
    return new QuicksightTemplateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct {
}

export function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructToHclTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct | undefined) {
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
}

export class QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference {
    return new QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct {
}

export function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructToHclTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_group_column_schema_list - computed: true, optional: false, required: false
  private _columnGroupColumnSchemaList = new QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList(this, "column_group_column_schema_list", false);
  public get columnGroupColumnSchemaList() {
    return this._columnGroupColumnSchemaList;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference {
    return new QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct {
}

export function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructToHclTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // geographic_role - computed: true, optional: false, required: false
  public get geographicRole() {
    return this.getStringAttribute('geographic_role');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference {
    return new QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateVersionDataSetConfigurationsDataSetSchema {
}

export function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightTemplateVersionDataSetConfigurationsDataSetSchemaToHclTerraform(struct?: QuicksightTemplateVersionDataSetConfigurationsDataSetSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTemplateVersionDataSetConfigurationsDataSetSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateVersionDataSetConfigurationsDataSetSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_schema_list - computed: true, optional: false, required: false
  private _columnSchemaList = new QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList(this, "column_schema_list", false);
  public get columnSchemaList() {
    return this._columnSchemaList;
  }
}
export interface QuicksightTemplateVersionDataSetConfigurations {
}

export function quicksightTemplateVersionDataSetConfigurationsToTerraform(struct?: QuicksightTemplateVersionDataSetConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightTemplateVersionDataSetConfigurationsToHclTerraform(struct?: QuicksightTemplateVersionDataSetConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightTemplateVersionDataSetConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTemplateVersionDataSetConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateVersionDataSetConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_group_schema_list - computed: true, optional: false, required: false
  private _columnGroupSchemaList = new QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList(this, "column_group_schema_list", false);
  public get columnGroupSchemaList() {
    return this._columnGroupSchemaList;
  }

  // data_set_schema - computed: true, optional: false, required: false
  private _dataSetSchema = new QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference(this, "data_set_schema");
  public get dataSetSchema() {
    return this._dataSetSchema;
  }

  // placeholder - computed: true, optional: false, required: false
  public get placeholder() {
    return this.getStringAttribute('placeholder');
  }
}

export class QuicksightTemplateVersionDataSetConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightTemplateVersionDataSetConfigurationsOutputReference {
    return new QuicksightTemplateVersionDataSetConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateVersionErrors {
}

export function quicksightTemplateVersionErrorsToTerraform(struct?: QuicksightTemplateVersionErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightTemplateVersionErrorsToHclTerraform(struct?: QuicksightTemplateVersionErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightTemplateVersionErrorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTemplateVersionErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateVersionErrors | undefined) {
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

export class QuicksightTemplateVersionErrorsList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightTemplateVersionErrorsOutputReference {
    return new QuicksightTemplateVersionErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateVersionSheets {
}

export function quicksightTemplateVersionSheetsToTerraform(struct?: QuicksightTemplateVersionSheets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightTemplateVersionSheetsToHclTerraform(struct?: QuicksightTemplateVersionSheets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightTemplateVersionSheetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightTemplateVersionSheets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateVersionSheets | undefined) {
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

export class QuicksightTemplateVersionSheetsList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightTemplateVersionSheetsOutputReference {
    return new QuicksightTemplateVersionSheetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightTemplateVersion {
}

export function quicksightTemplateVersionToTerraform(struct?: QuicksightTemplateVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightTemplateVersionToHclTerraform(struct?: QuicksightTemplateVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightTemplateVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightTemplateVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightTemplateVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_set_configurations - computed: true, optional: false, required: false
  private _dataSetConfigurations = new QuicksightTemplateVersionDataSetConfigurationsList(this, "data_set_configurations", false);
  public get dataSetConfigurations() {
    return this._dataSetConfigurations;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new QuicksightTemplateVersionErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // sheets - computed: true, optional: false, required: false
  private _sheets = new QuicksightTemplateVersionSheetsList(this, "sheets", false);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template awscc_quicksight_template}
*/
export class QuicksightTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightTemplate to import
  * @param importFromId The id of the existing QuicksightTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/quicksight_template awscc_quicksight_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_template',
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
    this._awsAccountId = config.awsAccountId;
    this._name = config.name;
    this._permissions.internalValue = config.permissions;
    this._sourceEntity.internalValue = config.sourceEntity;
    this._tags.internalValue = config.tags;
    this._templateId = config.templateId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // permissions - computed: true, optional: true, required: false
  private _permissions = new QuicksightTemplatePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: QuicksightTemplatePermissions[] | cdktn.IResolvable) {
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
  private _sourceEntity = new QuicksightTemplateSourceEntityOutputReference(this, "source_entity");
  public get sourceEntity() {
    return this._sourceEntity;
  }
  public putSourceEntity(value: QuicksightTemplateSourceEntity) {
    this._sourceEntity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityInput() {
    return this._sourceEntity.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QuicksightTemplateTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightTemplateTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // version - computed: true, optional: false, required: false
  private _version = new QuicksightTemplateVersionOutputReference(this, "version");
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
      name: cdktn.stringToTerraform(this._name),
      permissions: cdktn.listMapper(quicksightTemplatePermissionsToTerraform, false)(this._permissions.internalValue),
      source_entity: quicksightTemplateSourceEntityToTerraform(this._sourceEntity.internalValue),
      tags: cdktn.listMapper(quicksightTemplateTagsToTerraform, false)(this._tags.internalValue),
      template_id: cdktn.stringToTerraform(this._templateId),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktn.listMapperHcl(quicksightTemplatePermissionsToHclTerraform, false)(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightTemplatePermissionsList",
      },
      source_entity: {
        value: quicksightTemplateSourceEntityToHclTerraform(this._sourceEntity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightTemplateSourceEntity",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightTemplateTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightTemplateTagsList",
      },
      template_id: {
        value: cdktn.stringToHclTerraform(this._templateId),
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
