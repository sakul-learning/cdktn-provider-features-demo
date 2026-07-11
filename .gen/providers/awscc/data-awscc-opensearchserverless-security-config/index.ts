// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/opensearchserverless_security_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccOpensearchserverlessSecurityConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/opensearchserverless_security_config#id DataAwsccOpensearchserverlessSecurityConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions {
}

export function dataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsToTerraform(struct?: DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsToHclTerraform(struct?: DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_attribute - computed: true, optional: false, required: false
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }

  // user_attribute - computed: true, optional: false, required: false
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
}
export interface DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions {
}

export function dataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsToTerraform(struct?: DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsToHclTerraform(struct?: DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // application_description - computed: true, optional: false, required: false
  public get applicationDescription() {
    return this.getStringAttribute('application_description');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // group_attribute - computed: true, optional: false, required: false
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // user_attribute - computed: true, optional: false, required: false
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
}
export interface DataAwsccOpensearchserverlessSecurityConfigSamlOptions {
}

export function dataAwsccOpensearchserverlessSecurityConfigSamlOptionsToTerraform(struct?: DataAwsccOpensearchserverlessSecurityConfigSamlOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccOpensearchserverlessSecurityConfigSamlOptionsToHclTerraform(struct?: DataAwsccOpensearchserverlessSecurityConfigSamlOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccOpensearchserverlessSecurityConfigSamlOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccOpensearchserverlessSecurityConfigSamlOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_attribute - computed: true, optional: false, required: false
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // open_search_serverless_entity_id - computed: true, optional: false, required: false
  public get openSearchServerlessEntityId() {
    return this.getStringAttribute('open_search_serverless_entity_id');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }

  // user_attribute - computed: true, optional: false, required: false
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/opensearchserverless_security_config awscc_opensearchserverless_security_config}
*/
export class DataAwsccOpensearchserverlessSecurityConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_opensearchserverless_security_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccOpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccOpensearchserverlessSecurityConfig to import
  * @param importFromId The id of the existing DataAwsccOpensearchserverlessSecurityConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccOpensearchserverlessSecurityConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_opensearchserverless_security_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/opensearchserverless_security_config awscc_opensearchserverless_security_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccOpensearchserverlessSecurityConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccOpensearchserverlessSecurityConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_opensearchserverless_security_config',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // iam_federation_options - computed: true, optional: false, required: false
  private _iamFederationOptions = new DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference(this, "iam_federation_options");
  public get iamFederationOptions() {
    return this._iamFederationOptions;
  }

  // iam_identity_center_options - computed: true, optional: false, required: false
  private _iamIdentityCenterOptions = new DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference(this, "iam_identity_center_options");
  public get iamIdentityCenterOptions() {
    return this._iamIdentityCenterOptions;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // saml_options - computed: true, optional: false, required: false
  private _samlOptions = new DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference(this, "saml_options");
  public get samlOptions() {
    return this._samlOptions;
  }

  // security_config_id - computed: true, optional: false, required: false
  public get securityConfigId() {
    return this.getStringAttribute('security_config_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
