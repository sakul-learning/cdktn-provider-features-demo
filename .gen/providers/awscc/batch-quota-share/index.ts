// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BatchQuotaShareConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list that specifies the quantity and type of compute capacity allocated to the quota share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#capacity_limits BatchQuotaShare#capacity_limits}
  */
  readonly capacityLimits: BatchQuotaShareCapacityLimits[] | cdktn.IResolvable;
  /**
  * The AWS Batch job queue associated with the quota share. This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#job_queue BatchQuotaShare#job_queue}
  */
  readonly jobQueue: string;
  /**
  * Specifies the preemption behavior for jobs in a quota share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#preemption_configuration BatchQuotaShare#preemption_configuration}
  */
  readonly preemptionConfiguration: BatchQuotaSharePreemptionConfiguration;
  /**
  * The name of the quota share. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#quota_share_name BatchQuotaShare#quota_share_name}
  */
  readonly quotaShareName: string;
  /**
  * Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#resource_sharing_configuration BatchQuotaShare#resource_sharing_configuration}
  */
  readonly resourceSharingConfiguration: BatchQuotaShareResourceSharingConfiguration;
  /**
  * The state of the quota share. If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#state BatchQuotaShare#state}
  */
  readonly state?: string;
  /**
  * The tags that you apply to the quota share to help you categorize and organize your resources. Each tag consists of a key and an optional value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#tags BatchQuotaShare#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface BatchQuotaShareCapacityLimits {
  /**
  * The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#capacity_unit BatchQuotaShare#capacity_unit}
  */
  readonly capacityUnit: string;
  /**
  * The maximum capacity available for the quota share. This value represents the maximum quantity of a resource that can be allocated to jobs in the quota share without borrowing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#max_capacity BatchQuotaShare#max_capacity}
  */
  readonly maxCapacity: number;
}

export function batchQuotaShareCapacityLimitsToTerraform(struct?: BatchQuotaShareCapacityLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_unit: cdktn.stringToTerraform(struct!.capacityUnit),
    max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
  }
}


