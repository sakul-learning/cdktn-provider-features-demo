// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcaconnectorad_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPcaconnectoradTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcaconnectorad_template#id DataAwsccPcaconnectoradTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // period_type - computed: true, optional: false, required: false
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // period_type - computed: true, optional: false, required: false
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // renewal_period - computed: true, optional: false, required: false
  private _renewalPeriod = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference(this, "renewal_period");
  public get renewalPeriod() {
    return this._renewalPeriod;
  }

  // validity_period - computed: true, optional: false, required: false
  private _validityPeriod = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference(this, "validity_period");
  public get validityPeriod() {
    return this._validityPeriod;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_key_reuse_on_nt_token_keyset_storage_full - computed: true, optional: false, required: false
  public get enableKeyReuseOnNtTokenKeysetStorageFull() {
    return this.getBooleanAttribute('enable_key_reuse_on_nt_token_keyset_storage_full');
  }

  // include_symmetric_algorithms - computed: true, optional: false, required: false
  public get includeSymmetricAlgorithms() {
    return this.getBooleanAttribute('include_symmetric_algorithms');
  }

  // no_security_extension - computed: true, optional: false, required: false
  public get noSecurityExtension() {
    return this.getBooleanAttribute('no_security_extension');
  }

  // remove_invalid_certificate_from_personal_store - computed: true, optional: false, required: false
  public get removeInvalidCertificateFromPersonalStore() {
    return this.getBooleanAttribute('remove_invalid_certificate_from_personal_store');
  }

  // user_interaction_required - computed: true, optional: false, required: false
  public get userInteractionRequired() {
    return this.getBooleanAttribute('user_interaction_required');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_object_identifier - computed: true, optional: false, required: false
  public get policyObjectIdentifier() {
    return this.getStringAttribute('policy_object_identifier');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference {
    return new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getBooleanAttribute('critical');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_encipherment - computed: true, optional: false, required: false
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }

  // digital_signature - computed: true, optional: false, required: false
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }

  // key_agreement - computed: true, optional: false, required: false
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }

  // key_encipherment - computed: true, optional: false, required: false
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }

  // non_repudiation - computed: true, optional: false, required: false
  public get nonRepudiation() {
    return this.getBooleanAttribute('non_repudiation');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getBooleanAttribute('critical');
  }

  // usage_flags - computed: true, optional: false, required: false
  private _usageFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference(this, "usage_flags");
  public get usageFlags() {
    return this._usageFlags;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_policies - computed: true, optional: false, required: false
  private _applicationPolicies = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference(this, "application_policies");
  public get applicationPolicies() {
    return this._applicationPolicies;
  }

  // key_usage - computed: true, optional: false, required: false
  private _keyUsage = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_enrollment - computed: true, optional: false, required: false
  public get autoEnrollment() {
    return this.getBooleanAttribute('auto_enrollment');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getBooleanAttribute('machine_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crypto_providers - computed: true, optional: false, required: false
  public get cryptoProviders() {
    return this.getListAttribute('crypto_providers');
  }

  // key_spec - computed: true, optional: false, required: false
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }

  // minimal_key_length - computed: true, optional: false, required: false
  public get minimalKeyLength() {
    return this.getNumberAttribute('minimal_key_length');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_version - computed: true, optional: false, required: false
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }

  // exportable_key - computed: true, optional: false, required: false
  public get exportableKey() {
    return this.getBooleanAttribute('exportable_key');
  }

  // strong_key_protection_required - computed: true, optional: false, required: false
  public get strongKeyProtectionRequired() {
    return this.getBooleanAttribute('strong_key_protection_required');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // require_common_name - computed: true, optional: false, required: false
  public get requireCommonName() {
    return this.getBooleanAttribute('require_common_name');
  }

  // require_directory_path - computed: true, optional: false, required: false
  public get requireDirectoryPath() {
    return this.getBooleanAttribute('require_directory_path');
  }

  // require_dns_as_cn - computed: true, optional: false, required: false
  public get requireDnsAsCn() {
    return this.getBooleanAttribute('require_dns_as_cn');
  }

  // require_email - computed: true, optional: false, required: false
  public get requireEmail() {
    return this.getBooleanAttribute('require_email');
  }

  // san_require_directory_guid - computed: true, optional: false, required: false
  public get sanRequireDirectoryGuid() {
    return this.getBooleanAttribute('san_require_directory_guid');
  }

  // san_require_dns - computed: true, optional: false, required: false
  public get sanRequireDns() {
    return this.getBooleanAttribute('san_require_dns');
  }

  // san_require_domain_dns - computed: true, optional: false, required: false
  public get sanRequireDomainDns() {
    return this.getBooleanAttribute('san_require_domain_dns');
  }

  // san_require_email - computed: true, optional: false, required: false
  public get sanRequireEmail() {
    return this.getBooleanAttribute('san_require_email');
  }

  // san_require_spn - computed: true, optional: false, required: false
  public get sanRequireSpn() {
    return this.getBooleanAttribute('san_require_spn');
  }

  // san_require_upn - computed: true, optional: false, required: false
  public get sanRequireUpn() {
    return this.getBooleanAttribute('san_require_upn');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV2 {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_validity - computed: true, optional: false, required: false
  private _certificateValidity = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference(this, "certificate_validity");
  public get certificateValidity() {
    return this._certificateValidity;
  }

  // enrollment_flags - computed: true, optional: false, required: false
  private _enrollmentFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference(this, "enrollment_flags");
  public get enrollmentFlags() {
    return this._enrollmentFlags;
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // general_flags - computed: true, optional: false, required: false
  private _generalFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference(this, "general_flags");
  public get generalFlags() {
    return this._generalFlags;
  }

  // private_key_attributes - computed: true, optional: false, required: false
  private _privateKeyAttributes = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference(this, "private_key_attributes");
  public get privateKeyAttributes() {
    return this._privateKeyAttributes;
  }

  // private_key_flags - computed: true, optional: false, required: false
  private _privateKeyFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference(this, "private_key_flags");
  public get privateKeyFlags() {
    return this._privateKeyFlags;
  }

  // subject_name_flags - computed: true, optional: false, required: false
  private _subjectNameFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference(this, "subject_name_flags");
  public get subjectNameFlags() {
    return this._subjectNameFlags;
  }

  // superseded_templates - computed: true, optional: false, required: false
  public get supersededTemplates() {
    return this.getListAttribute('superseded_templates');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // period_type - computed: true, optional: false, required: false
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // period_type - computed: true, optional: false, required: false
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // renewal_period - computed: true, optional: false, required: false
  private _renewalPeriod = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference(this, "renewal_period");
  public get renewalPeriod() {
    return this._renewalPeriod;
  }

  // validity_period - computed: true, optional: false, required: false
  private _validityPeriod = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference(this, "validity_period");
  public get validityPeriod() {
    return this._validityPeriod;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_key_reuse_on_nt_token_keyset_storage_full - computed: true, optional: false, required: false
  public get enableKeyReuseOnNtTokenKeysetStorageFull() {
    return this.getBooleanAttribute('enable_key_reuse_on_nt_token_keyset_storage_full');
  }

  // include_symmetric_algorithms - computed: true, optional: false, required: false
  public get includeSymmetricAlgorithms() {
    return this.getBooleanAttribute('include_symmetric_algorithms');
  }

  // no_security_extension - computed: true, optional: false, required: false
  public get noSecurityExtension() {
    return this.getBooleanAttribute('no_security_extension');
  }

  // remove_invalid_certificate_from_personal_store - computed: true, optional: false, required: false
  public get removeInvalidCertificateFromPersonalStore() {
    return this.getBooleanAttribute('remove_invalid_certificate_from_personal_store');
  }

  // user_interaction_required - computed: true, optional: false, required: false
  public get userInteractionRequired() {
    return this.getBooleanAttribute('user_interaction_required');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_object_identifier - computed: true, optional: false, required: false
  public get policyObjectIdentifier() {
    return this.getStringAttribute('policy_object_identifier');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference {
    return new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getBooleanAttribute('critical');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_encipherment - computed: true, optional: false, required: false
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }

  // digital_signature - computed: true, optional: false, required: false
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }

  // key_agreement - computed: true, optional: false, required: false
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }

  // key_encipherment - computed: true, optional: false, required: false
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }

  // non_repudiation - computed: true, optional: false, required: false
  public get nonRepudiation() {
    return this.getBooleanAttribute('non_repudiation');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getBooleanAttribute('critical');
  }

  // usage_flags - computed: true, optional: false, required: false
  private _usageFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference(this, "usage_flags");
  public get usageFlags() {
    return this._usageFlags;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_policies - computed: true, optional: false, required: false
  private _applicationPolicies = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference(this, "application_policies");
  public get applicationPolicies() {
    return this._applicationPolicies;
  }

  // key_usage - computed: true, optional: false, required: false
  private _keyUsage = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_enrollment - computed: true, optional: false, required: false
  public get autoEnrollment() {
    return this.getBooleanAttribute('auto_enrollment');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getBooleanAttribute('machine_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decrypt - computed: true, optional: false, required: false
  public get decrypt() {
    return this.getBooleanAttribute('decrypt');
  }

  // key_agreement - computed: true, optional: false, required: false
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }

  // sign - computed: true, optional: false, required: false
  public get sign() {
    return this.getBooleanAttribute('sign');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property_flags - computed: true, optional: false, required: false
  private _propertyFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference(this, "property_flags");
  public get propertyFlags() {
    return this._propertyFlags;
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // crypto_providers - computed: true, optional: false, required: false
  public get cryptoProviders() {
    return this.getListAttribute('crypto_providers');
  }

  // key_spec - computed: true, optional: false, required: false
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }

  // key_usage_property - computed: true, optional: false, required: false
  private _keyUsageProperty = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference(this, "key_usage_property");
  public get keyUsageProperty() {
    return this._keyUsageProperty;
  }

  // minimal_key_length - computed: true, optional: false, required: false
  public get minimalKeyLength() {
    return this.getNumberAttribute('minimal_key_length');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_version - computed: true, optional: false, required: false
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }

  // exportable_key - computed: true, optional: false, required: false
  public get exportableKey() {
    return this.getBooleanAttribute('exportable_key');
  }

  // require_alternate_signature_algorithm - computed: true, optional: false, required: false
  public get requireAlternateSignatureAlgorithm() {
    return this.getBooleanAttribute('require_alternate_signature_algorithm');
  }

  // strong_key_protection_required - computed: true, optional: false, required: false
  public get strongKeyProtectionRequired() {
    return this.getBooleanAttribute('strong_key_protection_required');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // require_common_name - computed: true, optional: false, required: false
  public get requireCommonName() {
    return this.getBooleanAttribute('require_common_name');
  }

  // require_directory_path - computed: true, optional: false, required: false
  public get requireDirectoryPath() {
    return this.getBooleanAttribute('require_directory_path');
  }

  // require_dns_as_cn - computed: true, optional: false, required: false
  public get requireDnsAsCn() {
    return this.getBooleanAttribute('require_dns_as_cn');
  }

  // require_email - computed: true, optional: false, required: false
  public get requireEmail() {
    return this.getBooleanAttribute('require_email');
  }

  // san_require_directory_guid - computed: true, optional: false, required: false
  public get sanRequireDirectoryGuid() {
    return this.getBooleanAttribute('san_require_directory_guid');
  }

  // san_require_dns - computed: true, optional: false, required: false
  public get sanRequireDns() {
    return this.getBooleanAttribute('san_require_dns');
  }

  // san_require_domain_dns - computed: true, optional: false, required: false
  public get sanRequireDomainDns() {
    return this.getBooleanAttribute('san_require_domain_dns');
  }

  // san_require_email - computed: true, optional: false, required: false
  public get sanRequireEmail() {
    return this.getBooleanAttribute('san_require_email');
  }

  // san_require_spn - computed: true, optional: false, required: false
  public get sanRequireSpn() {
    return this.getBooleanAttribute('san_require_spn');
  }

  // san_require_upn - computed: true, optional: false, required: false
  public get sanRequireUpn() {
    return this.getBooleanAttribute('san_require_upn');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV3 {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_validity - computed: true, optional: false, required: false
  private _certificateValidity = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference(this, "certificate_validity");
  public get certificateValidity() {
    return this._certificateValidity;
  }

  // enrollment_flags - computed: true, optional: false, required: false
  private _enrollmentFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference(this, "enrollment_flags");
  public get enrollmentFlags() {
    return this._enrollmentFlags;
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // general_flags - computed: true, optional: false, required: false
  private _generalFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference(this, "general_flags");
  public get generalFlags() {
    return this._generalFlags;
  }

  // hash_algorithm - computed: true, optional: false, required: false
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }

  // private_key_attributes - computed: true, optional: false, required: false
  private _privateKeyAttributes = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference(this, "private_key_attributes");
  public get privateKeyAttributes() {
    return this._privateKeyAttributes;
  }

  // private_key_flags - computed: true, optional: false, required: false
  private _privateKeyFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference(this, "private_key_flags");
  public get privateKeyFlags() {
    return this._privateKeyFlags;
  }

  // subject_name_flags - computed: true, optional: false, required: false
  private _subjectNameFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference(this, "subject_name_flags");
  public get subjectNameFlags() {
    return this._subjectNameFlags;
  }

  // superseded_templates - computed: true, optional: false, required: false
  public get supersededTemplates() {
    return this.getListAttribute('superseded_templates');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // period_type - computed: true, optional: false, required: false
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // period_type - computed: true, optional: false, required: false
  public get periodType() {
    return this.getStringAttribute('period_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // renewal_period - computed: true, optional: false, required: false
  private _renewalPeriod = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference(this, "renewal_period");
  public get renewalPeriod() {
    return this._renewalPeriod;
  }

  // validity_period - computed: true, optional: false, required: false
  private _validityPeriod = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference(this, "validity_period");
  public get validityPeriod() {
    return this._validityPeriod;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_key_reuse_on_nt_token_keyset_storage_full - computed: true, optional: false, required: false
  public get enableKeyReuseOnNtTokenKeysetStorageFull() {
    return this.getBooleanAttribute('enable_key_reuse_on_nt_token_keyset_storage_full');
  }

  // include_symmetric_algorithms - computed: true, optional: false, required: false
  public get includeSymmetricAlgorithms() {
    return this.getBooleanAttribute('include_symmetric_algorithms');
  }

  // no_security_extension - computed: true, optional: false, required: false
  public get noSecurityExtension() {
    return this.getBooleanAttribute('no_security_extension');
  }

  // remove_invalid_certificate_from_personal_store - computed: true, optional: false, required: false
  public get removeInvalidCertificateFromPersonalStore() {
    return this.getBooleanAttribute('remove_invalid_certificate_from_personal_store');
  }

  // user_interaction_required - computed: true, optional: false, required: false
  public get userInteractionRequired() {
    return this.getBooleanAttribute('user_interaction_required');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_object_identifier - computed: true, optional: false, required: false
  public get policyObjectIdentifier() {
    return this.getStringAttribute('policy_object_identifier');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference {
    return new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getBooleanAttribute('critical');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_encipherment - computed: true, optional: false, required: false
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }

  // digital_signature - computed: true, optional: false, required: false
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }

  // key_agreement - computed: true, optional: false, required: false
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }

  // key_encipherment - computed: true, optional: false, required: false
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }

  // non_repudiation - computed: true, optional: false, required: false
  public get nonRepudiation() {
    return this.getBooleanAttribute('non_repudiation');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getBooleanAttribute('critical');
  }

  // usage_flags - computed: true, optional: false, required: false
  private _usageFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference(this, "usage_flags");
  public get usageFlags() {
    return this._usageFlags;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_policies - computed: true, optional: false, required: false
  private _applicationPolicies = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference(this, "application_policies");
  public get applicationPolicies() {
    return this._applicationPolicies;
  }

  // key_usage - computed: true, optional: false, required: false
  private _keyUsage = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_enrollment - computed: true, optional: false, required: false
  public get autoEnrollment() {
    return this.getBooleanAttribute('auto_enrollment');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getBooleanAttribute('machine_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decrypt - computed: true, optional: false, required: false
  public get decrypt() {
    return this.getBooleanAttribute('decrypt');
  }

  // key_agreement - computed: true, optional: false, required: false
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }

  // sign - computed: true, optional: false, required: false
  public get sign() {
    return this.getBooleanAttribute('sign');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property_flags - computed: true, optional: false, required: false
  private _propertyFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference(this, "property_flags");
  public get propertyFlags() {
    return this._propertyFlags;
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // crypto_providers - computed: true, optional: false, required: false
  public get cryptoProviders() {
    return this.getListAttribute('crypto_providers');
  }

  // key_spec - computed: true, optional: false, required: false
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }

  // key_usage_property - computed: true, optional: false, required: false
  private _keyUsageProperty = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference(this, "key_usage_property");
  public get keyUsageProperty() {
    return this._keyUsageProperty;
  }

  // minimal_key_length - computed: true, optional: false, required: false
  public get minimalKeyLength() {
    return this.getNumberAttribute('minimal_key_length');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_version - computed: true, optional: false, required: false
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }

  // exportable_key - computed: true, optional: false, required: false
  public get exportableKey() {
    return this.getBooleanAttribute('exportable_key');
  }

  // require_alternate_signature_algorithm - computed: true, optional: false, required: false
  public get requireAlternateSignatureAlgorithm() {
    return this.getBooleanAttribute('require_alternate_signature_algorithm');
  }

  // require_same_key_renewal - computed: true, optional: false, required: false
  public get requireSameKeyRenewal() {
    return this.getBooleanAttribute('require_same_key_renewal');
  }

  // strong_key_protection_required - computed: true, optional: false, required: false
  public get strongKeyProtectionRequired() {
    return this.getBooleanAttribute('strong_key_protection_required');
  }

  // use_legacy_provider - computed: true, optional: false, required: false
  public get useLegacyProvider() {
    return this.getBooleanAttribute('use_legacy_provider');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // require_common_name - computed: true, optional: false, required: false
  public get requireCommonName() {
    return this.getBooleanAttribute('require_common_name');
  }

  // require_directory_path - computed: true, optional: false, required: false
  public get requireDirectoryPath() {
    return this.getBooleanAttribute('require_directory_path');
  }

  // require_dns_as_cn - computed: true, optional: false, required: false
  public get requireDnsAsCn() {
    return this.getBooleanAttribute('require_dns_as_cn');
  }

  // require_email - computed: true, optional: false, required: false
  public get requireEmail() {
    return this.getBooleanAttribute('require_email');
  }

  // san_require_directory_guid - computed: true, optional: false, required: false
  public get sanRequireDirectoryGuid() {
    return this.getBooleanAttribute('san_require_directory_guid');
  }

  // san_require_dns - computed: true, optional: false, required: false
  public get sanRequireDns() {
    return this.getBooleanAttribute('san_require_dns');
  }

  // san_require_domain_dns - computed: true, optional: false, required: false
  public get sanRequireDomainDns() {
    return this.getBooleanAttribute('san_require_domain_dns');
  }

  // san_require_email - computed: true, optional: false, required: false
  public get sanRequireEmail() {
    return this.getBooleanAttribute('san_require_email');
  }

  // san_require_spn - computed: true, optional: false, required: false
  public get sanRequireSpn() {
    return this.getBooleanAttribute('san_require_spn');
  }

  // san_require_upn - computed: true, optional: false, required: false
  public get sanRequireUpn() {
    return this.getBooleanAttribute('san_require_upn');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinitionTemplateV4 {
}

export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_validity - computed: true, optional: false, required: false
  private _certificateValidity = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference(this, "certificate_validity");
  public get certificateValidity() {
    return this._certificateValidity;
  }

  // enrollment_flags - computed: true, optional: false, required: false
  private _enrollmentFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference(this, "enrollment_flags");
  public get enrollmentFlags() {
    return this._enrollmentFlags;
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // general_flags - computed: true, optional: false, required: false
  private _generalFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference(this, "general_flags");
  public get generalFlags() {
    return this._generalFlags;
  }

  // hash_algorithm - computed: true, optional: false, required: false
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }

  // private_key_attributes - computed: true, optional: false, required: false
  private _privateKeyAttributes = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference(this, "private_key_attributes");
  public get privateKeyAttributes() {
    return this._privateKeyAttributes;
  }

  // private_key_flags - computed: true, optional: false, required: false
  private _privateKeyFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference(this, "private_key_flags");
  public get privateKeyFlags() {
    return this._privateKeyFlags;
  }

  // subject_name_flags - computed: true, optional: false, required: false
  private _subjectNameFlags = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference(this, "subject_name_flags");
  public get subjectNameFlags() {
    return this._subjectNameFlags;
  }

  // superseded_templates - computed: true, optional: false, required: false
  public get supersededTemplates() {
    return this.getListAttribute('superseded_templates');
  }
}
export interface DataAwsccPcaconnectoradTemplateDefinition {
}

export function dataAwsccPcaconnectoradTemplateDefinitionToTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccPcaconnectoradTemplateDefinitionToHclTerraform(struct?: DataAwsccPcaconnectoradTemplateDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccPcaconnectoradTemplateDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccPcaconnectoradTemplateDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccPcaconnectoradTemplateDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template_v2 - computed: true, optional: false, required: false
  private _templateV2 = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference(this, "template_v2");
  public get templateV2() {
    return this._templateV2;
  }

  // template_v3 - computed: true, optional: false, required: false
  private _templateV3 = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference(this, "template_v3");
  public get templateV3() {
    return this._templateV3;
  }

  // template_v4 - computed: true, optional: false, required: false
  private _templateV4 = new DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference(this, "template_v4");
  public get templateV4() {
    return this._templateV4;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcaconnectorad_template awscc_pcaconnectorad_template}
*/
export class DataAwsccPcaconnectoradTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pcaconnectorad_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPcaconnectoradTemplate to import
  * @param importFromId The id of the existing DataAwsccPcaconnectoradTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcaconnectorad_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPcaconnectoradTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorad_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/pcaconnectorad_template awscc_pcaconnectorad_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPcaconnectoradTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPcaconnectoradTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_pcaconnectorad_template',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_arn - computed: true, optional: false, required: false
  public get connectorArn() {
    return this.getStringAttribute('connector_arn');
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataAwsccPcaconnectoradTemplateDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
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

  // reenroll_all_certificate_holders - computed: true, optional: false, required: false
  public get reenrollAllCertificateHolders() {
    return this.getBooleanAttribute('reenroll_all_certificate_holders');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
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
