// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ecs_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEcsServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ecs_service#id DataAwsccEcsService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEcsServiceCapacityProviderStrategy {
}

export function dataAwsccEcsServiceCapacityProviderStrategyToTerraform(struct?: DataAwsccEcsServiceCapacityProviderStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceCapacityProviderStrategyToHclTerraform(struct?: DataAwsccEcsServiceCapacityProviderStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceCapacityProviderStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceCapacityProviderStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceCapacityProviderStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base - computed: true, optional: false, required: false
  public get base() {
    return this.getNumberAttribute('base');
  }

  // capacity_provider - computed: true, optional: false, required: false
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsccEcsServiceCapacityProviderStrategyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceCapacityProviderStrategyOutputReference {
    return new DataAwsccEcsServiceCapacityProviderStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceDeploymentConfigurationAlarms {
}

export function dataAwsccEcsServiceDeploymentConfigurationAlarmsToTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceDeploymentConfigurationAlarmsToHclTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationAlarms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceDeploymentConfigurationAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceDeploymentConfigurationAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_names - computed: true, optional: false, required: false
  public get alarmNames() {
    return this.getListAttribute('alarm_names');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // rollback - computed: true, optional: false, required: false
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }
}
export interface DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration {
}

export function dataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationToTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationToHclTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canary_bake_time_in_minutes - computed: true, optional: false, required: false
  public get canaryBakeTimeInMinutes() {
    return this.getNumberAttribute('canary_bake_time_in_minutes');
  }

  // canary_percent - computed: true, optional: false, required: false
  public get canaryPercent() {
    return this.getNumberAttribute('canary_percent');
  }
}
export interface DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration {
}

export function dataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationToTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationToHclTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker {
}

export function dataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerToTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerToHclTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // reset_on_healthy_task - computed: true, optional: false, required: false
  public get resetOnHealthyTask() {
    return this.getBooleanAttribute('reset_on_healthy_task');
  }

  // rollback - computed: true, optional: false, required: false
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }

  // threshold_configuration - computed: true, optional: false, required: false
  private _thresholdConfiguration = new DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference(this, "threshold_configuration");
  public get thresholdConfiguration() {
    return this._thresholdConfiguration;
  }
}
export interface DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration {
}

export function dataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationToTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationToHclTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // timeout_in_minutes - computed: true, optional: false, required: false
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
}
export interface DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks {
}

export function dataAwsccEcsServiceDeploymentConfigurationLifecycleHooksToTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceDeploymentConfigurationLifecycleHooksToHclTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hook_details - computed: true, optional: false, required: false
  public get hookDetails() {
    return this.getStringAttribute('hook_details');
  }

  // hook_target_arn - computed: true, optional: false, required: false
  public get hookTargetArn() {
    return this.getStringAttribute('hook_target_arn');
  }

  // lifecycle_stages - computed: true, optional: false, required: false
  public get lifecycleStages() {
    return this.getListAttribute('lifecycle_stages');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // timeout_configuration - computed: true, optional: false, required: false
  private _timeoutConfiguration = new DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference(this, "timeout_configuration");
  public get timeoutConfiguration() {
    return this._timeoutConfiguration;
  }
}

