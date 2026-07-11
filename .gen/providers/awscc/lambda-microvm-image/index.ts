// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LambdaMicrovmImageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}
  */
  readonly additionalOsCapabilities: string[];
  /**
  * ARN of the base MicroVM image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#base_image_arn LambdaMicrovmImage#base_image_arn}
  */
  readonly baseImageArn: string;
  /**
  * Specific version of the base MicroVM image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#base_image_version LambdaMicrovmImage#base_image_version}
  */
  readonly baseImageVersion: string;
  /**
  * ARN of the IAM build role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#build_role_arn LambdaMicrovmImage#build_role_arn}
  */
  readonly buildRoleArn: string;
  /**
  * Code artifact for the active MicroVM image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#code_artifact LambdaMicrovmImage#code_artifact}
  */
  readonly codeArtifact: LambdaMicrovmImageCodeArtifact;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}
  */
  readonly cpuConfigurations: LambdaMicrovmImageCpuConfigurations[] | cdktn.IResolvable;
  /**
  * Human-readable description of the MicroVM image and its purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#description LambdaMicrovmImage#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}
  */
  readonly egressNetworkConnectors: string[];
  /**
  * Environment variables to set in the container during the snapshot build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#environment_variables LambdaMicrovmImage#environment_variables}
  */
  readonly environmentVariables: LambdaMicrovmImageEnvironmentVariables[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}
  */
  readonly hooks: LambdaMicrovmImageHooks;
  /**
  * Configuration for MicroVM image logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#logging LambdaMicrovmImage#logging}
  */
  readonly logging: LambdaMicrovmImageLogging;
  /**
  * Unique name for the MicroVM image within the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#name LambdaMicrovmImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}
  */
  readonly resources: LambdaMicrovmImageResources[] | cdktn.IResolvable;
  /**
  * Key-value pairs to associate with the MicroVM image for organization and management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#tags LambdaMicrovmImage#tags}
  */
  readonly tags?: LambdaMicrovmImageTags[] | cdktn.IResolvable;
}
export interface LambdaMicrovmImageCodeArtifact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}
  */
  readonly uri: string;
}

export function lambdaMicrovmImageCodeArtifactToTerraform(struct?: LambdaMicrovmImageCodeArtifact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function lambdaMicrovmImageCodeArtifactToHclTerraform(struct?: LambdaMicrovmImageCodeArtifact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaMicrovmImageCodeArtifactOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaMicrovmImageCodeArtifact | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaMicrovmImageCodeArtifact | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface LambdaMicrovmImageCpuConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}
  */
  readonly architecture: string;
}

export function lambdaMicrovmImageCpuConfigurationsToTerraform(struct?: LambdaMicrovmImageCpuConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    architecture: cdktn.stringToTerraform(struct!.architecture),
  }
}


export function lambdaMicrovmImageCpuConfigurationsToHclTerraform(struct?: LambdaMicrovmImageCpuConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    architecture: {
      value: cdktn.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaMicrovmImageCpuConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaMicrovmImageCpuConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaMicrovmImageCpuConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture = value.architecture;
    }
  }

  // architecture - computed: false, optional: false, required: true
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }
}

export class LambdaMicrovmImageCpuConfigurationsList extends cdktn.ComplexList {
  public internalValue? : LambdaMicrovmImageCpuConfigurations[] | cdktn.IResolvable

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
  public get(index: number): LambdaMicrovmImageCpuConfigurationsOutputReference {
    return new LambdaMicrovmImageCpuConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaMicrovmImageEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}
  */
  readonly value: string;
}

export function lambdaMicrovmImageEnvironmentVariablesToTerraform(struct?: LambdaMicrovmImageEnvironmentVariables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lambdaMicrovmImageEnvironmentVariablesToHclTerraform(struct?: LambdaMicrovmImageEnvironmentVariables | cdktn.IResolvable): any {
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

export class LambdaMicrovmImageEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaMicrovmImageEnvironmentVariables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LambdaMicrovmImageEnvironmentVariables | cdktn.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LambdaMicrovmImageEnvironmentVariablesList extends cdktn.ComplexList {
  public internalValue? : LambdaMicrovmImageEnvironmentVariables[] | cdktn.IResolvable

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
  public get(index: number): LambdaMicrovmImageEnvironmentVariablesOutputReference {
    return new LambdaMicrovmImageEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaMicrovmImageHooksMicrovmHooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}
  */
  readonly resume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}
  */
  readonly resumeTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}
  */
  readonly run?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}
  */
  readonly runTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}
  */
  readonly suspend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}
  */
  readonly suspendTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}
  */
  readonly terminate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}
  */
  readonly terminateTimeoutInSeconds?: number;
}

