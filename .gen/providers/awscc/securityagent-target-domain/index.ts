// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityagent_target_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityagentTargetDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Tags for the target domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityagent_target_domain#tags SecurityagentTargetDomain#tags}
  */
  readonly tags?: SecurityagentTargetDomainTags[] | cdktn.IResolvable;
  /**
  * Domain name of the target domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityagent_target_domain#target_domain_name SecurityagentTargetDomain#target_domain_name}
  */
  readonly targetDomainName: string;
  /**
  * Verification method for the target domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityagent_target_domain#verification_method SecurityagentTargetDomain#verification_method}
  */
  readonly verificationMethod: string;
}
export interface SecurityagentTargetDomainTags {
  /**
  * The key name of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityagent_target_domain#key SecurityagentTargetDomain#key}
  */
  readonly key?: string;
  /**
  * The value for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityagent_target_domain#value SecurityagentTargetDomain#value}
  */
  readonly value?: string;
}

export function securityagentTargetDomainTagsToTerraform(struct?: SecurityagentTargetDomainTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function securityagentTargetDomainTagsToHclTerraform(struct?: SecurityagentTargetDomainTags | cdktn.IResolvable): any {
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

export class SecurityagentTargetDomainTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityagentTargetDomainTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecurityagentTargetDomainTags | cdktn.IResolvable | undefined) {
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

export class SecurityagentTargetDomainTagsList extends cdktn.ComplexList {
  public internalValue? : SecurityagentTargetDomainTags[] | cdktn.IResolvable

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
  public get(index: number): SecurityagentTargetDomainTagsOutputReference {
    return new SecurityagentTargetDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityagentTargetDomainVerificationDetailsDnsTxt {
}

export function securityagentTargetDomainVerificationDetailsDnsTxtToTerraform(struct?: SecurityagentTargetDomainVerificationDetailsDnsTxt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function securityagentTargetDomainVerificationDetailsDnsTxtToHclTerraform(struct?: SecurityagentTargetDomainVerificationDetailsDnsTxt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityagentTargetDomainVerificationDetailsDnsTxt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityagentTargetDomainVerificationDetailsDnsTxt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_record_name - computed: true, optional: false, required: false
  public get dnsRecordName() {
    return this.getStringAttribute('dns_record_name');
  }

  // dns_record_type - computed: true, optional: false, required: false
  public get dnsRecordType() {
    return this.getStringAttribute('dns_record_type');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}
export interface SecurityagentTargetDomainVerificationDetailsHttpRoute {
}

export function securityagentTargetDomainVerificationDetailsHttpRouteToTerraform(struct?: SecurityagentTargetDomainVerificationDetailsHttpRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function securityagentTargetDomainVerificationDetailsHttpRouteToHclTerraform(struct?: SecurityagentTargetDomainVerificationDetailsHttpRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityagentTargetDomainVerificationDetailsHttpRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityagentTargetDomainVerificationDetailsHttpRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_path - computed: true, optional: false, required: false
  public get routePath() {
    return this.getStringAttribute('route_path');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}
export interface SecurityagentTargetDomainVerificationDetails {
}

export function securityagentTargetDomainVerificationDetailsToTerraform(struct?: SecurityagentTargetDomainVerificationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function securityagentTargetDomainVerificationDetailsToHclTerraform(struct?: SecurityagentTargetDomainVerificationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SecurityagentTargetDomainVerificationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityagentTargetDomainVerificationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityagentTargetDomainVerificationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_txt - computed: true, optional: false, required: false
  private _dnsTxt = new SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference(this, "dns_txt");
  public get dnsTxt() {
    return this._dnsTxt;
  }

  // http_route - computed: true, optional: false, required: false
  private _httpRoute = new SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference(this, "http_route");
  public get httpRoute() {
    return this._httpRoute;
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityagent_target_domain awscc_securityagent_target_domain}
*/
export class SecurityagentTargetDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityagent_target_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityagentTargetDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityagentTargetDomain to import
  * @param importFromId The id of the existing SecurityagentTargetDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityagent_target_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityagentTargetDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityagent_target_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityagent_target_domain awscc_securityagent_target_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityagentTargetDomainConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityagentTargetDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityagent_target_domain',
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
    this._tags.internalValue = config.tags;
    this._targetDomainName = config.targetDomainName;
    this._verificationMethod = config.verificationMethod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SecurityagentTargetDomainTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SecurityagentTargetDomainTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_domain_id - computed: true, optional: false, required: false
  public get targetDomainId() {
    return this.getStringAttribute('target_domain_id');
  }

  // target_domain_name - computed: false, optional: false, required: true
  private _targetDomainName?: string; 
  public get targetDomainName() {
    return this.getStringAttribute('target_domain_name');
  }
  public set targetDomainName(value: string) {
    this._targetDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDomainNameInput() {
    return this._targetDomainName;
  }

  // verification_details - computed: true, optional: false, required: false
  private _verificationDetails = new SecurityagentTargetDomainVerificationDetailsOutputReference(this, "verification_details");
  public get verificationDetails() {
    return this._verificationDetails;
  }

  // verification_method - computed: false, optional: false, required: true
  private _verificationMethod?: string; 
  public get verificationMethod() {
    return this.getStringAttribute('verification_method');
  }
  public set verificationMethod(value: string) {
    this._verificationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMethodInput() {
    return this._verificationMethod;
  }

  // verification_status - computed: true, optional: false, required: false
  public get verificationStatus() {
    return this.getStringAttribute('verification_status');
  }

  // verification_status_reason - computed: true, optional: false, required: false
  public get verificationStatusReason() {
    return this.getStringAttribute('verification_status_reason');
  }

  // verified_at - computed: true, optional: false, required: false
  public get verifiedAt() {
    return this.getStringAttribute('verified_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tags: cdktn.listMapper(securityagentTargetDomainTagsToTerraform, false)(this._tags.internalValue),
      target_domain_name: cdktn.stringToTerraform(this._targetDomainName),
      verification_method: cdktn.stringToTerraform(this._verificationMethod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tags: {
        value: cdktn.listMapperHcl(securityagentTargetDomainTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityagentTargetDomainTagsList",
      },
      target_domain_name: {
        value: cdktn.stringToHclTerraform(this._targetDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_method: {
        value: cdktn.stringToHclTerraform(this._verificationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
