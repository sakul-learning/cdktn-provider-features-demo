// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CodedeployDeploymentConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The destination platform type for the deployment (Lambda, Server, or ECS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}
  */
  readonly computePlatform?: string;
  /**
  * A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}
  */
  readonly deploymentConfigName?: string;
  /**
  * The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}
  */
  readonly minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts;
  /**
  * The configuration that specifies how the deployment traffic is routed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}
  */
  readonly trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig;
  /**
  * The zonal deployment config that specifies how the zonal deployment behaves
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#zonal_config CodedeployDeploymentConfig#zonal_config}
  */
  readonly zonalConfig?: CodedeployDeploymentConfigZonalConfig;
}
export interface CodedeployDeploymentConfigMinimumHealthyHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}
  */
  readonly value?: number;
}

export function codedeployDeploymentConfigMinimumHealthyHostsToTerraform(struct?: CodedeployDeploymentConfigMinimumHealthyHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function codedeployDeploymentConfigMinimumHealthyHostsToHclTerraform(struct?: CodedeployDeploymentConfigMinimumHealthyHosts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigMinimumHealthyHostsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodedeployDeploymentConfigMinimumHealthyHosts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigMinimumHealthyHosts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: number;
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#canary_interval CodedeployDeploymentConfig#canary_interval}
  */
  readonly canaryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#canary_percentage CodedeployDeploymentConfig#canary_percentage}
  */
  readonly canaryPercentage?: number;
}

export function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    canary_interval: cdktn.numberToTerraform(struct!.canaryInterval),
    canary_percentage: cdktn.numberToTerraform(struct!.canaryPercentage),
  }
}


export function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToHclTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    canary_interval: {
      value: cdktn.numberToHclTerraform(struct!.canaryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    canary_percentage: {
      value: cdktn.numberToHclTerraform(struct!.canaryPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canaryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryInterval = this._canaryInterval;
    }
    if (this._canaryPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryPercentage = this._canaryPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canaryInterval = undefined;
      this._canaryPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canaryInterval = value.canaryInterval;
      this._canaryPercentage = value.canaryPercentage;
    }
  }

  // canary_interval - computed: true, optional: true, required: false
  private _canaryInterval?: number;
  public get canaryInterval() {
    return this.getNumberAttribute('canary_interval');
  }
  public set canaryInterval(value: number) {
    this._canaryInterval = value;
  }
  public resetCanaryInterval() {
    this._canaryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryIntervalInput() {
    return this._canaryInterval;
  }

  // canary_percentage - computed: true, optional: true, required: false
  private _canaryPercentage?: number;
  public get canaryPercentage() {
    return this.getNumberAttribute('canary_percentage');
  }
  public set canaryPercentage(value: number) {
    this._canaryPercentage = value;
  }
  public resetCanaryPercentage() {
    this._canaryPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryPercentageInput() {
    return this._canaryPercentage;
  }
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#linear_interval CodedeployDeploymentConfig#linear_interval}
  */
  readonly linearInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#linear_percentage CodedeployDeploymentConfig#linear_percentage}
  */
  readonly linearPercentage?: number;
}

export function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    linear_interval: cdktn.numberToTerraform(struct!.linearInterval),
    linear_percentage: cdktn.numberToTerraform(struct!.linearPercentage),
  }
}


export function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToHclTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    linear_interval: {
      value: cdktn.numberToHclTerraform(struct!.linearInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linear_percentage: {
      value: cdktn.numberToHclTerraform(struct!.linearPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linearInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearInterval = this._linearInterval;
    }
    if (this._linearPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearPercentage = this._linearPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linearInterval = undefined;
      this._linearPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linearInterval = value.linearInterval;
      this._linearPercentage = value.linearPercentage;
    }
  }

  // linear_interval - computed: true, optional: true, required: false
  private _linearInterval?: number;
  public get linearInterval() {
    return this.getNumberAttribute('linear_interval');
  }
  public set linearInterval(value: number) {
    this._linearInterval = value;
  }
  public resetLinearInterval() {
    this._linearInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearIntervalInput() {
    return this._linearInterval;
  }

  // linear_percentage - computed: true, optional: true, required: false
  private _linearPercentage?: number;
  public get linearPercentage() {
    return this.getNumberAttribute('linear_percentage');
  }
  public set linearPercentage(value: number) {
    this._linearPercentage = value;
  }
  public resetLinearPercentage() {
    this._linearPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearPercentageInput() {
    return this._linearPercentage;
  }
}
export interface CodedeployDeploymentConfigTrafficRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}
  */
  readonly timeBasedCanary?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}
  */
  readonly timeBasedLinear?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}
  */
  readonly type?: string;
}