export function batchQuotaShareCapacityLimitsToHclTerraform(struct?: BatchQuotaShareCapacityLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_unit: {
      value: cdktn.stringToHclTerraform(struct!.capacityUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_capacity: {
      value: cdktn.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchQuotaShareCapacityLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BatchQuotaShareCapacityLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityUnit = this._capacityUnit;
    }
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchQuotaShareCapacityLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityUnit = undefined;
      this._maxCapacity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityUnit = value.capacityUnit;
      this._maxCapacity = value.maxCapacity;
    }
  }

  // capacity_unit - computed: false, optional: false, required: true
  private _capacityUnit?: string;
  public get capacityUnit() {
    return this.getStringAttribute('capacity_unit');
  }
  public set capacityUnit(value: string) {
    this._capacityUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitInput() {
    return this._capacityUnit;
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity?: number;
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }
}

export class BatchQuotaShareCapacityLimitsList extends cdktn.ComplexList {
  public internalValue? : BatchQuotaShareCapacityLimits[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BatchQuotaShareCapacityLimitsOutputReference {
    return new BatchQuotaShareCapacityLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchQuotaSharePreemptionConfiguration {
  /**
  * Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#in_share_preemption BatchQuotaShare#in_share_preemption}
  */
  readonly inSharePreemption: string;
}

export function batchQuotaSharePreemptionConfigurationToTerraform(struct?: BatchQuotaSharePreemptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    in_share_preemption: cdktn.stringToTerraform(struct!.inSharePreemption),
  }
}


export function batchQuotaSharePreemptionConfigurationToHclTerraform(struct?: BatchQuotaSharePreemptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    in_share_preemption: {
      value: cdktn.stringToHclTerraform(struct!.inSharePreemption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchQuotaSharePreemptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchQuotaSharePreemptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inSharePreemption !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSharePreemption = this._inSharePreemption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchQuotaSharePreemptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inSharePreemption = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inSharePreemption = value.inSharePreemption;
    }
  }

  // in_share_preemption - computed: false, optional: false, required: true
  private _inSharePreemption?: string;
  public get inSharePreemption() {
    return this.getStringAttribute('in_share_preemption');
  }
  public set inSharePreemption(value: string) {
    this._inSharePreemption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inSharePreemptionInput() {
    return this._inSharePreemption;
  }
}
export interface BatchQuotaShareResourceSharingConfiguration {
  /**
  * The maximum percentage of additional capacity that the quota share can borrow from other shares. `BorrowLimit` can only be applied to quota shares with a strategy of `LEND_AND_BORROW`. This value is expressed as a percentage of the quota share's configured CapacityLimits. The `BorrowLimit` is applied uniformly across all capacity units. For example, if the `BorrowLimit` is 200, the quota share can borrow up to 200% of its configured `maxCapacity` for each capacity unit. The default `BorrowLimit` is -1, which indicates unlimited borrowing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#borrow_limit BatchQuotaShare#borrow_limit}
  */
  readonly borrowLimit?: number;
  /**
  * The resource sharing strategy for the quota share. The `RESERVE` strategy allows a quota share to reserve idle capacity for itself. `LEND` configures the share to lend its idle capacity to another share in need of capacity. The `LEND_AND_BORROW` strategy configures the share to borrow idle capacity from an underutilized share, as well as lend to another share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#strategy BatchQuotaShare#strategy}
  */
  readonly strategy: string;
}

export function batchQuotaShareResourceSharingConfigurationToTerraform(struct?: BatchQuotaShareResourceSharingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    borrow_limit: cdktn.numberToTerraform(struct!.borrowLimit),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function batchQuotaShareResourceSharingConfigurationToHclTerraform(struct?: BatchQuotaShareResourceSharingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    borrow_limit: {
      value: cdktn.numberToHclTerraform(struct!.borrowLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchQuotaShareResourceSharingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchQuotaShareResourceSharingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._borrowLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.borrowLimit = this._borrowLimit;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchQuotaShareResourceSharingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._borrowLimit = undefined;
      this._strategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._borrowLimit = value.borrowLimit;
      this._strategy = value.strategy;
    }
  }

  // borrow_limit - computed: true, optional: true, required: false
  private _borrowLimit?: number;
  public get borrowLimit() {
    return this.getNumberAttribute('borrow_limit');
  }
  public set borrowLimit(value: number) {
    this._borrowLimit = value;
  }
  public resetBorrowLimit() {
    this._borrowLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borrowLimitInput() {
    return this._borrowLimit;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string;
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share awscc_batch_quota_share}
*/
export class BatchQuotaShare extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_batch_quota_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BatchQuotaShare resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchQuotaShare to import
  * @param importFromId The id of the existing BatchQuotaShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchQuotaShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_quota_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/batch_quota_share awscc_batch_quota_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchQuotaShareConfig
  */
  public constructor(scope: Construct, id: string, config: BatchQuotaShareConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_batch_quota_share',
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
    this._capacityLimits.internalValue = config.capacityLimits;
    this._jobQueue = config.jobQueue;
    this._preemptionConfiguration.internalValue = config.preemptionConfiguration;
    this._quotaShareName = config.quotaShareName;
    this._resourceSharingConfiguration.internalValue = config.resourceSharingConfiguration;
    this._state = config.state;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_limits - computed: false, optional: false, required: true
  private _capacityLimits = new BatchQuotaShareCapacityLimitsList(this, "capacity_limits", false);
  public get capacityLimits() {
    return this._capacityLimits;
  }
  public putCapacityLimits(value: BatchQuotaShareCapacityLimits[] | cdktn.IResolvable) {
    this._capacityLimits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityLimitsInput() {
    return this._capacityLimits.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_queue - computed: false, optional: false, required: true
  private _jobQueue?: string;
  public get jobQueue() {
    return this.getStringAttribute('job_queue');
  }
  public set jobQueue(value: string) {
    this._jobQueue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobQueueInput() {
    return this._jobQueue;
  }

  // preemption_configuration - computed: false, optional: false, required: true
  private _preemptionConfiguration = new BatchQuotaSharePreemptionConfigurationOutputReference(this, "preemption_configuration");
  public get preemptionConfiguration() {
    return this._preemptionConfiguration;
  }
  public putPreemptionConfiguration(value: BatchQuotaSharePreemptionConfiguration) {
    this._preemptionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionConfigurationInput() {
    return this._preemptionConfiguration.internalValue;
  }

  // quota_share_arn - computed: true, optional: false, required: false
  public get quotaShareArn() {
    return this.getStringAttribute('quota_share_arn');
  }

  // quota_share_name - computed: false, optional: false, required: true
  private _quotaShareName?: string;
  public get quotaShareName() {
    return this.getStringAttribute('quota_share_name');
  }
  public set quotaShareName(value: string) {
    this._quotaShareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaShareNameInput() {
    return this._quotaShareName;
  }

  // resource_sharing_configuration - computed: false, optional: false, required: true
  private _resourceSharingConfiguration = new BatchQuotaShareResourceSharingConfigurationOutputReference(this, "resource_sharing_configuration");
  public get resourceSharingConfiguration() {
    return this._resourceSharingConfiguration;
  }
  public putResourceSharingConfiguration(value: BatchQuotaShareResourceSharingConfiguration) {
    this._resourceSharingConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSharingConfigurationInput() {
    return this._resourceSharingConfiguration.internalValue;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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
      capacity_limits: cdktn.listMapper(batchQuotaShareCapacityLimitsToTerraform, false)(this._capacityLimits.internalValue),
      job_queue: cdktn.stringToTerraform(this._jobQueue),
      preemption_configuration: batchQuotaSharePreemptionConfigurationToTerraform(this._preemptionConfiguration.internalValue),
      quota_share_name: cdktn.stringToTerraform(this._quotaShareName),
      resource_sharing_configuration: batchQuotaShareResourceSharingConfigurationToTerraform(this._resourceSharingConfiguration.internalValue),
      state: cdktn.stringToTerraform(this._state),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_limits: {
        value: cdktn.listMapperHcl(batchQuotaShareCapacityLimitsToHclTerraform, false)(this._capacityLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchQuotaShareCapacityLimitsList",
      },
      job_queue: {
        value: cdktn.stringToHclTerraform(this._jobQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preemption_configuration: {
        value: batchQuotaSharePreemptionConfigurationToHclTerraform(this._preemptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchQuotaSharePreemptionConfiguration",
      },
      quota_share_name: {
        value: cdktn.stringToHclTerraform(this._quotaShareName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_sharing_configuration: {
        value: batchQuotaShareResourceSharingConfigurationToHclTerraform(this._resourceSharingConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchQuotaShareResourceSharingConfiguration",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
