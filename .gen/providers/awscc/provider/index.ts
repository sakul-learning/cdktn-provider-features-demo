// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AwsccProviderConfig {
  /**
  * This is the AWS access key. It must be provided, but it can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#access_key AwsccProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#assume_role AwsccProvider#assume_role}
  */
  readonly assumeRole?: AwsccProviderAssumeRole;
  /**
  * An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#assume_role_with_web_identity AwsccProvider#assume_role_with_web_identity}
  */
  readonly assumeRoleWithWebIdentity?: AwsccProviderAssumeRoleWithWebIdentity;
  /**
  * An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#endpoints AwsccProvider#endpoints}
  */
  readonly endpoints?: AwsccProviderEndpoints;
  /**
  * URL of a proxy to use for HTTP requests when accessing the AWS API. Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#http_proxy AwsccProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * URL of a proxy to use for HTTPS requests when accessing the AWS API. Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#https_proxy AwsccProvider#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#insecure AwsccProvider#insecure}
  */
  readonly insecure?: boolean | cdktn.IResolvable;
  /**
  * The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#max_retries AwsccProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Comma-separated list of hosts that should not use HTTP or HTTPS proxies. Can also be set using the `NO_PROXY` or `no_proxy` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#no_proxy AwsccProvider#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * This is the AWS profile name as set in the shared credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#profile AwsccProvider#profile}
  */
  readonly profile?: string;
  /**
  * This is the AWS region. It must be provided, but it can also be sourced from the `AWS_DEFAULT_REGION` environment variables, via a shared config file, or from the EC2 Instance Metadata Service if used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#region AwsccProvider#region}
  */
  readonly region?: string;
  /**
  * Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#role_arn AwsccProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * This is the AWS secret key. It must be provided, but it can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#secret_key AwsccProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * List of paths to shared config files. If not set, defaults to `~/.aws/config`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#shared_config_files AwsccProvider#shared_config_files}
  */
  readonly sharedConfigFiles?: string[];
  /**
  * List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#shared_credentials_files AwsccProvider#shared_credentials_files}
  */
  readonly sharedCredentialsFiles?: string[];
  /**
  * Skip the AWS Metadata API check. Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#skip_medatadata_api_check AwsccProvider#skip_medatadata_api_check}
  */
  readonly skipMedatadataApiCheck?: boolean | cdktn.IResolvable;
  /**
  * Skip the AWS Metadata API check. Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#skip_metadata_api_check AwsccProvider#skip_metadata_api_check}
  */
  readonly skipMetadataApiCheck?: boolean | cdktn.IResolvable;
  /**
  * Session token for validating temporary credentials. Typically provided after successful identity federation or Multi-Factor Authentication (MFA) login. With MFA login, this is the session token provided afterward, not the 6 digit MFA code used to get temporary credentials.  It can also be sourced from the `AWS_SESSION_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#token AwsccProvider#token}
  */
  readonly token?: string;
  /**
  * Product details to append to the User-Agent string sent in all AWS API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#user_agent AwsccProvider#user_agent}
  */
  readonly userAgent?: AwsccProviderUserAgent[] | cdktn.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#alias AwsccProvider#alias}
  */
  readonly alias?: string;
}
export interface AwsccProviderAssumeRole {
  /**
  * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#duration AwsccProvider#duration}
  */
  readonly duration?: string;
  /**
  * External identifier to use when assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#external_id AwsccProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM policy in JSON format to use as a session policy. The effective permissions for the session will be the intersection between this polcy and the role's policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#policy AwsccProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. The effective permissions for the session will be the intersection between these polcy and the role's policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#policy_arns AwsccProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name (ARN) of the IAM Role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#role_arn AwsccProvider#role_arn}
  */
  readonly roleArn: string;
  /**
  * Session name to use when assuming the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#session_name AwsccProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Map of assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#tags AwsccProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Set of assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#transitive_tag_keys AwsccProvider#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function awsccProviderAssumeRoleToTerraform(struct?: AwsccProviderAssumeRole | cdktn.IResolvable): any {
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
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    transitive_tag_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transitiveTagKeys),
  }
}


export function awsccProviderAssumeRoleToHclTerraform(struct?: AwsccProviderAssumeRole | cdktn.IResolvable): any {
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

export interface AwsccProviderAssumeRoleWithWebIdentity {
  /**
  * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#duration AwsccProvider#duration}
  */
  readonly duration?: string;
  /**
  * IAM policy in JSON format to use as a session policy. The effective permissions for the session will be the intersection between this polcy and the role's policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#policy AwsccProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. The effective permissions for the session will be the intersection between these polcy and the role's policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#policy_arns AwsccProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name (ARN) of the IAM Role to assume. Can also be set with the environment variable `AWS_ROLE_ARN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#role_arn AwsccProvider#role_arn}
  */
  readonly roleArn: string;
  /**
  * Session name to use when assuming the role. Can also be set with the environment variable `AWS_ROLE_SESSION_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#session_name AwsccProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#web_identity_token AwsccProvider#web_identity_token}
  */
  readonly webIdentityToken?: string;
  /**
  * File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider. Can also be set with the  environment variable`AWS_WEB_IDENTITY_TOKEN_FILE`. One of `web_identity_token_file` or `web_identity_token` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#web_identity_token_file AwsccProvider#web_identity_token_file}
  */
  readonly webIdentityTokenFile?: string;
}

