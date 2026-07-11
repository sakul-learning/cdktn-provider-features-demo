// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanrooms_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCleanroomsMembershipConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanrooms_membership#id DataAwsccCleanroomsMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 {
}

export function dataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3ToTerraform(struct?: DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3ToHclTerraform(struct?: DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
}
export interface DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration {
}

export function dataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationToTerraform(struct?: DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationToHclTerraform(struct?: DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccCleanroomsMembershipDefaultJobResultConfiguration {
}

export function dataAwsccCleanroomsMembershipDefaultJobResultConfigurationToTerraform(struct?: DataAwsccCleanroomsMembershipDefaultJobResultConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipDefaultJobResultConfigurationToHclTerraform(struct?: DataAwsccCleanroomsMembershipDefaultJobResultConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipDefaultJobResultConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipDefaultJobResultConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_configuration - computed: true, optional: false, required: false
  private _outputConfiguration = new DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference(this, "output_configuration");
  public get outputConfiguration() {
    return this._outputConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 {
}

export function dataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToTerraform(struct?: DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToHclTerraform(struct?: DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // result_format - computed: true, optional: false, required: false
  public get resultFormat() {
    return this.getStringAttribute('result_format');
  }

  // single_file_output - computed: true, optional: false, required: false
  public get singleFileOutput() {
    return this.getBooleanAttribute('single_file_output');
  }
}
export interface DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration {
}

export function dataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationToTerraform(struct?: DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationToHclTerraform(struct?: DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataAwsccCleanroomsMembershipDefaultResultConfiguration {
}

export function dataAwsccCleanroomsMembershipDefaultResultConfigurationToTerraform(struct?: DataAwsccCleanroomsMembershipDefaultResultConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipDefaultResultConfigurationToHclTerraform(struct?: DataAwsccCleanroomsMembershipDefaultResultConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipDefaultResultConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipDefaultResultConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_configuration - computed: true, optional: false, required: false
  private _outputConfiguration = new DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference(this, "output_configuration");
  public get outputConfiguration() {
    return this._outputConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute {
}

export function dataAwsccCleanroomsMembershipPaymentConfigurationJobComputeToTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipPaymentConfigurationJobComputeToHclTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_responsible - computed: true, optional: false, required: false
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
}
export interface DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference {
}

export function dataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceToTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceToHclTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_responsible - computed: true, optional: false, required: false
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
}
export interface DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining {
}

export function dataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingToTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingToHclTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_responsible - computed: true, optional: false, required: false
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
}
export interface DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration {
}

export function dataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationToTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationToHclTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_responsible - computed: true, optional: false, required: false
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
}
export interface DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning {
}

export function dataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningToTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningToHclTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_inference - computed: true, optional: false, required: false
  private _modelInference = new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference(this, "model_inference");
  public get modelInference() {
    return this._modelInference;
  }

  // model_training - computed: true, optional: false, required: false
  private _modelTraining = new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference(this, "model_training");
  public get modelTraining() {
    return this._modelTraining;
  }

  // synthetic_data_generation - computed: true, optional: false, required: false
  private _syntheticDataGeneration = new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(this, "synthetic_data_generation");
  public get syntheticDataGeneration() {
    return this._syntheticDataGeneration;
  }
}
export interface DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute {
}

export function dataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeToTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeToHclTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_responsible - computed: true, optional: false, required: false
  public get isResponsible() {
    return this.getBooleanAttribute('is_responsible');
  }
}
export interface DataAwsccCleanroomsMembershipPaymentConfiguration {
}

export function dataAwsccCleanroomsMembershipPaymentConfigurationToTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipPaymentConfigurationToHclTerraform(struct?: DataAwsccCleanroomsMembershipPaymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsMembershipPaymentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipPaymentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_compute - computed: true, optional: false, required: false
  private _jobCompute = new DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference(this, "job_compute");
  public get jobCompute() {
    return this._jobCompute;
  }

  // machine_learning - computed: true, optional: false, required: false
  private _machineLearning = new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference(this, "machine_learning");
  public get machineLearning() {
    return this._machineLearning;
  }

  // query_compute - computed: true, optional: false, required: false
  private _queryCompute = new DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference(this, "query_compute");
  public get queryCompute() {
    return this._queryCompute;
  }
}
export interface DataAwsccCleanroomsMembershipTags {
}

export function dataAwsccCleanroomsMembershipTagsToTerraform(struct?: DataAwsccCleanroomsMembershipTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsMembershipTagsToHclTerraform(struct?: DataAwsccCleanroomsMembershipTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsMembershipTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsMembershipTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsMembershipTags | undefined) {
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

export class DataAwsccCleanroomsMembershipTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsMembershipTagsOutputReference {
    return new DataAwsccCleanroomsMembershipTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanrooms_membership awscc_cleanrooms_membership}
*/
export class DataAwsccCleanroomsMembership extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cleanrooms_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCleanroomsMembership resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCleanroomsMembership to import
  * @param importFromId The id of the existing DataAwsccCleanroomsMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCleanroomsMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanrooms_membership awscc_cleanrooms_membership} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCleanroomsMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCleanroomsMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cleanrooms_membership',
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

  // collaboration_identifier - computed: true, optional: false, required: false
  public get collaborationIdentifier() {
    return this.getStringAttribute('collaboration_identifier');
  }

  // default_job_result_configuration - computed: true, optional: false, required: false
  private _defaultJobResultConfiguration = new DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference(this, "default_job_result_configuration");
  public get defaultJobResultConfiguration() {
    return this._defaultJobResultConfiguration;
  }

  // default_result_configuration - computed: true, optional: false, required: false
  private _defaultResultConfiguration = new DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference(this, "default_result_configuration");
  public get defaultResultConfiguration() {
    return this._defaultResultConfiguration;
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

  // is_metrics_enabled - computed: true, optional: false, required: false
  public get isMetricsEnabled() {
    return this.getBooleanAttribute('is_metrics_enabled');
  }

  // job_log_status - computed: true, optional: false, required: false
  public get jobLogStatus() {
    return this.getStringAttribute('job_log_status');
  }

  // membership_identifier - computed: true, optional: false, required: false
  public get membershipIdentifier() {
    return this.getStringAttribute('membership_identifier');
  }

  // payment_configuration - computed: true, optional: false, required: false
  private _paymentConfiguration = new DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference(this, "payment_configuration");
  public get paymentConfiguration() {
    return this._paymentConfiguration;
  }

  // query_log_status - computed: true, optional: false, required: false
  public get queryLogStatus() {
    return this.getStringAttribute('query_log_status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCleanroomsMembershipTagsList(this, "tags", true);
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
