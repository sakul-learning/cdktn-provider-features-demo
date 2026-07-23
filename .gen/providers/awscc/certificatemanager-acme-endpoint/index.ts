// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CertificatemanagerAcmeEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * The authorization behavior for the ACME endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#authorization_behavior CertificatemanagerAcmeEndpoint#authorization_behavior}
  */
  readonly authorizationBehavior: string;
  /**
  * The certificate authority configuration for the ACME endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#certificate_authority CertificatemanagerAcmeEndpoint#certificate_authority}
  */
  readonly certificateAuthority: CertificatemanagerAcmeEndpointCertificateAuthority;
  /**
  * Tags applied to certificates issued via this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#certificate_tags CertificatemanagerAcmeEndpoint#certificate_tags}
  */
  readonly certificateTags?: CertificatemanagerAcmeEndpointCertificateTags[] | cdktn.IResolvable;
  /**
  * Whether contact information is required for the ACME endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#contact CertificatemanagerAcmeEndpoint#contact}
  */
  readonly contact?: string;
  /**
  * Tags associated with the ACME endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#tags CertificatemanagerAcmeEndpoint#tags}
  */
  readonly tags?: CertificatemanagerAcmeEndpointTags[] | cdktn.IResolvable;
}
export interface CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority {
  /**
  * The allowed key algorithms for certificates issued via this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#allowed_key_algorithms CertificatemanagerAcmeEndpoint#allowed_key_algorithms}
  */
  readonly allowedKeyAlgorithms?: string[];
}

export function certificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityToTerraform(struct?: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_key_algorithms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedKeyAlgorithms),
  }
}


export function certificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityToHclTerraform(struct?: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_key_algorithms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedKeyAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedKeyAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedKeyAlgorithms = this._allowedKeyAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedKeyAlgorithms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedKeyAlgorithms = value.allowedKeyAlgorithms;
    }
  }

  // allowed_key_algorithms - computed: true, optional: true, required: false
  private _allowedKeyAlgorithms?: string[]; 
  public get allowedKeyAlgorithms() {
    return this.getListAttribute('allowed_key_algorithms');
  }
  public set allowedKeyAlgorithms(value: string[]) {
    this._allowedKeyAlgorithms = value;
  }
  public resetAllowedKeyAlgorithms() {
    this._allowedKeyAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedKeyAlgorithmsInput() {
    return this._allowedKeyAlgorithms;
  }
}
export interface CertificatemanagerAcmeEndpointCertificateAuthority {
  /**
  * Configuration for the public certificate authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#public_certificate_authority CertificatemanagerAcmeEndpoint#public_certificate_authority}
  */
  readonly publicCertificateAuthority: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority;
}

export function certificatemanagerAcmeEndpointCertificateAuthorityToTerraform(struct?: CertificatemanagerAcmeEndpointCertificateAuthority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    public_certificate_authority: certificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityToTerraform(struct!.publicCertificateAuthority),
  }
}


export function certificatemanagerAcmeEndpointCertificateAuthorityToHclTerraform(struct?: CertificatemanagerAcmeEndpointCertificateAuthority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    public_certificate_authority: {
      value: certificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityToHclTerraform(struct!.publicCertificateAuthority),
      isBlock: true,
      type: "struct",
      storageClassType: "CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificatemanagerAcmeEndpointCertificateAuthority | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicCertificateAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicCertificateAuthority = this._publicCertificateAuthority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatemanagerAcmeEndpointCertificateAuthority | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicCertificateAuthority.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicCertificateAuthority.internalValue = value.publicCertificateAuthority;
    }
  }

  // public_certificate_authority - computed: false, optional: false, required: true
  private _publicCertificateAuthority = new CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference(this, "public_certificate_authority");
  public get publicCertificateAuthority() {
    return this._publicCertificateAuthority;
  }
  public putPublicCertificateAuthority(value: CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority) {
    this._publicCertificateAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateAuthorityInput() {
    return this._publicCertificateAuthority.internalValue;
  }
}
export interface CertificatemanagerAcmeEndpointCertificateTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}
  */
  readonly value?: string;
}

