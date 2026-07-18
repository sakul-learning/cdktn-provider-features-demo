// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3StorageLensConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the details of Amazon S3 Storage Lens configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#storage_lens_configuration S3StorageLens#storage_lens_configuration}
  */
  readonly storageLensConfiguration: S3StorageLensStorageLensConfiguration;
  /**
  * A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#tags S3StorageLens#tags}
  */
  readonly tags?: S3StorageLensTags[] | cdktn.IResolvable;
}
export interface S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics {
  /**
  * Specifies whether activity metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics {
  /**
  * Specifies whether advanced cost optimization metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics {
  /**
  * Specifies whether advanced data protection metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics {
  /**
  * Specifies whether the Advanced Performance Metrics is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
  /**
  * Specifies whether activity metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics {
  /**
  * Specifies whether advanced cost optimization metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics {
  /**
  * Specifies whether advanced data protection metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics {
  /**
  * Specifies whether the Advanced Performance Metrics is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics {
  /**
  * Specifies whether detailed status codes metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
  /**
  * Delimiter to divide S3 key into hierarchy of prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#delimiter S3StorageLens#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#max_depth S3StorageLens#max_depth}
  */
  readonly maxDepth?: number;
  /**
  * The minimum storage bytes threshold for the prefixes to be included in the analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#min_storage_bytes_percentage S3StorageLens#min_storage_bytes_percentage}
  */
  readonly minStorageBytesPercentage?: number;
}

