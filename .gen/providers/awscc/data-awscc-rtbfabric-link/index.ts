// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRtbfabricLinkConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_link#id DataAwsccRtbfabricLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking {
}

export function dataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingToTerraform(struct?: DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingToHclTerraform(struct?: DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkLinkAttributesResponderErrorMasking | undefined) {
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

  // http_code - computed: true, optional: false, required: false
  public get httpCode() {
    return this.getStringAttribute('http_code');
  }

  // logging_types - computed: true, optional: false, required: false
  public get loggingTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('logging_types'));
  }

  // response_logging_percentage - computed: true, optional: false, required: false
  public get responseLoggingPercentage() {
    return this.getNumberAttribute('response_logging_percentage');
  }
}

export class DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference {
    return new DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRtbfabricLinkLinkAttributes {
}

export function dataAwsccRtbfabricLinkLinkAttributesToTerraform(struct?: DataAwsccRtbfabricLinkLinkAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkLinkAttributesToHclTerraform(struct?: DataAwsccRtbfabricLinkLinkAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkLinkAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkLinkAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkLinkAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_provided_id - computed: true, optional: false, required: false
  public get customerProvidedId() {
    return this.getStringAttribute('customer_provided_id');
  }

  // responder_error_masking - computed: true, optional: false, required: false
  private _responderErrorMasking = new DataAwsccRtbfabricLinkLinkAttributesResponderErrorMaskingList(this, "responder_error_masking", false);
  public get responderErrorMasking() {
    return this._responderErrorMasking;
  }
}
export interface DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling {
}

export function dataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToTerraform(struct?: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToHclTerraform(struct?: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_log - computed: true, optional: false, required: false
  public get errorLog() {
    return this.getNumberAttribute('error_log');
  }

  // filter_log - computed: true, optional: false, required: false
  public get filterLog() {
    return this.getNumberAttribute('filter_log');
  }
}
export interface DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs {
}

export function dataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsToTerraform(struct?: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsToHclTerraform(struct?: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // link_application_log_sampling - computed: true, optional: false, required: false
  private _linkApplicationLogSampling = new DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(this, "link_application_log_sampling");
  public get linkApplicationLogSampling() {
    return this._linkApplicationLogSampling;
  }
}
export interface DataAwsccRtbfabricLinkLinkLogSettings {
}

export function dataAwsccRtbfabricLinkLinkLogSettingsToTerraform(struct?: DataAwsccRtbfabricLinkLinkLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkLinkLogSettingsToHclTerraform(struct?: DataAwsccRtbfabricLinkLinkLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkLinkLogSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkLinkLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkLinkLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_logs - computed: true, optional: false, required: false
  private _applicationLogs = new DataAwsccRtbfabricLinkLinkLogSettingsApplicationLogsOutputReference(this, "application_logs");
  public get applicationLogs() {
    return this._applicationLogs;
  }
}
export interface DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid {
}

export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidToTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidToHclTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pass_through_percentage - computed: true, optional: false, required: false
  public get passThroughPercentage() {
    return this.getNumberAttribute('pass_through_percentage');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // reason_code - computed: true, optional: false, required: false
  public get reasonCode() {
    return this.getNumberAttribute('reason_code');
  }
}
export interface DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag {
}

export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagToTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagToHclTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid {
}

export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidToTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidToHclTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // no_bid_reason_code - computed: true, optional: false, required: false
  public get noBidReasonCode() {
    return this.getNumberAttribute('no_bid_reason_code');
  }
}
export interface DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction {
}

export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionToTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionToHclTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_tag - computed: true, optional: false, required: false
  private _headerTag = new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference(this, "header_tag");
  public get headerTag() {
    return this._headerTag;
  }

  // no_bid - computed: true, optional: false, required: false
  private _noBid = new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference(this, "no_bid");
  public get noBid() {
    return this._noBid;
  }
}
export interface DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria {
}

export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaToTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaToHclTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference {
    return new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration {
}

export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationToTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationToHclTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference {
    return new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute {
}

export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeToTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeToHclTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList(this, "filter_configuration", false);
  public get filterConfiguration() {
    return this._filterConfiguration;
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // holdback_percentage - computed: true, optional: false, required: false
  public get holdbackPercentage() {
    return this.getNumberAttribute('holdback_percentage');
  }
}
export interface DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters {
}

export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersToTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkModuleConfigurationListModuleParametersToHclTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkModuleConfigurationListModuleParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // no_bid - computed: true, optional: false, required: false
  private _noBid = new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference(this, "no_bid");
  public get noBid() {
    return this._noBid;
  }

  // open_rtb_attribute - computed: true, optional: false, required: false
  private _openRtbAttribute = new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference(this, "open_rtb_attribute");
  public get openRtbAttribute() {
    return this._openRtbAttribute;
  }
}
export interface DataAwsccRtbfabricLinkModuleConfigurationListStruct {
}

export function dataAwsccRtbfabricLinkModuleConfigurationListStructToTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkModuleConfigurationListStructToHclTerraform(struct?: DataAwsccRtbfabricLinkModuleConfigurationListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricLinkModuleConfigurationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkModuleConfigurationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // depends_on - computed: true, optional: false, required: false
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }

  // module_parameters - computed: true, optional: false, required: false
  private _moduleParameters = new DataAwsccRtbfabricLinkModuleConfigurationListModuleParametersOutputReference(this, "module_parameters");
  public get moduleParameters() {
    return this._moduleParameters;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAwsccRtbfabricLinkModuleConfigurationListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference {
    return new DataAwsccRtbfabricLinkModuleConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRtbfabricLinkTags {
}

export function dataAwsccRtbfabricLinkTagsToTerraform(struct?: DataAwsccRtbfabricLinkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricLinkTagsToHclTerraform(struct?: DataAwsccRtbfabricLinkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricLinkTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricLinkTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricLinkTags | undefined) {
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

export class DataAwsccRtbfabricLinkTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricLinkTagsOutputReference {
    return new DataAwsccRtbfabricLinkTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_link awscc_rtbfabric_link}
*/
export class DataAwsccRtbfabricLink extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rtbfabric_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRtbfabricLink resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRtbfabricLink to import
  * @param importFromId The id of the existing DataAwsccRtbfabricLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRtbfabricLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rtbfabric_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_link awscc_rtbfabric_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRtbfabricLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRtbfabricLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rtbfabric_link',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // http_responder_allowed - computed: true, optional: false, required: false
  public get httpResponderAllowed() {
    return this.getBooleanAttribute('http_responder_allowed');
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

  // link_attributes - computed: true, optional: false, required: false
  private _linkAttributes = new DataAwsccRtbfabricLinkLinkAttributesOutputReference(this, "link_attributes");
  public get linkAttributes() {
    return this._linkAttributes;
  }

  // link_direction - computed: true, optional: false, required: false
  public get linkDirection() {
    return this.getStringAttribute('link_direction');
  }

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getStringAttribute('link_id');
  }

  // link_log_settings - computed: true, optional: false, required: false
  private _linkLogSettings = new DataAwsccRtbfabricLinkLinkLogSettingsOutputReference(this, "link_log_settings");
  public get linkLogSettings() {
    return this._linkLogSettings;
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // module_configuration_list - computed: true, optional: false, required: false
  private _moduleConfigurationList = new DataAwsccRtbfabricLinkModuleConfigurationListStructList(this, "module_configuration_list", false);
  public get moduleConfigurationList() {
    return this._moduleConfigurationList;
  }

  // peer_gateway_id - computed: true, optional: false, required: false
  public get peerGatewayId() {
    return this.getStringAttribute('peer_gateway_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRtbfabricLinkTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // updated_timestamp - computed: true, optional: false, required: false
  public get updatedTimestamp() {
    return this.getStringAttribute('updated_timestamp');
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
