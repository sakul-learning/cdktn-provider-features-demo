// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_configuration_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSecurityhubConfigurationPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_configuration_policy#id DataAwsccSecurityhubConfigurationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue {
}

export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueToTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueToHclTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }

  // double - computed: true, optional: false, required: false
  public get double() {
    return this.getNumberAttribute('double');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getStringAttribute('enum');
  }

  // enum_list - computed: true, optional: false, required: false
  public get enumList() {
    return this.getListAttribute('enum_list');
  }

  // integer - computed: true, optional: false, required: false
  public get integer() {
    return this.getNumberAttribute('integer');
  }

  // integer_list - computed: true, optional: false, required: false
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }

  // string_list - computed: true, optional: false, required: false
  public get stringList() {
    return this.getListAttribute('string_list');
  }
}
export interface DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters {
}

export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersToTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersToHclTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference {
    return new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters {
}

export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersToTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersToHclTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // security_control_id - computed: true, optional: false, required: false
  public get securityControlId() {
    return this.getStringAttribute('security_control_id');
  }
}

export class DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference {
    return new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration {
}

export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationToTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationToHclTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled_security_control_identifiers - computed: true, optional: false, required: false
  public get disabledSecurityControlIdentifiers() {
    return this.getListAttribute('disabled_security_control_identifiers');
  }

  // enabled_security_control_identifiers - computed: true, optional: false, required: false
  public get enabledSecurityControlIdentifiers() {
    return this.getListAttribute('enabled_security_control_identifiers');
  }

  // security_control_custom_parameters - computed: true, optional: false, required: false
  private _securityControlCustomParameters = new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList(this, "security_control_custom_parameters", false);
  public get securityControlCustomParameters() {
    return this._securityControlCustomParameters;
  }
}
export interface DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub {
}

export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubToTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubToHclTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_standard_identifiers - computed: true, optional: false, required: false
  public get enabledStandardIdentifiers() {
    return this.getListAttribute('enabled_standard_identifiers');
  }

  // security_controls_configuration - computed: true, optional: false, required: false
  private _securityControlsConfiguration = new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference(this, "security_controls_configuration");
  public get securityControlsConfiguration() {
    return this._securityControlsConfiguration;
  }

  // service_enabled - computed: true, optional: false, required: false
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }
}
export interface DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy {
}

export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicyToTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityhubConfigurationPolicyConfigurationPolicyToHclTerraform(struct?: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityhubConfigurationPolicyConfigurationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_hub - computed: true, optional: false, required: false
  private _securityHub = new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference(this, "security_hub");
  public get securityHub() {
    return this._securityHub;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_configuration_policy awscc_securityhub_configuration_policy}
*/
export class DataAwsccSecurityhubConfigurationPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_configuration_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSecurityhubConfigurationPolicy to import
  * @param importFromId The id of the existing DataAwsccSecurityhubConfigurationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSecurityhubConfigurationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_configuration_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/securityhub_configuration_policy awscc_securityhub_configuration_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSecurityhubConfigurationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSecurityhubConfigurationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_configuration_policy',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_policy - computed: true, optional: false, required: false
  private _configurationPolicy = new DataAwsccSecurityhubConfigurationPolicyConfigurationPolicyOutputReference(this, "configuration_policy");
  public get configurationPolicy() {
    return this._configurationPolicy;
  }

  // configuration_policy_id - computed: true, optional: false, required: false
  public get configurationPolicyId() {
    return this.getStringAttribute('configuration_policy_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // service_enabled - computed: true, optional: false, required: false
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
