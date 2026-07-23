// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RdsOptionGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the name of the engine that this option group should be associated with.
  *  Valid Values: 
  *   +   ``mariadb`` 
  *   +   ``mysql`` 
  *   +   ``oracle-ee`` 
  *   +   ``oracle-ee-cdb`` 
  *   +   ``oracle-se2`` 
  *   +   ``oracle-se2-cdb`` 
  *   +   ``postgres`` 
  *   +   ``sqlserver-ee`` 
  *   +   ``sqlserver-se`` 
  *   +   ``sqlserver-ex`` 
  *   +   ``sqlserver-web``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#engine_name RdsOptionGroup#engine_name}
  */
  readonly engineName: string;
  /**
  * Specifies the major version of the engine that this option group should be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#major_engine_version RdsOptionGroup#major_engine_version}
  */
  readonly majorEngineVersion: string;
  /**
  * A list of all available options for an option group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#option_configurations RdsOptionGroup#option_configurations}
  */
  readonly optionConfigurations?: RdsOptionGroupOptionConfigurations[] | cdktn.IResolvable;
  /**
  * The description of the option group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#option_group_description RdsOptionGroup#option_group_description}
  */
  readonly optionGroupDescription: string;
  /**
  * The name of the option group to be created.
  *  Constraints:
  *   +  Must be 1 to 255 letters, numbers, or hyphens
  *   +  First character must be a letter
  *   +  Can't end with a hyphen or contain two consecutive hyphens
  *   
  *  Example: ``myoptiongroup``
  *  If you don't specify a value for ``OptionGroupName`` property, a name is automatically created for the option group.
  *   This value is stored as a lowercase string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#option_group_name RdsOptionGroup#option_group_name}
  */
  readonly optionGroupName?: string;
  /**
  * Tags to assign to the option group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#tags RdsOptionGroup#tags}
  */
  readonly tags?: RdsOptionGroupTags[] | cdktn.IResolvable;
}
export interface RdsOptionGroupOptionConfigurationsOptionSettings {
  /**
  * The name of the option that has settings that you can set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#name RdsOptionGroup#name}
  */
  readonly name?: string;
  /**
  * The current value of the option setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#value RdsOptionGroup#value}
  */
  readonly value?: string;
}

