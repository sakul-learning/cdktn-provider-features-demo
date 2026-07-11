// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_package_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccPanoramaPackageVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_package_version#id DataAwsccPanoramaPackageVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_package_version awscc_panorama_package_version}
*/
export class DataAwsccPanoramaPackageVersion extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_panorama_package_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccPanoramaPackageVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccPanoramaPackageVersion to import
  * @param importFromId The id of the existing DataAwsccPanoramaPackageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_package_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccPanoramaPackageVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_panorama_package_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/panorama_package_version awscc_panorama_package_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccPanoramaPackageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccPanoramaPackageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_panorama_package_version',
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

  // is_latest_patch - computed: true, optional: false, required: false
  public get isLatestPatch() {
    return this.getBooleanAttribute('is_latest_patch');
  }

  // mark_latest - computed: true, optional: false, required: false
  public get markLatest() {
    return this.getBooleanAttribute('mark_latest');
  }

  // owner_account - computed: true, optional: false, required: false
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
  }

  // package_arn - computed: true, optional: false, required: false
  public get packageArn() {
    return this.getStringAttribute('package_arn');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // package_name - computed: true, optional: false, required: false
  public get packageName() {
    return this.getStringAttribute('package_name');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // patch_version - computed: true, optional: false, required: false
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }

  // registered_time - computed: true, optional: false, required: false
  public get registeredTime() {
    return this.getNumberAttribute('registered_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_description - computed: true, optional: false, required: false
  public get statusDescription() {
    return this.getStringAttribute('status_description');
  }

  // updated_latest_patch_version - computed: true, optional: false, required: false
  public get updatedLatestPatchVersion() {
    return this.getStringAttribute('updated_latest_patch_version');
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