export function certificatemanagerAcmeEndpointCertificateTagsToTerraform(struct?: CertificatemanagerAcmeEndpointCertificateTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function certificatemanagerAcmeEndpointCertificateTagsToHclTerraform(struct?: CertificatemanagerAcmeEndpointCertificateTags | cdktn.IResolvable): any {
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

export class CertificatemanagerAcmeEndpointCertificateTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CertificatemanagerAcmeEndpointCertificateTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CertificatemanagerAcmeEndpointCertificateTags | cdktn.IResolvable | undefined) {
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

export class CertificatemanagerAcmeEndpointCertificateTagsList extends cdktn.ComplexList {
  public internalValue? : CertificatemanagerAcmeEndpointCertificateTags[] | cdktn.IResolvable

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
  public get(index: number): CertificatemanagerAcmeEndpointCertificateTagsOutputReference {
    return new CertificatemanagerAcmeEndpointCertificateTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatemanagerAcmeEndpointTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}
  */
  readonly value?: string;
}

export function certificatemanagerAcmeEndpointTagsToTerraform(struct?: CertificatemanagerAcmeEndpointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function certificatemanagerAcmeEndpointTagsToHclTerraform(struct?: CertificatemanagerAcmeEndpointTags | cdktn.IResolvable): any {
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

export class CertificatemanagerAcmeEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CertificatemanagerAcmeEndpointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CertificatemanagerAcmeEndpointTags | cdktn.IResolvable | undefined) {
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

export class CertificatemanagerAcmeEndpointTagsList extends cdktn.ComplexList {
  public internalValue? : CertificatemanagerAcmeEndpointTags[] | cdktn.IResolvable

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
  public get(index: number): CertificatemanagerAcmeEndpointTagsOutputReference {
    return new CertificatemanagerAcmeEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint awscc_certificatemanager_acme_endpoint}
*/
export class CertificatemanagerAcmeEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_certificatemanager_acme_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificatemanagerAcmeEndpoint to import
  * @param importFromId The id of the existing CertificatemanagerAcmeEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificatemanagerAcmeEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_certificatemanager_acme_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/certificatemanager_acme_endpoint awscc_certificatemanager_acme_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificatemanagerAcmeEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: CertificatemanagerAcmeEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_certificatemanager_acme_endpoint',
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
    this._authorizationBehavior = config.authorizationBehavior;
    this._certificateAuthority.internalValue = config.certificateAuthority;
    this._certificateTags.internalValue = config.certificateTags;
    this._contact = config.contact;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acme_endpoint_arn - computed: true, optional: false, required: false
  public get acmeEndpointArn() {
    return this.getStringAttribute('acme_endpoint_arn');
  }

  // authorization_behavior - computed: false, optional: false, required: true
  private _authorizationBehavior?: string; 
  public get authorizationBehavior() {
    return this.getStringAttribute('authorization_behavior');
  }
  public set authorizationBehavior(value: string) {
    this._authorizationBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationBehaviorInput() {
    return this._authorizationBehavior;
  }

  // certificate_authority - computed: false, optional: false, required: true
  private _certificateAuthority = new CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference(this, "certificate_authority");
  public get certificateAuthority() {
    return this._certificateAuthority;
  }
  public putCertificateAuthority(value: CertificatemanagerAcmeEndpointCertificateAuthority) {
    this._certificateAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority.internalValue;
  }

  // certificate_tags - computed: true, optional: true, required: false
  private _certificateTags = new CertificatemanagerAcmeEndpointCertificateTagsList(this, "certificate_tags", false);
  public get certificateTags() {
    return this._certificateTags;
  }
  public putCertificateTags(value: CertificatemanagerAcmeEndpointCertificateTags[] | cdktn.IResolvable) {
    this._certificateTags.internalValue = value;
  }
  public resetCertificateTags() {
    this._certificateTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTagsInput() {
    return this._certificateTags.internalValue;
  }

  // contact - computed: true, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CertificatemanagerAcmeEndpointTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CertificatemanagerAcmeEndpointTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_behavior: cdktn.stringToTerraform(this._authorizationBehavior),
      certificate_authority: certificatemanagerAcmeEndpointCertificateAuthorityToTerraform(this._certificateAuthority.internalValue),
      certificate_tags: cdktn.listMapper(certificatemanagerAcmeEndpointCertificateTagsToTerraform, false)(this._certificateTags.internalValue),
      contact: cdktn.stringToTerraform(this._contact),
      tags: cdktn.listMapper(certificatemanagerAcmeEndpointTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_behavior: {
        value: cdktn.stringToHclTerraform(this._authorizationBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_authority: {
        value: certificatemanagerAcmeEndpointCertificateAuthorityToHclTerraform(this._certificateAuthority.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificatemanagerAcmeEndpointCertificateAuthority",
      },
      certificate_tags: {
        value: cdktn.listMapperHcl(certificatemanagerAcmeEndpointCertificateTagsToHclTerraform, false)(this._certificateTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificatemanagerAcmeEndpointCertificateTagsList",
      },
      contact: {
        value: cdktn.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(certificatemanagerAcmeEndpointTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificatemanagerAcmeEndpointTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
