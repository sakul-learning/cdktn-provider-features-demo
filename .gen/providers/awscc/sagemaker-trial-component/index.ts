// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SagemakerTrialComponentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#display_name SagemakerTrialComponent#display_name}
  */
  readonly displayName?: string;
  /**
  * The input artifacts for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#input_artifacts SagemakerTrialComponent#input_artifacts}
  */
  readonly inputArtifacts?: { [key: string]: SagemakerTrialComponentInputArtifacts } | cdktn.IResolvable;
  /**
  * Metadata properties of the tracking entity, trial, or trial component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#metadata_properties SagemakerTrialComponent#metadata_properties}
  */
  readonly metadataProperties?: SagemakerTrialComponentMetadataProperties;
  /**
  * The output artifacts for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#output_artifacts SagemakerTrialComponent#output_artifacts}
  */
  readonly outputArtifacts?: { [key: string]: SagemakerTrialComponentOutputArtifacts } | cdktn.IResolvable;
  /**
  * The hyperparameters for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#parameters SagemakerTrialComponent#parameters}
  */
  readonly parameters?: { [key: string]: SagemakerTrialComponentParameters } | cdktn.IResolvable;
  /**
  * The status of the trial component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#status SagemakerTrialComponent#status}
  */
  readonly status?: SagemakerTrialComponentStatus;
  /**
  * A list of tags to associate with the trial component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#tags SagemakerTrialComponent#tags}
  */
  readonly tags?: SagemakerTrialComponentTags[] | cdktn.IResolvable;
  /**
  * The name of the trial component. Must be unique in your AWS account and is not case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#trial_component_name SagemakerTrialComponent#trial_component_name}
  */
  readonly trialComponentName: string;
}
export interface SagemakerTrialComponentInputArtifacts {
  /**
  * The media type of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#media_type SagemakerTrialComponent#media_type}
  */
  readonly mediaType?: string;
  /**
  * The location of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}
  */
  readonly value?: string;
}

