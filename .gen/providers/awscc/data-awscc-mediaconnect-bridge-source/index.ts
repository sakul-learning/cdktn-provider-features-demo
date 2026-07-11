// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediaconnectBridgeSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge_source#id DataAwsccMediaconnectBridgeSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment {
}

export function dataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentToTerraform(struct?: DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment | undefined) {
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
export interface DataAwsccMediaconnectBridgeSourceFlowSource {
}

export function dataAwsccMediaconnectBridgeSourceFlowSourceToTerraform(struct?: DataAwsccMediaconnectBridgeSourceFlowSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourceFlowSourceToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourceFlowSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourceFlowSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourceFlowSource | undefined) {
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
  private _flowVpcInterfaceAttachment = new DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference(this, "flow_vpc_interface_attachment");
  public get flowVpcInterfaceAttachment() {
    return this._flowVpcInterfaceAttachment;
  }
}
export interface DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings {
}

export function dataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsToTerraform(struct?: DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings | undefined) {
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
export interface DataAwsccMediaconnectBridgeSourceNetworkSource {
}

export function dataAwsccMediaconnectBridgeSourceNetworkSourceToTerraform(struct?: DataAwsccMediaconnectBridgeSourceNetworkSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediaconnectBridgeSourceNetworkSourceToHclTerraform(struct?: DataAwsccMediaconnectBridgeSourceNetworkSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediaconnectBridgeSourceNetworkSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediaconnectBridgeSourceNetworkSource | undefined) {
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
  private _multicastSourceSettings = new DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference(this, "multicast_source_settings");
  public get multicastSourceSettings() {
    return this._multicastSourceSettings;
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge_source awscc_mediaconnect_bridge_source}
*/
export class DataAwsccMediaconnectBridgeSource extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediaconnect_bridge_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediaconnectBridgeSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediaconnectBridgeSource to import
  * @param importFromId The id of the existing DataAwsccMediaconnectBridgeSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediaconnectBridgeSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_bridge_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediaconnect_bridge_source awscc_mediaconnect_bridge_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectBridgeSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectBridgeSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_bridge_source',
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

  // flow_source - computed: true, optional: false, required: false
  private _flowSource = new DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference(this, "flow_source");
  public get flowSource() {
    return this._flowSource;
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

  // network_source - computed: true, optional: false, required: false
  private _networkSource = new DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference(this, "network_source");
  public get networkSource() {
    return this._networkSource;
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
