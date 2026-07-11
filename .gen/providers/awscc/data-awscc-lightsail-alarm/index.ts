// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLightsailAlarmConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_alarm#id DataAwsccLightsailAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_alarm awscc_lightsail_alarm}
*/
export class DataAwsccLightsailAlarm extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lightsail_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLightsailAlarm resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLightsailAlarm to import
  * @param importFromId The id of the existing DataAwsccLightsailAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLightsailAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lightsail_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lightsail_alarm awscc_lightsail_alarm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLightsailAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLightsailAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lightsail_alarm',
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

  // alarm_arn - computed: true, optional: false, required: false
  public get alarmArn() {
    return this.getStringAttribute('alarm_arn');
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }

  // contact_protocols - computed: true, optional: false, required: false
  public get contactProtocols() {
    return cdktn.Fn.tolist(this.getListAttribute('contact_protocols'));
  }

  // datapoints_to_alarm - computed: true, optional: false, required: false
  public get datapointsToAlarm() {
    return this.getNumberAttribute('datapoints_to_alarm');
  }

  // evaluation_periods - computed: true, optional: false, required: false
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
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

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // monitored_resource_name - computed: true, optional: false, required: false
  public get monitoredResourceName() {
    return this.getStringAttribute('monitored_resource_name');
  }

  // notification_enabled - computed: true, optional: false, required: false
  public get notificationEnabled() {
    return this.getBooleanAttribute('notification_enabled');
  }

  // notification_triggers - computed: true, optional: false, required: false
  public get notificationTriggers() {
    return cdktn.Fn.tolist(this.getListAttribute('notification_triggers'));
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // treat_missing_data - computed: true, optional: false, required: false
  public get treatMissingData() {
    return this.getStringAttribute('treat_missing_data');
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
