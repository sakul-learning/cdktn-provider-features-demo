// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AcmpcaCertificateAuthorityConfig extends cdktn.TerraformMetaArguments {
  /**
  * Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#csr_extensions AcmpcaCertificateAuthority#csr_extensions}
  */
  readonly csrExtensions?: AcmpcaCertificateAuthorityCsrExtensions;
  /**
  * Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}
  */
  readonly keyAlgorithm: string;
  /**
  * KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#key_storage_security_standard AcmpcaCertificateAuthority#key_storage_security_standard}
  */
  readonly keyStorageSecurityStandard?: string;
  /**
  * Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}
  */
  readonly revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration;
  /**
  * Algorithm your CA uses to sign certificate requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}
  */
  readonly signingAlgorithm: string;
  /**
  * Structure that contains X.500 distinguished name information for your CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}
  */
  readonly subject: AcmpcaCertificateAuthoritySubject;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}
  */
  readonly tags?: AcmpcaCertificateAuthorityTags[] | cdktn.IResolvable;
  /**
  * The type of the certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}
  */
  readonly type: string;
  /**
  * Usage mode of the ceritificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}
  */
  readonly usageMode?: string;
}
export interface AcmpcaCertificateAuthorityCsrExtensionsKeyUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#crl_sign AcmpcaCertificateAuthority#crl_sign}
  */
  readonly crlSign?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#data_encipherment AcmpcaCertificateAuthority#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#decipher_only AcmpcaCertificateAuthority#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#digital_signature AcmpcaCertificateAuthority#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#encipher_only AcmpcaCertificateAuthority#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#key_agreement AcmpcaCertificateAuthority#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#key_cert_sign AcmpcaCertificateAuthority#key_cert_sign}
  */
  readonly keyCertSign?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#key_encipherment AcmpcaCertificateAuthority#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#non_repudiation AcmpcaCertificateAuthority#non_repudiation}
  */
  readonly nonRepudiation?: boolean | cdktn.IResolvable;
}

export function acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crl_sign: cdktn.booleanToTerraform(struct!.crlSign),
    data_encipherment: cdktn.booleanToTerraform(struct!.dataEncipherment),
    decipher_only: cdktn.booleanToTerraform(struct!.decipherOnly),
    digital_signature: cdktn.booleanToTerraform(struct!.digitalSignature),
    encipher_only: cdktn.booleanToTerraform(struct!.encipherOnly),
    key_agreement: cdktn.booleanToTerraform(struct!.keyAgreement),
    key_cert_sign: cdktn.booleanToTerraform(struct!.keyCertSign),
    key_encipherment: cdktn.booleanToTerraform(struct!.keyEncipherment),
    non_repudiation: cdktn.booleanToTerraform(struct!.nonRepudiation),
  }
}