export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    max_depth: cdktn.numberToTerraform(struct!.maxDepth),
    min_storage_bytes_percentage: cdktn.numberToTerraform(struct!.minStorageBytesPercentage),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_depth: {
      value: cdktn.numberToHclTerraform(struct!.maxDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_storage_bytes_percentage: {
      value: cdktn.numberToHclTerraform(struct!.minStorageBytesPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._maxDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDepth = this._maxDepth;
    }
    if (this._minStorageBytesPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.minStorageBytesPercentage = this._minStorageBytesPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._maxDepth = undefined;
      this._minStorageBytesPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._maxDepth = value.maxDepth;
      this._minStorageBytesPercentage = value.minStorageBytesPercentage;
    }
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // max_depth - computed: true, optional: true, required: false
  private _maxDepth?: number; 
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }
  public set maxDepth(value: number) {
    this._maxDepth = value;
  }
  public resetMaxDepth() {
    this._maxDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDepthInput() {
    return this._maxDepth;
  }

  // min_storage_bytes_percentage - computed: true, optional: true, required: false
  private _minStorageBytesPercentage?: number; 
  public get minStorageBytesPercentage() {
    return this.getNumberAttribute('min_storage_bytes_percentage');
  }
  public set minStorageBytesPercentage(value: number) {
    this._minStorageBytesPercentage = value;
  }
  public resetMinStorageBytesPercentage() {
    this._minStorageBytesPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minStorageBytesPercentageInput() {
    return this._minStorageBytesPercentage;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {
  /**
  * Specifies whether prefix-level storage metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
  /**
  * Selection criteria for prefix-level metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#selection_criteria S3StorageLens#selection_criteria}
  */
  readonly selectionCriteria?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria;
}

export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    selection_criteria: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct!.selectionCriteria),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selection_criteria: {
      value: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToHclTerraform(struct!.selectionCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._selectionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionCriteria = this._selectionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._selectionCriteria.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._selectionCriteria.internalValue = value.selectionCriteria;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // selection_criteria - computed: true, optional: true, required: false
  private _selectionCriteria = new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference(this, "selection_criteria");
  public get selectionCriteria() {
    return this._selectionCriteria;
  }
  public putSelectionCriteria(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria) {
    this._selectionCriteria.internalValue = value;
  }
  public resetSelectionCriteria() {
    this._selectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionCriteriaInput() {
    return this._selectionCriteria.internalValue;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#storage_metrics S3StorageLens#storage_metrics}
  */
  readonly storageMetrics?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics;
}

export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_metrics: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct!.storageMetrics),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToHclTerraform(struct!.storageMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMetrics = this._storageMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageMetrics.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageMetrics.internalValue = value.storageMetrics;
    }
  }

  // storage_metrics - computed: true, optional: true, required: false
  private _storageMetrics = new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference(this, "storage_metrics");
  public get storageMetrics() {
    return this._storageMetrics;
  }
  public putStorageMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics) {
    this._storageMetrics.internalValue = value;
  }
  public resetStorageMetrics() {
    this._storageMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMetricsInput() {
    return this._storageMetrics.internalValue;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevel {
  /**
  * Enables activity metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}
  */
  readonly activityMetrics?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics;
  /**
  * Enables advanced cost optimization metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}
  */
  readonly advancedCostOptimizationMetrics?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics;
  /**
  * Enables advanced data protection metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}
  */
  readonly advancedDataProtectionMetrics?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics;
  /**
  * Advanced Performance Metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}
  */
  readonly advancedPerformanceMetrics?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics;
  /**
  * Enables detailed status codes metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}
  */
  readonly detailedStatusCodesMetrics?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics;
  /**
  * Prefix-level metrics configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#prefix_level S3StorageLens#prefix_level}
  */
  readonly prefixLevel?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel;
}

export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    activity_metrics: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct!.activityMetrics),
    advanced_cost_optimization_metrics: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToTerraform(struct!.advancedCostOptimizationMetrics),
    advanced_data_protection_metrics: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToTerraform(struct!.advancedDataProtectionMetrics),
    advanced_performance_metrics: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsToTerraform(struct!.advancedPerformanceMetrics),
    detailed_status_codes_metrics: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsToTerraform(struct!.detailedStatusCodesMetrics),
    prefix_level: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct!.prefixLevel),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    activity_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToHclTerraform(struct!.activityMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics",
    },
    advanced_cost_optimization_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToHclTerraform(struct!.advancedCostOptimizationMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics",
    },
    advanced_data_protection_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToHclTerraform(struct!.advancedDataProtectionMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics",
    },
    advanced_performance_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsToHclTerraform(struct!.advancedPerformanceMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics",
    },
    detailed_status_codes_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsToHclTerraform(struct!.detailedStatusCodesMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics",
    },
    prefix_level: {
      value: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToHclTerraform(struct!.prefixLevel),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelBucketLevel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityMetrics = this._activityMetrics?.internalValue;
    }
    if (this._advancedCostOptimizationMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedCostOptimizationMetrics = this._advancedCostOptimizationMetrics?.internalValue;
    }
    if (this._advancedDataProtectionMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedDataProtectionMetrics = this._advancedDataProtectionMetrics?.internalValue;
    }
    if (this._advancedPerformanceMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedPerformanceMetrics = this._advancedPerformanceMetrics?.internalValue;
    }
    if (this._detailedStatusCodesMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedStatusCodesMetrics = this._detailedStatusCodesMetrics?.internalValue;
    }
    if (this._prefixLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLevel = this._prefixLevel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activityMetrics.internalValue = undefined;
      this._advancedCostOptimizationMetrics.internalValue = undefined;
      this._advancedDataProtectionMetrics.internalValue = undefined;
      this._advancedPerformanceMetrics.internalValue = undefined;
      this._detailedStatusCodesMetrics.internalValue = undefined;
      this._prefixLevel.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activityMetrics.internalValue = value.activityMetrics;
      this._advancedCostOptimizationMetrics.internalValue = value.advancedCostOptimizationMetrics;
      this._advancedDataProtectionMetrics.internalValue = value.advancedDataProtectionMetrics;
      this._advancedPerformanceMetrics.internalValue = value.advancedPerformanceMetrics;
      this._detailedStatusCodesMetrics.internalValue = value.detailedStatusCodesMetrics;
      this._prefixLevel.internalValue = value.prefixLevel;
    }
  }

  // activity_metrics - computed: true, optional: true, required: false
  private _activityMetrics = new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference(this, "activity_metrics");
  public get activityMetrics() {
    return this._activityMetrics;
  }
  public putActivityMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics) {
    this._activityMetrics.internalValue = value;
  }
  public resetActivityMetrics() {
    this._activityMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityMetricsInput() {
    return this._activityMetrics.internalValue;
  }

  // advanced_cost_optimization_metrics - computed: true, optional: true, required: false
  private _advancedCostOptimizationMetrics = new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference(this, "advanced_cost_optimization_metrics");
  public get advancedCostOptimizationMetrics() {
    return this._advancedCostOptimizationMetrics;
  }
  public putAdvancedCostOptimizationMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics) {
    this._advancedCostOptimizationMetrics.internalValue = value;
  }
  public resetAdvancedCostOptimizationMetrics() {
    this._advancedCostOptimizationMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedCostOptimizationMetricsInput() {
    return this._advancedCostOptimizationMetrics.internalValue;
  }

  // advanced_data_protection_metrics - computed: true, optional: true, required: false
  private _advancedDataProtectionMetrics = new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference(this, "advanced_data_protection_metrics");
  public get advancedDataProtectionMetrics() {
    return this._advancedDataProtectionMetrics;
  }
  public putAdvancedDataProtectionMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics) {
    this._advancedDataProtectionMetrics.internalValue = value;
  }
  public resetAdvancedDataProtectionMetrics() {
    this._advancedDataProtectionMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedDataProtectionMetricsInput() {
    return this._advancedDataProtectionMetrics.internalValue;
  }

  // advanced_performance_metrics - computed: true, optional: true, required: false
  private _advancedPerformanceMetrics = new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference(this, "advanced_performance_metrics");
  public get advancedPerformanceMetrics() {
    return this._advancedPerformanceMetrics;
  }
  public putAdvancedPerformanceMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics) {
    this._advancedPerformanceMetrics.internalValue = value;
  }
  public resetAdvancedPerformanceMetrics() {
    this._advancedPerformanceMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPerformanceMetricsInput() {
    return this._advancedPerformanceMetrics.internalValue;
  }

  // detailed_status_codes_metrics - computed: true, optional: true, required: false
  private _detailedStatusCodesMetrics = new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference(this, "detailed_status_codes_metrics");
  public get detailedStatusCodesMetrics() {
    return this._detailedStatusCodesMetrics;
  }
  public putDetailedStatusCodesMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics) {
    this._detailedStatusCodesMetrics.internalValue = value;
  }
  public resetDetailedStatusCodesMetrics() {
    this._detailedStatusCodesMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedStatusCodesMetricsInput() {
    return this._detailedStatusCodesMetrics.internalValue;
  }

  // prefix_level - computed: true, optional: true, required: false
  private _prefixLevel = new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference(this, "prefix_level");
  public get prefixLevel() {
    return this._prefixLevel;
  }
  public putPrefixLevel(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel) {
    this._prefixLevel.internalValue = value;
  }
  public resetPrefixLevel() {
    this._prefixLevel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLevelInput() {
    return this._prefixLevel.internalValue;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics {
  /**
  * Specifies whether detailed status codes metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#include S3StorageLens#include}
  */
  readonly include?: string[];
}

export function s3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclude),
    include: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.include),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktn.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: true, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktn.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel {
  /**
  * Selection criteria for Storage Lens Group level metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#storage_lens_group_selection_criteria S3StorageLens#storage_lens_group_selection_criteria}
  */
  readonly storageLensGroupSelectionCriteria?: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria;
}

export function s3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    storage_lens_group_selection_criteria: s3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaToTerraform(struct!.storageLensGroupSelectionCriteria),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    storage_lens_group_selection_criteria: {
      value: s3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaToHclTerraform(struct!.storageLensGroupSelectionCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageLensGroupSelectionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLensGroupSelectionCriteria = this._storageLensGroupSelectionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageLensGroupSelectionCriteria.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageLensGroupSelectionCriteria.internalValue = value.storageLensGroupSelectionCriteria;
    }
  }

  // storage_lens_group_selection_criteria - computed: true, optional: true, required: false
  private _storageLensGroupSelectionCriteria = new S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference(this, "storage_lens_group_selection_criteria");
  public get storageLensGroupSelectionCriteria() {
    return this._storageLensGroupSelectionCriteria;
  }
  public putStorageLensGroupSelectionCriteria(value: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria) {
    this._storageLensGroupSelectionCriteria.internalValue = value;
  }
  public resetStorageLensGroupSelectionCriteria() {
    this._storageLensGroupSelectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLensGroupSelectionCriteriaInput() {
    return this._storageLensGroupSelectionCriteria.internalValue;
  }
}
export interface S3StorageLensStorageLensConfigurationAccountLevel {
  /**
  * Enables activity metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}
  */
  readonly activityMetrics?: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics;
  /**
  * Enables advanced cost optimization metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}
  */
  readonly advancedCostOptimizationMetrics?: S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics;
  /**
  * Enables advanced data protection metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}
  */
  readonly advancedDataProtectionMetrics?: S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics;
  /**
  * Advanced Performance Metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}
  */
  readonly advancedPerformanceMetrics?: S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics;
  /**
  * Bucket-level metrics configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#bucket_level S3StorageLens#bucket_level}
  */
  readonly bucketLevel: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel;
  /**
  * Enables detailed status codes metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}
  */
  readonly detailedStatusCodesMetrics?: S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics;
  /**
  * Specifies the details of Amazon S3 Storage Lens Group configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#storage_lens_group_level S3StorageLens#storage_lens_group_level}
  */
  readonly storageLensGroupLevel?: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel;
}

export function s3StorageLensStorageLensConfigurationAccountLevelToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    activity_metrics: s3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct!.activityMetrics),
    advanced_cost_optimization_metrics: s3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToTerraform(struct!.advancedCostOptimizationMetrics),
    advanced_data_protection_metrics: s3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToTerraform(struct!.advancedDataProtectionMetrics),
    advanced_performance_metrics: s3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsToTerraform(struct!.advancedPerformanceMetrics),
    bucket_level: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct!.bucketLevel),
    detailed_status_codes_metrics: s3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsToTerraform(struct!.detailedStatusCodesMetrics),
    storage_lens_group_level: s3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelToTerraform(struct!.storageLensGroupLevel),
  }
}


