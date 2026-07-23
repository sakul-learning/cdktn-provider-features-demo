// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediaconnectFlowConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow#id DataAwsccMediaconnectFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediaconnectFlowMaintenance {
}

export function dataAwsccMediaconnectFlowMaintenanceToTerraform(struct?: DataAwsccMediaconnectFlowMaintenance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowMaintenanceToHclTerraform(struct?: DataAwsccMediaconnectFlowMaintenance): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowMaintenanceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowMaintenance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowMaintenance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maintenance_day - computed: true, optional: false, required: false
  public get maintenanceDay() {
    return this.getStringAttribute('maintenance_day');
  }

  // maintenance_start_hour - computed: true, optional: false, required: false
  public get maintenanceStartHour() {
    return this.getStringAttribute('maintenance_start_hour');
  }
}
export interface DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp {
}

export function dataAwsccMediaconnectFlowMediaStreamsAttributesFmtpToTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowMediaStreamsAttributesFmtpToHclTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_order - computed: true, optional: false, required: false
  public get channelOrder() {
    return this.getStringAttribute('channel_order');
  }

  // colorimetry - computed: true, optional: false, required: false
  public get colorimetry() {
    return this.getStringAttribute('colorimetry');
  }

  // exact_framerate - computed: true, optional: false, required: false
  public get exactFramerate() {
    return this.getStringAttribute('exact_framerate');
  }

  // par - computed: true, optional: false, required: false
  public get par() {
    return this.getStringAttribute('par');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getStringAttribute('range');
  }

  // scan_mode - computed: true, optional: false, required: false
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }

  // tcs - computed: true, optional: false, required: false
  public get tcs() {
    return this.getStringAttribute('tcs');
  }
}
export interface DataAwsccMediaconnectFlowMediaStreamsAttributes {
}

export function dataAwsccMediaconnectFlowMediaStreamsAttributesToTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowMediaStreamsAttributesToHclTerraform(struct?: DataAwsccMediaconnectFlowMediaStreamsAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowMediaStreamsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowMediaStreamsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fmtp - computed: true, optional: false, required: false
  private _fmtp = new DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference(this, "fmtp");
  public get fmtp() {
    return this._fmtp;
  }

  // lang - computed: true, optional: false, required: false
  public get lang() {
    return this.getStringAttribute('lang');
  }
}
export interface DataAwsccMediaconnectFlowMediaStreams {
}

