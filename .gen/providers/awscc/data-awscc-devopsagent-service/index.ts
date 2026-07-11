// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDevopsagentServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_service#id DataAwsccDevopsagentService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // web_identity_role_arn - computed: true, optional: false, required: false
  public get webIdentityRoleArn() {
    return this.getStringAttribute('web_identity_role_arn');
  }

  // web_identity_token_audiences - computed: true, optional: false, required: false
  public get webIdentityTokenAudiences() {
    return this.getListAttribute('web_identity_token_audiences');
  }
}
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_urn - computed: true, optional: false, required: false
  public get accountUrn() {
    return this.getStringAttribute('account_urn');
  }
}
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // target_url - computed: true, optional: false, required: false
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }

  // token_type - computed: true, optional: false, required: false
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
}
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_header - computed: true, optional: false, required: false
  public get apiKeyHeader() {
    return this.getStringAttribute('api_key_header');
  }

  // authorization_method - computed: true, optional: false, required: false
  public get authorizationMethod() {
    return this.getStringAttribute('authorization_method');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_method - computed: true, optional: false, required: false
  public get authorizationMethod() {
    return this.getStringAttribute('authorization_method');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4ToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4ToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_headers - computed: true, optional: false, required: false
  private _customHeaders = new cdktn.StringMap(this, "custom_headers");
  public get customHeaders() {
    return this._customHeaders;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_header - computed: true, optional: false, required: false
  public get apiKeyHeader() {
    return this.getStringAttribute('api_key_header');
  }

  // authorization_method - computed: true, optional: false, required: false
  public get authorizationMethod() {
    return this.getStringAttribute('authorization_method');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDuty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}
export interface DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccDevopsagentServiceAdditionalServiceDetails {
}

export function dataAwsccDevopsagentServiceAdditionalServiceDetailsToTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceAdditionalServiceDetailsToHclTerraform(struct?: DataAwsccDevopsagentServiceAdditionalServiceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceAdditionalServiceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceAdditionalServiceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_identity - computed: true, optional: false, required: false
  private _azureIdentity = new DataAwsccDevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference(this, "azure_identity");
  public get azureIdentity() {
    return this._azureIdentity;
  }

  // dynatrace - computed: true, optional: false, required: false
  private _dynatrace = new DataAwsccDevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }

  // git_lab - computed: true, optional: false, required: false
  private _gitLab = new DataAwsccDevopsagentServiceAdditionalServiceDetailsGitLabOutputReference(this, "git_lab");
  public get gitLab() {
    return this._gitLab;
  }

  // mcp_server - computed: true, optional: false, required: false
  private _mcpServer = new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference(this, "mcp_server");
  public get mcpServer() {
    return this._mcpServer;
  }

  // mcp_server_grafana - computed: true, optional: false, required: false
  private _mcpServerGrafana = new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference(this, "mcp_server_grafana");
  public get mcpServerGrafana() {
    return this._mcpServerGrafana;
  }

  // mcp_server_new_relic - computed: true, optional: false, required: false
  private _mcpServerNewRelic = new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference(this, "mcp_server_new_relic");
  public get mcpServerNewRelic() {
    return this._mcpServerNewRelic;
  }

  // mcp_server_sig_v4 - computed: true, optional: false, required: false
  private _mcpServerSigV4 = new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference(this, "mcp_server_sig_v4");
  public get mcpServerSigV4() {
    return this._mcpServerSigV4;
  }

  // mcp_server_splunk - computed: true, optional: false, required: false
  private _mcpServerSplunk = new DataAwsccDevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference(this, "mcp_server_splunk");
  public get mcpServerSplunk() {
    return this._mcpServerSplunk;
  }

  // pager_duty - computed: true, optional: false, required: false
  private _pagerDuty = new DataAwsccDevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference(this, "pager_duty");
  public get pagerDuty() {
    return this._pagerDuty;
  }

  // service_now - computed: true, optional: false, required: false
  private _serviceNow = new DataAwsccDevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsAzureIdentity {
}

export function dataAwsccDevopsagentServiceServiceDetailsAzureIdentityToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsAzureIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsAzureIdentityToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsAzureIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsAzureIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsAzureIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // web_identity_role_arn - computed: true, optional: false, required: false
  public get webIdentityRoleArn() {
    return this.getStringAttribute('web_identity_role_arn');
  }

  // web_identity_token_audiences - computed: true, optional: false, required: false
  public get webIdentityTokenAudiences() {
    return this.getListAttribute('web_identity_token_audiences');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials {
}

export function dataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // exchange_parameters - computed: true, optional: false, required: false
  public get exchangeParameters() {
    return this.getStringAttribute('exchange_parameters');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig {
}

export function dataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // o_auth_client_credentials - computed: true, optional: false, required: false
  private _oAuthClientCredentials = new DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference(this, "o_auth_client_credentials");
  public get oAuthClientCredentials() {
    return this._oAuthClientCredentials;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsDynatrace {
}

export function dataAwsccDevopsagentServiceServiceDetailsDynatraceToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsDynatraceToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsDynatrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_urn - computed: true, optional: false, required: false
  public get accountUrn() {
    return this.getStringAttribute('account_urn');
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccDevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsGitLab {
}

export function dataAwsccDevopsagentServiceServiceDetailsGitLabToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsGitLab): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsGitLabToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsGitLab): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsGitLab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsGitLab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // target_url - computed: true, optional: false, required: false
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }

  // token_type - computed: true, optional: false, required: false
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }

  // token_value - computed: true, optional: false, required: false
  public get tokenValue() {
    return this.getStringAttribute('token_value');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_header - computed: true, optional: false, required: false
  public get apiKeyHeader() {
    return this.getStringAttribute('api_key_header');
  }

  // api_key_name - computed: true, optional: false, required: false
  public get apiKeyName() {
    return this.getStringAttribute('api_key_name');
  }

  // api_key_value - computed: true, optional: false, required: false
  public get apiKeyValue() {
    return this.getStringAttribute('api_key_value');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // exchange_parameters - computed: true, optional: false, required: false
  public get exchangeParameters() {
    return this.getStringAttribute('exchange_parameters');
  }

  // exchange_url - computed: true, optional: false, required: false
  public get exchangeUrl() {
    return this.getStringAttribute('exchange_url');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  private _apiKey = new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }

  // o_auth_client_credentials - computed: true, optional: false, required: false
  private _oAuthClientCredentials = new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference(this, "o_auth_client_credentials");
  public get oAuthClientCredentials() {
    return this._oAuthClientCredentials;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServer {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccDevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_header - computed: true, optional: false, required: false
  public get authorizationHeader() {
    return this.getStringAttribute('authorization_header');
  }

  // token_name - computed: true, optional: false, required: false
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }

  // token_value - computed: true, optional: false, required: false
  public get tokenValue() {
    return this.getStringAttribute('token_value');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bearer_token - computed: true, optional: false, required: false
  private _bearerToken = new DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference(this, "bearer_token");
  public get bearerToken() {
    return this._bearerToken;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey | undefined) {
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

  // alert_policy_ids - computed: true, optional: false, required: false
  public get alertPolicyIds() {
    return this.getListAttribute('alert_policy_ids');
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // application_ids - computed: true, optional: false, required: false
  public get applicationIds() {
    return this.getListAttribute('application_ids');
  }

  // entity_guids - computed: true, optional: false, required: false
  public get entityGuids() {
    return this.getListAttribute('entity_guids');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  private _apiKey = new DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_headers - computed: true, optional: false, required: false
  private _customHeaders = new cdktn.StringMap(this, "custom_headers");
  public get customHeaders() {
    return this._customHeaders;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4 {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4ToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4ToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_header - computed: true, optional: false, required: false
  public get authorizationHeader() {
    return this.getStringAttribute('authorization_header');
  }

  // token_name - computed: true, optional: false, required: false
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }

  // token_value - computed: true, optional: false, required: false
  public get tokenValue() {
    return this.getStringAttribute('token_value');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bearer_token - computed: true, optional: false, required: false
  private _bearerToken = new DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference(this, "bearer_token");
  public get bearerToken() {
    return this._bearerToken;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk {
}

export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
export interface DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials {
}

export function dataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // exchange_parameters - computed: true, optional: false, required: false
  public get exchangeParameters() {
    return this.getStringAttribute('exchange_parameters');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig {
}

export function dataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // o_auth_client_credentials - computed: true, optional: false, required: false
  private _oAuthClientCredentials = new DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference(this, "o_auth_client_credentials");
  public get oAuthClientCredentials() {
    return this._oAuthClientCredentials;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsPagerDuty {
}

export function dataAwsccDevopsagentServiceServiceDetailsPagerDutyToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsPagerDuty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsPagerDutyToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsPagerDuty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsPagerDuty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsPagerDuty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccDevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials {
}

export function dataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // exchange_parameters - computed: true, optional: false, required: false
  public get exchangeParameters() {
    return this.getStringAttribute('exchange_parameters');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig {
}

export function dataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // o_auth_client_credentials - computed: true, optional: false, required: false
  private _oAuthClientCredentials = new DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference(this, "o_auth_client_credentials");
  public get oAuthClientCredentials() {
    return this._oAuthClientCredentials;
  }
}
export interface DataAwsccDevopsagentServiceServiceDetailsServiceNow {
}

export function dataAwsccDevopsagentServiceServiceDetailsServiceNowToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsServiceNowToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetailsServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetailsServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetailsServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccDevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
}
export interface DataAwsccDevopsagentServiceServiceDetails {
}

export function dataAwsccDevopsagentServiceServiceDetailsToTerraform(struct?: DataAwsccDevopsagentServiceServiceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceServiceDetailsToHclTerraform(struct?: DataAwsccDevopsagentServiceServiceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceServiceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDevopsagentServiceServiceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceServiceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_identity - computed: true, optional: false, required: false
  private _azureIdentity = new DataAwsccDevopsagentServiceServiceDetailsAzureIdentityOutputReference(this, "azure_identity");
  public get azureIdentity() {
    return this._azureIdentity;
  }

  // dynatrace - computed: true, optional: false, required: false
  private _dynatrace = new DataAwsccDevopsagentServiceServiceDetailsDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }

  // git_lab - computed: true, optional: false, required: false
  private _gitLab = new DataAwsccDevopsagentServiceServiceDetailsGitLabOutputReference(this, "git_lab");
  public get gitLab() {
    return this._gitLab;
  }

  // mcp_server - computed: true, optional: false, required: false
  private _mcpServer = new DataAwsccDevopsagentServiceServiceDetailsMcpServerOutputReference(this, "mcp_server");
  public get mcpServer() {
    return this._mcpServer;
  }

  // mcp_server_grafana - computed: true, optional: false, required: false
  private _mcpServerGrafana = new DataAwsccDevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference(this, "mcp_server_grafana");
  public get mcpServerGrafana() {
    return this._mcpServerGrafana;
  }

  // mcp_server_new_relic - computed: true, optional: false, required: false
  private _mcpServerNewRelic = new DataAwsccDevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference(this, "mcp_server_new_relic");
  public get mcpServerNewRelic() {
    return this._mcpServerNewRelic;
  }

  // mcp_server_sig_v4 - computed: true, optional: false, required: false
  private _mcpServerSigV4 = new DataAwsccDevopsagentServiceServiceDetailsMcpServerSigV4OutputReference(this, "mcp_server_sig_v4");
  public get mcpServerSigV4() {
    return this._mcpServerSigV4;
  }

  // mcp_server_splunk - computed: true, optional: false, required: false
  private _mcpServerSplunk = new DataAwsccDevopsagentServiceServiceDetailsMcpServerSplunkOutputReference(this, "mcp_server_splunk");
  public get mcpServerSplunk() {
    return this._mcpServerSplunk;
  }

  // pager_duty - computed: true, optional: false, required: false
  private _pagerDuty = new DataAwsccDevopsagentServiceServiceDetailsPagerDutyOutputReference(this, "pager_duty");
  public get pagerDuty() {
    return this._pagerDuty;
  }

  // service_now - computed: true, optional: false, required: false
  private _serviceNow = new DataAwsccDevopsagentServiceServiceDetailsServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
}
export interface DataAwsccDevopsagentServiceTags {
}

export function dataAwsccDevopsagentServiceTagsToTerraform(struct?: DataAwsccDevopsagentServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDevopsagentServiceTagsToHclTerraform(struct?: DataAwsccDevopsagentServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDevopsagentServiceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDevopsagentServiceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDevopsagentServiceTags | undefined) {
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

export class DataAwsccDevopsagentServiceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDevopsagentServiceTagsOutputReference {
    return new DataAwsccDevopsagentServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_service awscc_devopsagent_service}
*/
export class DataAwsccDevopsagentService extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_devopsagent_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDevopsagentService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDevopsagentService to import
  * @param importFromId The id of the existing DataAwsccDevopsagentService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDevopsagentService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsagent_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/devopsagent_service awscc_devopsagent_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDevopsagentServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDevopsagentServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_devopsagent_service',
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

  // accessible_resources - computed: true, optional: false, required: false
  private _accessibleResources = new cdktn.StringMapList(this, "accessible_resources", false);
  public get accessibleResources() {
    return this._accessibleResources;
  }

  // additional_service_details - computed: true, optional: false, required: false
  private _additionalServiceDetails = new DataAwsccDevopsagentServiceAdditionalServiceDetailsOutputReference(this, "additional_service_details");
  public get additionalServiceDetails() {
    return this._additionalServiceDetails;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // service_details - computed: true, optional: false, required: false
  private _serviceDetails = new DataAwsccDevopsagentServiceServiceDetailsOutputReference(this, "service_details");
  public get serviceDetails() {
    return this._serviceDetails;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDevopsagentServiceTagsList(this, "tags", true);
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