export function s3StorageLensStorageLensConfigurationAccountLevelToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    activity_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToHclTerraform(struct!.activityMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics",
    },
    advanced_cost_optimization_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToHclTerraform(struct!.advancedCostOptimizationMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics",
    },
    advanced_data_protection_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToHclTerraform(struct!.advancedDataProtectionMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics",
    },
    advanced_performance_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsToHclTerraform(struct!.advancedPerformanceMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics",
    },
    bucket_level: {
      value: s3StorageLensStorageLensConfigurationAccountLevelBucketLevelToHclTerraform(struct!.bucketLevel),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelBucketLevel",
    },
    detailed_status_codes_metrics: {
      value: s3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsToHclTerraform(struct!.detailedStatusCodesMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics",
    },
    storage_lens_group_level: {
      value: s3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelToHclTerraform(struct!.storageLensGroupLevel),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAccountLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAccountLevel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityMetrics = this._activityMetrics?.internalValue;
    }
    if (this._advancedCostOptimizationMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedCostOptimizationMetrics = this._advancedCostOptimizationMetrics?.internalValue;
    }
    if (this._advancedDataProtectionMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedDataProtectionMetrics = this._advancedDataProtectionMetrics?.internalValue;
    }
    if (this._advancedPerformanceMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedPerformanceMetrics = this._advancedPerformanceMetrics?.internalValue;
    }
    if (this._bucketLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketLevel = this._bucketLevel?.internalValue;
    }
    if (this._detailedStatusCodesMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedStatusCodesMetrics = this._detailedStatusCodesMetrics?.internalValue;
    }
    if (this._storageLensGroupLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLensGroupLevel = this._storageLensGroupLevel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAccountLevel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activityMetrics.internalValue = undefined;
      this._advancedCostOptimizationMetrics.internalValue = undefined;
      this._advancedDataProtectionMetrics.internalValue = undefined;
      this._advancedPerformanceMetrics.internalValue = undefined;
      this._bucketLevel.internalValue = undefined;
      this._detailedStatusCodesMetrics.internalValue = undefined;
      this._storageLensGroupLevel.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activityMetrics.internalValue = value.activityMetrics;
      this._advancedCostOptimizationMetrics.internalValue = value.advancedCostOptimizationMetrics;
      this._advancedDataProtectionMetrics.internalValue = value.advancedDataProtectionMetrics;
      this._advancedPerformanceMetrics.internalValue = value.advancedPerformanceMetrics;
      this._bucketLevel.internalValue = value.bucketLevel;
      this._detailedStatusCodesMetrics.internalValue = value.detailedStatusCodesMetrics;
      this._storageLensGroupLevel.internalValue = value.storageLensGroupLevel;
    }
  }

  // activity_metrics - computed: true, optional: true, required: false
  private _activityMetrics = new S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference(this, "activity_metrics");
  public get activityMetrics() {
    return this._activityMetrics;
  }
  public putActivityMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics) {
    this._activityMetrics.internalValue = value;
  }
  public resetActivityMetrics() {
    this._activityMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityMetricsInput() {
    return this._activityMetrics.internalValue;
  }

  // advanced_cost_optimization_metrics - computed: true, optional: true, required: false
  private _advancedCostOptimizationMetrics = new S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference(this, "advanced_cost_optimization_metrics");
  public get advancedCostOptimizationMetrics() {
    return this._advancedCostOptimizationMetrics;
  }
  public putAdvancedCostOptimizationMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics) {
    this._advancedCostOptimizationMetrics.internalValue = value;
  }
  public resetAdvancedCostOptimizationMetrics() {
    this._advancedCostOptimizationMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedCostOptimizationMetricsInput() {
    return this._advancedCostOptimizationMetrics.internalValue;
  }

  // advanced_data_protection_metrics - computed: true, optional: true, required: false
  private _advancedDataProtectionMetrics = new S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference(this, "advanced_data_protection_metrics");
  public get advancedDataProtectionMetrics() {
    return this._advancedDataProtectionMetrics;
  }
  public putAdvancedDataProtectionMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics) {
    this._advancedDataProtectionMetrics.internalValue = value;
  }
  public resetAdvancedDataProtectionMetrics() {
    this._advancedDataProtectionMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedDataProtectionMetricsInput() {
    return this._advancedDataProtectionMetrics.internalValue;
  }

  // advanced_performance_metrics - computed: true, optional: true, required: false
  private _advancedPerformanceMetrics = new S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference(this, "advanced_performance_metrics");
  public get advancedPerformanceMetrics() {
    return this._advancedPerformanceMetrics;
  }
  public putAdvancedPerformanceMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics) {
    this._advancedPerformanceMetrics.internalValue = value;
  }
  public resetAdvancedPerformanceMetrics() {
    this._advancedPerformanceMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPerformanceMetricsInput() {
    return this._advancedPerformanceMetrics.internalValue;
  }

  // bucket_level - computed: false, optional: false, required: true
  private _bucketLevel = new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference(this, "bucket_level");
  public get bucketLevel() {
    return this._bucketLevel;
  }
  public putBucketLevel(value: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel) {
    this._bucketLevel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketLevelInput() {
    return this._bucketLevel.internalValue;
  }

  // detailed_status_codes_metrics - computed: true, optional: true, required: false
  private _detailedStatusCodesMetrics = new S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference(this, "detailed_status_codes_metrics");
  public get detailedStatusCodesMetrics() {
    return this._detailedStatusCodesMetrics;
  }
  public putDetailedStatusCodesMetrics(value: S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics) {
    this._detailedStatusCodesMetrics.internalValue = value;
  }
  public resetDetailedStatusCodesMetrics() {
    this._detailedStatusCodesMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedStatusCodesMetricsInput() {
    return this._detailedStatusCodesMetrics.internalValue;
  }

  // storage_lens_group_level - computed: true, optional: true, required: false
  private _storageLensGroupLevel = new S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference(this, "storage_lens_group_level");
  public get storageLensGroupLevel() {
    return this._storageLensGroupLevel;
  }
  public putStorageLensGroupLevel(value: S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel) {
    this._storageLensGroupLevel.internalValue = value;
  }
  public resetStorageLensGroupLevel() {
    this._storageLensGroupLevel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLensGroupLevelInput() {
    return this._storageLensGroupLevel.internalValue;
  }
}
export interface S3StorageLensStorageLensConfigurationAwsOrg {
  /**
  * The Amazon Resource Name (ARN) of the specified resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}
  */
  readonly arn?: string;
}

export function s3StorageLensStorageLensConfigurationAwsOrgToTerraform(struct?: S3StorageLensStorageLensConfigurationAwsOrg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function s3StorageLensStorageLensConfigurationAwsOrgToHclTerraform(struct?: S3StorageLensStorageLensConfigurationAwsOrg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationAwsOrgOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationAwsOrg | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationAwsOrg | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics {
  /**
  * Specifies whether CloudWatch metrics are enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms {
  /**
  * The ARN of the KMS key to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}
  */
  readonly keyId?: string;
}

export function s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption {
  /**
  * AWS KMS server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}
  */
  readonly ssekms?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms;
  /**
  * S3 default server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}
  */
  readonly sses3?: string;
}

export function s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ssekms: s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsToTerraform(struct!.ssekms),
    sses3: cdktn.stringToTerraform(struct!.sses3),
  }
}


export function s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionToHclTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ssekms: {
      value: s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsToHclTerraform(struct!.ssekms),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms",
    },
    sses3: {
      value: cdktn.stringToHclTerraform(struct!.sses3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssekms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssekms = this._ssekms?.internalValue;
    }
    if (this._sses3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sses3 = this._sses3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssekms.internalValue = undefined;
      this._sses3 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssekms.internalValue = value.ssekms;
      this._sses3 = value.sses3;
    }
  }

  // ssekms - computed: true, optional: true, required: false
  private _ssekms = new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference(this, "ssekms");
  public get ssekms() {
    return this._ssekms;
  }
  public putSsekms(value: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms) {
    this._ssekms.internalValue = value;
  }
  public resetSsekms() {
    this._ssekms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssekmsInput() {
    return this._ssekms.internalValue;
  }

  // sses3 - computed: true, optional: true, required: false
  private _sses3?: string; 
  public get sses3() {
    return this.getStringAttribute('sses3');
  }
  public set sses3(value: string) {
    this._sses3 = value;
  }
  public resetSses3() {
    this._sses3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sses3Input() {
    return this._sses3;
  }
}
export interface S3StorageLensStorageLensConfigurationDataExportS3BucketDestination {
  /**
  * The AWS account ID that owns the destination S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}
  */
  readonly accountId?: string;
  /**
  * The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}
  */
  readonly arn?: string;
  /**
  * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}
  */
  readonly encryption?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption;
  /**
  * Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#format S3StorageLens#format}
  */
  readonly format?: string;
  /**
  * The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}
  */
  readonly outputSchemaVersion?: string;
  /**
  * The prefix to use for Amazon S3 Storage Lens export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}
  */
  readonly prefix?: string;
}

export function s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    arn: cdktn.stringToTerraform(struct!.arn),
    encryption: s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionToTerraform(struct!.encryption),
    format: cdktn.stringToTerraform(struct!.format),
    output_schema_version: cdktn.stringToTerraform(struct!.outputSchemaVersion),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToHclTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.outputSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationDataExportS3BucketDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._outputSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._arn = undefined;
      this._encryption.internalValue = undefined;
      this._format = undefined;
      this._outputSchemaVersion = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._arn = value.arn;
      this._encryption.internalValue = value.encryption;
      this._format = value.format;
      this._outputSchemaVersion = value.outputSchemaVersion;
      this._prefix = value.prefix;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // output_schema_version - computed: true, optional: true, required: false
  private _outputSchemaVersion?: string; 
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }
  public set outputSchemaVersion(value: string) {
    this._outputSchemaVersion = value;
  }
  public resetOutputSchemaVersion() {
    this._outputSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaVersionInput() {
    return this._outputSchemaVersion;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms {
  /**
  * The ARN of the KMS key to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}
  */
  readonly keyId?: string;
}

export function s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption {
  /**
  * AWS KMS server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}
  */
  readonly ssekms?: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms;
  /**
  * S3 default server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}
  */
  readonly sses3?: string;
}

export function s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ssekms: s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsToTerraform(struct!.ssekms),
    sses3: cdktn.stringToTerraform(struct!.sses3),
  }
}


export function s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionToHclTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ssekms: {
      value: s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsToHclTerraform(struct!.ssekms),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms",
    },
    sses3: {
      value: cdktn.stringToHclTerraform(struct!.sses3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssekms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssekms = this._ssekms?.internalValue;
    }
    if (this._sses3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sses3 = this._sses3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssekms.internalValue = undefined;
      this._sses3 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssekms.internalValue = value.ssekms;
      this._sses3 = value.sses3;
    }
  }

  // ssekms - computed: true, optional: true, required: false
  private _ssekms = new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(this, "ssekms");
  public get ssekms() {
    return this._ssekms;
  }
  public putSsekms(value: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms) {
    this._ssekms.internalValue = value;
  }
  public resetSsekms() {
    this._ssekms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssekmsInput() {
    return this._ssekms.internalValue;
  }

  // sses3 - computed: true, optional: true, required: false
  private _sses3?: string; 
  public get sses3() {
    return this.getStringAttribute('sses3');
  }
  public set sses3(value: string) {
    this._sses3 = value;
  }
  public resetSses3() {
    this._sses3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sses3Input() {
    return this._sses3;
  }
}
export interface S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination {
  /**
  * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}
  */
  readonly encryption?: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption;
  /**
  * Specifies whether the export to S3 Tables is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption: s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionToTerraform(struct!.encryption),
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationToHclTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption: {
      value: s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption",
    },
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption.internalValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption.internalValue = value.encryption;
      this._isEnabled = value.isEnabled;
    }
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationDataExport {
  /**
  * CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#cloudwatch_metrics S3StorageLens#cloudwatch_metrics}
  */
  readonly cloudwatchMetrics?: S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics;
  /**
  * S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}
  */
  readonly s3BucketDestination?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination;
  /**
  * S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}
  */
  readonly storageLensTableDestination?: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination;
}

export function s3StorageLensStorageLensConfigurationDataExportToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_metrics: s3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsToTerraform(struct!.cloudwatchMetrics),
    s3_bucket_destination: s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct!.s3BucketDestination),
    storage_lens_table_destination: s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationToTerraform(struct!.storageLensTableDestination),
  }
}


export function s3StorageLensStorageLensConfigurationDataExportToHclTerraform(struct?: S3StorageLensStorageLensConfigurationDataExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_metrics: {
      value: s3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsToHclTerraform(struct!.cloudwatchMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics",
    },
    s3_bucket_destination: {
      value: s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToHclTerraform(struct!.s3BucketDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationDataExportS3BucketDestination",
    },
    storage_lens_table_destination: {
      value: s3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationToHclTerraform(struct!.storageLensTableDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationDataExportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationDataExport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetrics = this._cloudwatchMetrics?.internalValue;
    }
    if (this._s3BucketDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
    }
    if (this._storageLensTableDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLensTableDestination = this._storageLensTableDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationDataExport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchMetrics.internalValue = undefined;
      this._s3BucketDestination.internalValue = undefined;
      this._storageLensTableDestination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchMetrics.internalValue = value.cloudwatchMetrics;
      this._s3BucketDestination.internalValue = value.s3BucketDestination;
      this._storageLensTableDestination.internalValue = value.storageLensTableDestination;
    }
  }

  // cloudwatch_metrics - computed: true, optional: true, required: false
  private _cloudwatchMetrics = new S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference(this, "cloudwatch_metrics");
  public get cloudwatchMetrics() {
    return this._cloudwatchMetrics;
  }
  public putCloudwatchMetrics(value: S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics) {
    this._cloudwatchMetrics.internalValue = value;
  }
  public resetCloudwatchMetrics() {
    this._cloudwatchMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsInput() {
    return this._cloudwatchMetrics.internalValue;
  }

  // s3_bucket_destination - computed: true, optional: true, required: false
  private _s3BucketDestination = new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }
  public putS3BucketDestination(value: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination) {
    this._s3BucketDestination.internalValue = value;
  }
  public resetS3BucketDestination() {
    this._s3BucketDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketDestinationInput() {
    return this._s3BucketDestination.internalValue;
  }

  // storage_lens_table_destination - computed: true, optional: true, required: false
  private _storageLensTableDestination = new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference(this, "storage_lens_table_destination");
  public get storageLensTableDestination() {
    return this._storageLensTableDestination;
  }
  public putStorageLensTableDestination(value: S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination) {
    this._storageLensTableDestination.internalValue = value;
  }
  public resetStorageLensTableDestination() {
    this._storageLensTableDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLensTableDestinationInput() {
    return this._storageLensTableDestination.internalValue;
  }
}
export interface S3StorageLensStorageLensConfigurationExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}
  */
  readonly buckets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}
  */
  readonly regions?: string[];
}

export function s3StorageLensStorageLensConfigurationExcludeToTerraform(struct?: S3StorageLensStorageLensConfigurationExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.buckets),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
  }
}


