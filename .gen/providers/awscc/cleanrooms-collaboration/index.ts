// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CleanroomsCollaborationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#allowed_result_regions CleanroomsCollaboration#allowed_result_regions}
  */
  readonly allowedResultRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#analytics_engine CleanroomsCollaboration#analytics_engine}
  */
  readonly analyticsEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#auto_approved_change_types CleanroomsCollaboration#auto_approved_change_types}
  */
  readonly autoApprovedChangeTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}
  */
  readonly creatorDisplayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}
  */
  readonly creatorMemberAbilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CleanroomsCollaboration#creator_ml_member_abilities}
  */
  readonly creatorMlMemberAbilities?: CleanroomsCollaborationCreatorMlMemberAbilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#creator_payment_configuration CleanroomsCollaboration#creator_payment_configuration}
  */
  readonly creatorPaymentConfiguration?: CleanroomsCollaborationCreatorPaymentConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}
  */
  readonly dataEncryptionMetadata?: CleanroomsCollaborationDataEncryptionMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_metrics_enabled CleanroomsCollaboration#is_metrics_enabled}
  */
  readonly isMetricsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#job_log_status CleanroomsCollaboration#job_log_status}
  */
  readonly jobLogStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#members CleanroomsCollaboration#members}
  */
  readonly members?: CleanroomsCollaborationMembers[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}
  */
  readonly queryLogStatus: string;
  /**
  * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}
  */
  readonly tags?: CleanroomsCollaborationTags[] | cdktn.IResolvable;
}
export interface CleanroomsCollaborationCreatorMlMemberAbilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}
  */
  readonly customMlMemberAbilities?: string[];
}

export function cleanroomsCollaborationCreatorMlMemberAbilitiesToTerraform(struct?: CleanroomsCollaborationCreatorMlMemberAbilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_ml_member_abilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customMlMemberAbilities),
  }
}


export function cleanroomsCollaborationCreatorMlMemberAbilitiesToHclTerraform(struct?: CleanroomsCollaborationCreatorMlMemberAbilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_ml_member_abilities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customMlMemberAbilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationCreatorMlMemberAbilities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMlMemberAbilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMlMemberAbilities = this._customMlMemberAbilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsCollaborationCreatorMlMemberAbilities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMlMemberAbilities = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMlMemberAbilities = value.customMlMemberAbilities;
    }
  }

  // custom_ml_member_abilities - computed: true, optional: true, required: false
  private _customMlMemberAbilities?: string[];
  public get customMlMemberAbilities() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_ml_member_abilities'));
  }
  public set customMlMemberAbilities(value: string[]) {
    this._customMlMemberAbilities = value;
  }
  public resetCustomMlMemberAbilities() {
    this._customMlMemberAbilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMlMemberAbilitiesInput() {
    return this._customMlMemberAbilities;
  }
}
export interface CleanroomsCollaborationCreatorPaymentConfigurationJobCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationCreatorPaymentConfigurationJobComputeToTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationCreatorPaymentConfigurationJobComputeToHclTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationCreatorPaymentConfigurationJobCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceToTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceToHclTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingToTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingToHclTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationToTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationToHclTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}
  */
  readonly modelInference?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}
  */
  readonly modelTraining?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}
  */
  readonly syntheticDataGeneration?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration;
}

export function cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningToTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_inference: cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceToTerraform(struct!.modelInference),
    model_training: cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingToTerraform(struct!.modelTraining),
    synthetic_data_generation: cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationToTerraform(struct!.syntheticDataGeneration),
  }
}


export function cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningToHclTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_inference: {
      value: cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceToHclTerraform(struct!.modelInference),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference",
    },
    model_training: {
      value: cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingToHclTerraform(struct!.modelTraining),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining",
    },
    synthetic_data_generation: {
      value: cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationToHclTerraform(struct!.syntheticDataGeneration),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning | cdktn.IResolvable | undefined) {
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
  private _modelInference = new CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference(this, "model_inference");
  public get modelInference() {
    return this._modelInference;
  }
  public putModelInference(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference) {
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
  private _modelTraining = new CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference(this, "model_training");
  public get modelTraining() {
    return this._modelTraining;
  }
  public putModelTraining(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining) {
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
  private _syntheticDataGeneration = new CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(this, "synthetic_data_generation");
  public get syntheticDataGeneration() {
    return this._syntheticDataGeneration;
  }
  public putSyntheticDataGeneration(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration) {
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
export interface CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationCreatorPaymentConfigurationQueryComputeToTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationCreatorPaymentConfigurationQueryComputeToHclTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationCreatorPaymentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}
  */
  readonly jobCompute?: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}
  */
  readonly machineLearning?: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}
  */
  readonly queryCompute?: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute;
}

