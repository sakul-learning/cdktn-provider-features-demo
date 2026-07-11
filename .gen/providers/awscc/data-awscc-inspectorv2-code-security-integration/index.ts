// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/inspectorv2_code_security_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccInspectorv2CodeSecurityIntegrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/inspectorv2_code_security_integration#id DataAwsccInspectorv2CodeSecurityIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged {
}

export function dataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedToTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedToHclTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails {
}

export function dataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsToTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsToHclTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gitlab_self_managed - computed: true, optional: false, required: false
  private _gitlabSelfManaged = new DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference(this, "gitlab_self_managed");
  public get gitlabSelfManaged() {
    return this._gitlabSelfManaged;
  }
}
export interface DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub {
}

export function dataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubToTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubToHclTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // installation_id - computed: true, optional: false, required: false
  public get installationId() {
    return this.getStringAttribute('installation_id');
  }
}
export interface DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged {
}

export function dataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedToTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedToHclTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
}
export interface DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails {
}

export function dataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsToTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsToHclTerraform(struct?: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // github - computed: true, optional: false, required: false
  private _github = new DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }

  // gitlab_self_managed - computed: true, optional: false, required: false
  private _gitlabSelfManaged = new DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference(this, "gitlab_self_managed");
  public get gitlabSelfManaged() {
    return this._gitlabSelfManaged;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}
*/
export class DataAwsccInspectorv2CodeSecurityIntegration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_inspectorv2_code_security_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccInspectorv2CodeSecurityIntegration to import
  * @param importFromId The id of the existing DataAwsccInspectorv2CodeSecurityIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccInspectorv2CodeSecurityIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_code_security_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccInspectorv2CodeSecurityIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccInspectorv2CodeSecurityIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_inspectorv2_code_security_integration',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorization_url - computed: true, optional: false, required: false
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }

  // create_integration_details - computed: true, optional: false, required: false
  private _createIntegrationDetails = new DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference(this, "create_integration_details");
  public get createIntegrationDetails() {
    return this._createIntegrationDetails;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_integration_details - computed: true, optional: false, required: false
  private _updateIntegrationDetails = new DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference(this, "update_integration_details");
  public get updateIntegrationDetails() {
    return this._updateIntegrationDetails;
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