export function s3StorageLensStorageLensConfigurationExcludeToHclTerraform(struct?: S3StorageLensStorageLensConfigurationExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buckets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.buckets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationExcludeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationExclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationExclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buckets = undefined;
      this._regions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buckets = value.buckets;
      this._regions = value.regions;
    }
  }

  // buckets - computed: true, optional: true, required: false
  private _buckets?: string[]; 
  public get buckets() {
    return cdktn.Fn.tolist(this.getListAttribute('buckets'));
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms {
  /**
  * The ARN of the KMS key to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}
  */
  readonly keyId?: string;
}

export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsToTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption {
  /**
  * AWS KMS server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}
  */
  readonly ssekms?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms;
  /**
  * S3 default server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}
  */
  readonly sses3?: string;
}

export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionToTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ssekms: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsToTerraform(struct!.ssekms),
    sses3: cdktn.stringToTerraform(struct!.sses3),
  }
}


export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionToHclTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ssekms: {
      value: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsToHclTerraform(struct!.ssekms),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms",
    },
    sses3: {
      value: cdktn.stringToHclTerraform(struct!.sses3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssekms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssekms = this._ssekms?.internalValue;
    }
    if (this._sses3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sses3 = this._sses3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssekms.internalValue = undefined;
      this._sses3 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssekms.internalValue = value.ssekms;
      this._sses3 = value.sses3;
    }
  }

  // ssekms - computed: true, optional: true, required: false
  private _ssekms = new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference(this, "ssekms");
  public get ssekms() {
    return this._ssekms;
  }
  public putSsekms(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms) {
    this._ssekms.internalValue = value;
  }
  public resetSsekms() {
    this._ssekms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssekmsInput() {
    return this._ssekms.internalValue;
  }

  // sses3 - computed: true, optional: true, required: false
  private _sses3?: string; 
  public get sses3() {
    return this.getStringAttribute('sses3');
  }
  public set sses3(value: string) {
    this._sses3 = value;
  }
  public resetSses3() {
    this._sses3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sses3Input() {
    return this._sses3;
  }
}
export interface S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination {
  /**
  * The AWS account ID that owns the destination S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}
  */
  readonly accountId?: string;
  /**
  * The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}
  */
  readonly arn?: string;
  /**
  * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}
  */
  readonly encryption?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption;
  /**
  * Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#format S3StorageLens#format}
  */
  readonly format?: string;
  /**
  * The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}
  */
  readonly outputSchemaVersion?: string;
  /**
  * The prefix to use for Amazon S3 Storage Lens export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}
  */
  readonly prefix?: string;
}

export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationToTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    arn: cdktn.stringToTerraform(struct!.arn),
    encryption: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionToTerraform(struct!.encryption),
    format: cdktn.stringToTerraform(struct!.format),
    output_schema_version: cdktn.stringToTerraform(struct!.outputSchemaVersion),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationToHclTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_schema_version: {
      value: cdktn.stringToHclTerraform(struct!.outputSchemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._outputSchemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._arn = undefined;
      this._encryption.internalValue = undefined;
      this._format = undefined;
      this._outputSchemaVersion = undefined;
      this._prefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._arn = value.arn;
      this._encryption.internalValue = value.encryption;
      this._format = value.format;
      this._outputSchemaVersion = value.outputSchemaVersion;
      this._prefix = value.prefix;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // output_schema_version - computed: true, optional: true, required: false
  private _outputSchemaVersion?: string; 
  public get outputSchemaVersion() {
    return this.getStringAttribute('output_schema_version');
  }
  public set outputSchemaVersion(value: string) {
    this._outputSchemaVersion = value;
  }
  public resetOutputSchemaVersion() {
    this._outputSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaVersionInput() {
    return this._outputSchemaVersion;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms {
  /**
  * The ARN of the KMS key to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}
  */
  readonly keyId?: string;
}

export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsToTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_id: cdktn.stringToTerraform(struct!.keyId),
  }
}


export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsToHclTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption {
  /**
  * AWS KMS server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}
  */
  readonly ssekms?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms;
  /**
  * S3 default server-side encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}
  */
  readonly sses3?: string;
}

export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionToTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ssekms: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsToTerraform(struct!.ssekms),
    sses3: cdktn.stringToTerraform(struct!.sses3),
  }
}


export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionToHclTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ssekms: {
      value: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsToHclTerraform(struct!.ssekms),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms",
    },
    sses3: {
      value: cdktn.stringToHclTerraform(struct!.sses3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssekms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssekms = this._ssekms?.internalValue;
    }
    if (this._sses3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sses3 = this._sses3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssekms.internalValue = undefined;
      this._sses3 = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssekms.internalValue = value.ssekms;
      this._sses3 = value.sses3;
    }
  }

  // ssekms - computed: true, optional: true, required: false
  private _ssekms = new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(this, "ssekms");
  public get ssekms() {
    return this._ssekms;
  }
  public putSsekms(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms) {
    this._ssekms.internalValue = value;
  }
  public resetSsekms() {
    this._ssekms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssekmsInput() {
    return this._ssekms.internalValue;
  }

  // sses3 - computed: true, optional: true, required: false
  private _sses3?: string; 
  public get sses3() {
    return this.getStringAttribute('sses3');
  }
  public set sses3(value: string) {
    this._sses3 = value;
  }
  public resetSses3() {
    this._sses3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sses3Input() {
    return this._sses3;
  }
}
export interface S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination {
  /**
  * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}
  */
  readonly encryption?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption;
  /**
  * Specifies whether the export to S3 Tables is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
}

export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationToTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionToTerraform(struct!.encryption),
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationToHclTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption: {
      value: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption",
    },
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption.internalValue = undefined;
      this._isEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption.internalValue = value.encryption;
      this._isEnabled = value.isEnabled;
    }
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport {
  /**
  * S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}
  */
  readonly s3BucketDestination?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination;
  /**
  * S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}
  */
  readonly storageLensTableDestination?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination;
}

export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportToTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_bucket_destination: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationToTerraform(struct!.s3BucketDestination),
    storage_lens_table_destination: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationToTerraform(struct!.storageLensTableDestination),
  }
}


