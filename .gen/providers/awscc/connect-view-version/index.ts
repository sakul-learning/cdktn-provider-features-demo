// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_view_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConnectViewVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description for the view version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_view_version#version_description ConnectViewVersion#version_description}
  */
  readonly versionDescription?: string;
  /**
  * The Amazon Resource Name (ARN) of the view for which a version is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_view_version#view_arn ConnectViewVersion#view_arn}
  */
  readonly viewArn: string;
  /**
  * The view content hash to be checked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_view_version#view_content_sha_256 ConnectViewVersion#view_content_sha_256}
  */
  readonly viewContentSha256?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_view_version awscc_connect_view_version}
*/
export class ConnectViewVersion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_view_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConnectViewVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectViewVersion to import
  * @param importFromId The id of the existing ConnectViewVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_view_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectViewVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_view_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/connect_view_version awscc_connect_view_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectViewVersionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectViewVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_view_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._versionDescription = config.versionDescription;
    this._viewArn = config.viewArn;
    this._viewContentSha256 = config.viewContentSha256;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // version_description - computed: true, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // view_arn - computed: false, optional: false, required: true
  private _viewArn?: string; 
  public get viewArn() {
    return this.getStringAttribute('view_arn');
  }
  public set viewArn(value: string) {
    this._viewArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewArnInput() {
    return this._viewArn;
  }

  // view_content_sha_256 - computed: true, optional: true, required: false
  private _viewContentSha256?: string; 
  public get viewContentSha256() {
    return this.getStringAttribute('view_content_sha_256');
  }
  public set viewContentSha256(value: string) {
    this._viewContentSha256 = value;
  }
  public resetViewContentSha256() {
    this._viewContentSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewContentSha256Input() {
    return this._viewContentSha256;
  }

  // view_version_arn - computed: true, optional: false, required: false
  public get viewVersionArn() {
    return this.getStringAttribute('view_version_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      version_description: cdktn.stringToTerraform(this._versionDescription),
      view_arn: cdktn.stringToTerraform(this._viewArn),
      view_content_sha_256: cdktn.stringToTerraform(this._viewContentSha256),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      version_description: {
        value: cdktn.stringToHclTerraform(this._versionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_arn: {
        value: cdktn.stringToHclTerraform(this._viewArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_content_sha_256: {
        value: cdktn.stringToHclTerraform(this._viewContentSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
