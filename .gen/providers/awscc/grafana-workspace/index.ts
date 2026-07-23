// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GrafanaWorkspaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * These enums represent valid account access types. Specifically these enums determine whether the workspace can access AWS resources in the AWS account only, or whether it can also access resources in other accounts in the same organization. If the value CURRENT_ACCOUNT is used, a workspace role ARN must be provided. If the value is ORGANIZATION, a list of organizational units must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}
  */
  readonly accountAccessType: string;
  /**
  * List of authentication providers to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}
  */
  readonly authenticationProviders: string[];
  /**
  * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#client_token GrafanaWorkspace#client_token}
  */
  readonly clientToken?: string;
  /**
  * List of data sources on the service managed IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}
  */
  readonly dataSources?: string[];
  /**
  * Description of a workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}
  */
  readonly description?: string;
  /**
  * The version of Grafana to support in your workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}
  */
  readonly grafanaVersion?: string;
  /**
  * The user friendly name of a workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}
  */
  readonly name?: string;
  /**
  * The configuration settings for Network Access Control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#network_access_control GrafanaWorkspace#network_access_control}
  */
  readonly networkAccessControl?: GrafanaWorkspaceNetworkAccessControl;
  /**
  * List of notification destinations on the customers service managed IAM role that the Grafana workspace can query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}
  */
  readonly notificationDestinations?: string[];
  /**
  * The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}
  */
  readonly organizationRoleName?: string;
  /**
  * List of Organizational Units containing AWS accounts the Grafana workspace can pull data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}
  */
  readonly organizationalUnits?: string[];
  /**
  * These enums represent valid permission types to use when creating or configuring a Grafana workspace. The SERVICE_MANAGED permission type means the Managed Grafana service will create a workspace IAM role on your behalf. The CUSTOMER_MANAGED permission type means that the customer is expected to provide an IAM role that the Grafana workspace can use to query data sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}
  */
  readonly permissionType: string;
  /**
  * Allow workspace admins to install plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#plugin_admin_enabled GrafanaWorkspace#plugin_admin_enabled}
  */
  readonly pluginAdminEnabled?: boolean | cdktn.IResolvable;
  /**
  * IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}
  */
  readonly roleArn?: string;
  /**
  * SAML configuration data associated with an AMG workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#saml_configuration GrafanaWorkspace#saml_configuration}
  */
  readonly samlConfiguration?: GrafanaWorkspaceSamlConfiguration;
  /**
  * The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}
  */
  readonly stackSetName?: string;
  /**
  * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}
  */
  readonly vpcConfiguration?: GrafanaWorkspaceVpcConfiguration;
}
export interface GrafanaWorkspaceNetworkAccessControl {
  /**
  * The list of prefix list IDs. A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration then no IP addresses will be allowed to access the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#prefix_list_ids GrafanaWorkspace#prefix_list_ids}
  */
  readonly prefixListIds?: string[];
  /**
  * The list of Amazon VPC endpoint IDs for the workspace. If a NetworkAccessConfiguration is specified then only VPC endpoints specified here will be allowed to access the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#vpce_ids GrafanaWorkspace#vpce_ids}
  */
  readonly vpceIds?: string[];
}

export function grafanaWorkspaceNetworkAccessControlToTerraform(struct?: GrafanaWorkspaceNetworkAccessControl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix_list_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.prefixListIds),
    vpce_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpceIds),
  }
}