export function cleanroomsCollaborationCreatorPaymentConfigurationToTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_compute: cleanroomsCollaborationCreatorPaymentConfigurationJobComputeToTerraform(struct!.jobCompute),
    machine_learning: cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningToTerraform(struct!.machineLearning),
    query_compute: cleanroomsCollaborationCreatorPaymentConfigurationQueryComputeToTerraform(struct!.queryCompute),
  }
}


export function cleanroomsCollaborationCreatorPaymentConfigurationToHclTerraform(struct?: CleanroomsCollaborationCreatorPaymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_compute: {
      value: cleanroomsCollaborationCreatorPaymentConfigurationJobComputeToHclTerraform(struct!.jobCompute),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationCreatorPaymentConfigurationJobCompute",
    },
    machine_learning: {
      value: cleanroomsCollaborationCreatorPaymentConfigurationMachineLearningToHclTerraform(struct!.machineLearning),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning",
    },
    query_compute: {
      value: cleanroomsCollaborationCreatorPaymentConfigurationQueryComputeToHclTerraform(struct!.queryCompute),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsCollaborationCreatorPaymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationCreatorPaymentConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationCreatorPaymentConfiguration | cdktn.IResolvable | undefined) {
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
  private _jobCompute = new CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference(this, "job_compute");
  public get jobCompute() {
    return this._jobCompute;
  }
  public putJobCompute(value: CleanroomsCollaborationCreatorPaymentConfigurationJobCompute) {
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
  private _machineLearning = new CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference(this, "machine_learning");
  public get machineLearning() {
    return this._machineLearning;
  }
  public putMachineLearning(value: CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning) {
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
  private _queryCompute = new CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference(this, "query_compute");
  public get queryCompute() {
    return this._queryCompute;
  }
  public putQueryCompute(value: CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute) {
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
export interface CleanroomsCollaborationDataEncryptionMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#allow_cleartext CleanroomsCollaboration#allow_cleartext}
  */
  readonly allowCleartext?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}
  */
  readonly allowDuplicates?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}
  */
  readonly allowJoinsOnColumnsWithDifferentNames?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}
  */
  readonly preserveNulls?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationDataEncryptionMetadataToTerraform(struct?: CleanroomsCollaborationDataEncryptionMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_cleartext: cdktn.booleanToTerraform(struct!.allowCleartext),
    allow_duplicates: cdktn.booleanToTerraform(struct!.allowDuplicates),
    allow_joins_on_columns_with_different_names: cdktn.booleanToTerraform(struct!.allowJoinsOnColumnsWithDifferentNames),
    preserve_nulls: cdktn.booleanToTerraform(struct!.preserveNulls),
  }
}


export function cleanroomsCollaborationDataEncryptionMetadataToHclTerraform(struct?: CleanroomsCollaborationDataEncryptionMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_cleartext: {
      value: cdktn.booleanToHclTerraform(struct!.allowCleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_duplicates: {
      value: cdktn.booleanToHclTerraform(struct!.allowDuplicates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_joins_on_columns_with_different_names: {
      value: cdktn.booleanToHclTerraform(struct!.allowJoinsOnColumnsWithDifferentNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_nulls: {
      value: cdktn.booleanToHclTerraform(struct!.preserveNulls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsCollaborationDataEncryptionMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationDataEncryptionMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCleartext = this._allowCleartext;
    }
    if (this._allowDuplicates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDuplicates = this._allowDuplicates;
    }
    if (this._allowJoinsOnColumnsWithDifferentNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowJoinsOnColumnsWithDifferentNames = this._allowJoinsOnColumnsWithDifferentNames;
    }
    if (this._preserveNulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveNulls = this._preserveNulls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsCollaborationDataEncryptionMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCleartext = undefined;
      this._allowDuplicates = undefined;
      this._allowJoinsOnColumnsWithDifferentNames = undefined;
      this._preserveNulls = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCleartext = value.allowCleartext;
      this._allowDuplicates = value.allowDuplicates;
      this._allowJoinsOnColumnsWithDifferentNames = value.allowJoinsOnColumnsWithDifferentNames;
      this._preserveNulls = value.preserveNulls;
    }
  }

  // allow_cleartext - computed: true, optional: true, required: false
  private _allowCleartext?: boolean | cdktn.IResolvable;
  public get allowCleartext() {
    return this.getBooleanAttribute('allow_cleartext');
  }
  public set allowCleartext(value: boolean | cdktn.IResolvable) {
    this._allowCleartext = value;
  }
  public resetAllowCleartext() {
    this._allowCleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCleartextInput() {
    return this._allowCleartext;
  }

  // allow_duplicates - computed: true, optional: true, required: false
  private _allowDuplicates?: boolean | cdktn.IResolvable;
  public get allowDuplicates() {
    return this.getBooleanAttribute('allow_duplicates');
  }
  public set allowDuplicates(value: boolean | cdktn.IResolvable) {
    this._allowDuplicates = value;
  }
  public resetAllowDuplicates() {
    this._allowDuplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicatesInput() {
    return this._allowDuplicates;
  }

  // allow_joins_on_columns_with_different_names - computed: true, optional: true, required: false
  private _allowJoinsOnColumnsWithDifferentNames?: boolean | cdktn.IResolvable;
  public get allowJoinsOnColumnsWithDifferentNames() {
    return this.getBooleanAttribute('allow_joins_on_columns_with_different_names');
  }
  public set allowJoinsOnColumnsWithDifferentNames(value: boolean | cdktn.IResolvable) {
    this._allowJoinsOnColumnsWithDifferentNames = value;
  }
  public resetAllowJoinsOnColumnsWithDifferentNames() {
    this._allowJoinsOnColumnsWithDifferentNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowJoinsOnColumnsWithDifferentNamesInput() {
    return this._allowJoinsOnColumnsWithDifferentNames;
  }

  // preserve_nulls - computed: true, optional: true, required: false
  private _preserveNulls?: boolean | cdktn.IResolvable;
  public get preserveNulls() {
    return this.getBooleanAttribute('preserve_nulls');
  }
  public set preserveNulls(value: boolean | cdktn.IResolvable) {
    this._preserveNulls = value;
  }
  public resetPreserveNulls() {
    this._preserveNulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveNullsInput() {
    return this._preserveNulls;
  }
}
export interface CleanroomsCollaborationMembersMlMemberAbilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}
  */
  readonly customMlMemberAbilities?: string[];
}

export function cleanroomsCollaborationMembersMlMemberAbilitiesToTerraform(struct?: CleanroomsCollaborationMembersMlMemberAbilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_ml_member_abilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customMlMemberAbilities),
  }
}


export function cleanroomsCollaborationMembersMlMemberAbilitiesToHclTerraform(struct?: CleanroomsCollaborationMembersMlMemberAbilities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_ml_member_abilities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customMlMemberAbilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationMembersMlMemberAbilities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMlMemberAbilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMlMemberAbilities = this._customMlMemberAbilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsCollaborationMembersMlMemberAbilities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customMlMemberAbilities = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customMlMemberAbilities = value.customMlMemberAbilities;
    }
  }

  // custom_ml_member_abilities - computed: true, optional: true, required: false
  private _customMlMemberAbilities?: string[];
  public get customMlMemberAbilities() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_ml_member_abilities'));
  }
  public set customMlMemberAbilities(value: string[]) {
    this._customMlMemberAbilities = value;
  }
  public resetCustomMlMemberAbilities() {
    this._customMlMemberAbilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMlMemberAbilitiesInput() {
    return this._customMlMemberAbilities;
  }
}
export interface CleanroomsCollaborationMembersPaymentConfigurationJobCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationMembersPaymentConfigurationJobComputeToTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationJobCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationMembersPaymentConfigurationJobComputeToHclTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationJobCompute | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationMembersPaymentConfigurationJobCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationMembersPaymentConfigurationJobCompute | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceToTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceToHclTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingToTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingToHclTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationToTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationToHclTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationMembersPaymentConfigurationMachineLearning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}
  */
  readonly modelInference?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}
  */
  readonly modelTraining?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}
  */
  readonly syntheticDataGeneration?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration;
}

export function cleanroomsCollaborationMembersPaymentConfigurationMachineLearningToTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_inference: cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceToTerraform(struct!.modelInference),
    model_training: cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingToTerraform(struct!.modelTraining),
    synthetic_data_generation: cleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationToTerraform(struct!.syntheticDataGeneration),
  }
}


