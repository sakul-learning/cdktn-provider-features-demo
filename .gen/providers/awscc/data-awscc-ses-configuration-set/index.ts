// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSesConfigurationSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set#id DataAwsccSesConfigurationSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSesConfigurationSetArchivingOptions {
}

export function dataAwsccSesConfigurationSetArchivingOptionsToTerraform(struct?: DataAwsccSesConfigurationSetArchivingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetArchivingOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetArchivingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetArchivingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetArchivingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetArchivingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_arn - computed: true, optional: false, required: false
  public get archiveArn() {
    return this.getStringAttribute('archive_arn');
  }
}
export interface DataAwsccSesConfigurationSetDeliveryOptions {
}

export function dataAwsccSesConfigurationSetDeliveryOptionsToTerraform(struct?: DataAwsccSesConfigurationSetDeliveryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetDeliveryOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetDeliveryOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetDeliveryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetDeliveryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetDeliveryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_delivery_seconds - computed: true, optional: false, required: false
  public get maxDeliverySeconds() {
    return this.getNumberAttribute('max_delivery_seconds');
  }

  // sending_pool_name - computed: true, optional: false, required: false
  public get sendingPoolName() {
    return this.getStringAttribute('sending_pool_name');
  }

  // tls_policy - computed: true, optional: false, required: false
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
}
export interface DataAwsccSesConfigurationSetReputationOptions {
}

export function dataAwsccSesConfigurationSetReputationOptionsToTerraform(struct?: DataAwsccSesConfigurationSetReputationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetReputationOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetReputationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetReputationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetReputationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetReputationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reputation_metrics_enabled - computed: true, optional: false, required: false
  public get reputationMetricsEnabled() {
    return this.getBooleanAttribute('reputation_metrics_enabled');
  }
}
export interface DataAwsccSesConfigurationSetSendingOptions {
}

export function dataAwsccSesConfigurationSetSendingOptionsToTerraform(struct?: DataAwsccSesConfigurationSetSendingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetSendingOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetSendingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetSendingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetSendingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetSendingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sending_enabled - computed: true, optional: false, required: false
  public get sendingEnabled() {
    return this.getBooleanAttribute('sending_enabled');
  }
}
export interface DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold {
}