export function codedeployDeploymentConfigTrafficRoutingConfigToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    time_based_canary: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct!.timeBasedCanary),
    time_based_linear: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct!.timeBasedLinear),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function codedeployDeploymentConfigTrafficRoutingConfigToHclTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    time_based_canary: {
      value: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToHclTerraform(struct!.timeBasedCanary),
      isBlock: true,
      type: "struct",
      storageClassType: "CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary",
    },
    time_based_linear: {
      value: codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToHclTerraform(struct!.timeBasedLinear),
      isBlock: true,
      type: "struct",
      storageClassType: "CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear",
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

export class CodedeployDeploymentConfigTrafficRoutingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeBasedCanary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedCanary = this._timeBasedCanary?.internalValue;
    }
    if (this._timeBasedLinear?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBasedLinear = this._timeBasedLinear?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeBasedCanary.internalValue = undefined;
      this._timeBasedLinear.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeBasedCanary.internalValue = value.timeBasedCanary;
      this._timeBasedLinear.internalValue = value.timeBasedLinear;
      this._type = value.type;
    }
  }

  // time_based_canary - computed: true, optional: true, required: false
  private _timeBasedCanary = new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(this, "time_based_canary");
  public get timeBasedCanary() {
    return this._timeBasedCanary;
  }
  public putTimeBasedCanary(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary) {
    this._timeBasedCanary.internalValue = value;
  }
  public resetTimeBasedCanary() {
    this._timeBasedCanary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedCanaryInput() {
    return this._timeBasedCanary.internalValue;
  }

  // time_based_linear - computed: true, optional: true, required: false
  private _timeBasedLinear = new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(this, "time_based_linear");
  public get timeBasedLinear() {
    return this._timeBasedLinear;
  }
  public putTimeBasedLinear(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear) {
    this._timeBasedLinear.internalValue = value;
  }
  public resetTimeBasedLinear() {
    this._timeBasedLinear.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBasedLinearInput() {
    return this._timeBasedLinear.internalValue;
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
export interface CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}
  */
  readonly value?: number;
}

export function codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToTerraform(struct?: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToHclTerraform(struct?: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: number;
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface CodedeployDeploymentConfigZonalConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}
  */
  readonly firstZoneMonitorDurationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}
  */
  readonly minimumHealthyHostsPerZone?: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}
  */
  readonly monitorDurationInSeconds?: number;
}

export function codedeployDeploymentConfigZonalConfigToTerraform(struct?: CodedeployDeploymentConfigZonalConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    first_zone_monitor_duration_in_seconds: cdktn.numberToTerraform(struct!.firstZoneMonitorDurationInSeconds),
    minimum_healthy_hosts_per_zone: codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToTerraform(struct!.minimumHealthyHostsPerZone),
    monitor_duration_in_seconds: cdktn.numberToTerraform(struct!.monitorDurationInSeconds),
  }
}


