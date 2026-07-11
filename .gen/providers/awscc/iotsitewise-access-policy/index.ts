// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotsitewiseAccessPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The identity for this access policy. Choose either a user or a group but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#access_policy_identity IotsitewiseAccessPolicy#access_policy_identity}
  */
  readonly accessPolicyIdentity: IotsitewiseAccessPolicyAccessPolicyIdentity;
  /**
  * The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#access_policy_permission IotsitewiseAccessPolicy#access_policy_permission}
  */
  readonly accessPolicyPermission: string;
  /**
  * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#access_policy_resource IotsitewiseAccessPolicy#access_policy_resource}
  */
  readonly accessPolicyResource: IotsitewiseAccessPolicyAccessPolicyResource;
}
export interface IotsitewiseAccessPolicyAccessPolicyIdentityIamRole {
  /**
  * The ARN of the IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}
  */
  readonly arn?: string;
}

export function iotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function iotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToHclTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAccessPolicyAccessPolicyIdentityIamRole | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface IotsitewiseAccessPolicyAccessPolicyIdentityIamUser {
  /**
  * The ARN of the IAM user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#arn IotsitewiseAccessPolicy#arn}
  */
  readonly arn?: string;
}

export function iotsitewiseAccessPolicyAccessPolicyIdentityIamUserToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function iotsitewiseAccessPolicyAccessPolicyIdentityIamUserToHclTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAccessPolicyAccessPolicyIdentityIamUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface IotsitewiseAccessPolicyAccessPolicyIdentityUser {
  /**
  * The AWS SSO ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function iotsitewiseAccessPolicyAccessPolicyIdentityUserToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function iotsitewiseAccessPolicyAccessPolicyIdentityUserToHclTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAccessPolicyAccessPolicyIdentityUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAccessPolicyAccessPolicyIdentityUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface IotsitewiseAccessPolicyAccessPolicyIdentity {
  /**
  * Contains information for an IAM role identity in an access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#iam_role IotsitewiseAccessPolicy#iam_role}
  */
  readonly iamRole?: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole;
  /**
  * Contains information for an IAM user identity in an access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#iam_user IotsitewiseAccessPolicy#iam_user}
  */
  readonly iamUser?: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser;
  /**
  * Contains information for a user identity in an access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#user IotsitewiseAccessPolicy#user}
  */
  readonly user?: IotsitewiseAccessPolicyAccessPolicyIdentityUser;
}

export function iotsitewiseAccessPolicyAccessPolicyIdentityToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iam_role: iotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToTerraform(struct!.iamRole),
    iam_user: iotsitewiseAccessPolicyAccessPolicyIdentityIamUserToTerraform(struct!.iamUser),
    user: iotsitewiseAccessPolicyAccessPolicyIdentityUserToTerraform(struct!.user),
  }
}


export function iotsitewiseAccessPolicyAccessPolicyIdentityToHclTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iam_role: {
      value: iotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToHclTerraform(struct!.iamRole),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAccessPolicyAccessPolicyIdentityIamRole",
    },
    iam_user: {
      value: iotsitewiseAccessPolicyAccessPolicyIdentityIamUserToHclTerraform(struct!.iamUser),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAccessPolicyAccessPolicyIdentityIamUser",
    },
    user: {
      value: iotsitewiseAccessPolicyAccessPolicyIdentityUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAccessPolicyAccessPolicyIdentityUser",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAccessPolicyAccessPolicyIdentity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole?.internalValue;
    }
    if (this._iamUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamUser = this._iamUser?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAccessPolicyAccessPolicyIdentity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamRole.internalValue = undefined;
      this._iamUser.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamRole.internalValue = value.iamRole;
      this._iamUser.internalValue = value.iamUser;
      this._user.internalValue = value.user;
    }
  }

  // iam_role - computed: true, optional: true, required: false
  private _iamRole = new IotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference(this, "iam_role");
  public get iamRole() {
    return this._iamRole;
  }
  public putIamRole(value: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole) {
    this._iamRole.internalValue = value;
  }
  public resetIamRole() {
    this._iamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole.internalValue;
  }

  // iam_user - computed: true, optional: true, required: false
  private _iamUser = new IotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference(this, "iam_user");
  public get iamUser() {
    return this._iamUser;
  }
  public putIamUser(value: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser) {
    this._iamUser.internalValue = value;
  }
  public resetIamUser() {
    this._iamUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamUserInput() {
    return this._iamUser.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user = new IotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: IotsitewiseAccessPolicyAccessPolicyIdentityUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface IotsitewiseAccessPolicyAccessPolicyResourcePortal {
  /**
  * The ID of the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function iotsitewiseAccessPolicyAccessPolicyResourcePortalToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResourcePortal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function iotsitewiseAccessPolicyAccessPolicyResourcePortalToHclTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResourcePortal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAccessPolicyAccessPolicyResourcePortal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAccessPolicyAccessPolicyResourcePortal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface IotsitewiseAccessPolicyAccessPolicyResourceProject {
  /**
  * The ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#id IotsitewiseAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function iotsitewiseAccessPolicyAccessPolicyResourceProjectToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResourceProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function iotsitewiseAccessPolicyAccessPolicyResourceProjectToHclTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResourceProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAccessPolicyAccessPolicyResourceProject | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAccessPolicyAccessPolicyResourceProject | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface IotsitewiseAccessPolicyAccessPolicyResource {
  /**
  * A portal resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#portal IotsitewiseAccessPolicy#portal}
  */
  readonly portal?: IotsitewiseAccessPolicyAccessPolicyResourcePortal;
  /**
  * A project resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#project IotsitewiseAccessPolicy#project}
  */
  readonly project?: IotsitewiseAccessPolicyAccessPolicyResourceProject;
}

export function iotsitewiseAccessPolicyAccessPolicyResourceToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    portal: iotsitewiseAccessPolicyAccessPolicyResourcePortalToTerraform(struct!.portal),
    project: iotsitewiseAccessPolicyAccessPolicyResourceProjectToTerraform(struct!.project),
  }
}


