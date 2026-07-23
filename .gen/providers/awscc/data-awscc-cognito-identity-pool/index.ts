// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cognito_identity_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCognitoIdentityPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cognito_identity_pool#id DataAwsccCognitoIdentityPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCognitoIdentityPoolCognitoIdentityProviders {
}

export function dataAwsccCognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct?: DataAwsccCognitoIdentityPoolCognitoIdentityProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoIdentityPoolCognitoIdentityProvidersToHclTerraform(struct?: DataAwsccCognitoIdentityPoolCognitoIdentityProviders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCognitoIdentityPoolCognitoIdentityProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoIdentityPoolCognitoIdentityProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // server_side_token_check - computed: true, optional: false, required: false
  public get serverSideTokenCheck() {
    return this.getBooleanAttribute('server_side_token_check');
  }
}

export class DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference {
    return new DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCognitoIdentityPoolCognitoStreams {
}

export function dataAwsccCognitoIdentityPoolCognitoStreamsToTerraform(struct?: DataAwsccCognitoIdentityPoolCognitoStreams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoIdentityPoolCognitoStreamsToHclTerraform(struct?: DataAwsccCognitoIdentityPoolCognitoStreams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoIdentityPoolCognitoStreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoIdentityPoolCognitoStreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }

  // streaming_status - computed: true, optional: false, required: false
  public get streamingStatus() {
    return this.getStringAttribute('streaming_status');
  }
}
export interface DataAwsccCognitoIdentityPoolIdentityPoolTags {
}

export function dataAwsccCognitoIdentityPoolIdentityPoolTagsToTerraform(struct?: DataAwsccCognitoIdentityPoolIdentityPoolTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoIdentityPoolIdentityPoolTagsToHclTerraform(struct?: DataAwsccCognitoIdentityPoolIdentityPoolTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCognitoIdentityPoolIdentityPoolTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoIdentityPoolIdentityPoolTags | undefined) {
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

export class DataAwsccCognitoIdentityPoolIdentityPoolTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference {
    return new DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCognitoIdentityPoolPushSync {
}

export function dataAwsccCognitoIdentityPoolPushSyncToTerraform(struct?: DataAwsccCognitoIdentityPoolPushSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoIdentityPoolPushSyncToHclTerraform(struct?: DataAwsccCognitoIdentityPoolPushSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoIdentityPoolPushSyncOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoIdentityPoolPushSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoIdentityPoolPushSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_arns - computed: true, optional: false, required: false
  public get applicationArns() {
    return this.getListAttribute('application_arns');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cognito_identity_pool awscc_cognito_identity_pool}
*/
export class DataAwsccCognitoIdentityPool extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_identity_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCognitoIdentityPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCognitoIdentityPool to import
  * @param importFromId The id of the existing DataAwsccCognitoIdentityPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCognitoIdentityPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_identity_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cognito_identity_pool awscc_cognito_identity_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCognitoIdentityPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCognitoIdentityPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_identity_pool',
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

  // allow_classic_flow - computed: true, optional: false, required: false
  public get allowClassicFlow() {
    return this.getBooleanAttribute('allow_classic_flow');
  }

  // allow_unauthenticated_identities - computed: true, optional: false, required: false
  public get allowUnauthenticatedIdentities() {
    return this.getBooleanAttribute('allow_unauthenticated_identities');
  }

  // cognito_events - computed: true, optional: false, required: false
  public get cognitoEvents() {
    return this.getStringAttribute('cognito_events');
  }

  // cognito_identity_providers - computed: true, optional: false, required: false
  private _cognitoIdentityProviders = new DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList(this, "cognito_identity_providers", false);
  public get cognitoIdentityProviders() {
    return this._cognitoIdentityProviders;
  }

  // cognito_streams - computed: true, optional: false, required: false
  private _cognitoStreams = new DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference(this, "cognito_streams");
  public get cognitoStreams() {
    return this._cognitoStreams;
  }

  // developer_provider_name - computed: true, optional: false, required: false
  public get developerProviderName() {
    return this.getStringAttribute('developer_provider_name');
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

  // identity_pool_id - computed: true, optional: false, required: false
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }

  // identity_pool_name - computed: true, optional: false, required: false
  public get identityPoolName() {
    return this.getStringAttribute('identity_pool_name');
  }

  // identity_pool_tags - computed: true, optional: false, required: false
  private _identityPoolTags = new DataAwsccCognitoIdentityPoolIdentityPoolTagsList(this, "identity_pool_tags", true);
  public get identityPoolTags() {
    return this._identityPoolTags;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // open_id_connect_provider_ar_ns - computed: true, optional: false, required: false
  public get openIdConnectProviderArNs() {
    return this.getListAttribute('open_id_connect_provider_ar_ns');
  }

  // push_sync - computed: true, optional: false, required: false
  private _pushSync = new DataAwsccCognitoIdentityPoolPushSyncOutputReference(this, "push_sync");
  public get pushSync() {
    return this._pushSync;
  }

  // saml_provider_ar_ns - computed: true, optional: false, required: false
  public get samlProviderArNs() {
    return this.getListAttribute('saml_provider_ar_ns');
  }

  // supported_login_providers - computed: true, optional: false, required: false
  public get supportedLoginProviders() {
    return this.getStringAttribute('supported_login_providers');
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
