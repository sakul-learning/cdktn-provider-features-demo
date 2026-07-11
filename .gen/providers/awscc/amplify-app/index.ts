// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AmplifyAppConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}
  */
  readonly autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}
  */
  readonly basicAuthConfig?: AmplifyAppBasicAuthConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}
  */
  readonly buildSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}
  */
  readonly cacheConfig?: AmplifyAppCacheConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}
  */
  readonly computeRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}
  */
  readonly customHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}
  */
  readonly customRules?: AmplifyAppCustomRules[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#description AmplifyApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}
  */
  readonly enableBranchAutoDeletion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}
  */
  readonly environmentVariables?: AmplifyAppEnvironmentVariables[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}
  */
  readonly iamServiceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}
  */
  readonly jobConfig?: AmplifyAppJobConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#name AmplifyApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}
  */
  readonly oauthToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#platform AmplifyApp#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#repository AmplifyApp#repository}
  */
  readonly repository?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#tags AmplifyApp#tags}
  */
  readonly tags?: AmplifyAppTags[] | cdktn.IResolvable;
}
export interface AmplifyAppAutoBranchCreationConfigBasicAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}
  */
  readonly enableBasicAuth?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#password AmplifyApp#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#username AmplifyApp#username}
  */
  readonly username?: string;
}

export function amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfigBasicAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_basic_auth: cdktn.booleanToTerraform(struct!.enableBasicAuth),
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function amplifyAppAutoBranchCreationConfigBasicAuthConfigToHclTerraform(struct?: AmplifyAppAutoBranchCreationConfigBasicAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_basic_auth: {
      value: cdktn.booleanToHclTerraform(struct!.enableBasicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AmplifyAppAutoBranchCreationConfigBasicAuthConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBasicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBasicAuth = this._enableBasicAuth;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyAppAutoBranchCreationConfigBasicAuthConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableBasicAuth = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableBasicAuth = value.enableBasicAuth;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // enable_basic_auth - computed: true, optional: true, required: false
  private _enableBasicAuth?: boolean | cdktn.IResolvable;
  public get enableBasicAuth() {
    return this.getBooleanAttribute('enable_basic_auth');
  }
  public set enableBasicAuth(value: boolean | cdktn.IResolvable) {
    this._enableBasicAuth = value;
  }
  public resetEnableBasicAuth() {
    this._enableBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBasicAuthInput() {
    return this._enableBasicAuth;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AmplifyAppAutoBranchCreationConfigEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#name AmplifyApp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#value AmplifyApp#value}
  */
  readonly value?: string;
}

export function amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform(struct?: AmplifyAppAutoBranchCreationConfigEnvironmentVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function amplifyAppAutoBranchCreationConfigEnvironmentVariablesToHclTerraform(struct?: AmplifyAppAutoBranchCreationConfigEnvironmentVariables | cdktn.IResolvable): any {
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

export class AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AmplifyAppAutoBranchCreationConfigEnvironmentVariables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AmplifyAppAutoBranchCreationConfigEnvironmentVariables | cdktn.IResolvable | undefined) {
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

export class AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList extends cdktn.ComplexList {
  public internalValue? : AmplifyAppAutoBranchCreationConfigEnvironmentVariables[] | cdktn.IResolvable

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
  public get(index: number): AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference {
    return new AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AmplifyAppAutoBranchCreationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}
  */
  readonly autoBranchCreationPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}
  */
  readonly basicAuthConfig?: AmplifyAppAutoBranchCreationConfigBasicAuthConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}
  */
  readonly buildSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}
  */
  readonly enableAutoBranchCreation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}
  */
  readonly enableAutoBuild?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}
  */
  readonly enablePerformanceMode?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}
  */
  readonly enablePullRequestPreview?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}
  */
  readonly environmentVariables?: AmplifyAppAutoBranchCreationConfigEnvironmentVariables[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#framework AmplifyApp#framework}
  */
  readonly framework?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}
  */
  readonly pullRequestEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#stage AmplifyApp#stage}
  */
  readonly stage?: string;
}

export function amplifyAppAutoBranchCreationConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_branch_creation_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.autoBranchCreationPatterns),
    basic_auth_config: amplifyAppAutoBranchCreationConfigBasicAuthConfigToTerraform(struct!.basicAuthConfig),
    build_spec: cdktn.stringToTerraform(struct!.buildSpec),
    enable_auto_branch_creation: cdktn.booleanToTerraform(struct!.enableAutoBranchCreation),
    enable_auto_build: cdktn.booleanToTerraform(struct!.enableAutoBuild),
    enable_performance_mode: cdktn.booleanToTerraform(struct!.enablePerformanceMode),
    enable_pull_request_preview: cdktn.booleanToTerraform(struct!.enablePullRequestPreview),
    environment_variables: cdktn.listMapper(amplifyAppAutoBranchCreationConfigEnvironmentVariablesToTerraform, false)(struct!.environmentVariables),
    framework: cdktn.stringToTerraform(struct!.framework),
    pull_request_environment_name: cdktn.stringToTerraform(struct!.pullRequestEnvironmentName),
    stage: cdktn.stringToTerraform(struct!.stage),
  }
}


export function amplifyAppAutoBranchCreationConfigToHclTerraform(struct?: AmplifyAppAutoBranchCreationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_branch_creation_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.autoBranchCreationPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    basic_auth_config: {
      value: amplifyAppAutoBranchCreationConfigBasicAuthConfigToHclTerraform(struct!.basicAuthConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "AmplifyAppAutoBranchCreationConfigBasicAuthConfig",
    },
    build_spec: {
      value: cdktn.stringToHclTerraform(struct!.buildSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_auto_branch_creation: {
      value: cdktn.booleanToHclTerraform(struct!.enableAutoBranchCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_auto_build: {
      value: cdktn.booleanToHclTerraform(struct!.enableAutoBuild),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_performance_mode: {
      value: cdktn.booleanToHclTerraform(struct!.enablePerformanceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pull_request_preview: {
      value: cdktn.booleanToHclTerraform(struct!.enablePullRequestPreview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment_variables: {
      value: cdktn.listMapperHcl(amplifyAppAutoBranchCreationConfigEnvironmentVariablesToHclTerraform, false)(struct!.environmentVariables),
      isBlock: true,
      type: "list",
      storageClassType: "AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList",
    },
    framework: {
      value: cdktn.stringToHclTerraform(struct!.framework),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_environment_name: {
      value: cdktn.stringToHclTerraform(struct!.pullRequestEnvironmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktn.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AmplifyAppAutoBranchCreationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AmplifyAppAutoBranchCreationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoBranchCreationPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBranchCreationPatterns = this._autoBranchCreationPatterns;
    }
    if (this._basicAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuthConfig = this._basicAuthConfig?.internalValue;
    }
    if (this._buildSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildSpec = this._buildSpec;
    }
    if (this._enableAutoBranchCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoBranchCreation = this._enableAutoBranchCreation;
    }
    if (this._enableAutoBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoBuild = this._enableAutoBuild;
    }
    if (this._enablePerformanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePerformanceMode = this._enablePerformanceMode;
    }
    if (this._enablePullRequestPreview !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePullRequestPreview = this._enablePullRequestPreview;
    }
    if (this._environmentVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables?.internalValue;
    }
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._pullRequestEnvironmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestEnvironmentName = this._pullRequestEnvironmentName;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyAppAutoBranchCreationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoBranchCreationPatterns = undefined;
      this._basicAuthConfig.internalValue = undefined;
      this._buildSpec = undefined;
      this._enableAutoBranchCreation = undefined;
      this._enableAutoBuild = undefined;
      this._enablePerformanceMode = undefined;
      this._enablePullRequestPreview = undefined;
      this._environmentVariables.internalValue = undefined;
      this._framework = undefined;
      this._pullRequestEnvironmentName = undefined;
      this._stage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoBranchCreationPatterns = value.autoBranchCreationPatterns;
      this._basicAuthConfig.internalValue = value.basicAuthConfig;
      this._buildSpec = value.buildSpec;
      this._enableAutoBranchCreation = value.enableAutoBranchCreation;
      this._enableAutoBuild = value.enableAutoBuild;
      this._enablePerformanceMode = value.enablePerformanceMode;
      this._enablePullRequestPreview = value.enablePullRequestPreview;
      this._environmentVariables.internalValue = value.environmentVariables;
      this._framework = value.framework;
      this._pullRequestEnvironmentName = value.pullRequestEnvironmentName;
      this._stage = value.stage;
    }
  }

  // auto_branch_creation_patterns - computed: true, optional: true, required: false
  private _autoBranchCreationPatterns?: string[];
  public get autoBranchCreationPatterns() {
    return this.getListAttribute('auto_branch_creation_patterns');
  }
  public set autoBranchCreationPatterns(value: string[]) {
    this._autoBranchCreationPatterns = value;
  }
  public resetAutoBranchCreationPatterns() {
    this._autoBranchCreationPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBranchCreationPatternsInput() {
    return this._autoBranchCreationPatterns;
  }

  // basic_auth_config - computed: true, optional: true, required: false
  private _basicAuthConfig = new AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference(this, "basic_auth_config");
  public get basicAuthConfig() {
    return this._basicAuthConfig;
  }
  public putBasicAuthConfig(value: AmplifyAppAutoBranchCreationConfigBasicAuthConfig) {
    this._basicAuthConfig.internalValue = value;
  }
  public resetBasicAuthConfig() {
    this._basicAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthConfigInput() {
    return this._basicAuthConfig.internalValue;
  }

  // build_spec - computed: true, optional: true, required: false
  private _buildSpec?: string;
  public get buildSpec() {
    return this.getStringAttribute('build_spec');
  }
  public set buildSpec(value: string) {
    this._buildSpec = value;
  }
  public resetBuildSpec() {
    this._buildSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildSpecInput() {
    return this._buildSpec;
  }

  // enable_auto_branch_creation - computed: true, optional: true, required: false
  private _enableAutoBranchCreation?: boolean | cdktn.IResolvable;
  public get enableAutoBranchCreation() {
    return this.getBooleanAttribute('enable_auto_branch_creation');
  }
  public set enableAutoBranchCreation(value: boolean | cdktn.IResolvable) {
    this._enableAutoBranchCreation = value;
  }
  public resetEnableAutoBranchCreation() {
    this._enableAutoBranchCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoBranchCreationInput() {
    return this._enableAutoBranchCreation;
  }

  // enable_auto_build - computed: true, optional: true, required: false
  private _enableAutoBuild?: boolean | cdktn.IResolvable;
  public get enableAutoBuild() {
    return this.getBooleanAttribute('enable_auto_build');
  }
  public set enableAutoBuild(value: boolean | cdktn.IResolvable) {
    this._enableAutoBuild = value;
  }
  public resetEnableAutoBuild() {
    this._enableAutoBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoBuildInput() {
    return this._enableAutoBuild;
  }

  // enable_performance_mode - computed: true, optional: true, required: false
  private _enablePerformanceMode?: boolean | cdktn.IResolvable;
  public get enablePerformanceMode() {
    return this.getBooleanAttribute('enable_performance_mode');
  }
  public set enablePerformanceMode(value: boolean | cdktn.IResolvable) {
    this._enablePerformanceMode = value;
  }
  public resetEnablePerformanceMode() {
    this._enablePerformanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerformanceModeInput() {
    return this._enablePerformanceMode;
  }

  // enable_pull_request_preview - computed: true, optional: true, required: false
  private _enablePullRequestPreview?: boolean | cdktn.IResolvable;
  public get enablePullRequestPreview() {
    return this.getBooleanAttribute('enable_pull_request_preview');
  }
  public set enablePullRequestPreview(value: boolean | cdktn.IResolvable) {
    this._enablePullRequestPreview = value;
  }
  public resetEnablePullRequestPreview() {
    this._enablePullRequestPreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePullRequestPreviewInput() {
    return this._enablePullRequestPreview;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables = new AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList(this, "environment_variables", false);
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public putEnvironmentVariables(value: AmplifyAppAutoBranchCreationConfigEnvironmentVariables[] | cdktn.IResolvable) {
    this._environmentVariables.internalValue = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables.internalValue;
  }

  // framework - computed: true, optional: true, required: false
  private _framework?: string;
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // pull_request_environment_name - computed: true, optional: true, required: false
  private _pullRequestEnvironmentName?: string;
  public get pullRequestEnvironmentName() {
    return this.getStringAttribute('pull_request_environment_name');
  }
  public set pullRequestEnvironmentName(value: string) {
    this._pullRequestEnvironmentName = value;
  }
  public resetPullRequestEnvironmentName() {
    this._pullRequestEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestEnvironmentNameInput() {
    return this._pullRequestEnvironmentName;
  }

  // stage - computed: true, optional: true, required: false
  private _stage?: string;
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }
}
export interface AmplifyAppBasicAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}
  */
  readonly enableBasicAuth?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#password AmplifyApp#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#username AmplifyApp#username}
  */
  readonly username?: string;
}

export function amplifyAppBasicAuthConfigToTerraform(struct?: AmplifyAppBasicAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_basic_auth: cdktn.booleanToTerraform(struct!.enableBasicAuth),
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function amplifyAppBasicAuthConfigToHclTerraform(struct?: AmplifyAppBasicAuthConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_basic_auth: {
      value: cdktn.booleanToHclTerraform(struct!.enableBasicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AmplifyAppBasicAuthConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AmplifyAppBasicAuthConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBasicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBasicAuth = this._enableBasicAuth;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyAppBasicAuthConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableBasicAuth = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableBasicAuth = value.enableBasicAuth;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // enable_basic_auth - computed: true, optional: true, required: false
  private _enableBasicAuth?: boolean | cdktn.IResolvable;
  public get enableBasicAuth() {
    return this.getBooleanAttribute('enable_basic_auth');
  }
  public set enableBasicAuth(value: boolean | cdktn.IResolvable) {
    this._enableBasicAuth = value;
  }
  public resetEnableBasicAuth() {
    this._enableBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBasicAuthInput() {
    return this._enableBasicAuth;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface AmplifyAppCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#type AmplifyApp#type}
  */
  readonly type?: string;
}

export function amplifyAppCacheConfigToTerraform(struct?: AmplifyAppCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function amplifyAppCacheConfigToHclTerraform(struct?: AmplifyAppCacheConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class AmplifyAppCacheConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AmplifyAppCacheConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyAppCacheConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
export interface AmplifyAppCustomRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#condition AmplifyApp#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#source AmplifyApp#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#status AmplifyApp#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#target AmplifyApp#target}
  */
  readonly target?: string;
}

export function amplifyAppCustomRulesToTerraform(struct?: AmplifyAppCustomRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    source: cdktn.stringToTerraform(struct!.source),
    status: cdktn.stringToTerraform(struct!.status),
    target: cdktn.stringToTerraform(struct!.target),
  }
}


export function amplifyAppCustomRulesToHclTerraform(struct?: AmplifyAppCustomRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AmplifyAppCustomRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AmplifyAppCustomRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyAppCustomRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._source = undefined;
      this._status = undefined;
      this._target = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._source = value.source;
      this._status = value.status;
      this._target = value.target;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string;
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class AmplifyAppCustomRulesList extends cdktn.ComplexList {
  public internalValue? : AmplifyAppCustomRules[] | cdktn.IResolvable

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
  public get(index: number): AmplifyAppCustomRulesOutputReference {
    return new AmplifyAppCustomRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AmplifyAppEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#name AmplifyApp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#value AmplifyApp#value}
  */
  readonly value?: string;
}

export function amplifyAppEnvironmentVariablesToTerraform(struct?: AmplifyAppEnvironmentVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function amplifyAppEnvironmentVariablesToHclTerraform(struct?: AmplifyAppEnvironmentVariables | cdktn.IResolvable): any {
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

export class AmplifyAppEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AmplifyAppEnvironmentVariables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AmplifyAppEnvironmentVariables | cdktn.IResolvable | undefined) {
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

export class AmplifyAppEnvironmentVariablesList extends cdktn.ComplexList {
  public internalValue? : AmplifyAppEnvironmentVariables[] | cdktn.IResolvable

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
  public get(index: number): AmplifyAppEnvironmentVariablesOutputReference {
    return new AmplifyAppEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AmplifyAppJobConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}
  */
  readonly buildComputeType?: string;
}

export function amplifyAppJobConfigToTerraform(struct?: AmplifyAppJobConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    build_compute_type: cdktn.stringToTerraform(struct!.buildComputeType),
  }
}


export function amplifyAppJobConfigToHclTerraform(struct?: AmplifyAppJobConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    build_compute_type: {
      value: cdktn.stringToHclTerraform(struct!.buildComputeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AmplifyAppJobConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AmplifyAppJobConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildComputeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildComputeType = this._buildComputeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AmplifyAppJobConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildComputeType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildComputeType = value.buildComputeType;
    }
  }

  // build_compute_type - computed: true, optional: true, required: false
  private _buildComputeType?: string;
  public get buildComputeType() {
    return this.getStringAttribute('build_compute_type');
  }
  public set buildComputeType(value: string) {
    this._buildComputeType = value;
  }
  public resetBuildComputeType() {
    this._buildComputeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildComputeTypeInput() {
    return this._buildComputeType;
  }
}
export interface AmplifyAppTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#key AmplifyApp#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#value AmplifyApp#value}
  */
  readonly value?: string;
}

export function amplifyAppTagsToTerraform(struct?: AmplifyAppTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function amplifyAppTagsToHclTerraform(struct?: AmplifyAppTags | cdktn.IResolvable): any {
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

export class AmplifyAppTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AmplifyAppTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AmplifyAppTags | cdktn.IResolvable | undefined) {
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

export class AmplifyAppTagsList extends cdktn.ComplexList {
  public internalValue? : AmplifyAppTags[] | cdktn.IResolvable

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
  public get(index: number): AmplifyAppTagsOutputReference {
    return new AmplifyAppTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app awscc_amplify_app}
*/
export class AmplifyApp extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_amplify_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AmplifyApp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmplifyApp to import
  * @param importFromId The id of the existing AmplifyApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmplifyApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_amplify_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/amplify_app awscc_amplify_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmplifyAppConfig
  */
  public constructor(scope: Construct, id: string, config: AmplifyAppConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_amplify_app',
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
    this._accessToken = config.accessToken;
    this._autoBranchCreationConfig.internalValue = config.autoBranchCreationConfig;
    this._basicAuthConfig.internalValue = config.basicAuthConfig;
    this._buildSpec = config.buildSpec;
    this._cacheConfig.internalValue = config.cacheConfig;
    this._computeRoleArn = config.computeRoleArn;
    this._customHeaders = config.customHeaders;
    this._customRules.internalValue = config.customRules;
    this._description = config.description;
    this._enableBranchAutoDeletion = config.enableBranchAutoDeletion;
    this._environmentVariables.internalValue = config.environmentVariables;
    this._iamServiceRole = config.iamServiceRole;
    this._jobConfig.internalValue = config.jobConfig;
    this._name = config.name;
    this._oauthToken = config.oauthToken;
    this._platform = config.platform;
    this._repository = config.repository;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_branch_creation_config - computed: true, optional: true, required: false
  private _autoBranchCreationConfig = new AmplifyAppAutoBranchCreationConfigOutputReference(this, "auto_branch_creation_config");
  public get autoBranchCreationConfig() {
    return this._autoBranchCreationConfig;
  }
  public putAutoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig) {
    this._autoBranchCreationConfig.internalValue = value;
  }
  public resetAutoBranchCreationConfig() {
    this._autoBranchCreationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBranchCreationConfigInput() {
    return this._autoBranchCreationConfig.internalValue;
  }

  // basic_auth_config - computed: true, optional: true, required: false
  private _basicAuthConfig = new AmplifyAppBasicAuthConfigOutputReference(this, "basic_auth_config");
  public get basicAuthConfig() {
    return this._basicAuthConfig;
  }
  public putBasicAuthConfig(value: AmplifyAppBasicAuthConfig) {
    this._basicAuthConfig.internalValue = value;
  }
  public resetBasicAuthConfig() {
    this._basicAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthConfigInput() {
    return this._basicAuthConfig.internalValue;
  }

  // build_spec - computed: true, optional: true, required: false
  private _buildSpec?: string;
  public get buildSpec() {
    return this.getStringAttribute('build_spec');
  }
  public set buildSpec(value: string) {
    this._buildSpec = value;
  }
  public resetBuildSpec() {
    this._buildSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildSpecInput() {
    return this._buildSpec;
  }

  // cache_config - computed: true, optional: true, required: false
  private _cacheConfig = new AmplifyAppCacheConfigOutputReference(this, "cache_config");
  public get cacheConfig() {
    return this._cacheConfig;
  }
  public putCacheConfig(value: AmplifyAppCacheConfig) {
    this._cacheConfig.internalValue = value;
  }
  public resetCacheConfig() {
    this._cacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConfigInput() {
    return this._cacheConfig.internalValue;
  }

  // compute_role_arn - computed: true, optional: true, required: false
  private _computeRoleArn?: string;
  public get computeRoleArn() {
    return this.getStringAttribute('compute_role_arn');
  }
  public set computeRoleArn(value: string) {
    this._computeRoleArn = value;
  }
  public resetComputeRoleArn() {
    this._computeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeRoleArnInput() {
    return this._computeRoleArn;
  }

  // custom_headers - computed: true, optional: true, required: false
  private _customHeaders?: string;
  public get customHeaders() {
    return this.getStringAttribute('custom_headers');
  }
  public set customHeaders(value: string) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // custom_rules - computed: true, optional: true, required: false
  private _customRules = new AmplifyAppCustomRulesList(this, "custom_rules", false);
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: AmplifyAppCustomRules[] | cdktn.IResolvable) {
    this._customRules.internalValue = value;
  }
  public resetCustomRules() {
    this._customRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules.internalValue;
  }

  // default_domain - computed: true, optional: false, required: false
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
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

  // enable_branch_auto_deletion - computed: true, optional: true, required: false
  private _enableBranchAutoDeletion?: boolean | cdktn.IResolvable;
  public get enableBranchAutoDeletion() {
    return this.getBooleanAttribute('enable_branch_auto_deletion');
  }
  public set enableBranchAutoDeletion(value: boolean | cdktn.IResolvable) {
    this._enableBranchAutoDeletion = value;
  }
  public resetEnableBranchAutoDeletion() {
    this._enableBranchAutoDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBranchAutoDeletionInput() {
    return this._enableBranchAutoDeletion;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables = new AmplifyAppEnvironmentVariablesList(this, "environment_variables", false);
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public putEnvironmentVariables(value: AmplifyAppEnvironmentVariables[] | cdktn.IResolvable) {
    this._environmentVariables.internalValue = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables.internalValue;
  }

  // iam_service_role - computed: true, optional: true, required: false
  private _iamServiceRole?: string;
  public get iamServiceRole() {
    return this.getStringAttribute('iam_service_role');
  }
  public set iamServiceRole(value: string) {
    this._iamServiceRole = value;
  }
  public resetIamServiceRole() {
    this._iamServiceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamServiceRoleInput() {
    return this._iamServiceRole;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_config - computed: true, optional: true, required: false
  private _jobConfig = new AmplifyAppJobConfigOutputReference(this, "job_config");
  public get jobConfig() {
    return this._jobConfig;
  }
  public putJobConfig(value: AmplifyAppJobConfig) {
    this._jobConfig.internalValue = value;
  }
  public resetJobConfig() {
    this._jobConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobConfigInput() {
    return this._jobConfig.internalValue;
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

  // oauth_token - computed: true, optional: true, required: false
  private _oauthToken?: string;
  public get oauthToken() {
    return this.getStringAttribute('oauth_token');
  }
  public set oauthToken(value: string) {
    this._oauthToken = value;
  }
  public resetOauthToken() {
    this._oauthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken;
  }

  // platform - computed: true, optional: true, required: false
  private _platform?: string;
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // repository - computed: true, optional: true, required: false
  private _repository?: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AmplifyAppTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AmplifyAppTags[] | cdktn.IResolvable) {
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
      access_token: cdktn.stringToTerraform(this._accessToken),
      auto_branch_creation_config: amplifyAppAutoBranchCreationConfigToTerraform(this._autoBranchCreationConfig.internalValue),
      basic_auth_config: amplifyAppBasicAuthConfigToTerraform(this._basicAuthConfig.internalValue),
      build_spec: cdktn.stringToTerraform(this._buildSpec),
      cache_config: amplifyAppCacheConfigToTerraform(this._cacheConfig.internalValue),
      compute_role_arn: cdktn.stringToTerraform(this._computeRoleArn),
      custom_headers: cdktn.stringToTerraform(this._customHeaders),
      custom_rules: cdktn.listMapper(amplifyAppCustomRulesToTerraform, false)(this._customRules.internalValue),
      description: cdktn.stringToTerraform(this._description),
      enable_branch_auto_deletion: cdktn.booleanToTerraform(this._enableBranchAutoDeletion),
      environment_variables: cdktn.listMapper(amplifyAppEnvironmentVariablesToTerraform, false)(this._environmentVariables.internalValue),
      iam_service_role: cdktn.stringToTerraform(this._iamServiceRole),
      job_config: amplifyAppJobConfigToTerraform(this._jobConfig.internalValue),
      name: cdktn.stringToTerraform(this._name),
      oauth_token: cdktn.stringToTerraform(this._oauthToken),
      platform: cdktn.stringToTerraform(this._platform),
      repository: cdktn.stringToTerraform(this._repository),
      tags: cdktn.listMapper(amplifyAppTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktn.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_branch_creation_config: {
        value: amplifyAppAutoBranchCreationConfigToHclTerraform(this._autoBranchCreationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AmplifyAppAutoBranchCreationConfig",
      },
      basic_auth_config: {
        value: amplifyAppBasicAuthConfigToHclTerraform(this._basicAuthConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AmplifyAppBasicAuthConfig",
      },
      build_spec: {
        value: cdktn.stringToHclTerraform(this._buildSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_config: {
        value: amplifyAppCacheConfigToHclTerraform(this._cacheConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AmplifyAppCacheConfig",
      },
      compute_role_arn: {
        value: cdktn.stringToHclTerraform(this._computeRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_headers: {
        value: cdktn.stringToHclTerraform(this._customHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_rules: {
        value: cdktn.listMapperHcl(amplifyAppCustomRulesToHclTerraform, false)(this._customRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AmplifyAppCustomRulesList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_branch_auto_deletion: {
        value: cdktn.booleanToHclTerraform(this._enableBranchAutoDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_variables: {
        value: cdktn.listMapperHcl(amplifyAppEnvironmentVariablesToHclTerraform, false)(this._environmentVariables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AmplifyAppEnvironmentVariablesList",
      },
      iam_service_role: {
        value: cdktn.stringToHclTerraform(this._iamServiceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_config: {
        value: amplifyAppJobConfigToHclTerraform(this._jobConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AmplifyAppJobConfig",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_token: {
        value: cdktn.stringToHclTerraform(this._oauthToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktn.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktn.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(amplifyAppTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AmplifyAppTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