export function lambdaMicrovmImageHooksMicrovmHooksToTerraform(struct?: LambdaMicrovmImageHooksMicrovmHooks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resume: cdktn.stringToTerraform(struct!.resume),
    resume_timeout_in_seconds: cdktn.numberToTerraform(struct!.resumeTimeoutInSeconds),
    run: cdktn.stringToTerraform(struct!.run),
    run_timeout_in_seconds: cdktn.numberToTerraform(struct!.runTimeoutInSeconds),
    suspend: cdktn.stringToTerraform(struct!.suspend),
    suspend_timeout_in_seconds: cdktn.numberToTerraform(struct!.suspendTimeoutInSeconds),
    terminate: cdktn.stringToTerraform(struct!.terminate),
    terminate_timeout_in_seconds: cdktn.numberToTerraform(struct!.terminateTimeoutInSeconds),
  }
}


export function lambdaMicrovmImageHooksMicrovmHooksToHclTerraform(struct?: LambdaMicrovmImageHooksMicrovmHooks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resume: {
      value: cdktn.stringToHclTerraform(struct!.resume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resume_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.resumeTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run: {
      value: cdktn.stringToHclTerraform(struct!.run),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.runTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suspend: {
      value: cdktn.stringToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.suspendTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    terminate: {
      value: cdktn.stringToHclTerraform(struct!.terminate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terminate_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.terminateTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaMicrovmImageHooksMicrovmHooksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaMicrovmImageHooksMicrovmHooks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resume !== undefined) {
      hasAnyValues = true;
      internalValueResult.resume = this._resume;
    }
    if (this._resumeTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resumeTimeoutInSeconds = this._resumeTimeoutInSeconds;
    }
    if (this._run !== undefined) {
      hasAnyValues = true;
      internalValueResult.run = this._run;
    }
    if (this._runTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.runTimeoutInSeconds = this._runTimeoutInSeconds;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._suspendTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendTimeoutInSeconds = this._suspendTimeoutInSeconds;
    }
    if (this._terminate !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminate = this._terminate;
    }
    if (this._terminateTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateTimeoutInSeconds = this._terminateTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaMicrovmImageHooksMicrovmHooks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resume = undefined;
      this._resumeTimeoutInSeconds = undefined;
      this._run = undefined;
      this._runTimeoutInSeconds = undefined;
      this._suspend = undefined;
      this._suspendTimeoutInSeconds = undefined;
      this._terminate = undefined;
      this._terminateTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resume = value.resume;
      this._resumeTimeoutInSeconds = value.resumeTimeoutInSeconds;
      this._run = value.run;
      this._runTimeoutInSeconds = value.runTimeoutInSeconds;
      this._suspend = value.suspend;
      this._suspendTimeoutInSeconds = value.suspendTimeoutInSeconds;
      this._terminate = value.terminate;
      this._terminateTimeoutInSeconds = value.terminateTimeoutInSeconds;
    }
  }

  // resume - computed: true, optional: true, required: false
  private _resume?: string; 
  public get resume() {
    return this.getStringAttribute('resume');
  }
  public set resume(value: string) {
    this._resume = value;
  }
  public resetResume() {
    this._resume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeInput() {
    return this._resume;
  }

  // resume_timeout_in_seconds - computed: true, optional: true, required: false
  private _resumeTimeoutInSeconds?: number; 
  public get resumeTimeoutInSeconds() {
    return this.getNumberAttribute('resume_timeout_in_seconds');
  }
  public set resumeTimeoutInSeconds(value: number) {
    this._resumeTimeoutInSeconds = value;
  }
  public resetResumeTimeoutInSeconds() {
    this._resumeTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeTimeoutInSecondsInput() {
    return this._resumeTimeoutInSeconds;
  }

  // run - computed: true, optional: true, required: false
  private _run?: string; 
  public get run() {
    return this.getStringAttribute('run');
  }
  public set run(value: string) {
    this._run = value;
  }
  public resetRun() {
    this._run = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run;
  }

  // run_timeout_in_seconds - computed: true, optional: true, required: false
  private _runTimeoutInSeconds?: number; 
  public get runTimeoutInSeconds() {
    return this.getNumberAttribute('run_timeout_in_seconds');
  }
  public set runTimeoutInSeconds(value: number) {
    this._runTimeoutInSeconds = value;
  }
  public resetRunTimeoutInSeconds() {
    this._runTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTimeoutInSecondsInput() {
    return this._runTimeoutInSeconds;
  }

  // suspend - computed: true, optional: true, required: false
  private _suspend?: string; 
  public get suspend() {
    return this.getStringAttribute('suspend');
  }
  public set suspend(value: string) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // suspend_timeout_in_seconds - computed: true, optional: true, required: false
  private _suspendTimeoutInSeconds?: number; 
  public get suspendTimeoutInSeconds() {
    return this.getNumberAttribute('suspend_timeout_in_seconds');
  }
  public set suspendTimeoutInSeconds(value: number) {
    this._suspendTimeoutInSeconds = value;
  }
  public resetSuspendTimeoutInSeconds() {
    this._suspendTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTimeoutInSecondsInput() {
    return this._suspendTimeoutInSeconds;
  }

  // terminate - computed: true, optional: true, required: false
  private _terminate?: string; 
  public get terminate() {
    return this.getStringAttribute('terminate');
  }
  public set terminate(value: string) {
    this._terminate = value;
  }
  public resetTerminate() {
    this._terminate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInput() {
    return this._terminate;
  }

  // terminate_timeout_in_seconds - computed: true, optional: true, required: false
  private _terminateTimeoutInSeconds?: number; 
  public get terminateTimeoutInSeconds() {
    return this.getNumberAttribute('terminate_timeout_in_seconds');
  }
  public set terminateTimeoutInSeconds(value: number) {
    this._terminateTimeoutInSeconds = value;
  }
  public resetTerminateTimeoutInSeconds() {
    this._terminateTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateTimeoutInSecondsInput() {
    return this._terminateTimeoutInSeconds;
  }
}
export interface LambdaMicrovmImageHooksMicrovmImageHooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}
  */
  readonly ready?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}
  */
  readonly readyTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}
  */
  readonly validate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}
  */
  readonly validateTimeoutInSeconds?: number;
}

export function lambdaMicrovmImageHooksMicrovmImageHooksToTerraform(struct?: LambdaMicrovmImageHooksMicrovmImageHooks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ready: cdktn.stringToTerraform(struct!.ready),
    ready_timeout_in_seconds: cdktn.numberToTerraform(struct!.readyTimeoutInSeconds),
    validate: cdktn.stringToTerraform(struct!.validate),
    validate_timeout_in_seconds: cdktn.numberToTerraform(struct!.validateTimeoutInSeconds),
  }
}


export function lambdaMicrovmImageHooksMicrovmImageHooksToHclTerraform(struct?: LambdaMicrovmImageHooksMicrovmImageHooks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ready: {
      value: cdktn.stringToHclTerraform(struct!.ready),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ready_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.readyTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    validate: {
      value: cdktn.stringToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.validateTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaMicrovmImageHooksMicrovmImageHooksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaMicrovmImageHooksMicrovmImageHooks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ready !== undefined) {
      hasAnyValues = true;
      internalValueResult.ready = this._ready;
    }
    if (this._readyTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.readyTimeoutInSeconds = this._readyTimeoutInSeconds;
    }
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    if (this._validateTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateTimeoutInSeconds = this._validateTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaMicrovmImageHooksMicrovmImageHooks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ready = undefined;
      this._readyTimeoutInSeconds = undefined;
      this._validate = undefined;
      this._validateTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ready = value.ready;
      this._readyTimeoutInSeconds = value.readyTimeoutInSeconds;
      this._validate = value.validate;
      this._validateTimeoutInSeconds = value.validateTimeoutInSeconds;
    }
  }

  // ready - computed: true, optional: true, required: false
  private _ready?: string; 
  public get ready() {
    return this.getStringAttribute('ready');
  }
  public set ready(value: string) {
    this._ready = value;
  }
  public resetReady() {
    this._ready = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyInput() {
    return this._ready;
  }

  // ready_timeout_in_seconds - computed: true, optional: true, required: false
  private _readyTimeoutInSeconds?: number; 
  public get readyTimeoutInSeconds() {
    return this.getNumberAttribute('ready_timeout_in_seconds');
  }
  public set readyTimeoutInSeconds(value: number) {
    this._readyTimeoutInSeconds = value;
  }
  public resetReadyTimeoutInSeconds() {
    this._readyTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyTimeoutInSecondsInput() {
    return this._readyTimeoutInSeconds;
  }

  // validate - computed: true, optional: true, required: false
  private _validate?: string; 
  public get validate() {
    return this.getStringAttribute('validate');
  }
  public set validate(value: string) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // validate_timeout_in_seconds - computed: true, optional: true, required: false
  private _validateTimeoutInSeconds?: number; 
  public get validateTimeoutInSeconds() {
    return this.getNumberAttribute('validate_timeout_in_seconds');
  }
  public set validateTimeoutInSeconds(value: number) {
    this._validateTimeoutInSeconds = value;
  }
  public resetValidateTimeoutInSeconds() {
    this._validateTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateTimeoutInSecondsInput() {
    return this._validateTimeoutInSeconds;
  }
}
export interface LambdaMicrovmImageHooks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}
  */
  readonly microvmHooks?: LambdaMicrovmImageHooksMicrovmHooks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}
  */
  readonly microvmImageHooks?: LambdaMicrovmImageHooksMicrovmImageHooks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}
  */
  readonly port?: number;
}

export function lambdaMicrovmImageHooksToTerraform(struct?: LambdaMicrovmImageHooks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    microvm_hooks: lambdaMicrovmImageHooksMicrovmHooksToTerraform(struct!.microvmHooks),
    microvm_image_hooks: lambdaMicrovmImageHooksMicrovmImageHooksToTerraform(struct!.microvmImageHooks),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function lambdaMicrovmImageHooksToHclTerraform(struct?: LambdaMicrovmImageHooks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    microvm_hooks: {
      value: lambdaMicrovmImageHooksMicrovmHooksToHclTerraform(struct!.microvmHooks),
      isBlock: true,
      type: "struct",
      storageClassType: "LambdaMicrovmImageHooksMicrovmHooks",
    },
    microvm_image_hooks: {
      value: lambdaMicrovmImageHooksMicrovmImageHooksToHclTerraform(struct!.microvmImageHooks),
      isBlock: true,
      type: "struct",
      storageClassType: "LambdaMicrovmImageHooksMicrovmImageHooks",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaMicrovmImageHooksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaMicrovmImageHooks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._microvmHooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microvmHooks = this._microvmHooks?.internalValue;
    }
    if (this._microvmImageHooks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microvmImageHooks = this._microvmImageHooks?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaMicrovmImageHooks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._microvmHooks.internalValue = undefined;
      this._microvmImageHooks.internalValue = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._microvmHooks.internalValue = value.microvmHooks;
      this._microvmImageHooks.internalValue = value.microvmImageHooks;
      this._port = value.port;
    }
  }

  // microvm_hooks - computed: true, optional: true, required: false
  private _microvmHooks = new LambdaMicrovmImageHooksMicrovmHooksOutputReference(this, "microvm_hooks");
  public get microvmHooks() {
    return this._microvmHooks;
  }
  public putMicrovmHooks(value: LambdaMicrovmImageHooksMicrovmHooks) {
    this._microvmHooks.internalValue = value;
  }
  public resetMicrovmHooks() {
    this._microvmHooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microvmHooksInput() {
    return this._microvmHooks.internalValue;
  }

  // microvm_image_hooks - computed: true, optional: true, required: false
  private _microvmImageHooks = new LambdaMicrovmImageHooksMicrovmImageHooksOutputReference(this, "microvm_image_hooks");
  public get microvmImageHooks() {
    return this._microvmImageHooks;
  }
  public putMicrovmImageHooks(value: LambdaMicrovmImageHooksMicrovmImageHooks) {
    this._microvmImageHooks.internalValue = value;
  }
  public resetMicrovmImageHooks() {
    this._microvmImageHooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microvmImageHooksInput() {
    return this._microvmImageHooks.internalValue;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface LambdaMicrovmImageLoggingCloudwatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}
  */
  readonly logGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}
  */
  readonly logStream?: string;
}

export function lambdaMicrovmImageLoggingCloudwatchToTerraform(struct?: LambdaMicrovmImageLoggingCloudwatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_group: cdktn.stringToTerraform(struct!.logGroup),
    log_stream: cdktn.stringToTerraform(struct!.logStream),
  }
}


export function lambdaMicrovmImageLoggingCloudwatchToHclTerraform(struct?: LambdaMicrovmImageLoggingCloudwatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_stream: {
      value: cdktn.stringToHclTerraform(struct!.logStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaMicrovmImageLoggingCloudwatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaMicrovmImageLoggingCloudwatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._logStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStream = this._logStream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaMicrovmImageLoggingCloudwatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logGroup = undefined;
      this._logStream = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logGroup = value.logGroup;
      this._logStream = value.logStream;
    }
  }

  // log_group - computed: true, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }

  // log_stream - computed: true, optional: true, required: false
  private _logStream?: string; 
  public get logStream() {
    return this.getStringAttribute('log_stream');
  }
  public set logStream(value: string) {
    this._logStream = value;
  }
  public resetLogStream() {
    this._logStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamInput() {
    return this._logStream;
  }
}
export interface LambdaMicrovmImageLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}
  */
  readonly cloudwatch?: LambdaMicrovmImageLoggingCloudwatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
}

export function lambdaMicrovmImageLoggingToTerraform(struct?: LambdaMicrovmImageLogging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch: lambdaMicrovmImageLoggingCloudwatchToTerraform(struct!.cloudwatch),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
  }
}


export function lambdaMicrovmImageLoggingToHclTerraform(struct?: LambdaMicrovmImageLogging | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch: {
      value: lambdaMicrovmImageLoggingCloudwatchToHclTerraform(struct!.cloudwatch),
      isBlock: true,
      type: "struct",
      storageClassType: "LambdaMicrovmImageLoggingCloudwatch",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaMicrovmImageLoggingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaMicrovmImageLogging | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatch = this._cloudwatch?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaMicrovmImageLogging | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatch.internalValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatch.internalValue = value.cloudwatch;
      this._disabled = value.disabled;
    }
  }

  // cloudwatch - computed: true, optional: true, required: false
  private _cloudwatch = new LambdaMicrovmImageLoggingCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: LambdaMicrovmImageLoggingCloudwatch) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface LambdaMicrovmImageResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}
  */
  readonly minimumMemoryInMiB: number;
}

