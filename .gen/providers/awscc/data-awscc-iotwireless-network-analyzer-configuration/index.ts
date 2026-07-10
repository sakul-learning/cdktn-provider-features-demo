// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iotwireless_network_analyzer_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iotwireless_network_analyzer_configuration#id DataAwsccIotwirelessNetworkAnalyzerConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccIotwirelessNetworkAnalyzerConfigurationTags {
}

export function dataAwsccIotwirelessNetworkAnalyzerConfigurationTagsToTerraform(struct?: DataAwsccIotwirelessNetworkAnalyzerConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessNetworkAnalyzerConfigurationTagsToHclTerraform(struct?: DataAwsccIotwirelessNetworkAnalyzerConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccIotwirelessNetworkAnalyzerConfigurationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessNetworkAnalyzerConfigurationTags | undefined) {
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

export class DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference {
    return new DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent {
}

export function dataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentToTerraform(struct?: DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentToHclTerraform(struct?: DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // wireless_device_frame_info - computed: true, optional: false, required: false
  public get wirelessDeviceFrameInfo() {
    return this.getStringAttribute('wireless_device_frame_info');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration}
*/
export class DataAwsccIotwirelessNetworkAnalyzerConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotwireless_network_analyzer_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccIotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccIotwirelessNetworkAnalyzerConfiguration to import
  * @param importFromId The id of the existing DataAwsccIotwirelessNetworkAnalyzerConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iotwireless_network_analyzer_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccIotwirelessNetworkAnalyzerConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotwireless_network_analyzer_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_network_analyzer_configuration',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // trace_content - computed: true, optional: false, required: false
  private _traceContent = new DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference(this, "trace_content");
  public get traceContent() {
    return this._traceContent;
  }

  // wireless_devices - computed: true, optional: false, required: false
  public get wirelessDevices() {
    return this.getListAttribute('wireless_devices');
  }

  // wireless_gateways - computed: true, optional: false, required: false
  public get wirelessGateways() {
    return this.getListAttribute('wireless_gateways');
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
