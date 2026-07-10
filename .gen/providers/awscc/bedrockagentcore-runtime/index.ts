// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreRuntimeConfig extends cdktn.TerraformMetaArguments {
  /**
  * The artifact of the agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#agent_runtime_artifact BedrockagentcoreRuntime#agent_runtime_artifact}
  */
  readonly agentRuntimeArtifact: BedrockagentcoreRuntimeAgentRuntimeArtifact;
  /**
  * Name for a resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#agent_runtime_name BedrockagentcoreRuntime#agent_runtime_name}
  */
  readonly agentRuntimeName: string;
  /**
  * Authorizer configuration for the agent runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#authorizer_configuration BedrockagentcoreRuntime#authorizer_configuration}
  */
  readonly authorizerConfiguration?: BedrockagentcoreRuntimeAuthorizerConfiguration;
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#description BedrockagentcoreRuntime#description}
  */
  readonly description?: string;
  /**
  * Environment variables for the agent runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#environment_variables BedrockagentcoreRuntime#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Filesystem configurations for the agent runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#filesystem_configurations BedrockagentcoreRuntime#filesystem_configurations}
  */
  readonly filesystemConfigurations?: BedrockagentcoreRuntimeFilesystemConfigurations[] | cdktn.IResolvable;
  /**
  * Lifecycle configuration for managing runtime sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#lifecycle_configuration BedrockagentcoreRuntime#lifecycle_configuration}
  */
  readonly lifecycleConfiguration?: BedrockagentcoreRuntimeLifecycleConfiguration;
  /**
  * Network access configuration for the Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#network_configuration BedrockagentcoreRuntime#network_configuration}
  */
  readonly networkConfiguration: BedrockagentcoreRuntimeNetworkConfiguration;
  /**
  * Protocol configuration for the agent runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#protocol_configuration BedrockagentcoreRuntime#protocol_configuration}
  */
  readonly protocolConfiguration?: string;
  /**
  * Configuration for HTTP request headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#request_header_configuration BedrockagentcoreRuntime#request_header_configuration}
  */
  readonly requestHeaderConfiguration?: BedrockagentcoreRuntimeRequestHeaderConfiguration;
  /**
  * Amazon Resource Name (ARN) of an IAM role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#role_arn BedrockagentcoreRuntime#role_arn}
  */
  readonly roleArn: string;
  /**
  * A map of tag keys and values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#tags BedrockagentcoreRuntime#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 {
  /**
  * S3 bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#bucket BedrockagentcoreRuntime#bucket}
  */
  readonly bucket?: string;
  /**
  * S3 object key prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#prefix BedrockagentcoreRuntime#prefix}
  */
  readonly prefix?: string;
  /**
  * S3 object version ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#version_id BedrockagentcoreRuntime#version_id}
  */
  readonly versionId?: string;
}

export function bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    version_id: cdktn.stringToTerraform(struct!.versionId),
  }
}


export function bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToHclTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._prefix = undefined;
      this._versionId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._prefix = value.prefix;
      this._versionId = value.versionId;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }
}
export interface BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode {
  /**
  * S3 Location Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#s3 BedrockagentcoreRuntime#s3}
  */
  readonly s3?: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3;
}

export function bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeToTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3: bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToTerraform(struct!.s3),
  }
}


export function bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeToHclTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3: {
      value: bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration {
  /**
  * Object represents source code from zip file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#code BedrockagentcoreRuntime#code}
  */
  readonly code?: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode;
  /**
  * List of entry points
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#entry_point BedrockagentcoreRuntime#entry_point}
  */
  readonly entryPoint?: string[];
  /**
  * Managed runtime types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#runtime BedrockagentcoreRuntime#runtime}
  */
  readonly runtime?: string;
}

export function bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationToTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code: bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeToTerraform(struct!.code),
    entry_point: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryPoint),
    runtime: cdktn.stringToTerraform(struct!.runtime),
  }
}


export function bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationToHclTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code: {
      value: bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeToHclTerraform(struct!.code),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode",
    },
    entry_point: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryPoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    runtime: {
      value: cdktn.stringToHclTerraform(struct!.runtime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code?.internalValue;
    }
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code.internalValue = undefined;
      this._entryPoint = undefined;
      this._runtime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code.internalValue = value.code;
      this._entryPoint = value.entryPoint;
      this._runtime = value.runtime;
    }
  }

  // code - computed: true, optional: true, required: false
  private _code = new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCodeOutputReference(this, "code");
  public get code() {
    return this._code;
  }
  public putCode(value: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationCode) {
    this._code.internalValue = value;
  }
  public resetCode() {
    this._code.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // entry_point - computed: true, optional: true, required: false
  private _entryPoint?: string[]; 
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }
  public set entryPoint(value: string[]) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // runtime - computed: true, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }
}
export interface BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration {
  /**
  * The ECR URI of the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#container_uri BedrockagentcoreRuntime#container_uri}
  */
  readonly containerUri?: string;
}

