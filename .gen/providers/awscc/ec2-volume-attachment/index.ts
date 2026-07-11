// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_volume_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2VolumeAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The device name (for example, ``/dev/sdh`` or ``xvdh``).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_volume_attachment#device Ec2VolumeAttachment#device}
  */
  readonly device?: string;
  /**
  * The index of the EBS card. Some instance types support multiple EBS cards. The default EBS card index is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_volume_attachment#ebs_card_index Ec2VolumeAttachment#ebs_card_index}
  */
  readonly ebsCardIndex?: number;
  /**
  * The ID of the instance to which the volume attaches. This value can be a reference to an [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource, or it can be the physical ID of an existing EC2 instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_volume_attachment#instance_id Ec2VolumeAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a reference to an [AWS::EC2::Volume](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html) resource, or it can be the volume ID of an existing Amazon EBS volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_volume_attachment#volume_id Ec2VolumeAttachment#volume_id}
  */
  readonly volumeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_volume_attachment awscc_ec2_volume_attachment}
*/
export class Ec2VolumeAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_volume_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2VolumeAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2VolumeAttachment to import
  * @param importFromId The id of the existing Ec2VolumeAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_volume_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2VolumeAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_volume_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_volume_attachment awscc_ec2_volume_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2VolumeAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2VolumeAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_volume_attachment',
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
    this._device = config.device;
    this._ebsCardIndex = config.ebsCardIndex;
    this._instanceId = config.instanceId;
    this._volumeId = config.volumeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: true, required: false
  private _device?: string;
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // ebs_card_index - computed: true, optional: true, required: false
  private _ebsCardIndex?: number;
  public get ebsCardIndex() {
    return this.getNumberAttribute('ebs_card_index');
  }
  public set ebsCardIndex(value: number) {
    this._ebsCardIndex = value;
  }
  public resetEbsCardIndex() {
    this._ebsCardIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsCardIndexInput() {
    return this._ebsCardIndex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string;
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string;
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktn.stringToTerraform(this._device),
      ebs_card_index: cdktn.numberToTerraform(this._ebsCardIndex),
      instance_id: cdktn.stringToTerraform(this._instanceId),
      volume_id: cdktn.stringToTerraform(this._volumeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktn.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebs_card_index: {
        value: cdktn.numberToHclTerraform(this._ebsCardIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_id: {
        value: cdktn.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_id: {
        value: cdktn.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
