// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_performance_metric_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEc2NetworkPerformanceMetricSubscriptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_performance_metric_subscription#id DataAwsccEc2NetworkPerformanceMetricSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_performance_metric_subscription awscc_ec2_network_performance_metric_subscription}
*/
export class DataAwsccEc2NetworkPerformanceMetricSubscription extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_network_performance_metric_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEc2NetworkPerformanceMetricSubscription resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEc2NetworkPerformanceMetricSubscription to import
  * @param importFromId The id of the existing DataAwsccEc2NetworkPerformanceMetricSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_performance_metric_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEc2NetworkPerformanceMetricSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_network_performance_metric_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/ec2_network_performance_metric_subscription awscc_ec2_network_performance_metric_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2NetworkPerformanceMetricSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2NetworkPerformanceMetricSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_network_performance_metric_subscription',
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

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
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

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
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