export function bedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationToTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_uri: cdktn.stringToTerraform(struct!.containerUri),
  }
}


export function bedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationToHclTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_uri: {
      value: cdktn.stringToHclTerraform(struct!.containerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerUri = this._containerUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerUri = value.containerUri;
    }
  }

  // container_uri - computed: true, optional: true, required: false
  private _containerUri?: string; 
  public get containerUri() {
    return this.getStringAttribute('container_uri');
  }
  public set containerUri(value: string) {
    this._containerUri = value;
  }
  public resetContainerUri() {
    this._containerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerUriInput() {
    return this._containerUri;
  }
}
export interface BedrockagentcoreRuntimeAgentRuntimeArtifact {
  /**
  * Representation of a code configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#code_configuration BedrockagentcoreRuntime#code_configuration}
  */
  readonly codeConfiguration?: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#container_configuration BedrockagentcoreRuntime#container_configuration}
  */
  readonly containerConfiguration?: BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration;
}

export function bedrockagentcoreRuntimeAgentRuntimeArtifactToTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_configuration: bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationToTerraform(struct!.codeConfiguration),
    container_configuration: bedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationToTerraform(struct!.containerConfiguration),
  }
}


export function bedrockagentcoreRuntimeAgentRuntimeArtifactToHclTerraform(struct?: BedrockagentcoreRuntimeAgentRuntimeArtifact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_configuration: {
      value: bedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationToHclTerraform(struct!.codeConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration",
    },
    container_configuration: {
      value: bedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationToHclTerraform(struct!.containerConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeAgentRuntimeArtifact | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeConfiguration = this._codeConfiguration?.internalValue;
    }
    if (this._containerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerConfiguration = this._containerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAgentRuntimeArtifact | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeConfiguration.internalValue = undefined;
      this._containerConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeConfiguration.internalValue = value.codeConfiguration;
      this._containerConfiguration.internalValue = value.containerConfiguration;
    }
  }

  // code_configuration - computed: true, optional: true, required: false
  private _codeConfiguration = new BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfigurationOutputReference(this, "code_configuration");
  public get codeConfiguration() {
    return this._codeConfiguration;
  }
  public putCodeConfiguration(value: BedrockagentcoreRuntimeAgentRuntimeArtifactCodeConfiguration) {
    this._codeConfiguration.internalValue = value;
  }
  public resetCodeConfiguration() {
    this._codeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeConfigurationInput() {
    return this._codeConfiguration.internalValue;
  }

  // container_configuration - computed: true, optional: true, required: false
  private _containerConfiguration = new BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfigurationOutputReference(this, "container_configuration");
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
  public putContainerConfiguration(value: BedrockagentcoreRuntimeAgentRuntimeArtifactContainerConfiguration) {
    this._containerConfiguration.internalValue = value;
  }
  public resetContainerConfiguration() {
    this._containerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigurationInput() {
    return this._containerConfiguration.internalValue;
  }
}
export interface BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {
  /**
  * The string value to match for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#match_value_string BedrockagentcoreRuntime#match_value_string}
  */
  readonly matchValueString?: string;
  /**
  * The list of strings to check for a match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#match_value_string_list BedrockagentcoreRuntime#match_value_string_list}
  */
  readonly matchValueStringList?: string[];
}

export function bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
    match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
  }
}


export function bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToHclTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_value_string: {
      value: cdktn.stringToHclTerraform(struct!.matchValueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value_string_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchValueStringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueString = this._matchValueString;
    }
    if (this._matchValueStringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueStringList = this._matchValueStringList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValueString = undefined;
      this._matchValueStringList = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValueString = value.matchValueString;
      this._matchValueStringList = value.matchValueStringList;
    }
  }

  // match_value_string - computed: true, optional: true, required: false
  private _matchValueString?: string; 
  public get matchValueString() {
    return this.getStringAttribute('match_value_string');
  }
  public set matchValueString(value: string) {
    this._matchValueString = value;
  }
  public resetMatchValueString() {
    this._matchValueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringInput() {
    return this._matchValueString;
  }

  // match_value_string_list - computed: true, optional: true, required: false
  private _matchValueStringList?: string[]; 
  public get matchValueStringList() {
    return this.getListAttribute('match_value_string_list');
  }
  public set matchValueStringList(value: string[]) {
    this._matchValueStringList = value;
  }
  public resetMatchValueStringList() {
    this._matchValueStringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringListInput() {
    return this._matchValueStringList;
  }
}
export interface BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {
  /**
  * The relationship between the claim field value and the value or values being matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#claim_match_operator BedrockagentcoreRuntime#claim_match_operator}
  */
  readonly claimMatchOperator?: string;
  /**
  * The value or values in the custom claim to match for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#claim_match_value BedrockagentcoreRuntime#claim_match_value}
  */
  readonly claimMatchValue?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;
}

export function bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
    claim_match_value: bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToTerraform(struct!.claimMatchValue),
  }
}


