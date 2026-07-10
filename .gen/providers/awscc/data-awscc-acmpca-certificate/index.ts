// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/acmpca_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAcmpcaCertificateConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/acmpca_certificate#id DataAwsccAcmpcaCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cps_uri - computed: true, optional: false, required: false
  public get cpsUri() {
    return this.getStringAttribute('cps_uri');
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_qualifier_id - computed: true, optional: false, required: false
  public get policyQualifierId() {
    return this.getStringAttribute('policy_qualifier_id');
  }

  // qualifier - computed: true, optional: false, required: false
  private _qualifier = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference(this, "qualifier");
  public get qualifier() {
    return this._qualifier;
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference {
    return new DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_policy_id - computed: true, optional: false, required: false
  public get certPolicyId() {
    return this.getStringAttribute('cert_policy_id');
  }

  // policy_qualifiers - computed: true, optional: false, required: false
  private _policyQualifiers = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList(this, "policy_qualifiers", false);
  public get policyQualifiers() {
    return this._policyQualifiers;
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference {
    return new DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensions | undefined) {
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

  // object_identifier - computed: true, optional: false, required: false
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference {
    return new DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extended_key_usage_object_identifier - computed: true, optional: false, required: false
  public get extendedKeyUsageObjectIdentifier() {
    return this.getStringAttribute('extended_key_usage_object_identifier');
  }

  // extended_key_usage_type - computed: true, optional: false, required: false
  public get extendedKeyUsageType() {
    return this.getStringAttribute('extended_key_usage_type');
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference {
    return new DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crl_sign - computed: true, optional: false, required: false
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }

  // data_encipherment - computed: true, optional: false, required: false
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }

  // decipher_only - computed: true, optional: false, required: false
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }

  // digital_signature - computed: true, optional: false, required: false
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }

  // encipher_only - computed: true, optional: false, required: false
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }

  // key_agreement - computed: true, optional: false, required: false
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }

  // key_cert_sign - computed: true, optional: false, required: false
  public get keyCertSign() {
    return this.getBooleanAttribute('key_cert_sign');
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
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_identifier - computed: true, optional: false, required: false
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference {
    return new DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // custom_attributes - computed: true, optional: false, required: false
  private _customAttributes = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }

  // distinguished_name_qualifier - computed: true, optional: false, required: false
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }

  // generation_qualifier - computed: true, optional: false, required: false
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }

  // given_name - computed: true, optional: false, required: false
  public get givenName() {
    return this.getStringAttribute('given_name');
  }

  // initials - computed: true, optional: false, required: false
  public get initials() {
    return this.getStringAttribute('initials');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // pseudonym - computed: true, optional: false, required: false
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // surname - computed: true, optional: false, required: false
  public get surname() {
    return this.getStringAttribute('surname');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_assigner - computed: true, optional: false, required: false
  public get nameAssigner() {
    return this.getStringAttribute('name_assigner');
  }

  // party_name - computed: true, optional: false, required: false
  public get partyName() {
    return this.getStringAttribute('party_name');
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type_id - computed: true, optional: false, required: false
  public get typeId() {
    return this.getStringAttribute('type_id');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_name - computed: true, optional: false, required: false
  private _directoryName = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference(this, "directory_name");
  public get directoryName() {
    return this._directoryName;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // edi_party_name - computed: true, optional: false, required: false
  private _ediPartyName = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference(this, "edi_party_name");
  public get ediPartyName() {
    return this._ediPartyName;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // other_name - computed: true, optional: false, required: false
  private _otherName = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference(this, "other_name");
  public get otherName() {
    return this._otherName;
  }

  // registered_id - computed: true, optional: false, required: false
  public get registeredId() {
    return this.getStringAttribute('registered_id');
  }

  // rfc_822_name - computed: true, optional: false, required: false
  public get rfc822Name() {
    return this.getStringAttribute('rfc_822_name');
  }

  // uniform_resource_identifier - computed: true, optional: false, required: false
  public get uniformResourceIdentifier() {
    return this.getStringAttribute('uniform_resource_identifier');
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference {
    return new DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughExtensions {
}

export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughExtensionsToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughExtensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughExtensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughExtensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_policies - computed: true, optional: false, required: false
  private _certificatePolicies = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsCertificatePoliciesList(this, "certificate_policies", false);
  public get certificatePolicies() {
    return this._certificatePolicies;
  }

  // custom_extensions - computed: true, optional: false, required: false
  private _customExtensions = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsCustomExtensionsList(this, "custom_extensions", false);
  public get customExtensions() {
    return this._customExtensions;
  }

  // extended_key_usage - computed: true, optional: false, required: false
  private _extendedKeyUsage = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsExtendedKeyUsageList(this, "extended_key_usage", false);
  public get extendedKeyUsage() {
    return this._extendedKeyUsage;
  }

  // key_usage - computed: true, optional: false, required: false
  private _keyUsage = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  private _subjectAlternativeNames = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsSubjectAlternativeNamesList(this, "subject_alternative_names", false);
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes {
}

export function dataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_identifier - computed: true, optional: false, required: false
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference {
    return new DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthroughSubject {
}

export function dataAwsccAcmpcaCertificateApiPassthroughSubjectToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughSubject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughSubjectToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthroughSubject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthroughSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthroughSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // custom_attributes - computed: true, optional: false, required: false
  private _customAttributes = new DataAwsccAcmpcaCertificateApiPassthroughSubjectCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }

  // distinguished_name_qualifier - computed: true, optional: false, required: false
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }

  // generation_qualifier - computed: true, optional: false, required: false
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }

  // given_name - computed: true, optional: false, required: false
  public get givenName() {
    return this.getStringAttribute('given_name');
  }

  // initials - computed: true, optional: false, required: false
  public get initials() {
    return this.getStringAttribute('initials');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // pseudonym - computed: true, optional: false, required: false
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // surname - computed: true, optional: false, required: false
  public get surname() {
    return this.getStringAttribute('surname');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccAcmpcaCertificateApiPassthrough {
}

export function dataAwsccAcmpcaCertificateApiPassthroughToTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthrough): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateApiPassthroughToHclTerraform(struct?: DataAwsccAcmpcaCertificateApiPassthrough): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateApiPassthroughOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateApiPassthrough | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateApiPassthrough | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new DataAwsccAcmpcaCertificateApiPassthroughExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // subject - computed: true, optional: false, required: false
  private _subject = new DataAwsccAcmpcaCertificateApiPassthroughSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
}
export interface DataAwsccAcmpcaCertificateValidity {
}

export function dataAwsccAcmpcaCertificateValidityToTerraform(struct?: DataAwsccAcmpcaCertificateValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateValidityToHclTerraform(struct?: DataAwsccAcmpcaCertificateValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateValidityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccAcmpcaCertificateValidityNotBefore {
}

export function dataAwsccAcmpcaCertificateValidityNotBeforeToTerraform(struct?: DataAwsccAcmpcaCertificateValidityNotBefore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateValidityNotBeforeToHclTerraform(struct?: DataAwsccAcmpcaCertificateValidityNotBefore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateValidityNotBefore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateValidityNotBefore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/acmpca_certificate awscc_acmpca_certificate}
*/
export class DataAwsccAcmpcaCertificate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_acmpca_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAcmpcaCertificate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAcmpcaCertificate to import
  * @param importFromId The id of the existing DataAwsccAcmpcaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/acmpca_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAcmpcaCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_acmpca_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/acmpca_certificate awscc_acmpca_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAcmpcaCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAcmpcaCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_acmpca_certificate',
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

  // api_passthrough - computed: true, optional: false, required: false
  private _apiPassthrough = new DataAwsccAcmpcaCertificateApiPassthroughOutputReference(this, "api_passthrough");
  public get apiPassthrough() {
    return this._apiPassthrough;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_authority_arn - computed: true, optional: false, required: false
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }

  // certificate_signing_request - computed: true, optional: false, required: false
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
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

  // signing_algorithm - computed: true, optional: false, required: false
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }

  // template_arn - computed: true, optional: false, required: false
  public get templateArn() {
    return this.getStringAttribute('template_arn');
  }

  // validity - computed: true, optional: false, required: false
  private _validity = new DataAwsccAcmpcaCertificateValidityOutputReference(this, "validity");
  public get validity() {
    return this._validity;
  }

  // validity_not_before - computed: true, optional: false, required: false
  private _validityNotBefore = new DataAwsccAcmpcaCertificateValidityNotBeforeOutputReference(this, "validity_not_before");
  public get validityNotBefore() {
    return this._validityNotBefore;
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
