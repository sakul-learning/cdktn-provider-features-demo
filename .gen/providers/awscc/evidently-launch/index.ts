// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EvidentlyLaunchConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}
  */
  readonly description?: string;
  /**
  * Start or Stop Launch Launch. Default is not started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#execution_status EvidentlyLaunch#execution_status}
  */
  readonly executionStatus?: EvidentlyLaunchExecutionStatus;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#groups EvidentlyLaunch#groups}
  */
  readonly groups: EvidentlyLaunchGroups[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#metric_monitors EvidentlyLaunch#metric_monitors}
  */
  readonly metricMonitors?: EvidentlyLaunchMetricMonitors[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#name EvidentlyLaunch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#project EvidentlyLaunch#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#randomization_salt EvidentlyLaunch#randomization_salt}
  */
  readonly randomizationSalt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#scheduled_splits_config EvidentlyLaunch#scheduled_splits_config}
  */
  readonly scheduledSplitsConfig: EvidentlyLaunchScheduledSplitsConfig[] | cdktn.IResolvable;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#tags EvidentlyLaunch#tags}
  */
  readonly tags?: EvidentlyLaunchTags[] | cdktn.IResolvable;
}
export interface EvidentlyLaunchExecutionStatus {
  /**
  * Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#desired_state EvidentlyLaunch#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Provide a reason for stopping the launch. Defaults to empty if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#reason EvidentlyLaunch#reason}
  */
  readonly reason?: string;
  /**
  * Provide START or STOP action to apply on a launch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#status EvidentlyLaunch#status}
  */
  readonly status?: string;
}

export function evidentlyLaunchExecutionStatusToTerraform(struct?: EvidentlyLaunchExecutionStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    desired_state: cdktn.stringToTerraform(struct!.desiredState),
    reason: cdktn.stringToTerraform(struct!.reason),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function evidentlyLaunchExecutionStatusToHclTerraform(struct?: EvidentlyLaunchExecutionStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    desired_state: {
      value: cdktn.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktn.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvidentlyLaunchExecutionStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EvidentlyLaunchExecutionStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchExecutionStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredState = undefined;
      this._reason = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredState = value.desiredState;
      this._reason = value.reason;
      this._status = value.status;
    }
  }

  // desired_state - computed: true, optional: true, required: false
  private _desiredState?: string;
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string;
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface EvidentlyLaunchGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#description EvidentlyLaunch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#feature EvidentlyLaunch#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#variation EvidentlyLaunch#variation}
  */
  readonly variation: string;
}

export function evidentlyLaunchGroupsToTerraform(struct?: EvidentlyLaunchGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    feature: cdktn.stringToTerraform(struct!.feature),
    group_name: cdktn.stringToTerraform(struct!.groupName),
    variation: cdktn.stringToTerraform(struct!.variation),
  }
}