export class DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference {
    return new DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration {
}

export function dataAwsccEcsServiceDeploymentConfigurationLinearConfigurationToTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceDeploymentConfigurationLinearConfigurationToHclTerraform(struct?: DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // step_bake_time_in_minutes - computed: true, optional: false, required: false
  public get stepBakeTimeInMinutes() {
    return this.getNumberAttribute('step_bake_time_in_minutes');
  }

  // step_percent - computed: true, optional: false, required: false
  public get stepPercent() {
    return this.getNumberAttribute('step_percent');
  }
}
export interface DataAwsccEcsServiceDeploymentConfiguration {
}

export function dataAwsccEcsServiceDeploymentConfigurationToTerraform(struct?: DataAwsccEcsServiceDeploymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceDeploymentConfigurationToHclTerraform(struct?: DataAwsccEcsServiceDeploymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceDeploymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceDeploymentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceDeploymentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference(this, "alarms");
  public get alarms() {
    return this._alarms;
  }

  // bake_time_in_minutes - computed: true, optional: false, required: false
  public get bakeTimeInMinutes() {
    return this.getNumberAttribute('bake_time_in_minutes');
  }

  // canary_configuration - computed: true, optional: false, required: false
  private _canaryConfiguration = new DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference(this, "canary_configuration");
  public get canaryConfiguration() {
    return this._canaryConfiguration;
  }

  // deployment_circuit_breaker - computed: true, optional: false, required: false
  private _deploymentCircuitBreaker = new DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference(this, "deployment_circuit_breaker");
  public get deploymentCircuitBreaker() {
    return this._deploymentCircuitBreaker;
  }

  // lifecycle_hooks - computed: true, optional: false, required: false
  private _lifecycleHooks = new DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList(this, "lifecycle_hooks", false);
  public get lifecycleHooks() {
    return this._lifecycleHooks;
  }

  // linear_configuration - computed: true, optional: false, required: false
  private _linearConfiguration = new DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference(this, "linear_configuration");
  public get linearConfiguration() {
    return this._linearConfiguration;
  }

  // maximum_percent - computed: true, optional: false, required: false
  public get maximumPercent() {
    return this.getNumberAttribute('maximum_percent');
  }

  // minimum_healthy_percent - computed: true, optional: false, required: false
  public get minimumHealthyPercent() {
    return this.getNumberAttribute('minimum_healthy_percent');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}
export interface DataAwsccEcsServiceDeploymentController {
}

export function dataAwsccEcsServiceDeploymentControllerToTerraform(struct?: DataAwsccEcsServiceDeploymentController): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceDeploymentControllerToHclTerraform(struct?: DataAwsccEcsServiceDeploymentController): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceDeploymentControllerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceDeploymentController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceDeploymentController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccEcsServiceForceNewDeployment {
}

export function dataAwsccEcsServiceForceNewDeploymentToTerraform(struct?: DataAwsccEcsServiceForceNewDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceForceNewDeploymentToHclTerraform(struct?: DataAwsccEcsServiceForceNewDeployment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceForceNewDeploymentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceForceNewDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceForceNewDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_force_new_deployment - computed: true, optional: false, required: false
  public get enableForceNewDeployment() {
    return this.getBooleanAttribute('enable_force_new_deployment');
  }

  // force_new_deployment_nonce - computed: true, optional: false, required: false
  public get forceNewDeploymentNonce() {
    return this.getStringAttribute('force_new_deployment_nonce');
  }
}
export interface DataAwsccEcsServiceLoadBalancersAdvancedConfiguration {
}

export function dataAwsccEcsServiceLoadBalancersAdvancedConfigurationToTerraform(struct?: DataAwsccEcsServiceLoadBalancersAdvancedConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceLoadBalancersAdvancedConfigurationToHclTerraform(struct?: DataAwsccEcsServiceLoadBalancersAdvancedConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceLoadBalancersAdvancedConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceLoadBalancersAdvancedConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alternate_target_group_arn - computed: true, optional: false, required: false
  public get alternateTargetGroupArn() {
    return this.getStringAttribute('alternate_target_group_arn');
  }

  // production_listener_rule - computed: true, optional: false, required: false
  public get productionListenerRule() {
    return this.getStringAttribute('production_listener_rule');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // test_listener_rule - computed: true, optional: false, required: false
  public get testListenerRule() {
    return this.getStringAttribute('test_listener_rule');
  }
}
export interface DataAwsccEcsServiceLoadBalancers {
}

export function dataAwsccEcsServiceLoadBalancersToTerraform(struct?: DataAwsccEcsServiceLoadBalancers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceLoadBalancersToHclTerraform(struct?: DataAwsccEcsServiceLoadBalancers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceLoadBalancersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceLoadBalancers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceLoadBalancers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced_configuration - computed: true, optional: false, required: false
  private _advancedConfiguration = new DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference(this, "advanced_configuration");
  public get advancedConfiguration() {
    return this._advancedConfiguration;
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
}

export class DataAwsccEcsServiceLoadBalancersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceLoadBalancersOutputReference {
    return new DataAwsccEcsServiceLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceMonitoringMetricConfigurations {
}

export function dataAwsccEcsServiceMonitoringMetricConfigurationsToTerraform(struct?: DataAwsccEcsServiceMonitoringMetricConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceMonitoringMetricConfigurationsToHclTerraform(struct?: DataAwsccEcsServiceMonitoringMetricConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceMonitoringMetricConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceMonitoringMetricConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_names - computed: true, optional: false, required: false
  public get metricNames() {
    return this.getListAttribute('metric_names');
  }

  // resolution_seconds - computed: true, optional: false, required: false
  public get resolutionSeconds() {
    return this.getNumberAttribute('resolution_seconds');
  }
}

export class DataAwsccEcsServiceMonitoringMetricConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference {
    return new DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceMonitoring {
}

export function dataAwsccEcsServiceMonitoringToTerraform(struct?: DataAwsccEcsServiceMonitoring): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceMonitoringToHclTerraform(struct?: DataAwsccEcsServiceMonitoring): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceMonitoringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metric_configurations - computed: true, optional: false, required: false
  private _metricConfigurations = new DataAwsccEcsServiceMonitoringMetricConfigurationsList(this, "metric_configurations", false);
  public get metricConfigurations() {
    return this._metricConfigurations;
  }
}
export interface DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration {
}

export function dataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationToTerraform(struct?: DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationToHclTerraform(struct?: DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }
}
export interface DataAwsccEcsServiceNetworkConfiguration {
}

export function dataAwsccEcsServiceNetworkConfigurationToTerraform(struct?: DataAwsccEcsServiceNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceNetworkConfigurationToHclTerraform(struct?: DataAwsccEcsServiceNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awsvpc_configuration - computed: true, optional: false, required: false
  private _awsvpcConfiguration = new DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference(this, "awsvpc_configuration");
  public get awsvpcConfiguration() {
    return this._awsvpcConfiguration;
  }
}
export interface DataAwsccEcsServicePlacementConstraints {
}

export function dataAwsccEcsServicePlacementConstraintsToTerraform(struct?: DataAwsccEcsServicePlacementConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServicePlacementConstraintsToHclTerraform(struct?: DataAwsccEcsServicePlacementConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServicePlacementConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServicePlacementConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServicePlacementConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccEcsServicePlacementConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServicePlacementConstraintsOutputReference {
    return new DataAwsccEcsServicePlacementConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServicePlacementStrategies {
}

export function dataAwsccEcsServicePlacementStrategiesToTerraform(struct?: DataAwsccEcsServicePlacementStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServicePlacementStrategiesToHclTerraform(struct?: DataAwsccEcsServicePlacementStrategies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServicePlacementStrategiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServicePlacementStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServicePlacementStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccEcsServicePlacementStrategiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServicePlacementStrategiesOutputReference {
    return new DataAwsccEcsServicePlacementStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration {
}

export function dataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration | undefined) {
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

  // include_query_parameters - computed: true, optional: false, required: false
  public get includeQueryParameters() {
    return this.getStringAttribute('include_query_parameters');
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions {
}

export function dataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions | undefined) {
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

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference {
    return new DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration {
}

export function dataAwsccEcsServiceServiceConnectConfigurationLogConfigurationToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationLogConfigurationToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_driver - computed: true, optional: false, required: false
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktn.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // secret_options - computed: true, optional: false, required: false
  private _secretOptions = new DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList(this, "secret_options", false);
  public get secretOptions() {
    return this._secretOptions;
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue {
}

export function dataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact - computed: true, optional: false, required: false
  public get exact() {
    return this.getStringAttribute('exact');
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader {
}

export function dataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader | undefined) {
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
  private _value = new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules {
}

export function dataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header - computed: true, optional: false, required: false
  private _header = new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases {
}

export function dataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // test_traffic_rules - computed: true, optional: false, required: false
  private _testTrafficRules = new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference(this, "test_traffic_rules");
  public get testTrafficRules() {
    return this._testTrafficRules;
  }
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference {
    return new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout {
}

export function dataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle_timeout_seconds - computed: true, optional: false, required: false
  public get idleTimeoutSeconds() {
    return this.getNumberAttribute('idle_timeout_seconds');
  }

  // per_request_timeout_seconds - computed: true, optional: false, required: false
  public get perRequestTimeoutSeconds() {
    return this.getNumberAttribute('per_request_timeout_seconds');
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority {
}

export function dataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_pca_authority_arn - computed: true, optional: false, required: false
  public get awsPcaAuthorityArn() {
    return this.getStringAttribute('aws_pca_authority_arn');
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationServicesTls {
}

export function dataAwsccEcsServiceServiceConnectConfigurationServicesTlsToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesTls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationServicesTlsToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServicesTls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationServicesTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationServicesTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issuer_certificate_authority - computed: true, optional: false, required: false
  private _issuerCertificateAuthority = new DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference(this, "issuer_certificate_authority");
  public get issuerCertificateAuthority() {
    return this._issuerCertificateAuthority;
  }

  // kms_key - computed: true, optional: false, required: false
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccEcsServiceServiceConnectConfigurationServices {
}

export function dataAwsccEcsServiceServiceConnectConfigurationServicesToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationServicesToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfigurationServices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfigurationServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfigurationServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_aliases - computed: true, optional: false, required: false
  private _clientAliases = new DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList(this, "client_aliases", false);
  public get clientAliases() {
    return this._clientAliases;
  }

  // discovery_name - computed: true, optional: false, required: false
  public get discoveryName() {
    return this.getStringAttribute('discovery_name');
  }

  // ingress_port_override - computed: true, optional: false, required: false
  public get ingressPortOverride() {
    return this.getNumberAttribute('ingress_port_override');
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // timeout - computed: true, optional: false, required: false
  private _timeout = new DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}

export class DataAwsccEcsServiceServiceConnectConfigurationServicesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference {
    return new DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceServiceConnectConfiguration {
}

export function dataAwsccEcsServiceServiceConnectConfigurationToTerraform(struct?: DataAwsccEcsServiceServiceConnectConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceConnectConfigurationToHclTerraform(struct?: DataAwsccEcsServiceServiceConnectConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceConnectConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceServiceConnectConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceConnectConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_log_configuration - computed: true, optional: false, required: false
  private _accessLogConfiguration = new DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference(this, "access_log_configuration");
  public get accessLogConfiguration() {
    return this._accessLogConfiguration;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataAwsccEcsServiceServiceConnectConfigurationServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
}
export interface DataAwsccEcsServiceServiceRegistries {
}

export function dataAwsccEcsServiceServiceRegistriesToTerraform(struct?: DataAwsccEcsServiceServiceRegistries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceServiceRegistriesToHclTerraform(struct?: DataAwsccEcsServiceServiceRegistries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceServiceRegistriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceServiceRegistries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceServiceRegistries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // registry_arn - computed: true, optional: false, required: false
  public get registryArn() {
    return this.getStringAttribute('registry_arn');
  }
}

export class DataAwsccEcsServiceServiceRegistriesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceServiceRegistriesOutputReference {
    return new DataAwsccEcsServiceServiceRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceTags {
}

export function dataAwsccEcsServiceTagsToTerraform(struct?: DataAwsccEcsServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceTagsToHclTerraform(struct?: DataAwsccEcsServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceTags | undefined) {
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

export class DataAwsccEcsServiceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceTagsOutputReference {
    return new DataAwsccEcsServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags {
}

export function dataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsToTerraform(struct?: DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsToHclTerraform(struct?: DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags | undefined) {
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

export class DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference {
    return new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications {
}

export function dataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsToTerraform(struct?: DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsToHclTerraform(struct?: DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // propagate_tags - computed: true, optional: false, required: false
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference {
    return new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume {
}

export function dataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeToTerraform(struct?: DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeToHclTerraform(struct?: DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // filesystem_type - computed: true, optional: false, required: false
  public get filesystemType() {
    return this.getStringAttribute('filesystem_type');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // size_in_gi_b - computed: true, optional: false, required: false
  public get sizeInGiB() {
    return this.getNumberAttribute('size_in_gi_b');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // tag_specifications - computed: true, optional: false, required: false
  private _tagSpecifications = new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // volume_initialization_rate - computed: true, optional: false, required: false
  public get volumeInitializationRate() {
    return this.getNumberAttribute('volume_initialization_rate');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}
export interface DataAwsccEcsServiceVolumeConfigurations {
}

export function dataAwsccEcsServiceVolumeConfigurationsToTerraform(struct?: DataAwsccEcsServiceVolumeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceVolumeConfigurationsToHclTerraform(struct?: DataAwsccEcsServiceVolumeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceVolumeConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceVolumeConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceVolumeConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_ebs_volume - computed: true, optional: false, required: false
  private _managedEbsVolume = new DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference(this, "managed_ebs_volume");
  public get managedEbsVolume() {
    return this._managedEbsVolume;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccEcsServiceVolumeConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceVolumeConfigurationsOutputReference {
    return new DataAwsccEcsServiceVolumeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEcsServiceVpcLatticeConfigurations {
}

export function dataAwsccEcsServiceVpcLatticeConfigurationsToTerraform(struct?: DataAwsccEcsServiceVpcLatticeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEcsServiceVpcLatticeConfigurationsToHclTerraform(struct?: DataAwsccEcsServiceVpcLatticeConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEcsServiceVpcLatticeConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEcsServiceVpcLatticeConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port_name - computed: true, optional: false, required: false
  public get portName() {
    return this.getStringAttribute('port_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
}

export class DataAwsccEcsServiceVpcLatticeConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference {
    return new DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ecs_service awscc_ecs_service}
*/
export class DataAwsccEcsService extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecs_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEcsService resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEcsService to import
  * @param importFromId The id of the existing DataAwsccEcsService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ecs_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEcsService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ecs_service awscc_ecs_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_service',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone_rebalancing - computed: true, optional: false, required: false
  public get availabilityZoneRebalancing() {
    return this.getStringAttribute('availability_zone_rebalancing');
  }

  // capacity_provider_strategy - computed: true, optional: false, required: false
  private _capacityProviderStrategy = new DataAwsccEcsServiceCapacityProviderStrategyList(this, "capacity_provider_strategy", false);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // deployment_configuration - computed: true, optional: false, required: false
  private _deploymentConfiguration = new DataAwsccEcsServiceDeploymentConfigurationOutputReference(this, "deployment_configuration");
  public get deploymentConfiguration() {
    return this._deploymentConfiguration;
  }

  // deployment_controller - computed: true, optional: false, required: false
  private _deploymentController = new DataAwsccEcsServiceDeploymentControllerOutputReference(this, "deployment_controller");
  public get deploymentController() {
    return this._deploymentController;
  }

  // desired_count - computed: true, optional: false, required: false
  public get desiredCount() {
    return this.getNumberAttribute('desired_count');
  }

  // enable_ecs_managed_tags - computed: true, optional: false, required: false
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }

  // enable_execute_command - computed: true, optional: false, required: false
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }

  // force_new_deployment - computed: true, optional: false, required: false
  private _forceNewDeployment = new DataAwsccEcsServiceForceNewDeploymentOutputReference(this, "force_new_deployment");
  public get forceNewDeployment() {
    return this._forceNewDeployment;
  }

  // health_check_grace_period_seconds - computed: true, optional: false, required: false
  public get healthCheckGracePeriodSeconds() {
    return this.getNumberAttribute('health_check_grace_period_seconds');
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

  // launch_type - computed: true, optional: false, required: false
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }

  // load_balancers - computed: true, optional: false, required: false
  private _loadBalancers = new DataAwsccEcsServiceLoadBalancersList(this, "load_balancers", false);
  public get loadBalancers() {
    return this._loadBalancers;
  }

  // monitoring - computed: true, optional: false, required: false
  private _monitoring = new DataAwsccEcsServiceMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccEcsServiceNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // placement_constraints - computed: true, optional: false, required: false
  private _placementConstraints = new DataAwsccEcsServicePlacementConstraintsList(this, "placement_constraints", false);
  public get placementConstraints() {
    return this._placementConstraints;
  }

  // placement_strategies - computed: true, optional: false, required: false
  private _placementStrategies = new DataAwsccEcsServicePlacementStrategiesList(this, "placement_strategies", false);
  public get placementStrategies() {
    return this._placementStrategies;
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // propagate_tags - computed: true, optional: false, required: false
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // scheduling_strategy - computed: true, optional: false, required: false
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // service_connect_configuration - computed: true, optional: false, required: false
  private _serviceConnectConfiguration = new DataAwsccEcsServiceServiceConnectConfigurationOutputReference(this, "service_connect_configuration");
  public get serviceConnectConfiguration() {
    return this._serviceConnectConfiguration;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_registries - computed: true, optional: false, required: false
  private _serviceRegistries = new DataAwsccEcsServiceServiceRegistriesList(this, "service_registries", false);
  public get serviceRegistries() {
    return this._serviceRegistries;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEcsServiceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // task_definition - computed: true, optional: false, required: false
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }

  // volume_configurations - computed: true, optional: false, required: false
  private _volumeConfigurations = new DataAwsccEcsServiceVolumeConfigurationsList(this, "volume_configurations", false);
  public get volumeConfigurations() {
    return this._volumeConfigurations;
  }

  // vpc_lattice_configurations - computed: true, optional: false, required: false
  private _vpcLatticeConfigurations = new DataAwsccEcsServiceVpcLatticeConfigurationsList(this, "vpc_lattice_configurations", false);
  public get vpcLatticeConfigurations() {
    return this._vpcLatticeConfigurations;
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
