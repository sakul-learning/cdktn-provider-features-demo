// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/certificatemanager_acme_domain_validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCertificatemanagerAcmeDomainValidationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/certificatemanager_acme_domain_validation#id DataAwsccCertificatemanagerAcmeDomainValidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope {
}

export function dataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeToTerraform(struct?: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeToHclTerraform(struct?: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_domain - computed: true, optional: false, required: false
  public get exactDomain() {
    return this.getStringAttribute('exact_domain');
  }

  // subdomains - computed: true, optional: false, required: false
  public get subdomains() {
    return this.getStringAttribute('subdomains');
  }

  // wildcards - computed: true, optional: false, required: false
  public get wildcards() {
    return this.getStringAttribute('wildcards');
  }
}
export interface DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation {
}

export function dataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationToTerraform(struct?: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationToHclTerraform(struct?: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_scope - computed: true, optional: false, required: false
  private _domainScope = new DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference(this, "domain_scope");
  public get domainScope() {
    return this._domainScope;
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
}
export interface DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions {
}

export function dataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsToTerraform(struct?: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsToHclTerraform(struct?: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_prevalidation - computed: true, optional: false, required: false
  private _dnsPrevalidation = new DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference(this, "dns_prevalidation");
  public get dnsPrevalidation() {
    return this._dnsPrevalidation;
  }
}
export interface DataAwsccCertificatemanagerAcmeDomainValidationTags {
}

export function dataAwsccCertificatemanagerAcmeDomainValidationTagsToTerraform(struct?: DataAwsccCertificatemanagerAcmeDomainValidationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCertificatemanagerAcmeDomainValidationTagsToHclTerraform(struct?: DataAwsccCertificatemanagerAcmeDomainValidationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCertificatemanagerAcmeDomainValidationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCertificatemanagerAcmeDomainValidationTags | undefined) {
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

export class DataAwsccCertificatemanagerAcmeDomainValidationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference {
    return new DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation}
*/
export class DataAwsccCertificatemanagerAcmeDomainValidation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_certificatemanager_acme_domain_validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCertificatemanagerAcmeDomainValidation to import
  * @param importFromId The id of the existing DataAwsccCertificatemanagerAcmeDomainValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/certificatemanager_acme_domain_validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCertificatemanagerAcmeDomainValidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_certificatemanager_acme_domain_validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCertificatemanagerAcmeDomainValidationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCertificatemanagerAcmeDomainValidationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_certificatemanager_acme_domain_validation',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acme_endpoint_arn - computed: true, optional: false, required: false
  public get acmeEndpointArn() {
    return this.getStringAttribute('acme_endpoint_arn');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // prevalidation_options - computed: true, optional: false, required: false
  private _prevalidationOptions = new DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference(this, "prevalidation_options");
  public get prevalidationOptions() {
    return this._prevalidationOptions;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCertificatemanagerAcmeDomainValidationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
