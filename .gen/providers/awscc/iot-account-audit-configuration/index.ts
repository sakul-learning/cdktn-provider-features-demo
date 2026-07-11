// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotAccountAuditConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#account_id IotAccountAuditConfiguration#account_id}
  */
  readonly accountId: string;
  /**
  * Specifies which audit checks are enabled and disabled for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#audit_check_configurations IotAccountAuditConfiguration#audit_check_configurations}
  */
  readonly auditCheckConfigurations: IotAccountAuditConfigurationAuditCheckConfigurations;
  /**
  * Information about the targets to which audit notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#audit_notification_target_configurations IotAccountAuditConfiguration#audit_notification_target_configurations}
  */
  readonly auditNotificationTargetConfigurations?: IotAccountAuditConfigurationAuditNotificationTargetConfigurations;
  /**
  * The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#role_arn IotAccountAuditConfiguration#role_arn}
  */
  readonly roleArn: string;
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration {
  /**
  * The configValue for configuring audit checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#cert_age_threshold_in_days IotAccountAuditConfiguration#cert_age_threshold_in_days}
  */
  readonly certAgeThresholdInDays?: string;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cert_age_threshold_in_days: cdktn.stringToTerraform(struct!.certAgeThresholdInDays),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cert_age_threshold_in_days: {
      value: cdktn.stringToHclTerraform(struct!.certAgeThresholdInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certAgeThresholdInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.certAgeThresholdInDays = this._certAgeThresholdInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certAgeThresholdInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certAgeThresholdInDays = value.certAgeThresholdInDays;
    }
  }

  // cert_age_threshold_in_days - computed: true, optional: true, required: false
  private _certAgeThresholdInDays?: string; 
  public get certAgeThresholdInDays() {
    return this.getStringAttribute('cert_age_threshold_in_days');
  }
  public set certAgeThresholdInDays(value: string) {
    this._certAgeThresholdInDays = value;
  }
  public resetCertAgeThresholdInDays() {
    this._certAgeThresholdInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certAgeThresholdInDaysInput() {
    return this._certAgeThresholdInDays;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck {
  /**
  * A structure containing the configName and corresponding configValue for configuring audit checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#configuration IotAccountAuditConfiguration#configuration}
  */
  readonly configuration?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration;
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationToTerraform(struct!.configuration),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration = new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration {
  /**
  * The configValue for configuring audit checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#cert_expiration_threshold_in_days IotAccountAuditConfiguration#cert_expiration_threshold_in_days}
  */
  readonly certExpirationThresholdInDays?: string;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cert_expiration_threshold_in_days: cdktn.stringToTerraform(struct!.certExpirationThresholdInDays),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cert_expiration_threshold_in_days: {
      value: cdktn.stringToHclTerraform(struct!.certExpirationThresholdInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certExpirationThresholdInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.certExpirationThresholdInDays = this._certExpirationThresholdInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certExpirationThresholdInDays = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certExpirationThresholdInDays = value.certExpirationThresholdInDays;
    }
  }

  // cert_expiration_threshold_in_days - computed: true, optional: true, required: false
  private _certExpirationThresholdInDays?: string; 
  public get certExpirationThresholdInDays() {
    return this.getStringAttribute('cert_expiration_threshold_in_days');
  }
  public set certExpirationThresholdInDays(value: string) {
    this._certExpirationThresholdInDays = value;
  }
  public resetCertExpirationThresholdInDays() {
    this._certExpirationThresholdInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certExpirationThresholdInDaysInput() {
    return this._certExpirationThresholdInDays;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck {
  /**
  * A structure containing the configName and corresponding configValue for configuring audit checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#configuration IotAccountAuditConfiguration#configuration}
  */
  readonly configuration?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration;
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    configuration: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationToTerraform(struct!.configuration),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    configuration: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._enabled = value.enabled;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration = new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck {
  /**
  * True if the check is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IotAccountAuditConfigurationAuditCheckConfigurations {
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#authenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#authenticated_cognito_role_overly_permissive_check}
  */
  readonly authenticatedCognitoRoleOverlyPermissiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#ca_certificate_expiring_check IotAccountAuditConfiguration#ca_certificate_expiring_check}
  */
  readonly caCertificateExpiringCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#ca_certificate_key_quality_check IotAccountAuditConfiguration#ca_certificate_key_quality_check}
  */
  readonly caCertificateKeyQualityCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#conflicting_client_ids_check IotAccountAuditConfiguration#conflicting_client_ids_check}
  */
  readonly conflictingClientIdsCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck;
  /**
  * A structure containing the configName and corresponding configValue for configuring DeviceCertAgeCheck.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#device_certificate_age_check IotAccountAuditConfiguration#device_certificate_age_check}
  */
  readonly deviceCertificateAgeCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck;
  /**
  * A structure containing the configName and corresponding configValue for configuring DeviceCertExpirationCheck.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#device_certificate_expiring_check IotAccountAuditConfiguration#device_certificate_expiring_check}
  */
  readonly deviceCertificateExpiringCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#device_certificate_key_quality_check IotAccountAuditConfiguration#device_certificate_key_quality_check}
  */
  readonly deviceCertificateKeyQualityCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#device_certificate_shared_check IotAccountAuditConfiguration#device_certificate_shared_check}
  */
  readonly deviceCertificateSharedCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#intermediate_ca_revoked_for_active_device_certificates_check IotAccountAuditConfiguration#intermediate_ca_revoked_for_active_device_certificates_check}
  */
  readonly intermediateCaRevokedForActiveDeviceCertificatesCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#io_t_policy_potential_mis_configuration_check IotAccountAuditConfiguration#io_t_policy_potential_mis_configuration_check}
  */
  readonly ioTPolicyPotentialMisConfigurationCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#iot_policy_overly_permissive_check IotAccountAuditConfiguration#iot_policy_overly_permissive_check}
  */
  readonly iotPolicyOverlyPermissiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#iot_role_alias_allows_access_to_unused_services_check IotAccountAuditConfiguration#iot_role_alias_allows_access_to_unused_services_check}
  */
  readonly iotRoleAliasAllowsAccessToUnusedServicesCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#iot_role_alias_overly_permissive_check IotAccountAuditConfiguration#iot_role_alias_overly_permissive_check}
  */
  readonly iotRoleAliasOverlyPermissiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#logging_disabled_check IotAccountAuditConfiguration#logging_disabled_check}
  */
  readonly loggingDisabledCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#revoked_ca_certificate_still_active_check IotAccountAuditConfiguration#revoked_ca_certificate_still_active_check}
  */
  readonly revokedCaCertificateStillActiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#revoked_device_certificate_still_active_check IotAccountAuditConfiguration#revoked_device_certificate_still_active_check}
  */
  readonly revokedDeviceCertificateStillActiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck;
  /**
  * The configuration for a specific audit check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#unauthenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#unauthenticated_cognito_role_overly_permissive_check}
  */
  readonly unauthenticatedCognitoRoleOverlyPermissiveCheck?: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck;
}

export function iotAccountAuditConfigurationAuditCheckConfigurationsToTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authenticated_cognito_role_overly_permissive_check: iotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct!.authenticatedCognitoRoleOverlyPermissiveCheck),
    ca_certificate_expiring_check: iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct!.caCertificateExpiringCheck),
    ca_certificate_key_quality_check: iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct!.caCertificateKeyQualityCheck),
    conflicting_client_ids_check: iotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct!.conflictingClientIdsCheck),
    device_certificate_age_check: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckToTerraform(struct!.deviceCertificateAgeCheck),
    device_certificate_expiring_check: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct!.deviceCertificateExpiringCheck),
    device_certificate_key_quality_check: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct!.deviceCertificateKeyQualityCheck),
    device_certificate_shared_check: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct!.deviceCertificateSharedCheck),
    intermediate_ca_revoked_for_active_device_certificates_check: iotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckToTerraform(struct!.intermediateCaRevokedForActiveDeviceCertificatesCheck),
    io_t_policy_potential_mis_configuration_check: iotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckToTerraform(struct!.ioTPolicyPotentialMisConfigurationCheck),
    iot_policy_overly_permissive_check: iotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct!.iotPolicyOverlyPermissiveCheck),
    iot_role_alias_allows_access_to_unused_services_check: iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct!.iotRoleAliasAllowsAccessToUnusedServicesCheck),
    iot_role_alias_overly_permissive_check: iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct!.iotRoleAliasOverlyPermissiveCheck),
    logging_disabled_check: iotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct!.loggingDisabledCheck),
    revoked_ca_certificate_still_active_check: iotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct!.revokedCaCertificateStillActiveCheck),
    revoked_device_certificate_still_active_check: iotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct!.revokedDeviceCertificateStillActiveCheck),
    unauthenticated_cognito_role_overly_permissive_check: iotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct!.unauthenticatedCognitoRoleOverlyPermissiveCheck),
  }
}


