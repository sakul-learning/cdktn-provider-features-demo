// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudfront_continuous_deployment_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCloudfrontContinuousDeploymentPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudfront_continuous_deployment_policy#id DataAwsccCloudfrontContinuousDeploymentPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig {
}

export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigToTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigToHclTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig {
}

export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigToTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigToHclTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_ttl - computed: true, optional: false, required: false
  public get idleTtl() {
    return this.getNumberAttribute('idle_ttl');
  }

  // maximum_ttl - computed: true, optional: false, required: false
  public get maximumTtl() {
    return this.getNumberAttribute('maximum_ttl');
  }
}
export interface DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig {
}

export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigToTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigToHclTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // session_stickiness_config - computed: true, optional: false, required: false
  private _sessionStickinessConfig = new DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference(this, "session_stickiness_config");
  public get sessionStickinessConfig() {
    return this._sessionStickinessConfig;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig {
}

export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigToTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigToHclTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig {
}

export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigToTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigToHclTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_ttl - computed: true, optional: false, required: false
  public get idleTtl() {
    return this.getNumberAttribute('idle_ttl');
  }

  // maximum_ttl - computed: true, optional: false, required: false
  public get maximumTtl() {
    return this.getNumberAttribute('maximum_ttl');
  }
}
export interface DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig {
}

export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigToTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigToHclTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // session_stickiness_config - computed: true, optional: false, required: false
  private _sessionStickinessConfig = new DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference(this, "session_stickiness_config");
  public get sessionStickinessConfig() {
    return this._sessionStickinessConfig;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig {
}

export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigToTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigToHclTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // single_header_config - computed: true, optional: false, required: false
  private _singleHeaderConfig = new DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference(this, "single_header_config");
  public get singleHeaderConfig() {
    return this._singleHeaderConfig;
  }

  // single_weight_config - computed: true, optional: false, required: false
  private _singleWeightConfig = new DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference(this, "single_weight_config");
  public get singleWeightConfig() {
    return this._singleWeightConfig;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig {
}

export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigToTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigToHclTerraform(struct?: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig | undefined) {
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

  // single_header_policy_config - computed: true, optional: false, required: false
  private _singleHeaderPolicyConfig = new DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference(this, "single_header_policy_config");
  public get singleHeaderPolicyConfig() {
    return this._singleHeaderPolicyConfig;
  }

  // single_weight_policy_config - computed: true, optional: false, required: false
  private _singleWeightPolicyConfig = new DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference(this, "single_weight_policy_config");
  public get singleWeightPolicyConfig() {
    return this._singleWeightPolicyConfig;
  }

  // staging_distribution_dns_names - computed: true, optional: false, required: false
  public get stagingDistributionDnsNames() {
    return this.getListAttribute('staging_distribution_dns_names');
  }

  // traffic_config - computed: true, optional: false, required: false
  private _trafficConfig = new DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference(this, "traffic_config");
  public get trafficConfig() {
    return this._trafficConfig;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudfront_continuous_deployment_policy awscc_cloudfront_continuous_deployment_policy}
*/
export class DataAwsccCloudfrontContinuousDeploymentPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_continuous_deployment_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCloudfrontContinuousDeploymentPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCloudfrontContinuousDeploymentPolicy to import
  * @param importFromId The id of the existing DataAwsccCloudfrontContinuousDeploymentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudfront_continuous_deployment_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCloudfrontContinuousDeploymentPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_continuous_deployment_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cloudfront_continuous_deployment_policy awscc_cloudfront_continuous_deployment_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontContinuousDeploymentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontContinuousDeploymentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_continuous_deployment_policy',
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

  // continuous_deployment_policy_config - computed: true, optional: false, required: false
  private _continuousDeploymentPolicyConfig = new DataAwsccCloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference(this, "continuous_deployment_policy_config");
  public get continuousDeploymentPolicyConfig() {
    return this._continuousDeploymentPolicyConfig;
  }

  // continuous_deployment_policy_id - computed: true, optional: false, required: false
  public get continuousDeploymentPolicyId() {
    return this.getStringAttribute('continuous_deployment_policy_id');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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
