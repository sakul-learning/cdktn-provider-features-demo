// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_application_fleet_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppstreamApplicationFleetAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_application_fleet_association#application_arn AppstreamApplicationFleetAssociation#application_arn}
  */
  readonly applicationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_application_fleet_association#fleet_name AppstreamApplicationFleetAssociation#fleet_name}
  */
  readonly fleetName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_application_fleet_association awscc_appstream_application_fleet_association}
*/
export class AppstreamApplicationFleetAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appstream_application_fleet_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppstreamApplicationFleetAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppstreamApplicationFleetAssociation to import
  * @param importFromId The id of the existing AppstreamApplicationFleetAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_application_fleet_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppstreamApplicationFleetAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appstream_application_fleet_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/appstream_application_fleet_association awscc_appstream_application_fleet_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppstreamApplicationFleetAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AppstreamApplicationFleetAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appstream_application_fleet_association',
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
    this._applicationArn = config.applicationArn;
    this._fleetName = config.fleetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: false, optional: false, required: true
  private _applicationArn?: string;
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }

  // fleet_name - computed: false, optional: false, required: true
  private _fleetName?: string;
  public get fleetName() {
    return this.getStringAttribute('fleet_name');
  }
  public set fleetName(value: string) {
    this._fleetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetNameInput() {
    return this._fleetName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_arn: cdktn.stringToTerraform(this._applicationArn),
      fleet_name: cdktn.stringToTerraform(this._fleetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_arn: {
        value: cdktn.stringToHclTerraform(this._applicationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_name: {
        value: cdktn.stringToHclTerraform(this._fleetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
