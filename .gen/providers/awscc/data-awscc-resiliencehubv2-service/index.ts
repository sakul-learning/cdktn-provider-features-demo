// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehubv2_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccResiliencehubv2ServiceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehubv2_service#id DataAwsccResiliencehubv2Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccResiliencehubv2ServiceAssertions {
}

export function dataAwsccResiliencehubv2ServiceAssertionsToTerraform(struct?: DataAwsccResiliencehubv2ServiceAssertions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceAssertionsToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceAssertions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceAssertionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubv2ServiceAssertions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceAssertions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataAwsccResiliencehubv2ServiceAssertionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubv2ServiceAssertionsOutputReference {
    return new DataAwsccResiliencehubv2ServiceAssertionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccResiliencehubv2ServiceAssociatedSystems {
}

export function dataAwsccResiliencehubv2ServiceAssociatedSystemsToTerraform(struct?: DataAwsccResiliencehubv2ServiceAssociatedSystems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceAssociatedSystemsToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceAssociatedSystems): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubv2ServiceAssociatedSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceAssociatedSystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // system_arn - computed: true, optional: false, required: false
  public get systemArn() {
    return this.getStringAttribute('system_arn');
  }

  // user_journey_ids - computed: true, optional: false, required: false
  public get userJourneyIds() {
    return this.getListAttribute('user_journey_ids');
  }
}

export class DataAwsccResiliencehubv2ServiceAssociatedSystemsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference {
    return new DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo {
}

export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloToTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach {
}

export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachToTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo {
}

export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoToTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto {
}

export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoToTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach {
}

export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachToTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo {
}

export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoToTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto {
}

export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoToTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccResiliencehubv2ServiceEffectivePolicyValues {
}

export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesToTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceEffectivePolicyValuesToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceEffectivePolicyValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceEffectivePolicyValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceEffectivePolicyValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_slo - computed: true, optional: false, required: false
  private _availabilitySlo = new DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference(this, "availability_slo");
  public get availabilitySlo() {
    return this._availabilitySlo;
  }

  // multi_az_dr_approach - computed: true, optional: false, required: false
  private _multiAzDrApproach = new DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference(this, "multi_az_dr_approach");
  public get multiAzDrApproach() {
    return this._multiAzDrApproach;
  }

  // multi_az_rpo - computed: true, optional: false, required: false
  private _multiAzRpo = new DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference(this, "multi_az_rpo");
  public get multiAzRpo() {
    return this._multiAzRpo;
  }

  // multi_az_rto - computed: true, optional: false, required: false
  private _multiAzRto = new DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference(this, "multi_az_rto");
  public get multiAzRto() {
    return this._multiAzRto;
  }

  // multi_region_dr_approach - computed: true, optional: false, required: false
  private _multiRegionDrApproach = new DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference(this, "multi_region_dr_approach");
  public get multiRegionDrApproach() {
    return this._multiRegionDrApproach;
  }

  // multi_region_rpo - computed: true, optional: false, required: false
  private _multiRegionRpo = new DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference(this, "multi_region_rpo");
  public get multiRegionRpo() {
    return this._multiRegionRpo;
  }

  // multi_region_rto - computed: true, optional: false, required: false
  private _multiRegionRto = new DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference(this, "multi_region_rto");
  public get multiRegionRto() {
    return this._multiRegionRto;
  }
}
export interface DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks {
}

export function dataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksToTerraform(struct?: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_arn - computed: true, optional: false, required: false
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
}
export interface DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags {
}

export function dataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsToTerraform(struct?: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference {
    return new DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration {
}

export function dataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationToTerraform(struct?: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cfn_stack_arn - computed: true, optional: false, required: false
  public get cfnStackArn() {
    return this.getStringAttribute('cfn_stack_arn');
  }

  // design_file_s3_url - computed: true, optional: false, required: false
  public get designFileS3Url() {
    return this.getStringAttribute('design_file_s3_url');
  }

  // eks - computed: true, optional: false, required: false
  private _eks = new DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference(this, "eks");
  public get eks() {
    return this._eks;
  }

  // resource_tags - computed: true, optional: false, required: false
  private _resourceTags = new DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }

  // tf_state_file_url - computed: true, optional: false, required: false
  public get tfStateFileUrl() {
    return this.getStringAttribute('tf_state_file_url');
  }
}
export interface DataAwsccResiliencehubv2ServiceInputSources {
}

export function dataAwsccResiliencehubv2ServiceInputSourcesToTerraform(struct?: DataAwsccResiliencehubv2ServiceInputSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceInputSourcesToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceInputSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceInputSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubv2ServiceInputSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceInputSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_configuration - computed: true, optional: false, required: false
  private _resourceConfiguration = new DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference(this, "resource_configuration");
  public get resourceConfiguration() {
    return this._resourceConfiguration;
  }
}

export class DataAwsccResiliencehubv2ServiceInputSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubv2ServiceInputSourcesOutputReference {
    return new DataAwsccResiliencehubv2ServiceInputSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns {
}

export function dataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsToTerraform(struct?: DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsToHclTerraform(struct?: DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_account_role_arn - computed: true, optional: false, required: false
  public get crossAccountRoleArn() {
    return this.getStringAttribute('cross_account_role_arn');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
}

export class DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference {
    return new DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccResiliencehubv2ServicePermissionModel {
}

export function dataAwsccResiliencehubv2ServicePermissionModelToTerraform(struct?: DataAwsccResiliencehubv2ServicePermissionModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServicePermissionModelToHclTerraform(struct?: DataAwsccResiliencehubv2ServicePermissionModel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServicePermissionModelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServicePermissionModel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServicePermissionModel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cross_account_role_arns - computed: true, optional: false, required: false
  private _crossAccountRoleArns = new DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList(this, "cross_account_role_arns", false);
  public get crossAccountRoleArns() {
    return this._crossAccountRoleArns;
  }

  // invoker_role_name - computed: true, optional: false, required: false
  public get invokerRoleName() {
    return this.getStringAttribute('invoker_role_name');
  }
}
export interface DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3 {
}

export function dataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3ToTerraform(struct?: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3ToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_owner - computed: true, optional: false, required: false
  public get bucketOwner() {
    return this.getStringAttribute('bucket_owner');
  }

  // bucket_path - computed: true, optional: false, required: false
  public get bucketPath() {
    return this.getStringAttribute('bucket_path');
  }
}
export interface DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput {
}

export function dataAwsccResiliencehubv2ServiceReportConfigurationReportOutputToTerraform(struct?: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceReportConfigurationReportOutputToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}

export class DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference {
    return new DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccResiliencehubv2ServiceReportConfiguration {
}

export function dataAwsccResiliencehubv2ServiceReportConfigurationToTerraform(struct?: DataAwsccResiliencehubv2ServiceReportConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceReportConfigurationToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceReportConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccResiliencehubv2ServiceReportConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceReportConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // report_output - computed: true, optional: false, required: false
  private _reportOutput = new DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList(this, "report_output", false);
  public get reportOutput() {
    return this._reportOutput;
  }
}
export interface DataAwsccResiliencehubv2ServiceTags {
}

export function dataAwsccResiliencehubv2ServiceTagsToTerraform(struct?: DataAwsccResiliencehubv2ServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccResiliencehubv2ServiceTagsToHclTerraform(struct?: DataAwsccResiliencehubv2ServiceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccResiliencehubv2ServiceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccResiliencehubv2ServiceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccResiliencehubv2ServiceTags | undefined) {
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

export class DataAwsccResiliencehubv2ServiceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccResiliencehubv2ServiceTagsOutputReference {
    return new DataAwsccResiliencehubv2ServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehubv2_service awscc_resiliencehubv2_service}
*/
export class DataAwsccResiliencehubv2Service extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_resiliencehubv2_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccResiliencehubv2Service resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccResiliencehubv2Service to import
  * @param importFromId The id of the existing DataAwsccResiliencehubv2Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccResiliencehubv2Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_resiliencehubv2_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/resiliencehubv2_service awscc_resiliencehubv2_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccResiliencehubv2ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccResiliencehubv2ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_resiliencehubv2_service',
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

  // assertions - computed: true, optional: false, required: false
  private _assertions = new DataAwsccResiliencehubv2ServiceAssertionsList(this, "assertions", false);
  public get assertions() {
    return this._assertions;
  }

  // associated_systems - computed: true, optional: false, required: false
  private _associatedSystems = new DataAwsccResiliencehubv2ServiceAssociatedSystemsList(this, "associated_systems", false);
  public get associatedSystems() {
    return this._associatedSystems;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dependency_discovery - computed: true, optional: false, required: false
  public get dependencyDiscovery() {
    return this.getStringAttribute('dependency_discovery');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // effective_policy_values - computed: true, optional: false, required: false
  private _effectivePolicyValues = new DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference(this, "effective_policy_values");
  public get effectivePolicyValues() {
    return this._effectivePolicyValues;
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

  // input_sources - computed: true, optional: false, required: false
  private _inputSources = new DataAwsccResiliencehubv2ServiceInputSourcesList(this, "input_sources", false);
  public get inputSources() {
    return this._inputSources;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permission_model - computed: true, optional: false, required: false
  private _permissionModel = new DataAwsccResiliencehubv2ServicePermissionModelOutputReference(this, "permission_model");
  public get permissionModel() {
    return this._permissionModel;
  }

  // policy_arn - computed: true, optional: false, required: false
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // report_configuration - computed: true, optional: false, required: false
  private _reportConfiguration = new DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference(this, "report_configuration");
  public get reportConfiguration() {
    return this._reportConfiguration;
  }

  // service_arn - computed: true, optional: false, required: false
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccResiliencehubv2ServiceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