export function grafanaWorkspaceNetworkAccessControlToHclTerraform(struct?: GrafanaWorkspaceNetworkAccessControl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix_list_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.prefixListIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpce_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaWorkspaceNetworkAccessControlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrafanaWorkspaceNetworkAccessControl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIds = this._prefixListIds;
    }
    if (this._vpceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpceIds = this._vpceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaWorkspaceNetworkAccessControl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixListIds = undefined;
      this._vpceIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixListIds = value.prefixListIds;
      this._vpceIds = value.vpceIds;
    }
  }

  // prefix_list_ids - computed: true, optional: true, required: false
  private _prefixListIds?: string[]; 
  public get prefixListIds() {
    return cdktn.Fn.tolist(this.getListAttribute('prefix_list_ids'));
  }
  public set prefixListIds(value: string[]) {
    this._prefixListIds = value;
  }
  public resetPrefixListIds() {
    this._prefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdsInput() {
    return this._prefixListIds;
  }

  // vpce_ids - computed: true, optional: true, required: false
  private _vpceIds?: string[]; 
  public get vpceIds() {
    return cdktn.Fn.tolist(this.getListAttribute('vpce_ids'));
  }
  public set vpceIds(value: string[]) {
    this._vpceIds = value;
  }
  public resetVpceIds() {
    this._vpceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpceIdsInput() {
    return this._vpceIds;
  }
}
export interface GrafanaWorkspaceSamlConfigurationAssertionAttributes {
  /**
  * Name of the attribute within the SAML assert to use as the users email in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#email GrafanaWorkspace#email}
  */
  readonly email?: string;
  /**
  * Name of the attribute within the SAML assert to use as the users groups in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#groups GrafanaWorkspace#groups}
  */
  readonly groups?: string;
  /**
  * Name of the attribute within the SAML assert to use as the users login handle in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#login GrafanaWorkspace#login}
  */
  readonly login?: string;
  /**
  * Name of the attribute within the SAML assert to use as the users name in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}
  */
  readonly name?: string;
  /**
  * Name of the attribute within the SAML assert to use as the users organizations in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#org GrafanaWorkspace#org}
  */
  readonly org?: string;
  /**
  * Name of the attribute within the SAML assert to use as the users roles in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#role GrafanaWorkspace#role}
  */
  readonly role?: string;
}

export function grafanaWorkspaceSamlConfigurationAssertionAttributesToTerraform(struct?: GrafanaWorkspaceSamlConfigurationAssertionAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
    groups: cdktn.stringToTerraform(struct!.groups),
    login: cdktn.stringToTerraform(struct!.login),
    name: cdktn.stringToTerraform(struct!.name),
    org: cdktn.stringToTerraform(struct!.org),
    role: cdktn.stringToTerraform(struct!.role),
  }
}


export function grafanaWorkspaceSamlConfigurationAssertionAttributesToHclTerraform(struct?: GrafanaWorkspaceSamlConfigurationAssertionAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktn.stringToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login: {
      value: cdktn.stringToHclTerraform(struct!.login),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org: {
      value: cdktn.stringToHclTerraform(struct!.org),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrafanaWorkspaceSamlConfigurationAssertionAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._login !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._org !== undefined) {
      hasAnyValues = true;
      internalValueResult.org = this._org;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaWorkspaceSamlConfigurationAssertionAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._groups = undefined;
      this._login = undefined;
      this._name = undefined;
      this._org = undefined;
      this._role = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._groups = value.groups;
      this._login = value.login;
      this._name = value.name;
      this._org = value.org;
      this._role = value.role;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // login - computed: true, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org - computed: true, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface GrafanaWorkspaceSamlConfigurationIdpMetadata {
  /**
  * URL that vends the IdPs metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#url GrafanaWorkspace#url}
  */
  readonly url?: string;
  /**
  * XML blob of the IdPs metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#xml GrafanaWorkspace#xml}
  */
  readonly xml?: string;
}

export function grafanaWorkspaceSamlConfigurationIdpMetadataToTerraform(struct?: GrafanaWorkspaceSamlConfigurationIdpMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
    xml: cdktn.stringToTerraform(struct!.xml),
  }
}


export function grafanaWorkspaceSamlConfigurationIdpMetadataToHclTerraform(struct?: GrafanaWorkspaceSamlConfigurationIdpMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xml: {
      value: cdktn.stringToHclTerraform(struct!.xml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrafanaWorkspaceSamlConfigurationIdpMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._xml !== undefined) {
      hasAnyValues = true;
      internalValueResult.xml = this._xml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaWorkspaceSamlConfigurationIdpMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
      this._xml = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
      this._xml = value.xml;
    }
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // xml - computed: true, optional: true, required: false
  private _xml?: string; 
  public get xml() {
    return this.getStringAttribute('xml');
  }
  public set xml(value: string) {
    this._xml = value;
  }
  public resetXml() {
    this._xml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlInput() {
    return this._xml;
  }
}
export interface GrafanaWorkspaceSamlConfigurationRoleValues {
  /**
  * List of SAML roles which will be mapped into the Grafana Admin role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#admin GrafanaWorkspace#admin}
  */
  readonly admin?: string[];
  /**
  * List of SAML roles which will be mapped into the Grafana Editor role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#editor GrafanaWorkspace#editor}
  */
  readonly editor?: string[];
}

export function grafanaWorkspaceSamlConfigurationRoleValuesToTerraform(struct?: GrafanaWorkspaceSamlConfigurationRoleValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    admin: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.admin),
    editor: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.editor),
  }
}


