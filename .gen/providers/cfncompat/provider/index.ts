// https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CfncompatProviderConfig {
  /**
  * The AWS access key. Can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#access_key CfncompatProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Configuration for assuming an IAM role prior to making AWS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#assume_role CfncompatProvider#assume_role}
  */
  readonly assumeRole?: CfncompatProviderAssumeRole;
  /**
  * Configuration for assuming an IAM role using a web identity token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#assume_role_with_web_identity CfncompatProvider#assume_role_with_web_identity}
  */
  readonly assumeRoleWithWebIdentity?: CfncompatProviderAssumeRoleWithWebIdentity;
  /**
  * Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#custom_resource_bucket CfncompatProvider#custom_resource_bucket}
  */
  readonly customResourceBucket?: string;
  /**
  * Service endpoint URL overrides, primarily for testing against LocalStack. Only used by cfncompat_custom_resource; the provider-defined functions make no AWS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#endpoints CfncompatProvider#endpoints}
  */
  readonly endpoints?: CfncompatProviderEndpoints;
  /**
  * URL of a proxy to use for HTTP requests when accessing the AWS API. Can also be set using the `HTTP_PROXY`/`http_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#http_proxy CfncompatProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * URL of a proxy to use for HTTPS requests when accessing the AWS API. Can also be set using the `HTTPS_PROXY`/`https_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#https_proxy CfncompatProvider#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#insecure CfncompatProvider#insecure}
  */
  readonly insecure?: boolean | cdktn.IResolvable;
  /**
  * The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#max_retries CfncompatProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Comma-separated list of hosts that should not use HTTP or HTTPS proxies. Can also be set using the `NO_PROXY`/`no_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#no_proxy CfncompatProvider#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * The AWS profile name as set in the shared credentials/config files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#profile CfncompatProvider#profile}
  */
  readonly profile?: string;
  /**
  * The AWS region used by cfncompat_custom_resource API calls. Can also be sourced from the `AWS_REGION`/`AWS_DEFAULT_REGION` environment variables, a shared config file, or the EC2 Instance Metadata Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#region CfncompatProvider#region}
  */
  readonly region?: string;
  /**
  * The AWS secret key. Can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#secret_key CfncompatProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Paths to shared config files. If not set, defaults to `~/.aws/config`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#shared_config_files CfncompatProvider#shared_config_files}
  */
  readonly sharedConfigFiles?: string[];
  /**
  * Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#shared_credentials_files CfncompatProvider#shared_credentials_files}
  */
  readonly sharedCredentialsFiles?: string[];
  /**
  * Skip the AWS EC2 Instance Metadata API check. Useful when running somewhere without a metadata API endpoint (setting to `true` prevents authenticating via IMDS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#skip_metadata_api_check CfncompatProvider#skip_metadata_api_check}
  */
  readonly skipMetadataApiCheck?: boolean | cdktn.IResolvable;
  /**
  * Session token for temporary credentials, typically provided after identity federation or MFA login. Can also be sourced from the `AWS_SESSION_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#token CfncompatProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#alias CfncompatProvider#alias}
  */
  readonly alias?: string;
}
export interface CfncompatProviderAssumeRole {
  /**
  * The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#duration CfncompatProvider#duration}
  */
  readonly duration?: string;
  /**
  * External identifier to use when assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#external_id CfncompatProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM policy in JSON format used as a session policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy CfncompatProvider#policy}
  */
  readonly policy?: string;
  /**
  * ARNs of IAM policies used as managed session policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy_arns CfncompatProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * ARN of the IAM role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#role_arn CfncompatProvider#role_arn}
  */
  readonly roleArn: string;
  /**
  * Session name to use when assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#session_name CfncompatProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Source identity to use when assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#source_identity CfncompatProvider#source_identity}
  */
  readonly sourceIdentity?: string;
  /**
  * Map of assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#tags CfncompatProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Set of assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#transitive_tag_keys CfncompatProvider#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function cfncompatProviderAssumeRoleToTerraform(struct?: CfncompatProviderAssumeRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    policy: cdktn.stringToTerraform(struct!.policy),
    policy_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
    source_identity: cdktn.stringToTerraform(struct!.sourceIdentity),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    transitive_tag_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transitiveTagKeys),
  }
}


export function cfncompatProviderAssumeRoleToHclTerraform(struct?: CfncompatProviderAssumeRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_identity: {
      value: cdktn.stringToHclTerraform(struct!.sourceIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    transitive_tag_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transitiveTagKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface CfncompatProviderAssumeRoleWithWebIdentity {
  /**
  * The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#duration CfncompatProvider#duration}
  */
  readonly duration?: string;
  /**
  * IAM policy in JSON format used as a session policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy CfncompatProvider#policy}
  */
  readonly policy?: string;
  /**
  * ARNs of IAM policies used as managed session policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy_arns CfncompatProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * ARN of the IAM role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#role_arn CfncompatProvider#role_arn}
  */
  readonly roleArn: string;
  /**
  * Session name to use when assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#session_name CfncompatProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Value of a web identity token from an OIDC/OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#web_identity_token CfncompatProvider#web_identity_token}
  */
  readonly webIdentityToken?: string;
  /**
  * File containing a web identity token from an OIDC/OAuth provider. One of `web_identity_token_file` or `web_identity_token` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#web_identity_token_file CfncompatProvider#web_identity_token_file}
  */
  readonly webIdentityTokenFile?: string;
}

