// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3_multi_region_access_point_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3MultiRegionAccessPointPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the Multi Region Access Point to apply policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3_multi_region_access_point_policy#mrap_name S3MultiRegionAccessPointPolicy#mrap_name}
  */
  readonly mrapName: string;
  /**
  * Policy document to apply to a Multi Region Access Point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3_multi_region_access_point_policy#policy S3MultiRegionAccessPointPolicy#policy}
  */
  readonly policy: string;
}
export interface S3MultiRegionAccessPointPolicyPolicyStatus {
}

export function s3MultiRegionAccessPointPolicyPolicyStatusToTerraform(struct?: S3MultiRegionAccessPointPolicyPolicyStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function s3MultiRegionAccessPointPolicyPolicyStatusToHclTerraform(struct?: S3MultiRegionAccessPointPolicyPolicyStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class S3MultiRegionAccessPointPolicyPolicyStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3MultiRegionAccessPointPolicyPolicyStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3MultiRegionAccessPointPolicyPolicyStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getStringAttribute('is_public');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3_multi_region_access_point_policy awscc_s3_multi_region_access_point_policy}
*/
export class S3MultiRegionAccessPointPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3_multi_region_access_point_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3MultiRegionAccessPointPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3MultiRegionAccessPointPolicy to import
  * @param importFromId The id of the existing S3MultiRegionAccessPointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3_multi_region_access_point_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3MultiRegionAccessPointPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_multi_region_access_point_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/s3_multi_region_access_point_policy awscc_s3_multi_region_access_point_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3MultiRegionAccessPointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: S3MultiRegionAccessPointPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_multi_region_access_point_policy',
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
    this._mrapName = config.mrapName;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mrap_name - computed: false, optional: false, required: true
  private _mrapName?: string; 
  public get mrapName() {
    return this.getStringAttribute('mrap_name');
  }
  public set mrapName(value: string) {
    this._mrapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mrapNameInput() {
    return this._mrapName;
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

  // policy_status - computed: true, optional: false, required: false
  private _policyStatus = new S3MultiRegionAccessPointPolicyPolicyStatusOutputReference(this, "policy_status");
  public get policyStatus() {
    return this._policyStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mrap_name: cdktn.stringToTerraform(this._mrapName),
      policy: cdktn.stringToTerraform(this._policy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mrap_name: {
        value: cdktn.stringToHclTerraform(this._mrapName),
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
