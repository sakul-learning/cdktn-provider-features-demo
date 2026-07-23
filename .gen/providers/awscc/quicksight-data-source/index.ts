// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * <p>A set of alternate data source parameters that you want to share for the credentials
  *             stored with this data source. The credentials are applied in tandem with the data source
  *             parameters when you copy a data source by using a create or update request. The API
  *             operation compares the <code>DataSourceParameters</code> structure that's in the request
  *             with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
  *             structures are an exact match, the request is allowed to use the credentials from this
  *             existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
  *             the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
  *             are automatically allowed.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#alternate_data_source_parameters QuicksightDataSource#alternate_data_source_parameters}
  */
  readonly alternateDataSourceParameters?: QuicksightDataSourceAlternateDataSourceParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#aws_account_id QuicksightDataSource#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * <p>Data source credentials. This is a variant type structure. For this structure to be
  *             valid, only one of the attributes can be non-null.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#credentials QuicksightDataSource#credentials}
  */
  readonly credentials?: QuicksightDataSourceCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#data_source_id QuicksightDataSource#data_source_id}
  */
  readonly dataSourceId?: string;
  /**
  * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
  *             This is a variant type structure. For this structure to be valid, only one of the
  *             attributes can be non-null.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#data_source_parameters QuicksightDataSource#data_source_parameters}
  */
  readonly dataSourceParameters?: QuicksightDataSourceDataSourceParameters;
  /**
  * <p>Error information for the data source creation or update.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#error_info QuicksightDataSource#error_info}
  */
  readonly errorInfo?: QuicksightDataSourceErrorInfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#folder_arns QuicksightDataSource#folder_arns}
  */
  readonly folderArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#name QuicksightDataSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#permissions QuicksightDataSource#permissions}
  */
  readonly permissions?: QuicksightDataSourcePermissions[] | cdktn.IResolvable;
  /**
  * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
  *             underlying data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#ssl_properties QuicksightDataSource#ssl_properties}
  */
  readonly sslProperties?: QuicksightDataSourceSslProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#tags QuicksightDataSource#tags}
  */
  readonly tags?: QuicksightDataSourceTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#type QuicksightDataSource#type}
  */
  readonly type: string;
  /**
  * <p>VPC connection properties.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#vpc_connection_properties QuicksightDataSource#vpc_connection_properties}
  */
  readonly vpcConnectionProperties?: QuicksightDataSourceVpcConnectionProperties;
}
export interface QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters {
  /**
  * <p>The OpenSearch domain.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#domain QuicksightDataSource#domain}
  */
  readonly domain?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters {
  /**
  * <p>The OpenSearch domain.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#domain QuicksightDataSource#domain}
  */
  readonly domain?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration {
  /**
  * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#enable_identity_propagation QuicksightDataSource#enable_identity_propagation}
  */
  readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_identity_propagation: {
      value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdentityPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = value.enableIdentityPropagation;
    }
  }

  // enable_identity_propagation - computed: true, optional: true, required: false
  private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
  public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
    this._enableIdentityPropagation = value;
  }
  public resetEnableIdentityPropagation() {
    this._enableIdentityPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentityPropagationInput() {
    return this._enableIdentityPropagation;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersAthenaParameters {
  /**
  * <p>The parameters for an IAM Identity Center configuration.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_center_configuration QuicksightDataSource#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration;
  /**
  * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * <p>The workgroup that Amazon Athena uses.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#work_group QuicksightDataSource#work_group}
  */
  readonly workGroup?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAthenaParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center_configuration: quicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToTerraform(struct!.identityCenterConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    work_group: cdktn.stringToTerraform(struct!.workGroup),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersAthenaParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAthenaParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center_configuration: {
      value: quicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToHclTerraform(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group: {
      value: cdktn.stringToHclTerraform(struct!.workGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersAthenaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersAthenaParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityCenterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._workGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroup = this._workGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersAthenaParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityCenterConfiguration.internalValue = undefined;
      this._roleArn = undefined;
      this._workGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
      this._roleArn = value.roleArn;
      this._workGroup = value.workGroup;
    }
  }

  // identity_center_configuration - computed: true, optional: true, required: false
  private _identityCenterConfiguration = new QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: QuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration) {
    this._identityCenterConfiguration.internalValue = value;
  }
  public resetIdentityCenterConfiguration() {
    this._identityCenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigurationInput() {
    return this._identityCenterConfiguration.internalValue;
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

  // work_group - computed: true, optional: true, required: false
  private _workGroup?: string; 
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersAuroraParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAuroraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersAuroraParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAuroraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersAuroraParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersAuroraParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersAuroraParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters {
  /**
  * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersDatabricksParameters {
  /**
  * <p>The host name of the Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port for the Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
  /**
  * <p>The HTTP path of the Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#sql_endpoint_path QuicksightDataSource#sql_endpoint_path}
  */
  readonly sqlEndpointPath?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersDatabricksParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersDatabricksParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
    sql_endpoint_path: cdktn.stringToTerraform(struct!.sqlEndpointPath),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersDatabricksParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersDatabricksParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sql_endpoint_path: {
      value: cdktn.stringToHclTerraform(struct!.sqlEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersDatabricksParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersDatabricksParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sqlEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlEndpointPath = this._sqlEndpointPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersDatabricksParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._sqlEndpointPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._sqlEndpointPath = value.sqlEndpointPath;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sql_endpoint_path - computed: true, optional: true, required: false
  private _sqlEndpointPath?: string; 
  public get sqlEndpointPath() {
    return this.getStringAttribute('sql_endpoint_path');
  }
  public set sqlEndpointPath(value: string) {
    this._sqlEndpointPath = value;
  }
  public resetSqlEndpointPath() {
    this._sqlEndpointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlEndpointPathInput() {
    return this._sqlEndpointPath;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersMariaDbParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersMariaDbParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersMySqlParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersMySqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersMySqlParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersMySqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersMySqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersMySqlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersMySqlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersOracleParameters {
  /**
  * <p>The database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>An Oracle host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#use_service_name QuicksightDataSource#use_service_name}
  */
  readonly useServiceName?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersOracleParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
    use_service_name: cdktn.booleanToTerraform(struct!.useServiceName),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersOracleParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersOracleParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_service_name: {
      value: cdktn.booleanToHclTerraform(struct!.useServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersOracleParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersOracleParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._useServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServiceName = this._useServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersOracleParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
      this._useServiceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
      this._useServiceName = value.useServiceName;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // use_service_name - computed: true, optional: true, required: false
  private _useServiceName?: boolean | cdktn.IResolvable; 
  public get useServiceName() {
    return this.getBooleanAttribute('use_service_name');
  }
  public set useServiceName(value: boolean | cdktn.IResolvable) {
    this._useServiceName = value;
  }
  public resetUseServiceName() {
    this._useServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceNameInput() {
    return this._useServiceName;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersPrestoParameters {
  /**
  * <p>Catalog.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersPrestoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersPrestoParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersPrestoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersPrestoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersPrestoParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersPrestoParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersRdsParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Instance ID.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#instance_id QuicksightDataSource#instance_id}
  */
  readonly instanceId?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRdsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersRdsParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRdsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersRdsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersRdsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersRdsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._instanceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._instanceId = value.instanceId;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters {
  /**
  * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#auto_create_database_user QuicksightDataSource#auto_create_database_user}
  */
  readonly autoCreateDatabaseUser?: boolean | cdktn.IResolvable;
  /**
  * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_groups QuicksightDataSource#database_groups}
  */
  readonly databaseGroups?: string[];
  /**
  * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_user QuicksightDataSource#database_user}
  */
  readonly databaseUser?: string;
  /**
  * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_create_database_user: cdktn.booleanToTerraform(struct!.autoCreateDatabaseUser),
    database_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseGroups),
    database_user: cdktn.stringToTerraform(struct!.databaseUser),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_create_database_user: {
      value: cdktn.booleanToHclTerraform(struct!.autoCreateDatabaseUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    database_user: {
      value: cdktn.stringToHclTerraform(struct!.databaseUser),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateDatabaseUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateDatabaseUser = this._autoCreateDatabaseUser;
    }
    if (this._databaseGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseGroups = this._databaseGroups;
    }
    if (this._databaseUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUser = this._databaseUser;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoCreateDatabaseUser = undefined;
      this._databaseGroups = undefined;
      this._databaseUser = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoCreateDatabaseUser = value.autoCreateDatabaseUser;
      this._databaseGroups = value.databaseGroups;
      this._databaseUser = value.databaseUser;
      this._roleArn = value.roleArn;
    }
  }

  // auto_create_database_user - computed: true, optional: true, required: false
  private _autoCreateDatabaseUser?: boolean | cdktn.IResolvable; 
  public get autoCreateDatabaseUser() {
    return this.getBooleanAttribute('auto_create_database_user');
  }
  public set autoCreateDatabaseUser(value: boolean | cdktn.IResolvable) {
    this._autoCreateDatabaseUser = value;
  }
  public resetAutoCreateDatabaseUser() {
    this._autoCreateDatabaseUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDatabaseUserInput() {
    return this._autoCreateDatabaseUser;
  }

  // database_groups - computed: true, optional: true, required: false
  private _databaseGroups?: string[]; 
  public get databaseGroups() {
    return this.getListAttribute('database_groups');
  }
  public set databaseGroups(value: string[]) {
    this._databaseGroups = value;
  }
  public resetDatabaseGroups() {
    this._databaseGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseGroupsInput() {
    return this._databaseGroups;
  }

  // database_user - computed: true, optional: true, required: false
  private _databaseUser?: string; 
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }
  public set databaseUser(value: string) {
    this._databaseUser = value;
  }
  public resetDatabaseUser() {
    this._databaseUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserInput() {
    return this._databaseUser;
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
}
export interface QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration {
  /**
  * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#enable_identity_propagation QuicksightDataSource#enable_identity_propagation}
  */
  readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_identity_propagation: {
      value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdentityPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = value.enableIdentityPropagation;
    }
  }

  // enable_identity_propagation - computed: true, optional: true, required: false
  private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
  public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
    this._enableIdentityPropagation = value;
  }
  public resetEnableIdentityPropagation() {
    this._enableIdentityPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentityPropagationInput() {
    return this._enableIdentityPropagation;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters {
  /**
  * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
  *             provided.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
  *                <code>GetClusterCredentials</code>
  *             </a>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#iam_parameters QuicksightDataSource#iam_parameters}
  */
  readonly iamParameters?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters;
  /**
  * <p>The parameters for an IAM Identity Center configuration.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_center_configuration QuicksightDataSource#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration;
  /**
  * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    iam_parameters: quicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersToTerraform(struct!.iamParameters),
    identity_center_configuration: quicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToTerraform(struct!.identityCenterConfiguration),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersRedshiftParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersToHclTerraform(struct!.iamParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters",
    },
    identity_center_configuration: {
      value: quicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToHclTerraform(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._iamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamParameters = this._iamParameters?.internalValue;
    }
    if (this._identityCenterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._database = undefined;
      this._host = undefined;
      this._iamParameters.internalValue = undefined;
      this._identityCenterConfiguration.internalValue = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._database = value.database;
      this._host = value.host;
      this._iamParameters.internalValue = value.iamParameters;
      this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
      this._port = value.port;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // iam_parameters - computed: true, optional: true, required: false
  private _iamParameters = new QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersOutputReference(this, "iam_parameters");
  public get iamParameters() {
    return this._iamParameters;
  }
  public putIamParameters(value: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters) {
    this._iamParameters.internalValue = value;
  }
  public resetIamParameters() {
    this._iamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamParametersInput() {
    return this._iamParameters.internalValue;
  }

  // identity_center_configuration - computed: true, optional: true, required: false
  private _identityCenterConfiguration = new QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration) {
    this._identityCenterConfiguration.internalValue = value;
  }
  public resetIdentityCenterConfiguration() {
    this._identityCenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigurationInput() {
    return this._identityCenterConfiguration.internalValue;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation {
  /**
  * <p>Amazon S3 bucket.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#bucket QuicksightDataSource#bucket}
  */
  readonly bucket?: string;
  /**
  * <p>Amazon S3 key that identifies an object.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#key QuicksightDataSource#key}
  */
  readonly key?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}
export interface QuicksightDataSourceAlternateDataSourceParametersS3Parameters {
  /**
  * <p>Amazon S3 manifest file location.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}
  */
  readonly manifestFileLocation?: QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation;
  /**
  * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3Parameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    manifest_file_location: quicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct!.manifestFileLocation),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersS3ParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3Parameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    manifest_file_location: {
      value: quicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToHclTerraform(struct!.manifestFileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersS3ParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersS3Parameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestFileLocation = this._manifestFileLocation?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersS3Parameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifestFileLocation.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifestFileLocation.internalValue = value.manifestFileLocation;
      this._roleArn = value.roleArn;
    }
  }

  // manifest_file_location - computed: true, optional: true, required: false
  private _manifestFileLocation = new QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationOutputReference(this, "manifest_file_location");
  public get manifestFileLocation() {
    return this._manifestFileLocation;
  }
  public putManifestFileLocation(value: QuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation) {
    this._manifestFileLocation.internalValue = value;
  }
  public resetManifestFileLocation() {
    this._manifestFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestFileLocationInput() {
    return this._manifestFileLocation.internalValue;
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
}
export interface QuicksightDataSourceAlternateDataSourceParametersS3TablesParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#table_bucket_arn QuicksightDataSource#table_bucket_arn}
  */
  readonly tableBucketArn?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersS3TablesParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3TablesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_bucket_arn: cdktn.stringToTerraform(struct!.tableBucketArn),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersS3TablesParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersS3TablesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.tableBucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersS3TablesParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersS3TablesParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableBucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableBucketArn = this._tableBucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersS3TablesParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableBucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableBucketArn = value.tableBucketArn;
    }
  }

  // table_bucket_arn - computed: true, optional: true, required: false
  private _tableBucketArn?: string; 
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
  public set tableBucketArn(value: string) {
    this._tableBucketArn = value;
  }
  public resetTableBucketArn() {
    this._tableBucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableBucketArnInput() {
    return this._tableBucketArn;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties {
  /**
  * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcConnectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = value.vpcConnectionArn;
    }
  }

  // vpc_connection_arn - computed: true, optional: true, required: false
  private _vpcConnectionArn?: string; 
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
  public set vpcConnectionArn(value: string) {
    this._vpcConnectionArn = value;
  }
  public resetVpcConnectionArn() {
    this._vpcConnectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionArnInput() {
    return this._vpcConnectionArn;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_resource_uri QuicksightDataSource#identity_provider_resource_uri}
  */
  readonly identityProviderResourceUri?: string;
  /**
  * <p>VPC connection properties.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties QuicksightDataSource#identity_provider_vpc_connection_properties}
  */
  readonly identityProviderVpcConnectionProperties?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_scope QuicksightDataSource#o_auth_scope}
  */
  readonly oAuthScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#token_provider_url QuicksightDataSource#token_provider_url}
  */
  readonly tokenProviderUrl?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
    identity_provider_vpc_connection_properties: quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct!.identityProviderVpcConnectionProperties),
    o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
    token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_provider_resource_uri: {
      value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_vpc_connection_properties: {
      value: quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct!.identityProviderVpcConnectionProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties",
    },
    o_auth_scope: {
      value: cdktn.stringToHclTerraform(struct!.oAuthScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_provider_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderResourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
    }
    if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
    }
    if (this._oAuthScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthScope = this._oAuthScope;
    }
    if (this._tokenProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = undefined;
      this._identityProviderVpcConnectionProperties.internalValue = undefined;
      this._oAuthScope = undefined;
      this._tokenProviderUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = value.identityProviderResourceUri;
      this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
      this._oAuthScope = value.oAuthScope;
      this._tokenProviderUrl = value.tokenProviderUrl;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: true, required: false
  private _identityProviderResourceUri?: string; 
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }
  public set identityProviderResourceUri(value: string) {
    this._identityProviderResourceUri = value;
  }
  public resetIdentityProviderResourceUri() {
    this._identityProviderResourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderResourceUriInput() {
    return this._identityProviderResourceUri;
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
  private _identityProviderVpcConnectionProperties = new QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }
  public putIdentityProviderVpcConnectionProperties(value: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties) {
    this._identityProviderVpcConnectionProperties.internalValue = value;
  }
  public resetIdentityProviderVpcConnectionProperties() {
    this._identityProviderVpcConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderVpcConnectionPropertiesInput() {
    return this._identityProviderVpcConnectionProperties.internalValue;
  }

  // o_auth_scope - computed: true, optional: true, required: false
  private _oAuthScope?: string; 
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }
  public set oAuthScope(value: string) {
    this._oAuthScope = value;
  }
  public resetOAuthScope() {
    this._oAuthScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthScopeInput() {
    return this._oAuthScope;
  }

  // token_provider_url - computed: true, optional: true, required: false
  private _tokenProviderUrl?: string; 
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
  public set tokenProviderUrl(value: string) {
    this._tokenProviderUrl = value;
  }
  public resetTokenProviderUrl() {
    this._tokenProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenProviderUrlInput() {
    return this._tokenProviderUrl;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#authentication_type QuicksightDataSource#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_access_control_role QuicksightDataSource#database_access_control_role}
  */
  readonly databaseAccessControlRole?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_parameters QuicksightDataSource#o_auth_parameters}
  */
  readonly oAuthParameters?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters;
  /**
  * <p>Warehouse.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#warehouse QuicksightDataSource#warehouse}
  */
  readonly warehouse?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    database: cdktn.stringToTerraform(struct!.database),
    database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
    host: cdktn.stringToTerraform(struct!.host),
    o_auth_parameters: quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersToTerraform(struct!.oAuthParameters),
    warehouse: cdktn.stringToTerraform(struct!.warehouse),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_access_control_role: {
      value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersToHclTerraform(struct!.oAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters",
    },
    warehouse: {
      value: cdktn.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databaseAccessControlRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._oAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._database = undefined;
      this._databaseAccessControlRole = undefined;
      this._host = undefined;
      this._oAuthParameters.internalValue = undefined;
      this._warehouse = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._database = value.database;
      this._databaseAccessControlRole = value.databaseAccessControlRole;
      this._host = value.host;
      this._oAuthParameters.internalValue = value.oAuthParameters;
      this._warehouse = value.warehouse;
    }
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // database_access_control_role - computed: true, optional: true, required: false
  private _databaseAccessControlRole?: string; 
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }
  public set databaseAccessControlRole(value: string) {
    this._databaseAccessControlRole = value;
  }
  public resetDatabaseAccessControlRole() {
    this._databaseAccessControlRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseAccessControlRoleInput() {
    return this._databaseAccessControlRole;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // o_auth_parameters - computed: true, optional: true, required: false
  private _oAuthParameters = new QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }
  public putOAuthParameters(value: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters) {
    this._oAuthParameters.internalValue = value;
  }
  public resetOAuthParameters() {
    this._oAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthParametersInput() {
    return this._oAuthParameters.internalValue;
  }

  // warehouse - computed: true, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersSparkParameters {
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSparkParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersSparkParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSparkParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersSparkParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersSparkParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersSparkParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersSqlServerParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersSqlServerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties {
  /**
  * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcConnectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = value.vpcConnectionArn;
    }
  }

  // vpc_connection_arn - computed: true, optional: true, required: false
  private _vpcConnectionArn?: string; 
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
  public set vpcConnectionArn(value: string) {
    this._vpcConnectionArn = value;
  }
  public resetVpcConnectionArn() {
    this._vpcConnectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionArnInput() {
    return this._vpcConnectionArn;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_resource_uri QuicksightDataSource#identity_provider_resource_uri}
  */
  readonly identityProviderResourceUri?: string;
  /**
  * <p>VPC connection properties.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties QuicksightDataSource#identity_provider_vpc_connection_properties}
  */
  readonly identityProviderVpcConnectionProperties?: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_scope QuicksightDataSource#o_auth_scope}
  */
  readonly oAuthScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#token_provider_url QuicksightDataSource#token_provider_url}
  */
  readonly tokenProviderUrl?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
    identity_provider_vpc_connection_properties: quicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct!.identityProviderVpcConnectionProperties),
    o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
    token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_provider_resource_uri: {
      value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_vpc_connection_properties: {
      value: quicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct!.identityProviderVpcConnectionProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties",
    },
    o_auth_scope: {
      value: cdktn.stringToHclTerraform(struct!.oAuthScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_provider_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderResourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
    }
    if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
    }
    if (this._oAuthScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthScope = this._oAuthScope;
    }
    if (this._tokenProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = undefined;
      this._identityProviderVpcConnectionProperties.internalValue = undefined;
      this._oAuthScope = undefined;
      this._tokenProviderUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = value.identityProviderResourceUri;
      this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
      this._oAuthScope = value.oAuthScope;
      this._tokenProviderUrl = value.tokenProviderUrl;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: true, required: false
  private _identityProviderResourceUri?: string; 
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }
  public set identityProviderResourceUri(value: string) {
    this._identityProviderResourceUri = value;
  }
  public resetIdentityProviderResourceUri() {
    this._identityProviderResourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderResourceUriInput() {
    return this._identityProviderResourceUri;
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
  private _identityProviderVpcConnectionProperties = new QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }
  public putIdentityProviderVpcConnectionProperties(value: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties) {
    this._identityProviderVpcConnectionProperties.internalValue = value;
  }
  public resetIdentityProviderVpcConnectionProperties() {
    this._identityProviderVpcConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderVpcConnectionPropertiesInput() {
    return this._identityProviderVpcConnectionProperties.internalValue;
  }

  // o_auth_scope - computed: true, optional: true, required: false
  private _oAuthScope?: string; 
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }
  public set oAuthScope(value: string) {
    this._oAuthScope = value;
  }
  public resetOAuthScope() {
    this._oAuthScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthScopeInput() {
    return this._oAuthScope;
  }

  // token_provider_url - computed: true, optional: true, required: false
  private _tokenProviderUrl?: string; 
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
  public set tokenProviderUrl(value: string) {
    this._tokenProviderUrl = value;
  }
  public resetTokenProviderUrl() {
    this._tokenProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenProviderUrlInput() {
    return this._tokenProviderUrl;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersStarburstParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#authentication_type QuicksightDataSource#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * <p>The catalog name for the Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_access_control_role QuicksightDataSource#database_access_control_role}
  */
  readonly databaseAccessControlRole?: string;
  /**
  * <p>The host name of the Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_parameters QuicksightDataSource#o_auth_parameters}
  */
  readonly oAuthParameters?: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters;
  /**
  * <p>The port for the Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#product_type QuicksightDataSource#product_type}
  */
  readonly productType?: string;
}

export function quicksightDataSourceAlternateDataSourceParametersStarburstParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersStarburstParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    catalog: cdktn.stringToTerraform(struct!.catalog),
    database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
    host: cdktn.stringToTerraform(struct!.host),
    o_auth_parameters: quicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersToTerraform(struct!.oAuthParameters),
    port: cdktn.numberToTerraform(struct!.port),
    product_type: cdktn.stringToTerraform(struct!.productType),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersStarburstParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersStarburstParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_access_control_role: {
      value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersToHclTerraform(struct!.oAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    product_type: {
      value: cdktn.stringToHclTerraform(struct!.productType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersStarburstParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._databaseAccessControlRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._oAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._productType !== undefined) {
      hasAnyValues = true;
      internalValueResult.productType = this._productType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersStarburstParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._catalog = undefined;
      this._databaseAccessControlRole = undefined;
      this._host = undefined;
      this._oAuthParameters.internalValue = undefined;
      this._port = undefined;
      this._productType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._catalog = value.catalog;
      this._databaseAccessControlRole = value.databaseAccessControlRole;
      this._host = value.host;
      this._oAuthParameters.internalValue = value.oAuthParameters;
      this._port = value.port;
      this._productType = value.productType;
    }
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // database_access_control_role - computed: true, optional: true, required: false
  private _databaseAccessControlRole?: string; 
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }
  public set databaseAccessControlRole(value: string) {
    this._databaseAccessControlRole = value;
  }
  public resetDatabaseAccessControlRole() {
    this._databaseAccessControlRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseAccessControlRoleInput() {
    return this._databaseAccessControlRole;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // o_auth_parameters - computed: true, optional: true, required: false
  private _oAuthParameters = new QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }
  public putOAuthParameters(value: QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters) {
    this._oAuthParameters.internalValue = value;
  }
  public resetOAuthParameters() {
    this._oAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthParametersInput() {
    return this._oAuthParameters.internalValue;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // product_type - computed: true, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersTeradataParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersTeradataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersTeradataParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersTeradataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersTeradataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersTeradataParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersTeradataParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParametersTrinoParameters {
  /**
  * <p>The catalog name for the Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog?: string;
  /**
  * <p>The host name of the Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port for the Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceAlternateDataSourceParametersTrinoParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersTrinoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersTrinoParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParametersTrinoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersTrinoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParametersTrinoParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParametersTrinoParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceAlternateDataSourceParameters {
  /**
  * <p>The parameters for OpenSearch.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#amazon_elasticsearch_parameters QuicksightDataSource#amazon_elasticsearch_parameters}
  */
  readonly amazonElasticsearchParameters?: QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters;
  /**
  * <p>The parameters for OpenSearch.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#amazon_open_search_parameters QuicksightDataSource#amazon_open_search_parameters}
  */
  readonly amazonOpenSearchParameters?: QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters;
  /**
  * <p>Parameters for Amazon Athena.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#athena_parameters QuicksightDataSource#athena_parameters}
  */
  readonly athenaParameters?: QuicksightDataSourceAlternateDataSourceParametersAthenaParameters;
  /**
  * <p>Parameters for Amazon Aurora.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#aurora_parameters QuicksightDataSource#aurora_parameters}
  */
  readonly auroraParameters?: QuicksightDataSourceAlternateDataSourceParametersAuroraParameters;
  /**
  * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#aurora_postgre_sql_parameters QuicksightDataSource#aurora_postgre_sql_parameters}
  */
  readonly auroraPostgreSqlParameters?: QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters;
  /**
  * <p>The parameters that are required to connect to a Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#databricks_parameters QuicksightDataSource#databricks_parameters}
  */
  readonly databricksParameters?: QuicksightDataSourceAlternateDataSourceParametersDatabricksParameters;
  /**
  * <p>The parameters for MariaDB.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#maria_db_parameters QuicksightDataSource#maria_db_parameters}
  */
  readonly mariaDbParameters?: QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters;
  /**
  * <p>The parameters for MySQL.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#my_sql_parameters QuicksightDataSource#my_sql_parameters}
  */
  readonly mySqlParameters?: QuicksightDataSourceAlternateDataSourceParametersMySqlParameters;
  /**
  * <p>The parameters for Oracle.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#oracle_parameters QuicksightDataSource#oracle_parameters}
  */
  readonly oracleParameters?: QuicksightDataSourceAlternateDataSourceParametersOracleParameters;
  /**
  * <p>The parameters for PostgreSQL.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#postgre_sql_parameters QuicksightDataSource#postgre_sql_parameters}
  */
  readonly postgreSqlParameters?: QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters;
  /**
  * <p>The parameters for Presto.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#presto_parameters QuicksightDataSource#presto_parameters}
  */
  readonly prestoParameters?: QuicksightDataSourceAlternateDataSourceParametersPrestoParameters;
  /**
  * <p>The parameters for Amazon RDS.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#rds_parameters QuicksightDataSource#rds_parameters}
  */
  readonly rdsParameters?: QuicksightDataSourceAlternateDataSourceParametersRdsParameters;
  /**
  * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
  *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#redshift_parameters QuicksightDataSource#redshift_parameters}
  */
  readonly redshiftParameters?: QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters;
  /**
  * <p>The parameters for S3.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#s3_parameters QuicksightDataSource#s3_parameters}
  */
  readonly s3Parameters?: QuicksightDataSourceAlternateDataSourceParametersS3Parameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#s3_tables_parameters QuicksightDataSource#s3_tables_parameters}
  */
  readonly s3TablesParameters?: QuicksightDataSourceAlternateDataSourceParametersS3TablesParameters;
  /**
  * <p>The parameters for Snowflake.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#snowflake_parameters QuicksightDataSource#snowflake_parameters}
  */
  readonly snowflakeParameters?: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters;
  /**
  * <p>The parameters for Spark.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#spark_parameters QuicksightDataSource#spark_parameters}
  */
  readonly sparkParameters?: QuicksightDataSourceAlternateDataSourceParametersSparkParameters;
  /**
  * <p>The parameters for SQL Server.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#sql_server_parameters QuicksightDataSource#sql_server_parameters}
  */
  readonly sqlServerParameters?: QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters;
  /**
  * <p>The parameters that are required to connect to a Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#starburst_parameters QuicksightDataSource#starburst_parameters}
  */
  readonly starburstParameters?: QuicksightDataSourceAlternateDataSourceParametersStarburstParameters;
  /**
  * <p>The parameters for Teradata.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#teradata_parameters QuicksightDataSource#teradata_parameters}
  */
  readonly teradataParameters?: QuicksightDataSourceAlternateDataSourceParametersTeradataParameters;
  /**
  * <p>The parameters that are required to connect to a Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#trino_parameters QuicksightDataSource#trino_parameters}
  */
  readonly trinoParameters?: QuicksightDataSourceAlternateDataSourceParametersTrinoParameters;
}

export function quicksightDataSourceAlternateDataSourceParametersToTerraform(struct?: QuicksightDataSourceAlternateDataSourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amazon_elasticsearch_parameters: quicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct!.amazonElasticsearchParameters),
    amazon_open_search_parameters: quicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersToTerraform(struct!.amazonOpenSearchParameters),
    athena_parameters: quicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct!.athenaParameters),
    aurora_parameters: quicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct!.auroraParameters),
    aurora_postgre_sql_parameters: quicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct!.auroraPostgreSqlParameters),
    databricks_parameters: quicksightDataSourceAlternateDataSourceParametersDatabricksParametersToTerraform(struct!.databricksParameters),
    maria_db_parameters: quicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct!.mariaDbParameters),
    my_sql_parameters: quicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct!.mySqlParameters),
    oracle_parameters: quicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct!.oracleParameters),
    postgre_sql_parameters: quicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct!.postgreSqlParameters),
    presto_parameters: quicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct!.prestoParameters),
    rds_parameters: quicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct!.rdsParameters),
    redshift_parameters: quicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct!.redshiftParameters),
    s3_parameters: quicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct!.s3Parameters),
    s3_tables_parameters: quicksightDataSourceAlternateDataSourceParametersS3TablesParametersToTerraform(struct!.s3TablesParameters),
    snowflake_parameters: quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct!.snowflakeParameters),
    spark_parameters: quicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct!.sparkParameters),
    sql_server_parameters: quicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct!.sqlServerParameters),
    starburst_parameters: quicksightDataSourceAlternateDataSourceParametersStarburstParametersToTerraform(struct!.starburstParameters),
    teradata_parameters: quicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct!.teradataParameters),
    trino_parameters: quicksightDataSourceAlternateDataSourceParametersTrinoParametersToTerraform(struct!.trinoParameters),
  }
}


export function quicksightDataSourceAlternateDataSourceParametersToHclTerraform(struct?: QuicksightDataSourceAlternateDataSourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amazon_elasticsearch_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToHclTerraform(struct!.amazonElasticsearchParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters",
    },
    amazon_open_search_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersToHclTerraform(struct!.amazonOpenSearchParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters",
    },
    athena_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersAthenaParametersToHclTerraform(struct!.athenaParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersAthenaParameters",
    },
    aurora_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersAuroraParametersToHclTerraform(struct!.auroraParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersAuroraParameters",
    },
    aurora_postgre_sql_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToHclTerraform(struct!.auroraPostgreSqlParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters",
    },
    databricks_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersDatabricksParametersToHclTerraform(struct!.databricksParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersDatabricksParameters",
    },
    maria_db_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersMariaDbParametersToHclTerraform(struct!.mariaDbParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters",
    },
    my_sql_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersMySqlParametersToHclTerraform(struct!.mySqlParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersMySqlParameters",
    },
    oracle_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersOracleParametersToHclTerraform(struct!.oracleParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersOracleParameters",
    },
    postgre_sql_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToHclTerraform(struct!.postgreSqlParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters",
    },
    presto_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersPrestoParametersToHclTerraform(struct!.prestoParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersPrestoParameters",
    },
    rds_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersRdsParametersToHclTerraform(struct!.rdsParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersRdsParameters",
    },
    redshift_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersRedshiftParametersToHclTerraform(struct!.redshiftParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters",
    },
    s3_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersS3ParametersToHclTerraform(struct!.s3Parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersS3Parameters",
    },
    s3_tables_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersS3TablesParametersToHclTerraform(struct!.s3TablesParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersS3TablesParameters",
    },
    snowflake_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToHclTerraform(struct!.snowflakeParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters",
    },
    spark_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersSparkParametersToHclTerraform(struct!.sparkParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersSparkParameters",
    },
    sql_server_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersSqlServerParametersToHclTerraform(struct!.sqlServerParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters",
    },
    starburst_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersStarburstParametersToHclTerraform(struct!.starburstParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersStarburstParameters",
    },
    teradata_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersTeradataParametersToHclTerraform(struct!.teradataParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersTeradataParameters",
    },
    trino_parameters: {
      value: quicksightDataSourceAlternateDataSourceParametersTrinoParametersToHclTerraform(struct!.trinoParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceAlternateDataSourceParametersTrinoParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceAlternateDataSourceParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDataSourceAlternateDataSourceParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonElasticsearchParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonElasticsearchParameters = this._amazonElasticsearchParameters?.internalValue;
    }
    if (this._amazonOpenSearchParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonOpenSearchParameters = this._amazonOpenSearchParameters?.internalValue;
    }
    if (this._athenaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaParameters = this._athenaParameters?.internalValue;
    }
    if (this._auroraParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraParameters = this._auroraParameters?.internalValue;
    }
    if (this._auroraPostgreSqlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraPostgreSqlParameters = this._auroraPostgreSqlParameters?.internalValue;
    }
    if (this._databricksParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksParameters = this._databricksParameters?.internalValue;
    }
    if (this._mariaDbParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDbParameters = this._mariaDbParameters?.internalValue;
    }
    if (this._mySqlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mySqlParameters = this._mySqlParameters?.internalValue;
    }
    if (this._oracleParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleParameters = this._oracleParameters?.internalValue;
    }
    if (this._postgreSqlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgreSqlParameters = this._postgreSqlParameters?.internalValue;
    }
    if (this._prestoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prestoParameters = this._prestoParameters?.internalValue;
    }
    if (this._rdsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsParameters = this._rdsParameters?.internalValue;
    }
    if (this._redshiftParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftParameters = this._redshiftParameters?.internalValue;
    }
    if (this._s3Parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Parameters = this._s3Parameters?.internalValue;
    }
    if (this._s3TablesParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3TablesParameters = this._s3TablesParameters?.internalValue;
    }
    if (this._snowflakeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeParameters = this._snowflakeParameters?.internalValue;
    }
    if (this._sparkParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkParameters = this._sparkParameters?.internalValue;
    }
    if (this._sqlServerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerParameters = this._sqlServerParameters?.internalValue;
    }
    if (this._starburstParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.starburstParameters = this._starburstParameters?.internalValue;
    }
    if (this._teradataParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teradataParameters = this._teradataParameters?.internalValue;
    }
    if (this._trinoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trinoParameters = this._trinoParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceAlternateDataSourceParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonElasticsearchParameters.internalValue = undefined;
      this._amazonOpenSearchParameters.internalValue = undefined;
      this._athenaParameters.internalValue = undefined;
      this._auroraParameters.internalValue = undefined;
      this._auroraPostgreSqlParameters.internalValue = undefined;
      this._databricksParameters.internalValue = undefined;
      this._mariaDbParameters.internalValue = undefined;
      this._mySqlParameters.internalValue = undefined;
      this._oracleParameters.internalValue = undefined;
      this._postgreSqlParameters.internalValue = undefined;
      this._prestoParameters.internalValue = undefined;
      this._rdsParameters.internalValue = undefined;
      this._redshiftParameters.internalValue = undefined;
      this._s3Parameters.internalValue = undefined;
      this._s3TablesParameters.internalValue = undefined;
      this._snowflakeParameters.internalValue = undefined;
      this._sparkParameters.internalValue = undefined;
      this._sqlServerParameters.internalValue = undefined;
      this._starburstParameters.internalValue = undefined;
      this._teradataParameters.internalValue = undefined;
      this._trinoParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonElasticsearchParameters.internalValue = value.amazonElasticsearchParameters;
      this._amazonOpenSearchParameters.internalValue = value.amazonOpenSearchParameters;
      this._athenaParameters.internalValue = value.athenaParameters;
      this._auroraParameters.internalValue = value.auroraParameters;
      this._auroraPostgreSqlParameters.internalValue = value.auroraPostgreSqlParameters;
      this._databricksParameters.internalValue = value.databricksParameters;
      this._mariaDbParameters.internalValue = value.mariaDbParameters;
      this._mySqlParameters.internalValue = value.mySqlParameters;
      this._oracleParameters.internalValue = value.oracleParameters;
      this._postgreSqlParameters.internalValue = value.postgreSqlParameters;
      this._prestoParameters.internalValue = value.prestoParameters;
      this._rdsParameters.internalValue = value.rdsParameters;
      this._redshiftParameters.internalValue = value.redshiftParameters;
      this._s3Parameters.internalValue = value.s3Parameters;
      this._s3TablesParameters.internalValue = value.s3TablesParameters;
      this._snowflakeParameters.internalValue = value.snowflakeParameters;
      this._sparkParameters.internalValue = value.sparkParameters;
      this._sqlServerParameters.internalValue = value.sqlServerParameters;
      this._starburstParameters.internalValue = value.starburstParameters;
      this._teradataParameters.internalValue = value.teradataParameters;
      this._trinoParameters.internalValue = value.trinoParameters;
    }
  }

  // amazon_elasticsearch_parameters - computed: true, optional: true, required: false
  private _amazonElasticsearchParameters = new QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersOutputReference(this, "amazon_elasticsearch_parameters");
  public get amazonElasticsearchParameters() {
    return this._amazonElasticsearchParameters;
  }
  public putAmazonElasticsearchParameters(value: QuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters) {
    this._amazonElasticsearchParameters.internalValue = value;
  }
  public resetAmazonElasticsearchParameters() {
    this._amazonElasticsearchParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonElasticsearchParametersInput() {
    return this._amazonElasticsearchParameters.internalValue;
  }

  // amazon_open_search_parameters - computed: true, optional: true, required: false
  private _amazonOpenSearchParameters = new QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersOutputReference(this, "amazon_open_search_parameters");
  public get amazonOpenSearchParameters() {
    return this._amazonOpenSearchParameters;
  }
  public putAmazonOpenSearchParameters(value: QuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters) {
    this._amazonOpenSearchParameters.internalValue = value;
  }
  public resetAmazonOpenSearchParameters() {
    this._amazonOpenSearchParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonOpenSearchParametersInput() {
    return this._amazonOpenSearchParameters.internalValue;
  }

  // athena_parameters - computed: true, optional: true, required: false
  private _athenaParameters = new QuicksightDataSourceAlternateDataSourceParametersAthenaParametersOutputReference(this, "athena_parameters");
  public get athenaParameters() {
    return this._athenaParameters;
  }
  public putAthenaParameters(value: QuicksightDataSourceAlternateDataSourceParametersAthenaParameters) {
    this._athenaParameters.internalValue = value;
  }
  public resetAthenaParameters() {
    this._athenaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaParametersInput() {
    return this._athenaParameters.internalValue;
  }

  // aurora_parameters - computed: true, optional: true, required: false
  private _auroraParameters = new QuicksightDataSourceAlternateDataSourceParametersAuroraParametersOutputReference(this, "aurora_parameters");
  public get auroraParameters() {
    return this._auroraParameters;
  }
  public putAuroraParameters(value: QuicksightDataSourceAlternateDataSourceParametersAuroraParameters) {
    this._auroraParameters.internalValue = value;
  }
  public resetAuroraParameters() {
    this._auroraParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraParametersInput() {
    return this._auroraParameters.internalValue;
  }

  // aurora_postgre_sql_parameters - computed: true, optional: true, required: false
  private _auroraPostgreSqlParameters = new QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersOutputReference(this, "aurora_postgre_sql_parameters");
  public get auroraPostgreSqlParameters() {
    return this._auroraPostgreSqlParameters;
  }
  public putAuroraPostgreSqlParameters(value: QuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters) {
    this._auroraPostgreSqlParameters.internalValue = value;
  }
  public resetAuroraPostgreSqlParameters() {
    this._auroraPostgreSqlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraPostgreSqlParametersInput() {
    return this._auroraPostgreSqlParameters.internalValue;
  }

  // databricks_parameters - computed: true, optional: true, required: false
  private _databricksParameters = new QuicksightDataSourceAlternateDataSourceParametersDatabricksParametersOutputReference(this, "databricks_parameters");
  public get databricksParameters() {
    return this._databricksParameters;
  }
  public putDatabricksParameters(value: QuicksightDataSourceAlternateDataSourceParametersDatabricksParameters) {
    this._databricksParameters.internalValue = value;
  }
  public resetDatabricksParameters() {
    this._databricksParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksParametersInput() {
    return this._databricksParameters.internalValue;
  }

  // maria_db_parameters - computed: true, optional: true, required: false
  private _mariaDbParameters = new QuicksightDataSourceAlternateDataSourceParametersMariaDbParametersOutputReference(this, "maria_db_parameters");
  public get mariaDbParameters() {
    return this._mariaDbParameters;
  }
  public putMariaDbParameters(value: QuicksightDataSourceAlternateDataSourceParametersMariaDbParameters) {
    this._mariaDbParameters.internalValue = value;
  }
  public resetMariaDbParameters() {
    this._mariaDbParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbParametersInput() {
    return this._mariaDbParameters.internalValue;
  }

  // my_sql_parameters - computed: true, optional: true, required: false
  private _mySqlParameters = new QuicksightDataSourceAlternateDataSourceParametersMySqlParametersOutputReference(this, "my_sql_parameters");
  public get mySqlParameters() {
    return this._mySqlParameters;
  }
  public putMySqlParameters(value: QuicksightDataSourceAlternateDataSourceParametersMySqlParameters) {
    this._mySqlParameters.internalValue = value;
  }
  public resetMySqlParameters() {
    this._mySqlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mySqlParametersInput() {
    return this._mySqlParameters.internalValue;
  }

  // oracle_parameters - computed: true, optional: true, required: false
  private _oracleParameters = new QuicksightDataSourceAlternateDataSourceParametersOracleParametersOutputReference(this, "oracle_parameters");
  public get oracleParameters() {
    return this._oracleParameters;
  }
  public putOracleParameters(value: QuicksightDataSourceAlternateDataSourceParametersOracleParameters) {
    this._oracleParameters.internalValue = value;
  }
  public resetOracleParameters() {
    this._oracleParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleParametersInput() {
    return this._oracleParameters.internalValue;
  }

  // postgre_sql_parameters - computed: true, optional: true, required: false
  private _postgreSqlParameters = new QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersOutputReference(this, "postgre_sql_parameters");
  public get postgreSqlParameters() {
    return this._postgreSqlParameters;
  }
  public putPostgreSqlParameters(value: QuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters) {
    this._postgreSqlParameters.internalValue = value;
  }
  public resetPostgreSqlParameters() {
    this._postgreSqlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgreSqlParametersInput() {
    return this._postgreSqlParameters.internalValue;
  }

  // presto_parameters - computed: true, optional: true, required: false
  private _prestoParameters = new QuicksightDataSourceAlternateDataSourceParametersPrestoParametersOutputReference(this, "presto_parameters");
  public get prestoParameters() {
    return this._prestoParameters;
  }
  public putPrestoParameters(value: QuicksightDataSourceAlternateDataSourceParametersPrestoParameters) {
    this._prestoParameters.internalValue = value;
  }
  public resetPrestoParameters() {
    this._prestoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prestoParametersInput() {
    return this._prestoParameters.internalValue;
  }

  // rds_parameters - computed: true, optional: true, required: false
  private _rdsParameters = new QuicksightDataSourceAlternateDataSourceParametersRdsParametersOutputReference(this, "rds_parameters");
  public get rdsParameters() {
    return this._rdsParameters;
  }
  public putRdsParameters(value: QuicksightDataSourceAlternateDataSourceParametersRdsParameters) {
    this._rdsParameters.internalValue = value;
  }
  public resetRdsParameters() {
    this._rdsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsParametersInput() {
    return this._rdsParameters.internalValue;
  }

  // redshift_parameters - computed: true, optional: true, required: false
  private _redshiftParameters = new QuicksightDataSourceAlternateDataSourceParametersRedshiftParametersOutputReference(this, "redshift_parameters");
  public get redshiftParameters() {
    return this._redshiftParameters;
  }
  public putRedshiftParameters(value: QuicksightDataSourceAlternateDataSourceParametersRedshiftParameters) {
    this._redshiftParameters.internalValue = value;
  }
  public resetRedshiftParameters() {
    this._redshiftParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftParametersInput() {
    return this._redshiftParameters.internalValue;
  }

  // s3_parameters - computed: true, optional: true, required: false
  private _s3Parameters = new QuicksightDataSourceAlternateDataSourceParametersS3ParametersOutputReference(this, "s3_parameters");
  public get s3Parameters() {
    return this._s3Parameters;
  }
  public putS3Parameters(value: QuicksightDataSourceAlternateDataSourceParametersS3Parameters) {
    this._s3Parameters.internalValue = value;
  }
  public resetS3Parameters() {
    this._s3Parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ParametersInput() {
    return this._s3Parameters.internalValue;
  }

  // s3_tables_parameters - computed: true, optional: true, required: false
  private _s3TablesParameters = new QuicksightDataSourceAlternateDataSourceParametersS3TablesParametersOutputReference(this, "s3_tables_parameters");
  public get s3TablesParameters() {
    return this._s3TablesParameters;
  }
  public putS3TablesParameters(value: QuicksightDataSourceAlternateDataSourceParametersS3TablesParameters) {
    this._s3TablesParameters.internalValue = value;
  }
  public resetS3TablesParameters() {
    this._s3TablesParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3TablesParametersInput() {
    return this._s3TablesParameters.internalValue;
  }

  // snowflake_parameters - computed: true, optional: true, required: false
  private _snowflakeParameters = new QuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOutputReference(this, "snowflake_parameters");
  public get snowflakeParameters() {
    return this._snowflakeParameters;
  }
  public putSnowflakeParameters(value: QuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters) {
    this._snowflakeParameters.internalValue = value;
  }
  public resetSnowflakeParameters() {
    this._snowflakeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeParametersInput() {
    return this._snowflakeParameters.internalValue;
  }

  // spark_parameters - computed: true, optional: true, required: false
  private _sparkParameters = new QuicksightDataSourceAlternateDataSourceParametersSparkParametersOutputReference(this, "spark_parameters");
  public get sparkParameters() {
    return this._sparkParameters;
  }
  public putSparkParameters(value: QuicksightDataSourceAlternateDataSourceParametersSparkParameters) {
    this._sparkParameters.internalValue = value;
  }
  public resetSparkParameters() {
    this._sparkParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkParametersInput() {
    return this._sparkParameters.internalValue;
  }

  // sql_server_parameters - computed: true, optional: true, required: false
  private _sqlServerParameters = new QuicksightDataSourceAlternateDataSourceParametersSqlServerParametersOutputReference(this, "sql_server_parameters");
  public get sqlServerParameters() {
    return this._sqlServerParameters;
  }
  public putSqlServerParameters(value: QuicksightDataSourceAlternateDataSourceParametersSqlServerParameters) {
    this._sqlServerParameters.internalValue = value;
  }
  public resetSqlServerParameters() {
    this._sqlServerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerParametersInput() {
    return this._sqlServerParameters.internalValue;
  }

  // starburst_parameters - computed: true, optional: true, required: false
  private _starburstParameters = new QuicksightDataSourceAlternateDataSourceParametersStarburstParametersOutputReference(this, "starburst_parameters");
  public get starburstParameters() {
    return this._starburstParameters;
  }
  public putStarburstParameters(value: QuicksightDataSourceAlternateDataSourceParametersStarburstParameters) {
    this._starburstParameters.internalValue = value;
  }
  public resetStarburstParameters() {
    this._starburstParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starburstParametersInput() {
    return this._starburstParameters.internalValue;
  }

  // teradata_parameters - computed: true, optional: true, required: false
  private _teradataParameters = new QuicksightDataSourceAlternateDataSourceParametersTeradataParametersOutputReference(this, "teradata_parameters");
  public get teradataParameters() {
    return this._teradataParameters;
  }
  public putTeradataParameters(value: QuicksightDataSourceAlternateDataSourceParametersTeradataParameters) {
    this._teradataParameters.internalValue = value;
  }
  public resetTeradataParameters() {
    this._teradataParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teradataParametersInput() {
    return this._teradataParameters.internalValue;
  }

  // trino_parameters - computed: true, optional: true, required: false
  private _trinoParameters = new QuicksightDataSourceAlternateDataSourceParametersTrinoParametersOutputReference(this, "trino_parameters");
  public get trinoParameters() {
    return this._trinoParameters;
  }
  public putTrinoParameters(value: QuicksightDataSourceAlternateDataSourceParametersTrinoParameters) {
    this._trinoParameters.internalValue = value;
  }
  public resetTrinoParameters() {
    this._trinoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trinoParametersInput() {
    return this._trinoParameters.internalValue;
  }
}

export class QuicksightDataSourceAlternateDataSourceParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightDataSourceAlternateDataSourceParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDataSourceAlternateDataSourceParametersOutputReference {
    return new QuicksightDataSourceAlternateDataSourceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters {
  /**
  * <p>The OpenSearch domain.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#domain QuicksightDataSource#domain}
  */
  readonly domain?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters {
  /**
  * <p>The OpenSearch domain.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#domain QuicksightDataSource#domain}
  */
  readonly domain?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration {
  /**
  * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#enable_identity_propagation QuicksightDataSource#enable_identity_propagation}
  */
  readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_identity_propagation: {
      value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdentityPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = value.enableIdentityPropagation;
    }
  }

  // enable_identity_propagation - computed: true, optional: true, required: false
  private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
  public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
    this._enableIdentityPropagation = value;
  }
  public resetEnableIdentityPropagation() {
    this._enableIdentityPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentityPropagationInput() {
    return this._enableIdentityPropagation;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters {
  /**
  * <p>The parameters for an IAM Identity Center configuration.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_center_configuration QuicksightDataSource#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration;
  /**
  * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * <p>The workgroup that Amazon Athena uses.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#work_group QuicksightDataSource#work_group}
  */
  readonly workGroup?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center_configuration: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToTerraform(struct!.identityCenterConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    work_group: cdktn.stringToTerraform(struct!.workGroup),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center_configuration: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToHclTerraform(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group: {
      value: cdktn.stringToHclTerraform(struct!.workGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityCenterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._workGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroup = this._workGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityCenterConfiguration.internalValue = undefined;
      this._roleArn = undefined;
      this._workGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
      this._roleArn = value.roleArn;
      this._workGroup = value.workGroup;
    }
  }

  // identity_center_configuration - computed: true, optional: true, required: false
  private _identityCenterConfiguration = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration) {
    this._identityCenterConfiguration.internalValue = value;
  }
  public resetIdentityCenterConfiguration() {
    this._identityCenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigurationInput() {
    return this._identityCenterConfiguration.internalValue;
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

  // work_group - computed: true, optional: true, required: false
  private _workGroup?: string; 
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters {
  /**
  * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters {
  /**
  * <p>The host name of the Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port for the Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
  /**
  * <p>The HTTP path of the Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#sql_endpoint_path QuicksightDataSource#sql_endpoint_path}
  */
  readonly sqlEndpointPath?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
    sql_endpoint_path: cdktn.stringToTerraform(struct!.sqlEndpointPath),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sql_endpoint_path: {
      value: cdktn.stringToHclTerraform(struct!.sqlEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sqlEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlEndpointPath = this._sqlEndpointPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._sqlEndpointPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._sqlEndpointPath = value.sqlEndpointPath;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sql_endpoint_path - computed: true, optional: true, required: false
  private _sqlEndpointPath?: string; 
  public get sqlEndpointPath() {
    return this.getStringAttribute('sql_endpoint_path');
  }
  public set sqlEndpointPath(value: string) {
    this._sqlEndpointPath = value;
  }
  public resetSqlEndpointPath() {
    this._sqlEndpointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlEndpointPathInput() {
    return this._sqlEndpointPath;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters {
  /**
  * <p>The database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>An Oracle host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#use_service_name QuicksightDataSource#use_service_name}
  */
  readonly useServiceName?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
    use_service_name: cdktn.booleanToTerraform(struct!.useServiceName),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_service_name: {
      value: cdktn.booleanToHclTerraform(struct!.useServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._useServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServiceName = this._useServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
      this._useServiceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
      this._useServiceName = value.useServiceName;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // use_service_name - computed: true, optional: true, required: false
  private _useServiceName?: boolean | cdktn.IResolvable; 
  public get useServiceName() {
    return this.getBooleanAttribute('use_service_name');
  }
  public set useServiceName(value: boolean | cdktn.IResolvable) {
    this._useServiceName = value;
  }
  public resetUseServiceName() {
    this._useServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceNameInput() {
    return this._useServiceName;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters {
  /**
  * <p>Catalog.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Instance ID.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#instance_id QuicksightDataSource#instance_id}
  */
  readonly instanceId?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._instanceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._instanceId = value.instanceId;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters {
  /**
  * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#auto_create_database_user QuicksightDataSource#auto_create_database_user}
  */
  readonly autoCreateDatabaseUser?: boolean | cdktn.IResolvable;
  /**
  * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_groups QuicksightDataSource#database_groups}
  */
  readonly databaseGroups?: string[];
  /**
  * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_user QuicksightDataSource#database_user}
  */
  readonly databaseUser?: string;
  /**
  * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_create_database_user: cdktn.booleanToTerraform(struct!.autoCreateDatabaseUser),
    database_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseGroups),
    database_user: cdktn.stringToTerraform(struct!.databaseUser),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_create_database_user: {
      value: cdktn.booleanToHclTerraform(struct!.autoCreateDatabaseUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    database_user: {
      value: cdktn.stringToHclTerraform(struct!.databaseUser),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateDatabaseUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateDatabaseUser = this._autoCreateDatabaseUser;
    }
    if (this._databaseGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseGroups = this._databaseGroups;
    }
    if (this._databaseUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUser = this._databaseUser;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoCreateDatabaseUser = undefined;
      this._databaseGroups = undefined;
      this._databaseUser = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoCreateDatabaseUser = value.autoCreateDatabaseUser;
      this._databaseGroups = value.databaseGroups;
      this._databaseUser = value.databaseUser;
      this._roleArn = value.roleArn;
    }
  }

  // auto_create_database_user - computed: true, optional: true, required: false
  private _autoCreateDatabaseUser?: boolean | cdktn.IResolvable; 
  public get autoCreateDatabaseUser() {
    return this.getBooleanAttribute('auto_create_database_user');
  }
  public set autoCreateDatabaseUser(value: boolean | cdktn.IResolvable) {
    this._autoCreateDatabaseUser = value;
  }
  public resetAutoCreateDatabaseUser() {
    this._autoCreateDatabaseUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDatabaseUserInput() {
    return this._autoCreateDatabaseUser;
  }

  // database_groups - computed: true, optional: true, required: false
  private _databaseGroups?: string[]; 
  public get databaseGroups() {
    return this.getListAttribute('database_groups');
  }
  public set databaseGroups(value: string[]) {
    this._databaseGroups = value;
  }
  public resetDatabaseGroups() {
    this._databaseGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseGroupsInput() {
    return this._databaseGroups;
  }

  // database_user - computed: true, optional: true, required: false
  private _databaseUser?: string; 
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }
  public set databaseUser(value: string) {
    this._databaseUser = value;
  }
  public resetDatabaseUser() {
    this._databaseUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserInput() {
    return this._databaseUser;
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
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration {
  /**
  * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#enable_identity_propagation QuicksightDataSource#enable_identity_propagation}
  */
  readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_identity_propagation: {
      value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdentityPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = value.enableIdentityPropagation;
    }
  }

  // enable_identity_propagation - computed: true, optional: true, required: false
  private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
  public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
    this._enableIdentityPropagation = value;
  }
  public resetEnableIdentityPropagation() {
    this._enableIdentityPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentityPropagationInput() {
    return this._enableIdentityPropagation;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters {
  /**
  * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
  *             provided.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
  *                <code>GetClusterCredentials</code>
  *             </a>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#iam_parameters QuicksightDataSource#iam_parameters}
  */
  readonly iamParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters;
  /**
  * <p>The parameters for an IAM Identity Center configuration.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_center_configuration QuicksightDataSource#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration;
  /**
  * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    iam_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersToTerraform(struct!.iamParameters),
    identity_center_configuration: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToTerraform(struct!.identityCenterConfiguration),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersToHclTerraform(struct!.iamParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters",
    },
    identity_center_configuration: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToHclTerraform(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._iamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamParameters = this._iamParameters?.internalValue;
    }
    if (this._identityCenterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._database = undefined;
      this._host = undefined;
      this._iamParameters.internalValue = undefined;
      this._identityCenterConfiguration.internalValue = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._database = value.database;
      this._host = value.host;
      this._iamParameters.internalValue = value.iamParameters;
      this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
      this._port = value.port;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // iam_parameters - computed: true, optional: true, required: false
  private _iamParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersOutputReference(this, "iam_parameters");
  public get iamParameters() {
    return this._iamParameters;
  }
  public putIamParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters) {
    this._iamParameters.internalValue = value;
  }
  public resetIamParameters() {
    this._iamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamParametersInput() {
    return this._iamParameters.internalValue;
  }

  // identity_center_configuration - computed: true, optional: true, required: false
  private _identityCenterConfiguration = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration) {
    this._identityCenterConfiguration.internalValue = value;
  }
  public resetIdentityCenterConfiguration() {
    this._identityCenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigurationInput() {
    return this._identityCenterConfiguration.internalValue;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation {
  /**
  * <p>Amazon S3 bucket.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#bucket QuicksightDataSource#bucket}
  */
  readonly bucket?: string;
  /**
  * <p>Amazon S3 key that identifies an object.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#key QuicksightDataSource#key}
  */
  readonly key?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters {
  /**
  * <p>Amazon S3 manifest file location.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}
  */
  readonly manifestFileLocation?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation;
  /**
  * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    manifest_file_location: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct!.manifestFileLocation),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    manifest_file_location: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToHclTerraform(struct!.manifestFileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestFileLocation = this._manifestFileLocation?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifestFileLocation.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifestFileLocation.internalValue = value.manifestFileLocation;
      this._roleArn = value.roleArn;
    }
  }

  // manifest_file_location - computed: true, optional: true, required: false
  private _manifestFileLocation = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationOutputReference(this, "manifest_file_location");
  public get manifestFileLocation() {
    return this._manifestFileLocation;
  }
  public putManifestFileLocation(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation) {
    this._manifestFileLocation.internalValue = value;
  }
  public resetManifestFileLocation() {
    this._manifestFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestFileLocationInput() {
    return this._manifestFileLocation.internalValue;
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
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#table_bucket_arn QuicksightDataSource#table_bucket_arn}
  */
  readonly tableBucketArn?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_bucket_arn: cdktn.stringToTerraform(struct!.tableBucketArn),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.tableBucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableBucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableBucketArn = this._tableBucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableBucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableBucketArn = value.tableBucketArn;
    }
  }

  // table_bucket_arn - computed: true, optional: true, required: false
  private _tableBucketArn?: string; 
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
  public set tableBucketArn(value: string) {
    this._tableBucketArn = value;
  }
  public resetTableBucketArn() {
    this._tableBucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableBucketArnInput() {
    return this._tableBucketArn;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties {
  /**
  * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcConnectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = value.vpcConnectionArn;
    }
  }

  // vpc_connection_arn - computed: true, optional: true, required: false
  private _vpcConnectionArn?: string; 
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
  public set vpcConnectionArn(value: string) {
    this._vpcConnectionArn = value;
  }
  public resetVpcConnectionArn() {
    this._vpcConnectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionArnInput() {
    return this._vpcConnectionArn;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_resource_uri QuicksightDataSource#identity_provider_resource_uri}
  */
  readonly identityProviderResourceUri?: string;
  /**
  * <p>VPC connection properties.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties QuicksightDataSource#identity_provider_vpc_connection_properties}
  */
  readonly identityProviderVpcConnectionProperties?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_scope QuicksightDataSource#o_auth_scope}
  */
  readonly oAuthScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#token_provider_url QuicksightDataSource#token_provider_url}
  */
  readonly tokenProviderUrl?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
    identity_provider_vpc_connection_properties: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct!.identityProviderVpcConnectionProperties),
    o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
    token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_provider_resource_uri: {
      value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_vpc_connection_properties: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct!.identityProviderVpcConnectionProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties",
    },
    o_auth_scope: {
      value: cdktn.stringToHclTerraform(struct!.oAuthScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_provider_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderResourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
    }
    if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
    }
    if (this._oAuthScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthScope = this._oAuthScope;
    }
    if (this._tokenProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = undefined;
      this._identityProviderVpcConnectionProperties.internalValue = undefined;
      this._oAuthScope = undefined;
      this._tokenProviderUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = value.identityProviderResourceUri;
      this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
      this._oAuthScope = value.oAuthScope;
      this._tokenProviderUrl = value.tokenProviderUrl;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: true, required: false
  private _identityProviderResourceUri?: string; 
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }
  public set identityProviderResourceUri(value: string) {
    this._identityProviderResourceUri = value;
  }
  public resetIdentityProviderResourceUri() {
    this._identityProviderResourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderResourceUriInput() {
    return this._identityProviderResourceUri;
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
  private _identityProviderVpcConnectionProperties = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }
  public putIdentityProviderVpcConnectionProperties(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties) {
    this._identityProviderVpcConnectionProperties.internalValue = value;
  }
  public resetIdentityProviderVpcConnectionProperties() {
    this._identityProviderVpcConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderVpcConnectionPropertiesInput() {
    return this._identityProviderVpcConnectionProperties.internalValue;
  }

  // o_auth_scope - computed: true, optional: true, required: false
  private _oAuthScope?: string; 
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }
  public set oAuthScope(value: string) {
    this._oAuthScope = value;
  }
  public resetOAuthScope() {
    this._oAuthScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthScopeInput() {
    return this._oAuthScope;
  }

  // token_provider_url - computed: true, optional: true, required: false
  private _tokenProviderUrl?: string; 
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
  public set tokenProviderUrl(value: string) {
    this._tokenProviderUrl = value;
  }
  public resetTokenProviderUrl() {
    this._tokenProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenProviderUrlInput() {
    return this._tokenProviderUrl;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#authentication_type QuicksightDataSource#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_access_control_role QuicksightDataSource#database_access_control_role}
  */
  readonly databaseAccessControlRole?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_parameters QuicksightDataSource#o_auth_parameters}
  */
  readonly oAuthParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters;
  /**
  * <p>Warehouse.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#warehouse QuicksightDataSource#warehouse}
  */
  readonly warehouse?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    database: cdktn.stringToTerraform(struct!.database),
    database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
    host: cdktn.stringToTerraform(struct!.host),
    o_auth_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersToTerraform(struct!.oAuthParameters),
    warehouse: cdktn.stringToTerraform(struct!.warehouse),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_access_control_role: {
      value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersToHclTerraform(struct!.oAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters",
    },
    warehouse: {
      value: cdktn.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databaseAccessControlRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._oAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._database = undefined;
      this._databaseAccessControlRole = undefined;
      this._host = undefined;
      this._oAuthParameters.internalValue = undefined;
      this._warehouse = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._database = value.database;
      this._databaseAccessControlRole = value.databaseAccessControlRole;
      this._host = value.host;
      this._oAuthParameters.internalValue = value.oAuthParameters;
      this._warehouse = value.warehouse;
    }
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // database_access_control_role - computed: true, optional: true, required: false
  private _databaseAccessControlRole?: string; 
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }
  public set databaseAccessControlRole(value: string) {
    this._databaseAccessControlRole = value;
  }
  public resetDatabaseAccessControlRole() {
    this._databaseAccessControlRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseAccessControlRoleInput() {
    return this._databaseAccessControlRole;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // o_auth_parameters - computed: true, optional: true, required: false
  private _oAuthParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }
  public putOAuthParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters) {
    this._oAuthParameters.internalValue = value;
  }
  public resetOAuthParameters() {
    this._oAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthParametersInput() {
    return this._oAuthParameters.internalValue;
  }

  // warehouse - computed: true, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters {
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties {
  /**
  * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcConnectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = value.vpcConnectionArn;
    }
  }

  // vpc_connection_arn - computed: true, optional: true, required: false
  private _vpcConnectionArn?: string; 
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
  public set vpcConnectionArn(value: string) {
    this._vpcConnectionArn = value;
  }
  public resetVpcConnectionArn() {
    this._vpcConnectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionArnInput() {
    return this._vpcConnectionArn;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_resource_uri QuicksightDataSource#identity_provider_resource_uri}
  */
  readonly identityProviderResourceUri?: string;
  /**
  * <p>VPC connection properties.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties QuicksightDataSource#identity_provider_vpc_connection_properties}
  */
  readonly identityProviderVpcConnectionProperties?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_scope QuicksightDataSource#o_auth_scope}
  */
  readonly oAuthScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#token_provider_url QuicksightDataSource#token_provider_url}
  */
  readonly tokenProviderUrl?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
    identity_provider_vpc_connection_properties: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct!.identityProviderVpcConnectionProperties),
    o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
    token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_provider_resource_uri: {
      value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_vpc_connection_properties: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct!.identityProviderVpcConnectionProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties",
    },
    o_auth_scope: {
      value: cdktn.stringToHclTerraform(struct!.oAuthScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_provider_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderResourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
    }
    if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
    }
    if (this._oAuthScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthScope = this._oAuthScope;
    }
    if (this._tokenProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = undefined;
      this._identityProviderVpcConnectionProperties.internalValue = undefined;
      this._oAuthScope = undefined;
      this._tokenProviderUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = value.identityProviderResourceUri;
      this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
      this._oAuthScope = value.oAuthScope;
      this._tokenProviderUrl = value.tokenProviderUrl;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: true, required: false
  private _identityProviderResourceUri?: string; 
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }
  public set identityProviderResourceUri(value: string) {
    this._identityProviderResourceUri = value;
  }
  public resetIdentityProviderResourceUri() {
    this._identityProviderResourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderResourceUriInput() {
    return this._identityProviderResourceUri;
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
  private _identityProviderVpcConnectionProperties = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }
  public putIdentityProviderVpcConnectionProperties(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties) {
    this._identityProviderVpcConnectionProperties.internalValue = value;
  }
  public resetIdentityProviderVpcConnectionProperties() {
    this._identityProviderVpcConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderVpcConnectionPropertiesInput() {
    return this._identityProviderVpcConnectionProperties.internalValue;
  }

  // o_auth_scope - computed: true, optional: true, required: false
  private _oAuthScope?: string; 
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }
  public set oAuthScope(value: string) {
    this._oAuthScope = value;
  }
  public resetOAuthScope() {
    this._oAuthScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthScopeInput() {
    return this._oAuthScope;
  }

  // token_provider_url - computed: true, optional: true, required: false
  private _tokenProviderUrl?: string; 
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
  public set tokenProviderUrl(value: string) {
    this._tokenProviderUrl = value;
  }
  public resetTokenProviderUrl() {
    this._tokenProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenProviderUrlInput() {
    return this._tokenProviderUrl;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#authentication_type QuicksightDataSource#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * <p>The catalog name for the Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_access_control_role QuicksightDataSource#database_access_control_role}
  */
  readonly databaseAccessControlRole?: string;
  /**
  * <p>The host name of the Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_parameters QuicksightDataSource#o_auth_parameters}
  */
  readonly oAuthParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters;
  /**
  * <p>The port for the Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#product_type QuicksightDataSource#product_type}
  */
  readonly productType?: string;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    catalog: cdktn.stringToTerraform(struct!.catalog),
    database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
    host: cdktn.stringToTerraform(struct!.host),
    o_auth_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersToTerraform(struct!.oAuthParameters),
    port: cdktn.numberToTerraform(struct!.port),
    product_type: cdktn.stringToTerraform(struct!.productType),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_access_control_role: {
      value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersToHclTerraform(struct!.oAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    product_type: {
      value: cdktn.stringToHclTerraform(struct!.productType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._databaseAccessControlRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._oAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._productType !== undefined) {
      hasAnyValues = true;
      internalValueResult.productType = this._productType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._catalog = undefined;
      this._databaseAccessControlRole = undefined;
      this._host = undefined;
      this._oAuthParameters.internalValue = undefined;
      this._port = undefined;
      this._productType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._catalog = value.catalog;
      this._databaseAccessControlRole = value.databaseAccessControlRole;
      this._host = value.host;
      this._oAuthParameters.internalValue = value.oAuthParameters;
      this._port = value.port;
      this._productType = value.productType;
    }
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // database_access_control_role - computed: true, optional: true, required: false
  private _databaseAccessControlRole?: string; 
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }
  public set databaseAccessControlRole(value: string) {
    this._databaseAccessControlRole = value;
  }
  public resetDatabaseAccessControlRole() {
    this._databaseAccessControlRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseAccessControlRoleInput() {
    return this._databaseAccessControlRole;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // o_auth_parameters - computed: true, optional: true, required: false
  private _oAuthParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }
  public putOAuthParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters) {
    this._oAuthParameters.internalValue = value;
  }
  public resetOAuthParameters() {
    this._oAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthParametersInput() {
    return this._oAuthParameters.internalValue;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // product_type - computed: true, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters {
  /**
  * <p>The catalog name for the Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog?: string;
  /**
  * <p>The host name of the Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port for the Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters {
  /**
  * <p>The parameters for OpenSearch.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#amazon_elasticsearch_parameters QuicksightDataSource#amazon_elasticsearch_parameters}
  */
  readonly amazonElasticsearchParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters;
  /**
  * <p>The parameters for OpenSearch.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#amazon_open_search_parameters QuicksightDataSource#amazon_open_search_parameters}
  */
  readonly amazonOpenSearchParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters;
  /**
  * <p>Parameters for Amazon Athena.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#athena_parameters QuicksightDataSource#athena_parameters}
  */
  readonly athenaParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters;
  /**
  * <p>Parameters for Amazon Aurora.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#aurora_parameters QuicksightDataSource#aurora_parameters}
  */
  readonly auroraParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters;
  /**
  * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#aurora_postgre_sql_parameters QuicksightDataSource#aurora_postgre_sql_parameters}
  */
  readonly auroraPostgreSqlParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters;
  /**
  * <p>The parameters that are required to connect to a Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#databricks_parameters QuicksightDataSource#databricks_parameters}
  */
  readonly databricksParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters;
  /**
  * <p>The parameters for MariaDB.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#maria_db_parameters QuicksightDataSource#maria_db_parameters}
  */
  readonly mariaDbParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters;
  /**
  * <p>The parameters for MySQL.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#my_sql_parameters QuicksightDataSource#my_sql_parameters}
  */
  readonly mySqlParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters;
  /**
  * <p>The parameters for Oracle.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#oracle_parameters QuicksightDataSource#oracle_parameters}
  */
  readonly oracleParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters;
  /**
  * <p>The parameters for PostgreSQL.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#postgre_sql_parameters QuicksightDataSource#postgre_sql_parameters}
  */
  readonly postgreSqlParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters;
  /**
  * <p>The parameters for Presto.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#presto_parameters QuicksightDataSource#presto_parameters}
  */
  readonly prestoParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters;
  /**
  * <p>The parameters for Amazon RDS.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#rds_parameters QuicksightDataSource#rds_parameters}
  */
  readonly rdsParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters;
  /**
  * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
  *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#redshift_parameters QuicksightDataSource#redshift_parameters}
  */
  readonly redshiftParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters;
  /**
  * <p>The parameters for S3.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#s3_parameters QuicksightDataSource#s3_parameters}
  */
  readonly s3Parameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#s3_tables_parameters QuicksightDataSource#s3_tables_parameters}
  */
  readonly s3TablesParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters;
  /**
  * <p>The parameters for Snowflake.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#snowflake_parameters QuicksightDataSource#snowflake_parameters}
  */
  readonly snowflakeParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters;
  /**
  * <p>The parameters for Spark.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#spark_parameters QuicksightDataSource#spark_parameters}
  */
  readonly sparkParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters;
  /**
  * <p>The parameters for SQL Server.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#sql_server_parameters QuicksightDataSource#sql_server_parameters}
  */
  readonly sqlServerParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters;
  /**
  * <p>The parameters that are required to connect to a Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#starburst_parameters QuicksightDataSource#starburst_parameters}
  */
  readonly starburstParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters;
  /**
  * <p>The parameters for Teradata.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#teradata_parameters QuicksightDataSource#teradata_parameters}
  */
  readonly teradataParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters;
  /**
  * <p>The parameters that are required to connect to a Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#trino_parameters QuicksightDataSource#trino_parameters}
  */
  readonly trinoParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters;
}

export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amazon_elasticsearch_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct!.amazonElasticsearchParameters),
    amazon_open_search_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersToTerraform(struct!.amazonOpenSearchParameters),
    athena_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct!.athenaParameters),
    aurora_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct!.auroraParameters),
    aurora_postgre_sql_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct!.auroraPostgreSqlParameters),
    databricks_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersToTerraform(struct!.databricksParameters),
    maria_db_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct!.mariaDbParameters),
    my_sql_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct!.mySqlParameters),
    oracle_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct!.oracleParameters),
    postgre_sql_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct!.postgreSqlParameters),
    presto_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct!.prestoParameters),
    rds_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct!.rdsParameters),
    redshift_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct!.redshiftParameters),
    s3_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct!.s3Parameters),
    s3_tables_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersToTerraform(struct!.s3TablesParameters),
    snowflake_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct!.snowflakeParameters),
    spark_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct!.sparkParameters),
    sql_server_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct!.sqlServerParameters),
    starburst_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersToTerraform(struct!.starburstParameters),
    teradata_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct!.teradataParameters),
    trino_parameters: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersToTerraform(struct!.trinoParameters),
  }
}


export function quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amazon_elasticsearch_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToHclTerraform(struct!.amazonElasticsearchParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters",
    },
    amazon_open_search_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersToHclTerraform(struct!.amazonOpenSearchParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters",
    },
    athena_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToHclTerraform(struct!.athenaParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters",
    },
    aurora_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToHclTerraform(struct!.auroraParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters",
    },
    aurora_postgre_sql_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToHclTerraform(struct!.auroraPostgreSqlParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters",
    },
    databricks_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersToHclTerraform(struct!.databricksParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters",
    },
    maria_db_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToHclTerraform(struct!.mariaDbParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters",
    },
    my_sql_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToHclTerraform(struct!.mySqlParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters",
    },
    oracle_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToHclTerraform(struct!.oracleParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters",
    },
    postgre_sql_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToHclTerraform(struct!.postgreSqlParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters",
    },
    presto_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToHclTerraform(struct!.prestoParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters",
    },
    rds_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToHclTerraform(struct!.rdsParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters",
    },
    redshift_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToHclTerraform(struct!.redshiftParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters",
    },
    s3_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToHclTerraform(struct!.s3Parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters",
    },
    s3_tables_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersToHclTerraform(struct!.s3TablesParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters",
    },
    snowflake_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToHclTerraform(struct!.snowflakeParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters",
    },
    spark_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToHclTerraform(struct!.sparkParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters",
    },
    sql_server_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToHclTerraform(struct!.sqlServerParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters",
    },
    starburst_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersToHclTerraform(struct!.starburstParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters",
    },
    teradata_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToHclTerraform(struct!.teradataParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters",
    },
    trino_parameters: {
      value: quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersToHclTerraform(struct!.trinoParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonElasticsearchParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonElasticsearchParameters = this._amazonElasticsearchParameters?.internalValue;
    }
    if (this._amazonOpenSearchParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonOpenSearchParameters = this._amazonOpenSearchParameters?.internalValue;
    }
    if (this._athenaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaParameters = this._athenaParameters?.internalValue;
    }
    if (this._auroraParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraParameters = this._auroraParameters?.internalValue;
    }
    if (this._auroraPostgreSqlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraPostgreSqlParameters = this._auroraPostgreSqlParameters?.internalValue;
    }
    if (this._databricksParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksParameters = this._databricksParameters?.internalValue;
    }
    if (this._mariaDbParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDbParameters = this._mariaDbParameters?.internalValue;
    }
    if (this._mySqlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mySqlParameters = this._mySqlParameters?.internalValue;
    }
    if (this._oracleParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleParameters = this._oracleParameters?.internalValue;
    }
    if (this._postgreSqlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgreSqlParameters = this._postgreSqlParameters?.internalValue;
    }
    if (this._prestoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prestoParameters = this._prestoParameters?.internalValue;
    }
    if (this._rdsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsParameters = this._rdsParameters?.internalValue;
    }
    if (this._redshiftParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftParameters = this._redshiftParameters?.internalValue;
    }
    if (this._s3Parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Parameters = this._s3Parameters?.internalValue;
    }
    if (this._s3TablesParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3TablesParameters = this._s3TablesParameters?.internalValue;
    }
    if (this._snowflakeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeParameters = this._snowflakeParameters?.internalValue;
    }
    if (this._sparkParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkParameters = this._sparkParameters?.internalValue;
    }
    if (this._sqlServerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerParameters = this._sqlServerParameters?.internalValue;
    }
    if (this._starburstParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.starburstParameters = this._starburstParameters?.internalValue;
    }
    if (this._teradataParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teradataParameters = this._teradataParameters?.internalValue;
    }
    if (this._trinoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trinoParameters = this._trinoParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonElasticsearchParameters.internalValue = undefined;
      this._amazonOpenSearchParameters.internalValue = undefined;
      this._athenaParameters.internalValue = undefined;
      this._auroraParameters.internalValue = undefined;
      this._auroraPostgreSqlParameters.internalValue = undefined;
      this._databricksParameters.internalValue = undefined;
      this._mariaDbParameters.internalValue = undefined;
      this._mySqlParameters.internalValue = undefined;
      this._oracleParameters.internalValue = undefined;
      this._postgreSqlParameters.internalValue = undefined;
      this._prestoParameters.internalValue = undefined;
      this._rdsParameters.internalValue = undefined;
      this._redshiftParameters.internalValue = undefined;
      this._s3Parameters.internalValue = undefined;
      this._s3TablesParameters.internalValue = undefined;
      this._snowflakeParameters.internalValue = undefined;
      this._sparkParameters.internalValue = undefined;
      this._sqlServerParameters.internalValue = undefined;
      this._starburstParameters.internalValue = undefined;
      this._teradataParameters.internalValue = undefined;
      this._trinoParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonElasticsearchParameters.internalValue = value.amazonElasticsearchParameters;
      this._amazonOpenSearchParameters.internalValue = value.amazonOpenSearchParameters;
      this._athenaParameters.internalValue = value.athenaParameters;
      this._auroraParameters.internalValue = value.auroraParameters;
      this._auroraPostgreSqlParameters.internalValue = value.auroraPostgreSqlParameters;
      this._databricksParameters.internalValue = value.databricksParameters;
      this._mariaDbParameters.internalValue = value.mariaDbParameters;
      this._mySqlParameters.internalValue = value.mySqlParameters;
      this._oracleParameters.internalValue = value.oracleParameters;
      this._postgreSqlParameters.internalValue = value.postgreSqlParameters;
      this._prestoParameters.internalValue = value.prestoParameters;
      this._rdsParameters.internalValue = value.rdsParameters;
      this._redshiftParameters.internalValue = value.redshiftParameters;
      this._s3Parameters.internalValue = value.s3Parameters;
      this._s3TablesParameters.internalValue = value.s3TablesParameters;
      this._snowflakeParameters.internalValue = value.snowflakeParameters;
      this._sparkParameters.internalValue = value.sparkParameters;
      this._sqlServerParameters.internalValue = value.sqlServerParameters;
      this._starburstParameters.internalValue = value.starburstParameters;
      this._teradataParameters.internalValue = value.teradataParameters;
      this._trinoParameters.internalValue = value.trinoParameters;
    }
  }

  // amazon_elasticsearch_parameters - computed: true, optional: true, required: false
  private _amazonElasticsearchParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersOutputReference(this, "amazon_elasticsearch_parameters");
  public get amazonElasticsearchParameters() {
    return this._amazonElasticsearchParameters;
  }
  public putAmazonElasticsearchParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters) {
    this._amazonElasticsearchParameters.internalValue = value;
  }
  public resetAmazonElasticsearchParameters() {
    this._amazonElasticsearchParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonElasticsearchParametersInput() {
    return this._amazonElasticsearchParameters.internalValue;
  }

  // amazon_open_search_parameters - computed: true, optional: true, required: false
  private _amazonOpenSearchParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersOutputReference(this, "amazon_open_search_parameters");
  public get amazonOpenSearchParameters() {
    return this._amazonOpenSearchParameters;
  }
  public putAmazonOpenSearchParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters) {
    this._amazonOpenSearchParameters.internalValue = value;
  }
  public resetAmazonOpenSearchParameters() {
    this._amazonOpenSearchParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonOpenSearchParametersInput() {
    return this._amazonOpenSearchParameters.internalValue;
  }

  // athena_parameters - computed: true, optional: true, required: false
  private _athenaParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersOutputReference(this, "athena_parameters");
  public get athenaParameters() {
    return this._athenaParameters;
  }
  public putAthenaParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters) {
    this._athenaParameters.internalValue = value;
  }
  public resetAthenaParameters() {
    this._athenaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaParametersInput() {
    return this._athenaParameters.internalValue;
  }

  // aurora_parameters - computed: true, optional: true, required: false
  private _auroraParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersOutputReference(this, "aurora_parameters");
  public get auroraParameters() {
    return this._auroraParameters;
  }
  public putAuroraParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters) {
    this._auroraParameters.internalValue = value;
  }
  public resetAuroraParameters() {
    this._auroraParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraParametersInput() {
    return this._auroraParameters.internalValue;
  }

  // aurora_postgre_sql_parameters - computed: true, optional: true, required: false
  private _auroraPostgreSqlParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersOutputReference(this, "aurora_postgre_sql_parameters");
  public get auroraPostgreSqlParameters() {
    return this._auroraPostgreSqlParameters;
  }
  public putAuroraPostgreSqlParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters) {
    this._auroraPostgreSqlParameters.internalValue = value;
  }
  public resetAuroraPostgreSqlParameters() {
    this._auroraPostgreSqlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraPostgreSqlParametersInput() {
    return this._auroraPostgreSqlParameters.internalValue;
  }

  // databricks_parameters - computed: true, optional: true, required: false
  private _databricksParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersOutputReference(this, "databricks_parameters");
  public get databricksParameters() {
    return this._databricksParameters;
  }
  public putDatabricksParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters) {
    this._databricksParameters.internalValue = value;
  }
  public resetDatabricksParameters() {
    this._databricksParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksParametersInput() {
    return this._databricksParameters.internalValue;
  }

  // maria_db_parameters - computed: true, optional: true, required: false
  private _mariaDbParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersOutputReference(this, "maria_db_parameters");
  public get mariaDbParameters() {
    return this._mariaDbParameters;
  }
  public putMariaDbParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters) {
    this._mariaDbParameters.internalValue = value;
  }
  public resetMariaDbParameters() {
    this._mariaDbParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbParametersInput() {
    return this._mariaDbParameters.internalValue;
  }

  // my_sql_parameters - computed: true, optional: true, required: false
  private _mySqlParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersOutputReference(this, "my_sql_parameters");
  public get mySqlParameters() {
    return this._mySqlParameters;
  }
  public putMySqlParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters) {
    this._mySqlParameters.internalValue = value;
  }
  public resetMySqlParameters() {
    this._mySqlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mySqlParametersInput() {
    return this._mySqlParameters.internalValue;
  }

  // oracle_parameters - computed: true, optional: true, required: false
  private _oracleParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersOutputReference(this, "oracle_parameters");
  public get oracleParameters() {
    return this._oracleParameters;
  }
  public putOracleParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters) {
    this._oracleParameters.internalValue = value;
  }
  public resetOracleParameters() {
    this._oracleParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleParametersInput() {
    return this._oracleParameters.internalValue;
  }

  // postgre_sql_parameters - computed: true, optional: true, required: false
  private _postgreSqlParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersOutputReference(this, "postgre_sql_parameters");
  public get postgreSqlParameters() {
    return this._postgreSqlParameters;
  }
  public putPostgreSqlParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters) {
    this._postgreSqlParameters.internalValue = value;
  }
  public resetPostgreSqlParameters() {
    this._postgreSqlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgreSqlParametersInput() {
    return this._postgreSqlParameters.internalValue;
  }

  // presto_parameters - computed: true, optional: true, required: false
  private _prestoParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersOutputReference(this, "presto_parameters");
  public get prestoParameters() {
    return this._prestoParameters;
  }
  public putPrestoParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters) {
    this._prestoParameters.internalValue = value;
  }
  public resetPrestoParameters() {
    this._prestoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prestoParametersInput() {
    return this._prestoParameters.internalValue;
  }

  // rds_parameters - computed: true, optional: true, required: false
  private _rdsParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersOutputReference(this, "rds_parameters");
  public get rdsParameters() {
    return this._rdsParameters;
  }
  public putRdsParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters) {
    this._rdsParameters.internalValue = value;
  }
  public resetRdsParameters() {
    this._rdsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsParametersInput() {
    return this._rdsParameters.internalValue;
  }

  // redshift_parameters - computed: true, optional: true, required: false
  private _redshiftParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersOutputReference(this, "redshift_parameters");
  public get redshiftParameters() {
    return this._redshiftParameters;
  }
  public putRedshiftParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters) {
    this._redshiftParameters.internalValue = value;
  }
  public resetRedshiftParameters() {
    this._redshiftParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftParametersInput() {
    return this._redshiftParameters.internalValue;
  }

  // s3_parameters - computed: true, optional: true, required: false
  private _s3Parameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersOutputReference(this, "s3_parameters");
  public get s3Parameters() {
    return this._s3Parameters;
  }
  public putS3Parameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters) {
    this._s3Parameters.internalValue = value;
  }
  public resetS3Parameters() {
    this._s3Parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ParametersInput() {
    return this._s3Parameters.internalValue;
  }

  // s3_tables_parameters - computed: true, optional: true, required: false
  private _s3TablesParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersOutputReference(this, "s3_tables_parameters");
  public get s3TablesParameters() {
    return this._s3TablesParameters;
  }
  public putS3TablesParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters) {
    this._s3TablesParameters.internalValue = value;
  }
  public resetS3TablesParameters() {
    this._s3TablesParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3TablesParametersInput() {
    return this._s3TablesParameters.internalValue;
  }

  // snowflake_parameters - computed: true, optional: true, required: false
  private _snowflakeParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOutputReference(this, "snowflake_parameters");
  public get snowflakeParameters() {
    return this._snowflakeParameters;
  }
  public putSnowflakeParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters) {
    this._snowflakeParameters.internalValue = value;
  }
  public resetSnowflakeParameters() {
    this._snowflakeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeParametersInput() {
    return this._snowflakeParameters.internalValue;
  }

  // spark_parameters - computed: true, optional: true, required: false
  private _sparkParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersOutputReference(this, "spark_parameters");
  public get sparkParameters() {
    return this._sparkParameters;
  }
  public putSparkParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters) {
    this._sparkParameters.internalValue = value;
  }
  public resetSparkParameters() {
    this._sparkParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkParametersInput() {
    return this._sparkParameters.internalValue;
  }

  // sql_server_parameters - computed: true, optional: true, required: false
  private _sqlServerParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersOutputReference(this, "sql_server_parameters");
  public get sqlServerParameters() {
    return this._sqlServerParameters;
  }
  public putSqlServerParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters) {
    this._sqlServerParameters.internalValue = value;
  }
  public resetSqlServerParameters() {
    this._sqlServerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerParametersInput() {
    return this._sqlServerParameters.internalValue;
  }

  // starburst_parameters - computed: true, optional: true, required: false
  private _starburstParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOutputReference(this, "starburst_parameters");
  public get starburstParameters() {
    return this._starburstParameters;
  }
  public putStarburstParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters) {
    this._starburstParameters.internalValue = value;
  }
  public resetStarburstParameters() {
    this._starburstParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starburstParametersInput() {
    return this._starburstParameters.internalValue;
  }

  // teradata_parameters - computed: true, optional: true, required: false
  private _teradataParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersOutputReference(this, "teradata_parameters");
  public get teradataParameters() {
    return this._teradataParameters;
  }
  public putTeradataParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters) {
    this._teradataParameters.internalValue = value;
  }
  public resetTeradataParameters() {
    this._teradataParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teradataParametersInput() {
    return this._teradataParameters.internalValue;
  }

  // trino_parameters - computed: true, optional: true, required: false
  private _trinoParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersOutputReference(this, "trino_parameters");
  public get trinoParameters() {
    return this._trinoParameters;
  }
  public putTrinoParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters) {
    this._trinoParameters.internalValue = value;
  }
  public resetTrinoParameters() {
    this._trinoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trinoParametersInput() {
    return this._trinoParameters.internalValue;
  }
}

export class QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersList extends cdktn.ComplexList {
  public internalValue? : QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOutputReference {
    return new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSourceCredentialsCredentialPair {
  /**
  * <p>A set of alternate data source parameters that you want to share for these
  *             credentials. The credentials are applied in tandem with the data source parameters when
  *             you copy a data source by using a create or update request. The API operation compares
  *             the <code>DataSourceParameters</code> structure that's in the request with the
  *             structures in the <code>AlternateDataSourceParameters</code> allow list. If the
  *             structures are an exact match, the request is allowed to use the new data source with
  *             the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
  *             null, the <code>DataSourceParameters</code> originally used with these
  *                 <code>Credentials</code> is automatically allowed.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#alternate_data_source_parameters QuicksightDataSource#alternate_data_source_parameters}
  */
  readonly alternateDataSourceParameters?: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters[] | cdktn.IResolvable;
  /**
  * <p>Password.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#password QuicksightDataSource#password}
  */
  readonly password?: string;
  /**
  * <p>User name.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#username QuicksightDataSource#username}
  */
  readonly username?: string;
}

export function quicksightDataSourceCredentialsCredentialPairToTerraform(struct?: QuicksightDataSourceCredentialsCredentialPair | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alternate_data_source_parameters: cdktn.listMapper(quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform, false)(struct!.alternateDataSourceParameters),
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function quicksightDataSourceCredentialsCredentialPairToHclTerraform(struct?: QuicksightDataSourceCredentialsCredentialPair | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alternate_data_source_parameters: {
      value: cdktn.listMapperHcl(quicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToHclTerraform, false)(struct!.alternateDataSourceParameters),
      isBlock: true,
      type: "list",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersList",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsCredentialPairOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsCredentialPair | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateDataSourceParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateDataSourceParameters = this._alternateDataSourceParameters?.internalValue;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsCredentialPair | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateDataSourceParameters.internalValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateDataSourceParameters.internalValue = value.alternateDataSourceParameters;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // alternate_data_source_parameters - computed: true, optional: true, required: false
  private _alternateDataSourceParameters = new QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersList(this, "alternate_data_source_parameters", false);
  public get alternateDataSourceParameters() {
    return this._alternateDataSourceParameters;
  }
  public putAlternateDataSourceParameters(value: QuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters[] | cdktn.IResolvable) {
    this._alternateDataSourceParameters.internalValue = value;
  }
  public resetAlternateDataSourceParameters() {
    this._alternateDataSourceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateDataSourceParametersInput() {
    return this._alternateDataSourceParameters.internalValue;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface QuicksightDataSourceCredentialsKeyPairCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#key_pair_username QuicksightDataSource#key_pair_username}
  */
  readonly keyPairUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#private_key QuicksightDataSource#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#private_key_passphrase QuicksightDataSource#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
}

export function quicksightDataSourceCredentialsKeyPairCredentialsToTerraform(struct?: QuicksightDataSourceCredentialsKeyPairCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_pair_username: cdktn.stringToTerraform(struct!.keyPairUsername),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
    private_key_passphrase: cdktn.stringToTerraform(struct!.privateKeyPassphrase),
  }
}


export function quicksightDataSourceCredentialsKeyPairCredentialsToHclTerraform(struct?: QuicksightDataSourceCredentialsKeyPairCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_pair_username: {
      value: cdktn.stringToHclTerraform(struct!.keyPairUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase: {
      value: cdktn.stringToHclTerraform(struct!.privateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsKeyPairCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentialsKeyPairCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPairUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPairUsername = this._keyPairUsername;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphrase = this._privateKeyPassphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentialsKeyPairCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPairUsername = undefined;
      this._privateKey = undefined;
      this._privateKeyPassphrase = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyPairUsername = value.keyPairUsername;
      this._privateKey = value.privateKey;
      this._privateKeyPassphrase = value.privateKeyPassphrase;
    }
  }

  // key_pair_username - computed: true, optional: true, required: false
  private _keyPairUsername?: string; 
  public get keyPairUsername() {
    return this.getStringAttribute('key_pair_username');
  }
  public set keyPairUsername(value: string) {
    this._keyPairUsername = value;
  }
  public resetKeyPairUsername() {
    this._keyPairUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairUsernameInput() {
    return this._keyPairUsername;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_passphrase - computed: true, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }
}
export interface QuicksightDataSourceCredentials {
  /**
  * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
  *             want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
  *             data source in the ARN is used as the credentials for the
  *             <code>DataSourceCredentials</code> structure.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#copy_source_arn QuicksightDataSource#copy_source_arn}
  */
  readonly copySourceArn?: string;
  /**
  * <p>The combination of user name and password that are used as credentials.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#credential_pair QuicksightDataSource#credential_pair}
  */
  readonly credentialPair?: QuicksightDataSourceCredentialsCredentialPair;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#key_pair_credentials QuicksightDataSource#key_pair_credentials}
  */
  readonly keyPairCredentials?: QuicksightDataSourceCredentialsKeyPairCredentials;
  /**
  * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#secret_arn QuicksightDataSource#secret_arn}
  */
  readonly secretArn?: string;
}

export function quicksightDataSourceCredentialsToTerraform(struct?: QuicksightDataSourceCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_source_arn: cdktn.stringToTerraform(struct!.copySourceArn),
    credential_pair: quicksightDataSourceCredentialsCredentialPairToTerraform(struct!.credentialPair),
    key_pair_credentials: quicksightDataSourceCredentialsKeyPairCredentialsToTerraform(struct!.keyPairCredentials),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function quicksightDataSourceCredentialsToHclTerraform(struct?: QuicksightDataSourceCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_source_arn: {
      value: cdktn.stringToHclTerraform(struct!.copySourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_pair: {
      value: quicksightDataSourceCredentialsCredentialPairToHclTerraform(struct!.credentialPair),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsCredentialPair",
    },
    key_pair_credentials: {
      value: quicksightDataSourceCredentialsKeyPairCredentialsToHclTerraform(struct!.keyPairCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceCredentialsKeyPairCredentials",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copySourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.copySourceArn = this._copySourceArn;
    }
    if (this._credentialPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialPair = this._credentialPair?.internalValue;
    }
    if (this._keyPairCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPairCredentials = this._keyPairCredentials?.internalValue;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copySourceArn = undefined;
      this._credentialPair.internalValue = undefined;
      this._keyPairCredentials.internalValue = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copySourceArn = value.copySourceArn;
      this._credentialPair.internalValue = value.credentialPair;
      this._keyPairCredentials.internalValue = value.keyPairCredentials;
      this._secretArn = value.secretArn;
    }
  }

  // copy_source_arn - computed: true, optional: true, required: false
  private _copySourceArn?: string; 
  public get copySourceArn() {
    return this.getStringAttribute('copy_source_arn');
  }
  public set copySourceArn(value: string) {
    this._copySourceArn = value;
  }
  public resetCopySourceArn() {
    this._copySourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copySourceArnInput() {
    return this._copySourceArn;
  }

  // credential_pair - computed: true, optional: true, required: false
  private _credentialPair = new QuicksightDataSourceCredentialsCredentialPairOutputReference(this, "credential_pair");
  public get credentialPair() {
    return this._credentialPair;
  }
  public putCredentialPair(value: QuicksightDataSourceCredentialsCredentialPair) {
    this._credentialPair.internalValue = value;
  }
  public resetCredentialPair() {
    this._credentialPair.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialPairInput() {
    return this._credentialPair.internalValue;
  }

  // key_pair_credentials - computed: true, optional: true, required: false
  private _keyPairCredentials = new QuicksightDataSourceCredentialsKeyPairCredentialsOutputReference(this, "key_pair_credentials");
  public get keyPairCredentials() {
    return this._keyPairCredentials;
  }
  public putKeyPairCredentials(value: QuicksightDataSourceCredentialsKeyPairCredentials) {
    this._keyPairCredentials.internalValue = value;
  }
  public resetKeyPairCredentials() {
    this._keyPairCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairCredentialsInput() {
    return this._keyPairCredentials.internalValue;
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
}
export interface QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters {
  /**
  * <p>The OpenSearch domain.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#domain QuicksightDataSource#domain}
  */
  readonly domain?: string;
}

export function quicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
  }
}


export function quicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface QuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters {
  /**
  * <p>The OpenSearch domain.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#domain QuicksightDataSource#domain}
  */
  readonly domain?: string;
}

export function quicksightDataSourceDataSourceParametersAmazonOpenSearchParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
  }
}


export function quicksightDataSourceDataSourceParametersAmazonOpenSearchParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersAmazonOpenSearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration {
  /**
  * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#enable_identity_propagation QuicksightDataSource#enable_identity_propagation}
  */
  readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationToTerraform(struct?: QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
  }
}


export function quicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_identity_propagation: {
      value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdentityPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = value.enableIdentityPropagation;
    }
  }

  // enable_identity_propagation - computed: true, optional: true, required: false
  private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
  public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
    this._enableIdentityPropagation = value;
  }
  public resetEnableIdentityPropagation() {
    this._enableIdentityPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentityPropagationInput() {
    return this._enableIdentityPropagation;
  }
}
export interface QuicksightDataSourceDataSourceParametersAthenaParameters {
  /**
  * <p>The parameters for an IAM Identity Center configuration.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_center_configuration QuicksightDataSource#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration;
  /**
  * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * <p>The workgroup that Amazon Athena uses.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#work_group QuicksightDataSource#work_group}
  */
  readonly workGroup?: string;
}

export function quicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAthenaParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center_configuration: quicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationToTerraform(struct!.identityCenterConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    work_group: cdktn.stringToTerraform(struct!.workGroup),
  }
}


export function quicksightDataSourceDataSourceParametersAthenaParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersAthenaParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center_configuration: {
      value: quicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationToHclTerraform(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group: {
      value: cdktn.stringToHclTerraform(struct!.workGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersAthenaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersAthenaParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityCenterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._workGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroup = this._workGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersAthenaParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityCenterConfiguration.internalValue = undefined;
      this._roleArn = undefined;
      this._workGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
      this._roleArn = value.roleArn;
      this._workGroup = value.workGroup;
    }
  }

  // identity_center_configuration - computed: true, optional: true, required: false
  private _identityCenterConfiguration = new QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: QuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration) {
    this._identityCenterConfiguration.internalValue = value;
  }
  public resetIdentityCenterConfiguration() {
    this._identityCenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigurationInput() {
    return this._identityCenterConfiguration.internalValue;
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

  // work_group - computed: true, optional: true, required: false
  private _workGroup?: string; 
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup;
  }
}
export interface QuicksightDataSourceDataSourceParametersAuroraParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAuroraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersAuroraParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersAuroraParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersAuroraParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersAuroraParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersAuroraParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters {
  /**
  * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersDatabricksParameters {
  /**
  * <p>The host name of the Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port for the Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
  /**
  * <p>The HTTP path of the Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#sql_endpoint_path QuicksightDataSource#sql_endpoint_path}
  */
  readonly sqlEndpointPath?: string;
}

export function quicksightDataSourceDataSourceParametersDatabricksParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersDatabricksParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
    sql_endpoint_path: cdktn.stringToTerraform(struct!.sqlEndpointPath),
  }
}


export function quicksightDataSourceDataSourceParametersDatabricksParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersDatabricksParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sql_endpoint_path: {
      value: cdktn.stringToHclTerraform(struct!.sqlEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersDatabricksParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersDatabricksParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sqlEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlEndpointPath = this._sqlEndpointPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersDatabricksParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._sqlEndpointPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._sqlEndpointPath = value.sqlEndpointPath;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sql_endpoint_path - computed: true, optional: true, required: false
  private _sqlEndpointPath?: string; 
  public get sqlEndpointPath() {
    return this.getStringAttribute('sql_endpoint_path');
  }
  public set sqlEndpointPath(value: string) {
    this._sqlEndpointPath = value;
  }
  public resetSqlEndpointPath() {
    this._sqlEndpointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlEndpointPathInput() {
    return this._sqlEndpointPath;
  }
}
export interface QuicksightDataSourceDataSourceParametersMariaDbParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersMariaDbParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersMariaDbParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersMariaDbParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersMariaDbParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersMariaDbParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersMariaDbParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersMySqlParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersMySqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersMySqlParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersMySqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersMySqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersMySqlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersMySqlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersOracleParameters {
  /**
  * <p>The database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>An Oracle host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#use_service_name QuicksightDataSource#use_service_name}
  */
  readonly useServiceName?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersOracleParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
    use_service_name: cdktn.booleanToTerraform(struct!.useServiceName),
  }
}


export function quicksightDataSourceDataSourceParametersOracleParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersOracleParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_service_name: {
      value: cdktn.booleanToHclTerraform(struct!.useServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersOracleParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersOracleParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._useServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServiceName = this._useServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersOracleParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
      this._useServiceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
      this._useServiceName = value.useServiceName;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // use_service_name - computed: true, optional: true, required: false
  private _useServiceName?: boolean | cdktn.IResolvable; 
  public get useServiceName() {
    return this.getBooleanAttribute('use_service_name');
  }
  public set useServiceName(value: boolean | cdktn.IResolvable) {
    this._useServiceName = value;
  }
  public resetUseServiceName() {
    this._useServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServiceNameInput() {
    return this._useServiceName;
  }
}
export interface QuicksightDataSourceDataSourceParametersPostgreSqlParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersPostgreSqlParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersPostgreSqlParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersPostgreSqlParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersPostgreSqlParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersPrestoParameters {
  /**
  * <p>Catalog.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersPrestoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersPrestoParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersPrestoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersPrestoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersPrestoParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersPrestoParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersRdsParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Instance ID.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#instance_id QuicksightDataSource#instance_id}
  */
  readonly instanceId?: string;
}

export function quicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersRdsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    instance_id: cdktn.stringToTerraform(struct!.instanceId),
  }
}


export function quicksightDataSourceDataSourceParametersRdsParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersRdsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktn.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersRdsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersRdsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersRdsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._instanceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._instanceId = value.instanceId;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }
}
export interface QuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters {
  /**
  * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#auto_create_database_user QuicksightDataSource#auto_create_database_user}
  */
  readonly autoCreateDatabaseUser?: boolean | cdktn.IResolvable;
  /**
  * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_groups QuicksightDataSource#database_groups}
  */
  readonly databaseGroups?: string[];
  /**
  * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_user QuicksightDataSource#database_user}
  */
  readonly databaseUser?: string;
  /**
  * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
}

export function quicksightDataSourceDataSourceParametersRedshiftParametersIamParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_create_database_user: cdktn.booleanToTerraform(struct!.autoCreateDatabaseUser),
    database_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.databaseGroups),
    database_user: cdktn.stringToTerraform(struct!.databaseUser),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function quicksightDataSourceDataSourceParametersRedshiftParametersIamParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_create_database_user: {
      value: cdktn.booleanToHclTerraform(struct!.autoCreateDatabaseUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.databaseGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    database_user: {
      value: cdktn.stringToHclTerraform(struct!.databaseUser),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersRedshiftParametersIamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateDatabaseUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateDatabaseUser = this._autoCreateDatabaseUser;
    }
    if (this._databaseGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseGroups = this._databaseGroups;
    }
    if (this._databaseUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseUser = this._databaseUser;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoCreateDatabaseUser = undefined;
      this._databaseGroups = undefined;
      this._databaseUser = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoCreateDatabaseUser = value.autoCreateDatabaseUser;
      this._databaseGroups = value.databaseGroups;
      this._databaseUser = value.databaseUser;
      this._roleArn = value.roleArn;
    }
  }

  // auto_create_database_user - computed: true, optional: true, required: false
  private _autoCreateDatabaseUser?: boolean | cdktn.IResolvable; 
  public get autoCreateDatabaseUser() {
    return this.getBooleanAttribute('auto_create_database_user');
  }
  public set autoCreateDatabaseUser(value: boolean | cdktn.IResolvable) {
    this._autoCreateDatabaseUser = value;
  }
  public resetAutoCreateDatabaseUser() {
    this._autoCreateDatabaseUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDatabaseUserInput() {
    return this._autoCreateDatabaseUser;
  }

  // database_groups - computed: true, optional: true, required: false
  private _databaseGroups?: string[]; 
  public get databaseGroups() {
    return this.getListAttribute('database_groups');
  }
  public set databaseGroups(value: string[]) {
    this._databaseGroups = value;
  }
  public resetDatabaseGroups() {
    this._databaseGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseGroupsInput() {
    return this._databaseGroups;
  }

  // database_user - computed: true, optional: true, required: false
  private _databaseUser?: string; 
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }
  public set databaseUser(value: string) {
    this._databaseUser = value;
  }
  public resetDatabaseUser() {
    this._databaseUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserInput() {
    return this._databaseUser;
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
}
export interface QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration {
  /**
  * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#enable_identity_propagation QuicksightDataSource#enable_identity_propagation}
  */
  readonly enableIdentityPropagation?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationToTerraform(struct?: QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_identity_propagation: cdktn.booleanToTerraform(struct!.enableIdentityPropagation),
  }
}


export function quicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_identity_propagation: {
      value: cdktn.booleanToHclTerraform(struct!.enableIdentityPropagation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdentityPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdentityPropagation = this._enableIdentityPropagation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIdentityPropagation = value.enableIdentityPropagation;
    }
  }

  // enable_identity_propagation - computed: true, optional: true, required: false
  private _enableIdentityPropagation?: boolean | cdktn.IResolvable; 
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
  public set enableIdentityPropagation(value: boolean | cdktn.IResolvable) {
    this._enableIdentityPropagation = value;
  }
  public resetEnableIdentityPropagation() {
    this._enableIdentityPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentityPropagationInput() {
    return this._enableIdentityPropagation;
  }
}
export interface QuicksightDataSourceDataSourceParametersRedshiftParameters {
  /**
  * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
  *             provided.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#cluster_id QuicksightDataSource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
  *                <code>GetClusterCredentials</code>
  *             </a>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#iam_parameters QuicksightDataSource#iam_parameters}
  */
  readonly iamParameters?: QuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters;
  /**
  * <p>The parameters for an IAM Identity Center configuration.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_center_configuration QuicksightDataSource#identity_center_configuration}
  */
  readonly identityCenterConfiguration?: QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration;
  /**
  * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersRedshiftParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_id: cdktn.stringToTerraform(struct!.clusterId),
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    iam_parameters: quicksightDataSourceDataSourceParametersRedshiftParametersIamParametersToTerraform(struct!.iamParameters),
    identity_center_configuration: quicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationToTerraform(struct!.identityCenterConfiguration),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersRedshiftParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersRedshiftParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_id: {
      value: cdktn.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_parameters: {
      value: quicksightDataSourceDataSourceParametersRedshiftParametersIamParametersToHclTerraform(struct!.iamParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters",
    },
    identity_center_configuration: {
      value: quicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationToHclTerraform(struct!.identityCenterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersRedshiftParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersRedshiftParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._iamParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamParameters = this._iamParameters?.internalValue;
    }
    if (this._identityCenterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenterConfiguration = this._identityCenterConfiguration?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersRedshiftParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._database = undefined;
      this._host = undefined;
      this._iamParameters.internalValue = undefined;
      this._identityCenterConfiguration.internalValue = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._database = value.database;
      this._host = value.host;
      this._iamParameters.internalValue = value.iamParameters;
      this._identityCenterConfiguration.internalValue = value.identityCenterConfiguration;
      this._port = value.port;
    }
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // iam_parameters - computed: true, optional: true, required: false
  private _iamParameters = new QuicksightDataSourceDataSourceParametersRedshiftParametersIamParametersOutputReference(this, "iam_parameters");
  public get iamParameters() {
    return this._iamParameters;
  }
  public putIamParameters(value: QuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters) {
    this._iamParameters.internalValue = value;
  }
  public resetIamParameters() {
    this._iamParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamParametersInput() {
    return this._iamParameters.internalValue;
  }

  // identity_center_configuration - computed: true, optional: true, required: false
  private _identityCenterConfiguration = new QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }
  public putIdentityCenterConfiguration(value: QuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration) {
    this._identityCenterConfiguration.internalValue = value;
  }
  public resetIdentityCenterConfiguration() {
    this._identityCenterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterConfigurationInput() {
    return this._identityCenterConfiguration.internalValue;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation {
  /**
  * <p>Amazon S3 bucket.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#bucket QuicksightDataSource#bucket}
  */
  readonly bucket?: string;
  /**
  * <p>Amazon S3 key that identifies an object.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#key QuicksightDataSource#key}
  */
  readonly key?: string;
}

export function quicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function quicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._key = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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
}
export interface QuicksightDataSourceDataSourceParametersS3Parameters {
  /**
  * <p>Amazon S3 manifest file location.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#manifest_file_location QuicksightDataSource#manifest_file_location}
  */
  readonly manifestFileLocation?: QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation;
  /**
  * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#role_arn QuicksightDataSource#role_arn}
  */
  readonly roleArn?: string;
}

export function quicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersS3Parameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    manifest_file_location: quicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct!.manifestFileLocation),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function quicksightDataSourceDataSourceParametersS3ParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersS3Parameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    manifest_file_location: {
      value: quicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToHclTerraform(struct!.manifestFileLocation),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersS3ParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersS3Parameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestFileLocation = this._manifestFileLocation?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersS3Parameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifestFileLocation.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifestFileLocation.internalValue = value.manifestFileLocation;
      this._roleArn = value.roleArn;
    }
  }

  // manifest_file_location - computed: true, optional: true, required: false
  private _manifestFileLocation = new QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationOutputReference(this, "manifest_file_location");
  public get manifestFileLocation() {
    return this._manifestFileLocation;
  }
  public putManifestFileLocation(value: QuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation) {
    this._manifestFileLocation.internalValue = value;
  }
  public resetManifestFileLocation() {
    this._manifestFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestFileLocationInput() {
    return this._manifestFileLocation.internalValue;
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
}
export interface QuicksightDataSourceDataSourceParametersS3TablesParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#table_bucket_arn QuicksightDataSource#table_bucket_arn}
  */
  readonly tableBucketArn?: string;
}

export function quicksightDataSourceDataSourceParametersS3TablesParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersS3TablesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    table_bucket_arn: cdktn.stringToTerraform(struct!.tableBucketArn),
  }
}


export function quicksightDataSourceDataSourceParametersS3TablesParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersS3TablesParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    table_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.tableBucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersS3TablesParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersS3TablesParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableBucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableBucketArn = this._tableBucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersS3TablesParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableBucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableBucketArn = value.tableBucketArn;
    }
  }

  // table_bucket_arn - computed: true, optional: true, required: false
  private _tableBucketArn?: string; 
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
  public set tableBucketArn(value: string) {
    this._tableBucketArn = value;
  }
  public resetTableBucketArn() {
    this._tableBucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableBucketArnInput() {
    return this._tableBucketArn;
  }
}
export interface QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties {
  /**
  * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn?: string;
}

export function quicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
  }
}


export function quicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcConnectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = value.vpcConnectionArn;
    }
  }

  // vpc_connection_arn - computed: true, optional: true, required: false
  private _vpcConnectionArn?: string; 
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
  public set vpcConnectionArn(value: string) {
    this._vpcConnectionArn = value;
  }
  public resetVpcConnectionArn() {
    this._vpcConnectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionArnInput() {
    return this._vpcConnectionArn;
  }
}
export interface QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_resource_uri QuicksightDataSource#identity_provider_resource_uri}
  */
  readonly identityProviderResourceUri?: string;
  /**
  * <p>VPC connection properties.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties QuicksightDataSource#identity_provider_vpc_connection_properties}
  */
  readonly identityProviderVpcConnectionProperties?: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_scope QuicksightDataSource#o_auth_scope}
  */
  readonly oAuthScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#token_provider_url QuicksightDataSource#token_provider_url}
  */
  readonly tokenProviderUrl?: string;
}

export function quicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
    identity_provider_vpc_connection_properties: quicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct!.identityProviderVpcConnectionProperties),
    o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
    token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
  }
}


export function quicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_provider_resource_uri: {
      value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_vpc_connection_properties: {
      value: quicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct!.identityProviderVpcConnectionProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties",
    },
    o_auth_scope: {
      value: cdktn.stringToHclTerraform(struct!.oAuthScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_provider_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderResourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
    }
    if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
    }
    if (this._oAuthScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthScope = this._oAuthScope;
    }
    if (this._tokenProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = undefined;
      this._identityProviderVpcConnectionProperties.internalValue = undefined;
      this._oAuthScope = undefined;
      this._tokenProviderUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = value.identityProviderResourceUri;
      this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
      this._oAuthScope = value.oAuthScope;
      this._tokenProviderUrl = value.tokenProviderUrl;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: true, required: false
  private _identityProviderResourceUri?: string; 
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }
  public set identityProviderResourceUri(value: string) {
    this._identityProviderResourceUri = value;
  }
  public resetIdentityProviderResourceUri() {
    this._identityProviderResourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderResourceUriInput() {
    return this._identityProviderResourceUri;
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
  private _identityProviderVpcConnectionProperties = new QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }
  public putIdentityProviderVpcConnectionProperties(value: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties) {
    this._identityProviderVpcConnectionProperties.internalValue = value;
  }
  public resetIdentityProviderVpcConnectionProperties() {
    this._identityProviderVpcConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderVpcConnectionPropertiesInput() {
    return this._identityProviderVpcConnectionProperties.internalValue;
  }

  // o_auth_scope - computed: true, optional: true, required: false
  private _oAuthScope?: string; 
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }
  public set oAuthScope(value: string) {
    this._oAuthScope = value;
  }
  public resetOAuthScope() {
    this._oAuthScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthScopeInput() {
    return this._oAuthScope;
  }

  // token_provider_url - computed: true, optional: true, required: false
  private _tokenProviderUrl?: string; 
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
  public set tokenProviderUrl(value: string) {
    this._tokenProviderUrl = value;
  }
  public resetTokenProviderUrl() {
    this._tokenProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenProviderUrlInput() {
    return this._tokenProviderUrl;
  }
}
export interface QuicksightDataSourceDataSourceParametersSnowflakeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#authentication_type QuicksightDataSource#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_access_control_role QuicksightDataSource#database_access_control_role}
  */
  readonly databaseAccessControlRole?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_parameters QuicksightDataSource#o_auth_parameters}
  */
  readonly oAuthParameters?: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters;
  /**
  * <p>Warehouse.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#warehouse QuicksightDataSource#warehouse}
  */
  readonly warehouse?: string;
}

export function quicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSnowflakeParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    database: cdktn.stringToTerraform(struct!.database),
    database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
    host: cdktn.stringToTerraform(struct!.host),
    o_auth_parameters: quicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersToTerraform(struct!.oAuthParameters),
    warehouse: cdktn.stringToTerraform(struct!.warehouse),
  }
}


export function quicksightDataSourceDataSourceParametersSnowflakeParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersSnowflakeParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_access_control_role: {
      value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_parameters: {
      value: quicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersToHclTerraform(struct!.oAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters",
    },
    warehouse: {
      value: cdktn.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersSnowflakeParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersSnowflakeParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databaseAccessControlRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._oAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersSnowflakeParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._database = undefined;
      this._databaseAccessControlRole = undefined;
      this._host = undefined;
      this._oAuthParameters.internalValue = undefined;
      this._warehouse = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._database = value.database;
      this._databaseAccessControlRole = value.databaseAccessControlRole;
      this._host = value.host;
      this._oAuthParameters.internalValue = value.oAuthParameters;
      this._warehouse = value.warehouse;
    }
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // database_access_control_role - computed: true, optional: true, required: false
  private _databaseAccessControlRole?: string; 
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }
  public set databaseAccessControlRole(value: string) {
    this._databaseAccessControlRole = value;
  }
  public resetDatabaseAccessControlRole() {
    this._databaseAccessControlRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseAccessControlRoleInput() {
    return this._databaseAccessControlRole;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // o_auth_parameters - computed: true, optional: true, required: false
  private _oAuthParameters = new QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }
  public putOAuthParameters(value: QuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters) {
    this._oAuthParameters.internalValue = value;
  }
  public resetOAuthParameters() {
    this._oAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthParametersInput() {
    return this._oAuthParameters.internalValue;
  }

  // warehouse - computed: true, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface QuicksightDataSourceDataSourceParametersSparkParameters {
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSparkParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersSparkParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersSparkParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersSparkParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersSparkParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersSparkParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersSqlServerParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersSqlServerParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersSqlServerParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersSqlServerParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersSqlServerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersSqlServerParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersSqlServerParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties {
  /**
  * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn?: string;
}

export function quicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
  }
}


export function quicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcConnectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = value.vpcConnectionArn;
    }
  }

  // vpc_connection_arn - computed: true, optional: true, required: false
  private _vpcConnectionArn?: string; 
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
  public set vpcConnectionArn(value: string) {
    this._vpcConnectionArn = value;
  }
  public resetVpcConnectionArn() {
    this._vpcConnectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionArnInput() {
    return this._vpcConnectionArn;
  }
}
export interface QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_resource_uri QuicksightDataSource#identity_provider_resource_uri}
  */
  readonly identityProviderResourceUri?: string;
  /**
  * <p>VPC connection properties.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#identity_provider_vpc_connection_properties QuicksightDataSource#identity_provider_vpc_connection_properties}
  */
  readonly identityProviderVpcConnectionProperties?: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_scope QuicksightDataSource#o_auth_scope}
  */
  readonly oAuthScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#token_provider_url QuicksightDataSource#token_provider_url}
  */
  readonly tokenProviderUrl?: string;
}

export function quicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_provider_resource_uri: cdktn.stringToTerraform(struct!.identityProviderResourceUri),
    identity_provider_vpc_connection_properties: quicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct!.identityProviderVpcConnectionProperties),
    o_auth_scope: cdktn.stringToTerraform(struct!.oAuthScope),
    token_provider_url: cdktn.stringToTerraform(struct!.tokenProviderUrl),
  }
}


export function quicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_provider_resource_uri: {
      value: cdktn.stringToHclTerraform(struct!.identityProviderResourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_vpc_connection_properties: {
      value: quicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct!.identityProviderVpcConnectionProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties",
    },
    o_auth_scope: {
      value: cdktn.stringToHclTerraform(struct!.oAuthScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_provider_url: {
      value: cdktn.stringToHclTerraform(struct!.tokenProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderResourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderResourceUri = this._identityProviderResourceUri;
    }
    if (this._identityProviderVpcConnectionProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderVpcConnectionProperties = this._identityProviderVpcConnectionProperties?.internalValue;
    }
    if (this._oAuthScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthScope = this._oAuthScope;
    }
    if (this._tokenProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenProviderUrl = this._tokenProviderUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = undefined;
      this._identityProviderVpcConnectionProperties.internalValue = undefined;
      this._oAuthScope = undefined;
      this._tokenProviderUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderResourceUri = value.identityProviderResourceUri;
      this._identityProviderVpcConnectionProperties.internalValue = value.identityProviderVpcConnectionProperties;
      this._oAuthScope = value.oAuthScope;
      this._tokenProviderUrl = value.tokenProviderUrl;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: true, required: false
  private _identityProviderResourceUri?: string; 
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }
  public set identityProviderResourceUri(value: string) {
    this._identityProviderResourceUri = value;
  }
  public resetIdentityProviderResourceUri() {
    this._identityProviderResourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderResourceUriInput() {
    return this._identityProviderResourceUri;
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: true, required: false
  private _identityProviderVpcConnectionProperties = new QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }
  public putIdentityProviderVpcConnectionProperties(value: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties) {
    this._identityProviderVpcConnectionProperties.internalValue = value;
  }
  public resetIdentityProviderVpcConnectionProperties() {
    this._identityProviderVpcConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderVpcConnectionPropertiesInput() {
    return this._identityProviderVpcConnectionProperties.internalValue;
  }

  // o_auth_scope - computed: true, optional: true, required: false
  private _oAuthScope?: string; 
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }
  public set oAuthScope(value: string) {
    this._oAuthScope = value;
  }
  public resetOAuthScope() {
    this._oAuthScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthScopeInput() {
    return this._oAuthScope;
  }

  // token_provider_url - computed: true, optional: true, required: false
  private _tokenProviderUrl?: string; 
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
  public set tokenProviderUrl(value: string) {
    this._tokenProviderUrl = value;
  }
  public resetTokenProviderUrl() {
    this._tokenProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenProviderUrlInput() {
    return this._tokenProviderUrl;
  }
}
export interface QuicksightDataSourceDataSourceParametersStarburstParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#authentication_type QuicksightDataSource#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * <p>The catalog name for the Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database_access_control_role QuicksightDataSource#database_access_control_role}
  */
  readonly databaseAccessControlRole?: string;
  /**
  * <p>The host name of the Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#o_auth_parameters QuicksightDataSource#o_auth_parameters}
  */
  readonly oAuthParameters?: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters;
  /**
  * <p>The port for the Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#product_type QuicksightDataSource#product_type}
  */
  readonly productType?: string;
}

export function quicksightDataSourceDataSourceParametersStarburstParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersStarburstParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    catalog: cdktn.stringToTerraform(struct!.catalog),
    database_access_control_role: cdktn.stringToTerraform(struct!.databaseAccessControlRole),
    host: cdktn.stringToTerraform(struct!.host),
    o_auth_parameters: quicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersToTerraform(struct!.oAuthParameters),
    port: cdktn.numberToTerraform(struct!.port),
    product_type: cdktn.stringToTerraform(struct!.productType),
  }
}


export function quicksightDataSourceDataSourceParametersStarburstParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersStarburstParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_access_control_role: {
      value: cdktn.stringToHclTerraform(struct!.databaseAccessControlRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_parameters: {
      value: quicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersToHclTerraform(struct!.oAuthParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    product_type: {
      value: cdktn.stringToHclTerraform(struct!.productType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersStarburstParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersStarburstParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._databaseAccessControlRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseAccessControlRole = this._databaseAccessControlRole;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._oAuthParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthParameters = this._oAuthParameters?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._productType !== undefined) {
      hasAnyValues = true;
      internalValueResult.productType = this._productType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersStarburstParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._catalog = undefined;
      this._databaseAccessControlRole = undefined;
      this._host = undefined;
      this._oAuthParameters.internalValue = undefined;
      this._port = undefined;
      this._productType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._catalog = value.catalog;
      this._databaseAccessControlRole = value.databaseAccessControlRole;
      this._host = value.host;
      this._oAuthParameters.internalValue = value.oAuthParameters;
      this._port = value.port;
      this._productType = value.productType;
    }
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // database_access_control_role - computed: true, optional: true, required: false
  private _databaseAccessControlRole?: string; 
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }
  public set databaseAccessControlRole(value: string) {
    this._databaseAccessControlRole = value;
  }
  public resetDatabaseAccessControlRole() {
    this._databaseAccessControlRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseAccessControlRoleInput() {
    return this._databaseAccessControlRole;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // o_auth_parameters - computed: true, optional: true, required: false
  private _oAuthParameters = new QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }
  public putOAuthParameters(value: QuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters) {
    this._oAuthParameters.internalValue = value;
  }
  public resetOAuthParameters() {
    this._oAuthParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthParametersInput() {
    return this._oAuthParameters.internalValue;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // product_type - computed: true, optional: true, required: false
  private _productType?: string; 
  public get productType() {
    return this.getStringAttribute('product_type');
  }
  public set productType(value: string) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }
}
export interface QuicksightDataSourceDataSourceParametersTeradataParameters {
  /**
  * <p>Database.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#database QuicksightDataSource#database}
  */
  readonly database?: string;
  /**
  * <p>Host.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>Port.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersTeradataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database: cdktn.stringToTerraform(struct!.database),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersTeradataParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersTeradataParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database: {
      value: cdktn.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersTeradataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersTeradataParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersTeradataParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParametersTrinoParameters {
  /**
  * <p>The catalog name for the Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#catalog QuicksightDataSource#catalog}
  */
  readonly catalog?: string;
  /**
  * <p>The host name of the Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#host QuicksightDataSource#host}
  */
  readonly host?: string;
  /**
  * <p>The port for the Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#port QuicksightDataSource#port}
  */
  readonly port?: number;
}

export function quicksightDataSourceDataSourceParametersTrinoParametersToTerraform(struct?: QuicksightDataSourceDataSourceParametersTrinoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog: cdktn.stringToTerraform(struct!.catalog),
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function quicksightDataSourceDataSourceParametersTrinoParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParametersTrinoParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog: {
      value: cdktn.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersTrinoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParametersTrinoParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParametersTrinoParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface QuicksightDataSourceDataSourceParameters {
  /**
  * <p>The parameters for OpenSearch.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#amazon_elasticsearch_parameters QuicksightDataSource#amazon_elasticsearch_parameters}
  */
  readonly amazonElasticsearchParameters?: QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters;
  /**
  * <p>The parameters for OpenSearch.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#amazon_open_search_parameters QuicksightDataSource#amazon_open_search_parameters}
  */
  readonly amazonOpenSearchParameters?: QuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters;
  /**
  * <p>Parameters for Amazon Athena.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#athena_parameters QuicksightDataSource#athena_parameters}
  */
  readonly athenaParameters?: QuicksightDataSourceDataSourceParametersAthenaParameters;
  /**
  * <p>Parameters for Amazon Aurora.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#aurora_parameters QuicksightDataSource#aurora_parameters}
  */
  readonly auroraParameters?: QuicksightDataSourceDataSourceParametersAuroraParameters;
  /**
  * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#aurora_postgre_sql_parameters QuicksightDataSource#aurora_postgre_sql_parameters}
  */
  readonly auroraPostgreSqlParameters?: QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters;
  /**
  * <p>The parameters that are required to connect to a Databricks data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#databricks_parameters QuicksightDataSource#databricks_parameters}
  */
  readonly databricksParameters?: QuicksightDataSourceDataSourceParametersDatabricksParameters;
  /**
  * <p>The parameters for MariaDB.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#maria_db_parameters QuicksightDataSource#maria_db_parameters}
  */
  readonly mariaDbParameters?: QuicksightDataSourceDataSourceParametersMariaDbParameters;
  /**
  * <p>The parameters for MySQL.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#my_sql_parameters QuicksightDataSource#my_sql_parameters}
  */
  readonly mySqlParameters?: QuicksightDataSourceDataSourceParametersMySqlParameters;
  /**
  * <p>The parameters for Oracle.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#oracle_parameters QuicksightDataSource#oracle_parameters}
  */
  readonly oracleParameters?: QuicksightDataSourceDataSourceParametersOracleParameters;
  /**
  * <p>The parameters for PostgreSQL.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#postgre_sql_parameters QuicksightDataSource#postgre_sql_parameters}
  */
  readonly postgreSqlParameters?: QuicksightDataSourceDataSourceParametersPostgreSqlParameters;
  /**
  * <p>The parameters for Presto.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#presto_parameters QuicksightDataSource#presto_parameters}
  */
  readonly prestoParameters?: QuicksightDataSourceDataSourceParametersPrestoParameters;
  /**
  * <p>The parameters for Amazon RDS.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#rds_parameters QuicksightDataSource#rds_parameters}
  */
  readonly rdsParameters?: QuicksightDataSourceDataSourceParametersRdsParameters;
  /**
  * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
  *             <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#redshift_parameters QuicksightDataSource#redshift_parameters}
  */
  readonly redshiftParameters?: QuicksightDataSourceDataSourceParametersRedshiftParameters;
  /**
  * <p>The parameters for S3.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#s3_parameters QuicksightDataSource#s3_parameters}
  */
  readonly s3Parameters?: QuicksightDataSourceDataSourceParametersS3Parameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#s3_tables_parameters QuicksightDataSource#s3_tables_parameters}
  */
  readonly s3TablesParameters?: QuicksightDataSourceDataSourceParametersS3TablesParameters;
  /**
  * <p>The parameters for Snowflake.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#snowflake_parameters QuicksightDataSource#snowflake_parameters}
  */
  readonly snowflakeParameters?: QuicksightDataSourceDataSourceParametersSnowflakeParameters;
  /**
  * <p>The parameters for Spark.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#spark_parameters QuicksightDataSource#spark_parameters}
  */
  readonly sparkParameters?: QuicksightDataSourceDataSourceParametersSparkParameters;
  /**
  * <p>The parameters for SQL Server.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#sql_server_parameters QuicksightDataSource#sql_server_parameters}
  */
  readonly sqlServerParameters?: QuicksightDataSourceDataSourceParametersSqlServerParameters;
  /**
  * <p>The parameters that are required to connect to a Starburst data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#starburst_parameters QuicksightDataSource#starburst_parameters}
  */
  readonly starburstParameters?: QuicksightDataSourceDataSourceParametersStarburstParameters;
  /**
  * <p>The parameters for Teradata.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#teradata_parameters QuicksightDataSource#teradata_parameters}
  */
  readonly teradataParameters?: QuicksightDataSourceDataSourceParametersTeradataParameters;
  /**
  * <p>The parameters that are required to connect to a Trino data source.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#trino_parameters QuicksightDataSource#trino_parameters}
  */
  readonly trinoParameters?: QuicksightDataSourceDataSourceParametersTrinoParameters;
}

export function quicksightDataSourceDataSourceParametersToTerraform(struct?: QuicksightDataSourceDataSourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    amazon_elasticsearch_parameters: quicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct!.amazonElasticsearchParameters),
    amazon_open_search_parameters: quicksightDataSourceDataSourceParametersAmazonOpenSearchParametersToTerraform(struct!.amazonOpenSearchParameters),
    athena_parameters: quicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct!.athenaParameters),
    aurora_parameters: quicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct!.auroraParameters),
    aurora_postgre_sql_parameters: quicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct!.auroraPostgreSqlParameters),
    databricks_parameters: quicksightDataSourceDataSourceParametersDatabricksParametersToTerraform(struct!.databricksParameters),
    maria_db_parameters: quicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct!.mariaDbParameters),
    my_sql_parameters: quicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct!.mySqlParameters),
    oracle_parameters: quicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct!.oracleParameters),
    postgre_sql_parameters: quicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct!.postgreSqlParameters),
    presto_parameters: quicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct!.prestoParameters),
    rds_parameters: quicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct!.rdsParameters),
    redshift_parameters: quicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct!.redshiftParameters),
    s3_parameters: quicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct!.s3Parameters),
    s3_tables_parameters: quicksightDataSourceDataSourceParametersS3TablesParametersToTerraform(struct!.s3TablesParameters),
    snowflake_parameters: quicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct!.snowflakeParameters),
    spark_parameters: quicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct!.sparkParameters),
    sql_server_parameters: quicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct!.sqlServerParameters),
    starburst_parameters: quicksightDataSourceDataSourceParametersStarburstParametersToTerraform(struct!.starburstParameters),
    teradata_parameters: quicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct!.teradataParameters),
    trino_parameters: quicksightDataSourceDataSourceParametersTrinoParametersToTerraform(struct!.trinoParameters),
  }
}


export function quicksightDataSourceDataSourceParametersToHclTerraform(struct?: QuicksightDataSourceDataSourceParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    amazon_elasticsearch_parameters: {
      value: quicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToHclTerraform(struct!.amazonElasticsearchParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters",
    },
    amazon_open_search_parameters: {
      value: quicksightDataSourceDataSourceParametersAmazonOpenSearchParametersToHclTerraform(struct!.amazonOpenSearchParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters",
    },
    athena_parameters: {
      value: quicksightDataSourceDataSourceParametersAthenaParametersToHclTerraform(struct!.athenaParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersAthenaParameters",
    },
    aurora_parameters: {
      value: quicksightDataSourceDataSourceParametersAuroraParametersToHclTerraform(struct!.auroraParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersAuroraParameters",
    },
    aurora_postgre_sql_parameters: {
      value: quicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToHclTerraform(struct!.auroraPostgreSqlParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters",
    },
    databricks_parameters: {
      value: quicksightDataSourceDataSourceParametersDatabricksParametersToHclTerraform(struct!.databricksParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersDatabricksParameters",
    },
    maria_db_parameters: {
      value: quicksightDataSourceDataSourceParametersMariaDbParametersToHclTerraform(struct!.mariaDbParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersMariaDbParameters",
    },
    my_sql_parameters: {
      value: quicksightDataSourceDataSourceParametersMySqlParametersToHclTerraform(struct!.mySqlParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersMySqlParameters",
    },
    oracle_parameters: {
      value: quicksightDataSourceDataSourceParametersOracleParametersToHclTerraform(struct!.oracleParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersOracleParameters",
    },
    postgre_sql_parameters: {
      value: quicksightDataSourceDataSourceParametersPostgreSqlParametersToHclTerraform(struct!.postgreSqlParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersPostgreSqlParameters",
    },
    presto_parameters: {
      value: quicksightDataSourceDataSourceParametersPrestoParametersToHclTerraform(struct!.prestoParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersPrestoParameters",
    },
    rds_parameters: {
      value: quicksightDataSourceDataSourceParametersRdsParametersToHclTerraform(struct!.rdsParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersRdsParameters",
    },
    redshift_parameters: {
      value: quicksightDataSourceDataSourceParametersRedshiftParametersToHclTerraform(struct!.redshiftParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersRedshiftParameters",
    },
    s3_parameters: {
      value: quicksightDataSourceDataSourceParametersS3ParametersToHclTerraform(struct!.s3Parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersS3Parameters",
    },
    s3_tables_parameters: {
      value: quicksightDataSourceDataSourceParametersS3TablesParametersToHclTerraform(struct!.s3TablesParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersS3TablesParameters",
    },
    snowflake_parameters: {
      value: quicksightDataSourceDataSourceParametersSnowflakeParametersToHclTerraform(struct!.snowflakeParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersSnowflakeParameters",
    },
    spark_parameters: {
      value: quicksightDataSourceDataSourceParametersSparkParametersToHclTerraform(struct!.sparkParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersSparkParameters",
    },
    sql_server_parameters: {
      value: quicksightDataSourceDataSourceParametersSqlServerParametersToHclTerraform(struct!.sqlServerParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersSqlServerParameters",
    },
    starburst_parameters: {
      value: quicksightDataSourceDataSourceParametersStarburstParametersToHclTerraform(struct!.starburstParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersStarburstParameters",
    },
    teradata_parameters: {
      value: quicksightDataSourceDataSourceParametersTeradataParametersToHclTerraform(struct!.teradataParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersTeradataParameters",
    },
    trino_parameters: {
      value: quicksightDataSourceDataSourceParametersTrinoParametersToHclTerraform(struct!.trinoParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightDataSourceDataSourceParametersTrinoParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceDataSourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceDataSourceParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonElasticsearchParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonElasticsearchParameters = this._amazonElasticsearchParameters?.internalValue;
    }
    if (this._amazonOpenSearchParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonOpenSearchParameters = this._amazonOpenSearchParameters?.internalValue;
    }
    if (this._athenaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaParameters = this._athenaParameters?.internalValue;
    }
    if (this._auroraParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraParameters = this._auroraParameters?.internalValue;
    }
    if (this._auroraPostgreSqlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auroraPostgreSqlParameters = this._auroraPostgreSqlParameters?.internalValue;
    }
    if (this._databricksParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksParameters = this._databricksParameters?.internalValue;
    }
    if (this._mariaDbParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDbParameters = this._mariaDbParameters?.internalValue;
    }
    if (this._mySqlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mySqlParameters = this._mySqlParameters?.internalValue;
    }
    if (this._oracleParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleParameters = this._oracleParameters?.internalValue;
    }
    if (this._postgreSqlParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgreSqlParameters = this._postgreSqlParameters?.internalValue;
    }
    if (this._prestoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prestoParameters = this._prestoParameters?.internalValue;
    }
    if (this._rdsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsParameters = this._rdsParameters?.internalValue;
    }
    if (this._redshiftParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftParameters = this._redshiftParameters?.internalValue;
    }
    if (this._s3Parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Parameters = this._s3Parameters?.internalValue;
    }
    if (this._s3TablesParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3TablesParameters = this._s3TablesParameters?.internalValue;
    }
    if (this._snowflakeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeParameters = this._snowflakeParameters?.internalValue;
    }
    if (this._sparkParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkParameters = this._sparkParameters?.internalValue;
    }
    if (this._sqlServerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerParameters = this._sqlServerParameters?.internalValue;
    }
    if (this._starburstParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.starburstParameters = this._starburstParameters?.internalValue;
    }
    if (this._teradataParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teradataParameters = this._teradataParameters?.internalValue;
    }
    if (this._trinoParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trinoParameters = this._trinoParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceDataSourceParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonElasticsearchParameters.internalValue = undefined;
      this._amazonOpenSearchParameters.internalValue = undefined;
      this._athenaParameters.internalValue = undefined;
      this._auroraParameters.internalValue = undefined;
      this._auroraPostgreSqlParameters.internalValue = undefined;
      this._databricksParameters.internalValue = undefined;
      this._mariaDbParameters.internalValue = undefined;
      this._mySqlParameters.internalValue = undefined;
      this._oracleParameters.internalValue = undefined;
      this._postgreSqlParameters.internalValue = undefined;
      this._prestoParameters.internalValue = undefined;
      this._rdsParameters.internalValue = undefined;
      this._redshiftParameters.internalValue = undefined;
      this._s3Parameters.internalValue = undefined;
      this._s3TablesParameters.internalValue = undefined;
      this._snowflakeParameters.internalValue = undefined;
      this._sparkParameters.internalValue = undefined;
      this._sqlServerParameters.internalValue = undefined;
      this._starburstParameters.internalValue = undefined;
      this._teradataParameters.internalValue = undefined;
      this._trinoParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonElasticsearchParameters.internalValue = value.amazonElasticsearchParameters;
      this._amazonOpenSearchParameters.internalValue = value.amazonOpenSearchParameters;
      this._athenaParameters.internalValue = value.athenaParameters;
      this._auroraParameters.internalValue = value.auroraParameters;
      this._auroraPostgreSqlParameters.internalValue = value.auroraPostgreSqlParameters;
      this._databricksParameters.internalValue = value.databricksParameters;
      this._mariaDbParameters.internalValue = value.mariaDbParameters;
      this._mySqlParameters.internalValue = value.mySqlParameters;
      this._oracleParameters.internalValue = value.oracleParameters;
      this._postgreSqlParameters.internalValue = value.postgreSqlParameters;
      this._prestoParameters.internalValue = value.prestoParameters;
      this._rdsParameters.internalValue = value.rdsParameters;
      this._redshiftParameters.internalValue = value.redshiftParameters;
      this._s3Parameters.internalValue = value.s3Parameters;
      this._s3TablesParameters.internalValue = value.s3TablesParameters;
      this._snowflakeParameters.internalValue = value.snowflakeParameters;
      this._sparkParameters.internalValue = value.sparkParameters;
      this._sqlServerParameters.internalValue = value.sqlServerParameters;
      this._starburstParameters.internalValue = value.starburstParameters;
      this._teradataParameters.internalValue = value.teradataParameters;
      this._trinoParameters.internalValue = value.trinoParameters;
    }
  }

  // amazon_elasticsearch_parameters - computed: true, optional: true, required: false
  private _amazonElasticsearchParameters = new QuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersOutputReference(this, "amazon_elasticsearch_parameters");
  public get amazonElasticsearchParameters() {
    return this._amazonElasticsearchParameters;
  }
  public putAmazonElasticsearchParameters(value: QuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters) {
    this._amazonElasticsearchParameters.internalValue = value;
  }
  public resetAmazonElasticsearchParameters() {
    this._amazonElasticsearchParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonElasticsearchParametersInput() {
    return this._amazonElasticsearchParameters.internalValue;
  }

  // amazon_open_search_parameters - computed: true, optional: true, required: false
  private _amazonOpenSearchParameters = new QuicksightDataSourceDataSourceParametersAmazonOpenSearchParametersOutputReference(this, "amazon_open_search_parameters");
  public get amazonOpenSearchParameters() {
    return this._amazonOpenSearchParameters;
  }
  public putAmazonOpenSearchParameters(value: QuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters) {
    this._amazonOpenSearchParameters.internalValue = value;
  }
  public resetAmazonOpenSearchParameters() {
    this._amazonOpenSearchParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonOpenSearchParametersInput() {
    return this._amazonOpenSearchParameters.internalValue;
  }

  // athena_parameters - computed: true, optional: true, required: false
  private _athenaParameters = new QuicksightDataSourceDataSourceParametersAthenaParametersOutputReference(this, "athena_parameters");
  public get athenaParameters() {
    return this._athenaParameters;
  }
  public putAthenaParameters(value: QuicksightDataSourceDataSourceParametersAthenaParameters) {
    this._athenaParameters.internalValue = value;
  }
  public resetAthenaParameters() {
    this._athenaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaParametersInput() {
    return this._athenaParameters.internalValue;
  }

  // aurora_parameters - computed: true, optional: true, required: false
  private _auroraParameters = new QuicksightDataSourceDataSourceParametersAuroraParametersOutputReference(this, "aurora_parameters");
  public get auroraParameters() {
    return this._auroraParameters;
  }
  public putAuroraParameters(value: QuicksightDataSourceDataSourceParametersAuroraParameters) {
    this._auroraParameters.internalValue = value;
  }
  public resetAuroraParameters() {
    this._auroraParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraParametersInput() {
    return this._auroraParameters.internalValue;
  }

  // aurora_postgre_sql_parameters - computed: true, optional: true, required: false
  private _auroraPostgreSqlParameters = new QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersOutputReference(this, "aurora_postgre_sql_parameters");
  public get auroraPostgreSqlParameters() {
    return this._auroraPostgreSqlParameters;
  }
  public putAuroraPostgreSqlParameters(value: QuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters) {
    this._auroraPostgreSqlParameters.internalValue = value;
  }
  public resetAuroraPostgreSqlParameters() {
    this._auroraPostgreSqlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auroraPostgreSqlParametersInput() {
    return this._auroraPostgreSqlParameters.internalValue;
  }

  // databricks_parameters - computed: true, optional: true, required: false
  private _databricksParameters = new QuicksightDataSourceDataSourceParametersDatabricksParametersOutputReference(this, "databricks_parameters");
  public get databricksParameters() {
    return this._databricksParameters;
  }
  public putDatabricksParameters(value: QuicksightDataSourceDataSourceParametersDatabricksParameters) {
    this._databricksParameters.internalValue = value;
  }
  public resetDatabricksParameters() {
    this._databricksParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksParametersInput() {
    return this._databricksParameters.internalValue;
  }

  // maria_db_parameters - computed: true, optional: true, required: false
  private _mariaDbParameters = new QuicksightDataSourceDataSourceParametersMariaDbParametersOutputReference(this, "maria_db_parameters");
  public get mariaDbParameters() {
    return this._mariaDbParameters;
  }
  public putMariaDbParameters(value: QuicksightDataSourceDataSourceParametersMariaDbParameters) {
    this._mariaDbParameters.internalValue = value;
  }
  public resetMariaDbParameters() {
    this._mariaDbParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbParametersInput() {
    return this._mariaDbParameters.internalValue;
  }

  // my_sql_parameters - computed: true, optional: true, required: false
  private _mySqlParameters = new QuicksightDataSourceDataSourceParametersMySqlParametersOutputReference(this, "my_sql_parameters");
  public get mySqlParameters() {
    return this._mySqlParameters;
  }
  public putMySqlParameters(value: QuicksightDataSourceDataSourceParametersMySqlParameters) {
    this._mySqlParameters.internalValue = value;
  }
  public resetMySqlParameters() {
    this._mySqlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mySqlParametersInput() {
    return this._mySqlParameters.internalValue;
  }

  // oracle_parameters - computed: true, optional: true, required: false
  private _oracleParameters = new QuicksightDataSourceDataSourceParametersOracleParametersOutputReference(this, "oracle_parameters");
  public get oracleParameters() {
    return this._oracleParameters;
  }
  public putOracleParameters(value: QuicksightDataSourceDataSourceParametersOracleParameters) {
    this._oracleParameters.internalValue = value;
  }
  public resetOracleParameters() {
    this._oracleParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleParametersInput() {
    return this._oracleParameters.internalValue;
  }

  // postgre_sql_parameters - computed: true, optional: true, required: false
  private _postgreSqlParameters = new QuicksightDataSourceDataSourceParametersPostgreSqlParametersOutputReference(this, "postgre_sql_parameters");
  public get postgreSqlParameters() {
    return this._postgreSqlParameters;
  }
  public putPostgreSqlParameters(value: QuicksightDataSourceDataSourceParametersPostgreSqlParameters) {
    this._postgreSqlParameters.internalValue = value;
  }
  public resetPostgreSqlParameters() {
    this._postgreSqlParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgreSqlParametersInput() {
    return this._postgreSqlParameters.internalValue;
  }

  // presto_parameters - computed: true, optional: true, required: false
  private _prestoParameters = new QuicksightDataSourceDataSourceParametersPrestoParametersOutputReference(this, "presto_parameters");
  public get prestoParameters() {
    return this._prestoParameters;
  }
  public putPrestoParameters(value: QuicksightDataSourceDataSourceParametersPrestoParameters) {
    this._prestoParameters.internalValue = value;
  }
  public resetPrestoParameters() {
    this._prestoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prestoParametersInput() {
    return this._prestoParameters.internalValue;
  }

  // rds_parameters - computed: true, optional: true, required: false
  private _rdsParameters = new QuicksightDataSourceDataSourceParametersRdsParametersOutputReference(this, "rds_parameters");
  public get rdsParameters() {
    return this._rdsParameters;
  }
  public putRdsParameters(value: QuicksightDataSourceDataSourceParametersRdsParameters) {
    this._rdsParameters.internalValue = value;
  }
  public resetRdsParameters() {
    this._rdsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsParametersInput() {
    return this._rdsParameters.internalValue;
  }

  // redshift_parameters - computed: true, optional: true, required: false
  private _redshiftParameters = new QuicksightDataSourceDataSourceParametersRedshiftParametersOutputReference(this, "redshift_parameters");
  public get redshiftParameters() {
    return this._redshiftParameters;
  }
  public putRedshiftParameters(value: QuicksightDataSourceDataSourceParametersRedshiftParameters) {
    this._redshiftParameters.internalValue = value;
  }
  public resetRedshiftParameters() {
    this._redshiftParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftParametersInput() {
    return this._redshiftParameters.internalValue;
  }

  // s3_parameters - computed: true, optional: true, required: false
  private _s3Parameters = new QuicksightDataSourceDataSourceParametersS3ParametersOutputReference(this, "s3_parameters");
  public get s3Parameters() {
    return this._s3Parameters;
  }
  public putS3Parameters(value: QuicksightDataSourceDataSourceParametersS3Parameters) {
    this._s3Parameters.internalValue = value;
  }
  public resetS3Parameters() {
    this._s3Parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ParametersInput() {
    return this._s3Parameters.internalValue;
  }

  // s3_tables_parameters - computed: true, optional: true, required: false
  private _s3TablesParameters = new QuicksightDataSourceDataSourceParametersS3TablesParametersOutputReference(this, "s3_tables_parameters");
  public get s3TablesParameters() {
    return this._s3TablesParameters;
  }
  public putS3TablesParameters(value: QuicksightDataSourceDataSourceParametersS3TablesParameters) {
    this._s3TablesParameters.internalValue = value;
  }
  public resetS3TablesParameters() {
    this._s3TablesParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3TablesParametersInput() {
    return this._s3TablesParameters.internalValue;
  }

  // snowflake_parameters - computed: true, optional: true, required: false
  private _snowflakeParameters = new QuicksightDataSourceDataSourceParametersSnowflakeParametersOutputReference(this, "snowflake_parameters");
  public get snowflakeParameters() {
    return this._snowflakeParameters;
  }
  public putSnowflakeParameters(value: QuicksightDataSourceDataSourceParametersSnowflakeParameters) {
    this._snowflakeParameters.internalValue = value;
  }
  public resetSnowflakeParameters() {
    this._snowflakeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeParametersInput() {
    return this._snowflakeParameters.internalValue;
  }

  // spark_parameters - computed: true, optional: true, required: false
  private _sparkParameters = new QuicksightDataSourceDataSourceParametersSparkParametersOutputReference(this, "spark_parameters");
  public get sparkParameters() {
    return this._sparkParameters;
  }
  public putSparkParameters(value: QuicksightDataSourceDataSourceParametersSparkParameters) {
    this._sparkParameters.internalValue = value;
  }
  public resetSparkParameters() {
    this._sparkParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkParametersInput() {
    return this._sparkParameters.internalValue;
  }

  // sql_server_parameters - computed: true, optional: true, required: false
  private _sqlServerParameters = new QuicksightDataSourceDataSourceParametersSqlServerParametersOutputReference(this, "sql_server_parameters");
  public get sqlServerParameters() {
    return this._sqlServerParameters;
  }
  public putSqlServerParameters(value: QuicksightDataSourceDataSourceParametersSqlServerParameters) {
    this._sqlServerParameters.internalValue = value;
  }
  public resetSqlServerParameters() {
    this._sqlServerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerParametersInput() {
    return this._sqlServerParameters.internalValue;
  }

  // starburst_parameters - computed: true, optional: true, required: false
  private _starburstParameters = new QuicksightDataSourceDataSourceParametersStarburstParametersOutputReference(this, "starburst_parameters");
  public get starburstParameters() {
    return this._starburstParameters;
  }
  public putStarburstParameters(value: QuicksightDataSourceDataSourceParametersStarburstParameters) {
    this._starburstParameters.internalValue = value;
  }
  public resetStarburstParameters() {
    this._starburstParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starburstParametersInput() {
    return this._starburstParameters.internalValue;
  }

  // teradata_parameters - computed: true, optional: true, required: false
  private _teradataParameters = new QuicksightDataSourceDataSourceParametersTeradataParametersOutputReference(this, "teradata_parameters");
  public get teradataParameters() {
    return this._teradataParameters;
  }
  public putTeradataParameters(value: QuicksightDataSourceDataSourceParametersTeradataParameters) {
    this._teradataParameters.internalValue = value;
  }
  public resetTeradataParameters() {
    this._teradataParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teradataParametersInput() {
    return this._teradataParameters.internalValue;
  }

  // trino_parameters - computed: true, optional: true, required: false
  private _trinoParameters = new QuicksightDataSourceDataSourceParametersTrinoParametersOutputReference(this, "trino_parameters");
  public get trinoParameters() {
    return this._trinoParameters;
  }
  public putTrinoParameters(value: QuicksightDataSourceDataSourceParametersTrinoParameters) {
    this._trinoParameters.internalValue = value;
  }
  public resetTrinoParameters() {
    this._trinoParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trinoParametersInput() {
    return this._trinoParameters.internalValue;
  }
}
export interface QuicksightDataSourceErrorInfo {
  /**
  * <p>Error message.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#message QuicksightDataSource#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#type QuicksightDataSource#type}
  */
  readonly type?: string;
}

export function quicksightDataSourceErrorInfoToTerraform(struct?: QuicksightDataSourceErrorInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.stringToTerraform(struct!.message),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function quicksightDataSourceErrorInfoToHclTerraform(struct?: QuicksightDataSourceErrorInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class QuicksightDataSourceErrorInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceErrorInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceErrorInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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
export interface QuicksightDataSourcePermissions {
  /**
  * <p>The IAM action to grant or revoke permissions on.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#actions QuicksightDataSource#actions}
  */
  readonly actions?: string[];
  /**
  * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
  *             following:</p>
  *          <ul>
  *             <li>
  *                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
  *             </li>
  *             <li>
  *                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
  *             </li>
  *             <li>
  *                <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
  *                     ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
  *                     (This is less common.) </p>
  *             </li>
  *          </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#principal QuicksightDataSource#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#resource QuicksightDataSource#resource}
  */
  readonly resource?: string;
}

export function quicksightDataSourcePermissionsToTerraform(struct?: QuicksightDataSourcePermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    principal: cdktn.stringToTerraform(struct!.principal),
    resource: cdktn.stringToTerraform(struct!.resource),
  }
}


export function quicksightDataSourcePermissionsToHclTerraform(struct?: QuicksightDataSourcePermissions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktn.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourcePermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDataSourcePermissions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourcePermissions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._principal = undefined;
      this._resource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._principal = value.principal;
      this._resource = value.resource;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // principal - computed: true, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}

export class QuicksightDataSourcePermissionsList extends cdktn.ComplexList {
  public internalValue? : QuicksightDataSourcePermissions[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDataSourcePermissionsOutputReference {
    return new QuicksightDataSourcePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSourceSslProperties {
  /**
  * <p>A Boolean option to control whether SSL should be disabled.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#disable_ssl QuicksightDataSource#disable_ssl}
  */
  readonly disableSsl?: boolean | cdktn.IResolvable;
}

export function quicksightDataSourceSslPropertiesToTerraform(struct?: QuicksightDataSourceSslProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_ssl: cdktn.booleanToTerraform(struct!.disableSsl),
  }
}


export function quicksightDataSourceSslPropertiesToHclTerraform(struct?: QuicksightDataSourceSslProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_ssl: {
      value: cdktn.booleanToHclTerraform(struct!.disableSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceSslPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceSslProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSsl = this._disableSsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceSslProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableSsl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableSsl = value.disableSsl;
    }
  }

  // disable_ssl - computed: true, optional: true, required: false
  private _disableSsl?: boolean | cdktn.IResolvable; 
  public get disableSsl() {
    return this.getBooleanAttribute('disable_ssl');
  }
  public set disableSsl(value: boolean | cdktn.IResolvable) {
    this._disableSsl = value;
  }
  public resetDisableSsl() {
    this._disableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslInput() {
    return this._disableSsl;
  }
}
export interface QuicksightDataSourceTags {
  /**
  * <p>Tag key.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#key QuicksightDataSource#key}
  */
  readonly key?: string;
  /**
  * <p>Tag value.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#value QuicksightDataSource#value}
  */
  readonly value?: string;
}

export function quicksightDataSourceTagsToTerraform(struct?: QuicksightDataSourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightDataSourceTagsToHclTerraform(struct?: QuicksightDataSourceTags | cdktn.IResolvable): any {
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

export class QuicksightDataSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): QuicksightDataSourceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: QuicksightDataSourceTags | cdktn.IResolvable | undefined) {
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

export class QuicksightDataSourceTagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightDataSourceTags[] | cdktn.IResolvable

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
  public get(index: number): QuicksightDataSourceTagsOutputReference {
    return new QuicksightDataSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface QuicksightDataSourceVpcConnectionProperties {
  /**
  * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#vpc_connection_arn QuicksightDataSource#vpc_connection_arn}
  */
  readonly vpcConnectionArn?: string;
}

export function quicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: QuicksightDataSourceVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_connection_arn: cdktn.stringToTerraform(struct!.vpcConnectionArn),
  }
}


export function quicksightDataSourceVpcConnectionPropertiesToHclTerraform(struct?: QuicksightDataSourceVpcConnectionProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_connection_arn: {
      value: cdktn.stringToHclTerraform(struct!.vpcConnectionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightDataSourceVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightDataSourceVpcConnectionProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcConnectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectionArn = this._vpcConnectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightDataSourceVpcConnectionProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcConnectionArn = value.vpcConnectionArn;
    }
  }

  // vpc_connection_arn - computed: true, optional: true, required: false
  private _vpcConnectionArn?: string; 
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
  public set vpcConnectionArn(value: string) {
    this._vpcConnectionArn = value;
  }
  public resetVpcConnectionArn() {
    this._vpcConnectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionArnInput() {
    return this._vpcConnectionArn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source awscc_quicksight_data_source}
*/
export class QuicksightDataSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightDataSource to import
  * @param importFromId The id of the existing QuicksightDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/quicksight_data_source awscc_quicksight_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_data_source',
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
    this._alternateDataSourceParameters.internalValue = config.alternateDataSourceParameters;
    this._awsAccountId = config.awsAccountId;
    this._credentials.internalValue = config.credentials;
    this._dataSourceId = config.dataSourceId;
    this._dataSourceParameters.internalValue = config.dataSourceParameters;
    this._errorInfo.internalValue = config.errorInfo;
    this._folderArns = config.folderArns;
    this._name = config.name;
    this._permissions.internalValue = config.permissions;
    this._sslProperties.internalValue = config.sslProperties;
    this._tags.internalValue = config.tags;
    this._type = config.type;
    this._vpcConnectionProperties.internalValue = config.vpcConnectionProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_data_source_parameters - computed: true, optional: true, required: false
  private _alternateDataSourceParameters = new QuicksightDataSourceAlternateDataSourceParametersList(this, "alternate_data_source_parameters", false);
  public get alternateDataSourceParameters() {
    return this._alternateDataSourceParameters;
  }
  public putAlternateDataSourceParameters(value: QuicksightDataSourceAlternateDataSourceParameters[] | cdktn.IResolvable) {
    this._alternateDataSourceParameters.internalValue = value;
  }
  public resetAlternateDataSourceParameters() {
    this._alternateDataSourceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateDataSourceParametersInput() {
    return this._alternateDataSourceParameters.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // credentials - computed: true, optional: true, required: false
  private _credentials = new QuicksightDataSourceCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: QuicksightDataSourceCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // data_source_id - computed: true, optional: true, required: false
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  public resetDataSourceId() {
    this._dataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // data_source_parameters - computed: true, optional: true, required: false
  private _dataSourceParameters = new QuicksightDataSourceDataSourceParametersOutputReference(this, "data_source_parameters");
  public get dataSourceParameters() {
    return this._dataSourceParameters;
  }
  public putDataSourceParameters(value: QuicksightDataSourceDataSourceParameters) {
    this._dataSourceParameters.internalValue = value;
  }
  public resetDataSourceParameters() {
    this._dataSourceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceParametersInput() {
    return this._dataSourceParameters.internalValue;
  }

  // error_info - computed: true, optional: true, required: false
  private _errorInfo = new QuicksightDataSourceErrorInfoOutputReference(this, "error_info");
  public get errorInfo() {
    return this._errorInfo;
  }
  public putErrorInfo(value: QuicksightDataSourceErrorInfo) {
    this._errorInfo.internalValue = value;
  }
  public resetErrorInfo() {
    this._errorInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInfoInput() {
    return this._errorInfo.internalValue;
  }

  // folder_arns - computed: true, optional: true, required: false
  private _folderArns?: string[]; 
  public get folderArns() {
    return this.getListAttribute('folder_arns');
  }
  public set folderArns(value: string[]) {
    this._folderArns = value;
  }
  public resetFolderArns() {
    this._folderArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderArnsInput() {
    return this._folderArns;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions = new QuicksightDataSourcePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: QuicksightDataSourcePermissions[] | cdktn.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // ssl_properties - computed: true, optional: true, required: false
  private _sslProperties = new QuicksightDataSourceSslPropertiesOutputReference(this, "ssl_properties");
  public get sslProperties() {
    return this._sslProperties;
  }
  public putSslProperties(value: QuicksightDataSourceSslProperties) {
    this._sslProperties.internalValue = value;
  }
  public resetSslProperties() {
    this._sslProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPropertiesInput() {
    return this._sslProperties.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QuicksightDataSourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightDataSourceTags[] | cdktn.IResolvable) {
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

  // vpc_connection_properties - computed: true, optional: true, required: false
  private _vpcConnectionProperties = new QuicksightDataSourceVpcConnectionPropertiesOutputReference(this, "vpc_connection_properties");
  public get vpcConnectionProperties() {
    return this._vpcConnectionProperties;
  }
  public putVpcConnectionProperties(value: QuicksightDataSourceVpcConnectionProperties) {
    this._vpcConnectionProperties.internalValue = value;
  }
  public resetVpcConnectionProperties() {
    this._vpcConnectionProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectionPropertiesInput() {
    return this._vpcConnectionProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_data_source_parameters: cdktn.listMapper(quicksightDataSourceAlternateDataSourceParametersToTerraform, false)(this._alternateDataSourceParameters.internalValue),
      aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
      credentials: quicksightDataSourceCredentialsToTerraform(this._credentials.internalValue),
      data_source_id: cdktn.stringToTerraform(this._dataSourceId),
      data_source_parameters: quicksightDataSourceDataSourceParametersToTerraform(this._dataSourceParameters.internalValue),
      error_info: quicksightDataSourceErrorInfoToTerraform(this._errorInfo.internalValue),
      folder_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._folderArns),
      name: cdktn.stringToTerraform(this._name),
      permissions: cdktn.listMapper(quicksightDataSourcePermissionsToTerraform, false)(this._permissions.internalValue),
      ssl_properties: quicksightDataSourceSslPropertiesToTerraform(this._sslProperties.internalValue),
      tags: cdktn.listMapper(quicksightDataSourceTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
      vpc_connection_properties: quicksightDataSourceVpcConnectionPropertiesToTerraform(this._vpcConnectionProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternate_data_source_parameters: {
        value: cdktn.listMapperHcl(quicksightDataSourceAlternateDataSourceParametersToHclTerraform, false)(this._alternateDataSourceParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightDataSourceAlternateDataSourceParametersList",
      },
      aws_account_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: quicksightDataSourceCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightDataSourceCredentials",
      },
      data_source_id: {
        value: cdktn.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_parameters: {
        value: quicksightDataSourceDataSourceParametersToHclTerraform(this._dataSourceParameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightDataSourceDataSourceParameters",
      },
      error_info: {
        value: quicksightDataSourceErrorInfoToHclTerraform(this._errorInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightDataSourceErrorInfo",
      },
      folder_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._folderArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktn.listMapperHcl(quicksightDataSourcePermissionsToHclTerraform, false)(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightDataSourcePermissionsList",
      },
      ssl_properties: {
        value: quicksightDataSourceSslPropertiesToHclTerraform(this._sslProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightDataSourceSslProperties",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightDataSourceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightDataSourceTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_connection_properties: {
        value: quicksightDataSourceVpcConnectionPropertiesToHclTerraform(this._vpcConnectionProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightDataSourceVpcConnectionProperties",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
