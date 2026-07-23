// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/devopsguru_log_anomaly_detection_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/devopsguru_log_anomaly_detection_integrations awscc_devopsguru_log_anomaly_detection_integrations}
*/
export class DataAwsccDevopsguruLogAnomalyDetectionIntegrations extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_devopsguru_log_anomaly_detection_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDevopsguruLogAnomalyDetectionIntegrations resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDevopsguruLogAnomalyDetectionIntegrations to import
  * @param importFromId The id of the existing DataAwsccDevopsguruLogAnomalyDetectionIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/devopsguru_log_anomaly_detection_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDevopsguruLogAnomalyDetectionIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsguru_log_anomaly_detection_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/devopsguru_log_anomaly_detection_integrations awscc_devopsguru_log_anomaly_detection_integrations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDevopsguruLogAnomalyDetectionIntegrationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_devopsguru_log_anomaly_detection_integrations',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktn.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
