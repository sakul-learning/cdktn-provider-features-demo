// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SesConfigurationSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#archiving_options SesConfigurationSet#archiving_options}
  */
  readonly archivingOptions?: SesConfigurationSetArchivingOptions;
  /**
  * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}
  */
  readonly deliveryOptions?: SesConfigurationSetDeliveryOptions;
  /**
  * The name of the configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#name SesConfigurationSet#name}
  */
  readonly name?: string;
  /**
  * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#reputation_options SesConfigurationSet#reputation_options}
  */
  readonly reputationOptions?: SesConfigurationSetReputationOptions;
  /**
  * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#sending_options SesConfigurationSet#sending_options}
  */
  readonly sendingOptions?: SesConfigurationSetSendingOptions;
  /**
  * An object that contains information about the suppression list preferences for your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#suppression_options SesConfigurationSet#suppression_options}
  */
  readonly suppressionOptions?: SesConfigurationSetSuppressionOptions;
  /**
  * The tags (keys and values) associated with the contact list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#tags SesConfigurationSet#tags}
  */
  readonly tags?: SesConfigurationSetTags[] | cdktn.IResolvable;
  /**
  * An object that defines the open and click tracking options for emails that you send using the configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}
  */
  readonly trackingOptions?: SesConfigurationSetTrackingOptions;
  /**
  * An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#vdm_options SesConfigurationSet#vdm_options}
  */
  readonly vdmOptions?: SesConfigurationSetVdmOptions;
}
export interface SesConfigurationSetArchivingOptions {
  /**
  * The ARN of the MailManager archive to associate with the configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#archive_arn SesConfigurationSet#archive_arn}
  */
  readonly archiveArn?: string;
}

export function sesConfigurationSetArchivingOptionsToTerraform(struct?: SesConfigurationSetArchivingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    archive_arn: cdktn.stringToTerraform(struct!.archiveArn),
  }
}


export function sesConfigurationSetArchivingOptionsToHclTerraform(struct?: SesConfigurationSetArchivingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    archive_arn: {
      value: cdktn.stringToHclTerraform(struct!.archiveArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetArchivingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetArchivingOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveArn = this._archiveArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetArchivingOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiveArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiveArn = value.archiveArn;
    }
  }

  // archive_arn - computed: true, optional: true, required: false
  private _archiveArn?: string; 
  public get archiveArn() {
    return this.getStringAttribute('archive_arn');
  }
  public set archiveArn(value: string) {
    this._archiveArn = value;
  }
  public resetArchiveArn() {
    this._archiveArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveArnInput() {
    return this._archiveArn;
  }
}
export interface SesConfigurationSetDeliveryOptions {
  /**
  * Specifies the maximum time until which SES will retry sending emails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#max_delivery_seconds SesConfigurationSet#max_delivery_seconds}
  */
  readonly maxDeliverySeconds?: number;
  /**
  * The name of the dedicated IP pool to associate with the configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#sending_pool_name SesConfigurationSet#sending_pool_name}
  */
  readonly sendingPoolName?: string;
  /**
  * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}
  */
  readonly tlsPolicy?: string;
}

export function sesConfigurationSetDeliveryOptionsToTerraform(struct?: SesConfigurationSetDeliveryOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_delivery_seconds: cdktn.numberToTerraform(struct!.maxDeliverySeconds),
    sending_pool_name: cdktn.stringToTerraform(struct!.sendingPoolName),
    tls_policy: cdktn.stringToTerraform(struct!.tlsPolicy),
  }
}


