// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Inspectorv2FilterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Findings filter description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#description Inspectorv2Filter#description}
  */
  readonly description?: string;
  /**
  * Findings filter action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#filter_action Inspectorv2Filter#filter_action}
  */
  readonly filterAction: string;
  /**
  * Findings filter criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#filter_criteria Inspectorv2Filter#filter_criteria}
  */
  readonly filterCriteria: Inspectorv2FilterFilterCriteria;
  /**
  * Findings filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#name Inspectorv2Filter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#tags Inspectorv2Filter#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface Inspectorv2FilterFilterCriteriaAwsAccountId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaAwsAccountIdToTerraform(struct?: Inspectorv2FilterFilterCriteriaAwsAccountId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaAwsAccountIdToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaAwsAccountId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaAwsAccountIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaAwsAccountId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaAwsAccountId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaAwsAccountIdList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaAwsAccountId[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaAwsAccountIdOutputReference {
    return new Inspectorv2FilterFilterCriteriaAwsAccountIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameToTerraform(struct?: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference {
    return new Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToTerraform(struct?: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference {
    return new Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathToTerraform(struct?: Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference {
    return new Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaComponentId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaComponentIdToTerraform(struct?: Inspectorv2FilterFilterCriteriaComponentId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaComponentIdToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaComponentId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaComponentIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaComponentId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaComponentId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaComponentIdList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaComponentId[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaComponentIdOutputReference {
    return new Inspectorv2FilterFilterCriteriaComponentIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaComponentType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaComponentTypeToTerraform(struct?: Inspectorv2FilterFilterCriteriaComponentType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaComponentTypeToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaComponentType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaComponentTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaComponentType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaComponentType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaComponentTypeList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaComponentType[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaComponentTypeOutputReference {
    return new Inspectorv2FilterFilterCriteriaComponentTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEc2InstanceImageId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaEc2InstanceImageIdToTerraform(struct?: Inspectorv2FilterFilterCriteriaEc2InstanceImageId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaEc2InstanceImageIdToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEc2InstanceImageId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaEc2InstanceImageIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEc2InstanceImageId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEc2InstanceImageId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaEc2InstanceImageIdList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEc2InstanceImageId[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEc2InstanceImageIdOutputReference {
    return new Inspectorv2FilterFilterCriteriaEc2InstanceImageIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEc2InstanceSubnetId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdToTerraform(struct?: Inspectorv2FilterFilterCriteriaEc2InstanceSubnetId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEc2InstanceSubnetId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEc2InstanceSubnetId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEc2InstanceSubnetId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEc2InstanceSubnetId[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference {
    return new Inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEc2InstanceVpcId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaEc2InstanceVpcIdToTerraform(struct?: Inspectorv2FilterFilterCriteriaEc2InstanceVpcId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaEc2InstanceVpcIdToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEc2InstanceVpcId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaEc2InstanceVpcIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEc2InstanceVpcId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEc2InstanceVpcId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaEc2InstanceVpcIdList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEc2InstanceVpcId[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEc2InstanceVpcIdOutputReference {
    return new Inspectorv2FilterFilterCriteriaEc2InstanceVpcIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEcrImageArchitecture {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaEcrImageArchitectureToTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageArchitecture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaEcrImageArchitectureToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageArchitecture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaEcrImageArchitectureOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEcrImageArchitecture | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEcrImageArchitecture | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaEcrImageArchitectureList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEcrImageArchitecture[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEcrImageArchitectureOutputReference {
    return new Inspectorv2FilterFilterCriteriaEcrImageArchitectureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEcrImageHash {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaEcrImageHashToTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaEcrImageHashToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaEcrImageHashOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEcrImageHash | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEcrImageHash | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaEcrImageHashList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEcrImageHash[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEcrImageHashOutputReference {
    return new Inspectorv2FilterFilterCriteriaEcrImageHashOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEcrImagePushedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#end_inclusive Inspectorv2Filter#end_inclusive}
  */
  readonly endInclusive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#start_inclusive Inspectorv2Filter#start_inclusive}
  */
  readonly startInclusive?: number;
}

export function inspectorv2FilterFilterCriteriaEcrImagePushedAtToTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImagePushedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
  }
}