export function s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportToHclTerraform(struct?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_bucket_destination: {
      value: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationToHclTerraform(struct!.s3BucketDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination",
    },
    storage_lens_table_destination: {
      value: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationToHclTerraform(struct!.storageLensTableDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3BucketDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketDestination = this._s3BucketDestination?.internalValue;
    }
    if (this._storageLensTableDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLensTableDestination = this._storageLensTableDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3BucketDestination.internalValue = undefined;
      this._storageLensTableDestination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3BucketDestination.internalValue = value.s3BucketDestination;
      this._storageLensTableDestination.internalValue = value.storageLensTableDestination;
    }
  }

  // s3_bucket_destination - computed: true, optional: true, required: false
  private _s3BucketDestination = new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference(this, "s3_bucket_destination");
  public get s3BucketDestination() {
    return this._s3BucketDestination;
  }
  public putS3BucketDestination(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination) {
    this._s3BucketDestination.internalValue = value;
  }
  public resetS3BucketDestination() {
    this._s3BucketDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketDestinationInput() {
    return this._s3BucketDestination.internalValue;
  }

  // storage_lens_table_destination - computed: true, optional: true, required: false
  private _storageLensTableDestination = new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference(this, "storage_lens_table_destination");
  public get storageLensTableDestination() {
    return this._storageLensTableDestination;
  }
  public putStorageLensTableDestination(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination) {
    this._storageLensTableDestination.internalValue = value;
  }
  public resetStorageLensTableDestination() {
    this._storageLensTableDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLensTableDestinationInput() {
    return this._storageLensTableDestination.internalValue;
  }
}
export interface S3StorageLensStorageLensConfigurationInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}
  */
  readonly buckets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}
  */
  readonly regions?: string[];
}

