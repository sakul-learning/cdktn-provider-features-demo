// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_lifecycle_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAutoscalingLifecycleHookConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_lifecycle_hook#id DataAwsccAutoscalingLifecycleHook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_lifecycle_hook awscc_autoscaling_lifecycle_hook}
*/
export class DataAwsccAutoscalingLifecycleHook extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_autoscaling_lifecycle_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAutoscalingLifecycleHook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAutoscalingLifecycleHook to import
  * @param importFromId The id of the existing DataAwsccAutoscalingLifecycleHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_lifecycle_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAutoscalingLifecycleHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_lifecycle_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_lifecycle_hook awscc_autoscaling_lifecycle_hook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAutoscalingLifecycleHookConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAutoscalingLifecycleHookConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_autoscaling_lifecycle_hook',
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

  // auto_scaling_group_name - computed: true, optional: false, required: false
  public get autoScalingGroupName() {
    return this.getStringAttribute('auto_scaling_group_name');
  }

  // default_result - computed: true, optional: false, required: false
  public get defaultResult() {
    return this.getStringAttribute('default_result');
  }

  // heartbeat_timeout - computed: true, optional: false, required: false
  public get heartbeatTimeout() {
    return this.getNumberAttribute('heartbeat_timeout');
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

  // lifecycle_hook_name - computed: true, optional: false, required: false
  public get lifecycleHookName() {
    return this.getStringAttribute('lifecycle_hook_name');
  }

  // lifecycle_transition - computed: true, optional: false, required: false
  public get lifecycleTransition() {
    return this.getStringAttribute('lifecycle_transition');
  }

  // notification_metadata - computed: true, optional: false, required: false
  public get notificationMetadata() {
    return this.getStringAttribute('notification_metadata');
  }

  // notification_target_arn - computed: true, optional: false, required: false
  public get notificationTargetArn() {
    return this.getStringAttribute('notification_target_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
