// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CleanroomsMembershipConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#collaboration_identifier CleanroomsMembership#collaboration_identifier}
  */
  readonly collaborationIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#default_job_result_configuration CleanroomsMembership#default_job_result_configuration}
  */
  readonly defaultJobResultConfiguration?: CleanroomsMembershipDefaultJobResultConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}
  */
  readonly defaultResultConfiguration?: CleanroomsMembershipDefaultResultConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#is_metrics_enabled CleanroomsMembership#is_metrics_enabled}
  */
  readonly isMetricsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#job_log_status CleanroomsMembership#job_log_status}
  */
  readonly jobLogStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}
  */
  readonly paymentConfiguration?: CleanroomsMembershipPaymentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}
  */
  readonly queryLogStatus: string;
  /**
  * An arbitrary set of tags (key-value pairs) for this cleanrooms membership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}
  */
  readonly tags?: CleanroomsMembershipTags[] | cdktn.IResolvable;
}
export interface CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}
  */
  readonly keyPrefix?: string;
}

export function cleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3ToTerraform(struct?: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
  }
}


export function cleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3ToHclTerraform(struct?: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: true, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }
}
export interface CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}
  */
  readonly s3?: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3;
}

export function cleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationToTerraform(struct?: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3: cleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3ToTerraform(struct!.s3),
  }
}


export function cleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationToHclTerraform(struct?: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3: {
      value: cleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface CleanroomsMembershipDefaultJobResultConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}
  */
  readonly outputConfiguration?: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}
  */
  readonly roleArn?: string;
}

export function cleanroomsMembershipDefaultJobResultConfigurationToTerraform(struct?: CleanroomsMembershipDefaultJobResultConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_configuration: cleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationToTerraform(struct!.outputConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function cleanroomsMembershipDefaultJobResultConfigurationToHclTerraform(struct?: CleanroomsMembershipDefaultJobResultConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_configuration: {
      value: cleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationToHclTerraform(struct!.outputConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipDefaultJobResultConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipDefaultJobResultConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfiguration = this._outputConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipDefaultJobResultConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outputConfiguration.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outputConfiguration.internalValue = value.outputConfiguration;
      this._roleArn = value.roleArn;
    }
  }

  // output_configuration - computed: true, optional: true, required: false
  private _outputConfiguration = new CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference(this, "output_configuration");
  public get outputConfiguration() {
    return this._outputConfiguration;
  }
  public putOutputConfiguration(value: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration) {
    this._outputConfiguration.internalValue = value;
  }
  public resetOutputConfiguration() {
    this._outputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigurationInput() {
    return this._outputConfiguration.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}
  */
  readonly resultFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#single_file_output CleanroomsMembership#single_file_output}
  */
  readonly singleFileOutput?: boolean | cdktn.IResolvable;
}

export function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    result_format: cdktn.stringToTerraform(struct!.resultFormat),
    single_file_output: cdktn.booleanToTerraform(struct!.singleFileOutput),
  }
}


export function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToHclTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_format: {
      value: cdktn.stringToHclTerraform(struct!.resultFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_file_output: {
      value: cdktn.booleanToHclTerraform(struct!.singleFileOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._resultFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultFormat = this._resultFormat;
    }
    if (this._singleFileOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleFileOutput = this._singleFileOutput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
      this._resultFormat = undefined;
      this._singleFileOutput = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
      this._resultFormat = value.resultFormat;
      this._singleFileOutput = value.singleFileOutput;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: true, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // result_format - computed: true, optional: true, required: false
  private _resultFormat?: string; 
  public get resultFormat() {
    return this.getStringAttribute('result_format');
  }
  public set resultFormat(value: string) {
    this._resultFormat = value;
  }
  public resetResultFormat() {
    this._resultFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFormatInput() {
    return this._resultFormat;
  }

  // single_file_output - computed: true, optional: true, required: false
  private _singleFileOutput?: boolean | cdktn.IResolvable; 
  public get singleFileOutput() {
    return this.getBooleanAttribute('single_file_output');
  }
  public set singleFileOutput(value: boolean | cdktn.IResolvable) {
    this._singleFileOutput = value;
  }
  public resetSingleFileOutput() {
    this._singleFileOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleFileOutputInput() {
    return this._singleFileOutput;
  }
}
export interface CleanroomsMembershipDefaultResultConfigurationOutputConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}
  */
  readonly s3?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3;
}

export function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3: cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToTerraform(struct!.s3),
  }
}


export function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToHclTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3: {
      value: cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3.internalValue = value.s3;
    }
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface CleanroomsMembershipDefaultResultConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}
  */
  readonly outputConfiguration?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}
  */
  readonly roleArn?: string;
}

