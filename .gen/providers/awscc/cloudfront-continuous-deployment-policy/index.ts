// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudfrontContinuousDeploymentPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Contains the configuration for a continuous deployment policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#continuous_deployment_policy_config CloudfrontContinuousDeploymentPolicy#continuous_deployment_policy_config}
  */
  readonly continuousDeploymentPolicyConfig: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig;
}
export interface CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}
  */
  readonly value?: string;
}

export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
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

export class CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._value = value.value;
    }
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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
export interface CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig {
  /**
  * The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300?3600 seconds (5?60 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}
  */
  readonly idleTtl?: number;
  /**
  * The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300?3600 seconds (5?60 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}
  */
  readonly maximumTtl?: number;
}

export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_ttl: cdktn.numberToTerraform(struct!.idleTtl),
    maximum_ttl: cdktn.numberToTerraform(struct!.maximumTtl),
  }
}


export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_ttl: {
      value: cdktn.numberToHclTerraform(struct!.idleTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ttl: {
      value: cdktn.numberToHclTerraform(struct!.maximumTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTtl = this._idleTtl;
    }
    if (this._maximumTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTtl = this._maximumTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTtl = undefined;
      this._maximumTtl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTtl = value.idleTtl;
      this._maximumTtl = value.maximumTtl;
    }
  }

  // idle_ttl - computed: true, optional: true, required: false
  private _idleTtl?: number; 
  public get idleTtl() {
    return this.getNumberAttribute('idle_ttl');
  }
  public set idleTtl(value: number) {
    this._idleTtl = value;
  }
  public resetIdleTtl() {
    this._idleTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTtlInput() {
    return this._idleTtl;
  }

  // maximum_ttl - computed: true, optional: true, required: false
  private _maximumTtl?: number; 
  public get maximumTtl() {
    return this.getNumberAttribute('maximum_ttl');
  }
  public set maximumTtl(value: number) {
    this._maximumTtl = value;
  }
  public resetMaximumTtl() {
    this._maximumTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTtlInput() {
    return this._maximumTtl;
  }
}
export interface CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig {
  /**
  * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}
  */
  readonly sessionStickinessConfig?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}
  */
  readonly weight?: number;
}

export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_stickiness_config: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigToTerraform(struct!.sessionStickinessConfig),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    session_stickiness_config: {
      value: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigToHclTerraform(struct!.sessionStickinessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionStickinessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStickinessConfig = this._sessionStickinessConfig?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionStickinessConfig.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionStickinessConfig.internalValue = value.sessionStickinessConfig;
      this._weight = value.weight;
    }
  }

  // session_stickiness_config - computed: true, optional: true, required: false
  private _sessionStickinessConfig = new CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfigOutputReference(this, "session_stickiness_config");
  public get sessionStickinessConfig() {
    return this._sessionStickinessConfig;
  }
  public putSessionStickinessConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigSessionStickinessConfig) {
    this._sessionStickinessConfig.internalValue = value;
  }
  public resetSessionStickinessConfig() {
    this._sessionStickinessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickinessConfigInput() {
    return this._sessionStickinessConfig.internalValue;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig {
  /**
  * The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix ``aws-cf-cd-``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#header CloudfrontContinuousDeploymentPolicy#header}
  */
  readonly header?: string;
  /**
  * The request header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#value CloudfrontContinuousDeploymentPolicy#value}
  */
  readonly value?: string;
}

export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
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

export class CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._value = value.value;
    }
  }

  // header - computed: true, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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
export interface CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig {
  /**
  * The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300?3600 seconds (5?60 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#idle_ttl CloudfrontContinuousDeploymentPolicy#idle_ttl}
  */
  readonly idleTtl?: number;
  /**
  * The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300?3600 seconds (5?60 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#maximum_ttl CloudfrontContinuousDeploymentPolicy#maximum_ttl}
  */
  readonly maximumTtl?: number;
}

export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    idle_ttl: cdktn.numberToTerraform(struct!.idleTtl),
    maximum_ttl: cdktn.numberToTerraform(struct!.maximumTtl),
  }
}