export function inspectorv2FilterFilterCriteriaEcrImagePushedAtToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImagePushedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaEcrImagePushedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEcrImagePushedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEcrImagePushedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: true, optional: true, required: false
  private _endInclusive?: number; 
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }
  public set endInclusive(value: number) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: true, optional: true, required: false
  private _startInclusive?: number; 
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
  public set startInclusive(value: number) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspectorv2FilterFilterCriteriaEcrImagePushedAtList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEcrImagePushedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEcrImagePushedAtOutputReference {
    return new Inspectorv2FilterFilterCriteriaEcrImagePushedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEcrImageRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaEcrImageRegistryToTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageRegistry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaEcrImageRegistryToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageRegistry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaEcrImageRegistryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEcrImageRegistry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEcrImageRegistry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaEcrImageRegistryList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEcrImageRegistry[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEcrImageRegistryOutputReference {
    return new Inspectorv2FilterFilterCriteriaEcrImageRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEcrImageRepositoryName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaEcrImageRepositoryNameToTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageRepositoryName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaEcrImageRepositoryNameToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageRepositoryName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaEcrImageRepositoryNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEcrImageRepositoryName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEcrImageRepositoryName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaEcrImageRepositoryNameList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEcrImageRepositoryName[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEcrImageRepositoryNameOutputReference {
    return new Inspectorv2FilterFilterCriteriaEcrImageRepositoryNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEcrImageTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaEcrImageTagsToTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaEcrImageTagsToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEcrImageTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaEcrImageTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEcrImageTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEcrImageTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaEcrImageTagsList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEcrImageTags[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEcrImageTagsOutputReference {
    return new Inspectorv2FilterFilterCriteriaEcrImageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaEpssScore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#lower_inclusive Inspectorv2Filter#lower_inclusive}
  */
  readonly lowerInclusive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#upper_inclusive Inspectorv2Filter#upper_inclusive}
  */
  readonly upperInclusive?: number;
}

export function inspectorv2FilterFilterCriteriaEpssScoreToTerraform(struct?: Inspectorv2FilterFilterCriteriaEpssScore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function inspectorv2FilterFilterCriteriaEpssScoreToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaEpssScore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaEpssScoreOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaEpssScore | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaEpssScore | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: true, optional: true, required: false
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  public resetLowerInclusive() {
    this._lowerInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: true, optional: true, required: false
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  public resetUpperInclusive() {
    this._upperInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class Inspectorv2FilterFilterCriteriaEpssScoreList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaEpssScore[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaEpssScoreOutputReference {
    return new Inspectorv2FilterFilterCriteriaEpssScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaExploitAvailable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaExploitAvailableToTerraform(struct?: Inspectorv2FilterFilterCriteriaExploitAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaExploitAvailableToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaExploitAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaExploitAvailableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaExploitAvailable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaExploitAvailable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaExploitAvailableList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaExploitAvailable[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaExploitAvailableOutputReference {
    return new Inspectorv2FilterFilterCriteriaExploitAvailableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaFindingArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaFindingArnToTerraform(struct?: Inspectorv2FilterFilterCriteriaFindingArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaFindingArnToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaFindingArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaFindingArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaFindingArn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaFindingArn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaFindingArnList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaFindingArn[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaFindingArnOutputReference {
    return new Inspectorv2FilterFilterCriteriaFindingArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaFindingStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaFindingStatusToTerraform(struct?: Inspectorv2FilterFilterCriteriaFindingStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaFindingStatusToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaFindingStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaFindingStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaFindingStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaFindingStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaFindingStatusList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaFindingStatus[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaFindingStatusOutputReference {
    return new Inspectorv2FilterFilterCriteriaFindingStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaFindingType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaFindingTypeToTerraform(struct?: Inspectorv2FilterFilterCriteriaFindingType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaFindingTypeToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaFindingType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaFindingTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaFindingType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaFindingType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaFindingTypeList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaFindingType[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaFindingTypeOutputReference {
    return new Inspectorv2FilterFilterCriteriaFindingTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaFirstObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#end_inclusive Inspectorv2Filter#end_inclusive}
  */
  readonly endInclusive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#start_inclusive Inspectorv2Filter#start_inclusive}
  */
  readonly startInclusive?: number;
}

export function inspectorv2FilterFilterCriteriaFirstObservedAtToTerraform(struct?: Inspectorv2FilterFilterCriteriaFirstObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
  }
}


export function inspectorv2FilterFilterCriteriaFirstObservedAtToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaFirstObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaFirstObservedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaFirstObservedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaFirstObservedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: true, optional: true, required: false
  private _endInclusive?: number; 
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }
  public set endInclusive(value: number) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: true, optional: true, required: false
  private _startInclusive?: number; 
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
  public set startInclusive(value: number) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspectorv2FilterFilterCriteriaFirstObservedAtList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaFirstObservedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaFirstObservedAtOutputReference {
    return new Inspectorv2FilterFilterCriteriaFirstObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaFixAvailable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaFixAvailableToTerraform(struct?: Inspectorv2FilterFilterCriteriaFixAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaFixAvailableToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaFixAvailable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaFixAvailableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaFixAvailable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaFixAvailable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaFixAvailableList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaFixAvailable[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaFixAvailableOutputReference {
    return new Inspectorv2FilterFilterCriteriaFixAvailableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaInspectorScore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#lower_inclusive Inspectorv2Filter#lower_inclusive}
  */
  readonly lowerInclusive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#upper_inclusive Inspectorv2Filter#upper_inclusive}
  */
  readonly upperInclusive?: number;
}

export function inspectorv2FilterFilterCriteriaInspectorScoreToTerraform(struct?: Inspectorv2FilterFilterCriteriaInspectorScore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function inspectorv2FilterFilterCriteriaInspectorScoreToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaInspectorScore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaInspectorScoreOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaInspectorScore | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaInspectorScore | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: true, optional: true, required: false
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  public resetLowerInclusive() {
    this._lowerInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: true, optional: true, required: false
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  public resetUpperInclusive() {
    this._upperInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}

export class Inspectorv2FilterFilterCriteriaInspectorScoreList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaInspectorScore[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaInspectorScoreOutputReference {
    return new Inspectorv2FilterFilterCriteriaInspectorScoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference {
    return new Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#end_inclusive Inspectorv2Filter#end_inclusive}
  */
  readonly endInclusive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#start_inclusive Inspectorv2Filter#start_inclusive}
  */
  readonly startInclusive?: number;
}

export function inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtToTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
  }
}


export function inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: true, optional: true, required: false
  private _endInclusive?: number; 
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }
  public set endInclusive(value: number) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: true, optional: true, required: false
  private _startInclusive?: number; 
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
  public set startInclusive(value: number) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference {
    return new Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaLambdaFunctionLayers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaLambdaFunctionLayersToTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionLayers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaLambdaFunctionLayersToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionLayers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaLambdaFunctionLayersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaLambdaFunctionLayers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaLambdaFunctionLayers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaLambdaFunctionLayersList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaLambdaFunctionLayers[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaLambdaFunctionLayersOutputReference {
    return new Inspectorv2FilterFilterCriteriaLambdaFunctionLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaLambdaFunctionName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaLambdaFunctionNameToTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaLambdaFunctionNameToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaLambdaFunctionNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaLambdaFunctionName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaLambdaFunctionName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaLambdaFunctionNameList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaLambdaFunctionName[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaLambdaFunctionNameOutputReference {
    return new Inspectorv2FilterFilterCriteriaLambdaFunctionNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaLambdaFunctionRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeToTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaLambdaFunctionRuntime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaLambdaFunctionRuntime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaLambdaFunctionRuntime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaLambdaFunctionRuntime[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference {
    return new Inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaLastObservedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#end_inclusive Inspectorv2Filter#end_inclusive}
  */
  readonly endInclusive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#start_inclusive Inspectorv2Filter#start_inclusive}
  */
  readonly startInclusive?: number;
}

export function inspectorv2FilterFilterCriteriaLastObservedAtToTerraform(struct?: Inspectorv2FilterFilterCriteriaLastObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
  }
}


export function inspectorv2FilterFilterCriteriaLastObservedAtToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaLastObservedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaLastObservedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaLastObservedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaLastObservedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: true, optional: true, required: false
  private _endInclusive?: number; 
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }
  public set endInclusive(value: number) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: true, optional: true, required: false
  private _startInclusive?: number; 
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
  public set startInclusive(value: number) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspectorv2FilterFilterCriteriaLastObservedAtList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaLastObservedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaLastObservedAtOutputReference {
    return new Inspectorv2FilterFilterCriteriaLastObservedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaNetworkProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaNetworkProtocolToTerraform(struct?: Inspectorv2FilterFilterCriteriaNetworkProtocol | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaNetworkProtocolToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaNetworkProtocol | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaNetworkProtocolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaNetworkProtocol | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaNetworkProtocol | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaNetworkProtocolList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaNetworkProtocol[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaNetworkProtocolOutputReference {
    return new Inspectorv2FilterFilterCriteriaNetworkProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#begin_inclusive Inspectorv2Filter#begin_inclusive}
  */
  readonly beginInclusive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#end_inclusive Inspectorv2Filter#end_inclusive}
  */
  readonly endInclusive?: number;
}

export function inspectorv2FilterFilterCriteriaPortRangeToTerraform(struct?: Inspectorv2FilterFilterCriteriaPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    begin_inclusive: cdktn.numberToTerraform(struct!.beginInclusive),
    end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
  }
}


export function inspectorv2FilterFilterCriteriaPortRangeToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    begin_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.beginInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaPortRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaPortRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginInclusive = this._beginInclusive;
    }
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaPortRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beginInclusive = undefined;
      this._endInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beginInclusive = value.beginInclusive;
      this._endInclusive = value.endInclusive;
    }
  }

  // begin_inclusive - computed: true, optional: true, required: false
  private _beginInclusive?: number; 
  public get beginInclusive() {
    return this.getNumberAttribute('begin_inclusive');
  }
  public set beginInclusive(value: number) {
    this._beginInclusive = value;
  }
  public resetBeginInclusive() {
    this._beginInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInclusiveInput() {
    return this._beginInclusive;
  }

  // end_inclusive - computed: true, optional: true, required: false
  private _endInclusive?: number; 
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }
  public set endInclusive(value: number) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }
}

export class Inspectorv2FilterFilterCriteriaPortRangeList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaPortRange[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaPortRangeOutputReference {
    return new Inspectorv2FilterFilterCriteriaPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaRelatedVulnerabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesToTerraform(struct?: Inspectorv2FilterFilterCriteriaRelatedVulnerabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaRelatedVulnerabilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaRelatedVulnerabilities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaRelatedVulnerabilities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaRelatedVulnerabilities[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference {
    return new Inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaResourceId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaResourceIdToTerraform(struct?: Inspectorv2FilterFilterCriteriaResourceId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaResourceIdToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaResourceId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaResourceIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaResourceId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaResourceId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaResourceIdList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaResourceId[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaResourceIdOutputReference {
    return new Inspectorv2FilterFilterCriteriaResourceIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#key Inspectorv2Filter#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaResourceTagsToTerraform(struct?: Inspectorv2FilterFilterCriteriaResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaResourceTagsToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class Inspectorv2FilterFilterCriteriaResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaResourceTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
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

  public set internalValue(value: Inspectorv2FilterFilterCriteriaResourceTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
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
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaResourceTagsList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaResourceTags[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaResourceTagsOutputReference {
    return new Inspectorv2FilterFilterCriteriaResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaResourceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaResourceTypeToTerraform(struct?: Inspectorv2FilterFilterCriteriaResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaResourceTypeToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaResourceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaResourceTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaResourceType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaResourceType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaResourceTypeList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaResourceType[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaResourceTypeOutputReference {
    return new Inspectorv2FilterFilterCriteriaResourceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaSeverityToTerraform(struct?: Inspectorv2FilterFilterCriteriaSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaSeverityToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaSeverityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaSeverity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaSeverity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaSeverityList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaSeverity[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaSeverityOutputReference {
    return new Inspectorv2FilterFilterCriteriaSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaTitle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaTitleToTerraform(struct?: Inspectorv2FilterFilterCriteriaTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaTitleToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaTitle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaTitleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaTitle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaTitle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaTitleList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaTitle[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaTitleOutputReference {
    return new Inspectorv2FilterFilterCriteriaTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaUpdatedAt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#end_inclusive Inspectorv2Filter#end_inclusive}
  */
  readonly endInclusive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#start_inclusive Inspectorv2Filter#start_inclusive}
  */
  readonly startInclusive?: number;
}

export function inspectorv2FilterFilterCriteriaUpdatedAtToTerraform(struct?: Inspectorv2FilterFilterCriteriaUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end_inclusive: cdktn.numberToTerraform(struct!.endInclusive),
    start_inclusive: cdktn.numberToTerraform(struct!.startInclusive),
  }
}


export function inspectorv2FilterFilterCriteriaUpdatedAtToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaUpdatedAt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.endInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.startInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaUpdatedAtOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaUpdatedAt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.endInclusive = this._endInclusive;
    }
    if (this._startInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInclusive = this._startInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaUpdatedAt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endInclusive = undefined;
      this._startInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endInclusive = value.endInclusive;
      this._startInclusive = value.startInclusive;
    }
  }

  // end_inclusive - computed: true, optional: true, required: false
  private _endInclusive?: number; 
  public get endInclusive() {
    return this.getNumberAttribute('end_inclusive');
  }
  public set endInclusive(value: number) {
    this._endInclusive = value;
  }
  public resetEndInclusive() {
    this._endInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInclusiveInput() {
    return this._endInclusive;
  }

  // start_inclusive - computed: true, optional: true, required: false
  private _startInclusive?: number; 
  public get startInclusive() {
    return this.getNumberAttribute('start_inclusive');
  }
  public set startInclusive(value: number) {
    this._startInclusive = value;
  }
  public resetStartInclusive() {
    this._startInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInclusiveInput() {
    return this._startInclusive;
  }
}

export class Inspectorv2FilterFilterCriteriaUpdatedAtList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaUpdatedAt[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaUpdatedAtOutputReference {
    return new Inspectorv2FilterFilterCriteriaUpdatedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaVendorSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVendorSeverityToTerraform(struct?: Inspectorv2FilterFilterCriteriaVendorSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVendorSeverityToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVendorSeverity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVendorSeverityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaVendorSeverity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVendorSeverity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaVendorSeverityList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaVendorSeverity[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaVendorSeverityOutputReference {
    return new Inspectorv2FilterFilterCriteriaVendorSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaVulnerabilityId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVulnerabilityIdToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerabilityId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerabilityIdToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerabilityId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVulnerabilityIdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerabilityId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerabilityId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaVulnerabilityIdList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaVulnerabilityId[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaVulnerabilityIdOutputReference {
    return new Inspectorv2FilterFilterCriteriaVulnerabilityIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaVulnerabilitySource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVulnerabilitySourceToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerabilitySource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerabilitySourceToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerabilitySource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVulnerabilitySourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerabilitySource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerabilitySource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

export class Inspectorv2FilterFilterCriteriaVulnerabilitySourceList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaVulnerabilitySource[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaVulnerabilitySourceOutputReference {
    return new Inspectorv2FilterFilterCriteriaVulnerabilitySourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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
export interface Inspectorv2FilterFilterCriteriaVulnerablePackagesEpoch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#lower_inclusive Inspectorv2Filter#lower_inclusive}
  */
  readonly lowerInclusive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#upper_inclusive Inspectorv2Filter#upper_inclusive}
  */
  readonly upperInclusive?: number;
}

export function inspectorv2FilterFilterCriteriaVulnerablePackagesEpochToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesEpoch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lower_inclusive: cdktn.numberToTerraform(struct!.lowerInclusive),
    upper_inclusive: cdktn.numberToTerraform(struct!.upperInclusive),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerablePackagesEpochToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesEpoch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lower_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.lowerInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_inclusive: {
      value: cdktn.numberToHclTerraform(struct!.upperInclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesEpochOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerablePackagesEpoch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerInclusive = this._lowerInclusive;
    }
    if (this._upperInclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperInclusive = this._upperInclusive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesEpoch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lowerInclusive = undefined;
      this._upperInclusive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lowerInclusive = value.lowerInclusive;
      this._upperInclusive = value.upperInclusive;
    }
  }

  // lower_inclusive - computed: true, optional: true, required: false
  private _lowerInclusive?: number; 
  public get lowerInclusive() {
    return this.getNumberAttribute('lower_inclusive');
  }
  public set lowerInclusive(value: number) {
    this._lowerInclusive = value;
  }
  public resetLowerInclusive() {
    this._lowerInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInclusiveInput() {
    return this._lowerInclusive;
  }

  // upper_inclusive - computed: true, optional: true, required: false
  private _upperInclusive?: number; 
  public get upperInclusive() {
    return this.getNumberAttribute('upper_inclusive');
  }
  public set upperInclusive(value: number) {
    this._upperInclusive = value;
  }
  public resetUpperInclusive() {
    this._upperInclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInclusiveInput() {
    return this._upperInclusive;
  }
}
export interface Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVulnerablePackagesFilePathToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerablePackagesFilePathToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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
export interface Inspectorv2FilterFilterCriteriaVulnerablePackagesName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVulnerablePackagesNameToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerablePackagesNameToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerablePackagesName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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
export interface Inspectorv2FilterFilterCriteriaVulnerablePackagesRelease {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVulnerablePackagesReleaseToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesRelease | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerablePackagesReleaseToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesRelease | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesReleaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerablePackagesRelease | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesRelease | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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
export interface Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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
export interface Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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
export interface Inspectorv2FilterFilterCriteriaVulnerablePackagesVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#comparison Inspectorv2Filter#comparison}
  */
  readonly comparison?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#value Inspectorv2Filter#value}
  */
  readonly value?: string;
}

export function inspectorv2FilterFilterCriteriaVulnerablePackagesVersionToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison: cdktn.stringToTerraform(struct!.comparison),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerablePackagesVersionToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackagesVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
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

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerablePackagesVersion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesVersion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._value = value.value;
    }
  }

  // comparison - computed: true, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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
export interface Inspectorv2FilterFilterCriteriaVulnerablePackages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#architecture Inspectorv2Filter#architecture}
  */
  readonly architecture?: Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#epoch Inspectorv2Filter#epoch}
  */
  readonly epoch?: Inspectorv2FilterFilterCriteriaVulnerablePackagesEpoch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#file_path Inspectorv2Filter#file_path}
  */
  readonly filePath?: Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#name Inspectorv2Filter#name}
  */
  readonly name?: Inspectorv2FilterFilterCriteriaVulnerablePackagesName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#release Inspectorv2Filter#release}
  */
  readonly release?: Inspectorv2FilterFilterCriteriaVulnerablePackagesRelease;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#source_lambda_layer_arn Inspectorv2Filter#source_lambda_layer_arn}
  */
  readonly sourceLambdaLayerArn?: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#source_layer_hash Inspectorv2Filter#source_layer_hash}
  */
  readonly sourceLayerHash?: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#version Inspectorv2Filter#version}
  */
  readonly version?: Inspectorv2FilterFilterCriteriaVulnerablePackagesVersion;
}

export function inspectorv2FilterFilterCriteriaVulnerablePackagesToTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    architecture: inspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureToTerraform(struct!.architecture),
    epoch: inspectorv2FilterFilterCriteriaVulnerablePackagesEpochToTerraform(struct!.epoch),
    file_path: inspectorv2FilterFilterCriteriaVulnerablePackagesFilePathToTerraform(struct!.filePath),
    name: inspectorv2FilterFilterCriteriaVulnerablePackagesNameToTerraform(struct!.name),
    release: inspectorv2FilterFilterCriteriaVulnerablePackagesReleaseToTerraform(struct!.release),
    source_lambda_layer_arn: inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToTerraform(struct!.sourceLambdaLayerArn),
    source_layer_hash: inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToTerraform(struct!.sourceLayerHash),
    version: inspectorv2FilterFilterCriteriaVulnerablePackagesVersionToTerraform(struct!.version),
  }
}


export function inspectorv2FilterFilterCriteriaVulnerablePackagesToHclTerraform(struct?: Inspectorv2FilterFilterCriteriaVulnerablePackages | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    architecture: {
      value: inspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureToHclTerraform(struct!.architecture),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture",
    },
    epoch: {
      value: inspectorv2FilterFilterCriteriaVulnerablePackagesEpochToHclTerraform(struct!.epoch),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerablePackagesEpoch",
    },
    file_path: {
      value: inspectorv2FilterFilterCriteriaVulnerablePackagesFilePathToHclTerraform(struct!.filePath),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePath",
    },
    name: {
      value: inspectorv2FilterFilterCriteriaVulnerablePackagesNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerablePackagesName",
    },
    release: {
      value: inspectorv2FilterFilterCriteriaVulnerablePackagesReleaseToHclTerraform(struct!.release),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerablePackagesRelease",
    },
    source_lambda_layer_arn: {
      value: inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnToHclTerraform(struct!.sourceLambdaLayerArn),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn",
    },
    source_layer_hash: {
      value: inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashToHclTerraform(struct!.sourceLayerHash),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash",
    },
    version: {
      value: inspectorv2FilterFilterCriteriaVulnerablePackagesVersionToHclTerraform(struct!.version),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerablePackagesVersion",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Inspectorv2FilterFilterCriteriaVulnerablePackages | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture?.internalValue;
    }
    if (this._epoch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epoch = this._epoch?.internalValue;
    }
    if (this._filePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath?.internalValue;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._release?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release?.internalValue;
    }
    if (this._sourceLambdaLayerArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLambdaLayerArn = this._sourceLambdaLayerArn?.internalValue;
    }
    if (this._sourceLayerHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLayerHash = this._sourceLayerHash?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteriaVulnerablePackages | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture.internalValue = undefined;
      this._epoch.internalValue = undefined;
      this._filePath.internalValue = undefined;
      this._name.internalValue = undefined;
      this._release.internalValue = undefined;
      this._sourceLambdaLayerArn.internalValue = undefined;
      this._sourceLayerHash.internalValue = undefined;
      this._version.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture.internalValue = value.architecture;
      this._epoch.internalValue = value.epoch;
      this._filePath.internalValue = value.filePath;
      this._name.internalValue = value.name;
      this._release.internalValue = value.release;
      this._sourceLambdaLayerArn.internalValue = value.sourceLambdaLayerArn;
      this._sourceLayerHash.internalValue = value.sourceLayerHash;
      this._version.internalValue = value.version;
    }
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture = new Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitectureOutputReference(this, "architecture");
  public get architecture() {
    return this._architecture;
  }
  public putArchitecture(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesArchitecture) {
    this._architecture.internalValue = value;
  }
  public resetArchitecture() {
    this._architecture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture.internalValue;
  }

  // epoch - computed: true, optional: true, required: false
  private _epoch = new Inspectorv2FilterFilterCriteriaVulnerablePackagesEpochOutputReference(this, "epoch");
  public get epoch() {
    return this._epoch;
  }
  public putEpoch(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesEpoch) {
    this._epoch.internalValue = value;
  }
  public resetEpoch() {
    this._epoch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochInput() {
    return this._epoch.internalValue;
  }

  // file_path - computed: true, optional: true, required: false
  private _filePath = new Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePathOutputReference(this, "file_path");
  public get filePath() {
    return this._filePath;
  }
  public putFilePath(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesFilePath) {
    this._filePath.internalValue = value;
  }
  public resetFilePath() {
    this._filePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name = new Inspectorv2FilterFilterCriteriaVulnerablePackagesNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // release - computed: true, optional: true, required: false
  private _release = new Inspectorv2FilterFilterCriteriaVulnerablePackagesReleaseOutputReference(this, "release");
  public get release() {
    return this._release;
  }
  public putRelease(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesRelease) {
    this._release.internalValue = value;
  }
  public resetRelease() {
    this._release.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release.internalValue;
  }

  // source_lambda_layer_arn - computed: true, optional: true, required: false
  private _sourceLambdaLayerArn = new Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArnOutputReference(this, "source_lambda_layer_arn");
  public get sourceLambdaLayerArn() {
    return this._sourceLambdaLayerArn;
  }
  public putSourceLambdaLayerArn(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLambdaLayerArn) {
    this._sourceLambdaLayerArn.internalValue = value;
  }
  public resetSourceLambdaLayerArn() {
    this._sourceLambdaLayerArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLambdaLayerArnInput() {
    return this._sourceLambdaLayerArn.internalValue;
  }

  // source_layer_hash - computed: true, optional: true, required: false
  private _sourceLayerHash = new Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHashOutputReference(this, "source_layer_hash");
  public get sourceLayerHash() {
    return this._sourceLayerHash;
  }
  public putSourceLayerHash(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesSourceLayerHash) {
    this._sourceLayerHash.internalValue = value;
  }
  public resetSourceLayerHash() {
    this._sourceLayerHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLayerHashInput() {
    return this._sourceLayerHash.internalValue;
  }

  // version - computed: true, optional: true, required: false
  private _version = new Inspectorv2FilterFilterCriteriaVulnerablePackagesVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }
  public putVersion(value: Inspectorv2FilterFilterCriteriaVulnerablePackagesVersion) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }
}

export class Inspectorv2FilterFilterCriteriaVulnerablePackagesList extends cdktn.ComplexList {
  public internalValue? : Inspectorv2FilterFilterCriteriaVulnerablePackages[] | cdktn.IResolvable

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
  public get(index: number): Inspectorv2FilterFilterCriteriaVulnerablePackagesOutputReference {
    return new Inspectorv2FilterFilterCriteriaVulnerablePackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Inspectorv2FilterFilterCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#aws_account_id Inspectorv2Filter#aws_account_id}
  */
  readonly awsAccountId?: Inspectorv2FilterFilterCriteriaAwsAccountId[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#code_vulnerability_detector_name Inspectorv2Filter#code_vulnerability_detector_name}
  */
  readonly codeVulnerabilityDetectorName?: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#code_vulnerability_detector_tags Inspectorv2Filter#code_vulnerability_detector_tags}
  */
  readonly codeVulnerabilityDetectorTags?: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#code_vulnerability_file_path Inspectorv2Filter#code_vulnerability_file_path}
  */
  readonly codeVulnerabilityFilePath?: Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#component_id Inspectorv2Filter#component_id}
  */
  readonly componentId?: Inspectorv2FilterFilterCriteriaComponentId[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#component_type Inspectorv2Filter#component_type}
  */
  readonly componentType?: Inspectorv2FilterFilterCriteriaComponentType[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#ec_2_instance_image_id Inspectorv2Filter#ec_2_instance_image_id}
  */
  readonly ec2InstanceImageId?: Inspectorv2FilterFilterCriteriaEc2InstanceImageId[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#ec_2_instance_subnet_id Inspectorv2Filter#ec_2_instance_subnet_id}
  */
  readonly ec2InstanceSubnetId?: Inspectorv2FilterFilterCriteriaEc2InstanceSubnetId[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#ec_2_instance_vpc_id Inspectorv2Filter#ec_2_instance_vpc_id}
  */
  readonly ec2InstanceVpcId?: Inspectorv2FilterFilterCriteriaEc2InstanceVpcId[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#ecr_image_architecture Inspectorv2Filter#ecr_image_architecture}
  */
  readonly ecrImageArchitecture?: Inspectorv2FilterFilterCriteriaEcrImageArchitecture[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#ecr_image_hash Inspectorv2Filter#ecr_image_hash}
  */
  readonly ecrImageHash?: Inspectorv2FilterFilterCriteriaEcrImageHash[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#ecr_image_pushed_at Inspectorv2Filter#ecr_image_pushed_at}
  */
  readonly ecrImagePushedAt?: Inspectorv2FilterFilterCriteriaEcrImagePushedAt[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#ecr_image_registry Inspectorv2Filter#ecr_image_registry}
  */
  readonly ecrImageRegistry?: Inspectorv2FilterFilterCriteriaEcrImageRegistry[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#ecr_image_repository_name Inspectorv2Filter#ecr_image_repository_name}
  */
  readonly ecrImageRepositoryName?: Inspectorv2FilterFilterCriteriaEcrImageRepositoryName[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#ecr_image_tags Inspectorv2Filter#ecr_image_tags}
  */
  readonly ecrImageTags?: Inspectorv2FilterFilterCriteriaEcrImageTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#epss_score Inspectorv2Filter#epss_score}
  */
  readonly epssScore?: Inspectorv2FilterFilterCriteriaEpssScore[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#exploit_available Inspectorv2Filter#exploit_available}
  */
  readonly exploitAvailable?: Inspectorv2FilterFilterCriteriaExploitAvailable[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#finding_arn Inspectorv2Filter#finding_arn}
  */
  readonly findingArn?: Inspectorv2FilterFilterCriteriaFindingArn[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#finding_status Inspectorv2Filter#finding_status}
  */
  readonly findingStatus?: Inspectorv2FilterFilterCriteriaFindingStatus[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#finding_type Inspectorv2Filter#finding_type}
  */
  readonly findingType?: Inspectorv2FilterFilterCriteriaFindingType[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#first_observed_at Inspectorv2Filter#first_observed_at}
  */
  readonly firstObservedAt?: Inspectorv2FilterFilterCriteriaFirstObservedAt[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#fix_available Inspectorv2Filter#fix_available}
  */
  readonly fixAvailable?: Inspectorv2FilterFilterCriteriaFixAvailable[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#inspector_score Inspectorv2Filter#inspector_score}
  */
  readonly inspectorScore?: Inspectorv2FilterFilterCriteriaInspectorScore[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#lambda_function_execution_role_arn Inspectorv2Filter#lambda_function_execution_role_arn}
  */
  readonly lambdaFunctionExecutionRoleArn?: Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#lambda_function_last_modified_at Inspectorv2Filter#lambda_function_last_modified_at}
  */
  readonly lambdaFunctionLastModifiedAt?: Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#lambda_function_layers Inspectorv2Filter#lambda_function_layers}
  */
  readonly lambdaFunctionLayers?: Inspectorv2FilterFilterCriteriaLambdaFunctionLayers[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#lambda_function_name Inspectorv2Filter#lambda_function_name}
  */
  readonly lambdaFunctionName?: Inspectorv2FilterFilterCriteriaLambdaFunctionName[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#lambda_function_runtime Inspectorv2Filter#lambda_function_runtime}
  */
  readonly lambdaFunctionRuntime?: Inspectorv2FilterFilterCriteriaLambdaFunctionRuntime[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#last_observed_at Inspectorv2Filter#last_observed_at}
  */
  readonly lastObservedAt?: Inspectorv2FilterFilterCriteriaLastObservedAt[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#network_protocol Inspectorv2Filter#network_protocol}
  */
  readonly networkProtocol?: Inspectorv2FilterFilterCriteriaNetworkProtocol[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#port_range Inspectorv2Filter#port_range}
  */
  readonly portRange?: Inspectorv2FilterFilterCriteriaPortRange[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#related_vulnerabilities Inspectorv2Filter#related_vulnerabilities}
  */
  readonly relatedVulnerabilities?: Inspectorv2FilterFilterCriteriaRelatedVulnerabilities[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#resource_id Inspectorv2Filter#resource_id}
  */
  readonly resourceId?: Inspectorv2FilterFilterCriteriaResourceId[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#resource_tags Inspectorv2Filter#resource_tags}
  */
  readonly resourceTags?: Inspectorv2FilterFilterCriteriaResourceTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#resource_type Inspectorv2Filter#resource_type}
  */
  readonly resourceType?: Inspectorv2FilterFilterCriteriaResourceType[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#severity Inspectorv2Filter#severity}
  */
  readonly severity?: Inspectorv2FilterFilterCriteriaSeverity[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#title Inspectorv2Filter#title}
  */
  readonly title?: Inspectorv2FilterFilterCriteriaTitle[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#updated_at Inspectorv2Filter#updated_at}
  */
  readonly updatedAt?: Inspectorv2FilterFilterCriteriaUpdatedAt[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#vendor_severity Inspectorv2Filter#vendor_severity}
  */
  readonly vendorSeverity?: Inspectorv2FilterFilterCriteriaVendorSeverity[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#vulnerability_id Inspectorv2Filter#vulnerability_id}
  */
  readonly vulnerabilityId?: Inspectorv2FilterFilterCriteriaVulnerabilityId[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#vulnerability_source Inspectorv2Filter#vulnerability_source}
  */
  readonly vulnerabilitySource?: Inspectorv2FilterFilterCriteriaVulnerabilitySource[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#vulnerable_packages Inspectorv2Filter#vulnerable_packages}
  */
  readonly vulnerablePackages?: Inspectorv2FilterFilterCriteriaVulnerablePackages[] | cdktn.IResolvable;
}

export function inspectorv2FilterFilterCriteriaToTerraform(struct?: Inspectorv2FilterFilterCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account_id: cdktn.listMapper(inspectorv2FilterFilterCriteriaAwsAccountIdToTerraform, false)(struct!.awsAccountId),
    code_vulnerability_detector_name: cdktn.listMapper(inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameToTerraform, false)(struct!.codeVulnerabilityDetectorName),
    code_vulnerability_detector_tags: cdktn.listMapper(inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToTerraform, false)(struct!.codeVulnerabilityDetectorTags),
    code_vulnerability_file_path: cdktn.listMapper(inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathToTerraform, false)(struct!.codeVulnerabilityFilePath),
    component_id: cdktn.listMapper(inspectorv2FilterFilterCriteriaComponentIdToTerraform, false)(struct!.componentId),
    component_type: cdktn.listMapper(inspectorv2FilterFilterCriteriaComponentTypeToTerraform, false)(struct!.componentType),
    ec_2_instance_image_id: cdktn.listMapper(inspectorv2FilterFilterCriteriaEc2InstanceImageIdToTerraform, false)(struct!.ec2InstanceImageId),
    ec_2_instance_subnet_id: cdktn.listMapper(inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdToTerraform, false)(struct!.ec2InstanceSubnetId),
    ec_2_instance_vpc_id: cdktn.listMapper(inspectorv2FilterFilterCriteriaEc2InstanceVpcIdToTerraform, false)(struct!.ec2InstanceVpcId),
    ecr_image_architecture: cdktn.listMapper(inspectorv2FilterFilterCriteriaEcrImageArchitectureToTerraform, false)(struct!.ecrImageArchitecture),
    ecr_image_hash: cdktn.listMapper(inspectorv2FilterFilterCriteriaEcrImageHashToTerraform, false)(struct!.ecrImageHash),
    ecr_image_pushed_at: cdktn.listMapper(inspectorv2FilterFilterCriteriaEcrImagePushedAtToTerraform, false)(struct!.ecrImagePushedAt),
    ecr_image_registry: cdktn.listMapper(inspectorv2FilterFilterCriteriaEcrImageRegistryToTerraform, false)(struct!.ecrImageRegistry),
    ecr_image_repository_name: cdktn.listMapper(inspectorv2FilterFilterCriteriaEcrImageRepositoryNameToTerraform, false)(struct!.ecrImageRepositoryName),
    ecr_image_tags: cdktn.listMapper(inspectorv2FilterFilterCriteriaEcrImageTagsToTerraform, false)(struct!.ecrImageTags),
    epss_score: cdktn.listMapper(inspectorv2FilterFilterCriteriaEpssScoreToTerraform, false)(struct!.epssScore),
    exploit_available: cdktn.listMapper(inspectorv2FilterFilterCriteriaExploitAvailableToTerraform, false)(struct!.exploitAvailable),
    finding_arn: cdktn.listMapper(inspectorv2FilterFilterCriteriaFindingArnToTerraform, false)(struct!.findingArn),
    finding_status: cdktn.listMapper(inspectorv2FilterFilterCriteriaFindingStatusToTerraform, false)(struct!.findingStatus),
    finding_type: cdktn.listMapper(inspectorv2FilterFilterCriteriaFindingTypeToTerraform, false)(struct!.findingType),
    first_observed_at: cdktn.listMapper(inspectorv2FilterFilterCriteriaFirstObservedAtToTerraform, false)(struct!.firstObservedAt),
    fix_available: cdktn.listMapper(inspectorv2FilterFilterCriteriaFixAvailableToTerraform, false)(struct!.fixAvailable),
    inspector_score: cdktn.listMapper(inspectorv2FilterFilterCriteriaInspectorScoreToTerraform, false)(struct!.inspectorScore),
    lambda_function_execution_role_arn: cdktn.listMapper(inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToTerraform, false)(struct!.lambdaFunctionExecutionRoleArn),
    lambda_function_last_modified_at: cdktn.listMapper(inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtToTerraform, false)(struct!.lambdaFunctionLastModifiedAt),
    lambda_function_layers: cdktn.listMapper(inspectorv2FilterFilterCriteriaLambdaFunctionLayersToTerraform, false)(struct!.lambdaFunctionLayers),
    lambda_function_name: cdktn.listMapper(inspectorv2FilterFilterCriteriaLambdaFunctionNameToTerraform, false)(struct!.lambdaFunctionName),
    lambda_function_runtime: cdktn.listMapper(inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeToTerraform, false)(struct!.lambdaFunctionRuntime),
    last_observed_at: cdktn.listMapper(inspectorv2FilterFilterCriteriaLastObservedAtToTerraform, false)(struct!.lastObservedAt),
    network_protocol: cdktn.listMapper(inspectorv2FilterFilterCriteriaNetworkProtocolToTerraform, false)(struct!.networkProtocol),
    port_range: cdktn.listMapper(inspectorv2FilterFilterCriteriaPortRangeToTerraform, false)(struct!.portRange),
    related_vulnerabilities: cdktn.listMapper(inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesToTerraform, false)(struct!.relatedVulnerabilities),
    resource_id: cdktn.listMapper(inspectorv2FilterFilterCriteriaResourceIdToTerraform, false)(struct!.resourceId),
    resource_tags: cdktn.listMapper(inspectorv2FilterFilterCriteriaResourceTagsToTerraform, false)(struct!.resourceTags),
    resource_type: cdktn.listMapper(inspectorv2FilterFilterCriteriaResourceTypeToTerraform, false)(struct!.resourceType),
    severity: cdktn.listMapper(inspectorv2FilterFilterCriteriaSeverityToTerraform, false)(struct!.severity),
    title: cdktn.listMapper(inspectorv2FilterFilterCriteriaTitleToTerraform, false)(struct!.title),
    updated_at: cdktn.listMapper(inspectorv2FilterFilterCriteriaUpdatedAtToTerraform, false)(struct!.updatedAt),
    vendor_severity: cdktn.listMapper(inspectorv2FilterFilterCriteriaVendorSeverityToTerraform, false)(struct!.vendorSeverity),
    vulnerability_id: cdktn.listMapper(inspectorv2FilterFilterCriteriaVulnerabilityIdToTerraform, false)(struct!.vulnerabilityId),
    vulnerability_source: cdktn.listMapper(inspectorv2FilterFilterCriteriaVulnerabilitySourceToTerraform, false)(struct!.vulnerabilitySource),
    vulnerable_packages: cdktn.listMapper(inspectorv2FilterFilterCriteriaVulnerablePackagesToTerraform, false)(struct!.vulnerablePackages),
  }
}


export function inspectorv2FilterFilterCriteriaToHclTerraform(struct?: Inspectorv2FilterFilterCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaAwsAccountIdToHclTerraform, false)(struct!.awsAccountId),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaAwsAccountIdList",
    },
    code_vulnerability_detector_name: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameToHclTerraform, false)(struct!.codeVulnerabilityDetectorName),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameList",
    },
    code_vulnerability_detector_tags: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsToHclTerraform, false)(struct!.codeVulnerabilityDetectorTags),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList",
    },
    code_vulnerability_file_path: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathToHclTerraform, false)(struct!.codeVulnerabilityFilePath),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathList",
    },
    component_id: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaComponentIdToHclTerraform, false)(struct!.componentId),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaComponentIdList",
    },
    component_type: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaComponentTypeToHclTerraform, false)(struct!.componentType),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaComponentTypeList",
    },
    ec_2_instance_image_id: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEc2InstanceImageIdToHclTerraform, false)(struct!.ec2InstanceImageId),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEc2InstanceImageIdList",
    },
    ec_2_instance_subnet_id: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdToHclTerraform, false)(struct!.ec2InstanceSubnetId),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdList",
    },
    ec_2_instance_vpc_id: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEc2InstanceVpcIdToHclTerraform, false)(struct!.ec2InstanceVpcId),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEc2InstanceVpcIdList",
    },
    ecr_image_architecture: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEcrImageArchitectureToHclTerraform, false)(struct!.ecrImageArchitecture),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEcrImageArchitectureList",
    },
    ecr_image_hash: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEcrImageHashToHclTerraform, false)(struct!.ecrImageHash),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEcrImageHashList",
    },
    ecr_image_pushed_at: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEcrImagePushedAtToHclTerraform, false)(struct!.ecrImagePushedAt),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEcrImagePushedAtList",
    },
    ecr_image_registry: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEcrImageRegistryToHclTerraform, false)(struct!.ecrImageRegistry),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEcrImageRegistryList",
    },
    ecr_image_repository_name: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEcrImageRepositoryNameToHclTerraform, false)(struct!.ecrImageRepositoryName),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEcrImageRepositoryNameList",
    },
    ecr_image_tags: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEcrImageTagsToHclTerraform, false)(struct!.ecrImageTags),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEcrImageTagsList",
    },
    epss_score: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaEpssScoreToHclTerraform, false)(struct!.epssScore),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaEpssScoreList",
    },
    exploit_available: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaExploitAvailableToHclTerraform, false)(struct!.exploitAvailable),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaExploitAvailableList",
    },
    finding_arn: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaFindingArnToHclTerraform, false)(struct!.findingArn),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaFindingArnList",
    },
    finding_status: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaFindingStatusToHclTerraform, false)(struct!.findingStatus),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaFindingStatusList",
    },
    finding_type: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaFindingTypeToHclTerraform, false)(struct!.findingType),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaFindingTypeList",
    },
    first_observed_at: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaFirstObservedAtToHclTerraform, false)(struct!.firstObservedAt),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaFirstObservedAtList",
    },
    fix_available: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaFixAvailableToHclTerraform, false)(struct!.fixAvailable),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaFixAvailableList",
    },
    inspector_score: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaInspectorScoreToHclTerraform, false)(struct!.inspectorScore),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaInspectorScoreList",
    },
    lambda_function_execution_role_arn: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnToHclTerraform, false)(struct!.lambdaFunctionExecutionRoleArn),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList",
    },
    lambda_function_last_modified_at: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtToHclTerraform, false)(struct!.lambdaFunctionLastModifiedAt),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtList",
    },
    lambda_function_layers: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaLambdaFunctionLayersToHclTerraform, false)(struct!.lambdaFunctionLayers),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaLambdaFunctionLayersList",
    },
    lambda_function_name: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaLambdaFunctionNameToHclTerraform, false)(struct!.lambdaFunctionName),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaLambdaFunctionNameList",
    },
    lambda_function_runtime: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeToHclTerraform, false)(struct!.lambdaFunctionRuntime),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeList",
    },
    last_observed_at: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaLastObservedAtToHclTerraform, false)(struct!.lastObservedAt),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaLastObservedAtList",
    },
    network_protocol: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaNetworkProtocolToHclTerraform, false)(struct!.networkProtocol),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaNetworkProtocolList",
    },
    port_range: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaPortRangeToHclTerraform, false)(struct!.portRange),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaPortRangeList",
    },
    related_vulnerabilities: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesToHclTerraform, false)(struct!.relatedVulnerabilities),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesList",
    },
    resource_id: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaResourceIdToHclTerraform, false)(struct!.resourceId),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaResourceIdList",
    },
    resource_tags: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaResourceTagsToHclTerraform, false)(struct!.resourceTags),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaResourceTagsList",
    },
    resource_type: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaResourceTypeToHclTerraform, false)(struct!.resourceType),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaResourceTypeList",
    },
    severity: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaSeverityToHclTerraform, false)(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaSeverityList",
    },
    title: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaTitleToHclTerraform, false)(struct!.title),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaTitleList",
    },
    updated_at: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaUpdatedAtToHclTerraform, false)(struct!.updatedAt),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaUpdatedAtList",
    },
    vendor_severity: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaVendorSeverityToHclTerraform, false)(struct!.vendorSeverity),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaVendorSeverityList",
    },
    vulnerability_id: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaVulnerabilityIdToHclTerraform, false)(struct!.vulnerabilityId),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerabilityIdList",
    },
    vulnerability_source: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaVulnerabilitySourceToHclTerraform, false)(struct!.vulnerabilitySource),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerabilitySourceList",
    },
    vulnerable_packages: {
      value: cdktn.listMapperHcl(inspectorv2FilterFilterCriteriaVulnerablePackagesToHclTerraform, false)(struct!.vulnerablePackages),
      isBlock: true,
      type: "list",
      storageClassType: "Inspectorv2FilterFilterCriteriaVulnerablePackagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2FilterFilterCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2FilterFilterCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
    }
    if (this._codeVulnerabilityDetectorName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVulnerabilityDetectorName = this._codeVulnerabilityDetectorName?.internalValue;
    }
    if (this._codeVulnerabilityDetectorTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVulnerabilityDetectorTags = this._codeVulnerabilityDetectorTags?.internalValue;
    }
    if (this._codeVulnerabilityFilePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeVulnerabilityFilePath = this._codeVulnerabilityFilePath?.internalValue;
    }
    if (this._componentId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentId = this._componentId?.internalValue;
    }
    if (this._componentType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentType = this._componentType?.internalValue;
    }
    if (this._ec2InstanceImageId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceImageId = this._ec2InstanceImageId?.internalValue;
    }
    if (this._ec2InstanceSubnetId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceSubnetId = this._ec2InstanceSubnetId?.internalValue;
    }
    if (this._ec2InstanceVpcId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2InstanceVpcId = this._ec2InstanceVpcId?.internalValue;
    }
    if (this._ecrImageArchitecture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageArchitecture = this._ecrImageArchitecture?.internalValue;
    }
    if (this._ecrImageHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageHash = this._ecrImageHash?.internalValue;
    }
    if (this._ecrImagePushedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImagePushedAt = this._ecrImagePushedAt?.internalValue;
    }
    if (this._ecrImageRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageRegistry = this._ecrImageRegistry?.internalValue;
    }
    if (this._ecrImageRepositoryName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageRepositoryName = this._ecrImageRepositoryName?.internalValue;
    }
    if (this._ecrImageTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecrImageTags = this._ecrImageTags?.internalValue;
    }
    if (this._epssScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epssScore = this._epssScore?.internalValue;
    }
    if (this._exploitAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exploitAvailable = this._exploitAvailable?.internalValue;
    }
    if (this._findingArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingArn = this._findingArn?.internalValue;
    }
    if (this._findingStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingStatus = this._findingStatus?.internalValue;
    }
    if (this._findingType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.findingType = this._findingType?.internalValue;
    }
    if (this._firstObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
    }
    if (this._fixAvailable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixAvailable = this._fixAvailable?.internalValue;
    }
    if (this._inspectorScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectorScore = this._inspectorScore?.internalValue;
    }
    if (this._lambdaFunctionExecutionRoleArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionExecutionRoleArn = this._lambdaFunctionExecutionRoleArn?.internalValue;
    }
    if (this._lambdaFunctionLastModifiedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionLastModifiedAt = this._lambdaFunctionLastModifiedAt?.internalValue;
    }
    if (this._lambdaFunctionLayers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionLayers = this._lambdaFunctionLayers?.internalValue;
    }
    if (this._lambdaFunctionName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionName = this._lambdaFunctionName?.internalValue;
    }
    if (this._lambdaFunctionRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionRuntime = this._lambdaFunctionRuntime?.internalValue;
    }
    if (this._lastObservedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
    }
    if (this._networkProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol?.internalValue;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    if (this._relatedVulnerabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedVulnerabilities = this._relatedVulnerabilities?.internalValue;
    }
    if (this._resourceId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId?.internalValue;
    }
    if (this._resourceTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags?.internalValue;
    }
    if (this._resourceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    if (this._updatedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt?.internalValue;
    }
    if (this._vendorSeverity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorSeverity = this._vendorSeverity?.internalValue;
    }
    if (this._vulnerabilityId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityId = this._vulnerabilityId?.internalValue;
    }
    if (this._vulnerabilitySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilitySource = this._vulnerabilitySource?.internalValue;
    }
    if (this._vulnerablePackages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerablePackages = this._vulnerablePackages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2FilterFilterCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = undefined;
      this._codeVulnerabilityDetectorName.internalValue = undefined;
      this._codeVulnerabilityDetectorTags.internalValue = undefined;
      this._codeVulnerabilityFilePath.internalValue = undefined;
      this._componentId.internalValue = undefined;
      this._componentType.internalValue = undefined;
      this._ec2InstanceImageId.internalValue = undefined;
      this._ec2InstanceSubnetId.internalValue = undefined;
      this._ec2InstanceVpcId.internalValue = undefined;
      this._ecrImageArchitecture.internalValue = undefined;
      this._ecrImageHash.internalValue = undefined;
      this._ecrImagePushedAt.internalValue = undefined;
      this._ecrImageRegistry.internalValue = undefined;
      this._ecrImageRepositoryName.internalValue = undefined;
      this._ecrImageTags.internalValue = undefined;
      this._epssScore.internalValue = undefined;
      this._exploitAvailable.internalValue = undefined;
      this._findingArn.internalValue = undefined;
      this._findingStatus.internalValue = undefined;
      this._findingType.internalValue = undefined;
      this._firstObservedAt.internalValue = undefined;
      this._fixAvailable.internalValue = undefined;
      this._inspectorScore.internalValue = undefined;
      this._lambdaFunctionExecutionRoleArn.internalValue = undefined;
      this._lambdaFunctionLastModifiedAt.internalValue = undefined;
      this._lambdaFunctionLayers.internalValue = undefined;
      this._lambdaFunctionName.internalValue = undefined;
      this._lambdaFunctionRuntime.internalValue = undefined;
      this._lastObservedAt.internalValue = undefined;
      this._networkProtocol.internalValue = undefined;
      this._portRange.internalValue = undefined;
      this._relatedVulnerabilities.internalValue = undefined;
      this._resourceId.internalValue = undefined;
      this._resourceTags.internalValue = undefined;
      this._resourceType.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._title.internalValue = undefined;
      this._updatedAt.internalValue = undefined;
      this._vendorSeverity.internalValue = undefined;
      this._vulnerabilityId.internalValue = undefined;
      this._vulnerabilitySource.internalValue = undefined;
      this._vulnerablePackages.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId.internalValue = value.awsAccountId;
      this._codeVulnerabilityDetectorName.internalValue = value.codeVulnerabilityDetectorName;
      this._codeVulnerabilityDetectorTags.internalValue = value.codeVulnerabilityDetectorTags;
      this._codeVulnerabilityFilePath.internalValue = value.codeVulnerabilityFilePath;
      this._componentId.internalValue = value.componentId;
      this._componentType.internalValue = value.componentType;
      this._ec2InstanceImageId.internalValue = value.ec2InstanceImageId;
      this._ec2InstanceSubnetId.internalValue = value.ec2InstanceSubnetId;
      this._ec2InstanceVpcId.internalValue = value.ec2InstanceVpcId;
      this._ecrImageArchitecture.internalValue = value.ecrImageArchitecture;
      this._ecrImageHash.internalValue = value.ecrImageHash;
      this._ecrImagePushedAt.internalValue = value.ecrImagePushedAt;
      this._ecrImageRegistry.internalValue = value.ecrImageRegistry;
      this._ecrImageRepositoryName.internalValue = value.ecrImageRepositoryName;
      this._ecrImageTags.internalValue = value.ecrImageTags;
      this._epssScore.internalValue = value.epssScore;
      this._exploitAvailable.internalValue = value.exploitAvailable;
      this._findingArn.internalValue = value.findingArn;
      this._findingStatus.internalValue = value.findingStatus;
      this._findingType.internalValue = value.findingType;
      this._firstObservedAt.internalValue = value.firstObservedAt;
      this._fixAvailable.internalValue = value.fixAvailable;
      this._inspectorScore.internalValue = value.inspectorScore;
      this._lambdaFunctionExecutionRoleArn.internalValue = value.lambdaFunctionExecutionRoleArn;
      this._lambdaFunctionLastModifiedAt.internalValue = value.lambdaFunctionLastModifiedAt;
      this._lambdaFunctionLayers.internalValue = value.lambdaFunctionLayers;
      this._lambdaFunctionName.internalValue = value.lambdaFunctionName;
      this._lambdaFunctionRuntime.internalValue = value.lambdaFunctionRuntime;
      this._lastObservedAt.internalValue = value.lastObservedAt;
      this._networkProtocol.internalValue = value.networkProtocol;
      this._portRange.internalValue = value.portRange;
      this._relatedVulnerabilities.internalValue = value.relatedVulnerabilities;
      this._resourceId.internalValue = value.resourceId;
      this._resourceTags.internalValue = value.resourceTags;
      this._resourceType.internalValue = value.resourceType;
      this._severity.internalValue = value.severity;
      this._title.internalValue = value.title;
      this._updatedAt.internalValue = value.updatedAt;
      this._vendorSeverity.internalValue = value.vendorSeverity;
      this._vulnerabilityId.internalValue = value.vulnerabilityId;
      this._vulnerabilitySource.internalValue = value.vulnerabilitySource;
      this._vulnerablePackages.internalValue = value.vulnerablePackages;
    }
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId = new Inspectorv2FilterFilterCriteriaAwsAccountIdList(this, "aws_account_id", false);
  public get awsAccountId() {
    return this._awsAccountId;
  }
  public putAwsAccountId(value: Inspectorv2FilterFilterCriteriaAwsAccountId[] | cdktn.IResolvable) {
    this._awsAccountId.internalValue = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId.internalValue;
  }

  // code_vulnerability_detector_name - computed: true, optional: true, required: false
  private _codeVulnerabilityDetectorName = new Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorNameList(this, "code_vulnerability_detector_name", false);
  public get codeVulnerabilityDetectorName() {
    return this._codeVulnerabilityDetectorName;
  }
  public putCodeVulnerabilityDetectorName(value: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorName[] | cdktn.IResolvable) {
    this._codeVulnerabilityDetectorName.internalValue = value;
  }
  public resetCodeVulnerabilityDetectorName() {
    this._codeVulnerabilityDetectorName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVulnerabilityDetectorNameInput() {
    return this._codeVulnerabilityDetectorName.internalValue;
  }

  // code_vulnerability_detector_tags - computed: true, optional: true, required: false
  private _codeVulnerabilityDetectorTags = new Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTagsList(this, "code_vulnerability_detector_tags", false);
  public get codeVulnerabilityDetectorTags() {
    return this._codeVulnerabilityDetectorTags;
  }
  public putCodeVulnerabilityDetectorTags(value: Inspectorv2FilterFilterCriteriaCodeVulnerabilityDetectorTags[] | cdktn.IResolvable) {
    this._codeVulnerabilityDetectorTags.internalValue = value;
  }
  public resetCodeVulnerabilityDetectorTags() {
    this._codeVulnerabilityDetectorTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVulnerabilityDetectorTagsInput() {
    return this._codeVulnerabilityDetectorTags.internalValue;
  }

  // code_vulnerability_file_path - computed: true, optional: true, required: false
  private _codeVulnerabilityFilePath = new Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePathList(this, "code_vulnerability_file_path", false);
  public get codeVulnerabilityFilePath() {
    return this._codeVulnerabilityFilePath;
  }
  public putCodeVulnerabilityFilePath(value: Inspectorv2FilterFilterCriteriaCodeVulnerabilityFilePath[] | cdktn.IResolvable) {
    this._codeVulnerabilityFilePath.internalValue = value;
  }
  public resetCodeVulnerabilityFilePath() {
    this._codeVulnerabilityFilePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeVulnerabilityFilePathInput() {
    return this._codeVulnerabilityFilePath.internalValue;
  }

  // component_id - computed: true, optional: true, required: false
  private _componentId = new Inspectorv2FilterFilterCriteriaComponentIdList(this, "component_id", false);
  public get componentId() {
    return this._componentId;
  }
  public putComponentId(value: Inspectorv2FilterFilterCriteriaComponentId[] | cdktn.IResolvable) {
    this._componentId.internalValue = value;
  }
  public resetComponentId() {
    this._componentId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId.internalValue;
  }

  // component_type - computed: true, optional: true, required: false
  private _componentType = new Inspectorv2FilterFilterCriteriaComponentTypeList(this, "component_type", false);
  public get componentType() {
    return this._componentType;
  }
  public putComponentType(value: Inspectorv2FilterFilterCriteriaComponentType[] | cdktn.IResolvable) {
    this._componentType.internalValue = value;
  }
  public resetComponentType() {
    this._componentType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType.internalValue;
  }

  // ec_2_instance_image_id - computed: true, optional: true, required: false
  private _ec2InstanceImageId = new Inspectorv2FilterFilterCriteriaEc2InstanceImageIdList(this, "ec_2_instance_image_id", false);
  public get ec2InstanceImageId() {
    return this._ec2InstanceImageId;
  }
  public putEc2InstanceImageId(value: Inspectorv2FilterFilterCriteriaEc2InstanceImageId[] | cdktn.IResolvable) {
    this._ec2InstanceImageId.internalValue = value;
  }
  public resetEc2InstanceImageId() {
    this._ec2InstanceImageId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceImageIdInput() {
    return this._ec2InstanceImageId.internalValue;
  }

  // ec_2_instance_subnet_id - computed: true, optional: true, required: false
  private _ec2InstanceSubnetId = new Inspectorv2FilterFilterCriteriaEc2InstanceSubnetIdList(this, "ec_2_instance_subnet_id", false);
  public get ec2InstanceSubnetId() {
    return this._ec2InstanceSubnetId;
  }
  public putEc2InstanceSubnetId(value: Inspectorv2FilterFilterCriteriaEc2InstanceSubnetId[] | cdktn.IResolvable) {
    this._ec2InstanceSubnetId.internalValue = value;
  }
  public resetEc2InstanceSubnetId() {
    this._ec2InstanceSubnetId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceSubnetIdInput() {
    return this._ec2InstanceSubnetId.internalValue;
  }

  // ec_2_instance_vpc_id - computed: true, optional: true, required: false
  private _ec2InstanceVpcId = new Inspectorv2FilterFilterCriteriaEc2InstanceVpcIdList(this, "ec_2_instance_vpc_id", false);
  public get ec2InstanceVpcId() {
    return this._ec2InstanceVpcId;
  }
  public putEc2InstanceVpcId(value: Inspectorv2FilterFilterCriteriaEc2InstanceVpcId[] | cdktn.IResolvable) {
    this._ec2InstanceVpcId.internalValue = value;
  }
  public resetEc2InstanceVpcId() {
    this._ec2InstanceVpcId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceVpcIdInput() {
    return this._ec2InstanceVpcId.internalValue;
  }

  // ecr_image_architecture - computed: true, optional: true, required: false
  private _ecrImageArchitecture = new Inspectorv2FilterFilterCriteriaEcrImageArchitectureList(this, "ecr_image_architecture", false);
  public get ecrImageArchitecture() {
    return this._ecrImageArchitecture;
  }
  public putEcrImageArchitecture(value: Inspectorv2FilterFilterCriteriaEcrImageArchitecture[] | cdktn.IResolvable) {
    this._ecrImageArchitecture.internalValue = value;
  }
  public resetEcrImageArchitecture() {
    this._ecrImageArchitecture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageArchitectureInput() {
    return this._ecrImageArchitecture.internalValue;
  }

  // ecr_image_hash - computed: true, optional: true, required: false
  private _ecrImageHash = new Inspectorv2FilterFilterCriteriaEcrImageHashList(this, "ecr_image_hash", false);
  public get ecrImageHash() {
    return this._ecrImageHash;
  }
  public putEcrImageHash(value: Inspectorv2FilterFilterCriteriaEcrImageHash[] | cdktn.IResolvable) {
    this._ecrImageHash.internalValue = value;
  }
  public resetEcrImageHash() {
    this._ecrImageHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageHashInput() {
    return this._ecrImageHash.internalValue;
  }

  // ecr_image_pushed_at - computed: true, optional: true, required: false
  private _ecrImagePushedAt = new Inspectorv2FilterFilterCriteriaEcrImagePushedAtList(this, "ecr_image_pushed_at", false);
  public get ecrImagePushedAt() {
    return this._ecrImagePushedAt;
  }
  public putEcrImagePushedAt(value: Inspectorv2FilterFilterCriteriaEcrImagePushedAt[] | cdktn.IResolvable) {
    this._ecrImagePushedAt.internalValue = value;
  }
  public resetEcrImagePushedAt() {
    this._ecrImagePushedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImagePushedAtInput() {
    return this._ecrImagePushedAt.internalValue;
  }

  // ecr_image_registry - computed: true, optional: true, required: false
  private _ecrImageRegistry = new Inspectorv2FilterFilterCriteriaEcrImageRegistryList(this, "ecr_image_registry", false);
  public get ecrImageRegistry() {
    return this._ecrImageRegistry;
  }
  public putEcrImageRegistry(value: Inspectorv2FilterFilterCriteriaEcrImageRegistry[] | cdktn.IResolvable) {
    this._ecrImageRegistry.internalValue = value;
  }
  public resetEcrImageRegistry() {
    this._ecrImageRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageRegistryInput() {
    return this._ecrImageRegistry.internalValue;
  }

  // ecr_image_repository_name - computed: true, optional: true, required: false
  private _ecrImageRepositoryName = new Inspectorv2FilterFilterCriteriaEcrImageRepositoryNameList(this, "ecr_image_repository_name", false);
  public get ecrImageRepositoryName() {
    return this._ecrImageRepositoryName;
  }
  public putEcrImageRepositoryName(value: Inspectorv2FilterFilterCriteriaEcrImageRepositoryName[] | cdktn.IResolvable) {
    this._ecrImageRepositoryName.internalValue = value;
  }
  public resetEcrImageRepositoryName() {
    this._ecrImageRepositoryName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageRepositoryNameInput() {
    return this._ecrImageRepositoryName.internalValue;
  }

  // ecr_image_tags - computed: true, optional: true, required: false
  private _ecrImageTags = new Inspectorv2FilterFilterCriteriaEcrImageTagsList(this, "ecr_image_tags", false);
  public get ecrImageTags() {
    return this._ecrImageTags;
  }
  public putEcrImageTags(value: Inspectorv2FilterFilterCriteriaEcrImageTags[] | cdktn.IResolvable) {
    this._ecrImageTags.internalValue = value;
  }
  public resetEcrImageTags() {
    this._ecrImageTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrImageTagsInput() {
    return this._ecrImageTags.internalValue;
  }

  // epss_score - computed: true, optional: true, required: false
  private _epssScore = new Inspectorv2FilterFilterCriteriaEpssScoreList(this, "epss_score", false);
  public get epssScore() {
    return this._epssScore;
  }
  public putEpssScore(value: Inspectorv2FilterFilterCriteriaEpssScore[] | cdktn.IResolvable) {
    this._epssScore.internalValue = value;
  }
  public resetEpssScore() {
    this._epssScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epssScoreInput() {
    return this._epssScore.internalValue;
  }

  // exploit_available - computed: true, optional: true, required: false
  private _exploitAvailable = new Inspectorv2FilterFilterCriteriaExploitAvailableList(this, "exploit_available", false);
  public get exploitAvailable() {
    return this._exploitAvailable;
  }
  public putExploitAvailable(value: Inspectorv2FilterFilterCriteriaExploitAvailable[] | cdktn.IResolvable) {
    this._exploitAvailable.internalValue = value;
  }
  public resetExploitAvailable() {
    this._exploitAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exploitAvailableInput() {
    return this._exploitAvailable.internalValue;
  }

  // finding_arn - computed: true, optional: true, required: false
  private _findingArn = new Inspectorv2FilterFilterCriteriaFindingArnList(this, "finding_arn", false);
  public get findingArn() {
    return this._findingArn;
  }
  public putFindingArn(value: Inspectorv2FilterFilterCriteriaFindingArn[] | cdktn.IResolvable) {
    this._findingArn.internalValue = value;
  }
  public resetFindingArn() {
    this._findingArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingArnInput() {
    return this._findingArn.internalValue;
  }

  // finding_status - computed: true, optional: true, required: false
  private _findingStatus = new Inspectorv2FilterFilterCriteriaFindingStatusList(this, "finding_status", false);
  public get findingStatus() {
    return this._findingStatus;
  }
  public putFindingStatus(value: Inspectorv2FilterFilterCriteriaFindingStatus[] | cdktn.IResolvable) {
    this._findingStatus.internalValue = value;
  }
  public resetFindingStatus() {
    this._findingStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingStatusInput() {
    return this._findingStatus.internalValue;
  }

  // finding_type - computed: true, optional: true, required: false
  private _findingType = new Inspectorv2FilterFilterCriteriaFindingTypeList(this, "finding_type", false);
  public get findingType() {
    return this._findingType;
  }
  public putFindingType(value: Inspectorv2FilterFilterCriteriaFindingType[] | cdktn.IResolvable) {
    this._findingType.internalValue = value;
  }
  public resetFindingType() {
    this._findingType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingTypeInput() {
    return this._findingType.internalValue;
  }

  // first_observed_at - computed: true, optional: true, required: false
  private _firstObservedAt = new Inspectorv2FilterFilterCriteriaFirstObservedAtList(this, "first_observed_at", false);
  public get firstObservedAt() {
    return this._firstObservedAt;
  }
  public putFirstObservedAt(value: Inspectorv2FilterFilterCriteriaFirstObservedAt[] | cdktn.IResolvable) {
    this._firstObservedAt.internalValue = value;
  }
  public resetFirstObservedAt() {
    this._firstObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstObservedAtInput() {
    return this._firstObservedAt.internalValue;
  }

  // fix_available - computed: true, optional: true, required: false
  private _fixAvailable = new Inspectorv2FilterFilterCriteriaFixAvailableList(this, "fix_available", false);
  public get fixAvailable() {
    return this._fixAvailable;
  }
  public putFixAvailable(value: Inspectorv2FilterFilterCriteriaFixAvailable[] | cdktn.IResolvable) {
    this._fixAvailable.internalValue = value;
  }
  public resetFixAvailable() {
    this._fixAvailable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixAvailableInput() {
    return this._fixAvailable.internalValue;
  }

  // inspector_score - computed: true, optional: true, required: false
  private _inspectorScore = new Inspectorv2FilterFilterCriteriaInspectorScoreList(this, "inspector_score", false);
  public get inspectorScore() {
    return this._inspectorScore;
  }
  public putInspectorScore(value: Inspectorv2FilterFilterCriteriaInspectorScore[] | cdktn.IResolvable) {
    this._inspectorScore.internalValue = value;
  }
  public resetInspectorScore() {
    this._inspectorScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectorScoreInput() {
    return this._inspectorScore.internalValue;
  }

  // lambda_function_execution_role_arn - computed: true, optional: true, required: false
  private _lambdaFunctionExecutionRoleArn = new Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArnList(this, "lambda_function_execution_role_arn", false);
  public get lambdaFunctionExecutionRoleArn() {
    return this._lambdaFunctionExecutionRoleArn;
  }
  public putLambdaFunctionExecutionRoleArn(value: Inspectorv2FilterFilterCriteriaLambdaFunctionExecutionRoleArn[] | cdktn.IResolvable) {
    this._lambdaFunctionExecutionRoleArn.internalValue = value;
  }
  public resetLambdaFunctionExecutionRoleArn() {
    this._lambdaFunctionExecutionRoleArn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionExecutionRoleArnInput() {
    return this._lambdaFunctionExecutionRoleArn.internalValue;
  }

  // lambda_function_last_modified_at - computed: true, optional: true, required: false
  private _lambdaFunctionLastModifiedAt = new Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAtList(this, "lambda_function_last_modified_at", false);
  public get lambdaFunctionLastModifiedAt() {
    return this._lambdaFunctionLastModifiedAt;
  }
  public putLambdaFunctionLastModifiedAt(value: Inspectorv2FilterFilterCriteriaLambdaFunctionLastModifiedAt[] | cdktn.IResolvable) {
    this._lambdaFunctionLastModifiedAt.internalValue = value;
  }
  public resetLambdaFunctionLastModifiedAt() {
    this._lambdaFunctionLastModifiedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionLastModifiedAtInput() {
    return this._lambdaFunctionLastModifiedAt.internalValue;
  }

  // lambda_function_layers - computed: true, optional: true, required: false
  private _lambdaFunctionLayers = new Inspectorv2FilterFilterCriteriaLambdaFunctionLayersList(this, "lambda_function_layers", false);
  public get lambdaFunctionLayers() {
    return this._lambdaFunctionLayers;
  }
  public putLambdaFunctionLayers(value: Inspectorv2FilterFilterCriteriaLambdaFunctionLayers[] | cdktn.IResolvable) {
    this._lambdaFunctionLayers.internalValue = value;
  }
  public resetLambdaFunctionLayers() {
    this._lambdaFunctionLayers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionLayersInput() {
    return this._lambdaFunctionLayers.internalValue;
  }

  // lambda_function_name - computed: true, optional: true, required: false
  private _lambdaFunctionName = new Inspectorv2FilterFilterCriteriaLambdaFunctionNameList(this, "lambda_function_name", false);
  public get lambdaFunctionName() {
    return this._lambdaFunctionName;
  }
  public putLambdaFunctionName(value: Inspectorv2FilterFilterCriteriaLambdaFunctionName[] | cdktn.IResolvable) {
    this._lambdaFunctionName.internalValue = value;
  }
  public resetLambdaFunctionName() {
    this._lambdaFunctionName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionNameInput() {
    return this._lambdaFunctionName.internalValue;
  }

  // lambda_function_runtime - computed: true, optional: true, required: false
  private _lambdaFunctionRuntime = new Inspectorv2FilterFilterCriteriaLambdaFunctionRuntimeList(this, "lambda_function_runtime", false);
  public get lambdaFunctionRuntime() {
    return this._lambdaFunctionRuntime;
  }
  public putLambdaFunctionRuntime(value: Inspectorv2FilterFilterCriteriaLambdaFunctionRuntime[] | cdktn.IResolvable) {
    this._lambdaFunctionRuntime.internalValue = value;
  }
  public resetLambdaFunctionRuntime() {
    this._lambdaFunctionRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionRuntimeInput() {
    return this._lambdaFunctionRuntime.internalValue;
  }

  // last_observed_at - computed: true, optional: true, required: false
  private _lastObservedAt = new Inspectorv2FilterFilterCriteriaLastObservedAtList(this, "last_observed_at", false);
  public get lastObservedAt() {
    return this._lastObservedAt;
  }
  public putLastObservedAt(value: Inspectorv2FilterFilterCriteriaLastObservedAt[] | cdktn.IResolvable) {
    this._lastObservedAt.internalValue = value;
  }
  public resetLastObservedAt() {
    this._lastObservedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedAtInput() {
    return this._lastObservedAt.internalValue;
  }

  // network_protocol - computed: true, optional: true, required: false
  private _networkProtocol = new Inspectorv2FilterFilterCriteriaNetworkProtocolList(this, "network_protocol", false);
  public get networkProtocol() {
    return this._networkProtocol;
  }
  public putNetworkProtocol(value: Inspectorv2FilterFilterCriteriaNetworkProtocol[] | cdktn.IResolvable) {
    this._networkProtocol.internalValue = value;
  }
  public resetNetworkProtocol() {
    this._networkProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol.internalValue;
  }

  // port_range - computed: true, optional: true, required: false
  private _portRange = new Inspectorv2FilterFilterCriteriaPortRangeList(this, "port_range", false);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: Inspectorv2FilterFilterCriteriaPortRange[] | cdktn.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }

  // related_vulnerabilities - computed: true, optional: true, required: false
  private _relatedVulnerabilities = new Inspectorv2FilterFilterCriteriaRelatedVulnerabilitiesList(this, "related_vulnerabilities", false);
  public get relatedVulnerabilities() {
    return this._relatedVulnerabilities;
  }
  public putRelatedVulnerabilities(value: Inspectorv2FilterFilterCriteriaRelatedVulnerabilities[] | cdktn.IResolvable) {
    this._relatedVulnerabilities.internalValue = value;
  }
  public resetRelatedVulnerabilities() {
    this._relatedVulnerabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedVulnerabilitiesInput() {
    return this._relatedVulnerabilities.internalValue;
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId = new Inspectorv2FilterFilterCriteriaResourceIdList(this, "resource_id", false);
  public get resourceId() {
    return this._resourceId;
  }
  public putResourceId(value: Inspectorv2FilterFilterCriteriaResourceId[] | cdktn.IResolvable) {
    this._resourceId.internalValue = value;
  }
  public resetResourceId() {
    this._resourceId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId.internalValue;
  }

  // resource_tags - computed: true, optional: true, required: false
  private _resourceTags = new Inspectorv2FilterFilterCriteriaResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: Inspectorv2FilterFilterCriteriaResourceTags[] | cdktn.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType = new Inspectorv2FilterFilterCriteriaResourceTypeList(this, "resource_type", false);
  public get resourceType() {
    return this._resourceType;
  }
  public putResourceType(value: Inspectorv2FilterFilterCriteriaResourceType[] | cdktn.IResolvable) {
    this._resourceType.internalValue = value;
  }
  public resetResourceType() {
    this._resourceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType.internalValue;
  }

  // severity - computed: true, optional: true, required: false
  private _severity = new Inspectorv2FilterFilterCriteriaSeverityList(this, "severity", false);
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: Inspectorv2FilterFilterCriteriaSeverity[] | cdktn.IResolvable) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // title - computed: true, optional: true, required: false
  private _title = new Inspectorv2FilterFilterCriteriaTitleList(this, "title", false);
  public get title() {
    return this._title;
  }
  public putTitle(value: Inspectorv2FilterFilterCriteriaTitle[] | cdktn.IResolvable) {
    this._title.internalValue = value;
  }
  public resetTitle() {
    this._title.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt = new Inspectorv2FilterFilterCriteriaUpdatedAtList(this, "updated_at", false);
  public get updatedAt() {
    return this._updatedAt;
  }
  public putUpdatedAt(value: Inspectorv2FilterFilterCriteriaUpdatedAt[] | cdktn.IResolvable) {
    this._updatedAt.internalValue = value;
  }
  public resetUpdatedAt() {
    this._updatedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt.internalValue;
  }

  // vendor_severity - computed: true, optional: true, required: false
  private _vendorSeverity = new Inspectorv2FilterFilterCriteriaVendorSeverityList(this, "vendor_severity", false);
  public get vendorSeverity() {
    return this._vendorSeverity;
  }
  public putVendorSeverity(value: Inspectorv2FilterFilterCriteriaVendorSeverity[] | cdktn.IResolvable) {
    this._vendorSeverity.internalValue = value;
  }
  public resetVendorSeverity() {
    this._vendorSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSeverityInput() {
    return this._vendorSeverity.internalValue;
  }

  // vulnerability_id - computed: true, optional: true, required: false
  private _vulnerabilityId = new Inspectorv2FilterFilterCriteriaVulnerabilityIdList(this, "vulnerability_id", false);
  public get vulnerabilityId() {
    return this._vulnerabilityId;
  }
  public putVulnerabilityId(value: Inspectorv2FilterFilterCriteriaVulnerabilityId[] | cdktn.IResolvable) {
    this._vulnerabilityId.internalValue = value;
  }
  public resetVulnerabilityId() {
    this._vulnerabilityId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityIdInput() {
    return this._vulnerabilityId.internalValue;
  }

  // vulnerability_source - computed: true, optional: true, required: false
  private _vulnerabilitySource = new Inspectorv2FilterFilterCriteriaVulnerabilitySourceList(this, "vulnerability_source", false);
  public get vulnerabilitySource() {
    return this._vulnerabilitySource;
  }
  public putVulnerabilitySource(value: Inspectorv2FilterFilterCriteriaVulnerabilitySource[] | cdktn.IResolvable) {
    this._vulnerabilitySource.internalValue = value;
  }
  public resetVulnerabilitySource() {
    this._vulnerabilitySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilitySourceInput() {
    return this._vulnerabilitySource.internalValue;
  }

  // vulnerable_packages - computed: true, optional: true, required: false
  private _vulnerablePackages = new Inspectorv2FilterFilterCriteriaVulnerablePackagesList(this, "vulnerable_packages", false);
  public get vulnerablePackages() {
    return this._vulnerablePackages;
  }
  public putVulnerablePackages(value: Inspectorv2FilterFilterCriteriaVulnerablePackages[] | cdktn.IResolvable) {
    this._vulnerablePackages.internalValue = value;
  }
  public resetVulnerablePackages() {
    this._vulnerablePackages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerablePackagesInput() {
    return this._vulnerablePackages.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter awscc_inspectorv2_filter}
*/
export class Inspectorv2Filter extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_inspectorv2_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Inspectorv2Filter resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inspectorv2Filter to import
  * @param importFromId The id of the existing Inspectorv2Filter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inspectorv2Filter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/inspectorv2_filter awscc_inspectorv2_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Inspectorv2FilterConfig
  */
  public constructor(scope: Construct, id: string, config: Inspectorv2FilterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_inspectorv2_filter',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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
    this._filterAction = config.filterAction;
    this._filterCriteria.internalValue = config.filterCriteria;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // filter_action - computed: false, optional: false, required: true
  private _filterAction?: string; 
  public get filterAction() {
    return this.getStringAttribute('filter_action');
  }
  public set filterAction(value: string) {
    this._filterAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionInput() {
    return this._filterAction;
  }

  // filter_criteria - computed: false, optional: false, required: true
  private _filterCriteria = new Inspectorv2FilterFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: Inspectorv2FilterFilterCriteria) {
    this._filterCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
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
      description: cdktn.stringToTerraform(this._description),
      filter_action: cdktn.stringToTerraform(this._filterAction),
      filter_criteria: inspectorv2FilterFilterCriteriaToTerraform(this._filterCriteria.internalValue),
      name: cdktn.stringToTerraform(this._name),
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
      filter_action: {
        value: cdktn.stringToHclTerraform(this._filterAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_criteria: {
        value: inspectorv2FilterFilterCriteriaToHclTerraform(this._filterCriteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Inspectorv2FilterFilterCriteria",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
