// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediaconnectBridgeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}
  */
  readonly egressGatewayBridge?: MediaconnectBridgeEgressGatewayBridge;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}
  */
  readonly ingressGatewayBridge?: MediaconnectBridgeIngressGatewayBridge;
  /**
  * The name of the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}
  */
  readonly name: string;
  /**
  * The outputs on this bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#outputs MediaconnectBridge#outputs}
  */
  readonly outputs?: MediaconnectBridgeOutputs[] | cdktn.IResolvable;
  /**
  * The placement Amazon Resource Number (ARN) of the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#placement_arn MediaconnectBridge#placement_arn}
  */
  readonly placementArn: string;
  /**
  * The settings for source failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#source_failover_config MediaconnectBridge#source_failover_config}
  */
  readonly sourceFailoverConfig?: MediaconnectBridgeSourceFailoverConfig;
  /**
  * The sources on this bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#sources MediaconnectBridge#sources}
  */
  readonly sources: MediaconnectBridgeSources[] | cdktn.IResolvable;
}
export interface MediaconnectBridgeEgressGatewayBridge {
  /**
  * The maximum expected bitrate of the egress bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}
  */
  readonly maxBitrate?: number;
}

export function mediaconnectBridgeEgressGatewayBridgeToTerraform(struct?: MediaconnectBridgeEgressGatewayBridge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_bitrate: cdktn.numberToTerraform(struct!.maxBitrate),
  }
}


export function mediaconnectBridgeEgressGatewayBridgeToHclTerraform(struct?: MediaconnectBridgeEgressGatewayBridge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.maxBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeEgressGatewayBridgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectBridgeEgressGatewayBridge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBitrate = this._maxBitrate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeEgressGatewayBridge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBitrate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBitrate = value.maxBitrate;
    }
  }

  // max_bitrate - computed: true, optional: true, required: false
  private _maxBitrate?: number; 
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }
  public set maxBitrate(value: number) {
    this._maxBitrate = value;
  }
  public resetMaxBitrate() {
    this._maxBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBitrateInput() {
    return this._maxBitrate;
  }
}
export interface MediaconnectBridgeIngressGatewayBridge {
  /**
  * The maximum expected bitrate of the ingress bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}
  */
  readonly maxBitrate?: number;
  /**
  * The maximum number of outputs on the ingress bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#max_outputs MediaconnectBridge#max_outputs}
  */
  readonly maxOutputs?: number;
}

export function mediaconnectBridgeIngressGatewayBridgeToTerraform(struct?: MediaconnectBridgeIngressGatewayBridge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_bitrate: cdktn.numberToTerraform(struct!.maxBitrate),
    max_outputs: cdktn.numberToTerraform(struct!.maxOutputs),
  }
}