export function awsccProviderAssumeRoleWithWebIdentityToTerraform(struct?: AwsccProviderAssumeRoleWithWebIdentity | cdktn.IResolvable): any {
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


export function awsccProviderAssumeRoleWithWebIdentityToHclTerraform(struct?: AwsccProviderAssumeRoleWithWebIdentity | cdktn.IResolvable): any {
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

export interface AwsccProviderEndpoints {
  /**
  * Use this to override the default Cloud Control API service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#cloudcontrolapi AwsccProvider#cloudcontrolapi}
  */
  readonly cloudcontrolapi?: string;
  /**
  * Use this to override the default IAM service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#iam AwsccProvider#iam}
  */
  readonly iam?: string;
  /**
  * Use this to override the default SSO service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#sso AwsccProvider#sso}
  */
  readonly sso?: string;
  /**
  * Use this to override the default STS service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#sts AwsccProvider#sts}
  */
  readonly sts?: string;
}

export function awsccProviderEndpointsToTerraform(struct?: AwsccProviderEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudcontrolapi: cdktn.stringToTerraform(struct!.cloudcontrolapi),
    iam: cdktn.stringToTerraform(struct!.iam),
    sso: cdktn.stringToTerraform(struct!.sso),
    sts: cdktn.stringToTerraform(struct!.sts),
  }
}


export function awsccProviderEndpointsToHclTerraform(struct?: AwsccProviderEndpoints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudcontrolapi: {
      value: cdktn.stringToHclTerraform(struct!.cloudcontrolapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam: {
      value: cdktn.stringToHclTerraform(struct!.iam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso: {
      value: cdktn.stringToHclTerraform(struct!.sso),
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

export interface AwsccProviderUserAgent {
  /**
  * Comment describing any additional product details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#comment AwsccProvider#comment}
  */
  readonly comment?: string;
  /**
  * Product name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#product_name AwsccProvider#product_name}
  */
  readonly productName: string;
  /**
  * Product version. Optional, and should only be set when `product_name` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#product_version AwsccProvider#product_version}
  */
  readonly productVersion?: string;
}

export function awsccProviderUserAgentToTerraform(struct?: AwsccProviderUserAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    product_name: cdktn.stringToTerraform(struct!.productName),
    product_version: cdktn.stringToTerraform(struct!.productVersion),
  }
}


export function awsccProviderUserAgentToHclTerraform(struct?: AwsccProviderUserAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_name: {
      value: cdktn.stringToHclTerraform(struct!.productName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_version: {
      value: cdktn.stringToHclTerraform(struct!.productVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs awscc}
*/
export class AwsccProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsccProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsccProvider to import
  * @param importFromId The id of the existing AwsccProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsccProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs awscc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsccProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsccProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.92.0'
      },
      terraformProviderSource: 'awscc'
    });
    this._accessKey = config.accessKey;
    this._assumeRole = config.assumeRole;
    this._assumeRoleWithWebIdentity = config.assumeRoleWithWebIdentity;
    this._endpoints = config.endpoints;
    this._httpProxy = config.httpProxy;
    this._httpsProxy = config.httpsProxy;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._noProxy = config.noProxy;
    this._profile = config.profile;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._secretKey = config.secretKey;
    this._sharedConfigFiles = config.sharedConfigFiles;
    this._sharedCredentialsFiles = config.sharedCredentialsFiles;
    this._skipMedatadataApiCheck = config.skipMedatadataApiCheck;
    this._skipMetadataApiCheck = config.skipMetadataApiCheck;
    this._token = config.token;
    this._userAgent = config.userAgent;
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
  private _assumeRole?: AwsccProviderAssumeRole;
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsccProviderAssumeRole | undefined) {
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
  private _assumeRoleWithWebIdentity?: AwsccProviderAssumeRoleWithWebIdentity;
  public get assumeRoleWithWebIdentity() {
    return this._assumeRoleWithWebIdentity;
  }
  public set assumeRoleWithWebIdentity(value: AwsccProviderAssumeRoleWithWebIdentity | undefined) {
    this._assumeRoleWithWebIdentity = value;
  }
  public resetAssumeRoleWithWebIdentity() {
    this._assumeRoleWithWebIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleWithWebIdentityInput() {
    return this._assumeRoleWithWebIdentity;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AwsccProviderEndpoints;
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AwsccProviderEndpoints | undefined) {
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // skip_medatadata_api_check - computed: false, optional: true, required: false
  private _skipMedatadataApiCheck?: boolean | cdktn.IResolvable;
  public get skipMedatadataApiCheck() {
    return this._skipMedatadataApiCheck;
  }
  public set skipMedatadataApiCheck(value: boolean | cdktn.IResolvable | undefined) {
    this._skipMedatadataApiCheck = value;
  }
  public resetSkipMedatadataApiCheck() {
    this._skipMedatadataApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMedatadataApiCheckInput() {
    return this._skipMedatadataApiCheck;
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

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: AwsccProviderUserAgent[] | cdktn.IResolvable;
  public get userAgent() {
    return this._userAgent;
  }
  public set userAgent(value: AwsccProviderUserAgent[] | cdktn.IResolvable | undefined) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
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
      assume_role: awsccProviderAssumeRoleToTerraform(this._assumeRole),
      assume_role_with_web_identity: awsccProviderAssumeRoleWithWebIdentityToTerraform(this._assumeRoleWithWebIdentity),
      endpoints: awsccProviderEndpointsToTerraform(this._endpoints),
      http_proxy: cdktn.stringToTerraform(this._httpProxy),
      https_proxy: cdktn.stringToTerraform(this._httpsProxy),
      insecure: cdktn.booleanToTerraform(this._insecure),
      max_retries: cdktn.numberToTerraform(this._maxRetries),
      no_proxy: cdktn.stringToTerraform(this._noProxy),
      profile: cdktn.stringToTerraform(this._profile),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      secret_key: cdktn.stringToTerraform(this._secretKey),
      shared_config_files: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sharedConfigFiles),
      shared_credentials_files: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sharedCredentialsFiles),
      skip_medatadata_api_check: cdktn.booleanToTerraform(this._skipMedatadataApiCheck),
      skip_metadata_api_check: cdktn.booleanToTerraform(this._skipMetadataApiCheck),
      token: cdktn.stringToTerraform(this._token),
      user_agent: cdktn.listMapper(awsccProviderUserAgentToTerraform, false)(this._userAgent),
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
        value: awsccProviderAssumeRoleToHclTerraform(this._assumeRole),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsccProviderAssumeRole",
      },
      assume_role_with_web_identity: {
        value: awsccProviderAssumeRoleWithWebIdentityToHclTerraform(this._assumeRoleWithWebIdentity),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsccProviderAssumeRoleWithWebIdentity",
      },
      endpoints: {
        value: awsccProviderEndpointsToHclTerraform(this._endpoints),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsccProviderEndpoints",
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
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
      skip_medatadata_api_check: {
        value: cdktn.booleanToHclTerraform(this._skipMedatadataApiCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      user_agent: {
        value: cdktn.listMapperHcl(awsccProviderUserAgentToHclTerraform, false)(this._userAgent),
        isBlock: true,
        type: "list",
        storageClassType: "AwsccProviderUserAgentList",
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
