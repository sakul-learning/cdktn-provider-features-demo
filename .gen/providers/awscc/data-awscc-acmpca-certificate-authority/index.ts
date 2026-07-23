// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/acmpca_certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAcmpcaCertificateAuthorityConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/acmpca_certificate_authority#id DataAwsccAcmpcaCertificateAuthority#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage {
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage | undefined) {
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
export interface DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes {
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | undefined) {
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

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference {
    return new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName {
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | undefined) {
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
  private _customAttributes = new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList(this, "custom_attributes", false);
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
export interface DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName {
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | undefined) {
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
export interface DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName {
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName | undefined) {
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
export interface DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation {
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_name - computed: true, optional: false, required: false
  private _directoryName = new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference(this, "directory_name");
  public get directoryName() {
    return this._directoryName;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // edi_party_name - computed: true, optional: false, required: false
  private _ediPartyName = new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference(this, "edi_party_name");
  public get ediPartyName() {
    return this._ediPartyName;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // other_name - computed: true, optional: false, required: false
  private _otherName = new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference(this, "other_name");
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
export interface DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod {
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_method_type - computed: true, optional: false, required: false
  public get accessMethodType() {
    return this.getStringAttribute('access_method_type');
  }

  // custom_object_identifier - computed: true, optional: false, required: false
  public get customObjectIdentifier() {
    return this.getStringAttribute('custom_object_identifier');
  }
}
export interface DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess {
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_location - computed: true, optional: false, required: false
  private _accessLocation = new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference(this, "access_location");
  public get accessLocation() {
    return this._accessLocation;
  }

  // access_method - computed: true, optional: false, required: false
  private _accessMethod = new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference(this, "access_method");
  public get accessMethod() {
    return this._accessMethod;
  }
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference {
    return new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateAuthorityCsrExtensions {
}

export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityCsrExtensionsToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityCsrExtensions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityCsrExtensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityCsrExtensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_usage - computed: true, optional: false, required: false
  private _keyUsage = new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }

  // subject_information_access - computed: true, optional: false, required: false
  private _subjectInformationAccess = new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList(this, "subject_information_access", false);
  public get subjectInformationAccess() {
    return this._subjectInformationAccess;
  }
}
export interface DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration {
}

export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // omit_extension - computed: true, optional: false, required: false
  public get omitExtension() {
    return this.getBooleanAttribute('omit_extension');
  }
}
export interface DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
}

export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crl_distribution_point_extension_configuration - computed: true, optional: false, required: false
  private _crlDistributionPointExtensionConfiguration = new DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference(this, "crl_distribution_point_extension_configuration");
  public get crlDistributionPointExtensionConfiguration() {
    return this._crlDistributionPointExtensionConfiguration;
  }

  // crl_type - computed: true, optional: false, required: false
  public get crlType() {
    return this.getStringAttribute('crl_type');
  }

  // custom_cname - computed: true, optional: false, required: false
  public get customCname() {
    return this.getStringAttribute('custom_cname');
  }

  // custom_path - computed: true, optional: false, required: false
  public get customPath() {
    return this.getStringAttribute('custom_path');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expiration_in_days - computed: true, optional: false, required: false
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_object_acl - computed: true, optional: false, required: false
  public get s3ObjectAcl() {
    return this.getStringAttribute('s3_object_acl');
  }
}
export interface DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration {
}

export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | undefined) {
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

  // ocsp_custom_cname - computed: true, optional: false, required: false
  public get ocspCustomCname() {
    return this.getStringAttribute('ocsp_custom_cname');
  }
}
export interface DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration {
}

export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crl_configuration - computed: true, optional: false, required: false
  private _crlConfiguration = new DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(this, "crl_configuration");
  public get crlConfiguration() {
    return this._crlConfiguration;
  }

  // ocsp_configuration - computed: true, optional: false, required: false
  private _ocspConfiguration = new DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(this, "ocsp_configuration");
  public get ocspConfiguration() {
    return this._ocspConfiguration;
  }
}
export interface DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes {
}

export function dataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesToTerraform(struct?: DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes | undefined) {
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

export class DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference {
    return new DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAcmpcaCertificateAuthoritySubject {
}

export function dataAwsccAcmpcaCertificateAuthoritySubjectToTerraform(struct?: DataAwsccAcmpcaCertificateAuthoritySubject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthoritySubjectToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthoritySubject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAcmpcaCertificateAuthoritySubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthoritySubject | undefined) {
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
  private _customAttributes = new DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList(this, "custom_attributes", false);
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
export interface DataAwsccAcmpcaCertificateAuthorityTags {
}

export function dataAwsccAcmpcaCertificateAuthorityTagsToTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAcmpcaCertificateAuthorityTagsToHclTerraform(struct?: DataAwsccAcmpcaCertificateAuthorityTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAcmpcaCertificateAuthorityTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAcmpcaCertificateAuthorityTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAcmpcaCertificateAuthorityTags | undefined) {
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

export class DataAwsccAcmpcaCertificateAuthorityTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAcmpcaCertificateAuthorityTagsOutputReference {
    return new DataAwsccAcmpcaCertificateAuthorityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/acmpca_certificate_authority awscc_acmpca_certificate_authority}
*/
export class DataAwsccAcmpcaCertificateAuthority extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_acmpca_certificate_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAcmpcaCertificateAuthority to import
  * @param importFromId The id of the existing DataAwsccAcmpcaCertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/acmpca_certificate_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAcmpcaCertificateAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_acmpca_certificate_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/acmpca_certificate_authority awscc_acmpca_certificate_authority} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAcmpcaCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAcmpcaCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_acmpca_certificate_authority',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_signing_request - computed: true, optional: false, required: false
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }

  // csr_extensions - computed: true, optional: false, required: false
  private _csrExtensions = new DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference(this, "csr_extensions");
  public get csrExtensions() {
    return this._csrExtensions;
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

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_storage_security_standard - computed: true, optional: false, required: false
  public get keyStorageSecurityStandard() {
    return this.getStringAttribute('key_storage_security_standard');
  }

  // revocation_configuration - computed: true, optional: false, required: false
  private _revocationConfiguration = new DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference(this, "revocation_configuration");
  public get revocationConfiguration() {
    return this._revocationConfiguration;
  }

  // signing_algorithm - computed: true, optional: false, required: false
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }

  // subject - computed: true, optional: false, required: false
  private _subject = new DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccAcmpcaCertificateAuthorityTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // usage_mode - computed: true, optional: false, required: false
  public get usageMode() {
    return this.getStringAttribute('usage_mode');
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