export function s3StorageLensStorageLensConfigurationIncludeToTerraform(struct?: S3StorageLensStorageLensConfigurationInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.buckets),
    regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
  }
}


export function s3StorageLensStorageLensConfigurationIncludeToHclTerraform(struct?: S3StorageLensStorageLensConfigurationInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    buckets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.buckets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationIncludeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfigurationInclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfigurationInclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buckets = undefined;
      this._regions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buckets = value.buckets;
      this._regions = value.regions;
    }
  }

  // buckets - computed: true, optional: true, required: false
  private _buckets?: string[]; 
  public get buckets() {
    return cdktn.Fn.tolist(this.getListAttribute('buckets'));
  }
  public set buckets(value: string[]) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktn.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface S3StorageLensStorageLensConfiguration {
  /**
  * Account-level metrics configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#account_level S3StorageLens#account_level}
  */
  readonly accountLevel: S3StorageLensStorageLensConfigurationAccountLevel;
  /**
  * The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#aws_org S3StorageLens#aws_org}
  */
  readonly awsOrg?: S3StorageLensStorageLensConfigurationAwsOrg;
  /**
  * Specifies how Amazon S3 Storage Lens metrics should be exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#data_export S3StorageLens#data_export}
  */
  readonly dataExport?: S3StorageLensStorageLensConfigurationDataExport;
  /**
  * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}
  */
  readonly exclude?: S3StorageLensStorageLensConfigurationExclude;
  /**
  * Expanded Prefixes Data Export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#expanded_prefixes_data_export S3StorageLens#expanded_prefixes_data_export}
  */
  readonly expandedPrefixesDataExport?: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport;
  /**
  * The ID that identifies the Amazon S3 Storage Lens configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#id S3StorageLens#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#include S3StorageLens#include}
  */
  readonly include?: S3StorageLensStorageLensConfigurationInclude;
  /**
  * Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}
  */
  readonly isEnabled: boolean | cdktn.IResolvable;
  /**
  * The delimiter to divide S3 key into hierarchy of prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#prefix_delimiter S3StorageLens#prefix_delimiter}
  */
  readonly prefixDelimiter?: string;
}

