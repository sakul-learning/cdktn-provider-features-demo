// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_queue_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDeadlineQueueEnvironmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_queue_environment#id DataAwsccDeadlineQueueEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_queue_environment awscc_deadline_queue_environment}
*/
export class DataAwsccDeadlineQueueEnvironment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_deadline_queue_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDeadlineQueueEnvironment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDeadlineQueueEnvironment to import
  * @param importFromId The id of the existing DataAwsccDeadlineQueueEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_queue_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDeadlineQueueEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_queue_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_queue_environment awscc_deadline_queue_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDeadlineQueueEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDeadlineQueueEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_deadline_queue_environment',
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

  // farm_id - computed: true, optional: false, required: false
  public get farmId() {
    return this.getStringAttribute('farm_id');
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // queue_environment_id - computed: true, optional: false, required: false
  public get queueEnvironmentId() {
    return this.getStringAttribute('queue_environment_id');
  }

  // queue_id - computed: true, optional: false, required: false
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
