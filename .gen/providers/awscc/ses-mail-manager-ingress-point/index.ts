// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SesMailManagerIngressPointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}
  */
  readonly ingressPointConfiguration?: SesMailManagerIngressPointIngressPointConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}
  */
  readonly ingressPointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}
  */
  readonly networkConfiguration?: SesMailManagerIngressPointNetworkConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}
  */
  readonly ruleSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}
  */
  readonly statusToUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}
  */
  readonly tags?: SesMailManagerIngressPointTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}
  */
  readonly tlsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}
  */
  readonly trafficPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}
  */
  readonly type: string;
}
export interface SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#ca_content SesMailManagerIngressPoint#ca_content}
  */
  readonly caContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#crl_content SesMailManagerIngressPoint#crl_content}
  */
  readonly crlContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#kms_key_arn SesMailManagerIngressPoint#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreToTerraform(struct?: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_content: cdktn.stringToTerraform(struct!.caContent),
    crl_content: cdktn.stringToTerraform(struct!.crlContent),
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreToHclTerraform(struct?: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_content: {
      value: cdktn.stringToHclTerraform(struct!.caContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crl_content: {
      value: cdktn.stringToHclTerraform(struct!.crlContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.caContent = this._caContent;
    }
    if (this._crlContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlContent = this._crlContent;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caContent = undefined;
      this._crlContent = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caContent = value.caContent;
      this._crlContent = value.crlContent;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // ca_content - computed: true, optional: true, required: false
  private _caContent?: string;
  public get caContent() {
    return this.getStringAttribute('ca_content');
  }
  public set caContent(value: string) {
    this._caContent = value;
  }
  public resetCaContent() {
    this._caContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caContentInput() {
    return this._caContent;
  }

  // crl_content - computed: true, optional: true, required: false
  private _crlContent?: string;
  public get crlContent() {
    return this.getStringAttribute('crl_content');
  }
  public set crlContent(value: string) {
    this._crlContent = value;
  }
  public resetCrlContent() {
    this._crlContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlContentInput() {
    return this._crlContent;
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#trust_store SesMailManagerIngressPoint#trust_store}
  */
  readonly trustStore?: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore;
}

export function sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationToTerraform(struct?: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trust_store: sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreToTerraform(struct!.trustStore),
  }
}


export function sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationToHclTerraform(struct?: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    trust_store: {
      value: sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreToHclTerraform(struct!.trustStore),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStore = this._trustStore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trustStore.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trustStore.internalValue = value.trustStore;
    }
  }

  // trust_store - computed: true, optional: true, required: false
  private _trustStore = new SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference(this, "trust_store");
  public get trustStore() {
    return this._trustStore;
  }
  public putTrustStore(value: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore) {
    this._trustStore.internalValue = value;
  }
  public resetTrustStore() {
    this._trustStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreInput() {
    return this._trustStore.internalValue;
  }
}
export interface SesMailManagerIngressPointIngressPointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#secret_arn SesMailManagerIngressPoint#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#smtp_password SesMailManagerIngressPoint#smtp_password}
  */
  readonly smtpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#tls_auth_configuration SesMailManagerIngressPoint#tls_auth_configuration}
  */
  readonly tlsAuthConfiguration?: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration;
}

export function sesMailManagerIngressPointIngressPointConfigurationToTerraform(struct?: SesMailManagerIngressPointIngressPointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    smtp_password: cdktn.stringToTerraform(struct!.smtpPassword),
    tls_auth_configuration: sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationToTerraform(struct!.tlsAuthConfiguration),
  }
}


export function sesMailManagerIngressPointIngressPointConfigurationToHclTerraform(struct?: SesMailManagerIngressPointIngressPointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_password: {
      value: cdktn.stringToHclTerraform(struct!.smtpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_auth_configuration: {
      value: sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationToHclTerraform(struct!.tlsAuthConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerIngressPointIngressPointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerIngressPointIngressPointConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._smtpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpPassword = this._smtpPassword;
    }
    if (this._tlsAuthConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsAuthConfiguration = this._tlsAuthConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerIngressPointIngressPointConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretArn = undefined;
      this._smtpPassword = undefined;
      this._tlsAuthConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretArn = value.secretArn;
      this._smtpPassword = value.smtpPassword;
      this._tlsAuthConfiguration.internalValue = value.tlsAuthConfiguration;
    }
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string;
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // smtp_password - computed: true, optional: true, required: false
  private _smtpPassword?: string;
  public get smtpPassword() {
    return this.getStringAttribute('smtp_password');
  }
  public set smtpPassword(value: string) {
    this._smtpPassword = value;
  }
  public resetSmtpPassword() {
    this._smtpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPasswordInput() {
    return this._smtpPassword;
  }

  // tls_auth_configuration - computed: true, optional: true, required: false
  private _tlsAuthConfiguration = new SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference(this, "tls_auth_configuration");
  public get tlsAuthConfiguration() {
    return this._tlsAuthConfiguration;
  }
  public putTlsAuthConfiguration(value: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration) {
    this._tlsAuthConfiguration.internalValue = value;
  }
  public resetTlsAuthConfiguration() {
    this._tlsAuthConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsAuthConfigurationInput() {
    return this._tlsAuthConfiguration.internalValue;
  }
}
export interface SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#vpc_endpoint_id SesMailManagerIngressPoint#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
}

export function sesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationToTerraform(struct?: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_endpoint_id: cdktn.stringToTerraform(struct!.vpcEndpointId),
  }
}


export function sesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationToHclTerraform(struct?: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_endpoint_id: {
      value: cdktn.stringToHclTerraform(struct!.vpcEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointId = this._vpcEndpointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcEndpointId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcEndpointId = value.vpcEndpointId;
    }
  }

  // vpc_endpoint_id - computed: true, optional: true, required: false
  private _vpcEndpointId?: string;
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }
}
export interface SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#ip_type SesMailManagerIngressPoint#ip_type}
  */
  readonly ipType?: string;
}

export function sesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationToTerraform(struct?: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_type: cdktn.stringToTerraform(struct!.ipType),
  }
}


export function sesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationToHclTerraform(struct?: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_type: {
      value: cdktn.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipType = value.ipType;
    }
  }

  // ip_type - computed: true, optional: true, required: false
  private _ipType?: string;
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }
}
export interface SesMailManagerIngressPointNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#private_network_configuration SesMailManagerIngressPoint#private_network_configuration}
  */
  readonly privateNetworkConfiguration?: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#public_network_configuration SesMailManagerIngressPoint#public_network_configuration}
  */
  readonly publicNetworkConfiguration?: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration;
}

export function sesMailManagerIngressPointNetworkConfigurationToTerraform(struct?: SesMailManagerIngressPointNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_network_configuration: sesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationToTerraform(struct!.privateNetworkConfiguration),
    public_network_configuration: sesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationToTerraform(struct!.publicNetworkConfiguration),
  }
}


