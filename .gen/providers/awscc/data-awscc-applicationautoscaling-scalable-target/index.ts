// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/applicationautoscaling_scalable_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccApplicationautoscalingScalableTargetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/applicationautoscaling_scalable_target#id DataAwsccApplicationautoscalingScalableTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction {
}

export function dataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionToTerraform(struct?: DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionToHclTerraform(struct?: DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
}
export interface DataAwsccApplicationautoscalingScalableTargetScheduledActions {
}

export function dataAwsccApplicationautoscalingScalableTargetScheduledActionsToTerraform(struct?: DataAwsccApplicationautoscalingScalableTargetScheduledActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationautoscalingScalableTargetScheduledActionsToHclTerraform(struct?: DataAwsccApplicationautoscalingScalableTargetScheduledActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccApplicationautoscalingScalableTargetScheduledActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationautoscalingScalableTargetScheduledActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // scalable_target_action - computed: true, optional: false, required: false
  private _scalableTargetAction = new DataAwsccApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference(this, "scalable_target_action");
  public get scalableTargetAction() {
    return this._scalableTargetAction;
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // scheduled_action_name - computed: true, optional: false, required: false
  public get scheduledActionName() {
    return this.getStringAttribute('scheduled_action_name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataAwsccApplicationautoscalingScalableTargetScheduledActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference {
    return new DataAwsccApplicationautoscalingScalableTargetScheduledActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccApplicationautoscalingScalableTargetSuspendedState {
}

export function dataAwsccApplicationautoscalingScalableTargetSuspendedStateToTerraform(struct?: DataAwsccApplicationautoscalingScalableTargetSuspendedState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccApplicationautoscalingScalableTargetSuspendedStateToHclTerraform(struct?: DataAwsccApplicationautoscalingScalableTargetSuspendedState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccApplicationautoscalingScalableTargetSuspendedState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccApplicationautoscalingScalableTargetSuspendedState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic_scaling_in_suspended - computed: true, optional: false, required: false
  public get dynamicScalingInSuspended() {
    return this.getBooleanAttribute('dynamic_scaling_in_suspended');
  }

  // dynamic_scaling_out_suspended - computed: true, optional: false, required: false
  public get dynamicScalingOutSuspended() {
    return this.getBooleanAttribute('dynamic_scaling_out_suspended');
  }

  // scheduled_scaling_suspended - computed: true, optional: false, required: false
  public get scheduledScalingSuspended() {
    return this.getBooleanAttribute('scheduled_scaling_suspended');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/applicationautoscaling_scalable_target awscc_applicationautoscaling_scalable_target}
*/
export class DataAwsccApplicationautoscalingScalableTarget extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_applicationautoscaling_scalable_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccApplicationautoscalingScalableTarget to import
  * @param importFromId The id of the existing DataAwsccApplicationautoscalingScalableTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/applicationautoscaling_scalable_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccApplicationautoscalingScalableTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationautoscaling_scalable_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/applicationautoscaling_scalable_target awscc_applicationautoscaling_scalable_target} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApplicationautoscalingScalableTargetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApplicationautoscalingScalableTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_applicationautoscaling_scalable_target',
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

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // scalable_dimension - computed: true, optional: false, required: false
  public get scalableDimension() {
    return this.getStringAttribute('scalable_dimension');
  }

  // scalable_target_id - computed: true, optional: false, required: false
  public get scalableTargetId() {
    return this.getStringAttribute('scalable_target_id');
  }

  // scheduled_actions - computed: true, optional: false, required: false
  private _scheduledActions = new DataAwsccApplicationautoscalingScalableTargetScheduledActionsList(this, "scheduled_actions", true);
  public get scheduledActions() {
    return this._scheduledActions;
  }

  // service_namespace - computed: true, optional: false, required: false
  public get serviceNamespace() {
    return this.getStringAttribute('service_namespace');
  }

  // suspended_state - computed: true, optional: false, required: false
  private _suspendedState = new DataAwsccApplicationautoscalingScalableTargetSuspendedStateOutputReference(this, "suspended_state");
  public get suspendedState() {
    return this._suspendedState;
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
