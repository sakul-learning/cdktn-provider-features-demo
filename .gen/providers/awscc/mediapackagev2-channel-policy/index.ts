// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediapackagev2_channel_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Mediapackagev2ChannelPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediapackagev2_channel_policy#channel_group_name Mediapackagev2ChannelPolicy#channel_group_name}
  */
  readonly channelGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediapackagev2_channel_policy#channel_name Mediapackagev2ChannelPolicy#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediapackagev2_channel_policy#policy Mediapackagev2ChannelPolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediapackagev2_channel_policy awscc_mediapackagev2_channel_policy}
*/
export class Mediapackagev2ChannelPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediapackagev2_channel_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Mediapackagev2ChannelPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mediapackagev2ChannelPolicy to import
  * @param importFromId The id of the existing Mediapackagev2ChannelPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediapackagev2_channel_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mediapackagev2ChannelPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackagev2_channel_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/mediapackagev2_channel_policy awscc_mediapackagev2_channel_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Mediapackagev2ChannelPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: Mediapackagev2ChannelPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackagev2_channel_policy',
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
    this._channelGroupName = config.channelGroupName;
    this._channelName = config.channelName;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_group_name - computed: false, optional: false, required: true
  private _channelGroupName?: string;
  public get channelGroupName() {
    return this.getStringAttribute('channel_group_name');
  }
  public set channelGroupName(value: string) {
    this._channelGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupNameInput() {
    return this._channelGroupName;
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string;
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_group_name: cdktn.stringToTerraform(this._channelGroupName),
      channel_name: cdktn.stringToTerraform(this._channelName),
      policy: cdktn.stringToTerraform(this._policy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_group_name: {
        value: cdktn.stringToHclTerraform(this._channelGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_name: {
        value: cdktn.stringToHclTerraform(this._channelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktn.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