export function iotsitewiseAccessPolicyAccessPolicyResourceToHclTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    portal: {
      value: iotsitewiseAccessPolicyAccessPolicyResourcePortalToHclTerraform(struct!.portal),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAccessPolicyAccessPolicyResourcePortal",
    },
    project: {
      value: iotsitewiseAccessPolicyAccessPolicyResourceProjectToHclTerraform(struct!.project),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseAccessPolicyAccessPolicyResourceProject",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseAccessPolicyAccessPolicyResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseAccessPolicyAccessPolicyResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portal = this._portal?.internalValue;
    }
    if (this._project?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseAccessPolicyAccessPolicyResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portal.internalValue = undefined;
      this._project.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portal.internalValue = value.portal;
      this._project.internalValue = value.project;
    }
  }

  // portal - computed: true, optional: true, required: false
  private _portal = new IotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference(this, "portal");
  public get portal() {
    return this._portal;
  }
  public putPortal(value: IotsitewiseAccessPolicyAccessPolicyResourcePortal) {
    this._portal.internalValue = value;
  }
  public resetPortal() {
    this._portal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal.internalValue;
  }

  // project - computed: true, optional: true, required: false
  private _project = new IotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: IotsitewiseAccessPolicyAccessPolicyResourceProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy awscc_iotsitewise_access_policy}
*/
export class IotsitewiseAccessPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotsitewise_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotsitewiseAccessPolicy to import
  * @param importFromId The id of the existing IotsitewiseAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotsitewiseAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotsitewise_access_policy awscc_iotsitewise_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_access_policy',
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
    this._accessPolicyIdentity.internalValue = config.accessPolicyIdentity;
    this._accessPolicyPermission = config.accessPolicyPermission;
    this._accessPolicyResource.internalValue = config.accessPolicyResource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_arn - computed: true, optional: false, required: false
  public get accessPolicyArn() {
    return this.getStringAttribute('access_policy_arn');
  }

  // access_policy_id - computed: true, optional: false, required: false
  public get accessPolicyId() {
    return this.getStringAttribute('access_policy_id');
  }

  // access_policy_identity - computed: false, optional: false, required: true
  private _accessPolicyIdentity = new IotsitewiseAccessPolicyAccessPolicyIdentityOutputReference(this, "access_policy_identity");
  public get accessPolicyIdentity() {
    return this._accessPolicyIdentity;
  }
  public putAccessPolicyIdentity(value: IotsitewiseAccessPolicyAccessPolicyIdentity) {
    this._accessPolicyIdentity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyIdentityInput() {
    return this._accessPolicyIdentity.internalValue;
  }

  // access_policy_permission - computed: false, optional: false, required: true
  private _accessPolicyPermission?: string; 
  public get accessPolicyPermission() {
    return this.getStringAttribute('access_policy_permission');
  }
  public set accessPolicyPermission(value: string) {
    this._accessPolicyPermission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyPermissionInput() {
    return this._accessPolicyPermission;
  }

  // access_policy_resource - computed: false, optional: false, required: true
  private _accessPolicyResource = new IotsitewiseAccessPolicyAccessPolicyResourceOutputReference(this, "access_policy_resource");
  public get accessPolicyResource() {
    return this._accessPolicyResource;
  }
  public putAccessPolicyResource(value: IotsitewiseAccessPolicyAccessPolicyResource) {
    this._accessPolicyResource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyResourceInput() {
    return this._accessPolicyResource.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy_identity: iotsitewiseAccessPolicyAccessPolicyIdentityToTerraform(this._accessPolicyIdentity.internalValue),
      access_policy_permission: cdktn.stringToTerraform(this._accessPolicyPermission),
      access_policy_resource: iotsitewiseAccessPolicyAccessPolicyResourceToTerraform(this._accessPolicyResource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy_identity: {
        value: iotsitewiseAccessPolicyAccessPolicyIdentityToHclTerraform(this._accessPolicyIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotsitewiseAccessPolicyAccessPolicyIdentity",
      },
      access_policy_permission: {
        value: cdktn.stringToHclTerraform(this._accessPolicyPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_policy_resource: {
        value: iotsitewiseAccessPolicyAccessPolicyResourceToHclTerraform(this._accessPolicyResource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotsitewiseAccessPolicyAccessPolicyResource",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
