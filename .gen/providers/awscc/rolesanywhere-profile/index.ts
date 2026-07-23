// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RolesanywhereProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#accept_role_session_name RolesanywhereProfile#accept_role_session_name}
  */
  readonly acceptRoleSessionName?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#attribute_mappings RolesanywhereProfile#attribute_mappings}
  */
  readonly attributeMappings?: RolesanywhereProfileAttributeMappings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}
  */
  readonly managedPolicyArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}
  */
  readonly requireInstanceProperties?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}
  */
  readonly roleArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}
  */
  readonly sessionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}
  */
  readonly tags?: RolesanywhereProfileTags[] | cdktn.IResolvable;
}
export interface RolesanywhereProfileAttributeMappingsMappingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#specifier RolesanywhereProfile#specifier}
  */
  readonly specifier?: string;
}

export function rolesanywhereProfileAttributeMappingsMappingRulesToTerraform(struct?: RolesanywhereProfileAttributeMappingsMappingRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    specifier: cdktn.stringToTerraform(struct!.specifier),
  }
}


export function rolesanywhereProfileAttributeMappingsMappingRulesToHclTerraform(struct?: RolesanywhereProfileAttributeMappingsMappingRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    specifier: {
      value: cdktn.stringToHclTerraform(struct!.specifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RolesanywhereProfileAttributeMappingsMappingRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RolesanywhereProfileAttributeMappingsMappingRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._specifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.specifier = this._specifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RolesanywhereProfileAttributeMappingsMappingRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._specifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._specifier = value.specifier;
    }
  }

  // specifier - computed: true, optional: true, required: false
  private _specifier?: string; 
  public get specifier() {
    return this.getStringAttribute('specifier');
  }
  public set specifier(value: string) {
    this._specifier = value;
  }
  public resetSpecifier() {
    this._specifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifierInput() {
    return this._specifier;
  }
}

export class RolesanywhereProfileAttributeMappingsMappingRulesList extends cdktn.ComplexList {
  public internalValue? : RolesanywhereProfileAttributeMappingsMappingRules[] | cdktn.IResolvable

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
  public get(index: number): RolesanywhereProfileAttributeMappingsMappingRulesOutputReference {
    return new RolesanywhereProfileAttributeMappingsMappingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RolesanywhereProfileAttributeMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#certificate_field RolesanywhereProfile#certificate_field}
  */
  readonly certificateField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#mapping_rules RolesanywhereProfile#mapping_rules}
  */
  readonly mappingRules?: RolesanywhereProfileAttributeMappingsMappingRules[] | cdktn.IResolvable;
}

export function rolesanywhereProfileAttributeMappingsToTerraform(struct?: RolesanywhereProfileAttributeMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_field: cdktn.stringToTerraform(struct!.certificateField),
    mapping_rules: cdktn.listMapper(rolesanywhereProfileAttributeMappingsMappingRulesToTerraform, false)(struct!.mappingRules),
  }
}


export function rolesanywhereProfileAttributeMappingsToHclTerraform(struct?: RolesanywhereProfileAttributeMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_field: {
      value: cdktn.stringToHclTerraform(struct!.certificateField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_rules: {
      value: cdktn.listMapperHcl(rolesanywhereProfileAttributeMappingsMappingRulesToHclTerraform, false)(struct!.mappingRules),
      isBlock: true,
      type: "list",
      storageClassType: "RolesanywhereProfileAttributeMappingsMappingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RolesanywhereProfileAttributeMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RolesanywhereProfileAttributeMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateField !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateField = this._certificateField;
    }
    if (this._mappingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingRules = this._mappingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RolesanywhereProfileAttributeMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateField = undefined;
      this._mappingRules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateField = value.certificateField;
      this._mappingRules.internalValue = value.mappingRules;
    }
  }

  // certificate_field - computed: true, optional: true, required: false
  private _certificateField?: string; 
  public get certificateField() {
    return this.getStringAttribute('certificate_field');
  }
  public set certificateField(value: string) {
    this._certificateField = value;
  }
  public resetCertificateField() {
    this._certificateField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFieldInput() {
    return this._certificateField;
  }

  // mapping_rules - computed: true, optional: true, required: false
  private _mappingRules = new RolesanywhereProfileAttributeMappingsMappingRulesList(this, "mapping_rules", false);
  public get mappingRules() {
    return this._mappingRules;
  }
  public putMappingRules(value: RolesanywhereProfileAttributeMappingsMappingRules[] | cdktn.IResolvable) {
    this._mappingRules.internalValue = value;
  }
  public resetMappingRules() {
    this._mappingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRulesInput() {
    return this._mappingRules.internalValue;
  }
}

export class RolesanywhereProfileAttributeMappingsList extends cdktn.ComplexList {
  public internalValue? : RolesanywhereProfileAttributeMappings[] | cdktn.IResolvable

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
  public get(index: number): RolesanywhereProfileAttributeMappingsOutputReference {
    return new RolesanywhereProfileAttributeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RolesanywhereProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#key RolesanywhereProfile#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#value RolesanywhereProfile#value}
  */
  readonly value?: string;
}

export function rolesanywhereProfileTagsToTerraform(struct?: RolesanywhereProfileTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rolesanywhereProfileTagsToHclTerraform(struct?: RolesanywhereProfileTags | cdktn.IResolvable): any {
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

export class RolesanywhereProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RolesanywhereProfileTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RolesanywhereProfileTags | cdktn.IResolvable | undefined) {
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

export class RolesanywhereProfileTagsList extends cdktn.ComplexList {
  public internalValue? : RolesanywhereProfileTags[] | cdktn.IResolvable

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
  public get(index: number): RolesanywhereProfileTagsOutputReference {
    return new RolesanywhereProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile awscc_rolesanywhere_profile}
*/
export class RolesanywhereProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rolesanywhere_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RolesanywhereProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RolesanywhereProfile to import
  * @param importFromId The id of the existing RolesanywhereProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RolesanywhereProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rolesanywhere_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rolesanywhere_profile awscc_rolesanywhere_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RolesanywhereProfileConfig
  */
  public constructor(scope: Construct, id: string, config: RolesanywhereProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rolesanywhere_profile',
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
    this._acceptRoleSessionName = config.acceptRoleSessionName;
    this._attributeMappings.internalValue = config.attributeMappings;
    this._durationSeconds = config.durationSeconds;
    this._enabled = config.enabled;
    this._managedPolicyArns = config.managedPolicyArns;
    this._name = config.name;
    this._requireInstanceProperties = config.requireInstanceProperties;
    this._roleArns = config.roleArns;
    this._sessionPolicy = config.sessionPolicy;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_role_session_name - computed: true, optional: true, required: false
  private _acceptRoleSessionName?: boolean | cdktn.IResolvable; 
  public get acceptRoleSessionName() {
    return this.getBooleanAttribute('accept_role_session_name');
  }
  public set acceptRoleSessionName(value: boolean | cdktn.IResolvable) {
    this._acceptRoleSessionName = value;
  }
  public resetAcceptRoleSessionName() {
    this._acceptRoleSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRoleSessionNameInput() {
    return this._acceptRoleSessionName;
  }

  // attribute_mappings - computed: true, optional: true, required: false
  private _attributeMappings = new RolesanywhereProfileAttributeMappingsList(this, "attribute_mappings", false);
  public get attributeMappings() {
    return this._attributeMappings;
  }
  public putAttributeMappings(value: RolesanywhereProfileAttributeMappings[] | cdktn.IResolvable) {
    this._attributeMappings.internalValue = value;
  }
  public resetAttributeMappings() {
    this._attributeMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMappingsInput() {
    return this._attributeMappings.internalValue;
  }

  // duration_seconds - computed: true, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_policy_arns - computed: true, optional: true, required: false
  private _managedPolicyArns?: string[]; 
  public get managedPolicyArns() {
    return this.getListAttribute('managed_policy_arns');
  }
  public set managedPolicyArns(value: string[]) {
    this._managedPolicyArns = value;
  }
  public resetManagedPolicyArns() {
    this._managedPolicyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPolicyArnsInput() {
    return this._managedPolicyArns;
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

  // profile_arn - computed: true, optional: false, required: false
  public get profileArn() {
    return this.getStringAttribute('profile_arn');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // require_instance_properties - computed: true, optional: true, required: false
  private _requireInstanceProperties?: boolean | cdktn.IResolvable; 
  public get requireInstanceProperties() {
    return this.getBooleanAttribute('require_instance_properties');
  }
  public set requireInstanceProperties(value: boolean | cdktn.IResolvable) {
    this._requireInstanceProperties = value;
  }
  public resetRequireInstanceProperties() {
    this._requireInstanceProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInstancePropertiesInput() {
    return this._requireInstanceProperties;
  }

  // role_arns - computed: false, optional: false, required: true
  private _roleArns?: string[]; 
  public get roleArns() {
    return this.getListAttribute('role_arns');
  }
  public set roleArns(value: string[]) {
    this._roleArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnsInput() {
    return this._roleArns;
  }

  // session_policy - computed: true, optional: true, required: false
  private _sessionPolicy?: string; 
  public get sessionPolicy() {
    return this.getStringAttribute('session_policy');
  }
  public set sessionPolicy(value: string) {
    this._sessionPolicy = value;
  }
  public resetSessionPolicy() {
    this._sessionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPolicyInput() {
    return this._sessionPolicy;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new RolesanywhereProfileTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RolesanywhereProfileTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_role_session_name: cdktn.booleanToTerraform(this._acceptRoleSessionName),
      attribute_mappings: cdktn.listMapper(rolesanywhereProfileAttributeMappingsToTerraform, false)(this._attributeMappings.internalValue),
      duration_seconds: cdktn.numberToTerraform(this._durationSeconds),
      enabled: cdktn.booleanToTerraform(this._enabled),
      managed_policy_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._managedPolicyArns),
      name: cdktn.stringToTerraform(this._name),
      require_instance_properties: cdktn.booleanToTerraform(this._requireInstanceProperties),
      role_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._roleArns),
      session_policy: cdktn.stringToTerraform(this._sessionPolicy),
      tags: cdktn.listMapper(rolesanywhereProfileTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_role_session_name: {
        value: cdktn.booleanToHclTerraform(this._acceptRoleSessionName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      attribute_mappings: {
        value: cdktn.listMapperHcl(rolesanywhereProfileAttributeMappingsToHclTerraform, false)(this._attributeMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RolesanywhereProfileAttributeMappingsList",
      },
      duration_seconds: {
        value: cdktn.numberToHclTerraform(this._durationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      managed_policy_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._managedPolicyArns),
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
      require_instance_properties: {
        value: cdktn.booleanToHclTerraform(this._requireInstanceProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._roleArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      session_policy: {
        value: cdktn.stringToHclTerraform(this._sessionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(rolesanywhereProfileTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RolesanywhereProfileTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
