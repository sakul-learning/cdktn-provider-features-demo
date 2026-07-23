// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightAnalysisConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}
  */
  readonly analysisId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * <p>Errors associated with the analysis.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#errors QuicksightAnalysis#errors}
  */
  readonly errors?: QuicksightAnalysisErrors[] | cdktn.IResolvable;
  /**
  * <p>The descriptive name of the analysis.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
  */
  readonly name?: string;
  /**
  * <p>A list of QuickSight parameters and the list's override values.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#parameters QuicksightAnalysis#parameters}
  */
  readonly parameters?: QuicksightAnalysisParameters;
  /**
  * <p>A structure that describes the principals and the resource-level permissions on an
  *             analysis. You can use the <code>Permissions</code> structure to grant permissions by
  *             providing a list of AWS Identity and Access Management (IAM) action information for each
  *             principal listed by Amazon Resource Name (ARN). </p>
  * 
  *         <p>To specify no permissions, omit <code>Permissions</code>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#permissions QuicksightAnalysis#permissions}
  */
  readonly permissions?: QuicksightAnalysisPermissions[] | cdktn.IResolvable;
  /**
  * <p>The source entity of an analysis.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#source_entity QuicksightAnalysis#source_entity}
  */
  readonly sourceEntity: QuicksightAnalysisSourceEntity;
  /**
  * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
  *             analysis.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}
  */
  readonly tags?: QuicksightAnalysisTags[] | cdktn.IResolvable;
  /**
  * <p>The ARN of the theme of the analysis.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}
  */
  readonly themeArn?: string;
}
export interface QuicksightAnalysisErrors {
  /**
  * <p>The message associated with the analysis error.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#message QuicksightAnalysis#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#type QuicksightAnalysis#type}
  */
  readonly type?: string;
}