export function evidentlyLaunchGroupsToHclTerraform(struct?: EvidentlyLaunchGroups | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature: {
      value: cdktn.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktn.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variation: {
      value: cdktn.stringToHclTerraform(struct!.variation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvidentlyLaunchGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchGroups | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchGroups | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._feature = undefined;
      this._groupName = undefined;
      this._variation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._feature = value.feature;
      this._groupName = value.groupName;
      this._variation = value.variation;
    }
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

  // feature - computed: false, optional: false, required: true
  private _feature?: string;
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string;
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // variation - computed: false, optional: false, required: true
  private _variation?: string;
  public get variation() {
    return this.getStringAttribute('variation');
  }
  public set variation(value: string) {
    this._variation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}

export class EvidentlyLaunchGroupsList extends cdktn.ComplexList {
  public internalValue? : EvidentlyLaunchGroups[] | cdktn.IResolvable

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
  public get(index: number): EvidentlyLaunchGroupsOutputReference {
    return new EvidentlyLaunchGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchMetricMonitors {
  /**
  * The JSON path to reference the entity id in the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#entity_id_key EvidentlyLaunch#entity_id_key}
  */
  readonly entityIdKey?: string;
  /**
  * Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#event_pattern EvidentlyLaunch#event_pattern}
  */
  readonly eventPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#metric_name EvidentlyLaunch#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#unit_label EvidentlyLaunch#unit_label}
  */
  readonly unitLabel?: string;
  /**
  * The JSON path to reference the numerical metric value in the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#value_key EvidentlyLaunch#value_key}
  */
  readonly valueKey?: string;
}

export function evidentlyLaunchMetricMonitorsToTerraform(struct?: EvidentlyLaunchMetricMonitors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_id_key: cdktn.stringToTerraform(struct!.entityIdKey),
    event_pattern: cdktn.stringToTerraform(struct!.eventPattern),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    unit_label: cdktn.stringToTerraform(struct!.unitLabel),
    value_key: cdktn.stringToTerraform(struct!.valueKey),
  }
}


export function evidentlyLaunchMetricMonitorsToHclTerraform(struct?: EvidentlyLaunchMetricMonitors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_id_key: {
      value: cdktn.stringToHclTerraform(struct!.entityIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_pattern: {
      value: cdktn.stringToHclTerraform(struct!.eventPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_label: {
      value: cdktn.stringToHclTerraform(struct!.unitLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_key: {
      value: cdktn.stringToHclTerraform(struct!.valueKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvidentlyLaunchMetricMonitorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchMetricMonitors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdKey = this._entityIdKey;
    }
    if (this._eventPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventPattern = this._eventPattern;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._unitLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitLabel = this._unitLabel;
    }
    if (this._valueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueKey = this._valueKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchMetricMonitors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityIdKey = undefined;
      this._eventPattern = undefined;
      this._metricName = undefined;
      this._unitLabel = undefined;
      this._valueKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityIdKey = value.entityIdKey;
      this._eventPattern = value.eventPattern;
      this._metricName = value.metricName;
      this._unitLabel = value.unitLabel;
      this._valueKey = value.valueKey;
    }
  }

  // entity_id_key - computed: true, optional: true, required: false
  private _entityIdKey?: string;
  public get entityIdKey() {
    return this.getStringAttribute('entity_id_key');
  }
  public set entityIdKey(value: string) {
    this._entityIdKey = value;
  }
  public resetEntityIdKey() {
    this._entityIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdKeyInput() {
    return this._entityIdKey;
  }

  // event_pattern - computed: true, optional: true, required: false
  private _eventPattern?: string;
  public get eventPattern() {
    return this.getStringAttribute('event_pattern');
  }
  public set eventPattern(value: string) {
    this._eventPattern = value;
  }
  public resetEventPattern() {
    this._eventPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string;
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // unit_label - computed: true, optional: true, required: false
  private _unitLabel?: string;
  public get unitLabel() {
    return this.getStringAttribute('unit_label');
  }
  public set unitLabel(value: string) {
    this._unitLabel = value;
  }
  public resetUnitLabel() {
    this._unitLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitLabelInput() {
    return this._unitLabel;
  }

  // value_key - computed: true, optional: true, required: false
  private _valueKey?: string;
  public get valueKey() {
    return this.getStringAttribute('value_key');
  }
  public set valueKey(value: string) {
    this._valueKey = value;
  }
  public resetValueKey() {
    this._valueKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueKeyInput() {
    return this._valueKey;
  }
}

export class EvidentlyLaunchMetricMonitorsList extends cdktn.ComplexList {
  public internalValue? : EvidentlyLaunchMetricMonitors[] | cdktn.IResolvable

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
  public get(index: number): EvidentlyLaunchMetricMonitorsOutputReference {
    return new EvidentlyLaunchMetricMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchScheduledSplitsConfigGroupWeights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}
  */
  readonly splitWeight: number;
}

export function evidentlyLaunchScheduledSplitsConfigGroupWeightsToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigGroupWeights | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_name: cdktn.stringToTerraform(struct!.groupName),
    split_weight: cdktn.numberToTerraform(struct!.splitWeight),
  }
}


export function evidentlyLaunchScheduledSplitsConfigGroupWeightsToHclTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigGroupWeights | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_name: {
      value: cdktn.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_weight: {
      value: cdktn.numberToHclTerraform(struct!.splitWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchScheduledSplitsConfigGroupWeights | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._splitWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitWeight = this._splitWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchScheduledSplitsConfigGroupWeights | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._splitWeight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._splitWeight = value.splitWeight;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string;
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // split_weight - computed: false, optional: false, required: true
  private _splitWeight?: number;
  public get splitWeight() {
    return this.getNumberAttribute('split_weight');
  }
  public set splitWeight(value: number) {
    this._splitWeight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitWeightInput() {
    return this._splitWeight;
  }
}

export class EvidentlyLaunchScheduledSplitsConfigGroupWeightsList extends cdktn.ComplexList {
  public internalValue? : EvidentlyLaunchScheduledSplitsConfigGroupWeights[] | cdktn.IResolvable

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
  public get(index: number): EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference {
    return new EvidentlyLaunchScheduledSplitsConfigGroupWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#group_name EvidentlyLaunch#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#split_weight EvidentlyLaunch#split_weight}
  */
  readonly splitWeight?: number;
}

export function evidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_name: cdktn.stringToTerraform(struct!.groupName),
    split_weight: cdktn.numberToTerraform(struct!.splitWeight),
  }
}


export function evidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsToHclTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_name: {
      value: cdktn.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_weight: {
      value: cdktn.numberToHclTerraform(struct!.splitWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._splitWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitWeight = this._splitWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._splitWeight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._splitWeight = value.splitWeight;
    }
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string;
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // split_weight - computed: true, optional: true, required: false
  private _splitWeight?: number;
  public get splitWeight() {
    return this.getNumberAttribute('split_weight');
  }
  public set splitWeight(value: number) {
    this._splitWeight = value;
  }
  public resetSplitWeight() {
    this._splitWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitWeightInput() {
    return this._splitWeight;
  }
}

export class EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList extends cdktn.ComplexList {
  public internalValue? : EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights[] | cdktn.IResolvable

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
  public get(index: number): EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference {
    return new EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchScheduledSplitsConfigSegmentOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#evaluation_order EvidentlyLaunch#evaluation_order}
  */
  readonly evaluationOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#segment EvidentlyLaunch#segment}
  */
  readonly segment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#weights EvidentlyLaunch#weights}
  */
  readonly weights?: EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights[] | cdktn.IResolvable;
}

export function evidentlyLaunchScheduledSplitsConfigSegmentOverridesToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigSegmentOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    evaluation_order: cdktn.numberToTerraform(struct!.evaluationOrder),
    segment: cdktn.stringToTerraform(struct!.segment),
    weights: cdktn.listMapper(evidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsToTerraform, false)(struct!.weights),
  }
}


export function evidentlyLaunchScheduledSplitsConfigSegmentOverridesToHclTerraform(struct?: EvidentlyLaunchScheduledSplitsConfigSegmentOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    evaluation_order: {
      value: cdktn.numberToHclTerraform(struct!.evaluationOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment: {
      value: cdktn.stringToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weights: {
      value: cdktn.listMapperHcl(evidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsToHclTerraform, false)(struct!.weights),
      isBlock: true,
      type: "set",
      storageClassType: "EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchScheduledSplitsConfigSegmentOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationOrder = this._evaluationOrder;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._weights?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weights = this._weights?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchScheduledSplitsConfigSegmentOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationOrder = undefined;
      this._segment = undefined;
      this._weights.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationOrder = value.evaluationOrder;
      this._segment = value.segment;
      this._weights.internalValue = value.weights;
    }
  }

  // evaluation_order - computed: true, optional: true, required: false
  private _evaluationOrder?: number;
  public get evaluationOrder() {
    return this.getNumberAttribute('evaluation_order');
  }
  public set evaluationOrder(value: number) {
    this._evaluationOrder = value;
  }
  public resetEvaluationOrder() {
    this._evaluationOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationOrderInput() {
    return this._evaluationOrder;
  }

  // segment - computed: true, optional: true, required: false
  private _segment?: string;
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // weights - computed: true, optional: true, required: false
  private _weights = new EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeightsList(this, "weights", true);
  public get weights() {
    return this._weights;
  }
  public putWeights(value: EvidentlyLaunchScheduledSplitsConfigSegmentOverridesWeights[] | cdktn.IResolvable) {
    this._weights.internalValue = value;
  }
  public resetWeights() {
    this._weights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightsInput() {
    return this._weights.internalValue;
  }
}

export class EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList extends cdktn.ComplexList {
  public internalValue? : EvidentlyLaunchScheduledSplitsConfigSegmentOverrides[] | cdktn.IResolvable

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
  public get(index: number): EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference {
    return new EvidentlyLaunchScheduledSplitsConfigSegmentOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchScheduledSplitsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#group_weights EvidentlyLaunch#group_weights}
  */
  readonly groupWeights: EvidentlyLaunchScheduledSplitsConfigGroupWeights[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#segment_overrides EvidentlyLaunch#segment_overrides}
  */
  readonly segmentOverrides?: EvidentlyLaunchScheduledSplitsConfigSegmentOverrides[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#start_time EvidentlyLaunch#start_time}
  */
  readonly startTime: string;
}

export function evidentlyLaunchScheduledSplitsConfigToTerraform(struct?: EvidentlyLaunchScheduledSplitsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_weights: cdktn.listMapper(evidentlyLaunchScheduledSplitsConfigGroupWeightsToTerraform, false)(struct!.groupWeights),
    segment_overrides: cdktn.listMapper(evidentlyLaunchScheduledSplitsConfigSegmentOverridesToTerraform, false)(struct!.segmentOverrides),
    start_time: cdktn.stringToTerraform(struct!.startTime),
  }
}


export function evidentlyLaunchScheduledSplitsConfigToHclTerraform(struct?: EvidentlyLaunchScheduledSplitsConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_weights: {
      value: cdktn.listMapperHcl(evidentlyLaunchScheduledSplitsConfigGroupWeightsToHclTerraform, false)(struct!.groupWeights),
      isBlock: true,
      type: "set",
      storageClassType: "EvidentlyLaunchScheduledSplitsConfigGroupWeightsList",
    },
    segment_overrides: {
      value: cdktn.listMapperHcl(evidentlyLaunchScheduledSplitsConfigSegmentOverridesToHclTerraform, false)(struct!.segmentOverrides),
      isBlock: true,
      type: "set",
      storageClassType: "EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList",
    },
    start_time: {
      value: cdktn.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvidentlyLaunchScheduledSplitsConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchScheduledSplitsConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupWeights?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWeights = this._groupWeights?.internalValue;
    }
    if (this._segmentOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentOverrides = this._segmentOverrides?.internalValue;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvidentlyLaunchScheduledSplitsConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupWeights.internalValue = undefined;
      this._segmentOverrides.internalValue = undefined;
      this._startTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupWeights.internalValue = value.groupWeights;
      this._segmentOverrides.internalValue = value.segmentOverrides;
      this._startTime = value.startTime;
    }
  }

  // group_weights - computed: false, optional: false, required: true
  private _groupWeights = new EvidentlyLaunchScheduledSplitsConfigGroupWeightsList(this, "group_weights", true);
  public get groupWeights() {
    return this._groupWeights;
  }
  public putGroupWeights(value: EvidentlyLaunchScheduledSplitsConfigGroupWeights[] | cdktn.IResolvable) {
    this._groupWeights.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWeightsInput() {
    return this._groupWeights.internalValue;
  }

  // segment_overrides - computed: true, optional: true, required: false
  private _segmentOverrides = new EvidentlyLaunchScheduledSplitsConfigSegmentOverridesList(this, "segment_overrides", true);
  public get segmentOverrides() {
    return this._segmentOverrides;
  }
  public putSegmentOverrides(value: EvidentlyLaunchScheduledSplitsConfigSegmentOverrides[] | cdktn.IResolvable) {
    this._segmentOverrides.internalValue = value;
  }
  public resetSegmentOverrides() {
    this._segmentOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOverridesInput() {
    return this._segmentOverrides.internalValue;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string;
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class EvidentlyLaunchScheduledSplitsConfigList extends cdktn.ComplexList {
  public internalValue? : EvidentlyLaunchScheduledSplitsConfig[] | cdktn.IResolvable

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
  public get(index: number): EvidentlyLaunchScheduledSplitsConfigOutputReference {
    return new EvidentlyLaunchScheduledSplitsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvidentlyLaunchTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#key EvidentlyLaunch#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#value EvidentlyLaunch#value}
  */
  readonly value?: string;
}

export function evidentlyLaunchTagsToTerraform(struct?: EvidentlyLaunchTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function evidentlyLaunchTagsToHclTerraform(struct?: EvidentlyLaunchTags | cdktn.IResolvable): any {
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

export class EvidentlyLaunchTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EvidentlyLaunchTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EvidentlyLaunchTags | cdktn.IResolvable | undefined) {
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

export class EvidentlyLaunchTagsList extends cdktn.ComplexList {
  public internalValue? : EvidentlyLaunchTags[] | cdktn.IResolvable

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
  public get(index: number): EvidentlyLaunchTagsOutputReference {
    return new EvidentlyLaunchTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch awscc_evidently_launch}
*/
export class EvidentlyLaunch extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_evidently_launch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EvidentlyLaunch resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EvidentlyLaunch to import
  * @param importFromId The id of the existing EvidentlyLaunch that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EvidentlyLaunch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_evidently_launch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/evidently_launch awscc_evidently_launch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvidentlyLaunchConfig
  */
  public constructor(scope: Construct, id: string, config: EvidentlyLaunchConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_evidently_launch',
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
    this._description = config.description;
    this._executionStatus.internalValue = config.executionStatus;
    this._groups.internalValue = config.groups;
    this._metricMonitors.internalValue = config.metricMonitors;
    this._name = config.name;
    this._project = config.project;
    this._randomizationSalt = config.randomizationSalt;
    this._scheduledSplitsConfig.internalValue = config.scheduledSplitsConfig;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // execution_status - computed: true, optional: true, required: false
  private _executionStatus = new EvidentlyLaunchExecutionStatusOutputReference(this, "execution_status");
  public get executionStatus() {
    return this._executionStatus;
  }
  public putExecutionStatus(value: EvidentlyLaunchExecutionStatus) {
    this._executionStatus.internalValue = value;
  }
  public resetExecutionStatus() {
    this._executionStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStatusInput() {
    return this._executionStatus.internalValue;
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new EvidentlyLaunchGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: EvidentlyLaunchGroups[] | cdktn.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_monitors - computed: true, optional: true, required: false
  private _metricMonitors = new EvidentlyLaunchMetricMonitorsList(this, "metric_monitors", false);
  public get metricMonitors() {
    return this._metricMonitors;
  }
  public putMetricMonitors(value: EvidentlyLaunchMetricMonitors[] | cdktn.IResolvable) {
    this._metricMonitors.internalValue = value;
  }
  public resetMetricMonitors() {
    this._metricMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMonitorsInput() {
    return this._metricMonitors.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // randomization_salt - computed: true, optional: true, required: false
  private _randomizationSalt?: string;
  public get randomizationSalt() {
    return this.getStringAttribute('randomization_salt');
  }
  public set randomizationSalt(value: string) {
    this._randomizationSalt = value;
  }
  public resetRandomizationSalt() {
    this._randomizationSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizationSaltInput() {
    return this._randomizationSalt;
  }

  // scheduled_splits_config - computed: false, optional: false, required: true
  private _scheduledSplitsConfig = new EvidentlyLaunchScheduledSplitsConfigList(this, "scheduled_splits_config", false);
  public get scheduledSplitsConfig() {
    return this._scheduledSplitsConfig;
  }
  public putScheduledSplitsConfig(value: EvidentlyLaunchScheduledSplitsConfig[] | cdktn.IResolvable) {
    this._scheduledSplitsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledSplitsConfigInput() {
    return this._scheduledSplitsConfig.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EvidentlyLaunchTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EvidentlyLaunchTags[] | cdktn.IResolvable) {
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
      description: cdktn.stringToTerraform(this._description),
      execution_status: evidentlyLaunchExecutionStatusToTerraform(this._executionStatus.internalValue),
      groups: cdktn.listMapper(evidentlyLaunchGroupsToTerraform, false)(this._groups.internalValue),
      metric_monitors: cdktn.listMapper(evidentlyLaunchMetricMonitorsToTerraform, false)(this._metricMonitors.internalValue),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      randomization_salt: cdktn.stringToTerraform(this._randomizationSalt),
      scheduled_splits_config: cdktn.listMapper(evidentlyLaunchScheduledSplitsConfigToTerraform, false)(this._scheduledSplitsConfig.internalValue),
      tags: cdktn.listMapper(evidentlyLaunchTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_status: {
        value: evidentlyLaunchExecutionStatusToHclTerraform(this._executionStatus.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EvidentlyLaunchExecutionStatus",
      },
      groups: {
        value: cdktn.listMapperHcl(evidentlyLaunchGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvidentlyLaunchGroupsList",
      },
      metric_monitors: {
        value: cdktn.listMapperHcl(evidentlyLaunchMetricMonitorsToHclTerraform, false)(this._metricMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvidentlyLaunchMetricMonitorsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      randomization_salt: {
        value: cdktn.stringToHclTerraform(this._randomizationSalt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_splits_config: {
        value: cdktn.listMapperHcl(evidentlyLaunchScheduledSplitsConfigToHclTerraform, false)(this._scheduledSplitsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvidentlyLaunchScheduledSplitsConfigList",
      },
      tags: {
        value: cdktn.listMapperHcl(evidentlyLaunchTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EvidentlyLaunchTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
