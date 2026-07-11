// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/grafana_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGrafanaWorkspaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/grafana_workspace#id DataAwsccGrafanaWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGrafanaWorkspaceNetworkAccessControl {
}

export function dataAwsccGrafanaWorkspaceNetworkAccessControlToTerraform(struct?: DataAwsccGrafanaWorkspaceNetworkAccessControl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGrafanaWorkspaceNetworkAccessControlToHclTerraform(struct?: DataAwsccGrafanaWorkspaceNetworkAccessControl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGrafanaWorkspaceNetworkAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGrafanaWorkspaceNetworkAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_list_ids - computed: true, optional: false, required: false
  public get prefixListIds() {
    return cdktn.Fn.tolist(this.getListAttribute('prefix_list_ids'));
  }

  // vpce_ids - computed: true, optional: false, required: false
  public get vpceIds() {
    return cdktn.Fn.tolist(this.getListAttribute('vpce_ids'));
  }
}
export interface DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes {
}

export function dataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesToTerraform(struct?: DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesToHclTerraform(struct?: DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getStringAttribute('groups');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org - computed: true, optional: false, required: false
  public get org() {
    return this.getStringAttribute('org');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}
export interface DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata {
}

export function dataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataToTerraform(struct?: DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataToHclTerraform(struct?: DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // xml - computed: true, optional: false, required: false
  public get xml() {
    return this.getStringAttribute('xml');
  }
}
export interface DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues {
}

export function dataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesToTerraform(struct?: DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesToHclTerraform(struct?: DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getListAttribute('admin');
  }

  // editor - computed: true, optional: false, required: false
  public get editor() {
    return this.getListAttribute('editor');
  }
}
export interface DataAwsccGrafanaWorkspaceSamlConfiguration {
}

export function dataAwsccGrafanaWorkspaceSamlConfigurationToTerraform(struct?: DataAwsccGrafanaWorkspaceSamlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGrafanaWorkspaceSamlConfigurationToHclTerraform(struct?: DataAwsccGrafanaWorkspaceSamlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGrafanaWorkspaceSamlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGrafanaWorkspaceSamlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_organizations - computed: true, optional: false, required: false
  public get allowedOrganizations() {
    return this.getListAttribute('allowed_organizations');
  }

  // assertion_attributes - computed: true, optional: false, required: false
  private _assertionAttributes = new DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference(this, "assertion_attributes");
  public get assertionAttributes() {
    return this._assertionAttributes;
  }

  // idp_metadata - computed: true, optional: false, required: false
  private _idpMetadata = new DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference(this, "idp_metadata");
  public get idpMetadata() {
    return this._idpMetadata;
  }

  // login_validity_duration - computed: true, optional: false, required: false
  public get loginValidityDuration() {
    return this.getNumberAttribute('login_validity_duration');
  }

  // role_values - computed: true, optional: false, required: false
  private _roleValues = new DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference(this, "role_values");
  public get roleValues() {
    return this._roleValues;
  }
}
export interface DataAwsccGrafanaWorkspaceVpcConfiguration {
}

export function dataAwsccGrafanaWorkspaceVpcConfigurationToTerraform(struct?: DataAwsccGrafanaWorkspaceVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGrafanaWorkspaceVpcConfigurationToHclTerraform(struct?: DataAwsccGrafanaWorkspaceVpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGrafanaWorkspaceVpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGrafanaWorkspaceVpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/grafana_workspace awscc_grafana_workspace}
*/
export class DataAwsccGrafanaWorkspace extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_grafana_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGrafanaWorkspace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGrafanaWorkspace to import
  * @param importFromId The id of the existing DataAwsccGrafanaWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/grafana_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGrafanaWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_grafana_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/grafana_workspace awscc_grafana_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGrafanaWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGrafanaWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_grafana_workspace',
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

  // account_access_type - computed: true, optional: false, required: false
  public get accountAccessType() {
    return this.getStringAttribute('account_access_type');
  }

  // authentication_providers - computed: true, optional: false, required: false
  public get authenticationProviders() {
    return cdktn.Fn.tolist(this.getListAttribute('authentication_providers'));
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // data_sources - computed: true, optional: false, required: false
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // grafana_version - computed: true, optional: false, required: false
  public get grafanaVersion() {
    return this.getStringAttribute('grafana_version');
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

  // modification_timestamp - computed: true, optional: false, required: false
  public get modificationTimestamp() {
    return this.getStringAttribute('modification_timestamp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_access_control - computed: true, optional: false, required: false
  private _networkAccessControl = new DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference(this, "network_access_control");
  public get networkAccessControl() {
    return this._networkAccessControl;
  }

  // notification_destinations - computed: true, optional: false, required: false
  public get notificationDestinations() {
    return this.getListAttribute('notification_destinations');
  }

  // organization_role_name - computed: true, optional: false, required: false
  public get organizationRoleName() {
    return this.getStringAttribute('organization_role_name');
  }

  // organizational_units - computed: true, optional: false, required: false
  public get organizationalUnits() {
    return this.getListAttribute('organizational_units');
  }

  // permission_type - computed: true, optional: false, required: false
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }

  // plugin_admin_enabled - computed: true, optional: false, required: false
  public get pluginAdminEnabled() {
    return this.getBooleanAttribute('plugin_admin_enabled');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // saml_configuration - computed: true, optional: false, required: false
  private _samlConfiguration = new DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference(this, "saml_configuration");
  public get samlConfiguration() {
    return this._samlConfiguration;
  }

  // saml_configuration_status - computed: true, optional: false, required: false
  public get samlConfigurationStatus() {
    return this.getStringAttribute('saml_configuration_status');
  }

  // sso_client_id - computed: true, optional: false, required: false
  public get ssoClientId() {
    return this.getStringAttribute('sso_client_id');
  }

  // stack_set_name - computed: true, optional: false, required: false
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
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
