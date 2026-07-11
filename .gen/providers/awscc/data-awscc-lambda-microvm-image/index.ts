// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_microvm_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLambdaMicrovmImageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_microvm_image#id DataAwsccLambdaMicrovmImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLambdaMicrovmImageCodeArtifact {
}

export function dataAwsccLambdaMicrovmImageCodeArtifactToTerraform(struct?: DataAwsccLambdaMicrovmImageCodeArtifact): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageCodeArtifactToHclTerraform(struct?: DataAwsccLambdaMicrovmImageCodeArtifact): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageCodeArtifactOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageCodeArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageCodeArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataAwsccLambdaMicrovmImageCpuConfigurations {
}

export function dataAwsccLambdaMicrovmImageCpuConfigurationsToTerraform(struct?: DataAwsccLambdaMicrovmImageCpuConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageCpuConfigurationsToHclTerraform(struct?: DataAwsccLambdaMicrovmImageCpuConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageCpuConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageCpuConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
}

export class DataAwsccLambdaMicrovmImageCpuConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference {
    return new DataAwsccLambdaMicrovmImageCpuConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLambdaMicrovmImageEnvironmentVariables {
}

export function dataAwsccLambdaMicrovmImageEnvironmentVariablesToTerraform(struct?: DataAwsccLambdaMicrovmImageEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageEnvironmentVariablesToHclTerraform(struct?: DataAwsccLambdaMicrovmImageEnvironmentVariables): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageEnvironmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageEnvironmentVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLambdaMicrovmImageEnvironmentVariablesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference {
    return new DataAwsccLambdaMicrovmImageEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLambdaMicrovmImageHooksMicrovmHooks {
}

export function dataAwsccLambdaMicrovmImageHooksMicrovmHooksToTerraform(struct?: DataAwsccLambdaMicrovmImageHooksMicrovmHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageHooksMicrovmHooksToHclTerraform(struct?: DataAwsccLambdaMicrovmImageHooksMicrovmHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageHooksMicrovmHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageHooksMicrovmHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resume - computed: true, optional: false, required: false
  public get resume() {
    return this.getStringAttribute('resume');
  }

  // resume_timeout_in_seconds - computed: true, optional: false, required: false
  public get resumeTimeoutInSeconds() {
    return this.getNumberAttribute('resume_timeout_in_seconds');
  }

  // run - computed: true, optional: false, required: false
  public get run() {
    return this.getStringAttribute('run');
  }

  // run_timeout_in_seconds - computed: true, optional: false, required: false
  public get runTimeoutInSeconds() {
    return this.getNumberAttribute('run_timeout_in_seconds');
  }

  // suspend - computed: true, optional: false, required: false
  public get suspend() {
    return this.getStringAttribute('suspend');
  }

  // suspend_timeout_in_seconds - computed: true, optional: false, required: false
  public get suspendTimeoutInSeconds() {
    return this.getNumberAttribute('suspend_timeout_in_seconds');
  }

  // terminate - computed: true, optional: false, required: false
  public get terminate() {
    return this.getStringAttribute('terminate');
  }

  // terminate_timeout_in_seconds - computed: true, optional: false, required: false
  public get terminateTimeoutInSeconds() {
    return this.getNumberAttribute('terminate_timeout_in_seconds');
  }
}
export interface DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks {
}

export function dataAwsccLambdaMicrovmImageHooksMicrovmImageHooksToTerraform(struct?: DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageHooksMicrovmImageHooksToHclTerraform(struct?: DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageHooksMicrovmImageHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getStringAttribute('ready');
  }

  // ready_timeout_in_seconds - computed: true, optional: false, required: false
  public get readyTimeoutInSeconds() {
    return this.getNumberAttribute('ready_timeout_in_seconds');
  }

  // validate - computed: true, optional: false, required: false
  public get validate() {
    return this.getStringAttribute('validate');
  }

  // validate_timeout_in_seconds - computed: true, optional: false, required: false
  public get validateTimeoutInSeconds() {
    return this.getNumberAttribute('validate_timeout_in_seconds');
  }
}
export interface DataAwsccLambdaMicrovmImageHooks {
}

export function dataAwsccLambdaMicrovmImageHooksToTerraform(struct?: DataAwsccLambdaMicrovmImageHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageHooksToHclTerraform(struct?: DataAwsccLambdaMicrovmImageHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageHooksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // microvm_hooks - computed: true, optional: false, required: false
  private _microvmHooks = new DataAwsccLambdaMicrovmImageHooksMicrovmHooksOutputReference(this, "microvm_hooks");
  public get microvmHooks() {
    return this._microvmHooks;
  }

  // microvm_image_hooks - computed: true, optional: false, required: false
  private _microvmImageHooks = new DataAwsccLambdaMicrovmImageHooksMicrovmImageHooksOutputReference(this, "microvm_image_hooks");
  public get microvmImageHooks() {
    return this._microvmImageHooks;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccLambdaMicrovmImageLoggingCloudwatch {
}

export function dataAwsccLambdaMicrovmImageLoggingCloudwatchToTerraform(struct?: DataAwsccLambdaMicrovmImageLoggingCloudwatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageLoggingCloudwatchToHclTerraform(struct?: DataAwsccLambdaMicrovmImageLoggingCloudwatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageLoggingCloudwatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageLoggingCloudwatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_group - computed: true, optional: false, required: false
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }

  // log_stream - computed: true, optional: false, required: false
  public get logStream() {
    return this.getStringAttribute('log_stream');
  }
}
export interface DataAwsccLambdaMicrovmImageLogging {
}

export function dataAwsccLambdaMicrovmImageLoggingToTerraform(struct?: DataAwsccLambdaMicrovmImageLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageLoggingToHclTerraform(struct?: DataAwsccLambdaMicrovmImageLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageLoggingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch - computed: true, optional: false, required: false
  private _cloudwatch = new DataAwsccLambdaMicrovmImageLoggingCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export interface DataAwsccLambdaMicrovmImageResources {
}

export function dataAwsccLambdaMicrovmImageResourcesToTerraform(struct?: DataAwsccLambdaMicrovmImageResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageResourcesToHclTerraform(struct?: DataAwsccLambdaMicrovmImageResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // minimum_memory_in_mi_b - computed: true, optional: false, required: false
  public get minimumMemoryInMiB() {
    return this.getNumberAttribute('minimum_memory_in_mi_b');
  }
}

export class DataAwsccLambdaMicrovmImageResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaMicrovmImageResourcesOutputReference {
    return new DataAwsccLambdaMicrovmImageResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLambdaMicrovmImageTags {
}

export function dataAwsccLambdaMicrovmImageTagsToTerraform(struct?: DataAwsccLambdaMicrovmImageTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaMicrovmImageTagsToHclTerraform(struct?: DataAwsccLambdaMicrovmImageTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaMicrovmImageTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccLambdaMicrovmImageTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaMicrovmImageTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccLambdaMicrovmImageTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaMicrovmImageTagsOutputReference {
    return new DataAwsccLambdaMicrovmImageTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_microvm_image awscc_lambda_microvm_image}
*/
export class DataAwsccLambdaMicrovmImage extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lambda_microvm_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLambdaMicrovmImage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLambdaMicrovmImage to import
  * @param importFromId The id of the existing DataAwsccLambdaMicrovmImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_microvm_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLambdaMicrovmImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_microvm_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_microvm_image awscc_lambda_microvm_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLambdaMicrovmImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLambdaMicrovmImageConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_os_capabilities - computed: true, optional: false, required: false
  public get additionalOsCapabilities() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_os_capabilities'));
  }

  // base_image_arn - computed: true, optional: false, required: false
  public get baseImageArn() {
    return this.getStringAttribute('base_image_arn');
  }

  // base_image_version - computed: true, optional: false, required: false
  public get baseImageVersion() {
    return this.getStringAttribute('base_image_version');
  }

  // build_role_arn - computed: true, optional: false, required: false
  public get buildRoleArn() {
    return this.getStringAttribute('build_role_arn');
  }

  // code_artifact - computed: true, optional: false, required: false
  private _codeArtifact = new DataAwsccLambdaMicrovmImageCodeArtifactOutputReference(this, "code_artifact");
  public get codeArtifact() {
    return this._codeArtifact;
  }

  // cpu_configurations - computed: true, optional: false, required: false
  private _cpuConfigurations = new DataAwsccLambdaMicrovmImageCpuConfigurationsList(this, "cpu_configurations", true);
  public get cpuConfigurations() {
    return this._cpuConfigurations;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // egress_network_connectors - computed: true, optional: false, required: false
  public get egressNetworkConnectors() {
    return cdktn.Fn.tolist(this.getListAttribute('egress_network_connectors'));
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new DataAwsccLambdaMicrovmImageEnvironmentVariablesList(this, "environment_variables", true);
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // hooks - computed: true, optional: false, required: false
  private _hooks = new DataAwsccLambdaMicrovmImageHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
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

  // logging - computed: true, optional: false, required: false
  private _logging = new DataAwsccLambdaMicrovmImageLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsccLambdaMicrovmImageResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccLambdaMicrovmImageTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
