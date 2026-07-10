// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/nimblestudio_streaming_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccNimblestudioStreamingImageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/nimblestudio_streaming_image#id DataAwsccNimblestudioStreamingImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccNimblestudioStreamingImageEncryptionConfiguration {
}

export function dataAwsccNimblestudioStreamingImageEncryptionConfigurationToTerraform(struct?: DataAwsccNimblestudioStreamingImageEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioStreamingImageEncryptionConfigurationToHclTerraform(struct?: DataAwsccNimblestudioStreamingImageEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioStreamingImageEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioStreamingImageEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/nimblestudio_streaming_image awscc_nimblestudio_streaming_image}
*/
export class DataAwsccNimblestudioStreamingImage extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_nimblestudio_streaming_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccNimblestudioStreamingImage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccNimblestudioStreamingImage to import
  * @param importFromId The id of the existing DataAwsccNimblestudioStreamingImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/nimblestudio_streaming_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccNimblestudioStreamingImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_nimblestudio_streaming_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/nimblestudio_streaming_image awscc_nimblestudio_streaming_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNimblestudioStreamingImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNimblestudioStreamingImageConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_nimblestudio_streaming_image',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ec_2_image_id - computed: true, optional: false, required: false
  public get ec2ImageId() {
    return this.getStringAttribute('ec_2_image_id');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new DataAwsccNimblestudioStreamingImageEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // encryption_configuration_key_arn - computed: true, optional: false, required: false
  public get encryptionConfigurationKeyArn() {
    return this.getStringAttribute('encryption_configuration_key_arn');
  }

  // encryption_configuration_key_type - computed: true, optional: false, required: false
  public get encryptionConfigurationKeyType() {
    return this.getStringAttribute('encryption_configuration_key_type');
  }

  // eula_ids - computed: true, optional: false, required: false
  public get eulaIds() {
    return this.getListAttribute('eula_ids');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // streaming_image_id - computed: true, optional: false, required: false
  public get streamingImageId() {
    return this.getStringAttribute('streaming_image_id');
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
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
