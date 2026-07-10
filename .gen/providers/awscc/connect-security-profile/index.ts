// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConnectSecurityProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#allowed_access_control_hierarchy_group_id ConnectSecurityProfile#allowed_access_control_hierarchy_group_id}
  */
  readonly allowedAccessControlHierarchyGroupId?: string;
  /**
  * The list of tags that a security profile uses to restrict access to resources in Amazon Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#allowed_access_control_tags ConnectSecurityProfile#allowed_access_control_tags}
  */
  readonly allowedAccessControlTags?: ConnectSecurityProfileAllowedAccessControlTags[] | cdktn.IResolvable;
  /**
  * The list of flow-module resources to be linked to a security profile in Amazon Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#allowed_flow_modules ConnectSecurityProfile#allowed_flow_modules}
  */
  readonly allowedFlowModules?: ConnectSecurityProfileAllowedFlowModules[] | cdktn.IResolvable;
  /**
  * A list of third-party applications that the security profile will give access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#applications ConnectSecurityProfile#applications}
  */
  readonly applications?: ConnectSecurityProfileApplications[] | cdktn.IResolvable;
  /**
  * The description of the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#description ConnectSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#granular_access_control_configuration ConnectSecurityProfile#granular_access_control_configuration}
  */
  readonly granularAccessControlConfiguration?: ConnectSecurityProfileGranularAccessControlConfiguration;
  /**
  * The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#hierarchy_restricted_resources ConnectSecurityProfile#hierarchy_restricted_resources}
  */
  readonly hierarchyRestrictedResources?: string[];
  /**
  * The identifier of the Amazon Connect instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#instance_arn ConnectSecurityProfile#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Permissions assigned to the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#permissions ConnectSecurityProfile#permissions}
  */
  readonly permissions?: string[];
  /**
  * The name of the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#security_profile_name ConnectSecurityProfile#security_profile_name}
  */
  readonly securityProfileName: string;
  /**
  * The list of resources that a security profile applies tag restrictions to in Amazon Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#tag_restricted_resources ConnectSecurityProfile#tag_restricted_resources}
  */
  readonly tagRestrictedResources?: string[];
  /**
  * The tags used to organize, track, or control access for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#tags ConnectSecurityProfile#tags}
  */
  readonly tags?: ConnectSecurityProfileTags[] | cdktn.IResolvable;
}
export interface ConnectSecurityProfileAllowedAccessControlTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#key ConnectSecurityProfile#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#value ConnectSecurityProfile#value}
  */
  readonly value?: string;
}

