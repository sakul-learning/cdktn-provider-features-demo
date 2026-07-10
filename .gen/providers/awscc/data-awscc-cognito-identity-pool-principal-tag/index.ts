// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_principal_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCognitoIdentityPoolPrincipalTagConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_principal_tag#id DataAwsccCognitoIdentityPoolPrincipalTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_principal_tag awscc_cognito_identity_pool_principal_tag}
*/
export class DataAwsccCognitoIdentityPoolPrincipalTag extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_identity_pool_principal_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCognitoIdentityPoolPrincipalTag resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCognitoIdentityPoolPrincipalTag to import
  * @param importFromId The id of the existing DataAwsccCognitoIdentityPoolPrincipalTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_principal_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCognitoIdentityPoolPrincipalTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_identity_pool_principal_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_principal_tag awscc_cognito_identity_pool_principal_tag} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCognitoIdentityPoolPrincipalTagConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCognitoIdentityPoolPrincipalTagConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_identity_pool_principal_tag',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // identity_provider_name - computed: true, optional: false, required: false
  public get identityProviderName() {
    return this.getStringAttribute('identity_provider_name');
  }

  // principal_tags - computed: true, optional: false, required: false
  public get principalTags() {
    return this.getStringAttribute('principal_tags');
  }

  // use_defaults - computed: true, optional: false, required: false
  public get useDefaults() {
    return this.getBooleanAttribute('use_defaults');
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
