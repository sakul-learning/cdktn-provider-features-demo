// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SesMailManagerTrafficPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#default_action SesMailManagerTrafficPolicy#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#max_message_size_bytes SesMailManagerTrafficPolicy#max_message_size_bytes}
  */
  readonly maxMessageSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#policy_statements SesMailManagerTrafficPolicy#policy_statements}
  */
  readonly policyStatements: SesMailManagerTrafficPolicyPolicyStatements[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#tags SesMailManagerTrafficPolicy#tags}
  */
  readonly tags?: SesMailManagerTrafficPolicyTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#traffic_policy_name SesMailManagerTrafficPolicy#traffic_policy_name}
  */
  readonly trafficPolicyName?: string;
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}
  */
  readonly resultField?: string;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: true, optional: true, required: false
  private _analyzer?: string;
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string;
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#address_lists SesMailManagerTrafficPolicy#address_lists}
  */
  readonly addressLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLists = this._addressLists;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLists = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLists = value.addressLists;
      this._attribute = value.attribute;
    }
  }

  // address_lists - computed: true, optional: true, required: false
  private _addressLists?: string[];
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  public resetAddressLists() {
    this._addressLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string;
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}
  */
  readonly analysis?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#is_in_address_list SesMailManagerTrafficPolicy#is_in_address_list}
  */
  readonly isInAddressList?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisToTerraform(struct!.analysis),
    is_in_address_list: sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct!.isInAddressList),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis",
    },
    is_in_address_list: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct!.isInAddressList),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._isInAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._isInAddressList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._isInAddressList.internalValue = value.isInAddressList;
    }
  }

  // analysis - computed: true, optional: true, required: false
  private _analysis = new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // is_in_address_list - computed: true, optional: true, required: false
  private _isInAddressList = new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(this, "is_in_address_list");
  public get isInAddressList() {
    return this._isInAddressList;
  }
  public putIsInAddressList(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct) {
    this._isInAddressList.internalValue = value;
  }
  public resetIsInAddressList() {
    this._isInAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInAddressListInput() {
    return this._isInAddressList.internalValue;
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}
  */
  readonly operator?: string;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string;
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string;
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}
  */
  readonly values?: string[];
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string;
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string;
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}
  */
  readonly values?: string[];
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string;
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}
  */
  readonly resultField?: string;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: true, optional: true, required: false
  private _analyzer?: string;
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string;
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}
  */
  readonly analysis?: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analysis: sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisToTerraform(struct!.analysis),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analysis: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisToHclTerraform(struct!.analysis),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysis.internalValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysis.internalValue = value.analysis;
      this._attribute = value.attribute;
    }
  }

  // analysis - computed: true, optional: true, required: false
  private _analysis = new SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference(this, "analysis");
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string;
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}
  */
  readonly values?: string[];
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string;
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}
  */
  readonly attribute?: string;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string;
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}
  */
  readonly evaluate?: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}
  */
  readonly value?: string;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluate: sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateToTerraform(struct!.evaluate),
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluate: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateToHclTerraform(struct!.evaluate),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
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

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluate.internalValue = value.evaluate;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // evaluate - computed: true, optional: true, required: false
  private _evaluate = new SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference(this, "evaluate");
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string;
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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
export interface SesMailManagerTrafficPolicyPolicyStatementsConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#boolean_expression SesMailManagerTrafficPolicy#boolean_expression}
  */
  readonly booleanExpression?: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#ip_expression SesMailManagerTrafficPolicy#ip_expression}
  */
  readonly ipExpression?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#ipv_6_expression SesMailManagerTrafficPolicy#ipv_6_expression}
  */
  readonly ipv6Expression?: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#string_expression SesMailManagerTrafficPolicy#string_expression}
  */
  readonly stringExpression?: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#tls_expression SesMailManagerTrafficPolicy#tls_expression}
  */
  readonly tlsExpression?: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression;
}