export function sesMailManagerIngressPointNetworkConfigurationToHclTerraform(struct?: SesMailManagerIngressPointNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_network_configuration: {
      value: sesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationToHclTerraform(struct!.privateNetworkConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration",
    },
    public_network_configuration: {
      value: sesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationToHclTerraform(struct!.publicNetworkConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SesMailManagerIngressPointNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SesMailManagerIngressPointNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateNetworkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkConfiguration = this._privateNetworkConfiguration?.internalValue;
    }
    if (this._publicNetworkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkConfiguration = this._publicNetworkConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesMailManagerIngressPointNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateNetworkConfiguration.internalValue = undefined;
      this._publicNetworkConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateNetworkConfiguration.internalValue = value.privateNetworkConfiguration;
      this._publicNetworkConfiguration.internalValue = value.publicNetworkConfiguration;
    }
  }

  // private_network_configuration - computed: true, optional: true, required: false
  private _privateNetworkConfiguration = new SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference(this, "private_network_configuration");
  public get privateNetworkConfiguration() {
    return this._privateNetworkConfiguration;
  }
  public putPrivateNetworkConfiguration(value: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration) {
    this._privateNetworkConfiguration.internalValue = value;
  }
  public resetPrivateNetworkConfiguration() {
    this._privateNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkConfigurationInput() {
    return this._privateNetworkConfiguration.internalValue;
  }

  // public_network_configuration - computed: true, optional: true, required: false
  private _publicNetworkConfiguration = new SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference(this, "public_network_configuration");
  public get publicNetworkConfiguration() {
    return this._publicNetworkConfiguration;
  }
  public putPublicNetworkConfiguration(value: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration) {
    this._publicNetworkConfiguration.internalValue = value;
  }
  public resetPublicNetworkConfiguration() {
    this._publicNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkConfigurationInput() {
    return this._publicNetworkConfiguration.internalValue;
  }
}
export interface SesMailManagerIngressPointTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#key SesMailManagerIngressPoint#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#value SesMailManagerIngressPoint#value}
  */
  readonly value?: string;
}

export function sesMailManagerIngressPointTagsToTerraform(struct?: SesMailManagerIngressPointTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sesMailManagerIngressPointTagsToHclTerraform(struct?: SesMailManagerIngressPointTags | cdktn.IResolvable): any {
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

export class SesMailManagerIngressPointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SesMailManagerIngressPointTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SesMailManagerIngressPointTags | cdktn.IResolvable | undefined) {
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

export class SesMailManagerIngressPointTagsList extends cdktn.ComplexList {
  public internalValue? : SesMailManagerIngressPointTags[] | cdktn.IResolvable

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
  public get(index: number): SesMailManagerIngressPointTagsOutputReference {
    return new SesMailManagerIngressPointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point awscc_ses_mail_manager_ingress_point}
*/
export class SesMailManagerIngressPoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ses_mail_manager_ingress_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SesMailManagerIngressPoint to import
  * @param importFromId The id of the existing SesMailManagerIngressPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SesMailManagerIngressPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_mail_manager_ingress_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ses_mail_manager_ingress_point awscc_ses_mail_manager_ingress_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesMailManagerIngressPointConfig
  */
  public constructor(scope: Construct, id: string, config: SesMailManagerIngressPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_mail_manager_ingress_point',
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
    this._ingressPointConfiguration.internalValue = config.ingressPointConfiguration;
    this._ingressPointName = config.ingressPointName;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._ruleSetId = config.ruleSetId;
    this._statusToUpdate = config.statusToUpdate;
    this._tags.internalValue = config.tags;
    this._tlsPolicy = config.tlsPolicy;
    this._trafficPolicyId = config.trafficPolicyId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // a_record - computed: true, optional: false, required: false
  public get aRecord() {
    return this.getStringAttribute('a_record');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_point_arn - computed: true, optional: false, required: false
  public get ingressPointArn() {
    return this.getStringAttribute('ingress_point_arn');
  }

  // ingress_point_configuration - computed: true, optional: true, required: false
  private _ingressPointConfiguration = new SesMailManagerIngressPointIngressPointConfigurationOutputReference(this, "ingress_point_configuration");
  public get ingressPointConfiguration() {
    return this._ingressPointConfiguration;
  }
  public putIngressPointConfiguration(value: SesMailManagerIngressPointIngressPointConfiguration) {
    this._ingressPointConfiguration.internalValue = value;
  }
  public resetIngressPointConfiguration() {
    this._ingressPointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPointConfigurationInput() {
    return this._ingressPointConfiguration.internalValue;
  }

  // ingress_point_id - computed: true, optional: false, required: false
  public get ingressPointId() {
    return this.getStringAttribute('ingress_point_id');
  }

  // ingress_point_name - computed: true, optional: true, required: false
  private _ingressPointName?: string;
  public get ingressPointName() {
    return this.getStringAttribute('ingress_point_name');
  }
  public set ingressPointName(value: string) {
    this._ingressPointName = value;
  }
  public resetIngressPointName() {
    this._ingressPointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPointNameInput() {
    return this._ingressPointName;
  }

  // network_configuration - computed: true, optional: true, required: false
  private _networkConfiguration = new SesMailManagerIngressPointNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: SesMailManagerIngressPointNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // rule_set_id - computed: false, optional: false, required: true
  private _ruleSetId?: string;
  public get ruleSetId() {
    return this.getStringAttribute('rule_set_id');
  }
  public set ruleSetId(value: string) {
    this._ruleSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetIdInput() {
    return this._ruleSetId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_to_update - computed: true, optional: true, required: false
  private _statusToUpdate?: string;
  public get statusToUpdate() {
    return this.getStringAttribute('status_to_update');
  }
  public set statusToUpdate(value: string) {
    this._statusToUpdate = value;
  }
  public resetStatusToUpdate() {
    this._statusToUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusToUpdateInput() {
    return this._statusToUpdate;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SesMailManagerIngressPointTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SesMailManagerIngressPointTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tls_policy - computed: true, optional: true, required: false
  private _tlsPolicy?: string;
  public get tlsPolicy() {
    return this.getStringAttribute('tls_policy');
  }
  public set tlsPolicy(value: string) {
    this._tlsPolicy = value;
  }
  public resetTlsPolicy() {
    this._tlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPolicyInput() {
    return this._tlsPolicy;
  }

  // traffic_policy_id - computed: false, optional: false, required: true
  private _trafficPolicyId?: string;
  public get trafficPolicyId() {
    return this.getStringAttribute('traffic_policy_id');
  }
  public set trafficPolicyId(value: string) {
    this._trafficPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyIdInput() {
    return this._trafficPolicyId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ingress_point_configuration: sesMailManagerIngressPointIngressPointConfigurationToTerraform(this._ingressPointConfiguration.internalValue),
      ingress_point_name: cdktn.stringToTerraform(this._ingressPointName),
      network_configuration: sesMailManagerIngressPointNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      rule_set_id: cdktn.stringToTerraform(this._ruleSetId),
      status_to_update: cdktn.stringToTerraform(this._statusToUpdate),
      tags: cdktn.listMapper(sesMailManagerIngressPointTagsToTerraform, false)(this._tags.internalValue),
      tls_policy: cdktn.stringToTerraform(this._tlsPolicy),
      traffic_policy_id: cdktn.stringToTerraform(this._trafficPolicyId),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ingress_point_configuration: {
        value: sesMailManagerIngressPointIngressPointConfigurationToHclTerraform(this._ingressPointConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesMailManagerIngressPointIngressPointConfiguration",
      },
      ingress_point_name: {
        value: cdktn.stringToHclTerraform(this._ingressPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_configuration: {
        value: sesMailManagerIngressPointNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SesMailManagerIngressPointNetworkConfiguration",
      },
      rule_set_id: {
        value: cdktn.stringToHclTerraform(this._ruleSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_to_update: {
        value: cdktn.stringToHclTerraform(this._statusToUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(sesMailManagerIngressPointTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SesMailManagerIngressPointTagsList",
      },
      tls_policy: {
        value: cdktn.stringToHclTerraform(this._tlsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_policy_id: {
        value: cdktn.stringToHclTerraform(this._trafficPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