export function iotAccountAuditConfigurationAuditCheckConfigurationsToHclTerraform(struct?: IotAccountAuditConfigurationAuditCheckConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authenticated_cognito_role_overly_permissive_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToHclTerraform(struct!.authenticatedCognitoRoleOverlyPermissiveCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck",
    },
    ca_certificate_expiring_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToHclTerraform(struct!.caCertificateExpiringCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck",
    },
    ca_certificate_key_quality_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToHclTerraform(struct!.caCertificateKeyQualityCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck",
    },
    conflicting_client_ids_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToHclTerraform(struct!.conflictingClientIdsCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck",
    },
    device_certificate_age_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckToHclTerraform(struct!.deviceCertificateAgeCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck",
    },
    device_certificate_expiring_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToHclTerraform(struct!.deviceCertificateExpiringCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck",
    },
    device_certificate_key_quality_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToHclTerraform(struct!.deviceCertificateKeyQualityCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck",
    },
    device_certificate_shared_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToHclTerraform(struct!.deviceCertificateSharedCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck",
    },
    intermediate_ca_revoked_for_active_device_certificates_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckToHclTerraform(struct!.intermediateCaRevokedForActiveDeviceCertificatesCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck",
    },
    io_t_policy_potential_mis_configuration_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckToHclTerraform(struct!.ioTPolicyPotentialMisConfigurationCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck",
    },
    iot_policy_overly_permissive_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToHclTerraform(struct!.iotPolicyOverlyPermissiveCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck",
    },
    iot_role_alias_allows_access_to_unused_services_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToHclTerraform(struct!.iotRoleAliasAllowsAccessToUnusedServicesCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck",
    },
    iot_role_alias_overly_permissive_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToHclTerraform(struct!.iotRoleAliasOverlyPermissiveCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck",
    },
    logging_disabled_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToHclTerraform(struct!.loggingDisabledCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck",
    },
    revoked_ca_certificate_still_active_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToHclTerraform(struct!.revokedCaCertificateStillActiveCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck",
    },
    revoked_device_certificate_still_active_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToHclTerraform(struct!.revokedDeviceCertificateStillActiveCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck",
    },
    unauthenticated_cognito_role_overly_permissive_check: {
      value: iotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToHclTerraform(struct!.unauthenticatedCognitoRoleOverlyPermissiveCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditCheckConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticatedCognitoRoleOverlyPermissiveCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatedCognitoRoleOverlyPermissiveCheck = this._authenticatedCognitoRoleOverlyPermissiveCheck?.internalValue;
    }
    if (this._caCertificateExpiringCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateExpiringCheck = this._caCertificateExpiringCheck?.internalValue;
    }
    if (this._caCertificateKeyQualityCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateKeyQualityCheck = this._caCertificateKeyQualityCheck?.internalValue;
    }
    if (this._conflictingClientIdsCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictingClientIdsCheck = this._conflictingClientIdsCheck?.internalValue;
    }
    if (this._deviceCertificateAgeCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceCertificateAgeCheck = this._deviceCertificateAgeCheck?.internalValue;
    }
    if (this._deviceCertificateExpiringCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceCertificateExpiringCheck = this._deviceCertificateExpiringCheck?.internalValue;
    }
    if (this._deviceCertificateKeyQualityCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceCertificateKeyQualityCheck = this._deviceCertificateKeyQualityCheck?.internalValue;
    }
    if (this._deviceCertificateSharedCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceCertificateSharedCheck = this._deviceCertificateSharedCheck?.internalValue;
    }
    if (this._intermediateCaRevokedForActiveDeviceCertificatesCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateCaRevokedForActiveDeviceCertificatesCheck = this._intermediateCaRevokedForActiveDeviceCertificatesCheck?.internalValue;
    }
    if (this._ioTPolicyPotentialMisConfigurationCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioTPolicyPotentialMisConfigurationCheck = this._ioTPolicyPotentialMisConfigurationCheck?.internalValue;
    }
    if (this._iotPolicyOverlyPermissiveCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotPolicyOverlyPermissiveCheck = this._iotPolicyOverlyPermissiveCheck?.internalValue;
    }
    if (this._iotRoleAliasAllowsAccessToUnusedServicesCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotRoleAliasAllowsAccessToUnusedServicesCheck = this._iotRoleAliasAllowsAccessToUnusedServicesCheck?.internalValue;
    }
    if (this._iotRoleAliasOverlyPermissiveCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotRoleAliasOverlyPermissiveCheck = this._iotRoleAliasOverlyPermissiveCheck?.internalValue;
    }
    if (this._loggingDisabledCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingDisabledCheck = this._loggingDisabledCheck?.internalValue;
    }
    if (this._revokedCaCertificateStillActiveCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedCaCertificateStillActiveCheck = this._revokedCaCertificateStillActiveCheck?.internalValue;
    }
    if (this._revokedDeviceCertificateStillActiveCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedDeviceCertificateStillActiveCheck = this._revokedDeviceCertificateStillActiveCheck?.internalValue;
    }
    if (this._unauthenticatedCognitoRoleOverlyPermissiveCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthenticatedCognitoRoleOverlyPermissiveCheck = this._unauthenticatedCognitoRoleOverlyPermissiveCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditCheckConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue = undefined;
      this._caCertificateExpiringCheck.internalValue = undefined;
      this._caCertificateKeyQualityCheck.internalValue = undefined;
      this._conflictingClientIdsCheck.internalValue = undefined;
      this._deviceCertificateAgeCheck.internalValue = undefined;
      this._deviceCertificateExpiringCheck.internalValue = undefined;
      this._deviceCertificateKeyQualityCheck.internalValue = undefined;
      this._deviceCertificateSharedCheck.internalValue = undefined;
      this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue = undefined;
      this._ioTPolicyPotentialMisConfigurationCheck.internalValue = undefined;
      this._iotPolicyOverlyPermissiveCheck.internalValue = undefined;
      this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue = undefined;
      this._iotRoleAliasOverlyPermissiveCheck.internalValue = undefined;
      this._loggingDisabledCheck.internalValue = undefined;
      this._revokedCaCertificateStillActiveCheck.internalValue = undefined;
      this._revokedDeviceCertificateStillActiveCheck.internalValue = undefined;
      this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue = value.authenticatedCognitoRoleOverlyPermissiveCheck;
      this._caCertificateExpiringCheck.internalValue = value.caCertificateExpiringCheck;
      this._caCertificateKeyQualityCheck.internalValue = value.caCertificateKeyQualityCheck;
      this._conflictingClientIdsCheck.internalValue = value.conflictingClientIdsCheck;
      this._deviceCertificateAgeCheck.internalValue = value.deviceCertificateAgeCheck;
      this._deviceCertificateExpiringCheck.internalValue = value.deviceCertificateExpiringCheck;
      this._deviceCertificateKeyQualityCheck.internalValue = value.deviceCertificateKeyQualityCheck;
      this._deviceCertificateSharedCheck.internalValue = value.deviceCertificateSharedCheck;
      this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue = value.intermediateCaRevokedForActiveDeviceCertificatesCheck;
      this._ioTPolicyPotentialMisConfigurationCheck.internalValue = value.ioTPolicyPotentialMisConfigurationCheck;
      this._iotPolicyOverlyPermissiveCheck.internalValue = value.iotPolicyOverlyPermissiveCheck;
      this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue = value.iotRoleAliasAllowsAccessToUnusedServicesCheck;
      this._iotRoleAliasOverlyPermissiveCheck.internalValue = value.iotRoleAliasOverlyPermissiveCheck;
      this._loggingDisabledCheck.internalValue = value.loggingDisabledCheck;
      this._revokedCaCertificateStillActiveCheck.internalValue = value.revokedCaCertificateStillActiveCheck;
      this._revokedDeviceCertificateStillActiveCheck.internalValue = value.revokedDeviceCertificateStillActiveCheck;
      this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue = value.unauthenticatedCognitoRoleOverlyPermissiveCheck;
    }
  }

  // authenticated_cognito_role_overly_permissive_check - computed: true, optional: true, required: false
  private _authenticatedCognitoRoleOverlyPermissiveCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference(this, "authenticated_cognito_role_overly_permissive_check");
  public get authenticatedCognitoRoleOverlyPermissiveCheck() {
    return this._authenticatedCognitoRoleOverlyPermissiveCheck;
  }
  public putAuthenticatedCognitoRoleOverlyPermissiveCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck) {
    this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue = value;
  }
  public resetAuthenticatedCognitoRoleOverlyPermissiveCheck() {
    this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedCognitoRoleOverlyPermissiveCheckInput() {
    return this._authenticatedCognitoRoleOverlyPermissiveCheck.internalValue;
  }

  // ca_certificate_expiring_check - computed: true, optional: true, required: false
  private _caCertificateExpiringCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference(this, "ca_certificate_expiring_check");
  public get caCertificateExpiringCheck() {
    return this._caCertificateExpiringCheck;
  }
  public putCaCertificateExpiringCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck) {
    this._caCertificateExpiringCheck.internalValue = value;
  }
  public resetCaCertificateExpiringCheck() {
    this._caCertificateExpiringCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateExpiringCheckInput() {
    return this._caCertificateExpiringCheck.internalValue;
  }

  // ca_certificate_key_quality_check - computed: true, optional: true, required: false
  private _caCertificateKeyQualityCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference(this, "ca_certificate_key_quality_check");
  public get caCertificateKeyQualityCheck() {
    return this._caCertificateKeyQualityCheck;
  }
  public putCaCertificateKeyQualityCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck) {
    this._caCertificateKeyQualityCheck.internalValue = value;
  }
  public resetCaCertificateKeyQualityCheck() {
    this._caCertificateKeyQualityCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateKeyQualityCheckInput() {
    return this._caCertificateKeyQualityCheck.internalValue;
  }

  // conflicting_client_ids_check - computed: true, optional: true, required: false
  private _conflictingClientIdsCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference(this, "conflicting_client_ids_check");
  public get conflictingClientIdsCheck() {
    return this._conflictingClientIdsCheck;
  }
  public putConflictingClientIdsCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck) {
    this._conflictingClientIdsCheck.internalValue = value;
  }
  public resetConflictingClientIdsCheck() {
    this._conflictingClientIdsCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictingClientIdsCheckInput() {
    return this._conflictingClientIdsCheck.internalValue;
  }

  // device_certificate_age_check - computed: true, optional: true, required: false
  private _deviceCertificateAgeCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference(this, "device_certificate_age_check");
  public get deviceCertificateAgeCheck() {
    return this._deviceCertificateAgeCheck;
  }
  public putDeviceCertificateAgeCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck) {
    this._deviceCertificateAgeCheck.internalValue = value;
  }
  public resetDeviceCertificateAgeCheck() {
    this._deviceCertificateAgeCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCertificateAgeCheckInput() {
    return this._deviceCertificateAgeCheck.internalValue;
  }

  // device_certificate_expiring_check - computed: true, optional: true, required: false
  private _deviceCertificateExpiringCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference(this, "device_certificate_expiring_check");
  public get deviceCertificateExpiringCheck() {
    return this._deviceCertificateExpiringCheck;
  }
  public putDeviceCertificateExpiringCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck) {
    this._deviceCertificateExpiringCheck.internalValue = value;
  }
  public resetDeviceCertificateExpiringCheck() {
    this._deviceCertificateExpiringCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCertificateExpiringCheckInput() {
    return this._deviceCertificateExpiringCheck.internalValue;
  }

  // device_certificate_key_quality_check - computed: true, optional: true, required: false
  private _deviceCertificateKeyQualityCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference(this, "device_certificate_key_quality_check");
  public get deviceCertificateKeyQualityCheck() {
    return this._deviceCertificateKeyQualityCheck;
  }
  public putDeviceCertificateKeyQualityCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck) {
    this._deviceCertificateKeyQualityCheck.internalValue = value;
  }
  public resetDeviceCertificateKeyQualityCheck() {
    this._deviceCertificateKeyQualityCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCertificateKeyQualityCheckInput() {
    return this._deviceCertificateKeyQualityCheck.internalValue;
  }

  // device_certificate_shared_check - computed: true, optional: true, required: false
  private _deviceCertificateSharedCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference(this, "device_certificate_shared_check");
  public get deviceCertificateSharedCheck() {
    return this._deviceCertificateSharedCheck;
  }
  public putDeviceCertificateSharedCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck) {
    this._deviceCertificateSharedCheck.internalValue = value;
  }
  public resetDeviceCertificateSharedCheck() {
    this._deviceCertificateSharedCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCertificateSharedCheckInput() {
    return this._deviceCertificateSharedCheck.internalValue;
  }

  // intermediate_ca_revoked_for_active_device_certificates_check - computed: true, optional: true, required: false
  private _intermediateCaRevokedForActiveDeviceCertificatesCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference(this, "intermediate_ca_revoked_for_active_device_certificates_check");
  public get intermediateCaRevokedForActiveDeviceCertificatesCheck() {
    return this._intermediateCaRevokedForActiveDeviceCertificatesCheck;
  }
  public putIntermediateCaRevokedForActiveDeviceCertificatesCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck) {
    this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue = value;
  }
  public resetIntermediateCaRevokedForActiveDeviceCertificatesCheck() {
    this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateCaRevokedForActiveDeviceCertificatesCheckInput() {
    return this._intermediateCaRevokedForActiveDeviceCertificatesCheck.internalValue;
  }

  // io_t_policy_potential_mis_configuration_check - computed: true, optional: true, required: false
  private _ioTPolicyPotentialMisConfigurationCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference(this, "io_t_policy_potential_mis_configuration_check");
  public get ioTPolicyPotentialMisConfigurationCheck() {
    return this._ioTPolicyPotentialMisConfigurationCheck;
  }
  public putIoTPolicyPotentialMisConfigurationCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck) {
    this._ioTPolicyPotentialMisConfigurationCheck.internalValue = value;
  }
  public resetIoTPolicyPotentialMisConfigurationCheck() {
    this._ioTPolicyPotentialMisConfigurationCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioTPolicyPotentialMisConfigurationCheckInput() {
    return this._ioTPolicyPotentialMisConfigurationCheck.internalValue;
  }

  // iot_policy_overly_permissive_check - computed: true, optional: true, required: false
  private _iotPolicyOverlyPermissiveCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference(this, "iot_policy_overly_permissive_check");
  public get iotPolicyOverlyPermissiveCheck() {
    return this._iotPolicyOverlyPermissiveCheck;
  }
  public putIotPolicyOverlyPermissiveCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck) {
    this._iotPolicyOverlyPermissiveCheck.internalValue = value;
  }
  public resetIotPolicyOverlyPermissiveCheck() {
    this._iotPolicyOverlyPermissiveCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotPolicyOverlyPermissiveCheckInput() {
    return this._iotPolicyOverlyPermissiveCheck.internalValue;
  }

  // iot_role_alias_allows_access_to_unused_services_check - computed: true, optional: true, required: false
  private _iotRoleAliasAllowsAccessToUnusedServicesCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference(this, "iot_role_alias_allows_access_to_unused_services_check");
  public get iotRoleAliasAllowsAccessToUnusedServicesCheck() {
    return this._iotRoleAliasAllowsAccessToUnusedServicesCheck;
  }
  public putIotRoleAliasAllowsAccessToUnusedServicesCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck) {
    this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue = value;
  }
  public resetIotRoleAliasAllowsAccessToUnusedServicesCheck() {
    this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotRoleAliasAllowsAccessToUnusedServicesCheckInput() {
    return this._iotRoleAliasAllowsAccessToUnusedServicesCheck.internalValue;
  }

  // iot_role_alias_overly_permissive_check - computed: true, optional: true, required: false
  private _iotRoleAliasOverlyPermissiveCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference(this, "iot_role_alias_overly_permissive_check");
  public get iotRoleAliasOverlyPermissiveCheck() {
    return this._iotRoleAliasOverlyPermissiveCheck;
  }
  public putIotRoleAliasOverlyPermissiveCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck) {
    this._iotRoleAliasOverlyPermissiveCheck.internalValue = value;
  }
  public resetIotRoleAliasOverlyPermissiveCheck() {
    this._iotRoleAliasOverlyPermissiveCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotRoleAliasOverlyPermissiveCheckInput() {
    return this._iotRoleAliasOverlyPermissiveCheck.internalValue;
  }

  // logging_disabled_check - computed: true, optional: true, required: false
  private _loggingDisabledCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference(this, "logging_disabled_check");
  public get loggingDisabledCheck() {
    return this._loggingDisabledCheck;
  }
  public putLoggingDisabledCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck) {
    this._loggingDisabledCheck.internalValue = value;
  }
  public resetLoggingDisabledCheck() {
    this._loggingDisabledCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingDisabledCheckInput() {
    return this._loggingDisabledCheck.internalValue;
  }

  // revoked_ca_certificate_still_active_check - computed: true, optional: true, required: false
  private _revokedCaCertificateStillActiveCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference(this, "revoked_ca_certificate_still_active_check");
  public get revokedCaCertificateStillActiveCheck() {
    return this._revokedCaCertificateStillActiveCheck;
  }
  public putRevokedCaCertificateStillActiveCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck) {
    this._revokedCaCertificateStillActiveCheck.internalValue = value;
  }
  public resetRevokedCaCertificateStillActiveCheck() {
    this._revokedCaCertificateStillActiveCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedCaCertificateStillActiveCheckInput() {
    return this._revokedCaCertificateStillActiveCheck.internalValue;
  }

  // revoked_device_certificate_still_active_check - computed: true, optional: true, required: false
  private _revokedDeviceCertificateStillActiveCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference(this, "revoked_device_certificate_still_active_check");
  public get revokedDeviceCertificateStillActiveCheck() {
    return this._revokedDeviceCertificateStillActiveCheck;
  }
  public putRevokedDeviceCertificateStillActiveCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck) {
    this._revokedDeviceCertificateStillActiveCheck.internalValue = value;
  }
  public resetRevokedDeviceCertificateStillActiveCheck() {
    this._revokedDeviceCertificateStillActiveCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedDeviceCertificateStillActiveCheckInput() {
    return this._revokedDeviceCertificateStillActiveCheck.internalValue;
  }

  // unauthenticated_cognito_role_overly_permissive_check - computed: true, optional: true, required: false
  private _unauthenticatedCognitoRoleOverlyPermissiveCheck = new IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference(this, "unauthenticated_cognito_role_overly_permissive_check");
  public get unauthenticatedCognitoRoleOverlyPermissiveCheck() {
    return this._unauthenticatedCognitoRoleOverlyPermissiveCheck;
  }
  public putUnauthenticatedCognitoRoleOverlyPermissiveCheck(value: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck) {
    this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue = value;
  }
  public resetUnauthenticatedCognitoRoleOverlyPermissiveCheck() {
    this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedCognitoRoleOverlyPermissiveCheckInput() {
    return this._unauthenticatedCognitoRoleOverlyPermissiveCheck.internalValue;
  }
}
export interface IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns {
  /**
  * True if notifications to the target are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The ARN of the role that grants permission to send notifications to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#role_arn IotAccountAuditConfiguration#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The ARN of the target (SNS topic) to which audit notifications are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#target_arn IotAccountAuditConfiguration#target_arn}
  */
  readonly targetArn?: string;
}

export function iotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct?: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function iotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToHclTerraform(struct?: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._roleArn = undefined;
      this._targetArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._roleArn = value.roleArn;
      this._targetArn = value.targetArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // target_arn - computed: true, optional: true, required: false
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  public resetTargetArn() {
    this._targetArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}
export interface IotAccountAuditConfigurationAuditNotificationTargetConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#sns IotAccountAuditConfiguration#sns}
  */
  readonly sns?: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns;
}

export function iotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform(struct?: IotAccountAuditConfigurationAuditNotificationTargetConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sns: iotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct!.sns),
  }
}


