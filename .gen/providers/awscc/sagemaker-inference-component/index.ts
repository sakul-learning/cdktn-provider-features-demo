// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerInferenceComponentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The deployment config for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#deployment_config SagemakerInferenceComponent#deployment_config}
  */
  readonly deploymentConfig?: SagemakerInferenceComponentDeploymentConfig;
  /**
  * The Amazon Resource Name (ARN) of the endpoint the inference component is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#endpoint_arn SagemakerInferenceComponent#endpoint_arn}
  */
  readonly endpointArn?: string;
  /**
  * The name of the endpoint the inference component is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#endpoint_name SagemakerInferenceComponent#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * The name of the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#inference_component_name SagemakerInferenceComponent#inference_component_name}
  */
  readonly inferenceComponentName?: string;
  /**
  * The runtime config for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#runtime_config SagemakerInferenceComponent#runtime_config}
  */
  readonly runtimeConfig?: SagemakerInferenceComponentRuntimeConfig;
  /**
  * The specification for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#specification SagemakerInferenceComponent#specification}
  */
  readonly specification: SagemakerInferenceComponentSpecification;
  /**
  * An array of tags to apply to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#tags SagemakerInferenceComponent#tags}
  */
  readonly tags?: SagemakerInferenceComponentTags[] | cdktn.IResolvable;
  /**
  * The name of the endpoint variant the inference component is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#variant_name SagemakerInferenceComponent#variant_name}
  */
  readonly variantName?: string;
}
export interface SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#alarm_name SagemakerInferenceComponent#alarm_name}
  */
  readonly alarmName?: string;
}

export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarm_name: cdktn.stringToTerraform(struct!.alarmName),
  }
}


export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarm_name: {
      value: cdktn.stringToHclTerraform(struct!.alarmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
    }
  }

  // alarm_name - computed: true, optional: true, required: false
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  public resetAlarmName() {
    this._alarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference {
    return new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#alarms SagemakerInferenceComponent#alarms}
  */
  readonly alarms?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktn.IResolvable;
}

export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarms: cdktn.listMapper(sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform, false)(struct!.alarms),
  }
}


export function sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarms: {
      value: cdktn.listMapperHcl(sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform, false)(struct!.alarms),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarms.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarms.internalValue = value.alarms;
    }
  }

  // alarms - computed: true, optional: true, required: false
  private _alarms = new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktn.IResolvable) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }
}
export interface SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}
  */
  readonly type?: string;
  /**
  * The number of copies for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}
  */
  readonly value?: number;
}

export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable): any {
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

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize | cdktn.IResolvable | undefined) {
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
export interface SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#type SagemakerInferenceComponent#type}
  */
  readonly type?: string;
  /**
  * The number of copies for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}
  */
  readonly value?: number;
}

export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable): any {
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

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | cdktn.IResolvable | undefined) {
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
export interface SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy {
  /**
  * Capacity size configuration for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#maximum_batch_size SagemakerInferenceComponent#maximum_batch_size}
  */
  readonly maximumBatchSize?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#maximum_execution_timeout_in_seconds SagemakerInferenceComponent#maximum_execution_timeout_in_seconds}
  */
  readonly maximumExecutionTimeoutInSeconds?: number;
  /**
  * Capacity size configuration for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#rollback_maximum_batch_size SagemakerInferenceComponent#rollback_maximum_batch_size}
  */
  readonly rollbackMaximumBatchSize?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#wait_interval_in_seconds SagemakerInferenceComponent#wait_interval_in_seconds}
  */
  readonly waitIntervalInSeconds?: number;
}

export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_batch_size: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct!.maximumBatchSize),
    maximum_execution_timeout_in_seconds: cdktn.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
    rollback_maximum_batch_size: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct!.rollbackMaximumBatchSize),
    wait_interval_in_seconds: cdktn.numberToTerraform(struct!.waitIntervalInSeconds),
  }
}


