// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sns_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSnsSubscriptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sns_subscription#id DataAwsccSnsSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sns_subscription awscc_sns_subscription}
*/
export class DataAwsccSnsSubscription extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sns_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSnsSubscription resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSnsSubscription to import
  * @param importFromId The id of the existing DataAwsccSnsSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sns_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSnsSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sns_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/sns_subscription awscc_sns_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSnsSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSnsSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sns_subscription',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
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

  // delivery_policy - computed: true, optional: false, required: false
  public get deliveryPolicy() {
    return this.getStringAttribute('delivery_policy');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // filter_policy - computed: true, optional: false, required: false
  public get filterPolicy() {
    return this.getStringAttribute('filter_policy');
  }

  // filter_policy_scope - computed: true, optional: false, required: false
  public get filterPolicyScope() {
    return this.getStringAttribute('filter_policy_scope');
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // raw_message_delivery - computed: true, optional: false, required: false
  public get rawMessageDelivery() {
    return this.getBooleanAttribute('raw_message_delivery');
  }

  // redrive_policy - computed: true, optional: false, required: false
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replay_policy - computed: true, optional: false, required: false
  public get replayPolicy() {
    return this.getStringAttribute('replay_policy');
  }

  // subscription_role_arn - computed: true, optional: false, required: false
  public get subscriptionRoleArn() {
    return this.getStringAttribute('subscription_role_arn');
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
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
