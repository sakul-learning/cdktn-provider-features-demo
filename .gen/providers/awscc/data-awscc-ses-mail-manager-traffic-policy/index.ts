// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_traffic_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSesMailManagerTrafficPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_traffic_policy#id DataAwsccSesMailManagerTrafficPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyzer - computed: true, optional: false, required: false
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }

  // result_field - computed: true, optional: false, required: false
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_lists - computed: true, optional: false, required: false
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis - computed: true, optional: false, required: false
  private _analysis = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }

  // is_in_address_list - computed: true, optional: false, required: false
  private _isInAddressList = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(this, "is_in_address_list");
  public get isInAddressList() {
    return this._isInAddressList;
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyzer - computed: true, optional: false, required: false
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }

  // result_field - computed: true, optional: false, required: false
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analysis - computed: true, optional: false, required: false
  private _analysis = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluate - computed: true, optional: false, required: false
  private _evaluate = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean_expression - computed: true, optional: false, required: false
  private _booleanExpression = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference(this, "boolean_expression");
  public get booleanExpression() {
    return this._booleanExpression;
  }

  // ip_expression - computed: true, optional: false, required: false
  private _ipExpression = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference(this, "ip_expression");
  public get ipExpression() {
    return this._ipExpression;
  }

  // ipv_6_expression - computed: true, optional: false, required: false
  private _ipv6Expression = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference(this, "ipv_6_expression");
  public get ipv6Expression() {
    return this._ipv6Expression;
  }

  // string_expression - computed: true, optional: false, required: false
  private _stringExpression = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference(this, "string_expression");
  public get stringExpression() {
    return this._stringExpression;
  }

  // tls_expression - computed: true, optional: false, required: false
  private _tlsExpression = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference(this, "tls_expression");
  public get tlsExpression() {
    return this._tlsExpression;
  }
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference {
    return new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyPolicyStatements {
}

export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyPolicyStatementsToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyPolicyStatements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyPolicyStatements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyPolicyStatements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
}

export class DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference {
    return new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSesMailManagerTrafficPolicyTags {
}

export function dataAwsccSesMailManagerTrafficPolicyTagsToTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerTrafficPolicyTagsToHclTerraform(struct?: DataAwsccSesMailManagerTrafficPolicyTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerTrafficPolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesMailManagerTrafficPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerTrafficPolicyTags | undefined) {
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

export class DataAwsccSesMailManagerTrafficPolicyTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesMailManagerTrafficPolicyTagsOutputReference {
    return new DataAwsccSesMailManagerTrafficPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy}
*/
export class DataAwsccSesMailManagerTrafficPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_mail_manager_traffic_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSesMailManagerTrafficPolicy to import
  * @param importFromId The id of the existing DataAwsccSesMailManagerTrafficPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_traffic_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSesMailManagerTrafficPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_mail_manager_traffic_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSesMailManagerTrafficPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSesMailManagerTrafficPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_mail_manager_traffic_policy',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: true, optional: false, required: false
  public get defaultAction() {
    return this.getStringAttribute('default_action');
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

  // max_message_size_bytes - computed: true, optional: false, required: false
  public get maxMessageSizeBytes() {
    return this.getNumberAttribute('max_message_size_bytes');
  }

  // policy_statements - computed: true, optional: false, required: false
  private _policyStatements = new DataAwsccSesMailManagerTrafficPolicyPolicyStatementsList(this, "policy_statements", false);
  public get policyStatements() {
    return this._policyStatements;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSesMailManagerTrafficPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // traffic_policy_arn - computed: true, optional: false, required: false
  public get trafficPolicyArn() {
    return this.getStringAttribute('traffic_policy_arn');
  }

  // traffic_policy_id - computed: true, optional: false, required: false
  public get trafficPolicyId() {
    return this.getStringAttribute('traffic_policy_id');
  }

  // traffic_policy_name - computed: true, optional: false, required: false
  public get trafficPolicyName() {
    return this.getStringAttribute('traffic_policy_name');
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