export function grafanaWorkspaceSamlConfigurationRoleValuesToHclTerraform(struct?: GrafanaWorkspaceSamlConfigurationRoleValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    admin: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.admin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    editor: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.editor),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrafanaWorkspaceSamlConfigurationRoleValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admin !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin;
    }
    if (this._editor !== undefined) {
      hasAnyValues = true;
      internalValueResult.editor = this._editor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaWorkspaceSamlConfigurationRoleValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admin = undefined;
      this._editor = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admin = value.admin;
      this._editor = value.editor;
    }
  }

  // admin - computed: true, optional: true, required: false
  private _admin?: string[]; 
  public get admin() {
    return this.getListAttribute('admin');
  }
  public set admin(value: string[]) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // editor - computed: true, optional: true, required: false
  private _editor?: string[]; 
  public get editor() {
    return this.getListAttribute('editor');
  }
  public set editor(value: string[]) {
    this._editor = value;
  }
  public resetEditor() {
    this._editor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editorInput() {
    return this._editor;
  }
}
export interface GrafanaWorkspaceSamlConfiguration {
  /**
  * List of SAML organizations allowed to access Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#allowed_organizations GrafanaWorkspace#allowed_organizations}
  */
  readonly allowedOrganizations?: string[];
  /**
  * Maps Grafana friendly names to the IdPs SAML attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#assertion_attributes GrafanaWorkspace#assertion_attributes}
  */
  readonly assertionAttributes?: GrafanaWorkspaceSamlConfigurationAssertionAttributes;
  /**
  * IdP Metadata used to configure SAML authentication in Grafana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#idp_metadata GrafanaWorkspace#idp_metadata}
  */
  readonly idpMetadata?: GrafanaWorkspaceSamlConfigurationIdpMetadata;
  /**
  * The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#login_validity_duration GrafanaWorkspace#login_validity_duration}
  */
  readonly loginValidityDuration?: number;
  /**
  * Maps SAML roles to the Grafana Editor and Admin roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#role_values GrafanaWorkspace#role_values}
  */
  readonly roleValues?: GrafanaWorkspaceSamlConfigurationRoleValues;
}

export function grafanaWorkspaceSamlConfigurationToTerraform(struct?: GrafanaWorkspaceSamlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_organizations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedOrganizations),
    assertion_attributes: grafanaWorkspaceSamlConfigurationAssertionAttributesToTerraform(struct!.assertionAttributes),
    idp_metadata: grafanaWorkspaceSamlConfigurationIdpMetadataToTerraform(struct!.idpMetadata),
    login_validity_duration: cdktn.numberToTerraform(struct!.loginValidityDuration),
    role_values: grafanaWorkspaceSamlConfigurationRoleValuesToTerraform(struct!.roleValues),
  }
}


