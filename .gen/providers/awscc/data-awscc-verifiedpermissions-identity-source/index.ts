// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/verifiedpermissions_identity_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccVerifiedpermissionsIdentitySourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/verifiedpermissions_identity_source#id DataAwsccVerifiedpermissionsIdentitySource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration {
}

export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToHclTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_entity_type - computed: true, optional: false, required: false
  public get groupEntityType() {
    return this.getStringAttribute('group_entity_type');
  }
}
export interface DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration {
}

export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToHclTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_ids - computed: true, optional: false, required: false
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }

  // group_configuration - computed: true, optional: false, required: false
  private _groupConfiguration = new DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference(this, "group_configuration");
  public get groupConfiguration() {
    return this._groupConfiguration;
  }

  // user_pool_arn - computed: true, optional: false, required: false
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
}
export interface DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration {
}

export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToHclTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_claim - computed: true, optional: false, required: false
  public get groupClaim() {
    return this.getStringAttribute('group_claim');
  }

  // group_entity_type - computed: true, optional: false, required: false
  public get groupEntityType() {
    return this.getStringAttribute('group_entity_type');
  }
}
export interface DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {
}

export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToHclTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audiences - computed: true, optional: false, required: false
  public get audiences() {
    return this.getListAttribute('audiences');
  }

  // principal_id_claim - computed: true, optional: false, required: false
  public get principalIdClaim() {
    return this.getStringAttribute('principal_id_claim');
  }
}
export interface DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {
}

export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToHclTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_ids - computed: true, optional: false, required: false
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }

  // principal_id_claim - computed: true, optional: false, required: false
  public get principalIdClaim() {
    return this.getStringAttribute('principal_id_claim');
  }
}
export interface DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection {
}

export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToHclTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token_only - computed: true, optional: false, required: false
  private _accessTokenOnly = new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference(this, "access_token_only");
  public get accessTokenOnly() {
    return this._accessTokenOnly;
  }

  // identity_token_only - computed: true, optional: false, required: false
  private _identityTokenOnly = new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference(this, "identity_token_only");
  public get identityTokenOnly() {
    return this._identityTokenOnly;
  }
}
export interface DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration {
}

export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToHclTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_id_prefix - computed: true, optional: false, required: false
  public get entityIdPrefix() {
    return this.getStringAttribute('entity_id_prefix');
  }

  // group_configuration - computed: true, optional: false, required: false
  private _groupConfiguration = new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference(this, "group_configuration");
  public get groupConfiguration() {
    return this._groupConfiguration;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // token_selection - computed: true, optional: false, required: false
  private _tokenSelection = new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference(this, "token_selection");
  public get tokenSelection() {
    return this._tokenSelection;
  }
}
export interface DataAwsccVerifiedpermissionsIdentitySourceConfiguration {
}

export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationToTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsIdentitySourceConfigurationToHclTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsIdentitySourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsIdentitySourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cognito_user_pool_configuration - computed: true, optional: false, required: false
  private _cognitoUserPoolConfiguration = new DataAwsccVerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference(this, "cognito_user_pool_configuration");
  public get cognitoUserPoolConfiguration() {
    return this._cognitoUserPoolConfiguration;
  }

  // open_id_connect_configuration - computed: true, optional: false, required: false
  private _openIdConnectConfiguration = new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference(this, "open_id_connect_configuration");
  public get openIdConnectConfiguration() {
    return this._openIdConnectConfiguration;
  }
}
export interface DataAwsccVerifiedpermissionsIdentitySourceDetails {
}

export function dataAwsccVerifiedpermissionsIdentitySourceDetailsToTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccVerifiedpermissionsIdentitySourceDetailsToHclTerraform(struct?: DataAwsccVerifiedpermissionsIdentitySourceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccVerifiedpermissionsIdentitySourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccVerifiedpermissionsIdentitySourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_ids - computed: true, optional: false, required: false
  public get clientIds() {
    return this.getListAttribute('client_ids');
  }

  // discovery_url - computed: true, optional: false, required: false
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }

  // open_id_issuer - computed: true, optional: false, required: false
  public get openIdIssuer() {
    return this.getStringAttribute('open_id_issuer');
  }

  // user_pool_arn - computed: true, optional: false, required: false
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/verifiedpermissions_identity_source awscc_verifiedpermissions_identity_source}
*/
export class DataAwsccVerifiedpermissionsIdentitySource extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_verifiedpermissions_identity_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccVerifiedpermissionsIdentitySource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccVerifiedpermissionsIdentitySource to import
  * @param importFromId The id of the existing DataAwsccVerifiedpermissionsIdentitySource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/verifiedpermissions_identity_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccVerifiedpermissionsIdentitySource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_verifiedpermissions_identity_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/verifiedpermissions_identity_source awscc_verifiedpermissions_identity_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccVerifiedpermissionsIdentitySourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccVerifiedpermissionsIdentitySourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_verifiedpermissions_identity_source',
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

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccVerifiedpermissionsIdentitySourceConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataAwsccVerifiedpermissionsIdentitySourceDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
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

  // identity_source_id - computed: true, optional: false, required: false
  public get identitySourceId() {
    return this.getStringAttribute('identity_source_id');
  }

  // policy_store_id - computed: true, optional: false, required: false
  public get policyStoreId() {
    return this.getStringAttribute('policy_store_id');
  }

  // principal_entity_type - computed: true, optional: false, required: false
  public get principalEntityType() {
    return this.getStringAttribute('principal_entity_type');
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