export function sesConfigurationSetDeliveryOptionsToHclTerraform(struct?: SesConfigurationSetDeliveryOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_delivery_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxDeliverySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sending_pool_name: {
      value: cdktn.stringToHclTerraform(struct!.sendingPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_policy: {
      value: cdktn.stringToHclTerraform(struct!.tlsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetDeliveryOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetDeliveryOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDeliverySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliverySeconds = this._maxDeliverySeconds;
    }
    if (this._sendingPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingPoolName = this._sendingPoolName;
    }
    if (this._tlsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPolicy = this._tlsPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetDeliveryOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxDeliverySeconds = undefined;
      this._sendingPoolName = undefined;
      this._tlsPolicy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxDeliverySeconds = value.maxDeliverySeconds;
      this._sendingPoolName = value.sendingPoolName;
      this._tlsPolicy = value.tlsPolicy;
    }
  }

  // max_delivery_seconds - computed: true, optional: true, required: false
  private _maxDeliverySeconds?: number; 
  public get maxDeliverySeconds() {
    return this.getNumberAttribute('max_delivery_seconds');
  }
  public set maxDeliverySeconds(value: number) {
    this._maxDeliverySeconds = value;
  }
  public resetMaxDeliverySeconds() {
    this._maxDeliverySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliverySecondsInput() {
    return this._maxDeliverySeconds;
  }

  // sending_pool_name - computed: true, optional: true, required: false
  private _sendingPoolName?: string; 
  public get sendingPoolName() {
    return this.getStringAttribute('sending_pool_name');
  }
  public set sendingPoolName(value: string) {
    this._sendingPoolName = value;
  }
  public resetSendingPoolName() {
    this._sendingPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingPoolNameInput() {
    return this._sendingPoolName;
  }

  // tls_policy - computed: true, optional: true, required: false
  private _tlsPolicy?: string; 
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
  public set tlsPolicy(value: string) {
    this._tlsPolicy = value;
  }
  public resetTlsPolicy() {
    this._tlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPolicyInput() {
    return this._tlsPolicy;
  }
}
export interface SesConfigurationSetReputationOptions {
  /**
  * If true , tracking of reputation metrics is enabled for the configuration set. If false , tracking of reputation metrics is disabled for the configuration set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}
  */
  readonly reputationMetricsEnabled?: boolean | cdktn.IResolvable;
}

export function sesConfigurationSetReputationOptionsToTerraform(struct?: SesConfigurationSetReputationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reputation_metrics_enabled: cdktn.booleanToTerraform(struct!.reputationMetricsEnabled),
  }
}


export function sesConfigurationSetReputationOptionsToHclTerraform(struct?: SesConfigurationSetReputationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reputation_metrics_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.reputationMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetReputationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetReputationOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reputationMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationMetricsEnabled = this._reputationMetricsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetReputationOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reputationMetricsEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reputationMetricsEnabled = value.reputationMetricsEnabled;
    }
  }

  // reputation_metrics_enabled - computed: true, optional: true, required: false
  private _reputationMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get reputationMetricsEnabled() {
    return this.getBooleanAttribute('reputation_metrics_enabled');
  }
  public set reputationMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._reputationMetricsEnabled = value;
  }
  public resetReputationMetricsEnabled() {
    this._reputationMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationMetricsEnabledInput() {
    return this._reputationMetricsEnabled;
  }
}
export interface SesConfigurationSetSendingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}
  */
  readonly sendingEnabled?: boolean | cdktn.IResolvable;
}

export function sesConfigurationSetSendingOptionsToTerraform(struct?: SesConfigurationSetSendingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sending_enabled: cdktn.booleanToTerraform(struct!.sendingEnabled),
  }
}


export function sesConfigurationSetSendingOptionsToHclTerraform(struct?: SesConfigurationSetSendingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sending_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.sendingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetSendingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetSendingOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendingEnabled = this._sendingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetSendingOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sendingEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sendingEnabled = value.sendingEnabled;
    }
  }

  // sending_enabled - computed: true, optional: true, required: false
  private _sendingEnabled?: boolean | cdktn.IResolvable; 
  public get sendingEnabled() {
    return this.getBooleanAttribute('sending_enabled');
  }
  public set sendingEnabled(value: boolean | cdktn.IResolvable) {
    this._sendingEnabled = value;
  }
  public resetSendingEnabled() {
    this._sendingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingEnabledInput() {
    return this._sendingEnabled;
  }
}
export interface SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold {
  /**
  * The confidence verdict threshold level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#confidence_verdict_threshold SesConfigurationSet#confidence_verdict_threshold}
  */
  readonly confidenceVerdictThreshold?: string;
}

export function sesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdToTerraform(struct?: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confidence_verdict_threshold: cdktn.stringToTerraform(struct!.confidenceVerdictThreshold),
  }
}


