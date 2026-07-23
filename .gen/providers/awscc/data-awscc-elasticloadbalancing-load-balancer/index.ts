// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancing_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccElasticloadbalancingLoadBalancerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancing_load_balancer#id DataAwsccElasticloadbalancingLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy {
}

export function dataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // emit_interval - computed: true, optional: false, required: false
  public get emitInterval() {
    return this.getNumberAttribute('emit_interval');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_bucket_prefix - computed: true, optional: false, required: false
  public get s3BucketPrefix() {
    return this.getStringAttribute('s3_bucket_prefix');
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy {
}

export function dataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie_name - computed: true, optional: false, required: false
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
}

export class DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference {
    return new DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy {
}

export function dataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerConnectionSettings {
}

export function dataAwsccElasticloadbalancingLoadBalancerConnectionSettingsToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerConnectionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerConnectionSettingsToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerConnectionSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerConnectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerConnectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerHealthCheck {
}

export function dataAwsccElasticloadbalancingLoadBalancerHealthCheckToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerHealthCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerHealthCheckToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerHealthCheck): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getStringAttribute('healthy_threshold');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getStringAttribute('unhealthy_threshold');
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy {
}

export function dataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie_expiration_period - computed: true, optional: false, required: false
  public get cookieExpirationPeriod() {
    return this.getStringAttribute('cookie_expiration_period');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
}

export class DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference {
    return new DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerListeners {
}

export function dataAwsccElasticloadbalancingLoadBalancerListenersToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerListeners): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerListenersToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerListeners): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_port - computed: true, optional: false, required: false
  public get instancePort() {
    return this.getStringAttribute('instance_port');
  }

  // instance_protocol - computed: true, optional: false, required: false
  public get instanceProtocol() {
    return this.getStringAttribute('instance_protocol');
  }

  // load_balancer_port - computed: true, optional: false, required: false
  public get loadBalancerPort() {
    return this.getStringAttribute('load_balancer_port');
  }

  // policy_names - computed: true, optional: false, required: false
  public get policyNames() {
    return this.getListAttribute('policy_names');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // ssl_certificate_id - computed: true, optional: false, required: false
  public get sslCertificateId() {
    return this.getStringAttribute('ssl_certificate_id');
  }
}

export class DataAwsccElasticloadbalancingLoadBalancerListenersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference {
    return new DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes {
}

export function dataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference {
    return new DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerPolicies {
}

export function dataAwsccElasticloadbalancingLoadBalancerPoliciesToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerPoliciesToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // instance_ports - computed: true, optional: false, required: false
  public get instancePorts() {
    return this.getListAttribute('instance_ports');
  }

  // load_balancer_ports - computed: true, optional: false, required: false
  public get loadBalancerPorts() {
    return this.getListAttribute('load_balancer_ports');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
}

export class DataAwsccElasticloadbalancingLoadBalancerPoliciesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference {
    return new DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup {
}

export function dataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // owner_alias - computed: true, optional: false, required: false
  public get ownerAlias() {
    return this.getStringAttribute('owner_alias');
  }
}
export interface DataAwsccElasticloadbalancingLoadBalancerTags {
}

export function dataAwsccElasticloadbalancingLoadBalancerTagsToTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccElasticloadbalancingLoadBalancerTagsToHclTerraform(struct?: DataAwsccElasticloadbalancingLoadBalancerTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccElasticloadbalancingLoadBalancerTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccElasticloadbalancingLoadBalancerTags | undefined) {
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

export class DataAwsccElasticloadbalancingLoadBalancerTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference {
    return new DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancing_load_balancer awscc_elasticloadbalancing_load_balancer}
*/
export class DataAwsccElasticloadbalancingLoadBalancer extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_elasticloadbalancing_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccElasticloadbalancingLoadBalancer to import
  * @param importFromId The id of the existing DataAwsccElasticloadbalancingLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancing_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccElasticloadbalancingLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticloadbalancing_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/elasticloadbalancing_load_balancer awscc_elasticloadbalancing_load_balancer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccElasticloadbalancingLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccElasticloadbalancingLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticloadbalancing_load_balancer',
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

  // access_logging_policy - computed: true, optional: false, required: false
  private _accessLoggingPolicy = new DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference(this, "access_logging_policy");
  public get accessLoggingPolicy() {
    return this._accessLoggingPolicy;
  }

  // app_cookie_stickiness_policy - computed: true, optional: false, required: false
  private _appCookieStickinessPolicy = new DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList(this, "app_cookie_stickiness_policy", false);
  public get appCookieStickinessPolicy() {
    return this._appCookieStickinessPolicy;
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // canonical_hosted_zone_name - computed: true, optional: false, required: false
  public get canonicalHostedZoneName() {
    return this.getStringAttribute('canonical_hosted_zone_name');
  }

  // canonical_hosted_zone_name_id - computed: true, optional: false, required: false
  public get canonicalHostedZoneNameId() {
    return this.getStringAttribute('canonical_hosted_zone_name_id');
  }

  // connection_draining_policy - computed: true, optional: false, required: false
  private _connectionDrainingPolicy = new DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference(this, "connection_draining_policy");
  public get connectionDrainingPolicy() {
    return this._connectionDrainingPolicy;
  }

  // connection_settings - computed: true, optional: false, required: false
  private _connectionSettings = new DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference(this, "connection_settings");
  public get connectionSettings() {
    return this._connectionSettings;
  }

  // cross_zone - computed: true, optional: false, required: false
  public get crossZone() {
    return this.getBooleanAttribute('cross_zone');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
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

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // lb_cookie_stickiness_policy - computed: true, optional: false, required: false
  private _lbCookieStickinessPolicy = new DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList(this, "lb_cookie_stickiness_policy", false);
  public get lbCookieStickinessPolicy() {
    return this._lbCookieStickinessPolicy;
  }

  // listeners - computed: true, optional: false, required: false
  private _listeners = new DataAwsccElasticloadbalancingLoadBalancerListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataAwsccElasticloadbalancingLoadBalancerPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // source_security_group - computed: true, optional: false, required: false
  private _sourceSecurityGroup = new DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference(this, "source_security_group");
  public get sourceSecurityGroup() {
    return this._sourceSecurityGroup;
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccElasticloadbalancingLoadBalancerTagsList(this, "tags", false);
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