export function connectSecurityProfileAllowedAccessControlTagsToTerraform(struct?: ConnectSecurityProfileAllowedAccessControlTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function connectSecurityProfileAllowedAccessControlTagsToHclTerraform(struct?: ConnectSecurityProfileAllowedAccessControlTags | cdktn.IResolvable): any {
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

export class ConnectSecurityProfileAllowedAccessControlTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectSecurityProfileAllowedAccessControlTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConnectSecurityProfileAllowedAccessControlTags | cdktn.IResolvable | undefined) {
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

export class ConnectSecurityProfileAllowedAccessControlTagsList extends cdktn.ComplexList {
  public internalValue? : ConnectSecurityProfileAllowedAccessControlTags[] | cdktn.IResolvable

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
  public get(index: number): ConnectSecurityProfileAllowedAccessControlTagsOutputReference {
    return new ConnectSecurityProfileAllowedAccessControlTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectSecurityProfileAllowedFlowModules {
  /**
  * The identifier of the application that you want to give access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#flow_module_id ConnectSecurityProfile#flow_module_id}
  */
  readonly flowModuleId?: string;
  /**
  * The type of the first-party application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#type ConnectSecurityProfile#type}
  */
  readonly type?: string;
}

export function connectSecurityProfileAllowedFlowModulesToTerraform(struct?: ConnectSecurityProfileAllowedFlowModules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flow_module_id: cdktn.stringToTerraform(struct!.flowModuleId),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function connectSecurityProfileAllowedFlowModulesToHclTerraform(struct?: ConnectSecurityProfileAllowedFlowModules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flow_module_id: {
      value: cdktn.stringToHclTerraform(struct!.flowModuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectSecurityProfileAllowedFlowModulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectSecurityProfileAllowedFlowModules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowModuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowModuleId = this._flowModuleId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectSecurityProfileAllowedFlowModules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowModuleId = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowModuleId = value.flowModuleId;
      this._type = value.type;
    }
  }

  // flow_module_id - computed: true, optional: true, required: false
  private _flowModuleId?: string; 
  public get flowModuleId() {
    return this.getStringAttribute('flow_module_id');
  }
  public set flowModuleId(value: string) {
    this._flowModuleId = value;
  }
  public resetFlowModuleId() {
    this._flowModuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowModuleIdInput() {
    return this._flowModuleId;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ConnectSecurityProfileAllowedFlowModulesList extends cdktn.ComplexList {
  public internalValue? : ConnectSecurityProfileAllowedFlowModules[] | cdktn.IResolvable

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
  public get(index: number): ConnectSecurityProfileAllowedFlowModulesOutputReference {
    return new ConnectSecurityProfileAllowedFlowModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectSecurityProfileApplications {
  /**
  * The permissions that the agent is granted on the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#application_permissions ConnectSecurityProfile#application_permissions}
  */
  readonly applicationPermissions?: string[];
  /**
  * Namespace of the application that you want to give access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#namespace ConnectSecurityProfile#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#type ConnectSecurityProfile#type}
  */
  readonly type?: string;
}

export function connectSecurityProfileApplicationsToTerraform(struct?: ConnectSecurityProfileApplications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.applicationPermissions),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function connectSecurityProfileApplicationsToHclTerraform(struct?: ConnectSecurityProfileApplications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_permissions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.applicationPermissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectSecurityProfileApplicationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectSecurityProfileApplications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationPermissions = this._applicationPermissions;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectSecurityProfileApplications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationPermissions = undefined;
      this._namespace = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationPermissions = value.applicationPermissions;
      this._namespace = value.namespace;
      this._type = value.type;
    }
  }

  // application_permissions - computed: true, optional: true, required: false
  private _applicationPermissions?: string[]; 
  public get applicationPermissions() {
    return cdktn.Fn.tolist(this.getListAttribute('application_permissions'));
  }
  public set applicationPermissions(value: string[]) {
    this._applicationPermissions = value;
  }
  public resetApplicationPermissions() {
    this._applicationPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPermissionsInput() {
    return this._applicationPermissions;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ConnectSecurityProfileApplicationsList extends cdktn.ComplexList {
  public internalValue? : ConnectSecurityProfileApplications[] | cdktn.IResolvable

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
  public get(index: number): ConnectSecurityProfileApplicationsOutputReference {
    return new ConnectSecurityProfileApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues {
  /**
  * Specifies the type of access granted. Currently, only "ALLOW" is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#access_type ConnectSecurityProfile#access_type}
  */
  readonly accessType?: string;
  /**
  * The name of the primary attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#attribute_name ConnectSecurityProfile#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * An array of allowed primary values for the specified primary attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#values ConnectSecurityProfile#values}
  */
  readonly values?: string[];
}

export function connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesToTerraform(struct?: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_type: cdktn.stringToTerraform(struct!.accessType),
    attribute_name: cdktn.stringToTerraform(struct!.attributeName),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesToHclTerraform(struct?: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_type: {
      value: cdktn.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name: {
      value: cdktn.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessType = undefined;
      this._attributeName = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessType = value.accessType;
      this._attributeName = value.attributeName;
      this._values = value.values;
    }
  }

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // attribute_name - computed: true, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList extends cdktn.ComplexList {
  public internalValue? : ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues[] | cdktn.IResolvable

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
  public get(index: number): ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference {
    return new ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration {
  /**
  * An array of PrimaryAttributeValue objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#primary_attribute_values ConnectSecurityProfile#primary_attribute_values}
  */
  readonly primaryAttributeValues?: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues[] | cdktn.IResolvable;
}

export function connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationToTerraform(struct?: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary_attribute_values: cdktn.listMapper(connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesToTerraform, false)(struct!.primaryAttributeValues),
  }
}


export function connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationToHclTerraform(struct?: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    primary_attribute_values: {
      value: cdktn.listMapperHcl(connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesToHclTerraform, false)(struct!.primaryAttributeValues),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryAttributeValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryAttributeValues = this._primaryAttributeValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryAttributeValues.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryAttributeValues.internalValue = value.primaryAttributeValues;
    }
  }

  // primary_attribute_values - computed: true, optional: true, required: false
  private _primaryAttributeValues = new ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList(this, "primary_attribute_values", false);
  public get primaryAttributeValues() {
    return this._primaryAttributeValues;
  }
  public putPrimaryAttributeValues(value: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues[] | cdktn.IResolvable) {
    this._primaryAttributeValues.internalValue = value;
  }
  public resetPrimaryAttributeValues() {
    this._primaryAttributeValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAttributeValuesInput() {
    return this._primaryAttributeValues.internalValue;
  }
}
export interface ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration {
  /**
  * Contains the configuration for record-based access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#primary_attribute_access_control_configuration ConnectSecurityProfile#primary_attribute_access_control_configuration}
  */
  readonly primaryAttributeAccessControlConfiguration?: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration;
}

export function connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationToTerraform(struct?: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary_attribute_access_control_configuration: connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationToTerraform(struct!.primaryAttributeAccessControlConfiguration),
  }
}


export function connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationToHclTerraform(struct?: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    primary_attribute_access_control_configuration: {
      value: connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationToHclTerraform(struct!.primaryAttributeAccessControlConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryAttributeAccessControlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryAttributeAccessControlConfiguration = this._primaryAttributeAccessControlConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryAttributeAccessControlConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryAttributeAccessControlConfiguration.internalValue = value.primaryAttributeAccessControlConfiguration;
    }
  }

  // primary_attribute_access_control_configuration - computed: true, optional: true, required: false
  private _primaryAttributeAccessControlConfiguration = new ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference(this, "primary_attribute_access_control_configuration");
  public get primaryAttributeAccessControlConfiguration() {
    return this._primaryAttributeAccessControlConfiguration;
  }
  public putPrimaryAttributeAccessControlConfiguration(value: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration) {
    this._primaryAttributeAccessControlConfiguration.internalValue = value;
  }
  public resetPrimaryAttributeAccessControlConfiguration() {
    this._primaryAttributeAccessControlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAttributeAccessControlConfigurationInput() {
    return this._primaryAttributeAccessControlConfiguration.internalValue;
  }
}
export interface ConnectSecurityProfileGranularAccessControlConfiguration {
  /**
  * Defines the access control configuration for data tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#data_table_access_control_configuration ConnectSecurityProfile#data_table_access_control_configuration}
  */
  readonly dataTableAccessControlConfiguration?: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration;
}

export function connectSecurityProfileGranularAccessControlConfigurationToTerraform(struct?: ConnectSecurityProfileGranularAccessControlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_table_access_control_configuration: connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationToTerraform(struct!.dataTableAccessControlConfiguration),
  }
}


export function connectSecurityProfileGranularAccessControlConfigurationToHclTerraform(struct?: ConnectSecurityProfileGranularAccessControlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_table_access_control_configuration: {
      value: connectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationToHclTerraform(struct!.dataTableAccessControlConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectSecurityProfileGranularAccessControlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectSecurityProfileGranularAccessControlConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTableAccessControlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTableAccessControlConfiguration = this._dataTableAccessControlConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectSecurityProfileGranularAccessControlConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataTableAccessControlConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataTableAccessControlConfiguration.internalValue = value.dataTableAccessControlConfiguration;
    }
  }

  // data_table_access_control_configuration - computed: true, optional: true, required: false
  private _dataTableAccessControlConfiguration = new ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference(this, "data_table_access_control_configuration");
  public get dataTableAccessControlConfiguration() {
    return this._dataTableAccessControlConfiguration;
  }
  public putDataTableAccessControlConfiguration(value: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration) {
    this._dataTableAccessControlConfiguration.internalValue = value;
  }
  public resetDataTableAccessControlConfiguration() {
    this._dataTableAccessControlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTableAccessControlConfigurationInput() {
    return this._dataTableAccessControlConfiguration.internalValue;
  }
}
export interface ConnectSecurityProfileTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#key ConnectSecurityProfile#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#value ConnectSecurityProfile#value}
  */
  readonly value?: string;
}

export function connectSecurityProfileTagsToTerraform(struct?: ConnectSecurityProfileTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function connectSecurityProfileTagsToHclTerraform(struct?: ConnectSecurityProfileTags | cdktn.IResolvable): any {
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

export class ConnectSecurityProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ConnectSecurityProfileTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ConnectSecurityProfileTags | cdktn.IResolvable | undefined) {
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

export class ConnectSecurityProfileTagsList extends cdktn.ComplexList {
  public internalValue? : ConnectSecurityProfileTags[] | cdktn.IResolvable

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
  public get(index: number): ConnectSecurityProfileTagsOutputReference {
    return new ConnectSecurityProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile awscc_connect_security_profile}
*/
export class ConnectSecurityProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConnectSecurityProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectSecurityProfile to import
  * @param importFromId The id of the existing ConnectSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/connect_security_profile awscc_connect_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_security_profile',
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
    this._allowedAccessControlHierarchyGroupId = config.allowedAccessControlHierarchyGroupId;
    this._allowedAccessControlTags.internalValue = config.allowedAccessControlTags;
    this._allowedFlowModules.internalValue = config.allowedFlowModules;
    this._applications.internalValue = config.applications;
    this._description = config.description;
    this._granularAccessControlConfiguration.internalValue = config.granularAccessControlConfiguration;
    this._hierarchyRestrictedResources = config.hierarchyRestrictedResources;
    this._instanceArn = config.instanceArn;
    this._permissions = config.permissions;
    this._securityProfileName = config.securityProfileName;
    this._tagRestrictedResources = config.tagRestrictedResources;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_access_control_hierarchy_group_id - computed: true, optional: true, required: false
  private _allowedAccessControlHierarchyGroupId?: string; 
  public get allowedAccessControlHierarchyGroupId() {
    return this.getStringAttribute('allowed_access_control_hierarchy_group_id');
  }
  public set allowedAccessControlHierarchyGroupId(value: string) {
    this._allowedAccessControlHierarchyGroupId = value;
  }
  public resetAllowedAccessControlHierarchyGroupId() {
    this._allowedAccessControlHierarchyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccessControlHierarchyGroupIdInput() {
    return this._allowedAccessControlHierarchyGroupId;
  }

  // allowed_access_control_tags - computed: true, optional: true, required: false
  private _allowedAccessControlTags = new ConnectSecurityProfileAllowedAccessControlTagsList(this, "allowed_access_control_tags", true);
  public get allowedAccessControlTags() {
    return this._allowedAccessControlTags;
  }
  public putAllowedAccessControlTags(value: ConnectSecurityProfileAllowedAccessControlTags[] | cdktn.IResolvable) {
    this._allowedAccessControlTags.internalValue = value;
  }
  public resetAllowedAccessControlTags() {
    this._allowedAccessControlTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccessControlTagsInput() {
    return this._allowedAccessControlTags.internalValue;
  }

  // allowed_flow_modules - computed: true, optional: true, required: false
  private _allowedFlowModules = new ConnectSecurityProfileAllowedFlowModulesList(this, "allowed_flow_modules", true);
  public get allowedFlowModules() {
    return this._allowedFlowModules;
  }
  public putAllowedFlowModules(value: ConnectSecurityProfileAllowedFlowModules[] | cdktn.IResolvable) {
    this._allowedFlowModules.internalValue = value;
  }
  public resetAllowedFlowModules() {
    this._allowedFlowModules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFlowModulesInput() {
    return this._allowedFlowModules.internalValue;
  }

  // applications - computed: true, optional: true, required: false
  private _applications = new ConnectSecurityProfileApplicationsList(this, "applications", true);
  public get applications() {
    return this._applications;
  }
  public putApplications(value: ConnectSecurityProfileApplications[] | cdktn.IResolvable) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // granular_access_control_configuration - computed: true, optional: true, required: false
  private _granularAccessControlConfiguration = new ConnectSecurityProfileGranularAccessControlConfigurationOutputReference(this, "granular_access_control_configuration");
  public get granularAccessControlConfiguration() {
    return this._granularAccessControlConfiguration;
  }
  public putGranularAccessControlConfiguration(value: ConnectSecurityProfileGranularAccessControlConfiguration) {
    this._granularAccessControlConfiguration.internalValue = value;
  }
  public resetGranularAccessControlConfiguration() {
    this._granularAccessControlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularAccessControlConfigurationInput() {
    return this._granularAccessControlConfiguration.internalValue;
  }

  // hierarchy_restricted_resources - computed: true, optional: true, required: false
  private _hierarchyRestrictedResources?: string[]; 
  public get hierarchyRestrictedResources() {
    return cdktn.Fn.tolist(this.getListAttribute('hierarchy_restricted_resources'));
  }
  public set hierarchyRestrictedResources(value: string[]) {
    this._hierarchyRestrictedResources = value;
  }
  public resetHierarchyRestrictedResources() {
    this._hierarchyRestrictedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyRestrictedResourcesInput() {
    return this._hierarchyRestrictedResources;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // last_modified_region - computed: true, optional: false, required: false
  public get lastModifiedRegion() {
    return this.getStringAttribute('last_modified_region');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktn.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // security_profile_arn - computed: true, optional: false, required: false
  public get securityProfileArn() {
    return this.getStringAttribute('security_profile_arn');
  }

  // security_profile_name - computed: false, optional: false, required: true
  private _securityProfileName?: string; 
  public get securityProfileName() {
    return this.getStringAttribute('security_profile_name');
  }
  public set securityProfileName(value: string) {
    this._securityProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileNameInput() {
    return this._securityProfileName;
  }

  // tag_restricted_resources - computed: true, optional: true, required: false
  private _tagRestrictedResources?: string[]; 
  public get tagRestrictedResources() {
    return cdktn.Fn.tolist(this.getListAttribute('tag_restricted_resources'));
  }
  public set tagRestrictedResources(value: string[]) {
    this._tagRestrictedResources = value;
  }
  public resetTagRestrictedResources() {
    this._tagRestrictedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagRestrictedResourcesInput() {
    return this._tagRestrictedResources;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ConnectSecurityProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ConnectSecurityProfileTags[] | cdktn.IResolvable) {
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
      allowed_access_control_hierarchy_group_id: cdktn.stringToTerraform(this._allowedAccessControlHierarchyGroupId),
      allowed_access_control_tags: cdktn.listMapper(connectSecurityProfileAllowedAccessControlTagsToTerraform, false)(this._allowedAccessControlTags.internalValue),
      allowed_flow_modules: cdktn.listMapper(connectSecurityProfileAllowedFlowModulesToTerraform, false)(this._allowedFlowModules.internalValue),
      applications: cdktn.listMapper(connectSecurityProfileApplicationsToTerraform, false)(this._applications.internalValue),
      description: cdktn.stringToTerraform(this._description),
      granular_access_control_configuration: connectSecurityProfileGranularAccessControlConfigurationToTerraform(this._granularAccessControlConfiguration.internalValue),
      hierarchy_restricted_resources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._hierarchyRestrictedResources),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._permissions),
      security_profile_name: cdktn.stringToTerraform(this._securityProfileName),
      tag_restricted_resources: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tagRestrictedResources),
      tags: cdktn.listMapper(connectSecurityProfileTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_access_control_hierarchy_group_id: {
        value: cdktn.stringToHclTerraform(this._allowedAccessControlHierarchyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_access_control_tags: {
        value: cdktn.listMapperHcl(connectSecurityProfileAllowedAccessControlTagsToHclTerraform, false)(this._allowedAccessControlTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectSecurityProfileAllowedAccessControlTagsList",
      },
      allowed_flow_modules: {
        value: cdktn.listMapperHcl(connectSecurityProfileAllowedFlowModulesToHclTerraform, false)(this._allowedFlowModules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectSecurityProfileAllowedFlowModulesList",
      },
      applications: {
        value: cdktn.listMapperHcl(connectSecurityProfileApplicationsToHclTerraform, false)(this._applications.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectSecurityProfileApplicationsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      granular_access_control_configuration: {
        value: connectSecurityProfileGranularAccessControlConfigurationToHclTerraform(this._granularAccessControlConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectSecurityProfileGranularAccessControlConfiguration",
      },
      hierarchy_restricted_resources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._hierarchyRestrictedResources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_profile_name: {
        value: cdktn.stringToHclTerraform(this._securityProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_restricted_resources: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tagRestrictedResources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(connectSecurityProfileTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectSecurityProfileTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
