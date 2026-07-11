// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_o_auth_client_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQuicksightOAuthClientApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_o_auth_client_application#id DataAwsccQuicksightOAuthClientApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties {
}

export function dataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_connection_arn - computed: true, optional: false, required: false
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
}
export interface DataAwsccQuicksightOAuthClientApplicationTags {
}

export function dataAwsccQuicksightOAuthClientApplicationTagsToTerraform(struct?: DataAwsccQuicksightOAuthClientApplicationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightOAuthClientApplicationTagsToHclTerraform(struct?: DataAwsccQuicksightOAuthClientApplicationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightOAuthClientApplicationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightOAuthClientApplicationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightOAuthClientApplicationTags | undefined) {
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

export class DataAwsccQuicksightOAuthClientApplicationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightOAuthClientApplicationTagsOutputReference {
    return new DataAwsccQuicksightOAuthClientApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_o_auth_client_application awscc_quicksight_o_auth_client_application}
*/
export class DataAwsccQuicksightOAuthClientApplication extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_o_auth_client_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQuicksightOAuthClientApplication to import
  * @param importFromId The id of the existing DataAwsccQuicksightOAuthClientApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_o_auth_client_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQuicksightOAuthClientApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_o_auth_client_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_o_auth_client_application awscc_quicksight_o_auth_client_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightOAuthClientApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightOAuthClientApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_o_auth_client_application',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // data_source_type - computed: true, optional: false, required: false
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
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

  // identity_provider_vpc_connection_properties - computed: true, optional: false, required: false
  private _identityProviderVpcConnectionProperties = new DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // o_auth_authorization_endpoint_url - computed: true, optional: false, required: false
  public get oAuthAuthorizationEndpointUrl() {
    return this.getStringAttribute('o_auth_authorization_endpoint_url');
  }

  // o_auth_client_application_id - computed: true, optional: false, required: false
  public get oAuthClientApplicationId() {
    return this.getStringAttribute('o_auth_client_application_id');
  }

  // o_auth_client_authentication_type - computed: true, optional: false, required: false
  public get oAuthClientAuthenticationType() {
    return this.getStringAttribute('o_auth_client_authentication_type');
  }

  // o_auth_scopes - computed: true, optional: false, required: false
  public get oAuthScopes() {
    return this.getStringAttribute('o_auth_scopes');
  }

  // o_auth_token_endpoint_url - computed: true, optional: false, required: false
  public get oAuthTokenEndpointUrl() {
    return this.getStringAttribute('o_auth_token_endpoint_url');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQuicksightOAuthClientApplicationTagsList(this, "tags", false);
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
