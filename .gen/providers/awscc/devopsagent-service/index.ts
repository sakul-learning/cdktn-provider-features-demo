// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DevopsagentServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the KMS key to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#kms_key_arn DevopsagentService#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Service-specific configuration details for create operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#service_details DevopsagentService#service_details}
  */
  readonly serviceDetails?: DevopsagentServiceServiceDetails;
  /**
  * The type of service being registered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#service_type DevopsagentService#service_type}
  */
  readonly serviceType: string;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#tags DevopsagentService#tags}
  */
  readonly tags?: DevopsagentServiceTags[] | cdktn.IResolvable;
}
export interface DevopsagentServiceAdditionalServiceDetailsAzureIdentity {
}

export function devopsagentServiceAdditionalServiceDetailsAzureIdentityToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsAzureIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsAzureIdentityToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsAzureIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsAzureIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsAzureIdentity | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetailsDynatrace {
}

export function devopsagentServiceAdditionalServiceDetailsDynatraceToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsDynatraceToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsDynatrace | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetailsGitLab {
}

export function devopsagentServiceAdditionalServiceDetailsGitLabToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsGitLab): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsGitLabToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsGitLab): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsGitLab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsGitLab | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetailsMcpServer {
}

export function devopsagentServiceAdditionalServiceDetailsMcpServerToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsMcpServerToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsMcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsMcpServer | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana {
}

export function devopsagentServiceAdditionalServiceDetailsMcpServerGrafanaToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsMcpServerGrafanaToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsMcpServerGrafana | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic {
}

export function devopsagentServiceAdditionalServiceDetailsMcpServerNewRelicToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsMcpServerNewRelicToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelic | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 {
}

export function devopsagentServiceAdditionalServiceDetailsMcpServerSigV4ToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsMcpServerSigV4ToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4 | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk {
}

export function devopsagentServiceAdditionalServiceDetailsMcpServerSplunkToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsMcpServerSplunkToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsMcpServerSplunk | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetailsPagerDuty {
}

export function devopsagentServiceAdditionalServiceDetailsPagerDutyToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsPagerDuty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsPagerDutyToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsPagerDuty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsPagerDuty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsPagerDuty | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetailsServiceNow {
}

export function devopsagentServiceAdditionalServiceDetailsServiceNowToTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsServiceNowToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetailsServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetailsServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetailsServiceNow | undefined) {
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
export interface DevopsagentServiceAdditionalServiceDetails {
}

export function devopsagentServiceAdditionalServiceDetailsToTerraform(struct?: DevopsagentServiceAdditionalServiceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function devopsagentServiceAdditionalServiceDetailsToHclTerraform(struct?: DevopsagentServiceAdditionalServiceDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsagentServiceAdditionalServiceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceAdditionalServiceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceAdditionalServiceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_identity - computed: true, optional: false, required: false
  private _azureIdentity = new DevopsagentServiceAdditionalServiceDetailsAzureIdentityOutputReference(this, "azure_identity");
  public get azureIdentity() {
    return this._azureIdentity;
  }

  // dynatrace - computed: true, optional: false, required: false
  private _dynatrace = new DevopsagentServiceAdditionalServiceDetailsDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }

  // git_lab - computed: true, optional: false, required: false
  private _gitLab = new DevopsagentServiceAdditionalServiceDetailsGitLabOutputReference(this, "git_lab");
  public get gitLab() {
    return this._gitLab;
  }

  // mcp_server - computed: true, optional: false, required: false
  private _mcpServer = new DevopsagentServiceAdditionalServiceDetailsMcpServerOutputReference(this, "mcp_server");
  public get mcpServer() {
    return this._mcpServer;
  }

  // mcp_server_grafana - computed: true, optional: false, required: false
  private _mcpServerGrafana = new DevopsagentServiceAdditionalServiceDetailsMcpServerGrafanaOutputReference(this, "mcp_server_grafana");
  public get mcpServerGrafana() {
    return this._mcpServerGrafana;
  }

  // mcp_server_new_relic - computed: true, optional: false, required: false
  private _mcpServerNewRelic = new DevopsagentServiceAdditionalServiceDetailsMcpServerNewRelicOutputReference(this, "mcp_server_new_relic");
  public get mcpServerNewRelic() {
    return this._mcpServerNewRelic;
  }

  // mcp_server_sig_v4 - computed: true, optional: false, required: false
  private _mcpServerSigV4 = new DevopsagentServiceAdditionalServiceDetailsMcpServerSigV4OutputReference(this, "mcp_server_sig_v4");
  public get mcpServerSigV4() {
    return this._mcpServerSigV4;
  }

  // mcp_server_splunk - computed: true, optional: false, required: false
  private _mcpServerSplunk = new DevopsagentServiceAdditionalServiceDetailsMcpServerSplunkOutputReference(this, "mcp_server_splunk");
  public get mcpServerSplunk() {
    return this._mcpServerSplunk;
  }

  // pager_duty - computed: true, optional: false, required: false
  private _pagerDuty = new DevopsagentServiceAdditionalServiceDetailsPagerDutyOutputReference(this, "pager_duty");
  public get pagerDuty() {
    return this._pagerDuty;
  }

  // service_now - computed: true, optional: false, required: false
  private _serviceNow = new DevopsagentServiceAdditionalServiceDetailsServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
}
export interface DevopsagentServiceServiceDetailsAzureIdentity {
  /**
  * Azure AD application client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}
  */
  readonly clientId?: string;
  /**
  * Azure AD tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#tenant_id DevopsagentService#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * ARN of the IAM role for web identity token exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#web_identity_role_arn DevopsagentService#web_identity_role_arn}
  */
  readonly webIdentityRoleArn?: string;
  /**
  * List of audiences for the web identity token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#web_identity_token_audiences DevopsagentService#web_identity_token_audiences}
  */
  readonly webIdentityTokenAudiences?: string[];
}

export function devopsagentServiceServiceDetailsAzureIdentityToTerraform(struct?: DevopsagentServiceServiceDetailsAzureIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    web_identity_role_arn: cdktn.stringToTerraform(struct!.webIdentityRoleArn),
    web_identity_token_audiences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.webIdentityTokenAudiences),
  }
}


