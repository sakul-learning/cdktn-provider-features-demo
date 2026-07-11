// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OpensearchserviceDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#access_policies OpensearchserviceDomain#access_policies}
  */
  readonly accessPolicies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#advanced_options OpensearchserviceDomain#advanced_options}
  */
  readonly advancedOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#advanced_security_options OpensearchserviceDomain#advanced_security_options}
  */
  readonly advancedSecurityOptions?: OpensearchserviceDomainAdvancedSecurityOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#aiml_options OpensearchserviceDomain#aiml_options}
  */
  readonly aimlOptions?: OpensearchserviceDomainAimlOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#automated_snapshot_pause_options OpensearchserviceDomain#automated_snapshot_pause_options}
  */
  readonly automatedSnapshotPauseOptions?: OpensearchserviceDomainAutomatedSnapshotPauseOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#cluster_config OpensearchserviceDomain#cluster_config}
  */
  readonly clusterConfig?: OpensearchserviceDomainClusterConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#cognito_options OpensearchserviceDomain#cognito_options}
  */
  readonly cognitoOptions?: OpensearchserviceDomainCognitoOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#deployment_strategy_options OpensearchserviceDomain#deployment_strategy_options}
  */
  readonly deploymentStrategyOptions?: OpensearchserviceDomainDeploymentStrategyOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#domain_endpoint_options OpensearchserviceDomain#domain_endpoint_options}
  */
  readonly domainEndpointOptions?: OpensearchserviceDomainDomainEndpointOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#domain_name OpensearchserviceDomain#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#ebs_options OpensearchserviceDomain#ebs_options}
  */
  readonly ebsOptions?: OpensearchserviceDomainEbsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#encryption_at_rest_options OpensearchserviceDomain#encryption_at_rest_options}
  */
  readonly encryptionAtRestOptions?: OpensearchserviceDomainEncryptionAtRestOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#engine_version OpensearchserviceDomain#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Options for configuring Identity Center
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#identity_center_options OpensearchserviceDomain#identity_center_options}
  */
  readonly identityCenterOptions?: OpensearchserviceDomainIdentityCenterOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#ip_address_type OpensearchserviceDomain#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#log_publishing_options OpensearchserviceDomain#log_publishing_options}
  */
  readonly logPublishingOptions?: { [key: string]: OpensearchserviceDomainLogPublishingOptions } | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#node_to_node_encryption_options OpensearchserviceDomain#node_to_node_encryption_options}
  */
  readonly nodeToNodeEncryptionOptions?: OpensearchserviceDomainNodeToNodeEncryptionOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#off_peak_window_options OpensearchserviceDomain#off_peak_window_options}
  */
  readonly offPeakWindowOptions?: OpensearchserviceDomainOffPeakWindowOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#skip_shard_migration_wait OpensearchserviceDomain#skip_shard_migration_wait}
  */
  readonly skipShardMigrationWait?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#snapshot_options OpensearchserviceDomain#snapshot_options}
  */
  readonly snapshotOptions?: OpensearchserviceDomainSnapshotOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#software_update_options OpensearchserviceDomain#software_update_options}
  */
  readonly softwareUpdateOptions?: OpensearchserviceDomainSoftwareUpdateOptions;
  /**
  * An arbitrary set of tags (key-value pairs) for this Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#tags OpensearchserviceDomain#tags}
  */
  readonly tags?: OpensearchserviceDomainTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#vpc_options OpensearchserviceDomain#vpc_options}
  */
  readonly vpcOptions?: OpensearchserviceDomainVpcOptions;
}
export interface OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}
  */
  readonly subjectKey?: string;
}

export function opensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsToTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    roles_key: cdktn.stringToTerraform(struct!.rolesKey),
    subject_key: cdktn.stringToTerraform(struct!.subjectKey),
  }
}


export function opensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsToHclTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions | cdktn.IResolvable): any {
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
    roles_key: {
      value: cdktn.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktn.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._rolesKey = undefined;
      this._subjectKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._rolesKey = value.rolesKey;
      this._subjectKey = value.subjectKey;
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

  // roles_key - computed: true, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // subject_key - computed: true, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#public_key OpensearchserviceDomain#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}
  */
  readonly subjectKey?: string;
}

export function opensearchserviceDomainAdvancedSecurityOptionsJwtOptionsToTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    public_key: cdktn.stringToTerraform(struct!.publicKey),
    roles_key: cdktn.stringToTerraform(struct!.rolesKey),
    subject_key: cdktn.stringToTerraform(struct!.subjectKey),
  }
}


export function opensearchserviceDomainAdvancedSecurityOptionsJwtOptionsToHclTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions | cdktn.IResolvable): any {
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
    public_key: {
      value: cdktn.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktn.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktn.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._publicKey = undefined;
      this._rolesKey = undefined;
      this._subjectKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._publicKey = value.publicKey;
      this._rolesKey = value.rolesKey;
      this._subjectKey = value.subjectKey;
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

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // roles_key - computed: true, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // subject_key - computed: true, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#master_user_arn OpensearchserviceDomain#master_user_arn}
  */
  readonly masterUserArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}
  */
  readonly masterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#master_user_password OpensearchserviceDomain#master_user_password}
  */
  readonly masterUserPassword?: string;
}

export function opensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    master_user_arn: cdktn.stringToTerraform(struct!.masterUserArn),
    master_user_name: cdktn.stringToTerraform(struct!.masterUserName),
    master_user_password: cdktn.stringToTerraform(struct!.masterUserPassword),
  }
}


export function opensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsToHclTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    master_user_arn: {
      value: cdktn.stringToHclTerraform(struct!.masterUserArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_name: {
      value: cdktn.stringToHclTerraform(struct!.masterUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_password: {
      value: cdktn.stringToHclTerraform(struct!.masterUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterUserArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserArn = this._masterUserArn;
    }
    if (this._masterUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserName = this._masterUserName;
    }
    if (this._masterUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserPassword = this._masterUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masterUserArn = undefined;
      this._masterUserName = undefined;
      this._masterUserPassword = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masterUserArn = value.masterUserArn;
      this._masterUserName = value.masterUserName;
      this._masterUserPassword = value.masterUserPassword;
    }
  }

  // master_user_arn - computed: true, optional: true, required: false
  private _masterUserArn?: string; 
  public get masterUserArn() {
    return this.getStringAttribute('master_user_arn');
  }
  public set masterUserArn(value: string) {
    this._masterUserArn = value;
  }
  public resetMasterUserArn() {
    this._masterUserArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserArnInput() {
    return this._masterUserArn;
  }

  // master_user_name - computed: true, optional: true, required: false
  private _masterUserName?: string; 
  public get masterUserName() {
    return this.getStringAttribute('master_user_name');
  }
  public set masterUserName(value: string) {
    this._masterUserName = value;
  }
  public resetMasterUserName() {
    this._masterUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserNameInput() {
    return this._masterUserName;
  }

  // master_user_password - computed: true, optional: true, required: false
  private _masterUserPassword?: string; 
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }
  public set masterUserPassword(value: string) {
    this._masterUserPassword = value;
  }
  public resetMasterUserPassword() {
    this._masterUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordInput() {
    return this._masterUserPassword;
  }
}
export interface OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#entity_id OpensearchserviceDomain#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#metadata_content OpensearchserviceDomain#metadata_content}
  */
  readonly metadataContent?: string;
}

export function opensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpToTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_id: cdktn.stringToTerraform(struct!.entityId),
    metadata_content: cdktn.stringToTerraform(struct!.metadataContent),
  }
}


export function opensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpToHclTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_id: {
      value: cdktn.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_content: {
      value: cdktn.stringToHclTerraform(struct!.metadataContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._metadataContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataContent = this._metadataContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityId = undefined;
      this._metadataContent = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityId = value.entityId;
      this._metadataContent = value.metadataContent;
    }
  }

  // entity_id - computed: true, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // metadata_content - computed: true, optional: true, required: false
  private _metadataContent?: string; 
  public get metadataContent() {
    return this.getStringAttribute('metadata_content');
  }
  public set metadataContent(value: string) {
    this._metadataContent = value;
  }
  public resetMetadataContent() {
    this._metadataContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataContentInput() {
    return this._metadataContent;
  }
}
export interface OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#idp OpensearchserviceDomain#idp}
  */
  readonly idp?: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#master_backend_role OpensearchserviceDomain#master_backend_role}
  */
  readonly masterBackendRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#master_user_name OpensearchserviceDomain#master_user_name}
  */
  readonly masterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#session_timeout_minutes OpensearchserviceDomain#session_timeout_minutes}
  */
  readonly sessionTimeoutMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}
  */
  readonly subjectKey?: string;
}

export function opensearchserviceDomainAdvancedSecurityOptionsSamlOptionsToTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    idp: opensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpToTerraform(struct!.idp),
    master_backend_role: cdktn.stringToTerraform(struct!.masterBackendRole),
    master_user_name: cdktn.stringToTerraform(struct!.masterUserName),
    roles_key: cdktn.stringToTerraform(struct!.rolesKey),
    session_timeout_minutes: cdktn.numberToTerraform(struct!.sessionTimeoutMinutes),
    subject_key: cdktn.stringToTerraform(struct!.subjectKey),
  }
}


