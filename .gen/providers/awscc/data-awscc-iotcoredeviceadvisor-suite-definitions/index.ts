// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotcoredeviceadvisor_suite_definitions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotcoredeviceadvisorSuiteDefinitionsConfig extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotcoredeviceadvisor_suite_definitions awscc_iotcoredeviceadvisor_suite_definitions}
*/
export class DataAwsccIotcoredeviceadvisorSuiteDefinitions extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotcoredeviceadvisor_suite_definitions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotcoredeviceadvisorSuiteDefinitions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotcoredeviceadvisorSuiteDefinitions to import
  * @param importFromId The id of the existing DataAwsccIotcoredeviceadvisorSuiteDefinitions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotcoredeviceadvisor_suite_definitions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotcoredeviceadvisorSuiteDefinitions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotcoredeviceadvisor_suite_definitions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iotcoredeviceadvisor_suite_definitions awscc_iotcoredeviceadvisor_suite_definitions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotcoredeviceadvisorSuiteDefinitionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotcoredeviceadvisorSuiteDefinitionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotcoredeviceadvisor_suite_definitions',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktn.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
