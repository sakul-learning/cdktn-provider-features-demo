// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotsitewiseAccessPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_access_policy#id DataAwsccIotsitewiseAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole {
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToHclTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser {
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserToHclTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser {
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserToHclTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity {
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityToHclTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iam_role - computed: true, optional: false, required: false
  private _iamRole = new DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleOutputReference(this, "iam_role");
  public get iamRole() {
    return this._iamRole;
  }

  // iam_user - computed: true, optional: false, required: false
  private _iamUser = new DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserOutputReference(this, "iam_user");
  public get iamUser() {
    return this._iamUser;
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
}
export interface DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal {
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalToHclTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject {
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectToHclTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataAwsccIotsitewiseAccessPolicyAccessPolicyResource {
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourceToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourceToHclTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotsitewiseAccessPolicyAccessPolicyResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotsitewiseAccessPolicyAccessPolicyResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // portal - computed: true, optional: false, required: false
  private _portal = new DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalOutputReference(this, "portal");
  public get portal() {
    return this._portal;
  }

  // project - computed: true, optional: false, required: false
  private _project = new DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_access_policy awscc_iotsitewise_access_policy}
*/
export class DataAwsccIotsitewiseAccessPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotsitewise_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotsitewiseAccessPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotsitewiseAccessPolicy to import
  * @param importFromId The id of the existing DataAwsccIotsitewiseAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotsitewiseAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotsitewise_access_policy awscc_iotsitewise_access_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotsitewiseAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseAccessPolicyConfig) {
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
    this._id = config.id;
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

  // access_policy_identity - computed: true, optional: false, required: false
  private _accessPolicyIdentity = new DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityOutputReference(this, "access_policy_identity");
  public get accessPolicyIdentity() {
    return this._accessPolicyIdentity;
  }

  // access_policy_permission - computed: true, optional: false, required: false
  public get accessPolicyPermission() {
    return this.getStringAttribute('access_policy_permission');
  }

  // access_policy_resource - computed: true, optional: false, required: false
  private _accessPolicyResource = new DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceOutputReference(this, "access_policy_resource");
  public get accessPolicyResource() {
    return this._accessPolicyResource;
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