export function sagemakerTrialComponentInputArtifactsToTerraform(struct?: SagemakerTrialComponentInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    media_type: cdktn.stringToTerraform(struct!.mediaType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerTrialComponentInputArtifactsToHclTerraform(struct?: SagemakerTrialComponentInputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    media_type: {
      value: cdktn.stringToHclTerraform(struct!.mediaType),
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

export class SagemakerTrialComponentInputArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SagemakerTrialComponentInputArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrialComponentInputArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mediaType = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mediaType = value.mediaType;
      this._value = value.value;
    }
  }

  // media_type - computed: true, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
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

export class SagemakerTrialComponentInputArtifactsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: SagemakerTrialComponentInputArtifacts } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SagemakerTrialComponentInputArtifactsOutputReference {
    return new SagemakerTrialComponentInputArtifactsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SagemakerTrialComponentMetadataProperties {
  /**
  * The commit ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#commit_id SagemakerTrialComponent#commit_id}
  */
  readonly commitId?: string;
  /**
  * The entity this entity was generated by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#generated_by SagemakerTrialComponent#generated_by}
  */
  readonly generatedBy?: string;
  /**
  * The project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#project_id SagemakerTrialComponent#project_id}
  */
  readonly projectId?: string;
  /**
  * The repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#repository SagemakerTrialComponent#repository}
  */
  readonly repository?: string;
}

export function sagemakerTrialComponentMetadataPropertiesToTerraform(struct?: SagemakerTrialComponentMetadataProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commit_id: cdktn.stringToTerraform(struct!.commitId),
    generated_by: cdktn.stringToTerraform(struct!.generatedBy),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    repository: cdktn.stringToTerraform(struct!.repository),
  }
}


export function sagemakerTrialComponentMetadataPropertiesToHclTerraform(struct?: SagemakerTrialComponentMetadataProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commit_id: {
      value: cdktn.stringToHclTerraform(struct!.commitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generated_by: {
      value: cdktn.stringToHclTerraform(struct!.generatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktn.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrialComponentMetadataPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerTrialComponentMetadataProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitId = this._commitId;
    }
    if (this._generatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedBy = this._generatedBy;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrialComponentMetadataProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commitId = undefined;
      this._generatedBy = undefined;
      this._projectId = undefined;
      this._repository = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commitId = value.commitId;
      this._generatedBy = value.generatedBy;
      this._projectId = value.projectId;
      this._repository = value.repository;
    }
  }

  // commit_id - computed: true, optional: true, required: false
  private _commitId?: string; 
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }
  public set commitId(value: string) {
    this._commitId = value;
  }
  public resetCommitId() {
    this._commitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitIdInput() {
    return this._commitId;
  }

  // generated_by - computed: true, optional: true, required: false
  private _generatedBy?: string; 
  public get generatedBy() {
    return this.getStringAttribute('generated_by');
  }
  public set generatedBy(value: string) {
    this._generatedBy = value;
  }
  public resetGeneratedBy() {
    this._generatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedByInput() {
    return this._generatedBy;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repository - computed: true, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}
export interface SagemakerTrialComponentOutputArtifacts {
  /**
  * The media type of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#media_type SagemakerTrialComponent#media_type}
  */
  readonly mediaType?: string;
  /**
  * The location of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}
  */
  readonly value?: string;
}

export function sagemakerTrialComponentOutputArtifactsToTerraform(struct?: SagemakerTrialComponentOutputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    media_type: cdktn.stringToTerraform(struct!.mediaType),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerTrialComponentOutputArtifactsToHclTerraform(struct?: SagemakerTrialComponentOutputArtifacts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    media_type: {
      value: cdktn.stringToHclTerraform(struct!.mediaType),
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

export class SagemakerTrialComponentOutputArtifactsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SagemakerTrialComponentOutputArtifacts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrialComponentOutputArtifacts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mediaType = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mediaType = value.mediaType;
      this._value = value.value;
    }
  }

  // media_type - computed: true, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
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

export class SagemakerTrialComponentOutputArtifactsMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: SagemakerTrialComponentOutputArtifacts } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SagemakerTrialComponentOutputArtifactsOutputReference {
    return new SagemakerTrialComponentOutputArtifactsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SagemakerTrialComponentParameters {
  /**
  * The numeric value of a numeric hyperparameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#number_value SagemakerTrialComponent#number_value}
  */
  readonly numberValue?: number;
  /**
  * The string value of a categorical hyperparameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#string_value SagemakerTrialComponent#string_value}
  */
  readonly stringValue?: string;
}

export function sagemakerTrialComponentParametersToTerraform(struct?: SagemakerTrialComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number_value: cdktn.numberToTerraform(struct!.numberValue),
    string_value: cdktn.stringToTerraform(struct!.stringValue),
  }
}


export function sagemakerTrialComponentParametersToHclTerraform(struct?: SagemakerTrialComponentParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number_value: {
      value: cdktn.numberToHclTerraform(struct!.numberValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktn.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrialComponentParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SagemakerTrialComponentParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberValue = this._numberValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrialComponentParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberValue = undefined;
      this._stringValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberValue = value.numberValue;
      this._stringValue = value.stringValue;
    }
  }

  // number_value - computed: true, optional: true, required: false
  private _numberValue?: number; 
  public get numberValue() {
    return this.getNumberAttribute('number_value');
  }
  public set numberValue(value: number) {
    this._numberValue = value;
  }
  public resetNumberValue() {
    this._numberValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberValueInput() {
    return this._numberValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}

export class SagemakerTrialComponentParametersMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: SagemakerTrialComponentParameters } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SagemakerTrialComponentParametersOutputReference {
    return new SagemakerTrialComponentParametersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SagemakerTrialComponentStatus {
  /**
  * If the component failed, a message describing why.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#message SagemakerTrialComponent#message}
  */
  readonly message?: string;
  /**
  * The status of the trial component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#primary_status SagemakerTrialComponent#primary_status}
  */
  readonly primaryStatus?: string;
}

export function sagemakerTrialComponentStatusToTerraform(struct?: SagemakerTrialComponentStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.stringToTerraform(struct!.message),
    primary_status: cdktn.stringToTerraform(struct!.primaryStatus),
  }
}


export function sagemakerTrialComponentStatusToHclTerraform(struct?: SagemakerTrialComponentStatus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_status: {
      value: cdktn.stringToHclTerraform(struct!.primaryStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerTrialComponentStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SagemakerTrialComponentStatus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._primaryStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryStatus = this._primaryStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerTrialComponentStatus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._primaryStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._primaryStatus = value.primaryStatus;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // primary_status - computed: true, optional: true, required: false
  private _primaryStatus?: string; 
  public get primaryStatus() {
    return this.getStringAttribute('primary_status');
  }
  public set primaryStatus(value: string) {
    this._primaryStatus = value;
  }
  public resetPrimaryStatus() {
    this._primaryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryStatusInput() {
    return this._primaryStatus;
  }
}
export interface SagemakerTrialComponentTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#key SagemakerTrialComponent#key}
  */
  readonly key?: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#value SagemakerTrialComponent#value}
  */
  readonly value?: string;
}

export function sagemakerTrialComponentTagsToTerraform(struct?: SagemakerTrialComponentTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function sagemakerTrialComponentTagsToHclTerraform(struct?: SagemakerTrialComponentTags | cdktn.IResolvable): any {
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

export class SagemakerTrialComponentTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SagemakerTrialComponentTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SagemakerTrialComponentTags | cdktn.IResolvable | undefined) {
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

export class SagemakerTrialComponentTagsList extends cdktn.ComplexList {
  public internalValue? : SagemakerTrialComponentTags[] | cdktn.IResolvable

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
  public get(index: number): SagemakerTrialComponentTagsOutputReference {
    return new SagemakerTrialComponentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component awscc_sagemaker_trial_component}
*/
export class SagemakerTrialComponent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_sagemaker_trial_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SagemakerTrialComponent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerTrialComponent to import
  * @param importFromId The id of the existing SagemakerTrialComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerTrialComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_trial_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/sagemaker_trial_component awscc_sagemaker_trial_component} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerTrialComponentConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerTrialComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_trial_component',
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
    this._displayName = config.displayName;
    this._inputArtifacts.internalValue = config.inputArtifacts;
    this._metadataProperties.internalValue = config.metadataProperties;
    this._outputArtifacts.internalValue = config.outputArtifacts;
    this._parameters.internalValue = config.parameters;
    this._status.internalValue = config.status;
    this._tags.internalValue = config.tags;
    this._trialComponentName = config.trialComponentName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_artifacts - computed: true, optional: true, required: false
  private _inputArtifacts = new SagemakerTrialComponentInputArtifactsMap(this, "input_artifacts");
  public get inputArtifacts() {
    return this._inputArtifacts;
  }
  public putInputArtifacts(value: { [key: string]: SagemakerTrialComponentInputArtifacts } | cdktn.IResolvable) {
    this._inputArtifacts.internalValue = value;
  }
  public resetInputArtifacts() {
    this._inputArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputArtifactsInput() {
    return this._inputArtifacts.internalValue;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // lineage_group_arn - computed: true, optional: false, required: false
  public get lineageGroupArn() {
    return this.getStringAttribute('lineage_group_arn');
  }

  // metadata_properties - computed: true, optional: true, required: false
  private _metadataProperties = new SagemakerTrialComponentMetadataPropertiesOutputReference(this, "metadata_properties");
  public get metadataProperties() {
    return this._metadataProperties;
  }
  public putMetadataProperties(value: SagemakerTrialComponentMetadataProperties) {
    this._metadataProperties.internalValue = value;
  }
  public resetMetadataProperties() {
    this._metadataProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPropertiesInput() {
    return this._metadataProperties.internalValue;
  }

  // output_artifacts - computed: true, optional: true, required: false
  private _outputArtifacts = new SagemakerTrialComponentOutputArtifactsMap(this, "output_artifacts");
  public get outputArtifacts() {
    return this._outputArtifacts;
  }
  public putOutputArtifacts(value: { [key: string]: SagemakerTrialComponentOutputArtifacts } | cdktn.IResolvable) {
    this._outputArtifacts.internalValue = value;
  }
  public resetOutputArtifacts() {
    this._outputArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputArtifactsInput() {
    return this._outputArtifacts.internalValue;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new SagemakerTrialComponentParametersMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: { [key: string]: SagemakerTrialComponentParameters } | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status = new SagemakerTrialComponentStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: SagemakerTrialComponentStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SagemakerTrialComponentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SagemakerTrialComponentTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // trial_component_arn - computed: true, optional: false, required: false
  public get trialComponentArn() {
    return this.getStringAttribute('trial_component_arn');
  }

  // trial_component_name - computed: false, optional: false, required: true
  private _trialComponentName?: string; 
  public get trialComponentName() {
    return this.getStringAttribute('trial_component_name');
  }
  public set trialComponentName(value: string) {
    this._trialComponentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trialComponentNameInput() {
    return this._trialComponentName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktn.stringToTerraform(this._displayName),
      input_artifacts: cdktn.hashMapper(sagemakerTrialComponentInputArtifactsToTerraform)(this._inputArtifacts.internalValue),
      metadata_properties: sagemakerTrialComponentMetadataPropertiesToTerraform(this._metadataProperties.internalValue),
      output_artifacts: cdktn.hashMapper(sagemakerTrialComponentOutputArtifactsToTerraform)(this._outputArtifacts.internalValue),
      parameters: cdktn.hashMapper(sagemakerTrialComponentParametersToTerraform)(this._parameters.internalValue),
      status: sagemakerTrialComponentStatusToTerraform(this._status.internalValue),
      tags: cdktn.listMapper(sagemakerTrialComponentTagsToTerraform, false)(this._tags.internalValue),
      trial_component_name: cdktn.stringToTerraform(this._trialComponentName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_artifacts: {
        value: cdktn.hashMapperHcl(sagemakerTrialComponentInputArtifactsToHclTerraform)(this._inputArtifacts.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SagemakerTrialComponentInputArtifactsMap",
      },
      metadata_properties: {
        value: sagemakerTrialComponentMetadataPropertiesToHclTerraform(this._metadataProperties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerTrialComponentMetadataProperties",
      },
      output_artifacts: {
        value: cdktn.hashMapperHcl(sagemakerTrialComponentOutputArtifactsToHclTerraform)(this._outputArtifacts.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SagemakerTrialComponentOutputArtifactsMap",
      },
      parameters: {
        value: cdktn.hashMapperHcl(sagemakerTrialComponentParametersToHclTerraform)(this._parameters.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "SagemakerTrialComponentParametersMap",
      },
      status: {
        value: sagemakerTrialComponentStatusToHclTerraform(this._status.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SagemakerTrialComponentStatus",
      },
      tags: {
        value: cdktn.listMapperHcl(sagemakerTrialComponentTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerTrialComponentTagsList",
      },
      trial_component_name: {
        value: cdktn.stringToHclTerraform(this._trialComponentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