export function bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToHclTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    claim_match_operator: {
      value: cdktn.stringToHclTerraform(struct!.claimMatchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_match_value: {
      value: bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueToHclTerraform(struct!.claimMatchValue),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimMatchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchOperator = this._claimMatchOperator;
    }
    if (this._claimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchValue = this._claimMatchValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimMatchOperator = undefined;
      this._claimMatchValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimMatchOperator = value.claimMatchOperator;
      this._claimMatchValue.internalValue = value.claimMatchValue;
    }
  }

  // claim_match_operator - computed: true, optional: true, required: false
  private _claimMatchOperator?: string; 
  public get claimMatchOperator() {
    return this.getStringAttribute('claim_match_operator');
  }
  public set claimMatchOperator(value: string) {
    this._claimMatchOperator = value;
  }
  public resetClaimMatchOperator() {
    this._claimMatchOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchOperatorInput() {
    return this._claimMatchOperator;
  }

  // claim_match_value - computed: true, optional: true, required: false
  private _claimMatchValue = new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(this, "claim_match_value");
  public get claimMatchValue() {
    return this._claimMatchValue;
  }
  public putClaimMatchValue(value: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue) {
    this._claimMatchValue.internalValue = value;
  }
  public resetClaimMatchValue() {
    this._claimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchValueInput() {
    return this._claimMatchValue.internalValue;
  }
}
export interface BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {
  /**
  * The value or values in the custom claim to match and relationship of match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#authorizing_claim_match_value BedrockagentcoreRuntime#authorizing_claim_match_value}
  */
  readonly authorizingClaimMatchValue?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;
  /**
  * The name of the custom claim to validate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#inbound_token_claim_name BedrockagentcoreRuntime#inbound_token_claim_name}
  */
  readonly inboundTokenClaimName?: string;
  /**
  * Token claim data type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#inbound_token_claim_value_type BedrockagentcoreRuntime#inbound_token_claim_value_type}
  */
  readonly inboundTokenClaimValueType?: string;
}

export function bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorizing_claim_match_value: bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToTerraform(struct!.authorizingClaimMatchValue),
    inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
    inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
  }
}


export function bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToHclTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorizing_claim_match_value: {
      value: bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueToHclTerraform(struct!.authorizingClaimMatchValue),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue",
    },
    inbound_token_claim_name: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_token_claim_value_type: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizingClaimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizingClaimMatchValue = this._authorizingClaimMatchValue?.internalValue;
    }
    if (this._inboundTokenClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimName = this._inboundTokenClaimName;
    }
    if (this._inboundTokenClaimValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimValueType = this._inboundTokenClaimValueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizingClaimMatchValue.internalValue = undefined;
      this._inboundTokenClaimName = undefined;
      this._inboundTokenClaimValueType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizingClaimMatchValue.internalValue = value.authorizingClaimMatchValue;
      this._inboundTokenClaimName = value.inboundTokenClaimName;
      this._inboundTokenClaimValueType = value.inboundTokenClaimValueType;
    }
  }

  // authorizing_claim_match_value - computed: true, optional: true, required: false
  private _authorizingClaimMatchValue = new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(this, "authorizing_claim_match_value");
  public get authorizingClaimMatchValue() {
    return this._authorizingClaimMatchValue;
  }
  public putAuthorizingClaimMatchValue(value: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue) {
    this._authorizingClaimMatchValue.internalValue = value;
  }
  public resetAuthorizingClaimMatchValue() {
    this._authorizingClaimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingClaimMatchValueInput() {
    return this._authorizingClaimMatchValue.internalValue;
  }

  // inbound_token_claim_name - computed: true, optional: true, required: false
  private _inboundTokenClaimName?: string; 
  public get inboundTokenClaimName() {
    return this.getStringAttribute('inbound_token_claim_name');
  }
  public set inboundTokenClaimName(value: string) {
    this._inboundTokenClaimName = value;
  }
  public resetInboundTokenClaimName() {
    this._inboundTokenClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimNameInput() {
    return this._inboundTokenClaimName;
  }

  // inbound_token_claim_value_type - computed: true, optional: true, required: false
  private _inboundTokenClaimValueType?: string; 
  public get inboundTokenClaimValueType() {
    return this.getStringAttribute('inbound_token_claim_value_type');
  }
  public set inboundTokenClaimValueType(value: string) {
    this._inboundTokenClaimValueType = value;
  }
  public resetInboundTokenClaimValueType() {
    this._inboundTokenClaimValueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimValueTypeInput() {
    return this._inboundTokenClaimValueType;
  }
}

export class BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference {
    return new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer {
  /**
  * List of allowed audiences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#allowed_audience BedrockagentcoreRuntime#allowed_audience}
  */
  readonly allowedAudience?: string[];
  /**
  * List of allowed clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#allowed_clients BedrockagentcoreRuntime#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * List of allowed scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#allowed_scopes BedrockagentcoreRuntime#allowed_scopes}
  */
  readonly allowedScopes?: string[];
  /**
  * List of required custom claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#custom_claims BedrockagentcoreRuntime#custom_claims}
  */
  readonly customClaims?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] | cdktn.IResolvable;
  /**
  * OpenID Connect discovery URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#discovery_url BedrockagentcoreRuntime#discovery_url}
  */
  readonly discoveryUrl?: string;
}

export function bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
    allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
    custom_claims: cdktn.listMapper(bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToTerraform, false)(struct!.customClaims),
    discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
  }
}


