// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_managed_login_branding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCognitoManagedLoginBrandingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_managed_login_branding#id DataAwsccCognitoManagedLoginBranding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCognitoManagedLoginBrandingAssets {
}

export function dataAwsccCognitoManagedLoginBrandingAssetsToTerraform(struct?: DataAwsccCognitoManagedLoginBrandingAssets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoManagedLoginBrandingAssetsToHclTerraform(struct?: DataAwsccCognitoManagedLoginBrandingAssets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoManagedLoginBrandingAssetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCognitoManagedLoginBrandingAssets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoManagedLoginBrandingAssets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bytes - computed: true, optional: false, required: false
  public get bytes() {
    return this.getStringAttribute('bytes');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // color_mode - computed: true, optional: false, required: false
  public get colorMode() {
    return this.getStringAttribute('color_mode');
  }

  // extension - computed: true, optional: false, required: false
  public get extension() {
    return this.getStringAttribute('extension');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}

export class DataAwsccCognitoManagedLoginBrandingAssetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCognitoManagedLoginBrandingAssetsOutputReference {
    return new DataAwsccCognitoManagedLoginBrandingAssetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_managed_login_branding awscc_cognito_managed_login_branding}
*/
export class DataAwsccCognitoManagedLoginBranding extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_managed_login_branding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCognitoManagedLoginBranding to import
  * @param importFromId The id of the existing DataAwsccCognitoManagedLoginBranding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_managed_login_branding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCognitoManagedLoginBranding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_managed_login_branding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cognito_managed_login_branding awscc_cognito_managed_login_branding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCognitoManagedLoginBrandingConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCognitoManagedLoginBrandingConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_managed_login_branding',
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

  // assets - computed: true, optional: false, required: false
  private _assets = new DataAwsccCognitoManagedLoginBrandingAssetsList(this, "assets", false);
  public get assets() {
    return this._assets;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
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

  // managed_login_branding_id - computed: true, optional: false, required: false
  public get managedLoginBrandingId() {
    return this.getStringAttribute('managed_login_branding_id');
  }

  // return_merged_resources - computed: true, optional: false, required: false
  public get returnMergedResources() {
    return this.getBooleanAttribute('return_merged_resources');
  }

  // settings - computed: true, optional: false, required: false
  public get settings() {
    return this.getStringAttribute('settings');
  }

  // use_cognito_provided_values - computed: true, optional: false, required: false
  public get useCognitoProvidedValues() {
    return this.getBooleanAttribute('use_cognito_provided_values');
  }

  // user_pool_id - computed: true, optional: false, required: false
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
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
