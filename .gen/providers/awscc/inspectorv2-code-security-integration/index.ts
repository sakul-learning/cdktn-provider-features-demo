// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Inspectorv2CodeSecurityIntegrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Create Integration Details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#create_integration_details Inspectorv2CodeSecurityIntegration#create_integration_details}
  */
  readonly createIntegrationDetails?: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails;
  /**
  * Code Security Integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#name Inspectorv2CodeSecurityIntegration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Integration Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#type Inspectorv2CodeSecurityIntegration#type}
  */
  readonly type?: string;
  /**
  * Update Integration Details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#update_integration_details Inspectorv2CodeSecurityIntegration#update_integration_details}
  */
  readonly updateIntegrationDetails?: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails;
}
export interface Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}
  */
  readonly instanceUrl?: string;
}

export function inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedToTerraform(struct?: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedToHclTerraform(struct?: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}
  */
  readonly gitlabSelfManaged?: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged;
}

export function inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsToTerraform(struct?: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    gitlab_self_managed: inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedToTerraform(struct!.gitlabSelfManaged),
  }
}


export function inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsToHclTerraform(struct?: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    gitlab_self_managed: {
      value: inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedToHclTerraform(struct!.gitlabSelfManaged),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gitlabSelfManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlabSelfManaged = this._gitlabSelfManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gitlabSelfManaged.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gitlabSelfManaged.internalValue = value.gitlabSelfManaged;
    }
  }

  // gitlab_self_managed - computed: true, optional: true, required: false
  private _gitlabSelfManaged = new Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference(this, "gitlab_self_managed");
  public get gitlabSelfManaged() {
    return this._gitlabSelfManaged;
  }
  public putGitlabSelfManaged(value: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged) {
    this._gitlabSelfManaged.internalValue = value;
  }
  public resetGitlabSelfManaged() {
    this._gitlabSelfManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabSelfManagedInput() {
    return this._gitlabSelfManaged.internalValue;
  }
}
export interface Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}
  */
  readonly installationId?: string;
}

export function inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubToTerraform(struct?: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code: cdktn.stringToTerraform(struct!.code),
    installation_id: cdktn.stringToTerraform(struct!.installationId),
  }
}


export function inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubToHclTerraform(struct?: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code: {
      value: cdktn.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    installation_id: {
      value: cdktn.stringToHclTerraform(struct!.installationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._installationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.installationId = this._installationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._installationId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._installationId = value.installationId;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // installation_id - computed: true, optional: true, required: false
  private _installationId?: string; 
  public get installationId() {
    return this.getStringAttribute('installation_id');
  }
  public set installationId(value: string) {
    this._installationId = value;
  }
  public resetInstallationId() {
    this._installationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId;
  }
}
export interface Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}
  */
  readonly authCode?: string;
}

export function inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedToTerraform(struct?: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_code: cdktn.stringToTerraform(struct!.authCode),
  }
}


export function inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedToHclTerraform(struct?: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_code: {
      value: cdktn.stringToHclTerraform(struct!.authCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCode = this._authCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authCode = value.authCode;
    }
  }

  // auth_code - computed: true, optional: true, required: false
  private _authCode?: string; 
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }
  public set authCode(value: string) {
    this._authCode = value;
  }
  public resetAuthCode() {
    this._authCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCodeInput() {
    return this._authCode;
  }
}
export interface Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}
  */
  readonly github?: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}
  */
  readonly gitlabSelfManaged?: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged;
}

export function inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsToTerraform(struct?: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    github: inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubToTerraform(struct!.github),
    gitlab_self_managed: inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedToTerraform(struct!.gitlabSelfManaged),
  }
}


export function inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsToHclTerraform(struct?: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    github: {
      value: inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub",
    },
    gitlab_self_managed: {
      value: inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedToHclTerraform(struct!.gitlabSelfManaged),
      isBlock: true,
      type: "struct",
      storageClassType: "Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._gitlabSelfManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlabSelfManaged = this._gitlabSelfManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._github.internalValue = undefined;
      this._gitlabSelfManaged.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._github.internalValue = value.github;
      this._gitlabSelfManaged.internalValue = value.gitlabSelfManaged;
    }
  }

  // github - computed: true, optional: true, required: false
  private _github = new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // gitlab_self_managed - computed: true, optional: true, required: false
  private _gitlabSelfManaged = new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference(this, "gitlab_self_managed");
  public get gitlabSelfManaged() {
    return this._gitlabSelfManaged;
  }
  public putGitlabSelfManaged(value: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged) {
    this._gitlabSelfManaged.internalValue = value;
  }
  public resetGitlabSelfManaged() {
    this._gitlabSelfManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabSelfManagedInput() {
    return this._gitlabSelfManaged.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}
*/
export class Inspectorv2CodeSecurityIntegration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_inspectorv2_code_security_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Inspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inspectorv2CodeSecurityIntegration to import
  * @param importFromId The id of the existing Inspectorv2CodeSecurityIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inspectorv2CodeSecurityIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_code_security_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Inspectorv2CodeSecurityIntegrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Inspectorv2CodeSecurityIntegrationConfig = {}) {
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
    this._createIntegrationDetails.internalValue = config.createIntegrationDetails;
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._updateIntegrationDetails.internalValue = config.updateIntegrationDetails;
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

  // create_integration_details - computed: true, optional: true, required: false
  private _createIntegrationDetails = new Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference(this, "create_integration_details");
  public get createIntegrationDetails() {
    return this._createIntegrationDetails;
  }
  public putCreateIntegrationDetails(value: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails) {
    this._createIntegrationDetails.internalValue = value;
  }
  public resetCreateIntegrationDetails() {
    this._createIntegrationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIntegrationDetailsInput() {
    return this._createIntegrationDetails.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // update_integration_details - computed: true, optional: true, required: false
  private _updateIntegrationDetails = new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference(this, "update_integration_details");
  public get updateIntegrationDetails() {
    return this._updateIntegrationDetails;
  }
  public putUpdateIntegrationDetails(value: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails) {
    this._updateIntegrationDetails.internalValue = value;
  }
  public resetUpdateIntegrationDetails() {
    this._updateIntegrationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntegrationDetailsInput() {
    return this._updateIntegrationDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_integration_details: inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsToTerraform(this._createIntegrationDetails.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      type: cdktn.stringToTerraform(this._type),
      update_integration_details: inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsToTerraform(this._updateIntegrationDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_integration_details: {
        value: inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsToHclTerraform(this._createIntegrationDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_integration_details: {
        value: inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsToHclTerraform(this._updateIntegrationDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
