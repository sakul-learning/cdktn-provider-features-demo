// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/amplify_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAmplifyDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/amplify_domain#id DataAwsccAmplifyDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAmplifyDomainCertificate {
}

export function dataAwsccAmplifyDomainCertificateToTerraform(struct?: DataAwsccAmplifyDomainCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAmplifyDomainCertificateToHclTerraform(struct?: DataAwsccAmplifyDomainCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAmplifyDomainCertificateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAmplifyDomainCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAmplifyDomainCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // certificate_verification_dns_record - computed: true, optional: false, required: false
  public get certificateVerificationDnsRecord() {
    return this.getStringAttribute('certificate_verification_dns_record');
  }
}
export interface DataAwsccAmplifyDomainCertificateSettings {
}

export function dataAwsccAmplifyDomainCertificateSettingsToTerraform(struct?: DataAwsccAmplifyDomainCertificateSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAmplifyDomainCertificateSettingsToHclTerraform(struct?: DataAwsccAmplifyDomainCertificateSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAmplifyDomainCertificateSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAmplifyDomainCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAmplifyDomainCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // custom_certificate_arn - computed: true, optional: false, required: false
  public get customCertificateArn() {
    return this.getStringAttribute('custom_certificate_arn');
  }
}
export interface DataAwsccAmplifyDomainSubDomainSettings {
}

export function dataAwsccAmplifyDomainSubDomainSettingsToTerraform(struct?: DataAwsccAmplifyDomainSubDomainSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAmplifyDomainSubDomainSettingsToHclTerraform(struct?: DataAwsccAmplifyDomainSubDomainSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAmplifyDomainSubDomainSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAmplifyDomainSubDomainSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAmplifyDomainSubDomainSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch_name - computed: true, optional: false, required: false
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataAwsccAmplifyDomainSubDomainSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAmplifyDomainSubDomainSettingsOutputReference {
    return new DataAwsccAmplifyDomainSubDomainSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/amplify_domain awscc_amplify_domain}
*/
export class DataAwsccAmplifyDomain extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_amplify_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAmplifyDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAmplifyDomain to import
  * @param importFromId The id of the existing DataAwsccAmplifyDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/amplify_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAmplifyDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_amplify_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/amplify_domain awscc_amplify_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAmplifyDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAmplifyDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_amplify_domain',
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

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_sub_domain_creation_patterns - computed: true, optional: false, required: false
  public get autoSubDomainCreationPatterns() {
    return this.getListAttribute('auto_sub_domain_creation_patterns');
  }

  // auto_sub_domain_iam_role - computed: true, optional: false, required: false
  public get autoSubDomainIamRole() {
    return this.getStringAttribute('auto_sub_domain_iam_role');
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataAwsccAmplifyDomainCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }

  // certificate_record - computed: true, optional: false, required: false
  public get certificateRecord() {
    return this.getStringAttribute('certificate_record');
  }

  // certificate_settings - computed: true, optional: false, required: false
  private _certificateSettings = new DataAwsccAmplifyDomainCertificateSettingsOutputReference(this, "certificate_settings");
  public get certificateSettings() {
    return this._certificateSettings;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_status - computed: true, optional: false, required: false
  public get domainStatus() {
    return this.getStringAttribute('domain_status');
  }

  // enable_auto_sub_domain - computed: true, optional: false, required: false
  public get enableAutoSubDomain() {
    return this.getBooleanAttribute('enable_auto_sub_domain');
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

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // sub_domain_settings - computed: true, optional: false, required: false
  private _subDomainSettings = new DataAwsccAmplifyDomainSubDomainSettingsList(this, "sub_domain_settings", false);
  public get subDomainSettings() {
    return this._subDomainSettings;
  }

  // update_status - computed: true, optional: false, required: false
  public get updateStatus() {
    return this.getStringAttribute('update_status');
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
