// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/supportapp_slack_channel_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccSupportappSlackChannelConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/supportapp_slack_channel_configuration#id DataAwsccSupportappSlackChannelConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/supportapp_slack_channel_configuration awscc_supportapp_slack_channel_configuration}
*/
export class DataAwsccSupportappSlackChannelConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_supportapp_slack_channel_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccSupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccSupportappSlackChannelConfiguration to import
  * @param importFromId The id of the existing DataAwsccSupportappSlackChannelConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/supportapp_slack_channel_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccSupportappSlackChannelConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_supportapp_slack_channel_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/supportapp_slack_channel_configuration awscc_supportapp_slack_channel_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSupportappSlackChannelConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSupportappSlackChannelConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_supportapp_slack_channel_configuration',
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

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // channel_role_arn - computed: true, optional: false, required: false
  public get channelRoleArn() {
    return this.getStringAttribute('channel_role_arn');
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

  // notify_on_add_correspondence_to_case - computed: true, optional: false, required: false
  public get notifyOnAddCorrespondenceToCase() {
    return this.getBooleanAttribute('notify_on_add_correspondence_to_case');
  }

  // notify_on_case_severity - computed: true, optional: false, required: false
  public get notifyOnCaseSeverity() {
    return this.getStringAttribute('notify_on_case_severity');
  }

  // notify_on_create_or_reopen_case - computed: true, optional: false, required: false
  public get notifyOnCreateOrReopenCase() {
    return this.getBooleanAttribute('notify_on_create_or_reopen_case');
  }

  // notify_on_resolve_case - computed: true, optional: false, required: false
  public get notifyOnResolveCase() {
    return this.getBooleanAttribute('notify_on_resolve_case');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
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