export function cfncompatProviderAssumeRoleWithWebIdentityToTerraform(struct?: CfncompatProviderAssumeRoleWithWebIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    duration: cdktn.stringToTerraform(struct!.duration),
    policy: cdktn.stringToTerraform(struct!.policy),
    policy_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
    web_identity_token: cdktn.stringToTerraform(struct!.webIdentityToken),
    web_identity_token_file: cdktn.stringToTerraform(struct!.webIdentityTokenFile),
  }
}


export function cfncompatProviderAssumeRoleWithWebIdentityToHclTerraform(struct?: CfncompatProviderAssumeRoleWithWebIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktn.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.policyArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token: {
      value: cdktn.stringToHclTerraform(struct!.webIdentityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token_file: {
      value: cdktn.stringToHclTerraform(struct!.webIdentityTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface CfncompatProviderEndpoints {
  /**
  * Override the default Lambda service endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#lambda CfncompatProvider#lambda}
  */
  readonly lambda?: string;
  /**
  * Override the default S3 service endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#s3 CfncompatProvider#s3}
  */
  readonly s3?: string;
  /**
  * Override the default SNS service endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#sns CfncompatProvider#sns}
  */
  readonly sns?: string;
  /**
  * Override the default STS service endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#sts CfncompatProvider#sts}
  */
  readonly sts?: string;
}

export function cfncompatProviderEndpointsToTerraform(struct?: CfncompatProviderEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda: cdktn.stringToTerraform(struct!.lambda),
    s3: cdktn.stringToTerraform(struct!.s3),
    sns: cdktn.stringToTerraform(struct!.sns),
    sts: cdktn.stringToTerraform(struct!.sts),
  }
}


export function cfncompatProviderEndpointsToHclTerraform(struct?: CfncompatProviderEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda: {
      value: cdktn.stringToHclTerraform(struct!.lambda),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktn.stringToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sns: {
      value: cdktn.stringToHclTerraform(struct!.sns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sts: {
      value: cdktn.stringToHclTerraform(struct!.sts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs cfncompat}
*/
export class CfncompatProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cfncompat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CfncompatProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfncompatProvider to import
  * @param importFromId The id of the existing CfncompatProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfncompatProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cfncompat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs cfncompat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfncompatProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CfncompatProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cfncompat',
      terraformGeneratorMetadata: {
        providerName: 'cfncompat',
        providerVersion: '0.2.0'
      },
      terraformProviderSource: 'cdktn-io/cfncompat'
    });
    this._accessKey = config.accessKey;
    this._assumeRole = config.assumeRole;
    this._assumeRoleWithWebIdentity = config.assumeRoleWithWebIdentity;
    this._customResourceBucket = config.customResourceBucket;
    this._endpoints = config.endpoints;
    this._httpProxy = config.httpProxy;
    this._httpsProxy = config.httpsProxy;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._noProxy = config.noProxy;
    this._profile = config.profile;
    this._region = config.region;
    this._secretKey = config.secretKey;
    this._sharedConfigFiles = config.sharedConfigFiles;
    this._sharedCredentialsFiles = config.sharedCredentialsFiles;
    this._skipMetadataApiCheck = config.skipMetadataApiCheck;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: CfncompatProviderAssumeRole; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: CfncompatProviderAssumeRole | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // assume_role_with_web_identity - computed: false, optional: true, required: false
  private _assumeRoleWithWebIdentity?: CfncompatProviderAssumeRoleWithWebIdentity; 
  public get assumeRoleWithWebIdentity() {
    return this._assumeRoleWithWebIdentity;
  }
  public set assumeRoleWithWebIdentity(value: CfncompatProviderAssumeRoleWithWebIdentity | undefined) {
    this._assumeRoleWithWebIdentity = value;
  }
  public resetAssumeRoleWithWebIdentity() {
    this._assumeRoleWithWebIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleWithWebIdentityInput() {
    return this._assumeRoleWithWebIdentity;
  }

  // custom_resource_bucket - computed: false, optional: true, required: false
  private _customResourceBucket?: string; 
  public get customResourceBucket() {
    return this._customResourceBucket;
  }
  public set customResourceBucket(value: string | undefined) {
    this._customResourceBucket = value;
  }
  public resetCustomResourceBucket() {
    this._customResourceBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResourceBucketInput() {
    return this._customResourceBucket;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: CfncompatProviderEndpoints; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: CfncompatProviderEndpoints | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this._httpsProxy;
  }
  public set httpsProxy(value: string | undefined) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktn.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktn.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this._noProxy;
  }
  public set noProxy(value: string | undefined) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // shared_config_files - computed: false, optional: true, required: false
  private _sharedConfigFiles?: string[]; 
  public get sharedConfigFiles() {
    return this._sharedConfigFiles;
  }
  public set sharedConfigFiles(value: string[] | undefined) {
    this._sharedConfigFiles = value;
  }
  public resetSharedConfigFiles() {
    this._sharedConfigFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedConfigFilesInput() {
    return this._sharedConfigFiles;
  }

  // shared_credentials_files - computed: false, optional: true, required: false
  private _sharedCredentialsFiles?: string[]; 
  public get sharedCredentialsFiles() {
    return this._sharedCredentialsFiles;
  }
  public set sharedCredentialsFiles(value: string[] | undefined) {
    this._sharedCredentialsFiles = value;
  }
  public resetSharedCredentialsFiles() {
    this._sharedCredentialsFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFilesInput() {
    return this._sharedCredentialsFiles;
  }

  // skip_metadata_api_check - computed: false, optional: true, required: false
  private _skipMetadataApiCheck?: boolean | cdktn.IResolvable; 
  public get skipMetadataApiCheck() {
    return this._skipMetadataApiCheck;
  }
  public set skipMetadataApiCheck(value: boolean | cdktn.IResolvable | undefined) {
    this._skipMetadataApiCheck = value;
  }
  public resetSkipMetadataApiCheck() {
    this._skipMetadataApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMetadataApiCheckInput() {
    return this._skipMetadataApiCheck;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktn.stringToTerraform(this._accessKey),
      assume_role: cfncompatProviderAssumeRoleToTerraform(this._assumeRole),
      assume_role_with_web_identity: cfncompatProviderAssumeRoleWithWebIdentityToTerraform(this._assumeRoleWithWebIdentity),
      custom_resource_bucket: cdktn.stringToTerraform(this._customResourceBucket),
      endpoints: cfncompatProviderEndpointsToTerraform(this._endpoints),
      http_proxy: cdktn.stringToTerraform(this._httpProxy),
      https_proxy: cdktn.stringToTerraform(this._httpsProxy),
      insecure: cdktn.booleanToTerraform(this._insecure),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      no_proxy: cdktn.stringToTerraform(this._noProxy),
      profile: cdktn.stringToTerraform(this._profile),
      region: cdktn.stringToTerraform(this._region),
      secret_key: cdktn.stringToTerraform(this._secretKey),
      shared_config_files: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sharedConfigFiles),
      shared_credentials_files: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sharedCredentialsFiles),
      skip_metadata_api_check: cdktn.booleanToTerraform(this._skipMetadataApiCheck),
      token: cdktn.stringToTerraform(this._token),
      alias: cdktn.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktn.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assume_role: {
        value: cfncompatProviderAssumeRoleToHclTerraform(this._assumeRole),
        isBlock: true,
        type: "struct",
        storageClassType: "CfncompatProviderAssumeRole",
      },
      assume_role_with_web_identity: {
        value: cfncompatProviderAssumeRoleWithWebIdentityToHclTerraform(this._assumeRoleWithWebIdentity),
        isBlock: true,
        type: "struct",
        storageClassType: "CfncompatProviderAssumeRoleWithWebIdentity",
      },
      custom_resource_bucket: {
        value: cdktn.stringToHclTerraform(this._customResourceBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: cfncompatProviderEndpointsToHclTerraform(this._endpoints),
        isBlock: true,
        type: "struct",
        storageClassType: "CfncompatProviderEndpoints",
      },
      http_proxy: {
        value: cdktn.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_proxy: {
        value: cdktn.stringToHclTerraform(this._httpsProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktn.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retries: {
        value: cdktn.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_proxy: {
        value: cdktn.stringToHclTerraform(this._noProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktn.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktn.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_config_files: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sharedConfigFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shared_credentials_files: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sharedCredentialsFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_metadata_api_check: {
        value: cdktn.booleanToHclTerraform(this._skipMetadataApiCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktn.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
