// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pcaconnectorad_directory_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PcaconnectoradDirectoryRegistrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pcaconnectorad_directory_registration#directory_id PcaconnectoradDirectoryRegistration#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pcaconnectorad_directory_registration#tags PcaconnectoradDirectoryRegistration#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pcaconnectorad_directory_registration awscc_pcaconnectorad_directory_registration}
*/
export class PcaconnectoradDirectoryRegistration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_pcaconnectorad_directory_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PcaconnectoradDirectoryRegistration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PcaconnectoradDirectoryRegistration to import
  * @param importFromId The id of the existing PcaconnectoradDirectoryRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pcaconnectorad_directory_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PcaconnectoradDirectoryRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorad_directory_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/pcaconnectorad_directory_registration awscc_pcaconnectorad_directory_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PcaconnectoradDirectoryRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: PcaconnectoradDirectoryRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_pcaconnectorad_directory_registration',
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
    this._directoryId = config.directoryId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // directory_registration_arn - computed: true, optional: false, required: false
  public get directoryRegistrationArn() {
    return this.getStringAttribute('directory_registration_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktn.stringToTerraform(this._directoryId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_id: {
        value: cdktn.stringToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
