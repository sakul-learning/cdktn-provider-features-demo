// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_ingress_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSesMailManagerIngressPointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_ingress_point#id DataAwsccSesMailManagerIngressPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore {
}

export function dataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreToTerraform(struct?: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreToHclTerraform(struct?: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_content - computed: true, optional: false, required: false
  public get caContent() {
    return this.getStringAttribute('ca_content');
  }

  // crl_content - computed: true, optional: false, required: false
  public get crlContent() {
    return this.getStringAttribute('crl_content');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration {
}

export function dataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationToTerraform(struct?: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationToHclTerraform(struct?: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trust_store - computed: true, optional: false, required: false
  private _trustStore = new DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference(this, "trust_store");
  public get trustStore() {
    return this._trustStore;
  }
}
export interface DataAwsccSesMailManagerIngressPointIngressPointConfiguration {
}

export function dataAwsccSesMailManagerIngressPointIngressPointConfigurationToTerraform(struct?: DataAwsccSesMailManagerIngressPointIngressPointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerIngressPointIngressPointConfigurationToHclTerraform(struct?: DataAwsccSesMailManagerIngressPointIngressPointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerIngressPointIngressPointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerIngressPointIngressPointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // smtp_password - computed: true, optional: false, required: false
  public get smtpPassword() {
    return this.getStringAttribute('smtp_password');
  }

  // tls_auth_configuration - computed: true, optional: false, required: false
  private _tlsAuthConfiguration = new DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference(this, "tls_auth_configuration");
  public get tlsAuthConfiguration() {
    return this._tlsAuthConfiguration;
  }
}
export interface DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration {
}

export function dataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationToTerraform(struct?: DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationToHclTerraform(struct?: DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
}
export interface DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration {
}

export function dataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationToTerraform(struct?: DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationToHclTerraform(struct?: DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_type - computed: true, optional: false, required: false
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
}
export interface DataAwsccSesMailManagerIngressPointNetworkConfiguration {
}

export function dataAwsccSesMailManagerIngressPointNetworkConfigurationToTerraform(struct?: DataAwsccSesMailManagerIngressPointNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerIngressPointNetworkConfigurationToHclTerraform(struct?: DataAwsccSesMailManagerIngressPointNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSesMailManagerIngressPointNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerIngressPointNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_network_configuration - computed: true, optional: false, required: false
  private _privateNetworkConfiguration = new DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference(this, "private_network_configuration");
  public get privateNetworkConfiguration() {
    return this._privateNetworkConfiguration;
  }

  // public_network_configuration - computed: true, optional: false, required: false
  private _publicNetworkConfiguration = new DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference(this, "public_network_configuration");
  public get publicNetworkConfiguration() {
    return this._publicNetworkConfiguration;
  }
}
export interface DataAwsccSesMailManagerIngressPointTags {
}

export function dataAwsccSesMailManagerIngressPointTagsToTerraform(struct?: DataAwsccSesMailManagerIngressPointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSesMailManagerIngressPointTagsToHclTerraform(struct?: DataAwsccSesMailManagerIngressPointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSesMailManagerIngressPointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSesMailManagerIngressPointTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSesMailManagerIngressPointTags | undefined) {
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

export class DataAwsccSesMailManagerIngressPointTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSesMailManagerIngressPointTagsOutputReference {
    return new DataAwsccSesMailManagerIngressPointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_ingress_point awscc_ses_mail_manager_ingress_point}
*/
export class DataAwsccSesMailManagerIngressPoint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_mail_manager_ingress_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSesMailManagerIngressPoint to import
  * @param importFromId The id of the existing DataAwsccSesMailManagerIngressPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_ingress_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSesMailManagerIngressPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_mail_manager_ingress_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/ses_mail_manager_ingress_point awscc_ses_mail_manager_ingress_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSesMailManagerIngressPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSesMailManagerIngressPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_mail_manager_ingress_point',
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

  // a_record - computed: true, optional: false, required: false
  public get aRecord() {
    return this.getStringAttribute('a_record');
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

  // ingress_point_arn - computed: true, optional: false, required: false
  public get ingressPointArn() {
    return this.getStringAttribute('ingress_point_arn');
  }

  // ingress_point_configuration - computed: true, optional: false, required: false
  private _ingressPointConfiguration = new DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference(this, "ingress_point_configuration");
  public get ingressPointConfiguration() {
    return this._ingressPointConfiguration;
  }

  // ingress_point_id - computed: true, optional: false, required: false
  public get ingressPointId() {
    return this.getStringAttribute('ingress_point_id');
  }

  // ingress_point_name - computed: true, optional: false, required: false
  public get ingressPointName() {
    return this.getStringAttribute('ingress_point_name');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // rule_set_id - computed: true, optional: false, required: false
  public get ruleSetId() {
    return this.getStringAttribute('rule_set_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_to_update - computed: true, optional: false, required: false
  public get statusToUpdate() {
    return this.getStringAttribute('status_to_update');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSesMailManagerIngressPointTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tls_policy - computed: true, optional: false, required: false
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }

  // traffic_policy_id - computed: true, optional: false, required: false
  public get trafficPolicyId() {
    return this.getStringAttribute('traffic_policy_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
