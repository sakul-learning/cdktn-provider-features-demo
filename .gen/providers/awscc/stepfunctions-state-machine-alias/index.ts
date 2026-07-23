// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StepfunctionsStateMachineAliasConfig extends cdktn.TerraformMetaArguments {
  /**
  * The settings to enable gradual state machine deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#deployment_preference StepfunctionsStateMachineAlias#deployment_preference}
  */
  readonly deploymentPreference?: StepfunctionsStateMachineAliasDeploymentPreference;
  /**
  * An optional description of the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#description StepfunctionsStateMachineAlias#description}
  */
  readonly description?: string;
  /**
  * The alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#name StepfunctionsStateMachineAlias#name}
  */
  readonly name?: string;
  /**
  * The routing configuration of the alias. One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#routing_configuration StepfunctionsStateMachineAlias#routing_configuration}
  */
  readonly routingConfiguration?: StepfunctionsStateMachineAliasRoutingConfiguration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}
  */
  readonly stateMachineArn?: string;
}
export interface StepfunctionsStateMachineAliasDeploymentPreference {
  /**
  * A list of CloudWatch alarm names that will be monitored during the deployment. The deployment will fail and rollback if any alarms go into ALARM state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#alarms StepfunctionsStateMachineAlias#alarms}
  */
  readonly alarms?: string[];
  /**
  * The time in minutes between each traffic shifting increment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#interval StepfunctionsStateMachineAlias#interval}
  */
  readonly interval?: number;
  /**
  * The percentage of traffic to shift to the new version in each increment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#percentage StepfunctionsStateMachineAlias#percentage}
  */
  readonly percentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}
  */
  readonly stateMachineVersionArn?: string;
  /**
  * The type of deployment to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#type StepfunctionsStateMachineAlias#type}
  */
  readonly type?: string;
}