export function dataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdToTerraform(struct?: DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdToHclTerraform(struct?: DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confidence_verdict_threshold - computed: true, optional: false, required: false
  public get confidenceVerdictThreshold() {
    return this.getStringAttribute('confidence_verdict_threshold');
  }
}
export interface DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold {
}

export function dataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdToTerraform(struct?: DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdToHclTerraform(struct?: DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_threshold_enabled - computed: true, optional: false, required: false
  public get conditionThresholdEnabled() {
    return this.getStringAttribute('condition_threshold_enabled');
  }

  // overall_confidence_threshold - computed: true, optional: false, required: false
  private _overallConfidenceThreshold = new DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference(this, "overall_confidence_threshold");
  public get overallConfidenceThreshold() {
    return this._overallConfidenceThreshold;
  }
}
export interface DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions {
}

export function dataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsToTerraform(struct?: DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_threshold - computed: true, optional: false, required: false
  private _conditionThreshold = new DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference(this, "condition_threshold");
  public get conditionThreshold() {
    return this._conditionThreshold;
  }
}
export interface DataAwsccSesConfigurationSetSuppressionOptions {
}

export function dataAwsccSesConfigurationSetSuppressionOptionsToTerraform(struct?: DataAwsccSesConfigurationSetSuppressionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetSuppressionOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetSuppressionOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetSuppressionOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetSuppressionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetSuppressionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // suppressed_reasons - computed: true, optional: false, required: false
  public get suppressedReasons() {
    return this.getListAttribute('suppressed_reasons');
  }

  // validation_options - computed: true, optional: false, required: false
  private _validationOptions = new DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference(this, "validation_options");
  public get validationOptions() {
    return this._validationOptions;
  }
}
export interface DataAwsccSesConfigurationSetTags {
}

export function dataAwsccSesConfigurationSetTagsToTerraform(struct?: DataAwsccSesConfigurationSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetTagsToHclTerraform(struct?: DataAwsccSesConfigurationSetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesConfigurationSetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetTags | undefined) {
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

export class DataAwsccSesConfigurationSetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesConfigurationSetTagsOutputReference {
    return new DataAwsccSesConfigurationSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSesConfigurationSetTrackingOptions {
}

export function dataAwsccSesConfigurationSetTrackingOptionsToTerraform(struct?: DataAwsccSesConfigurationSetTrackingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetTrackingOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetTrackingOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetTrackingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetTrackingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetTrackingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_redirect_domain - computed: true, optional: false, required: false
  public get customRedirectDomain() {
    return this.getStringAttribute('custom_redirect_domain');
  }

  // https_policy - computed: true, optional: false, required: false
  public get httpsPolicy() {
    return this.getStringAttribute('https_policy');
  }
}
export interface DataAwsccSesConfigurationSetVdmOptionsDashboardOptions {
}

export function dataAwsccSesConfigurationSetVdmOptionsDashboardOptionsToTerraform(struct?: DataAwsccSesConfigurationSetVdmOptionsDashboardOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetVdmOptionsDashboardOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetVdmOptionsDashboardOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetVdmOptionsDashboardOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetVdmOptionsDashboardOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // engagement_metrics - computed: true, optional: false, required: false
  public get engagementMetrics() {
    return this.getStringAttribute('engagement_metrics');
  }
}
export interface DataAwsccSesConfigurationSetVdmOptionsGuardianOptions {
}

export function dataAwsccSesConfigurationSetVdmOptionsGuardianOptionsToTerraform(struct?: DataAwsccSesConfigurationSetVdmOptionsGuardianOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetVdmOptionsGuardianOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetVdmOptionsGuardianOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetVdmOptionsGuardianOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetVdmOptionsGuardianOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optimized_shared_delivery - computed: true, optional: false, required: false
  public get optimizedSharedDelivery() {
    return this.getStringAttribute('optimized_shared_delivery');
  }
}
export interface DataAwsccSesConfigurationSetVdmOptions {
}

export function dataAwsccSesConfigurationSetVdmOptionsToTerraform(struct?: DataAwsccSesConfigurationSetVdmOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesConfigurationSetVdmOptionsToHclTerraform(struct?: DataAwsccSesConfigurationSetVdmOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesConfigurationSetVdmOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesConfigurationSetVdmOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesConfigurationSetVdmOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dashboard_options - computed: true, optional: false, required: false
  private _dashboardOptions = new DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference(this, "dashboard_options");
  public get dashboardOptions() {
    return this._dashboardOptions;
  }

  // guardian_options - computed: true, optional: false, required: false
  private _guardianOptions = new DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference(this, "guardian_options");
  public get guardianOptions() {
    return this._guardianOptions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set awscc_ses_configuration_set}
*/
export class DataAwsccSesConfigurationSet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_configuration_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSesConfigurationSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSesConfigurationSet to import
  * @param importFromId The id of the existing DataAwsccSesConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSesConfigurationSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_configuration_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_configuration_set awscc_ses_configuration_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSesConfigurationSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSesConfigurationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_configuration_set',
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

  // archiving_options - computed: true, optional: false, required: false
  private _archivingOptions = new DataAwsccSesConfigurationSetArchivingOptionsOutputReference(this, "archiving_options");
  public get archivingOptions() {
    return this._archivingOptions;
  }

  // delivery_options - computed: true, optional: false, required: false
  private _deliveryOptions = new DataAwsccSesConfigurationSetDeliveryOptionsOutputReference(this, "delivery_options");
  public get deliveryOptions() {
    return this._deliveryOptions;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reputation_options - computed: true, optional: false, required: false
  private _reputationOptions = new DataAwsccSesConfigurationSetReputationOptionsOutputReference(this, "reputation_options");
  public get reputationOptions() {
    return this._reputationOptions;
  }

  // sending_options - computed: true, optional: false, required: false
  private _sendingOptions = new DataAwsccSesConfigurationSetSendingOptionsOutputReference(this, "sending_options");
  public get sendingOptions() {
    return this._sendingOptions;
  }

  // suppression_options - computed: true, optional: false, required: false
  private _suppressionOptions = new DataAwsccSesConfigurationSetSuppressionOptionsOutputReference(this, "suppression_options");
  public get suppressionOptions() {
    return this._suppressionOptions;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSesConfigurationSetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tracking_options - computed: true, optional: false, required: false
  private _trackingOptions = new DataAwsccSesConfigurationSetTrackingOptionsOutputReference(this, "tracking_options");
  public get trackingOptions() {
    return this._trackingOptions;
  }

  // vdm_options - computed: true, optional: false, required: false
  private _vdmOptions = new DataAwsccSesConfigurationSetVdmOptionsOutputReference(this, "vdm_options");
  public get vdmOptions() {
    return this._vdmOptions;
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
