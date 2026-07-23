// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsoPermissionSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}
  */
  readonly customerManagedPolicyReferences?: SsoPermissionSetCustomerManagedPolicyReferences[] | cdktn.IResolvable;
  /**
  * The permission set description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#description SsoPermissionSet#description}
  */
  readonly description?: string;
  /**
  * The inline policy to put in permission set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#inline_policy SsoPermissionSet#inline_policy}
  */
  readonly inlinePolicy?: string;
  /**
  * The sso instance arn that the permission set is owned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#instance_arn SsoPermissionSet#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}
  */
  readonly managedPolicies?: string[];
  /**
  * The name you want to assign to this permission set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}
  */
  readonly permissionsBoundary?: SsoPermissionSetPermissionsBoundary;
  /**
  * The relay state URL that redirect links to any service in the AWS Management Console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#relay_state_type SsoPermissionSet#relay_state_type}
  */
  readonly relayStateType?: string;
  /**
  * The length of time that a user can be signed in to an AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#session_duration SsoPermissionSet#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}
  */
  readonly tags?: SsoPermissionSetTags[] | cdktn.IResolvable;
}
export interface SsoPermissionSetCustomerManagedPolicyReferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}
  */
  readonly path?: string;
}

export function ssoPermissionSetCustomerManagedPolicyReferencesToTerraform(struct?: SsoPermissionSetCustomerManagedPolicyReferences | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function ssoPermissionSetCustomerManagedPolicyReferencesToHclTerraform(struct?: SsoPermissionSetCustomerManagedPolicyReferences | cdktn.IResolvable): any {
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
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoPermissionSetCustomerManagedPolicyReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsoPermissionSetCustomerManagedPolicyReferences | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoPermissionSetCustomerManagedPolicyReferences | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class SsoPermissionSetCustomerManagedPolicyReferencesList extends cdktn.ComplexList {
  public internalValue? : SsoPermissionSetCustomerManagedPolicyReferences[] | cdktn.IResolvable

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
  public get(index: number): SsoPermissionSetCustomerManagedPolicyReferencesOutputReference {
    return new SsoPermissionSetCustomerManagedPolicyReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}
  */
  readonly path?: string;
}

export function ssoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceToTerraform(struct?: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function ssoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceToHclTerraform(struct?: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference | cdktn.IResolvable): any {
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
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface SsoPermissionSetPermissionsBoundary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}
  */
  readonly customerManagedPolicyReference?: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference;
  /**
  * The managed policy to attach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#managed_policy_arn SsoPermissionSet#managed_policy_arn}
  */
  readonly managedPolicyArn?: string;
}

export function ssoPermissionSetPermissionsBoundaryToTerraform(struct?: SsoPermissionSetPermissionsBoundary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_managed_policy_reference: ssoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceToTerraform(struct!.customerManagedPolicyReference),
    managed_policy_arn: cdktn.stringToTerraform(struct!.managedPolicyArn),
  }
}


export function ssoPermissionSetPermissionsBoundaryToHclTerraform(struct?: SsoPermissionSetPermissionsBoundary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_managed_policy_reference: {
      value: ssoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceToHclTerraform(struct!.customerManagedPolicyReference),
      isBlock: true,
      type: "struct",
      storageClassType: "SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference",
    },
    managed_policy_arn: {
      value: cdktn.stringToHclTerraform(struct!.managedPolicyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoPermissionSetPermissionsBoundaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsoPermissionSetPermissionsBoundary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerManagedPolicyReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedPolicyReference = this._customerManagedPolicyReference?.internalValue;
    }
    if (this._managedPolicyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPolicyArn = this._managedPolicyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoPermissionSetPermissionsBoundary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerManagedPolicyReference.internalValue = undefined;
      this._managedPolicyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerManagedPolicyReference.internalValue = value.customerManagedPolicyReference;
      this._managedPolicyArn = value.managedPolicyArn;
    }
  }

  // customer_managed_policy_reference - computed: true, optional: true, required: false
  private _customerManagedPolicyReference = new SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference(this, "customer_managed_policy_reference");
  public get customerManagedPolicyReference() {
    return this._customerManagedPolicyReference;
  }
  public putCustomerManagedPolicyReference(value: SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference) {
    this._customerManagedPolicyReference.internalValue = value;
  }
  public resetCustomerManagedPolicyReference() {
    this._customerManagedPolicyReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedPolicyReferenceInput() {
    return this._customerManagedPolicyReference.internalValue;
  }

  // managed_policy_arn - computed: true, optional: true, required: false
  private _managedPolicyArn?: string; 
  public get managedPolicyArn() {
    return this.getStringAttribute('managed_policy_arn');
  }
  public set managedPolicyArn(value: string) {
    this._managedPolicyArn = value;
  }
  public resetManagedPolicyArn() {
    this._managedPolicyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPolicyArnInput() {
    return this._managedPolicyArn;
  }
}
export interface SsoPermissionSetTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#key SsoPermissionSet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#value SsoPermissionSet#value}
  */
  readonly value?: string;
}

export function ssoPermissionSetTagsToTerraform(struct?: SsoPermissionSetTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ssoPermissionSetTagsToHclTerraform(struct?: SsoPermissionSetTags | cdktn.IResolvable): any {
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

export class SsoPermissionSetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsoPermissionSetTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SsoPermissionSetTags | cdktn.IResolvable | undefined) {
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

export class SsoPermissionSetTagsList extends cdktn.ComplexList {
  public internalValue? : SsoPermissionSetTags[] | cdktn.IResolvable

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
  public get(index: number): SsoPermissionSetTagsOutputReference {
    return new SsoPermissionSetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set awscc_sso_permission_set}
*/
export class SsoPermissionSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sso_permission_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsoPermissionSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoPermissionSet to import
  * @param importFromId The id of the existing SsoPermissionSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoPermissionSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sso_permission_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sso_permission_set awscc_sso_permission_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoPermissionSetConfig
  */
  public constructor(scope: Construct, id: string, config: SsoPermissionSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sso_permission_set',
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
    this._customerManagedPolicyReferences.internalValue = config.customerManagedPolicyReferences;
    this._description = config.description;
    this._inlinePolicy = config.inlinePolicy;
    this._instanceArn = config.instanceArn;
    this._managedPolicies = config.managedPolicies;
    this._name = config.name;
    this._permissionsBoundary.internalValue = config.permissionsBoundary;
    this._relayStateType = config.relayStateType;
    this._sessionDuration = config.sessionDuration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_managed_policy_references - computed: true, optional: true, required: false
  private _customerManagedPolicyReferences = new SsoPermissionSetCustomerManagedPolicyReferencesList(this, "customer_managed_policy_references", false);
  public get customerManagedPolicyReferences() {
    return this._customerManagedPolicyReferences;
  }
  public putCustomerManagedPolicyReferences(value: SsoPermissionSetCustomerManagedPolicyReferences[] | cdktn.IResolvable) {
    this._customerManagedPolicyReferences.internalValue = value;
  }
  public resetCustomerManagedPolicyReferences() {
    this._customerManagedPolicyReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedPolicyReferencesInput() {
    return this._customerManagedPolicyReferences.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inline_policy - computed: true, optional: true, required: false
  private _inlinePolicy?: string; 
  public get inlinePolicy() {
    return this.getStringAttribute('inline_policy');
  }
  public set inlinePolicy(value: string) {
    this._inlinePolicy = value;
  }
  public resetInlinePolicy() {
    this._inlinePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePolicyInput() {
    return this._inlinePolicy;
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

  // managed_policies - computed: true, optional: true, required: false
  private _managedPolicies?: string[]; 
  public get managedPolicies() {
    return this.getListAttribute('managed_policies');
  }
  public set managedPolicies(value: string[]) {
    this._managedPolicies = value;
  }
  public resetManagedPolicies() {
    this._managedPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPoliciesInput() {
    return this._managedPolicies;
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

  // permission_set_arn - computed: true, optional: false, required: false
  public get permissionSetArn() {
    return this.getStringAttribute('permission_set_arn');
  }

  // permissions_boundary - computed: true, optional: true, required: false
  private _permissionsBoundary = new SsoPermissionSetPermissionsBoundaryOutputReference(this, "permissions_boundary");
  public get permissionsBoundary() {
    return this._permissionsBoundary;
  }
  public putPermissionsBoundary(value: SsoPermissionSetPermissionsBoundary) {
    this._permissionsBoundary.internalValue = value;
  }
  public resetPermissionsBoundary() {
    this._permissionsBoundary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryInput() {
    return this._permissionsBoundary.internalValue;
  }

  // relay_state_type - computed: true, optional: true, required: false
  private _relayStateType?: string; 
  public get relayStateType() {
    return this.getStringAttribute('relay_state_type');
  }
  public set relayStateType(value: string) {
    this._relayStateType = value;
  }
  public resetRelayStateType() {
    this._relayStateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayStateTypeInput() {
    return this._relayStateType;
  }

  // session_duration - computed: true, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SsoPermissionSetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SsoPermissionSetTags[] | cdktn.IResolvable) {
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
      customer_managed_policy_references: cdktn.listMapper(ssoPermissionSetCustomerManagedPolicyReferencesToTerraform, false)(this._customerManagedPolicyReferences.internalValue),
      description: cdktn.stringToTerraform(this._description),
      inline_policy: cdktn.stringToTerraform(this._inlinePolicy),
      instance_arn: cdktn.stringToTerraform(this._instanceArn),
      managed_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._managedPolicies),
      name: cdktn.stringToTerraform(this._name),
      permissions_boundary: ssoPermissionSetPermissionsBoundaryToTerraform(this._permissionsBoundary.internalValue),
      relay_state_type: cdktn.stringToTerraform(this._relayStateType),
      session_duration: cdktn.stringToTerraform(this._sessionDuration),
      tags: cdktn.listMapper(ssoPermissionSetTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_managed_policy_references: {
        value: cdktn.listMapperHcl(ssoPermissionSetCustomerManagedPolicyReferencesToHclTerraform, false)(this._customerManagedPolicyReferences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoPermissionSetCustomerManagedPolicyReferencesList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inline_policy: {
        value: cdktn.stringToHclTerraform(this._inlinePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_arn: {
        value: cdktn.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._managedPolicies),
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
      permissions_boundary: {
        value: ssoPermissionSetPermissionsBoundaryToHclTerraform(this._permissionsBoundary.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsoPermissionSetPermissionsBoundary",
      },
      relay_state_type: {
        value: cdktn.stringToHclTerraform(this._relayStateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_duration: {
        value: cdktn.stringToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ssoPermissionSetTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoPermissionSetTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