export function quicksightAnalysisErrorsToTerraform(struct?: QuicksightAnalysisErrors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.stringToTerraform(struct!.message),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function quicksightAnalysisErrorsToHclTerraform(struct?: QuicksightAnalysisErrors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
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

export class QuicksightAnalysisErrorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightAnalysisErrors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightAnalysisErrors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

export class QuicksightAnalysisErrorsList extends cdktn.ComplexList {
  public internalValue? : QuicksightAnalysisErrors[] | cdktn.IResolvable

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
  public get(index: number): QuicksightAnalysisErrorsOutputReference {
    return new QuicksightAnalysisErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightAnalysisParametersDateTimeParameters {
  /**
  * <p>A display name for the date-time parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
  */
  readonly name?: string;
  /**
  * <p>The values for the date-time parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}
  */
  readonly values?: string[];
}

export function quicksightAnalysisParametersDateTimeParametersToTerraform(struct?: QuicksightAnalysisParametersDateTimeParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function quicksightAnalysisParametersDateTimeParametersToHclTerraform(struct?: QuicksightAnalysisParametersDateTimeParameters | cdktn.IResolvable): any {
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

export class QuicksightAnalysisParametersDateTimeParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightAnalysisParametersDateTimeParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisParametersDateTimeParameters | cdktn.IResolvable | undefined) {
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

export class QuicksightAnalysisParametersDateTimeParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightAnalysisParametersDateTimeParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightAnalysisParametersDateTimeParametersOutputReference {
    return new QuicksightAnalysisParametersDateTimeParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightAnalysisParametersDecimalParameters {
  /**
  * <p>A display name for the decimal parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
  */
  readonly name?: string;
  /**
  * <p>The values for the decimal parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}
  */
  readonly values?: number[];
}

export function quicksightAnalysisParametersDecimalParametersToTerraform(struct?: QuicksightAnalysisParametersDecimalParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function quicksightAnalysisParametersDecimalParametersToHclTerraform(struct?: QuicksightAnalysisParametersDecimalParameters | cdktn.IResolvable): any {
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

export class QuicksightAnalysisParametersDecimalParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightAnalysisParametersDecimalParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisParametersDecimalParameters | cdktn.IResolvable | undefined) {
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

export class QuicksightAnalysisParametersDecimalParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightAnalysisParametersDecimalParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightAnalysisParametersDecimalParametersOutputReference {
    return new QuicksightAnalysisParametersDecimalParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightAnalysisParametersIntegerParameters {
  /**
  * <p>The name of the integer parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
  */
  readonly name?: string;
  /**
  * <p>The values for the integer parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}
  */
  readonly values?: number[];
}

export function quicksightAnalysisParametersIntegerParametersToTerraform(struct?: QuicksightAnalysisParametersIntegerParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.values),
  }
}


export function quicksightAnalysisParametersIntegerParametersToHclTerraform(struct?: QuicksightAnalysisParametersIntegerParameters | cdktn.IResolvable): any {
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

export class QuicksightAnalysisParametersIntegerParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightAnalysisParametersIntegerParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisParametersIntegerParameters | cdktn.IResolvable | undefined) {
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

export class QuicksightAnalysisParametersIntegerParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightAnalysisParametersIntegerParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightAnalysisParametersIntegerParametersOutputReference {
    return new QuicksightAnalysisParametersIntegerParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightAnalysisParametersStringParameters {
  /**
  * <p>A display name for a string parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
  */
  readonly name?: string;
  /**
  * <p>The values of a string parameter.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}
  */
  readonly values?: string[];
}

export function quicksightAnalysisParametersStringParametersToTerraform(struct?: QuicksightAnalysisParametersStringParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function quicksightAnalysisParametersStringParametersToHclTerraform(struct?: QuicksightAnalysisParametersStringParameters | cdktn.IResolvable): any {
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

export class QuicksightAnalysisParametersStringParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightAnalysisParametersStringParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisParametersStringParameters | cdktn.IResolvable | undefined) {
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

export class QuicksightAnalysisParametersStringParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightAnalysisParametersStringParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightAnalysisParametersStringParametersOutputReference {
    return new QuicksightAnalysisParametersStringParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightAnalysisParameters {
  /**
  * <p>Date-time parameters.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#date_time_parameters QuicksightAnalysis#date_time_parameters}
  */
  readonly dateTimeParameters?: QuicksightAnalysisParametersDateTimeParameters[] | cdktn.IResolvable;
  /**
  * <p>Decimal parameters.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#decimal_parameters QuicksightAnalysis#decimal_parameters}
  */
  readonly decimalParameters?: QuicksightAnalysisParametersDecimalParameters[] | cdktn.IResolvable;
  /**
  * <p>Integer parameters.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#integer_parameters QuicksightAnalysis#integer_parameters}
  */
  readonly integerParameters?: QuicksightAnalysisParametersIntegerParameters[] | cdktn.IResolvable;
  /**
  * <p>String parameters.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#string_parameters QuicksightAnalysis#string_parameters}
  */
  readonly stringParameters?: QuicksightAnalysisParametersStringParameters[] | cdktn.IResolvable;
}

export function quicksightAnalysisParametersToTerraform(struct?: QuicksightAnalysisParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    date_time_parameters: cdktn.listMapper(quicksightAnalysisParametersDateTimeParametersToTerraform, false)(struct!.dateTimeParameters),
    decimal_parameters: cdktn.listMapper(quicksightAnalysisParametersDecimalParametersToTerraform, false)(struct!.decimalParameters),
    integer_parameters: cdktn.listMapper(quicksightAnalysisParametersIntegerParametersToTerraform, false)(struct!.integerParameters),
    string_parameters: cdktn.listMapper(quicksightAnalysisParametersStringParametersToTerraform, false)(struct!.stringParameters),
  }
}


export function quicksightAnalysisParametersToHclTerraform(struct?: QuicksightAnalysisParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    date_time_parameters: {
      value: cdktn.listMapperHcl(quicksightAnalysisParametersDateTimeParametersToHclTerraform, false)(struct!.dateTimeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightAnalysisParametersDateTimeParametersList",
    },
    decimal_parameters: {
      value: cdktn.listMapperHcl(quicksightAnalysisParametersDecimalParametersToHclTerraform, false)(struct!.decimalParameters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightAnalysisParametersDecimalParametersList",
    },
    integer_parameters: {
      value: cdktn.listMapperHcl(quicksightAnalysisParametersIntegerParametersToHclTerraform, false)(struct!.integerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightAnalysisParametersIntegerParametersList",
    },
    string_parameters: {
      value: cdktn.listMapperHcl(quicksightAnalysisParametersStringParametersToHclTerraform, false)(struct!.stringParameters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightAnalysisParametersStringParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightAnalysisParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightAnalysisParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisParameters | cdktn.IResolvable | undefined) {
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
  private _dateTimeParameters = new QuicksightAnalysisParametersDateTimeParametersList(this, "date_time_parameters", false);
  public get dateTimeParameters() {
    return this._dateTimeParameters;
  }
  public putDateTimeParameters(value: QuicksightAnalysisParametersDateTimeParameters[] | cdktn.IResolvable) {
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
  private _decimalParameters = new QuicksightAnalysisParametersDecimalParametersList(this, "decimal_parameters", false);
  public get decimalParameters() {
    return this._decimalParameters;
  }
  public putDecimalParameters(value: QuicksightAnalysisParametersDecimalParameters[] | cdktn.IResolvable) {
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
  private _integerParameters = new QuicksightAnalysisParametersIntegerParametersList(this, "integer_parameters", false);
  public get integerParameters() {
    return this._integerParameters;
  }
  public putIntegerParameters(value: QuicksightAnalysisParametersIntegerParameters[] | cdktn.IResolvable) {
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
  private _stringParameters = new QuicksightAnalysisParametersStringParametersList(this, "string_parameters", false);
  public get stringParameters() {
    return this._stringParameters;
  }
  public putStringParameters(value: QuicksightAnalysisParametersStringParameters[] | cdktn.IResolvable) {
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
export interface QuicksightAnalysisPermissions {
  /**
  * <p>The IAM action to grant or revoke permissions on.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#actions QuicksightAnalysis#actions}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#principal QuicksightAnalysis#principal}
  */
  readonly principal?: string;
}

export function quicksightAnalysisPermissionsToTerraform(struct?: QuicksightAnalysisPermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
  }
}


export function quicksightAnalysisPermissionsToHclTerraform(struct?: QuicksightAnalysisPermissions | cdktn.IResolvable): any {
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

export class QuicksightAnalysisPermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightAnalysisPermissions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisPermissions | cdktn.IResolvable | undefined) {
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

export class QuicksightAnalysisPermissionsList extends cdktn.ComplexList {
  public internalValue? : QuicksightAnalysisPermissions[] | cdktn.IResolvable

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
  public get(index: number): QuicksightAnalysisPermissionsOutputReference {
    return new QuicksightAnalysisPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightAnalysisSheets {
}

export function quicksightAnalysisSheetsToTerraform(struct?: QuicksightAnalysisSheets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function quicksightAnalysisSheetsToHclTerraform(struct?: QuicksightAnalysisSheets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class QuicksightAnalysisSheetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightAnalysisSheets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightAnalysisSheets | undefined) {
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

export class QuicksightAnalysisSheetsList extends cdktn.ComplexList {

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
  public get(index: number): QuicksightAnalysisSheetsOutputReference {
    return new QuicksightAnalysisSheetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences {
  /**
  * <p>Dataset Amazon Resource Name (ARN).</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#data_set_arn QuicksightAnalysis#data_set_arn}
  */
  readonly dataSetArn?: string;
  /**
  * <p>Dataset placeholder.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#data_set_placeholder QuicksightAnalysis#data_set_placeholder}
  */
  readonly dataSetPlaceholder?: string;
}

export function quicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
    data_set_placeholder: cdktn.stringToTerraform(struct!.dataSetPlaceholder),
  }
}


export function quicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToHclTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences | cdktn.IResolvable): any {
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

export class QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences | cdktn.IResolvable | undefined) {
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

export class QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList extends cdktn.ComplexList {
  public internalValue? : QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[] | cdktn.IResolvable

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
  public get(index: number): QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference {
    return new QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightAnalysisSourceEntitySourceTemplate {
  /**
  * <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#arn QuicksightAnalysis#arn}
  */
  readonly arn?: string;
  /**
  * <p>The dataset references of the source template of an analysis.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#data_set_references QuicksightAnalysis#data_set_references}
  */
  readonly dataSetReferences?: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[] | cdktn.IResolvable;
}

export function quicksightAnalysisSourceEntitySourceTemplateToTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    data_set_references: cdktn.listMapper(quicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform, false)(struct!.dataSetReferences),
  }
}


export function quicksightAnalysisSourceEntitySourceTemplateToHclTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplate | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(quicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToHclTerraform, false)(struct!.dataSetReferences),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightAnalysisSourceEntitySourceTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightAnalysisSourceEntitySourceTemplate | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisSourceEntitySourceTemplate | cdktn.IResolvable | undefined) {
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
  private _dataSetReferences = new QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList(this, "data_set_references", false);
  public get dataSetReferences() {
    return this._dataSetReferences;
  }
  public putDataSetReferences(value: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[] | cdktn.IResolvable) {
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
export interface QuicksightAnalysisSourceEntity {
  /**
  * <p>The source template of an analysis.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#source_template QuicksightAnalysis#source_template}
  */
  readonly sourceTemplate?: QuicksightAnalysisSourceEntitySourceTemplate;
}

export function quicksightAnalysisSourceEntityToTerraform(struct?: QuicksightAnalysisSourceEntity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_template: quicksightAnalysisSourceEntitySourceTemplateToTerraform(struct!.sourceTemplate),
  }
}


export function quicksightAnalysisSourceEntityToHclTerraform(struct?: QuicksightAnalysisSourceEntity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_template: {
      value: quicksightAnalysisSourceEntitySourceTemplateToHclTerraform(struct!.sourceTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightAnalysisSourceEntitySourceTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightAnalysisSourceEntityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightAnalysisSourceEntity | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisSourceEntity | cdktn.IResolvable | undefined) {
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
  private _sourceTemplate = new QuicksightAnalysisSourceEntitySourceTemplateOutputReference(this, "source_template");
  public get sourceTemplate() {
    return this._sourceTemplate;
  }
  public putSourceTemplate(value: QuicksightAnalysisSourceEntitySourceTemplate) {
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
export interface QuicksightAnalysisTags {
  /**
  * <p>Tag key.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#key QuicksightAnalysis#key}
  */
  readonly key?: string;
  /**
  * <p>Tag value.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#value QuicksightAnalysis#value}
  */
  readonly value?: string;
}

export function quicksightAnalysisTagsToTerraform(struct?: QuicksightAnalysisTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightAnalysisTagsToHclTerraform(struct?: QuicksightAnalysisTags | cdktn.IResolvable): any {
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

export class QuicksightAnalysisTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightAnalysisTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightAnalysisTags | cdktn.IResolvable | undefined) {
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

export class QuicksightAnalysisTagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightAnalysisTags[] | cdktn.IResolvable

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
  public get(index: number): QuicksightAnalysisTagsOutputReference {
    return new QuicksightAnalysisTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis awscc_quicksight_analysis}
*/
export class QuicksightAnalysis extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_analysis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightAnalysis resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightAnalysis to import
  * @param importFromId The id of the existing QuicksightAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightAnalysis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_analysis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_analysis awscc_quicksight_analysis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightAnalysisConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightAnalysisConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_analysis',
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
    this._analysisId = config.analysisId;
    this._awsAccountId = config.awsAccountId;
    this._errors.internalValue = config.errors;
    this._name = config.name;
    this._parameters.internalValue = config.parameters;
    this._permissions.internalValue = config.permissions;
    this._sourceEntity.internalValue = config.sourceEntity;
    this._tags.internalValue = config.tags;
    this._themeArn = config.themeArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analysis_id - computed: false, optional: false, required: true
  private _analysisId?: string; 
  public get analysisId() {
    return this.getStringAttribute('analysis_id');
  }
  public set analysisId(value: string) {
    this._analysisId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisIdInput() {
    return this._analysisId;
  }

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

  // data_set_arns - computed: true, optional: false, required: false
  public get dataSetArns() {
    return this.getListAttribute('data_set_arns');
  }

  // errors - computed: true, optional: true, required: false
  private _errors = new QuicksightAnalysisErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }
  public putErrors(value: QuicksightAnalysisErrors[] | cdktn.IResolvable) {
    this._errors.internalValue = value;
  }
  public resetErrors() {
    this._errors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors.internalValue;
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

  // parameters - computed: true, optional: true, required: false
  private _parameters = new QuicksightAnalysisParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: QuicksightAnalysisParameters) {
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
  private _permissions = new QuicksightAnalysisPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: QuicksightAnalysisPermissions[] | cdktn.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // sheets - computed: true, optional: false, required: false
  private _sheets = new QuicksightAnalysisSheetsList(this, "sheets", false);
  public get sheets() {
    return this._sheets;
  }

  // source_entity - computed: false, optional: false, required: true
  private _sourceEntity = new QuicksightAnalysisSourceEntityOutputReference(this, "source_entity");
  public get sourceEntity() {
    return this._sourceEntity;
  }
  public putSourceEntity(value: QuicksightAnalysisSourceEntity) {
    this._sourceEntity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityInput() {
    return this._sourceEntity.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QuicksightAnalysisTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightAnalysisTags[] | cdktn.IResolvable) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analysis_id: cdktn.stringToTerraform(this._analysisId),
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      errors: cdktn.listMapper(quicksightAnalysisErrorsToTerraform, false)(this._errors.internalValue),
      name: cdktn.stringToTerraform(this._name),
      parameters: quicksightAnalysisParametersToTerraform(this._parameters.internalValue),
      permissions: cdktn.listMapper(quicksightAnalysisPermissionsToTerraform, false)(this._permissions.internalValue),
      source_entity: quicksightAnalysisSourceEntityToTerraform(this._sourceEntity.internalValue),
      tags: cdktn.listMapper(quicksightAnalysisTagsToTerraform, false)(this._tags.internalValue),
      theme_arn: cdktn.stringToTerraform(this._themeArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analysis_id: {
        value: cdktn.stringToHclTerraform(this._analysisId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      errors: {
        value: cdktn.listMapperHcl(quicksightAnalysisErrorsToHclTerraform, false)(this._errors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightAnalysisErrorsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: quicksightAnalysisParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightAnalysisParameters",
      },
      permissions: {
        value: cdktn.listMapperHcl(quicksightAnalysisPermissionsToHclTerraform, false)(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightAnalysisPermissionsList",
      },
      source_entity: {
        value: quicksightAnalysisSourceEntityToHclTerraform(this._sourceEntity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightAnalysisSourceEntity",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightAnalysisTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightAnalysisTagsList",
      },
      theme_arn: {
        value: cdktn.stringToHclTerraform(this._themeArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