export function sesMailManagerTrafficPolicyPolicyStatementsConditionsToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_expression: sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionToTerraform(struct!.booleanExpression),
    ip_expression: sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionToTerraform(struct!.ipExpression),
    ipv_6_expression: sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionToTerraform(struct!.ipv6Expression),
    string_expression: sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionToTerraform(struct!.stringExpression),
    tls_expression: sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionToTerraform(struct!.tlsExpression),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsConditionsToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatementsConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_expression: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionToHclTerraform(struct!.booleanExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression",
    },
    ip_expression: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionToHclTerraform(struct!.ipExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression",
    },
    ipv_6_expression: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionToHclTerraform(struct!.ipv6Expression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression",
    },
    string_expression: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionToHclTerraform(struct!.stringExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression",
    },
    tls_expression: {
      value: sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionToHclTerraform(struct!.tlsExpression),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatementsConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
    }
    if (this._ipExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpression = this._ipExpression?.internalValue;
    }
    if (this._ipv6Expression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Expression = this._ipv6Expression?.internalValue;
    }
    if (this._stringExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringExpression = this._stringExpression?.internalValue;
    }
    if (this._tlsExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsExpression = this._tlsExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatementsConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = undefined;
      this._ipExpression.internalValue = undefined;
      this._ipv6Expression.internalValue = undefined;
      this._stringExpression.internalValue = undefined;
      this._tlsExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = value.booleanExpression;
      this._ipExpression.internalValue = value.ipExpression;
      this._ipv6Expression.internalValue = value.ipv6Expression;
      this._stringExpression.internalValue = value.stringExpression;
      this._tlsExpression.internalValue = value.tlsExpression;
    }
  }

  // boolean_expression - computed: true, optional: true, required: false
  private _booleanExpression = new SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference(this, "boolean_expression");
  public get booleanExpression() {
    return this._booleanExpression;
  }
  public putBooleanExpression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression) {
    this._booleanExpression.internalValue = value;
  }
  public resetBooleanExpression() {
    this._booleanExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExpressionInput() {
    return this._booleanExpression.internalValue;
  }

  // ip_expression - computed: true, optional: true, required: false
  private _ipExpression = new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference(this, "ip_expression");
  public get ipExpression() {
    return this._ipExpression;
  }
  public putIpExpression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression) {
    this._ipExpression.internalValue = value;
  }
  public resetIpExpression() {
    this._ipExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionInput() {
    return this._ipExpression.internalValue;
  }

  // ipv_6_expression - computed: true, optional: true, required: false
  private _ipv6Expression = new SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference(this, "ipv_6_expression");
  public get ipv6Expression() {
    return this._ipv6Expression;
  }
  public putIpv6Expression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression) {
    this._ipv6Expression.internalValue = value;
  }
  public resetIpv6Expression() {
    this._ipv6Expression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExpressionInput() {
    return this._ipv6Expression.internalValue;
  }

  // string_expression - computed: true, optional: true, required: false
  private _stringExpression = new SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference(this, "string_expression");
  public get stringExpression() {
    return this._stringExpression;
  }
  public putStringExpression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression) {
    this._stringExpression.internalValue = value;
  }
  public resetStringExpression() {
    this._stringExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringExpressionInput() {
    return this._stringExpression.internalValue;
  }

  // tls_expression - computed: true, optional: true, required: false
  private _tlsExpression = new SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference(this, "tls_expression");
  public get tlsExpression() {
    return this._tlsExpression;
  }
  public putTlsExpression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression) {
    this._tlsExpression.internalValue = value;
  }
  public resetTlsExpression() {
    this._tlsExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsExpressionInput() {
    return this._tlsExpression.internalValue;
  }
}

