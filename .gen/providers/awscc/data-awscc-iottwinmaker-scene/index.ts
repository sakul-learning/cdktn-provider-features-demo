// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iottwinmaker_scene
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIottwinmakerSceneConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iottwinmaker_scene#id DataAwsccIottwinmakerScene#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iottwinmaker_scene awscc_iottwinmaker_scene}
*/
export class DataAwsccIottwinmakerScene extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iottwinmaker_scene";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIottwinmakerScene resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIottwinmakerScene to import
  * @param importFromId The id of the existing DataAwsccIottwinmakerScene that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iottwinmaker_scene#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIottwinmakerScene to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iottwinmaker_scene", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/iottwinmaker_scene awscc_iottwinmaker_scene} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIottwinmakerSceneConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIottwinmakerSceneConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iottwinmaker_scene',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return cdktn.Fn.tolist(this.getListAttribute('capabilities'));
  }

  // content_location - computed: true, optional: false, required: false
  public get contentLocation() {
    return this.getStringAttribute('content_location');
  }

  // creation_date_time - computed: true, optional: false, required: false
  public get creationDateTime() {
    return this.getStringAttribute('creation_date_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // generated_scene_metadata - computed: true, optional: false, required: false
  private _generatedSceneMetadata = new cdktn.StringMap(this, "generated_scene_metadata");
  public get generatedSceneMetadata() {
    return this._generatedSceneMetadata;
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

  // scene_id - computed: true, optional: false, required: false
  public get sceneId() {
    return this.getStringAttribute('scene_id');
  }

  // scene_metadata - computed: true, optional: false, required: false
  private _sceneMetadata = new cdktn.StringMap(this, "scene_metadata");
  public get sceneMetadata() {
    return this._sceneMetadata;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // update_date_time - computed: true, optional: false, required: false
  public get updateDateTime() {
    return this.getStringAttribute('update_date_time');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
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