export function sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_batch_size: {
      value: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct!.maximumBatchSize),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize",
    },
    maximum_execution_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maximumExecutionTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollback_maximum_batch_size: {
      value: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct!.rollbackMaximumBatchSize),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize",
    },
    wait_interval_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.waitIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBatchSize = this._maximumBatchSize?.internalValue;
    }
    if (this._maximumExecutionTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
    }
    if (this._rollbackMaximumBatchSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackMaximumBatchSize = this._rollbackMaximumBatchSize?.internalValue;
    }
    if (this._waitIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumBatchSize.internalValue = undefined;
      this._maximumExecutionTimeoutInSeconds = undefined;
      this._rollbackMaximumBatchSize.internalValue = undefined;
      this._waitIntervalInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumBatchSize.internalValue = value.maximumBatchSize;
      this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
      this._rollbackMaximumBatchSize.internalValue = value.rollbackMaximumBatchSize;
      this._waitIntervalInSeconds = value.waitIntervalInSeconds;
    }
  }

  // maximum_batch_size - computed: true, optional: true, required: false
  private _maximumBatchSize = new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(this, "maximum_batch_size");
  public get maximumBatchSize() {
    return this._maximumBatchSize;
  }
  public putMaximumBatchSize(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyMaximumBatchSize) {
    this._maximumBatchSize.internalValue = value;
  }
  public resetMaximumBatchSize() {
    this._maximumBatchSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchSizeInput() {
    return this._maximumBatchSize.internalValue;
  }

  // maximum_execution_timeout_in_seconds - computed: true, optional: true, required: false
  private _maximumExecutionTimeoutInSeconds?: number; 
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }
  public set maximumExecutionTimeoutInSeconds(value: number) {
    this._maximumExecutionTimeoutInSeconds = value;
  }
  public resetMaximumExecutionTimeoutInSeconds() {
    this._maximumExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionTimeoutInSecondsInput() {
    return this._maximumExecutionTimeoutInSeconds;
  }

  // rollback_maximum_batch_size - computed: true, optional: true, required: false
  private _rollbackMaximumBatchSize = new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(this, "rollback_maximum_batch_size");
  public get rollbackMaximumBatchSize() {
    return this._rollbackMaximumBatchSize;
  }
  public putRollbackMaximumBatchSize(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize) {
    this._rollbackMaximumBatchSize.internalValue = value;
  }
  public resetRollbackMaximumBatchSize() {
    this._rollbackMaximumBatchSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackMaximumBatchSizeInput() {
    return this._rollbackMaximumBatchSize.internalValue;
  }

  // wait_interval_in_seconds - computed: true, optional: true, required: false
  private _waitIntervalInSeconds?: number; 
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
  public set waitIntervalInSeconds(value: number) {
    this._waitIntervalInSeconds = value;
  }
  public resetWaitIntervalInSeconds() {
    this._waitIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInSecondsInput() {
    return this._waitIntervalInSeconds;
  }
}
export interface SagemakerInferenceComponentDeploymentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#auto_rollback_configuration SagemakerInferenceComponent#auto_rollback_configuration}
  */
  readonly autoRollbackConfiguration?: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration;
  /**
  * The rolling update policy for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#rolling_update_policy SagemakerInferenceComponent#rolling_update_policy}
  */
  readonly rollingUpdatePolicy?: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy;
}

export function sagemakerInferenceComponentDeploymentConfigToTerraform(struct?: SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_rollback_configuration: sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToTerraform(struct!.autoRollbackConfiguration),
    rolling_update_policy: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToTerraform(struct!.rollingUpdatePolicy),
  }
}