export function devopsagentServiceServiceDetailsAzureIdentityToHclTerraform(struct?: DevopsagentServiceServiceDetailsAzureIdentity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.webIdentityRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_identity_token_audiences: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.webIdentityTokenAudiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsAzureIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsAzureIdentity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._webIdentityRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.webIdentityRoleArn = this._webIdentityRoleArn;
    }
    if (this._webIdentityTokenAudiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.webIdentityTokenAudiences = this._webIdentityTokenAudiences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsAzureIdentity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._tenantId = undefined;
      this._webIdentityRoleArn = undefined;
      this._webIdentityTokenAudiences = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._tenantId = value.tenantId;
      this._webIdentityRoleArn = value.webIdentityRoleArn;
      this._webIdentityTokenAudiences = value.webIdentityTokenAudiences;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // web_identity_role_arn - computed: true, optional: true, required: false
  private _webIdentityRoleArn?: string; 
  public get webIdentityRoleArn() {
    return this.getStringAttribute('web_identity_role_arn');
  }
  public set webIdentityRoleArn(value: string) {
    this._webIdentityRoleArn = value;
  }
  public resetWebIdentityRoleArn() {
    this._webIdentityRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webIdentityRoleArnInput() {
    return this._webIdentityRoleArn;
  }

  // web_identity_token_audiences - computed: true, optional: true, required: false
  private _webIdentityTokenAudiences?: string[]; 
  public get webIdentityTokenAudiences() {
    return this.getListAttribute('web_identity_token_audiences');
  }
  public set webIdentityTokenAudiences(value: string[]) {
    this._webIdentityTokenAudiences = value;
  }
  public resetWebIdentityTokenAudiences() {
    this._webIdentityTokenAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webIdentityTokenAudiencesInput() {
    return this._webIdentityTokenAudiences;
  }
}
export interface DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials {
  /**
  * OAuth client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}
  */
  readonly clientId?: string;
  /**
  * User friendly OAuth client name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}
  */
  readonly clientName?: string;
  /**
  * OAuth client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAuth token exchange parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}
  */
  readonly exchangeParameters?: string;
}

export function devopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsToTerraform(struct?: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_name: cdktn.stringToTerraform(struct!.clientName),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    exchange_parameters: cdktn.stringToTerraform(struct!.exchangeParameters),
  }
}


export function devopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct?: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_name: {
      value: cdktn.stringToHclTerraform(struct!.clientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exchange_parameters: {
      value: cdktn.stringToHclTerraform(struct!.exchangeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientName = this._clientName;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._exchangeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchangeParameters = this._exchangeParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientName = undefined;
      this._clientSecret = undefined;
      this._exchangeParameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientName = value.clientName;
      this._clientSecret = value.clientSecret;
      this._exchangeParameters = value.exchangeParameters;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_name - computed: true, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // exchange_parameters - computed: true, optional: true, required: false
  private _exchangeParameters?: string; 
  public get exchangeParameters() {
    return this.getStringAttribute('exchange_parameters');
  }
  public set exchangeParameters(value: string) {
    this._exchangeParameters = value;
  }
  public resetExchangeParameters() {
    this._exchangeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeParametersInput() {
    return this._exchangeParameters;
  }
}
export interface DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig {
  /**
  * OAuth client credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}
  */
  readonly oAuthClientCredentials?: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials;
}

export function devopsagentServiceServiceDetailsDynatraceAuthorizationConfigToTerraform(struct?: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    o_auth_client_credentials: devopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsToTerraform(struct!.oAuthClientCredentials),
  }
}


export function devopsagentServiceServiceDetailsDynatraceAuthorizationConfigToHclTerraform(struct?: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    o_auth_client_credentials: {
      value: devopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct!.oAuthClientCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oAuthClientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthClientCredentials = this._oAuthClientCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oAuthClientCredentials.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oAuthClientCredentials.internalValue = value.oAuthClientCredentials;
    }
  }

  // o_auth_client_credentials - computed: true, optional: true, required: false
  private _oAuthClientCredentials = new DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentialsOutputReference(this, "o_auth_client_credentials");
  public get oAuthClientCredentials() {
    return this._oAuthClientCredentials;
  }
  public putOAuthClientCredentials(value: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOAuthClientCredentials) {
    this._oAuthClientCredentials.internalValue = value;
  }
  public resetOAuthClientCredentials() {
    this._oAuthClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthClientCredentialsInput() {
    return this._oAuthClientCredentials.internalValue;
  }
}
export interface DevopsagentServiceServiceDetailsDynatrace {
  /**
  * Dynatrace resource account URN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#account_urn DevopsagentService#account_urn}
  */
  readonly accountUrn?: string;
  /**
  * Dynatrace OAuth authorization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}
  */
  readonly authorizationConfig?: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig;
}

export function devopsagentServiceServiceDetailsDynatraceToTerraform(struct?: DevopsagentServiceServiceDetailsDynatrace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_urn: cdktn.stringToTerraform(struct!.accountUrn),
    authorization_config: devopsagentServiceServiceDetailsDynatraceAuthorizationConfigToTerraform(struct!.authorizationConfig),
  }
}


export function devopsagentServiceServiceDetailsDynatraceToHclTerraform(struct?: DevopsagentServiceServiceDetailsDynatrace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_urn: {
      value: cdktn.stringToHclTerraform(struct!.accountUrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_config: {
      value: devopsagentServiceServiceDetailsDynatraceAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsDynatrace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountUrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUrn = this._accountUrn;
    }
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsDynatrace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountUrn = undefined;
      this._authorizationConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountUrn = value.accountUrn;
      this._authorizationConfig.internalValue = value.authorizationConfig;
    }
  }

  // account_urn - computed: true, optional: true, required: false
  private _accountUrn?: string; 
  public get accountUrn() {
    return this.getStringAttribute('account_urn');
  }
  public set accountUrn(value: string) {
    this._accountUrn = value;
  }
  public resetAccountUrn() {
    this._accountUrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUrnInput() {
    return this._accountUrn;
  }

  // authorization_config - computed: true, optional: true, required: false
  private _authorizationConfig = new DevopsagentServiceServiceDetailsDynatraceAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsDynatraceAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }
}
export interface DevopsagentServiceServiceDetailsGitLab {
  /**
  * Optional GitLab group ID for group-level access tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#group_id DevopsagentService#group_id}
  */
  readonly groupId?: string;
  /**
  * GitLab instance URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#target_url DevopsagentService#target_url}
  */
  readonly targetUrl?: string;
  /**
  * Type of GitLab access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#token_type DevopsagentService#token_type}
  */
  readonly tokenType?: string;
  /**
  * GitLab access token value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}
  */
  readonly tokenValue?: string;
}

export function devopsagentServiceServiceDetailsGitLabToTerraform(struct?: DevopsagentServiceServiceDetailsGitLab | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_id: cdktn.stringToTerraform(struct!.groupId),
    target_url: cdktn.stringToTerraform(struct!.targetUrl),
    token_type: cdktn.stringToTerraform(struct!.tokenType),
    token_value: cdktn.stringToTerraform(struct!.tokenValue),
  }
}


export function devopsagentServiceServiceDetailsGitLabToHclTerraform(struct?: DevopsagentServiceServiceDetailsGitLab | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_id: {
      value: cdktn.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_url: {
      value: cdktn.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_type: {
      value: cdktn.stringToHclTerraform(struct!.tokenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_value: {
      value: cdktn.stringToHclTerraform(struct!.tokenValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsGitLabOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsGitLab | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    if (this._tokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenType = this._tokenType;
    }
    if (this._tokenValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenValue = this._tokenValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsGitLab | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._targetUrl = undefined;
      this._tokenType = undefined;
      this._tokenValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._targetUrl = value.targetUrl;
      this._tokenType = value.tokenType;
      this._tokenValue = value.tokenValue;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // target_url - computed: true, optional: true, required: false
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  public resetTargetUrl() {
    this._targetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }

  // token_type - computed: true, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }

  // token_value - computed: true, optional: true, required: false
  private _tokenValue?: string; 
  public get tokenValue() {
    return this.getStringAttribute('token_value');
  }
  public set tokenValue(value: string) {
    this._tokenValue = value;
  }
  public resetTokenValue() {
    this._tokenValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenValueInput() {
    return this._tokenValue;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey {
  /**
  * HTTP header name to send the API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#api_key_header DevopsagentService#api_key_header}
  */
  readonly apiKeyHeader?: string;
  /**
  * User friendly API key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#api_key_name DevopsagentService#api_key_name}
  */
  readonly apiKeyName?: string;
  /**
  * API key value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#api_key_value DevopsagentService#api_key_value}
  */
  readonly apiKeyValue?: string;
}

export function devopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key_header: cdktn.stringToTerraform(struct!.apiKeyHeader),
    api_key_name: cdktn.stringToTerraform(struct!.apiKeyName),
    api_key_value: cdktn.stringToTerraform(struct!.apiKeyValue),
  }
}


export function devopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key_header: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_name: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_value: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyHeader = this._apiKeyHeader;
    }
    if (this._apiKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyName = this._apiKeyName;
    }
    if (this._apiKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyValue = this._apiKeyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyHeader = undefined;
      this._apiKeyName = undefined;
      this._apiKeyValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyHeader = value.apiKeyHeader;
      this._apiKeyName = value.apiKeyName;
      this._apiKeyValue = value.apiKeyValue;
    }
  }

  // api_key_header - computed: true, optional: true, required: false
  private _apiKeyHeader?: string; 
  public get apiKeyHeader() {
    return this.getStringAttribute('api_key_header');
  }
  public set apiKeyHeader(value: string) {
    this._apiKeyHeader = value;
  }
  public resetApiKeyHeader() {
    this._apiKeyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyHeaderInput() {
    return this._apiKeyHeader;
  }

  // api_key_name - computed: true, optional: true, required: false
  private _apiKeyName?: string; 
  public get apiKeyName() {
    return this.getStringAttribute('api_key_name');
  }
  public set apiKeyName(value: string) {
    this._apiKeyName = value;
  }
  public resetApiKeyName() {
    this._apiKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyNameInput() {
    return this._apiKeyName;
  }

  // api_key_value - computed: true, optional: true, required: false
  private _apiKeyValue?: string; 
  public get apiKeyValue() {
    return this.getStringAttribute('api_key_value');
  }
  public set apiKeyValue(value: string) {
    this._apiKeyValue = value;
  }
  public resetApiKeyValue() {
    this._apiKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyValueInput() {
    return this._apiKeyValue;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials {
  /**
  * OAuth client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}
  */
  readonly clientId?: string;
  /**
  * User friendly OAuth client name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}
  */
  readonly clientName?: string;
  /**
  * OAuth client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAuth token exchange parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}
  */
  readonly exchangeParameters?: string;
  /**
  * OAuth token exchange URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#exchange_url DevopsagentService#exchange_url}
  */
  readonly exchangeUrl?: string;
  /**
  * OAuth scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}
  */
  readonly scopes?: string[];
}

export function devopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_name: cdktn.stringToTerraform(struct!.clientName),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    exchange_parameters: cdktn.stringToTerraform(struct!.exchangeParameters),
    exchange_url: cdktn.stringToTerraform(struct!.exchangeUrl),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function devopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_name: {
      value: cdktn.stringToHclTerraform(struct!.clientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exchange_parameters: {
      value: cdktn.stringToHclTerraform(struct!.exchangeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exchange_url: {
      value: cdktn.stringToHclTerraform(struct!.exchangeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientName = this._clientName;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._exchangeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchangeParameters = this._exchangeParameters;
    }
    if (this._exchangeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchangeUrl = this._exchangeUrl;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientName = undefined;
      this._clientSecret = undefined;
      this._exchangeParameters = undefined;
      this._exchangeUrl = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientName = value.clientName;
      this._clientSecret = value.clientSecret;
      this._exchangeParameters = value.exchangeParameters;
      this._exchangeUrl = value.exchangeUrl;
      this._scopes = value.scopes;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_name - computed: true, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // exchange_parameters - computed: true, optional: true, required: false
  private _exchangeParameters?: string; 
  public get exchangeParameters() {
    return this.getStringAttribute('exchange_parameters');
  }
  public set exchangeParameters(value: string) {
    this._exchangeParameters = value;
  }
  public resetExchangeParameters() {
    this._exchangeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeParametersInput() {
    return this._exchangeParameters;
  }

  // exchange_url - computed: true, optional: true, required: false
  private _exchangeUrl?: string; 
  public get exchangeUrl() {
    return this.getStringAttribute('exchange_url');
  }
  public set exchangeUrl(value: string) {
    this._exchangeUrl = value;
  }
  public resetExchangeUrl() {
    this._exchangeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeUrlInput() {
    return this._exchangeUrl;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig {
  /**
  * API key authentication details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}
  */
  readonly apiKey?: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey;
  /**
  * MCP server OAuth client credentials configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}
  */
  readonly oAuthClientCredentials?: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials;
}

export function devopsagentServiceServiceDetailsMcpServerAuthorizationConfigToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: devopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyToTerraform(struct!.apiKey),
    o_auth_client_credentials: devopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsToTerraform(struct!.oAuthClientCredentials),
  }
}


export function devopsagentServiceServiceDetailsMcpServerAuthorizationConfigToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: devopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey",
    },
    o_auth_client_credentials: {
      value: devopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct!.oAuthClientCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._oAuthClientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthClientCredentials = this._oAuthClientCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
      this._oAuthClientCredentials.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
      this._oAuthClientCredentials.internalValue = value.oAuthClientCredentials;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // o_auth_client_credentials - computed: true, optional: true, required: false
  private _oAuthClientCredentials = new DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentialsOutputReference(this, "o_auth_client_credentials");
  public get oAuthClientCredentials() {
    return this._oAuthClientCredentials;
  }
  public putOAuthClientCredentials(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOAuthClientCredentials) {
    this._oAuthClientCredentials.internalValue = value;
  }
  public resetOAuthClientCredentials() {
    this._oAuthClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthClientCredentialsInput() {
    return this._oAuthClientCredentials.internalValue;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServer {
  /**
  * MCP server authorization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}
  */
  readonly authorizationConfig?: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig;
  /**
  * Optional description for the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#description DevopsagentService#description}
  */
  readonly description?: string;
  /**
  * MCP server endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}
  */
  readonly endpoint?: string;
  /**
  * MCP server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#name DevopsagentService#name}
  */
  readonly name?: string;
}

export function devopsagentServiceServiceDetailsMcpServerToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_config: devopsagentServiceServiceDetailsMcpServerAuthorizationConfigToTerraform(struct!.authorizationConfig),
    description: cdktn.stringToTerraform(struct!.description),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function devopsagentServiceServiceDetailsMcpServerToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_config: {
      value: devopsagentServiceServiceDetailsMcpServerAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = value.authorizationConfig;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._name = value.name;
    }
  }

  // authorization_config - computed: true, optional: true, required: false
  private _authorizationConfig = new DevopsagentServiceServiceDetailsMcpServerAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken {
  /**
  * HTTP header name to send the bearer token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}
  */
  readonly authorizationHeader?: string;
  /**
  * User friendly bearer token name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}
  */
  readonly tokenName?: string;
  /**
  * Bearer token value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}
  */
  readonly tokenValue?: string;
}

export function devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_header: cdktn.stringToTerraform(struct!.authorizationHeader),
    token_name: cdktn.stringToTerraform(struct!.tokenName),
    token_value: cdktn.stringToTerraform(struct!.tokenValue),
  }
}


export function devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_header: {
      value: cdktn.stringToHclTerraform(struct!.authorizationHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_name: {
      value: cdktn.stringToHclTerraform(struct!.tokenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_value: {
      value: cdktn.stringToHclTerraform(struct!.tokenValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationHeader = this._authorizationHeader;
    }
    if (this._tokenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenName = this._tokenName;
    }
    if (this._tokenValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenValue = this._tokenValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationHeader = undefined;
      this._tokenName = undefined;
      this._tokenValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationHeader = value.authorizationHeader;
      this._tokenName = value.tokenName;
      this._tokenValue = value.tokenValue;
    }
  }

  // authorization_header - computed: true, optional: true, required: false
  private _authorizationHeader?: string; 
  public get authorizationHeader() {
    return this.getStringAttribute('authorization_header');
  }
  public set authorizationHeader(value: string) {
    this._authorizationHeader = value;
  }
  public resetAuthorizationHeader() {
    this._authorizationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationHeaderInput() {
    return this._authorizationHeader;
  }

  // token_name - computed: true, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // token_value - computed: true, optional: true, required: false
  private _tokenValue?: string; 
  public get tokenValue() {
    return this.getStringAttribute('token_value');
  }
  public set tokenValue(value: string) {
    this._tokenValue = value;
  }
  public resetTokenValue() {
    this._tokenValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenValueInput() {
    return this._tokenValue;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig {
  /**
  * Bearer token authentication details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}
  */
  readonly bearerToken?: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken;
}

export function devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bearer_token: devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenToTerraform(struct!.bearerToken),
  }
}


export function devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bearer_token: {
      value: devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenToHclTerraform(struct!.bearerToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bearerToken.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bearerToken.internalValue = value.bearerToken;
    }
  }

  // bearer_token - computed: true, optional: true, required: false
  private _bearerToken = new DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerTokenOutputReference(this, "bearer_token");
  public get bearerToken() {
    return this._bearerToken;
  }
  public putBearerToken(value: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigBearerToken) {
    this._bearerToken.internalValue = value;
  }
  public resetBearerToken() {
    this._bearerToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken.internalValue;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerGrafana {
  /**
  * Grafana MCP server authorization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}
  */
  readonly authorizationConfig?: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig;
  /**
  * Optional description for the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#description DevopsagentService#description}
  */
  readonly description?: string;
  /**
  * MCP server endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}
  */
  readonly endpoint?: string;
  /**
  * MCP server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#name DevopsagentService#name}
  */
  readonly name?: string;
}

export function devopsagentServiceServiceDetailsMcpServerGrafanaToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerGrafana | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_config: devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigToTerraform(struct!.authorizationConfig),
    description: cdktn.stringToTerraform(struct!.description),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function devopsagentServiceServiceDetailsMcpServerGrafanaToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerGrafana | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_config: {
      value: devopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerGrafana | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerGrafana | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = value.authorizationConfig;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._name = value.name;
    }
  }

  // authorization_config - computed: true, optional: true, required: false
  private _authorizationConfig = new DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerGrafanaAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey {
  /**
  * New Relic Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#account_id DevopsagentService#account_id}
  */
  readonly accountId?: string;
  /**
  * List of alert policy IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#alert_policy_ids DevopsagentService#alert_policy_ids}
  */
  readonly alertPolicyIds?: string[];
  /**
  * New Relic User API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}
  */
  readonly apiKey?: string;
  /**
  * List of monitored APM application IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#application_ids DevopsagentService#application_ids}
  */
  readonly applicationIds?: string[];
  /**
  * List of globally unique IDs for New Relic resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#entity_guids DevopsagentService#entity_guids}
  */
  readonly entityGuids?: string[];
  /**
  * New Relic region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#region DevopsagentService#region}
  */
  readonly region?: string;
}

export function devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    alert_policy_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alertPolicyIds),
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    application_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.applicationIds),
    entity_guids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entityGuids),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_policy_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alertPolicyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.applicationIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entity_guids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entityGuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._alertPolicyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPolicyIds = this._alertPolicyIds;
    }
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._applicationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationIds = this._applicationIds;
    }
    if (this._entityGuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityGuids = this._entityGuids;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._alertPolicyIds = undefined;
      this._apiKey = undefined;
      this._applicationIds = undefined;
      this._entityGuids = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._alertPolicyIds = value.alertPolicyIds;
      this._apiKey = value.apiKey;
      this._applicationIds = value.applicationIds;
      this._entityGuids = value.entityGuids;
      this._region = value.region;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // alert_policy_ids - computed: true, optional: true, required: false
  private _alertPolicyIds?: string[]; 
  public get alertPolicyIds() {
    return this.getListAttribute('alert_policy_ids');
  }
  public set alertPolicyIds(value: string[]) {
    this._alertPolicyIds = value;
  }
  public resetAlertPolicyIds() {
    this._alertPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPolicyIdsInput() {
    return this._alertPolicyIds;
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application_ids - computed: true, optional: true, required: false
  private _applicationIds?: string[]; 
  public get applicationIds() {
    return this.getListAttribute('application_ids');
  }
  public set applicationIds(value: string[]) {
    this._applicationIds = value;
  }
  public resetApplicationIds() {
    this._applicationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdsInput() {
    return this._applicationIds;
  }

  // entity_guids - computed: true, optional: true, required: false
  private _entityGuids?: string[]; 
  public get entityGuids() {
    return this.getListAttribute('entity_guids');
  }
  public set entityGuids(value: string[]) {
    this._entityGuids = value;
  }
  public resetEntityGuids() {
    this._entityGuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityGuidsInput() {
    return this._entityGuids;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig {
  /**
  * New Relic API key configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#api_key DevopsagentService#api_key}
  */
  readonly apiKey?: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey;
}

export function devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyToTerraform(struct!.apiKey),
  }
}


export function devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey = new DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerNewRelic {
  /**
  * New Relic authorization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}
  */
  readonly authorizationConfig?: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig;
}

export function devopsagentServiceServiceDetailsMcpServerNewRelicToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerNewRelic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_config: devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigToTerraform(struct!.authorizationConfig),
  }
}


export function devopsagentServiceServiceDetailsMcpServerNewRelicToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerNewRelic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_config: {
      value: devopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerNewRelic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerNewRelic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = value.authorizationConfig;
    }
  }

  // authorization_config - computed: true, optional: true, required: false
  private _authorizationConfig = new DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerNewRelicAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig {
  /**
  * Custom headers for the SigV4 MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#custom_headers DevopsagentService#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#region DevopsagentService#region}
  */
  readonly region?: string;
  /**
  * IAM role ARN to assume for SigV4 signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#role_arn DevopsagentService#role_arn}
  */
  readonly roleArn?: string;
  /**
  * AWS service name for SigV4 signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#service DevopsagentService#service}
  */
  readonly service?: string;
}

export function devopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customHeaders),
    region: cdktn.stringToTerraform(struct!.region),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    service: cdktn.stringToTerraform(struct!.service),
  }
}


export function devopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaders = this._customHeaders;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customHeaders = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._service = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customHeaders = value.customHeaders;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._service = value.service;
    }
  }

  // custom_headers - computed: true, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerSigV4 {
  /**
  * SigV4 authorization configuration for MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}
  */
  readonly authorizationConfig?: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig;
  /**
  * Optional description for the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#description DevopsagentService#description}
  */
  readonly description?: string;
  /**
  * MCP server endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}
  */
  readonly endpoint?: string;
  /**
  * MCP server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#name DevopsagentService#name}
  */
  readonly name?: string;
}

export function devopsagentServiceServiceDetailsMcpServerSigV4ToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSigV4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_config: devopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigToTerraform(struct!.authorizationConfig),
    description: cdktn.stringToTerraform(struct!.description),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function devopsagentServiceServiceDetailsMcpServerSigV4ToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSigV4 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_config: {
      value: devopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerSigV4 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerSigV4 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = value.authorizationConfig;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._name = value.name;
    }
  }

  // authorization_config - computed: true, optional: true, required: false
  private _authorizationConfig = new DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerSigV4AuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken {
  /**
  * HTTP header name to send the bearer token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_header DevopsagentService#authorization_header}
  */
  readonly authorizationHeader?: string;
  /**
  * User friendly bearer token name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#token_name DevopsagentService#token_name}
  */
  readonly tokenName?: string;
  /**
  * Bearer token value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#token_value DevopsagentService#token_value}
  */
  readonly tokenValue?: string;
}

export function devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_header: cdktn.stringToTerraform(struct!.authorizationHeader),
    token_name: cdktn.stringToTerraform(struct!.tokenName),
    token_value: cdktn.stringToTerraform(struct!.tokenValue),
  }
}


export function devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_header: {
      value: cdktn.stringToHclTerraform(struct!.authorizationHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_name: {
      value: cdktn.stringToHclTerraform(struct!.tokenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_value: {
      value: cdktn.stringToHclTerraform(struct!.tokenValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationHeader = this._authorizationHeader;
    }
    if (this._tokenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenName = this._tokenName;
    }
    if (this._tokenValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenValue = this._tokenValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationHeader = undefined;
      this._tokenName = undefined;
      this._tokenValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationHeader = value.authorizationHeader;
      this._tokenName = value.tokenName;
      this._tokenValue = value.tokenValue;
    }
  }

  // authorization_header - computed: true, optional: true, required: false
  private _authorizationHeader?: string; 
  public get authorizationHeader() {
    return this.getStringAttribute('authorization_header');
  }
  public set authorizationHeader(value: string) {
    this._authorizationHeader = value;
  }
  public resetAuthorizationHeader() {
    this._authorizationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationHeaderInput() {
    return this._authorizationHeader;
  }

  // token_name - computed: true, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // token_value - computed: true, optional: true, required: false
  private _tokenValue?: string; 
  public get tokenValue() {
    return this.getStringAttribute('token_value');
  }
  public set tokenValue(value: string) {
    this._tokenValue = value;
  }
  public resetTokenValue() {
    this._tokenValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenValueInput() {
    return this._tokenValue;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig {
  /**
  * Bearer token authentication details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#bearer_token DevopsagentService#bearer_token}
  */
  readonly bearerToken?: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken;
}

export function devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bearer_token: devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenToTerraform(struct!.bearerToken),
  }
}


export function devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bearer_token: {
      value: devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenToHclTerraform(struct!.bearerToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bearerToken.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bearerToken.internalValue = value.bearerToken;
    }
  }

  // bearer_token - computed: true, optional: true, required: false
  private _bearerToken = new DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerTokenOutputReference(this, "bearer_token");
  public get bearerToken() {
    return this._bearerToken;
  }
  public putBearerToken(value: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigBearerToken) {
    this._bearerToken.internalValue = value;
  }
  public resetBearerToken() {
    this._bearerToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken.internalValue;
  }
}
export interface DevopsagentServiceServiceDetailsMcpServerSplunk {
  /**
  * MCP server splunk authorization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}
  */
  readonly authorizationConfig?: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig;
  /**
  * Optional description for the MCP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#description DevopsagentService#description}
  */
  readonly description?: string;
  /**
  * MCP server endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#endpoint DevopsagentService#endpoint}
  */
  readonly endpoint?: string;
  /**
  * MCP server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#name DevopsagentService#name}
  */
  readonly name?: string;
}

export function devopsagentServiceServiceDetailsMcpServerSplunkToTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSplunk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_config: devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigToTerraform(struct!.authorizationConfig),
    description: cdktn.stringToTerraform(struct!.description),
    endpoint: cdktn.stringToTerraform(struct!.endpoint),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function devopsagentServiceServiceDetailsMcpServerSplunkToHclTerraform(struct?: DevopsagentServiceServiceDetailsMcpServerSplunk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_config: {
      value: devopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktn.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsMcpServerSplunk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsMcpServerSplunk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = undefined;
      this._description = undefined;
      this._endpoint = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = value.authorizationConfig;
      this._description = value.description;
      this._endpoint = value.endpoint;
      this._name = value.name;
    }
  }

  // authorization_config - computed: true, optional: true, required: false
  private _authorizationConfig = new DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsMcpServerSplunkAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
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

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials {
  /**
  * OAuth client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}
  */
  readonly clientId?: string;
  /**
  * User friendly OAuth client name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}
  */
  readonly clientName?: string;
  /**
  * OAuth client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAuth token exchange parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}
  */
  readonly exchangeParameters?: string;
}

export function devopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsToTerraform(struct?: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_name: cdktn.stringToTerraform(struct!.clientName),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    exchange_parameters: cdktn.stringToTerraform(struct!.exchangeParameters),
  }
}


export function devopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct?: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_name: {
      value: cdktn.stringToHclTerraform(struct!.clientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exchange_parameters: {
      value: cdktn.stringToHclTerraform(struct!.exchangeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientName = this._clientName;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._exchangeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchangeParameters = this._exchangeParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientName = undefined;
      this._clientSecret = undefined;
      this._exchangeParameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientName = value.clientName;
      this._clientSecret = value.clientSecret;
      this._exchangeParameters = value.exchangeParameters;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_name - computed: true, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // exchange_parameters - computed: true, optional: true, required: false
  private _exchangeParameters?: string; 
  public get exchangeParameters() {
    return this.getStringAttribute('exchange_parameters');
  }
  public set exchangeParameters(value: string) {
    this._exchangeParameters = value;
  }
  public resetExchangeParameters() {
    this._exchangeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeParametersInput() {
    return this._exchangeParameters;
  }
}
export interface DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig {
  /**
  * OAuth client credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}
  */
  readonly oAuthClientCredentials?: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials;
}

export function devopsagentServiceServiceDetailsPagerDutyAuthorizationConfigToTerraform(struct?: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    o_auth_client_credentials: devopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsToTerraform(struct!.oAuthClientCredentials),
  }
}


export function devopsagentServiceServiceDetailsPagerDutyAuthorizationConfigToHclTerraform(struct?: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    o_auth_client_credentials: {
      value: devopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct!.oAuthClientCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oAuthClientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthClientCredentials = this._oAuthClientCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oAuthClientCredentials.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oAuthClientCredentials.internalValue = value.oAuthClientCredentials;
    }
  }

  // o_auth_client_credentials - computed: true, optional: true, required: false
  private _oAuthClientCredentials = new DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentialsOutputReference(this, "o_auth_client_credentials");
  public get oAuthClientCredentials() {
    return this._oAuthClientCredentials;
  }
  public putOAuthClientCredentials(value: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOAuthClientCredentials) {
    this._oAuthClientCredentials.internalValue = value;
  }
  public resetOAuthClientCredentials() {
    this._oAuthClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthClientCredentialsInput() {
    return this._oAuthClientCredentials.internalValue;
  }
}
export interface DevopsagentServiceServiceDetailsPagerDuty {
  /**
  * PagerDuty OAuth authorization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}
  */
  readonly authorizationConfig?: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig;
  /**
  * PagerDuty scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#scopes DevopsagentService#scopes}
  */
  readonly scopes?: string[];
}

export function devopsagentServiceServiceDetailsPagerDutyToTerraform(struct?: DevopsagentServiceServiceDetailsPagerDuty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_config: devopsagentServiceServiceDetailsPagerDutyAuthorizationConfigToTerraform(struct!.authorizationConfig),
    scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scopes),
  }
}


export function devopsagentServiceServiceDetailsPagerDutyToHclTerraform(struct?: DevopsagentServiceServiceDetailsPagerDuty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_config: {
      value: devopsagentServiceServiceDetailsPagerDutyAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig",
    },
    scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsPagerDutyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsPagerDuty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsPagerDuty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = undefined;
      this._scopes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = value.authorizationConfig;
      this._scopes = value.scopes;
    }
  }

  // authorization_config - computed: true, optional: true, required: false
  private _authorizationConfig = new DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsPagerDutyAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials {
  /**
  * OAuth client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_id DevopsagentService#client_id}
  */
  readonly clientId?: string;
  /**
  * User friendly OAuth client name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_name DevopsagentService#client_name}
  */
  readonly clientName?: string;
  /**
  * OAuth client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#client_secret DevopsagentService#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * OAuth token exchange parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#exchange_parameters DevopsagentService#exchange_parameters}
  */
  readonly exchangeParameters?: string;
}

export function devopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsToTerraform(struct?: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_name: cdktn.stringToTerraform(struct!.clientName),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    exchange_parameters: cdktn.stringToTerraform(struct!.exchangeParameters),
  }
}


export function devopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct?: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_name: {
      value: cdktn.stringToHclTerraform(struct!.clientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exchange_parameters: {
      value: cdktn.stringToHclTerraform(struct!.exchangeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientName = this._clientName;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._exchangeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchangeParameters = this._exchangeParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientName = undefined;
      this._clientSecret = undefined;
      this._exchangeParameters = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientName = value.clientName;
      this._clientSecret = value.clientSecret;
      this._exchangeParameters = value.exchangeParameters;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_name - computed: true, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // exchange_parameters - computed: true, optional: true, required: false
  private _exchangeParameters?: string; 
  public get exchangeParameters() {
    return this.getStringAttribute('exchange_parameters');
  }
  public set exchangeParameters(value: string) {
    this._exchangeParameters = value;
  }
  public resetExchangeParameters() {
    this._exchangeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeParametersInput() {
    return this._exchangeParameters;
  }
}
export interface DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig {
  /**
  * OAuth client credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#o_auth_client_credentials DevopsagentService#o_auth_client_credentials}
  */
  readonly oAuthClientCredentials?: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials;
}

export function devopsagentServiceServiceDetailsServiceNowAuthorizationConfigToTerraform(struct?: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    o_auth_client_credentials: devopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsToTerraform(struct!.oAuthClientCredentials),
  }
}


export function devopsagentServiceServiceDetailsServiceNowAuthorizationConfigToHclTerraform(struct?: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    o_auth_client_credentials: {
      value: devopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsToHclTerraform(struct!.oAuthClientCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oAuthClientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthClientCredentials = this._oAuthClientCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oAuthClientCredentials.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oAuthClientCredentials.internalValue = value.oAuthClientCredentials;
    }
  }

  // o_auth_client_credentials - computed: true, optional: true, required: false
  private _oAuthClientCredentials = new DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentialsOutputReference(this, "o_auth_client_credentials");
  public get oAuthClientCredentials() {
    return this._oAuthClientCredentials;
  }
  public putOAuthClientCredentials(value: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOAuthClientCredentials) {
    this._oAuthClientCredentials.internalValue = value;
  }
  public resetOAuthClientCredentials() {
    this._oAuthClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthClientCredentialsInput() {
    return this._oAuthClientCredentials.internalValue;
  }
}
export interface DevopsagentServiceServiceDetailsServiceNow {
  /**
  * ServiceNow OAuth authorization configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#authorization_config DevopsagentService#authorization_config}
  */
  readonly authorizationConfig?: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig;
  /**
  * ServiceNow instance URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#instance_url DevopsagentService#instance_url}
  */
  readonly instanceUrl?: string;
}

export function devopsagentServiceServiceDetailsServiceNowToTerraform(struct?: DevopsagentServiceServiceDetailsServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_config: devopsagentServiceServiceDetailsServiceNowAuthorizationConfigToTerraform(struct!.authorizationConfig),
    instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
  }
}


export function devopsagentServiceServiceDetailsServiceNowToHclTerraform(struct?: DevopsagentServiceServiceDetailsServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_config: {
      value: devopsagentServiceServiceDetailsServiceNowAuthorizationConfigToHclTerraform(struct!.authorizationConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig",
    },
    instance_url: {
      value: cdktn.stringToHclTerraform(struct!.instanceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetailsServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    if (this._instanceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUrl = this._instanceUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetailsServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = undefined;
      this._instanceUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationConfig.internalValue = value.authorizationConfig;
      this._instanceUrl = value.instanceUrl;
    }
  }

  // authorization_config - computed: true, optional: true, required: false
  private _authorizationConfig = new DevopsagentServiceServiceDetailsServiceNowAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: DevopsagentServiceServiceDetailsServiceNowAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }

  // instance_url - computed: true, optional: true, required: false
  private _instanceUrl?: string; 
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }
  public set instanceUrl(value: string) {
    this._instanceUrl = value;
  }
  public resetInstanceUrl() {
    this._instanceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUrlInput() {
    return this._instanceUrl;
  }
}
export interface DevopsagentServiceServiceDetails {
  /**
  * Azure Identity service configuration for federated identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#azure_identity DevopsagentService#azure_identity}
  */
  readonly azureIdentity?: DevopsagentServiceServiceDetailsAzureIdentity;
  /**
  * Dynatrace service configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#dynatrace DevopsagentService#dynatrace}
  */
  readonly dynatrace?: DevopsagentServiceServiceDetailsDynatrace;
  /**
  * GitLab service configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#git_lab DevopsagentService#git_lab}
  */
  readonly gitLab?: DevopsagentServiceServiceDetailsGitLab;
  /**
  * MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#mcp_server DevopsagentService#mcp_server}
  */
  readonly mcpServer?: DevopsagentServiceServiceDetailsMcpServer;
  /**
  * Grafana MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#mcp_server_grafana DevopsagentService#mcp_server_grafana}
  */
  readonly mcpServerGrafana?: DevopsagentServiceServiceDetailsMcpServerGrafana;
  /**
  * New Relic service configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#mcp_server_new_relic DevopsagentService#mcp_server_new_relic}
  */
  readonly mcpServerNewRelic?: DevopsagentServiceServiceDetailsMcpServerNewRelic;
  /**
  * SigV4-authenticated MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#mcp_server_sig_v4 DevopsagentService#mcp_server_sig_v4}
  */
  readonly mcpServerSigV4?: DevopsagentServiceServiceDetailsMcpServerSigV4;
  /**
  * Splunk MCP server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#mcp_server_splunk DevopsagentService#mcp_server_splunk}
  */
  readonly mcpServerSplunk?: DevopsagentServiceServiceDetailsMcpServerSplunk;
  /**
  * PagerDuty service configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#pager_duty DevopsagentService#pager_duty}
  */
  readonly pagerDuty?: DevopsagentServiceServiceDetailsPagerDuty;
  /**
  * ServiceNow service configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#service_now DevopsagentService#service_now}
  */
  readonly serviceNow?: DevopsagentServiceServiceDetailsServiceNow;
}

export function devopsagentServiceServiceDetailsToTerraform(struct?: DevopsagentServiceServiceDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure_identity: devopsagentServiceServiceDetailsAzureIdentityToTerraform(struct!.azureIdentity),
    dynatrace: devopsagentServiceServiceDetailsDynatraceToTerraform(struct!.dynatrace),
    git_lab: devopsagentServiceServiceDetailsGitLabToTerraform(struct!.gitLab),
    mcp_server: devopsagentServiceServiceDetailsMcpServerToTerraform(struct!.mcpServer),
    mcp_server_grafana: devopsagentServiceServiceDetailsMcpServerGrafanaToTerraform(struct!.mcpServerGrafana),
    mcp_server_new_relic: devopsagentServiceServiceDetailsMcpServerNewRelicToTerraform(struct!.mcpServerNewRelic),
    mcp_server_sig_v4: devopsagentServiceServiceDetailsMcpServerSigV4ToTerraform(struct!.mcpServerSigV4),
    mcp_server_splunk: devopsagentServiceServiceDetailsMcpServerSplunkToTerraform(struct!.mcpServerSplunk),
    pager_duty: devopsagentServiceServiceDetailsPagerDutyToTerraform(struct!.pagerDuty),
    service_now: devopsagentServiceServiceDetailsServiceNowToTerraform(struct!.serviceNow),
  }
}


export function devopsagentServiceServiceDetailsToHclTerraform(struct?: DevopsagentServiceServiceDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure_identity: {
      value: devopsagentServiceServiceDetailsAzureIdentityToHclTerraform(struct!.azureIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsAzureIdentity",
    },
    dynatrace: {
      value: devopsagentServiceServiceDetailsDynatraceToHclTerraform(struct!.dynatrace),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsDynatrace",
    },
    git_lab: {
      value: devopsagentServiceServiceDetailsGitLabToHclTerraform(struct!.gitLab),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsGitLab",
    },
    mcp_server: {
      value: devopsagentServiceServiceDetailsMcpServerToHclTerraform(struct!.mcpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServer",
    },
    mcp_server_grafana: {
      value: devopsagentServiceServiceDetailsMcpServerGrafanaToHclTerraform(struct!.mcpServerGrafana),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerGrafana",
    },
    mcp_server_new_relic: {
      value: devopsagentServiceServiceDetailsMcpServerNewRelicToHclTerraform(struct!.mcpServerNewRelic),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerNewRelic",
    },
    mcp_server_sig_v4: {
      value: devopsagentServiceServiceDetailsMcpServerSigV4ToHclTerraform(struct!.mcpServerSigV4),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerSigV4",
    },
    mcp_server_splunk: {
      value: devopsagentServiceServiceDetailsMcpServerSplunkToHclTerraform(struct!.mcpServerSplunk),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsMcpServerSplunk",
    },
    pager_duty: {
      value: devopsagentServiceServiceDetailsPagerDutyToHclTerraform(struct!.pagerDuty),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsPagerDuty",
    },
    service_now: {
      value: devopsagentServiceServiceDetailsServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "DevopsagentServiceServiceDetailsServiceNow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsagentServiceServiceDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsagentServiceServiceDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureIdentity = this._azureIdentity?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._gitLab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitLab = this._gitLab?.internalValue;
    }
    if (this._mcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServer = this._mcpServer?.internalValue;
    }
    if (this._mcpServerGrafana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServerGrafana = this._mcpServerGrafana?.internalValue;
    }
    if (this._mcpServerNewRelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServerNewRelic = this._mcpServerNewRelic?.internalValue;
    }
    if (this._mcpServerSigV4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServerSigV4 = this._mcpServerSigV4?.internalValue;
    }
    if (this._mcpServerSplunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServerSplunk = this._mcpServerSplunk?.internalValue;
    }
    if (this._pagerDuty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerDuty = this._pagerDuty?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsagentServiceServiceDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureIdentity.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._gitLab.internalValue = undefined;
      this._mcpServer.internalValue = undefined;
      this._mcpServerGrafana.internalValue = undefined;
      this._mcpServerNewRelic.internalValue = undefined;
      this._mcpServerSigV4.internalValue = undefined;
      this._mcpServerSplunk.internalValue = undefined;
      this._pagerDuty.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureIdentity.internalValue = value.azureIdentity;
      this._dynatrace.internalValue = value.dynatrace;
      this._gitLab.internalValue = value.gitLab;
      this._mcpServer.internalValue = value.mcpServer;
      this._mcpServerGrafana.internalValue = value.mcpServerGrafana;
      this._mcpServerNewRelic.internalValue = value.mcpServerNewRelic;
      this._mcpServerSigV4.internalValue = value.mcpServerSigV4;
      this._mcpServerSplunk.internalValue = value.mcpServerSplunk;
      this._pagerDuty.internalValue = value.pagerDuty;
      this._serviceNow.internalValue = value.serviceNow;
    }
  }

  // azure_identity - computed: true, optional: true, required: false
  private _azureIdentity = new DevopsagentServiceServiceDetailsAzureIdentityOutputReference(this, "azure_identity");
  public get azureIdentity() {
    return this._azureIdentity;
  }
  public putAzureIdentity(value: DevopsagentServiceServiceDetailsAzureIdentity) {
    this._azureIdentity.internalValue = value;
  }
  public resetAzureIdentity() {
    this._azureIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureIdentityInput() {
    return this._azureIdentity.internalValue;
  }

  // dynatrace - computed: true, optional: true, required: false
  private _dynatrace = new DevopsagentServiceServiceDetailsDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: DevopsagentServiceServiceDetailsDynatrace) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // git_lab - computed: true, optional: true, required: false
  private _gitLab = new DevopsagentServiceServiceDetailsGitLabOutputReference(this, "git_lab");
  public get gitLab() {
    return this._gitLab;
  }
  public putGitLab(value: DevopsagentServiceServiceDetailsGitLab) {
    this._gitLab.internalValue = value;
  }
  public resetGitLab() {
    this._gitLab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitLabInput() {
    return this._gitLab.internalValue;
  }

  // mcp_server - computed: true, optional: true, required: false
  private _mcpServer = new DevopsagentServiceServiceDetailsMcpServerOutputReference(this, "mcp_server");
  public get mcpServer() {
    return this._mcpServer;
  }
  public putMcpServer(value: DevopsagentServiceServiceDetailsMcpServer) {
    this._mcpServer.internalValue = value;
  }
  public resetMcpServer() {
    this._mcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerInput() {
    return this._mcpServer.internalValue;
  }

  // mcp_server_grafana - computed: true, optional: true, required: false
  private _mcpServerGrafana = new DevopsagentServiceServiceDetailsMcpServerGrafanaOutputReference(this, "mcp_server_grafana");
  public get mcpServerGrafana() {
    return this._mcpServerGrafana;
  }
  public putMcpServerGrafana(value: DevopsagentServiceServiceDetailsMcpServerGrafana) {
    this._mcpServerGrafana.internalValue = value;
  }
  public resetMcpServerGrafana() {
    this._mcpServerGrafana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerGrafanaInput() {
    return this._mcpServerGrafana.internalValue;
  }

  // mcp_server_new_relic - computed: true, optional: true, required: false
  private _mcpServerNewRelic = new DevopsagentServiceServiceDetailsMcpServerNewRelicOutputReference(this, "mcp_server_new_relic");
  public get mcpServerNewRelic() {
    return this._mcpServerNewRelic;
  }
  public putMcpServerNewRelic(value: DevopsagentServiceServiceDetailsMcpServerNewRelic) {
    this._mcpServerNewRelic.internalValue = value;
  }
  public resetMcpServerNewRelic() {
    this._mcpServerNewRelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerNewRelicInput() {
    return this._mcpServerNewRelic.internalValue;
  }

  // mcp_server_sig_v4 - computed: true, optional: true, required: false
  private _mcpServerSigV4 = new DevopsagentServiceServiceDetailsMcpServerSigV4OutputReference(this, "mcp_server_sig_v4");
  public get mcpServerSigV4() {
    return this._mcpServerSigV4;
  }
  public putMcpServerSigV4(value: DevopsagentServiceServiceDetailsMcpServerSigV4) {
    this._mcpServerSigV4.internalValue = value;
  }
  public resetMcpServerSigV4() {
    this._mcpServerSigV4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerSigV4Input() {
    return this._mcpServerSigV4.internalValue;
  }

  // mcp_server_splunk - computed: true, optional: true, required: false
  private _mcpServerSplunk = new DevopsagentServiceServiceDetailsMcpServerSplunkOutputReference(this, "mcp_server_splunk");
  public get mcpServerSplunk() {
    return this._mcpServerSplunk;
  }
  public putMcpServerSplunk(value: DevopsagentServiceServiceDetailsMcpServerSplunk) {
    this._mcpServerSplunk.internalValue = value;
  }
  public resetMcpServerSplunk() {
    this._mcpServerSplunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerSplunkInput() {
    return this._mcpServerSplunk.internalValue;
  }

  // pager_duty - computed: true, optional: true, required: false
  private _pagerDuty = new DevopsagentServiceServiceDetailsPagerDutyOutputReference(this, "pager_duty");
  public get pagerDuty() {
    return this._pagerDuty;
  }
  public putPagerDuty(value: DevopsagentServiceServiceDetailsPagerDuty) {
    this._pagerDuty.internalValue = value;
  }
  public resetPagerDuty() {
    this._pagerDuty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyInput() {
    return this._pagerDuty.internalValue;
  }

  // service_now - computed: true, optional: true, required: false
  private _serviceNow = new DevopsagentServiceServiceDetailsServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: DevopsagentServiceServiceDetailsServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }
}
export interface DevopsagentServiceTags {
  /**
  * The key name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#key DevopsagentService#key}
  */
  readonly key?: string;
  /**
  * The value for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#value DevopsagentService#value}
  */
  readonly value?: string;
}

export function devopsagentServiceTagsToTerraform(struct?: DevopsagentServiceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function devopsagentServiceTagsToHclTerraform(struct?: DevopsagentServiceTags | cdktn.IResolvable): any {
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

export class DevopsagentServiceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DevopsagentServiceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DevopsagentServiceTags | cdktn.IResolvable | undefined) {
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

export class DevopsagentServiceTagsList extends cdktn.ComplexList {
  public internalValue? : DevopsagentServiceTags[] | cdktn.IResolvable

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
  public get(index: number): DevopsagentServiceTagsOutputReference {
    return new DevopsagentServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service awscc_devopsagent_service}
*/
export class DevopsagentService extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_devopsagent_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DevopsagentService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsagentService to import
  * @param importFromId The id of the existing DevopsagentService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsagentService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsagent_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/devopsagent_service awscc_devopsagent_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsagentServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsagentServiceConfig) {
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
    this._kmsKeyArn = config.kmsKeyArn;
    this._serviceDetails.internalValue = config.serviceDetails;
    this._serviceType = config.serviceType;
    this._tags.internalValue = config.tags;
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
  private _additionalServiceDetails = new DevopsagentServiceAdditionalServiceDetailsOutputReference(this, "additional_service_details");
  public get additionalServiceDetails() {
    return this._additionalServiceDetails;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // service_details - computed: true, optional: true, required: false
  private _serviceDetails = new DevopsagentServiceServiceDetailsOutputReference(this, "service_details");
  public get serviceDetails() {
    return this._serviceDetails;
  }
  public putServiceDetails(value: DevopsagentServiceServiceDetails) {
    this._serviceDetails.internalValue = value;
  }
  public resetServiceDetails() {
    this._serviceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDetailsInput() {
    return this._serviceDetails.internalValue;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DevopsagentServiceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DevopsagentServiceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      service_details: devopsagentServiceServiceDetailsToTerraform(this._serviceDetails.internalValue),
      service_type: cdktn.stringToTerraform(this._serviceType),
      tags: cdktn.listMapper(devopsagentServiceTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_details: {
        value: devopsagentServiceServiceDetailsToHclTerraform(this._serviceDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsagentServiceServiceDetails",
      },
      service_type: {
        value: cdktn.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(devopsagentServiceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DevopsagentServiceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
