// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_account_audit_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotAccountAuditConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_account_audit_configuration#id DataAwsccIotAccountAuditConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_age_threshold_in_days - computed: true, optional: false, required: false
  public get certAgeThresholdInDays() {
    return this.getStringAttribute('cert_age_threshold_in_days');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_expiration_threshold_in_days - computed: true, optional: false, required: false
  public get certExpirationThresholdInDays() {
    return this.getStringAttribute('cert_expiration_threshold_in_days');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations {
}

export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditCheckConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authenticated_cognito_role_overly_permissive_check - computed: true, optional: false, required: false
  private _authenticatedCognitoRoleOverlyPermissiveCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference(this, "authenticated_cognito_role_overly_permissive_check");
  public get authenticatedCognitoRoleOverlyPermissiveCheck() {
    return this._authenticatedCognitoRoleOverlyPermissiveCheck;
  }

  // ca_certificate_expiring_check - computed: true, optional: false, required: false
  private _caCertificateExpiringCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference(this, "ca_certificate_expiring_check");
  public get caCertificateExpiringCheck() {
    return this._caCertificateExpiringCheck;
  }

  // ca_certificate_key_quality_check - computed: true, optional: false, required: false
  private _caCertificateKeyQualityCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference(this, "ca_certificate_key_quality_check");
  public get caCertificateKeyQualityCheck() {
    return this._caCertificateKeyQualityCheck;
  }

  // conflicting_client_ids_check - computed: true, optional: false, required: false
  private _conflictingClientIdsCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference(this, "conflicting_client_ids_check");
  public get conflictingClientIdsCheck() {
    return this._conflictingClientIdsCheck;
  }

  // device_certificate_age_check - computed: true, optional: false, required: false
  private _deviceCertificateAgeCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference(this, "device_certificate_age_check");
  public get deviceCertificateAgeCheck() {
    return this._deviceCertificateAgeCheck;
  }

  // device_certificate_expiring_check - computed: true, optional: false, required: false
  private _deviceCertificateExpiringCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference(this, "device_certificate_expiring_check");
  public get deviceCertificateExpiringCheck() {
    return this._deviceCertificateExpiringCheck;
  }

  // device_certificate_key_quality_check - computed: true, optional: false, required: false
  private _deviceCertificateKeyQualityCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference(this, "device_certificate_key_quality_check");
  public get deviceCertificateKeyQualityCheck() {
    return this._deviceCertificateKeyQualityCheck;
  }

  // device_certificate_shared_check - computed: true, optional: false, required: false
  private _deviceCertificateSharedCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference(this, "device_certificate_shared_check");
  public get deviceCertificateSharedCheck() {
    return this._deviceCertificateSharedCheck;
  }

  // intermediate_ca_revoked_for_active_device_certificates_check - computed: true, optional: false, required: false
  private _intermediateCaRevokedForActiveDeviceCertificatesCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference(this, "intermediate_ca_revoked_for_active_device_certificates_check");
  public get intermediateCaRevokedForActiveDeviceCertificatesCheck() {
    return this._intermediateCaRevokedForActiveDeviceCertificatesCheck;
  }

  // io_t_policy_potential_mis_configuration_check - computed: true, optional: false, required: false
  private _ioTPolicyPotentialMisConfigurationCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference(this, "io_t_policy_potential_mis_configuration_check");
  public get ioTPolicyPotentialMisConfigurationCheck() {
    return this._ioTPolicyPotentialMisConfigurationCheck;
  }

  // iot_policy_overly_permissive_check - computed: true, optional: false, required: false
  private _iotPolicyOverlyPermissiveCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference(this, "iot_policy_overly_permissive_check");
  public get iotPolicyOverlyPermissiveCheck() {
    return this._iotPolicyOverlyPermissiveCheck;
  }

  // iot_role_alias_allows_access_to_unused_services_check - computed: true, optional: false, required: false
  private _iotRoleAliasAllowsAccessToUnusedServicesCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference(this, "iot_role_alias_allows_access_to_unused_services_check");
  public get iotRoleAliasAllowsAccessToUnusedServicesCheck() {
    return this._iotRoleAliasAllowsAccessToUnusedServicesCheck;
  }

  // iot_role_alias_overly_permissive_check - computed: true, optional: false, required: false
  private _iotRoleAliasOverlyPermissiveCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference(this, "iot_role_alias_overly_permissive_check");
  public get iotRoleAliasOverlyPermissiveCheck() {
    return this._iotRoleAliasOverlyPermissiveCheck;
  }

  // logging_disabled_check - computed: true, optional: false, required: false
  private _loggingDisabledCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference(this, "logging_disabled_check");
  public get loggingDisabledCheck() {
    return this._loggingDisabledCheck;
  }

  // revoked_ca_certificate_still_active_check - computed: true, optional: false, required: false
  private _revokedCaCertificateStillActiveCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference(this, "revoked_ca_certificate_still_active_check");
  public get revokedCaCertificateStillActiveCheck() {
    return this._revokedCaCertificateStillActiveCheck;
  }

  // revoked_device_certificate_still_active_check - computed: true, optional: false, required: false
  private _revokedDeviceCertificateStillActiveCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference(this, "revoked_device_certificate_still_active_check");
  public get revokedDeviceCertificateStillActiveCheck() {
    return this._revokedDeviceCertificateStillActiveCheck;
  }

  // unauthenticated_cognito_role_overly_permissive_check - computed: true, optional: false, required: false
  private _unauthenticatedCognitoRoleOverlyPermissiveCheck = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference(this, "unauthenticated_cognito_role_overly_permissive_check");
  public get unauthenticatedCognitoRoleOverlyPermissiveCheck() {
    return this._unauthenticatedCognitoRoleOverlyPermissiveCheck;
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns {
}

export function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}
export interface DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations {
}

export function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsToTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsToHclTerraform(struct?: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sns - computed: true, optional: false, required: false
  private _sns = new DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference(this, "sns");
  public get sns() {
    return this._sns;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_account_audit_configuration awscc_iot_account_audit_configuration}
*/
export class DataAwsccIotAccountAuditConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_account_audit_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotAccountAuditConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotAccountAuditConfiguration to import
  * @param importFromId The id of the existing DataAwsccIotAccountAuditConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_account_audit_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotAccountAuditConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_account_audit_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iot_account_audit_configuration awscc_iot_account_audit_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotAccountAuditConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotAccountAuditConfigurationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // audit_check_configurations - computed: true, optional: false, required: false
  private _auditCheckConfigurations = new DataAwsccIotAccountAuditConfigurationAuditCheckConfigurationsOutputReference(this, "audit_check_configurations");
  public get auditCheckConfigurations() {
    return this._auditCheckConfigurations;
  }

  // audit_notification_target_configurations - computed: true, optional: false, required: false
  private _auditNotificationTargetConfigurations = new DataAwsccIotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference(this, "audit_notification_target_configurations");
  public get auditNotificationTargetConfigurations() {
    return this._auditNotificationTargetConfigurations;
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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
