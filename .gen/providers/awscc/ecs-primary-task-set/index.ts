// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_primary_task_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcsPrimaryTaskSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_primary_task_set#cluster EcsPrimaryTaskSet#cluster}
  */
  readonly cluster: string;
  /**
  * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_primary_task_set#service EcsPrimaryTaskSet#service}
  */
  readonly service: string;
  /**
  * The ID or full Amazon Resource Name (ARN) of the task set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_primary_task_set#task_set_id EcsPrimaryTaskSet#task_set_id}
  */
  readonly taskSetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_primary_task_set awscc_ecs_primary_task_set}
*/
export class EcsPrimaryTaskSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecs_primary_task_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcsPrimaryTaskSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsPrimaryTaskSet to import
  * @param importFromId The id of the existing EcsPrimaryTaskSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_primary_task_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsPrimaryTaskSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecs_primary_task_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecs_primary_task_set awscc_ecs_primary_task_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsPrimaryTaskSetConfig
  */
  public constructor(scope: Construct, id: string, config: EcsPrimaryTaskSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecs_primary_task_set',
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
    this._cluster = config.cluster;
    this._service = config.service;
    this._taskSetId = config.taskSetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string;
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service - computed: false, optional: false, required: true
  private _service?: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // task_set_id - computed: false, optional: false, required: true
  private _taskSetId?: string;
  public get taskSetId() {
    return this.getStringAttribute('task_set_id');
  }
  public set taskSetId(value: string) {
    this._taskSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSetIdInput() {
    return this._taskSetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktn.stringToTerraform(this._cluster),
      service: cdktn.stringToTerraform(this._service),
      task_set_id: cdktn.stringToTerraform(this._taskSetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktn.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktn.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_set_id: {
        value: cdktn.stringToHclTerraform(this._taskSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
