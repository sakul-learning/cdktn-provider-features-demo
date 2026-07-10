// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_role_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCognitoIdentityPoolRoleAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_role_attachment#id DataAwsccCognitoIdentityPoolRoleAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules {
}

export function dataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesToTerraform(struct?: DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesToHclTerraform(struct?: DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claim - computed: true, optional: false, required: false
  public get claim() {
    return this.getStringAttribute('claim');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference {
    return new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration {
}

export function dataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationToTerraform(struct?: DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationToHclTerraform(struct?: DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings {
}

export function dataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsToTerraform(struct?: DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsToHclTerraform(struct?: DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ambiguous_role_resolution - computed: true, optional: false, required: false
  public get ambiguousRoleResolution() {
    return this.getStringAttribute('ambiguous_role_resolution');
  }

  // identity_provider - computed: true, optional: false, required: false
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }

  // rules_configuration - computed: true, optional: false, required: false
  private _rulesConfiguration = new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference(this, "rules_configuration");
  public get rulesConfiguration() {
    return this._rulesConfiguration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference {
    return new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_role_attachment awscc_cognito_identity_pool_role_attachment}
*/
export class DataAwsccCognitoIdentityPoolRoleAttachment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_identity_pool_role_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCognitoIdentityPoolRoleAttachment to import
  * @param importFromId The id of the existing DataAwsccCognitoIdentityPoolRoleAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_role_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCognitoIdentityPoolRoleAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_identity_pool_role_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/cognito_identity_pool_role_attachment awscc_cognito_identity_pool_role_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCognitoIdentityPoolRoleAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCognitoIdentityPoolRoleAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_identity_pool_role_attachment',
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

  // identity_pool_role_attachment_id - computed: true, optional: false, required: false
  public get identityPoolRoleAttachmentId() {
    return this.getStringAttribute('identity_pool_role_attachment_id');
  }

  // role_mappings - computed: true, optional: false, required: false
  private _roleMappings = new DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap(this, "role_mappings");
  public get roleMappings() {
    return this._roleMappings;
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new cdktn.StringMap(this, "roles");
  public get roles() {
    return this._roles;
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