export function stepfunctionsStateMachineAliasDeploymentPreferenceToTerraform(struct?: StepfunctionsStateMachineAliasDeploymentPreference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alarms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.alarms),
    interval: cdktn.numberToTerraform(struct!.interval),
    percentage: cdktn.numberToTerraform(struct!.percentage),
    state_machine_version_arn: cdktn.stringToTerraform(struct!.stateMachineVersionArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function stepfunctionsStateMachineAliasDeploymentPreferenceToHclTerraform(struct?: StepfunctionsStateMachineAliasDeploymentPreference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alarms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.alarms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state_machine_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.stateMachineVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StepfunctionsStateMachineAliasDeploymentPreference | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._stateMachineVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMachineVersionArn = this._stateMachineVersionArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepfunctionsStateMachineAliasDeploymentPreference | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarms = undefined;
      this._interval = undefined;
      this._percentage = undefined;
      this._stateMachineVersionArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarms = value.alarms;
      this._interval = value.interval;
      this._percentage = value.percentage;
      this._stateMachineVersionArn = value.stateMachineVersionArn;
      this._type = value.type;
    }
  }

  // alarms - computed: true, optional: true, required: false
  private _alarms?: string[]; 
  public get alarms() {
    return cdktn.Fn.tolist(this.getListAttribute('alarms'));
  }
  public set alarms(value: string[]) {
    this._alarms = value;
  }
  public resetAlarms() {
    this._alarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // percentage - computed: true, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // state_machine_version_arn - computed: true, optional: true, required: false
  private _stateMachineVersionArn?: string; 
  public get stateMachineVersionArn() {
    return this.getStringAttribute('state_machine_version_arn');
  }
  public set stateMachineVersionArn(value: string) {
    this._stateMachineVersionArn = value;
  }
  public resetStateMachineVersionArn() {
    this._stateMachineVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineVersionArnInput() {
    return this._stateMachineVersionArn;
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
export interface StepfunctionsStateMachineAliasRoutingConfiguration {
  /**
  * The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}
  */
  readonly stateMachineVersionArn?: string;
  /**
  * The percentage of traffic you want to route to the state machine version. The sum of the weights in the routing configuration must be equal to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#weight StepfunctionsStateMachineAlias#weight}
  */
  readonly weight?: number;
}

export function stepfunctionsStateMachineAliasRoutingConfigurationToTerraform(struct?: StepfunctionsStateMachineAliasRoutingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state_machine_version_arn: cdktn.stringToTerraform(struct!.stateMachineVersionArn),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function stepfunctionsStateMachineAliasRoutingConfigurationToHclTerraform(struct?: StepfunctionsStateMachineAliasRoutingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state_machine_version_arn: {
      value: cdktn.stringToHclTerraform(struct!.stateMachineVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class StepfunctionsStateMachineAliasRoutingConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StepfunctionsStateMachineAliasRoutingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stateMachineVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMachineVersionArn = this._stateMachineVersionArn;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepfunctionsStateMachineAliasRoutingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stateMachineVersionArn = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stateMachineVersionArn = value.stateMachineVersionArn;
      this._weight = value.weight;
    }
  }

  // state_machine_version_arn - computed: true, optional: true, required: false
  private _stateMachineVersionArn?: string; 
  public get stateMachineVersionArn() {
    return this.getStringAttribute('state_machine_version_arn');
  }
  public set stateMachineVersionArn(value: string) {
    this._stateMachineVersionArn = value;
  }
  public resetStateMachineVersionArn() {
    this._stateMachineVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineVersionArnInput() {
    return this._stateMachineVersionArn;
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

export class StepfunctionsStateMachineAliasRoutingConfigurationList extends cdktn.ComplexList {
  public internalValue? : StepfunctionsStateMachineAliasRoutingConfiguration[] | cdktn.IResolvable

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
  public get(index: number): StepfunctionsStateMachineAliasRoutingConfigurationOutputReference {
    return new StepfunctionsStateMachineAliasRoutingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias}
*/
export class StepfunctionsStateMachineAlias extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_stepfunctions_state_machine_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StepfunctionsStateMachineAlias to import
  * @param importFromId The id of the existing StepfunctionsStateMachineAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StepfunctionsStateMachineAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_stepfunctions_state_machine_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StepfunctionsStateMachineAliasConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StepfunctionsStateMachineAliasConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_stepfunctions_state_machine_alias',
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
    this._deploymentPreference.internalValue = config.deploymentPreference;
    this._description = config.description;
    this._name = config.name;
    this._routingConfiguration.internalValue = config.routingConfiguration;
    this._stateMachineArn = config.stateMachineArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deployment_preference - computed: true, optional: true, required: false
  private _deploymentPreference = new StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference(this, "deployment_preference");
  public get deploymentPreference() {
    return this._deploymentPreference;
  }
  public putDeploymentPreference(value: StepfunctionsStateMachineAliasDeploymentPreference) {
    this._deploymentPreference.internalValue = value;
  }
  public resetDeploymentPreference() {
    this._deploymentPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentPreferenceInput() {
    return this._deploymentPreference.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // routing_configuration - computed: true, optional: true, required: false
  private _routingConfiguration = new StepfunctionsStateMachineAliasRoutingConfigurationList(this, "routing_configuration", true);
  public get routingConfiguration() {
    return this._routingConfiguration;
  }
  public putRoutingConfiguration(value: StepfunctionsStateMachineAliasRoutingConfiguration[] | cdktn.IResolvable) {
    this._routingConfiguration.internalValue = value;
  }
  public resetRoutingConfiguration() {
    this._routingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigurationInput() {
    return this._routingConfiguration.internalValue;
  }

  // state_machine_arn - computed: true, optional: true, required: false
  private _stateMachineArn?: string; 
  public get stateMachineArn() {
    return this.getStringAttribute('state_machine_arn');
  }
  public set stateMachineArn(value: string) {
    this._stateMachineArn = value;
  }
  public resetStateMachineArn() {
    this._stateMachineArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineArnInput() {
    return this._stateMachineArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_preference: stepfunctionsStateMachineAliasDeploymentPreferenceToTerraform(this._deploymentPreference.internalValue),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      routing_configuration: cdktn.listMapper(stepfunctionsStateMachineAliasRoutingConfigurationToTerraform, false)(this._routingConfiguration.internalValue),
      state_machine_arn: cdktn.stringToTerraform(this._stateMachineArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_preference: {
        value: stepfunctionsStateMachineAliasDeploymentPreferenceToHclTerraform(this._deploymentPreference.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StepfunctionsStateMachineAliasDeploymentPreference",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_configuration: {
        value: cdktn.listMapperHcl(stepfunctionsStateMachineAliasRoutingConfigurationToHclTerraform, false)(this._routingConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StepfunctionsStateMachineAliasRoutingConfigurationList",
      },
      state_machine_arn: {
        value: cdktn.stringToHclTerraform(this._stateMachineArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
