// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_logging_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccNetworkfirewallLoggingConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_logging_configuration#id DataAwsccNetworkfirewallLoggingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs {
}

export function dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsToTerraform(struct?: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsToHclTerraform(struct?: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_destination - computed: true, optional: false, required: false
  private _logDestination = new cdktn.StringMap(this, "log_destination");
  public get logDestination() {
    return this._logDestination;
  }

  // log_destination_type - computed: true, optional: false, required: false
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }
}

export class DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference {
    return new DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration {
}

export function dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationToHclTerraform(struct?: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_destination_configs - computed: true, optional: false, required: false
  private _logDestinationConfigs = new DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList(this, "log_destination_configs", false);
  public get logDestinationConfigs() {
    return this._logDestinationConfigs;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_logging_configuration awscc_networkfirewall_logging_configuration}
*/
export class DataAwsccNetworkfirewallLoggingConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_networkfirewall_logging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccNetworkfirewallLoggingConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccNetworkfirewallLoggingConfiguration to import
  * @param importFromId The id of the existing DataAwsccNetworkfirewallLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_logging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccNetworkfirewallLoggingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkfirewall_logging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/networkfirewall_logging_configuration awscc_networkfirewall_logging_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkfirewallLoggingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallLoggingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkfirewall_logging_configuration',
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

  // enable_monitoring_dashboard - computed: true, optional: false, required: false
  public get enableMonitoringDashboard() {
    return this.getBooleanAttribute('enable_monitoring_dashboard');
  }

  // firewall_arn - computed: true, optional: false, required: false
  public get firewallArn() {
    return this.getStringAttribute('firewall_arn');
  }

  // firewall_name - computed: true, optional: false, required: false
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
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

  // logging_configuration - computed: true, optional: false, required: false
  private _loggingConfiguration = new DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
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
