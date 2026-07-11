// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediaconnectBridgeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge#id DataAwsccMediaconnectBridge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediaconnectBridgeEgressGatewayBridge {
}

export function dataAwsccMediaconnectBridgeEgressGatewayBridgeToTerraform(struct?: DataAwsccMediaconnectBridgeEgressGatewayBridge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeEgressGatewayBridgeToHclTerraform(struct?: DataAwsccMediaconnectBridgeEgressGatewayBridge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeEgressGatewayBridge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeEgressGatewayBridge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_bitrate - computed: true, optional: false, required: false
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }
}
export interface DataAwsccMediaconnectBridgeIngressGatewayBridge {
}

export function dataAwsccMediaconnectBridgeIngressGatewayBridgeToTerraform(struct?: DataAwsccMediaconnectBridgeIngressGatewayBridge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeIngressGatewayBridgeToHclTerraform(struct?: DataAwsccMediaconnectBridgeIngressGatewayBridge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeIngressGatewayBridge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeIngressGatewayBridge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_bitrate - computed: true, optional: false, required: false
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }

  // max_outputs - computed: true, optional: false, required: false
  public get maxOutputs() {
    return this.getNumberAttribute('max_outputs');
  }
}
export interface DataAwsccMediaconnectBridgeOutputsNetworkOutput {
}

export function dataAwsccMediaconnectBridgeOutputsNetworkOutputToTerraform(struct?: DataAwsccMediaconnectBridgeOutputsNetworkOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeOutputsNetworkOutputToHclTerraform(struct?: DataAwsccMediaconnectBridgeOutputsNetworkOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeOutputsNetworkOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeOutputsNetworkOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}
export interface DataAwsccMediaconnectBridgeOutputs {
}

export function dataAwsccMediaconnectBridgeOutputsToTerraform(struct?: DataAwsccMediaconnectBridgeOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeOutputsToHclTerraform(struct?: DataAwsccMediaconnectBridgeOutputs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeOutputsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_output - computed: true, optional: false, required: false
  private _networkOutput = new DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference(this, "network_output");
  public get networkOutput() {
    return this._networkOutput;
  }
}

export class DataAwsccMediaconnectBridgeOutputsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectBridgeOutputsOutputReference {
    return new DataAwsccMediaconnectBridgeOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority {
}

export function dataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityToTerraform(struct?: DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_source - computed: true, optional: false, required: false
  public get primarySource() {
    return this.getStringAttribute('primary_source');
  }
}
export interface DataAwsccMediaconnectBridgeSourceFailoverConfig {
}

export function dataAwsccMediaconnectBridgeSourceFailoverConfigToTerraform(struct?: DataAwsccMediaconnectBridgeSourceFailoverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourceFailoverConfigToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourceFailoverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourceFailoverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourceFailoverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failover_mode - computed: true, optional: false, required: false
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
  }

  // source_priority - computed: true, optional: false, required: false
  private _sourcePriority = new DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference(this, "source_priority");
  public get sourcePriority() {
    return this._sourcePriority;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment {
}

export function dataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentToTerraform(struct?: DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_interface_name - computed: true, optional: false, required: false
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }
}
export interface DataAwsccMediaconnectBridgeSourcesFlowSource {
}

export function dataAwsccMediaconnectBridgeSourcesFlowSourceToTerraform(struct?: DataAwsccMediaconnectBridgeSourcesFlowSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourcesFlowSourceToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourcesFlowSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourcesFlowSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourcesFlowSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_vpc_interface_attachment - computed: true, optional: false, required: false
  private _flowVpcInterfaceAttachment = new DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference(this, "flow_vpc_interface_attachment");
  public get flowVpcInterfaceAttachment() {
    return this._flowVpcInterfaceAttachment;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings {
}

export function dataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsToTerraform(struct?: DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multicast_source_ip - computed: true, optional: false, required: false
  public get multicastSourceIp() {
    return this.getStringAttribute('multicast_source_ip');
  }
}
export interface DataAwsccMediaconnectBridgeSourcesNetworkSource {
}

export function dataAwsccMediaconnectBridgeSourcesNetworkSourceToTerraform(struct?: DataAwsccMediaconnectBridgeSourcesNetworkSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourcesNetworkSourceToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourcesNetworkSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourcesNetworkSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourcesNetworkSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multicast_ip - computed: true, optional: false, required: false
  public get multicastIp() {
    return this.getStringAttribute('multicast_ip');
  }

  // multicast_source_settings - computed: true, optional: false, required: false
  private _multicastSourceSettings = new DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference(this, "multicast_source_settings");
  public get multicastSourceSettings() {
    return this._multicastSourceSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export interface DataAwsccMediaconnectBridgeSources {
}

export function dataAwsccMediaconnectBridgeSourcesToTerraform(struct?: DataAwsccMediaconnectBridgeSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourcesToHclTerraform(struct?: DataAwsccMediaconnectBridgeSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_source - computed: true, optional: false, required: false
  private _flowSource = new DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference(this, "flow_source");
  public get flowSource() {
    return this._flowSource;
  }

  // network_source - computed: true, optional: false, required: false
  private _networkSource = new DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference(this, "network_source");
  public get networkSource() {
    return this._networkSource;
  }
}

export class DataAwsccMediaconnectBridgeSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectBridgeSourcesOutputReference {
    return new DataAwsccMediaconnectBridgeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge awscc_mediaconnect_bridge}
*/
export class DataAwsccMediaconnectBridge extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediaconnectBridge resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediaconnectBridge to import
  * @param importFromId The id of the existing DataAwsccMediaconnectBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediaconnectBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge awscc_mediaconnect_bridge} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectBridgeConfig) {
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
    this._id = config.id;
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

  // egress_gateway_bridge - computed: true, optional: false, required: false
  private _egressGatewayBridge = new DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference(this, "egress_gateway_bridge");
  public get egressGatewayBridge() {
    return this._egressGatewayBridge;
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

  // ingress_gateway_bridge - computed: true, optional: false, required: false
  private _ingressGatewayBridge = new DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference(this, "ingress_gateway_bridge");
  public get ingressGatewayBridge() {
    return this._ingressGatewayBridge;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataAwsccMediaconnectBridgeOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // placement_arn - computed: true, optional: false, required: false
  public get placementArn() {
    return this.getStringAttribute('placement_arn');
  }

  // source_failover_config - computed: true, optional: false, required: false
  private _sourceFailoverConfig = new DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference(this, "source_failover_config");
  public get sourceFailoverConfig() {
    return this._sourceFailoverConfig;
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataAwsccMediaconnectBridgeSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
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
