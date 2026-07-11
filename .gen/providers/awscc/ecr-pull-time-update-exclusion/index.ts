// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_pull_time_update_exclusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcrPullTimeUpdateExclusionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the IAM principal to remove from the pull time update exclusion list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_pull_time_update_exclusion#principal_arn EcrPullTimeUpdateExclusion#principal_arn}
  */
  readonly principalArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_pull_time_update_exclusion awscc_ecr_pull_time_update_exclusion}
*/
export class EcrPullTimeUpdateExclusion extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecr_pull_time_update_exclusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcrPullTimeUpdateExclusion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcrPullTimeUpdateExclusion to import
  * @param importFromId The id of the existing EcrPullTimeUpdateExclusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_pull_time_update_exclusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcrPullTimeUpdateExclusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_pull_time_update_exclusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_pull_time_update_exclusion awscc_ecr_pull_time_update_exclusion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrPullTimeUpdateExclusionConfig
  */
  public constructor(scope: Construct, id: string, config: EcrPullTimeUpdateExclusionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecr_pull_time_update_exclusion',
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
    this._principalArn = config.principalArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal_arn - computed: false, optional: false, required: true
  private _principalArn?: string;
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }
  public set principalArn(value: string) {
    this._principalArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalArnInput() {
    return this._principalArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      principal_arn: cdktn.stringToTerraform(this._principalArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      principal_arn: {
        value: cdktn.stringToHclTerraform(this._principalArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
