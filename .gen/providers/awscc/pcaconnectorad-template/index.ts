// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PcaconnectoradTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#connector_arn PcaconnectoradTemplate#connector_arn}
  */
  readonly connectorArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#definition PcaconnectoradTemplate#definition}
  */
  readonly definition: PcaconnectoradTemplateDefinition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#name PcaconnectoradTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#reenroll_all_certificate_holders PcaconnectoradTemplate#reenroll_all_certificate_holders}
  */
  readonly reenrollAllCertificateHolders?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#tags PcaconnectoradTemplate#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period PcaconnectoradTemplate#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period_type PcaconnectoradTemplate#period_type}
  */
  readonly periodType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    period: cdktn.numberToTerraform(struct!.period),
    period_type: cdktn.stringToTerraform(struct!.periodType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_type: {
      value: cdktn.stringToHclTerraform(struct!.periodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._period = undefined;
      this._periodType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._period = value.period;
      this._periodType = value.periodType;
    }
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_type - computed: true, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period PcaconnectoradTemplate#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period_type PcaconnectoradTemplate#period_type}
  */
  readonly periodType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    period: cdktn.numberToTerraform(struct!.period),
    period_type: cdktn.stringToTerraform(struct!.periodType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_type: {
      value: cdktn.stringToHclTerraform(struct!.periodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._period = undefined;
      this._periodType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._period = value.period;
      this._periodType = value.periodType;
    }
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_type - computed: true, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2CertificateValidity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#renewal_period PcaconnectoradTemplate#renewal_period}
  */
  readonly renewalPeriod?: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#validity_period PcaconnectoradTemplate#validity_period}
  */
  readonly validityPeriod?: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod;
}

export function pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    renewal_period: pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodToTerraform(struct!.renewalPeriod),
    validity_period: pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodToTerraform(struct!.validityPeriod),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    renewal_period: {
      value: pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodToHclTerraform(struct!.renewalPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod",
    },
    validity_period: {
      value: pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodToHclTerraform(struct!.validityPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2CertificateValidity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._renewalPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalPeriod = this._renewalPeriod?.internalValue;
    }
    if (this._validityPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validityPeriod = this._validityPeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._renewalPeriod.internalValue = undefined;
      this._validityPeriod.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._renewalPeriod.internalValue = value.renewalPeriod;
      this._validityPeriod.internalValue = value.validityPeriod;
    }
  }

  // renewal_period - computed: true, optional: true, required: false
  private _renewalPeriod = new PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference(this, "renewal_period");
  public get renewalPeriod() {
    return this._renewalPeriod;
  }
  public putRenewalPeriod(value: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod) {
    this._renewalPeriod.internalValue = value;
  }
  public resetRenewalPeriod() {
    this._renewalPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPeriodInput() {
    return this._renewalPeriod.internalValue;
  }

  // validity_period - computed: true, optional: true, required: false
  private _validityPeriod = new PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference(this, "validity_period");
  public get validityPeriod() {
    return this._validityPeriod;
  }
  public putValidityPeriod(value: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod) {
    this._validityPeriod.internalValue = value;
  }
  public resetValidityPeriod() {
    this._validityPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#enable_key_reuse_on_nt_token_keyset_storage_full PcaconnectoradTemplate#enable_key_reuse_on_nt_token_keyset_storage_full}
  */
  readonly enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#include_symmetric_algorithms PcaconnectoradTemplate#include_symmetric_algorithms}
  */
  readonly includeSymmetricAlgorithms?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#no_security_extension PcaconnectoradTemplate#no_security_extension}
  */
  readonly noSecurityExtension?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#remove_invalid_certificate_from_personal_store PcaconnectoradTemplate#remove_invalid_certificate_from_personal_store}
  */
  readonly removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#user_interaction_required PcaconnectoradTemplate#user_interaction_required}
  */
  readonly userInteractionRequired?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_key_reuse_on_nt_token_keyset_storage_full: cdktn.booleanToTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
    include_symmetric_algorithms: cdktn.booleanToTerraform(struct!.includeSymmetricAlgorithms),
    no_security_extension: cdktn.booleanToTerraform(struct!.noSecurityExtension),
    remove_invalid_certificate_from_personal_store: cdktn.booleanToTerraform(struct!.removeInvalidCertificateFromPersonalStore),
    user_interaction_required: cdktn.booleanToTerraform(struct!.userInteractionRequired),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_key_reuse_on_nt_token_keyset_storage_full: {
      value: cdktn.booleanToHclTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_symmetric_algorithms: {
      value: cdktn.booleanToHclTerraform(struct!.includeSymmetricAlgorithms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_security_extension: {
      value: cdktn.booleanToHclTerraform(struct!.noSecurityExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_invalid_certificate_from_personal_store: {
      value: cdktn.booleanToHclTerraform(struct!.removeInvalidCertificateFromPersonalStore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_interaction_required: {
      value: cdktn.booleanToHclTerraform(struct!.userInteractionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableKeyReuseOnNtTokenKeysetStorageFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKeyReuseOnNtTokenKeysetStorageFull = this._enableKeyReuseOnNtTokenKeysetStorageFull;
    }
    if (this._includeSymmetricAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSymmetricAlgorithms = this._includeSymmetricAlgorithms;
    }
    if (this._noSecurityExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSecurityExtension = this._noSecurityExtension;
    }
    if (this._removeInvalidCertificateFromPersonalStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeInvalidCertificateFromPersonalStore = this._removeInvalidCertificateFromPersonalStore;
    }
    if (this._userInteractionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInteractionRequired = this._userInteractionRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
      this._includeSymmetricAlgorithms = undefined;
      this._noSecurityExtension = undefined;
      this._removeInvalidCertificateFromPersonalStore = undefined;
      this._userInteractionRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableKeyReuseOnNtTokenKeysetStorageFull = value.enableKeyReuseOnNtTokenKeysetStorageFull;
      this._includeSymmetricAlgorithms = value.includeSymmetricAlgorithms;
      this._noSecurityExtension = value.noSecurityExtension;
      this._removeInvalidCertificateFromPersonalStore = value.removeInvalidCertificateFromPersonalStore;
      this._userInteractionRequired = value.userInteractionRequired;
    }
  }

  // enable_key_reuse_on_nt_token_keyset_storage_full - computed: true, optional: true, required: false
  private _enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable; 
  public get enableKeyReuseOnNtTokenKeysetStorageFull() {
    return this.getBooleanAttribute('enable_key_reuse_on_nt_token_keyset_storage_full');
  }
  public set enableKeyReuseOnNtTokenKeysetStorageFull(value: boolean | cdktn.IResolvable) {
    this._enableKeyReuseOnNtTokenKeysetStorageFull = value;
  }
  public resetEnableKeyReuseOnNtTokenKeysetStorageFull() {
    this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyReuseOnNtTokenKeysetStorageFullInput() {
    return this._enableKeyReuseOnNtTokenKeysetStorageFull;
  }

  // include_symmetric_algorithms - computed: true, optional: true, required: false
  private _includeSymmetricAlgorithms?: boolean | cdktn.IResolvable; 
  public get includeSymmetricAlgorithms() {
    return this.getBooleanAttribute('include_symmetric_algorithms');
  }
  public set includeSymmetricAlgorithms(value: boolean | cdktn.IResolvable) {
    this._includeSymmetricAlgorithms = value;
  }
  public resetIncludeSymmetricAlgorithms() {
    this._includeSymmetricAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSymmetricAlgorithmsInput() {
    return this._includeSymmetricAlgorithms;
  }

  // no_security_extension - computed: true, optional: true, required: false
  private _noSecurityExtension?: boolean | cdktn.IResolvable; 
  public get noSecurityExtension() {
    return this.getBooleanAttribute('no_security_extension');
  }
  public set noSecurityExtension(value: boolean | cdktn.IResolvable) {
    this._noSecurityExtension = value;
  }
  public resetNoSecurityExtension() {
    this._noSecurityExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSecurityExtensionInput() {
    return this._noSecurityExtension;
  }

  // remove_invalid_certificate_from_personal_store - computed: true, optional: true, required: false
  private _removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable; 
  public get removeInvalidCertificateFromPersonalStore() {
    return this.getBooleanAttribute('remove_invalid_certificate_from_personal_store');
  }
  public set removeInvalidCertificateFromPersonalStore(value: boolean | cdktn.IResolvable) {
    this._removeInvalidCertificateFromPersonalStore = value;
  }
  public resetRemoveInvalidCertificateFromPersonalStore() {
    this._removeInvalidCertificateFromPersonalStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInvalidCertificateFromPersonalStoreInput() {
    return this._removeInvalidCertificateFromPersonalStore;
  }

  // user_interaction_required - computed: true, optional: true, required: false
  private _userInteractionRequired?: boolean | cdktn.IResolvable; 
  public get userInteractionRequired() {
    return this.getBooleanAttribute('user_interaction_required');
  }
  public set userInteractionRequired(value: boolean | cdktn.IResolvable) {
    this._userInteractionRequired = value;
  }
  public resetUserInteractionRequired() {
    this._userInteractionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInteractionRequiredInput() {
    return this._userInteractionRequired;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#policy_object_identifier PcaconnectoradTemplate#policy_object_identifier}
  */
  readonly policyObjectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#policy_type PcaconnectoradTemplate#policy_type}
  */
  readonly policyType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_object_identifier: cdktn.stringToTerraform(struct!.policyObjectIdentifier),
    policy_type: cdktn.stringToTerraform(struct!.policyType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_object_identifier: {
      value: cdktn.stringToHclTerraform(struct!.policyObjectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktn.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyObjectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyObjectIdentifier = this._policyObjectIdentifier;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyObjectIdentifier = undefined;
      this._policyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyObjectIdentifier = value.policyObjectIdentifier;
      this._policyType = value.policyType;
    }
  }

  // policy_object_identifier - computed: true, optional: true, required: false
  private _policyObjectIdentifier?: string; 
  public get policyObjectIdentifier() {
    return this.getStringAttribute('policy_object_identifier');
  }
  public set policyObjectIdentifier(value: string) {
    this._policyObjectIdentifier = value;
  }
  public resetPolicyObjectIdentifier() {
    this._policyObjectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyObjectIdentifierInput() {
    return this._policyObjectIdentifier;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}

export class PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList extends cdktn.ComplexList {
  public internalValue? : PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies[] | cdktn.IResolvable

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
  public get(index: number): PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference {
    return new PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#critical PcaconnectoradTemplate#critical}
  */
  readonly critical?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#policies PcaconnectoradTemplate#policies}
  */
  readonly policies?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies[] | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    critical: cdktn.booleanToTerraform(struct!.critical),
    policies: cdktn.listMapper(pcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesToTerraform, false)(struct!.policies),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    critical: {
      value: cdktn.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policies: {
      value: cdktn.listMapperHcl(pcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._policies.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._policies.internalValue = value.policies;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: boolean | cdktn.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktn.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // policies - computed: true, optional: true, required: false
  private _policies = new PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies[] | cdktn.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#data_encipherment PcaconnectoradTemplate#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#digital_signature PcaconnectoradTemplate#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_agreement PcaconnectoradTemplate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_encipherment PcaconnectoradTemplate#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#non_repudiation PcaconnectoradTemplate#non_repudiation}
  */
  readonly nonRepudiation?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_encipherment: cdktn.booleanToTerraform(struct!.dataEncipherment),
    digital_signature: cdktn.booleanToTerraform(struct!.digitalSignature),
    key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
    key_encipherment: cdktn.booleanToTerraform(struct!.keyEncipherment),
    non_repudiation: cdktn.booleanToTerraform(struct!.nonRepudiation),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_encipherment: {
      value: cdktn.booleanToHclTerraform(struct!.dataEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    digital_signature: {
      value: cdktn.booleanToHclTerraform(struct!.digitalSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_agreement: {
      value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_encipherment: {
      value: cdktn.booleanToHclTerraform(struct!.keyEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_repudiation: {
      value: cdktn.booleanToHclTerraform(struct!.nonRepudiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncipherment = this._keyEncipherment;
    }
    if (this._nonRepudiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonRepudiation = this._nonRepudiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataEncipherment = undefined;
      this._digitalSignature = undefined;
      this._keyAgreement = undefined;
      this._keyEncipherment = undefined;
      this._nonRepudiation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataEncipherment = value.dataEncipherment;
      this._digitalSignature = value.digitalSignature;
      this._keyAgreement = value.keyAgreement;
      this._keyEncipherment = value.keyEncipherment;
      this._nonRepudiation = value.nonRepudiation;
    }
  }

  // data_encipherment - computed: true, optional: true, required: false
  private _dataEncipherment?: boolean | cdktn.IResolvable; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }
  public set dataEncipherment(value: boolean | cdktn.IResolvable) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment;
  }

  // digital_signature - computed: true, optional: true, required: false
  private _digitalSignature?: boolean | cdktn.IResolvable; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }
  public set digitalSignature(value: boolean | cdktn.IResolvable) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature;
  }

  // key_agreement - computed: true, optional: true, required: false
  private _keyAgreement?: boolean | cdktn.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktn.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // key_encipherment - computed: true, optional: true, required: false
  private _keyEncipherment?: boolean | cdktn.IResolvable; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
  public set keyEncipherment(value: boolean | cdktn.IResolvable) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment;
  }

  // non_repudiation - computed: true, optional: true, required: false
  private _nonRepudiation?: boolean | cdktn.IResolvable; 
  public get nonRepudiation() {
    return this.getBooleanAttribute('non_repudiation');
  }
  public set nonRepudiation(value: boolean | cdktn.IResolvable) {
    this._nonRepudiation = value;
  }
  public resetNonRepudiation() {
    this._nonRepudiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonRepudiationInput() {
    return this._nonRepudiation;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#critical PcaconnectoradTemplate#critical}
  */
  readonly critical?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#usage_flags PcaconnectoradTemplate#usage_flags}
  */
  readonly usageFlags?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags;
}

export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    critical: cdktn.booleanToTerraform(struct!.critical),
    usage_flags: pcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsToTerraform(struct!.usageFlags),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    critical: {
      value: cdktn.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usage_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsToHclTerraform(struct!.usageFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._usageFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageFlags = this._usageFlags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._usageFlags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._usageFlags.internalValue = value.usageFlags;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: boolean | cdktn.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktn.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // usage_flags - computed: true, optional: true, required: false
  private _usageFlags = new PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference(this, "usage_flags");
  public get usageFlags() {
    return this._usageFlags;
  }
  public putUsageFlags(value: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags) {
    this._usageFlags.internalValue = value;
  }
  public resetUsageFlags() {
    this._usageFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageFlagsInput() {
    return this._usageFlags.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2Extensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#application_policies PcaconnectoradTemplate#application_policies}
  */
  readonly applicationPolicies?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_usage PcaconnectoradTemplate#key_usage}
  */
  readonly keyUsage?: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage;
}

export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2Extensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_policies: pcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesToTerraform(struct!.applicationPolicies),
    key_usage: pcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageToTerraform(struct!.keyUsage),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2ExtensionsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2Extensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_policies: {
      value: pcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesToHclTerraform(struct!.applicationPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies",
    },
    key_usage: {
      value: pcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageToHclTerraform(struct!.keyUsage),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2Extensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationPolicies = this._applicationPolicies?.internalValue;
    }
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2Extensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationPolicies.internalValue = undefined;
      this._keyUsage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationPolicies.internalValue = value.applicationPolicies;
      this._keyUsage.internalValue = value.keyUsage;
    }
  }

  // application_policies - computed: true, optional: true, required: false
  private _applicationPolicies = new PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference(this, "application_policies");
  public get applicationPolicies() {
    return this._applicationPolicies;
  }
  public putApplicationPolicies(value: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies) {
    this._applicationPolicies.internalValue = value;
  }
  public resetApplicationPolicies() {
    this._applicationPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPoliciesInput() {
    return this._applicationPolicies.internalValue;
  }

  // key_usage - computed: true, optional: true, required: false
  private _keyUsage = new PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: PcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  public resetKeyUsage() {
    this._keyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2GeneralFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#auto_enrollment PcaconnectoradTemplate#auto_enrollment}
  */
  readonly autoEnrollment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#machine_type PcaconnectoradTemplate#machine_type}
  */
  readonly machineType?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2GeneralFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_enrollment: cdktn.booleanToTerraform(struct!.autoEnrollment),
    machine_type: cdktn.booleanToTerraform(struct!.machineType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2GeneralFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_enrollment: {
      value: cdktn.booleanToHclTerraform(struct!.autoEnrollment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_type: {
      value: cdktn.booleanToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2GeneralFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnrollment !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnrollment = this._autoEnrollment;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2GeneralFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoEnrollment = undefined;
      this._machineType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoEnrollment = value.autoEnrollment;
      this._machineType = value.machineType;
    }
  }

  // auto_enrollment - computed: true, optional: true, required: false
  private _autoEnrollment?: boolean | cdktn.IResolvable; 
  public get autoEnrollment() {
    return this.getBooleanAttribute('auto_enrollment');
  }
  public set autoEnrollment(value: boolean | cdktn.IResolvable) {
    this._autoEnrollment = value;
  }
  public resetAutoEnrollment() {
    this._autoEnrollment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnrollmentInput() {
    return this._autoEnrollment;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: boolean | cdktn.IResolvable; 
  public get machineType() {
    return this.getBooleanAttribute('machine_type');
  }
  public set machineType(value: boolean | cdktn.IResolvable) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#crypto_providers PcaconnectoradTemplate#crypto_providers}
  */
  readonly cryptoProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_spec PcaconnectoradTemplate#key_spec}
  */
  readonly keySpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#minimal_key_length PcaconnectoradTemplate#minimal_key_length}
  */
  readonly minimalKeyLength?: number;
}

export function pcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crypto_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cryptoProviders),
    key_spec: cdktn.stringToTerraform(struct!.keySpec),
    minimal_key_length: cdktn.numberToTerraform(struct!.minimalKeyLength),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crypto_providers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cryptoProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_spec: {
      value: cdktn.stringToHclTerraform(struct!.keySpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimal_key_length: {
      value: cdktn.numberToHclTerraform(struct!.minimalKeyLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoProviders = this._cryptoProviders;
    }
    if (this._keySpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySpec = this._keySpec;
    }
    if (this._minimalKeyLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalKeyLength = this._minimalKeyLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cryptoProviders = undefined;
      this._keySpec = undefined;
      this._minimalKeyLength = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cryptoProviders = value.cryptoProviders;
      this._keySpec = value.keySpec;
      this._minimalKeyLength = value.minimalKeyLength;
    }
  }

  // crypto_providers - computed: true, optional: true, required: false
  private _cryptoProviders?: string[]; 
  public get cryptoProviders() {
    return this.getListAttribute('crypto_providers');
  }
  public set cryptoProviders(value: string[]) {
    this._cryptoProviders = value;
  }
  public resetCryptoProviders() {
    this._cryptoProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoProvidersInput() {
    return this._cryptoProviders;
  }

  // key_spec - computed: true, optional: true, required: false
  private _keySpec?: string; 
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }
  public set keySpec(value: string) {
    this._keySpec = value;
  }
  public resetKeySpec() {
    this._keySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec;
  }

  // minimal_key_length - computed: true, optional: true, required: false
  private _minimalKeyLength?: number; 
  public get minimalKeyLength() {
    return this.getNumberAttribute('minimal_key_length');
  }
  public set minimalKeyLength(value: number) {
    this._minimalKeyLength = value;
  }
  public resetMinimalKeyLength() {
    this._minimalKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalKeyLengthInput() {
    return this._minimalKeyLength;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#client_version PcaconnectoradTemplate#client_version}
  */
  readonly clientVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#exportable_key PcaconnectoradTemplate#exportable_key}
  */
  readonly exportableKey?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#strong_key_protection_required PcaconnectoradTemplate#strong_key_protection_required}
  */
  readonly strongKeyProtectionRequired?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_version: cdktn.stringToTerraform(struct!.clientVersion),
    exportable_key: cdktn.booleanToTerraform(struct!.exportableKey),
    strong_key_protection_required: cdktn.booleanToTerraform(struct!.strongKeyProtectionRequired),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_version: {
      value: cdktn.stringToHclTerraform(struct!.clientVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exportable_key: {
      value: cdktn.booleanToHclTerraform(struct!.exportableKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strong_key_protection_required: {
      value: cdktn.booleanToHclTerraform(struct!.strongKeyProtectionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientVersion = this._clientVersion;
    }
    if (this._exportableKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportableKey = this._exportableKey;
    }
    if (this._strongKeyProtectionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.strongKeyProtectionRequired = this._strongKeyProtectionRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientVersion = undefined;
      this._exportableKey = undefined;
      this._strongKeyProtectionRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientVersion = value.clientVersion;
      this._exportableKey = value.exportableKey;
      this._strongKeyProtectionRequired = value.strongKeyProtectionRequired;
    }
  }

  // client_version - computed: true, optional: true, required: false
  private _clientVersion?: string; 
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }
  public set clientVersion(value: string) {
    this._clientVersion = value;
  }
  public resetClientVersion() {
    this._clientVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVersionInput() {
    return this._clientVersion;
  }

  // exportable_key - computed: true, optional: true, required: false
  private _exportableKey?: boolean | cdktn.IResolvable; 
  public get exportableKey() {
    return this.getBooleanAttribute('exportable_key');
  }
  public set exportableKey(value: boolean | cdktn.IResolvable) {
    this._exportableKey = value;
  }
  public resetExportableKey() {
    this._exportableKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableKeyInput() {
    return this._exportableKey;
  }

  // strong_key_protection_required - computed: true, optional: true, required: false
  private _strongKeyProtectionRequired?: boolean | cdktn.IResolvable; 
  public get strongKeyProtectionRequired() {
    return this.getBooleanAttribute('strong_key_protection_required');
  }
  public set strongKeyProtectionRequired(value: boolean | cdktn.IResolvable) {
    this._strongKeyProtectionRequired = value;
  }
  public resetStrongKeyProtectionRequired() {
    this._strongKeyProtectionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongKeyProtectionRequiredInput() {
    return this._strongKeyProtectionRequired;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_common_name PcaconnectoradTemplate#require_common_name}
  */
  readonly requireCommonName?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_directory_path PcaconnectoradTemplate#require_directory_path}
  */
  readonly requireDirectoryPath?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_dns_as_cn PcaconnectoradTemplate#require_dns_as_cn}
  */
  readonly requireDnsAsCn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_email PcaconnectoradTemplate#require_email}
  */
  readonly requireEmail?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_directory_guid PcaconnectoradTemplate#san_require_directory_guid}
  */
  readonly sanRequireDirectoryGuid?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_dns PcaconnectoradTemplate#san_require_dns}
  */
  readonly sanRequireDns?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_domain_dns PcaconnectoradTemplate#san_require_domain_dns}
  */
  readonly sanRequireDomainDns?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_email PcaconnectoradTemplate#san_require_email}
  */
  readonly sanRequireEmail?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_spn PcaconnectoradTemplate#san_require_spn}
  */
  readonly sanRequireSpn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_upn PcaconnectoradTemplate#san_require_upn}
  */
  readonly sanRequireUpn?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    require_common_name: cdktn.booleanToTerraform(struct!.requireCommonName),
    require_directory_path: cdktn.booleanToTerraform(struct!.requireDirectoryPath),
    require_dns_as_cn: cdktn.booleanToTerraform(struct!.requireDnsAsCn),
    require_email: cdktn.booleanToTerraform(struct!.requireEmail),
    san_require_directory_guid: cdktn.booleanToTerraform(struct!.sanRequireDirectoryGuid),
    san_require_dns: cdktn.booleanToTerraform(struct!.sanRequireDns),
    san_require_domain_dns: cdktn.booleanToTerraform(struct!.sanRequireDomainDns),
    san_require_email: cdktn.booleanToTerraform(struct!.sanRequireEmail),
    san_require_spn: cdktn.booleanToTerraform(struct!.sanRequireSpn),
    san_require_upn: cdktn.booleanToTerraform(struct!.sanRequireUpn),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    require_common_name: {
      value: cdktn.booleanToHclTerraform(struct!.requireCommonName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_directory_path: {
      value: cdktn.booleanToHclTerraform(struct!.requireDirectoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_dns_as_cn: {
      value: cdktn.booleanToHclTerraform(struct!.requireDnsAsCn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_email: {
      value: cdktn.booleanToHclTerraform(struct!.requireEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_directory_guid: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireDirectoryGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_dns: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_domain_dns: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireDomainDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_email: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_spn: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireSpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_upn: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireUpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireCommonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCommonName = this._requireCommonName;
    }
    if (this._requireDirectoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireDirectoryPath = this._requireDirectoryPath;
    }
    if (this._requireDnsAsCn !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireDnsAsCn = this._requireDnsAsCn;
    }
    if (this._requireEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireEmail = this._requireEmail;
    }
    if (this._sanRequireDirectoryGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireDirectoryGuid = this._sanRequireDirectoryGuid;
    }
    if (this._sanRequireDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireDns = this._sanRequireDns;
    }
    if (this._sanRequireDomainDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireDomainDns = this._sanRequireDomainDns;
    }
    if (this._sanRequireEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireEmail = this._sanRequireEmail;
    }
    if (this._sanRequireSpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireSpn = this._sanRequireSpn;
    }
    if (this._sanRequireUpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireUpn = this._sanRequireUpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requireCommonName = undefined;
      this._requireDirectoryPath = undefined;
      this._requireDnsAsCn = undefined;
      this._requireEmail = undefined;
      this._sanRequireDirectoryGuid = undefined;
      this._sanRequireDns = undefined;
      this._sanRequireDomainDns = undefined;
      this._sanRequireEmail = undefined;
      this._sanRequireSpn = undefined;
      this._sanRequireUpn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requireCommonName = value.requireCommonName;
      this._requireDirectoryPath = value.requireDirectoryPath;
      this._requireDnsAsCn = value.requireDnsAsCn;
      this._requireEmail = value.requireEmail;
      this._sanRequireDirectoryGuid = value.sanRequireDirectoryGuid;
      this._sanRequireDns = value.sanRequireDns;
      this._sanRequireDomainDns = value.sanRequireDomainDns;
      this._sanRequireEmail = value.sanRequireEmail;
      this._sanRequireSpn = value.sanRequireSpn;
      this._sanRequireUpn = value.sanRequireUpn;
    }
  }

  // require_common_name - computed: true, optional: true, required: false
  private _requireCommonName?: boolean | cdktn.IResolvable; 
  public get requireCommonName() {
    return this.getBooleanAttribute('require_common_name');
  }
  public set requireCommonName(value: boolean | cdktn.IResolvable) {
    this._requireCommonName = value;
  }
  public resetRequireCommonName() {
    this._requireCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCommonNameInput() {
    return this._requireCommonName;
  }

  // require_directory_path - computed: true, optional: true, required: false
  private _requireDirectoryPath?: boolean | cdktn.IResolvable; 
  public get requireDirectoryPath() {
    return this.getBooleanAttribute('require_directory_path');
  }
  public set requireDirectoryPath(value: boolean | cdktn.IResolvable) {
    this._requireDirectoryPath = value;
  }
  public resetRequireDirectoryPath() {
    this._requireDirectoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireDirectoryPathInput() {
    return this._requireDirectoryPath;
  }

  // require_dns_as_cn - computed: true, optional: true, required: false
  private _requireDnsAsCn?: boolean | cdktn.IResolvable; 
  public get requireDnsAsCn() {
    return this.getBooleanAttribute('require_dns_as_cn');
  }
  public set requireDnsAsCn(value: boolean | cdktn.IResolvable) {
    this._requireDnsAsCn = value;
  }
  public resetRequireDnsAsCn() {
    this._requireDnsAsCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireDnsAsCnInput() {
    return this._requireDnsAsCn;
  }

  // require_email - computed: true, optional: true, required: false
  private _requireEmail?: boolean | cdktn.IResolvable; 
  public get requireEmail() {
    return this.getBooleanAttribute('require_email');
  }
  public set requireEmail(value: boolean | cdktn.IResolvable) {
    this._requireEmail = value;
  }
  public resetRequireEmail() {
    this._requireEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireEmailInput() {
    return this._requireEmail;
  }

  // san_require_directory_guid - computed: true, optional: true, required: false
  private _sanRequireDirectoryGuid?: boolean | cdktn.IResolvable; 
  public get sanRequireDirectoryGuid() {
    return this.getBooleanAttribute('san_require_directory_guid');
  }
  public set sanRequireDirectoryGuid(value: boolean | cdktn.IResolvable) {
    this._sanRequireDirectoryGuid = value;
  }
  public resetSanRequireDirectoryGuid() {
    this._sanRequireDirectoryGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireDirectoryGuidInput() {
    return this._sanRequireDirectoryGuid;
  }

  // san_require_dns - computed: true, optional: true, required: false
  private _sanRequireDns?: boolean | cdktn.IResolvable; 
  public get sanRequireDns() {
    return this.getBooleanAttribute('san_require_dns');
  }
  public set sanRequireDns(value: boolean | cdktn.IResolvable) {
    this._sanRequireDns = value;
  }
  public resetSanRequireDns() {
    this._sanRequireDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireDnsInput() {
    return this._sanRequireDns;
  }

  // san_require_domain_dns - computed: true, optional: true, required: false
  private _sanRequireDomainDns?: boolean | cdktn.IResolvable; 
  public get sanRequireDomainDns() {
    return this.getBooleanAttribute('san_require_domain_dns');
  }
  public set sanRequireDomainDns(value: boolean | cdktn.IResolvable) {
    this._sanRequireDomainDns = value;
  }
  public resetSanRequireDomainDns() {
    this._sanRequireDomainDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireDomainDnsInput() {
    return this._sanRequireDomainDns;
  }

  // san_require_email - computed: true, optional: true, required: false
  private _sanRequireEmail?: boolean | cdktn.IResolvable; 
  public get sanRequireEmail() {
    return this.getBooleanAttribute('san_require_email');
  }
  public set sanRequireEmail(value: boolean | cdktn.IResolvable) {
    this._sanRequireEmail = value;
  }
  public resetSanRequireEmail() {
    this._sanRequireEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireEmailInput() {
    return this._sanRequireEmail;
  }

  // san_require_spn - computed: true, optional: true, required: false
  private _sanRequireSpn?: boolean | cdktn.IResolvable; 
  public get sanRequireSpn() {
    return this.getBooleanAttribute('san_require_spn');
  }
  public set sanRequireSpn(value: boolean | cdktn.IResolvable) {
    this._sanRequireSpn = value;
  }
  public resetSanRequireSpn() {
    this._sanRequireSpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireSpnInput() {
    return this._sanRequireSpn;
  }

  // san_require_upn - computed: true, optional: true, required: false
  private _sanRequireUpn?: boolean | cdktn.IResolvable; 
  public get sanRequireUpn() {
    return this.getBooleanAttribute('san_require_upn');
  }
  public set sanRequireUpn(value: boolean | cdktn.IResolvable) {
    this._sanRequireUpn = value;
  }
  public resetSanRequireUpn() {
    this._sanRequireUpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireUpnInput() {
    return this._sanRequireUpn;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#certificate_validity PcaconnectoradTemplate#certificate_validity}
  */
  readonly certificateValidity?: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#enrollment_flags PcaconnectoradTemplate#enrollment_flags}
  */
  readonly enrollmentFlags?: PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#extensions PcaconnectoradTemplate#extensions}
  */
  readonly extensions?: PcaconnectoradTemplateDefinitionTemplateV2Extensions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#general_flags PcaconnectoradTemplate#general_flags}
  */
  readonly generalFlags?: PcaconnectoradTemplateDefinitionTemplateV2GeneralFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#private_key_attributes PcaconnectoradTemplate#private_key_attributes}
  */
  readonly privateKeyAttributes?: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#private_key_flags PcaconnectoradTemplate#private_key_flags}
  */
  readonly privateKeyFlags?: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#subject_name_flags PcaconnectoradTemplate#subject_name_flags}
  */
  readonly subjectNameFlags?: PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#superseded_templates PcaconnectoradTemplate#superseded_templates}
  */
  readonly supersededTemplates?: string[];
}

export function pcaconnectoradTemplateDefinitionTemplateV2ToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_validity: pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityToTerraform(struct!.certificateValidity),
    enrollment_flags: pcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsToTerraform(struct!.enrollmentFlags),
    extensions: pcaconnectoradTemplateDefinitionTemplateV2ExtensionsToTerraform(struct!.extensions),
    general_flags: pcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsToTerraform(struct!.generalFlags),
    private_key_attributes: pcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesToTerraform(struct!.privateKeyAttributes),
    private_key_flags: pcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsToTerraform(struct!.privateKeyFlags),
    subject_name_flags: pcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsToTerraform(struct!.subjectNameFlags),
    superseded_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supersededTemplates),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV2ToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_validity: {
      value: pcaconnectoradTemplateDefinitionTemplateV2CertificateValidityToHclTerraform(struct!.certificateValidity),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2CertificateValidity",
    },
    enrollment_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsToHclTerraform(struct!.enrollmentFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags",
    },
    extensions: {
      value: pcaconnectoradTemplateDefinitionTemplateV2ExtensionsToHclTerraform(struct!.extensions),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2Extensions",
    },
    general_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsToHclTerraform(struct!.generalFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2GeneralFlags",
    },
    private_key_attributes: {
      value: pcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesToHclTerraform(struct!.privateKeyAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes",
    },
    private_key_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsToHclTerraform(struct!.privateKeyFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags",
    },
    subject_name_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsToHclTerraform(struct!.subjectNameFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags",
    },
    superseded_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supersededTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateValidity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateValidity = this._certificateValidity?.internalValue;
    }
    if (this._enrollmentFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentFlags = this._enrollmentFlags?.internalValue;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._generalFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generalFlags = this._generalFlags?.internalValue;
    }
    if (this._privateKeyAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyAttributes = this._privateKeyAttributes?.internalValue;
    }
    if (this._privateKeyFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFlags = this._privateKeyFlags?.internalValue;
    }
    if (this._subjectNameFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectNameFlags = this._subjectNameFlags?.internalValue;
    }
    if (this._supersededTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.supersededTemplates = this._supersededTemplates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateValidity.internalValue = undefined;
      this._enrollmentFlags.internalValue = undefined;
      this._extensions.internalValue = undefined;
      this._generalFlags.internalValue = undefined;
      this._privateKeyAttributes.internalValue = undefined;
      this._privateKeyFlags.internalValue = undefined;
      this._subjectNameFlags.internalValue = undefined;
      this._supersededTemplates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateValidity.internalValue = value.certificateValidity;
      this._enrollmentFlags.internalValue = value.enrollmentFlags;
      this._extensions.internalValue = value.extensions;
      this._generalFlags.internalValue = value.generalFlags;
      this._privateKeyAttributes.internalValue = value.privateKeyAttributes;
      this._privateKeyFlags.internalValue = value.privateKeyFlags;
      this._subjectNameFlags.internalValue = value.subjectNameFlags;
      this._supersededTemplates = value.supersededTemplates;
    }
  }

  // certificate_validity - computed: true, optional: true, required: false
  private _certificateValidity = new PcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference(this, "certificate_validity");
  public get certificateValidity() {
    return this._certificateValidity;
  }
  public putCertificateValidity(value: PcaconnectoradTemplateDefinitionTemplateV2CertificateValidity) {
    this._certificateValidity.internalValue = value;
  }
  public resetCertificateValidity() {
    this._certificateValidity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidityInput() {
    return this._certificateValidity.internalValue;
  }

  // enrollment_flags - computed: true, optional: true, required: false
  private _enrollmentFlags = new PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference(this, "enrollment_flags");
  public get enrollmentFlags() {
    return this._enrollmentFlags;
  }
  public putEnrollmentFlags(value: PcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags) {
    this._enrollmentFlags.internalValue = value;
  }
  public resetEnrollmentFlags() {
    this._enrollmentFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentFlagsInput() {
    return this._enrollmentFlags.internalValue;
  }

  // extensions - computed: true, optional: true, required: false
  private _extensions = new PcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: PcaconnectoradTemplateDefinitionTemplateV2Extensions) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // general_flags - computed: true, optional: true, required: false
  private _generalFlags = new PcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference(this, "general_flags");
  public get generalFlags() {
    return this._generalFlags;
  }
  public putGeneralFlags(value: PcaconnectoradTemplateDefinitionTemplateV2GeneralFlags) {
    this._generalFlags.internalValue = value;
  }
  public resetGeneralFlags() {
    this._generalFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalFlagsInput() {
    return this._generalFlags.internalValue;
  }

  // private_key_attributes - computed: true, optional: true, required: false
  private _privateKeyAttributes = new PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference(this, "private_key_attributes");
  public get privateKeyAttributes() {
    return this._privateKeyAttributes;
  }
  public putPrivateKeyAttributes(value: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes) {
    this._privateKeyAttributes.internalValue = value;
  }
  public resetPrivateKeyAttributes() {
    this._privateKeyAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyAttributesInput() {
    return this._privateKeyAttributes.internalValue;
  }

  // private_key_flags - computed: true, optional: true, required: false
  private _privateKeyFlags = new PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference(this, "private_key_flags");
  public get privateKeyFlags() {
    return this._privateKeyFlags;
  }
  public putPrivateKeyFlags(value: PcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags) {
    this._privateKeyFlags.internalValue = value;
  }
  public resetPrivateKeyFlags() {
    this._privateKeyFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFlagsInput() {
    return this._privateKeyFlags.internalValue;
  }

  // subject_name_flags - computed: true, optional: true, required: false
  private _subjectNameFlags = new PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference(this, "subject_name_flags");
  public get subjectNameFlags() {
    return this._subjectNameFlags;
  }
  public putSubjectNameFlags(value: PcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags) {
    this._subjectNameFlags.internalValue = value;
  }
  public resetSubjectNameFlags() {
    this._subjectNameFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameFlagsInput() {
    return this._subjectNameFlags.internalValue;
  }

  // superseded_templates - computed: true, optional: true, required: false
  private _supersededTemplates?: string[]; 
  public get supersededTemplates() {
    return this.getListAttribute('superseded_templates');
  }
  public set supersededTemplates(value: string[]) {
    this._supersededTemplates = value;
  }
  public resetSupersededTemplates() {
    this._supersededTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supersededTemplatesInput() {
    return this._supersededTemplates;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period PcaconnectoradTemplate#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period_type PcaconnectoradTemplate#period_type}
  */
  readonly periodType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    period: cdktn.numberToTerraform(struct!.period),
    period_type: cdktn.stringToTerraform(struct!.periodType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_type: {
      value: cdktn.stringToHclTerraform(struct!.periodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._period = undefined;
      this._periodType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._period = value.period;
      this._periodType = value.periodType;
    }
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_type - computed: true, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period PcaconnectoradTemplate#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period_type PcaconnectoradTemplate#period_type}
  */
  readonly periodType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    period: cdktn.numberToTerraform(struct!.period),
    period_type: cdktn.stringToTerraform(struct!.periodType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_type: {
      value: cdktn.stringToHclTerraform(struct!.periodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._period = undefined;
      this._periodType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._period = value.period;
      this._periodType = value.periodType;
    }
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_type - computed: true, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3CertificateValidity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#renewal_period PcaconnectoradTemplate#renewal_period}
  */
  readonly renewalPeriod?: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#validity_period PcaconnectoradTemplate#validity_period}
  */
  readonly validityPeriod?: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod;
}

export function pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    renewal_period: pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodToTerraform(struct!.renewalPeriod),
    validity_period: pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodToTerraform(struct!.validityPeriod),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    renewal_period: {
      value: pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodToHclTerraform(struct!.renewalPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod",
    },
    validity_period: {
      value: pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodToHclTerraform(struct!.validityPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3CertificateValidity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._renewalPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalPeriod = this._renewalPeriod?.internalValue;
    }
    if (this._validityPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validityPeriod = this._validityPeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._renewalPeriod.internalValue = undefined;
      this._validityPeriod.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._renewalPeriod.internalValue = value.renewalPeriod;
      this._validityPeriod.internalValue = value.validityPeriod;
    }
  }

  // renewal_period - computed: true, optional: true, required: false
  private _renewalPeriod = new PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference(this, "renewal_period");
  public get renewalPeriod() {
    return this._renewalPeriod;
  }
  public putRenewalPeriod(value: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod) {
    this._renewalPeriod.internalValue = value;
  }
  public resetRenewalPeriod() {
    this._renewalPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPeriodInput() {
    return this._renewalPeriod.internalValue;
  }

  // validity_period - computed: true, optional: true, required: false
  private _validityPeriod = new PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference(this, "validity_period");
  public get validityPeriod() {
    return this._validityPeriod;
  }
  public putValidityPeriod(value: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod) {
    this._validityPeriod.internalValue = value;
  }
  public resetValidityPeriod() {
    this._validityPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#enable_key_reuse_on_nt_token_keyset_storage_full PcaconnectoradTemplate#enable_key_reuse_on_nt_token_keyset_storage_full}
  */
  readonly enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#include_symmetric_algorithms PcaconnectoradTemplate#include_symmetric_algorithms}
  */
  readonly includeSymmetricAlgorithms?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#no_security_extension PcaconnectoradTemplate#no_security_extension}
  */
  readonly noSecurityExtension?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#remove_invalid_certificate_from_personal_store PcaconnectoradTemplate#remove_invalid_certificate_from_personal_store}
  */
  readonly removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#user_interaction_required PcaconnectoradTemplate#user_interaction_required}
  */
  readonly userInteractionRequired?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_key_reuse_on_nt_token_keyset_storage_full: cdktn.booleanToTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
    include_symmetric_algorithms: cdktn.booleanToTerraform(struct!.includeSymmetricAlgorithms),
    no_security_extension: cdktn.booleanToTerraform(struct!.noSecurityExtension),
    remove_invalid_certificate_from_personal_store: cdktn.booleanToTerraform(struct!.removeInvalidCertificateFromPersonalStore),
    user_interaction_required: cdktn.booleanToTerraform(struct!.userInteractionRequired),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_key_reuse_on_nt_token_keyset_storage_full: {
      value: cdktn.booleanToHclTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_symmetric_algorithms: {
      value: cdktn.booleanToHclTerraform(struct!.includeSymmetricAlgorithms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_security_extension: {
      value: cdktn.booleanToHclTerraform(struct!.noSecurityExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_invalid_certificate_from_personal_store: {
      value: cdktn.booleanToHclTerraform(struct!.removeInvalidCertificateFromPersonalStore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_interaction_required: {
      value: cdktn.booleanToHclTerraform(struct!.userInteractionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableKeyReuseOnNtTokenKeysetStorageFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKeyReuseOnNtTokenKeysetStorageFull = this._enableKeyReuseOnNtTokenKeysetStorageFull;
    }
    if (this._includeSymmetricAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSymmetricAlgorithms = this._includeSymmetricAlgorithms;
    }
    if (this._noSecurityExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSecurityExtension = this._noSecurityExtension;
    }
    if (this._removeInvalidCertificateFromPersonalStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeInvalidCertificateFromPersonalStore = this._removeInvalidCertificateFromPersonalStore;
    }
    if (this._userInteractionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInteractionRequired = this._userInteractionRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
      this._includeSymmetricAlgorithms = undefined;
      this._noSecurityExtension = undefined;
      this._removeInvalidCertificateFromPersonalStore = undefined;
      this._userInteractionRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableKeyReuseOnNtTokenKeysetStorageFull = value.enableKeyReuseOnNtTokenKeysetStorageFull;
      this._includeSymmetricAlgorithms = value.includeSymmetricAlgorithms;
      this._noSecurityExtension = value.noSecurityExtension;
      this._removeInvalidCertificateFromPersonalStore = value.removeInvalidCertificateFromPersonalStore;
      this._userInteractionRequired = value.userInteractionRequired;
    }
  }

  // enable_key_reuse_on_nt_token_keyset_storage_full - computed: true, optional: true, required: false
  private _enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable; 
  public get enableKeyReuseOnNtTokenKeysetStorageFull() {
    return this.getBooleanAttribute('enable_key_reuse_on_nt_token_keyset_storage_full');
  }
  public set enableKeyReuseOnNtTokenKeysetStorageFull(value: boolean | cdktn.IResolvable) {
    this._enableKeyReuseOnNtTokenKeysetStorageFull = value;
  }
  public resetEnableKeyReuseOnNtTokenKeysetStorageFull() {
    this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyReuseOnNtTokenKeysetStorageFullInput() {
    return this._enableKeyReuseOnNtTokenKeysetStorageFull;
  }

  // include_symmetric_algorithms - computed: true, optional: true, required: false
  private _includeSymmetricAlgorithms?: boolean | cdktn.IResolvable; 
  public get includeSymmetricAlgorithms() {
    return this.getBooleanAttribute('include_symmetric_algorithms');
  }
  public set includeSymmetricAlgorithms(value: boolean | cdktn.IResolvable) {
    this._includeSymmetricAlgorithms = value;
  }
  public resetIncludeSymmetricAlgorithms() {
    this._includeSymmetricAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSymmetricAlgorithmsInput() {
    return this._includeSymmetricAlgorithms;
  }

  // no_security_extension - computed: true, optional: true, required: false
  private _noSecurityExtension?: boolean | cdktn.IResolvable; 
  public get noSecurityExtension() {
    return this.getBooleanAttribute('no_security_extension');
  }
  public set noSecurityExtension(value: boolean | cdktn.IResolvable) {
    this._noSecurityExtension = value;
  }
  public resetNoSecurityExtension() {
    this._noSecurityExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSecurityExtensionInput() {
    return this._noSecurityExtension;
  }

  // remove_invalid_certificate_from_personal_store - computed: true, optional: true, required: false
  private _removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable; 
  public get removeInvalidCertificateFromPersonalStore() {
    return this.getBooleanAttribute('remove_invalid_certificate_from_personal_store');
  }
  public set removeInvalidCertificateFromPersonalStore(value: boolean | cdktn.IResolvable) {
    this._removeInvalidCertificateFromPersonalStore = value;
  }
  public resetRemoveInvalidCertificateFromPersonalStore() {
    this._removeInvalidCertificateFromPersonalStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInvalidCertificateFromPersonalStoreInput() {
    return this._removeInvalidCertificateFromPersonalStore;
  }

  // user_interaction_required - computed: true, optional: true, required: false
  private _userInteractionRequired?: boolean | cdktn.IResolvable; 
  public get userInteractionRequired() {
    return this.getBooleanAttribute('user_interaction_required');
  }
  public set userInteractionRequired(value: boolean | cdktn.IResolvable) {
    this._userInteractionRequired = value;
  }
  public resetUserInteractionRequired() {
    this._userInteractionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInteractionRequiredInput() {
    return this._userInteractionRequired;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#policy_object_identifier PcaconnectoradTemplate#policy_object_identifier}
  */
  readonly policyObjectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#policy_type PcaconnectoradTemplate#policy_type}
  */
  readonly policyType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_object_identifier: cdktn.stringToTerraform(struct!.policyObjectIdentifier),
    policy_type: cdktn.stringToTerraform(struct!.policyType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_object_identifier: {
      value: cdktn.stringToHclTerraform(struct!.policyObjectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktn.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyObjectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyObjectIdentifier = this._policyObjectIdentifier;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyObjectIdentifier = undefined;
      this._policyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyObjectIdentifier = value.policyObjectIdentifier;
      this._policyType = value.policyType;
    }
  }

  // policy_object_identifier - computed: true, optional: true, required: false
  private _policyObjectIdentifier?: string; 
  public get policyObjectIdentifier() {
    return this.getStringAttribute('policy_object_identifier');
  }
  public set policyObjectIdentifier(value: string) {
    this._policyObjectIdentifier = value;
  }
  public resetPolicyObjectIdentifier() {
    this._policyObjectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyObjectIdentifierInput() {
    return this._policyObjectIdentifier;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}

export class PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList extends cdktn.ComplexList {
  public internalValue? : PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies[] | cdktn.IResolvable

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
  public get(index: number): PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference {
    return new PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#critical PcaconnectoradTemplate#critical}
  */
  readonly critical?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#policies PcaconnectoradTemplate#policies}
  */
  readonly policies?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies[] | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    critical: cdktn.booleanToTerraform(struct!.critical),
    policies: cdktn.listMapper(pcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesToTerraform, false)(struct!.policies),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    critical: {
      value: cdktn.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policies: {
      value: cdktn.listMapperHcl(pcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._policies.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._policies.internalValue = value.policies;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: boolean | cdktn.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktn.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // policies - computed: true, optional: true, required: false
  private _policies = new PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies[] | cdktn.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#data_encipherment PcaconnectoradTemplate#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#digital_signature PcaconnectoradTemplate#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_agreement PcaconnectoradTemplate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_encipherment PcaconnectoradTemplate#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#non_repudiation PcaconnectoradTemplate#non_repudiation}
  */
  readonly nonRepudiation?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_encipherment: cdktn.booleanToTerraform(struct!.dataEncipherment),
    digital_signature: cdktn.booleanToTerraform(struct!.digitalSignature),
    key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
    key_encipherment: cdktn.booleanToTerraform(struct!.keyEncipherment),
    non_repudiation: cdktn.booleanToTerraform(struct!.nonRepudiation),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_encipherment: {
      value: cdktn.booleanToHclTerraform(struct!.dataEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    digital_signature: {
      value: cdktn.booleanToHclTerraform(struct!.digitalSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_agreement: {
      value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_encipherment: {
      value: cdktn.booleanToHclTerraform(struct!.keyEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_repudiation: {
      value: cdktn.booleanToHclTerraform(struct!.nonRepudiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncipherment = this._keyEncipherment;
    }
    if (this._nonRepudiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonRepudiation = this._nonRepudiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataEncipherment = undefined;
      this._digitalSignature = undefined;
      this._keyAgreement = undefined;
      this._keyEncipherment = undefined;
      this._nonRepudiation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataEncipherment = value.dataEncipherment;
      this._digitalSignature = value.digitalSignature;
      this._keyAgreement = value.keyAgreement;
      this._keyEncipherment = value.keyEncipherment;
      this._nonRepudiation = value.nonRepudiation;
    }
  }

  // data_encipherment - computed: true, optional: true, required: false
  private _dataEncipherment?: boolean | cdktn.IResolvable; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }
  public set dataEncipherment(value: boolean | cdktn.IResolvable) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment;
  }

  // digital_signature - computed: true, optional: true, required: false
  private _digitalSignature?: boolean | cdktn.IResolvable; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }
  public set digitalSignature(value: boolean | cdktn.IResolvable) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature;
  }

  // key_agreement - computed: true, optional: true, required: false
  private _keyAgreement?: boolean | cdktn.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktn.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // key_encipherment - computed: true, optional: true, required: false
  private _keyEncipherment?: boolean | cdktn.IResolvable; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
  public set keyEncipherment(value: boolean | cdktn.IResolvable) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment;
  }

  // non_repudiation - computed: true, optional: true, required: false
  private _nonRepudiation?: boolean | cdktn.IResolvable; 
  public get nonRepudiation() {
    return this.getBooleanAttribute('non_repudiation');
  }
  public set nonRepudiation(value: boolean | cdktn.IResolvable) {
    this._nonRepudiation = value;
  }
  public resetNonRepudiation() {
    this._nonRepudiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonRepudiationInput() {
    return this._nonRepudiation;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#critical PcaconnectoradTemplate#critical}
  */
  readonly critical?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#usage_flags PcaconnectoradTemplate#usage_flags}
  */
  readonly usageFlags?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags;
}

export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    critical: cdktn.booleanToTerraform(struct!.critical),
    usage_flags: pcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsToTerraform(struct!.usageFlags),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    critical: {
      value: cdktn.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usage_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsToHclTerraform(struct!.usageFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._usageFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageFlags = this._usageFlags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._usageFlags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._usageFlags.internalValue = value.usageFlags;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: boolean | cdktn.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktn.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // usage_flags - computed: true, optional: true, required: false
  private _usageFlags = new PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference(this, "usage_flags");
  public get usageFlags() {
    return this._usageFlags;
  }
  public putUsageFlags(value: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags) {
    this._usageFlags.internalValue = value;
  }
  public resetUsageFlags() {
    this._usageFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageFlagsInput() {
    return this._usageFlags.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3Extensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#application_policies PcaconnectoradTemplate#application_policies}
  */
  readonly applicationPolicies?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_usage PcaconnectoradTemplate#key_usage}
  */
  readonly keyUsage?: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage;
}

export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3Extensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_policies: pcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesToTerraform(struct!.applicationPolicies),
    key_usage: pcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageToTerraform(struct!.keyUsage),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3ExtensionsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3Extensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_policies: {
      value: pcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesToHclTerraform(struct!.applicationPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies",
    },
    key_usage: {
      value: pcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageToHclTerraform(struct!.keyUsage),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3Extensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationPolicies = this._applicationPolicies?.internalValue;
    }
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3Extensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationPolicies.internalValue = undefined;
      this._keyUsage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationPolicies.internalValue = value.applicationPolicies;
      this._keyUsage.internalValue = value.keyUsage;
    }
  }

  // application_policies - computed: true, optional: true, required: false
  private _applicationPolicies = new PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference(this, "application_policies");
  public get applicationPolicies() {
    return this._applicationPolicies;
  }
  public putApplicationPolicies(value: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies) {
    this._applicationPolicies.internalValue = value;
  }
  public resetApplicationPolicies() {
    this._applicationPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPoliciesInput() {
    return this._applicationPolicies.internalValue;
  }

  // key_usage - computed: true, optional: true, required: false
  private _keyUsage = new PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: PcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  public resetKeyUsage() {
    this._keyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3GeneralFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#auto_enrollment PcaconnectoradTemplate#auto_enrollment}
  */
  readonly autoEnrollment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#machine_type PcaconnectoradTemplate#machine_type}
  */
  readonly machineType?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3GeneralFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_enrollment: cdktn.booleanToTerraform(struct!.autoEnrollment),
    machine_type: cdktn.booleanToTerraform(struct!.machineType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3GeneralFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_enrollment: {
      value: cdktn.booleanToHclTerraform(struct!.autoEnrollment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_type: {
      value: cdktn.booleanToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3GeneralFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnrollment !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnrollment = this._autoEnrollment;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3GeneralFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoEnrollment = undefined;
      this._machineType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoEnrollment = value.autoEnrollment;
      this._machineType = value.machineType;
    }
  }

  // auto_enrollment - computed: true, optional: true, required: false
  private _autoEnrollment?: boolean | cdktn.IResolvable; 
  public get autoEnrollment() {
    return this.getBooleanAttribute('auto_enrollment');
  }
  public set autoEnrollment(value: boolean | cdktn.IResolvable) {
    this._autoEnrollment = value;
  }
  public resetAutoEnrollment() {
    this._autoEnrollment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnrollmentInput() {
    return this._autoEnrollment;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: boolean | cdktn.IResolvable; 
  public get machineType() {
    return this.getBooleanAttribute('machine_type');
  }
  public set machineType(value: boolean | cdktn.IResolvable) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#decrypt PcaconnectoradTemplate#decrypt}
  */
  readonly decrypt?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_agreement PcaconnectoradTemplate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#sign PcaconnectoradTemplate#sign}
  */
  readonly sign?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decrypt: cdktn.booleanToTerraform(struct!.decrypt),
    key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
    sign: cdktn.booleanToTerraform(struct!.sign),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decrypt: {
      value: cdktn.booleanToHclTerraform(struct!.decrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_agreement: {
      value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sign: {
      value: cdktn.booleanToHclTerraform(struct!.sign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.decrypt = this._decrypt;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._sign !== undefined) {
      hasAnyValues = true;
      internalValueResult.sign = this._sign;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decrypt = undefined;
      this._keyAgreement = undefined;
      this._sign = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decrypt = value.decrypt;
      this._keyAgreement = value.keyAgreement;
      this._sign = value.sign;
    }
  }

  // decrypt - computed: true, optional: true, required: false
  private _decrypt?: boolean | cdktn.IResolvable; 
  public get decrypt() {
    return this.getBooleanAttribute('decrypt');
  }
  public set decrypt(value: boolean | cdktn.IResolvable) {
    this._decrypt = value;
  }
  public resetDecrypt() {
    this._decrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptInput() {
    return this._decrypt;
  }

  // key_agreement - computed: true, optional: true, required: false
  private _keyAgreement?: boolean | cdktn.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktn.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // sign - computed: true, optional: true, required: false
  private _sign?: boolean | cdktn.IResolvable; 
  public get sign() {
    return this.getBooleanAttribute('sign');
  }
  public set sign(value: boolean | cdktn.IResolvable) {
    this._sign = value;
  }
  public resetSign() {
    this._sign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInput() {
    return this._sign;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#property_flags PcaconnectoradTemplate#property_flags}
  */
  readonly propertyFlags?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#property_type PcaconnectoradTemplate#property_type}
  */
  readonly propertyType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_flags: pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToTerraform(struct!.propertyFlags),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToHclTerraform(struct!.propertyFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyFlags = this._propertyFlags?.internalValue;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._propertyFlags.internalValue = undefined;
      this._propertyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._propertyFlags.internalValue = value.propertyFlags;
      this._propertyType = value.propertyType;
    }
  }

  // property_flags - computed: true, optional: true, required: false
  private _propertyFlags = new PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference(this, "property_flags");
  public get propertyFlags() {
    return this._propertyFlags;
  }
  public putPropertyFlags(value: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags) {
    this._propertyFlags.internalValue = value;
  }
  public resetPropertyFlags() {
    this._propertyFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyFlagsInput() {
    return this._propertyFlags.internalValue;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#algorithm PcaconnectoradTemplate#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#crypto_providers PcaconnectoradTemplate#crypto_providers}
  */
  readonly cryptoProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_spec PcaconnectoradTemplate#key_spec}
  */
  readonly keySpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_usage_property PcaconnectoradTemplate#key_usage_property}
  */
  readonly keyUsageProperty?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#minimal_key_length PcaconnectoradTemplate#minimal_key_length}
  */
  readonly minimalKeyLength?: number;
}

export function pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    crypto_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cryptoProviders),
    key_spec: cdktn.stringToTerraform(struct!.keySpec),
    key_usage_property: pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyToTerraform(struct!.keyUsageProperty),
    minimal_key_length: cdktn.numberToTerraform(struct!.minimalKeyLength),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_providers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cryptoProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_spec: {
      value: cdktn.stringToHclTerraform(struct!.keySpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_usage_property: {
      value: pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyToHclTerraform(struct!.keyUsageProperty),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty",
    },
    minimal_key_length: {
      value: cdktn.numberToHclTerraform(struct!.minimalKeyLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._cryptoProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoProviders = this._cryptoProviders;
    }
    if (this._keySpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySpec = this._keySpec;
    }
    if (this._keyUsageProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsageProperty = this._keyUsageProperty?.internalValue;
    }
    if (this._minimalKeyLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalKeyLength = this._minimalKeyLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._cryptoProviders = undefined;
      this._keySpec = undefined;
      this._keyUsageProperty.internalValue = undefined;
      this._minimalKeyLength = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._cryptoProviders = value.cryptoProviders;
      this._keySpec = value.keySpec;
      this._keyUsageProperty.internalValue = value.keyUsageProperty;
      this._minimalKeyLength = value.minimalKeyLength;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // crypto_providers - computed: true, optional: true, required: false
  private _cryptoProviders?: string[]; 
  public get cryptoProviders() {
    return this.getListAttribute('crypto_providers');
  }
  public set cryptoProviders(value: string[]) {
    this._cryptoProviders = value;
  }
  public resetCryptoProviders() {
    this._cryptoProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoProvidersInput() {
    return this._cryptoProviders;
  }

  // key_spec - computed: true, optional: true, required: false
  private _keySpec?: string; 
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }
  public set keySpec(value: string) {
    this._keySpec = value;
  }
  public resetKeySpec() {
    this._keySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec;
  }

  // key_usage_property - computed: true, optional: true, required: false
  private _keyUsageProperty = new PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference(this, "key_usage_property");
  public get keyUsageProperty() {
    return this._keyUsageProperty;
  }
  public putKeyUsageProperty(value: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty) {
    this._keyUsageProperty.internalValue = value;
  }
  public resetKeyUsageProperty() {
    this._keyUsageProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsagePropertyInput() {
    return this._keyUsageProperty.internalValue;
  }

  // minimal_key_length - computed: true, optional: true, required: false
  private _minimalKeyLength?: number; 
  public get minimalKeyLength() {
    return this.getNumberAttribute('minimal_key_length');
  }
  public set minimalKeyLength(value: number) {
    this._minimalKeyLength = value;
  }
  public resetMinimalKeyLength() {
    this._minimalKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalKeyLengthInput() {
    return this._minimalKeyLength;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#client_version PcaconnectoradTemplate#client_version}
  */
  readonly clientVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#exportable_key PcaconnectoradTemplate#exportable_key}
  */
  readonly exportableKey?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_alternate_signature_algorithm PcaconnectoradTemplate#require_alternate_signature_algorithm}
  */
  readonly requireAlternateSignatureAlgorithm?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#strong_key_protection_required PcaconnectoradTemplate#strong_key_protection_required}
  */
  readonly strongKeyProtectionRequired?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_version: cdktn.stringToTerraform(struct!.clientVersion),
    exportable_key: cdktn.booleanToTerraform(struct!.exportableKey),
    require_alternate_signature_algorithm: cdktn.booleanToTerraform(struct!.requireAlternateSignatureAlgorithm),
    strong_key_protection_required: cdktn.booleanToTerraform(struct!.strongKeyProtectionRequired),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_version: {
      value: cdktn.stringToHclTerraform(struct!.clientVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exportable_key: {
      value: cdktn.booleanToHclTerraform(struct!.exportableKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_alternate_signature_algorithm: {
      value: cdktn.booleanToHclTerraform(struct!.requireAlternateSignatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strong_key_protection_required: {
      value: cdktn.booleanToHclTerraform(struct!.strongKeyProtectionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientVersion = this._clientVersion;
    }
    if (this._exportableKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportableKey = this._exportableKey;
    }
    if (this._requireAlternateSignatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAlternateSignatureAlgorithm = this._requireAlternateSignatureAlgorithm;
    }
    if (this._strongKeyProtectionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.strongKeyProtectionRequired = this._strongKeyProtectionRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientVersion = undefined;
      this._exportableKey = undefined;
      this._requireAlternateSignatureAlgorithm = undefined;
      this._strongKeyProtectionRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientVersion = value.clientVersion;
      this._exportableKey = value.exportableKey;
      this._requireAlternateSignatureAlgorithm = value.requireAlternateSignatureAlgorithm;
      this._strongKeyProtectionRequired = value.strongKeyProtectionRequired;
    }
  }

  // client_version - computed: true, optional: true, required: false
  private _clientVersion?: string; 
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }
  public set clientVersion(value: string) {
    this._clientVersion = value;
  }
  public resetClientVersion() {
    this._clientVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVersionInput() {
    return this._clientVersion;
  }

  // exportable_key - computed: true, optional: true, required: false
  private _exportableKey?: boolean | cdktn.IResolvable; 
  public get exportableKey() {
    return this.getBooleanAttribute('exportable_key');
  }
  public set exportableKey(value: boolean | cdktn.IResolvable) {
    this._exportableKey = value;
  }
  public resetExportableKey() {
    this._exportableKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableKeyInput() {
    return this._exportableKey;
  }

  // require_alternate_signature_algorithm - computed: true, optional: true, required: false
  private _requireAlternateSignatureAlgorithm?: boolean | cdktn.IResolvable; 
  public get requireAlternateSignatureAlgorithm() {
    return this.getBooleanAttribute('require_alternate_signature_algorithm');
  }
  public set requireAlternateSignatureAlgorithm(value: boolean | cdktn.IResolvable) {
    this._requireAlternateSignatureAlgorithm = value;
  }
  public resetRequireAlternateSignatureAlgorithm() {
    this._requireAlternateSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAlternateSignatureAlgorithmInput() {
    return this._requireAlternateSignatureAlgorithm;
  }

  // strong_key_protection_required - computed: true, optional: true, required: false
  private _strongKeyProtectionRequired?: boolean | cdktn.IResolvable; 
  public get strongKeyProtectionRequired() {
    return this.getBooleanAttribute('strong_key_protection_required');
  }
  public set strongKeyProtectionRequired(value: boolean | cdktn.IResolvable) {
    this._strongKeyProtectionRequired = value;
  }
  public resetStrongKeyProtectionRequired() {
    this._strongKeyProtectionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongKeyProtectionRequiredInput() {
    return this._strongKeyProtectionRequired;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_common_name PcaconnectoradTemplate#require_common_name}
  */
  readonly requireCommonName?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_directory_path PcaconnectoradTemplate#require_directory_path}
  */
  readonly requireDirectoryPath?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_dns_as_cn PcaconnectoradTemplate#require_dns_as_cn}
  */
  readonly requireDnsAsCn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_email PcaconnectoradTemplate#require_email}
  */
  readonly requireEmail?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_directory_guid PcaconnectoradTemplate#san_require_directory_guid}
  */
  readonly sanRequireDirectoryGuid?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_dns PcaconnectoradTemplate#san_require_dns}
  */
  readonly sanRequireDns?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_domain_dns PcaconnectoradTemplate#san_require_domain_dns}
  */
  readonly sanRequireDomainDns?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_email PcaconnectoradTemplate#san_require_email}
  */
  readonly sanRequireEmail?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_spn PcaconnectoradTemplate#san_require_spn}
  */
  readonly sanRequireSpn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_upn PcaconnectoradTemplate#san_require_upn}
  */
  readonly sanRequireUpn?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    require_common_name: cdktn.booleanToTerraform(struct!.requireCommonName),
    require_directory_path: cdktn.booleanToTerraform(struct!.requireDirectoryPath),
    require_dns_as_cn: cdktn.booleanToTerraform(struct!.requireDnsAsCn),
    require_email: cdktn.booleanToTerraform(struct!.requireEmail),
    san_require_directory_guid: cdktn.booleanToTerraform(struct!.sanRequireDirectoryGuid),
    san_require_dns: cdktn.booleanToTerraform(struct!.sanRequireDns),
    san_require_domain_dns: cdktn.booleanToTerraform(struct!.sanRequireDomainDns),
    san_require_email: cdktn.booleanToTerraform(struct!.sanRequireEmail),
    san_require_spn: cdktn.booleanToTerraform(struct!.sanRequireSpn),
    san_require_upn: cdktn.booleanToTerraform(struct!.sanRequireUpn),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    require_common_name: {
      value: cdktn.booleanToHclTerraform(struct!.requireCommonName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_directory_path: {
      value: cdktn.booleanToHclTerraform(struct!.requireDirectoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_dns_as_cn: {
      value: cdktn.booleanToHclTerraform(struct!.requireDnsAsCn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_email: {
      value: cdktn.booleanToHclTerraform(struct!.requireEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_directory_guid: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireDirectoryGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_dns: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_domain_dns: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireDomainDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_email: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_spn: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireSpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_upn: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireUpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireCommonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCommonName = this._requireCommonName;
    }
    if (this._requireDirectoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireDirectoryPath = this._requireDirectoryPath;
    }
    if (this._requireDnsAsCn !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireDnsAsCn = this._requireDnsAsCn;
    }
    if (this._requireEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireEmail = this._requireEmail;
    }
    if (this._sanRequireDirectoryGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireDirectoryGuid = this._sanRequireDirectoryGuid;
    }
    if (this._sanRequireDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireDns = this._sanRequireDns;
    }
    if (this._sanRequireDomainDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireDomainDns = this._sanRequireDomainDns;
    }
    if (this._sanRequireEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireEmail = this._sanRequireEmail;
    }
    if (this._sanRequireSpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireSpn = this._sanRequireSpn;
    }
    if (this._sanRequireUpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireUpn = this._sanRequireUpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requireCommonName = undefined;
      this._requireDirectoryPath = undefined;
      this._requireDnsAsCn = undefined;
      this._requireEmail = undefined;
      this._sanRequireDirectoryGuid = undefined;
      this._sanRequireDns = undefined;
      this._sanRequireDomainDns = undefined;
      this._sanRequireEmail = undefined;
      this._sanRequireSpn = undefined;
      this._sanRequireUpn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requireCommonName = value.requireCommonName;
      this._requireDirectoryPath = value.requireDirectoryPath;
      this._requireDnsAsCn = value.requireDnsAsCn;
      this._requireEmail = value.requireEmail;
      this._sanRequireDirectoryGuid = value.sanRequireDirectoryGuid;
      this._sanRequireDns = value.sanRequireDns;
      this._sanRequireDomainDns = value.sanRequireDomainDns;
      this._sanRequireEmail = value.sanRequireEmail;
      this._sanRequireSpn = value.sanRequireSpn;
      this._sanRequireUpn = value.sanRequireUpn;
    }
  }

  // require_common_name - computed: true, optional: true, required: false
  private _requireCommonName?: boolean | cdktn.IResolvable; 
  public get requireCommonName() {
    return this.getBooleanAttribute('require_common_name');
  }
  public set requireCommonName(value: boolean | cdktn.IResolvable) {
    this._requireCommonName = value;
  }
  public resetRequireCommonName() {
    this._requireCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCommonNameInput() {
    return this._requireCommonName;
  }

  // require_directory_path - computed: true, optional: true, required: false
  private _requireDirectoryPath?: boolean | cdktn.IResolvable; 
  public get requireDirectoryPath() {
    return this.getBooleanAttribute('require_directory_path');
  }
  public set requireDirectoryPath(value: boolean | cdktn.IResolvable) {
    this._requireDirectoryPath = value;
  }
  public resetRequireDirectoryPath() {
    this._requireDirectoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireDirectoryPathInput() {
    return this._requireDirectoryPath;
  }

  // require_dns_as_cn - computed: true, optional: true, required: false
  private _requireDnsAsCn?: boolean | cdktn.IResolvable; 
  public get requireDnsAsCn() {
    return this.getBooleanAttribute('require_dns_as_cn');
  }
  public set requireDnsAsCn(value: boolean | cdktn.IResolvable) {
    this._requireDnsAsCn = value;
  }
  public resetRequireDnsAsCn() {
    this._requireDnsAsCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireDnsAsCnInput() {
    return this._requireDnsAsCn;
  }

  // require_email - computed: true, optional: true, required: false
  private _requireEmail?: boolean | cdktn.IResolvable; 
  public get requireEmail() {
    return this.getBooleanAttribute('require_email');
  }
  public set requireEmail(value: boolean | cdktn.IResolvable) {
    this._requireEmail = value;
  }
  public resetRequireEmail() {
    this._requireEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireEmailInput() {
    return this._requireEmail;
  }

  // san_require_directory_guid - computed: true, optional: true, required: false
  private _sanRequireDirectoryGuid?: boolean | cdktn.IResolvable; 
  public get sanRequireDirectoryGuid() {
    return this.getBooleanAttribute('san_require_directory_guid');
  }
  public set sanRequireDirectoryGuid(value: boolean | cdktn.IResolvable) {
    this._sanRequireDirectoryGuid = value;
  }
  public resetSanRequireDirectoryGuid() {
    this._sanRequireDirectoryGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireDirectoryGuidInput() {
    return this._sanRequireDirectoryGuid;
  }

  // san_require_dns - computed: true, optional: true, required: false
  private _sanRequireDns?: boolean | cdktn.IResolvable; 
  public get sanRequireDns() {
    return this.getBooleanAttribute('san_require_dns');
  }
  public set sanRequireDns(value: boolean | cdktn.IResolvable) {
    this._sanRequireDns = value;
  }
  public resetSanRequireDns() {
    this._sanRequireDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireDnsInput() {
    return this._sanRequireDns;
  }

  // san_require_domain_dns - computed: true, optional: true, required: false
  private _sanRequireDomainDns?: boolean | cdktn.IResolvable; 
  public get sanRequireDomainDns() {
    return this.getBooleanAttribute('san_require_domain_dns');
  }
  public set sanRequireDomainDns(value: boolean | cdktn.IResolvable) {
    this._sanRequireDomainDns = value;
  }
  public resetSanRequireDomainDns() {
    this._sanRequireDomainDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireDomainDnsInput() {
    return this._sanRequireDomainDns;
  }

  // san_require_email - computed: true, optional: true, required: false
  private _sanRequireEmail?: boolean | cdktn.IResolvable; 
  public get sanRequireEmail() {
    return this.getBooleanAttribute('san_require_email');
  }
  public set sanRequireEmail(value: boolean | cdktn.IResolvable) {
    this._sanRequireEmail = value;
  }
  public resetSanRequireEmail() {
    this._sanRequireEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireEmailInput() {
    return this._sanRequireEmail;
  }

  // san_require_spn - computed: true, optional: true, required: false
  private _sanRequireSpn?: boolean | cdktn.IResolvable; 
  public get sanRequireSpn() {
    return this.getBooleanAttribute('san_require_spn');
  }
  public set sanRequireSpn(value: boolean | cdktn.IResolvable) {
    this._sanRequireSpn = value;
  }
  public resetSanRequireSpn() {
    this._sanRequireSpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireSpnInput() {
    return this._sanRequireSpn;
  }

  // san_require_upn - computed: true, optional: true, required: false
  private _sanRequireUpn?: boolean | cdktn.IResolvable; 
  public get sanRequireUpn() {
    return this.getBooleanAttribute('san_require_upn');
  }
  public set sanRequireUpn(value: boolean | cdktn.IResolvable) {
    this._sanRequireUpn = value;
  }
  public resetSanRequireUpn() {
    this._sanRequireUpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireUpnInput() {
    return this._sanRequireUpn;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#certificate_validity PcaconnectoradTemplate#certificate_validity}
  */
  readonly certificateValidity?: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#enrollment_flags PcaconnectoradTemplate#enrollment_flags}
  */
  readonly enrollmentFlags?: PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#extensions PcaconnectoradTemplate#extensions}
  */
  readonly extensions?: PcaconnectoradTemplateDefinitionTemplateV3Extensions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#general_flags PcaconnectoradTemplate#general_flags}
  */
  readonly generalFlags?: PcaconnectoradTemplateDefinitionTemplateV3GeneralFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#hash_algorithm PcaconnectoradTemplate#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#private_key_attributes PcaconnectoradTemplate#private_key_attributes}
  */
  readonly privateKeyAttributes?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#private_key_flags PcaconnectoradTemplate#private_key_flags}
  */
  readonly privateKeyFlags?: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#subject_name_flags PcaconnectoradTemplate#subject_name_flags}
  */
  readonly subjectNameFlags?: PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#superseded_templates PcaconnectoradTemplate#superseded_templates}
  */
  readonly supersededTemplates?: string[];
}

export function pcaconnectoradTemplateDefinitionTemplateV3ToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_validity: pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityToTerraform(struct!.certificateValidity),
    enrollment_flags: pcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsToTerraform(struct!.enrollmentFlags),
    extensions: pcaconnectoradTemplateDefinitionTemplateV3ExtensionsToTerraform(struct!.extensions),
    general_flags: pcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsToTerraform(struct!.generalFlags),
    hash_algorithm: cdktn.stringToTerraform(struct!.hashAlgorithm),
    private_key_attributes: pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesToTerraform(struct!.privateKeyAttributes),
    private_key_flags: pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsToTerraform(struct!.privateKeyFlags),
    subject_name_flags: pcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsToTerraform(struct!.subjectNameFlags),
    superseded_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supersededTemplates),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV3ToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_validity: {
      value: pcaconnectoradTemplateDefinitionTemplateV3CertificateValidityToHclTerraform(struct!.certificateValidity),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3CertificateValidity",
    },
    enrollment_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsToHclTerraform(struct!.enrollmentFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags",
    },
    extensions: {
      value: pcaconnectoradTemplateDefinitionTemplateV3ExtensionsToHclTerraform(struct!.extensions),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3Extensions",
    },
    general_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsToHclTerraform(struct!.generalFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3GeneralFlags",
    },
    hash_algorithm: {
      value: cdktn.stringToHclTerraform(struct!.hashAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_attributes: {
      value: pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesToHclTerraform(struct!.privateKeyAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes",
    },
    private_key_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsToHclTerraform(struct!.privateKeyFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags",
    },
    subject_name_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsToHclTerraform(struct!.subjectNameFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags",
    },
    superseded_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supersededTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateValidity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateValidity = this._certificateValidity?.internalValue;
    }
    if (this._enrollmentFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentFlags = this._enrollmentFlags?.internalValue;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._generalFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generalFlags = this._generalFlags?.internalValue;
    }
    if (this._hashAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithm = this._hashAlgorithm;
    }
    if (this._privateKeyAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyAttributes = this._privateKeyAttributes?.internalValue;
    }
    if (this._privateKeyFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFlags = this._privateKeyFlags?.internalValue;
    }
    if (this._subjectNameFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectNameFlags = this._subjectNameFlags?.internalValue;
    }
    if (this._supersededTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.supersededTemplates = this._supersededTemplates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateValidity.internalValue = undefined;
      this._enrollmentFlags.internalValue = undefined;
      this._extensions.internalValue = undefined;
      this._generalFlags.internalValue = undefined;
      this._hashAlgorithm = undefined;
      this._privateKeyAttributes.internalValue = undefined;
      this._privateKeyFlags.internalValue = undefined;
      this._subjectNameFlags.internalValue = undefined;
      this._supersededTemplates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateValidity.internalValue = value.certificateValidity;
      this._enrollmentFlags.internalValue = value.enrollmentFlags;
      this._extensions.internalValue = value.extensions;
      this._generalFlags.internalValue = value.generalFlags;
      this._hashAlgorithm = value.hashAlgorithm;
      this._privateKeyAttributes.internalValue = value.privateKeyAttributes;
      this._privateKeyFlags.internalValue = value.privateKeyFlags;
      this._subjectNameFlags.internalValue = value.subjectNameFlags;
      this._supersededTemplates = value.supersededTemplates;
    }
  }

  // certificate_validity - computed: true, optional: true, required: false
  private _certificateValidity = new PcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference(this, "certificate_validity");
  public get certificateValidity() {
    return this._certificateValidity;
  }
  public putCertificateValidity(value: PcaconnectoradTemplateDefinitionTemplateV3CertificateValidity) {
    this._certificateValidity.internalValue = value;
  }
  public resetCertificateValidity() {
    this._certificateValidity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidityInput() {
    return this._certificateValidity.internalValue;
  }

  // enrollment_flags - computed: true, optional: true, required: false
  private _enrollmentFlags = new PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference(this, "enrollment_flags");
  public get enrollmentFlags() {
    return this._enrollmentFlags;
  }
  public putEnrollmentFlags(value: PcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags) {
    this._enrollmentFlags.internalValue = value;
  }
  public resetEnrollmentFlags() {
    this._enrollmentFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentFlagsInput() {
    return this._enrollmentFlags.internalValue;
  }

  // extensions - computed: true, optional: true, required: false
  private _extensions = new PcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: PcaconnectoradTemplateDefinitionTemplateV3Extensions) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // general_flags - computed: true, optional: true, required: false
  private _generalFlags = new PcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference(this, "general_flags");
  public get generalFlags() {
    return this._generalFlags;
  }
  public putGeneralFlags(value: PcaconnectoradTemplateDefinitionTemplateV3GeneralFlags) {
    this._generalFlags.internalValue = value;
  }
  public resetGeneralFlags() {
    this._generalFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalFlagsInput() {
    return this._generalFlags.internalValue;
  }

  // hash_algorithm - computed: true, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
  }

  // private_key_attributes - computed: true, optional: true, required: false
  private _privateKeyAttributes = new PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference(this, "private_key_attributes");
  public get privateKeyAttributes() {
    return this._privateKeyAttributes;
  }
  public putPrivateKeyAttributes(value: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes) {
    this._privateKeyAttributes.internalValue = value;
  }
  public resetPrivateKeyAttributes() {
    this._privateKeyAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyAttributesInput() {
    return this._privateKeyAttributes.internalValue;
  }

  // private_key_flags - computed: true, optional: true, required: false
  private _privateKeyFlags = new PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference(this, "private_key_flags");
  public get privateKeyFlags() {
    return this._privateKeyFlags;
  }
  public putPrivateKeyFlags(value: PcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags) {
    this._privateKeyFlags.internalValue = value;
  }
  public resetPrivateKeyFlags() {
    this._privateKeyFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFlagsInput() {
    return this._privateKeyFlags.internalValue;
  }

  // subject_name_flags - computed: true, optional: true, required: false
  private _subjectNameFlags = new PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference(this, "subject_name_flags");
  public get subjectNameFlags() {
    return this._subjectNameFlags;
  }
  public putSubjectNameFlags(value: PcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags) {
    this._subjectNameFlags.internalValue = value;
  }
  public resetSubjectNameFlags() {
    this._subjectNameFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameFlagsInput() {
    return this._subjectNameFlags.internalValue;
  }

  // superseded_templates - computed: true, optional: true, required: false
  private _supersededTemplates?: string[]; 
  public get supersededTemplates() {
    return this.getListAttribute('superseded_templates');
  }
  public set supersededTemplates(value: string[]) {
    this._supersededTemplates = value;
  }
  public resetSupersededTemplates() {
    this._supersededTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supersededTemplatesInput() {
    return this._supersededTemplates;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period PcaconnectoradTemplate#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period_type PcaconnectoradTemplate#period_type}
  */
  readonly periodType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    period: cdktn.numberToTerraform(struct!.period),
    period_type: cdktn.stringToTerraform(struct!.periodType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_type: {
      value: cdktn.stringToHclTerraform(struct!.periodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._period = undefined;
      this._periodType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._period = value.period;
      this._periodType = value.periodType;
    }
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_type - computed: true, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period PcaconnectoradTemplate#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#period_type PcaconnectoradTemplate#period_type}
  */
  readonly periodType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    period: cdktn.numberToTerraform(struct!.period),
    period_type: cdktn.stringToTerraform(struct!.periodType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    period: {
      value: cdktn.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_type: {
      value: cdktn.stringToHclTerraform(struct!.periodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._periodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodType = this._periodType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._period = undefined;
      this._periodType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._period = value.period;
      this._periodType = value.periodType;
    }
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_type - computed: true, optional: true, required: false
  private _periodType?: string; 
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
  public set periodType(value: string) {
    this._periodType = value;
  }
  public resetPeriodType() {
    this._periodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTypeInput() {
    return this._periodType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4CertificateValidity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#renewal_period PcaconnectoradTemplate#renewal_period}
  */
  readonly renewalPeriod?: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#validity_period PcaconnectoradTemplate#validity_period}
  */
  readonly validityPeriod?: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod;
}

export function pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    renewal_period: pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodToTerraform(struct!.renewalPeriod),
    validity_period: pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodToTerraform(struct!.validityPeriod),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    renewal_period: {
      value: pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodToHclTerraform(struct!.renewalPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod",
    },
    validity_period: {
      value: pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodToHclTerraform(struct!.validityPeriod),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4CertificateValidity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._renewalPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalPeriod = this._renewalPeriod?.internalValue;
    }
    if (this._validityPeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validityPeriod = this._validityPeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._renewalPeriod.internalValue = undefined;
      this._validityPeriod.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._renewalPeriod.internalValue = value.renewalPeriod;
      this._validityPeriod.internalValue = value.validityPeriod;
    }
  }

  // renewal_period - computed: true, optional: true, required: false
  private _renewalPeriod = new PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference(this, "renewal_period");
  public get renewalPeriod() {
    return this._renewalPeriod;
  }
  public putRenewalPeriod(value: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod) {
    this._renewalPeriod.internalValue = value;
  }
  public resetRenewalPeriod() {
    this._renewalPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPeriodInput() {
    return this._renewalPeriod.internalValue;
  }

  // validity_period - computed: true, optional: true, required: false
  private _validityPeriod = new PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference(this, "validity_period");
  public get validityPeriod() {
    return this._validityPeriod;
  }
  public putValidityPeriod(value: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod) {
    this._validityPeriod.internalValue = value;
  }
  public resetValidityPeriod() {
    this._validityPeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#enable_key_reuse_on_nt_token_keyset_storage_full PcaconnectoradTemplate#enable_key_reuse_on_nt_token_keyset_storage_full}
  */
  readonly enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#include_symmetric_algorithms PcaconnectoradTemplate#include_symmetric_algorithms}
  */
  readonly includeSymmetricAlgorithms?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#no_security_extension PcaconnectoradTemplate#no_security_extension}
  */
  readonly noSecurityExtension?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#remove_invalid_certificate_from_personal_store PcaconnectoradTemplate#remove_invalid_certificate_from_personal_store}
  */
  readonly removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#user_interaction_required PcaconnectoradTemplate#user_interaction_required}
  */
  readonly userInteractionRequired?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_key_reuse_on_nt_token_keyset_storage_full: cdktn.booleanToTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
    include_symmetric_algorithms: cdktn.booleanToTerraform(struct!.includeSymmetricAlgorithms),
    no_security_extension: cdktn.booleanToTerraform(struct!.noSecurityExtension),
    remove_invalid_certificate_from_personal_store: cdktn.booleanToTerraform(struct!.removeInvalidCertificateFromPersonalStore),
    user_interaction_required: cdktn.booleanToTerraform(struct!.userInteractionRequired),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_key_reuse_on_nt_token_keyset_storage_full: {
      value: cdktn.booleanToHclTerraform(struct!.enableKeyReuseOnNtTokenKeysetStorageFull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_symmetric_algorithms: {
      value: cdktn.booleanToHclTerraform(struct!.includeSymmetricAlgorithms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_security_extension: {
      value: cdktn.booleanToHclTerraform(struct!.noSecurityExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_invalid_certificate_from_personal_store: {
      value: cdktn.booleanToHclTerraform(struct!.removeInvalidCertificateFromPersonalStore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_interaction_required: {
      value: cdktn.booleanToHclTerraform(struct!.userInteractionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableKeyReuseOnNtTokenKeysetStorageFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKeyReuseOnNtTokenKeysetStorageFull = this._enableKeyReuseOnNtTokenKeysetStorageFull;
    }
    if (this._includeSymmetricAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSymmetricAlgorithms = this._includeSymmetricAlgorithms;
    }
    if (this._noSecurityExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSecurityExtension = this._noSecurityExtension;
    }
    if (this._removeInvalidCertificateFromPersonalStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeInvalidCertificateFromPersonalStore = this._removeInvalidCertificateFromPersonalStore;
    }
    if (this._userInteractionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInteractionRequired = this._userInteractionRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
      this._includeSymmetricAlgorithms = undefined;
      this._noSecurityExtension = undefined;
      this._removeInvalidCertificateFromPersonalStore = undefined;
      this._userInteractionRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableKeyReuseOnNtTokenKeysetStorageFull = value.enableKeyReuseOnNtTokenKeysetStorageFull;
      this._includeSymmetricAlgorithms = value.includeSymmetricAlgorithms;
      this._noSecurityExtension = value.noSecurityExtension;
      this._removeInvalidCertificateFromPersonalStore = value.removeInvalidCertificateFromPersonalStore;
      this._userInteractionRequired = value.userInteractionRequired;
    }
  }

  // enable_key_reuse_on_nt_token_keyset_storage_full - computed: true, optional: true, required: false
  private _enableKeyReuseOnNtTokenKeysetStorageFull?: boolean | cdktn.IResolvable; 
  public get enableKeyReuseOnNtTokenKeysetStorageFull() {
    return this.getBooleanAttribute('enable_key_reuse_on_nt_token_keyset_storage_full');
  }
  public set enableKeyReuseOnNtTokenKeysetStorageFull(value: boolean | cdktn.IResolvable) {
    this._enableKeyReuseOnNtTokenKeysetStorageFull = value;
  }
  public resetEnableKeyReuseOnNtTokenKeysetStorageFull() {
    this._enableKeyReuseOnNtTokenKeysetStorageFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyReuseOnNtTokenKeysetStorageFullInput() {
    return this._enableKeyReuseOnNtTokenKeysetStorageFull;
  }

  // include_symmetric_algorithms - computed: true, optional: true, required: false
  private _includeSymmetricAlgorithms?: boolean | cdktn.IResolvable; 
  public get includeSymmetricAlgorithms() {
    return this.getBooleanAttribute('include_symmetric_algorithms');
  }
  public set includeSymmetricAlgorithms(value: boolean | cdktn.IResolvable) {
    this._includeSymmetricAlgorithms = value;
  }
  public resetIncludeSymmetricAlgorithms() {
    this._includeSymmetricAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSymmetricAlgorithmsInput() {
    return this._includeSymmetricAlgorithms;
  }

  // no_security_extension - computed: true, optional: true, required: false
  private _noSecurityExtension?: boolean | cdktn.IResolvable; 
  public get noSecurityExtension() {
    return this.getBooleanAttribute('no_security_extension');
  }
  public set noSecurityExtension(value: boolean | cdktn.IResolvable) {
    this._noSecurityExtension = value;
  }
  public resetNoSecurityExtension() {
    this._noSecurityExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSecurityExtensionInput() {
    return this._noSecurityExtension;
  }

  // remove_invalid_certificate_from_personal_store - computed: true, optional: true, required: false
  private _removeInvalidCertificateFromPersonalStore?: boolean | cdktn.IResolvable; 
  public get removeInvalidCertificateFromPersonalStore() {
    return this.getBooleanAttribute('remove_invalid_certificate_from_personal_store');
  }
  public set removeInvalidCertificateFromPersonalStore(value: boolean | cdktn.IResolvable) {
    this._removeInvalidCertificateFromPersonalStore = value;
  }
  public resetRemoveInvalidCertificateFromPersonalStore() {
    this._removeInvalidCertificateFromPersonalStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInvalidCertificateFromPersonalStoreInput() {
    return this._removeInvalidCertificateFromPersonalStore;
  }

  // user_interaction_required - computed: true, optional: true, required: false
  private _userInteractionRequired?: boolean | cdktn.IResolvable; 
  public get userInteractionRequired() {
    return this.getBooleanAttribute('user_interaction_required');
  }
  public set userInteractionRequired(value: boolean | cdktn.IResolvable) {
    this._userInteractionRequired = value;
  }
  public resetUserInteractionRequired() {
    this._userInteractionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInteractionRequiredInput() {
    return this._userInteractionRequired;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#policy_object_identifier PcaconnectoradTemplate#policy_object_identifier}
  */
  readonly policyObjectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#policy_type PcaconnectoradTemplate#policy_type}
  */
  readonly policyType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_object_identifier: cdktn.stringToTerraform(struct!.policyObjectIdentifier),
    policy_type: cdktn.stringToTerraform(struct!.policyType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_object_identifier: {
      value: cdktn.stringToHclTerraform(struct!.policyObjectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktn.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyObjectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyObjectIdentifier = this._policyObjectIdentifier;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyObjectIdentifier = undefined;
      this._policyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyObjectIdentifier = value.policyObjectIdentifier;
      this._policyType = value.policyType;
    }
  }

  // policy_object_identifier - computed: true, optional: true, required: false
  private _policyObjectIdentifier?: string; 
  public get policyObjectIdentifier() {
    return this.getStringAttribute('policy_object_identifier');
  }
  public set policyObjectIdentifier(value: string) {
    this._policyObjectIdentifier = value;
  }
  public resetPolicyObjectIdentifier() {
    this._policyObjectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyObjectIdentifierInput() {
    return this._policyObjectIdentifier;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}

export class PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList extends cdktn.ComplexList {
  public internalValue? : PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies[] | cdktn.IResolvable

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
  public get(index: number): PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference {
    return new PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#critical PcaconnectoradTemplate#critical}
  */
  readonly critical?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#policies PcaconnectoradTemplate#policies}
  */
  readonly policies?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies[] | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    critical: cdktn.booleanToTerraform(struct!.critical),
    policies: cdktn.listMapper(pcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesToTerraform, false)(struct!.policies),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    critical: {
      value: cdktn.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policies: {
      value: cdktn.listMapperHcl(pcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._policies.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._policies.internalValue = value.policies;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: boolean | cdktn.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktn.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // policies - computed: true, optional: true, required: false
  private _policies = new PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies[] | cdktn.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#data_encipherment PcaconnectoradTemplate#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#digital_signature PcaconnectoradTemplate#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_agreement PcaconnectoradTemplate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_encipherment PcaconnectoradTemplate#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#non_repudiation PcaconnectoradTemplate#non_repudiation}
  */
  readonly nonRepudiation?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_encipherment: cdktn.booleanToTerraform(struct!.dataEncipherment),
    digital_signature: cdktn.booleanToTerraform(struct!.digitalSignature),
    key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
    key_encipherment: cdktn.booleanToTerraform(struct!.keyEncipherment),
    non_repudiation: cdktn.booleanToTerraform(struct!.nonRepudiation),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_encipherment: {
      value: cdktn.booleanToHclTerraform(struct!.dataEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    digital_signature: {
      value: cdktn.booleanToHclTerraform(struct!.digitalSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_agreement: {
      value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_encipherment: {
      value: cdktn.booleanToHclTerraform(struct!.keyEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_repudiation: {
      value: cdktn.booleanToHclTerraform(struct!.nonRepudiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncipherment = this._keyEncipherment;
    }
    if (this._nonRepudiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonRepudiation = this._nonRepudiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataEncipherment = undefined;
      this._digitalSignature = undefined;
      this._keyAgreement = undefined;
      this._keyEncipherment = undefined;
      this._nonRepudiation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataEncipherment = value.dataEncipherment;
      this._digitalSignature = value.digitalSignature;
      this._keyAgreement = value.keyAgreement;
      this._keyEncipherment = value.keyEncipherment;
      this._nonRepudiation = value.nonRepudiation;
    }
  }

  // data_encipherment - computed: true, optional: true, required: false
  private _dataEncipherment?: boolean | cdktn.IResolvable; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }
  public set dataEncipherment(value: boolean | cdktn.IResolvable) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment;
  }

  // digital_signature - computed: true, optional: true, required: false
  private _digitalSignature?: boolean | cdktn.IResolvable; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }
  public set digitalSignature(value: boolean | cdktn.IResolvable) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature;
  }

  // key_agreement - computed: true, optional: true, required: false
  private _keyAgreement?: boolean | cdktn.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktn.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // key_encipherment - computed: true, optional: true, required: false
  private _keyEncipherment?: boolean | cdktn.IResolvable; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
  public set keyEncipherment(value: boolean | cdktn.IResolvable) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment;
  }

  // non_repudiation - computed: true, optional: true, required: false
  private _nonRepudiation?: boolean | cdktn.IResolvable; 
  public get nonRepudiation() {
    return this.getBooleanAttribute('non_repudiation');
  }
  public set nonRepudiation(value: boolean | cdktn.IResolvable) {
    this._nonRepudiation = value;
  }
  public resetNonRepudiation() {
    this._nonRepudiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonRepudiationInput() {
    return this._nonRepudiation;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#critical PcaconnectoradTemplate#critical}
  */
  readonly critical?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#usage_flags PcaconnectoradTemplate#usage_flags}
  */
  readonly usageFlags?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags;
}

export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    critical: cdktn.booleanToTerraform(struct!.critical),
    usage_flags: pcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsToTerraform(struct!.usageFlags),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    critical: {
      value: cdktn.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usage_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsToHclTerraform(struct!.usageFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._usageFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageFlags = this._usageFlags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._usageFlags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._usageFlags.internalValue = value.usageFlags;
    }
  }

  // critical - computed: true, optional: true, required: false
  private _critical?: boolean | cdktn.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktn.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // usage_flags - computed: true, optional: true, required: false
  private _usageFlags = new PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference(this, "usage_flags");
  public get usageFlags() {
    return this._usageFlags;
  }
  public putUsageFlags(value: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags) {
    this._usageFlags.internalValue = value;
  }
  public resetUsageFlags() {
    this._usageFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageFlagsInput() {
    return this._usageFlags.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4Extensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#application_policies PcaconnectoradTemplate#application_policies}
  */
  readonly applicationPolicies?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_usage PcaconnectoradTemplate#key_usage}
  */
  readonly keyUsage?: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage;
}

export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4Extensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_policies: pcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesToTerraform(struct!.applicationPolicies),
    key_usage: pcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageToTerraform(struct!.keyUsage),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4ExtensionsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4Extensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_policies: {
      value: pcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesToHclTerraform(struct!.applicationPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies",
    },
    key_usage: {
      value: pcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageToHclTerraform(struct!.keyUsage),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4Extensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationPolicies = this._applicationPolicies?.internalValue;
    }
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4Extensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationPolicies.internalValue = undefined;
      this._keyUsage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationPolicies.internalValue = value.applicationPolicies;
      this._keyUsage.internalValue = value.keyUsage;
    }
  }

  // application_policies - computed: true, optional: true, required: false
  private _applicationPolicies = new PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference(this, "application_policies");
  public get applicationPolicies() {
    return this._applicationPolicies;
  }
  public putApplicationPolicies(value: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies) {
    this._applicationPolicies.internalValue = value;
  }
  public resetApplicationPolicies() {
    this._applicationPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPoliciesInput() {
    return this._applicationPolicies.internalValue;
  }

  // key_usage - computed: true, optional: true, required: false
  private _keyUsage = new PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: PcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  public resetKeyUsage() {
    this._keyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4GeneralFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#auto_enrollment PcaconnectoradTemplate#auto_enrollment}
  */
  readonly autoEnrollment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#machine_type PcaconnectoradTemplate#machine_type}
  */
  readonly machineType?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4GeneralFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_enrollment: cdktn.booleanToTerraform(struct!.autoEnrollment),
    machine_type: cdktn.booleanToTerraform(struct!.machineType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4GeneralFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_enrollment: {
      value: cdktn.booleanToHclTerraform(struct!.autoEnrollment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_type: {
      value: cdktn.booleanToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4GeneralFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoEnrollment !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoEnrollment = this._autoEnrollment;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4GeneralFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoEnrollment = undefined;
      this._machineType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoEnrollment = value.autoEnrollment;
      this._machineType = value.machineType;
    }
  }

  // auto_enrollment - computed: true, optional: true, required: false
  private _autoEnrollment?: boolean | cdktn.IResolvable; 
  public get autoEnrollment() {
    return this.getBooleanAttribute('auto_enrollment');
  }
  public set autoEnrollment(value: boolean | cdktn.IResolvable) {
    this._autoEnrollment = value;
  }
  public resetAutoEnrollment() {
    this._autoEnrollment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnrollmentInput() {
    return this._autoEnrollment;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: boolean | cdktn.IResolvable; 
  public get machineType() {
    return this.getBooleanAttribute('machine_type');
  }
  public set machineType(value: boolean | cdktn.IResolvable) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#decrypt PcaconnectoradTemplate#decrypt}
  */
  readonly decrypt?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_agreement PcaconnectoradTemplate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#sign PcaconnectoradTemplate#sign}
  */
  readonly sign?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decrypt: cdktn.booleanToTerraform(struct!.decrypt),
    key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
    sign: cdktn.booleanToTerraform(struct!.sign),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decrypt: {
      value: cdktn.booleanToHclTerraform(struct!.decrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_agreement: {
      value: cdktn.booleanToHclTerraform(struct!.keyAgreement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sign: {
      value: cdktn.booleanToHclTerraform(struct!.sign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.decrypt = this._decrypt;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._sign !== undefined) {
      hasAnyValues = true;
      internalValueResult.sign = this._sign;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decrypt = undefined;
      this._keyAgreement = undefined;
      this._sign = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decrypt = value.decrypt;
      this._keyAgreement = value.keyAgreement;
      this._sign = value.sign;
    }
  }

  // decrypt - computed: true, optional: true, required: false
  private _decrypt?: boolean | cdktn.IResolvable; 
  public get decrypt() {
    return this.getBooleanAttribute('decrypt');
  }
  public set decrypt(value: boolean | cdktn.IResolvable) {
    this._decrypt = value;
  }
  public resetDecrypt() {
    this._decrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptInput() {
    return this._decrypt;
  }

  // key_agreement - computed: true, optional: true, required: false
  private _keyAgreement?: boolean | cdktn.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktn.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // sign - computed: true, optional: true, required: false
  private _sign?: boolean | cdktn.IResolvable; 
  public get sign() {
    return this.getBooleanAttribute('sign');
  }
  public set sign(value: boolean | cdktn.IResolvable) {
    this._sign = value;
  }
  public resetSign() {
    this._sign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInput() {
    return this._sign;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#property_flags PcaconnectoradTemplate#property_flags}
  */
  readonly propertyFlags?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#property_type PcaconnectoradTemplate#property_type}
  */
  readonly propertyType?: string;
}

export function pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    property_flags: pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToTerraform(struct!.propertyFlags),
    property_type: cdktn.stringToTerraform(struct!.propertyType),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    property_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToHclTerraform(struct!.propertyFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags",
    },
    property_type: {
      value: cdktn.stringToHclTerraform(struct!.propertyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyFlags = this._propertyFlags?.internalValue;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._propertyFlags.internalValue = undefined;
      this._propertyType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._propertyFlags.internalValue = value.propertyFlags;
      this._propertyType = value.propertyType;
    }
  }

  // property_flags - computed: true, optional: true, required: false
  private _propertyFlags = new PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference(this, "property_flags");
  public get propertyFlags() {
    return this._propertyFlags;
  }
  public putPropertyFlags(value: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags) {
    this._propertyFlags.internalValue = value;
  }
  public resetPropertyFlags() {
    this._propertyFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyFlagsInput() {
    return this._propertyFlags.internalValue;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#algorithm PcaconnectoradTemplate#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#crypto_providers PcaconnectoradTemplate#crypto_providers}
  */
  readonly cryptoProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_spec PcaconnectoradTemplate#key_spec}
  */
  readonly keySpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#key_usage_property PcaconnectoradTemplate#key_usage_property}
  */
  readonly keyUsageProperty?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#minimal_key_length PcaconnectoradTemplate#minimal_key_length}
  */
  readonly minimalKeyLength?: number;
}

export function pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    crypto_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cryptoProviders),
    key_spec: cdktn.stringToTerraform(struct!.keySpec),
    key_usage_property: pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyToTerraform(struct!.keyUsageProperty),
    minimal_key_length: cdktn.numberToTerraform(struct!.minimalKeyLength),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_providers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cryptoProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_spec: {
      value: cdktn.stringToHclTerraform(struct!.keySpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_usage_property: {
      value: pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyToHclTerraform(struct!.keyUsageProperty),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty",
    },
    minimal_key_length: {
      value: cdktn.numberToHclTerraform(struct!.minimalKeyLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._cryptoProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoProviders = this._cryptoProviders;
    }
    if (this._keySpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySpec = this._keySpec;
    }
    if (this._keyUsageProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsageProperty = this._keyUsageProperty?.internalValue;
    }
    if (this._minimalKeyLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalKeyLength = this._minimalKeyLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._cryptoProviders = undefined;
      this._keySpec = undefined;
      this._keyUsageProperty.internalValue = undefined;
      this._minimalKeyLength = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._cryptoProviders = value.cryptoProviders;
      this._keySpec = value.keySpec;
      this._keyUsageProperty.internalValue = value.keyUsageProperty;
      this._minimalKeyLength = value.minimalKeyLength;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // crypto_providers - computed: true, optional: true, required: false
  private _cryptoProviders?: string[]; 
  public get cryptoProviders() {
    return this.getListAttribute('crypto_providers');
  }
  public set cryptoProviders(value: string[]) {
    this._cryptoProviders = value;
  }
  public resetCryptoProviders() {
    this._cryptoProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoProvidersInput() {
    return this._cryptoProviders;
  }

  // key_spec - computed: true, optional: true, required: false
  private _keySpec?: string; 
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }
  public set keySpec(value: string) {
    this._keySpec = value;
  }
  public resetKeySpec() {
    this._keySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec;
  }

  // key_usage_property - computed: true, optional: true, required: false
  private _keyUsageProperty = new PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference(this, "key_usage_property");
  public get keyUsageProperty() {
    return this._keyUsageProperty;
  }
  public putKeyUsageProperty(value: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty) {
    this._keyUsageProperty.internalValue = value;
  }
  public resetKeyUsageProperty() {
    this._keyUsageProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsagePropertyInput() {
    return this._keyUsageProperty.internalValue;
  }

  // minimal_key_length - computed: true, optional: true, required: false
  private _minimalKeyLength?: number; 
  public get minimalKeyLength() {
    return this.getNumberAttribute('minimal_key_length');
  }
  public set minimalKeyLength(value: number) {
    this._minimalKeyLength = value;
  }
  public resetMinimalKeyLength() {
    this._minimalKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalKeyLengthInput() {
    return this._minimalKeyLength;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#client_version PcaconnectoradTemplate#client_version}
  */
  readonly clientVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#exportable_key PcaconnectoradTemplate#exportable_key}
  */
  readonly exportableKey?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_alternate_signature_algorithm PcaconnectoradTemplate#require_alternate_signature_algorithm}
  */
  readonly requireAlternateSignatureAlgorithm?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_same_key_renewal PcaconnectoradTemplate#require_same_key_renewal}
  */
  readonly requireSameKeyRenewal?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#strong_key_protection_required PcaconnectoradTemplate#strong_key_protection_required}
  */
  readonly strongKeyProtectionRequired?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#use_legacy_provider PcaconnectoradTemplate#use_legacy_provider}
  */
  readonly useLegacyProvider?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_version: cdktn.stringToTerraform(struct!.clientVersion),
    exportable_key: cdktn.booleanToTerraform(struct!.exportableKey),
    require_alternate_signature_algorithm: cdktn.booleanToTerraform(struct!.requireAlternateSignatureAlgorithm),
    require_same_key_renewal: cdktn.booleanToTerraform(struct!.requireSameKeyRenewal),
    strong_key_protection_required: cdktn.booleanToTerraform(struct!.strongKeyProtectionRequired),
    use_legacy_provider: cdktn.booleanToTerraform(struct!.useLegacyProvider),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_version: {
      value: cdktn.stringToHclTerraform(struct!.clientVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exportable_key: {
      value: cdktn.booleanToHclTerraform(struct!.exportableKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_alternate_signature_algorithm: {
      value: cdktn.booleanToHclTerraform(struct!.requireAlternateSignatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_same_key_renewal: {
      value: cdktn.booleanToHclTerraform(struct!.requireSameKeyRenewal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strong_key_protection_required: {
      value: cdktn.booleanToHclTerraform(struct!.strongKeyProtectionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_legacy_provider: {
      value: cdktn.booleanToHclTerraform(struct!.useLegacyProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientVersion = this._clientVersion;
    }
    if (this._exportableKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportableKey = this._exportableKey;
    }
    if (this._requireAlternateSignatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAlternateSignatureAlgorithm = this._requireAlternateSignatureAlgorithm;
    }
    if (this._requireSameKeyRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSameKeyRenewal = this._requireSameKeyRenewal;
    }
    if (this._strongKeyProtectionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.strongKeyProtectionRequired = this._strongKeyProtectionRequired;
    }
    if (this._useLegacyProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLegacyProvider = this._useLegacyProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientVersion = undefined;
      this._exportableKey = undefined;
      this._requireAlternateSignatureAlgorithm = undefined;
      this._requireSameKeyRenewal = undefined;
      this._strongKeyProtectionRequired = undefined;
      this._useLegacyProvider = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientVersion = value.clientVersion;
      this._exportableKey = value.exportableKey;
      this._requireAlternateSignatureAlgorithm = value.requireAlternateSignatureAlgorithm;
      this._requireSameKeyRenewal = value.requireSameKeyRenewal;
      this._strongKeyProtectionRequired = value.strongKeyProtectionRequired;
      this._useLegacyProvider = value.useLegacyProvider;
    }
  }

  // client_version - computed: true, optional: true, required: false
  private _clientVersion?: string; 
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }
  public set clientVersion(value: string) {
    this._clientVersion = value;
  }
  public resetClientVersion() {
    this._clientVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVersionInput() {
    return this._clientVersion;
  }

  // exportable_key - computed: true, optional: true, required: false
  private _exportableKey?: boolean | cdktn.IResolvable; 
  public get exportableKey() {
    return this.getBooleanAttribute('exportable_key');
  }
  public set exportableKey(value: boolean | cdktn.IResolvable) {
    this._exportableKey = value;
  }
  public resetExportableKey() {
    this._exportableKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableKeyInput() {
    return this._exportableKey;
  }

  // require_alternate_signature_algorithm - computed: true, optional: true, required: false
  private _requireAlternateSignatureAlgorithm?: boolean | cdktn.IResolvable; 
  public get requireAlternateSignatureAlgorithm() {
    return this.getBooleanAttribute('require_alternate_signature_algorithm');
  }
  public set requireAlternateSignatureAlgorithm(value: boolean | cdktn.IResolvable) {
    this._requireAlternateSignatureAlgorithm = value;
  }
  public resetRequireAlternateSignatureAlgorithm() {
    this._requireAlternateSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAlternateSignatureAlgorithmInput() {
    return this._requireAlternateSignatureAlgorithm;
  }

  // require_same_key_renewal - computed: true, optional: true, required: false
  private _requireSameKeyRenewal?: boolean | cdktn.IResolvable; 
  public get requireSameKeyRenewal() {
    return this.getBooleanAttribute('require_same_key_renewal');
  }
  public set requireSameKeyRenewal(value: boolean | cdktn.IResolvable) {
    this._requireSameKeyRenewal = value;
  }
  public resetRequireSameKeyRenewal() {
    this._requireSameKeyRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSameKeyRenewalInput() {
    return this._requireSameKeyRenewal;
  }

  // strong_key_protection_required - computed: true, optional: true, required: false
  private _strongKeyProtectionRequired?: boolean | cdktn.IResolvable; 
  public get strongKeyProtectionRequired() {
    return this.getBooleanAttribute('strong_key_protection_required');
  }
  public set strongKeyProtectionRequired(value: boolean | cdktn.IResolvable) {
    this._strongKeyProtectionRequired = value;
  }
  public resetStrongKeyProtectionRequired() {
    this._strongKeyProtectionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongKeyProtectionRequiredInput() {
    return this._strongKeyProtectionRequired;
  }

  // use_legacy_provider - computed: true, optional: true, required: false
  private _useLegacyProvider?: boolean | cdktn.IResolvable; 
  public get useLegacyProvider() {
    return this.getBooleanAttribute('use_legacy_provider');
  }
  public set useLegacyProvider(value: boolean | cdktn.IResolvable) {
    this._useLegacyProvider = value;
  }
  public resetUseLegacyProvider() {
    this._useLegacyProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacyProviderInput() {
    return this._useLegacyProvider;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_common_name PcaconnectoradTemplate#require_common_name}
  */
  readonly requireCommonName?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_directory_path PcaconnectoradTemplate#require_directory_path}
  */
  readonly requireDirectoryPath?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_dns_as_cn PcaconnectoradTemplate#require_dns_as_cn}
  */
  readonly requireDnsAsCn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#require_email PcaconnectoradTemplate#require_email}
  */
  readonly requireEmail?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_directory_guid PcaconnectoradTemplate#san_require_directory_guid}
  */
  readonly sanRequireDirectoryGuid?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_dns PcaconnectoradTemplate#san_require_dns}
  */
  readonly sanRequireDns?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_domain_dns PcaconnectoradTemplate#san_require_domain_dns}
  */
  readonly sanRequireDomainDns?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_email PcaconnectoradTemplate#san_require_email}
  */
  readonly sanRequireEmail?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_spn PcaconnectoradTemplate#san_require_spn}
  */
  readonly sanRequireSpn?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#san_require_upn PcaconnectoradTemplate#san_require_upn}
  */
  readonly sanRequireUpn?: boolean | cdktn.IResolvable;
}

export function pcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    require_common_name: cdktn.booleanToTerraform(struct!.requireCommonName),
    require_directory_path: cdktn.booleanToTerraform(struct!.requireDirectoryPath),
    require_dns_as_cn: cdktn.booleanToTerraform(struct!.requireDnsAsCn),
    require_email: cdktn.booleanToTerraform(struct!.requireEmail),
    san_require_directory_guid: cdktn.booleanToTerraform(struct!.sanRequireDirectoryGuid),
    san_require_dns: cdktn.booleanToTerraform(struct!.sanRequireDns),
    san_require_domain_dns: cdktn.booleanToTerraform(struct!.sanRequireDomainDns),
    san_require_email: cdktn.booleanToTerraform(struct!.sanRequireEmail),
    san_require_spn: cdktn.booleanToTerraform(struct!.sanRequireSpn),
    san_require_upn: cdktn.booleanToTerraform(struct!.sanRequireUpn),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    require_common_name: {
      value: cdktn.booleanToHclTerraform(struct!.requireCommonName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_directory_path: {
      value: cdktn.booleanToHclTerraform(struct!.requireDirectoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_dns_as_cn: {
      value: cdktn.booleanToHclTerraform(struct!.requireDnsAsCn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_email: {
      value: cdktn.booleanToHclTerraform(struct!.requireEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_directory_guid: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireDirectoryGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_dns: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_domain_dns: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireDomainDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_email: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_spn: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireSpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    san_require_upn: {
      value: cdktn.booleanToHclTerraform(struct!.sanRequireUpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireCommonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCommonName = this._requireCommonName;
    }
    if (this._requireDirectoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireDirectoryPath = this._requireDirectoryPath;
    }
    if (this._requireDnsAsCn !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireDnsAsCn = this._requireDnsAsCn;
    }
    if (this._requireEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireEmail = this._requireEmail;
    }
    if (this._sanRequireDirectoryGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireDirectoryGuid = this._sanRequireDirectoryGuid;
    }
    if (this._sanRequireDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireDns = this._sanRequireDns;
    }
    if (this._sanRequireDomainDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireDomainDns = this._sanRequireDomainDns;
    }
    if (this._sanRequireEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireEmail = this._sanRequireEmail;
    }
    if (this._sanRequireSpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireSpn = this._sanRequireSpn;
    }
    if (this._sanRequireUpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanRequireUpn = this._sanRequireUpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requireCommonName = undefined;
      this._requireDirectoryPath = undefined;
      this._requireDnsAsCn = undefined;
      this._requireEmail = undefined;
      this._sanRequireDirectoryGuid = undefined;
      this._sanRequireDns = undefined;
      this._sanRequireDomainDns = undefined;
      this._sanRequireEmail = undefined;
      this._sanRequireSpn = undefined;
      this._sanRequireUpn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requireCommonName = value.requireCommonName;
      this._requireDirectoryPath = value.requireDirectoryPath;
      this._requireDnsAsCn = value.requireDnsAsCn;
      this._requireEmail = value.requireEmail;
      this._sanRequireDirectoryGuid = value.sanRequireDirectoryGuid;
      this._sanRequireDns = value.sanRequireDns;
      this._sanRequireDomainDns = value.sanRequireDomainDns;
      this._sanRequireEmail = value.sanRequireEmail;
      this._sanRequireSpn = value.sanRequireSpn;
      this._sanRequireUpn = value.sanRequireUpn;
    }
  }

  // require_common_name - computed: true, optional: true, required: false
  private _requireCommonName?: boolean | cdktn.IResolvable; 
  public get requireCommonName() {
    return this.getBooleanAttribute('require_common_name');
  }
  public set requireCommonName(value: boolean | cdktn.IResolvable) {
    this._requireCommonName = value;
  }
  public resetRequireCommonName() {
    this._requireCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCommonNameInput() {
    return this._requireCommonName;
  }

  // require_directory_path - computed: true, optional: true, required: false
  private _requireDirectoryPath?: boolean | cdktn.IResolvable; 
  public get requireDirectoryPath() {
    return this.getBooleanAttribute('require_directory_path');
  }
  public set requireDirectoryPath(value: boolean | cdktn.IResolvable) {
    this._requireDirectoryPath = value;
  }
  public resetRequireDirectoryPath() {
    this._requireDirectoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireDirectoryPathInput() {
    return this._requireDirectoryPath;
  }

  // require_dns_as_cn - computed: true, optional: true, required: false
  private _requireDnsAsCn?: boolean | cdktn.IResolvable; 
  public get requireDnsAsCn() {
    return this.getBooleanAttribute('require_dns_as_cn');
  }
  public set requireDnsAsCn(value: boolean | cdktn.IResolvable) {
    this._requireDnsAsCn = value;
  }
  public resetRequireDnsAsCn() {
    this._requireDnsAsCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireDnsAsCnInput() {
    return this._requireDnsAsCn;
  }

  // require_email - computed: true, optional: true, required: false
  private _requireEmail?: boolean | cdktn.IResolvable; 
  public get requireEmail() {
    return this.getBooleanAttribute('require_email');
  }
  public set requireEmail(value: boolean | cdktn.IResolvable) {
    this._requireEmail = value;
  }
  public resetRequireEmail() {
    this._requireEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireEmailInput() {
    return this._requireEmail;
  }

  // san_require_directory_guid - computed: true, optional: true, required: false
  private _sanRequireDirectoryGuid?: boolean | cdktn.IResolvable; 
  public get sanRequireDirectoryGuid() {
    return this.getBooleanAttribute('san_require_directory_guid');
  }
  public set sanRequireDirectoryGuid(value: boolean | cdktn.IResolvable) {
    this._sanRequireDirectoryGuid = value;
  }
  public resetSanRequireDirectoryGuid() {
    this._sanRequireDirectoryGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireDirectoryGuidInput() {
    return this._sanRequireDirectoryGuid;
  }

  // san_require_dns - computed: true, optional: true, required: false
  private _sanRequireDns?: boolean | cdktn.IResolvable; 
  public get sanRequireDns() {
    return this.getBooleanAttribute('san_require_dns');
  }
  public set sanRequireDns(value: boolean | cdktn.IResolvable) {
    this._sanRequireDns = value;
  }
  public resetSanRequireDns() {
    this._sanRequireDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireDnsInput() {
    return this._sanRequireDns;
  }

  // san_require_domain_dns - computed: true, optional: true, required: false
  private _sanRequireDomainDns?: boolean | cdktn.IResolvable; 
  public get sanRequireDomainDns() {
    return this.getBooleanAttribute('san_require_domain_dns');
  }
  public set sanRequireDomainDns(value: boolean | cdktn.IResolvable) {
    this._sanRequireDomainDns = value;
  }
  public resetSanRequireDomainDns() {
    this._sanRequireDomainDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireDomainDnsInput() {
    return this._sanRequireDomainDns;
  }

  // san_require_email - computed: true, optional: true, required: false
  private _sanRequireEmail?: boolean | cdktn.IResolvable; 
  public get sanRequireEmail() {
    return this.getBooleanAttribute('san_require_email');
  }
  public set sanRequireEmail(value: boolean | cdktn.IResolvable) {
    this._sanRequireEmail = value;
  }
  public resetSanRequireEmail() {
    this._sanRequireEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireEmailInput() {
    return this._sanRequireEmail;
  }

  // san_require_spn - computed: true, optional: true, required: false
  private _sanRequireSpn?: boolean | cdktn.IResolvable; 
  public get sanRequireSpn() {
    return this.getBooleanAttribute('san_require_spn');
  }
  public set sanRequireSpn(value: boolean | cdktn.IResolvable) {
    this._sanRequireSpn = value;
  }
  public resetSanRequireSpn() {
    this._sanRequireSpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireSpnInput() {
    return this._sanRequireSpn;
  }

  // san_require_upn - computed: true, optional: true, required: false
  private _sanRequireUpn?: boolean | cdktn.IResolvable; 
  public get sanRequireUpn() {
    return this.getBooleanAttribute('san_require_upn');
  }
  public set sanRequireUpn(value: boolean | cdktn.IResolvable) {
    this._sanRequireUpn = value;
  }
  public resetSanRequireUpn() {
    this._sanRequireUpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanRequireUpnInput() {
    return this._sanRequireUpn;
  }
}
export interface PcaconnectoradTemplateDefinitionTemplateV4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#certificate_validity PcaconnectoradTemplate#certificate_validity}
  */
  readonly certificateValidity?: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#enrollment_flags PcaconnectoradTemplate#enrollment_flags}
  */
  readonly enrollmentFlags?: PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#extensions PcaconnectoradTemplate#extensions}
  */
  readonly extensions?: PcaconnectoradTemplateDefinitionTemplateV4Extensions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#general_flags PcaconnectoradTemplate#general_flags}
  */
  readonly generalFlags?: PcaconnectoradTemplateDefinitionTemplateV4GeneralFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#hash_algorithm PcaconnectoradTemplate#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#private_key_attributes PcaconnectoradTemplate#private_key_attributes}
  */
  readonly privateKeyAttributes?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#private_key_flags PcaconnectoradTemplate#private_key_flags}
  */
  readonly privateKeyFlags?: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#subject_name_flags PcaconnectoradTemplate#subject_name_flags}
  */
  readonly subjectNameFlags?: PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#superseded_templates PcaconnectoradTemplate#superseded_templates}
  */
  readonly supersededTemplates?: string[];
}

export function pcaconnectoradTemplateDefinitionTemplateV4ToTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_validity: pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityToTerraform(struct!.certificateValidity),
    enrollment_flags: pcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsToTerraform(struct!.enrollmentFlags),
    extensions: pcaconnectoradTemplateDefinitionTemplateV4ExtensionsToTerraform(struct!.extensions),
    general_flags: pcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsToTerraform(struct!.generalFlags),
    hash_algorithm: cdktn.stringToTerraform(struct!.hashAlgorithm),
    private_key_attributes: pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesToTerraform(struct!.privateKeyAttributes),
    private_key_flags: pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsToTerraform(struct!.privateKeyFlags),
    subject_name_flags: pcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsToTerraform(struct!.subjectNameFlags),
    superseded_templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supersededTemplates),
  }
}


export function pcaconnectoradTemplateDefinitionTemplateV4ToHclTerraform(struct?: PcaconnectoradTemplateDefinitionTemplateV4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_validity: {
      value: pcaconnectoradTemplateDefinitionTemplateV4CertificateValidityToHclTerraform(struct!.certificateValidity),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4CertificateValidity",
    },
    enrollment_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsToHclTerraform(struct!.enrollmentFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags",
    },
    extensions: {
      value: pcaconnectoradTemplateDefinitionTemplateV4ExtensionsToHclTerraform(struct!.extensions),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4Extensions",
    },
    general_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsToHclTerraform(struct!.generalFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4GeneralFlags",
    },
    hash_algorithm: {
      value: cdktn.stringToHclTerraform(struct!.hashAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_attributes: {
      value: pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesToHclTerraform(struct!.privateKeyAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes",
    },
    private_key_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsToHclTerraform(struct!.privateKeyFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags",
    },
    subject_name_flags: {
      value: pcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsToHclTerraform(struct!.subjectNameFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags",
    },
    superseded_templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supersededTemplates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionTemplateV4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinitionTemplateV4 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateValidity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateValidity = this._certificateValidity?.internalValue;
    }
    if (this._enrollmentFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentFlags = this._enrollmentFlags?.internalValue;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._generalFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generalFlags = this._generalFlags?.internalValue;
    }
    if (this._hashAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithm = this._hashAlgorithm;
    }
    if (this._privateKeyAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyAttributes = this._privateKeyAttributes?.internalValue;
    }
    if (this._privateKeyFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFlags = this._privateKeyFlags?.internalValue;
    }
    if (this._subjectNameFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectNameFlags = this._subjectNameFlags?.internalValue;
    }
    if (this._supersededTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.supersededTemplates = this._supersededTemplates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinitionTemplateV4 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateValidity.internalValue = undefined;
      this._enrollmentFlags.internalValue = undefined;
      this._extensions.internalValue = undefined;
      this._generalFlags.internalValue = undefined;
      this._hashAlgorithm = undefined;
      this._privateKeyAttributes.internalValue = undefined;
      this._privateKeyFlags.internalValue = undefined;
      this._subjectNameFlags.internalValue = undefined;
      this._supersededTemplates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateValidity.internalValue = value.certificateValidity;
      this._enrollmentFlags.internalValue = value.enrollmentFlags;
      this._extensions.internalValue = value.extensions;
      this._generalFlags.internalValue = value.generalFlags;
      this._hashAlgorithm = value.hashAlgorithm;
      this._privateKeyAttributes.internalValue = value.privateKeyAttributes;
      this._privateKeyFlags.internalValue = value.privateKeyFlags;
      this._subjectNameFlags.internalValue = value.subjectNameFlags;
      this._supersededTemplates = value.supersededTemplates;
    }
  }

  // certificate_validity - computed: true, optional: true, required: false
  private _certificateValidity = new PcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference(this, "certificate_validity");
  public get certificateValidity() {
    return this._certificateValidity;
  }
  public putCertificateValidity(value: PcaconnectoradTemplateDefinitionTemplateV4CertificateValidity) {
    this._certificateValidity.internalValue = value;
  }
  public resetCertificateValidity() {
    this._certificateValidity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidityInput() {
    return this._certificateValidity.internalValue;
  }

  // enrollment_flags - computed: true, optional: true, required: false
  private _enrollmentFlags = new PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference(this, "enrollment_flags");
  public get enrollmentFlags() {
    return this._enrollmentFlags;
  }
  public putEnrollmentFlags(value: PcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags) {
    this._enrollmentFlags.internalValue = value;
  }
  public resetEnrollmentFlags() {
    this._enrollmentFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentFlagsInput() {
    return this._enrollmentFlags.internalValue;
  }

  // extensions - computed: true, optional: true, required: false
  private _extensions = new PcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: PcaconnectoradTemplateDefinitionTemplateV4Extensions) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // general_flags - computed: true, optional: true, required: false
  private _generalFlags = new PcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference(this, "general_flags");
  public get generalFlags() {
    return this._generalFlags;
  }
  public putGeneralFlags(value: PcaconnectoradTemplateDefinitionTemplateV4GeneralFlags) {
    this._generalFlags.internalValue = value;
  }
  public resetGeneralFlags() {
    this._generalFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalFlagsInput() {
    return this._generalFlags.internalValue;
  }

  // hash_algorithm - computed: true, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
  }

  // private_key_attributes - computed: true, optional: true, required: false
  private _privateKeyAttributes = new PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference(this, "private_key_attributes");
  public get privateKeyAttributes() {
    return this._privateKeyAttributes;
  }
  public putPrivateKeyAttributes(value: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes) {
    this._privateKeyAttributes.internalValue = value;
  }
  public resetPrivateKeyAttributes() {
    this._privateKeyAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyAttributesInput() {
    return this._privateKeyAttributes.internalValue;
  }

  // private_key_flags - computed: true, optional: true, required: false
  private _privateKeyFlags = new PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference(this, "private_key_flags");
  public get privateKeyFlags() {
    return this._privateKeyFlags;
  }
  public putPrivateKeyFlags(value: PcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags) {
    this._privateKeyFlags.internalValue = value;
  }
  public resetPrivateKeyFlags() {
    this._privateKeyFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFlagsInput() {
    return this._privateKeyFlags.internalValue;
  }

  // subject_name_flags - computed: true, optional: true, required: false
  private _subjectNameFlags = new PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference(this, "subject_name_flags");
  public get subjectNameFlags() {
    return this._subjectNameFlags;
  }
  public putSubjectNameFlags(value: PcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags) {
    this._subjectNameFlags.internalValue = value;
  }
  public resetSubjectNameFlags() {
    this._subjectNameFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameFlagsInput() {
    return this._subjectNameFlags.internalValue;
  }

  // superseded_templates - computed: true, optional: true, required: false
  private _supersededTemplates?: string[]; 
  public get supersededTemplates() {
    return this.getListAttribute('superseded_templates');
  }
  public set supersededTemplates(value: string[]) {
    this._supersededTemplates = value;
  }
  public resetSupersededTemplates() {
    this._supersededTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supersededTemplatesInput() {
    return this._supersededTemplates;
  }
}
export interface PcaconnectoradTemplateDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#template_v2 PcaconnectoradTemplate#template_v2}
  */
  readonly templateV2?: PcaconnectoradTemplateDefinitionTemplateV2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#template_v3 PcaconnectoradTemplate#template_v3}
  */
  readonly templateV3?: PcaconnectoradTemplateDefinitionTemplateV3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#template_v4 PcaconnectoradTemplate#template_v4}
  */
  readonly templateV4?: PcaconnectoradTemplateDefinitionTemplateV4;
}

export function pcaconnectoradTemplateDefinitionToTerraform(struct?: PcaconnectoradTemplateDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    template_v2: pcaconnectoradTemplateDefinitionTemplateV2ToTerraform(struct!.templateV2),
    template_v3: pcaconnectoradTemplateDefinitionTemplateV3ToTerraform(struct!.templateV3),
    template_v4: pcaconnectoradTemplateDefinitionTemplateV4ToTerraform(struct!.templateV4),
  }
}


export function pcaconnectoradTemplateDefinitionToHclTerraform(struct?: PcaconnectoradTemplateDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    template_v2: {
      value: pcaconnectoradTemplateDefinitionTemplateV2ToHclTerraform(struct!.templateV2),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV2",
    },
    template_v3: {
      value: pcaconnectoradTemplateDefinitionTemplateV3ToHclTerraform(struct!.templateV3),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV3",
    },
    template_v4: {
      value: pcaconnectoradTemplateDefinitionTemplateV4ToHclTerraform(struct!.templateV4),
      isBlock: true,
      type: "struct",
      storageClassType: "PcaconnectoradTemplateDefinitionTemplateV4",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcaconnectoradTemplateDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcaconnectoradTemplateDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateV2 = this._templateV2?.internalValue;
    }
    if (this._templateV3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateV3 = this._templateV3?.internalValue;
    }
    if (this._templateV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateV4 = this._templateV4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcaconnectoradTemplateDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._templateV2.internalValue = undefined;
      this._templateV3.internalValue = undefined;
      this._templateV4.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._templateV2.internalValue = value.templateV2;
      this._templateV3.internalValue = value.templateV3;
      this._templateV4.internalValue = value.templateV4;
    }
  }

  // template_v2 - computed: true, optional: true, required: false
  private _templateV2 = new PcaconnectoradTemplateDefinitionTemplateV2OutputReference(this, "template_v2");
  public get templateV2() {
    return this._templateV2;
  }
  public putTemplateV2(value: PcaconnectoradTemplateDefinitionTemplateV2) {
    this._templateV2.internalValue = value;
  }
  public resetTemplateV2() {
    this._templateV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateV2Input() {
    return this._templateV2.internalValue;
  }

  // template_v3 - computed: true, optional: true, required: false
  private _templateV3 = new PcaconnectoradTemplateDefinitionTemplateV3OutputReference(this, "template_v3");
  public get templateV3() {
    return this._templateV3;
  }
  public putTemplateV3(value: PcaconnectoradTemplateDefinitionTemplateV3) {
    this._templateV3.internalValue = value;
  }
  public resetTemplateV3() {
    this._templateV3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateV3Input() {
    return this._templateV3.internalValue;
  }

  // template_v4 - computed: true, optional: true, required: false
  private _templateV4 = new PcaconnectoradTemplateDefinitionTemplateV4OutputReference(this, "template_v4");
  public get templateV4() {
    return this._templateV4;
  }
  public putTemplateV4(value: PcaconnectoradTemplateDefinitionTemplateV4) {
    this._templateV4.internalValue = value;
  }
  public resetTemplateV4() {
    this._templateV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateV4Input() {
    return this._templateV4.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template awscc_pcaconnectorad_template}
*/
export class PcaconnectoradTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pcaconnectorad_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PcaconnectoradTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PcaconnectoradTemplate to import
  * @param importFromId The id of the existing PcaconnectoradTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PcaconnectoradTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorad_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/pcaconnectorad_template awscc_pcaconnectorad_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PcaconnectoradTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PcaconnectoradTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_pcaconnectorad_template',
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
    this._connectorArn = config.connectorArn;
    this._definition.internalValue = config.definition;
    this._name = config.name;
    this._reenrollAllCertificateHolders = config.reenrollAllCertificateHolders;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_arn - computed: false, optional: false, required: true
  private _connectorArn?: string; 
  public get connectorArn() {
    return this.getStringAttribute('connector_arn');
  }
  public set connectorArn(value: string) {
    this._connectorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorArnInput() {
    return this._connectorArn;
  }

  // definition - computed: false, optional: false, required: true
  private _definition = new PcaconnectoradTemplateDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: PcaconnectoradTemplateDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
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

  // reenroll_all_certificate_holders - computed: true, optional: true, required: false
  private _reenrollAllCertificateHolders?: boolean | cdktn.IResolvable; 
  public get reenrollAllCertificateHolders() {
    return this.getBooleanAttribute('reenroll_all_certificate_holders');
  }
  public set reenrollAllCertificateHolders(value: boolean | cdktn.IResolvable) {
    this._reenrollAllCertificateHolders = value;
  }
  public resetReenrollAllCertificateHolders() {
    this._reenrollAllCertificateHolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reenrollAllCertificateHoldersInput() {
    return this._reenrollAllCertificateHolders;
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

  // template_arn - computed: true, optional: false, required: false
  public get templateArn() {
    return this.getStringAttribute('template_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_arn: cdktn.stringToTerraform(this._connectorArn),
      definition: pcaconnectoradTemplateDefinitionToTerraform(this._definition.internalValue),
      name: cdktn.stringToTerraform(this._name),
      reenroll_all_certificate_holders: cdktn.booleanToTerraform(this._reenrollAllCertificateHolders),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_arn: {
        value: cdktn.stringToHclTerraform(this._connectorArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      definition: {
        value: pcaconnectoradTemplateDefinitionToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PcaconnectoradTemplateDefinition",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reenroll_all_certificate_holders: {
        value: cdktn.booleanToHclTerraform(this._reenrollAllCertificateHolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
