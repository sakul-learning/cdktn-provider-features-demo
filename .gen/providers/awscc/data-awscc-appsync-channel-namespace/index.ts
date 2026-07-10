// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_channel_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAppsyncChannelNamespaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_channel_namespace#id DataAwsccAppsyncChannelNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig {
}

export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigToHclTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invoke_type - computed: true, optional: false, required: false
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }
}
export interface DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration {
}

export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationToHclTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_name - computed: true, optional: false, required: false
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }

  // lambda_config - computed: true, optional: false, required: false
  private _lambdaConfig = new DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationLambdaConfigOutputReference(this, "lambda_config");
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
}
export interface DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish {
}

export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishToTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishToHclTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublish | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior - computed: true, optional: false, required: false
  public get behavior() {
    return this.getStringAttribute('behavior');
  }

  // integration - computed: true, optional: false, required: false
  private _integration = new DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
}
export interface DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig {
}

export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigToHclTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invoke_type - computed: true, optional: false, required: false
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }
}
export interface DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration {
}

export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationToHclTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_name - computed: true, optional: false, required: false
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }

  // lambda_config - computed: true, optional: false, required: false
  private _lambdaConfig = new DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationLambdaConfigOutputReference(this, "lambda_config");
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
}
export interface DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe {
}

export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeToTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeToHclTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behavior - computed: true, optional: false, required: false
  public get behavior() {
    return this.getStringAttribute('behavior');
  }

  // integration - computed: true, optional: false, required: false
  private _integration = new DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
}
export interface DataAwsccAppsyncChannelNamespaceHandlerConfigs {
}

export function dataAwsccAppsyncChannelNamespaceHandlerConfigsToTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespaceHandlerConfigsToHclTerraform(struct?: DataAwsccAppsyncChannelNamespaceHandlerConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppsyncChannelNamespaceHandlerConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespaceHandlerConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_publish - computed: true, optional: false, required: false
  private _onPublish = new DataAwsccAppsyncChannelNamespaceHandlerConfigsOnPublishOutputReference(this, "on_publish");
  public get onPublish() {
    return this._onPublish;
  }

  // on_subscribe - computed: true, optional: false, required: false
  private _onSubscribe = new DataAwsccAppsyncChannelNamespaceHandlerConfigsOnSubscribeOutputReference(this, "on_subscribe");
  public get onSubscribe() {
    return this._onSubscribe;
  }
}
export interface DataAwsccAppsyncChannelNamespacePublishAuthModes {
}

export function dataAwsccAppsyncChannelNamespacePublishAuthModesToTerraform(struct?: DataAwsccAppsyncChannelNamespacePublishAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespacePublishAuthModesToHclTerraform(struct?: DataAwsccAppsyncChannelNamespacePublishAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAppsyncChannelNamespacePublishAuthModes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespacePublishAuthModes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
}

export class DataAwsccAppsyncChannelNamespacePublishAuthModesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference {
    return new DataAwsccAppsyncChannelNamespacePublishAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppsyncChannelNamespaceSubscribeAuthModes {
}

export function dataAwsccAppsyncChannelNamespaceSubscribeAuthModesToTerraform(struct?: DataAwsccAppsyncChannelNamespaceSubscribeAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespaceSubscribeAuthModesToHclTerraform(struct?: DataAwsccAppsyncChannelNamespaceSubscribeAuthModes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAppsyncChannelNamespaceSubscribeAuthModes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespaceSubscribeAuthModes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
}

export class DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference {
    return new DataAwsccAppsyncChannelNamespaceSubscribeAuthModesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppsyncChannelNamespaceTags {
}

export function dataAwsccAppsyncChannelNamespaceTagsToTerraform(struct?: DataAwsccAppsyncChannelNamespaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppsyncChannelNamespaceTagsToHclTerraform(struct?: DataAwsccAppsyncChannelNamespaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppsyncChannelNamespaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAppsyncChannelNamespaceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppsyncChannelNamespaceTags | undefined) {
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

export class DataAwsccAppsyncChannelNamespaceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppsyncChannelNamespaceTagsOutputReference {
    return new DataAwsccAppsyncChannelNamespaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_channel_namespace awscc_appsync_channel_namespace}
*/
export class DataAwsccAppsyncChannelNamespace extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appsync_channel_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAppsyncChannelNamespace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAppsyncChannelNamespace to import
  * @param importFromId The id of the existing DataAwsccAppsyncChannelNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_channel_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAppsyncChannelNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_channel_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/appsync_channel_namespace awscc_appsync_channel_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppsyncChannelNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppsyncChannelNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appsync_channel_namespace',
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

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // channel_namespace_arn - computed: true, optional: false, required: false
  public get channelNamespaceArn() {
    return this.getStringAttribute('channel_namespace_arn');
  }

  // code_handlers - computed: true, optional: false, required: false
  public get codeHandlers() {
    return this.getStringAttribute('code_handlers');
  }

  // code_s3_location - computed: true, optional: false, required: false
  public get codeS3Location() {
    return this.getStringAttribute('code_s3_location');
  }

  // handler_configs - computed: true, optional: false, required: false
  private _handlerConfigs = new DataAwsccAppsyncChannelNamespaceHandlerConfigsOutputReference(this, "handler_configs");
  public get handlerConfigs() {
    return this._handlerConfigs;
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

  // publish_auth_modes - computed: true, optional: false, required: false
  private _publishAuthModes = new DataAwsccAppsyncChannelNamespacePublishAuthModesList(this, "publish_auth_modes", false);
  public get publishAuthModes() {
    return this._publishAuthModes;
  }

  // subscribe_auth_modes - computed: true, optional: false, required: false
  private _subscribeAuthModes = new DataAwsccAppsyncChannelNamespaceSubscribeAuthModesList(this, "subscribe_auth_modes", false);
  public get subscribeAuthModes() {
    return this._subscribeAuthModes;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccAppsyncChannelNamespaceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