export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    idle_ttl: {
      value: cdktn.numberToHclTerraform(struct!.idleTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_ttl: {
      value: cdktn.numberToHclTerraform(struct!.maximumTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTtl = this._idleTtl;
    }
    if (this._maximumTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTtl = this._maximumTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idleTtl = undefined;
      this._maximumTtl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idleTtl = value.idleTtl;
      this._maximumTtl = value.maximumTtl;
    }
  }

  // idle_ttl - computed: true, optional: true, required: false
  private _idleTtl?: number; 
  public get idleTtl() {
    return this.getNumberAttribute('idle_ttl');
  }
  public set idleTtl(value: number) {
    this._idleTtl = value;
  }
  public resetIdleTtl() {
    this._idleTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTtlInput() {
    return this._idleTtl;
  }

  // maximum_ttl - computed: true, optional: true, required: false
  private _maximumTtl?: number; 
  public get maximumTtl() {
    return this.getNumberAttribute('maximum_ttl');
  }
  public set maximumTtl(value: number) {
    this._maximumTtl = value;
  }
  public resetMaximumTtl() {
    this._maximumTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTtlInput() {
    return this._maximumTtl;
  }
}
export interface CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig {
  /**
  * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#session_stickiness_config CloudfrontContinuousDeploymentPolicy#session_stickiness_config}
  */
  readonly sessionStickinessConfig?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig;
  /**
  * The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#weight CloudfrontContinuousDeploymentPolicy#weight}
  */
  readonly weight?: number;
}

export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_stickiness_config: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigToTerraform(struct!.sessionStickinessConfig),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    session_stickiness_config: {
      value: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigToHclTerraform(struct!.sessionStickinessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionStickinessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStickinessConfig = this._sessionStickinessConfig?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionStickinessConfig.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionStickinessConfig.internalValue = value.sessionStickinessConfig;
      this._weight = value.weight;
    }
  }

  // session_stickiness_config - computed: true, optional: true, required: false
  private _sessionStickinessConfig = new CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfigOutputReference(this, "session_stickiness_config");
  public get sessionStickinessConfig() {
    return this._sessionStickinessConfig;
  }
  public putSessionStickinessConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigSessionStickinessConfig) {
    this._sessionStickinessConfig.internalValue = value;
  }
  public resetSessionStickinessConfig() {
    this._sessionStickinessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickinessConfigInput() {
    return this._sessionStickinessConfig.internalValue;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig {
  /**
  * Determines which HTTP requests are sent to the staging distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_config CloudfrontContinuousDeploymentPolicy#single_header_config}
  */
  readonly singleHeaderConfig?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig;
  /**
  * Contains the percentage of traffic to send to the staging distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_config CloudfrontContinuousDeploymentPolicy#single_weight_config}
  */
  readonly singleWeightConfig?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig;
  /**
  * The type of traffic configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}
  */
  readonly type?: string;
}

export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    single_header_config: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigToTerraform(struct!.singleHeaderConfig),
    single_weight_config: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigToTerraform(struct!.singleWeightConfig),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    single_header_config: {
      value: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigToHclTerraform(struct!.singleHeaderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig",
    },
    single_weight_config: {
      value: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigToHclTerraform(struct!.singleWeightConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._singleHeaderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeaderConfig = this._singleHeaderConfig?.internalValue;
    }
    if (this._singleWeightConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleWeightConfig = this._singleWeightConfig?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._singleHeaderConfig.internalValue = undefined;
      this._singleWeightConfig.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._singleHeaderConfig.internalValue = value.singleHeaderConfig;
      this._singleWeightConfig.internalValue = value.singleWeightConfig;
      this._type = value.type;
    }
  }

  // single_header_config - computed: true, optional: true, required: false
  private _singleHeaderConfig = new CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfigOutputReference(this, "single_header_config");
  public get singleHeaderConfig() {
    return this._singleHeaderConfig;
  }
  public putSingleHeaderConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleHeaderConfig) {
    this._singleHeaderConfig.internalValue = value;
  }
  public resetSingleHeaderConfig() {
    this._singleHeaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderConfigInput() {
    return this._singleHeaderConfig.internalValue;
  }

  // single_weight_config - computed: true, optional: true, required: false
  private _singleWeightConfig = new CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfigOutputReference(this, "single_weight_config");
  public get singleWeightConfig() {
    return this._singleWeightConfig;
  }
  public putSingleWeightConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigSingleWeightConfig) {
    this._singleWeightConfig.internalValue = value;
  }
  public resetSingleWeightConfig() {
    this._singleWeightConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleWeightConfigInput() {
    return this._singleWeightConfig.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig {
  /**
  * A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is ``true``, this policy is enabled and in effect. When this value is ``false``, this policy is not enabled and has no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#enabled CloudfrontContinuousDeploymentPolicy#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#single_header_policy_config CloudfrontContinuousDeploymentPolicy#single_header_policy_config}
  */
  readonly singleHeaderPolicyConfig?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig;
  /**
  * This configuration determines the percentage of HTTP requests that are sent to the staging distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#single_weight_policy_config CloudfrontContinuousDeploymentPolicy#single_weight_policy_config}
  */
  readonly singleWeightPolicyConfig?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig;
  /**
  * The CloudFront domain name of the staging distribution. For example: ``d111111abcdef8.cloudfront.net``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#staging_distribution_dns_names CloudfrontContinuousDeploymentPolicy#staging_distribution_dns_names}
  */
  readonly stagingDistributionDnsNames: string[];
  /**
  * Contains the parameters for routing production traffic from your primary to staging distributions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#traffic_config CloudfrontContinuousDeploymentPolicy#traffic_config}
  */
  readonly trafficConfig?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig;
  /**
  * The type of traffic configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#type CloudfrontContinuousDeploymentPolicy#type}
  */
  readonly type?: string;
}

export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigToTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    single_header_policy_config: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigToTerraform(struct!.singleHeaderPolicyConfig),
    single_weight_policy_config: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigToTerraform(struct!.singleWeightPolicyConfig),
    staging_distribution_dns_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stagingDistributionDnsNames),
    traffic_config: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigToTerraform(struct!.trafficConfig),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigToHclTerraform(struct?: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    single_header_policy_config: {
      value: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigToHclTerraform(struct!.singleHeaderPolicyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig",
    },
    single_weight_policy_config: {
      value: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigToHclTerraform(struct!.singleWeightPolicyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig",
    },
    staging_distribution_dns_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stagingDistributionDnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    traffic_config: {
      value: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigToHclTerraform(struct!.trafficConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._singleHeaderPolicyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeaderPolicyConfig = this._singleHeaderPolicyConfig?.internalValue;
    }
    if (this._singleWeightPolicyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleWeightPolicyConfig = this._singleWeightPolicyConfig?.internalValue;
    }
    if (this._stagingDistributionDnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingDistributionDnsNames = this._stagingDistributionDnsNames;
    }
    if (this._trafficConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficConfig = this._trafficConfig?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._singleHeaderPolicyConfig.internalValue = undefined;
      this._singleWeightPolicyConfig.internalValue = undefined;
      this._stagingDistributionDnsNames = undefined;
      this._trafficConfig.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._singleHeaderPolicyConfig.internalValue = value.singleHeaderPolicyConfig;
      this._singleWeightPolicyConfig.internalValue = value.singleWeightPolicyConfig;
      this._stagingDistributionDnsNames = value.stagingDistributionDnsNames;
      this._trafficConfig.internalValue = value.trafficConfig;
      this._type = value.type;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // single_header_policy_config - computed: true, optional: true, required: false
  private _singleHeaderPolicyConfig = new CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfigOutputReference(this, "single_header_policy_config");
  public get singleHeaderPolicyConfig() {
    return this._singleHeaderPolicyConfig;
  }
  public putSingleHeaderPolicyConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleHeaderPolicyConfig) {
    this._singleHeaderPolicyConfig.internalValue = value;
  }
  public resetSingleHeaderPolicyConfig() {
    this._singleHeaderPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderPolicyConfigInput() {
    return this._singleHeaderPolicyConfig.internalValue;
  }

  // single_weight_policy_config - computed: true, optional: true, required: false
  private _singleWeightPolicyConfig = new CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfigOutputReference(this, "single_weight_policy_config");
  public get singleWeightPolicyConfig() {
    return this._singleWeightPolicyConfig;
  }
  public putSingleWeightPolicyConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigSingleWeightPolicyConfig) {
    this._singleWeightPolicyConfig.internalValue = value;
  }
  public resetSingleWeightPolicyConfig() {
    this._singleWeightPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleWeightPolicyConfigInput() {
    return this._singleWeightPolicyConfig.internalValue;
  }

  // staging_distribution_dns_names - computed: false, optional: false, required: true
  private _stagingDistributionDnsNames?: string[]; 
  public get stagingDistributionDnsNames() {
    return this.getListAttribute('staging_distribution_dns_names');
  }
  public set stagingDistributionDnsNames(value: string[]) {
    this._stagingDistributionDnsNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingDistributionDnsNamesInput() {
    return this._stagingDistributionDnsNames;
  }

  // traffic_config - computed: true, optional: true, required: false
  private _trafficConfig = new CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfigOutputReference(this, "traffic_config");
  public get trafficConfig() {
    return this._trafficConfig;
  }
  public putTrafficConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigTrafficConfig) {
    this._trafficConfig.internalValue = value;
  }
  public resetTrafficConfig() {
    this._trafficConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficConfigInput() {
    return this._trafficConfig.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy awscc_cloudfront_continuous_deployment_policy}
*/
export class CloudfrontContinuousDeploymentPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cloudfront_continuous_deployment_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudfrontContinuousDeploymentPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontContinuousDeploymentPolicy to import
  * @param importFromId The id of the existing CloudfrontContinuousDeploymentPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontContinuousDeploymentPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_continuous_deployment_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cloudfront_continuous_deployment_policy awscc_cloudfront_continuous_deployment_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontContinuousDeploymentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontContinuousDeploymentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_continuous_deployment_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._continuousDeploymentPolicyConfig.internalValue = config.continuousDeploymentPolicyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // continuous_deployment_policy_config - computed: false, optional: false, required: true
  private _continuousDeploymentPolicyConfig = new CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigOutputReference(this, "continuous_deployment_policy_config");
  public get continuousDeploymentPolicyConfig() {
    return this._continuousDeploymentPolicyConfig;
  }
  public putContinuousDeploymentPolicyConfig(value: CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig) {
    this._continuousDeploymentPolicyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get continuousDeploymentPolicyConfigInput() {
    return this._continuousDeploymentPolicyConfig.internalValue;
  }

  // continuous_deployment_policy_id - computed: true, optional: false, required: false
  public get continuousDeploymentPolicyId() {
    return this.getStringAttribute('continuous_deployment_policy_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      continuous_deployment_policy_config: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigToTerraform(this._continuousDeploymentPolicyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      continuous_deployment_policy_config: {
        value: cloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfigToHclTerraform(this._continuousDeploymentPolicyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudfrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
