// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsmincidentsResponsePlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * The list of actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#actions SsmincidentsResponsePlan#actions}
  */
  readonly actions?: SsmincidentsResponsePlanActions[] | cdktn.IResolvable;
  /**
  * The chat channel configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}
  */
  readonly chatChannel?: SsmincidentsResponsePlanChatChannel;
  /**
  * The display name of the response plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}
  */
  readonly displayName?: string;
  /**
  * The list of engagements to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}
  */
  readonly engagements?: string[];
  /**
  * The incident template configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}
  */
  readonly incidentTemplate: SsmincidentsResponsePlanIncidentTemplate;
  /**
  * The list of integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#integrations SsmincidentsResponsePlan#integrations}
  */
  readonly integrations?: SsmincidentsResponsePlanIntegrations[] | cdktn.IResolvable;
  /**
  * The name of the response plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}
  */
  readonly name: string;
  /**
  * The tags to apply to the response plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}
  */
  readonly tags?: SsmincidentsResponsePlanTags[] | cdktn.IResolvable;
}
export interface SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue {
  /**
  * The variable types used as dynamic parameter value when starting the SSM automation document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#variable SsmincidentsResponsePlan#variable}
  */
  readonly variable?: string;
}

export function ssmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueToTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    variable: cdktn.stringToTerraform(struct!.variable),
  }
}


export function ssmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueToHclTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    variable: {
      value: cdktn.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variable = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variable = value.variable;
    }
  }

  // variable - computed: true, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}
export interface SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}
  */
  readonly key?: string;
  /**
  * Value of the dynamic parameter to set when starting the SSM automation document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}
  */
  readonly value?: SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue;
}

export function ssmincidentsResponsePlanActionsSsmAutomationDynamicParametersToTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: ssmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueToTerraform(struct!.value),
  }
}


