// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3_storage_lens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccS3StorageLensConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3_storage_lens#id DataAwsccS3StorageLens#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // max_depth - computed: true, optional: false, required: false
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }

  // min_storage_bytes_percentage - computed: true, optional: false, required: false
  public get minStorageBytesPercentage() {
    return this.getNumberAttribute('min_storage_bytes_percentage');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // selection_criteria - computed: true, optional: false, required: false
  private _selectionCriteria = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference(this, "selection_criteria");
  public get selectionCriteria() {
    return this._selectionCriteria;
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // storage_metrics - computed: true, optional: false, required: false
  private _storageMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference(this, "storage_metrics");
  public get storageMetrics() {
    return this._storageMetrics;
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activity_metrics - computed: true, optional: false, required: false
  private _activityMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference(this, "activity_metrics");
  public get activityMetrics() {
    return this._activityMetrics;
  }

  // advanced_cost_optimization_metrics - computed: true, optional: false, required: false
  private _advancedCostOptimizationMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference(this, "advanced_cost_optimization_metrics");
  public get advancedCostOptimizationMetrics() {
    return this._advancedCostOptimizationMetrics;
  }

  // advanced_data_protection_metrics - computed: true, optional: false, required: false
  private _advancedDataProtectionMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference(this, "advanced_data_protection_metrics");
  public get advancedDataProtectionMetrics() {
    return this._advancedDataProtectionMetrics;
  }

  // advanced_performance_metrics - computed: true, optional: false, required: false
  private _advancedPerformanceMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference(this, "advanced_performance_metrics");
  public get advancedPerformanceMetrics() {
    return this._advancedPerformanceMetrics;
  }

  // detailed_status_codes_metrics - computed: true, optional: false, required: false
  private _detailedStatusCodesMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference(this, "detailed_status_codes_metrics");
  public get detailedStatusCodesMetrics() {
    return this._detailedStatusCodesMetrics;
  }

  // prefix_level - computed: true, optional: false, required: false
  private _prefixLevel = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference(this, "prefix_level");
  public get prefixLevel() {
    return this._prefixLevel;
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude'));
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktn.Fn.tolist(this.getListAttribute('include'));
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // storage_lens_group_selection_criteria - computed: true, optional: false, required: false
  private _storageLensGroupSelectionCriteria = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference(this, "storage_lens_group_selection_criteria");
  public get storageLensGroupSelectionCriteria() {
    return this._storageLensGroupSelectionCriteria;
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAccountLevel {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAccountLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAccountLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activity_metrics - computed: true, optional: false, required: false
  private _activityMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference(this, "activity_metrics");
  public get activityMetrics() {
    return this._activityMetrics;
  }

  // advanced_cost_optimization_metrics - computed: true, optional: false, required: false
  private _advancedCostOptimizationMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference(this, "advanced_cost_optimization_metrics");
  public get advancedCostOptimizationMetrics() {
    return this._advancedCostOptimizationMetrics;
  }

  // advanced_data_protection_metrics - computed: true, optional: false, required: false
  private _advancedDataProtectionMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference(this, "advanced_data_protection_metrics");
  public get advancedDataProtectionMetrics() {
    return this._advancedDataProtectionMetrics;
  }

  // advanced_performance_metrics - computed: true, optional: false, required: false
  private _advancedPerformanceMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference(this, "advanced_performance_metrics");
  public get advancedPerformanceMetrics() {
    return this._advancedPerformanceMetrics;
  }

  // bucket_level - computed: true, optional: false, required: false
  private _bucketLevel = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference(this, "bucket_level");
  public get bucketLevel() {
    return this._bucketLevel;
  }

  // detailed_status_codes_metrics - computed: true, optional: false, required: false
  private _detailedStatusCodesMetrics = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference(this, "detailed_status_codes_metrics");
  public get detailedStatusCodesMetrics() {
    return this._detailedStatusCodesMetrics;
  }

  // storage_lens_group_level - computed: true, optional: false, required: false
  private _storageLensGroupLevel = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference(this, "storage_lens_group_level");
  public get storageLensGroupLevel() {
    return this._storageLensGroupLevel;
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationAwsOrg {
}

export function dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAwsOrg): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAwsOrg): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationAwsOrg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationAwsOrg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics {
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms {
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption {
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssekms - computed: true, optional: false, required: false
  private _ssekms = new DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference(this, "ssekms");
  public get ssekms() {
    return this._ssekms;
  }

  // sses3 - computed: true, optional: false, required: false
  public get sses3() {
    return this.getStringAttribute('sses3');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination {
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // output_schema_version - computed: true, optional: false, required: false
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms {
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption {
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssekms - computed: true, optional: false, required: false
  private _ssekms = new DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(this, "ssekms");
  public get ssekms() {
    return this._ssekms;
  }

  // sses3 - computed: true, optional: false, required: false
  public get sses3() {
    return this.getStringAttribute('sses3');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination {
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationDataExport {
}

export function dataAwsccS3StorageLensStorageLensConfigurationDataExportToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationDataExportToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationDataExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationDataExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_metrics - computed: true, optional: false, required: false
  private _cloudwatchMetrics = new DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference(this, "cloudwatch_metrics");
  public get cloudwatchMetrics() {
    return this._cloudwatchMetrics;
  }

  // s3_bucket_destination - computed: true, optional: false, required: false
  private _s3BucketDestination = new DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }

  // storage_lens_table_destination - computed: true, optional: false, required: false
  private _storageLensTableDestination = new DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference(this, "storage_lens_table_destination");
  public get storageLensTableDestination() {
    return this._storageLensTableDestination;
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationExclude {
}

export function dataAwsccS3StorageLensStorageLensConfigurationExcludeToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExclude): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationExcludeToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExclude): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationExclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationExclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  public get buckets() {
    return cdktn.Fn.tolist(this.getListAttribute('buckets'));
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms {
}

export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption {
}

export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssekms - computed: true, optional: false, required: false
  private _ssekms = new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference(this, "ssekms");
  public get ssekms() {
    return this._ssekms;
  }

  // sses3 - computed: true, optional: false, required: false
  public get sses3() {
    return this.getStringAttribute('sses3');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination {
}

export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // output_schema_version - computed: true, optional: false, required: false
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms {
}

export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption {
}

export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssekms - computed: true, optional: false, required: false
  private _ssekms = new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(this, "ssekms");
  public get ssekms() {
    return this._ssekms;
  }

  // sses3 - computed: true, optional: false, required: false
  public get sses3() {
    return this.getStringAttribute('sses3');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination {
}

export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport {
}

export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket_destination - computed: true, optional: false, required: false
  private _s3BucketDestination = new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }

  // storage_lens_table_destination - computed: true, optional: false, required: false
  private _storageLensTableDestination = new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference(this, "storage_lens_table_destination");
  public get storageLensTableDestination() {
    return this._storageLensTableDestination;
  }
}
export interface DataAwsccS3StorageLensStorageLensConfigurationInclude {
}

export function dataAwsccS3StorageLensStorageLensConfigurationIncludeToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationInclude): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationIncludeToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationInclude): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfigurationInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfigurationInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  public get buckets() {
    return cdktn.Fn.tolist(this.getListAttribute('buckets'));
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
}
export interface DataAwsccS3StorageLensStorageLensConfiguration {
}

export function dataAwsccS3StorageLensStorageLensConfigurationToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensStorageLensConfigurationToHclTerraform(struct?: DataAwsccS3StorageLensStorageLensConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensStorageLensConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccS3StorageLensStorageLensConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensStorageLensConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_level - computed: true, optional: false, required: false
  private _accountLevel = new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference(this, "account_level");
  public get accountLevel() {
    return this._accountLevel;
  }

  // aws_org - computed: true, optional: false, required: false
  private _awsOrg = new DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference(this, "aws_org");
  public get awsOrg() {
    return this._awsOrg;
  }

  // data_export - computed: true, optional: false, required: false
  private _dataExport = new DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference(this, "data_export");
  public get dataExport() {
    return this._dataExport;
  }

  // exclude - computed: true, optional: false, required: false
  private _exclude = new DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }

  // expanded_prefixes_data_export - computed: true, optional: false, required: false
  private _expandedPrefixesDataExport = new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference(this, "expanded_prefixes_data_export");
  public get expandedPrefixesDataExport() {
    return this._expandedPrefixesDataExport;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include - computed: true, optional: false, required: false
  private _include = new DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // prefix_delimiter - computed: true, optional: false, required: false
  public get prefixDelimiter() {
    return this.getStringAttribute('prefix_delimiter');
  }

  // storage_lens_arn - computed: true, optional: false, required: false
  public get storageLensArn() {
    return this.getStringAttribute('storage_lens_arn');
  }
}
export interface DataAwsccS3StorageLensTags {
}

export function dataAwsccS3StorageLensTagsToTerraform(struct?: DataAwsccS3StorageLensTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccS3StorageLensTagsToHclTerraform(struct?: DataAwsccS3StorageLensTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccS3StorageLensTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccS3StorageLensTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccS3StorageLensTags | undefined) {
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

export class DataAwsccS3StorageLensTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccS3StorageLensTagsOutputReference {
    return new DataAwsccS3StorageLensTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3_storage_lens awscc_s3_storage_lens}
*/
export class DataAwsccS3StorageLens extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3_storage_lens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccS3StorageLens resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccS3StorageLens to import
  * @param importFromId The id of the existing DataAwsccS3StorageLens that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3_storage_lens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccS3StorageLens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_storage_lens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/s3_storage_lens awscc_s3_storage_lens} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3StorageLensConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3StorageLensConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_storage_lens',
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

  // storage_lens_configuration - computed: true, optional: false, required: false
  private _storageLensConfiguration = new DataAwsccS3StorageLensStorageLensConfigurationOutputReference(this, "storage_lens_configuration");
  public get storageLensConfiguration() {
    return this._storageLensConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccS3StorageLensTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
