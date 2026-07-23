// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_network_interface_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2NetworkInterfaceAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_network_interface_attachment#id DataAwsccEc2NetworkInterfaceAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification {
}

export function dataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationToTerraform(struct?: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationToHclTerraform(struct?: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ena_srd_udp_enabled - computed: true, optional: false, required: false
  public get enaSrdUdpEnabled() {
    return this.getBooleanAttribute('ena_srd_udp_enabled');
  }
}
export interface DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification {
}

export function dataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationToTerraform(struct?: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationToHclTerraform(struct?: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ena_srd_enabled - computed: true, optional: false, required: false
  public get enaSrdEnabled() {
    return this.getBooleanAttribute('ena_srd_enabled');
  }

  // ena_srd_udp_specification - computed: true, optional: false, required: false
  private _enaSrdUdpSpecification = new DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(this, "ena_srd_udp_specification");
  public get enaSrdUdpSpecification() {
    return this._enaSrdUdpSpecification;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_network_interface_attachment awscc_ec2_network_interface_attachment}
*/
export class DataAwsccEc2NetworkInterfaceAttachment extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_network_interface_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2NetworkInterfaceAttachment to import
  * @param importFromId The id of the existing DataAwsccEc2NetworkInterfaceAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_network_interface_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2NetworkInterfaceAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_interface_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/ec2_network_interface_attachment awscc_ec2_network_interface_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2NetworkInterfaceAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2NetworkInterfaceAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_network_interface_attachment',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_id - computed: true, optional: false, required: false
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // device_index - computed: true, optional: false, required: false
  public get deviceIndex() {
    return this.getStringAttribute('device_index');
  }

  // ena_queue_count - computed: true, optional: false, required: false
  public get enaQueueCount() {
    return this.getNumberAttribute('ena_queue_count');
  }

  // ena_srd_specification - computed: true, optional: false, required: false
  private _enaSrdSpecification = new DataAwsccEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference(this, "ena_srd_specification");
  public get enaSrdSpecification() {
    return this._enaSrdSpecification;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
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
