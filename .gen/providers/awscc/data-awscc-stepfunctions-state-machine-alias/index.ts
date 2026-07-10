// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/stepfunctions_state_machine_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccStepfunctionsStateMachineAliasConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/stepfunctions_state_machine_alias#id DataAwsccStepfunctionsStateMachineAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccStepfunctionsStateMachineAliasDeploymentPreference {
}

export function dataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceToTerraform(struct?: DataAwsccStepfunctionsStateMachineAliasDeploymentPreference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceToHclTerraform(struct?: DataAwsccStepfunctionsStateMachineAliasDeploymentPreference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccStepfunctionsStateMachineAliasDeploymentPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStepfunctionsStateMachineAliasDeploymentPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarms - computed: true, optional: false, required: false
  public get alarms() {
    return cdktn.Fn.tolist(this.getListAttribute('alarms'));
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // percentage - computed: true, optional: false, required: false
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }

  // state_machine_version_arn - computed: true, optional: false, required: false
  public get stateMachineVersionArn() {
    return this.getStringAttribute('state_machine_version_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration {
}

export function dataAwsccStepfunctionsStateMachineAliasRoutingConfigurationToTerraform(struct?: DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccStepfunctionsStateMachineAliasRoutingConfigurationToHclTerraform(struct?: DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state_machine_version_arn - computed: true, optional: false, required: false
  public get stateMachineVersionArn() {
    return this.getStringAttribute('state_machine_version_arn');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference {
    return new DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias}
*/
export class DataAwsccStepfunctionsStateMachineAlias extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_stepfunctions_state_machine_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccStepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccStepfunctionsStateMachineAlias to import
  * @param importFromId The id of the existing DataAwsccStepfunctionsStateMachineAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/stepfunctions_state_machine_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccStepfunctionsStateMachineAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_stepfunctions_state_machine_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccStepfunctionsStateMachineAliasConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccStepfunctionsStateMachineAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_stepfunctions_state_machine_alias',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deployment_preference - computed: true, optional: false, required: false
  private _deploymentPreference = new DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference(this, "deployment_preference");
  public get deploymentPreference() {
    return this._deploymentPreference;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // routing_configuration - computed: true, optional: false, required: false
  private _routingConfiguration = new DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList(this, "routing_configuration", true);
  public get routingConfiguration() {
    return this._routingConfiguration;
  }

  // state_machine_arn - computed: true, optional: false, required: false
  public get stateMachineArn() {
    return this.getStringAttribute('state_machine_arn');
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