export function sesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdToHclTerraform(struct?: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confidence_verdict_threshold: {
      value: cdktn.stringToHclTerraform(struct!.confidenceVerdictThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidenceVerdictThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidenceVerdictThreshold = this._confidenceVerdictThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidenceVerdictThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidenceVerdictThreshold = value.confidenceVerdictThreshold;
    }
  }

  // confidence_verdict_threshold - computed: true, optional: true, required: false
  private _confidenceVerdictThreshold?: string; 
  public get confidenceVerdictThreshold() {
    return this.getStringAttribute('confidence_verdict_threshold');
  }
  public set confidenceVerdictThreshold(value: string) {
    this._confidenceVerdictThreshold = value;
  }
  public resetConfidenceVerdictThreshold() {
    this._confidenceVerdictThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceVerdictThresholdInput() {
    return this._confidenceVerdictThreshold;
  }
}
export interface SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold {
  /**
  * Whether the condition threshold is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#condition_threshold_enabled SesConfigurationSet#condition_threshold_enabled}
  */
  readonly conditionThresholdEnabled?: string;
  /**
  * The overall confidence threshold settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#overall_confidence_threshold SesConfigurationSet#overall_confidence_threshold}
  */
  readonly overallConfidenceThreshold?: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold;
}

export function sesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdToTerraform(struct?: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_threshold_enabled: cdktn.stringToTerraform(struct!.conditionThresholdEnabled),
    overall_confidence_threshold: sesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdToTerraform(struct!.overallConfidenceThreshold),
  }
}


