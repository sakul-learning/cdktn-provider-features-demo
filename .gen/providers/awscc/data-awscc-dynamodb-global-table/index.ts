// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dynamodb_global_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDynamodbGlobalTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dynamodb_global_table#id DataAwsccDynamodbGlobalTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDynamodbGlobalTableAttributeDefinitions {
}

export function dataAwsccDynamodbGlobalTableAttributeDefinitionsToTerraform(struct?: DataAwsccDynamodbGlobalTableAttributeDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableAttributeDefinitionsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableAttributeDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableAttributeDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableAttributeDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
}

export class DataAwsccDynamodbGlobalTableAttributeDefinitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference {
    return new DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference {
    return new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return cdktn.Fn.tolist(this.getListAttribute('non_key_attributes'));
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_read_request_units - computed: true, optional: false, required: false
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_capacity_units - computed: true, optional: false, required: false
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_units_per_second - computed: true, optional: false, required: false
  public get readUnitsPerSecond() {
    return this.getNumberAttribute('read_units_per_second');
  }

  // write_units_per_second - computed: true, optional: false, required: false
  public get writeUnitsPerSecond() {
    return this.getNumberAttribute('write_units_per_second');
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_write_request_units - computed: true, optional: false, required: false
  public get maxWriteRequestUnits() {
    return this.getNumberAttribute('max_write_request_units');
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // scale_in_cooldown - computed: true, optional: false, required: false
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }

  // scale_out_cooldown - computed: true, optional: false, required: false
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seed_capacity - computed: true, optional: false, required: false
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
  private _targetTrackingScalingPolicyConfiguration = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // write_capacity_auto_scaling_settings - computed: true, optional: false, required: false
  private _writeCapacityAutoScalingSettings = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(this, "write_capacity_auto_scaling_settings");
  public get writeCapacityAutoScalingSettings() {
    return this._writeCapacityAutoScalingSettings;
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes {
}

export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalSecondaryIndexesToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // key_schema - computed: true, optional: false, required: false
  private _keySchema = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }

  // projection - computed: true, optional: false, required: false
  private _projection = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }

  // read_on_demand_throughput_settings - computed: true, optional: false, required: false
  private _readOnDemandThroughputSettings = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(this, "read_on_demand_throughput_settings");
  public get readOnDemandThroughputSettings() {
    return this._readOnDemandThroughputSettings;
  }

  // read_provisioned_throughput_settings - computed: true, optional: false, required: false
  private _readProvisionedThroughputSettings = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(this, "read_provisioned_throughput_settings");
  public get readProvisionedThroughputSettings() {
    return this._readProvisionedThroughputSettings;
  }

  // warm_throughput - computed: true, optional: false, required: false
  private _warmThroughput = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference(this, "warm_throughput");
  public get warmThroughput() {
    return this._warmThroughput;
  }

  // write_on_demand_throughput_settings - computed: true, optional: false, required: false
  private _writeOnDemandThroughputSettings = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference(this, "write_on_demand_throughput_settings");
  public get writeOnDemandThroughputSettings() {
    return this._writeOnDemandThroughputSettings;
  }

  // write_provisioned_throughput_settings - computed: true, optional: false, required: false
  private _writeProvisionedThroughputSettings = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference(this, "write_provisioned_throughput_settings");
  public get writeProvisionedThroughputSettings() {
    return this._writeProvisionedThroughputSettings;
  }
}

export class DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference {
    return new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableGlobalTableWitnesses {
}

export function dataAwsccDynamodbGlobalTableGlobalTableWitnessesToTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalTableWitnesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableGlobalTableWitnessesToHclTerraform(struct?: DataAwsccDynamodbGlobalTableGlobalTableWitnesses): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableGlobalTableWitnesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableGlobalTableWitnesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataAwsccDynamodbGlobalTableGlobalTableWitnessesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference {
    return new DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableKeySchema {
}

export function dataAwsccDynamodbGlobalTableKeySchemaToTerraform(struct?: DataAwsccDynamodbGlobalTableKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableKeySchemaToHclTerraform(struct?: DataAwsccDynamodbGlobalTableKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableKeySchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableKeySchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableKeySchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export class DataAwsccDynamodbGlobalTableKeySchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableKeySchemaOutputReference {
    return new DataAwsccDynamodbGlobalTableKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema {
}

export function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaToHclTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference {
    return new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection {
}

export function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionToHclTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return cdktn.Fn.tolist(this.getListAttribute('non_key_attributes'));
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
}
export interface DataAwsccDynamodbGlobalTableLocalSecondaryIndexes {
}

export function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableLocalSecondaryIndexesToHclTerraform(struct?: DataAwsccDynamodbGlobalTableLocalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableLocalSecondaryIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableLocalSecondaryIndexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // key_schema - computed: true, optional: false, required: false
  private _keySchema = new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }

  // projection - computed: true, optional: false, required: false
  private _projection = new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }
}

export class DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference {
    return new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_read_request_units - computed: true, optional: false, required: false
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }
}
export interface DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_capacity_units - computed: true, optional: false, required: false
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification {
}

export function dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification {
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_read_request_units - computed: true, optional: false, required: false
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // scale_in_cooldown - computed: true, optional: false, required: false
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }

  // scale_out_cooldown - computed: true, optional: false, required: false
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings {
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seed_capacity - computed: true, optional: false, required: false
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
  private _targetTrackingScalingPolicyConfiguration = new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_capacity_auto_scaling_settings - computed: true, optional: false, required: false
  private _readCapacityAutoScalingSettings = new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(this, "read_capacity_auto_scaling_settings");
  public get readCapacityAutoScalingSettings() {
    return this._readCapacityAutoScalingSettings;
  }

  // read_capacity_units - computed: true, optional: false, required: false
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes {
}

export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contributor_insights_specification - computed: true, optional: false, required: false
  private _contributorInsightsSpecification = new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(this, "contributor_insights_specification");
  public get contributorInsightsSpecification() {
    return this._contributorInsightsSpecification;
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // read_on_demand_throughput_settings - computed: true, optional: false, required: false
  private _readOnDemandThroughputSettings = new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(this, "read_on_demand_throughput_settings");
  public get readOnDemandThroughputSettings() {
    return this._readOnDemandThroughputSettings;
  }

  // read_provisioned_throughput_settings - computed: true, optional: false, required: false
  private _readProvisionedThroughputSettings = new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(this, "read_provisioned_throughput_settings");
  public get readProvisionedThroughputSettings() {
    return this._readProvisionedThroughputSettings;
  }
}

export class DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference {
    return new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification {
}

export function dataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approximate_creation_date_time_precision - computed: true, optional: false, required: false
  public get approximateCreationDateTimePrecision() {
    return this.getStringAttribute('approximate_creation_date_time_precision');
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification {
}

export function dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // point_in_time_recovery_enabled - computed: true, optional: false, required: false
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }

  // recovery_period_in_days - computed: true, optional: false, required: false
  public get recoveryPeriodInDays() {
    return this.getNumberAttribute('recovery_period_in_days');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_read_request_units - computed: true, optional: false, required: false
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
}

export function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // scale_in_cooldown - computed: true, optional: false, required: false
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }

  // scale_out_cooldown - computed: true, optional: false, required: false
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings {
}

export function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seed_capacity - computed: true, optional: false, required: false
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
  private _targetTrackingScalingPolicyConfiguration = new DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_capacity_auto_scaling_settings - computed: true, optional: false, required: false
  private _readCapacityAutoScalingSettings = new DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(this, "read_capacity_auto_scaling_settings");
  public get readCapacityAutoScalingSettings() {
    return this._readCapacityAutoScalingSettings;
  }

  // read_capacity_units - computed: true, optional: false, required: false
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy {
}

export function dataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_document - computed: true, optional: false, required: false
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification {
}

export function dataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_policy - computed: true, optional: false, required: false
  private _resourcePolicy = new DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasResourcePolicy {
}

export function dataAwsccDynamodbGlobalTableReplicasResourcePolicyToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasResourcePolicyToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasResourcePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasResourcePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_document - computed: true, optional: false, required: false
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasSseSpecification {
}

export function dataAwsccDynamodbGlobalTableReplicasSseSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasSseSpecificationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasSseSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasSseSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_master_key_id - computed: true, optional: false, required: false
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
}
export interface DataAwsccDynamodbGlobalTableReplicasTags {
}

export function dataAwsccDynamodbGlobalTableReplicasTagsToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasTagsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicasTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicasTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicasTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccDynamodbGlobalTableReplicasTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableReplicasTagsOutputReference {
    return new DataAwsccDynamodbGlobalTableReplicasTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableReplicas {
}

export function dataAwsccDynamodbGlobalTableReplicasToTerraform(struct?: DataAwsccDynamodbGlobalTableReplicas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableReplicasToHclTerraform(struct?: DataAwsccDynamodbGlobalTableReplicas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableReplicasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contributor_insights_specification - computed: true, optional: false, required: false
  private _contributorInsightsSpecification = new DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference(this, "contributor_insights_specification");
  public get contributorInsightsSpecification() {
    return this._contributorInsightsSpecification;
  }

  // deletion_protection_enabled - computed: true, optional: false, required: false
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }

  // global_secondary_indexes - computed: true, optional: false, required: false
  private _globalSecondaryIndexes = new DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList(this, "global_secondary_indexes", true);
  public get globalSecondaryIndexes() {
    return this._globalSecondaryIndexes;
  }

  // global_table_settings_replication_mode - computed: true, optional: false, required: false
  public get globalTableSettingsReplicationMode() {
    return this.getStringAttribute('global_table_settings_replication_mode');
  }

  // kinesis_stream_specification - computed: true, optional: false, required: false
  private _kinesisStreamSpecification = new DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference(this, "kinesis_stream_specification");
  public get kinesisStreamSpecification() {
    return this._kinesisStreamSpecification;
  }

  // point_in_time_recovery_specification - computed: true, optional: false, required: false
  private _pointInTimeRecoverySpecification = new DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference(this, "point_in_time_recovery_specification");
  public get pointInTimeRecoverySpecification() {
    return this._pointInTimeRecoverySpecification;
  }

  // read_on_demand_throughput_settings - computed: true, optional: false, required: false
  private _readOnDemandThroughputSettings = new DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference(this, "read_on_demand_throughput_settings");
  public get readOnDemandThroughputSettings() {
    return this._readOnDemandThroughputSettings;
  }

  // read_provisioned_throughput_settings - computed: true, optional: false, required: false
  private _readProvisionedThroughputSettings = new DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference(this, "read_provisioned_throughput_settings");
  public get readProvisionedThroughputSettings() {
    return this._readProvisionedThroughputSettings;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replica_stream_specification - computed: true, optional: false, required: false
  private _replicaStreamSpecification = new DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference(this, "replica_stream_specification");
  public get replicaStreamSpecification() {
    return this._replicaStreamSpecification;
  }

  // resource_policy - computed: true, optional: false, required: false
  private _resourcePolicy = new DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }

  // sse_specification - computed: true, optional: false, required: false
  private _sseSpecification = new DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }

  // table_class - computed: true, optional: false, required: false
  public get tableClass() {
    return this.getStringAttribute('table_class');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDynamodbGlobalTableReplicasTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataAwsccDynamodbGlobalTableReplicasList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbGlobalTableReplicasOutputReference {
    return new DataAwsccDynamodbGlobalTableReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbGlobalTableSseSpecification {
}

export function dataAwsccDynamodbGlobalTableSseSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableSseSpecificationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableSseSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableSseSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableSseSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sse_enabled - computed: true, optional: false, required: false
  public get sseEnabled() {
    return this.getBooleanAttribute('sse_enabled');
  }

  // sse_type - computed: true, optional: false, required: false
  public get sseType() {
    return this.getStringAttribute('sse_type');
  }
}
export interface DataAwsccDynamodbGlobalTableStreamSpecification {
}

export function dataAwsccDynamodbGlobalTableStreamSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableStreamSpecificationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableStreamSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableStreamSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stream_view_type - computed: true, optional: false, required: false
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
  }
}
export interface DataAwsccDynamodbGlobalTableTimeToLiveSpecification {
}

export function dataAwsccDynamodbGlobalTableTimeToLiveSpecificationToTerraform(struct?: DataAwsccDynamodbGlobalTableTimeToLiveSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableTimeToLiveSpecificationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableTimeToLiveSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableTimeToLiveSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableTimeToLiveSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccDynamodbGlobalTableWarmThroughput {
}

export function dataAwsccDynamodbGlobalTableWarmThroughputToTerraform(struct?: DataAwsccDynamodbGlobalTableWarmThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableWarmThroughputToHclTerraform(struct?: DataAwsccDynamodbGlobalTableWarmThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableWarmThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableWarmThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableWarmThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_units_per_second - computed: true, optional: false, required: false
  public get readUnitsPerSecond() {
    return this.getNumberAttribute('read_units_per_second');
  }

  // write_units_per_second - computed: true, optional: false, required: false
  public get writeUnitsPerSecond() {
    return this.getNumberAttribute('write_units_per_second');
  }
}
export interface DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_write_request_units - computed: true, optional: false, required: false
  public get maxWriteRequestUnits() {
    return this.getNumberAttribute('max_write_request_units');
  }
}
export interface DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration {
}

export function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_scale_in - computed: true, optional: false, required: false
  public get disableScaleIn() {
    return this.getBooleanAttribute('disable_scale_in');
  }

  // scale_in_cooldown - computed: true, optional: false, required: false
  public get scaleInCooldown() {
    return this.getNumberAttribute('scale_in_cooldown');
  }

  // scale_out_cooldown - computed: true, optional: false, required: false
  public get scaleOutCooldown() {
    return this.getNumberAttribute('scale_out_cooldown');
  }

  // target_value - computed: true, optional: false, required: false
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
}
export interface DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings {
}

export function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // seed_capacity - computed: true, optional: false, required: false
  public get seedCapacity() {
    return this.getNumberAttribute('seed_capacity');
  }

  // target_tracking_scaling_policy_configuration - computed: true, optional: false, required: false
  private _targetTrackingScalingPolicyConfiguration = new DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(this, "target_tracking_scaling_policy_configuration");
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
}
export interface DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings {
}

export function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsToTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsToHclTerraform(struct?: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // write_capacity_auto_scaling_settings - computed: true, optional: false, required: false
  private _writeCapacityAutoScalingSettings = new DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(this, "write_capacity_auto_scaling_settings");
  public get writeCapacityAutoScalingSettings() {
    return this._writeCapacityAutoScalingSettings;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dynamodb_global_table awscc_dynamodb_global_table}
*/
export class DataAwsccDynamodbGlobalTable extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dynamodb_global_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDynamodbGlobalTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDynamodbGlobalTable to import
  * @param importFromId The id of the existing DataAwsccDynamodbGlobalTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dynamodb_global_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDynamodbGlobalTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dynamodb_global_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/dynamodb_global_table awscc_dynamodb_global_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDynamodbGlobalTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDynamodbGlobalTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dynamodb_global_table',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // attribute_definitions - computed: true, optional: false, required: false
  private _attributeDefinitions = new DataAwsccDynamodbGlobalTableAttributeDefinitionsList(this, "attribute_definitions", true);
  public get attributeDefinitions() {
    return this._attributeDefinitions;
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }

  // global_secondary_indexes - computed: true, optional: false, required: false
  private _globalSecondaryIndexes = new DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList(this, "global_secondary_indexes", true);
  public get globalSecondaryIndexes() {
    return this._globalSecondaryIndexes;
  }

  // global_table_source_arn - computed: true, optional: false, required: false
  public get globalTableSourceArn() {
    return this.getStringAttribute('global_table_source_arn');
  }

  // global_table_witnesses - computed: true, optional: false, required: false
  private _globalTableWitnesses = new DataAwsccDynamodbGlobalTableGlobalTableWitnessesList(this, "global_table_witnesses", true);
  public get globalTableWitnesses() {
    return this._globalTableWitnesses;
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

  // key_schema - computed: true, optional: false, required: false
  private _keySchema = new DataAwsccDynamodbGlobalTableKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }

  // local_secondary_indexes - computed: true, optional: false, required: false
  private _localSecondaryIndexes = new DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList(this, "local_secondary_indexes", true);
  public get localSecondaryIndexes() {
    return this._localSecondaryIndexes;
  }

  // multi_region_consistency - computed: true, optional: false, required: false
  public get multiRegionConsistency() {
    return this.getStringAttribute('multi_region_consistency');
  }

  // read_on_demand_throughput_settings - computed: true, optional: false, required: false
  private _readOnDemandThroughputSettings = new DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference(this, "read_on_demand_throughput_settings");
  public get readOnDemandThroughputSettings() {
    return this._readOnDemandThroughputSettings;
  }

  // read_provisioned_throughput_settings - computed: true, optional: false, required: false
  private _readProvisionedThroughputSettings = new DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference(this, "read_provisioned_throughput_settings");
  public get readProvisionedThroughputSettings() {
    return this._readProvisionedThroughputSettings;
  }

  // replicas - computed: true, optional: false, required: false
  private _replicas = new DataAwsccDynamodbGlobalTableReplicasList(this, "replicas", true);
  public get replicas() {
    return this._replicas;
  }

  // sse_specification - computed: true, optional: false, required: false
  private _sseSpecification = new DataAwsccDynamodbGlobalTableSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_specification - computed: true, optional: false, required: false
  private _streamSpecification = new DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference(this, "stream_specification");
  public get streamSpecification() {
    return this._streamSpecification;
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // time_to_live_specification - computed: true, optional: false, required: false
  private _timeToLiveSpecification = new DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference(this, "time_to_live_specification");
  public get timeToLiveSpecification() {
    return this._timeToLiveSpecification;
  }

  // warm_throughput - computed: true, optional: false, required: false
  private _warmThroughput = new DataAwsccDynamodbGlobalTableWarmThroughputOutputReference(this, "warm_throughput");
  public get warmThroughput() {
    return this._warmThroughput;
  }

  // write_on_demand_throughput_settings - computed: true, optional: false, required: false
  private _writeOnDemandThroughputSettings = new DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference(this, "write_on_demand_throughput_settings");
  public get writeOnDemandThroughputSettings() {
    return this._writeOnDemandThroughputSettings;
  }

  // write_provisioned_throughput_settings - computed: true, optional: false, required: false
  private _writeProvisionedThroughputSettings = new DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference(this, "write_provisioned_throughput_settings");
  public get writeProvisionedThroughputSettings() {
    return this._writeProvisionedThroughputSettings;
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
