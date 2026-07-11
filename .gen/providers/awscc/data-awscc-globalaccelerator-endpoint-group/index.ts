// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/globalaccelerator_endpoint_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGlobalacceleratorEndpointGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/globalaccelerator_endpoint_group#id DataAwsccGlobalacceleratorEndpointGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations {
}

export function dataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsToTerraform(struct?: DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsToHclTerraform(struct?: DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachment_arn - computed: true, optional: false, required: false
  public get attachmentArn() {
    return this.getStringAttribute('attachment_arn');
  }

  // client_ip_preservation_enabled - computed: true, optional: false, required: false
  public get clientIpPreservationEnabled() {
    return this.getBooleanAttribute('client_ip_preservation_enabled');
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference {
    return new DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlobalacceleratorEndpointGroupPortOverrides {
}

export function dataAwsccGlobalacceleratorEndpointGroupPortOverridesToTerraform(struct?: DataAwsccGlobalacceleratorEndpointGroupPortOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlobalacceleratorEndpointGroupPortOverridesToHclTerraform(struct?: DataAwsccGlobalacceleratorEndpointGroupPortOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlobalacceleratorEndpointGroupPortOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlobalacceleratorEndpointGroupPortOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_port - computed: true, optional: false, required: false
  public get endpointPort() {
    return this.getNumberAttribute('endpoint_port');
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
}

export class DataAwsccGlobalacceleratorEndpointGroupPortOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference {
    return new DataAwsccGlobalacceleratorEndpointGroupPortOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/globalaccelerator_endpoint_group awscc_globalaccelerator_endpoint_group}
*/
export class DataAwsccGlobalacceleratorEndpointGroup extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_globalaccelerator_endpoint_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGlobalacceleratorEndpointGroup to import
  * @param importFromId The id of the existing DataAwsccGlobalacceleratorEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/globalaccelerator_endpoint_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGlobalacceleratorEndpointGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_globalaccelerator_endpoint_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/globalaccelerator_endpoint_group awscc_globalaccelerator_endpoint_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlobalacceleratorEndpointGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlobalacceleratorEndpointGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_globalaccelerator_endpoint_group',
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

  // endpoint_configurations - computed: true, optional: false, required: false
  private _endpointConfigurations = new DataAwsccGlobalacceleratorEndpointGroupEndpointConfigurationsList(this, "endpoint_configurations", false);
  public get endpointConfigurations() {
    return this._endpointConfigurations;
  }

  // endpoint_group_arn - computed: true, optional: false, required: false
  public get endpointGroupArn() {
    return this.getStringAttribute('endpoint_group_arn');
  }

  // endpoint_group_region - computed: true, optional: false, required: false
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }

  // health_check_interval_seconds - computed: true, optional: false, required: false
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }

  // health_check_path - computed: true, optional: false, required: false
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }

  // health_check_port - computed: true, optional: false, required: false
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }

  // health_check_protocol - computed: true, optional: false, required: false
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
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

  // listener_arn - computed: true, optional: false, required: false
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }

  // port_overrides - computed: true, optional: false, required: false
  private _portOverrides = new DataAwsccGlobalacceleratorEndpointGroupPortOverridesList(this, "port_overrides", false);
  public get portOverrides() {
    return this._portOverrides;
  }

  // threshold_count - computed: true, optional: false, required: false
  public get thresholdCount() {
    return this.getNumberAttribute('threshold_count');
  }

  // traffic_dial_percentage - computed: true, optional: false, required: false
  public get trafficDialPercentage() {
    return this.getNumberAttribute('traffic_dial_percentage');
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