export function opensearchserviceDomainAdvancedSecurityOptionsSamlOptionsToHclTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions | cdktn.IResolvable): any {
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
    idp: {
      value: opensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpToHclTerraform(struct!.idp),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp",
    },
    master_backend_role: {
      value: cdktn.stringToHclTerraform(struct!.masterBackendRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_name: {
      value: cdktn.stringToHclTerraform(struct!.masterUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktn.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout_minutes: {
      value: cdktn.numberToHclTerraform(struct!.sessionTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subject_key: {
      value: cdktn.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp?.internalValue;
    }
    if (this._masterBackendRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterBackendRole = this._masterBackendRole;
    }
    if (this._masterUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserName = this._masterUserName;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._sessionTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutMinutes = this._sessionTimeoutMinutes;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._idp.internalValue = undefined;
      this._masterBackendRole = undefined;
      this._masterUserName = undefined;
      this._rolesKey = undefined;
      this._sessionTimeoutMinutes = undefined;
      this._subjectKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._idp.internalValue = value.idp;
      this._masterBackendRole = value.masterBackendRole;
      this._masterUserName = value.masterUserName;
      this._rolesKey = value.rolesKey;
      this._sessionTimeoutMinutes = value.sessionTimeoutMinutes;
      this._subjectKey = value.subjectKey;
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

  // idp - computed: true, optional: true, required: false
  private _idp = new OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }
  public putIdp(value: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsIdp) {
    this._idp.internalValue = value;
  }
  public resetIdp() {
    this._idp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp.internalValue;
  }

  // master_backend_role - computed: true, optional: true, required: false
  private _masterBackendRole?: string; 
  public get masterBackendRole() {
    return this.getStringAttribute('master_backend_role');
  }
  public set masterBackendRole(value: string) {
    this._masterBackendRole = value;
  }
  public resetMasterBackendRole() {
    this._masterBackendRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterBackendRoleInput() {
    return this._masterBackendRole;
  }

  // master_user_name - computed: true, optional: true, required: false
  private _masterUserName?: string; 
  public get masterUserName() {
    return this.getStringAttribute('master_user_name');
  }
  public set masterUserName(value: string) {
    this._masterUserName = value;
  }
  public resetMasterUserName() {
    this._masterUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserNameInput() {
    return this._masterUserName;
  }

  // roles_key - computed: true, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // session_timeout_minutes - computed: true, optional: true, required: false
  private _sessionTimeoutMinutes?: number; 
  public get sessionTimeoutMinutes() {
    return this.getNumberAttribute('session_timeout_minutes');
  }
  public set sessionTimeoutMinutes(value: number) {
    this._sessionTimeoutMinutes = value;
  }
  public resetSessionTimeoutMinutes() {
    this._sessionTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMinutesInput() {
    return this._sessionTimeoutMinutes;
  }

  // subject_key - computed: true, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface OpensearchserviceDomainAdvancedSecurityOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#anonymous_auth_enabled OpensearchserviceDomain#anonymous_auth_enabled}
  */
  readonly anonymousAuthEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#iam_federation_options OpensearchserviceDomain#iam_federation_options}
  */
  readonly iamFederationOptions?: OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#internal_user_database_enabled OpensearchserviceDomain#internal_user_database_enabled}
  */
  readonly internalUserDatabaseEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#jwt_options OpensearchserviceDomain#jwt_options}
  */
  readonly jwtOptions?: OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#master_user_options OpensearchserviceDomain#master_user_options}
  */
  readonly masterUserOptions?: OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#saml_options OpensearchserviceDomain#saml_options}
  */
  readonly samlOptions?: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions;
}

export function opensearchserviceDomainAdvancedSecurityOptionsToTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    anonymous_auth_enabled: cdktn.booleanToTerraform(struct!.anonymousAuthEnabled),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    iam_federation_options: opensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsToTerraform(struct!.iamFederationOptions),
    internal_user_database_enabled: cdktn.booleanToTerraform(struct!.internalUserDatabaseEnabled),
    jwt_options: opensearchserviceDomainAdvancedSecurityOptionsJwtOptionsToTerraform(struct!.jwtOptions),
    master_user_options: opensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct!.masterUserOptions),
    saml_options: opensearchserviceDomainAdvancedSecurityOptionsSamlOptionsToTerraform(struct!.samlOptions),
  }
}


export function opensearchserviceDomainAdvancedSecurityOptionsToHclTerraform(struct?: OpensearchserviceDomainAdvancedSecurityOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    anonymous_auth_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.anonymousAuthEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iam_federation_options: {
      value: opensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsToHclTerraform(struct!.iamFederationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions",
    },
    internal_user_database_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.internalUserDatabaseEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jwt_options: {
      value: opensearchserviceDomainAdvancedSecurityOptionsJwtOptionsToHclTerraform(struct!.jwtOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions",
    },
    master_user_options: {
      value: opensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsToHclTerraform(struct!.masterUserOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions",
    },
    saml_options: {
      value: opensearchserviceDomainAdvancedSecurityOptionsSamlOptionsToHclTerraform(struct!.samlOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAdvancedSecurityOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAdvancedSecurityOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymousAuthEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousAuthEnabled = this._anonymousAuthEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._iamFederationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamFederationOptions = this._iamFederationOptions?.internalValue;
    }
    if (this._internalUserDatabaseEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUserDatabaseEnabled = this._internalUserDatabaseEnabled;
    }
    if (this._jwtOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtOptions = this._jwtOptions?.internalValue;
    }
    if (this._masterUserOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserOptions = this._masterUserOptions?.internalValue;
    }
    if (this._samlOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlOptions = this._samlOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAdvancedSecurityOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonymousAuthEnabled = undefined;
      this._enabled = undefined;
      this._iamFederationOptions.internalValue = undefined;
      this._internalUserDatabaseEnabled = undefined;
      this._jwtOptions.internalValue = undefined;
      this._masterUserOptions.internalValue = undefined;
      this._samlOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonymousAuthEnabled = value.anonymousAuthEnabled;
      this._enabled = value.enabled;
      this._iamFederationOptions.internalValue = value.iamFederationOptions;
      this._internalUserDatabaseEnabled = value.internalUserDatabaseEnabled;
      this._jwtOptions.internalValue = value.jwtOptions;
      this._masterUserOptions.internalValue = value.masterUserOptions;
      this._samlOptions.internalValue = value.samlOptions;
    }
  }

  // anonymous_auth_disable_date - computed: true, optional: false, required: false
  public get anonymousAuthDisableDate() {
    return this.getStringAttribute('anonymous_auth_disable_date');
  }

  // anonymous_auth_enabled - computed: true, optional: true, required: false
  private _anonymousAuthEnabled?: boolean | cdktn.IResolvable; 
  public get anonymousAuthEnabled() {
    return this.getBooleanAttribute('anonymous_auth_enabled');
  }
  public set anonymousAuthEnabled(value: boolean | cdktn.IResolvable) {
    this._anonymousAuthEnabled = value;
  }
  public resetAnonymousAuthEnabled() {
    this._anonymousAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousAuthEnabledInput() {
    return this._anonymousAuthEnabled;
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

  // iam_federation_options - computed: true, optional: true, required: false
  private _iamFederationOptions = new OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptionsOutputReference(this, "iam_federation_options");
  public get iamFederationOptions() {
    return this._iamFederationOptions;
  }
  public putIamFederationOptions(value: OpensearchserviceDomainAdvancedSecurityOptionsIamFederationOptions) {
    this._iamFederationOptions.internalValue = value;
  }
  public resetIamFederationOptions() {
    this._iamFederationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamFederationOptionsInput() {
    return this._iamFederationOptions.internalValue;
  }

  // internal_user_database_enabled - computed: true, optional: true, required: false
  private _internalUserDatabaseEnabled?: boolean | cdktn.IResolvable; 
  public get internalUserDatabaseEnabled() {
    return this.getBooleanAttribute('internal_user_database_enabled');
  }
  public set internalUserDatabaseEnabled(value: boolean | cdktn.IResolvable) {
    this._internalUserDatabaseEnabled = value;
  }
  public resetInternalUserDatabaseEnabled() {
    this._internalUserDatabaseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUserDatabaseEnabledInput() {
    return this._internalUserDatabaseEnabled;
  }

  // jwt_options - computed: true, optional: true, required: false
  private _jwtOptions = new OpensearchserviceDomainAdvancedSecurityOptionsJwtOptionsOutputReference(this, "jwt_options");
  public get jwtOptions() {
    return this._jwtOptions;
  }
  public putJwtOptions(value: OpensearchserviceDomainAdvancedSecurityOptionsJwtOptions) {
    this._jwtOptions.internalValue = value;
  }
  public resetJwtOptions() {
    this._jwtOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtOptionsInput() {
    return this._jwtOptions.internalValue;
  }

  // master_user_options - computed: true, optional: true, required: false
  private _masterUserOptions = new OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(this, "master_user_options");
  public get masterUserOptions() {
    return this._masterUserOptions;
  }
  public putMasterUserOptions(value: OpensearchserviceDomainAdvancedSecurityOptionsMasterUserOptions) {
    this._masterUserOptions.internalValue = value;
  }
  public resetMasterUserOptions() {
    this._masterUserOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserOptionsInput() {
    return this._masterUserOptions.internalValue;
  }

  // saml_options - computed: true, optional: true, required: false
  private _samlOptions = new OpensearchserviceDomainAdvancedSecurityOptionsSamlOptionsOutputReference(this, "saml_options");
  public get samlOptions() {
    return this._samlOptions;
  }
  public putSamlOptions(value: OpensearchserviceDomainAdvancedSecurityOptionsSamlOptions) {
    this._samlOptions.internalValue = value;
  }
  public resetSamlOptions() {
    this._samlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlOptionsInput() {
    return this._samlOptions.internalValue;
  }
}
export interface OpensearchserviceDomainAimlOptionsS3VectorsEngine {
  /**
  * Whether to enable S3 vectors engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function opensearchserviceDomainAimlOptionsS3VectorsEngineToTerraform(struct?: OpensearchserviceDomainAimlOptionsS3VectorsEngine | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function opensearchserviceDomainAimlOptionsS3VectorsEngineToHclTerraform(struct?: OpensearchserviceDomainAimlOptionsS3VectorsEngine | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAimlOptionsS3VectorsEngine | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAimlOptionsS3VectorsEngine | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration {
  /**
  * Whether to enable serverless vector acceleration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function opensearchserviceDomainAimlOptionsServerlessVectorAccelerationToTerraform(struct?: OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function opensearchserviceDomainAimlOptionsServerlessVectorAccelerationToHclTerraform(struct?: OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface OpensearchserviceDomainAimlOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#s3_vectors_engine OpensearchserviceDomain#s3_vectors_engine}
  */
  readonly s3VectorsEngine?: OpensearchserviceDomainAimlOptionsS3VectorsEngine;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#serverless_vector_acceleration OpensearchserviceDomain#serverless_vector_acceleration}
  */
  readonly serverlessVectorAcceleration?: OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration;
}

export function opensearchserviceDomainAimlOptionsToTerraform(struct?: OpensearchserviceDomainAimlOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_vectors_engine: opensearchserviceDomainAimlOptionsS3VectorsEngineToTerraform(struct!.s3VectorsEngine),
    serverless_vector_acceleration: opensearchserviceDomainAimlOptionsServerlessVectorAccelerationToTerraform(struct!.serverlessVectorAcceleration),
  }
}


export function opensearchserviceDomainAimlOptionsToHclTerraform(struct?: OpensearchserviceDomainAimlOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_vectors_engine: {
      value: opensearchserviceDomainAimlOptionsS3VectorsEngineToHclTerraform(struct!.s3VectorsEngine),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainAimlOptionsS3VectorsEngine",
    },
    serverless_vector_acceleration: {
      value: opensearchserviceDomainAimlOptionsServerlessVectorAccelerationToHclTerraform(struct!.serverlessVectorAcceleration),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAimlOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAimlOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3VectorsEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3VectorsEngine = this._s3VectorsEngine?.internalValue;
    }
    if (this._serverlessVectorAcceleration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessVectorAcceleration = this._serverlessVectorAcceleration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAimlOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3VectorsEngine.internalValue = undefined;
      this._serverlessVectorAcceleration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3VectorsEngine.internalValue = value.s3VectorsEngine;
      this._serverlessVectorAcceleration.internalValue = value.serverlessVectorAcceleration;
    }
  }

  // s3_vectors_engine - computed: true, optional: true, required: false
  private _s3VectorsEngine = new OpensearchserviceDomainAimlOptionsS3VectorsEngineOutputReference(this, "s3_vectors_engine");
  public get s3VectorsEngine() {
    return this._s3VectorsEngine;
  }
  public putS3VectorsEngine(value: OpensearchserviceDomainAimlOptionsS3VectorsEngine) {
    this._s3VectorsEngine.internalValue = value;
  }
  public resetS3VectorsEngine() {
    this._s3VectorsEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3VectorsEngineInput() {
    return this._s3VectorsEngine.internalValue;
  }

  // serverless_vector_acceleration - computed: true, optional: true, required: false
  private _serverlessVectorAcceleration = new OpensearchserviceDomainAimlOptionsServerlessVectorAccelerationOutputReference(this, "serverless_vector_acceleration");
  public get serverlessVectorAcceleration() {
    return this._serverlessVectorAcceleration;
  }
  public putServerlessVectorAcceleration(value: OpensearchserviceDomainAimlOptionsServerlessVectorAcceleration) {
    this._serverlessVectorAcceleration.internalValue = value;
  }
  public resetServerlessVectorAcceleration() {
    this._serverlessVectorAcceleration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessVectorAccelerationInput() {
    return this._serverlessVectorAcceleration.internalValue;
  }
}
export interface OpensearchserviceDomainAutomatedSnapshotPauseOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#end_time OpensearchserviceDomain#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#start_time OpensearchserviceDomain#start_time}
  */
  readonly startTime?: string;
}

export function opensearchserviceDomainAutomatedSnapshotPauseOptionsToTerraform(struct?: OpensearchserviceDomainAutomatedSnapshotPauseOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    end_time: cdktn.stringToTerraform(struct!.endTime),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function opensearchserviceDomainAutomatedSnapshotPauseOptionsToHclTerraform(struct?: OpensearchserviceDomainAutomatedSnapshotPauseOptions | cdktn.IResolvable): any {
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
    end_time: {
      value: cdktn.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainAutomatedSnapshotPauseOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainAutomatedSnapshotPauseOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
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

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface OpensearchserviceDomainClusterConfigColdStorageOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function opensearchserviceDomainClusterConfigColdStorageOptionsToTerraform(struct?: OpensearchserviceDomainClusterConfigColdStorageOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function opensearchserviceDomainClusterConfigColdStorageOptionsToHclTerraform(struct?: OpensearchserviceDomainClusterConfigColdStorageOptions | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainClusterConfigColdStorageOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainClusterConfigColdStorageOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#count OpensearchserviceDomain#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#type OpensearchserviceDomain#type}
  */
  readonly type?: string;
}

export function opensearchserviceDomainClusterConfigNodeOptionsNodeConfigToTerraform(struct?: OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function opensearchserviceDomainClusterConfigNodeOptionsNodeConfigToHclTerraform(struct?: OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._enabled = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._enabled = value.enabled;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface OpensearchserviceDomainClusterConfigNodeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#node_config OpensearchserviceDomain#node_config}
  */
  readonly nodeConfig?: OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#node_type OpensearchserviceDomain#node_type}
  */
  readonly nodeType?: string;
}

export function opensearchserviceDomainClusterConfigNodeOptionsToTerraform(struct?: OpensearchserviceDomainClusterConfigNodeOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_config: opensearchserviceDomainClusterConfigNodeOptionsNodeConfigToTerraform(struct!.nodeConfig),
    node_type: cdktn.stringToTerraform(struct!.nodeType),
  }
}


export function opensearchserviceDomainClusterConfigNodeOptionsToHclTerraform(struct?: OpensearchserviceDomainClusterConfigNodeOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_config: {
      value: opensearchserviceDomainClusterConfigNodeOptionsNodeConfigToHclTerraform(struct!.nodeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig",
    },
    node_type: {
      value: cdktn.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainClusterConfigNodeOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchserviceDomainClusterConfigNodeOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainClusterConfigNodeOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeConfig.internalValue = undefined;
      this._nodeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeConfig.internalValue = value.nodeConfig;
      this._nodeType = value.nodeType;
    }
  }

  // node_config - computed: true, optional: true, required: false
  private _nodeConfig = new OpensearchserviceDomainClusterConfigNodeOptionsNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: OpensearchserviceDomainClusterConfigNodeOptionsNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }
}

export class OpensearchserviceDomainClusterConfigNodeOptionsList extends cdktn.ComplexList {
  public internalValue? : OpensearchserviceDomainClusterConfigNodeOptions[] | cdktn.IResolvable

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
  public get(index: number): OpensearchserviceDomainClusterConfigNodeOptionsOutputReference {
    return new OpensearchserviceDomainClusterConfigNodeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchserviceDomainClusterConfigZoneAwarenessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#availability_zone_count OpensearchserviceDomain#availability_zone_count}
  */
  readonly availabilityZoneCount?: number;
}

export function opensearchserviceDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: OpensearchserviceDomainClusterConfigZoneAwarenessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone_count: cdktn.numberToTerraform(struct!.availabilityZoneCount),
  }
}


export function opensearchserviceDomainClusterConfigZoneAwarenessConfigToHclTerraform(struct?: OpensearchserviceDomainClusterConfigZoneAwarenessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone_count: {
      value: cdktn.numberToHclTerraform(struct!.availabilityZoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainClusterConfigZoneAwarenessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneCount = this._availabilityZoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainClusterConfigZoneAwarenessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneCount = value.availabilityZoneCount;
    }
  }

  // availability_zone_count - computed: true, optional: true, required: false
  private _availabilityZoneCount?: number; 
  public get availabilityZoneCount() {
    return this.getNumberAttribute('availability_zone_count');
  }
  public set availabilityZoneCount(value: number) {
    this._availabilityZoneCount = value;
  }
  public resetAvailabilityZoneCount() {
    this._availabilityZoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneCountInput() {
    return this._availabilityZoneCount;
  }
}
export interface OpensearchserviceDomainClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#cold_storage_options OpensearchserviceDomain#cold_storage_options}
  */
  readonly coldStorageOptions?: OpensearchserviceDomainClusterConfigColdStorageOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#dedicated_master_count OpensearchserviceDomain#dedicated_master_count}
  */
  readonly dedicatedMasterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#dedicated_master_enabled OpensearchserviceDomain#dedicated_master_enabled}
  */
  readonly dedicatedMasterEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#dedicated_master_type OpensearchserviceDomain#dedicated_master_type}
  */
  readonly dedicatedMasterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#instance_count OpensearchserviceDomain#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#instance_type OpensearchserviceDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#multi_az_with_standby_enabled OpensearchserviceDomain#multi_az_with_standby_enabled}
  */
  readonly multiAzWithStandbyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#node_options OpensearchserviceDomain#node_options}
  */
  readonly nodeOptions?: OpensearchserviceDomainClusterConfigNodeOptions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#warm_count OpensearchserviceDomain#warm_count}
  */
  readonly warmCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#warm_enabled OpensearchserviceDomain#warm_enabled}
  */
  readonly warmEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#warm_type OpensearchserviceDomain#warm_type}
  */
  readonly warmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#zone_awareness_config OpensearchserviceDomain#zone_awareness_config}
  */
  readonly zoneAwarenessConfig?: OpensearchserviceDomainClusterConfigZoneAwarenessConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#zone_awareness_enabled OpensearchserviceDomain#zone_awareness_enabled}
  */
  readonly zoneAwarenessEnabled?: boolean | cdktn.IResolvable;
}

export function opensearchserviceDomainClusterConfigToTerraform(struct?: OpensearchserviceDomainClusterConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cold_storage_options: opensearchserviceDomainClusterConfigColdStorageOptionsToTerraform(struct!.coldStorageOptions),
    dedicated_master_count: cdktn.numberToTerraform(struct!.dedicatedMasterCount),
    dedicated_master_enabled: cdktn.booleanToTerraform(struct!.dedicatedMasterEnabled),
    dedicated_master_type: cdktn.stringToTerraform(struct!.dedicatedMasterType),
    instance_count: cdktn.numberToTerraform(struct!.instanceCount),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    multi_az_with_standby_enabled: cdktn.booleanToTerraform(struct!.multiAzWithStandbyEnabled),
    node_options: cdktn.listMapper(opensearchserviceDomainClusterConfigNodeOptionsToTerraform, false)(struct!.nodeOptions),
    warm_count: cdktn.numberToTerraform(struct!.warmCount),
    warm_enabled: cdktn.booleanToTerraform(struct!.warmEnabled),
    warm_type: cdktn.stringToTerraform(struct!.warmType),
    zone_awareness_config: opensearchserviceDomainClusterConfigZoneAwarenessConfigToTerraform(struct!.zoneAwarenessConfig),
    zone_awareness_enabled: cdktn.booleanToTerraform(struct!.zoneAwarenessEnabled),
  }
}


export function opensearchserviceDomainClusterConfigToHclTerraform(struct?: OpensearchserviceDomainClusterConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cold_storage_options: {
      value: opensearchserviceDomainClusterConfigColdStorageOptionsToHclTerraform(struct!.coldStorageOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainClusterConfigColdStorageOptions",
    },
    dedicated_master_count: {
      value: cdktn.numberToHclTerraform(struct!.dedicatedMasterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dedicated_master_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.dedicatedMasterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dedicated_master_type: {
      value: cdktn.stringToHclTerraform(struct!.dedicatedMasterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktn.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_az_with_standby_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.multiAzWithStandbyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_options: {
      value: cdktn.listMapperHcl(opensearchserviceDomainClusterConfigNodeOptionsToHclTerraform, false)(struct!.nodeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchserviceDomainClusterConfigNodeOptionsList",
    },
    warm_count: {
      value: cdktn.numberToHclTerraform(struct!.warmCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warm_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.warmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warm_type: {
      value: cdktn.stringToHclTerraform(struct!.warmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_awareness_config: {
      value: opensearchserviceDomainClusterConfigZoneAwarenessConfigToHclTerraform(struct!.zoneAwarenessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainClusterConfigZoneAwarenessConfig",
    },
    zone_awareness_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.zoneAwarenessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainClusterConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coldStorageOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coldStorageOptions = this._coldStorageOptions?.internalValue;
    }
    if (this._dedicatedMasterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterCount = this._dedicatedMasterCount;
    }
    if (this._dedicatedMasterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterEnabled = this._dedicatedMasterEnabled;
    }
    if (this._dedicatedMasterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterType = this._dedicatedMasterType;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._multiAzWithStandbyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAzWithStandbyEnabled = this._multiAzWithStandbyEnabled;
    }
    if (this._nodeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeOptions = this._nodeOptions?.internalValue;
    }
    if (this._warmCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmCount = this._warmCount;
    }
    if (this._warmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmEnabled = this._warmEnabled;
    }
    if (this._warmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmType = this._warmType;
    }
    if (this._zoneAwarenessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAwarenessConfig = this._zoneAwarenessConfig?.internalValue;
    }
    if (this._zoneAwarenessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAwarenessEnabled = this._zoneAwarenessEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainClusterConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coldStorageOptions.internalValue = undefined;
      this._dedicatedMasterCount = undefined;
      this._dedicatedMasterEnabled = undefined;
      this._dedicatedMasterType = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._multiAzWithStandbyEnabled = undefined;
      this._nodeOptions.internalValue = undefined;
      this._warmCount = undefined;
      this._warmEnabled = undefined;
      this._warmType = undefined;
      this._zoneAwarenessConfig.internalValue = undefined;
      this._zoneAwarenessEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coldStorageOptions.internalValue = value.coldStorageOptions;
      this._dedicatedMasterCount = value.dedicatedMasterCount;
      this._dedicatedMasterEnabled = value.dedicatedMasterEnabled;
      this._dedicatedMasterType = value.dedicatedMasterType;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._multiAzWithStandbyEnabled = value.multiAzWithStandbyEnabled;
      this._nodeOptions.internalValue = value.nodeOptions;
      this._warmCount = value.warmCount;
      this._warmEnabled = value.warmEnabled;
      this._warmType = value.warmType;
      this._zoneAwarenessConfig.internalValue = value.zoneAwarenessConfig;
      this._zoneAwarenessEnabled = value.zoneAwarenessEnabled;
    }
  }

  // cold_storage_options - computed: true, optional: true, required: false
  private _coldStorageOptions = new OpensearchserviceDomainClusterConfigColdStorageOptionsOutputReference(this, "cold_storage_options");
  public get coldStorageOptions() {
    return this._coldStorageOptions;
  }
  public putColdStorageOptions(value: OpensearchserviceDomainClusterConfigColdStorageOptions) {
    this._coldStorageOptions.internalValue = value;
  }
  public resetColdStorageOptions() {
    this._coldStorageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageOptionsInput() {
    return this._coldStorageOptions.internalValue;
  }

  // dedicated_master_count - computed: true, optional: true, required: false
  private _dedicatedMasterCount?: number; 
  public get dedicatedMasterCount() {
    return this.getNumberAttribute('dedicated_master_count');
  }
  public set dedicatedMasterCount(value: number) {
    this._dedicatedMasterCount = value;
  }
  public resetDedicatedMasterCount() {
    this._dedicatedMasterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterCountInput() {
    return this._dedicatedMasterCount;
  }

  // dedicated_master_enabled - computed: true, optional: true, required: false
  private _dedicatedMasterEnabled?: boolean | cdktn.IResolvable; 
  public get dedicatedMasterEnabled() {
    return this.getBooleanAttribute('dedicated_master_enabled');
  }
  public set dedicatedMasterEnabled(value: boolean | cdktn.IResolvable) {
    this._dedicatedMasterEnabled = value;
  }
  public resetDedicatedMasterEnabled() {
    this._dedicatedMasterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterEnabledInput() {
    return this._dedicatedMasterEnabled;
  }

  // dedicated_master_type - computed: true, optional: true, required: false
  private _dedicatedMasterType?: string; 
  public get dedicatedMasterType() {
    return this.getStringAttribute('dedicated_master_type');
  }
  public set dedicatedMasterType(value: string) {
    this._dedicatedMasterType = value;
  }
  public resetDedicatedMasterType() {
    this._dedicatedMasterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterTypeInput() {
    return this._dedicatedMasterType;
  }

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // multi_az_with_standby_enabled - computed: true, optional: true, required: false
  private _multiAzWithStandbyEnabled?: boolean | cdktn.IResolvable; 
  public get multiAzWithStandbyEnabled() {
    return this.getBooleanAttribute('multi_az_with_standby_enabled');
  }
  public set multiAzWithStandbyEnabled(value: boolean | cdktn.IResolvable) {
    this._multiAzWithStandbyEnabled = value;
  }
  public resetMultiAzWithStandbyEnabled() {
    this._multiAzWithStandbyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzWithStandbyEnabledInput() {
    return this._multiAzWithStandbyEnabled;
  }

  // node_options - computed: true, optional: true, required: false
  private _nodeOptions = new OpensearchserviceDomainClusterConfigNodeOptionsList(this, "node_options", false);
  public get nodeOptions() {
    return this._nodeOptions;
  }
  public putNodeOptions(value: OpensearchserviceDomainClusterConfigNodeOptions[] | cdktn.IResolvable) {
    this._nodeOptions.internalValue = value;
  }
  public resetNodeOptions() {
    this._nodeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOptionsInput() {
    return this._nodeOptions.internalValue;
  }

  // warm_count - computed: true, optional: true, required: false
  private _warmCount?: number; 
  public get warmCount() {
    return this.getNumberAttribute('warm_count');
  }
  public set warmCount(value: number) {
    this._warmCount = value;
  }
  public resetWarmCount() {
    this._warmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmCountInput() {
    return this._warmCount;
  }

  // warm_enabled - computed: true, optional: true, required: false
  private _warmEnabled?: boolean | cdktn.IResolvable; 
  public get warmEnabled() {
    return this.getBooleanAttribute('warm_enabled');
  }
  public set warmEnabled(value: boolean | cdktn.IResolvable) {
    this._warmEnabled = value;
  }
  public resetWarmEnabled() {
    this._warmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmEnabledInput() {
    return this._warmEnabled;
  }

  // warm_type - computed: true, optional: true, required: false
  private _warmType?: string; 
  public get warmType() {
    return this.getStringAttribute('warm_type');
  }
  public set warmType(value: string) {
    this._warmType = value;
  }
  public resetWarmType() {
    this._warmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmTypeInput() {
    return this._warmType;
  }

  // zone_awareness_config - computed: true, optional: true, required: false
  private _zoneAwarenessConfig = new OpensearchserviceDomainClusterConfigZoneAwarenessConfigOutputReference(this, "zone_awareness_config");
  public get zoneAwarenessConfig() {
    return this._zoneAwarenessConfig;
  }
  public putZoneAwarenessConfig(value: OpensearchserviceDomainClusterConfigZoneAwarenessConfig) {
    this._zoneAwarenessConfig.internalValue = value;
  }
  public resetZoneAwarenessConfig() {
    this._zoneAwarenessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAwarenessConfigInput() {
    return this._zoneAwarenessConfig.internalValue;
  }

  // zone_awareness_enabled - computed: true, optional: true, required: false
  private _zoneAwarenessEnabled?: boolean | cdktn.IResolvable; 
  public get zoneAwarenessEnabled() {
    return this.getBooleanAttribute('zone_awareness_enabled');
  }
  public set zoneAwarenessEnabled(value: boolean | cdktn.IResolvable) {
    this._zoneAwarenessEnabled = value;
  }
  public resetZoneAwarenessEnabled() {
    this._zoneAwarenessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAwarenessEnabledInput() {
    return this._zoneAwarenessEnabled;
  }
}
export interface OpensearchserviceDomainCognitoOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#identity_pool_id OpensearchserviceDomain#identity_pool_id}
  */
  readonly identityPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#role_arn OpensearchserviceDomain#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#user_pool_id OpensearchserviceDomain#user_pool_id}
  */
  readonly userPoolId?: string;
}

export function opensearchserviceDomainCognitoOptionsToTerraform(struct?: OpensearchserviceDomainCognitoOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    identity_pool_id: cdktn.stringToTerraform(struct!.identityPoolId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    user_pool_id: cdktn.stringToTerraform(struct!.userPoolId),
  }
}


export function opensearchserviceDomainCognitoOptionsToHclTerraform(struct?: OpensearchserviceDomainCognitoOptions | cdktn.IResolvable): any {
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
    identity_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.identityPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.userPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainCognitoOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainCognitoOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._identityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityPoolId = this._identityPoolId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._userPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainCognitoOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._identityPoolId = undefined;
      this._roleArn = undefined;
      this._userPoolId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._identityPoolId = value.identityPoolId;
      this._roleArn = value.roleArn;
      this._userPoolId = value.userPoolId;
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

  // identity_pool_id - computed: true, optional: true, required: false
  private _identityPoolId?: string; 
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  public resetIdentityPoolId() {
    this._identityPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // user_pool_id - computed: true, optional: true, required: false
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  public resetUserPoolId() {
    this._userPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }
}
export interface OpensearchserviceDomainDeploymentStrategyOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#deployment_strategy OpensearchserviceDomain#deployment_strategy}
  */
  readonly deploymentStrategy?: string;
}

export function opensearchserviceDomainDeploymentStrategyOptionsToTerraform(struct?: OpensearchserviceDomainDeploymentStrategyOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deployment_strategy: cdktn.stringToTerraform(struct!.deploymentStrategy),
  }
}


export function opensearchserviceDomainDeploymentStrategyOptionsToHclTerraform(struct?: OpensearchserviceDomainDeploymentStrategyOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deployment_strategy: {
      value: cdktn.stringToHclTerraform(struct!.deploymentStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainDeploymentStrategyOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainDeploymentStrategyOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentStrategy = this._deploymentStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainDeploymentStrategyOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentStrategy = value.deploymentStrategy;
    }
  }

  // deployment_strategy - computed: true, optional: true, required: false
  private _deploymentStrategy?: string; 
  public get deploymentStrategy() {
    return this.getStringAttribute('deployment_strategy');
  }
  public set deploymentStrategy(value: string) {
    this._deploymentStrategy = value;
  }
  public resetDeploymentStrategy() {
    this._deploymentStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStrategyInput() {
    return this._deploymentStrategy;
  }
}
export interface OpensearchserviceDomainDomainEndpointOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#custom_endpoint OpensearchserviceDomain#custom_endpoint}
  */
  readonly customEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#custom_endpoint_certificate_arn OpensearchserviceDomain#custom_endpoint_certificate_arn}
  */
  readonly customEndpointCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#custom_endpoint_enabled OpensearchserviceDomain#custom_endpoint_enabled}
  */
  readonly customEndpointEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enforce_https OpensearchserviceDomain#enforce_https}
  */
  readonly enforceHttps?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#tls_security_policy OpensearchserviceDomain#tls_security_policy}
  */
  readonly tlsSecurityPolicy?: string;
}

export function opensearchserviceDomainDomainEndpointOptionsToTerraform(struct?: OpensearchserviceDomainDomainEndpointOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_endpoint: cdktn.stringToTerraform(struct!.customEndpoint),
    custom_endpoint_certificate_arn: cdktn.stringToTerraform(struct!.customEndpointCertificateArn),
    custom_endpoint_enabled: cdktn.booleanToTerraform(struct!.customEndpointEnabled),
    enforce_https: cdktn.booleanToTerraform(struct!.enforceHttps),
    tls_security_policy: cdktn.stringToTerraform(struct!.tlsSecurityPolicy),
  }
}


export function opensearchserviceDomainDomainEndpointOptionsToHclTerraform(struct?: OpensearchserviceDomainDomainEndpointOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.customEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_endpoint_certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.customEndpointCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_endpoint_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.customEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_https: {
      value: cdktn.booleanToHclTerraform(struct!.enforceHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_security_policy: {
      value: cdktn.stringToHclTerraform(struct!.tlsSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainDomainEndpointOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainDomainEndpointOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpoint = this._customEndpoint;
    }
    if (this._customEndpointCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpointCertificateArn = this._customEndpointCertificateArn;
    }
    if (this._customEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpointEnabled = this._customEndpointEnabled;
    }
    if (this._enforceHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceHttps = this._enforceHttps;
    }
    if (this._tlsSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecurityPolicy = this._tlsSecurityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainDomainEndpointOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEndpoint = undefined;
      this._customEndpointCertificateArn = undefined;
      this._customEndpointEnabled = undefined;
      this._enforceHttps = undefined;
      this._tlsSecurityPolicy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEndpoint = value.customEndpoint;
      this._customEndpointCertificateArn = value.customEndpointCertificateArn;
      this._customEndpointEnabled = value.customEndpointEnabled;
      this._enforceHttps = value.enforceHttps;
      this._tlsSecurityPolicy = value.tlsSecurityPolicy;
    }
  }

  // custom_endpoint - computed: true, optional: true, required: false
  private _customEndpoint?: string; 
  public get customEndpoint() {
    return this.getStringAttribute('custom_endpoint');
  }
  public set customEndpoint(value: string) {
    this._customEndpoint = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint;
  }

  // custom_endpoint_certificate_arn - computed: true, optional: true, required: false
  private _customEndpointCertificateArn?: string; 
  public get customEndpointCertificateArn() {
    return this.getStringAttribute('custom_endpoint_certificate_arn');
  }
  public set customEndpointCertificateArn(value: string) {
    this._customEndpointCertificateArn = value;
  }
  public resetCustomEndpointCertificateArn() {
    this._customEndpointCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointCertificateArnInput() {
    return this._customEndpointCertificateArn;
  }

  // custom_endpoint_enabled - computed: true, optional: true, required: false
  private _customEndpointEnabled?: boolean | cdktn.IResolvable; 
  public get customEndpointEnabled() {
    return this.getBooleanAttribute('custom_endpoint_enabled');
  }
  public set customEndpointEnabled(value: boolean | cdktn.IResolvable) {
    this._customEndpointEnabled = value;
  }
  public resetCustomEndpointEnabled() {
    this._customEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointEnabledInput() {
    return this._customEndpointEnabled;
  }

  // enforce_https - computed: true, optional: true, required: false
  private _enforceHttps?: boolean | cdktn.IResolvable; 
  public get enforceHttps() {
    return this.getBooleanAttribute('enforce_https');
  }
  public set enforceHttps(value: boolean | cdktn.IResolvable) {
    this._enforceHttps = value;
  }
  public resetEnforceHttps() {
    this._enforceHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceHttpsInput() {
    return this._enforceHttps;
  }

  // tls_security_policy - computed: true, optional: true, required: false
  private _tlsSecurityPolicy?: string; 
  public get tlsSecurityPolicy() {
    return this.getStringAttribute('tls_security_policy');
  }
  public set tlsSecurityPolicy(value: string) {
    this._tlsSecurityPolicy = value;
  }
  public resetTlsSecurityPolicy() {
    this._tlsSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecurityPolicyInput() {
    return this._tlsSecurityPolicy;
  }
}
export interface OpensearchserviceDomainEbsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#ebs_enabled OpensearchserviceDomain#ebs_enabled}
  */
  readonly ebsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#iops OpensearchserviceDomain#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#throughput OpensearchserviceDomain#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#volume_size OpensearchserviceDomain#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#volume_type OpensearchserviceDomain#volume_type}
  */
  readonly volumeType?: string;
}

export function opensearchserviceDomainEbsOptionsToTerraform(struct?: OpensearchserviceDomainEbsOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ebs_enabled: cdktn.booleanToTerraform(struct!.ebsEnabled),
    iops: cdktn.numberToTerraform(struct!.iops),
    throughput: cdktn.numberToTerraform(struct!.throughput),
    volume_size: cdktn.numberToTerraform(struct!.volumeSize),
    volume_type: cdktn.stringToTerraform(struct!.volumeType),
  }
}


export function opensearchserviceDomainEbsOptionsToHclTerraform(struct?: OpensearchserviceDomainEbsOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ebs_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.ebsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput: {
      value: cdktn.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktn.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktn.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainEbsOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainEbsOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsEnabled = this._ebsEnabled;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainEbsOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebsEnabled = undefined;
      this._iops = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebsEnabled = value.ebsEnabled;
      this._iops = value.iops;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // ebs_enabled - computed: true, optional: true, required: false
  private _ebsEnabled?: boolean | cdktn.IResolvable; 
  public get ebsEnabled() {
    return this.getBooleanAttribute('ebs_enabled');
  }
  public set ebsEnabled(value: boolean | cdktn.IResolvable) {
    this._ebsEnabled = value;
  }
  public resetEbsEnabled() {
    this._ebsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEnabledInput() {
    return this._ebsEnabled;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface OpensearchserviceDomainEncryptionAtRestOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#kms_key_id OpensearchserviceDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function opensearchserviceDomainEncryptionAtRestOptionsToTerraform(struct?: OpensearchserviceDomainEncryptionAtRestOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function opensearchserviceDomainEncryptionAtRestOptionsToHclTerraform(struct?: OpensearchserviceDomainEncryptionAtRestOptions | cdktn.IResolvable): any {
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
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainEncryptionAtRestOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainEncryptionAtRestOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainEncryptionAtRestOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._kmsKeyId = value.kmsKeyId;
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface OpensearchserviceDomainIdentityCenterOptions {
  /**
  * Whether Identity Center is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled_api_access OpensearchserviceDomain#enabled_api_access}
  */
  readonly enabledApiAccess?: boolean | cdktn.IResolvable;
  /**
  * The ARN of the Identity Center instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#identity_center_instance_arn OpensearchserviceDomain#identity_center_instance_arn}
  */
  readonly identityCenterInstanceArn?: string;
  /**
  * The roles key for Identity Center options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#roles_key OpensearchserviceDomain#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * The subject key for Identity Center options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#subject_key OpensearchserviceDomain#subject_key}
  */
  readonly subjectKey?: string;
}

export function opensearchserviceDomainIdentityCenterOptionsToTerraform(struct?: OpensearchserviceDomainIdentityCenterOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled_api_access: cdktn.booleanToTerraform(struct!.enabledApiAccess),
    identity_center_instance_arn: cdktn.stringToTerraform(struct!.identityCenterInstanceArn),
    roles_key: cdktn.stringToTerraform(struct!.rolesKey),
    subject_key: cdktn.stringToTerraform(struct!.subjectKey),
  }
}


export function opensearchserviceDomainIdentityCenterOptionsToHclTerraform(struct?: OpensearchserviceDomainIdentityCenterOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled_api_access: {
      value: cdktn.booleanToHclTerraform(struct!.enabledApiAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_center_instance_arn: {
      value: cdktn.stringToHclTerraform(struct!.identityCenterInstanceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktn.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktn.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainIdentityCenterOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainIdentityCenterOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledApiAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledApiAccess = this._enabledApiAccess;
    }
    if (this._identityCenterInstanceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterInstanceArn = this._identityCenterInstanceArn;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainIdentityCenterOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledApiAccess = undefined;
      this._identityCenterInstanceArn = undefined;
      this._rolesKey = undefined;
      this._subjectKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledApiAccess = value.enabledApiAccess;
      this._identityCenterInstanceArn = value.identityCenterInstanceArn;
      this._rolesKey = value.rolesKey;
      this._subjectKey = value.subjectKey;
    }
  }

  // enabled_api_access - computed: true, optional: true, required: false
  private _enabledApiAccess?: boolean | cdktn.IResolvable; 
  public get enabledApiAccess() {
    return this.getBooleanAttribute('enabled_api_access');
  }
  public set enabledApiAccess(value: boolean | cdktn.IResolvable) {
    this._enabledApiAccess = value;
  }
  public resetEnabledApiAccess() {
    this._enabledApiAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledApiAccessInput() {
    return this._enabledApiAccess;
  }

  // identity_center_application_arn - computed: true, optional: false, required: false
  public get identityCenterApplicationArn() {
    return this.getStringAttribute('identity_center_application_arn');
  }

  // identity_center_instance_arn - computed: true, optional: true, required: false
  private _identityCenterInstanceArn?: string; 
  public get identityCenterInstanceArn() {
    return this.getStringAttribute('identity_center_instance_arn');
  }
  public set identityCenterInstanceArn(value: string) {
    this._identityCenterInstanceArn = value;
  }
  public resetIdentityCenterInstanceArn() {
    this._identityCenterInstanceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterInstanceArnInput() {
    return this._identityCenterInstanceArn;
  }

  // identity_store_id - computed: true, optional: false, required: false
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }

  // roles_key - computed: true, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // subject_key - computed: true, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface OpensearchserviceDomainLogPublishingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#cloudwatch_logs_log_group_arn OpensearchserviceDomain#cloudwatch_logs_log_group_arn}
  */
  readonly cloudwatchLogsLogGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function opensearchserviceDomainLogPublishingOptionsToTerraform(struct?: OpensearchserviceDomainLogPublishingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_logs_log_group_arn: cdktn.stringToTerraform(struct!.cloudwatchLogsLogGroupArn),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function opensearchserviceDomainLogPublishingOptionsToHclTerraform(struct?: OpensearchserviceDomainLogPublishingOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_logs_log_group_arn: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogsLogGroupArn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainLogPublishingOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OpensearchserviceDomainLogPublishingOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogsLogGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsLogGroupArn = this._cloudwatchLogsLogGroupArn;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainLogPublishingOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogsLogGroupArn = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogsLogGroupArn = value.cloudwatchLogsLogGroupArn;
      this._enabled = value.enabled;
    }
  }

  // cloudwatch_logs_log_group_arn - computed: true, optional: true, required: false
  private _cloudwatchLogsLogGroupArn?: string; 
  public get cloudwatchLogsLogGroupArn() {
    return this.getStringAttribute('cloudwatch_logs_log_group_arn');
  }
  public set cloudwatchLogsLogGroupArn(value: string) {
    this._cloudwatchLogsLogGroupArn = value;
  }
  public resetCloudwatchLogsLogGroupArn() {
    this._cloudwatchLogsLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsLogGroupArnInput() {
    return this._cloudwatchLogsLogGroupArn;
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
}

export class OpensearchserviceDomainLogPublishingOptionsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: OpensearchserviceDomainLogPublishingOptions } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OpensearchserviceDomainLogPublishingOptionsOutputReference {
    return new OpensearchserviceDomainLogPublishingOptionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OpensearchserviceDomainNodeToNodeEncryptionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function opensearchserviceDomainNodeToNodeEncryptionOptionsToTerraform(struct?: OpensearchserviceDomainNodeToNodeEncryptionOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function opensearchserviceDomainNodeToNodeEncryptionOptionsToHclTerraform(struct?: OpensearchserviceDomainNodeToNodeEncryptionOptions | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainNodeToNodeEncryptionOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainNodeToNodeEncryptionOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#hours OpensearchserviceDomain#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#minutes OpensearchserviceDomain#minutes}
  */
  readonly minutes?: number;
}

export function opensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToTerraform(struct?: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
  }
}


export function opensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToHclTerraform(struct?: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#window_start_time OpensearchserviceDomain#window_start_time}
  */
  readonly windowStartTime?: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime;
}

export function opensearchserviceDomainOffPeakWindowOptionsOffPeakWindowToTerraform(struct?: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    window_start_time: opensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function opensearchserviceDomainOffPeakWindowOptionsOffPeakWindowToHclTerraform(struct?: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    window_start_time: {
      value: opensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowStartTime = this._windowStartTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._windowStartTime.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._windowStartTime.internalValue = value.windowStartTime;
    }
  }

  // window_start_time - computed: true, optional: true, required: false
  private _windowStartTime = new OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime) {
    this._windowStartTime.internalValue = value;
  }
  public resetWindowStartTime() {
    this._windowStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowStartTimeInput() {
    return this._windowStartTime.internalValue;
  }
}
export interface OpensearchserviceDomainOffPeakWindowOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#enabled OpensearchserviceDomain#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#off_peak_window OpensearchserviceDomain#off_peak_window}
  */
  readonly offPeakWindow?: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow;
}

export function opensearchserviceDomainOffPeakWindowOptionsToTerraform(struct?: OpensearchserviceDomainOffPeakWindowOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    off_peak_window: opensearchserviceDomainOffPeakWindowOptionsOffPeakWindowToTerraform(struct!.offPeakWindow),
  }
}


export function opensearchserviceDomainOffPeakWindowOptionsToHclTerraform(struct?: OpensearchserviceDomainOffPeakWindowOptions | cdktn.IResolvable): any {
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
    off_peak_window: {
      value: opensearchserviceDomainOffPeakWindowOptionsOffPeakWindowToHclTerraform(struct!.offPeakWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainOffPeakWindowOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainOffPeakWindowOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._offPeakWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakWindow = this._offPeakWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainOffPeakWindowOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._offPeakWindow.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._offPeakWindow.internalValue = value.offPeakWindow;
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

  // off_peak_window - computed: true, optional: true, required: false
  private _offPeakWindow = new OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindowOutputReference(this, "off_peak_window");
  public get offPeakWindow() {
    return this._offPeakWindow;
  }
  public putOffPeakWindow(value: OpensearchserviceDomainOffPeakWindowOptionsOffPeakWindow) {
    this._offPeakWindow.internalValue = value;
  }
  public resetOffPeakWindow() {
    this._offPeakWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakWindowInput() {
    return this._offPeakWindow.internalValue;
  }
}
export interface OpensearchserviceDomainServiceSoftwareOptions {
}

export function opensearchserviceDomainServiceSoftwareOptionsToTerraform(struct?: OpensearchserviceDomainServiceSoftwareOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function opensearchserviceDomainServiceSoftwareOptionsToHclTerraform(struct?: OpensearchserviceDomainServiceSoftwareOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OpensearchserviceDomainServiceSoftwareOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainServiceSoftwareOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainServiceSoftwareOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated_update_date - computed: true, optional: false, required: false
  public get automatedUpdateDate() {
    return this.getStringAttribute('automated_update_date');
  }

  // cancellable - computed: true, optional: false, required: false
  public get cancellable() {
    return this.getBooleanAttribute('cancellable');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // new_version - computed: true, optional: false, required: false
  public get newVersion() {
    return this.getStringAttribute('new_version');
  }

  // optional_deployment - computed: true, optional: false, required: false
  public get optionalDeployment() {
    return this.getBooleanAttribute('optional_deployment');
  }

  // update_available - computed: true, optional: false, required: false
  public get updateAvailable() {
    return this.getBooleanAttribute('update_available');
  }

  // update_status - computed: true, optional: false, required: false
  public get updateStatus() {
    return this.getStringAttribute('update_status');
  }
}
export interface OpensearchserviceDomainSnapshotOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#automated_snapshot_start_hour OpensearchserviceDomain#automated_snapshot_start_hour}
  */
  readonly automatedSnapshotStartHour?: number;
}

export function opensearchserviceDomainSnapshotOptionsToTerraform(struct?: OpensearchserviceDomainSnapshotOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    automated_snapshot_start_hour: cdktn.numberToTerraform(struct!.automatedSnapshotStartHour),
  }
}


export function opensearchserviceDomainSnapshotOptionsToHclTerraform(struct?: OpensearchserviceDomainSnapshotOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    automated_snapshot_start_hour: {
      value: cdktn.numberToHclTerraform(struct!.automatedSnapshotStartHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainSnapshotOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainSnapshotOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automatedSnapshotStartHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedSnapshotStartHour = this._automatedSnapshotStartHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainSnapshotOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automatedSnapshotStartHour = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automatedSnapshotStartHour = value.automatedSnapshotStartHour;
    }
  }

  // automated_snapshot_start_hour - computed: true, optional: true, required: false
  private _automatedSnapshotStartHour?: number; 
  public get automatedSnapshotStartHour() {
    return this.getNumberAttribute('automated_snapshot_start_hour');
  }
  public set automatedSnapshotStartHour(value: number) {
    this._automatedSnapshotStartHour = value;
  }
  public resetAutomatedSnapshotStartHour() {
    this._automatedSnapshotStartHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedSnapshotStartHourInput() {
    return this._automatedSnapshotStartHour;
  }
}
export interface OpensearchserviceDomainSoftwareUpdateOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#auto_software_update_enabled OpensearchserviceDomain#auto_software_update_enabled}
  */
  readonly autoSoftwareUpdateEnabled?: boolean | cdktn.IResolvable;
}

export function opensearchserviceDomainSoftwareUpdateOptionsToTerraform(struct?: OpensearchserviceDomainSoftwareUpdateOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_software_update_enabled: cdktn.booleanToTerraform(struct!.autoSoftwareUpdateEnabled),
  }
}


export function opensearchserviceDomainSoftwareUpdateOptionsToHclTerraform(struct?: OpensearchserviceDomainSoftwareUpdateOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_software_update_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoSoftwareUpdateEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainSoftwareUpdateOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainSoftwareUpdateOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSoftwareUpdateEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSoftwareUpdateEnabled = this._autoSoftwareUpdateEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainSoftwareUpdateOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSoftwareUpdateEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSoftwareUpdateEnabled = value.autoSoftwareUpdateEnabled;
    }
  }

  // auto_software_update_enabled - computed: true, optional: true, required: false
  private _autoSoftwareUpdateEnabled?: boolean | cdktn.IResolvable; 
  public get autoSoftwareUpdateEnabled() {
    return this.getBooleanAttribute('auto_software_update_enabled');
  }
  public set autoSoftwareUpdateEnabled(value: boolean | cdktn.IResolvable) {
    this._autoSoftwareUpdateEnabled = value;
  }
  public resetAutoSoftwareUpdateEnabled() {
    this._autoSoftwareUpdateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSoftwareUpdateEnabledInput() {
    return this._autoSoftwareUpdateEnabled;
  }
}
export interface OpensearchserviceDomainTags {
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#key OpensearchserviceDomain#key}
  */
  readonly key?: string;
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#value OpensearchserviceDomain#value}
  */
  readonly value?: string;
}

export function opensearchserviceDomainTagsToTerraform(struct?: OpensearchserviceDomainTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function opensearchserviceDomainTagsToHclTerraform(struct?: OpensearchserviceDomainTags | cdktn.IResolvable): any {
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

export class OpensearchserviceDomainTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpensearchserviceDomainTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OpensearchserviceDomainTags | cdktn.IResolvable | undefined) {
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

export class OpensearchserviceDomainTagsList extends cdktn.ComplexList {
  public internalValue? : OpensearchserviceDomainTags[] | cdktn.IResolvable

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
  public get(index: number): OpensearchserviceDomainTagsOutputReference {
    return new OpensearchserviceDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchserviceDomainVpcOptions {
  /**
  * Controls whether egress traffic from the domain is routed through the customer VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#egress_enabled OpensearchserviceDomain#egress_enabled}
  */
  readonly egressEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#security_group_ids OpensearchserviceDomain#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#subnet_ids OpensearchserviceDomain#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function opensearchserviceDomainVpcOptionsToTerraform(struct?: OpensearchserviceDomainVpcOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    egress_enabled: cdktn.booleanToTerraform(struct!.egressEnabled),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function opensearchserviceDomainVpcOptionsToHclTerraform(struct?: OpensearchserviceDomainVpcOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    egress_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.egressEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchserviceDomainVpcOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchserviceDomainVpcOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressEnabled = this._egressEnabled;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchserviceDomainVpcOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressEnabled = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressEnabled = value.egressEnabled;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // egress_enabled - computed: true, optional: true, required: false
  private _egressEnabled?: boolean | cdktn.IResolvable; 
  public get egressEnabled() {
    return this.getBooleanAttribute('egress_enabled');
  }
  public set egressEnabled(value: boolean | cdktn.IResolvable) {
    this._egressEnabled = value;
  }
  public resetEgressEnabled() {
    this._egressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressEnabledInput() {
    return this._egressEnabled;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain awscc_opensearchservice_domain}
*/
export class OpensearchserviceDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_opensearchservice_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OpensearchserviceDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchserviceDomain to import
  * @param importFromId The id of the existing OpensearchserviceDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchserviceDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchservice_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/opensearchservice_domain awscc_opensearchservice_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchserviceDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpensearchserviceDomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_opensearchservice_domain',
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
    this._accessPolicies = config.accessPolicies;
    this._advancedOptions = config.advancedOptions;
    this._advancedSecurityOptions.internalValue = config.advancedSecurityOptions;
    this._aimlOptions.internalValue = config.aimlOptions;
    this._automatedSnapshotPauseOptions.internalValue = config.automatedSnapshotPauseOptions;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._cognitoOptions.internalValue = config.cognitoOptions;
    this._deploymentStrategyOptions.internalValue = config.deploymentStrategyOptions;
    this._domainEndpointOptions.internalValue = config.domainEndpointOptions;
    this._domainName = config.domainName;
    this._ebsOptions.internalValue = config.ebsOptions;
    this._encryptionAtRestOptions.internalValue = config.encryptionAtRestOptions;
    this._engineVersion = config.engineVersion;
    this._identityCenterOptions.internalValue = config.identityCenterOptions;
    this._ipAddressType = config.ipAddressType;
    this._logPublishingOptions.internalValue = config.logPublishingOptions;
    this._nodeToNodeEncryptionOptions.internalValue = config.nodeToNodeEncryptionOptions;
    this._offPeakWindowOptions.internalValue = config.offPeakWindowOptions;
    this._skipShardMigrationWait = config.skipShardMigrationWait;
    this._snapshotOptions.internalValue = config.snapshotOptions;
    this._softwareUpdateOptions.internalValue = config.softwareUpdateOptions;
    this._tags.internalValue = config.tags;
    this._vpcOptions.internalValue = config.vpcOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: true, optional: true, required: false
  private _accessPolicies?: string; 
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }
  public set accessPolicies(value: string) {
    this._accessPolicies = value;
  }
  public resetAccessPolicies() {
    this._accessPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies;
  }

  // advanced_options - computed: true, optional: true, required: false
  private _advancedOptions?: { [key: string]: string }; 
  public get advancedOptions() {
    return this.getStringMapAttribute('advanced_options');
  }
  public set advancedOptions(value: { [key: string]: string }) {
    this._advancedOptions = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions;
  }

  // advanced_security_options - computed: true, optional: true, required: false
  private _advancedSecurityOptions = new OpensearchserviceDomainAdvancedSecurityOptionsOutputReference(this, "advanced_security_options");
  public get advancedSecurityOptions() {
    return this._advancedSecurityOptions;
  }
  public putAdvancedSecurityOptions(value: OpensearchserviceDomainAdvancedSecurityOptions) {
    this._advancedSecurityOptions.internalValue = value;
  }
  public resetAdvancedSecurityOptions() {
    this._advancedSecurityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityOptionsInput() {
    return this._advancedSecurityOptions.internalValue;
  }

  // aiml_options - computed: true, optional: true, required: false
  private _aimlOptions = new OpensearchserviceDomainAimlOptionsOutputReference(this, "aiml_options");
  public get aimlOptions() {
    return this._aimlOptions;
  }
  public putAimlOptions(value: OpensearchserviceDomainAimlOptions) {
    this._aimlOptions.internalValue = value;
  }
  public resetAimlOptions() {
    this._aimlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aimlOptionsInput() {
    return this._aimlOptions.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automated_snapshot_pause_options - computed: true, optional: true, required: false
  private _automatedSnapshotPauseOptions = new OpensearchserviceDomainAutomatedSnapshotPauseOptionsOutputReference(this, "automated_snapshot_pause_options");
  public get automatedSnapshotPauseOptions() {
    return this._automatedSnapshotPauseOptions;
  }
  public putAutomatedSnapshotPauseOptions(value: OpensearchserviceDomainAutomatedSnapshotPauseOptions) {
    this._automatedSnapshotPauseOptions.internalValue = value;
  }
  public resetAutomatedSnapshotPauseOptions() {
    this._automatedSnapshotPauseOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedSnapshotPauseOptionsInput() {
    return this._automatedSnapshotPauseOptions.internalValue;
  }

  // cluster_config - computed: true, optional: true, required: false
  private _clusterConfig = new OpensearchserviceDomainClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: OpensearchserviceDomainClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cognito_options - computed: true, optional: true, required: false
  private _cognitoOptions = new OpensearchserviceDomainCognitoOptionsOutputReference(this, "cognito_options");
  public get cognitoOptions() {
    return this._cognitoOptions;
  }
  public putCognitoOptions(value: OpensearchserviceDomainCognitoOptions) {
    this._cognitoOptions.internalValue = value;
  }
  public resetCognitoOptions() {
    this._cognitoOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoOptionsInput() {
    return this._cognitoOptions.internalValue;
  }

  // deployment_strategy_options - computed: true, optional: true, required: false
  private _deploymentStrategyOptions = new OpensearchserviceDomainDeploymentStrategyOptionsOutputReference(this, "deployment_strategy_options");
  public get deploymentStrategyOptions() {
    return this._deploymentStrategyOptions;
  }
  public putDeploymentStrategyOptions(value: OpensearchserviceDomainDeploymentStrategyOptions) {
    this._deploymentStrategyOptions.internalValue = value;
  }
  public resetDeploymentStrategyOptions() {
    this._deploymentStrategyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStrategyOptionsInput() {
    return this._deploymentStrategyOptions.internalValue;
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // domain_endpoint - computed: true, optional: false, required: false
  public get domainEndpoint() {
    return this.getStringAttribute('domain_endpoint');
  }

  // domain_endpoint_options - computed: true, optional: true, required: false
  private _domainEndpointOptions = new OpensearchserviceDomainDomainEndpointOptionsOutputReference(this, "domain_endpoint_options");
  public get domainEndpointOptions() {
    return this._domainEndpointOptions;
  }
  public putDomainEndpointOptions(value: OpensearchserviceDomainDomainEndpointOptions) {
    this._domainEndpointOptions.internalValue = value;
  }
  public resetDomainEndpointOptions() {
    this._domainEndpointOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEndpointOptionsInput() {
    return this._domainEndpointOptions.internalValue;
  }

  // domain_endpoint_v2 - computed: true, optional: false, required: false
  public get domainEndpointV2() {
    return this.getStringAttribute('domain_endpoint_v2');
  }

  // domain_endpoints - computed: true, optional: false, required: false
  private _domainEndpoints = new cdktn.StringMap(this, "domain_endpoints");
  public get domainEndpoints() {
    return this._domainEndpoints;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // ebs_options - computed: true, optional: true, required: false
  private _ebsOptions = new OpensearchserviceDomainEbsOptionsOutputReference(this, "ebs_options");
  public get ebsOptions() {
    return this._ebsOptions;
  }
  public putEbsOptions(value: OpensearchserviceDomainEbsOptions) {
    this._ebsOptions.internalValue = value;
  }
  public resetEbsOptions() {
    this._ebsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptionsInput() {
    return this._ebsOptions.internalValue;
  }

  // encryption_at_rest_options - computed: true, optional: true, required: false
  private _encryptionAtRestOptions = new OpensearchserviceDomainEncryptionAtRestOptionsOutputReference(this, "encryption_at_rest_options");
  public get encryptionAtRestOptions() {
    return this._encryptionAtRestOptions;
  }
  public putEncryptionAtRestOptions(value: OpensearchserviceDomainEncryptionAtRestOptions) {
    this._encryptionAtRestOptions.internalValue = value;
  }
  public resetEncryptionAtRestOptions() {
    this._encryptionAtRestOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestOptionsInput() {
    return this._encryptionAtRestOptions.internalValue;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_center_options - computed: true, optional: true, required: false
  private _identityCenterOptions = new OpensearchserviceDomainIdentityCenterOptionsOutputReference(this, "identity_center_options");
  public get identityCenterOptions() {
    return this._identityCenterOptions;
  }
  public putIdentityCenterOptions(value: OpensearchserviceDomainIdentityCenterOptions) {
    this._identityCenterOptions.internalValue = value;
  }
  public resetIdentityCenterOptions() {
    this._identityCenterOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterOptionsInput() {
    return this._identityCenterOptions.internalValue;
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // log_publishing_options - computed: true, optional: true, required: false
  private _logPublishingOptions = new OpensearchserviceDomainLogPublishingOptionsMap(this, "log_publishing_options");
  public get logPublishingOptions() {
    return this._logPublishingOptions;
  }
  public putLogPublishingOptions(value: { [key: string]: OpensearchserviceDomainLogPublishingOptions } | cdktn.IResolvable) {
    this._logPublishingOptions.internalValue = value;
  }
  public resetLogPublishingOptions() {
    this._logPublishingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublishingOptionsInput() {
    return this._logPublishingOptions.internalValue;
  }

  // node_to_node_encryption_options - computed: true, optional: true, required: false
  private _nodeToNodeEncryptionOptions = new OpensearchserviceDomainNodeToNodeEncryptionOptionsOutputReference(this, "node_to_node_encryption_options");
  public get nodeToNodeEncryptionOptions() {
    return this._nodeToNodeEncryptionOptions;
  }
  public putNodeToNodeEncryptionOptions(value: OpensearchserviceDomainNodeToNodeEncryptionOptions) {
    this._nodeToNodeEncryptionOptions.internalValue = value;
  }
  public resetNodeToNodeEncryptionOptions() {
    this._nodeToNodeEncryptionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeToNodeEncryptionOptionsInput() {
    return this._nodeToNodeEncryptionOptions.internalValue;
  }

  // off_peak_window_options - computed: true, optional: true, required: false
  private _offPeakWindowOptions = new OpensearchserviceDomainOffPeakWindowOptionsOutputReference(this, "off_peak_window_options");
  public get offPeakWindowOptions() {
    return this._offPeakWindowOptions;
  }
  public putOffPeakWindowOptions(value: OpensearchserviceDomainOffPeakWindowOptions) {
    this._offPeakWindowOptions.internalValue = value;
  }
  public resetOffPeakWindowOptions() {
    this._offPeakWindowOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakWindowOptionsInput() {
    return this._offPeakWindowOptions.internalValue;
  }

  // service_software_options - computed: true, optional: false, required: false
  private _serviceSoftwareOptions = new OpensearchserviceDomainServiceSoftwareOptionsOutputReference(this, "service_software_options");
  public get serviceSoftwareOptions() {
    return this._serviceSoftwareOptions;
  }

  // skip_shard_migration_wait - computed: true, optional: true, required: false
  private _skipShardMigrationWait?: boolean | cdktn.IResolvable; 
  public get skipShardMigrationWait() {
    return this.getBooleanAttribute('skip_shard_migration_wait');
  }
  public set skipShardMigrationWait(value: boolean | cdktn.IResolvable) {
    this._skipShardMigrationWait = value;
  }
  public resetSkipShardMigrationWait() {
    this._skipShardMigrationWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipShardMigrationWaitInput() {
    return this._skipShardMigrationWait;
  }

  // snapshot_options - computed: true, optional: true, required: false
  private _snapshotOptions = new OpensearchserviceDomainSnapshotOptionsOutputReference(this, "snapshot_options");
  public get snapshotOptions() {
    return this._snapshotOptions;
  }
  public putSnapshotOptions(value: OpensearchserviceDomainSnapshotOptions) {
    this._snapshotOptions.internalValue = value;
  }
  public resetSnapshotOptions() {
    this._snapshotOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotOptionsInput() {
    return this._snapshotOptions.internalValue;
  }

  // software_update_options - computed: true, optional: true, required: false
  private _softwareUpdateOptions = new OpensearchserviceDomainSoftwareUpdateOptionsOutputReference(this, "software_update_options");
  public get softwareUpdateOptions() {
    return this._softwareUpdateOptions;
  }
  public putSoftwareUpdateOptions(value: OpensearchserviceDomainSoftwareUpdateOptions) {
    this._softwareUpdateOptions.internalValue = value;
  }
  public resetSoftwareUpdateOptions() {
    this._softwareUpdateOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareUpdateOptionsInput() {
    return this._softwareUpdateOptions.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new OpensearchserviceDomainTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: OpensearchserviceDomainTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_options - computed: true, optional: true, required: false
  private _vpcOptions = new OpensearchserviceDomainVpcOptionsOutputReference(this, "vpc_options");
  public get vpcOptions() {
    return this._vpcOptions;
  }
  public putVpcOptions(value: OpensearchserviceDomainVpcOptions) {
    this._vpcOptions.internalValue = value;
  }
  public resetVpcOptions() {
    this._vpcOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOptionsInput() {
    return this._vpcOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policies: cdktn.stringToTerraform(this._accessPolicies),
      advanced_options: cdktn.hashMapper(cdktn.stringToTerraform)(this._advancedOptions),
      advanced_security_options: opensearchserviceDomainAdvancedSecurityOptionsToTerraform(this._advancedSecurityOptions.internalValue),
      aiml_options: opensearchserviceDomainAimlOptionsToTerraform(this._aimlOptions.internalValue),
      automated_snapshot_pause_options: opensearchserviceDomainAutomatedSnapshotPauseOptionsToTerraform(this._automatedSnapshotPauseOptions.internalValue),
      cluster_config: opensearchserviceDomainClusterConfigToTerraform(this._clusterConfig.internalValue),
      cognito_options: opensearchserviceDomainCognitoOptionsToTerraform(this._cognitoOptions.internalValue),
      deployment_strategy_options: opensearchserviceDomainDeploymentStrategyOptionsToTerraform(this._deploymentStrategyOptions.internalValue),
      domain_endpoint_options: opensearchserviceDomainDomainEndpointOptionsToTerraform(this._domainEndpointOptions.internalValue),
      domain_name: cdktn.stringToTerraform(this._domainName),
      ebs_options: opensearchserviceDomainEbsOptionsToTerraform(this._ebsOptions.internalValue),
      encryption_at_rest_options: opensearchserviceDomainEncryptionAtRestOptionsToTerraform(this._encryptionAtRestOptions.internalValue),
      engine_version: cdktn.stringToTerraform(this._engineVersion),
      identity_center_options: opensearchserviceDomainIdentityCenterOptionsToTerraform(this._identityCenterOptions.internalValue),
      ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
      log_publishing_options: cdktn.hashMapper(opensearchserviceDomainLogPublishingOptionsToTerraform)(this._logPublishingOptions.internalValue),
      node_to_node_encryption_options: opensearchserviceDomainNodeToNodeEncryptionOptionsToTerraform(this._nodeToNodeEncryptionOptions.internalValue),
      off_peak_window_options: opensearchserviceDomainOffPeakWindowOptionsToTerraform(this._offPeakWindowOptions.internalValue),
      skip_shard_migration_wait: cdktn.booleanToTerraform(this._skipShardMigrationWait),
      snapshot_options: opensearchserviceDomainSnapshotOptionsToTerraform(this._snapshotOptions.internalValue),
      software_update_options: opensearchserviceDomainSoftwareUpdateOptionsToTerraform(this._softwareUpdateOptions.internalValue),
      tags: cdktn.listMapper(opensearchserviceDomainTagsToTerraform, false)(this._tags.internalValue),
      vpc_options: opensearchserviceDomainVpcOptionsToTerraform(this._vpcOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policies: {
        value: cdktn.stringToHclTerraform(this._accessPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_options: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._advancedOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      advanced_security_options: {
        value: opensearchserviceDomainAdvancedSecurityOptionsToHclTerraform(this._advancedSecurityOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainAdvancedSecurityOptions",
      },
      aiml_options: {
        value: opensearchserviceDomainAimlOptionsToHclTerraform(this._aimlOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainAimlOptions",
      },
      automated_snapshot_pause_options: {
        value: opensearchserviceDomainAutomatedSnapshotPauseOptionsToHclTerraform(this._automatedSnapshotPauseOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainAutomatedSnapshotPauseOptions",
      },
      cluster_config: {
        value: opensearchserviceDomainClusterConfigToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainClusterConfig",
      },
      cognito_options: {
        value: opensearchserviceDomainCognitoOptionsToHclTerraform(this._cognitoOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainCognitoOptions",
      },
      deployment_strategy_options: {
        value: opensearchserviceDomainDeploymentStrategyOptionsToHclTerraform(this._deploymentStrategyOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainDeploymentStrategyOptions",
      },
      domain_endpoint_options: {
        value: opensearchserviceDomainDomainEndpointOptionsToHclTerraform(this._domainEndpointOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainDomainEndpointOptions",
      },
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebs_options: {
        value: opensearchserviceDomainEbsOptionsToHclTerraform(this._ebsOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainEbsOptions",
      },
      encryption_at_rest_options: {
        value: opensearchserviceDomainEncryptionAtRestOptionsToHclTerraform(this._encryptionAtRestOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainEncryptionAtRestOptions",
      },
      engine_version: {
        value: cdktn.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_center_options: {
        value: opensearchserviceDomainIdentityCenterOptionsToHclTerraform(this._identityCenterOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainIdentityCenterOptions",
      },
      ip_address_type: {
        value: cdktn.stringToHclTerraform(this._ipAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_publishing_options: {
        value: cdktn.hashMapperHcl(opensearchserviceDomainLogPublishingOptionsToHclTerraform)(this._logPublishingOptions.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OpensearchserviceDomainLogPublishingOptionsMap",
      },
      node_to_node_encryption_options: {
        value: opensearchserviceDomainNodeToNodeEncryptionOptionsToHclTerraform(this._nodeToNodeEncryptionOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainNodeToNodeEncryptionOptions",
      },
      off_peak_window_options: {
        value: opensearchserviceDomainOffPeakWindowOptionsToHclTerraform(this._offPeakWindowOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainOffPeakWindowOptions",
      },
      skip_shard_migration_wait: {
        value: cdktn.booleanToHclTerraform(this._skipShardMigrationWait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_options: {
        value: opensearchserviceDomainSnapshotOptionsToHclTerraform(this._snapshotOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainSnapshotOptions",
      },
      software_update_options: {
        value: opensearchserviceDomainSoftwareUpdateOptionsToHclTerraform(this._softwareUpdateOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainSoftwareUpdateOptions",
      },
      tags: {
        value: cdktn.listMapperHcl(opensearchserviceDomainTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchserviceDomainTagsList",
      },
      vpc_options: {
        value: opensearchserviceDomainVpcOptionsToHclTerraform(this._vpcOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchserviceDomainVpcOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
