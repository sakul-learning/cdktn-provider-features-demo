// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GroundstationDataflowEndpointGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#contact_post_pass_duration_seconds GroundstationDataflowEndpointGroup#contact_post_pass_duration_seconds}
  */
  readonly contactPostPassDurationSeconds?: number;
  /**
  * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#contact_pre_pass_duration_seconds GroundstationDataflowEndpointGroup#contact_pre_pass_duration_seconds}
  */
  readonly contactPrePassDurationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint_details GroundstationDataflowEndpointGroup#endpoint_details}
  */
  readonly endpointDetails: GroundstationDataflowEndpointGroupEndpointDetails[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#tags GroundstationDataflowEndpointGroup#tags}
  */
  readonly tags?: GroundstationDataflowEndpointGroupTags[] | cdktn.IResolvable;
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}
  */
  readonly port?: number;
}

export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress {
  /**
  * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}
  */
  readonly socketAddress?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress;
}

export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mtu: cdktn.numberToTerraform(struct!.mtu),
    socket_address: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressToTerraform(struct!.socketAddress),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mtu: {
      value: cdktn.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_address: {
      value: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressToHclTerraform(struct!.socketAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._socketAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketAddress = this._socketAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._socketAddress.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._socketAddress.internalValue = value.socketAddress;
    }
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // socket_address - computed: true, optional: true, required: false
  private _socketAddress = new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
  public putSocketAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress) {
    this._socketAddress.internalValue = value;
  }
  public resetSocketAddress() {
    this._socketAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAddressInput() {
    return this._socketAddress.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange {
  /**
  * A maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#maximum GroundstationDataflowEndpointGroup#maximum}
  */
  readonly maximum?: number;
  /**
  * A minimum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#minimum GroundstationDataflowEndpointGroup#minimum}
  */
  readonly minimum?: number;
}

export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum: cdktn.numberToTerraform(struct!.maximum),
    minimum: cdktn.numberToTerraform(struct!.minimum),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum: {
      value: cdktn.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktn.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress {
  /**
  * IPv4 socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}
  */
  readonly name?: string;
  /**
  * Port range of a socket address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#port_range GroundstationDataflowEndpointGroup#port_range}
  */
  readonly portRange?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange;
}

export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    port_range: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeToTerraform(struct!.portRange),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range: {
      value: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeToHclTerraform(struct!.portRange),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._portRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._portRange.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._portRange.internalValue = value.portRange;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port_range - computed: true, optional: true, required: false
  private _portRange = new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference(this, "port_range");
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress {
  /**
  * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}
  */
  readonly mtu?: number;
  /**
  * A socket address with a port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}
  */
  readonly socketAddress?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress;
}

export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mtu: cdktn.numberToTerraform(struct!.mtu),
    socket_address: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressToTerraform(struct!.socketAddress),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mtu: {
      value: cdktn.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_address: {
      value: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressToHclTerraform(struct!.socketAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._socketAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketAddress = this._socketAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._socketAddress.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._socketAddress.internalValue = value.socketAddress;
    }
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // socket_address - computed: true, optional: true, required: false
  private _socketAddress = new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference(this, "socket_address");
  public get socketAddress() {
    return this._socketAddress;
  }
  public putSocketAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress) {
    this._socketAddress.internalValue = value;
  }
  public resetSocketAddress() {
    this._socketAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAddressInput() {
    return this._socketAddress.internalValue;
  }
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint {
  /**
  * The status of AgentEndpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#agent_status GroundstationDataflowEndpointGroup#agent_status}
  */
  readonly agentStatus?: string;
  /**
  * The results of the audit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#audit_results GroundstationDataflowEndpointGroup#audit_results}
  */
  readonly auditResults?: string;
  /**
  * Egress address of AgentEndpoint with an optional mtu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#egress_address GroundstationDataflowEndpointGroup#egress_address}
  */
  readonly egressAddress?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress;
  /**
  * Ingress address of AgentEndpoint with a port range and an optional mtu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#ingress_address GroundstationDataflowEndpointGroup#ingress_address}
  */
  readonly ingressAddress?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}
  */
  readonly name?: string;
}

export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    agent_status: cdktn.stringToTerraform(struct!.agentStatus),
    audit_results: cdktn.stringToTerraform(struct!.auditResults),
    egress_address: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressToTerraform(struct!.egressAddress),
    ingress_address: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressToTerraform(struct!.ingressAddress),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    agent_status: {
      value: cdktn.stringToHclTerraform(struct!.agentStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_results: {
      value: cdktn.stringToHclTerraform(struct!.auditResults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_address: {
      value: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressToHclTerraform(struct!.egressAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress",
    },
    ingress_address: {
      value: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressToHclTerraform(struct!.ingressAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentStatus = this._agentStatus;
    }
    if (this._auditResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditResults = this._auditResults;
    }
    if (this._egressAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressAddress = this._egressAddress?.internalValue;
    }
    if (this._ingressAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressAddress = this._ingressAddress?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentStatus = undefined;
      this._auditResults = undefined;
      this._egressAddress.internalValue = undefined;
      this._ingressAddress.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentStatus = value.agentStatus;
      this._auditResults = value.auditResults;
      this._egressAddress.internalValue = value.egressAddress;
      this._ingressAddress.internalValue = value.ingressAddress;
      this._name = value.name;
    }
  }

  // agent_status - computed: true, optional: true, required: false
  private _agentStatus?: string; 
  public get agentStatus() {
    return this.getStringAttribute('agent_status');
  }
  public set agentStatus(value: string) {
    this._agentStatus = value;
  }
  public resetAgentStatus() {
    this._agentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentStatusInput() {
    return this._agentStatus;
  }

  // audit_results - computed: true, optional: true, required: false
  private _auditResults?: string; 
  public get auditResults() {
    return this.getStringAttribute('audit_results');
  }
  public set auditResults(value: string) {
    this._auditResults = value;
  }
  public resetAuditResults() {
    this._auditResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditResultsInput() {
    return this._auditResults;
  }

  // egress_address - computed: true, optional: true, required: false
  private _egressAddress = new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference(this, "egress_address");
  public get egressAddress() {
    return this._egressAddress;
  }
  public putEgressAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress) {
    this._egressAddress.internalValue = value;
  }
  public resetEgressAddress() {
    this._egressAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressAddressInput() {
    return this._egressAddress.internalValue;
  }

  // ingress_address - computed: true, optional: true, required: false
  private _ingressAddress = new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference(this, "ingress_address");
  public get ingressAddress() {
    return this._ingressAddress;
  }
  public putIngressAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress) {
    this._ingressAddress.internalValue = value;
  }
  public resetIngressAddress() {
    this._ingressAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressAddressInput() {
    return this._ingressAddress.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}
  */
  readonly port?: number;
}

export function groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#address GroundstationDataflowEndpointGroup#address}
  */
  readonly address?: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}
  */
  readonly name?: string;
}

export function groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address: groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToTerraform(struct!.address),
    mtu: cdktn.numberToTerraform(struct!.mtu),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsEndpointToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address: {
      value: groundstationDataflowEndpointGroupEndpointDetailsEndpointAddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress",
    },
    mtu: {
      value: cdktn.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetailsEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._mtu = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._mtu = value.mtu;
      this._name = value.name;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address = new GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#role_arn GroundstationDataflowEndpointGroup#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#security_group_ids GroundstationDataflowEndpointGroup#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#subnet_ids GroundstationDataflowEndpointGroup#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface GroundstationDataflowEndpointGroupEndpointDetails {
  /**
  * Information about AwsGroundStationAgentEndpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroup#aws_ground_station_agent_endpoint}
  */
  readonly awsGroundStationAgentEndpoint?: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint GroundstationDataflowEndpointGroup#endpoint}
  */
  readonly endpoint?: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#security_details GroundstationDataflowEndpointGroup#security_details}
  */
  readonly securityDetails?: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails;
}

export function groundstationDataflowEndpointGroupEndpointDetailsToTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_ground_station_agent_endpoint: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointToTerraform(struct!.awsGroundStationAgentEndpoint),
    endpoint: groundstationDataflowEndpointGroupEndpointDetailsEndpointToTerraform(struct!.endpoint),
    security_details: groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToTerraform(struct!.securityDetails),
  }
}


export function groundstationDataflowEndpointGroupEndpointDetailsToHclTerraform(struct?: GroundstationDataflowEndpointGroupEndpointDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_ground_station_agent_endpoint: {
      value: groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointToHclTerraform(struct!.awsGroundStationAgentEndpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint",
    },
    endpoint: {
      value: groundstationDataflowEndpointGroupEndpointDetailsEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsEndpoint",
    },
    security_details: {
      value: groundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsToHclTerraform(struct!.securityDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupEndpointDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupEndpointDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsGroundStationAgentEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsGroundStationAgentEndpoint = this._awsGroundStationAgentEndpoint?.internalValue;
    }
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._securityDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityDetails = this._securityDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupEndpointDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsGroundStationAgentEndpoint.internalValue = undefined;
      this._endpoint.internalValue = undefined;
      this._securityDetails.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsGroundStationAgentEndpoint.internalValue = value.awsGroundStationAgentEndpoint;
      this._endpoint.internalValue = value.endpoint;
      this._securityDetails.internalValue = value.securityDetails;
    }
  }

  // aws_ground_station_agent_endpoint - computed: true, optional: true, required: false
  private _awsGroundStationAgentEndpoint = new GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference(this, "aws_ground_station_agent_endpoint");
  public get awsGroundStationAgentEndpoint() {
    return this._awsGroundStationAgentEndpoint;
  }
  public putAwsGroundStationAgentEndpoint(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint) {
    this._awsGroundStationAgentEndpoint.internalValue = value;
  }
  public resetAwsGroundStationAgentEndpoint() {
    this._awsGroundStationAgentEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGroundStationAgentEndpointInput() {
    return this._awsGroundStationAgentEndpoint.internalValue;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint = new GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // security_details - computed: true, optional: true, required: false
  private _securityDetails = new GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference(this, "security_details");
  public get securityDetails() {
    return this._securityDetails;
  }
  public putSecurityDetails(value: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails) {
    this._securityDetails.internalValue = value;
  }
  public resetSecurityDetails() {
    this._securityDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDetailsInput() {
    return this._securityDetails.internalValue;
  }
}

export class GroundstationDataflowEndpointGroupEndpointDetailsList extends cdktn.ComplexList {
  public internalValue? : GroundstationDataflowEndpointGroupEndpointDetails[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GroundstationDataflowEndpointGroupEndpointDetailsOutputReference {
    return new GroundstationDataflowEndpointGroupEndpointDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroundstationDataflowEndpointGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#key GroundstationDataflowEndpointGroup#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#value GroundstationDataflowEndpointGroup#value}
  */
  readonly value?: string;
}

export function groundstationDataflowEndpointGroupTagsToTerraform(struct?: GroundstationDataflowEndpointGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function groundstationDataflowEndpointGroupTagsToHclTerraform(struct?: GroundstationDataflowEndpointGroupTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroundstationDataflowEndpointGroupTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GroundstationDataflowEndpointGroupTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroundstationDataflowEndpointGroupTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GroundstationDataflowEndpointGroupTagsList extends cdktn.ComplexList {
  public internalValue? : GroundstationDataflowEndpointGroupTags[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GroundstationDataflowEndpointGroupTagsOutputReference {
    return new GroundstationDataflowEndpointGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group}
*/
export class GroundstationDataflowEndpointGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_groundstation_dataflow_endpoint_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroundstationDataflowEndpointGroup to import
  * @param importFromId The id of the existing GroundstationDataflowEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroundstationDataflowEndpointGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_groundstation_dataflow_endpoint_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroundstationDataflowEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroundstationDataflowEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_dataflow_endpoint_group',
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
    this._contactPostPassDurationSeconds = config.contactPostPassDurationSeconds;
    this._contactPrePassDurationSeconds = config.contactPrePassDurationSeconds;
    this._endpointDetails.internalValue = config.endpointDetails;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_post_pass_duration_seconds - computed: true, optional: true, required: false
  private _contactPostPassDurationSeconds?: number; 
  public get contactPostPassDurationSeconds() {
    return this.getNumberAttribute('contact_post_pass_duration_seconds');
  }
  public set contactPostPassDurationSeconds(value: number) {
    this._contactPostPassDurationSeconds = value;
  }
  public resetContactPostPassDurationSeconds() {
    this._contactPostPassDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPostPassDurationSecondsInput() {
    return this._contactPostPassDurationSeconds;
  }

  // contact_pre_pass_duration_seconds - computed: true, optional: true, required: false
  private _contactPrePassDurationSeconds?: number; 
  public get contactPrePassDurationSeconds() {
    return this.getNumberAttribute('contact_pre_pass_duration_seconds');
  }
  public set contactPrePassDurationSeconds(value: number) {
    this._contactPrePassDurationSeconds = value;
  }
  public resetContactPrePassDurationSeconds() {
    this._contactPrePassDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPrePassDurationSecondsInput() {
    return this._contactPrePassDurationSeconds;
  }

  // dataflow_endpoint_group_id - computed: true, optional: false, required: false
  public get dataflowEndpointGroupId() {
    return this.getStringAttribute('dataflow_endpoint_group_id');
  }

  // endpoint_details - computed: false, optional: false, required: true
  private _endpointDetails = new GroundstationDataflowEndpointGroupEndpointDetailsList(this, "endpoint_details", false);
  public get endpointDetails() {
    return this._endpointDetails;
  }
  public putEndpointDetails(value: GroundstationDataflowEndpointGroupEndpointDetails[] | cdktn.IResolvable) {
    this._endpointDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDetailsInput() {
    return this._endpointDetails.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new GroundstationDataflowEndpointGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: GroundstationDataflowEndpointGroupTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_post_pass_duration_seconds: cdktn.numberToTerraform(this._contactPostPassDurationSeconds),
      contact_pre_pass_duration_seconds: cdktn.numberToTerraform(this._contactPrePassDurationSeconds),
      endpoint_details: cdktn.listMapper(groundstationDataflowEndpointGroupEndpointDetailsToTerraform, false)(this._endpointDetails.internalValue),
      tags: cdktn.listMapper(groundstationDataflowEndpointGroupTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_post_pass_duration_seconds: {
        value: cdktn.numberToHclTerraform(this._contactPostPassDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contact_pre_pass_duration_seconds: {
        value: cdktn.numberToHclTerraform(this._contactPrePassDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint_details: {
        value: cdktn.listMapperHcl(groundstationDataflowEndpointGroupEndpointDetailsToHclTerraform, false)(this._endpointDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroundstationDataflowEndpointGroupEndpointDetailsList",
      },
      tags: {
        value: cdktn.listMapperHcl(groundstationDataflowEndpointGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroundstationDataflowEndpointGroupTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