export function cleanroomsCollaborationMembersPaymentConfigurationMachineLearningToHclTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_inference: {
      value: cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceToHclTerraform(struct!.modelInference),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference",
    },
    model_training: {
      value: cleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingToHclTerraform(struct!.modelTraining),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining",
    },
    synthetic_data_generation: {
      value: cleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationToHclTerraform(struct!.syntheticDataGeneration),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationMembersPaymentConfigurationMachineLearning | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning | cdktn.IResolvable | undefined) {
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
  private _modelInference = new CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference(this, "model_inference");
  public get modelInference() {
    return this._modelInference;
  }
  public putModelInference(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference) {
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
  private _modelTraining = new CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference(this, "model_training");
  public get modelTraining() {
    return this._modelTraining;
  }
  public putModelTraining(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining) {
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
  private _syntheticDataGeneration = new CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(this, "synthetic_data_generation");
  public get syntheticDataGeneration() {
    return this._syntheticDataGeneration;
  }
  public putSyntheticDataGeneration(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration) {
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
export interface CleanroomsCollaborationMembersPaymentConfigurationQueryCompute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}
  */
  readonly isResponsible?: boolean | cdktn.IResolvable;
}

export function cleanroomsCollaborationMembersPaymentConfigurationQueryComputeToTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_responsible: cdktn.booleanToTerraform(struct!.isResponsible),
  }
}


