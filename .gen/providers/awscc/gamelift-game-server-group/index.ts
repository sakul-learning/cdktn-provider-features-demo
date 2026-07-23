// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GameliftGameServerGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}
  */
  readonly autoScalingPolicy?: GameliftGameServerGroupAutoScalingPolicy;
  /**
  * The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}
  */
  readonly balancingStrategy?: string;
  /**
  * The type of delete to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#delete_option GameliftGameServerGroup#delete_option}
  */
  readonly deleteOption?: string;
  /**
  * An identifier for the new game server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}
  */
  readonly gameServerGroupName: string;
  /**
  * A flag that indicates whether instances in the game server group are protected from early termination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}
  */
  readonly gameServerProtectionPolicy?: string;
  /**
  * A set of EC2 instance types to use when creating instances in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#instance_definitions GameliftGameServerGroup#instance_definitions}
  */
  readonly instanceDefinitions: GameliftGameServerGroupInstanceDefinitions[] | cdktn.IResolvable;
  /**
  * The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#launch_template GameliftGameServerGroup#launch_template}
  */
  readonly launchTemplate?: GameliftGameServerGroupLaunchTemplate;
  /**
  * The maximum number of instances allowed in the EC2 Auto Scaling group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}
  */
  readonly maxSize?: number;
  /**
  * The minimum number of instances allowed in the EC2 Auto Scaling group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}
  */
  readonly minSize?: number;
  /**
  * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}
  */
  readonly roleArn: string;
  /**
  * A list of labels to assign to the new game server group resource. Updating game server group tags with CloudFormation will not take effect. Please update this property using AWS GameLift APIs instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#tags GameliftGameServerGroup#tags}
  */
  readonly tags?: GameliftGameServerGroupTags[] | cdktn.IResolvable;
  /**
  * A list of virtual private cloud (VPC) subnets to use with instances in the game server group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}
  */
  readonly vpcSubnets?: string[];
}
export interface GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration {
  /**
  * Desired value to use with a game server group target-based scaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}
  */
  readonly targetValue?: number;
}

export function gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToTerraform(struct?: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_value: cdktn.numberToTerraform(struct!.targetValue),
  }
}


export function gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToHclTerraform(struct?: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_value: {
      value: cdktn.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetValue = value.targetValue;
    }
  }

  // target_value - computed: true, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}
export interface GameliftGameServerGroupAutoScalingPolicy {
  /**
  * Length of time, in seconds, it takes for a new instance to start new game server processes and register with GameLift FleetIQ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}
  */
  readonly estimatedInstanceWarmup?: number;
  /**
  * Settings for a target-based scaling policy applied to Auto Scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#target_tracking_configuration GameliftGameServerGroup#target_tracking_configuration}
  */
  readonly targetTrackingConfiguration?: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration;
}

export function gameliftGameServerGroupAutoScalingPolicyToTerraform(struct?: GameliftGameServerGroupAutoScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    estimated_instance_warmup: cdktn.numberToTerraform(struct!.estimatedInstanceWarmup),
    target_tracking_configuration: gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToTerraform(struct!.targetTrackingConfiguration),
  }
}


