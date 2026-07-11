// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccElasticloadbalancingv2ListenerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_listener#id DataAwsccElasticloadbalancingv2Listener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccElasticloadbalancingv2ListenerCertificates {
}

export function dataAwsccElasticloadbalancingv2ListenerCertificatesToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerCertificatesToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerCertificates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
}

export class DataAwsccElasticloadbalancingv2ListenerCertificatesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference {
    return new DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_request_extra_params - computed: true, optional: false, required: false
  private _authenticationRequestExtraParams = new cdktn.StringMap(this, "authentication_request_extra_params");
  public get authenticationRequestExtraParams() {
    return this._authenticationRequestExtraParams;
  }

  // on_unauthenticated_request - computed: true, optional: false, required: false
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: false
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getStringAttribute('session_timeout');
  }

  // user_pool_arn - computed: true, optional: false, required: false
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }

  // user_pool_client_id - computed: true, optional: false, required: false
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }

  // user_pool_domain - computed: true, optional: false, required: false
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_request_extra_params - computed: true, optional: false, required: false
  private _authenticationRequestExtraParams = new cdktn.StringMap(this, "authentication_request_extra_params");
  public get authenticationRequestExtraParams() {
    return this._authenticationRequestExtraParams;
  }

  // authorization_endpoint - computed: true, optional: false, required: false
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // on_unauthenticated_request - computed: true, optional: false, required: false
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // session_cookie_name - computed: true, optional: false, required: false
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getStringAttribute('session_timeout');
  }

  // token_endpoint - computed: true, optional: false, required: false
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }

  // use_existing_client_secret - computed: true, optional: false, required: false
  public get useExistingClientSecret() {
    return this.getBooleanAttribute('use_existing_client_secret');
  }

  // user_info_endpoint - computed: true, optional: false, required: false
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // message_body - computed: true, optional: false, required: false
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference {
    return new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // target_group_stickiness_config - computed: true, optional: false, required: false
  private _targetGroupStickinessConfig = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference(this, "target_group_stickiness_config");
  public get targetGroupStickinessConfig() {
    return this._targetGroupStickinessConfig;
  }

  // target_groups - computed: true, optional: false, required: false
  private _targetGroups = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList(this, "target_groups", false);
  public get targetGroups() {
    return this._targetGroups;
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference {
    return new DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_claims - computed: true, optional: false, required: false
  private _additionalClaims = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList(this, "additional_claims", false);
  public get additionalClaims() {
    return this._additionalClaims;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // jwks_endpoint - computed: true, optional: false, required: false
  public get jwksEndpoint() {
    return this.getStringAttribute('jwks_endpoint');
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerDefaultActions {
}

export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerDefaultActionsToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerDefaultActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerDefaultActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerDefaultActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authenticate_cognito_config - computed: true, optional: false, required: false
  private _authenticateCognitoConfig = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference(this, "authenticate_cognito_config");
  public get authenticateCognitoConfig() {
    return this._authenticateCognitoConfig;
  }

  // authenticate_oidc_config - computed: true, optional: false, required: false
  private _authenticateOidcConfig = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference(this, "authenticate_oidc_config");
  public get authenticateOidcConfig() {
    return this._authenticateOidcConfig;
  }

  // fixed_response_config - computed: true, optional: false, required: false
  private _fixedResponseConfig = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference(this, "fixed_response_config");
  public get fixedResponseConfig() {
    return this._fixedResponseConfig;
  }

  // forward_config - computed: true, optional: false, required: false
  private _forwardConfig = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference(this, "forward_config");
  public get forwardConfig() {
    return this._forwardConfig;
  }

  // jwt_validation_config - computed: true, optional: false, required: false
  private _jwtValidationConfig = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference(this, "jwt_validation_config");
  public get jwtValidationConfig() {
    return this._jwtValidationConfig;
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // redirect_config - computed: true, optional: false, required: false
  private _redirectConfig = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference(this, "redirect_config");
  public get redirectConfig() {
    return this._redirectConfig;
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccElasticloadbalancingv2ListenerDefaultActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference {
    return new DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerListenerAttributes {
}

export function dataAwsccElasticloadbalancingv2ListenerListenerAttributesToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerListenerAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerListenerAttributesToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerListenerAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerListenerAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerListenerAttributes | undefined) {
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

export class DataAwsccElasticloadbalancingv2ListenerListenerAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference {
    return new DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingv2ListenerMutualAuthentication {
}

export function dataAwsccElasticloadbalancingv2ListenerMutualAuthenticationToTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerMutualAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingv2ListenerMutualAuthenticationToHclTerraform(struct?: DataAwsccElasticloadbalancingv2ListenerMutualAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingv2ListenerMutualAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingv2ListenerMutualAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_trust_store_ca_names - computed: true, optional: false, required: false
  public get advertiseTrustStoreCaNames() {
    return this.getStringAttribute('advertise_trust_store_ca_names');
  }

  // ignore_client_certificate_expiry - computed: true, optional: false, required: false
  public get ignoreClientCertificateExpiry() {
    return this.getBooleanAttribute('ignore_client_certificate_expiry');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // trust_store_arn - computed: true, optional: false, required: false
  public get trustStoreArn() {
    return this.getStringAttribute('trust_store_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener}
*/
export class DataAwsccElasticloadbalancingv2Listener extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticloadbalancingv2_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccElasticloadbalancingv2Listener to import
  * @param importFromId The id of the existing DataAwsccElasticloadbalancingv2Listener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccElasticloadbalancingv2Listener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancingv2_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticloadbalancingv2ListenerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticloadbalancingv2ListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticloadbalancingv2_listener',
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

  // alpn_policy - computed: true, optional: false, required: false
  public get alpnPolicy() {
    return this.getListAttribute('alpn_policy');
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataAwsccElasticloadbalancingv2ListenerCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // default_actions - computed: true, optional: false, required: false
  private _defaultActions = new DataAwsccElasticloadbalancingv2ListenerDefaultActionsList(this, "default_actions", false);
  public get defaultActions() {
    return this._defaultActions;
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

  // listener_arn - computed: true, optional: false, required: false
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }

  // listener_attributes - computed: true, optional: false, required: false
  private _listenerAttributes = new DataAwsccElasticloadbalancingv2ListenerListenerAttributesList(this, "listener_attributes", true);
  public get listenerAttributes() {
    return this._listenerAttributes;
  }

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }

  // mutual_authentication - computed: true, optional: false, required: false
  private _mutualAuthentication = new DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference(this, "mutual_authentication");
  public get mutualAuthentication() {
    return this._mutualAuthentication;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // ssl_policy - computed: true, optional: false, required: false
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
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