export function dataAwsccMediaconnectFlowMediaStreamsToTerraform(struct?: DataAwsccMediaconnectFlowMediaStreams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowMediaStreamsToHclTerraform(struct?: DataAwsccMediaconnectFlowMediaStreams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowMediaStreamsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowMediaStreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowMediaStreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // clock_rate - computed: true, optional: false, required: false
  public get clockRate() {
    return this.getNumberAttribute('clock_rate');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fmt - computed: true, optional: false, required: false
  public get fmt() {
    return this.getNumberAttribute('fmt');
  }

  // media_stream_id - computed: true, optional: false, required: false
  public get mediaStreamId() {
    return this.getNumberAttribute('media_stream_id');
  }

  // media_stream_name - computed: true, optional: false, required: false
  public get mediaStreamName() {
    return this.getStringAttribute('media_stream_name');
  }

  // media_stream_type - computed: true, optional: false, required: false
  public get mediaStreamType() {
    return this.getStringAttribute('media_stream_type');
  }

  // video_format - computed: true, optional: false, required: false
  public get videoFormat() {
    return this.getStringAttribute('video_format');
  }
}

export class DataAwsccMediaconnectFlowMediaStreamsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowMediaStreamsOutputReference {
    return new DataAwsccMediaconnectFlowMediaStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectFlowSourceDecryption {
}

export function dataAwsccMediaconnectFlowSourceDecryptionToTerraform(struct?: DataAwsccMediaconnectFlowSourceDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceDecryptionToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceDecryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceDecryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceDecryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // constant_initialization_vector - computed: true, optional: false, required: false
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment {
}

export function dataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentToTerraform(struct?: DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment | undefined) {
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
export interface DataAwsccMediaconnectFlowSourceGatewayBridgeSource {
}

export function dataAwsccMediaconnectFlowSourceGatewayBridgeSourceToTerraform(struct?: DataAwsccMediaconnectFlowSourceGatewayBridgeSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceGatewayBridgeSourceToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceGatewayBridgeSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceGatewayBridgeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceGatewayBridgeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bridge_arn - computed: true, optional: false, required: false
  public get bridgeArn() {
    return this.getStringAttribute('bridge_arn');
  }

  // vpc_interface_attachment - computed: true, optional: false, required: false
  private _vpcInterfaceAttachment = new DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference(this, "vpc_interface_attachment");
  public get vpcInterfaceAttachment() {
    return this._vpcInterfaceAttachment;
  }
}
export interface DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface {
}

export function dataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceToTerraform(struct?: DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations {
}

export function dataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsToTerraform(struct?: DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_port - computed: true, optional: false, required: false
  public get inputPort() {
    return this.getNumberAttribute('input_port');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
}

export class DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference {
    return new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations {
}

export function dataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsToTerraform(struct?: DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encoding_name - computed: true, optional: false, required: false
  public get encodingName() {
    return this.getStringAttribute('encoding_name');
  }

  // input_configurations - computed: true, optional: false, required: false
  private _inputConfigurations = new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList(this, "input_configurations", false);
  public get inputConfigurations() {
    return this._inputConfigurations;
  }

  // media_stream_name - computed: true, optional: false, required: false
  public get mediaStreamName() {
    return this.getStringAttribute('media_stream_name');
  }
}

export class DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference {
    return new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectFlowSource {
}

export function dataAwsccMediaconnectFlowSourceToTerraform(struct?: DataAwsccMediaconnectFlowSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceToHclTerraform(struct?: DataAwsccMediaconnectFlowSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decryption - computed: true, optional: false, required: false
  private _decryption = new DataAwsccMediaconnectFlowSourceDecryptionOutputReference(this, "decryption");
  public get decryption() {
    return this._decryption;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entitlement_arn - computed: true, optional: false, required: false
  public get entitlementArn() {
    return this.getStringAttribute('entitlement_arn');
  }

  // gateway_bridge_source - computed: true, optional: false, required: false
  private _gatewayBridgeSource = new DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference(this, "gateway_bridge_source");
  public get gatewayBridgeSource() {
    return this._gatewayBridgeSource;
  }

  // ingest_ip - computed: true, optional: false, required: false
  public get ingestIp() {
    return this.getStringAttribute('ingest_ip');
  }

  // ingest_port - computed: true, optional: false, required: false
  public get ingestPort() {
    return this.getNumberAttribute('ingest_port');
  }

  // max_bitrate - computed: true, optional: false, required: false
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }

  // max_latency - computed: true, optional: false, required: false
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }

  // max_sync_buffer - computed: true, optional: false, required: false
  public get maxSyncBuffer() {
    return this.getNumberAttribute('max_sync_buffer');
  }

  // media_stream_source_configurations - computed: true, optional: false, required: false
  private _mediaStreamSourceConfigurations = new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList(this, "media_stream_source_configurations", false);
  public get mediaStreamSourceConfigurations() {
    return this._mediaStreamSourceConfigurations;
  }

  // min_latency - computed: true, optional: false, required: false
  public get minLatency() {
    return this.getNumberAttribute('min_latency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // sender_control_port - computed: true, optional: false, required: false
  public get senderControlPort() {
    return this.getNumberAttribute('sender_control_port');
  }

  // sender_ip_address - computed: true, optional: false, required: false
  public get senderIpAddress() {
    return this.getStringAttribute('sender_ip_address');
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }

  // source_ingest_port - computed: true, optional: false, required: false
  public get sourceIngestPort() {
    return this.getStringAttribute('source_ingest_port');
  }

  // source_listener_address - computed: true, optional: false, required: false
  public get sourceListenerAddress() {
    return this.getStringAttribute('source_listener_address');
  }

  // source_listener_port - computed: true, optional: false, required: false
  public get sourceListenerPort() {
    return this.getNumberAttribute('source_listener_port');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // vpc_interface_name - computed: true, optional: false, required: false
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }

  // whitelist_cidr - computed: true, optional: false, required: false
  public get whitelistCidr() {
    return this.getStringAttribute('whitelist_cidr');
  }
}
export interface DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority {
}

export function dataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityToTerraform(struct?: DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority | undefined) {
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
export interface DataAwsccMediaconnectFlowSourceFailoverConfig {
}

export function dataAwsccMediaconnectFlowSourceFailoverConfigToTerraform(struct?: DataAwsccMediaconnectFlowSourceFailoverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceFailoverConfigToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceFailoverConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceFailoverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceFailoverConfig | undefined) {
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

  // recovery_window - computed: true, optional: false, required: false
  public get recoveryWindow() {
    return this.getNumberAttribute('recovery_window');
  }

  // source_priority - computed: true, optional: false, required: false
  private _sourcePriority = new DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference(this, "source_priority");
  public get sourcePriority() {
    return this._sourcePriority;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio {
}

export function dataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioToTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold_seconds - computed: true, optional: false, required: false
  public get thresholdSeconds() {
    return this.getNumberAttribute('threshold_seconds');
  }
}
export interface DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings {
}

export function dataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsToTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // silent_audio - computed: true, optional: false, required: false
  private _silentAudio = new DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference(this, "silent_audio");
  public get silentAudio() {
    return this._silentAudio;
  }
}

export class DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference {
    return new DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames {
}

export function dataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesToTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold_seconds - computed: true, optional: false, required: false
  public get thresholdSeconds() {
    return this.getNumberAttribute('threshold_seconds');
  }
}
export interface DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames {
}

export function dataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesToTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold_seconds - computed: true, optional: false, required: false
  public get thresholdSeconds() {
    return this.getNumberAttribute('threshold_seconds');
  }
}
export interface DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings {
}

export function dataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsToTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // black_frames - computed: true, optional: false, required: false
  private _blackFrames = new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference(this, "black_frames");
  public get blackFrames() {
    return this._blackFrames;
  }

  // frozen_frames - computed: true, optional: false, required: false
  private _frozenFrames = new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference(this, "frozen_frames");
  public get frozenFrames() {
    return this._frozenFrames;
  }
}

export class DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference {
    return new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediaconnectFlowSourceMonitoringConfig {
}

export function dataAwsccMediaconnectFlowSourceMonitoringConfigToTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceMonitoringConfigToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceMonitoringConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_monitoring_settings - computed: true, optional: false, required: false
  private _audioMonitoringSettings = new DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList(this, "audio_monitoring_settings", false);
  public get audioMonitoringSettings() {
    return this._audioMonitoringSettings;
  }

  // content_quality_analysis_state - computed: true, optional: false, required: false
  public get contentQualityAnalysisState() {
    return this.getStringAttribute('content_quality_analysis_state');
  }

  // thumbnail_state - computed: true, optional: false, required: false
  public get thumbnailState() {
    return this.getStringAttribute('thumbnail_state');
  }

  // video_monitoring_settings - computed: true, optional: false, required: false
  private _videoMonitoringSettings = new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList(this, "video_monitoring_settings", false);
  public get videoMonitoringSettings() {
    return this._videoMonitoringSettings;
  }
}
export interface DataAwsccMediaconnectFlowVpcInterfaces {
}

export function dataAwsccMediaconnectFlowVpcInterfacesToTerraform(struct?: DataAwsccMediaconnectFlowVpcInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowVpcInterfacesToHclTerraform(struct?: DataAwsccMediaconnectFlowVpcInterfaces): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowVpcInterfacesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowVpcInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowVpcInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // network_interface_type - computed: true, optional: false, required: false
  public get networkInterfaceType() {
    return this.getStringAttribute('network_interface_type');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataAwsccMediaconnectFlowVpcInterfacesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowVpcInterfacesOutputReference {
    return new DataAwsccMediaconnectFlowVpcInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow awscc_mediaconnect_flow}
*/
export class DataAwsccMediaconnectFlow extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediaconnectFlow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediaconnectFlow to import
  * @param importFromId The id of the existing DataAwsccMediaconnectFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediaconnectFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/mediaconnect_flow awscc_mediaconnect_flow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectFlowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow',
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

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // egress_ip - computed: true, optional: false, required: false
  public get egressIp() {
    return this.getStringAttribute('egress_ip');
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_availability_zone - computed: true, optional: false, required: false
  public get flowAvailabilityZone() {
    return this.getStringAttribute('flow_availability_zone');
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

  // maintenance - computed: true, optional: false, required: false
  private _maintenance = new DataAwsccMediaconnectFlowMaintenanceOutputReference(this, "maintenance");
  public get maintenance() {
    return this._maintenance;
  }

  // media_streams - computed: true, optional: false, required: false
  private _mediaStreams = new DataAwsccMediaconnectFlowMediaStreamsList(this, "media_streams", false);
  public get mediaStreams() {
    return this._mediaStreams;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataAwsccMediaconnectFlowSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }

  // source_failover_config - computed: true, optional: false, required: false
  private _sourceFailoverConfig = new DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference(this, "source_failover_config");
  public get sourceFailoverConfig() {
    return this._sourceFailoverConfig;
  }

  // source_monitoring_config - computed: true, optional: false, required: false
  private _sourceMonitoringConfig = new DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference(this, "source_monitoring_config");
  public get sourceMonitoringConfig() {
    return this._sourceMonitoringConfig;
  }

  // vpc_interfaces - computed: true, optional: false, required: false
  private _vpcInterfaces = new DataAwsccMediaconnectFlowVpcInterfacesList(this, "vpc_interfaces", false);
  public get vpcInterfaces() {
    return this._vpcInterfaces;
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
