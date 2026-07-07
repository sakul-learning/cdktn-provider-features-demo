// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/logs_log_anomaly_detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLogsLogAnomalyDetectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/logs_log_anomaly_detector#id DataAwsccLogsLogAnomalyDetector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/logs_log_anomaly_detector awscc_logs_log_anomaly_detector}
*/
export class DataAwsccLogsLogAnomalyDetector extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_logs_log_anomaly_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLogsLogAnomalyDetector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLogsLogAnomalyDetector to import
  * @param importFromId The id of the existing DataAwsccLogsLogAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/logs_log_anomaly_detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLogsLogAnomalyDetector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_log_anomaly_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/logs_log_anomaly_detector awscc_logs_log_anomaly_detector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLogsLogAnomalyDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLogsLogAnomalyDetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_logs_log_anomaly_detector',
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

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // anomaly_detector_arn - computed: true, optional: false, required: false
  public get anomalyDetectorArn() {
    return this.getStringAttribute('anomaly_detector_arn');
  }

  // anomaly_detector_status - computed: true, optional: false, required: false
  public get anomalyDetectorStatus() {
    return this.getStringAttribute('anomaly_detector_status');
  }

  // anomaly_visibility_time - computed: true, optional: false, required: false
  public get anomalyVisibilityTime() {
    return this.getNumberAttribute('anomaly_visibility_time');
  }

  // creation_time_stamp - computed: true, optional: false, required: false
  public get creationTimeStamp() {
    return this.getNumberAttribute('creation_time_stamp');
  }

  // detector_name - computed: true, optional: false, required: false
  public get detectorName() {
    return this.getStringAttribute('detector_name');
  }

  // evaluation_frequency - computed: true, optional: false, required: false
  public get evaluationFrequency() {
    return this.getStringAttribute('evaluation_frequency');
  }

  // filter_pattern - computed: true, optional: false, required: false
  public get filterPattern() {
    return this.getStringAttribute('filter_pattern');
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // last_modified_time_stamp - computed: true, optional: false, required: false
  public get lastModifiedTimeStamp() {
    return this.getNumberAttribute('last_modified_time_stamp');
  }

  // log_group_arn_list - computed: true, optional: false, required: false
  public get logGroupArnList() {
    return cdktn.Fn.tolist(this.getListAttribute('log_group_arn_list'));
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
