// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_warm_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAutoscalingWarmPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_warm_pool#id DataAwsccAutoscalingWarmPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAutoscalingWarmPoolInstanceReusePolicy {
}

export function dataAwsccAutoscalingWarmPoolInstanceReusePolicyToTerraform(struct?: DataAwsccAutoscalingWarmPoolInstanceReusePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAutoscalingWarmPoolInstanceReusePolicyToHclTerraform(struct?: DataAwsccAutoscalingWarmPoolInstanceReusePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAutoscalingWarmPoolInstanceReusePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAutoscalingWarmPoolInstanceReusePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reuse_on_scale_in - computed: true, optional: false, required: false
  public get reuseOnScaleIn() {
    return this.getBooleanAttribute('reuse_on_scale_in');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_warm_pool awscc_autoscaling_warm_pool}
*/
export class DataAwsccAutoscalingWarmPool extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_autoscaling_warm_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAutoscalingWarmPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAutoscalingWarmPool to import
  * @param importFromId The id of the existing DataAwsccAutoscalingWarmPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_warm_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAutoscalingWarmPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_warm_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/autoscaling_warm_pool awscc_autoscaling_warm_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAutoscalingWarmPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAutoscalingWarmPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_autoscaling_warm_pool',
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

  // auto_scaling_group_name - computed: true, optional: false, required: false
  public get autoScalingGroupName() {
    return this.getStringAttribute('auto_scaling_group_name');
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

  // instance_reuse_policy - computed: true, optional: false, required: false
  private _instanceReusePolicy = new DataAwsccAutoscalingWarmPoolInstanceReusePolicyOutputReference(this, "instance_reuse_policy");
  public get instanceReusePolicy() {
    return this._instanceReusePolicy;
  }

  // max_group_prepared_capacity - computed: true, optional: false, required: false
  public get maxGroupPreparedCapacity() {
    return this.getNumberAttribute('max_group_prepared_capacity');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // pool_state - computed: true, optional: false, required: false
  public get poolState() {
    return this.getStringAttribute('pool_state');
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
