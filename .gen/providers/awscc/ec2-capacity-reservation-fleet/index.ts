// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2CapacityReservationFleetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#allocation_strategy Ec2CapacityReservationFleet#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#end_date Ec2CapacityReservationFleet#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#instance_match_criteria Ec2CapacityReservationFleet#instance_match_criteria}
  */
  readonly instanceMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#instance_type_specifications Ec2CapacityReservationFleet#instance_type_specifications}
  */
  readonly instanceTypeSpecifications?: Ec2CapacityReservationFleetInstanceTypeSpecifications[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#no_remove_end_date Ec2CapacityReservationFleet#no_remove_end_date}
  */
  readonly noRemoveEndDate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#remove_end_date Ec2CapacityReservationFleet#remove_end_date}
  */
  readonly removeEndDate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#tag_specifications Ec2CapacityReservationFleet#tag_specifications}
  */
  readonly tagSpecifications?: Ec2CapacityReservationFleetTagSpecifications[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#tenancy Ec2CapacityReservationFleet#tenancy}
  */
  readonly tenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#total_target_capacity Ec2CapacityReservationFleet#total_target_capacity}
  */
  readonly totalTargetCapacity?: number;
}
export interface Ec2CapacityReservationFleetInstanceTypeSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone Ec2CapacityReservationFleet#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#availability_zone_id Ec2CapacityReservationFleet#availability_zone_id}
  */
  readonly availabilityZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#ebs_optimized Ec2CapacityReservationFleet#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#instance_platform Ec2CapacityReservationFleet#instance_platform}
  */
  readonly instancePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#instance_type Ec2CapacityReservationFleet#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#priority Ec2CapacityReservationFleet#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#weight Ec2CapacityReservationFleet#weight}
  */
  readonly weight?: number;
}

export function ec2CapacityReservationFleetInstanceTypeSpecificationsToTerraform(struct?: Ec2CapacityReservationFleetInstanceTypeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
    availability_zone_id: cdktn.stringToTerraform(struct!.availabilityZoneId),
    ebs_optimized: cdktn.booleanToTerraform(struct!.ebsOptimized),
    instance_platform: cdktn.stringToTerraform(struct!.instancePlatform),
    instance_type: cdktn.stringToTerraform(struct!.instanceType),
    priority: cdktn.numberToTerraform(struct!.priority),
    weight: cdktn.numberToTerraform(struct!.weight),
  }
}


