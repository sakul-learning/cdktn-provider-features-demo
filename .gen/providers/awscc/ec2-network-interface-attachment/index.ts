// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2NetworkInterfaceAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#delete_on_termination Ec2NetworkInterfaceAttachment#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktn.IResolvable;
  /**
  * The network interface's position in the attachment order. For example, the first attached network interface has a ``DeviceIndex`` of 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#device_index Ec2NetworkInterfaceAttachment#device_index}
  */
  readonly deviceIndex: string;
  /**
  * The number of ENA queues created with the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#ena_queue_count Ec2NetworkInterfaceAttachment#ena_queue_count}
  */
  readonly enaQueueCount?: number;
  /**
  * Configures ENA Express for the network interface that this action attaches to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#ena_srd_specification Ec2NetworkInterfaceAttachment#ena_srd_specification}
  */
  readonly enaSrdSpecification?: Ec2NetworkInterfaceAttachmentEnaSrdSpecification;
  /**
  * The ID of the instance to which you will attach the ENI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#instance_id Ec2NetworkInterfaceAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * The ID of the ENI that you want to attach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#network_interface_id Ec2NetworkInterfaceAttachment#network_interface_id}
  */
  readonly networkInterfaceId: string;
}
export interface Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_enabled Ec2NetworkInterfaceAttachment#ena_srd_udp_enabled}
  */
  readonly enaSrdUdpEnabled?: boolean | cdktn.IResolvable;
}

export function ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationToTerraform(struct?: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ena_srd_udp_enabled: cdktn.booleanToTerraform(struct!.enaSrdUdpEnabled),
  }
}


export function ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationToHclTerraform(struct?: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ena_srd_udp_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enaSrdUdpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enaSrdUdpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enaSrdUdpEnabled = this._enaSrdUdpEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enaSrdUdpEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enaSrdUdpEnabled = value.enaSrdUdpEnabled;
    }
  }

  // ena_srd_udp_enabled - computed: true, optional: true, required: false
  private _enaSrdUdpEnabled?: boolean | cdktn.IResolvable; 
  public get enaSrdUdpEnabled() {
    return this.getBooleanAttribute('ena_srd_udp_enabled');
  }
  public set enaSrdUdpEnabled(value: boolean | cdktn.IResolvable) {
    this._enaSrdUdpEnabled = value;
  }
  public resetEnaSrdUdpEnabled() {
    this._enaSrdUdpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSrdUdpEnabledInput() {
    return this._enaSrdUdpEnabled;
  }
}
export interface Ec2NetworkInterfaceAttachmentEnaSrdSpecification {
  /**
  * Indicates whether ENA Express is enabled for the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#ena_srd_enabled Ec2NetworkInterfaceAttachment#ena_srd_enabled}
  */
  readonly enaSrdEnabled?: boolean | cdktn.IResolvable;
  /**
  * Configures ENA Express for UDP network traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_specification Ec2NetworkInterfaceAttachment#ena_srd_udp_specification}
  */
  readonly enaSrdUdpSpecification?: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification;
}

export function ec2NetworkInterfaceAttachmentEnaSrdSpecificationToTerraform(struct?: Ec2NetworkInterfaceAttachmentEnaSrdSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ena_srd_enabled: cdktn.booleanToTerraform(struct!.enaSrdEnabled),
    ena_srd_udp_specification: ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationToTerraform(struct!.enaSrdUdpSpecification),
  }
}


