// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NimblestudioStreamingImageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}
  */
  readonly ec2ImageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}
  */
  readonly encryptionConfigurationKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}
  */
  readonly encryptionConfigurationKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}
  */
  readonly studioId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface NimblestudioStreamingImageEncryptionConfiguration {
}

export function nimblestudioStreamingImageEncryptionConfigurationToTerraform(struct?: NimblestudioStreamingImageEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function nimblestudioStreamingImageEncryptionConfigurationToHclTerraform(struct?: NimblestudioStreamingImageEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class NimblestudioStreamingImageEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NimblestudioStreamingImageEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NimblestudioStreamingImageEncryptionConfiguration | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image awscc_nimblestudio_streaming_image}
*/
export class NimblestudioStreamingImage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_nimblestudio_streaming_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NimblestudioStreamingImage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NimblestudioStreamingImage to import
  * @param importFromId The id of the existing NimblestudioStreamingImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NimblestudioStreamingImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_nimblestudio_streaming_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/nimblestudio_streaming_image awscc_nimblestudio_streaming_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NimblestudioStreamingImageConfig
  */
  public constructor(scope: Construct, id: string, config: NimblestudioStreamingImageConfig) {
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
    this._description = config.description;
    this._ec2ImageId = config.ec2ImageId;
    this._encryptionConfigurationKeyArn = config.encryptionConfigurationKeyArn;
    this._encryptionConfigurationKeyType = config.encryptionConfigurationKeyType;
    this._name = config.name;
    this._studioId = config.studioId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ec_2_image_id - computed: false, optional: false, required: true
  private _ec2ImageId?: string; 
  public get ec2ImageId() {
    return this.getStringAttribute('ec_2_image_id');
  }
  public set ec2ImageId(value: string) {
    this._ec2ImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ImageIdInput() {
    return this._ec2ImageId;
  }

  // encryption_configuration - computed: true, optional: false, required: false
  private _encryptionConfiguration = new NimblestudioStreamingImageEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }

  // encryption_configuration_key_arn - computed: true, optional: true, required: false
  private _encryptionConfigurationKeyArn?: string; 
  public get encryptionConfigurationKeyArn() {
    return this.getStringAttribute('encryption_configuration_key_arn');
  }
  public set encryptionConfigurationKeyArn(value: string) {
    this._encryptionConfigurationKeyArn = value;
  }
  public resetEncryptionConfigurationKeyArn() {
    this._encryptionConfigurationKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationKeyArnInput() {
    return this._encryptionConfigurationKeyArn;
  }

  // encryption_configuration_key_type - computed: true, optional: true, required: false
  private _encryptionConfigurationKeyType?: string; 
  public get encryptionConfigurationKeyType() {
    return this.getStringAttribute('encryption_configuration_key_type');
  }
  public set encryptionConfigurationKeyType(value: string) {
    this._encryptionConfigurationKeyType = value;
  }
  public resetEncryptionConfigurationKeyType() {
    this._encryptionConfigurationKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationKeyTypeInput() {
    return this._encryptionConfigurationKeyType;
  }

  // eula_ids - computed: true, optional: false, required: false
  public get eulaIds() {
    return this.getListAttribute('eula_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // studio_id - computed: false, optional: false, required: true
  private _studioId?: string; 
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }
  public set studioId(value: string) {
    this._studioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioIdInput() {
    return this._studioId;
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
      description: cdktn.stringToTerraform(this._description),
      ec_2_image_id: cdktn.stringToTerraform(this._ec2ImageId),
      encryption_configuration_key_arn: cdktn.stringToTerraform(this._encryptionConfigurationKeyArn),
      encryption_configuration_key_type: cdktn.stringToTerraform(this._encryptionConfigurationKeyType),
      name: cdktn.stringToTerraform(this._name),
      studio_id: cdktn.stringToTerraform(this._studioId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec_2_image_id: {
        value: cdktn.stringToHclTerraform(this._ec2ImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_configuration_key_arn: {
        value: cdktn.stringToHclTerraform(this._encryptionConfigurationKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_configuration_key_type: {
        value: cdktn.stringToHclTerraform(this._encryptionConfigurationKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      studio_id: {
        value: cdktn.stringToHclTerraform(this._studioId),
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