export function sesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdToHclTerraform(struct?: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_threshold_enabled: {
      value: cdktn.stringToHclTerraform(struct!.conditionThresholdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overall_confidence_threshold: {
      value: sesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdToHclTerraform(struct!.overallConfidenceThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionThresholdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionThresholdEnabled = this._conditionThresholdEnabled;
    }
    if (this._overallConfidenceThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overallConfidenceThreshold = this._overallConfidenceThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionThresholdEnabled = undefined;
      this._overallConfidenceThreshold.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionThresholdEnabled = value.conditionThresholdEnabled;
      this._overallConfidenceThreshold.internalValue = value.overallConfidenceThreshold;
    }
  }

  // condition_threshold_enabled - computed: true, optional: true, required: false
  private _conditionThresholdEnabled?: string; 
  public get conditionThresholdEnabled() {
    return this.getStringAttribute('condition_threshold_enabled');
  }
  public set conditionThresholdEnabled(value: string) {
    this._conditionThresholdEnabled = value;
  }
  public resetConditionThresholdEnabled() {
    this._conditionThresholdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionThresholdEnabledInput() {
    return this._conditionThresholdEnabled;
  }

  // overall_confidence_threshold - computed: true, optional: true, required: false
  private _overallConfidenceThreshold = new SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference(this, "overall_confidence_threshold");
  public get overallConfidenceThreshold() {
    return this._overallConfidenceThreshold;
  }
  public putOverallConfidenceThreshold(value: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold) {
    this._overallConfidenceThreshold.internalValue = value;
  }
  public resetOverallConfidenceThreshold() {
    this._overallConfidenceThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallConfidenceThresholdInput() {
    return this._overallConfidenceThreshold.internalValue;
  }
}
export interface SesConfigurationSetSuppressionOptionsValidationOptions {
  /**
  * The condition threshold settings for suppression validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#condition_threshold SesConfigurationSet#condition_threshold}
  */
  readonly conditionThreshold?: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold;
}

export function sesConfigurationSetSuppressionOptionsValidationOptionsToTerraform(struct?: SesConfigurationSetSuppressionOptionsValidationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition_threshold: sesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdToTerraform(struct!.conditionThreshold),
  }
}


export function sesConfigurationSetSuppressionOptionsValidationOptionsToHclTerraform(struct?: SesConfigurationSetSuppressionOptionsValidationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition_threshold: {
      value: sesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdToHclTerraform(struct!.conditionThreshold),
      isBlock: true,
      type: "struct",
      storageClassType: "SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetSuppressionOptionsValidationOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionThreshold = this._conditionThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetSuppressionOptionsValidationOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionThreshold.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionThreshold.internalValue = value.conditionThreshold;
    }
  }

  // condition_threshold - computed: true, optional: true, required: false
  private _conditionThreshold = new SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference(this, "condition_threshold");
  public get conditionThreshold() {
    return this._conditionThreshold;
  }
  public putConditionThreshold(value: SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold) {
    this._conditionThreshold.internalValue = value;
  }
  public resetConditionThreshold() {
    this._conditionThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionThresholdInput() {
    return this._conditionThreshold.internalValue;
  }
}
export interface SesConfigurationSetSuppressionOptions {
  /**
  * A list that contains the reasons that email addresses are automatically added to the suppression list for your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#suppressed_reasons SesConfigurationSet#suppressed_reasons}
  */
  readonly suppressedReasons?: string[];
  /**
  * An object that contains information about the validation options for your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#validation_options SesConfigurationSet#validation_options}
  */
  readonly validationOptions?: SesConfigurationSetSuppressionOptionsValidationOptions;
}

export function sesConfigurationSetSuppressionOptionsToTerraform(struct?: SesConfigurationSetSuppressionOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    suppressed_reasons: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.suppressedReasons),
    validation_options: sesConfigurationSetSuppressionOptionsValidationOptionsToTerraform(struct!.validationOptions),
  }
}


export function sesConfigurationSetSuppressionOptionsToHclTerraform(struct?: SesConfigurationSetSuppressionOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    suppressed_reasons: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.suppressedReasons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    validation_options: {
      value: sesConfigurationSetSuppressionOptionsValidationOptionsToHclTerraform(struct!.validationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "SesConfigurationSetSuppressionOptionsValidationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetSuppressionOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetSuppressionOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suppressedReasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressedReasons = this._suppressedReasons;
    }
    if (this._validationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationOptions = this._validationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetSuppressionOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._suppressedReasons = undefined;
      this._validationOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._suppressedReasons = value.suppressedReasons;
      this._validationOptions.internalValue = value.validationOptions;
    }
  }

  // suppressed_reasons - computed: true, optional: true, required: false
  private _suppressedReasons?: string[]; 
  public get suppressedReasons() {
    return this.getListAttribute('suppressed_reasons');
  }
  public set suppressedReasons(value: string[]) {
    this._suppressedReasons = value;
  }
  public resetSuppressedReasons() {
    this._suppressedReasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedReasonsInput() {
    return this._suppressedReasons;
  }

  // validation_options - computed: true, optional: true, required: false
  private _validationOptions = new SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference(this, "validation_options");
  public get validationOptions() {
    return this._validationOptions;
  }
  public putValidationOptions(value: SesConfigurationSetSuppressionOptionsValidationOptions) {
    this._validationOptions.internalValue = value;
  }
  public resetValidationOptions() {
    this._validationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationOptionsInput() {
    return this._validationOptions.internalValue;
  }
}
export interface SesConfigurationSetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#key SesConfigurationSet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#value SesConfigurationSet#value}
  */
  readonly value?: string;
}

export function sesConfigurationSetTagsToTerraform(struct?: SesConfigurationSetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sesConfigurationSetTagsToHclTerraform(struct?: SesConfigurationSetTags | cdktn.IResolvable): any {
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

export class SesConfigurationSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesConfigurationSetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SesConfigurationSetTags | cdktn.IResolvable | undefined) {
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

export class SesConfigurationSetTagsList extends cdktn.ComplexList {
  public internalValue? : SesConfigurationSetTags[] | cdktn.IResolvable

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
  public get(index: number): SesConfigurationSetTagsOutputReference {
    return new SesConfigurationSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SesConfigurationSetTrackingOptions {
  /**
  * The domain to use for tracking open and click events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}
  */
  readonly customRedirectDomain?: string;
  /**
  * The https policy to use for tracking open and click events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#https_policy SesConfigurationSet#https_policy}
  */
  readonly httpsPolicy?: string;
}

export function sesConfigurationSetTrackingOptionsToTerraform(struct?: SesConfigurationSetTrackingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_redirect_domain: cdktn.stringToTerraform(struct!.customRedirectDomain),
    https_policy: cdktn.stringToTerraform(struct!.httpsPolicy),
  }
}


export function sesConfigurationSetTrackingOptionsToHclTerraform(struct?: SesConfigurationSetTrackingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_redirect_domain: {
      value: cdktn.stringToHclTerraform(struct!.customRedirectDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_policy: {
      value: cdktn.stringToHclTerraform(struct!.httpsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetTrackingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetTrackingOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRedirectDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRedirectDomain = this._customRedirectDomain;
    }
    if (this._httpsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPolicy = this._httpsPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetTrackingOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRedirectDomain = undefined;
      this._httpsPolicy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRedirectDomain = value.customRedirectDomain;
      this._httpsPolicy = value.httpsPolicy;
    }
  }

  // custom_redirect_domain - computed: true, optional: true, required: false
  private _customRedirectDomain?: string; 
  public get customRedirectDomain() {
    return this.getStringAttribute('custom_redirect_domain');
  }
  public set customRedirectDomain(value: string) {
    this._customRedirectDomain = value;
  }
  public resetCustomRedirectDomain() {
    this._customRedirectDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRedirectDomainInput() {
    return this._customRedirectDomain;
  }

  // https_policy - computed: true, optional: true, required: false
  private _httpsPolicy?: string; 
  public get httpsPolicy() {
    return this.getStringAttribute('https_policy');
  }
  public set httpsPolicy(value: string) {
    this._httpsPolicy = value;
  }
  public resetHttpsPolicy() {
    this._httpsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPolicyInput() {
    return this._httpsPolicy;
  }
}
export interface SesConfigurationSetVdmOptionsDashboardOptions {
  /**
  * Whether emails sent with this configuration set have engagement tracking enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#engagement_metrics SesConfigurationSet#engagement_metrics}
  */
  readonly engagementMetrics?: string;
}

export function sesConfigurationSetVdmOptionsDashboardOptionsToTerraform(struct?: SesConfigurationSetVdmOptionsDashboardOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    engagement_metrics: cdktn.stringToTerraform(struct!.engagementMetrics),
  }
}


export function sesConfigurationSetVdmOptionsDashboardOptionsToHclTerraform(struct?: SesConfigurationSetVdmOptionsDashboardOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    engagement_metrics: {
      value: cdktn.stringToHclTerraform(struct!.engagementMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetVdmOptionsDashboardOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetVdmOptionsDashboardOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engagementMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.engagementMetrics = this._engagementMetrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetVdmOptionsDashboardOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engagementMetrics = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engagementMetrics = value.engagementMetrics;
    }
  }

  // engagement_metrics - computed: true, optional: true, required: false
  private _engagementMetrics?: string; 
  public get engagementMetrics() {
    return this.getStringAttribute('engagement_metrics');
  }
  public set engagementMetrics(value: string) {
    this._engagementMetrics = value;
  }
  public resetEngagementMetrics() {
    this._engagementMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagementMetricsInput() {
    return this._engagementMetrics;
  }
}
export interface SesConfigurationSetVdmOptionsGuardianOptions {
  /**
  * Whether emails sent with this configuration set have optimized delivery algorithm enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#optimized_shared_delivery SesConfigurationSet#optimized_shared_delivery}
  */
  readonly optimizedSharedDelivery?: string;
}

export function sesConfigurationSetVdmOptionsGuardianOptionsToTerraform(struct?: SesConfigurationSetVdmOptionsGuardianOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    optimized_shared_delivery: cdktn.stringToTerraform(struct!.optimizedSharedDelivery),
  }
}


export function sesConfigurationSetVdmOptionsGuardianOptionsToHclTerraform(struct?: SesConfigurationSetVdmOptionsGuardianOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    optimized_shared_delivery: {
      value: cdktn.stringToHclTerraform(struct!.optimizedSharedDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetVdmOptionsGuardianOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetVdmOptionsGuardianOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizedSharedDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizedSharedDelivery = this._optimizedSharedDelivery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetVdmOptionsGuardianOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optimizedSharedDelivery = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optimizedSharedDelivery = value.optimizedSharedDelivery;
    }
  }

  // optimized_shared_delivery - computed: true, optional: true, required: false
  private _optimizedSharedDelivery?: string; 
  public get optimizedSharedDelivery() {
    return this.getStringAttribute('optimized_shared_delivery');
  }
  public set optimizedSharedDelivery(value: string) {
    this._optimizedSharedDelivery = value;
  }
  public resetOptimizedSharedDelivery() {
    this._optimizedSharedDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedSharedDeliveryInput() {
    return this._optimizedSharedDelivery;
  }
}
export interface SesConfigurationSetVdmOptions {
  /**
  * Preferences regarding the Dashboard feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#dashboard_options SesConfigurationSet#dashboard_options}
  */
  readonly dashboardOptions?: SesConfigurationSetVdmOptionsDashboardOptions;
  /**
  * Preferences regarding the Guardian feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#guardian_options SesConfigurationSet#guardian_options}
  */
  readonly guardianOptions?: SesConfigurationSetVdmOptionsGuardianOptions;
}

export function sesConfigurationSetVdmOptionsToTerraform(struct?: SesConfigurationSetVdmOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dashboard_options: sesConfigurationSetVdmOptionsDashboardOptionsToTerraform(struct!.dashboardOptions),
    guardian_options: sesConfigurationSetVdmOptionsGuardianOptionsToTerraform(struct!.guardianOptions),
  }
}


export function sesConfigurationSetVdmOptionsToHclTerraform(struct?: SesConfigurationSetVdmOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dashboard_options: {
      value: sesConfigurationSetVdmOptionsDashboardOptionsToHclTerraform(struct!.dashboardOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "SesConfigurationSetVdmOptionsDashboardOptions",
    },
    guardian_options: {
      value: sesConfigurationSetVdmOptionsGuardianOptionsToHclTerraform(struct!.guardianOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "SesConfigurationSetVdmOptionsGuardianOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesConfigurationSetVdmOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesConfigurationSetVdmOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardOptions = this._dashboardOptions?.internalValue;
    }
    if (this._guardianOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardianOptions = this._guardianOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesConfigurationSetVdmOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardOptions.internalValue = undefined;
      this._guardianOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardOptions.internalValue = value.dashboardOptions;
      this._guardianOptions.internalValue = value.guardianOptions;
    }
  }

  // dashboard_options - computed: true, optional: true, required: false
  private _dashboardOptions = new SesConfigurationSetVdmOptionsDashboardOptionsOutputReference(this, "dashboard_options");
  public get dashboardOptions() {
    return this._dashboardOptions;
  }
  public putDashboardOptions(value: SesConfigurationSetVdmOptionsDashboardOptions) {
    this._dashboardOptions.internalValue = value;
  }
  public resetDashboardOptions() {
    this._dashboardOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardOptionsInput() {
    return this._dashboardOptions.internalValue;
  }

  // guardian_options - computed: true, optional: true, required: false
  private _guardianOptions = new SesConfigurationSetVdmOptionsGuardianOptionsOutputReference(this, "guardian_options");
  public get guardianOptions() {
    return this._guardianOptions;
  }
  public putGuardianOptions(value: SesConfigurationSetVdmOptionsGuardianOptions) {
    this._guardianOptions.internalValue = value;
  }
  public resetGuardianOptions() {
    this._guardianOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardianOptionsInput() {
    return this._guardianOptions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set awscc_ses_configuration_set}
*/
export class SesConfigurationSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_configuration_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SesConfigurationSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesConfigurationSet to import
  * @param importFromId The id of the existing SesConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesConfigurationSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_configuration_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_configuration_set awscc_ses_configuration_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesConfigurationSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SesConfigurationSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_configuration_set',
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
    this._archivingOptions.internalValue = config.archivingOptions;
    this._deliveryOptions.internalValue = config.deliveryOptions;
    this._name = config.name;
    this._reputationOptions.internalValue = config.reputationOptions;
    this._sendingOptions.internalValue = config.sendingOptions;
    this._suppressionOptions.internalValue = config.suppressionOptions;
    this._tags.internalValue = config.tags;
    this._trackingOptions.internalValue = config.trackingOptions;
    this._vdmOptions.internalValue = config.vdmOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archiving_options - computed: true, optional: true, required: false
  private _archivingOptions = new SesConfigurationSetArchivingOptionsOutputReference(this, "archiving_options");
  public get archivingOptions() {
    return this._archivingOptions;
  }
  public putArchivingOptions(value: SesConfigurationSetArchivingOptions) {
    this._archivingOptions.internalValue = value;
  }
  public resetArchivingOptions() {
    this._archivingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivingOptionsInput() {
    return this._archivingOptions.internalValue;
  }

  // delivery_options - computed: true, optional: true, required: false
  private _deliveryOptions = new SesConfigurationSetDeliveryOptionsOutputReference(this, "delivery_options");
  public get deliveryOptions() {
    return this._deliveryOptions;
  }
  public putDeliveryOptions(value: SesConfigurationSetDeliveryOptions) {
    this._deliveryOptions.internalValue = value;
  }
  public resetDeliveryOptions() {
    this._deliveryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryOptionsInput() {
    return this._deliveryOptions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // reputation_options - computed: true, optional: true, required: false
  private _reputationOptions = new SesConfigurationSetReputationOptionsOutputReference(this, "reputation_options");
  public get reputationOptions() {
    return this._reputationOptions;
  }
  public putReputationOptions(value: SesConfigurationSetReputationOptions) {
    this._reputationOptions.internalValue = value;
  }
  public resetReputationOptions() {
    this._reputationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationOptionsInput() {
    return this._reputationOptions.internalValue;
  }

  // sending_options - computed: true, optional: true, required: false
  private _sendingOptions = new SesConfigurationSetSendingOptionsOutputReference(this, "sending_options");
  public get sendingOptions() {
    return this._sendingOptions;
  }
  public putSendingOptions(value: SesConfigurationSetSendingOptions) {
    this._sendingOptions.internalValue = value;
  }
  public resetSendingOptions() {
    this._sendingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendingOptionsInput() {
    return this._sendingOptions.internalValue;
  }

  // suppression_options - computed: true, optional: true, required: false
  private _suppressionOptions = new SesConfigurationSetSuppressionOptionsOutputReference(this, "suppression_options");
  public get suppressionOptions() {
    return this._suppressionOptions;
  }
  public putSuppressionOptions(value: SesConfigurationSetSuppressionOptions) {
    this._suppressionOptions.internalValue = value;
  }
  public resetSuppressionOptions() {
    this._suppressionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionOptionsInput() {
    return this._suppressionOptions.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SesConfigurationSetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SesConfigurationSetTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tracking_options - computed: true, optional: true, required: false
  private _trackingOptions = new SesConfigurationSetTrackingOptionsOutputReference(this, "tracking_options");
  public get trackingOptions() {
    return this._trackingOptions;
  }
  public putTrackingOptions(value: SesConfigurationSetTrackingOptions) {
    this._trackingOptions.internalValue = value;
  }
  public resetTrackingOptions() {
    this._trackingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingOptionsInput() {
    return this._trackingOptions.internalValue;
  }

  // vdm_options - computed: true, optional: true, required: false
  private _vdmOptions = new SesConfigurationSetVdmOptionsOutputReference(this, "vdm_options");
  public get vdmOptions() {
    return this._vdmOptions;
  }
  public putVdmOptions(value: SesConfigurationSetVdmOptions) {
    this._vdmOptions.internalValue = value;
  }
  public resetVdmOptions() {
    this._vdmOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdmOptionsInput() {
    return this._vdmOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archiving_options: sesConfigurationSetArchivingOptionsToTerraform(this._archivingOptions.internalValue),
      delivery_options: sesConfigurationSetDeliveryOptionsToTerraform(this._deliveryOptions.internalValue),
      name: cdktn.stringToTerraform(this._name),
      reputation_options: sesConfigurationSetReputationOptionsToTerraform(this._reputationOptions.internalValue),
      sending_options: sesConfigurationSetSendingOptionsToTerraform(this._sendingOptions.internalValue),
      suppression_options: sesConfigurationSetSuppressionOptionsToTerraform(this._suppressionOptions.internalValue),
      tags: cdktn.listMapper(sesConfigurationSetTagsToTerraform, false)(this._tags.internalValue),
      tracking_options: sesConfigurationSetTrackingOptionsToTerraform(this._trackingOptions.internalValue),
      vdm_options: sesConfigurationSetVdmOptionsToTerraform(this._vdmOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archiving_options: {
        value: sesConfigurationSetArchivingOptionsToHclTerraform(this._archivingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesConfigurationSetArchivingOptions",
      },
      delivery_options: {
        value: sesConfigurationSetDeliveryOptionsToHclTerraform(this._deliveryOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesConfigurationSetDeliveryOptions",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reputation_options: {
        value: sesConfigurationSetReputationOptionsToHclTerraform(this._reputationOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesConfigurationSetReputationOptions",
      },
      sending_options: {
        value: sesConfigurationSetSendingOptionsToHclTerraform(this._sendingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesConfigurationSetSendingOptions",
      },
      suppression_options: {
        value: sesConfigurationSetSuppressionOptionsToHclTerraform(this._suppressionOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesConfigurationSetSuppressionOptions",
      },
      tags: {
        value: cdktn.listMapperHcl(sesConfigurationSetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesConfigurationSetTagsList",
      },
      tracking_options: {
        value: sesConfigurationSetTrackingOptionsToHclTerraform(this._trackingOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesConfigurationSetTrackingOptions",
      },
      vdm_options: {
        value: sesConfigurationSetVdmOptionsToHclTerraform(this._vdmOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesConfigurationSetVdmOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