export function sagemakerInferenceComponentDeploymentConfigToHclTerraform(struct?: SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_rollback_configuration: {
      value: sagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct!.autoRollbackConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration",
    },
    rolling_update_policy: {
      value: sagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyToHclTerraform(struct!.rollingUpdatePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentDeploymentConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRollbackConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
    }
    if (this._rollingUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdatePolicy = this._rollingUpdatePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentDeploymentConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRollbackConfiguration.internalValue = undefined;
      this._rollingUpdatePolicy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
      this._rollingUpdatePolicy.internalValue = value.rollingUpdatePolicy;
    }
  }

  // auto_rollback_configuration - computed: true, optional: true, required: false
  private _autoRollbackConfiguration = new SagemakerInferenceComponentDeploymentConfigAutoRollbackConfigurationOutputReference(this, "auto_rollback_configuration");
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }
  public putAutoRollbackConfiguration(value: SagemakerInferenceComponentDeploymentConfigAutoRollbackConfiguration) {
    this._autoRollbackConfiguration.internalValue = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration.internalValue;
  }

  // rolling_update_policy - computed: true, optional: true, required: false
  private _rollingUpdatePolicy = new SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicyOutputReference(this, "rolling_update_policy");
  public get rollingUpdatePolicy() {
    return this._rollingUpdatePolicy;
  }
  public putRollingUpdatePolicy(value: SagemakerInferenceComponentDeploymentConfigRollingUpdatePolicy) {
    this._rollingUpdatePolicy.internalValue = value;
  }
  public resetRollingUpdatePolicy() {
    this._rollingUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdatePolicyInput() {
    return this._rollingUpdatePolicy.internalValue;
  }
}
export interface SagemakerInferenceComponentRuntimeConfig {
  /**
  * The number of copies for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#copy_count SagemakerInferenceComponent#copy_count}
  */
  readonly copyCount?: number;
}

export function sagemakerInferenceComponentRuntimeConfigToTerraform(struct?: SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    copy_count: cdktn.numberToTerraform(struct!.copyCount),
  }
}


export function sagemakerInferenceComponentRuntimeConfigToHclTerraform(struct?: SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    copy_count: {
      value: cdktn.numberToHclTerraform(struct!.copyCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentRuntimeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyCount = this._copyCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentRuntimeConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyCount = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyCount = value.copyCount;
    }
  }

  // copy_count - computed: true, optional: true, required: false
  private _copyCount?: number; 
  public get copyCount() {
    return this.getNumberAttribute('copy_count');
  }
  public set copyCount(value: number) {
    this._copyCount = value;
  }
  public resetCopyCount() {
    this._copyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyCountInput() {
    return this._copyCount;
  }

  // current_copy_count - computed: true, optional: false, required: false
  public get currentCopyCount() {
    return this.getNumberAttribute('current_copy_count');
  }

  // desired_copy_count - computed: true, optional: false, required: false
  public get desiredCopyCount() {
    return this.getNumberAttribute('desired_copy_count');
  }
}
export interface SagemakerInferenceComponentSpecificationComputeResourceRequirements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#max_memory_required_in_mb SagemakerInferenceComponent#max_memory_required_in_mb}
  */
  readonly maxMemoryRequiredInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#min_memory_required_in_mb SagemakerInferenceComponent#min_memory_required_in_mb}
  */
  readonly minMemoryRequiredInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#number_of_accelerator_devices_required SagemakerInferenceComponent#number_of_accelerator_devices_required}
  */
  readonly numberOfAcceleratorDevicesRequired?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#number_of_cpu_cores_required SagemakerInferenceComponent#number_of_cpu_cores_required}
  */
  readonly numberOfCpuCoresRequired?: number;
}

export function sagemakerInferenceComponentSpecificationComputeResourceRequirementsToTerraform(struct?: SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_memory_required_in_mb: cdktn.numberToTerraform(struct!.maxMemoryRequiredInMb),
    min_memory_required_in_mb: cdktn.numberToTerraform(struct!.minMemoryRequiredInMb),
    number_of_accelerator_devices_required: cdktn.numberToTerraform(struct!.numberOfAcceleratorDevicesRequired),
    number_of_cpu_cores_required: cdktn.numberToTerraform(struct!.numberOfCpuCoresRequired),
  }
}