export function acmpcaCertificateAuthorityCsrExtensionsKeyUsageToHclTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crl_sign: {
      value: cdktn.booleanToHclTerraform(struct!.crlSign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_encipherment: {
      value: cdktn.booleanToHclTerraform(struct!.dataEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    decipher_only: {
      value: cdktn.booleanToHclTerraform(struct!.decipherOnly),
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
    encipher_only: {
      value: cdktn.booleanToHclTerraform(struct!.encipherOnly),
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
    key_cert_sign: {
      value: cdktn.booleanToHclTerraform(struct!.keyCertSign),
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

export class AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityCsrExtensionsKeyUsage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSign = this._crlSign;
    }
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._decipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.decipherOnly = this._decipherOnly;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._encipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.encipherOnly = this._encipherOnly;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyCertSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCertSign = this._keyCertSign;
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

  public set internalValue(value: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crlSign = undefined;
      this._dataEncipherment = undefined;
      this._decipherOnly = undefined;
      this._digitalSignature = undefined;
      this._encipherOnly = undefined;
      this._keyAgreement = undefined;
      this._keyCertSign = undefined;
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
      this._crlSign = value.crlSign;
      this._dataEncipherment = value.dataEncipherment;
      this._decipherOnly = value.decipherOnly;
      this._digitalSignature = value.digitalSignature;
      this._encipherOnly = value.encipherOnly;
      this._keyAgreement = value.keyAgreement;
      this._keyCertSign = value.keyCertSign;
      this._keyEncipherment = value.keyEncipherment;
      this._nonRepudiation = value.nonRepudiation;
    }
  }

  // crl_sign - computed: true, optional: true, required: false
  private _crlSign?: boolean | cdktn.IResolvable; 
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }
  public set crlSign(value: boolean | cdktn.IResolvable) {
    this._crlSign = value;
  }
  public resetCrlSign() {
    this._crlSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSignInput() {
    return this._crlSign;
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

  // decipher_only - computed: true, optional: true, required: false
  private _decipherOnly?: boolean | cdktn.IResolvable; 
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }
  public set decipherOnly(value: boolean | cdktn.IResolvable) {
    this._decipherOnly = value;
  }
  public resetDecipherOnly() {
    this._decipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decipherOnlyInput() {
    return this._decipherOnly;
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

  // encipher_only - computed: true, optional: true, required: false
  private _encipherOnly?: boolean | cdktn.IResolvable; 
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }
  public set encipherOnly(value: boolean | cdktn.IResolvable) {
    this._encipherOnly = value;
  }
  public resetEncipherOnly() {
    this._encipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encipherOnlyInput() {
    return this._encipherOnly;
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

  // key_cert_sign - computed: true, optional: true, required: false
  private _keyCertSign?: boolean | cdktn.IResolvable; 
  public get keyCertSign() {
    return this.getBooleanAttribute('key_cert_sign');
  }
  public set keyCertSign(value: boolean | cdktn.IResolvable) {
    this._keyCertSign = value;
  }
  public resetKeyCertSign() {
    this._keyCertSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCertSignInput() {
    return this._keyCertSign;
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
export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes {
  /**
  * String that contains X.509 ObjectIdentifier information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#object_identifier AcmpcaCertificateAuthority#object_identifier}
  */
  readonly objectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}
  */
  readonly value?: string;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_identifier: cdktn.stringToTerraform(struct!.objectIdentifier),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToHclTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_identifier: {
      value: cdktn.stringToHclTerraform(struct!.objectIdentifier),
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

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdentifier = this._objectIdentifier;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdentifier = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdentifier = value.objectIdentifier;
      this._value = value.value;
    }
  }

  // object_identifier - computed: true, optional: true, required: false
  private _objectIdentifier?: string; 
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }
  public set objectIdentifier(value: string) {
    this._objectIdentifier = value;
  }
  public resetObjectIdentifier() {
    this._objectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifierInput() {
    return this._objectIdentifier;
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

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList extends cdktn.ComplexList {
  public internalValue? : AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes[] | cdktn.IResolvable

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
  public get(index: number): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference {
    return new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}
  */
  readonly country?: string;
  /**
  * Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}
  */
  readonly customAttributes?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}
  */
  readonly title?: string;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    common_name: cdktn.stringToTerraform(struct!.commonName),
    country: cdktn.stringToTerraform(struct!.country),
    custom_attributes: cdktn.listMapper(acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToTerraform, false)(struct!.customAttributes),
    distinguished_name_qualifier: cdktn.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktn.stringToTerraform(struct!.generationQualifier),
    given_name: cdktn.stringToTerraform(struct!.givenName),
    initials: cdktn.stringToTerraform(struct!.initials),
    locality: cdktn.stringToTerraform(struct!.locality),
    organization: cdktn.stringToTerraform(struct!.organization),
    organizational_unit: cdktn.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktn.stringToTerraform(struct!.pseudonym),
    serial_number: cdktn.stringToTerraform(struct!.serialNumber),
    state: cdktn.stringToTerraform(struct!.state),
    surname: cdktn.stringToTerraform(struct!.surname),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToHclTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    common_name: {
      value: cdktn.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktn.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attributes: {
      value: cdktn.listMapperHcl(acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesToHclTerraform, false)(struct!.customAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList",
    },
    distinguished_name_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.distinguishedNameQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.generationQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktn.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initials: {
      value: cdktn.stringToHclTerraform(struct!.initials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktn.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktn.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktn.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pseudonym: {
      value: cdktn.stringToHclTerraform(struct!.pseudonym),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktn.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    surname: {
      value: cdktn.stringToHclTerraform(struct!.surname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._customAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributes = this._customAttributes?.internalValue;
    }
    if (this._distinguishedNameQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedNameQualifier = this._distinguishedNameQualifier;
    }
    if (this._generationQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationQualifier = this._generationQualifier;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._initials !== undefined) {
      hasAnyValues = true;
      internalValueResult.initials = this._initials;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._pseudonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudonym = this._pseudonym;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._surname !== undefined) {
      hasAnyValues = true;
      internalValueResult.surname = this._surname;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._customAttributes.internalValue = undefined;
      this._distinguishedNameQualifier = undefined;
      this._generationQualifier = undefined;
      this._givenName = undefined;
      this._initials = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._pseudonym = undefined;
      this._serialNumber = undefined;
      this._state = undefined;
      this._surname = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._customAttributes.internalValue = value.customAttributes;
      this._distinguishedNameQualifier = value.distinguishedNameQualifier;
      this._generationQualifier = value.generationQualifier;
      this._givenName = value.givenName;
      this._initials = value.initials;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._pseudonym = value.pseudonym;
      this._serialNumber = value.serialNumber;
      this._state = value.state;
      this._surname = value.surname;
      this._title = value.title;
    }
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // custom_attributes - computed: true, optional: true, required: false
  private _customAttributes = new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }
  public putCustomAttributes(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes[] | cdktn.IResolvable) {
    this._customAttributes.internalValue = value;
  }
  public resetCustomAttributes() {
    this._customAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes.internalValue;
  }

  // distinguished_name_qualifier - computed: true, optional: true, required: false
  private _distinguishedNameQualifier?: string; 
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }
  public set distinguishedNameQualifier(value: string) {
    this._distinguishedNameQualifier = value;
  }
  public resetDistinguishedNameQualifier() {
    this._distinguishedNameQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameQualifierInput() {
    return this._distinguishedNameQualifier;
  }

  // generation_qualifier - computed: true, optional: true, required: false
  private _generationQualifier?: string; 
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }
  public set generationQualifier(value: string) {
    this._generationQualifier = value;
  }
  public resetGenerationQualifier() {
    this._generationQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationQualifierInput() {
    return this._generationQualifier;
  }

  // given_name - computed: true, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // initials - computed: true, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // locality - computed: true, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // pseudonym - computed: true, optional: true, required: false
  private _pseudonym?: string; 
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }
  public set pseudonym(value: string) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // surname - computed: true, optional: true, required: false
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#name_assigner AcmpcaCertificateAuthority#name_assigner}
  */
  readonly nameAssigner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#party_name AcmpcaCertificateAuthority#party_name}
  */
  readonly partyName?: string;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name_assigner: cdktn.stringToTerraform(struct!.nameAssigner),
    party_name: cdktn.stringToTerraform(struct!.partyName),
  }
}


export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToHclTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name_assigner: {
      value: cdktn.stringToHclTerraform(struct!.nameAssigner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    party_name: {
      value: cdktn.stringToHclTerraform(struct!.partyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameAssigner !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAssigner = this._nameAssigner;
    }
    if (this._partyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partyName = this._partyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameAssigner = undefined;
      this._partyName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameAssigner = value.nameAssigner;
      this._partyName = value.partyName;
    }
  }

  // name_assigner - computed: true, optional: true, required: false
  private _nameAssigner?: string; 
  public get nameAssigner() {
    return this.getStringAttribute('name_assigner');
  }
  public set nameAssigner(value: string) {
    this._nameAssigner = value;
  }
  public resetNameAssigner() {
    this._nameAssigner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAssignerInput() {
    return this._nameAssigner;
  }

  // party_name - computed: true, optional: true, required: false
  private _partyName?: string; 
  public get partyName() {
    return this.getStringAttribute('party_name');
  }
  public set partyName(value: string) {
    this._partyName = value;
  }
  public resetPartyName() {
    this._partyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partyNameInput() {
    return this._partyName;
  }
}
export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName {
  /**
  * String that contains X.509 ObjectIdentifier information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#type_id AcmpcaCertificateAuthority#type_id}
  */
  readonly typeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}
  */
  readonly value?: string;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type_id: cdktn.stringToTerraform(struct!.typeId),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToHclTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type_id: {
      value: cdktn.stringToHclTerraform(struct!.typeId),
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

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._typeId = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._typeId = value.typeId;
      this._value = value.value;
    }
  }

  // type_id - computed: true, optional: true, required: false
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
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
export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation {
  /**
  * Structure that contains X.500 distinguished name information for your CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#directory_name AcmpcaCertificateAuthority#directory_name}
  */
  readonly directoryName?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName;
  /**
  * String that contains X.509 DnsName information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#dns_name AcmpcaCertificateAuthority#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Structure that contains X.509 EdiPartyName information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#edi_party_name AcmpcaCertificateAuthority#edi_party_name}
  */
  readonly ediPartyName?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName;
  /**
  * String that contains X.509 IpAddress information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#ip_address AcmpcaCertificateAuthority#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Structure that contains X.509 OtherName information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#other_name AcmpcaCertificateAuthority#other_name}
  */
  readonly otherName?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName;
  /**
  * String that contains X.509 ObjectIdentifier information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#registered_id AcmpcaCertificateAuthority#registered_id}
  */
  readonly registeredId?: string;
  /**
  * String that contains X.509 Rfc822Name information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#rfc_822_name AcmpcaCertificateAuthority#rfc_822_name}
  */
  readonly rfc822Name?: string;
  /**
  * String that contains X.509 UniformResourceIdentifier information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#uniform_resource_identifier AcmpcaCertificateAuthority#uniform_resource_identifier}
  */
  readonly uniformResourceIdentifier?: string;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_name: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToTerraform(struct!.directoryName),
    dns_name: cdktn.stringToTerraform(struct!.dnsName),
    edi_party_name: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToTerraform(struct!.ediPartyName),
    ip_address: cdktn.stringToTerraform(struct!.ipAddress),
    other_name: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToTerraform(struct!.otherName),
    registered_id: cdktn.stringToTerraform(struct!.registeredId),
    rfc_822_name: cdktn.stringToTerraform(struct!.rfc822Name),
    uniform_resource_identifier: cdktn.stringToTerraform(struct!.uniformResourceIdentifier),
  }
}


export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToHclTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_name: {
      value: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameToHclTerraform(struct!.directoryName),
      isBlock: true,
      type: "struct",
      storageClassType: "AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName",
    },
    dns_name: {
      value: cdktn.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edi_party_name: {
      value: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameToHclTerraform(struct!.ediPartyName),
      isBlock: true,
      type: "struct",
      storageClassType: "AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName",
    },
    ip_address: {
      value: cdktn.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_name: {
      value: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameToHclTerraform(struct!.otherName),
      isBlock: true,
      type: "struct",
      storageClassType: "AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName",
    },
    registered_id: {
      value: cdktn.stringToHclTerraform(struct!.registeredId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc_822_name: {
      value: cdktn.stringToHclTerraform(struct!.rfc822Name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniform_resource_identifier: {
      value: cdktn.stringToHclTerraform(struct!.uniformResourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryName = this._directoryName?.internalValue;
    }
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._ediPartyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ediPartyName = this._ediPartyName?.internalValue;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._otherName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherName = this._otherName?.internalValue;
    }
    if (this._registeredId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registeredId = this._registeredId;
    }
    if (this._rfc822Name !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc822Name = this._rfc822Name;
    }
    if (this._uniformResourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformResourceIdentifier = this._uniformResourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryName.internalValue = undefined;
      this._dnsName = undefined;
      this._ediPartyName.internalValue = undefined;
      this._ipAddress = undefined;
      this._otherName.internalValue = undefined;
      this._registeredId = undefined;
      this._rfc822Name = undefined;
      this._uniformResourceIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryName.internalValue = value.directoryName;
      this._dnsName = value.dnsName;
      this._ediPartyName.internalValue = value.ediPartyName;
      this._ipAddress = value.ipAddress;
      this._otherName.internalValue = value.otherName;
      this._registeredId = value.registeredId;
      this._rfc822Name = value.rfc822Name;
      this._uniformResourceIdentifier = value.uniformResourceIdentifier;
    }
  }

  // directory_name - computed: true, optional: true, required: false
  private _directoryName = new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference(this, "directory_name");
  public get directoryName() {
    return this._directoryName;
  }
  public putDirectoryName(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName) {
    this._directoryName.internalValue = value;
  }
  public resetDirectoryName() {
    this._directoryName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName.internalValue;
  }

  // dns_name - computed: true, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // edi_party_name - computed: true, optional: true, required: false
  private _ediPartyName = new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference(this, "edi_party_name");
  public get ediPartyName() {
    return this._ediPartyName;
  }
  public putEdiPartyName(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName) {
    this._ediPartyName.internalValue = value;
  }
  public resetEdiPartyName() {
    this._ediPartyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ediPartyNameInput() {
    return this._ediPartyName.internalValue;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // other_name - computed: true, optional: true, required: false
  private _otherName = new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference(this, "other_name");
  public get otherName() {
    return this._otherName;
  }
  public putOtherName(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName) {
    this._otherName.internalValue = value;
  }
  public resetOtherName() {
    this._otherName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherNameInput() {
    return this._otherName.internalValue;
  }

  // registered_id - computed: true, optional: true, required: false
  private _registeredId?: string; 
  public get registeredId() {
    return this.getStringAttribute('registered_id');
  }
  public set registeredId(value: string) {
    this._registeredId = value;
  }
  public resetRegisteredId() {
    this._registeredId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredIdInput() {
    return this._registeredId;
  }

  // rfc_822_name - computed: true, optional: true, required: false
  private _rfc822Name?: string; 
  public get rfc822Name() {
    return this.getStringAttribute('rfc_822_name');
  }
  public set rfc822Name(value: string) {
    this._rfc822Name = value;
  }
  public resetRfc822Name() {
    this._rfc822Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc822NameInput() {
    return this._rfc822Name;
  }

  // uniform_resource_identifier - computed: true, optional: true, required: false
  private _uniformResourceIdentifier?: string; 
  public get uniformResourceIdentifier() {
    return this.getStringAttribute('uniform_resource_identifier');
  }
  public set uniformResourceIdentifier(value: string) {
    this._uniformResourceIdentifier = value;
  }
  public resetUniformResourceIdentifier() {
    this._uniformResourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformResourceIdentifierInput() {
    return this._uniformResourceIdentifier;
  }
}
export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod {
  /**
  * Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#access_method_type AcmpcaCertificateAuthority#access_method_type}
  */
  readonly accessMethodType?: string;
  /**
  * String that contains X.509 ObjectIdentifier information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#custom_object_identifier AcmpcaCertificateAuthority#custom_object_identifier}
  */
  readonly customObjectIdentifier?: string;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_method_type: cdktn.stringToTerraform(struct!.accessMethodType),
    custom_object_identifier: cdktn.stringToTerraform(struct!.customObjectIdentifier),
  }
}


export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToHclTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_method_type: {
      value: cdktn.stringToHclTerraform(struct!.accessMethodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_object_identifier: {
      value: cdktn.stringToHclTerraform(struct!.customObjectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMethodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMethodType = this._accessMethodType;
    }
    if (this._customObjectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.customObjectIdentifier = this._customObjectIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMethodType = undefined;
      this._customObjectIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMethodType = value.accessMethodType;
      this._customObjectIdentifier = value.customObjectIdentifier;
    }
  }

  // access_method_type - computed: true, optional: true, required: false
  private _accessMethodType?: string; 
  public get accessMethodType() {
    return this.getStringAttribute('access_method_type');
  }
  public set accessMethodType(value: string) {
    this._accessMethodType = value;
  }
  public resetAccessMethodType() {
    this._accessMethodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMethodTypeInput() {
    return this._accessMethodType;
  }

  // custom_object_identifier - computed: true, optional: true, required: false
  private _customObjectIdentifier?: string; 
  public get customObjectIdentifier() {
    return this.getStringAttribute('custom_object_identifier');
  }
  public set customObjectIdentifier(value: string) {
    this._customObjectIdentifier = value;
  }
  public resetCustomObjectIdentifier() {
    this._customObjectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customObjectIdentifierInput() {
    return this._customObjectIdentifier;
  }
}
export interface AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess {
  /**
  * Structure that contains X.509 GeneralName information. Assign one and ONLY one field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#access_location AcmpcaCertificateAuthority#access_location}
  */
  readonly accessLocation?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation;
  /**
  * Structure that contains X.509 AccessMethod information. Assign one and ONLY one field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#access_method AcmpcaCertificateAuthority#access_method}
  */
  readonly accessMethod?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod;
}

export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_location: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToTerraform(struct!.accessLocation),
    access_method: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToTerraform(struct!.accessMethod),
  }
}


export function acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToHclTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_location: {
      value: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationToHclTerraform(struct!.accessLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation",
    },
    access_method: {
      value: acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodToHclTerraform(struct!.accessMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLocation = this._accessLocation?.internalValue;
    }
    if (this._accessMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMethod = this._accessMethod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLocation.internalValue = undefined;
      this._accessMethod.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLocation.internalValue = value.accessLocation;
      this._accessMethod.internalValue = value.accessMethod;
    }
  }

  // access_location - computed: true, optional: true, required: false
  private _accessLocation = new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference(this, "access_location");
  public get accessLocation() {
    return this._accessLocation;
  }
  public putAccessLocation(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation) {
    this._accessLocation.internalValue = value;
  }
  public resetAccessLocation() {
    this._accessLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLocationInput() {
    return this._accessLocation.internalValue;
  }

  // access_method - computed: true, optional: true, required: false
  private _accessMethod = new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference(this, "access_method");
  public get accessMethod() {
    return this._accessMethod;
  }
  public putAccessMethod(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod) {
    this._accessMethod.internalValue = value;
  }
  public resetAccessMethod() {
    this._accessMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMethodInput() {
    return this._accessMethod.internalValue;
  }
}

export class AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList extends cdktn.ComplexList {
  public internalValue? : AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess[] | cdktn.IResolvable

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
  public get(index: number): AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference {
    return new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcmpcaCertificateAuthorityCsrExtensions {
  /**
  * Structure that contains X.509 KeyUsage information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#key_usage AcmpcaCertificateAuthority#key_usage}
  */
  readonly keyUsage?: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage;
  /**
  * Array of X.509 AccessDescription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#subject_information_access AcmpcaCertificateAuthority#subject_information_access}
  */
  readonly subjectInformationAccess?: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess[] | cdktn.IResolvable;
}

export function acmpcaCertificateAuthorityCsrExtensionsToTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_usage: acmpcaCertificateAuthorityCsrExtensionsKeyUsageToTerraform(struct!.keyUsage),
    subject_information_access: cdktn.listMapper(acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToTerraform, false)(struct!.subjectInformationAccess),
  }
}


export function acmpcaCertificateAuthorityCsrExtensionsToHclTerraform(struct?: AcmpcaCertificateAuthorityCsrExtensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_usage: {
      value: acmpcaCertificateAuthorityCsrExtensionsKeyUsageToHclTerraform(struct!.keyUsage),
      isBlock: true,
      type: "struct",
      storageClassType: "AcmpcaCertificateAuthorityCsrExtensionsKeyUsage",
    },
    subject_information_access: {
      value: cdktn.listMapperHcl(acmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessToHclTerraform, false)(struct!.subjectInformationAccess),
      isBlock: true,
      type: "list",
      storageClassType: "AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityCsrExtensionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityCsrExtensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    if (this._subjectInformationAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectInformationAccess = this._subjectInformationAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityCsrExtensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyUsage.internalValue = undefined;
      this._subjectInformationAccess.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyUsage.internalValue = value.keyUsage;
      this._subjectInformationAccess.internalValue = value.subjectInformationAccess;
    }
  }

  // key_usage - computed: true, optional: true, required: false
  private _keyUsage = new AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: AcmpcaCertificateAuthorityCsrExtensionsKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  public resetKeyUsage() {
    this._keyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }

  // subject_information_access - computed: true, optional: true, required: false
  private _subjectInformationAccess = new AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList(this, "subject_information_access", false);
  public get subjectInformationAccess() {
    return this._subjectInformationAccess;
  }
  public putSubjectInformationAccess(value: AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess[] | cdktn.IResolvable) {
    this._subjectInformationAccess.internalValue = value;
  }
  public resetSubjectInformationAccess() {
    this._subjectInformationAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInformationAccessInput() {
    return this._subjectInformationAccess.internalValue;
  }
}
export interface AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#omit_extension AcmpcaCertificateAuthority#omit_extension}
  */
  readonly omitExtension?: boolean | cdktn.IResolvable;
}

export function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    omit_extension: cdktn.booleanToTerraform(struct!.omitExtension),
  }
}


export function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationToHclTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    omit_extension: {
      value: cdktn.booleanToHclTerraform(struct!.omitExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._omitExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitExtension = this._omitExtension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._omitExtension = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._omitExtension = value.omitExtension;
    }
  }

  // omit_extension - computed: true, optional: true, required: false
  private _omitExtension?: boolean | cdktn.IResolvable; 
  public get omitExtension() {
    return this.getBooleanAttribute('omit_extension');
  }
  public set omitExtension(value: boolean | cdktn.IResolvable) {
    this._omitExtension = value;
  }
  public resetOmitExtension() {
    this._omitExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitExtensionInput() {
    return this._omitExtension;
  }
}
export interface AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
  /**
  * Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#crl_distribution_point_extension_configuration AcmpcaCertificateAuthority#crl_distribution_point_extension_configuration}
  */
  readonly crlDistributionPointExtensionConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#crl_type AcmpcaCertificateAuthority#crl_type}
  */
  readonly crlType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}
  */
  readonly customCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#custom_path AcmpcaCertificateAuthority#custom_path}
  */
  readonly customPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}
  */
  readonly expirationInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}
  */
  readonly s3ObjectAcl?: string;
}

export function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crl_distribution_point_extension_configuration: acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationToTerraform(struct!.crlDistributionPointExtensionConfiguration),
    crl_type: cdktn.stringToTerraform(struct!.crlType),
    custom_cname: cdktn.stringToTerraform(struct!.customCname),
    custom_path: cdktn.stringToTerraform(struct!.customPath),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    expiration_in_days: cdktn.numberToTerraform(struct!.expirationInDays),
    s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
    s3_object_acl: cdktn.stringToTerraform(struct!.s3ObjectAcl),
  }
}


export function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToHclTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crl_distribution_point_extension_configuration: {
      value: acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationToHclTerraform(struct!.crlDistributionPointExtensionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration",
    },
    crl_type: {
      value: cdktn.stringToHclTerraform(struct!.crlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_cname: {
      value: cdktn.stringToHclTerraform(struct!.customCname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_path: {
      value: cdktn.stringToHclTerraform(struct!.customPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration_in_days: {
      value: cdktn.numberToHclTerraform(struct!.expirationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object_acl: {
      value: cdktn.stringToHclTerraform(struct!.s3ObjectAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlDistributionPointExtensionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlDistributionPointExtensionConfiguration = this._crlDistributionPointExtensionConfiguration?.internalValue;
    }
    if (this._crlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlType = this._crlType;
    }
    if (this._customCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCname = this._customCname;
    }
    if (this._customPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPath = this._customPath;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expirationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationInDays = this._expirationInDays;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3ObjectAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ObjectAcl = this._s3ObjectAcl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crlDistributionPointExtensionConfiguration.internalValue = undefined;
      this._crlType = undefined;
      this._customCname = undefined;
      this._customPath = undefined;
      this._enabled = undefined;
      this._expirationInDays = undefined;
      this._s3BucketName = undefined;
      this._s3ObjectAcl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crlDistributionPointExtensionConfiguration.internalValue = value.crlDistributionPointExtensionConfiguration;
      this._crlType = value.crlType;
      this._customCname = value.customCname;
      this._customPath = value.customPath;
      this._enabled = value.enabled;
      this._expirationInDays = value.expirationInDays;
      this._s3BucketName = value.s3BucketName;
      this._s3ObjectAcl = value.s3ObjectAcl;
    }
  }

  // crl_distribution_point_extension_configuration - computed: true, optional: true, required: false
  private _crlDistributionPointExtensionConfiguration = new AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference(this, "crl_distribution_point_extension_configuration");
  public get crlDistributionPointExtensionConfiguration() {
    return this._crlDistributionPointExtensionConfiguration;
  }
  public putCrlDistributionPointExtensionConfiguration(value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration) {
    this._crlDistributionPointExtensionConfiguration.internalValue = value;
  }
  public resetCrlDistributionPointExtensionConfiguration() {
    this._crlDistributionPointExtensionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlDistributionPointExtensionConfigurationInput() {
    return this._crlDistributionPointExtensionConfiguration.internalValue;
  }

  // crl_type - computed: true, optional: true, required: false
  private _crlType?: string; 
  public get crlType() {
    return this.getStringAttribute('crl_type');
  }
  public set crlType(value: string) {
    this._crlType = value;
  }
  public resetCrlType() {
    this._crlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlTypeInput() {
    return this._crlType;
  }

  // custom_cname - computed: true, optional: true, required: false
  private _customCname?: string; 
  public get customCname() {
    return this.getStringAttribute('custom_cname');
  }
  public set customCname(value: string) {
    this._customCname = value;
  }
  public resetCustomCname() {
    this._customCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCnameInput() {
    return this._customCname;
  }

  // custom_path - computed: true, optional: true, required: false
  private _customPath?: string; 
  public get customPath() {
    return this.getStringAttribute('custom_path');
  }
  public set customPath(value: string) {
    this._customPath = value;
  }
  public resetCustomPath() {
    this._customPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPathInput() {
    return this._customPath;
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

  // expiration_in_days - computed: true, optional: true, required: false
  private _expirationInDays?: number; 
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }
  public set expirationInDays(value: number) {
    this._expirationInDays = value;
  }
  public resetExpirationInDays() {
    this._expirationInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInDaysInput() {
    return this._expirationInDays;
  }

  // s3_bucket_name - computed: true, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_object_acl - computed: true, optional: true, required: false
  private _s3ObjectAcl?: string; 
  public get s3ObjectAcl() {
    return this.getStringAttribute('s3_object_acl');
  }
  public set s3ObjectAcl(value: string) {
    this._s3ObjectAcl = value;
  }
  public resetS3ObjectAcl() {
    this._s3ObjectAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectAclInput() {
    return this._s3ObjectAcl;
  }
}
export interface AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}
  */
  readonly ocspCustomCname?: string;
}

export function acmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    ocsp_custom_cname: cdktn.stringToTerraform(struct!.ocspCustomCname),
  }
}


export function acmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToHclTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | cdktn.IResolvable): any {
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
    ocsp_custom_cname: {
      value: cdktn.stringToHclTerraform(struct!.ocspCustomCname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ocspCustomCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCustomCname = this._ocspCustomCname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ocspCustomCname = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ocspCustomCname = value.ocspCustomCname;
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

  // ocsp_custom_cname - computed: true, optional: true, required: false
  private _ocspCustomCname?: string; 
  public get ocspCustomCname() {
    return this.getStringAttribute('ocsp_custom_cname');
  }
  public set ocspCustomCname(value: string) {
    this._ocspCustomCname = value;
  }
  public resetOcspCustomCname() {
    this._ocspCustomCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCustomCnameInput() {
    return this._ocspCustomCname;
  }
}
export interface AcmpcaCertificateAuthorityRevocationConfiguration {
  /**
  * Your certificate authority can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates that have been revoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#crl_configuration AcmpcaCertificateAuthority#crl_configuration}
  */
  readonly crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
  /**
  * Helps to configure online certificate status protocol (OCSP) responder for your certificate authority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#ocsp_configuration AcmpcaCertificateAuthority#ocsp_configuration}
  */
  readonly ocspConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration;
}

export function acmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crl_configuration: acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct!.crlConfiguration),
    ocsp_configuration: acmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToTerraform(struct!.ocspConfiguration),
  }
}


export function acmpcaCertificateAuthorityRevocationConfigurationToHclTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crl_configuration: {
      value: acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToHclTerraform(struct!.crlConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration",
    },
    ocsp_configuration: {
      value: acmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToHclTerraform(struct!.ocspConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthorityRevocationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthorityRevocationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlConfiguration = this._crlConfiguration?.internalValue;
    }
    if (this._ocspConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspConfiguration = this._ocspConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthorityRevocationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crlConfiguration.internalValue = undefined;
      this._ocspConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crlConfiguration.internalValue = value.crlConfiguration;
      this._ocspConfiguration.internalValue = value.ocspConfiguration;
    }
  }

  // crl_configuration - computed: true, optional: true, required: false
  private _crlConfiguration = new AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(this, "crl_configuration");
  public get crlConfiguration() {
    return this._crlConfiguration;
  }
  public putCrlConfiguration(value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration) {
    this._crlConfiguration.internalValue = value;
  }
  public resetCrlConfiguration() {
    this._crlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlConfigurationInput() {
    return this._crlConfiguration.internalValue;
  }

  // ocsp_configuration - computed: true, optional: true, required: false
  private _ocspConfiguration = new AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(this, "ocsp_configuration");
  public get ocspConfiguration() {
    return this._ocspConfiguration;
  }
  public putOcspConfiguration(value: AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration) {
    this._ocspConfiguration.internalValue = value;
  }
  public resetOcspConfiguration() {
    this._ocspConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspConfigurationInput() {
    return this._ocspConfiguration.internalValue;
  }
}
export interface AcmpcaCertificateAuthoritySubjectCustomAttributes {
  /**
  * String that contains X.509 ObjectIdentifier information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#object_identifier AcmpcaCertificateAuthority#object_identifier}
  */
  readonly objectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}
  */
  readonly value?: string;
}

export function acmpcaCertificateAuthoritySubjectCustomAttributesToTerraform(struct?: AcmpcaCertificateAuthoritySubjectCustomAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object_identifier: cdktn.stringToTerraform(struct!.objectIdentifier),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function acmpcaCertificateAuthoritySubjectCustomAttributesToHclTerraform(struct?: AcmpcaCertificateAuthoritySubjectCustomAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object_identifier: {
      value: cdktn.stringToHclTerraform(struct!.objectIdentifier),
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

export class AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AcmpcaCertificateAuthoritySubjectCustomAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdentifier = this._objectIdentifier;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthoritySubjectCustomAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdentifier = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdentifier = value.objectIdentifier;
      this._value = value.value;
    }
  }

  // object_identifier - computed: true, optional: true, required: false
  private _objectIdentifier?: string; 
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }
  public set objectIdentifier(value: string) {
    this._objectIdentifier = value;
  }
  public resetObjectIdentifier() {
    this._objectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifierInput() {
    return this._objectIdentifier;
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

export class AcmpcaCertificateAuthoritySubjectCustomAttributesList extends cdktn.ComplexList {
  public internalValue? : AcmpcaCertificateAuthoritySubjectCustomAttributes[] | cdktn.IResolvable

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
  public get(index: number): AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference {
    return new AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcmpcaCertificateAuthoritySubject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}
  */
  readonly country?: string;
  /**
  * Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}
  */
  readonly customAttributes?: AcmpcaCertificateAuthoritySubjectCustomAttributes[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}
  */
  readonly title?: string;
}

export function acmpcaCertificateAuthoritySubjectToTerraform(struct?: AcmpcaCertificateAuthoritySubject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    common_name: cdktn.stringToTerraform(struct!.commonName),
    country: cdktn.stringToTerraform(struct!.country),
    custom_attributes: cdktn.listMapper(acmpcaCertificateAuthoritySubjectCustomAttributesToTerraform, false)(struct!.customAttributes),
    distinguished_name_qualifier: cdktn.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktn.stringToTerraform(struct!.generationQualifier),
    given_name: cdktn.stringToTerraform(struct!.givenName),
    initials: cdktn.stringToTerraform(struct!.initials),
    locality: cdktn.stringToTerraform(struct!.locality),
    organization: cdktn.stringToTerraform(struct!.organization),
    organizational_unit: cdktn.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktn.stringToTerraform(struct!.pseudonym),
    serial_number: cdktn.stringToTerraform(struct!.serialNumber),
    state: cdktn.stringToTerraform(struct!.state),
    surname: cdktn.stringToTerraform(struct!.surname),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function acmpcaCertificateAuthoritySubjectToHclTerraform(struct?: AcmpcaCertificateAuthoritySubject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    common_name: {
      value: cdktn.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktn.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attributes: {
      value: cdktn.listMapperHcl(acmpcaCertificateAuthoritySubjectCustomAttributesToHclTerraform, false)(struct!.customAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "AcmpcaCertificateAuthoritySubjectCustomAttributesList",
    },
    distinguished_name_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.distinguishedNameQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.generationQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktn.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initials: {
      value: cdktn.stringToHclTerraform(struct!.initials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktn.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktn.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktn.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pseudonym: {
      value: cdktn.stringToHclTerraform(struct!.pseudonym),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktn.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    surname: {
      value: cdktn.stringToHclTerraform(struct!.surname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcmpcaCertificateAuthoritySubjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AcmpcaCertificateAuthoritySubject | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._customAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributes = this._customAttributes?.internalValue;
    }
    if (this._distinguishedNameQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedNameQualifier = this._distinguishedNameQualifier;
    }
    if (this._generationQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationQualifier = this._generationQualifier;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._initials !== undefined) {
      hasAnyValues = true;
      internalValueResult.initials = this._initials;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._pseudonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudonym = this._pseudonym;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._surname !== undefined) {
      hasAnyValues = true;
      internalValueResult.surname = this._surname;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcmpcaCertificateAuthoritySubject | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._customAttributes.internalValue = undefined;
      this._distinguishedNameQualifier = undefined;
      this._generationQualifier = undefined;
      this._givenName = undefined;
      this._initials = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._pseudonym = undefined;
      this._serialNumber = undefined;
      this._state = undefined;
      this._surname = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._customAttributes.internalValue = value.customAttributes;
      this._distinguishedNameQualifier = value.distinguishedNameQualifier;
      this._generationQualifier = value.generationQualifier;
      this._givenName = value.givenName;
      this._initials = value.initials;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._pseudonym = value.pseudonym;
      this._serialNumber = value.serialNumber;
      this._state = value.state;
      this._surname = value.surname;
      this._title = value.title;
    }
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // custom_attributes - computed: true, optional: true, required: false
  private _customAttributes = new AcmpcaCertificateAuthoritySubjectCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }
  public putCustomAttributes(value: AcmpcaCertificateAuthoritySubjectCustomAttributes[] | cdktn.IResolvable) {
    this._customAttributes.internalValue = value;
  }
  public resetCustomAttributes() {
    this._customAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes.internalValue;
  }

  // distinguished_name_qualifier - computed: true, optional: true, required: false
  private _distinguishedNameQualifier?: string; 
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }
  public set distinguishedNameQualifier(value: string) {
    this._distinguishedNameQualifier = value;
  }
  public resetDistinguishedNameQualifier() {
    this._distinguishedNameQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameQualifierInput() {
    return this._distinguishedNameQualifier;
  }

  // generation_qualifier - computed: true, optional: true, required: false
  private _generationQualifier?: string; 
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }
  public set generationQualifier(value: string) {
    this._generationQualifier = value;
  }
  public resetGenerationQualifier() {
    this._generationQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationQualifierInput() {
    return this._generationQualifier;
  }

  // given_name - computed: true, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // initials - computed: true, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // locality - computed: true, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // pseudonym - computed: true, optional: true, required: false
  private _pseudonym?: string; 
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }
  public set pseudonym(value: string) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // surname - computed: true, optional: true, required: false
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface AcmpcaCertificateAuthorityTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#key AcmpcaCertificateAuthority#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}
  */
  readonly value?: string;
}

export function acmpcaCertificateAuthorityTagsToTerraform(struct?: AcmpcaCertificateAuthorityTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function acmpcaCertificateAuthorityTagsToHclTerraform(struct?: AcmpcaCertificateAuthorityTags | cdktn.IResolvable): any {
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

export class AcmpcaCertificateAuthorityTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AcmpcaCertificateAuthorityTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AcmpcaCertificateAuthorityTags | cdktn.IResolvable | undefined) {
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

export class AcmpcaCertificateAuthorityTagsList extends cdktn.ComplexList {
  public internalValue? : AcmpcaCertificateAuthorityTags[] | cdktn.IResolvable

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
  public get(index: number): AcmpcaCertificateAuthorityTagsOutputReference {
    return new AcmpcaCertificateAuthorityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority awscc_acmpca_certificate_authority}
*/
export class AcmpcaCertificateAuthority extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_acmpca_certificate_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcmpcaCertificateAuthority to import
  * @param importFromId The id of the existing AcmpcaCertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcmpcaCertificateAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_acmpca_certificate_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/acmpca_certificate_authority awscc_acmpca_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmpcaCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityConfig) {
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
    this._csrExtensions.internalValue = config.csrExtensions;
    this._keyAlgorithm = config.keyAlgorithm;
    this._keyStorageSecurityStandard = config.keyStorageSecurityStandard;
    this._revocationConfiguration.internalValue = config.revocationConfiguration;
    this._signingAlgorithm = config.signingAlgorithm;
    this._subject.internalValue = config.subject;
    this._tags.internalValue = config.tags;
    this._type = config.type;
    this._usageMode = config.usageMode;
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

  // csr_extensions - computed: true, optional: true, required: false
  private _csrExtensions = new AcmpcaCertificateAuthorityCsrExtensionsOutputReference(this, "csr_extensions");
  public get csrExtensions() {
    return this._csrExtensions;
  }
  public putCsrExtensions(value: AcmpcaCertificateAuthorityCsrExtensions) {
    this._csrExtensions.internalValue = value;
  }
  public resetCsrExtensions() {
    this._csrExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrExtensionsInput() {
    return this._csrExtensions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_algorithm - computed: false, optional: false, required: true
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // key_storage_security_standard - computed: true, optional: true, required: false
  private _keyStorageSecurityStandard?: string; 
  public get keyStorageSecurityStandard() {
    return this.getStringAttribute('key_storage_security_standard');
  }
  public set keyStorageSecurityStandard(value: string) {
    this._keyStorageSecurityStandard = value;
  }
  public resetKeyStorageSecurityStandard() {
    this._keyStorageSecurityStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorageSecurityStandardInput() {
    return this._keyStorageSecurityStandard;
  }

  // revocation_configuration - computed: true, optional: true, required: false
  private _revocationConfiguration = new AcmpcaCertificateAuthorityRevocationConfigurationOutputReference(this, "revocation_configuration");
  public get revocationConfiguration() {
    return this._revocationConfiguration;
  }
  public putRevocationConfiguration(value: AcmpcaCertificateAuthorityRevocationConfiguration) {
    this._revocationConfiguration.internalValue = value;
  }
  public resetRevocationConfiguration() {
    this._revocationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationConfigurationInput() {
    return this._revocationConfiguration.internalValue;
  }

  // signing_algorithm - computed: false, optional: false, required: true
  private _signingAlgorithm?: string; 
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
  public set signingAlgorithm(value: string) {
    this._signingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmInput() {
    return this._signingAlgorithm;
  }

  // subject - computed: false, optional: false, required: true
  private _subject = new AcmpcaCertificateAuthoritySubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: AcmpcaCertificateAuthoritySubject) {
    this._subject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AcmpcaCertificateAuthorityTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AcmpcaCertificateAuthorityTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // usage_mode - computed: true, optional: true, required: false
  private _usageMode?: string; 
  public get usageMode() {
    return this.getStringAttribute('usage_mode');
  }
  public set usageMode(value: string) {
    this._usageMode = value;
  }
  public resetUsageMode() {
    this._usageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageModeInput() {
    return this._usageMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csr_extensions: acmpcaCertificateAuthorityCsrExtensionsToTerraform(this._csrExtensions.internalValue),
      key_algorithm: cdktn.stringToTerraform(this._keyAlgorithm),
      key_storage_security_standard: cdktn.stringToTerraform(this._keyStorageSecurityStandard),
      revocation_configuration: acmpcaCertificateAuthorityRevocationConfigurationToTerraform(this._revocationConfiguration.internalValue),
      signing_algorithm: cdktn.stringToTerraform(this._signingAlgorithm),
      subject: acmpcaCertificateAuthoritySubjectToTerraform(this._subject.internalValue),
      tags: cdktn.listMapper(acmpcaCertificateAuthorityTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
      usage_mode: cdktn.stringToTerraform(this._usageMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csr_extensions: {
        value: acmpcaCertificateAuthorityCsrExtensionsToHclTerraform(this._csrExtensions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AcmpcaCertificateAuthorityCsrExtensions",
      },
      key_algorithm: {
        value: cdktn.stringToHclTerraform(this._keyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_storage_security_standard: {
        value: cdktn.stringToHclTerraform(this._keyStorageSecurityStandard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revocation_configuration: {
        value: acmpcaCertificateAuthorityRevocationConfigurationToHclTerraform(this._revocationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AcmpcaCertificateAuthorityRevocationConfiguration",
      },
      signing_algorithm: {
        value: cdktn.stringToHclTerraform(this._signingAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: acmpcaCertificateAuthoritySubjectToHclTerraform(this._subject.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AcmpcaCertificateAuthoritySubject",
      },
      tags: {
        value: cdktn.listMapperHcl(acmpcaCertificateAuthorityTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcmpcaCertificateAuthorityTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_mode: {
        value: cdktn.stringToHclTerraform(this._usageMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
