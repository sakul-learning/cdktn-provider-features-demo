// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/logs_log_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LogsLogStreamConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the log group where the log stream is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/logs_log_stream#log_group_name LogsLogStream#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * The name of the log stream. The name must be unique wihtin the log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/logs_log_stream#log_stream_name LogsLogStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/logs_log_stream awscc_logs_log_stream}
*/
export class LogsLogStream extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_logs_log_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LogsLogStream resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogsLogStream to import
  * @param importFromId The id of the existing LogsLogStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/logs_log_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogsLogStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_log_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/logs_log_stream awscc_logs_log_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsLogStreamConfig
  */
  public constructor(scope: Construct, id: string, config: LogsLogStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_logs_log_stream',
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
    this._logGroupName = config.logGroupName;
    this._logStreamName = config.logStreamName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string;
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_name - computed: true, optional: true, required: false
  private _logStreamName?: string;
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_group_name: cdktn.stringToTerraform(this._logGroupName),
      log_stream_name: cdktn.stringToTerraform(this._logStreamName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      log_group_name: {
        value: cdktn.stringToHclTerraform(this._logGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_name: {
        value: cdktn.stringToHclTerraform(this._logStreamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
