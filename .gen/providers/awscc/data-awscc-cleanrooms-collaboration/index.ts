// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_collaboration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCleanroomsCollaborationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_collaboration#id DataAwsccCleanroomsCollaboration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities {
}

export function dataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesToTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesToHclTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationCreatorMlMemberAbilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_ml_member_abilities - computed: true, optional: false, required: false
  public get customMlMemberAbilities() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_ml_member_abilities'));
  }
}
export interface DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute {
}

export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeToTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeToHclTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobCompute | undefined) {
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
export interface DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference {
}

export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceToTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceToHclTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference | undefined) {
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
export interface DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining {
}

export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingToTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingToHclTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining | undefined) {
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
export interface DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration {
}

export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationToTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationToHclTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration | undefined) {
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
export interface DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning {
}

export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningToTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningToHclTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_inference - computed: true, optional: false, required: false
  private _modelInference = new DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference(this, "model_inference");
  public get modelInference() {
    return this._modelInference;
  }

  // model_training - computed: true, optional: false, required: false
  private _modelTraining = new DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference(this, "model_training");
  public get modelTraining() {
    return this._modelTraining;
  }

  // synthetic_data_generation - computed: true, optional: false, required: false
  private _syntheticDataGeneration = new DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(this, "synthetic_data_generation");
  public get syntheticDataGeneration() {
    return this._syntheticDataGeneration;
  }
}
export interface DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute {
}