export function sagemakerInferenceComponentSpecificationComputeResourceRequirementsToHclTerraform(struct?: SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.maxMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory_required_in_mb: {
      value: cdktn.numberToHclTerraform(struct!.minMemoryRequiredInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_accelerator_devices_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfAcceleratorDevicesRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_cpu_cores_required: {
      value: cdktn.numberToHclTerraform(struct!.numberOfCpuCoresRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryRequiredInMb = this._maxMemoryRequiredInMb;
    }
    if (this._minMemoryRequiredInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryRequiredInMb = this._minMemoryRequiredInMb;
    }
    if (this._numberOfAcceleratorDevicesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfAcceleratorDevicesRequired = this._numberOfAcceleratorDevicesRequired;
    }
    if (this._numberOfCpuCoresRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCpuCoresRequired = this._numberOfCpuCoresRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationComputeResourceRequirements | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = undefined;
      this._minMemoryRequiredInMb = undefined;
      this._numberOfAcceleratorDevicesRequired = undefined;
      this._numberOfCpuCoresRequired = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxMemoryRequiredInMb = value.maxMemoryRequiredInMb;
      this._minMemoryRequiredInMb = value.minMemoryRequiredInMb;
      this._numberOfAcceleratorDevicesRequired = value.numberOfAcceleratorDevicesRequired;
      this._numberOfCpuCoresRequired = value.numberOfCpuCoresRequired;
    }
  }

  // max_memory_required_in_mb - computed: true, optional: true, required: false
  private _maxMemoryRequiredInMb?: number; 
  public get maxMemoryRequiredInMb() {
    return this.getNumberAttribute('max_memory_required_in_mb');
  }
  public set maxMemoryRequiredInMb(value: number) {
    this._maxMemoryRequiredInMb = value;
  }
  public resetMaxMemoryRequiredInMb() {
    this._maxMemoryRequiredInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryRequiredInMbInput() {
    return this._maxMemoryRequiredInMb;
  }

  // min_memory_required_in_mb - computed: true, optional: true, required: false
  private _minMemoryRequiredInMb?: number; 
  public get minMemoryRequiredInMb() {
    return this.getNumberAttribute('min_memory_required_in_mb');
  }
  public set minMemoryRequiredInMb(value: number) {
    this._minMemoryRequiredInMb = value;
  }
  public resetMinMemoryRequiredInMb() {
    this._minMemoryRequiredInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryRequiredInMbInput() {
    return this._minMemoryRequiredInMb;
  }

  // number_of_accelerator_devices_required - computed: true, optional: true, required: false
  private _numberOfAcceleratorDevicesRequired?: number; 
  public get numberOfAcceleratorDevicesRequired() {
    return this.getNumberAttribute('number_of_accelerator_devices_required');
  }
  public set numberOfAcceleratorDevicesRequired(value: number) {
    this._numberOfAcceleratorDevicesRequired = value;
  }
  public resetNumberOfAcceleratorDevicesRequired() {
    this._numberOfAcceleratorDevicesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAcceleratorDevicesRequiredInput() {
    return this._numberOfAcceleratorDevicesRequired;
  }

  // number_of_cpu_cores_required - computed: true, optional: true, required: false
  private _numberOfCpuCoresRequired?: number; 
  public get numberOfCpuCoresRequired() {
    return this.getNumberAttribute('number_of_cpu_cores_required');
  }
  public set numberOfCpuCoresRequired(value: number) {
    this._numberOfCpuCoresRequired = value;
  }
  public resetNumberOfCpuCoresRequired() {
    this._numberOfCpuCoresRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpuCoresRequiredInput() {
    return this._numberOfCpuCoresRequired;
  }
}
export interface SagemakerInferenceComponentSpecificationContainerDeployedImage {
}

export function sagemakerInferenceComponentSpecificationContainerDeployedImageToTerraform(struct?: SagemakerInferenceComponentSpecificationContainerDeployedImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function sagemakerInferenceComponentSpecificationContainerDeployedImageToHclTerraform(struct?: SagemakerInferenceComponentSpecificationContainerDeployedImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationContainerDeployedImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationContainerDeployedImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resolution_time - computed: true, optional: false, required: false
  public get resolutionTime() {
    return this.getStringAttribute('resolution_time');
  }

  // resolved_image - computed: true, optional: false, required: false
  public get resolvedImage() {
    return this.getStringAttribute('resolved_image');
  }

  // specified_image - computed: true, optional: false, required: false
  public get specifiedImage() {
    return this.getStringAttribute('specified_image');
  }
}
export interface SagemakerInferenceComponentSpecificationContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#artifact_url SagemakerInferenceComponent#artifact_url}
  */
  readonly artifactUrl?: string;
  /**
  * Environment variables to specify on the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#environment SagemakerInferenceComponent#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The image to use for the container that will be materialized for the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#image SagemakerInferenceComponent#image}
  */
  readonly image?: string;
}

export function sagemakerInferenceComponentSpecificationContainerToTerraform(struct?: SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    artifact_url: cdktn.stringToTerraform(struct!.artifactUrl),
    environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
    image: cdktn.stringToTerraform(struct!.image),
  }
}


export function sagemakerInferenceComponentSpecificationContainerToHclTerraform(struct?: SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    artifact_url: {
      value: cdktn.stringToHclTerraform(struct!.artifactUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactUrl = this._artifactUrl;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactUrl = undefined;
      this._environment = undefined;
      this._image = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactUrl = value.artifactUrl;
      this._environment = value.environment;
      this._image = value.image;
    }
  }

  // artifact_url - computed: true, optional: true, required: false
  private _artifactUrl?: string; 
  public get artifactUrl() {
    return this.getStringAttribute('artifact_url');
  }
  public set artifactUrl(value: string) {
    this._artifactUrl = value;
  }
  public resetArtifactUrl() {
    this._artifactUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactUrlInput() {
    return this._artifactUrl;
  }

  // deployed_image - computed: true, optional: false, required: false
  private _deployedImage = new SagemakerInferenceComponentSpecificationContainerDeployedImageOutputReference(this, "deployed_image");
  public get deployedImage() {
    return this._deployedImage;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface SagemakerInferenceComponentSpecificationStartupParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#container_startup_health_check_timeout_in_seconds SagemakerInferenceComponent#container_startup_health_check_timeout_in_seconds}
  */
  readonly containerStartupHealthCheckTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#model_data_download_timeout_in_seconds SagemakerInferenceComponent#model_data_download_timeout_in_seconds}
  */
  readonly modelDataDownloadTimeoutInSeconds?: number;
}

export function sagemakerInferenceComponentSpecificationStartupParametersToTerraform(struct?: SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_startup_health_check_timeout_in_seconds: cdktn.numberToTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
    model_data_download_timeout_in_seconds: cdktn.numberToTerraform(struct!.modelDataDownloadTimeoutInSeconds),
  }
}


export function sagemakerInferenceComponentSpecificationStartupParametersToHclTerraform(struct?: SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_startup_health_check_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.containerStartupHealthCheckTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_data_download_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.modelDataDownloadTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationStartupParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerStartupHealthCheckTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerStartupHealthCheckTimeoutInSeconds = this._containerStartupHealthCheckTimeoutInSeconds;
    }
    if (this._modelDataDownloadTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataDownloadTimeoutInSeconds = this._modelDataDownloadTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecificationStartupParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = undefined;
      this._modelDataDownloadTimeoutInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerStartupHealthCheckTimeoutInSeconds = value.containerStartupHealthCheckTimeoutInSeconds;
      this._modelDataDownloadTimeoutInSeconds = value.modelDataDownloadTimeoutInSeconds;
    }
  }

  // container_startup_health_check_timeout_in_seconds - computed: true, optional: true, required: false
  private _containerStartupHealthCheckTimeoutInSeconds?: number; 
  public get containerStartupHealthCheckTimeoutInSeconds() {
    return this.getNumberAttribute('container_startup_health_check_timeout_in_seconds');
  }
  public set containerStartupHealthCheckTimeoutInSeconds(value: number) {
    this._containerStartupHealthCheckTimeoutInSeconds = value;
  }
  public resetContainerStartupHealthCheckTimeoutInSeconds() {
    this._containerStartupHealthCheckTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerStartupHealthCheckTimeoutInSecondsInput() {
    return this._containerStartupHealthCheckTimeoutInSeconds;
  }

  // model_data_download_timeout_in_seconds - computed: true, optional: true, required: false
  private _modelDataDownloadTimeoutInSeconds?: number; 
  public get modelDataDownloadTimeoutInSeconds() {
    return this.getNumberAttribute('model_data_download_timeout_in_seconds');
  }
  public set modelDataDownloadTimeoutInSeconds(value: number) {
    this._modelDataDownloadTimeoutInSeconds = value;
  }
  public resetModelDataDownloadTimeoutInSeconds() {
    this._modelDataDownloadTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataDownloadTimeoutInSecondsInput() {
    return this._modelDataDownloadTimeoutInSeconds;
  }
}
export interface SagemakerInferenceComponentSpecification {
  /**
  * The name of the base inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#base_inference_component_name SagemakerInferenceComponent#base_inference_component_name}
  */
  readonly baseInferenceComponentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#compute_resource_requirements SagemakerInferenceComponent#compute_resource_requirements}
  */
  readonly computeResourceRequirements?: SagemakerInferenceComponentSpecificationComputeResourceRequirements;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#container SagemakerInferenceComponent#container}
  */
  readonly container?: SagemakerInferenceComponentSpecificationContainer;
  /**
  * The name of the model to use with the inference component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#model_name SagemakerInferenceComponent#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#startup_parameters SagemakerInferenceComponent#startup_parameters}
  */
  readonly startupParameters?: SagemakerInferenceComponentSpecificationStartupParameters;
}

export function sagemakerInferenceComponentSpecificationToTerraform(struct?: SagemakerInferenceComponentSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_inference_component_name: cdktn.stringToTerraform(struct!.baseInferenceComponentName),
    compute_resource_requirements: sagemakerInferenceComponentSpecificationComputeResourceRequirementsToTerraform(struct!.computeResourceRequirements),
    container: sagemakerInferenceComponentSpecificationContainerToTerraform(struct!.container),
    model_name: cdktn.stringToTerraform(struct!.modelName),
    startup_parameters: sagemakerInferenceComponentSpecificationStartupParametersToTerraform(struct!.startupParameters),
  }
}


export function sagemakerInferenceComponentSpecificationToHclTerraform(struct?: SagemakerInferenceComponentSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_inference_component_name: {
      value: cdktn.stringToHclTerraform(struct!.baseInferenceComponentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_resource_requirements: {
      value: sagemakerInferenceComponentSpecificationComputeResourceRequirementsToHclTerraform(struct!.computeResourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationComputeResourceRequirements",
    },
    container: {
      value: sagemakerInferenceComponentSpecificationContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationContainer",
    },
    model_name: {
      value: cdktn.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startup_parameters: {
      value: sagemakerInferenceComponentSpecificationStartupParametersToHclTerraform(struct!.startupParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "SagemakerInferenceComponentSpecificationStartupParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerInferenceComponentSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerInferenceComponentSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInferenceComponentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInferenceComponentName = this._baseInferenceComponentName;
    }
    if (this._computeResourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeResourceRequirements = this._computeResourceRequirements?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._startupParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupParameters = this._startupParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerInferenceComponentSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseInferenceComponentName = undefined;
      this._computeResourceRequirements.internalValue = undefined;
      this._container.internalValue = undefined;
      this._modelName = undefined;
      this._startupParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseInferenceComponentName = value.baseInferenceComponentName;
      this._computeResourceRequirements.internalValue = value.computeResourceRequirements;
      this._container.internalValue = value.container;
      this._modelName = value.modelName;
      this._startupParameters.internalValue = value.startupParameters;
    }
  }

  // base_inference_component_name - computed: true, optional: true, required: false
  private _baseInferenceComponentName?: string; 
  public get baseInferenceComponentName() {
    return this.getStringAttribute('base_inference_component_name');
  }
  public set baseInferenceComponentName(value: string) {
    this._baseInferenceComponentName = value;
  }
  public resetBaseInferenceComponentName() {
    this._baseInferenceComponentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInferenceComponentNameInput() {
    return this._baseInferenceComponentName;
  }

  // compute_resource_requirements - computed: true, optional: true, required: false
  private _computeResourceRequirements = new SagemakerInferenceComponentSpecificationComputeResourceRequirementsOutputReference(this, "compute_resource_requirements");
  public get computeResourceRequirements() {
    return this._computeResourceRequirements;
  }
  public putComputeResourceRequirements(value: SagemakerInferenceComponentSpecificationComputeResourceRequirements) {
    this._computeResourceRequirements.internalValue = value;
  }
  public resetComputeResourceRequirements() {
    this._computeResourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeResourceRequirementsInput() {
    return this._computeResourceRequirements.internalValue;
  }

  // container - computed: true, optional: true, required: false
  private _container = new SagemakerInferenceComponentSpecificationContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: SagemakerInferenceComponentSpecificationContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // model_name - computed: true, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // startup_parameters - computed: true, optional: true, required: false
  private _startupParameters = new SagemakerInferenceComponentSpecificationStartupParametersOutputReference(this, "startup_parameters");
  public get startupParameters() {
    return this._startupParameters;
  }
  public putStartupParameters(value: SagemakerInferenceComponentSpecificationStartupParameters) {
    this._startupParameters.internalValue = value;
  }
  public resetStartupParameters() {
    this._startupParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupParametersInput() {
    return this._startupParameters.internalValue;
  }
}
export interface SagemakerInferenceComponentTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#key SagemakerInferenceComponent#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#value SagemakerInferenceComponent#value}
  */
  readonly value?: string;
}

export function sagemakerInferenceComponentTagsToTerraform(struct?: SagemakerInferenceComponentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerInferenceComponentTagsToHclTerraform(struct?: SagemakerInferenceComponentTags | cdktn.IResolvable): any {
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

export class SagemakerInferenceComponentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerInferenceComponentTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerInferenceComponentTags | cdktn.IResolvable | undefined) {
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

export class SagemakerInferenceComponentTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerInferenceComponentTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerInferenceComponentTagsOutputReference {
    return new SagemakerInferenceComponentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component awscc_sagemaker_inference_component}
*/
export class SagemakerInferenceComponent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_inference_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerInferenceComponent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerInferenceComponent to import
  * @param importFromId The id of the existing SagemakerInferenceComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerInferenceComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_inference_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/sagemaker_inference_component awscc_sagemaker_inference_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerInferenceComponentConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerInferenceComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_inference_component',
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
    this._deploymentConfig.internalValue = config.deploymentConfig;
    this._endpointArn = config.endpointArn;
    this._endpointName = config.endpointName;
    this._inferenceComponentName = config.inferenceComponentName;
    this._runtimeConfig.internalValue = config.runtimeConfig;
    this._specification.internalValue = config.specification;
    this._tags.internalValue = config.tags;
    this._variantName = config.variantName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deployment_config - computed: true, optional: true, required: false
  private _deploymentConfig = new SagemakerInferenceComponentDeploymentConfigOutputReference(this, "deployment_config");
  public get deploymentConfig() {
    return this._deploymentConfig;
  }
  public putDeploymentConfig(value: SagemakerInferenceComponentDeploymentConfig) {
    this._deploymentConfig.internalValue = value;
  }
  public resetDeploymentConfig() {
    this._deploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigInput() {
    return this._deploymentConfig.internalValue;
  }

  // endpoint_arn - computed: true, optional: true, required: false
  private _endpointArn?: string; 
  public get endpointArn() {
    return this.getStringAttribute('endpoint_arn');
  }
  public set endpointArn(value: string) {
    this._endpointArn = value;
  }
  public resetEndpointArn() {
    this._endpointArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointArnInput() {
    return this._endpointArn;
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inference_component_arn - computed: true, optional: false, required: false
  public get inferenceComponentArn() {
    return this.getStringAttribute('inference_component_arn');
  }

  // inference_component_name - computed: true, optional: true, required: false
  private _inferenceComponentName?: string; 
  public get inferenceComponentName() {
    return this.getStringAttribute('inference_component_name');
  }
  public set inferenceComponentName(value: string) {
    this._inferenceComponentName = value;
  }
  public resetInferenceComponentName() {
    this._inferenceComponentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceComponentNameInput() {
    return this._inferenceComponentName;
  }

  // inference_component_status - computed: true, optional: false, required: false
  public get inferenceComponentStatus() {
    return this.getStringAttribute('inference_component_status');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // runtime_config - computed: true, optional: true, required: false
  private _runtimeConfig = new SagemakerInferenceComponentRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: SagemakerInferenceComponentRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }

  // specification - computed: false, optional: false, required: true
  private _specification = new SagemakerInferenceComponentSpecificationOutputReference(this, "specification");
  public get specification() {
    return this._specification;
  }
  public putSpecification(value: SagemakerInferenceComponentSpecification) {
    this._specification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerInferenceComponentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerInferenceComponentTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // variant_name - computed: true, optional: true, required: false
  private _variantName?: string; 
  public get variantName() {
    return this.getStringAttribute('variant_name');
  }
  public set variantName(value: string) {
    this._variantName = value;
  }
  public resetVariantName() {
    this._variantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantNameInput() {
    return this._variantName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_config: sagemakerInferenceComponentDeploymentConfigToTerraform(this._deploymentConfig.internalValue),
      endpoint_arn: cdktn.stringToTerraform(this._endpointArn),
      endpoint_name: cdktn.stringToTerraform(this._endpointName),
      inference_component_name: cdktn.stringToTerraform(this._inferenceComponentName),
      runtime_config: sagemakerInferenceComponentRuntimeConfigToTerraform(this._runtimeConfig.internalValue),
      specification: sagemakerInferenceComponentSpecificationToTerraform(this._specification.internalValue),
      tags: cdktn.listMapper(sagemakerInferenceComponentTagsToTerraform, false)(this._tags.internalValue),
      variant_name: cdktn.stringToTerraform(this._variantName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_config: {
        value: sagemakerInferenceComponentDeploymentConfigToHclTerraform(this._deploymentConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceComponentDeploymentConfig",
      },
      endpoint_arn: {
        value: cdktn.stringToHclTerraform(this._endpointArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_name: {
        value: cdktn.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inference_component_name: {
        value: cdktn.stringToHclTerraform(this._inferenceComponentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_config: {
        value: sagemakerInferenceComponentRuntimeConfigToHclTerraform(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceComponentRuntimeConfig",
      },
      specification: {
        value: sagemakerInferenceComponentSpecificationToHclTerraform(this._specification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerInferenceComponentSpecification",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerInferenceComponentTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerInferenceComponentTagsList",
      },
      variant_name: {
        value: cdktn.stringToHclTerraform(this._variantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
