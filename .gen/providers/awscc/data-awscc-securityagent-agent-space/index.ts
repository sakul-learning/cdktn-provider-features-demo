// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/securityagent_agent_space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSecurityagentAgentSpaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/securityagent_agent_space#id DataAwsccSecurityagentAgentSpace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs {
}

export function dataAwsccSecurityagentAgentSpaceAwsResourcesVpcsToTerraform(struct?: DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceAwsResourcesVpcsToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_arns - computed: true, optional: false, required: false
  public get securityGroupArns() {
    return this.getListAttribute('security_group_arns');
  }

  // subnet_arns - computed: true, optional: false, required: false
  public get subnetArns() {
    return this.getListAttribute('subnet_arns');
  }

  // vpc_arn - computed: true, optional: false, required: false
  public get vpcArn() {
    return this.getStringAttribute('vpc_arn');
  }
}

export class DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference {
    return new DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityagentAgentSpaceAwsResources {
}

export function dataAwsccSecurityagentAgentSpaceAwsResourcesToTerraform(struct?: DataAwsccSecurityagentAgentSpaceAwsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceAwsResourcesToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceAwsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceAwsResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceAwsResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iam_roles - computed: true, optional: false, required: false
  public get iamRoles() {
    return this.getListAttribute('iam_roles');
  }

  // lambda_function_arns - computed: true, optional: false, required: false
  public get lambdaFunctionArns() {
    return this.getListAttribute('lambda_function_arns');
  }

  // log_groups - computed: true, optional: false, required: false
  public get logGroups() {
    return this.getListAttribute('log_groups');
  }

  // s3_buckets - computed: true, optional: false, required: false
  public get s3Buckets() {
    return this.getListAttribute('s3_buckets');
  }

  // secret_arns - computed: true, optional: false, required: false
  public get secretArns() {
    return this.getListAttribute('secret_arns');
  }

  // vpcs - computed: true, optional: false, required: false
  private _vpcs = new DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList(this, "vpcs", false);
  public get vpcs() {
    return this._vpcs;
  }
}
export interface DataAwsccSecurityagentAgentSpaceCodeReviewSettings {
}

export function dataAwsccSecurityagentAgentSpaceCodeReviewSettingsToTerraform(struct?: DataAwsccSecurityagentAgentSpaceCodeReviewSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceCodeReviewSettingsToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceCodeReviewSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceCodeReviewSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceCodeReviewSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // controls_scanning - computed: true, optional: false, required: false
  public get controlsScanning() {
    return this.getBooleanAttribute('controls_scanning');
  }

  // general_purpose_scanning - computed: true, optional: false, required: false
  public get generalPurposeScanning() {
    return this.getBooleanAttribute('general_purpose_scanning');
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // leave_comments - computed: true, optional: false, required: false
  public get leaveComments() {
    return this.getBooleanAttribute('leave_comments');
  }

  // remediate_code - computed: true, optional: false, required: false
  public get remediateCode() {
    return this.getBooleanAttribute('remediate_code');
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // workspace - computed: true, optional: false, required: false
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_document - computed: true, optional: false, required: false
  public get createDocument() {
    return this.getBooleanAttribute('create_document');
  }

  // fetch_document - computed: true, optional: false, required: false
  public get fetchDocument() {
    return this.getBooleanAttribute('fetch_document');
  }

  // update_document - computed: true, optional: false, required: false
  public get updateDocument() {
    return this.getBooleanAttribute('update_document');
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // page_id - computed: true, optional: false, required: false
  public get pageId() {
    return this.getStringAttribute('page_id');
  }

  // space_key - computed: true, optional: false, required: false
  public get spaceKey() {
    return this.getStringAttribute('space_key');
  }

  // space_title - computed: true, optional: false, required: false
  public get spaceTitle() {
    return this.getStringAttribute('space_title');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // leave_comments - computed: true, optional: false, required: false
  public get leaveComments() {
    return this.getBooleanAttribute('leave_comments');
  }

  // remediate_code - computed: true, optional: false, required: false
  public get remediateCode() {
    return this.getBooleanAttribute('remediate_code');
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // leave_comments - computed: true, optional: false, required: false
  public get leaveComments() {
    return this.getBooleanAttribute('leave_comments');
  }

  // remediate_code - computed: true, optional: false, required: false
  public get remediateCode() {
    return this.getBooleanAttribute('remediate_code');
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bitbucket_capabilities - computed: true, optional: false, required: false
  private _bitbucketCapabilities = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference(this, "bitbucket_capabilities");
  public get bitbucketCapabilities() {
    return this._bitbucketCapabilities;
  }

  // bitbucket_repository - computed: true, optional: false, required: false
  private _bitbucketRepository = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference(this, "bitbucket_repository");
  public get bitbucketRepository() {
    return this._bitbucketRepository;
  }

  // confluence_capabilities - computed: true, optional: false, required: false
  private _confluenceCapabilities = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference(this, "confluence_capabilities");
  public get confluenceCapabilities() {
    return this._confluenceCapabilities;
  }

  // confluence_document - computed: true, optional: false, required: false
  private _confluenceDocument = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference(this, "confluence_document");
  public get confluenceDocument() {
    return this._confluenceDocument;
  }

  // git_hub_capabilities - computed: true, optional: false, required: false
  private _gitHubCapabilities = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference(this, "git_hub_capabilities");
  public get gitHubCapabilities() {
    return this._gitHubCapabilities;
  }

  // git_hub_repository - computed: true, optional: false, required: false
  private _gitHubRepository = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference(this, "git_hub_repository");
  public get gitHubRepository() {
    return this._gitHubRepository;
  }

  // git_lab_capabilities - computed: true, optional: false, required: false
  private _gitLabCapabilities = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference(this, "git_lab_capabilities");
  public get gitLabCapabilities() {
    return this._gitLabCapabilities;
  }

  // git_lab_repository - computed: true, optional: false, required: false
  private _gitLabRepository = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference(this, "git_lab_repository");
  public get gitLabRepository() {
    return this._gitLabRepository;
  }
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference {
    return new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityagentAgentSpaceIntegratedResources {
}

export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesToTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceIntegratedResourcesToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceIntegratedResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityagentAgentSpaceIntegratedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceIntegratedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration - computed: true, optional: false, required: false
  public get integration() {
    return this.getStringAttribute('integration');
  }

  // provider_resources - computed: true, optional: false, required: false
  private _providerResources = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList(this, "provider_resources", false);
  public get providerResources() {
    return this._providerResources;
  }
}

export class DataAwsccSecurityagentAgentSpaceIntegratedResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference {
    return new DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccSecurityagentAgentSpaceTags {
}

export function dataAwsccSecurityagentAgentSpaceTagsToTerraform(struct?: DataAwsccSecurityagentAgentSpaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccSecurityagentAgentSpaceTagsToHclTerraform(struct?: DataAwsccSecurityagentAgentSpaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccSecurityagentAgentSpaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccSecurityagentAgentSpaceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccSecurityagentAgentSpaceTags | undefined) {
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

export class DataAwsccSecurityagentAgentSpaceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccSecurityagentAgentSpaceTagsOutputReference {
    return new DataAwsccSecurityagentAgentSpaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/securityagent_agent_space awscc_securityagent_agent_space}
*/
export class DataAwsccSecurityagentAgentSpace extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityagent_agent_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSecurityagentAgentSpace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSecurityagentAgentSpace to import
  * @param importFromId The id of the existing DataAwsccSecurityagentAgentSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/securityagent_agent_space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSecurityagentAgentSpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityagent_agent_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/securityagent_agent_space awscc_securityagent_agent_space} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSecurityagentAgentSpaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSecurityagentAgentSpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityagent_agent_space',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // aws_resources - computed: true, optional: false, required: false
  private _awsResources = new DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference(this, "aws_resources");
  public get awsResources() {
    return this._awsResources;
  }

  // code_review_settings - computed: true, optional: false, required: false
  private _codeReviewSettings = new DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference(this, "code_review_settings");
  public get codeReviewSettings() {
    return this._codeReviewSettings;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // integrated_resources - computed: true, optional: false, required: false
  private _integratedResources = new DataAwsccSecurityagentAgentSpaceIntegratedResourcesList(this, "integrated_resources", false);
  public get integratedResources() {
    return this._integratedResources;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccSecurityagentAgentSpaceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // target_domain_ids - computed: true, optional: false, required: false
  public get targetDomainIds() {
    return this.getListAttribute('target_domain_ids');
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