export function bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_audience: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAudience),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_clients: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedClients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_claims: {
      value: cdktn.listMapperHcl(bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsToHclTerraform, false)(struct!.customClaims),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList",
    },
    discovery_url: {
      value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudience = this._allowedAudience;
    }
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    if (this._customClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaims = this._customClaims?.internalValue;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAudience = undefined;
      this._allowedClients = undefined;
      this._allowedScopes = undefined;
      this._customClaims.internalValue = undefined;
      this._discoveryUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAudience = value.allowedAudience;
      this._allowedClients = value.allowedClients;
      this._allowedScopes = value.allowedScopes;
      this._customClaims.internalValue = value.customClaims;
      this._discoveryUrl = value.discoveryUrl;
    }
  }

  // allowed_audience - computed: true, optional: true, required: false
  private _allowedAudience?: string[]; 
  public get allowedAudience() {
    return this.getListAttribute('allowed_audience');
  }
  public set allowedAudience(value: string[]) {
    this._allowedAudience = value;
  }
  public resetAllowedAudience() {
    this._allowedAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudienceInput() {
    return this._allowedAudience;
  }

  // allowed_clients - computed: true, optional: true, required: false
  private _allowedClients?: string[]; 
  public get allowedClients() {
    return this.getListAttribute('allowed_clients');
  }
  public set allowedClients(value: string[]) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // allowed_scopes - computed: true, optional: true, required: false
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return this.getListAttribute('allowed_scopes');
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }

  // custom_claims - computed: true, optional: true, required: false
  private _customClaims = new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(this, "custom_claims", false);
  public get customClaims() {
    return this._customClaims;
  }
  public putCustomClaims(value: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[] | cdktn.IResolvable) {
    this._customClaims.internalValue = value;
  }
  public resetCustomClaims() {
    this._customClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimsInput() {
    return this._customClaims.internalValue;
  }

  // discovery_url - computed: true, optional: true, required: false
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }
}
export interface BedrockagentcoreRuntimeAuthorizerConfiguration {
  /**
  * Configuration for custom JWT authorizer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#custom_jwt_authorizer BedrockagentcoreRuntime#custom_jwt_authorizer}
  */
  readonly customJwtAuthorizer?: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer;
}

export function bedrockagentcoreRuntimeAuthorizerConfigurationToTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_jwt_authorizer: bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct!.customJwtAuthorizer),
  }
}


export function bedrockagentcoreRuntimeAuthorizerConfigurationToHclTerraform(struct?: BedrockagentcoreRuntimeAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_jwt_authorizer: {
      value: bedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct!.customJwtAuthorizer),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeAuthorizerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customJwtAuthorizer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customJwtAuthorizer = this._customJwtAuthorizer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeAuthorizerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = value.customJwtAuthorizer;
    }
  }

  // custom_jwt_authorizer - computed: true, optional: true, required: false
  private _customJwtAuthorizer = new BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizerOutputReference(this, "custom_jwt_authorizer");
  public get customJwtAuthorizer() {
    return this._customJwtAuthorizer;
  }
  public putCustomJwtAuthorizer(value: BedrockagentcoreRuntimeAuthorizerConfigurationCustomJwtAuthorizer) {
    this._customJwtAuthorizer.internalValue = value;
  }
  public resetCustomJwtAuthorizer() {
    this._customJwtAuthorizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJwtAuthorizerInput() {
    return this._customJwtAuthorizer.internalValue;
  }
}
export interface BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint {
  /**
  * ARN of the EFS access point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#access_point_arn BedrockagentcoreRuntime#access_point_arn}
  */
  readonly accessPointArn?: string;
  /**
  * Mount path for filesystem configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}
  */
  readonly mountPath?: string;
}

export function bedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointToTerraform(struct?: BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function bedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointToHclTerraform(struct?: BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_point_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointArn = value.accessPointArn;
      this._mountPath = value.mountPath;
    }
  }

  // access_point_arn - computed: true, optional: true, required: false
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  public resetAccessPointArn() {
    this._accessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // mount_path - computed: true, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint {
  /**
  * ARN of the S3 Files access point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#access_point_arn BedrockagentcoreRuntime#access_point_arn}
  */
  readonly accessPointArn?: string;
  /**
  * Mount path for filesystem configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}
  */
  readonly mountPath?: string;
}

