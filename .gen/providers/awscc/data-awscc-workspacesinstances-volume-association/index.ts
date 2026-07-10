// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesinstances_volume_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccWorkspacesinstancesVolumeAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesinstances_volume_association#id DataAwsccWorkspacesinstancesVolumeAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesinstances_volume_association awscc_workspacesinstances_volume_association}
*/
export class DataAwsccWorkspacesinstancesVolumeAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_workspacesinstances_volume_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccWorkspacesinstancesVolumeAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccWorkspacesinstancesVolumeAssociation to import
  * @param importFromId The id of the existing DataAwsccWorkspacesinstancesVolumeAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesinstances_volume_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccWorkspacesinstancesVolumeAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_workspacesinstances_volume_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/workspacesinstances_volume_association awscc_workspacesinstances_volume_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWorkspacesinstancesVolumeAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWorkspacesinstancesVolumeAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspacesinstances_volume_association',
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

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // disassociate_mode - computed: true, optional: false, required: false
  public get disassociateMode() {
    return this.getStringAttribute('disassociate_mode');
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

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // workspace_instance_id - computed: true, optional: false, required: false
  public get workspaceInstanceId() {
    return this.getStringAttribute('workspace_instance_id');
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
