// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubHubConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether to automatically enable new controls when they are added to standards that are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_hub#auto_enable_controls SecurityhubHub#auto_enable_controls}
  */
  readonly autoEnableControls?: boolean | cdktn.IResolvable;
  /**
  * This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.  If the value for this field is set to STANDARD_CONTROL, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_hub#control_finding_generator SecurityhubHub#control_finding_generator}
  */
  readonly controlFindingGenerator?: string;
  /**
  * Whether to enable the security standards that Security Hub has designated as automatically enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_hub#enable_default_standards SecurityhubHub#enable_default_standards}
  */
  readonly enableDefaultStandards?: boolean | cdktn.IResolvable;
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_hub#tags SecurityhubHub#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_hub awscc_securityhub_hub}
*/
export class SecurityhubHub extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubHub resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubHub to import
  * @param importFromId The id of the existing SecurityhubHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/securityhub_hub awscc_securityhub_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubHubConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityhubHubConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_hub',
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
    this._autoEnableControls = config.autoEnableControls;
    this._controlFindingGenerator = config.controlFindingGenerator;
    this._enableDefaultStandards = config.enableDefaultStandards;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_enable_controls - computed: true, optional: true, required: false
  private _autoEnableControls?: boolean | cdktn.IResolvable; 
  public get autoEnableControls() {
    return this.getBooleanAttribute('auto_enable_controls');
  }
  public set autoEnableControls(value: boolean | cdktn.IResolvable) {
    this._autoEnableControls = value;
  }
  public resetAutoEnableControls() {
    this._autoEnableControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableControlsInput() {
    return this._autoEnableControls;
  }

  // control_finding_generator - computed: true, optional: true, required: false
  private _controlFindingGenerator?: string; 
  public get controlFindingGenerator() {
    return this.getStringAttribute('control_finding_generator');
  }
  public set controlFindingGenerator(value: string) {
    this._controlFindingGenerator = value;
  }
  public resetControlFindingGenerator() {
    this._controlFindingGenerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlFindingGeneratorInput() {
    return this._controlFindingGenerator;
  }

  // enable_default_standards - computed: true, optional: true, required: false
  private _enableDefaultStandards?: boolean | cdktn.IResolvable; 
  public get enableDefaultStandards() {
    return this.getBooleanAttribute('enable_default_standards');
  }
  public set enableDefaultStandards(value: boolean | cdktn.IResolvable) {
    this._enableDefaultStandards = value;
  }
  public resetEnableDefaultStandards() {
    this._enableDefaultStandards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultStandardsInput() {
    return this._enableDefaultStandards;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subscribed_at - computed: true, optional: false, required: false
  public get subscribedAt() {
    return this.getStringAttribute('subscribed_at');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable_controls: cdktn.booleanToTerraform(this._autoEnableControls),
      control_finding_generator: cdktn.stringToTerraform(this._controlFindingGenerator),
      enable_default_standards: cdktn.booleanToTerraform(this._enableDefaultStandards),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_enable_controls: {
        value: cdktn.booleanToHclTerraform(this._autoEnableControls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      control_finding_generator: {
        value: cdktn.stringToHclTerraform(this._controlFindingGenerator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_default_standards: {
        value: cdktn.booleanToHclTerraform(this._enableDefaultStandards),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