export function iotAccountAuditConfigurationAuditNotificationTargetConfigurationsToHclTerraform(struct?: IotAccountAuditConfigurationAuditNotificationTargetConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sns: {
      value: iotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToHclTerraform(struct!.sns),
      isBlock: true,
      type: "struct",
      storageClassType: "IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotAccountAuditConfigurationAuditNotificationTargetConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sns = this._sns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotAccountAuditConfigurationAuditNotificationTargetConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sns.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sns.internalValue = value.sns;
    }
  }

  // sns - computed: true, optional: true, required: false
  private _sns = new IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
  public putSns(value: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns) {
    this._sns.internalValue = value;
  }
  public resetSns() {
    this._sns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration awscc_iot_account_audit_configuration}
*/
export class IotAccountAuditConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_account_audit_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotAccountAuditConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotAccountAuditConfiguration to import
  * @param importFromId The id of the existing IotAccountAuditConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotAccountAuditConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_account_audit_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iot_account_audit_configuration awscc_iot_account_audit_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotAccountAuditConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: IotAccountAuditConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_account_audit_configuration',
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
    this._accountId = config.accountId;
    this._auditCheckConfigurations.internalValue = config.auditCheckConfigurations;
    this._auditNotificationTargetConfigurations.internalValue = config.auditNotificationTargetConfigurations;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // audit_check_configurations - computed: false, optional: false, required: true
  private _auditCheckConfigurations = new IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference(this, "audit_check_configurations");
  public get auditCheckConfigurations() {
    return this._auditCheckConfigurations;
  }
  public putAuditCheckConfigurations(value: IotAccountAuditConfigurationAuditCheckConfigurations) {
    this._auditCheckConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditCheckConfigurationsInput() {
    return this._auditCheckConfigurations.internalValue;
  }

  // audit_notification_target_configurations - computed: true, optional: true, required: false
  private _auditNotificationTargetConfigurations = new IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference(this, "audit_notification_target_configurations");
  public get auditNotificationTargetConfigurations() {
    return this._auditNotificationTargetConfigurations;
  }
  public putAuditNotificationTargetConfigurations(value: IotAccountAuditConfigurationAuditNotificationTargetConfigurations) {
    this._auditNotificationTargetConfigurations.internalValue = value;
  }
  public resetAuditNotificationTargetConfigurations() {
    this._auditNotificationTargetConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNotificationTargetConfigurationsInput() {
    return this._auditNotificationTargetConfigurations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      audit_check_configurations: iotAccountAuditConfigurationAuditCheckConfigurationsToTerraform(this._auditCheckConfigurations.internalValue),
      audit_notification_target_configurations: iotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform(this._auditNotificationTargetConfigurations.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_check_configurations: {
        value: iotAccountAuditConfigurationAuditCheckConfigurationsToHclTerraform(this._auditCheckConfigurations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotAccountAuditConfigurationAuditCheckConfigurations",
      },
      audit_notification_target_configurations: {
        value: iotAccountAuditConfigurationAuditNotificationTargetConfigurationsToHclTerraform(this._auditNotificationTargetConfigurations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotAccountAuditConfigurationAuditNotificationTargetConfigurations",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