export class SesMailManagerTrafficPolicyPolicyStatementsConditionsList extends cdktn.ComplexList {
  public internalValue? : SesMailManagerTrafficPolicyPolicyStatementsConditions[] | cdktn.IResolvable

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
  public get(index: number): SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference {
    return new SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesMailManagerTrafficPolicyPolicyStatements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#action SesMailManagerTrafficPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#conditions SesMailManagerTrafficPolicy#conditions}
  */
  readonly conditions: SesMailManagerTrafficPolicyPolicyStatementsConditions[] | cdktn.IResolvable;
}

export function sesMailManagerTrafficPolicyPolicyStatementsToTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    conditions: cdktn.listMapper(sesMailManagerTrafficPolicyPolicyStatementsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function sesMailManagerTrafficPolicyPolicyStatementsToHclTerraform(struct?: SesMailManagerTrafficPolicyPolicyStatements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktn.listMapperHcl(sesMailManagerTrafficPolicyPolicyStatementsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerTrafficPolicyPolicyStatementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMailManagerTrafficPolicyPolicyStatements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerTrafficPolicyPolicyStatements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._conditions.internalValue = value.conditions;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new SesMailManagerTrafficPolicyPolicyStatementsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SesMailManagerTrafficPolicyPolicyStatementsConditions[] | cdktn.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class SesMailManagerTrafficPolicyPolicyStatementsList extends cdktn.ComplexList {
  public internalValue? : SesMailManagerTrafficPolicyPolicyStatements[] | cdktn.IResolvable

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
  public get(index: number): SesMailManagerTrafficPolicyPolicyStatementsOutputReference {
    return new SesMailManagerTrafficPolicyPolicyStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesMailManagerTrafficPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#key SesMailManagerTrafficPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}
  */
  readonly value?: string;
}

export function sesMailManagerTrafficPolicyTagsToTerraform(struct?: SesMailManagerTrafficPolicyTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sesMailManagerTrafficPolicyTagsToHclTerraform(struct?: SesMailManagerTrafficPolicyTags | cdktn.IResolvable): any {
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

export class SesMailManagerTrafficPolicyTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMailManagerTrafficPolicyTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SesMailManagerTrafficPolicyTags | cdktn.IResolvable | undefined) {
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

export class SesMailManagerTrafficPolicyTagsList extends cdktn.ComplexList {
  public internalValue? : SesMailManagerTrafficPolicyTags[] | cdktn.IResolvable

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
  public get(index: number): SesMailManagerTrafficPolicyTagsOutputReference {
    return new SesMailManagerTrafficPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy}
*/
export class SesMailManagerTrafficPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_mail_manager_traffic_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesMailManagerTrafficPolicy to import
  * @param importFromId The id of the existing SesMailManagerTrafficPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesMailManagerTrafficPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_mail_manager_traffic_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesMailManagerTrafficPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SesMailManagerTrafficPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_mail_manager_traffic_policy',
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
    this._defaultAction = config.defaultAction;
    this._maxMessageSizeBytes = config.maxMessageSizeBytes;
    this._policyStatements.internalValue = config.policyStatements;
    this._tags.internalValue = config.tags;
    this._trafficPolicyName = config.trafficPolicyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: false, required: true
  private _defaultAction?: string;
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_message_size_bytes - computed: true, optional: true, required: false
  private _maxMessageSizeBytes?: number;
  public get maxMessageSizeBytes() {
    return this.getNumberAttribute('max_message_size_bytes');
  }
  public set maxMessageSizeBytes(value: number) {
    this._maxMessageSizeBytes = value;
  }
  public resetMaxMessageSizeBytes() {
    this._maxMessageSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeBytesInput() {
    return this._maxMessageSizeBytes;
  }

  // policy_statements - computed: false, optional: false, required: true
  private _policyStatements = new SesMailManagerTrafficPolicyPolicyStatementsList(this, "policy_statements", false);
  public get policyStatements() {
    return this._policyStatements;
  }
  public putPolicyStatements(value: SesMailManagerTrafficPolicyPolicyStatements[] | cdktn.IResolvable) {
    this._policyStatements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyStatementsInput() {
    return this._policyStatements.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SesMailManagerTrafficPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SesMailManagerTrafficPolicyTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // traffic_policy_arn - computed: true, optional: false, required: false
  public get trafficPolicyArn() {
    return this.getStringAttribute('traffic_policy_arn');
  }

  // traffic_policy_id - computed: true, optional: false, required: false
  public get trafficPolicyId() {
    return this.getStringAttribute('traffic_policy_id');
  }

  // traffic_policy_name - computed: true, optional: true, required: false
  private _trafficPolicyName?: string;
  public get trafficPolicyName() {
    return this.getStringAttribute('traffic_policy_name');
  }
  public set trafficPolicyName(value: string) {
    this._trafficPolicyName = value;
  }
  public resetTrafficPolicyName() {
    this._trafficPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyNameInput() {
    return this._trafficPolicyName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_action: cdktn.stringToTerraform(this._defaultAction),
      max_message_size_bytes: cdktn.numberToTerraform(this._maxMessageSizeBytes),
      policy_statements: cdktn.listMapper(sesMailManagerTrafficPolicyPolicyStatementsToTerraform, false)(this._policyStatements.internalValue),
      tags: cdktn.listMapper(sesMailManagerTrafficPolicyTagsToTerraform, false)(this._tags.internalValue),
      traffic_policy_name: cdktn.stringToTerraform(this._trafficPolicyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktn.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_message_size_bytes: {
        value: cdktn.numberToHclTerraform(this._maxMessageSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_statements: {
        value: cdktn.listMapperHcl(sesMailManagerTrafficPolicyPolicyStatementsToHclTerraform, false)(this._policyStatements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesMailManagerTrafficPolicyPolicyStatementsList",
      },
      tags: {
        value: cdktn.listMapperHcl(sesMailManagerTrafficPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesMailManagerTrafficPolicyTagsList",
      },
      traffic_policy_name: {
        value: cdktn.stringToHclTerraform(this._trafficPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
