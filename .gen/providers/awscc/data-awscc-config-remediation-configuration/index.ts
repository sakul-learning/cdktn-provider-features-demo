// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/config_remediation_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConfigRemediationConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/config_remediation_configuration#id DataAwsccConfigRemediationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls {
}

export function dataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsToTerraform(struct?: DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsToHclTerraform(struct?: DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigRemediationConfigurationExecutionControlsSsmControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrent_execution_rate_percentage - computed: true, optional: false, required: false
  public get concurrentExecutionRatePercentage() {
    return this.getNumberAttribute('concurrent_execution_rate_percentage');
  }

  // error_percentage - computed: true, optional: false, required: false
  public get errorPercentage() {
    return this.getNumberAttribute('error_percentage');
  }
}
export interface DataAwsccConfigRemediationConfigurationExecutionControls {
}

export function dataAwsccConfigRemediationConfigurationExecutionControlsToTerraform(struct?: DataAwsccConfigRemediationConfigurationExecutionControls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConfigRemediationConfigurationExecutionControlsToHclTerraform(struct?: DataAwsccConfigRemediationConfigurationExecutionControls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConfigRemediationConfigurationExecutionControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConfigRemediationConfigurationExecutionControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssm_controls - computed: true, optional: false, required: false
  private _ssmControls = new DataAwsccConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(this, "ssm_controls");
  public get ssmControls() {
    return this._ssmControls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/config_remediation_configuration awscc_config_remediation_configuration}
*/
export class DataAwsccConfigRemediationConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_config_remediation_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConfigRemediationConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConfigRemediationConfiguration to import
  * @param importFromId The id of the existing DataAwsccConfigRemediationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/config_remediation_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConfigRemediationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_remediation_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/config_remediation_configuration awscc_config_remediation_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConfigRemediationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConfigRemediationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_remediation_configuration',
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

  // automatic - computed: true, optional: false, required: false
  public get automatic() {
    return this.getBooleanAttribute('automatic');
  }

  // config_rule_name - computed: true, optional: false, required: false
  public get configRuleName() {
    return this.getStringAttribute('config_rule_name');
  }

  // execution_controls - computed: true, optional: false, required: false
  private _executionControls = new DataAwsccConfigRemediationConfigurationExecutionControlsOutputReference(this, "execution_controls");
  public get executionControls() {
    return this._executionControls;
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

  // maximum_automatic_attempts - computed: true, optional: false, required: false
  public get maximumAutomaticAttempts() {
    return this.getNumberAttribute('maximum_automatic_attempts');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // retry_attempt_seconds - computed: true, optional: false, required: false
  public get retryAttemptSeconds() {
    return this.getNumberAttribute('retry_attempt_seconds');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
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
