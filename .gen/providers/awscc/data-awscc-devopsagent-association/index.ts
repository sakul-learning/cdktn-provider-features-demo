// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDevopsagentAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_association#id DataAwsccDevopsagentAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDevopsagentAssociationConfigurationAwsResources {
}

export function dataAwsccDevopsagentAssociationConfigurationAwsResourcesToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationAwsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationAwsResourcesToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationAwsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationAwsResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationAwsResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // resource_metadata - computed: true, optional: false, required: false
  public get resourceMetadata() {
    return this.getStringAttribute('resource_metadata');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataAwsccDevopsagentAssociationConfigurationAwsResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference {
    return new DataAwsccDevopsagentAssociationConfigurationAwsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationAwsTags {
}

export function dataAwsccDevopsagentAssociationConfigurationAwsTagsToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationAwsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationAwsTagsToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationAwsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationAwsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationAwsTags | undefined) {
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

export class DataAwsccDevopsagentAssociationConfigurationAwsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference {
    return new DataAwsccDevopsagentAssociationConfigurationAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationAws {
}

export function dataAwsccDevopsagentAssociationConfigurationAwsToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationAws): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationAwsToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationAws): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationAwsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_type - computed: true, optional: false, required: false
  public get accountType() {
    return this.getStringAttribute('account_type');
  }

  // assumable_role_arn - computed: true, optional: false, required: false
  public get assumableRoleArn() {
    return this.getStringAttribute('assumable_role_arn');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsccDevopsagentAssociationConfigurationAwsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDevopsagentAssociationConfigurationAwsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationAzure {
}

export function dataAwsccDevopsagentAssociationConfigurationAzureToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationAzure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationAzureToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationAzure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationAzureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationDynatrace {
}

export function dataAwsccDevopsagentAssociationConfigurationDynatraceToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationDynatraceToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationDynatrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_webhook_updates - computed: true, optional: false, required: false
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }

  // env_id - computed: true, optional: false, required: false
  public get envId() {
    return this.getStringAttribute('env_id');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationEventChannel {
}

export function dataAwsccDevopsagentAssociationConfigurationEventChannelToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationEventChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationEventChannelToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationEventChannel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationEventChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationEventChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_webhook_updates - computed: true, optional: false, required: false
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationGitHub {
}

export function dataAwsccDevopsagentAssociationConfigurationGitHubToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationGitHub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationGitHubToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationGitHub): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationGitHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationGitHub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_type - computed: true, optional: false, required: false
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationGitLab {
}

export function dataAwsccDevopsagentAssociationConfigurationGitLabToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationGitLab): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationGitLabToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationGitLab): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationGitLab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationGitLab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_webhook_updates - computed: true, optional: false, required: false
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }

  // instance_identifier - computed: true, optional: false, required: false
  public get instanceIdentifier() {
    return this.getStringAttribute('instance_identifier');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_path - computed: true, optional: false, required: false
  public get projectPath() {
    return this.getStringAttribute('project_path');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationMcpServer {
}

export function dataAwsccDevopsagentAssociationConfigurationMcpServerToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationMcpServerToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationMcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationMcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_webhook_updates - computed: true, optional: false, required: false
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tools - computed: true, optional: false, required: false
  public get tools() {
    return this.getListAttribute('tools');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog {
}

export function dataAwsccDevopsagentAssociationConfigurationMcpServerDatadogToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationMcpServerDatadogToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationMcpServerDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_webhook_updates - computed: true, optional: false, required: false
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana {
}

export function dataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationMcpServerGrafana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_webhook_updates - computed: true, optional: false, required: false
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // tools - computed: true, optional: false, required: false
  public get tools() {
    return this.getListAttribute('tools');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic {
}

export function dataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4 {
}

export function dataAwsccDevopsagentAssociationConfigurationMcpServerSigV4ToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationMcpServerSigV4ToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tools - computed: true, optional: false, required: false
  public get tools() {
    return this.getListAttribute('tools');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk {
}

export function dataAwsccDevopsagentAssociationConfigurationMcpServerSplunkToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationMcpServerSplunkToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationMcpServerSplunk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_webhook_updates - computed: true, optional: false, required: false
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationPagerDuty {
}

export function dataAwsccDevopsagentAssociationConfigurationPagerDutyToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationPagerDuty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationPagerDutyToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationPagerDuty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationPagerDuty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationPagerDuty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_email - computed: true, optional: false, required: false
  public get customerEmail() {
    return this.getStringAttribute('customer_email');
  }

  // enable_webhook_updates - computed: true, optional: false, required: false
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getListAttribute('services');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationServiceNow {
}

export function dataAwsccDevopsagentAssociationConfigurationServiceNowToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationServiceNowToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_webhook_updates - computed: true, optional: false, required: false
  public get enableWebhookUpdates() {
    return this.getBooleanAttribute('enable_webhook_updates');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget {
}

export function dataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget {
}

export function dataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // incident_response_target - computed: true, optional: false, required: false
  private _incidentResponseTarget = new DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(this, "incident_response_target");
  public get incidentResponseTarget() {
    return this._incidentResponseTarget;
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationSlack {
}

export function dataAwsccDevopsagentAssociationConfigurationSlackToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSlack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationSlackToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSlack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // transmission_target - computed: true, optional: false, required: false
  private _transmissionTarget = new DataAwsccDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(this, "transmission_target");
  public get transmissionTarget() {
    return this._transmissionTarget;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_name - computed: true, optional: false, required: false
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationSourceAwsResources {
}

export function dataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSourceAwsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSourceAwsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationSourceAwsResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationSourceAwsResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // resource_metadata - computed: true, optional: false, required: false
  public get resourceMetadata() {
    return this.getStringAttribute('resource_metadata');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference {
    return new DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationSourceAwsTags {
}

export function dataAwsccDevopsagentAssociationConfigurationSourceAwsTagsToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSourceAwsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationSourceAwsTagsToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSourceAwsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationSourceAwsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationSourceAwsTags | undefined) {
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

export class DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference {
    return new DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDevopsagentAssociationConfigurationSourceAws {
}

export function dataAwsccDevopsagentAssociationConfigurationSourceAwsToTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSourceAws): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationSourceAwsToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfigurationSourceAws): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfigurationSourceAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfigurationSourceAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_type - computed: true, optional: false, required: false
  public get accountType() {
    return this.getStringAttribute('account_type');
  }

  // assumable_role_arn - computed: true, optional: false, required: false
  public get assumableRoleArn() {
    return this.getStringAttribute('assumable_role_arn');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsccDevopsagentAssociationConfigurationSourceAwsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDevopsagentAssociationConfigurationSourceAwsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}
export interface DataAwsccDevopsagentAssociationConfiguration {
}

export function dataAwsccDevopsagentAssociationConfigurationToTerraform(struct?: DataAwsccDevopsagentAssociationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentAssociationConfigurationToHclTerraform(struct?: DataAwsccDevopsagentAssociationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentAssociationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentAssociationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentAssociationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new DataAwsccDevopsagentAssociationConfigurationAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new DataAwsccDevopsagentAssociationConfigurationAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }

  // dynatrace - computed: true, optional: false, required: false
  private _dynatrace = new DataAwsccDevopsagentAssociationConfigurationDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }

  // event_channel - computed: true, optional: false, required: false
  private _eventChannel = new DataAwsccDevopsagentAssociationConfigurationEventChannelOutputReference(this, "event_channel");
  public get eventChannel() {
    return this._eventChannel;
  }

  // git_hub - computed: true, optional: false, required: false
  private _gitHub = new DataAwsccDevopsagentAssociationConfigurationGitHubOutputReference(this, "git_hub");
  public get gitHub() {
    return this._gitHub;
  }

  // git_lab - computed: true, optional: false, required: false
  private _gitLab = new DataAwsccDevopsagentAssociationConfigurationGitLabOutputReference(this, "git_lab");
  public get gitLab() {
    return this._gitLab;
  }

  // mcp_server - computed: true, optional: false, required: false
  private _mcpServer = new DataAwsccDevopsagentAssociationConfigurationMcpServerOutputReference(this, "mcp_server");
  public get mcpServer() {
    return this._mcpServer;
  }

  // mcp_server_datadog - computed: true, optional: false, required: false
  private _mcpServerDatadog = new DataAwsccDevopsagentAssociationConfigurationMcpServerDatadogOutputReference(this, "mcp_server_datadog");
  public get mcpServerDatadog() {
    return this._mcpServerDatadog;
  }

  // mcp_server_grafana - computed: true, optional: false, required: false
  private _mcpServerGrafana = new DataAwsccDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(this, "mcp_server_grafana");
  public get mcpServerGrafana() {
    return this._mcpServerGrafana;
  }

  // mcp_server_new_relic - computed: true, optional: false, required: false
  private _mcpServerNewRelic = new DataAwsccDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(this, "mcp_server_new_relic");
  public get mcpServerNewRelic() {
    return this._mcpServerNewRelic;
  }

  // mcp_server_sig_v4 - computed: true, optional: false, required: false
  private _mcpServerSigV4 = new DataAwsccDevopsagentAssociationConfigurationMcpServerSigV4OutputReference(this, "mcp_server_sig_v4");
  public get mcpServerSigV4() {
    return this._mcpServerSigV4;
  }

  // mcp_server_splunk - computed: true, optional: false, required: false
  private _mcpServerSplunk = new DataAwsccDevopsagentAssociationConfigurationMcpServerSplunkOutputReference(this, "mcp_server_splunk");
  public get mcpServerSplunk() {
    return this._mcpServerSplunk;
  }

  // pager_duty - computed: true, optional: false, required: false
  private _pagerDuty = new DataAwsccDevopsagentAssociationConfigurationPagerDutyOutputReference(this, "pager_duty");
  public get pagerDuty() {
    return this._pagerDuty;
  }

  // service_now - computed: true, optional: false, required: false
  private _serviceNow = new DataAwsccDevopsagentAssociationConfigurationServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }

  // slack - computed: true, optional: false, required: false
  private _slack = new DataAwsccDevopsagentAssociationConfigurationSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }

  // source_aws - computed: true, optional: false, required: false
  private _sourceAws = new DataAwsccDevopsagentAssociationConfigurationSourceAwsOutputReference(this, "source_aws");
  public get sourceAws() {
    return this._sourceAws;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_association awscc_devopsagent_association}
*/
export class DataAwsccDevopsagentAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_devopsagent_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDevopsagentAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDevopsagentAssociation to import
  * @param importFromId The id of the existing DataAwsccDevopsagentAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDevopsagentAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsagent_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_association awscc_devopsagent_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDevopsagentAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDevopsagentAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_devopsagent_association',
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

  // agent_space_id - computed: true, optional: false, required: false
  public get agentSpaceId() {
    return this.getStringAttribute('agent_space_id');
  }

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccDevopsagentAssociationConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
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

  // linked_association_ids - computed: true, optional: false, required: false
  public get linkedAssociationIds() {
    return this.getListAttribute('linked_association_ids');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
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
