// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/synthetics_canary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSyntheticsCanaryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/synthetics_canary#id DataAwsccSyntheticsCanary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSyntheticsCanaryArtifactConfigS3Encryption {
}

export function dataAwsccSyntheticsCanaryArtifactConfigS3EncryptionToTerraform(struct?: DataAwsccSyntheticsCanaryArtifactConfigS3Encryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryArtifactConfigS3EncryptionToHclTerraform(struct?: DataAwsccSyntheticsCanaryArtifactConfigS3Encryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSyntheticsCanaryArtifactConfigS3Encryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryArtifactConfigS3Encryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccSyntheticsCanaryArtifactConfig {
}

export function dataAwsccSyntheticsCanaryArtifactConfigToTerraform(struct?: DataAwsccSyntheticsCanaryArtifactConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryArtifactConfigToHclTerraform(struct?: DataAwsccSyntheticsCanaryArtifactConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryArtifactConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSyntheticsCanaryArtifactConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryArtifactConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_encryption - computed: true, optional: false, required: false
  private _s3Encryption = new DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference(this, "s3_encryption");
  public get s3Encryption() {
    return this._s3Encryption;
  }
}
export interface DataAwsccSyntheticsCanaryBrowserConfigs {
}

export function dataAwsccSyntheticsCanaryBrowserConfigsToTerraform(struct?: DataAwsccSyntheticsCanaryBrowserConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryBrowserConfigsToHclTerraform(struct?: DataAwsccSyntheticsCanaryBrowserConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryBrowserConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSyntheticsCanaryBrowserConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryBrowserConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_type - computed: true, optional: false, required: false
  public get browserType() {
    return this.getStringAttribute('browser_type');
  }
}

export class DataAwsccSyntheticsCanaryBrowserConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSyntheticsCanaryBrowserConfigsOutputReference {
    return new DataAwsccSyntheticsCanaryBrowserConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSyntheticsCanaryCodeDependencies {
}

export function dataAwsccSyntheticsCanaryCodeDependenciesToTerraform(struct?: DataAwsccSyntheticsCanaryCodeDependencies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryCodeDependenciesToHclTerraform(struct?: DataAwsccSyntheticsCanaryCodeDependencies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryCodeDependenciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSyntheticsCanaryCodeDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryCodeDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccSyntheticsCanaryCodeDependenciesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSyntheticsCanaryCodeDependenciesOutputReference {
    return new DataAwsccSyntheticsCanaryCodeDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSyntheticsCanaryCode {
}

export function dataAwsccSyntheticsCanaryCodeToTerraform(struct?: DataAwsccSyntheticsCanaryCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryCodeToHclTerraform(struct?: DataAwsccSyntheticsCanaryCode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryCodeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSyntheticsCanaryCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blueprint_types - computed: true, optional: false, required: false
  public get blueprintTypes() {
    return this.getListAttribute('blueprint_types');
  }

  // dependencies - computed: true, optional: false, required: false
  private _dependencies = new DataAwsccSyntheticsCanaryCodeDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }

  // handler - computed: true, optional: false, required: false
  public get handler() {
    return this.getStringAttribute('handler');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_key - computed: true, optional: false, required: false
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }

  // s3_object_version - computed: true, optional: false, required: false
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // source_location_arn - computed: true, optional: false, required: false
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }
}
export interface DataAwsccSyntheticsCanaryRunConfig {
}

export function dataAwsccSyntheticsCanaryRunConfigToTerraform(struct?: DataAwsccSyntheticsCanaryRunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryRunConfigToHclTerraform(struct?: DataAwsccSyntheticsCanaryRunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryRunConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSyntheticsCanaryRunConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryRunConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_tracing - computed: true, optional: false, required: false
  public get activeTracing() {
    return this.getBooleanAttribute('active_tracing');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktn.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  public get ephemeralStorage() {
    return this.getNumberAttribute('ephemeral_storage');
  }

  // memory_in_mb - computed: true, optional: false, required: false
  public get memoryInMb() {
    return this.getNumberAttribute('memory_in_mb');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
}
export interface DataAwsccSyntheticsCanaryScheduleRetryConfig {
}

export function dataAwsccSyntheticsCanaryScheduleRetryConfigToTerraform(struct?: DataAwsccSyntheticsCanaryScheduleRetryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryScheduleRetryConfigToHclTerraform(struct?: DataAwsccSyntheticsCanaryScheduleRetryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSyntheticsCanaryScheduleRetryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryScheduleRetryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_retries - computed: true, optional: false, required: false
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
}
export interface DataAwsccSyntheticsCanarySchedule {
}

export function dataAwsccSyntheticsCanaryScheduleToTerraform(struct?: DataAwsccSyntheticsCanarySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryScheduleToHclTerraform(struct?: DataAwsccSyntheticsCanarySchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSyntheticsCanarySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanarySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getStringAttribute('duration_in_seconds');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // retry_config - computed: true, optional: false, required: false
  private _retryConfig = new DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference(this, "retry_config");
  public get retryConfig() {
    return this._retryConfig;
  }
}
export interface DataAwsccSyntheticsCanaryTags {
}

export function dataAwsccSyntheticsCanaryTagsToTerraform(struct?: DataAwsccSyntheticsCanaryTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryTagsToHclTerraform(struct?: DataAwsccSyntheticsCanaryTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSyntheticsCanaryTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryTags | undefined) {
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

export class DataAwsccSyntheticsCanaryTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSyntheticsCanaryTagsOutputReference {
    return new DataAwsccSyntheticsCanaryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots {
}

export function dataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsToTerraform(struct?: DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsToHclTerraform(struct?: DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ignore_coordinates - computed: true, optional: false, required: false
  public get ignoreCoordinates() {
    return this.getListAttribute('ignore_coordinates');
  }

  // screenshot_name - computed: true, optional: false, required: false
  public get screenshotName() {
    return this.getStringAttribute('screenshot_name');
  }
}

export class DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference {
    return new DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSyntheticsCanaryVisualReference {
}

export function dataAwsccSyntheticsCanaryVisualReferenceToTerraform(struct?: DataAwsccSyntheticsCanaryVisualReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryVisualReferenceToHclTerraform(struct?: DataAwsccSyntheticsCanaryVisualReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryVisualReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSyntheticsCanaryVisualReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryVisualReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_canary_run_id - computed: true, optional: false, required: false
  public get baseCanaryRunId() {
    return this.getStringAttribute('base_canary_run_id');
  }

  // base_screenshots - computed: true, optional: false, required: false
  private _baseScreenshots = new DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList(this, "base_screenshots", false);
  public get baseScreenshots() {
    return this._baseScreenshots;
  }

  // browser_type - computed: true, optional: false, required: false
  public get browserType() {
    return this.getStringAttribute('browser_type');
  }
}
export interface DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots {
}

export function dataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsToTerraform(struct?: DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsToHclTerraform(struct?: DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ignore_coordinates - computed: true, optional: false, required: false
  public get ignoreCoordinates() {
    return this.getListAttribute('ignore_coordinates');
  }

  // screenshot_name - computed: true, optional: false, required: false
  public get screenshotName() {
    return this.getStringAttribute('screenshot_name');
  }
}

export class DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference {
    return new DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSyntheticsCanaryVisualReferences {
}

export function dataAwsccSyntheticsCanaryVisualReferencesToTerraform(struct?: DataAwsccSyntheticsCanaryVisualReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryVisualReferencesToHclTerraform(struct?: DataAwsccSyntheticsCanaryVisualReferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryVisualReferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSyntheticsCanaryVisualReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryVisualReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_canary_run_id - computed: true, optional: false, required: false
  public get baseCanaryRunId() {
    return this.getStringAttribute('base_canary_run_id');
  }

  // base_screenshots - computed: true, optional: false, required: false
  private _baseScreenshots = new DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList(this, "base_screenshots", false);
  public get baseScreenshots() {
    return this._baseScreenshots;
  }

  // browser_type - computed: true, optional: false, required: false
  public get browserType() {
    return this.getStringAttribute('browser_type');
  }
}

export class DataAwsccSyntheticsCanaryVisualReferencesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSyntheticsCanaryVisualReferencesOutputReference {
    return new DataAwsccSyntheticsCanaryVisualReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSyntheticsCanaryVpcConfig {
}

export function dataAwsccSyntheticsCanaryVpcConfigToTerraform(struct?: DataAwsccSyntheticsCanaryVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSyntheticsCanaryVpcConfigToHclTerraform(struct?: DataAwsccSyntheticsCanaryVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSyntheticsCanaryVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSyntheticsCanaryVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSyntheticsCanaryVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv_6_allowed_for_dual_stack - computed: true, optional: false, required: false
  public get ipv6AllowedForDualStack() {
    return this.getBooleanAttribute('ipv_6_allowed_for_dual_stack');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/synthetics_canary awscc_synthetics_canary}
*/
export class DataAwsccSyntheticsCanary extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_synthetics_canary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSyntheticsCanary resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSyntheticsCanary to import
  * @param importFromId The id of the existing DataAwsccSyntheticsCanary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/synthetics_canary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSyntheticsCanary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_synthetics_canary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/synthetics_canary awscc_synthetics_canary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSyntheticsCanaryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSyntheticsCanaryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_synthetics_canary',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_config - computed: true, optional: false, required: false
  private _artifactConfig = new DataAwsccSyntheticsCanaryArtifactConfigOutputReference(this, "artifact_config");
  public get artifactConfig() {
    return this._artifactConfig;
  }

  // artifact_s3_location - computed: true, optional: false, required: false
  public get artifactS3Location() {
    return this.getStringAttribute('artifact_s3_location');
  }

  // browser_configs - computed: true, optional: false, required: false
  private _browserConfigs = new DataAwsccSyntheticsCanaryBrowserConfigsList(this, "browser_configs", false);
  public get browserConfigs() {
    return this._browserConfigs;
  }

  // canary_id - computed: true, optional: false, required: false
  public get canaryId() {
    return this.getStringAttribute('canary_id');
  }

  // code - computed: true, optional: false, required: false
  private _code = new DataAwsccSyntheticsCanaryCodeOutputReference(this, "code");
  public get code() {
    return this._code;
  }

  // delete_lambda_resources_on_canary_deletion - computed: true, optional: false, required: false
  public get deleteLambdaResourcesOnCanaryDeletion() {
    return this.getBooleanAttribute('delete_lambda_resources_on_canary_deletion');
  }

  // dry_run_and_update - computed: true, optional: false, required: false
  public get dryRunAndUpdate() {
    return this.getBooleanAttribute('dry_run_and_update');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // failure_retention_period - computed: true, optional: false, required: false
  public get failureRetentionPeriod() {
    return this.getNumberAttribute('failure_retention_period');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provisioned_resource_cleanup - computed: true, optional: false, required: false
  public get provisionedResourceCleanup() {
    return this.getStringAttribute('provisioned_resource_cleanup');
  }

  // resources_to_replicate_tags - computed: true, optional: false, required: false
  public get resourcesToReplicateTags() {
    return this.getListAttribute('resources_to_replicate_tags');
  }

  // run_config - computed: true, optional: false, required: false
  private _runConfig = new DataAwsccSyntheticsCanaryRunConfigOutputReference(this, "run_config");
  public get runConfig() {
    return this._runConfig;
  }

  // runtime_version - computed: true, optional: false, required: false
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAwsccSyntheticsCanaryScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // start_canary_after_creation - computed: true, optional: false, required: false
  public get startCanaryAfterCreation() {
    return this.getBooleanAttribute('start_canary_after_creation');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // success_retention_period - computed: true, optional: false, required: false
  public get successRetentionPeriod() {
    return this.getNumberAttribute('success_retention_period');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSyntheticsCanaryTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // visual_reference - computed: true, optional: false, required: false
  private _visualReference = new DataAwsccSyntheticsCanaryVisualReferenceOutputReference(this, "visual_reference");
  public get visualReference() {
    return this._visualReference;
  }

  // visual_references - computed: true, optional: false, required: false
  private _visualReferences = new DataAwsccSyntheticsCanaryVisualReferencesList(this, "visual_references", false);
  public get visualReferences() {
    return this._visualReferences;
  }

  // vpc_config - computed: true, optional: false, required: false
  private _vpcConfig = new DataAwsccSyntheticsCanaryVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
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