export function cleanroomsCollaborationMembersPaymentConfigurationQueryComputeToHclTerraform(struct?: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationMembersPaymentConfigurationQueryCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute | cdktn.IResolvable | undefined) {
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
export interface CleanroomsCollaborationMembersPaymentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}
  */
  readonly jobCompute?: CleanroomsCollaborationMembersPaymentConfigurationJobCompute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}
  */
  readonly machineLearning?: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}
  */
  readonly queryCompute?: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute;
}

export function cleanroomsCollaborationMembersPaymentConfigurationToTerraform(struct?: CleanroomsCollaborationMembersPaymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_compute: cleanroomsCollaborationMembersPaymentConfigurationJobComputeToTerraform(struct!.jobCompute),
    machine_learning: cleanroomsCollaborationMembersPaymentConfigurationMachineLearningToTerraform(struct!.machineLearning),
    query_compute: cleanroomsCollaborationMembersPaymentConfigurationQueryComputeToTerraform(struct!.queryCompute),
  }
}


export function cleanroomsCollaborationMembersPaymentConfigurationToHclTerraform(struct?: CleanroomsCollaborationMembersPaymentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_compute: {
      value: cleanroomsCollaborationMembersPaymentConfigurationJobComputeToHclTerraform(struct!.jobCompute),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationMembersPaymentConfigurationJobCompute",
    },
    machine_learning: {
      value: cleanroomsCollaborationMembersPaymentConfigurationMachineLearningToHclTerraform(struct!.machineLearning),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationMembersPaymentConfigurationMachineLearning",
    },
    query_compute: {
      value: cleanroomsCollaborationMembersPaymentConfigurationQueryComputeToHclTerraform(struct!.queryCompute),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationMembersPaymentConfigurationQueryCompute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsCollaborationMembersPaymentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsCollaborationMembersPaymentConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationMembersPaymentConfiguration | cdktn.IResolvable | undefined) {
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
  private _jobCompute = new CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference(this, "job_compute");
  public get jobCompute() {
    return this._jobCompute;
  }
  public putJobCompute(value: CleanroomsCollaborationMembersPaymentConfigurationJobCompute) {
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
  private _machineLearning = new CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference(this, "machine_learning");
  public get machineLearning() {
    return this._machineLearning;
  }
  public putMachineLearning(value: CleanroomsCollaborationMembersPaymentConfigurationMachineLearning) {
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
  private _queryCompute = new CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference(this, "query_compute");
  public get queryCompute() {
    return this._queryCompute;
  }
  public putQueryCompute(value: CleanroomsCollaborationMembersPaymentConfigurationQueryCompute) {
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
export interface CleanroomsCollaborationMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}
  */
  readonly memberAbilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#ml_member_abilities CleanroomsCollaboration#ml_member_abilities}
  */
  readonly mlMemberAbilities?: CleanroomsCollaborationMembersMlMemberAbilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#payment_configuration CleanroomsCollaboration#payment_configuration}
  */
  readonly paymentConfiguration?: CleanroomsCollaborationMembersPaymentConfiguration;
}

export function cleanroomsCollaborationMembersToTerraform(struct?: CleanroomsCollaborationMembers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    member_abilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.memberAbilities),
    ml_member_abilities: cleanroomsCollaborationMembersMlMemberAbilitiesToTerraform(struct!.mlMemberAbilities),
    payment_configuration: cleanroomsCollaborationMembersPaymentConfigurationToTerraform(struct!.paymentConfiguration),
  }
}


export function cleanroomsCollaborationMembersToHclTerraform(struct?: CleanroomsCollaborationMembers | cdktn.IResolvable): any {
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
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_abilities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.memberAbilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ml_member_abilities: {
      value: cleanroomsCollaborationMembersMlMemberAbilitiesToHclTerraform(struct!.mlMemberAbilities),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationMembersMlMemberAbilities",
    },
    payment_configuration: {
      value: cleanroomsCollaborationMembersPaymentConfigurationToHclTerraform(struct!.paymentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsCollaborationMembersPaymentConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsCollaborationMembersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsCollaborationMembers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._memberAbilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberAbilities = this._memberAbilities;
    }
    if (this._mlMemberAbilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlMemberAbilities = this._mlMemberAbilities?.internalValue;
    }
    if (this._paymentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentConfiguration = this._paymentConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsCollaborationMembers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._displayName = undefined;
      this._memberAbilities = undefined;
      this._mlMemberAbilities.internalValue = undefined;
      this._paymentConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._displayName = value.displayName;
      this._memberAbilities = value.memberAbilities;
      this._mlMemberAbilities.internalValue = value.mlMemberAbilities;
      this._paymentConfiguration.internalValue = value.paymentConfiguration;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // member_abilities - computed: true, optional: true, required: false
  private _memberAbilities?: string[];
  public get memberAbilities() {
    return cdktn.Fn.tolist(this.getListAttribute('member_abilities'));
  }
  public set memberAbilities(value: string[]) {
    this._memberAbilities = value;
  }
  public resetMemberAbilities() {
    this._memberAbilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAbilitiesInput() {
    return this._memberAbilities;
  }

  // ml_member_abilities - computed: true, optional: true, required: false
  private _mlMemberAbilities = new CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference(this, "ml_member_abilities");
  public get mlMemberAbilities() {
    return this._mlMemberAbilities;
  }
  public putMlMemberAbilities(value: CleanroomsCollaborationMembersMlMemberAbilities) {
    this._mlMemberAbilities.internalValue = value;
  }
  public resetMlMemberAbilities() {
    this._mlMemberAbilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlMemberAbilitiesInput() {
    return this._mlMemberAbilities.internalValue;
  }

  // payment_configuration - computed: true, optional: true, required: false
  private _paymentConfiguration = new CleanroomsCollaborationMembersPaymentConfigurationOutputReference(this, "payment_configuration");
  public get paymentConfiguration() {
    return this._paymentConfiguration;
  }
  public putPaymentConfiguration(value: CleanroomsCollaborationMembersPaymentConfiguration) {
    this._paymentConfiguration.internalValue = value;
  }
  public resetPaymentConfiguration() {
    this._paymentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentConfigurationInput() {
    return this._paymentConfiguration.internalValue;
  }
}

export class CleanroomsCollaborationMembersList extends cdktn.ComplexList {
  public internalValue? : CleanroomsCollaborationMembers[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsCollaborationMembersOutputReference {
    return new CleanroomsCollaborationMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsCollaborationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#key CleanroomsCollaboration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#value CleanroomsCollaboration#value}
  */
  readonly value?: string;
}

export function cleanroomsCollaborationTagsToTerraform(struct?: CleanroomsCollaborationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cleanroomsCollaborationTagsToHclTerraform(struct?: CleanroomsCollaborationTags | cdktn.IResolvable): any {
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

export class CleanroomsCollaborationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsCollaborationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsCollaborationTags | cdktn.IResolvable | undefined) {
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

export class CleanroomsCollaborationTagsList extends cdktn.ComplexList {
  public internalValue? : CleanroomsCollaborationTags[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsCollaborationTagsOutputReference {
    return new CleanroomsCollaborationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration awscc_cleanrooms_collaboration}
*/
export class CleanroomsCollaboration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cleanrooms_collaboration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CleanroomsCollaboration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CleanroomsCollaboration to import
  * @param importFromId The id of the existing CleanroomsCollaboration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CleanroomsCollaboration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_collaboration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanrooms_collaboration awscc_cleanrooms_collaboration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CleanroomsCollaborationConfig
  */
  public constructor(scope: Construct, id: string, config: CleanroomsCollaborationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cleanrooms_collaboration',
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
    this._allowedResultRegions = config.allowedResultRegions;
    this._analyticsEngine = config.analyticsEngine;
    this._autoApprovedChangeTypes = config.autoApprovedChangeTypes;
    this._creatorDisplayName = config.creatorDisplayName;
    this._creatorMemberAbilities = config.creatorMemberAbilities;
    this._creatorMlMemberAbilities.internalValue = config.creatorMlMemberAbilities;
    this._creatorPaymentConfiguration.internalValue = config.creatorPaymentConfiguration;
    this._dataEncryptionMetadata.internalValue = config.dataEncryptionMetadata;
    this._description = config.description;
    this._isMetricsEnabled = config.isMetricsEnabled;
    this._jobLogStatus = config.jobLogStatus;
    this._members.internalValue = config.members;
    this._name = config.name;
    this._queryLogStatus = config.queryLogStatus;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_result_regions - computed: true, optional: true, required: false
  private _allowedResultRegions?: string[];
  public get allowedResultRegions() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_result_regions'));
  }
  public set allowedResultRegions(value: string[]) {
    this._allowedResultRegions = value;
  }
  public resetAllowedResultRegions() {
    this._allowedResultRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedResultRegionsInput() {
    return this._allowedResultRegions;
  }

  // analytics_engine - computed: true, optional: true, required: false
  private _analyticsEngine?: string;
  public get analyticsEngine() {
    return this.getStringAttribute('analytics_engine');
  }
  public set analyticsEngine(value: string) {
    this._analyticsEngine = value;
  }
  public resetAnalyticsEngine() {
    this._analyticsEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsEngineInput() {
    return this._analyticsEngine;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_approved_change_types - computed: true, optional: true, required: false
  private _autoApprovedChangeTypes?: string[];
  public get autoApprovedChangeTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('auto_approved_change_types'));
  }
  public set autoApprovedChangeTypes(value: string[]) {
    this._autoApprovedChangeTypes = value;
  }
  public resetAutoApprovedChangeTypes() {
    this._autoApprovedChangeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovedChangeTypesInput() {
    return this._autoApprovedChangeTypes;
  }

  // collaboration_identifier - computed: true, optional: false, required: false
  public get collaborationIdentifier() {
    return this.getStringAttribute('collaboration_identifier');
  }

  // creator_display_name - computed: false, optional: false, required: true
  private _creatorDisplayName?: string;
  public get creatorDisplayName() {
    return this.getStringAttribute('creator_display_name');
  }
  public set creatorDisplayName(value: string) {
    this._creatorDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorDisplayNameInput() {
    return this._creatorDisplayName;
  }

  // creator_member_abilities - computed: true, optional: true, required: false
  private _creatorMemberAbilities?: string[];
  public get creatorMemberAbilities() {
    return cdktn.Fn.tolist(this.getListAttribute('creator_member_abilities'));
  }
  public set creatorMemberAbilities(value: string[]) {
    this._creatorMemberAbilities = value;
  }
  public resetCreatorMemberAbilities() {
    this._creatorMemberAbilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorMemberAbilitiesInput() {
    return this._creatorMemberAbilities;
  }

  // creator_ml_member_abilities - computed: true, optional: true, required: false
  private _creatorMlMemberAbilities = new CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference(this, "creator_ml_member_abilities");
  public get creatorMlMemberAbilities() {
    return this._creatorMlMemberAbilities;
  }
  public putCreatorMlMemberAbilities(value: CleanroomsCollaborationCreatorMlMemberAbilities) {
    this._creatorMlMemberAbilities.internalValue = value;
  }
  public resetCreatorMlMemberAbilities() {
    this._creatorMlMemberAbilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorMlMemberAbilitiesInput() {
    return this._creatorMlMemberAbilities.internalValue;
  }

  // creator_payment_configuration - computed: true, optional: true, required: false
  private _creatorPaymentConfiguration = new CleanroomsCollaborationCreatorPaymentConfigurationOutputReference(this, "creator_payment_configuration");
  public get creatorPaymentConfiguration() {
    return this._creatorPaymentConfiguration;
  }
  public putCreatorPaymentConfiguration(value: CleanroomsCollaborationCreatorPaymentConfiguration) {
    this._creatorPaymentConfiguration.internalValue = value;
  }
  public resetCreatorPaymentConfiguration() {
    this._creatorPaymentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorPaymentConfigurationInput() {
    return this._creatorPaymentConfiguration.internalValue;
  }

  // data_encryption_metadata - computed: true, optional: true, required: false
  private _dataEncryptionMetadata = new CleanroomsCollaborationDataEncryptionMetadataOutputReference(this, "data_encryption_metadata");
  public get dataEncryptionMetadata() {
    return this._dataEncryptionMetadata;
  }
  public putDataEncryptionMetadata(value: CleanroomsCollaborationDataEncryptionMetadata) {
    this._dataEncryptionMetadata.internalValue = value;
  }
  public resetDataEncryptionMetadata() {
    this._dataEncryptionMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEncryptionMetadataInput() {
    return this._dataEncryptionMetadata.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // members - computed: true, optional: true, required: false
  private _members = new CleanroomsCollaborationMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: CleanroomsCollaborationMembers[] | cdktn.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
  private _tags = new CleanroomsCollaborationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CleanroomsCollaborationTags[] | cdktn.IResolvable) {
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
      allowed_result_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedResultRegions),
      analytics_engine: cdktn.stringToTerraform(this._analyticsEngine),
      auto_approved_change_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._autoApprovedChangeTypes),
      creator_display_name: cdktn.stringToTerraform(this._creatorDisplayName),
      creator_member_abilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._creatorMemberAbilities),
      creator_ml_member_abilities: cleanroomsCollaborationCreatorMlMemberAbilitiesToTerraform(this._creatorMlMemberAbilities.internalValue),
      creator_payment_configuration: cleanroomsCollaborationCreatorPaymentConfigurationToTerraform(this._creatorPaymentConfiguration.internalValue),
      data_encryption_metadata: cleanroomsCollaborationDataEncryptionMetadataToTerraform(this._dataEncryptionMetadata.internalValue),
      description: cdktn.stringToTerraform(this._description),
      is_metrics_enabled: cdktn.booleanToTerraform(this._isMetricsEnabled),
      job_log_status: cdktn.stringToTerraform(this._jobLogStatus),
      members: cdktn.listMapper(cleanroomsCollaborationMembersToTerraform, false)(this._members.internalValue),
      name: cdktn.stringToTerraform(this._name),
      query_log_status: cdktn.stringToTerraform(this._queryLogStatus),
      tags: cdktn.listMapper(cleanroomsCollaborationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_result_regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedResultRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      analytics_engine: {
        value: cdktn.stringToHclTerraform(this._analyticsEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_approved_change_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._autoApprovedChangeTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      creator_display_name: {
        value: cdktn.stringToHclTerraform(this._creatorDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creator_member_abilities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._creatorMemberAbilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      creator_ml_member_abilities: {
        value: cleanroomsCollaborationCreatorMlMemberAbilitiesToHclTerraform(this._creatorMlMemberAbilities.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsCollaborationCreatorMlMemberAbilities",
      },
      creator_payment_configuration: {
        value: cleanroomsCollaborationCreatorPaymentConfigurationToHclTerraform(this._creatorPaymentConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsCollaborationCreatorPaymentConfiguration",
      },
      data_encryption_metadata: {
        value: cleanroomsCollaborationDataEncryptionMetadataToHclTerraform(this._dataEncryptionMetadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsCollaborationDataEncryptionMetadata",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      members: {
        value: cdktn.listMapperHcl(cleanroomsCollaborationMembersToHclTerraform, false)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CleanroomsCollaborationMembersList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_log_status: {
        value: cdktn.stringToHclTerraform(this._queryLogStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cleanroomsCollaborationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CleanroomsCollaborationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