export function ec2CapacityReservationFleetInstanceTypeSpecificationsToHclTerraform(struct?: Ec2CapacityReservationFleetInstanceTypeSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.availabilityZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_optimized: {
      value: cdktn.booleanToHclTerraform(struct!.ebsOptimized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_platform: {
      value: cdktn.stringToHclTerraform(struct!.instancePlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktn.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktn.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2CapacityReservationFleetInstanceTypeSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._availabilityZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneId = this._availabilityZoneId;
    }
    if (this._ebsOptimized !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsOptimized = this._ebsOptimized;
    }
    if (this._instancePlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePlatform = this._instancePlatform;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2CapacityReservationFleetInstanceTypeSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._availabilityZoneId = undefined;
      this._ebsOptimized = undefined;
      this._instancePlatform = undefined;
      this._instanceType = undefined;
      this._priority = undefined;
      this._weight = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._availabilityZoneId = value.availabilityZoneId;
      this._ebsOptimized = value.ebsOptimized;
      this._instancePlatform = value.instancePlatform;
      this._instanceType = value.instanceType;
      this._priority = value.priority;
      this._weight = value.weight;
    }
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zone_id - computed: true, optional: true, required: false
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  public resetAvailabilityZoneId() {
    this._availabilityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // ebs_optimized - computed: true, optional: true, required: false
  private _ebsOptimized?: boolean | cdktn.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktn.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // instance_platform - computed: true, optional: true, required: false
  private _instancePlatform?: string; 
  public get instancePlatform() {
    return this.getStringAttribute('instance_platform');
  }
  public set instancePlatform(value: string) {
    this._instancePlatform = value;
  }
  public resetInstancePlatform() {
    this._instancePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePlatformInput() {
    return this._instancePlatform;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class Ec2CapacityReservationFleetInstanceTypeSpecificationsList extends cdktn.ComplexList {
  public internalValue? : Ec2CapacityReservationFleetInstanceTypeSpecifications[] | cdktn.IResolvable

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
  public get(index: number): Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference {
    return new Ec2CapacityReservationFleetInstanceTypeSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2CapacityReservationFleetTagSpecificationsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#key Ec2CapacityReservationFleet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#value Ec2CapacityReservationFleet#value}
  */
  readonly value?: string;
}

export function ec2CapacityReservationFleetTagSpecificationsTagsToTerraform(struct?: Ec2CapacityReservationFleetTagSpecificationsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2CapacityReservationFleetTagSpecificationsTagsToHclTerraform(struct?: Ec2CapacityReservationFleetTagSpecificationsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2CapacityReservationFleetTagSpecificationsTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2CapacityReservationFleetTagSpecificationsTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Ec2CapacityReservationFleetTagSpecificationsTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2CapacityReservationFleetTagSpecificationsTags[] | cdktn.IResolvable

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
  public get(index: number): Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference {
    return new Ec2CapacityReservationFleetTagSpecificationsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2CapacityReservationFleetTagSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#resource_type Ec2CapacityReservationFleet#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#tags Ec2CapacityReservationFleet#tags}
  */
  readonly tags?: Ec2CapacityReservationFleetTagSpecificationsTags[] | cdktn.IResolvable;
}

export function ec2CapacityReservationFleetTagSpecificationsToTerraform(struct?: Ec2CapacityReservationFleetTagSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    tags: cdktn.listMapper(ec2CapacityReservationFleetTagSpecificationsTagsToTerraform, false)(struct!.tags),
  }
}


export function ec2CapacityReservationFleetTagSpecificationsToHclTerraform(struct?: Ec2CapacityReservationFleetTagSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(ec2CapacityReservationFleetTagSpecificationsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2CapacityReservationFleetTagSpecificationsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2CapacityReservationFleetTagSpecificationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2CapacityReservationFleetTagSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2CapacityReservationFleetTagSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._tags.internalValue = value.tags;
    }
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2CapacityReservationFleetTagSpecificationsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2CapacityReservationFleetTagSpecificationsTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class Ec2CapacityReservationFleetTagSpecificationsList extends cdktn.ComplexList {
  public internalValue? : Ec2CapacityReservationFleetTagSpecifications[] | cdktn.IResolvable

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
  public get(index: number): Ec2CapacityReservationFleetTagSpecificationsOutputReference {
    return new Ec2CapacityReservationFleetTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet awscc_ec2_capacity_reservation_fleet}
*/
export class Ec2CapacityReservationFleet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_capacity_reservation_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2CapacityReservationFleet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2CapacityReservationFleet to import
  * @param importFromId The id of the existing Ec2CapacityReservationFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2CapacityReservationFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_capacity_reservation_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ec2_capacity_reservation_fleet awscc_ec2_capacity_reservation_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2CapacityReservationFleetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2CapacityReservationFleetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_capacity_reservation_fleet',
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
    this._allocationStrategy = config.allocationStrategy;
    this._endDate = config.endDate;
    this._instanceMatchCriteria = config.instanceMatchCriteria;
    this._instanceTypeSpecifications.internalValue = config.instanceTypeSpecifications;
    this._noRemoveEndDate = config.noRemoveEndDate;
    this._removeEndDate = config.removeEndDate;
    this._tagSpecifications.internalValue = config.tagSpecifications;
    this._tenancy = config.tenancy;
    this._totalTargetCapacity = config.totalTargetCapacity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_strategy - computed: true, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // capacity_reservation_fleet_id - computed: true, optional: false, required: false
  public get capacityReservationFleetId() {
    return this.getStringAttribute('capacity_reservation_fleet_id');
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_match_criteria - computed: true, optional: true, required: false
  private _instanceMatchCriteria?: string; 
  public get instanceMatchCriteria() {
    return this.getStringAttribute('instance_match_criteria');
  }
  public set instanceMatchCriteria(value: string) {
    this._instanceMatchCriteria = value;
  }
  public resetInstanceMatchCriteria() {
    this._instanceMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMatchCriteriaInput() {
    return this._instanceMatchCriteria;
  }

  // instance_type_specifications - computed: true, optional: true, required: false
  private _instanceTypeSpecifications = new Ec2CapacityReservationFleetInstanceTypeSpecificationsList(this, "instance_type_specifications", true);
  public get instanceTypeSpecifications() {
    return this._instanceTypeSpecifications;
  }
  public putInstanceTypeSpecifications(value: Ec2CapacityReservationFleetInstanceTypeSpecifications[] | cdktn.IResolvable) {
    this._instanceTypeSpecifications.internalValue = value;
  }
  public resetInstanceTypeSpecifications() {
    this._instanceTypeSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeSpecificationsInput() {
    return this._instanceTypeSpecifications.internalValue;
  }

  // no_remove_end_date - computed: true, optional: true, required: false
  private _noRemoveEndDate?: boolean | cdktn.IResolvable; 
  public get noRemoveEndDate() {
    return this.getBooleanAttribute('no_remove_end_date');
  }
  public set noRemoveEndDate(value: boolean | cdktn.IResolvable) {
    this._noRemoveEndDate = value;
  }
  public resetNoRemoveEndDate() {
    this._noRemoveEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRemoveEndDateInput() {
    return this._noRemoveEndDate;
  }

  // remove_end_date - computed: true, optional: true, required: false
  private _removeEndDate?: boolean | cdktn.IResolvable; 
  public get removeEndDate() {
    return this.getBooleanAttribute('remove_end_date');
  }
  public set removeEndDate(value: boolean | cdktn.IResolvable) {
    this._removeEndDate = value;
  }
  public resetRemoveEndDate() {
    this._removeEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeEndDateInput() {
    return this._removeEndDate;
  }

  // tag_specifications - computed: true, optional: true, required: false
  private _tagSpecifications = new Ec2CapacityReservationFleetTagSpecificationsList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }
  public putTagSpecifications(value: Ec2CapacityReservationFleetTagSpecifications[] | cdktn.IResolvable) {
    this._tagSpecifications.internalValue = value;
  }
  public resetTagSpecifications() {
    this._tagSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSpecificationsInput() {
    return this._tagSpecifications.internalValue;
  }

  // tenancy - computed: true, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }

  // total_target_capacity - computed: true, optional: true, required: false
  private _totalTargetCapacity?: number; 
  public get totalTargetCapacity() {
    return this.getNumberAttribute('total_target_capacity');
  }
  public set totalTargetCapacity(value: number) {
    this._totalTargetCapacity = value;
  }
  public resetTotalTargetCapacity() {
    this._totalTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTargetCapacityInput() {
    return this._totalTargetCapacity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_strategy: cdktn.stringToTerraform(this._allocationStrategy),
      end_date: cdktn.stringToTerraform(this._endDate),
      instance_match_criteria: cdktn.stringToTerraform(this._instanceMatchCriteria),
      instance_type_specifications: cdktn.listMapper(ec2CapacityReservationFleetInstanceTypeSpecificationsToTerraform, false)(this._instanceTypeSpecifications.internalValue),
      no_remove_end_date: cdktn.booleanToTerraform(this._noRemoveEndDate),
      remove_end_date: cdktn.booleanToTerraform(this._removeEndDate),
      tag_specifications: cdktn.listMapper(ec2CapacityReservationFleetTagSpecificationsToTerraform, false)(this._tagSpecifications.internalValue),
      tenancy: cdktn.stringToTerraform(this._tenancy),
      total_target_capacity: cdktn.numberToTerraform(this._totalTargetCapacity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_strategy: {
        value: cdktn.stringToHclTerraform(this._allocationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date: {
        value: cdktn.stringToHclTerraform(this._endDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_match_criteria: {
        value: cdktn.stringToHclTerraform(this._instanceMatchCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type_specifications: {
        value: cdktn.listMapperHcl(ec2CapacityReservationFleetInstanceTypeSpecificationsToHclTerraform, false)(this._instanceTypeSpecifications.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Ec2CapacityReservationFleetInstanceTypeSpecificationsList",
      },
      no_remove_end_date: {
        value: cdktn.booleanToHclTerraform(this._noRemoveEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_end_date: {
        value: cdktn.booleanToHclTerraform(this._removeEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_specifications: {
        value: cdktn.listMapperHcl(ec2CapacityReservationFleetTagSpecificationsToHclTerraform, false)(this._tagSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2CapacityReservationFleetTagSpecificationsList",
      },
      tenancy: {
        value: cdktn.stringToHclTerraform(this._tenancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_target_capacity: {
        value: cdktn.numberToHclTerraform(this._totalTargetCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