export function ec2NetworkInterfaceAttachmentEnaSrdSpecificationToHclTerraform(struct?: Ec2NetworkInterfaceAttachmentEnaSrdSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ena_srd_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enaSrdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ena_srd_udp_specification: {
      value: ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationToHclTerraform(struct!.enaSrdUdpSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2NetworkInterfaceAttachmentEnaSrdSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enaSrdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enaSrdEnabled = this._enaSrdEnabled;
    }
    if (this._enaSrdUdpSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enaSrdUdpSpecification = this._enaSrdUdpSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInterfaceAttachmentEnaSrdSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enaSrdEnabled = undefined;
      this._enaSrdUdpSpecification.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enaSrdEnabled = value.enaSrdEnabled;
      this._enaSrdUdpSpecification.internalValue = value.enaSrdUdpSpecification;
    }
  }

  // ena_srd_enabled - computed: true, optional: true, required: false
  private _enaSrdEnabled?: boolean | cdktn.IResolvable; 
  public get enaSrdEnabled() {
    return this.getBooleanAttribute('ena_srd_enabled');
  }
  public set enaSrdEnabled(value: boolean | cdktn.IResolvable) {
    this._enaSrdEnabled = value;
  }
  public resetEnaSrdEnabled() {
    this._enaSrdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSrdEnabledInput() {
    return this._enaSrdEnabled;
  }

  // ena_srd_udp_specification - computed: true, optional: true, required: false
  private _enaSrdUdpSpecification = new Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(this, "ena_srd_udp_specification");
  public get enaSrdUdpSpecification() {
    return this._enaSrdUdpSpecification;
  }
  public putEnaSrdUdpSpecification(value: Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification) {
    this._enaSrdUdpSpecification.internalValue = value;
  }
  public resetEnaSrdUdpSpecification() {
    this._enaSrdUdpSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSrdUdpSpecificationInput() {
    return this._enaSrdUdpSpecification.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment awscc_ec2_network_interface_attachment}
*/
export class Ec2NetworkInterfaceAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_network_interface_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2NetworkInterfaceAttachment to import
  * @param importFromId The id of the existing Ec2NetworkInterfaceAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2NetworkInterfaceAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_interface_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_network_interface_attachment awscc_ec2_network_interface_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2NetworkInterfaceAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2NetworkInterfaceAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_network_interface_attachment',
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
    this._deleteOnTermination = config.deleteOnTermination;
    this._deviceIndex = config.deviceIndex;
    this._enaQueueCount = config.enaQueueCount;
    this._enaSrdSpecification.internalValue = config.enaSrdSpecification;
    this._instanceId = config.instanceId;
    this._networkInterfaceId = config.networkInterfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_id - computed: true, optional: false, required: false
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktn.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktn.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // device_index - computed: false, optional: false, required: true
  private _deviceIndex?: string; 
  public get deviceIndex() {
    return this.getStringAttribute('device_index');
  }
  public set deviceIndex(value: string) {
    this._deviceIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIndexInput() {
    return this._deviceIndex;
  }

  // ena_queue_count - computed: true, optional: true, required: false
  private _enaQueueCount?: number; 
  public get enaQueueCount() {
    return this.getNumberAttribute('ena_queue_count');
  }
  public set enaQueueCount(value: number) {
    this._enaQueueCount = value;
  }
  public resetEnaQueueCount() {
    this._enaQueueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaQueueCountInput() {
    return this._enaQueueCount;
  }

  // ena_srd_specification - computed: true, optional: true, required: false
  private _enaSrdSpecification = new Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference(this, "ena_srd_specification");
  public get enaSrdSpecification() {
    return this._enaSrdSpecification;
  }
  public putEnaSrdSpecification(value: Ec2NetworkInterfaceAttachmentEnaSrdSpecification) {
    this._enaSrdSpecification.internalValue = value;
  }
  public resetEnaSrdSpecification() {
    this._enaSrdSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSrdSpecificationInput() {
    return this._enaSrdSpecification.internalValue;
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

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_on_termination: cdktn.booleanToTerraform(this._deleteOnTermination),
      device_index: cdktn.stringToTerraform(this._deviceIndex),
      ena_queue_count: cdktn.numberToTerraform(this._enaQueueCount),
      ena_srd_specification: ec2NetworkInterfaceAttachmentEnaSrdSpecificationToTerraform(this._enaSrdSpecification.internalValue),
      instance_id: cdktn.stringToTerraform(this._instanceId),
      network_interface_id: cdktn.stringToTerraform(this._networkInterfaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_on_termination: {
        value: cdktn.booleanToHclTerraform(this._deleteOnTermination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_index: {
        value: cdktn.stringToHclTerraform(this._deviceIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ena_queue_count: {
        value: cdktn.numberToHclTerraform(this._enaQueueCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ena_srd_specification: {
        value: ec2NetworkInterfaceAttachmentEnaSrdSpecificationToHclTerraform(this._enaSrdSpecification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2NetworkInterfaceAttachmentEnaSrdSpecification",
      },
      instance_id: {
        value: cdktn.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_id: {
        value: cdktn.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
