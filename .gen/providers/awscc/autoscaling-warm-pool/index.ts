// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AutoscalingWarmPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool#auto_scaling_group_name AutoscalingWarmPool#auto_scaling_group_name}
  */
  readonly autoScalingGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool#instance_reuse_policy AutoscalingWarmPool#instance_reuse_policy}
  */
  readonly instanceReusePolicy?: AutoscalingWarmPoolInstanceReusePolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool#max_group_prepared_capacity AutoscalingWarmPool#max_group_prepared_capacity}
  */
  readonly maxGroupPreparedCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool#min_size AutoscalingWarmPool#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool#pool_state AutoscalingWarmPool#pool_state}
  */
  readonly poolState?: string;
}
export interface AutoscalingWarmPoolInstanceReusePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool#reuse_on_scale_in AutoscalingWarmPool#reuse_on_scale_in}
  */
  readonly reuseOnScaleIn?: boolean | cdktn.IResolvable;
}

export function autoscalingWarmPoolInstanceReusePolicyToTerraform(struct?: AutoscalingWarmPoolInstanceReusePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    reuse_on_scale_in: cdktn.booleanToTerraform(struct!.reuseOnScaleIn),
  }
}


export function autoscalingWarmPoolInstanceReusePolicyToHclTerraform(struct?: AutoscalingWarmPoolInstanceReusePolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    reuse_on_scale_in: {
      value: cdktn.booleanToHclTerraform(struct!.reuseOnScaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoscalingWarmPoolInstanceReusePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoscalingWarmPoolInstanceReusePolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reuseOnScaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseOnScaleIn = this._reuseOnScaleIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoscalingWarmPoolInstanceReusePolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reuseOnScaleIn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reuseOnScaleIn = value.reuseOnScaleIn;
    }
  }

  // reuse_on_scale_in - computed: true, optional: true, required: false
  private _reuseOnScaleIn?: boolean | cdktn.IResolvable; 
  public get reuseOnScaleIn() {
    return this.getBooleanAttribute('reuse_on_scale_in');
  }
  public set reuseOnScaleIn(value: boolean | cdktn.IResolvable) {
    this._reuseOnScaleIn = value;
  }
  public resetReuseOnScaleIn() {
    this._reuseOnScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseOnScaleInInput() {
    return this._reuseOnScaleIn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool awscc_autoscaling_warm_pool}
*/
export class AutoscalingWarmPool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_autoscaling_warm_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AutoscalingWarmPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingWarmPool to import
  * @param importFromId The id of the existing AutoscalingWarmPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingWarmPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_autoscaling_warm_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/autoscaling_warm_pool awscc_autoscaling_warm_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingWarmPoolConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingWarmPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_autoscaling_warm_pool',
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
    this._autoScalingGroupName = config.autoScalingGroupName;
    this._instanceReusePolicy.internalValue = config.instanceReusePolicy;
    this._maxGroupPreparedCapacity = config.maxGroupPreparedCapacity;
    this._minSize = config.minSize;
    this._poolState = config.poolState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_name - computed: false, optional: false, required: true
  private _autoScalingGroupName?: string; 
  public get autoScalingGroupName() {
    return this.getStringAttribute('auto_scaling_group_name');
  }
  public set autoScalingGroupName(value: string) {
    this._autoScalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupNameInput() {
    return this._autoScalingGroupName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_reuse_policy - computed: true, optional: true, required: false
  private _instanceReusePolicy = new AutoscalingWarmPoolInstanceReusePolicyOutputReference(this, "instance_reuse_policy");
  public get instanceReusePolicy() {
    return this._instanceReusePolicy;
  }
  public putInstanceReusePolicy(value: AutoscalingWarmPoolInstanceReusePolicy) {
    this._instanceReusePolicy.internalValue = value;
  }
  public resetInstanceReusePolicy() {
    this._instanceReusePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceReusePolicyInput() {
    return this._instanceReusePolicy.internalValue;
  }

  // max_group_prepared_capacity - computed: true, optional: true, required: false
  private _maxGroupPreparedCapacity?: number; 
  public get maxGroupPreparedCapacity() {
    return this.getNumberAttribute('max_group_prepared_capacity');
  }
  public set maxGroupPreparedCapacity(value: number) {
    this._maxGroupPreparedCapacity = value;
  }
  public resetMaxGroupPreparedCapacity() {
    this._maxGroupPreparedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGroupPreparedCapacityInput() {
    return this._maxGroupPreparedCapacity;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // pool_state - computed: true, optional: true, required: false
  private _poolState?: string; 
  public get poolState() {
    return this.getStringAttribute('pool_state');
  }
  public set poolState(value: string) {
    this._poolState = value;
  }
  public resetPoolState() {
    this._poolState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolStateInput() {
    return this._poolState;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_group_name: cdktn.stringToTerraform(this._autoScalingGroupName),
      instance_reuse_policy: autoscalingWarmPoolInstanceReusePolicyToTerraform(this._instanceReusePolicy.internalValue),
      max_group_prepared_capacity: cdktn.numberToTerraform(this._maxGroupPreparedCapacity),
      min_size: cdktn.numberToTerraform(this._minSize),
      pool_state: cdktn.stringToTerraform(this._poolState),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_group_name: {
        value: cdktn.stringToHclTerraform(this._autoScalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_reuse_policy: {
        value: autoscalingWarmPoolInstanceReusePolicyToHclTerraform(this._instanceReusePolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutoscalingWarmPoolInstanceReusePolicy",
      },
      max_group_prepared_capacity: {
        value: cdktn.numberToHclTerraform(this._maxGroupPreparedCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktn.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool_state: {
        value: cdktn.stringToHclTerraform(this._poolState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
