// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssmincidents_response_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSsmincidentsResponsePlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssmincidents_response_plan#id DataAwsccSsmincidentsResponsePlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue {
}

export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // variable - computed: true, optional: false, required: false
  public get variable() {
    return this.getStringAttribute('variable');
  }
}
export interface DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters {
}

export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParameters | undefined) {
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
  private _value = new DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference {
    return new DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters {
}

export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference {
    return new DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmincidentsResponsePlanActionsSsmAutomation {
}

export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsmincidentsResponsePlanActionsSsmAutomation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanActionsSsmAutomation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // document_name - computed: true, optional: false, required: false
  public get documentName() {
    return this.getStringAttribute('document_name');
  }

  // document_version - computed: true, optional: false, required: false
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }

  // dynamic_parameters - computed: true, optional: false, required: false
  private _dynamicParameters = new DataAwsccSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList(this, "dynamic_parameters", true);
  public get dynamicParameters() {
    return this._dynamicParameters;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_account - computed: true, optional: false, required: false
  public get targetAccount() {
    return this.getStringAttribute('target_account');
  }
}
export interface DataAwsccSsmincidentsResponsePlanActions {
}

export function dataAwsccSsmincidentsResponsePlanActionsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanActionsToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmincidentsResponsePlanActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssm_automation - computed: true, optional: false, required: false
  private _ssmAutomation = new DataAwsccSsmincidentsResponsePlanActionsSsmAutomationOutputReference(this, "ssm_automation");
  public get ssmAutomation() {
    return this._ssmAutomation;
  }
}

export class DataAwsccSsmincidentsResponsePlanActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmincidentsResponsePlanActionsOutputReference {
    return new DataAwsccSsmincidentsResponsePlanActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmincidentsResponsePlanChatChannel {
}

export function dataAwsccSsmincidentsResponsePlanChatChannelToTerraform(struct?: DataAwsccSsmincidentsResponsePlanChatChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanChatChannelToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanChatChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanChatChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsmincidentsResponsePlanChatChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanChatChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chatbot_sns - computed: true, optional: false, required: false
  public get chatbotSns() {
    return this.getListAttribute('chatbot_sns');
  }
}
export interface DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags {
}

export function dataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTags | undefined) {
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

export class DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference {
    return new DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets {
}

export function dataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
}

export class DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference {
    return new DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmincidentsResponsePlanIncidentTemplate {
}

export function dataAwsccSsmincidentsResponsePlanIncidentTemplateToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanIncidentTemplateToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsmincidentsResponsePlanIncidentTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanIncidentTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dedupe_string - computed: true, optional: false, required: false
  public get dedupeString() {
    return this.getStringAttribute('dedupe_string');
  }

  // impact - computed: true, optional: false, required: false
  public get impact() {
    return this.getNumberAttribute('impact');
  }

  // incident_tags - computed: true, optional: false, required: false
  private _incidentTags = new DataAwsccSsmincidentsResponsePlanIncidentTemplateIncidentTagsList(this, "incident_tags", true);
  public get incidentTags() {
    return this._incidentTags;
  }

  // notification_targets - computed: true, optional: false, required: false
  private _notificationTargets = new DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList(this, "notification_targets", false);
  public get notificationTargets() {
    return this._notificationTargets;
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration {
}

export function dataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
}
export interface DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration {
}

export function dataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfiguration | undefined) {
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

  // pager_duty_incident_configuration - computed: true, optional: false, required: false
  private _pagerDutyIncidentConfiguration = new DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference(this, "pager_duty_incident_configuration");
  public get pagerDutyIncidentConfiguration() {
    return this._pagerDutyIncidentConfiguration;
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
}
export interface DataAwsccSsmincidentsResponsePlanIntegrations {
}

export function dataAwsccSsmincidentsResponsePlanIntegrationsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIntegrations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanIntegrationsToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanIntegrations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmincidentsResponsePlanIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pager_duty_configuration - computed: true, optional: false, required: false
  private _pagerDutyConfiguration = new DataAwsccSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference(this, "pager_duty_configuration");
  public get pagerDutyConfiguration() {
    return this._pagerDutyConfiguration;
  }
}

export class DataAwsccSsmincidentsResponsePlanIntegrationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference {
    return new DataAwsccSsmincidentsResponsePlanIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSsmincidentsResponsePlanTags {
}

export function dataAwsccSsmincidentsResponsePlanTagsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSsmincidentsResponsePlanTagsToHclTerraform(struct?: DataAwsccSsmincidentsResponsePlanTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSsmincidentsResponsePlanTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSsmincidentsResponsePlanTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSsmincidentsResponsePlanTags | undefined) {
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

export class DataAwsccSsmincidentsResponsePlanTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSsmincidentsResponsePlanTagsOutputReference {
    return new DataAwsccSsmincidentsResponsePlanTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssmincidents_response_plan awscc_ssmincidents_response_plan}
*/
export class DataAwsccSsmincidentsResponsePlan extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssmincidents_response_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSsmincidentsResponsePlan to import
  * @param importFromId The id of the existing DataAwsccSsmincidentsResponsePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSsmincidentsResponsePlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssmincidents_response_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ssmincidents_response_plan awscc_ssmincidents_response_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsmincidentsResponsePlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsmincidentsResponsePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmincidents_response_plan',
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

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAwsccSsmincidentsResponsePlanActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chat_channel - computed: true, optional: false, required: false
  private _chatChannel = new DataAwsccSsmincidentsResponsePlanChatChannelOutputReference(this, "chat_channel");
  public get chatChannel() {
    return this._chatChannel;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // engagements - computed: true, optional: false, required: false
  public get engagements() {
    return cdktn.Fn.tolist(this.getListAttribute('engagements'));
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

  // incident_template - computed: true, optional: false, required: false
  private _incidentTemplate = new DataAwsccSsmincidentsResponsePlanIncidentTemplateOutputReference(this, "incident_template");
  public get incidentTemplate() {
    return this._incidentTemplate;
  }

  // integrations - computed: true, optional: false, required: false
  private _integrations = new DataAwsccSsmincidentsResponsePlanIntegrationsList(this, "integrations", false);
  public get integrations() {
    return this._integrations;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSsmincidentsResponsePlanTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