export function mediaconnectBridgeIngressGatewayBridgeToHclTerraform(struct?: MediaconnectBridgeIngressGatewayBridge | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_bitrate: {
      value: cdktn.numberToHclTerraform(struct!.maxBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_outputs: {
      value: cdktn.numberToHclTerraform(struct!.maxOutputs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeIngressGatewayBridgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectBridgeIngressGatewayBridge | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBitrate = this._maxBitrate;
    }
    if (this._maxOutputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOutputs = this._maxOutputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeIngressGatewayBridge | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBitrate = undefined;
      this._maxOutputs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBitrate = value.maxBitrate;
      this._maxOutputs = value.maxOutputs;
    }
  }

  // max_bitrate - computed: true, optional: true, required: false
  private _maxBitrate?: number; 
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }
  public set maxBitrate(value: number) {
    this._maxBitrate = value;
  }
  public resetMaxBitrate() {
    this._maxBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBitrateInput() {
    return this._maxBitrate;
  }

  // max_outputs - computed: true, optional: true, required: false
  private _maxOutputs?: number; 
  public get maxOutputs() {
    return this.getNumberAttribute('max_outputs');
  }
  public set maxOutputs(value: number) {
    this._maxOutputs = value;
  }
  public resetMaxOutputs() {
    this._maxOutputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutputsInput() {
    return this._maxOutputs;
  }
}
export interface MediaconnectBridgeOutputsNetworkOutput {
  /**
  * The network output IP Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#ip_address MediaconnectBridge#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The network output name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}
  */
  readonly name?: string;
  /**
  * The network output's gateway network name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}
  */
  readonly networkName?: string;
  /**
  * The network output port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}
  */
  readonly port?: number;
  /**
  * The network output protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}
  */
  readonly protocol?: string;
  /**
  * The network output TTL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#ttl MediaconnectBridge#ttl}
  */
  readonly ttl?: number;
}

export function mediaconnectBridgeOutputsNetworkOutputToTerraform(struct?: MediaconnectBridgeOutputsNetworkOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_address: cdktn.stringToTerraform(struct!.ipAddress),
    name: cdktn.stringToTerraform(struct!.name),
    network_name: cdktn.stringToTerraform(struct!.networkName),
    port: cdktn.numberToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    ttl: cdktn.numberToTerraform(struct!.ttl),
  }
}


export function mediaconnectBridgeOutputsNetworkOutputToHclTerraform(struct?: MediaconnectBridgeOutputsNetworkOutput | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_address: {
      value: cdktn.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktn.stringToHclTerraform(struct!.networkName),
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
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktn.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeOutputsNetworkOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectBridgeOutputsNetworkOutput | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeOutputsNetworkOutput | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._networkName = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._ttl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._networkName = value.networkName;
      this._port = value.port;
      this._protocol = value.protocol;
      this._ttl = value.ttl;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // network_name - computed: true, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface MediaconnectBridgeOutputs {
  /**
  * The output of the bridge. A network output is delivered to your premises.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#network_output MediaconnectBridge#network_output}
  */
  readonly networkOutput?: MediaconnectBridgeOutputsNetworkOutput;
}

export function mediaconnectBridgeOutputsToTerraform(struct?: MediaconnectBridgeOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    network_output: mediaconnectBridgeOutputsNetworkOutputToTerraform(struct!.networkOutput),
  }
}


export function mediaconnectBridgeOutputsToHclTerraform(struct?: MediaconnectBridgeOutputs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    network_output: {
      value: mediaconnectBridgeOutputsNetworkOutputToHclTerraform(struct!.networkOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectBridgeOutputsNetworkOutput",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeOutputsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectBridgeOutputs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOutput = this._networkOutput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeOutputs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkOutput.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkOutput.internalValue = value.networkOutput;
    }
  }

  // network_output - computed: true, optional: true, required: false
  private _networkOutput = new MediaconnectBridgeOutputsNetworkOutputOutputReference(this, "network_output");
  public get networkOutput() {
    return this._networkOutput;
  }
  public putNetworkOutput(value: MediaconnectBridgeOutputsNetworkOutput) {
    this._networkOutput.internalValue = value;
  }
  public resetNetworkOutput() {
    this._networkOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOutputInput() {
    return this._networkOutput.internalValue;
  }
}

export class MediaconnectBridgeOutputsList extends cdktn.ComplexList {
  public internalValue? : MediaconnectBridgeOutputs[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectBridgeOutputsOutputReference {
    return new MediaconnectBridgeOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediaconnectBridgeSourceFailoverConfigSourcePriority {
  /**
  * The name of the source you choose as the primary source for this flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#primary_source MediaconnectBridge#primary_source}
  */
  readonly primarySource?: string;
}

export function mediaconnectBridgeSourceFailoverConfigSourcePriorityToTerraform(struct?: MediaconnectBridgeSourceFailoverConfigSourcePriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary_source: cdktn.stringToTerraform(struct!.primarySource),
  }
}


export function mediaconnectBridgeSourceFailoverConfigSourcePriorityToHclTerraform(struct?: MediaconnectBridgeSourceFailoverConfigSourcePriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    primary_source: {
      value: cdktn.stringToHclTerraform(struct!.primarySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectBridgeSourceFailoverConfigSourcePriority | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primarySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySource = this._primarySource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeSourceFailoverConfigSourcePriority | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primarySource = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primarySource = value.primarySource;
    }
  }

  // primary_source - computed: true, optional: true, required: false
  private _primarySource?: string; 
  public get primarySource() {
    return this.getStringAttribute('primary_source');
  }
  public set primarySource(value: string) {
    this._primarySource = value;
  }
  public resetPrimarySource() {
    this._primarySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySourceInput() {
    return this._primarySource;
  }
}
export interface MediaconnectBridgeSourceFailoverConfig {
  /**
  * The type of failover you choose for this flow. FAILOVER allows switching between different streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#failover_mode MediaconnectBridge#failover_mode}
  */
  readonly failoverMode?: string;
  /**
  * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#source_priority MediaconnectBridge#source_priority}
  */
  readonly sourcePriority?: MediaconnectBridgeSourceFailoverConfigSourcePriority;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}
  */
  readonly state?: string;
}

export function mediaconnectBridgeSourceFailoverConfigToTerraform(struct?: MediaconnectBridgeSourceFailoverConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failover_mode: cdktn.stringToTerraform(struct!.failoverMode),
    source_priority: mediaconnectBridgeSourceFailoverConfigSourcePriorityToTerraform(struct!.sourcePriority),
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function mediaconnectBridgeSourceFailoverConfigToHclTerraform(struct?: MediaconnectBridgeSourceFailoverConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failover_mode: {
      value: cdktn.stringToHclTerraform(struct!.failoverMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_priority: {
      value: mediaconnectBridgeSourceFailoverConfigSourcePriorityToHclTerraform(struct!.sourcePriority),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectBridgeSourceFailoverConfigSourcePriority",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeSourceFailoverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectBridgeSourceFailoverConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverMode = this._failoverMode;
    }
    if (this._sourcePriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePriority = this._sourcePriority?.internalValue;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeSourceFailoverConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverMode = undefined;
      this._sourcePriority.internalValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverMode = value.failoverMode;
      this._sourcePriority.internalValue = value.sourcePriority;
      this._state = value.state;
    }
  }

  // failover_mode - computed: true, optional: true, required: false
  private _failoverMode?: string; 
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
  }
  public set failoverMode(value: string) {
    this._failoverMode = value;
  }
  public resetFailoverMode() {
    this._failoverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverModeInput() {
    return this._failoverMode;
  }

  // source_priority - computed: true, optional: true, required: false
  private _sourcePriority = new MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference(this, "source_priority");
  public get sourcePriority() {
    return this._sourcePriority;
  }
  public putSourcePriority(value: MediaconnectBridgeSourceFailoverConfigSourcePriority) {
    this._sourcePriority.internalValue = value;
  }
  public resetSourcePriority() {
    this._sourcePriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePriorityInput() {
    return this._sourcePriority.internalValue;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment {
  /**
  * The name of the VPC interface to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#vpc_interface_name MediaconnectBridge#vpc_interface_name}
  */
  readonly vpcInterfaceName?: string;
}

export function mediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentToTerraform(struct?: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    vpc_interface_name: cdktn.stringToTerraform(struct!.vpcInterfaceName),
  }
}


export function mediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentToHclTerraform(struct?: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    vpc_interface_name: {
      value: cdktn.stringToHclTerraform(struct!.vpcInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcInterfaceName = this._vpcInterfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcInterfaceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcInterfaceName = value.vpcInterfaceName;
    }
  }

  // vpc_interface_name - computed: true, optional: true, required: false
  private _vpcInterfaceName?: string; 
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }
  public set vpcInterfaceName(value: string) {
    this._vpcInterfaceName = value;
  }
  public resetVpcInterfaceName() {
    this._vpcInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfaceNameInput() {
    return this._vpcInterfaceName;
  }
}
export interface MediaconnectBridgeSourcesFlowSource {
  /**
  * The ARN of the cloud flow used as a source of this bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#flow_arn MediaconnectBridge#flow_arn}
  */
  readonly flowArn?: string;
  /**
  * The name of the VPC interface attachment to use for this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#flow_vpc_interface_attachment MediaconnectBridge#flow_vpc_interface_attachment}
  */
  readonly flowVpcInterfaceAttachment?: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment;
  /**
  * The name of the flow source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}
  */
  readonly name?: string;
}

export function mediaconnectBridgeSourcesFlowSourceToTerraform(struct?: MediaconnectBridgeSourcesFlowSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flow_arn: cdktn.stringToTerraform(struct!.flowArn),
    flow_vpc_interface_attachment: mediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentToTerraform(struct!.flowVpcInterfaceAttachment),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function mediaconnectBridgeSourcesFlowSourceToHclTerraform(struct?: MediaconnectBridgeSourcesFlowSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flow_arn: {
      value: cdktn.stringToHclTerraform(struct!.flowArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_vpc_interface_attachment: {
      value: mediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentToHclTerraform(struct!.flowVpcInterfaceAttachment),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment",
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

export class MediaconnectBridgeSourcesFlowSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectBridgeSourcesFlowSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowArn = this._flowArn;
    }
    if (this._flowVpcInterfaceAttachment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowVpcInterfaceAttachment = this._flowVpcInterfaceAttachment?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeSourcesFlowSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowArn = undefined;
      this._flowVpcInterfaceAttachment.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowArn = value.flowArn;
      this._flowVpcInterfaceAttachment.internalValue = value.flowVpcInterfaceAttachment;
      this._name = value.name;
    }
  }

  // flow_arn - computed: true, optional: true, required: false
  private _flowArn?: string; 
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }
  public set flowArn(value: string) {
    this._flowArn = value;
  }
  public resetFlowArn() {
    this._flowArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowArnInput() {
    return this._flowArn;
  }

  // flow_vpc_interface_attachment - computed: true, optional: true, required: false
  private _flowVpcInterfaceAttachment = new MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference(this, "flow_vpc_interface_attachment");
  public get flowVpcInterfaceAttachment() {
    return this._flowVpcInterfaceAttachment;
  }
  public putFlowVpcInterfaceAttachment(value: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment) {
    this._flowVpcInterfaceAttachment.internalValue = value;
  }
  public resetFlowVpcInterfaceAttachment() {
    this._flowVpcInterfaceAttachment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowVpcInterfaceAttachmentInput() {
    return this._flowVpcInterfaceAttachment.internalValue;
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
export interface MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings {
  /**
  * The IP address of the source for source-specific multicast (SSM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#multicast_source_ip MediaconnectBridge#multicast_source_ip}
  */
  readonly multicastSourceIp?: string;
}

export function mediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsToTerraform(struct?: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    multicast_source_ip: cdktn.stringToTerraform(struct!.multicastSourceIp),
  }
}


export function mediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsToHclTerraform(struct?: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    multicast_source_ip: {
      value: cdktn.stringToHclTerraform(struct!.multicastSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multicastSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastSourceIp = this._multicastSourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multicastSourceIp = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multicastSourceIp = value.multicastSourceIp;
    }
  }

  // multicast_source_ip - computed: true, optional: true, required: false
  private _multicastSourceIp?: string; 
  public get multicastSourceIp() {
    return this.getStringAttribute('multicast_source_ip');
  }
  public set multicastSourceIp(value: string) {
    this._multicastSourceIp = value;
  }
  public resetMulticastSourceIp() {
    this._multicastSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastSourceIpInput() {
    return this._multicastSourceIp;
  }
}
export interface MediaconnectBridgeSourcesNetworkSource {
  /**
  * The network source multicast IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#multicast_ip MediaconnectBridge#multicast_ip}
  */
  readonly multicastIp?: string;
  /**
  * The settings related to the multicast source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#multicast_source_settings MediaconnectBridge#multicast_source_settings}
  */
  readonly multicastSourceSettings?: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings;
  /**
  * The name of the network source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}
  */
  readonly name?: string;
  /**
  * The network source's gateway network name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}
  */
  readonly networkName?: string;
  /**
  * The network source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}
  */
  readonly port?: number;
  /**
  * The network source protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}
  */
  readonly protocol?: string;
}

export function mediaconnectBridgeSourcesNetworkSourceToTerraform(struct?: MediaconnectBridgeSourcesNetworkSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    multicast_ip: cdktn.stringToTerraform(struct!.multicastIp),
    multicast_source_settings: mediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsToTerraform(struct!.multicastSourceSettings),
    name: cdktn.stringToTerraform(struct!.name),
    network_name: cdktn.stringToTerraform(struct!.networkName),
    port: cdktn.numberToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function mediaconnectBridgeSourcesNetworkSourceToHclTerraform(struct?: MediaconnectBridgeSourcesNetworkSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    multicast_ip: {
      value: cdktn.stringToHclTerraform(struct!.multicastIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast_source_settings: {
      value: mediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsToHclTerraform(struct!.multicastSourceSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktn.stringToHclTerraform(struct!.networkName),
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
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeSourcesNetworkSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediaconnectBridgeSourcesNetworkSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multicastIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastIp = this._multicastIp;
    }
    if (this._multicastSourceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastSourceSettings = this._multicastSourceSettings?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeSourcesNetworkSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multicastIp = undefined;
      this._multicastSourceSettings.internalValue = undefined;
      this._name = undefined;
      this._networkName = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multicastIp = value.multicastIp;
      this._multicastSourceSettings.internalValue = value.multicastSourceSettings;
      this._name = value.name;
      this._networkName = value.networkName;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // multicast_ip - computed: true, optional: true, required: false
  private _multicastIp?: string; 
  public get multicastIp() {
    return this.getStringAttribute('multicast_ip');
  }
  public set multicastIp(value: string) {
    this._multicastIp = value;
  }
  public resetMulticastIp() {
    this._multicastIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastIpInput() {
    return this._multicastIp;
  }

  // multicast_source_settings - computed: true, optional: true, required: false
  private _multicastSourceSettings = new MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference(this, "multicast_source_settings");
  public get multicastSourceSettings() {
    return this._multicastSourceSettings;
  }
  public putMulticastSourceSettings(value: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings) {
    this._multicastSourceSettings.internalValue = value;
  }
  public resetMulticastSourceSettings() {
    this._multicastSourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastSourceSettingsInput() {
    return this._multicastSourceSettings.internalValue;
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

  // network_name - computed: true, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface MediaconnectBridgeSources {
  /**
  * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#flow_source MediaconnectBridge#flow_source}
  */
  readonly flowSource?: MediaconnectBridgeSourcesFlowSource;
  /**
  * The source of the bridge. A network source originates at your premises.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#network_source MediaconnectBridge#network_source}
  */
  readonly networkSource?: MediaconnectBridgeSourcesNetworkSource;
}

export function mediaconnectBridgeSourcesToTerraform(struct?: MediaconnectBridgeSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    flow_source: mediaconnectBridgeSourcesFlowSourceToTerraform(struct!.flowSource),
    network_source: mediaconnectBridgeSourcesNetworkSourceToTerraform(struct!.networkSource),
  }
}


export function mediaconnectBridgeSourcesToHclTerraform(struct?: MediaconnectBridgeSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    flow_source: {
      value: mediaconnectBridgeSourcesFlowSourceToHclTerraform(struct!.flowSource),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectBridgeSourcesFlowSource",
    },
    network_source: {
      value: mediaconnectBridgeSourcesNetworkSourceToHclTerraform(struct!.networkSource),
      isBlock: true,
      type: "struct",
      storageClassType: "MediaconnectBridgeSourcesNetworkSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediaconnectBridgeSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediaconnectBridgeSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowSource = this._flowSource?.internalValue;
    }
    if (this._networkSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSource = this._networkSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediaconnectBridgeSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowSource.internalValue = undefined;
      this._networkSource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowSource.internalValue = value.flowSource;
      this._networkSource.internalValue = value.networkSource;
    }
  }

  // flow_source - computed: true, optional: true, required: false
  private _flowSource = new MediaconnectBridgeSourcesFlowSourceOutputReference(this, "flow_source");
  public get flowSource() {
    return this._flowSource;
  }
  public putFlowSource(value: MediaconnectBridgeSourcesFlowSource) {
    this._flowSource.internalValue = value;
  }
  public resetFlowSource() {
    this._flowSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowSourceInput() {
    return this._flowSource.internalValue;
  }

  // network_source - computed: true, optional: true, required: false
  private _networkSource = new MediaconnectBridgeSourcesNetworkSourceOutputReference(this, "network_source");
  public get networkSource() {
    return this._networkSource;
  }
  public putNetworkSource(value: MediaconnectBridgeSourcesNetworkSource) {
    this._networkSource.internalValue = value;
  }
  public resetNetworkSource() {
    this._networkSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSourceInput() {
    return this._networkSource.internalValue;
  }
}

export class MediaconnectBridgeSourcesList extends cdktn.ComplexList {
  public internalValue? : MediaconnectBridgeSources[] | cdktn.IResolvable

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
  public get(index: number): MediaconnectBridgeSourcesOutputReference {
    return new MediaconnectBridgeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge awscc_mediaconnect_bridge}
*/
export class MediaconnectBridge extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediaconnectBridge resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaconnectBridge to import
  * @param importFromId The id of the existing MediaconnectBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaconnectBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediaconnect_bridge awscc_mediaconnect_bridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_bridge',
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
    this._egressGatewayBridge.internalValue = config.egressGatewayBridge;
    this._ingressGatewayBridge.internalValue = config.ingressGatewayBridge;
    this._name = config.name;
    this._outputs.internalValue = config.outputs;
    this._placementArn = config.placementArn;
    this._sourceFailoverConfig.internalValue = config.sourceFailoverConfig;
    this._sources.internalValue = config.sources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge_arn - computed: true, optional: false, required: false
  public get bridgeArn() {
    return this.getStringAttribute('bridge_arn');
  }

  // bridge_state - computed: true, optional: false, required: false
  public get bridgeState() {
    return this.getStringAttribute('bridge_state');
  }

  // egress_gateway_bridge - computed: true, optional: true, required: false
  private _egressGatewayBridge = new MediaconnectBridgeEgressGatewayBridgeOutputReference(this, "egress_gateway_bridge");
  public get egressGatewayBridge() {
    return this._egressGatewayBridge;
  }
  public putEgressGatewayBridge(value: MediaconnectBridgeEgressGatewayBridge) {
    this._egressGatewayBridge.internalValue = value;
  }
  public resetEgressGatewayBridge() {
    this._egressGatewayBridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGatewayBridgeInput() {
    return this._egressGatewayBridge.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_gateway_bridge - computed: true, optional: true, required: false
  private _ingressGatewayBridge = new MediaconnectBridgeIngressGatewayBridgeOutputReference(this, "ingress_gateway_bridge");
  public get ingressGatewayBridge() {
    return this._ingressGatewayBridge;
  }
  public putIngressGatewayBridge(value: MediaconnectBridgeIngressGatewayBridge) {
    this._ingressGatewayBridge.internalValue = value;
  }
  public resetIngressGatewayBridge() {
    this._ingressGatewayBridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayBridgeInput() {
    return this._ingressGatewayBridge.internalValue;
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

  // outputs - computed: true, optional: true, required: false
  private _outputs = new MediaconnectBridgeOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: MediaconnectBridgeOutputs[] | cdktn.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // placement_arn - computed: false, optional: false, required: true
  private _placementArn?: string; 
  public get placementArn() {
    return this.getStringAttribute('placement_arn');
  }
  public set placementArn(value: string) {
    this._placementArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementArnInput() {
    return this._placementArn;
  }

  // source_failover_config - computed: true, optional: true, required: false
  private _sourceFailoverConfig = new MediaconnectBridgeSourceFailoverConfigOutputReference(this, "source_failover_config");
  public get sourceFailoverConfig() {
    return this._sourceFailoverConfig;
  }
  public putSourceFailoverConfig(value: MediaconnectBridgeSourceFailoverConfig) {
    this._sourceFailoverConfig.internalValue = value;
  }
  public resetSourceFailoverConfig() {
    this._sourceFailoverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFailoverConfigInput() {
    return this._sourceFailoverConfig.internalValue;
  }

  // sources - computed: false, optional: false, required: true
  private _sources = new MediaconnectBridgeSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: MediaconnectBridgeSources[] | cdktn.IResolvable) {
    this._sources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      egress_gateway_bridge: mediaconnectBridgeEgressGatewayBridgeToTerraform(this._egressGatewayBridge.internalValue),
      ingress_gateway_bridge: mediaconnectBridgeIngressGatewayBridgeToTerraform(this._ingressGatewayBridge.internalValue),
      name: cdktn.stringToTerraform(this._name),
      outputs: cdktn.listMapper(mediaconnectBridgeOutputsToTerraform, false)(this._outputs.internalValue),
      placement_arn: cdktn.stringToTerraform(this._placementArn),
      source_failover_config: mediaconnectBridgeSourceFailoverConfigToTerraform(this._sourceFailoverConfig.internalValue),
      sources: cdktn.listMapper(mediaconnectBridgeSourcesToTerraform, false)(this._sources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      egress_gateway_bridge: {
        value: mediaconnectBridgeEgressGatewayBridgeToHclTerraform(this._egressGatewayBridge.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectBridgeEgressGatewayBridge",
      },
      ingress_gateway_bridge: {
        value: mediaconnectBridgeIngressGatewayBridgeToHclTerraform(this._ingressGatewayBridge.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectBridgeIngressGatewayBridge",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outputs: {
        value: cdktn.listMapperHcl(mediaconnectBridgeOutputsToHclTerraform, false)(this._outputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconnectBridgeOutputsList",
      },
      placement_arn: {
        value: cdktn.stringToHclTerraform(this._placementArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_failover_config: {
        value: mediaconnectBridgeSourceFailoverConfigToHclTerraform(this._sourceFailoverConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediaconnectBridgeSourceFailoverConfig",
      },
      sources: {
        value: cdktn.listMapperHcl(mediaconnectBridgeSourcesToHclTerraform, false)(this._sources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediaconnectBridgeSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