export function lambdaMicrovmImageResourcesToTerraform(struct?: LambdaMicrovmImageResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    minimum_memory_in_mi_b: cdktn.numberToTerraform(struct!.minimumMemoryInMiB),
  }
}


export function lambdaMicrovmImageResourcesToHclTerraform(struct?: LambdaMicrovmImageResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    minimum_memory_in_mi_b: {
      value: cdktn.numberToHclTerraform(struct!.minimumMemoryInMiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaMicrovmImageResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaMicrovmImageResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumMemoryInMiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumMemoryInMiB = this._minimumMemoryInMiB;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaMicrovmImageResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumMemoryInMiB = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumMemoryInMiB = value.minimumMemoryInMiB;
    }
  }

  // minimum_memory_in_mi_b - computed: false, optional: false, required: true
  private _minimumMemoryInMiB?: number; 
  public get minimumMemoryInMiB() {
    return this.getNumberAttribute('minimum_memory_in_mi_b');
  }
  public set minimumMemoryInMiB(value: number) {
    this._minimumMemoryInMiB = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumMemoryInMiBInput() {
    return this._minimumMemoryInMiB;
  }
}

export class LambdaMicrovmImageResourcesList extends cdktn.ComplexList {
  public internalValue? : LambdaMicrovmImageResources[] | cdktn.IResolvable

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
  public get(index: number): LambdaMicrovmImageResourcesOutputReference {
    return new LambdaMicrovmImageResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LambdaMicrovmImageTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}
  */
  readonly value?: string;
}

export function lambdaMicrovmImageTagsToTerraform(struct?: LambdaMicrovmImageTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lambdaMicrovmImageTagsToHclTerraform(struct?: LambdaMicrovmImageTags | cdktn.IResolvable): any {
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

export class LambdaMicrovmImageTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LambdaMicrovmImageTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LambdaMicrovmImageTags | cdktn.IResolvable | undefined) {
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

export class LambdaMicrovmImageTagsList extends cdktn.ComplexList {
  public internalValue? : LambdaMicrovmImageTags[] | cdktn.IResolvable

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
  public get(index: number): LambdaMicrovmImageTagsOutputReference {
    return new LambdaMicrovmImageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image awscc_lambda_microvm_image}
*/
export class LambdaMicrovmImage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lambda_microvm_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaMicrovmImage to import
  * @param importFromId The id of the existing LambdaMicrovmImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaMicrovmImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_microvm_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/lambda_microvm_image awscc_lambda_microvm_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaMicrovmImageConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaMicrovmImageConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lambda_microvm_image',
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
    this._additionalOsCapabilities = config.additionalOsCapabilities;
    this._baseImageArn = config.baseImageArn;
    this._baseImageVersion = config.baseImageVersion;
    this._buildRoleArn = config.buildRoleArn;
    this._codeArtifact.internalValue = config.codeArtifact;
    this._cpuConfigurations.internalValue = config.cpuConfigurations;
    this._description = config.description;
    this._egressNetworkConnectors = config.egressNetworkConnectors;
    this._environmentVariables.internalValue = config.environmentVariables;
    this._hooks.internalValue = config.hooks;
    this._logging.internalValue = config.logging;
    this._name = config.name;
    this._resources.internalValue = config.resources;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_os_capabilities - computed: false, optional: false, required: true
  private _additionalOsCapabilities?: string[]; 
  public get additionalOsCapabilities() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_os_capabilities'));
  }
  public set additionalOsCapabilities(value: string[]) {
    this._additionalOsCapabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalOsCapabilitiesInput() {
    return this._additionalOsCapabilities;
  }

  // base_image_arn - computed: false, optional: false, required: true
  private _baseImageArn?: string; 
  public get baseImageArn() {
    return this.getStringAttribute('base_image_arn');
  }
  public set baseImageArn(value: string) {
    this._baseImageArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageArnInput() {
    return this._baseImageArn;
  }

  // base_image_version - computed: false, optional: false, required: true
  private _baseImageVersion?: string; 
  public get baseImageVersion() {
    return this.getStringAttribute('base_image_version');
  }
  public set baseImageVersion(value: string) {
    this._baseImageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageVersionInput() {
    return this._baseImageVersion;
  }

  // build_role_arn - computed: false, optional: false, required: true
  private _buildRoleArn?: string; 
  public get buildRoleArn() {
    return this.getStringAttribute('build_role_arn');
  }
  public set buildRoleArn(value: string) {
    this._buildRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildRoleArnInput() {
    return this._buildRoleArn;
  }

  // code_artifact - computed: false, optional: false, required: true
  private _codeArtifact = new LambdaMicrovmImageCodeArtifactOutputReference(this, "code_artifact");
  public get codeArtifact() {
    return this._codeArtifact;
  }
  public putCodeArtifact(value: LambdaMicrovmImageCodeArtifact) {
    this._codeArtifact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeArtifactInput() {
    return this._codeArtifact.internalValue;
  }

  // cpu_configurations - computed: false, optional: false, required: true
  private _cpuConfigurations = new LambdaMicrovmImageCpuConfigurationsList(this, "cpu_configurations", true);
  public get cpuConfigurations() {
    return this._cpuConfigurations;
  }
  public putCpuConfigurations(value: LambdaMicrovmImageCpuConfigurations[] | cdktn.IResolvable) {
    this._cpuConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuConfigurationsInput() {
    return this._cpuConfigurations.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // egress_network_connectors - computed: false, optional: false, required: true
  private _egressNetworkConnectors?: string[]; 
  public get egressNetworkConnectors() {
    return cdktn.Fn.tolist(this.getListAttribute('egress_network_connectors'));
  }
  public set egressNetworkConnectors(value: string[]) {
    this._egressNetworkConnectors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNetworkConnectorsInput() {
    return this._egressNetworkConnectors;
  }

  // environment_variables - computed: false, optional: false, required: true
  private _environmentVariables = new LambdaMicrovmImageEnvironmentVariablesList(this, "environment_variables", true);
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public putEnvironmentVariables(value: LambdaMicrovmImageEnvironmentVariables[] | cdktn.IResolvable) {
    this._environmentVariables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables.internalValue;
  }

  // hooks - computed: false, optional: false, required: true
  private _hooks = new LambdaMicrovmImageHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: LambdaMicrovmImageHooks) {
    this._hooks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_arn - computed: true, optional: false, required: false
  public get imageArn() {
    return this.getStringAttribute('image_arn');
  }

  // latest_active_image_version - computed: true, optional: false, required: false
  public get latestActiveImageVersion() {
    return this.getStringAttribute('latest_active_image_version');
  }

  // latest_failed_image_version - computed: true, optional: false, required: false
  public get latestFailedImageVersion() {
    return this.getStringAttribute('latest_failed_image_version');
  }

  // logging - computed: false, optional: false, required: true
  private _logging = new LambdaMicrovmImageLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: LambdaMicrovmImageLogging) {
    this._logging.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
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

  // resources - computed: false, optional: false, required: true
  private _resources = new LambdaMicrovmImageResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: LambdaMicrovmImageResources[] | cdktn.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new LambdaMicrovmImageTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: LambdaMicrovmImageTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_os_capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._additionalOsCapabilities),
      base_image_arn: cdktn.stringToTerraform(this._baseImageArn),
      base_image_version: cdktn.stringToTerraform(this._baseImageVersion),
      build_role_arn: cdktn.stringToTerraform(this._buildRoleArn),
      code_artifact: lambdaMicrovmImageCodeArtifactToTerraform(this._codeArtifact.internalValue),
      cpu_configurations: cdktn.listMapper(lambdaMicrovmImageCpuConfigurationsToTerraform, false)(this._cpuConfigurations.internalValue),
      description: cdktn.stringToTerraform(this._description),
      egress_network_connectors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._egressNetworkConnectors),
      environment_variables: cdktn.listMapper(lambdaMicrovmImageEnvironmentVariablesToTerraform, false)(this._environmentVariables.internalValue),
      hooks: lambdaMicrovmImageHooksToTerraform(this._hooks.internalValue),
      logging: lambdaMicrovmImageLoggingToTerraform(this._logging.internalValue),
      name: cdktn.stringToTerraform(this._name),
      resources: cdktn.listMapper(lambdaMicrovmImageResourcesToTerraform, false)(this._resources.internalValue),
      tags: cdktn.listMapper(lambdaMicrovmImageTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_os_capabilities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._additionalOsCapabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      base_image_arn: {
        value: cdktn.stringToHclTerraform(this._baseImageArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_image_version: {
        value: cdktn.stringToHclTerraform(this._baseImageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_role_arn: {
        value: cdktn.stringToHclTerraform(this._buildRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_artifact: {
        value: lambdaMicrovmImageCodeArtifactToHclTerraform(this._codeArtifact.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaMicrovmImageCodeArtifact",
      },
      cpu_configurations: {
        value: cdktn.listMapperHcl(lambdaMicrovmImageCpuConfigurationsToHclTerraform, false)(this._cpuConfigurations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LambdaMicrovmImageCpuConfigurationsList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_network_connectors: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._egressNetworkConnectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      environment_variables: {
        value: cdktn.listMapperHcl(lambdaMicrovmImageEnvironmentVariablesToHclTerraform, false)(this._environmentVariables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LambdaMicrovmImageEnvironmentVariablesList",
      },
      hooks: {
        value: lambdaMicrovmImageHooksToHclTerraform(this._hooks.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaMicrovmImageHooks",
      },
      logging: {
        value: lambdaMicrovmImageLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaMicrovmImageLogging",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktn.listMapperHcl(lambdaMicrovmImageResourcesToHclTerraform, false)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LambdaMicrovmImageResourcesList",
      },
      tags: {
        value: cdktn.listMapperHcl(lambdaMicrovmImageTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LambdaMicrovmImageTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
