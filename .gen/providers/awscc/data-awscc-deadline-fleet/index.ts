// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDeadlineFleetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_fleet#id DataAwsccDeadlineFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDeadlineFleetCapabilitiesAmounts {
}

export function dataAwsccDeadlineFleetCapabilitiesAmountsToTerraform(struct?: DataAwsccDeadlineFleetCapabilitiesAmounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetCapabilitiesAmountsToHclTerraform(struct?: DataAwsccDeadlineFleetCapabilitiesAmounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDeadlineFleetCapabilitiesAmounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetCapabilitiesAmounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccDeadlineFleetCapabilitiesAmountsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference {
    return new DataAwsccDeadlineFleetCapabilitiesAmountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDeadlineFleetCapabilitiesAttributes {
}

export function dataAwsccDeadlineFleetCapabilitiesAttributesToTerraform(struct?: DataAwsccDeadlineFleetCapabilitiesAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetCapabilitiesAttributesToHclTerraform(struct?: DataAwsccDeadlineFleetCapabilitiesAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDeadlineFleetCapabilitiesAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetCapabilitiesAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccDeadlineFleetCapabilitiesAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference {
    return new DataAwsccDeadlineFleetCapabilitiesAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDeadlineFleetCapabilities {
}

export function dataAwsccDeadlineFleetCapabilitiesToTerraform(struct?: DataAwsccDeadlineFleetCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetCapabilitiesToHclTerraform(struct?: DataAwsccDeadlineFleetCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amounts - computed: true, optional: false, required: false
  private _amounts = new DataAwsccDeadlineFleetCapabilitiesAmountsList(this, "amounts", false);
  public get amounts() {
    return this._amounts;
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataAwsccDeadlineFleetCapabilitiesAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
}
export interface DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration {
}

export function dataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationToTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scale_out_workers_per_minute - computed: true, optional: false, required: false
  public get scaleOutWorkersPerMinute() {
    return this.getNumberAttribute('scale_out_workers_per_minute');
  }

  // standby_worker_count - computed: true, optional: false, required: false
  public get standbyWorkerCount() {
    return this.getNumberAttribute('standby_worker_count');
  }

  // worker_idle_duration_seconds - computed: true, optional: false, required: false
  public get workerIdleDurationSeconds() {
    return this.getNumberAttribute('worker_idle_duration_seconds');
  }
}
export interface DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount {
}

export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountToTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB {
}

export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBToTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts {
}

export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsToTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference {
    return new DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes {
}

export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesToTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference {
    return new DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB {
}

export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBToTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount {
}

export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountToTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities {
}

export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesToTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  private _acceleratorCount = new DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference(this, "accelerator_count");
  public get acceleratorCount() {
    return this._acceleratorCount;
  }

  // accelerator_total_memory_mi_b - computed: true, optional: false, required: false
  private _acceleratorTotalMemoryMiB = new DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference(this, "accelerator_total_memory_mi_b");
  public get acceleratorTotalMemoryMiB() {
    return this._acceleratorTotalMemoryMiB;
  }

  // accelerator_types - computed: true, optional: false, required: false
  public get acceleratorTypes() {
    return this.getListAttribute('accelerator_types');
  }

  // cpu_architecture_type - computed: true, optional: false, required: false
  public get cpuArchitectureType() {
    return this.getStringAttribute('cpu_architecture_type');
  }

  // custom_amounts - computed: true, optional: false, required: false
  private _customAmounts = new DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList(this, "custom_amounts", false);
  public get customAmounts() {
    return this._customAmounts;
  }

  // custom_attributes - computed: true, optional: false, required: false
  private _customAttributes = new DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }

  // memory_mi_b - computed: true, optional: false, required: false
  private _memoryMiB = new DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference(this, "memory_mi_b");
  public get memoryMiB() {
    return this._memoryMiB;
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // v_cpu_count - computed: true, optional: false, required: false
  private _vCpuCount = new DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference(this, "v_cpu_count");
  public get vCpuCount() {
    return this._vCpuCount;
  }
}
export interface DataAwsccDeadlineFleetConfigurationCustomerManaged {
}

export function dataAwsccDeadlineFleetConfigurationCustomerManagedToTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationCustomerManagedToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationCustomerManaged): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationCustomerManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationCustomerManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling_configuration - computed: true, optional: false, required: false
  private _autoScalingConfiguration = new DataAwsccDeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference(this, "auto_scaling_configuration");
  public get autoScalingConfiguration() {
    return this._autoScalingConfiguration;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // storage_profile_id - computed: true, optional: false, required: false
  public get storageProfileId() {
    return this.getStringAttribute('storage_profile_id');
  }

  // tag_propagation_mode - computed: true, optional: false, required: false
  public get tagPropagationMode() {
    return this.getStringAttribute('tag_propagation_mode');
  }

  // worker_capabilities - computed: true, optional: false, required: false
  private _workerCapabilities = new DataAwsccDeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference(this, "worker_capabilities");
  public get workerCapabilities() {
    return this._workerCapabilities;
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scale_out_workers_per_minute - computed: true, optional: false, required: false
  public get scaleOutWorkersPerMinute() {
    return this.getNumberAttribute('scale_out_workers_per_minute');
  }

  // standby_worker_count - computed: true, optional: false, required: false
  public get standbyWorkerCount() {
    return this.getNumberAttribute('standby_worker_count');
  }

  // worker_idle_duration_seconds - computed: true, optional: false, required: false
  public get workerIdleDurationSeconds() {
    return this.getNumberAttribute('worker_idle_duration_seconds');
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference {
    return new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  private _count = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference(this, "count");
  public get count() {
    return this._count;
  }

  // selections - computed: true, optional: false, required: false
  private _selections = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList(this, "selections", false);
  public get selections() {
    return this._selections;
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference {
    return new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference {
    return new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // size_gi_b - computed: true, optional: false, required: false
  public get sizeGiB() {
    return this.getNumberAttribute('size_gi_b');
  }

  // throughput_mi_b - computed: true, optional: false, required: false
  public get throughputMiB() {
    return this.getNumberAttribute('throughput_mi_b');
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_capabilities - computed: true, optional: false, required: false
  private _acceleratorCapabilities = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference(this, "accelerator_capabilities");
  public get acceleratorCapabilities() {
    return this._acceleratorCapabilities;
  }

  // allowed_instance_types - computed: true, optional: false, required: false
  public get allowedInstanceTypes() {
    return this.getListAttribute('allowed_instance_types');
  }

  // cpu_architecture_type - computed: true, optional: false, required: false
  public get cpuArchitectureType() {
    return this.getStringAttribute('cpu_architecture_type');
  }

  // custom_amounts - computed: true, optional: false, required: false
  private _customAmounts = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList(this, "custom_amounts", false);
  public get customAmounts() {
    return this._customAmounts;
  }

  // custom_attributes - computed: true, optional: false, required: false
  private _customAttributes = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }

  // excluded_instance_types - computed: true, optional: false, required: false
  public get excludedInstanceTypes() {
    return this.getListAttribute('excluded_instance_types');
  }

  // memory_mi_b - computed: true, optional: false, required: false
  private _memoryMiB = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference(this, "memory_mi_b");
  public get memoryMiB() {
    return this._memoryMiB;
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // root_ebs_volume - computed: true, optional: false, required: false
  private _rootEbsVolume = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference(this, "root_ebs_volume");
  public get rootEbsVolume() {
    return this._rootEbsVolume;
  }

  // v_cpu_count - computed: true, optional: false, required: false
  private _vCpuCount = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference(this, "v_cpu_count");
  public get vCpuCount() {
    return this._vCpuCount;
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // last_used_ttl_hours - computed: true, optional: false, required: false
  public get lastUsedTtlHours() {
    return this.getNumberAttribute('last_used_ttl_hours');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // size_gi_b - computed: true, optional: false, required: false
  public get sizeGiB() {
    return this.getNumberAttribute('size_gi_b');
  }

  // throughput_mi_b - computed: true, optional: false, required: false
  public get throughputMiB() {
    return this.getNumberAttribute('throughput_mi_b');
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_configuration_arns - computed: true, optional: false, required: false
  public get resourceConfigurationArns() {
    return this.getListAttribute('resource_configuration_arns');
  }
}
export interface DataAwsccDeadlineFleetConfigurationServiceManagedEc2 {
}

export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2ToTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationServiceManagedEc2ToHclTerraform(struct?: DataAwsccDeadlineFleetConfigurationServiceManagedEc2): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfigurationServiceManagedEc2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfigurationServiceManagedEc2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scaling_configuration - computed: true, optional: false, required: false
  private _autoScalingConfiguration = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference(this, "auto_scaling_configuration");
  public get autoScalingConfiguration() {
    return this._autoScalingConfiguration;
  }

  // instance_capabilities - computed: true, optional: false, required: false
  private _instanceCapabilities = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference(this, "instance_capabilities");
  public get instanceCapabilities() {
    return this._instanceCapabilities;
  }

  // instance_market_options - computed: true, optional: false, required: false
  private _instanceMarketOptions = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference(this, "instance_market_options");
  public get instanceMarketOptions() {
    return this._instanceMarketOptions;
  }

  // persistent_volume_configuration - computed: true, optional: false, required: false
  private _persistentVolumeConfiguration = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference(this, "persistent_volume_configuration");
  public get persistentVolumeConfiguration() {
    return this._persistentVolumeConfiguration;
  }

  // storage_profile_id - computed: true, optional: false, required: false
  public get storageProfileId() {
    return this.getStringAttribute('storage_profile_id');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  private _vpcConfiguration = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference(this, "vpc_configuration");
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
}
export interface DataAwsccDeadlineFleetConfiguration {
}

export function dataAwsccDeadlineFleetConfigurationToTerraform(struct?: DataAwsccDeadlineFleetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetConfigurationToHclTerraform(struct?: DataAwsccDeadlineFleetConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_managed - computed: true, optional: false, required: false
  private _customerManaged = new DataAwsccDeadlineFleetConfigurationCustomerManagedOutputReference(this, "customer_managed");
  public get customerManaged() {
    return this._customerManaged;
  }

  // service_managed_ec_2 - computed: true, optional: false, required: false
  private _serviceManagedEc2 = new DataAwsccDeadlineFleetConfigurationServiceManagedEc2OutputReference(this, "service_managed_ec_2");
  public get serviceManagedEc2() {
    return this._serviceManagedEc2;
  }
}
export interface DataAwsccDeadlineFleetHostConfiguration {
}

export function dataAwsccDeadlineFleetHostConfigurationToTerraform(struct?: DataAwsccDeadlineFleetHostConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetHostConfigurationToHclTerraform(struct?: DataAwsccDeadlineFleetHostConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetHostConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDeadlineFleetHostConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetHostConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // script_body - computed: true, optional: false, required: false
  public get scriptBody() {
    return this.getStringAttribute('script_body');
  }

  // script_timeout_seconds - computed: true, optional: false, required: false
  public get scriptTimeoutSeconds() {
    return this.getNumberAttribute('script_timeout_seconds');
  }
}
export interface DataAwsccDeadlineFleetTags {
}

export function dataAwsccDeadlineFleetTagsToTerraform(struct?: DataAwsccDeadlineFleetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDeadlineFleetTagsToHclTerraform(struct?: DataAwsccDeadlineFleetTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDeadlineFleetTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDeadlineFleetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDeadlineFleetTags | undefined) {
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

export class DataAwsccDeadlineFleetTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDeadlineFleetTagsOutputReference {
    return new DataAwsccDeadlineFleetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_fleet awscc_deadline_fleet}
*/
export class DataAwsccDeadlineFleet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_deadline_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDeadlineFleet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDeadlineFleet to import
  * @param importFromId The id of the existing DataAwsccDeadlineFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDeadlineFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_deadline_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/deadline_fleet awscc_deadline_fleet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDeadlineFleetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDeadlineFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_deadline_fleet',
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

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataAwsccDeadlineFleetCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccDeadlineFleetConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // farm_id - computed: true, optional: false, required: false
  public get farmId() {
    return this.getStringAttribute('farm_id');
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }

  // host_configuration - computed: true, optional: false, required: false
  private _hostConfiguration = new DataAwsccDeadlineFleetHostConfigurationOutputReference(this, "host_configuration");
  public get hostConfiguration() {
    return this._hostConfiguration;
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

  // max_worker_count - computed: true, optional: false, required: false
  public get maxWorkerCount() {
    return this.getNumberAttribute('max_worker_count');
  }

  // min_worker_count - computed: true, optional: false, required: false
  public get minWorkerCount() {
    return this.getNumberAttribute('min_worker_count');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDeadlineFleetTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // worker_count - computed: true, optional: false, required: false
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
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
