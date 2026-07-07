// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_image_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSagemakerImageVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_image_version#id DataAwsccSagemakerImageVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_image_version awscc_sagemaker_image_version}
*/
export class DataAwsccSagemakerImageVersion extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_image_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSagemakerImageVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSagemakerImageVersion to import
  * @param importFromId The id of the existing DataAwsccSagemakerImageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSagemakerImageVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_image_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/sagemaker_image_version awscc_sagemaker_image_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerImageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_image_version',
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

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // base_image - computed: true, optional: false, required: false
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }

  // container_image - computed: true, optional: false, required: false
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }

  // horovod - computed: true, optional: false, required: false
  public get horovod() {
    return this.getBooleanAttribute('horovod');
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

  // image_arn - computed: true, optional: false, required: false
  public get imageArn() {
    return this.getStringAttribute('image_arn');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_arn - computed: true, optional: false, required: false
  public get imageVersionArn() {
    return this.getStringAttribute('image_version_arn');
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // ml_framework - computed: true, optional: false, required: false
  public get mlFramework() {
    return this.getStringAttribute('ml_framework');
  }

  // processor - computed: true, optional: false, required: false
  public get processor() {
    return this.getStringAttribute('processor');
  }

  // programming_lang - computed: true, optional: false, required: false
  public get programmingLang() {
    return this.getStringAttribute('programming_lang');
  }

  // release_notes - computed: true, optional: false, required: false
  public get releaseNotes() {
    return this.getStringAttribute('release_notes');
  }

  // vendor_guidance - computed: true, optional: false, required: false
  public get vendorGuidance() {
    return this.getStringAttribute('vendor_guidance');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
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