export function cleanroomsMembershipDefaultResultConfigurationToTerraform(struct?: CleanroomsMembershipDefaultResultConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_configuration: cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToTerraform(struct!.outputConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function cleanroomsMembershipDefaultResultConfigurationToHclTerraform(struct?: CleanroomsMembershipDefaultResultConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_configuration: {
      value: cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToHclTerraform(struct!.outputConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipDefaultResultConfigurationOutputConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipDefaultResultConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipDefaultResultConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfiguration = this._outputConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipDefaultResultConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outputConfiguration.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outputConfiguration.internalValue = value.outputConfiguration;
      this._roleArn = value.roleArn;
    }
  }

  // output_configuration - computed: true, optional: true, required: false
  private _outputConfiguration = new CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference(this, "output_configuration");
  public get outputConfiguration() {
    return this._outputConfiguration;
  }
  public putOutputConfiguration(value: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration) {
    this._outputConfiguration.internalValue = value;
  }
  public resetOutputConfiguration() {
    this._outputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigurationInput() {
    return this._outputConfiguration.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface CleanroomsMembershipPaymentConfigurationJobCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsMembershipPaymentConfigurationJobComputeToTerraform(struct?: CleanroomsMembershipPaymentConfigurationJobCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsMembershipPaymentConfigurationJobComputeToHclTerraform(struct?: CleanroomsMembershipPaymentConfigurationJobCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_responsible: {
      value: cdktn.booleanToHclTerraform(struct!.isResponsible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipPaymentConfigurationJobComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipPaymentConfigurationJobCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isResponsible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponsible = this._isResponsible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipPaymentConfigurationJobCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isResponsible = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isResponsible = value.isResponsible;
    }
  }

  // is_responsible - computed: true, optional: true, required: false
  private _isResponsible?: boolean | cdktn.IResolvable; 
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
  public set isResponsible(value: boolean | cdktn.IResolvable) {
    this._isResponsible = value;
  }
  public resetIsResponsible() {
    this._isResponsible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponsibleInput() {
    return this._isResponsible;
  }
}
export interface CleanroomsMembershipPaymentConfigurationMachineLearningModelInference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceToTerraform(struct?: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceToHclTerraform(struct?: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_responsible: {
      value: cdktn.booleanToHclTerraform(struct!.isResponsible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isResponsible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponsible = this._isResponsible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isResponsible = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isResponsible = value.isResponsible;
    }
  }

  // is_responsible - computed: true, optional: true, required: false
  private _isResponsible?: boolean | cdktn.IResolvable; 
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
  public set isResponsible(value: boolean | cdktn.IResolvable) {
    this._isResponsible = value;
  }
  public resetIsResponsible() {
    this._isResponsible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponsibleInput() {
    return this._isResponsible;
  }
}
export interface CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingToTerraform(struct?: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingToHclTerraform(struct?: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_responsible: {
      value: cdktn.booleanToHclTerraform(struct!.isResponsible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isResponsible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponsible = this._isResponsible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isResponsible = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isResponsible = value.isResponsible;
    }
  }

  // is_responsible - computed: true, optional: true, required: false
  private _isResponsible?: boolean | cdktn.IResolvable; 
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
  public set isResponsible(value: boolean | cdktn.IResolvable) {
    this._isResponsible = value;
  }
  public resetIsResponsible() {
    this._isResponsible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponsibleInput() {
    return this._isResponsible;
  }
}
export interface CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationToTerraform(struct?: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationToHclTerraform(struct?: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_responsible: {
      value: cdktn.booleanToHclTerraform(struct!.isResponsible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isResponsible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponsible = this._isResponsible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isResponsible = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isResponsible = value.isResponsible;
    }
  }

  // is_responsible - computed: true, optional: true, required: false
  private _isResponsible?: boolean | cdktn.IResolvable; 
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
  public set isResponsible(value: boolean | cdktn.IResolvable) {
    this._isResponsible = value;
  }
  public resetIsResponsible() {
    this._isResponsible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponsibleInput() {
    return this._isResponsible;
  }
}
export interface CleanroomsMembershipPaymentConfigurationMachineLearning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#model_inference CleanroomsMembership#model_inference}
  */
  readonly modelInference?: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#model_training CleanroomsMembership#model_training}
  */
  readonly modelTraining?: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#synthetic_data_generation CleanroomsMembership#synthetic_data_generation}
  */
  readonly syntheticDataGeneration?: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration;
}

export function cleanroomsMembershipPaymentConfigurationMachineLearningToTerraform(struct?: CleanroomsMembershipPaymentConfigurationMachineLearning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_inference: cleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceToTerraform(struct!.modelInference),
    model_training: cleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingToTerraform(struct!.modelTraining),
    synthetic_data_generation: cleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationToTerraform(struct!.syntheticDataGeneration),
  }
}


export function cleanroomsMembershipPaymentConfigurationMachineLearningToHclTerraform(struct?: CleanroomsMembershipPaymentConfigurationMachineLearning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_inference: {
      value: cleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceToHclTerraform(struct!.modelInference),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipPaymentConfigurationMachineLearningModelInference",
    },
    model_training: {
      value: cleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingToHclTerraform(struct!.modelTraining),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining",
    },
    synthetic_data_generation: {
      value: cleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationToHclTerraform(struct!.syntheticDataGeneration),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipPaymentConfigurationMachineLearning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelInference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelInference = this._modelInference?.internalValue;
    }
    if (this._modelTraining?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelTraining = this._modelTraining?.internalValue;
    }
    if (this._syntheticDataGeneration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticDataGeneration = this._syntheticDataGeneration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipPaymentConfigurationMachineLearning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelInference.internalValue = undefined;
      this._modelTraining.internalValue = undefined;
      this._syntheticDataGeneration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelInference.internalValue = value.modelInference;
      this._modelTraining.internalValue = value.modelTraining;
      this._syntheticDataGeneration.internalValue = value.syntheticDataGeneration;
    }
  }

  // model_inference - computed: true, optional: true, required: false
  private _modelInference = new CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference(this, "model_inference");
  public get modelInference() {
    return this._modelInference;
  }
  public putModelInference(value: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference) {
    this._modelInference.internalValue = value;
  }
  public resetModelInference() {
    this._modelInference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInferenceInput() {
    return this._modelInference.internalValue;
  }

  // model_training - computed: true, optional: true, required: false
  private _modelTraining = new CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference(this, "model_training");
  public get modelTraining() {
    return this._modelTraining;
  }
  public putModelTraining(value: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining) {
    this._modelTraining.internalValue = value;
  }
  public resetModelTraining() {
    this._modelTraining.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTrainingInput() {
    return this._modelTraining.internalValue;
  }

  // synthetic_data_generation - computed: true, optional: true, required: false
  private _syntheticDataGeneration = new CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(this, "synthetic_data_generation");
  public get syntheticDataGeneration() {
    return this._syntheticDataGeneration;
  }
  public putSyntheticDataGeneration(value: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration) {
    this._syntheticDataGeneration.internalValue = value;
  }
  public resetSyntheticDataGeneration() {
    this._syntheticDataGeneration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticDataGenerationInput() {
    return this._syntheticDataGeneration.internalValue;
  }
}
export interface CleanroomsMembershipPaymentConfigurationQueryCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsMembershipPaymentConfigurationQueryComputeToTerraform(struct?: CleanroomsMembershipPaymentConfigurationQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsMembershipPaymentConfigurationQueryComputeToHclTerraform(struct?: CleanroomsMembershipPaymentConfigurationQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_responsible: {
      value: cdktn.booleanToHclTerraform(struct!.isResponsible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipPaymentConfigurationQueryCompute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isResponsible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isResponsible = this._isResponsible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipPaymentConfigurationQueryCompute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isResponsible = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isResponsible = value.isResponsible;
    }
  }

  // is_responsible - computed: true, optional: true, required: false
  private _isResponsible?: boolean | cdktn.IResolvable; 
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
  public set isResponsible(value: boolean | cdktn.IResolvable) {
    this._isResponsible = value;
  }
  public resetIsResponsible() {
    this._isResponsible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponsibleInput() {
    return this._isResponsible;
  }
}
export interface CleanroomsMembershipPaymentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#job_compute CleanroomsMembership#job_compute}
  */
  readonly jobCompute?: CleanroomsMembershipPaymentConfigurationJobCompute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#machine_learning CleanroomsMembership#machine_learning}
  */
  readonly machineLearning?: CleanroomsMembershipPaymentConfigurationMachineLearning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}
  */
  readonly queryCompute?: CleanroomsMembershipPaymentConfigurationQueryCompute;
}

export function cleanroomsMembershipPaymentConfigurationToTerraform(struct?: CleanroomsMembershipPaymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_compute: cleanroomsMembershipPaymentConfigurationJobComputeToTerraform(struct!.jobCompute),
    machine_learning: cleanroomsMembershipPaymentConfigurationMachineLearningToTerraform(struct!.machineLearning),
    query_compute: cleanroomsMembershipPaymentConfigurationQueryComputeToTerraform(struct!.queryCompute),
  }
}


export function cleanroomsMembershipPaymentConfigurationToHclTerraform(struct?: CleanroomsMembershipPaymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_compute: {
      value: cleanroomsMembershipPaymentConfigurationJobComputeToHclTerraform(struct!.jobCompute),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipPaymentConfigurationJobCompute",
    },
    machine_learning: {
      value: cleanroomsMembershipPaymentConfigurationMachineLearningToHclTerraform(struct!.machineLearning),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipPaymentConfigurationMachineLearning",
    },
    query_compute: {
      value: cleanroomsMembershipPaymentConfigurationQueryComputeToHclTerraform(struct!.queryCompute),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsMembershipPaymentConfigurationQueryCompute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsMembershipPaymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsMembershipPaymentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCompute = this._jobCompute?.internalValue;
    }
    if (this._machineLearning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineLearning = this._machineLearning?.internalValue;
    }
    if (this._queryCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCompute = this._queryCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsMembershipPaymentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobCompute.internalValue = undefined;
      this._machineLearning.internalValue = undefined;
      this._queryCompute.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobCompute.internalValue = value.jobCompute;
      this._machineLearning.internalValue = value.machineLearning;
      this._queryCompute.internalValue = value.queryCompute;
    }
  }

  // job_compute - computed: true, optional: true, required: false
  private _jobCompute = new CleanroomsMembershipPaymentConfigurationJobComputeOutputReference(this, "job_compute");
  public get jobCompute() {
    return this._jobCompute;
  }
  public putJobCompute(value: CleanroomsMembershipPaymentConfigurationJobCompute) {
    this._jobCompute.internalValue = value;
  }
  public resetJobCompute() {
    this._jobCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobComputeInput() {
    return this._jobCompute.internalValue;
  }

  // machine_learning - computed: true, optional: true, required: false
  private _machineLearning = new CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference(this, "machine_learning");
  public get machineLearning() {
    return this._machineLearning;
  }
  public putMachineLearning(value: CleanroomsMembershipPaymentConfigurationMachineLearning) {
    this._machineLearning.internalValue = value;
  }
  public resetMachineLearning() {
    this._machineLearning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningInput() {
    return this._machineLearning.internalValue;
  }

  // query_compute - computed: true, optional: true, required: false
  private _queryCompute = new CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference(this, "query_compute");
  public get queryCompute() {
    return this._queryCompute;
  }
  public putQueryCompute(value: CleanroomsMembershipPaymentConfigurationQueryCompute) {
    this._queryCompute.internalValue = value;
  }
  public resetQueryCompute() {
    this._queryCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryComputeInput() {
    return this._queryCompute.internalValue;
  }
}
export interface CleanroomsMembershipTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#key CleanroomsMembership#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#value CleanroomsMembership#value}
  */
  readonly value?: string;
}

export function cleanroomsMembershipTagsToTerraform(struct?: CleanroomsMembershipTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cleanroomsMembershipTagsToHclTerraform(struct?: CleanroomsMembershipTags | cdktn.IResolvable): any {
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

export class CleanroomsMembershipTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsMembershipTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsMembershipTags | cdktn.IResolvable | undefined) {
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

export class CleanroomsMembershipTagsList extends cdktn.ComplexList {
  public internalValue? : CleanroomsMembershipTags[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsMembershipTagsOutputReference {
    return new CleanroomsMembershipTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership awscc_cleanrooms_membership}
*/
export class CleanroomsMembership extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cleanrooms_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CleanroomsMembership resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CleanroomsMembership to import
  * @param importFromId The id of the existing CleanroomsMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CleanroomsMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/cleanrooms_membership awscc_cleanrooms_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CleanroomsMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: CleanroomsMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cleanrooms_membership',
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
    this._collaborationIdentifier = config.collaborationIdentifier;
    this._defaultJobResultConfiguration.internalValue = config.defaultJobResultConfiguration;
    this._defaultResultConfiguration.internalValue = config.defaultResultConfiguration;
    this._isMetricsEnabled = config.isMetricsEnabled;
    this._jobLogStatus = config.jobLogStatus;
    this._paymentConfiguration.internalValue = config.paymentConfiguration;
    this._queryLogStatus = config.queryLogStatus;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // collaboration_arn - computed: true, optional: false, required: false
  public get collaborationArn() {
    return this.getStringAttribute('collaboration_arn');
  }

  // collaboration_creator_account_id - computed: true, optional: false, required: false
  public get collaborationCreatorAccountId() {
    return this.getStringAttribute('collaboration_creator_account_id');
  }

  // collaboration_identifier - computed: false, optional: false, required: true
  private _collaborationIdentifier?: string; 
  public get collaborationIdentifier() {
    return this.getStringAttribute('collaboration_identifier');
  }
  public set collaborationIdentifier(value: string) {
    this._collaborationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collaborationIdentifierInput() {
    return this._collaborationIdentifier;
  }

  // default_job_result_configuration - computed: true, optional: true, required: false
  private _defaultJobResultConfiguration = new CleanroomsMembershipDefaultJobResultConfigurationOutputReference(this, "default_job_result_configuration");
  public get defaultJobResultConfiguration() {
    return this._defaultJobResultConfiguration;
  }
  public putDefaultJobResultConfiguration(value: CleanroomsMembershipDefaultJobResultConfiguration) {
    this._defaultJobResultConfiguration.internalValue = value;
  }
  public resetDefaultJobResultConfiguration() {
    this._defaultJobResultConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJobResultConfigurationInput() {
    return this._defaultJobResultConfiguration.internalValue;
  }

  // default_result_configuration - computed: true, optional: true, required: false
  private _defaultResultConfiguration = new CleanroomsMembershipDefaultResultConfigurationOutputReference(this, "default_result_configuration");
  public get defaultResultConfiguration() {
    return this._defaultResultConfiguration;
  }
  public putDefaultResultConfiguration(value: CleanroomsMembershipDefaultResultConfiguration) {
    this._defaultResultConfiguration.internalValue = value;
  }
  public resetDefaultResultConfiguration() {
    this._defaultResultConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResultConfigurationInput() {
    return this._defaultResultConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_metrics_enabled - computed: true, optional: true, required: false
  private _isMetricsEnabled?: boolean | cdktn.IResolvable; 
  public get isMetricsEnabled() {
    return this.getBooleanAttribute('is_metrics_enabled');
  }
  public set isMetricsEnabled(value: boolean | cdktn.IResolvable) {
    this._isMetricsEnabled = value;
  }
  public resetIsMetricsEnabled() {
    this._isMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetricsEnabledInput() {
    return this._isMetricsEnabled;
  }

  // job_log_status - computed: true, optional: true, required: false
  private _jobLogStatus?: string; 
  public get jobLogStatus() {
    return this.getStringAttribute('job_log_status');
  }
  public set jobLogStatus(value: string) {
    this._jobLogStatus = value;
  }
  public resetJobLogStatus() {
    this._jobLogStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLogStatusInput() {
    return this._jobLogStatus;
  }

  // membership_identifier - computed: true, optional: false, required: false
  public get membershipIdentifier() {
    return this.getStringAttribute('membership_identifier');
  }

  // payment_configuration - computed: true, optional: true, required: false
  private _paymentConfiguration = new CleanroomsMembershipPaymentConfigurationOutputReference(this, "payment_configuration");
  public get paymentConfiguration() {
    return this._paymentConfiguration;
  }
  public putPaymentConfiguration(value: CleanroomsMembershipPaymentConfiguration) {
    this._paymentConfiguration.internalValue = value;
  }
  public resetPaymentConfiguration() {
    this._paymentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentConfigurationInput() {
    return this._paymentConfiguration.internalValue;
  }

  // query_log_status - computed: false, optional: false, required: true
  private _queryLogStatus?: string; 
  public get queryLogStatus() {
    return this.getStringAttribute('query_log_status');
  }
  public set queryLogStatus(value: string) {
    this._queryLogStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogStatusInput() {
    return this._queryLogStatus;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CleanroomsMembershipTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CleanroomsMembershipTags[] | cdktn.IResolvable) {
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
      collaboration_identifier: cdktn.stringToTerraform(this._collaborationIdentifier),
      default_job_result_configuration: cleanroomsMembershipDefaultJobResultConfigurationToTerraform(this._defaultJobResultConfiguration.internalValue),
      default_result_configuration: cleanroomsMembershipDefaultResultConfigurationToTerraform(this._defaultResultConfiguration.internalValue),
      is_metrics_enabled: cdktn.booleanToTerraform(this._isMetricsEnabled),
      job_log_status: cdktn.stringToTerraform(this._jobLogStatus),
      payment_configuration: cleanroomsMembershipPaymentConfigurationToTerraform(this._paymentConfiguration.internalValue),
      query_log_status: cdktn.stringToTerraform(this._queryLogStatus),
      tags: cdktn.listMapper(cleanroomsMembershipTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collaboration_identifier: {
        value: cdktn.stringToHclTerraform(this._collaborationIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_job_result_configuration: {
        value: cleanroomsMembershipDefaultJobResultConfigurationToHclTerraform(this._defaultJobResultConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsMembershipDefaultJobResultConfiguration",
      },
      default_result_configuration: {
        value: cleanroomsMembershipDefaultResultConfigurationToHclTerraform(this._defaultResultConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsMembershipDefaultResultConfiguration",
      },
      is_metrics_enabled: {
        value: cdktn.booleanToHclTerraform(this._isMetricsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      job_log_status: {
        value: cdktn.stringToHclTerraform(this._jobLogStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_configuration: {
        value: cleanroomsMembershipPaymentConfigurationToHclTerraform(this._paymentConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsMembershipPaymentConfiguration",
      },
      query_log_status: {
        value: cdktn.stringToHclTerraform(this._queryLogStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cleanroomsMembershipTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CleanroomsMembershipTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