export function grafanaWorkspaceSamlConfigurationToHclTerraform(struct?: GrafanaWorkspaceSamlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_organizations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedOrganizations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    assertion_attributes: {
      value: grafanaWorkspaceSamlConfigurationAssertionAttributesToHclTerraform(struct!.assertionAttributes),
      isBlock: true,
      type: "struct",
      storageClassType: "GrafanaWorkspaceSamlConfigurationAssertionAttributes",
    },
    idp_metadata: {
      value: grafanaWorkspaceSamlConfigurationIdpMetadataToHclTerraform(struct!.idpMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "GrafanaWorkspaceSamlConfigurationIdpMetadata",
    },
    login_validity_duration: {
      value: cdktn.numberToHclTerraform(struct!.loginValidityDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_values: {
      value: grafanaWorkspaceSamlConfigurationRoleValuesToHclTerraform(struct!.roleValues),
      isBlock: true,
      type: "struct",
      storageClassType: "GrafanaWorkspaceSamlConfigurationRoleValues",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaWorkspaceSamlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrafanaWorkspaceSamlConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrganizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrganizations = this._allowedOrganizations;
    }
    if (this._assertionAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionAttributes = this._assertionAttributes?.internalValue;
    }
    if (this._idpMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadata = this._idpMetadata?.internalValue;
    }
    if (this._loginValidityDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginValidityDuration = this._loginValidityDuration;
    }
    if (this._roleValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleValues = this._roleValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaWorkspaceSamlConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedOrganizations = undefined;
      this._assertionAttributes.internalValue = undefined;
      this._idpMetadata.internalValue = undefined;
      this._loginValidityDuration = undefined;
      this._roleValues.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedOrganizations = value.allowedOrganizations;
      this._assertionAttributes.internalValue = value.assertionAttributes;
      this._idpMetadata.internalValue = value.idpMetadata;
      this._loginValidityDuration = value.loginValidityDuration;
      this._roleValues.internalValue = value.roleValues;
    }
  }

  // allowed_organizations - computed: true, optional: true, required: false
  private _allowedOrganizations?: string[]; 
  public get allowedOrganizations() {
    return this.getListAttribute('allowed_organizations');
  }
  public set allowedOrganizations(value: string[]) {
    this._allowedOrganizations = value;
  }
  public resetAllowedOrganizations() {
    this._allowedOrganizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOrganizationsInput() {
    return this._allowedOrganizations;
  }

  // assertion_attributes - computed: true, optional: true, required: false
  private _assertionAttributes = new GrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference(this, "assertion_attributes");
  public get assertionAttributes() {
    return this._assertionAttributes;
  }
  public putAssertionAttributes(value: GrafanaWorkspaceSamlConfigurationAssertionAttributes) {
    this._assertionAttributes.internalValue = value;
  }
  public resetAssertionAttributes() {
    this._assertionAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionAttributesInput() {
    return this._assertionAttributes.internalValue;
  }

  // idp_metadata - computed: true, optional: true, required: false
  private _idpMetadata = new GrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference(this, "idp_metadata");
  public get idpMetadata() {
    return this._idpMetadata;
  }
  public putIdpMetadata(value: GrafanaWorkspaceSamlConfigurationIdpMetadata) {
    this._idpMetadata.internalValue = value;
  }
  public resetIdpMetadata() {
    this._idpMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataInput() {
    return this._idpMetadata.internalValue;
  }

  // login_validity_duration - computed: true, optional: true, required: false
  private _loginValidityDuration?: number; 
  public get loginValidityDuration() {
    return this.getNumberAttribute('login_validity_duration');
  }
  public set loginValidityDuration(value: number) {
    this._loginValidityDuration = value;
  }
  public resetLoginValidityDuration() {
    this._loginValidityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginValidityDurationInput() {
    return this._loginValidityDuration;
  }

  // role_values - computed: true, optional: true, required: false
  private _roleValues = new GrafanaWorkspaceSamlConfigurationRoleValuesOutputReference(this, "role_values");
  public get roleValues() {
    return this._roleValues;
  }
  public putRoleValues(value: GrafanaWorkspaceSamlConfigurationRoleValues) {
    this._roleValues.internalValue = value;
  }
  public resetRoleValues() {
    this._roleValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleValuesInput() {
    return this._roleValues.internalValue;
  }
}
export interface GrafanaWorkspaceVpcConfiguration {
  /**
  * The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function grafanaWorkspaceVpcConfigurationToTerraform(struct?: GrafanaWorkspaceVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function grafanaWorkspaceVpcConfigurationToHclTerraform(struct?: GrafanaWorkspaceVpcConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaWorkspaceVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrafanaWorkspaceVpcConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GrafanaWorkspaceVpcConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
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
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace awscc_grafana_workspace}
*/
export class GrafanaWorkspace extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_grafana_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GrafanaWorkspace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrafanaWorkspace to import
  * @param importFromId The id of the existing GrafanaWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrafanaWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_grafana_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/grafana_workspace awscc_grafana_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: GrafanaWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_grafana_workspace',
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
    this._accountAccessType = config.accountAccessType;
    this._authenticationProviders = config.authenticationProviders;
    this._clientToken = config.clientToken;
    this._dataSources = config.dataSources;
    this._description = config.description;
    this._grafanaVersion = config.grafanaVersion;
    this._name = config.name;
    this._networkAccessControl.internalValue = config.networkAccessControl;
    this._notificationDestinations = config.notificationDestinations;
    this._organizationRoleName = config.organizationRoleName;
    this._organizationalUnits = config.organizationalUnits;
    this._permissionType = config.permissionType;
    this._pluginAdminEnabled = config.pluginAdminEnabled;
    this._roleArn = config.roleArn;
    this._samlConfiguration.internalValue = config.samlConfiguration;
    this._stackSetName = config.stackSetName;
    this._vpcConfiguration.internalValue = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_access_type - computed: false, optional: false, required: true
  private _accountAccessType?: string; 
  public get accountAccessType() {
    return this.getStringAttribute('account_access_type');
  }
  public set accountAccessType(value: string) {
    this._accountAccessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAccessTypeInput() {
    return this._accountAccessType;
  }

  // authentication_providers - computed: false, optional: false, required: true
  private _authenticationProviders?: string[]; 
  public get authenticationProviders() {
    return cdktn.Fn.tolist(this.getListAttribute('authentication_providers'));
  }
  public set authenticationProviders(value: string[]) {
    this._authenticationProviders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProvidersInput() {
    return this._authenticationProviders;
  }

  // client_token - computed: true, optional: true, required: false
  private _clientToken?: string; 
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // data_sources - computed: true, optional: true, required: false
  private _dataSources?: string[]; 
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }
  public set dataSources(value: string[]) {
    this._dataSources = value;
  }
  public resetDataSources() {
    this._dataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // grafana_version - computed: true, optional: true, required: false
  private _grafanaVersion?: string; 
  public get grafanaVersion() {
    return this.getStringAttribute('grafana_version');
  }
  public set grafanaVersion(value: string) {
    this._grafanaVersion = value;
  }
  public resetGrafanaVersion() {
    this._grafanaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaVersionInput() {
    return this._grafanaVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modification_timestamp - computed: true, optional: false, required: false
  public get modificationTimestamp() {
    return this.getStringAttribute('modification_timestamp');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_access_control - computed: true, optional: true, required: false
  private _networkAccessControl = new GrafanaWorkspaceNetworkAccessControlOutputReference(this, "network_access_control");
  public get networkAccessControl() {
    return this._networkAccessControl;
  }
  public putNetworkAccessControl(value: GrafanaWorkspaceNetworkAccessControl) {
    this._networkAccessControl.internalValue = value;
  }
  public resetNetworkAccessControl() {
    this._networkAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessControlInput() {
    return this._networkAccessControl.internalValue;
  }

  // notification_destinations - computed: true, optional: true, required: false
  private _notificationDestinations?: string[]; 
  public get notificationDestinations() {
    return this.getListAttribute('notification_destinations');
  }
  public set notificationDestinations(value: string[]) {
    this._notificationDestinations = value;
  }
  public resetNotificationDestinations() {
    this._notificationDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDestinationsInput() {
    return this._notificationDestinations;
  }

  // organization_role_name - computed: true, optional: true, required: false
  private _organizationRoleName?: string; 
  public get organizationRoleName() {
    return this.getStringAttribute('organization_role_name');
  }
  public set organizationRoleName(value: string) {
    this._organizationRoleName = value;
  }
  public resetOrganizationRoleName() {
    this._organizationRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRoleNameInput() {
    return this._organizationRoleName;
  }

  // organizational_units - computed: true, optional: true, required: false
  private _organizationalUnits?: string[]; 
  public get organizationalUnits() {
    return this.getListAttribute('organizational_units');
  }
  public set organizationalUnits(value: string[]) {
    this._organizationalUnits = value;
  }
  public resetOrganizationalUnits() {
    this._organizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitsInput() {
    return this._organizationalUnits;
  }

  // permission_type - computed: false, optional: false, required: true
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
  }

  // plugin_admin_enabled - computed: true, optional: true, required: false
  private _pluginAdminEnabled?: boolean | cdktn.IResolvable; 
  public get pluginAdminEnabled() {
    return this.getBooleanAttribute('plugin_admin_enabled');
  }
  public set pluginAdminEnabled(value: boolean | cdktn.IResolvable) {
    this._pluginAdminEnabled = value;
  }
  public resetPluginAdminEnabled() {
    this._pluginAdminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginAdminEnabledInput() {
    return this._pluginAdminEnabled;
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

  // saml_configuration - computed: true, optional: true, required: false
  private _samlConfiguration = new GrafanaWorkspaceSamlConfigurationOutputReference(this, "saml_configuration");
  public get samlConfiguration() {
    return this._samlConfiguration;
  }
  public putSamlConfiguration(value: GrafanaWorkspaceSamlConfiguration) {
    this._samlConfiguration.internalValue = value;
  }
  public resetSamlConfiguration() {
    this._samlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlConfigurationInput() {
    return this._samlConfiguration.internalValue;
  }

  // saml_configuration_status - computed: true, optional: false, required: false
  public get samlConfigurationStatus() {
    return this.getStringAttribute('saml_configuration_status');
  }

  // sso_client_id - computed: true, optional: false, required: false
  public get ssoClientId() {
    return this.getStringAttribute('sso_client_id');
  }

  // stack_set_name - computed: true, optional: true, required: false
  private _stackSetName?: string; 
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }
  public set stackSetName(value: string) {
    this._stackSetName = value;
  }
  public resetStackSetName() {
    this._stackSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetNameInput() {
    return this._stackSetName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_configuration - computed: true, optional: true, required: false
  private _vpcConfiguration = new GrafanaWorkspaceVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: GrafanaWorkspaceVpcConfiguration) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_access_type: cdktn.stringToTerraform(this._accountAccessType),
      authentication_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._authenticationProviders),
      client_token: cdktn.stringToTerraform(this._clientToken),
      data_sources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dataSources),
      description: cdktn.stringToTerraform(this._description),
      grafana_version: cdktn.stringToTerraform(this._grafanaVersion),
      name: cdktn.stringToTerraform(this._name),
      network_access_control: grafanaWorkspaceNetworkAccessControlToTerraform(this._networkAccessControl.internalValue),
      notification_destinations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notificationDestinations),
      organization_role_name: cdktn.stringToTerraform(this._organizationRoleName),
      organizational_units: cdktn.listMapper(cdktn.stringToTerraform, false)(this._organizationalUnits),
      permission_type: cdktn.stringToTerraform(this._permissionType),
      plugin_admin_enabled: cdktn.booleanToTerraform(this._pluginAdminEnabled),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      saml_configuration: grafanaWorkspaceSamlConfigurationToTerraform(this._samlConfiguration.internalValue),
      stack_set_name: cdktn.stringToTerraform(this._stackSetName),
      vpc_configuration: grafanaWorkspaceVpcConfigurationToTerraform(this._vpcConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_access_type: {
        value: cdktn.stringToHclTerraform(this._accountAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_providers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._authenticationProviders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_token: {
        value: cdktn.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_sources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dataSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grafana_version: {
        value: cdktn.stringToHclTerraform(this._grafanaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_access_control: {
        value: grafanaWorkspaceNetworkAccessControlToHclTerraform(this._networkAccessControl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GrafanaWorkspaceNetworkAccessControl",
      },
      notification_destinations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notificationDestinations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      organization_role_name: {
        value: cdktn.stringToHclTerraform(this._organizationRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_units: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._organizationalUnits),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      permission_type: {
        value: cdktn.stringToHclTerraform(this._permissionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_admin_enabled: {
        value: cdktn.booleanToHclTerraform(this._pluginAdminEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_configuration: {
        value: grafanaWorkspaceSamlConfigurationToHclTerraform(this._samlConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GrafanaWorkspaceSamlConfiguration",
      },
      stack_set_name: {
        value: cdktn.stringToHclTerraform(this._stackSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_configuration: {
        value: grafanaWorkspaceVpcConfigurationToHclTerraform(this._vpcConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GrafanaWorkspaceVpcConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