export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeToTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeToHclTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryCompute | undefined) {
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
export interface DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration {
}

export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationToTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationCreatorPaymentConfigurationToHclTerraform(struct?: DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationCreatorPaymentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_compute - computed: true, optional: false, required: false
  private _jobCompute = new DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference(this, "job_compute");
  public get jobCompute() {
    return this._jobCompute;
  }

  // machine_learning - computed: true, optional: false, required: false
  private _machineLearning = new DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference(this, "machine_learning");
  public get machineLearning() {
    return this._machineLearning;
  }

  // query_compute - computed: true, optional: false, required: false
  private _queryCompute = new DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference(this, "query_compute");
  public get queryCompute() {
    return this._queryCompute;
  }
}
export interface DataAwsccCleanroomsCollaborationDataEncryptionMetadata {
}

export function dataAwsccCleanroomsCollaborationDataEncryptionMetadataToTerraform(struct?: DataAwsccCleanroomsCollaborationDataEncryptionMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationDataEncryptionMetadataToHclTerraform(struct?: DataAwsccCleanroomsCollaborationDataEncryptionMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationDataEncryptionMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationDataEncryptionMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_cleartext - computed: true, optional: false, required: false
  public get allowCleartext() {
    return this.getBooleanAttribute('allow_cleartext');
  }

  // allow_duplicates - computed: true, optional: false, required: false
  public get allowDuplicates() {
    return this.getBooleanAttribute('allow_duplicates');
  }

  // allow_joins_on_columns_with_different_names - computed: true, optional: false, required: false
  public get allowJoinsOnColumnsWithDifferentNames() {
    return this.getBooleanAttribute('allow_joins_on_columns_with_different_names');
  }

  // preserve_nulls - computed: true, optional: false, required: false
  public get preserveNulls() {
    return this.getBooleanAttribute('preserve_nulls');
  }
}
export interface DataAwsccCleanroomsCollaborationMembersMlMemberAbilities {
}

export function dataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesToTerraform(struct?: DataAwsccCleanroomsCollaborationMembersMlMemberAbilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesToHclTerraform(struct?: DataAwsccCleanroomsCollaborationMembersMlMemberAbilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationMembersMlMemberAbilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationMembersMlMemberAbilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_ml_member_abilities - computed: true, optional: false, required: false
  public get customMlMemberAbilities() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_ml_member_abilities'));
  }
}
export interface DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute {
}

export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeToTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeToHclTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobCompute | undefined) {
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
export interface DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference {
}

export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceToTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceToHclTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference | undefined) {
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
export interface DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining {
}

export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingToTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingToHclTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining | undefined) {
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
export interface DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration {
}

export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationToTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationToHclTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration | undefined) {
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
export interface DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning {
}

export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningToTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningToHclTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_inference - computed: true, optional: false, required: false
  private _modelInference = new DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference(this, "model_inference");
  public get modelInference() {
    return this._modelInference;
  }

  // model_training - computed: true, optional: false, required: false
  private _modelTraining = new DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference(this, "model_training");
  public get modelTraining() {
    return this._modelTraining;
  }

  // synthetic_data_generation - computed: true, optional: false, required: false
  private _syntheticDataGeneration = new DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(this, "synthetic_data_generation");
  public get syntheticDataGeneration() {
    return this._syntheticDataGeneration;
  }
}
export interface DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute {
}

export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeToTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeToHclTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryCompute | undefined) {
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
export interface DataAwsccCleanroomsCollaborationMembersPaymentConfiguration {
}

export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationToTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationMembersPaymentConfigurationToHclTerraform(struct?: DataAwsccCleanroomsCollaborationMembersPaymentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsCollaborationMembersPaymentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationMembersPaymentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_compute - computed: true, optional: false, required: false
  private _jobCompute = new DataAwsccCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference(this, "job_compute");
  public get jobCompute() {
    return this._jobCompute;
  }

  // machine_learning - computed: true, optional: false, required: false
  private _machineLearning = new DataAwsccCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference(this, "machine_learning");
  public get machineLearning() {
    return this._machineLearning;
  }

  // query_compute - computed: true, optional: false, required: false
  private _queryCompute = new DataAwsccCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference(this, "query_compute");
  public get queryCompute() {
    return this._queryCompute;
  }
}
export interface DataAwsccCleanroomsCollaborationMembers {
}

export function dataAwsccCleanroomsCollaborationMembersToTerraform(struct?: DataAwsccCleanroomsCollaborationMembers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationMembersToHclTerraform(struct?: DataAwsccCleanroomsCollaborationMembers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationMembersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsCollaborationMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationMembers | undefined) {
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // member_abilities - computed: true, optional: false, required: false
  public get memberAbilities() {
    return cdktn.Fn.tolist(this.getListAttribute('member_abilities'));
  }

  // ml_member_abilities - computed: true, optional: false, required: false
  private _mlMemberAbilities = new DataAwsccCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference(this, "ml_member_abilities");
  public get mlMemberAbilities() {
    return this._mlMemberAbilities;
  }

  // payment_configuration - computed: true, optional: false, required: false
  private _paymentConfiguration = new DataAwsccCleanroomsCollaborationMembersPaymentConfigurationOutputReference(this, "payment_configuration");
  public get paymentConfiguration() {
    return this._paymentConfiguration;
  }
}

export class DataAwsccCleanroomsCollaborationMembersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsCollaborationMembersOutputReference {
    return new DataAwsccCleanroomsCollaborationMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsCollaborationTags {
}

export function dataAwsccCleanroomsCollaborationTagsToTerraform(struct?: DataAwsccCleanroomsCollaborationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsCollaborationTagsToHclTerraform(struct?: DataAwsccCleanroomsCollaborationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsCollaborationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsCollaborationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsCollaborationTags | undefined) {
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

export class DataAwsccCleanroomsCollaborationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsCollaborationTagsOutputReference {
    return new DataAwsccCleanroomsCollaborationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_collaboration awscc_cleanrooms_collaboration}
*/
export class DataAwsccCleanroomsCollaboration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cleanrooms_collaboration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCleanroomsCollaboration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCleanroomsCollaboration to import
  * @param importFromId The id of the existing DataAwsccCleanroomsCollaboration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCleanroomsCollaboration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_collaboration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/data-sources/cleanrooms_collaboration awscc_cleanrooms_collaboration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCleanroomsCollaborationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCleanroomsCollaborationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cleanrooms_collaboration',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_result_regions - computed: true, optional: false, required: false
  public get allowedResultRegions() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_result_regions'));
  }

  // analytics_engine - computed: true, optional: false, required: false
  public get analyticsEngine() {
    return this.getStringAttribute('analytics_engine');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_approved_change_types - computed: true, optional: false, required: false
  public get autoApprovedChangeTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('auto_approved_change_types'));
  }

  // collaboration_identifier - computed: true, optional: false, required: false
  public get collaborationIdentifier() {
    return this.getStringAttribute('collaboration_identifier');
  }

  // creator_display_name - computed: true, optional: false, required: false
  public get creatorDisplayName() {
    return this.getStringAttribute('creator_display_name');
  }

  // creator_member_abilities - computed: true, optional: false, required: false
  public get creatorMemberAbilities() {
    return cdktn.Fn.tolist(this.getListAttribute('creator_member_abilities'));
  }

  // creator_ml_member_abilities - computed: true, optional: false, required: false
  private _creatorMlMemberAbilities = new DataAwsccCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference(this, "creator_ml_member_abilities");
  public get creatorMlMemberAbilities() {
    return this._creatorMlMemberAbilities;
  }

  // creator_payment_configuration - computed: true, optional: false, required: false
  private _creatorPaymentConfiguration = new DataAwsccCleanroomsCollaborationCreatorPaymentConfigurationOutputReference(this, "creator_payment_configuration");
  public get creatorPaymentConfiguration() {
    return this._creatorPaymentConfiguration;
  }

  // data_encryption_metadata - computed: true, optional: false, required: false
  private _dataEncryptionMetadata = new DataAwsccCleanroomsCollaborationDataEncryptionMetadataOutputReference(this, "data_encryption_metadata");
  public get dataEncryptionMetadata() {
    return this._dataEncryptionMetadata;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // members - computed: true, optional: false, required: false
  private _members = new DataAwsccCleanroomsCollaborationMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // query_log_status - computed: true, optional: false, required: false
  public get queryLogStatus() {
    return this.getStringAttribute('query_log_status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCleanroomsCollaborationTagsList(this, "tags", true);
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