export function bedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointToTerraform(struct?: BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function bedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointToHclTerraform(struct?: BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_point_arn: {
      value: cdktn.stringToHclTerraform(struct!.accessPointArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPointArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPointArn = this._accessPointArn;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPointArn = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPointArn = value.accessPointArn;
      this._mountPath = value.mountPath;
    }
  }

  // access_point_arn - computed: true, optional: true, required: false
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  public resetAccessPointArn() {
    this._accessPointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // mount_path - computed: true, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage {
  /**
  * Mount path for filesystem configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#mount_path BedrockagentcoreRuntime#mount_path}
  */
  readonly mountPath?: string;
}

export function bedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageToTerraform(struct?: BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
  }
}


export function bedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageToHclTerraform(struct?: BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
    }
  }

  // mount_path - computed: true, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface BedrockagentcoreRuntimeFilesystemConfigurations {
  /**
  * Configuration for EFS access point filesystem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#efs_access_point BedrockagentcoreRuntime#efs_access_point}
  */
  readonly efsAccessPoint?: BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint;
  /**
  * Configuration for S3 Files access point filesystem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#s3_files_access_point BedrockagentcoreRuntime#s3_files_access_point}
  */
  readonly s3FilesAccessPoint?: BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint;
  /**
  * Configuration for session storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#session_storage BedrockagentcoreRuntime#session_storage}
  */
  readonly sessionStorage?: BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage;
}

export function bedrockagentcoreRuntimeFilesystemConfigurationsToTerraform(struct?: BedrockagentcoreRuntimeFilesystemConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_access_point: bedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointToTerraform(struct!.efsAccessPoint),
    s3_files_access_point: bedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointToTerraform(struct!.s3FilesAccessPoint),
    session_storage: bedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageToTerraform(struct!.sessionStorage),
  }
}