export function codedeployDeploymentConfigZonalConfigToHclTerraform(struct?: CodedeployDeploymentConfigZonalConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    first_zone_monitor_duration_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.firstZoneMonitorDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_healthy_hosts_per_zone: {
      value: codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToHclTerraform(struct!.minimumHealthyHostsPerZone),
      isBlock: true,
      type: "struct",
      storageClassType: "CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone",
    },
    monitor_duration_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.monitorDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodedeployDeploymentConfigZonalConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CodedeployDeploymentConfigZonalConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstZoneMonitorDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstZoneMonitorDurationInSeconds = this._firstZoneMonitorDurationInSeconds;
    }
    if (this._minimumHealthyHostsPerZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumHealthyHostsPerZone = this._minimumHealthyHostsPerZone?.internalValue;
    }
    if (this._monitorDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDurationInSeconds = this._monitorDurationInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodedeployDeploymentConfigZonalConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstZoneMonitorDurationInSeconds = undefined;
      this._minimumHealthyHostsPerZone.internalValue = undefined;
      this._monitorDurationInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstZoneMonitorDurationInSeconds = value.firstZoneMonitorDurationInSeconds;
      this._minimumHealthyHostsPerZone.internalValue = value.minimumHealthyHostsPerZone;
      this._monitorDurationInSeconds = value.monitorDurationInSeconds;
    }
  }

  // first_zone_monitor_duration_in_seconds - computed: true, optional: true, required: false
  private _firstZoneMonitorDurationInSeconds?: number;
  public get firstZoneMonitorDurationInSeconds() {
    return this.getNumberAttribute('first_zone_monitor_duration_in_seconds');
  }
  public set firstZoneMonitorDurationInSeconds(value: number) {
    this._firstZoneMonitorDurationInSeconds = value;
  }
  public resetFirstZoneMonitorDurationInSeconds() {
    this._firstZoneMonitorDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstZoneMonitorDurationInSecondsInput() {
    return this._firstZoneMonitorDurationInSeconds;
  }

  // minimum_healthy_hosts_per_zone - computed: true, optional: true, required: false
  private _minimumHealthyHostsPerZone = new CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference(this, "minimum_healthy_hosts_per_zone");
  public get minimumHealthyHostsPerZone() {
    return this._minimumHealthyHostsPerZone;
  }
  public putMinimumHealthyHostsPerZone(value: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone) {
    this._minimumHealthyHostsPerZone.internalValue = value;
  }
  public resetMinimumHealthyHostsPerZone() {
    this._minimumHealthyHostsPerZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHealthyHostsPerZoneInput() {
    return this._minimumHealthyHostsPerZone.internalValue;
  }

  // monitor_duration_in_seconds - computed: true, optional: true, required: false
  private _monitorDurationInSeconds?: number;
  public get monitorDurationInSeconds() {
    return this.getNumberAttribute('monitor_duration_in_seconds');
  }
  public set monitorDurationInSeconds(value: number) {
    this._monitorDurationInSeconds = value;
  }
  public resetMonitorDurationInSeconds() {
    this._monitorDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDurationInSecondsInput() {
    return this._monitorDurationInSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config awscc_codedeploy_deployment_config}
*/
export class CodedeployDeploymentConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_codedeploy_deployment_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodedeployDeploymentConfig to import
  * @param importFromId The id of the existing CodedeployDeploymentConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodedeployDeploymentConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codedeploy_deployment_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/codedeploy_deployment_config awscc_codedeploy_deployment_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodedeployDeploymentConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CodedeployDeploymentConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_codedeploy_deployment_config',
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
    this._computePlatform = config.computePlatform;
    this._deploymentConfigName = config.deploymentConfigName;
    this._minimumHealthyHosts.internalValue = config.minimumHealthyHosts;
    this._trafficRoutingConfig.internalValue = config.trafficRoutingConfig;
    this._zonalConfig.internalValue = config.zonalConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_platform - computed: true, optional: true, required: false
  private _computePlatform?: string;
  public get computePlatform() {
    return this.getStringAttribute('compute_platform');
  }
  public set computePlatform(value: string) {
    this._computePlatform = value;
  }
  public resetComputePlatform() {
    this._computePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computePlatformInput() {
    return this._computePlatform;
  }

  // deployment_config_name - computed: true, optional: true, required: false
  private _deploymentConfigName?: string;
  public get deploymentConfigName() {
    return this.getStringAttribute('deployment_config_name');
  }
  public set deploymentConfigName(value: string) {
    this._deploymentConfigName = value;
  }
  public resetDeploymentConfigName() {
    this._deploymentConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigNameInput() {
    return this._deploymentConfigName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_healthy_hosts - computed: true, optional: true, required: false
  private _minimumHealthyHosts = new CodedeployDeploymentConfigMinimumHealthyHostsOutputReference(this, "minimum_healthy_hosts");
  public get minimumHealthyHosts() {
    return this._minimumHealthyHosts;
  }
  public putMinimumHealthyHosts(value: CodedeployDeploymentConfigMinimumHealthyHosts) {
    this._minimumHealthyHosts.internalValue = value;
  }
  public resetMinimumHealthyHosts() {
    this._minimumHealthyHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHealthyHostsInput() {
    return this._minimumHealthyHosts.internalValue;
  }

  // traffic_routing_config - computed: true, optional: true, required: false
  private _trafficRoutingConfig = new CodedeployDeploymentConfigTrafficRoutingConfigOutputReference(this, "traffic_routing_config");
  public get trafficRoutingConfig() {
    return this._trafficRoutingConfig;
  }
  public putTrafficRoutingConfig(value: CodedeployDeploymentConfigTrafficRoutingConfig) {
    this._trafficRoutingConfig.internalValue = value;
  }
  public resetTrafficRoutingConfig() {
    this._trafficRoutingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingConfigInput() {
    return this._trafficRoutingConfig.internalValue;
  }

  // zonal_config - computed: true, optional: true, required: false
  private _zonalConfig = new CodedeployDeploymentConfigZonalConfigOutputReference(this, "zonal_config");
  public get zonalConfig() {
    return this._zonalConfig;
  }
  public putZonalConfig(value: CodedeployDeploymentConfigZonalConfig) {
    this._zonalConfig.internalValue = value;
  }
  public resetZonalConfig() {
    this._zonalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonalConfigInput() {
    return this._zonalConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_platform: cdktn.stringToTerraform(this._computePlatform),
      deployment_config_name: cdktn.stringToTerraform(this._deploymentConfigName),
      minimum_healthy_hosts: codedeployDeploymentConfigMinimumHealthyHostsToTerraform(this._minimumHealthyHosts.internalValue),
      traffic_routing_config: codedeployDeploymentConfigTrafficRoutingConfigToTerraform(this._trafficRoutingConfig.internalValue),
      zonal_config: codedeployDeploymentConfigZonalConfigToTerraform(this._zonalConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_platform: {
        value: cdktn.stringToHclTerraform(this._computePlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_config_name: {
        value: cdktn.stringToHclTerraform(this._deploymentConfigName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_healthy_hosts: {
        value: codedeployDeploymentConfigMinimumHealthyHostsToHclTerraform(this._minimumHealthyHosts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CodedeployDeploymentConfigMinimumHealthyHosts",
      },
      traffic_routing_config: {
        value: codedeployDeploymentConfigTrafficRoutingConfigToHclTerraform(this._trafficRoutingConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CodedeployDeploymentConfigTrafficRoutingConfig",
      },
      zonal_config: {
        value: codedeployDeploymentConfigZonalConfigToHclTerraform(this._zonalConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CodedeployDeploymentConfigZonalConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
