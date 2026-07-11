// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/location_tracker_consumer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LocationTrackerConsumerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/location_tracker_consumer#consumer_arn LocationTrackerConsumer#consumer_arn}
  */
  readonly consumerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/location_tracker_consumer#tracker_name LocationTrackerConsumer#tracker_name}
  */
  readonly trackerName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/location_tracker_consumer awscc_location_tracker_consumer}
*/
export class LocationTrackerConsumer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_location_tracker_consumer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LocationTrackerConsumer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocationTrackerConsumer to import
  * @param importFromId The id of the existing LocationTrackerConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/location_tracker_consumer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocationTrackerConsumer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_location_tracker_consumer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/location_tracker_consumer awscc_location_tracker_consumer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationTrackerConsumerConfig
  */
  public constructor(scope: Construct, id: string, config: LocationTrackerConsumerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_location_tracker_consumer',
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
    this._consumerArn = config.consumerArn;
    this._trackerName = config.trackerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_arn - computed: false, optional: false, required: true
  private _consumerArn?: string;
  public get consumerArn() {
    return this.getStringAttribute('consumer_arn');
  }
  public set consumerArn(value: string) {
    this._consumerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerArnInput() {
    return this._consumerArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tracker_name - computed: false, optional: false, required: true
  private _trackerName?: string;
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
  public set trackerName(value: string) {
    this._trackerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameInput() {
    return this._trackerName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_arn: cdktn.stringToTerraform(this._consumerArn),
      tracker_name: cdktn.stringToTerraform(this._trackerName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_arn: {
        value: cdktn.stringToHclTerraform(this._consumerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_name: {
        value: cdktn.stringToHclTerraform(this._trackerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