export function bedrockagentcoreRuntimeFilesystemConfigurationsToHclTerraform(struct?: BedrockagentcoreRuntimeFilesystemConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_access_point: {
      value: bedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointToHclTerraform(struct!.efsAccessPoint),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint",
    },
    s3_files_access_point: {
      value: bedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointToHclTerraform(struct!.s3FilesAccessPoint),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint",
    },
    session_storage: {
      value: bedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageToHclTerraform(struct!.sessionStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreRuntimeFilesystemConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsAccessPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsAccessPoint = this._efsAccessPoint?.internalValue;
    }
    if (this._s3FilesAccessPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FilesAccessPoint = this._s3FilesAccessPoint?.internalValue;
    }
    if (this._sessionStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStorage = this._sessionStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeFilesystemConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsAccessPoint.internalValue = undefined;
      this._s3FilesAccessPoint.internalValue = undefined;
      this._sessionStorage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsAccessPoint.internalValue = value.efsAccessPoint;
      this._s3FilesAccessPoint.internalValue = value.s3FilesAccessPoint;
      this._sessionStorage.internalValue = value.sessionStorage;
    }
  }

  // efs_access_point - computed: true, optional: true, required: false
  private _efsAccessPoint = new BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPointOutputReference(this, "efs_access_point");
  public get efsAccessPoint() {
    return this._efsAccessPoint;
  }
  public putEfsAccessPoint(value: BedrockagentcoreRuntimeFilesystemConfigurationsEfsAccessPoint) {
    this._efsAccessPoint.internalValue = value;
  }
  public resetEfsAccessPoint() {
    this._efsAccessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsAccessPointInput() {
    return this._efsAccessPoint.internalValue;
  }

  // s3_files_access_point - computed: true, optional: true, required: false
  private _s3FilesAccessPoint = new BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPointOutputReference(this, "s3_files_access_point");
  public get s3FilesAccessPoint() {
    return this._s3FilesAccessPoint;
  }
  public putS3FilesAccessPoint(value: BedrockagentcoreRuntimeFilesystemConfigurationsS3FilesAccessPoint) {
    this._s3FilesAccessPoint.internalValue = value;
  }
  public resetS3FilesAccessPoint() {
    this._s3FilesAccessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FilesAccessPointInput() {
    return this._s3FilesAccessPoint.internalValue;
  }

  // session_storage - computed: true, optional: true, required: false
  private _sessionStorage = new BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorageOutputReference(this, "session_storage");
  public get sessionStorage() {
    return this._sessionStorage;
  }
  public putSessionStorage(value: BedrockagentcoreRuntimeFilesystemConfigurationsSessionStorage) {
    this._sessionStorage.internalValue = value;
  }
  public resetSessionStorage() {
    this._sessionStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStorageInput() {
    return this._sessionStorage.internalValue;
  }
}

export class BedrockagentcoreRuntimeFilesystemConfigurationsList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRuntimeFilesystemConfigurations[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference {
    return new BedrockagentcoreRuntimeFilesystemConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRuntimeLifecycleConfiguration {
  /**
  * Timeout in seconds for idle runtime sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#idle_runtime_session_timeout BedrockagentcoreRuntime#idle_runtime_session_timeout}
  */
  readonly idleRuntimeSessionTimeout?: number;
  /**
  * Maximum lifetime in seconds for runtime sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#max_lifetime BedrockagentcoreRuntime#max_lifetime}
  */
  readonly maxLifetime?: number;
}

export function bedrockagentcoreRuntimeLifecycleConfigurationToTerraform(struct?: BedrockagentcoreRuntimeLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_runtime_session_timeout: cdktn.numberToTerraform(struct!.idleRuntimeSessionTimeout),
    max_lifetime: cdktn.numberToTerraform(struct!.maxLifetime),
  }
}


export function bedrockagentcoreRuntimeLifecycleConfigurationToHclTerraform(struct?: BedrockagentcoreRuntimeLifecycleConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_runtime_session_timeout: {
      value: cdktn.numberToHclTerraform(struct!.idleRuntimeSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_lifetime: {
      value: cdktn.numberToHclTerraform(struct!.maxLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeLifecycleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeLifecycleConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleRuntimeSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleRuntimeSessionTimeout = this._idleRuntimeSessionTimeout;
    }
    if (this._maxLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLifetime = this._maxLifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeLifecycleConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleRuntimeSessionTimeout = undefined;
      this._maxLifetime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleRuntimeSessionTimeout = value.idleRuntimeSessionTimeout;
      this._maxLifetime = value.maxLifetime;
    }
  }

  // idle_runtime_session_timeout - computed: true, optional: true, required: false
  private _idleRuntimeSessionTimeout?: number; 
  public get idleRuntimeSessionTimeout() {
    return this.getNumberAttribute('idle_runtime_session_timeout');
  }
  public set idleRuntimeSessionTimeout(value: number) {
    this._idleRuntimeSessionTimeout = value;
  }
  public resetIdleRuntimeSessionTimeout() {
    this._idleRuntimeSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleRuntimeSessionTimeoutInput() {
    return this._idleRuntimeSessionTimeout;
  }

  // max_lifetime - computed: true, optional: true, required: false
  private _maxLifetime?: number; 
  public get maxLifetime() {
    return this.getNumberAttribute('max_lifetime');
  }
  public set maxLifetime(value: number) {
    this._maxLifetime = value;
  }
  public resetMaxLifetime() {
    this._maxLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLifetimeInput() {
    return this._maxLifetime;
  }
}
export interface BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig {
  /**
  * Security groups for VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#security_groups BedrockagentcoreRuntime#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Subnets for VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#subnets BedrockagentcoreRuntime#subnets}
  */
  readonly subnets?: string[];
}

export function bedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigToTerraform(struct?: BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
  }
}


export function bedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigToHclTerraform(struct?: BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface BedrockagentcoreRuntimeNetworkConfiguration {
  /**
  * Network mode configuration type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#network_mode BedrockagentcoreRuntime#network_mode}
  */
  readonly networkMode: string;
  /**
  * Network mode configuration for VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#network_mode_config BedrockagentcoreRuntime#network_mode_config}
  */
  readonly networkModeConfig?: BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig;
}

export function bedrockagentcoreRuntimeNetworkConfigurationToTerraform(struct?: BedrockagentcoreRuntimeNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_mode: cdktn.stringToTerraform(struct!.networkMode),
    network_mode_config: bedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigToTerraform(struct!.networkModeConfig),
  }
}


export function bedrockagentcoreRuntimeNetworkConfigurationToHclTerraform(struct?: BedrockagentcoreRuntimeNetworkConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_mode: {
      value: cdktn.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode_config: {
      value: bedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigToHclTerraform(struct!.networkModeConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeNetworkConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._networkModeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkModeConfig = this._networkModeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeNetworkConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkMode = undefined;
      this._networkModeConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkMode = value.networkMode;
      this._networkModeConfig.internalValue = value.networkModeConfig;
    }
  }

  // network_mode - computed: false, optional: false, required: true
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // network_mode_config - computed: true, optional: true, required: false
  private _networkModeConfig = new BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfigOutputReference(this, "network_mode_config");
  public get networkModeConfig() {
    return this._networkModeConfig;
  }
  public putNetworkModeConfig(value: BedrockagentcoreRuntimeNetworkConfigurationNetworkModeConfig) {
    this._networkModeConfig.internalValue = value;
  }
  public resetNetworkModeConfig() {
    this._networkModeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeConfigInput() {
    return this._networkModeConfig.internalValue;
  }
}
export interface BedrockagentcoreRuntimeRequestHeaderConfiguration {
  /**
  * List of allowed HTTP headers for agent runtime requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#request_header_allowlist BedrockagentcoreRuntime#request_header_allowlist}
  */
  readonly requestHeaderAllowlist?: string[];
}

export function bedrockagentcoreRuntimeRequestHeaderConfigurationToTerraform(struct?: BedrockagentcoreRuntimeRequestHeaderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    request_header_allowlist: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.requestHeaderAllowlist),
  }
}


export function bedrockagentcoreRuntimeRequestHeaderConfigurationToHclTerraform(struct?: BedrockagentcoreRuntimeRequestHeaderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    request_header_allowlist: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.requestHeaderAllowlist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeRequestHeaderConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaderAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderAllowlist = this._requestHeaderAllowlist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeRequestHeaderConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaderAllowlist = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaderAllowlist = value.requestHeaderAllowlist;
    }
  }

  // request_header_allowlist - computed: true, optional: true, required: false
  private _requestHeaderAllowlist?: string[]; 
  public get requestHeaderAllowlist() {
    return cdktn.Fn.tolist(this.getListAttribute('request_header_allowlist'));
  }
  public set requestHeaderAllowlist(value: string[]) {
    this._requestHeaderAllowlist = value;
  }
  public resetRequestHeaderAllowlist() {
    this._requestHeaderAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderAllowlistInput() {
    return this._requestHeaderAllowlist;
  }
}
export interface BedrockagentcoreRuntimeWorkloadIdentityDetails {
}

export function bedrockagentcoreRuntimeWorkloadIdentityDetailsToTerraform(struct?: BedrockagentcoreRuntimeWorkloadIdentityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bedrockagentcoreRuntimeWorkloadIdentityDetailsToHclTerraform(struct?: BedrockagentcoreRuntimeWorkloadIdentityDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRuntimeWorkloadIdentityDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRuntimeWorkloadIdentityDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workload_identity_arn - computed: true, optional: false, required: false
  public get workloadIdentityArn() {
    return this.getStringAttribute('workload_identity_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime awscc_bedrockagentcore_runtime}
*/
export class BedrockagentcoreRuntime extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrockagentcore_runtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreRuntime resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreRuntime to import
  * @param importFromId The id of the existing BedrockagentcoreRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreRuntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_runtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/bedrockagentcore_runtime awscc_bedrockagentcore_runtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrockagentcore_runtime',
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
    this._agentRuntimeArtifact.internalValue = config.agentRuntimeArtifact;
    this._agentRuntimeName = config.agentRuntimeName;
    this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
    this._description = config.description;
    this._environmentVariables = config.environmentVariables;
    this._filesystemConfigurations.internalValue = config.filesystemConfigurations;
    this._lifecycleConfiguration.internalValue = config.lifecycleConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._protocolConfiguration = config.protocolConfiguration;
    this._requestHeaderConfiguration.internalValue = config.requestHeaderConfiguration;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_runtime_arn - computed: true, optional: false, required: false
  public get agentRuntimeArn() {
    return this.getStringAttribute('agent_runtime_arn');
  }

  // agent_runtime_artifact - computed: false, optional: false, required: true
  private _agentRuntimeArtifact = new BedrockagentcoreRuntimeAgentRuntimeArtifactOutputReference(this, "agent_runtime_artifact");
  public get agentRuntimeArtifact() {
    return this._agentRuntimeArtifact;
  }
  public putAgentRuntimeArtifact(value: BedrockagentcoreRuntimeAgentRuntimeArtifact) {
    this._agentRuntimeArtifact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRuntimeArtifactInput() {
    return this._agentRuntimeArtifact.internalValue;
  }

  // agent_runtime_id - computed: true, optional: false, required: false
  public get agentRuntimeId() {
    return this.getStringAttribute('agent_runtime_id');
  }

  // agent_runtime_name - computed: false, optional: false, required: true
  private _agentRuntimeName?: string; 
  public get agentRuntimeName() {
    return this.getStringAttribute('agent_runtime_name');
  }
  public set agentRuntimeName(value: string) {
    this._agentRuntimeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRuntimeNameInput() {
    return this._agentRuntimeName;
  }

  // agent_runtime_version - computed: true, optional: false, required: false
  public get agentRuntimeVersion() {
    return this.getStringAttribute('agent_runtime_version');
  }

  // authorizer_configuration - computed: true, optional: true, required: false
  private _authorizerConfiguration = new BedrockagentcoreRuntimeAuthorizerConfigurationOutputReference(this, "authorizer_configuration");
  public get authorizerConfiguration() {
    return this._authorizerConfiguration;
  }
  public putAuthorizerConfiguration(value: BedrockagentcoreRuntimeAuthorizerConfiguration) {
    this._authorizerConfiguration.internalValue = value;
  }
  public resetAuthorizerConfiguration() {
    this._authorizerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigurationInput() {
    return this._authorizerConfiguration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // filesystem_configurations - computed: true, optional: true, required: false
  private _filesystemConfigurations = new BedrockagentcoreRuntimeFilesystemConfigurationsList(this, "filesystem_configurations", false);
  public get filesystemConfigurations() {
    return this._filesystemConfigurations;
  }
  public putFilesystemConfigurations(value: BedrockagentcoreRuntimeFilesystemConfigurations[] | cdktn.IResolvable) {
    this._filesystemConfigurations.internalValue = value;
  }
  public resetFilesystemConfigurations() {
    this._filesystemConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemConfigurationsInput() {
    return this._filesystemConfigurations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // lifecycle_configuration - computed: true, optional: true, required: false
  private _lifecycleConfiguration = new BedrockagentcoreRuntimeLifecycleConfigurationOutputReference(this, "lifecycle_configuration");
  public get lifecycleConfiguration() {
    return this._lifecycleConfiguration;
  }
  public putLifecycleConfiguration(value: BedrockagentcoreRuntimeLifecycleConfiguration) {
    this._lifecycleConfiguration.internalValue = value;
  }
  public resetLifecycleConfiguration() {
    this._lifecycleConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigurationInput() {
    return this._lifecycleConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new BedrockagentcoreRuntimeNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: BedrockagentcoreRuntimeNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // protocol_configuration - computed: true, optional: true, required: false
  private _protocolConfiguration?: string; 
  public get protocolConfiguration() {
    return this.getStringAttribute('protocol_configuration');
  }
  public set protocolConfiguration(value: string) {
    this._protocolConfiguration = value;
  }
  public resetProtocolConfiguration() {
    this._protocolConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolConfigurationInput() {
    return this._protocolConfiguration;
  }

  // request_header_configuration - computed: true, optional: true, required: false
  private _requestHeaderConfiguration = new BedrockagentcoreRuntimeRequestHeaderConfigurationOutputReference(this, "request_header_configuration");
  public get requestHeaderConfiguration() {
    return this._requestHeaderConfiguration;
  }
  public putRequestHeaderConfiguration(value: BedrockagentcoreRuntimeRequestHeaderConfiguration) {
    this._requestHeaderConfiguration.internalValue = value;
  }
  public resetRequestHeaderConfiguration() {
    this._requestHeaderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderConfigurationInput() {
    return this._requestHeaderConfiguration.internalValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // workload_identity_details - computed: true, optional: false, required: false
  private _workloadIdentityDetails = new BedrockagentcoreRuntimeWorkloadIdentityDetailsOutputReference(this, "workload_identity_details");
  public get workloadIdentityDetails() {
    return this._workloadIdentityDetails;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_runtime_artifact: bedrockagentcoreRuntimeAgentRuntimeArtifactToTerraform(this._agentRuntimeArtifact.internalValue),
      agent_runtime_name: cdktn.stringToTerraform(this._agentRuntimeName),
      authorizer_configuration: bedrockagentcoreRuntimeAuthorizerConfigurationToTerraform(this._authorizerConfiguration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(this._environmentVariables),
      filesystem_configurations: cdktn.listMapper(bedrockagentcoreRuntimeFilesystemConfigurationsToTerraform, false)(this._filesystemConfigurations.internalValue),
      lifecycle_configuration: bedrockagentcoreRuntimeLifecycleConfigurationToTerraform(this._lifecycleConfiguration.internalValue),
      network_configuration: bedrockagentcoreRuntimeNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      protocol_configuration: cdktn.stringToTerraform(this._protocolConfiguration),
      request_header_configuration: bedrockagentcoreRuntimeRequestHeaderConfigurationToTerraform(this._requestHeaderConfiguration.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_runtime_artifact: {
        value: bedrockagentcoreRuntimeAgentRuntimeArtifactToHclTerraform(this._agentRuntimeArtifact.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreRuntimeAgentRuntimeArtifact",
      },
      agent_runtime_name: {
        value: cdktn.stringToHclTerraform(this._agentRuntimeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_configuration: {
        value: bedrockagentcoreRuntimeAuthorizerConfigurationToHclTerraform(this._authorizerConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreRuntimeAuthorizerConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_variables: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filesystem_configurations: {
        value: cdktn.listMapperHcl(bedrockagentcoreRuntimeFilesystemConfigurationsToHclTerraform, false)(this._filesystemConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreRuntimeFilesystemConfigurationsList",
      },
      lifecycle_configuration: {
        value: bedrockagentcoreRuntimeLifecycleConfigurationToHclTerraform(this._lifecycleConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreRuntimeLifecycleConfiguration",
      },
      network_configuration: {
        value: bedrockagentcoreRuntimeNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreRuntimeNetworkConfiguration",
      },
      protocol_configuration: {
        value: cdktn.stringToHclTerraform(this._protocolConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_header_configuration: {
        value: bedrockagentcoreRuntimeRequestHeaderConfigurationToHclTerraform(this._requestHeaderConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreRuntimeRequestHeaderConfiguration",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
