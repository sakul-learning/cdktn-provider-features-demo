// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_flow_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediaconnectFlowSourceAConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_flow_source#id DataAwsccMediaconnectFlowSourceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediaconnectFlowSourceDecryptionA {
}

export function dataAwsccMediaconnectFlowSourceDecryptionAToTerraform(struct?: DataAwsccMediaconnectFlowSourceDecryptionA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceDecryptionAToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceDecryptionA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceDecryptionAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceDecryptionA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceDecryptionA | undefined) {
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
export interface DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA {
}

export function dataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAToTerraform(struct?: DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA | undefined) {
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
export interface DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA {
}

export function dataAwsccMediaconnectFlowSourceGatewayBridgeSourceAToTerraform(struct?: DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceGatewayBridgeSourceAToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceGatewayBridgeSourceA | undefined) {
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
  private _vpcInterfaceAttachment = new DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference(this, "vpc_interface_attachment");
  public get vpcInterfaceAttachment() {
    return this._vpcInterfaceAttachment;
  }
}
export interface DataAwsccMediaconnectFlowSourceTags {
}

export function dataAwsccMediaconnectFlowSourceTagsToTerraform(struct?: DataAwsccMediaconnectFlowSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectFlowSourceTagsToHclTerraform(struct?: DataAwsccMediaconnectFlowSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectFlowSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediaconnectFlowSourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectFlowSourceTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccMediaconnectFlowSourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediaconnectFlowSourceTagsOutputReference {
    return new DataAwsccMediaconnectFlowSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_flow_source awscc_mediaconnect_flow_source}
*/
export class DataAwsccMediaconnectFlowSourceA extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_flow_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediaconnectFlowSourceA to import
  * @param importFromId The id of the existing DataAwsccMediaconnectFlowSourceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_flow_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediaconnectFlowSourceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_flow_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_flow_source awscc_mediaconnect_flow_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectFlowSourceAConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowSourceAConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow_source',
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

  // decryption - computed: true, optional: false, required: false
  private _decryption = new DataAwsccMediaconnectFlowSourceDecryptionAOutputReference(this, "decryption");
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

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // gateway_bridge_source - computed: true, optional: false, required: false
  private _gatewayBridgeSource = new DataAwsccMediaconnectFlowSourceGatewayBridgeSourceAOutputReference(this, "gateway_bridge_source");
  public get gatewayBridgeSource() {
    return this._gatewayBridgeSource;
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMediaconnectFlowSourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // vpc_interface_name - computed: true, optional: false, required: false
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }

  // whitelist_cidr - computed: true, optional: false, required: false
  public get whitelistCidr() {
    return this.getStringAttribute('whitelist_cidr');
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