export function rdsOptionGroupOptionConfigurationsOptionSettingsToTerraform(struct?: RdsOptionGroupOptionConfigurationsOptionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rdsOptionGroupOptionConfigurationsOptionSettingsToHclTerraform(struct?: RdsOptionGroupOptionConfigurationsOptionSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RdsOptionGroupOptionConfigurationsOptionSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsOptionGroupOptionConfigurationsOptionSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

export class RdsOptionGroupOptionConfigurationsOptionSettingsList extends cdktn.ComplexList {
  public internalValue? : RdsOptionGroupOptionConfigurationsOptionSettings[] | cdktn.IResolvable

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
  public get(index: number): RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference {
    return new RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsOptionGroupOptionConfigurations {
  /**
  * A list of DB security groups used for this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#db_security_group_memberships RdsOptionGroup#db_security_group_memberships}
  */
  readonly dbSecurityGroupMemberships?: string[];
  /**
  * The configuration of options to include in a group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#option_name RdsOptionGroup#option_name}
  */
  readonly optionName?: string;
  /**
  * The option settings to include in an option group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#option_settings RdsOptionGroup#option_settings}
  */
  readonly optionSettings?: RdsOptionGroupOptionConfigurationsOptionSettings[] | cdktn.IResolvable;
  /**
  * The version for the option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#option_version RdsOptionGroup#option_version}
  */
  readonly optionVersion?: string;
  /**
  * The optional port for the option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#port RdsOptionGroup#port}
  */
  readonly port?: number;
  /**
  * A list of VPC security group names used for this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#vpc_security_group_memberships RdsOptionGroup#vpc_security_group_memberships}
  */
  readonly vpcSecurityGroupMemberships?: string[];
}

export function rdsOptionGroupOptionConfigurationsToTerraform(struct?: RdsOptionGroupOptionConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    db_security_group_memberships: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dbSecurityGroupMemberships),
    option_name: cdktn.stringToTerraform(struct!.optionName),
    option_settings: cdktn.listMapper(rdsOptionGroupOptionConfigurationsOptionSettingsToTerraform, false)(struct!.optionSettings),
    option_version: cdktn.stringToTerraform(struct!.optionVersion),
    port: cdktn.numberToTerraform(struct!.port),
    vpc_security_group_memberships: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpcSecurityGroupMemberships),
  }
}


export function rdsOptionGroupOptionConfigurationsToHclTerraform(struct?: RdsOptionGroupOptionConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    db_security_group_memberships: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dbSecurityGroupMemberships),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    option_name: {
      value: cdktn.stringToHclTerraform(struct!.optionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_settings: {
      value: cdktn.listMapperHcl(rdsOptionGroupOptionConfigurationsOptionSettingsToHclTerraform, false)(struct!.optionSettings),
      isBlock: true,
      type: "list",
      storageClassType: "RdsOptionGroupOptionConfigurationsOptionSettingsList",
    },
    option_version: {
      value: cdktn.stringToHclTerraform(struct!.optionVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_security_group_memberships: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpcSecurityGroupMemberships),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsOptionGroupOptionConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RdsOptionGroupOptionConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbSecurityGroupMemberships !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSecurityGroupMemberships = this._dbSecurityGroupMemberships;
    }
    if (this._optionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionName = this._optionName;
    }
    if (this._optionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionSettings = this._optionSettings?.internalValue;
    }
    if (this._optionVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionVersion = this._optionVersion;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._vpcSecurityGroupMemberships !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSecurityGroupMemberships = this._vpcSecurityGroupMemberships;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsOptionGroupOptionConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbSecurityGroupMemberships = undefined;
      this._optionName = undefined;
      this._optionSettings.internalValue = undefined;
      this._optionVersion = undefined;
      this._port = undefined;
      this._vpcSecurityGroupMemberships = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbSecurityGroupMemberships = value.dbSecurityGroupMemberships;
      this._optionName = value.optionName;
      this._optionSettings.internalValue = value.optionSettings;
      this._optionVersion = value.optionVersion;
      this._port = value.port;
      this._vpcSecurityGroupMemberships = value.vpcSecurityGroupMemberships;
    }
  }

  // db_security_group_memberships - computed: true, optional: true, required: false
  private _dbSecurityGroupMemberships?: string[]; 
  public get dbSecurityGroupMemberships() {
    return cdktn.Fn.tolist(this.getListAttribute('db_security_group_memberships'));
  }
  public set dbSecurityGroupMemberships(value: string[]) {
    this._dbSecurityGroupMemberships = value;
  }
  public resetDbSecurityGroupMemberships() {
    this._dbSecurityGroupMemberships = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSecurityGroupMembershipsInput() {
    return this._dbSecurityGroupMemberships;
  }

  // option_name - computed: true, optional: true, required: false
  private _optionName?: string; 
  public get optionName() {
    return this.getStringAttribute('option_name');
  }
  public set optionName(value: string) {
    this._optionName = value;
  }
  public resetOptionName() {
    this._optionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionNameInput() {
    return this._optionName;
  }

  // option_settings - computed: true, optional: true, required: false
  private _optionSettings = new RdsOptionGroupOptionConfigurationsOptionSettingsList(this, "option_settings", false);
  public get optionSettings() {
    return this._optionSettings;
  }
  public putOptionSettings(value: RdsOptionGroupOptionConfigurationsOptionSettings[] | cdktn.IResolvable) {
    this._optionSettings.internalValue = value;
  }
  public resetOptionSettings() {
    this._optionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionSettingsInput() {
    return this._optionSettings.internalValue;
  }

  // option_version - computed: true, optional: true, required: false
  private _optionVersion?: string; 
  public get optionVersion() {
    return this.getStringAttribute('option_version');
  }
  public set optionVersion(value: string) {
    this._optionVersion = value;
  }
  public resetOptionVersion() {
    this._optionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionVersionInput() {
    return this._optionVersion;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // vpc_security_group_memberships - computed: true, optional: true, required: false
  private _vpcSecurityGroupMemberships?: string[]; 
  public get vpcSecurityGroupMemberships() {
    return cdktn.Fn.tolist(this.getListAttribute('vpc_security_group_memberships'));
  }
  public set vpcSecurityGroupMemberships(value: string[]) {
    this._vpcSecurityGroupMemberships = value;
  }
  public resetVpcSecurityGroupMemberships() {
    this._vpcSecurityGroupMemberships = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupMembershipsInput() {
    return this._vpcSecurityGroupMemberships;
  }
}

export class RdsOptionGroupOptionConfigurationsList extends cdktn.ComplexList {
  public internalValue? : RdsOptionGroupOptionConfigurations[] | cdktn.IResolvable

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
  public get(index: number): RdsOptionGroupOptionConfigurationsOutputReference {
    return new RdsOptionGroupOptionConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsOptionGroupTags {
  /**
  * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#key RdsOptionGroup#key}
  */
  readonly key?: string;
  /**
  * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#value RdsOptionGroup#value}
  */
  readonly value?: string;
}

export function rdsOptionGroupTagsToTerraform(struct?: RdsOptionGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rdsOptionGroupTagsToHclTerraform(struct?: RdsOptionGroupTags | cdktn.IResolvable): any {
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

export class RdsOptionGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RdsOptionGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RdsOptionGroupTags | cdktn.IResolvable | undefined) {
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

export class RdsOptionGroupTagsList extends cdktn.ComplexList {
  public internalValue? : RdsOptionGroupTags[] | cdktn.IResolvable

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
  public get(index: number): RdsOptionGroupTagsOutputReference {
    return new RdsOptionGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group awscc_rds_option_group}
*/
export class RdsOptionGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rds_option_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RdsOptionGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsOptionGroup to import
  * @param importFromId The id of the existing RdsOptionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsOptionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_option_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/rds_option_group awscc_rds_option_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsOptionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RdsOptionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rds_option_group',
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
    this._engineName = config.engineName;
    this._majorEngineVersion = config.majorEngineVersion;
    this._optionConfigurations.internalValue = config.optionConfigurations;
    this._optionGroupDescription = config.optionGroupDescription;
    this._optionGroupName = config.optionGroupName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engine_name - computed: false, optional: false, required: true
  private _engineName?: string; 
  public get engineName() {
    return this.getStringAttribute('engine_name');
  }
  public set engineName(value: string) {
    this._engineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNameInput() {
    return this._engineName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // major_engine_version - computed: false, optional: false, required: true
  private _majorEngineVersion?: string; 
  public get majorEngineVersion() {
    return this.getStringAttribute('major_engine_version');
  }
  public set majorEngineVersion(value: string) {
    this._majorEngineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get majorEngineVersionInput() {
    return this._majorEngineVersion;
  }

  // option_configurations - computed: true, optional: true, required: false
  private _optionConfigurations = new RdsOptionGroupOptionConfigurationsList(this, "option_configurations", false);
  public get optionConfigurations() {
    return this._optionConfigurations;
  }
  public putOptionConfigurations(value: RdsOptionGroupOptionConfigurations[] | cdktn.IResolvable) {
    this._optionConfigurations.internalValue = value;
  }
  public resetOptionConfigurations() {
    this._optionConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionConfigurationsInput() {
    return this._optionConfigurations.internalValue;
  }

  // option_group_description - computed: false, optional: false, required: true
  private _optionGroupDescription?: string; 
  public get optionGroupDescription() {
    return this.getStringAttribute('option_group_description');
  }
  public set optionGroupDescription(value: string) {
    this._optionGroupDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionGroupDescriptionInput() {
    return this._optionGroupDescription;
  }

  // option_group_name - computed: true, optional: true, required: false
  private _optionGroupName?: string; 
  public get optionGroupName() {
    return this.getStringAttribute('option_group_name');
  }
  public set optionGroupName(value: string) {
    this._optionGroupName = value;
  }
  public resetOptionGroupName() {
    this._optionGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionGroupNameInput() {
    return this._optionGroupName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new RdsOptionGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RdsOptionGroupTags[] | cdktn.IResolvable) {
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
      engine_name: cdktn.stringToTerraform(this._engineName),
      major_engine_version: cdktn.stringToTerraform(this._majorEngineVersion),
      option_configurations: cdktn.listMapper(rdsOptionGroupOptionConfigurationsToTerraform, false)(this._optionConfigurations.internalValue),
      option_group_description: cdktn.stringToTerraform(this._optionGroupDescription),
      option_group_name: cdktn.stringToTerraform(this._optionGroupName),
      tags: cdktn.listMapper(rdsOptionGroupTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine_name: {
        value: cdktn.stringToHclTerraform(this._engineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      major_engine_version: {
        value: cdktn.stringToHclTerraform(this._majorEngineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option_configurations: {
        value: cdktn.listMapperHcl(rdsOptionGroupOptionConfigurationsToHclTerraform, false)(this._optionConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsOptionGroupOptionConfigurationsList",
      },
      option_group_description: {
        value: cdktn.stringToHclTerraform(this._optionGroupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      option_group_name: {
        value: cdktn.stringToHclTerraform(this._optionGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(rdsOptionGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsOptionGroupTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