export function s3StorageLensStorageLensConfigurationToTerraform(struct?: S3StorageLensStorageLensConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_level: s3StorageLensStorageLensConfigurationAccountLevelToTerraform(struct!.accountLevel),
    aws_org: s3StorageLensStorageLensConfigurationAwsOrgToTerraform(struct!.awsOrg),
    data_export: s3StorageLensStorageLensConfigurationDataExportToTerraform(struct!.dataExport),
    exclude: s3StorageLensStorageLensConfigurationExcludeToTerraform(struct!.exclude),
    expanded_prefixes_data_export: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportToTerraform(struct!.expandedPrefixesDataExport),
    id: cdktn.stringToTerraform(struct!.id),
    include: s3StorageLensStorageLensConfigurationIncludeToTerraform(struct!.include),
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    prefix_delimiter: cdktn.stringToTerraform(struct!.prefixDelimiter),
  }
}


export function s3StorageLensStorageLensConfigurationToHclTerraform(struct?: S3StorageLensStorageLensConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_level: {
      value: s3StorageLensStorageLensConfigurationAccountLevelToHclTerraform(struct!.accountLevel),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAccountLevel",
    },
    aws_org: {
      value: s3StorageLensStorageLensConfigurationAwsOrgToHclTerraform(struct!.awsOrg),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationAwsOrg",
    },
    data_export: {
      value: s3StorageLensStorageLensConfigurationDataExportToHclTerraform(struct!.dataExport),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationDataExport",
    },
    exclude: {
      value: s3StorageLensStorageLensConfigurationExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationExclude",
    },
    expanded_prefixes_data_export: {
      value: s3StorageLensStorageLensConfigurationExpandedPrefixesDataExportToHclTerraform(struct!.expandedPrefixesDataExport),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: s3StorageLensStorageLensConfigurationIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "struct",
      storageClassType: "S3StorageLensStorageLensConfigurationInclude",
    },
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_delimiter: {
      value: cdktn.stringToHclTerraform(struct!.prefixDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3StorageLensStorageLensConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3StorageLensStorageLensConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountLevel = this._accountLevel?.internalValue;
    }
    if (this._awsOrg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsOrg = this._awsOrg?.internalValue;
    }
    if (this._dataExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExport = this._dataExport?.internalValue;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._expandedPrefixesDataExport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedPrefixesDataExport = this._expandedPrefixesDataExport?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._prefixDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixDelimiter = this._prefixDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3StorageLensStorageLensConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountLevel.internalValue = undefined;
      this._awsOrg.internalValue = undefined;
      this._dataExport.internalValue = undefined;
      this._exclude.internalValue = undefined;
      this._expandedPrefixesDataExport.internalValue = undefined;
      this._id = undefined;
      this._include.internalValue = undefined;
      this._isEnabled = undefined;
      this._prefixDelimiter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountLevel.internalValue = value.accountLevel;
      this._awsOrg.internalValue = value.awsOrg;
      this._dataExport.internalValue = value.dataExport;
      this._exclude.internalValue = value.exclude;
      this._expandedPrefixesDataExport.internalValue = value.expandedPrefixesDataExport;
      this._id = value.id;
      this._include.internalValue = value.include;
      this._isEnabled = value.isEnabled;
      this._prefixDelimiter = value.prefixDelimiter;
    }
  }

  // account_level - computed: false, optional: false, required: true
  private _accountLevel = new S3StorageLensStorageLensConfigurationAccountLevelOutputReference(this, "account_level");
  public get accountLevel() {
    return this._accountLevel;
  }
  public putAccountLevel(value: S3StorageLensStorageLensConfigurationAccountLevel) {
    this._accountLevel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLevelInput() {
    return this._accountLevel.internalValue;
  }

  // aws_org - computed: true, optional: true, required: false
  private _awsOrg = new S3StorageLensStorageLensConfigurationAwsOrgOutputReference(this, "aws_org");
  public get awsOrg() {
    return this._awsOrg;
  }
  public putAwsOrg(value: S3StorageLensStorageLensConfigurationAwsOrg) {
    this._awsOrg.internalValue = value;
  }
  public resetAwsOrg() {
    this._awsOrg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOrgInput() {
    return this._awsOrg.internalValue;
  }

  // data_export - computed: true, optional: true, required: false
  private _dataExport = new S3StorageLensStorageLensConfigurationDataExportOutputReference(this, "data_export");
  public get dataExport() {
    return this._dataExport;
  }
  public putDataExport(value: S3StorageLensStorageLensConfigurationDataExport) {
    this._dataExport.internalValue = value;
  }
  public resetDataExport() {
    this._dataExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExportInput() {
    return this._dataExport.internalValue;
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude = new S3StorageLensStorageLensConfigurationExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: S3StorageLensStorageLensConfigurationExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // expanded_prefixes_data_export - computed: true, optional: true, required: false
  private _expandedPrefixesDataExport = new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference(this, "expanded_prefixes_data_export");
  public get expandedPrefixesDataExport() {
    return this._expandedPrefixesDataExport;
  }
  public putExpandedPrefixesDataExport(value: S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport) {
    this._expandedPrefixesDataExport.internalValue = value;
  }
  public resetExpandedPrefixesDataExport() {
    this._expandedPrefixesDataExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedPrefixesDataExportInput() {
    return this._expandedPrefixesDataExport.internalValue;
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

  // include - computed: true, optional: true, required: false
  private _include = new S3StorageLensStorageLensConfigurationIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: S3StorageLensStorageLensConfigurationInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // prefix_delimiter - computed: true, optional: true, required: false
  private _prefixDelimiter?: string; 
  public get prefixDelimiter() {
    return this.getStringAttribute('prefix_delimiter');
  }
  public set prefixDelimiter(value: string) {
    this._prefixDelimiter = value;
  }
  public resetPrefixDelimiter() {
    this._prefixDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixDelimiterInput() {
    return this._prefixDelimiter;
  }

  // storage_lens_arn - computed: true, optional: false, required: false
  public get storageLensArn() {
    return this.getStringAttribute('storage_lens_arn');
  }
}
export interface S3StorageLensTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#key S3StorageLens#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#value S3StorageLens#value}
  */
  readonly value?: string;
}

export function s3StorageLensTagsToTerraform(struct?: S3StorageLensTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function s3StorageLensTagsToHclTerraform(struct?: S3StorageLensTags | cdktn.IResolvable): any {
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

export class S3StorageLensTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3StorageLensTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3StorageLensTags | cdktn.IResolvable | undefined) {
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

export class S3StorageLensTagsList extends cdktn.ComplexList {
  public internalValue? : S3StorageLensTags[] | cdktn.IResolvable

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
  public get(index: number): S3StorageLensTagsOutputReference {
    return new S3StorageLensTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens awscc_s3_storage_lens}
*/
export class S3StorageLens extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_s3_storage_lens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3StorageLens resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3StorageLens to import
  * @param importFromId The id of the existing S3StorageLens that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3StorageLens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_storage_lens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/s3_storage_lens awscc_s3_storage_lens} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3StorageLensConfig
  */
  public constructor(scope: Construct, id: string, config: S3StorageLensConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_storage_lens',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._storageLensConfiguration.internalValue = config.storageLensConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_lens_configuration - computed: false, optional: false, required: true
  private _storageLensConfiguration = new S3StorageLensStorageLensConfigurationOutputReference(this, "storage_lens_configuration");
  public get storageLensConfiguration() {
    return this._storageLensConfiguration;
  }
  public putStorageLensConfiguration(value: S3StorageLensStorageLensConfiguration) {
    this._storageLensConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLensConfigurationInput() {
    return this._storageLensConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new S3StorageLensTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: S3StorageLensTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      storage_lens_configuration: s3StorageLensStorageLensConfigurationToTerraform(this._storageLensConfiguration.internalValue),
      tags: cdktn.listMapper(s3StorageLensTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      storage_lens_configuration: {
        value: s3StorageLensStorageLensConfigurationToHclTerraform(this._storageLensConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3StorageLensStorageLensConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(s3StorageLensTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3StorageLensTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