export function ssmincidentsResponsePlanActionsSsmAutomationDynamicParametersToHclTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters | cdktn.IResolvable): any {
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
      value: ssmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
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
  private _value = new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList extends cdktn.ComplexList {
  public internalValue? : SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters[] | cdktn.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference {
    return new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanActionsSsmAutomationParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}
  */
  readonly values?: string[];
}

export function ssmincidentsResponsePlanActionsSsmAutomationParametersToTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function ssmincidentsResponsePlanActionsSsmAutomationParametersToHclTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomationParameters | cdktn.IResolvable): any {
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

export class SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanActionsSsmAutomationParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanActionsSsmAutomationParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

export class SsmincidentsResponsePlanActionsSsmAutomationParametersList extends cdktn.ComplexList {
  public internalValue? : SsmincidentsResponsePlanActionsSsmAutomationParameters[] | cdktn.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference {
    return new SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanActionsSsmAutomation {
  /**
  * The document name to use when starting the SSM automation document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}
  */
  readonly documentName?: string;
  /**
  * The version of the document to use when starting the SSM automation document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}
  */
  readonly documentVersion?: string;
  /**
  * The parameters with dynamic values to set when starting the SSM automation document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}
  */
  readonly dynamicParameters?: SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters[] | cdktn.IResolvable;
  /**
  * The parameters to set when starting the SSM automation document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#parameters SsmincidentsResponsePlan#parameters}
  */
  readonly parameters?: SsmincidentsResponsePlanActionsSsmAutomationParameters[] | cdktn.IResolvable;
  /**
  * The role ARN to use when starting the SSM automation document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The account type to use when starting the SSM automation document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}
  */
  readonly targetAccount?: string;
}

export function ssmincidentsResponsePlanActionsSsmAutomationToTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    document_name: cdktn.stringToTerraform(struct!.documentName),
    document_version: cdktn.stringToTerraform(struct!.documentVersion),
    dynamic_parameters: cdktn.listMapper(ssmincidentsResponsePlanActionsSsmAutomationDynamicParametersToTerraform, false)(struct!.dynamicParameters),
    parameters: cdktn.listMapper(ssmincidentsResponsePlanActionsSsmAutomationParametersToTerraform, false)(struct!.parameters),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_account: cdktn.stringToTerraform(struct!.targetAccount),
  }
}


export function ssmincidentsResponsePlanActionsSsmAutomationToHclTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    document_name: {
      value: cdktn.stringToHclTerraform(struct!.documentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    document_version: {
      value: cdktn.stringToHclTerraform(struct!.documentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_parameters: {
      value: cdktn.listMapperHcl(ssmincidentsResponsePlanActionsSsmAutomationDynamicParametersToHclTerraform, false)(struct!.dynamicParameters),
      isBlock: true,
      type: "set",
      storageClassType: "SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList",
    },
    parameters: {
      value: cdktn.listMapperHcl(ssmincidentsResponsePlanActionsSsmAutomationParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "set",
      storageClassType: "SsmincidentsResponsePlanActionsSsmAutomationParametersList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_account: {
      value: cdktn.stringToHclTerraform(struct!.targetAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanActionsSsmAutomationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmincidentsResponsePlanActionsSsmAutomation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentName = this._documentName;
    }
    if (this._documentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentVersion = this._documentVersion;
    }
    if (this._dynamicParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicParameters = this._dynamicParameters?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAccount = this._targetAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanActionsSsmAutomation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentName = undefined;
      this._documentVersion = undefined;
      this._dynamicParameters.internalValue = undefined;
      this._parameters.internalValue = undefined;
      this._roleArn = undefined;
      this._targetAccount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentName = value.documentName;
      this._documentVersion = value.documentVersion;
      this._dynamicParameters.internalValue = value.dynamicParameters;
      this._parameters.internalValue = value.parameters;
      this._roleArn = value.roleArn;
      this._targetAccount = value.targetAccount;
    }
  }

  // document_name - computed: true, optional: true, required: false
  private _documentName?: string; 
  public get documentName() {
    return this.getStringAttribute('document_name');
  }
  public set documentName(value: string) {
    this._documentName = value;
  }
  public resetDocumentName() {
    this._documentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentNameInput() {
    return this._documentName;
  }

  // document_version - computed: true, optional: true, required: false
  private _documentVersion?: string; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion;
  }

  // dynamic_parameters - computed: true, optional: true, required: false
  private _dynamicParameters = new SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList(this, "dynamic_parameters", true);
  public get dynamicParameters() {
    return this._dynamicParameters;
  }
  public putDynamicParameters(value: SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters[] | cdktn.IResolvable) {
    this._dynamicParameters.internalValue = value;
  }
  public resetDynamicParameters() {
    this._dynamicParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParametersInput() {
    return this._dynamicParameters.internalValue;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new SsmincidentsResponsePlanActionsSsmAutomationParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SsmincidentsResponsePlanActionsSsmAutomationParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // target_account - computed: true, optional: true, required: false
  private _targetAccount?: string; 
  public get targetAccount() {
    return this.getStringAttribute('target_account');
  }
  public set targetAccount(value: string) {
    this._targetAccount = value;
  }
  public resetTargetAccount() {
    this._targetAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountInput() {
    return this._targetAccount;
  }
}
export interface SsmincidentsResponsePlanActions {
  /**
  * The configuration to use when starting the SSM automation document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}
  */
  readonly ssmAutomation?: SsmincidentsResponsePlanActionsSsmAutomation;
}

export function ssmincidentsResponsePlanActionsToTerraform(struct?: SsmincidentsResponsePlanActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ssm_automation: ssmincidentsResponsePlanActionsSsmAutomationToTerraform(struct!.ssmAutomation),
  }
}


export function ssmincidentsResponsePlanActionsToHclTerraform(struct?: SsmincidentsResponsePlanActions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ssm_automation: {
      value: ssmincidentsResponsePlanActionsSsmAutomationToHclTerraform(struct!.ssmAutomation),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmincidentsResponsePlanActionsSsmAutomation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanActions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssmAutomation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmAutomation = this._ssmAutomation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanActions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssmAutomation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssmAutomation.internalValue = value.ssmAutomation;
    }
  }

  // ssm_automation - computed: true, optional: true, required: false
  private _ssmAutomation = new SsmincidentsResponsePlanActionsSsmAutomationOutputReference(this, "ssm_automation");
  public get ssmAutomation() {
    return this._ssmAutomation;
  }
  public putSsmAutomation(value: SsmincidentsResponsePlanActionsSsmAutomation) {
    this._ssmAutomation.internalValue = value;
  }
  public resetSsmAutomation() {
    this._ssmAutomation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmAutomationInput() {
    return this._ssmAutomation.internalValue;
  }
}

export class SsmincidentsResponsePlanActionsList extends cdktn.ComplexList {
  public internalValue? : SsmincidentsResponsePlanActions[] | cdktn.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanActionsOutputReference {
    return new SsmincidentsResponsePlanActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanChatChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}
  */
  readonly chatbotSns?: string[];
}

export function ssmincidentsResponsePlanChatChannelToTerraform(struct?: SsmincidentsResponsePlanChatChannel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chatbot_sns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.chatbotSns),
  }
}


export function ssmincidentsResponsePlanChatChannelToHclTerraform(struct?: SsmincidentsResponsePlanChatChannel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chatbot_sns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.chatbotSns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanChatChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmincidentsResponsePlanChatChannel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chatbotSns !== undefined) {
      hasAnyValues = true;
      internalValueResult.chatbotSns = this._chatbotSns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanChatChannel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chatbotSns = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chatbotSns = value.chatbotSns;
    }
  }

  // chatbot_sns - computed: true, optional: true, required: false
  private _chatbotSns?: string[]; 
  public get chatbotSns() {
    return this.getListAttribute('chatbot_sns');
  }
  public set chatbotSns(value: string[]) {
    this._chatbotSns = value;
  }
  public resetChatbotSns() {
    this._chatbotSns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatbotSnsInput() {
    return this._chatbotSns;
  }
}
export interface SsmincidentsResponsePlanIncidentTemplateIncidentTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}
  */
  readonly value?: string;
}

export function ssmincidentsResponsePlanIncidentTemplateIncidentTagsToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateIncidentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ssmincidentsResponsePlanIncidentTemplateIncidentTagsToHclTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateIncidentTags | cdktn.IResolvable): any {
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

export class SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanIncidentTemplateIncidentTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SsmincidentsResponsePlanIncidentTemplateIncidentTags | cdktn.IResolvable | undefined) {
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

export class SsmincidentsResponsePlanIncidentTemplateIncidentTagsList extends cdktn.ComplexList {
  public internalValue? : SsmincidentsResponsePlanIncidentTemplateIncidentTags[] | cdktn.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference {
    return new SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanIncidentTemplateNotificationTargets {
  /**
  * The ARN of the Chatbot SNS topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
}

export function ssmincidentsResponsePlanIncidentTemplateNotificationTargetsToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateNotificationTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sns_topic_arn: cdktn.stringToTerraform(struct!.snsTopicArn),
  }
}


export function ssmincidentsResponsePlanIncidentTemplateNotificationTargetsToHclTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateNotificationTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sns_topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.snsTopicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanIncidentTemplateNotificationTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snsTopicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicArn = this._snsTopicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanIncidentTemplateNotificationTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snsTopicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snsTopicArn = value.snsTopicArn;
    }
  }

  // sns_topic_arn - computed: true, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }
}

export class SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList extends cdktn.ComplexList {
  public internalValue? : SsmincidentsResponsePlanIncidentTemplateNotificationTargets[] | cdktn.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference {
    return new SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanIncidentTemplate {
  /**
  * The deduplication string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}
  */
  readonly dedupeString?: string;
  /**
  * The impact value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}
  */
  readonly impact: number;
  /**
  * Tags that get applied to incidents created by the StartIncident API action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}
  */
  readonly incidentTags?: SsmincidentsResponsePlanIncidentTemplateIncidentTags[] | cdktn.IResolvable;
  /**
  * The list of notification targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#notification_targets SsmincidentsResponsePlan#notification_targets}
  */
  readonly notificationTargets?: SsmincidentsResponsePlanIncidentTemplateNotificationTargets[] | cdktn.IResolvable;
  /**
  * The summary string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}
  */
  readonly summary?: string;
  /**
  * The title string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}
  */
  readonly title: string;
}

export function ssmincidentsResponsePlanIncidentTemplateToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dedupe_string: cdktn.stringToTerraform(struct!.dedupeString),
    impact: cdktn.numberToTerraform(struct!.impact),
    incident_tags: cdktn.listMapper(ssmincidentsResponsePlanIncidentTemplateIncidentTagsToTerraform, false)(struct!.incidentTags),
    notification_targets: cdktn.listMapper(ssmincidentsResponsePlanIncidentTemplateNotificationTargetsToTerraform, false)(struct!.notificationTargets),
    summary: cdktn.stringToTerraform(struct!.summary),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function ssmincidentsResponsePlanIncidentTemplateToHclTerraform(struct?: SsmincidentsResponsePlanIncidentTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dedupe_string: {
      value: cdktn.stringToHclTerraform(struct!.dedupeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    impact: {
      value: cdktn.numberToHclTerraform(struct!.impact),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incident_tags: {
      value: cdktn.listMapperHcl(ssmincidentsResponsePlanIncidentTemplateIncidentTagsToHclTerraform, false)(struct!.incidentTags),
      isBlock: true,
      type: "set",
      storageClassType: "SsmincidentsResponsePlanIncidentTemplateIncidentTagsList",
    },
    notification_targets: {
      value: cdktn.listMapperHcl(ssmincidentsResponsePlanIncidentTemplateNotificationTargetsToHclTerraform, false)(struct!.notificationTargets),
      isBlock: true,
      type: "list",
      storageClassType: "SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList",
    },
    summary: {
      value: cdktn.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanIncidentTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmincidentsResponsePlanIncidentTemplate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedupeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupeString = this._dedupeString;
    }
    if (this._impact !== undefined) {
      hasAnyValues = true;
      internalValueResult.impact = this._impact;
    }
    if (this._incidentTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentTags = this._incidentTags?.internalValue;
    }
    if (this._notificationTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTargets = this._notificationTargets?.internalValue;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanIncidentTemplate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedupeString = undefined;
      this._impact = undefined;
      this._incidentTags.internalValue = undefined;
      this._notificationTargets.internalValue = undefined;
      this._summary = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dedupeString = value.dedupeString;
      this._impact = value.impact;
      this._incidentTags.internalValue = value.incidentTags;
      this._notificationTargets.internalValue = value.notificationTargets;
      this._summary = value.summary;
      this._title = value.title;
    }
  }

  // dedupe_string - computed: true, optional: true, required: false
  private _dedupeString?: string; 
  public get dedupeString() {
    return this.getStringAttribute('dedupe_string');
  }
  public set dedupeString(value: string) {
    this._dedupeString = value;
  }
  public resetDedupeString() {
    this._dedupeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeStringInput() {
    return this._dedupeString;
  }

  // impact - computed: false, optional: false, required: true
  private _impact?: number; 
  public get impact() {
    return this.getNumberAttribute('impact');
  }
  public set impact(value: number) {
    this._impact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get impactInput() {
    return this._impact;
  }

  // incident_tags - computed: true, optional: true, required: false
  private _incidentTags = new SsmincidentsResponsePlanIncidentTemplateIncidentTagsList(this, "incident_tags", true);
  public get incidentTags() {
    return this._incidentTags;
  }
  public putIncidentTags(value: SsmincidentsResponsePlanIncidentTemplateIncidentTags[] | cdktn.IResolvable) {
    this._incidentTags.internalValue = value;
  }
  public resetIncidentTags() {
    this._incidentTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTagsInput() {
    return this._incidentTags.internalValue;
  }

  // notification_targets - computed: true, optional: true, required: false
  private _notificationTargets = new SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList(this, "notification_targets", false);
  public get notificationTargets() {
    return this._notificationTargets;
  }
  public putNotificationTargets(value: SsmincidentsResponsePlanIncidentTemplateNotificationTargets[] | cdktn.IResolvable) {
    this._notificationTargets.internalValue = value;
  }
  public resetNotificationTargets() {
    this._notificationTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetsInput() {
    return this._notificationTargets.internalValue;
  }

  // summary - computed: true, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration {
  /**
  * The pagerDuty serviceId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}
  */
  readonly serviceId?: string;
}

export function ssmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationToTerraform(struct?: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_id: cdktn.stringToTerraform(struct!.serviceId),
  }
}


export function ssmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationToHclTerraform(struct?: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_id: {
      value: cdktn.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceId = value.serviceId;
    }
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }
}
export interface SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration {
  /**
  * The name of the pagerDuty configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}
  */
  readonly name?: string;
  /**
  * The pagerDuty incident configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#pager_duty_incident_configuration SsmincidentsResponsePlan#pager_duty_incident_configuration}
  */
  readonly pagerDutyIncidentConfiguration?: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration;
  /**
  * The AWS secrets manager secretId storing the pagerDuty token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}
  */
  readonly secretId?: string;
}

export function ssmincidentsResponsePlanIntegrationsPagerDutyConfigurationToTerraform(struct?: SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    pager_duty_incident_configuration: ssmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationToTerraform(struct!.pagerDutyIncidentConfiguration),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
  }
}


export function ssmincidentsResponsePlanIntegrationsPagerDutyConfigurationToHclTerraform(struct?: SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration | cdktn.IResolvable): any {
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
    pager_duty_incident_configuration: {
      value: ssmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationToHclTerraform(struct!.pagerDutyIncidentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration",
    },
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pagerDutyIncidentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerDutyIncidentConfiguration = this._pagerDutyIncidentConfiguration?.internalValue;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._pagerDutyIncidentConfiguration.internalValue = undefined;
      this._secretId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._pagerDutyIncidentConfiguration.internalValue = value.pagerDutyIncidentConfiguration;
      this._secretId = value.secretId;
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

  // pager_duty_incident_configuration - computed: true, optional: true, required: false
  private _pagerDutyIncidentConfiguration = new SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference(this, "pager_duty_incident_configuration");
  public get pagerDutyIncidentConfiguration() {
    return this._pagerDutyIncidentConfiguration;
  }
  public putPagerDutyIncidentConfiguration(value: SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration) {
    this._pagerDutyIncidentConfiguration.internalValue = value;
  }
  public resetPagerDutyIncidentConfiguration() {
    this._pagerDutyIncidentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyIncidentConfigurationInput() {
    return this._pagerDutyIncidentConfiguration.internalValue;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface SsmincidentsResponsePlanIntegrations {
  /**
  * The pagerDuty configuration to use when starting the incident.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#pager_duty_configuration SsmincidentsResponsePlan#pager_duty_configuration}
  */
  readonly pagerDutyConfiguration?: SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration;
}

export function ssmincidentsResponsePlanIntegrationsToTerraform(struct?: SsmincidentsResponsePlanIntegrations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pager_duty_configuration: ssmincidentsResponsePlanIntegrationsPagerDutyConfigurationToTerraform(struct!.pagerDutyConfiguration),
  }
}


export function ssmincidentsResponsePlanIntegrationsToHclTerraform(struct?: SsmincidentsResponsePlanIntegrations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pager_duty_configuration: {
      value: ssmincidentsResponsePlanIntegrationsPagerDutyConfigurationToHclTerraform(struct!.pagerDutyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmincidentsResponsePlanIntegrationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanIntegrations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pagerDutyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerDutyConfiguration = this._pagerDutyConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmincidentsResponsePlanIntegrations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pagerDutyConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pagerDutyConfiguration.internalValue = value.pagerDutyConfiguration;
    }
  }

  // pager_duty_configuration - computed: true, optional: true, required: false
  private _pagerDutyConfiguration = new SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference(this, "pager_duty_configuration");
  public get pagerDutyConfiguration() {
    return this._pagerDutyConfiguration;
  }
  public putPagerDutyConfiguration(value: SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration) {
    this._pagerDutyConfiguration.internalValue = value;
  }
  public resetPagerDutyConfiguration() {
    this._pagerDutyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyConfigurationInput() {
    return this._pagerDutyConfiguration.internalValue;
  }
}

export class SsmincidentsResponsePlanIntegrationsList extends cdktn.ComplexList {
  public internalValue? : SsmincidentsResponsePlanIntegrations[] | cdktn.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanIntegrationsOutputReference {
    return new SsmincidentsResponsePlanIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmincidentsResponsePlanTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}
  */
  readonly value?: string;
}

export function ssmincidentsResponsePlanTagsToTerraform(struct?: SsmincidentsResponsePlanTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ssmincidentsResponsePlanTagsToHclTerraform(struct?: SsmincidentsResponsePlanTags | cdktn.IResolvable): any {
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

export class SsmincidentsResponsePlanTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmincidentsResponsePlanTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SsmincidentsResponsePlanTags | cdktn.IResolvable | undefined) {
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

export class SsmincidentsResponsePlanTagsList extends cdktn.ComplexList {
  public internalValue? : SsmincidentsResponsePlanTags[] | cdktn.IResolvable

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
  public get(index: number): SsmincidentsResponsePlanTagsOutputReference {
    return new SsmincidentsResponsePlanTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan awscc_ssmincidents_response_plan}
*/
export class SsmincidentsResponsePlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssmincidents_response_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmincidentsResponsePlan to import
  * @param importFromId The id of the existing SsmincidentsResponsePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmincidentsResponsePlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmincidents_response_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/ssmincidents_response_plan awscc_ssmincidents_response_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmincidentsResponsePlanConfig
  */
  public constructor(scope: Construct, id: string, config: SsmincidentsResponsePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmincidents_response_plan',
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
    this._actions.internalValue = config.actions;
    this._chatChannel.internalValue = config.chatChannel;
    this._displayName = config.displayName;
    this._engagements = config.engagements;
    this._incidentTemplate.internalValue = config.incidentTemplate;
    this._integrations.internalValue = config.integrations;
    this._name = config.name;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: true, required: false
  private _actions = new SsmincidentsResponsePlanActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: SsmincidentsResponsePlanActions[] | cdktn.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chat_channel - computed: true, optional: true, required: false
  private _chatChannel = new SsmincidentsResponsePlanChatChannelOutputReference(this, "chat_channel");
  public get chatChannel() {
    return this._chatChannel;
  }
  public putChatChannel(value: SsmincidentsResponsePlanChatChannel) {
    this._chatChannel.internalValue = value;
  }
  public resetChatChannel() {
    this._chatChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatChannelInput() {
    return this._chatChannel.internalValue;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // engagements - computed: true, optional: true, required: false
  private _engagements?: string[]; 
  public get engagements() {
    return cdktn.Fn.tolist(this.getListAttribute('engagements'));
  }
  public set engagements(value: string[]) {
    this._engagements = value;
  }
  public resetEngagements() {
    this._engagements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagementsInput() {
    return this._engagements;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_template - computed: false, optional: false, required: true
  private _incidentTemplate = new SsmincidentsResponsePlanIncidentTemplateOutputReference(this, "incident_template");
  public get incidentTemplate() {
    return this._incidentTemplate;
  }
  public putIncidentTemplate(value: SsmincidentsResponsePlanIncidentTemplate) {
    this._incidentTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTemplateInput() {
    return this._incidentTemplate.internalValue;
  }

  // integrations - computed: true, optional: true, required: false
  private _integrations = new SsmincidentsResponsePlanIntegrationsList(this, "integrations", false);
  public get integrations() {
    return this._integrations;
  }
  public putIntegrations(value: SsmincidentsResponsePlanIntegrations[] | cdktn.IResolvable) {
    this._integrations.internalValue = value;
  }
  public resetIntegrations() {
    this._integrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations.internalValue;
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
  private _tags = new SsmincidentsResponsePlanTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SsmincidentsResponsePlanTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktn.listMapper(ssmincidentsResponsePlanActionsToTerraform, false)(this._actions.internalValue),
      chat_channel: ssmincidentsResponsePlanChatChannelToTerraform(this._chatChannel.internalValue),
      display_name: cdktn.stringToTerraform(this._displayName),
      engagements: cdktn.listMapper(cdktn.stringToTerraform, false)(this._engagements),
      incident_template: ssmincidentsResponsePlanIncidentTemplateToTerraform(this._incidentTemplate.internalValue),
      integrations: cdktn.listMapper(ssmincidentsResponsePlanIntegrationsToTerraform, false)(this._integrations.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(ssmincidentsResponsePlanTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktn.listMapperHcl(ssmincidentsResponsePlanActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmincidentsResponsePlanActionsList",
      },
      chat_channel: {
        value: ssmincidentsResponsePlanChatChannelToHclTerraform(this._chatChannel.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsmincidentsResponsePlanChatChannel",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engagements: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._engagements),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      incident_template: {
        value: ssmincidentsResponsePlanIncidentTemplateToHclTerraform(this._incidentTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsmincidentsResponsePlanIncidentTemplate",
      },
      integrations: {
        value: cdktn.listMapperHcl(ssmincidentsResponsePlanIntegrationsToHclTerraform, false)(this._integrations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmincidentsResponsePlanIntegrationsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ssmincidentsResponsePlanTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SsmincidentsResponsePlanTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