export function gameliftGameServerGroupAutoScalingPolicyToHclTerraform(struct?: GameliftGameServerGroupAutoScalingPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    estimated_instance_warmup: {
      value: cdktn.numberToHclTerraform(struct!.estimatedInstanceWarmup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_tracking_configuration: {
      value: gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToHclTerraform(struct!.targetTrackingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftGameServerGroupAutoScalingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GameliftGameServerGroupAutoScalingPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._estimatedInstanceWarmup !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedInstanceWarmup = this._estimatedInstanceWarmup;
    }
    if (this._targetTrackingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingConfiguration = this._targetTrackingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftGameServerGroupAutoScalingPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._estimatedInstanceWarmup = undefined;
      this._targetTrackingConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._estimatedInstanceWarmup = value.estimatedInstanceWarmup;
      this._targetTrackingConfiguration.internalValue = value.targetTrackingConfiguration;
    }
  }

  // estimated_instance_warmup - computed: true, optional: true, required: false
  private _estimatedInstanceWarmup?: number; 
  public get estimatedInstanceWarmup() {
    return this.getNumberAttribute('estimated_instance_warmup');
  }
  public set estimatedInstanceWarmup(value: number) {
    this._estimatedInstanceWarmup = value;
  }
  public resetEstimatedInstanceWarmup() {
    this._estimatedInstanceWarmup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedInstanceWarmupInput() {
    return this._estimatedInstanceWarmup;
  }

  // target_tracking_configuration - computed: true, optional: true, required: false
  private _targetTrackingConfiguration = new GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference(this, "target_tracking_configuration");
  public get targetTrackingConfiguration() {
    return this._targetTrackingConfiguration;
  }
  public putTargetTrackingConfiguration(value: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration) {
    this._targetTrackingConfiguration.internalValue = value;
  }
  public resetTargetTrackingConfiguration() {
    this._targetTrackingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingConfigurationInput() {
    return this._targetTrackingConfiguration.internalValue;
  }
}
export interface GameliftGameServerGroupInstanceDefinitions {
  /**
  * An EC2 instance type designation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}
  */
  readonly instanceType: string;
  /**
  * Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}
  */
  readonly weightedCapacity?: string;
}

export function gameliftGameServerGroupInstanceDefinitionsToTerraform(struct?: GameliftGameServerGroupInstanceDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    weighted_capacity: cdktn.stringToTerraform(struct!.weightedCapacity),
  }
}


export function gameliftGameServerGroupInstanceDefinitionsToHclTerraform(struct?: GameliftGameServerGroupInstanceDefinitions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weighted_capacity: {
      value: cdktn.stringToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftGameServerGroupInstanceDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftGameServerGroupInstanceDefinitions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftGameServerGroupInstanceDefinitions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._weightedCapacity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._weightedCapacity = value.weightedCapacity;
    }
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // weighted_capacity - computed: true, optional: true, required: false
  private _weightedCapacity?: string; 
  public get weightedCapacity() {
    return this.getStringAttribute('weighted_capacity');
  }
  public set weightedCapacity(value: string) {
    this._weightedCapacity = value;
  }
  public resetWeightedCapacity() {
    this._weightedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedCapacityInput() {
    return this._weightedCapacity;
  }
}

export class GameliftGameServerGroupInstanceDefinitionsList extends cdktn.ComplexList {
  public internalValue? : GameliftGameServerGroupInstanceDefinitions[] | cdktn.IResolvable

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
  public get(index: number): GameliftGameServerGroupInstanceDefinitionsOutputReference {
    return new GameliftGameServerGroupInstanceDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftGameServerGroupLaunchTemplate {
  /**
  * A unique identifier for an existing EC2 launch template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#launch_template_id GameliftGameServerGroup#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * A readable identifier for an existing EC2 launch template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#launch_template_name GameliftGameServerGroup#launch_template_name}
  */
  readonly launchTemplateName?: string;
  /**
  * The version of the EC2 launch template to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#version GameliftGameServerGroup#version}
  */
  readonly version?: string;
}

export function gameliftGameServerGroupLaunchTemplateToTerraform(struct?: GameliftGameServerGroupLaunchTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    launch_template_id: cdktn.stringToTerraform(struct!.launchTemplateId),
    launch_template_name: cdktn.stringToTerraform(struct!.launchTemplateName),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function gameliftGameServerGroupLaunchTemplateToHclTerraform(struct?: GameliftGameServerGroupLaunchTemplate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    launch_template_id: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_template_name: {
      value: cdktn.stringToHclTerraform(struct!.launchTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GameliftGameServerGroupLaunchTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GameliftGameServerGroupLaunchTemplate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._launchTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateId = this._launchTemplateId;
    }
    if (this._launchTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplateName = this._launchTemplateName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftGameServerGroupLaunchTemplate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._launchTemplateId = undefined;
      this._launchTemplateName = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._launchTemplateId = value.launchTemplateId;
      this._launchTemplateName = value.launchTemplateName;
      this._version = value.version;
    }
  }

  // launch_template_id - computed: true, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_name - computed: true, optional: true, required: false
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  public resetLaunchTemplateName() {
    this._launchTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GameliftGameServerGroupTags {
  /**
  * The key for a developer-defined key:value pair for tagging an AWS resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#key GameliftGameServerGroup#key}
  */
  readonly key?: string;
  /**
  * The value for a developer-defined key:value pair for tagging an AWS resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#value GameliftGameServerGroup#value}
  */
  readonly value?: string;
}

export function gameliftGameServerGroupTagsToTerraform(struct?: GameliftGameServerGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function gameliftGameServerGroupTagsToHclTerraform(struct?: GameliftGameServerGroupTags | cdktn.IResolvable): any {
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

export class GameliftGameServerGroupTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GameliftGameServerGroupTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GameliftGameServerGroupTags | cdktn.IResolvable | undefined) {
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

export class GameliftGameServerGroupTagsList extends cdktn.ComplexList {
  public internalValue? : GameliftGameServerGroupTags[] | cdktn.IResolvable

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
  public get(index: number): GameliftGameServerGroupTagsOutputReference {
    return new GameliftGameServerGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group awscc_gamelift_game_server_group}
*/
export class GameliftGameServerGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_gamelift_game_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GameliftGameServerGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GameliftGameServerGroup to import
  * @param importFromId The id of the existing GameliftGameServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GameliftGameServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_gamelift_game_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/gamelift_game_server_group awscc_gamelift_game_server_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameliftGameServerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GameliftGameServerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_gamelift_game_server_group',
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
    this._autoScalingPolicy.internalValue = config.autoScalingPolicy;
    this._balancingStrategy = config.balancingStrategy;
    this._deleteOption = config.deleteOption;
    this._gameServerGroupName = config.gameServerGroupName;
    this._gameServerProtectionPolicy = config.gameServerProtectionPolicy;
    this._instanceDefinitions.internalValue = config.instanceDefinitions;
    this._launchTemplate.internalValue = config.launchTemplate;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
    this._vpcSubnets = config.vpcSubnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_arn - computed: true, optional: false, required: false
  public get autoScalingGroupArn() {
    return this.getStringAttribute('auto_scaling_group_arn');
  }

  // auto_scaling_policy - computed: true, optional: true, required: false
  private _autoScalingPolicy = new GameliftGameServerGroupAutoScalingPolicyOutputReference(this, "auto_scaling_policy");
  public get autoScalingPolicy() {
    return this._autoScalingPolicy;
  }
  public putAutoScalingPolicy(value: GameliftGameServerGroupAutoScalingPolicy) {
    this._autoScalingPolicy.internalValue = value;
  }
  public resetAutoScalingPolicy() {
    this._autoScalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingPolicyInput() {
    return this._autoScalingPolicy.internalValue;
  }

  // balancing_strategy - computed: true, optional: true, required: false
  private _balancingStrategy?: string; 
  public get balancingStrategy() {
    return this.getStringAttribute('balancing_strategy');
  }
  public set balancingStrategy(value: string) {
    this._balancingStrategy = value;
  }
  public resetBalancingStrategy() {
    this._balancingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancingStrategyInput() {
    return this._balancingStrategy;
  }

  // delete_option - computed: true, optional: true, required: false
  private _deleteOption?: string; 
  public get deleteOption() {
    return this.getStringAttribute('delete_option');
  }
  public set deleteOption(value: string) {
    this._deleteOption = value;
  }
  public resetDeleteOption() {
    this._deleteOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOptionInput() {
    return this._deleteOption;
  }

  // game_server_group_arn - computed: true, optional: false, required: false
  public get gameServerGroupArn() {
    return this.getStringAttribute('game_server_group_arn');
  }

  // game_server_group_name - computed: false, optional: false, required: true
  private _gameServerGroupName?: string; 
  public get gameServerGroupName() {
    return this.getStringAttribute('game_server_group_name');
  }
  public set gameServerGroupName(value: string) {
    this._gameServerGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerGroupNameInput() {
    return this._gameServerGroupName;
  }

  // game_server_protection_policy - computed: true, optional: true, required: false
  private _gameServerProtectionPolicy?: string; 
  public get gameServerProtectionPolicy() {
    return this.getStringAttribute('game_server_protection_policy');
  }
  public set gameServerProtectionPolicy(value: string) {
    this._gameServerProtectionPolicy = value;
  }
  public resetGameServerProtectionPolicy() {
    this._gameServerProtectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerProtectionPolicyInput() {
    return this._gameServerProtectionPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_definitions - computed: false, optional: false, required: true
  private _instanceDefinitions = new GameliftGameServerGroupInstanceDefinitionsList(this, "instance_definitions", false);
  public get instanceDefinitions() {
    return this._instanceDefinitions;
  }
  public putInstanceDefinitions(value: GameliftGameServerGroupInstanceDefinitions[] | cdktn.IResolvable) {
    this._instanceDefinitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDefinitionsInput() {
    return this._instanceDefinitions.internalValue;
  }

  // launch_template - computed: true, optional: true, required: false
  private _launchTemplate = new GameliftGameServerGroupLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: GameliftGameServerGroupLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new GameliftGameServerGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GameliftGameServerGroupTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_subnets - computed: true, optional: true, required: false
  private _vpcSubnets?: string[]; 
  public get vpcSubnets() {
    return this.getListAttribute('vpc_subnets');
  }
  public set vpcSubnets(value: string[]) {
    this._vpcSubnets = value;
  }
  public resetVpcSubnets() {
    this._vpcSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetsInput() {
    return this._vpcSubnets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_policy: gameliftGameServerGroupAutoScalingPolicyToTerraform(this._autoScalingPolicy.internalValue),
      balancing_strategy: cdktn.stringToTerraform(this._balancingStrategy),
      delete_option: cdktn.stringToTerraform(this._deleteOption),
      game_server_group_name: cdktn.stringToTerraform(this._gameServerGroupName),
      game_server_protection_policy: cdktn.stringToTerraform(this._gameServerProtectionPolicy),
      instance_definitions: cdktn.listMapper(gameliftGameServerGroupInstanceDefinitionsToTerraform, false)(this._instanceDefinitions.internalValue),
      launch_template: gameliftGameServerGroupLaunchTemplateToTerraform(this._launchTemplate.internalValue),
      max_size: cdktn.numberToTerraform(this._maxSize),
      min_size: cdktn.numberToTerraform(this._minSize),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(gameliftGameServerGroupTagsToTerraform, false)(this._tags.internalValue),
      vpc_subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSubnets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_policy: {
        value: gameliftGameServerGroupAutoScalingPolicyToHclTerraform(this._autoScalingPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GameliftGameServerGroupAutoScalingPolicy",
      },
      balancing_strategy: {
        value: cdktn.stringToHclTerraform(this._balancingStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_option: {
        value: cdktn.stringToHclTerraform(this._deleteOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      game_server_group_name: {
        value: cdktn.stringToHclTerraform(this._gameServerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      game_server_protection_policy: {
        value: cdktn.stringToHclTerraform(this._gameServerProtectionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_definitions: {
        value: cdktn.listMapperHcl(gameliftGameServerGroupInstanceDefinitionsToHclTerraform, false)(this._instanceDefinitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GameliftGameServerGroupInstanceDefinitionsList",
      },
      launch_template: {
        value: gameliftGameServerGroupLaunchTemplateToHclTerraform(this._launchTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GameliftGameServerGroupLaunchTemplate",
      },
      max_size: {
        value: cdktn.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktn.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(gameliftGameServerGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GameliftGameServerGroupTagsList",
      },
      vpc_subnets: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
