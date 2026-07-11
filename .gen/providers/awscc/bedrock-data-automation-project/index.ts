// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockDataAutomationProjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * Custom output configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#custom_output_configuration BedrockDataAutomationProject#custom_output_configuration}
  */
  readonly customOutputConfiguration?: BedrockDataAutomationProjectCustomOutputConfiguration;
  /**
  * KMS encryption context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#kms_encryption_context BedrockDataAutomationProject#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * KMS key identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#kms_key_id BedrockDataAutomationProject#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Override configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#override_configuration BedrockDataAutomationProject#override_configuration}
  */
  readonly overrideConfiguration?: BedrockDataAutomationProjectOverrideConfiguration;
  /**
  * Description of the DataAutomationProject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#project_description BedrockDataAutomationProject#project_description}
  */
  readonly projectDescription?: string;
  /**
  * Name of the DataAutomationProject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#project_name BedrockDataAutomationProject#project_name}
  */
  readonly projectName: string;
  /**
  * Type of the DataAutomationProject - Sync or Async
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#project_type BedrockDataAutomationProject#project_type}
  */
  readonly projectType?: string;
  /**
  * Standard output configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#standard_output_configuration BedrockDataAutomationProject#standard_output_configuration}
  */
  readonly standardOutputConfiguration?: BedrockDataAutomationProjectStandardOutputConfiguration;
  /**
  * List of Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#tags BedrockDataAutomationProject#tags}
  */
  readonly tags?: BedrockDataAutomationProjectTags[] | cdktn.IResolvable;
}
export interface BedrockDataAutomationProjectCustomOutputConfigurationBlueprints {
  /**
  * ARN of a Blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#blueprint_arn BedrockDataAutomationProject#blueprint_arn}
  */
  readonly blueprintArn?: string;
  /**
  * Stage of the Blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#blueprint_stage BedrockDataAutomationProject#blueprint_stage}
  */
  readonly blueprintStage?: string;
  /**
  * Blueprint Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#blueprint_version BedrockDataAutomationProject#blueprint_version}
  */
  readonly blueprintVersion?: string;
}

export function bedrockDataAutomationProjectCustomOutputConfigurationBlueprintsToTerraform(struct?: BedrockDataAutomationProjectCustomOutputConfigurationBlueprints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blueprint_arn: cdktn.stringToTerraform(struct!.blueprintArn),
    blueprint_stage: cdktn.stringToTerraform(struct!.blueprintStage),
    blueprint_version: cdktn.stringToTerraform(struct!.blueprintVersion),
  }
}


export function bedrockDataAutomationProjectCustomOutputConfigurationBlueprintsToHclTerraform(struct?: BedrockDataAutomationProjectCustomOutputConfigurationBlueprints | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blueprint_arn: {
      value: cdktn.stringToHclTerraform(struct!.blueprintArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blueprint_stage: {
      value: cdktn.stringToHclTerraform(struct!.blueprintStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blueprint_version: {
      value: cdktn.stringToHclTerraform(struct!.blueprintVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectCustomOutputConfigurationBlueprintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockDataAutomationProjectCustomOutputConfigurationBlueprints | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintArn = this._blueprintArn;
    }
    if (this._blueprintStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintStage = this._blueprintStage;
    }
    if (this._blueprintVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintVersion = this._blueprintVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectCustomOutputConfigurationBlueprints | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintArn = undefined;
      this._blueprintStage = undefined;
      this._blueprintVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintArn = value.blueprintArn;
      this._blueprintStage = value.blueprintStage;
      this._blueprintVersion = value.blueprintVersion;
    }
  }

  // blueprint_arn - computed: true, optional: true, required: false
  private _blueprintArn?: string;
  public get blueprintArn() {
    return this.getStringAttribute('blueprint_arn');
  }
  public set blueprintArn(value: string) {
    this._blueprintArn = value;
  }
  public resetBlueprintArn() {
    this._blueprintArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintArnInput() {
    return this._blueprintArn;
  }

  // blueprint_stage - computed: true, optional: true, required: false
  private _blueprintStage?: string;
  public get blueprintStage() {
    return this.getStringAttribute('blueprint_stage');
  }
  public set blueprintStage(value: string) {
    this._blueprintStage = value;
  }
  public resetBlueprintStage() {
    this._blueprintStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintStageInput() {
    return this._blueprintStage;
  }

  // blueprint_version - computed: true, optional: true, required: false
  private _blueprintVersion?: string;
  public get blueprintVersion() {
    return this.getStringAttribute('blueprint_version');
  }
  public set blueprintVersion(value: string) {
    this._blueprintVersion = value;
  }
  public resetBlueprintVersion() {
    this._blueprintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintVersionInput() {
    return this._blueprintVersion;
  }
}

export class BedrockDataAutomationProjectCustomOutputConfigurationBlueprintsList extends cdktn.ComplexList {
  public internalValue? : BedrockDataAutomationProjectCustomOutputConfigurationBlueprints[] | cdktn.IResolvable

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
  public get(index: number): BedrockDataAutomationProjectCustomOutputConfigurationBlueprintsOutputReference {
    return new BedrockDataAutomationProjectCustomOutputConfigurationBlueprintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockDataAutomationProjectCustomOutputConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#blueprints BedrockDataAutomationProject#blueprints}
  */
  readonly blueprints?: BedrockDataAutomationProjectCustomOutputConfigurationBlueprints[] | cdktn.IResolvable;
}

export function bedrockDataAutomationProjectCustomOutputConfigurationToTerraform(struct?: BedrockDataAutomationProjectCustomOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    blueprints: cdktn.listMapper(bedrockDataAutomationProjectCustomOutputConfigurationBlueprintsToTerraform, false)(struct!.blueprints),
  }
}


export function bedrockDataAutomationProjectCustomOutputConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectCustomOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    blueprints: {
      value: cdktn.listMapperHcl(bedrockDataAutomationProjectCustomOutputConfigurationBlueprintsToHclTerraform, false)(struct!.blueprints),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockDataAutomationProjectCustomOutputConfigurationBlueprintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectCustomOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectCustomOutputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprints = this._blueprints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectCustomOutputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprints.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprints.internalValue = value.blueprints;
    }
  }

  // blueprints - computed: true, optional: true, required: false
  private _blueprints = new BedrockDataAutomationProjectCustomOutputConfigurationBlueprintsList(this, "blueprints", false);
  public get blueprints() {
    return this._blueprints;
  }
  public putBlueprints(value: BedrockDataAutomationProjectCustomOutputConfigurationBlueprints[] | cdktn.IResolvable) {
    this._blueprints.internalValue = value;
  }
  public resetBlueprints() {
    this._blueprints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintsInput() {
    return this._blueprints.internalValue;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#generative_output_language BedrockDataAutomationProject#generative_output_language}
  */
  readonly generativeOutputLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#identify_multiple_languages BedrockDataAutomationProject#identify_multiple_languages}
  */
  readonly identifyMultipleLanguages?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#input_languages BedrockDataAutomationProject#input_languages}
  */
  readonly inputLanguages?: string[];
}

export function bedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    generative_output_language: cdktn.stringToTerraform(struct!.generativeOutputLanguage),
    identify_multiple_languages: cdktn.booleanToTerraform(struct!.identifyMultipleLanguages),
    input_languages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputLanguages),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    generative_output_language: {
      value: cdktn.stringToHclTerraform(struct!.generativeOutputLanguage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identify_multiple_languages: {
      value: cdktn.booleanToHclTerraform(struct!.identifyMultipleLanguages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_languages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputLanguages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generativeOutputLanguage !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeOutputLanguage = this._generativeOutputLanguage;
    }
    if (this._identifyMultipleLanguages !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifyMultipleLanguages = this._identifyMultipleLanguages;
    }
    if (this._inputLanguages !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputLanguages = this._inputLanguages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generativeOutputLanguage = undefined;
      this._identifyMultipleLanguages = undefined;
      this._inputLanguages = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generativeOutputLanguage = value.generativeOutputLanguage;
      this._identifyMultipleLanguages = value.identifyMultipleLanguages;
      this._inputLanguages = value.inputLanguages;
    }
  }

  // generative_output_language - computed: true, optional: true, required: false
  private _generativeOutputLanguage?: string;
  public get generativeOutputLanguage() {
    return this.getStringAttribute('generative_output_language');
  }
  public set generativeOutputLanguage(value: string) {
    this._generativeOutputLanguage = value;
  }
  public resetGenerativeOutputLanguage() {
    this._generativeOutputLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeOutputLanguageInput() {
    return this._generativeOutputLanguage;
  }

  // identify_multiple_languages - computed: true, optional: true, required: false
  private _identifyMultipleLanguages?: boolean | cdktn.IResolvable;
  public get identifyMultipleLanguages() {
    return this.getBooleanAttribute('identify_multiple_languages');
  }
  public set identifyMultipleLanguages(value: boolean | cdktn.IResolvable) {
    this._identifyMultipleLanguages = value;
  }
  public resetIdentifyMultipleLanguages() {
    this._identifyMultipleLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifyMultipleLanguagesInput() {
    return this._identifyMultipleLanguages;
  }

  // input_languages - computed: true, optional: true, required: false
  private _inputLanguages?: string[];
  public get inputLanguages() {
    return this.getListAttribute('input_languages');
  }
  public set inputLanguages(value: string[]) {
    this._inputLanguages = value;
  }
  public resetInputLanguages() {
    this._inputLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputLanguagesInput() {
    return this._inputLanguages;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#pii_entity_types BedrockDataAutomationProject#pii_entity_types}
  */
  readonly piiEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#redaction_mask_mode BedrockDataAutomationProject#redaction_mask_mode}
  */
  readonly redactionMaskMode?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
    redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entity_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redaction_mask_mode: {
      value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._redactionMaskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionMaskMode = this._redactionMaskMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntityTypes = undefined;
      this._redactionMaskMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntityTypes = value.piiEntityTypes;
      this._redactionMaskMode = value.redactionMaskMode;
    }
  }

  // pii_entity_types - computed: true, optional: true, required: false
  private _piiEntityTypes?: string[];
  public get piiEntityTypes() {
    return this.getListAttribute('pii_entity_types');
  }
  public set piiEntityTypes(value: string[]) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // redaction_mask_mode - computed: true, optional: true, required: false
  private _redactionMaskMode?: string;
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
  public set redactionMaskMode(value: string) {
    this._redactionMaskMode = value;
  }
  public resetRedactionMaskMode() {
    this._redactionMaskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionMaskModeInput() {
    return this._redactionMaskMode;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#detection_mode BedrockDataAutomationProject#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#detection_scope BedrockDataAutomationProject#detection_scope}
  */
  readonly detectionScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#pii_entities_configuration BedrockDataAutomationProject#pii_entities_configuration}
  */
  readonly piiEntitiesConfiguration?: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration;
}

export function bedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
    detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
    pii_entities_configuration: bedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct!.piiEntitiesConfiguration),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detection_mode: {
      value: cdktn.stringToHclTerraform(struct!.detectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_scope: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pii_entities_configuration: {
      value: bedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct!.piiEntitiesConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._detectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionScope = this._detectionScope;
    }
    if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionMode = undefined;
      this._detectionScope = undefined;
      this._piiEntitiesConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionMode = value.detectionMode;
      this._detectionScope = value.detectionScope;
      this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
    }
  }

  // detection_mode - computed: true, optional: true, required: false
  private _detectionMode?: string;
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // detection_scope - computed: true, optional: true, required: false
  private _detectionScope?: string[];
  public get detectionScope() {
    return this.getListAttribute('detection_scope');
  }
  public set detectionScope(value: string[]) {
    this._detectionScope = value;
  }
  public resetDetectionScope() {
    this._detectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionScopeInput() {
    return this._detectionScope;
  }

  // pii_entities_configuration - computed: true, optional: true, required: false
  private _piiEntitiesConfiguration = new BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this, "pii_entities_configuration");
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
  public putPiiEntitiesConfiguration(value: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration) {
    this._piiEntitiesConfiguration.internalValue = value;
  }
  public resetPiiEntitiesConfiguration() {
    this._piiEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigurationInput() {
    return this._piiEntitiesConfiguration.internalValue;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationAudio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#language_configuration BedrockDataAutomationProject#language_configuration}
  */
  readonly languageConfiguration?: BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#modality_processing BedrockDataAutomationProject#modality_processing}
  */
  readonly modalityProcessing?: BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#sensitive_data_configuration BedrockDataAutomationProject#sensitive_data_configuration}
  */
  readonly sensitiveDataConfiguration?: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration;
}

export function bedrockDataAutomationProjectOverrideConfigurationAudioToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    language_configuration: bedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationToTerraform(struct!.languageConfiguration),
    modality_processing: bedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingToTerraform(struct!.modalityProcessing),
    sensitive_data_configuration: bedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToTerraform(struct!.sensitiveDataConfiguration),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationAudioToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    language_configuration: {
      value: bedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationToHclTerraform(struct!.languageConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration",
    },
    modality_processing: {
      value: bedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingToHclTerraform(struct!.modalityProcessing),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing",
    },
    sensitive_data_configuration: {
      value: bedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToHclTerraform(struct!.sensitiveDataConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationAudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationAudio | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._languageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageConfiguration = this._languageConfiguration?.internalValue;
    }
    if (this._modalityProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
    }
    if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationAudio | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._languageConfiguration.internalValue = undefined;
      this._modalityProcessing.internalValue = undefined;
      this._sensitiveDataConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._languageConfiguration.internalValue = value.languageConfiguration;
      this._modalityProcessing.internalValue = value.modalityProcessing;
      this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
    }
  }

  // language_configuration - computed: true, optional: true, required: false
  private _languageConfiguration = new BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationOutputReference(this, "language_configuration");
  public get languageConfiguration() {
    return this._languageConfiguration;
  }
  public putLanguageConfiguration(value: BedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration) {
    this._languageConfiguration.internalValue = value;
  }
  public resetLanguageConfiguration() {
    this._languageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageConfigurationInput() {
    return this._languageConfiguration.internalValue;
  }

  // modality_processing - computed: true, optional: true, required: false
  private _modalityProcessing = new BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingOutputReference(this, "modality_processing");
  public get modalityProcessing() {
    return this._modalityProcessing;
  }
  public putModalityProcessing(value: BedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing) {
    this._modalityProcessing.internalValue = value;
  }
  public resetModalityProcessing() {
    this._modalityProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityProcessingInput() {
    return this._modalityProcessing.internalValue;
  }

  // sensitive_data_configuration - computed: true, optional: true, required: false
  private _sensitiveDataConfiguration = new BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationOutputReference(this, "sensitive_data_configuration");
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
  public putSensitiveDataConfiguration(value: BedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration) {
    this._sensitiveDataConfiguration.internalValue = value;
  }
  public resetSensitiveDataConfiguration() {
    this._sensitiveDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataConfigurationInput() {
    return this._sensitiveDataConfiguration.internalValue;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#pii_entity_types BedrockDataAutomationProject#pii_entity_types}
  */
  readonly piiEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#redaction_mask_mode BedrockDataAutomationProject#redaction_mask_mode}
  */
  readonly redactionMaskMode?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
    redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entity_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redaction_mask_mode: {
      value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._redactionMaskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionMaskMode = this._redactionMaskMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntityTypes = undefined;
      this._redactionMaskMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntityTypes = value.piiEntityTypes;
      this._redactionMaskMode = value.redactionMaskMode;
    }
  }

  // pii_entity_types - computed: true, optional: true, required: false
  private _piiEntityTypes?: string[];
  public get piiEntityTypes() {
    return this.getListAttribute('pii_entity_types');
  }
  public set piiEntityTypes(value: string[]) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // redaction_mask_mode - computed: true, optional: true, required: false
  private _redactionMaskMode?: string;
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
  public set redactionMaskMode(value: string) {
    this._redactionMaskMode = value;
  }
  public resetRedactionMaskMode() {
    this._redactionMaskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionMaskModeInput() {
    return this._redactionMaskMode;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#detection_mode BedrockDataAutomationProject#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#detection_scope BedrockDataAutomationProject#detection_scope}
  */
  readonly detectionScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#pii_entities_configuration BedrockDataAutomationProject#pii_entities_configuration}
  */
  readonly piiEntitiesConfiguration?: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration;
}

export function bedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
    detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
    pii_entities_configuration: bedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct!.piiEntitiesConfiguration),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detection_mode: {
      value: cdktn.stringToHclTerraform(struct!.detectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_scope: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pii_entities_configuration: {
      value: bedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct!.piiEntitiesConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._detectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionScope = this._detectionScope;
    }
    if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionMode = undefined;
      this._detectionScope = undefined;
      this._piiEntitiesConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionMode = value.detectionMode;
      this._detectionScope = value.detectionScope;
      this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
    }
  }

  // detection_mode - computed: true, optional: true, required: false
  private _detectionMode?: string;
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // detection_scope - computed: true, optional: true, required: false
  private _detectionScope?: string[];
  public get detectionScope() {
    return this.getListAttribute('detection_scope');
  }
  public set detectionScope(value: string[]) {
    this._detectionScope = value;
  }
  public resetDetectionScope() {
    this._detectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionScopeInput() {
    return this._detectionScope;
  }

  // pii_entities_configuration - computed: true, optional: true, required: false
  private _piiEntitiesConfiguration = new BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this, "pii_entities_configuration");
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
  public putPiiEntitiesConfiguration(value: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration) {
    this._piiEntitiesConfiguration.internalValue = value;
  }
  public resetPiiEntitiesConfiguration() {
    this._piiEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigurationInput() {
    return this._piiEntitiesConfiguration.internalValue;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationDocumentSplitter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationDocumentSplitterToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocumentSplitter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationDocumentSplitterToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocumentSplitter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationDocumentSplitterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationDocumentSplitter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationDocumentSplitter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationDocument {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#modality_processing BedrockDataAutomationProject#modality_processing}
  */
  readonly modalityProcessing?: BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#sensitive_data_configuration BedrockDataAutomationProject#sensitive_data_configuration}
  */
  readonly sensitiveDataConfiguration?: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#splitter BedrockDataAutomationProject#splitter}
  */
  readonly splitter?: BedrockDataAutomationProjectOverrideConfigurationDocumentSplitter;
}

export function bedrockDataAutomationProjectOverrideConfigurationDocumentToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    modality_processing: bedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingToTerraform(struct!.modalityProcessing),
    sensitive_data_configuration: bedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToTerraform(struct!.sensitiveDataConfiguration),
    splitter: bedrockDataAutomationProjectOverrideConfigurationDocumentSplitterToTerraform(struct!.splitter),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationDocumentToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    modality_processing: {
      value: bedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingToHclTerraform(struct!.modalityProcessing),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing",
    },
    sensitive_data_configuration: {
      value: bedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToHclTerraform(struct!.sensitiveDataConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration",
    },
    splitter: {
      value: bedrockDataAutomationProjectOverrideConfigurationDocumentSplitterToHclTerraform(struct!.splitter),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationDocumentSplitter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationDocument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modalityProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
    }
    if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
    }
    if (this._splitter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitter = this._splitter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationDocument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = undefined;
      this._sensitiveDataConfiguration.internalValue = undefined;
      this._splitter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = value.modalityProcessing;
      this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
      this._splitter.internalValue = value.splitter;
    }
  }

  // modality_processing - computed: true, optional: true, required: false
  private _modalityProcessing = new BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingOutputReference(this, "modality_processing");
  public get modalityProcessing() {
    return this._modalityProcessing;
  }
  public putModalityProcessing(value: BedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing) {
    this._modalityProcessing.internalValue = value;
  }
  public resetModalityProcessing() {
    this._modalityProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityProcessingInput() {
    return this._modalityProcessing.internalValue;
  }

  // sensitive_data_configuration - computed: true, optional: true, required: false
  private _sensitiveDataConfiguration = new BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationOutputReference(this, "sensitive_data_configuration");
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
  public putSensitiveDataConfiguration(value: BedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration) {
    this._sensitiveDataConfiguration.internalValue = value;
  }
  public resetSensitiveDataConfiguration() {
    this._sensitiveDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataConfigurationInput() {
    return this._sensitiveDataConfiguration.internalValue;
  }

  // splitter - computed: true, optional: true, required: false
  private _splitter = new BedrockDataAutomationProjectOverrideConfigurationDocumentSplitterOutputReference(this, "splitter");
  public get splitter() {
    return this._splitter;
  }
  public putSplitter(value: BedrockDataAutomationProjectOverrideConfigurationDocumentSplitter) {
    this._splitter.internalValue = value;
  }
  public resetSplitter() {
    this._splitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitterInput() {
    return this._splitter.internalValue;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#pii_entity_types BedrockDataAutomationProject#pii_entity_types}
  */
  readonly piiEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#redaction_mask_mode BedrockDataAutomationProject#redaction_mask_mode}
  */
  readonly redactionMaskMode?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
    redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entity_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redaction_mask_mode: {
      value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._redactionMaskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionMaskMode = this._redactionMaskMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntityTypes = undefined;
      this._redactionMaskMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntityTypes = value.piiEntityTypes;
      this._redactionMaskMode = value.redactionMaskMode;
    }
  }

  // pii_entity_types - computed: true, optional: true, required: false
  private _piiEntityTypes?: string[];
  public get piiEntityTypes() {
    return this.getListAttribute('pii_entity_types');
  }
  public set piiEntityTypes(value: string[]) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // redaction_mask_mode - computed: true, optional: true, required: false
  private _redactionMaskMode?: string;
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
  public set redactionMaskMode(value: string) {
    this._redactionMaskMode = value;
  }
  public resetRedactionMaskMode() {
    this._redactionMaskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionMaskModeInput() {
    return this._redactionMaskMode;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#detection_mode BedrockDataAutomationProject#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#detection_scope BedrockDataAutomationProject#detection_scope}
  */
  readonly detectionScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#pii_entities_configuration BedrockDataAutomationProject#pii_entities_configuration}
  */
  readonly piiEntitiesConfiguration?: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration;
}

export function bedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
    detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
    pii_entities_configuration: bedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct!.piiEntitiesConfiguration),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detection_mode: {
      value: cdktn.stringToHclTerraform(struct!.detectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_scope: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pii_entities_configuration: {
      value: bedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct!.piiEntitiesConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._detectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionScope = this._detectionScope;
    }
    if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionMode = undefined;
      this._detectionScope = undefined;
      this._piiEntitiesConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionMode = value.detectionMode;
      this._detectionScope = value.detectionScope;
      this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
    }
  }

  // detection_mode - computed: true, optional: true, required: false
  private _detectionMode?: string;
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // detection_scope - computed: true, optional: true, required: false
  private _detectionScope?: string[];
  public get detectionScope() {
    return this.getListAttribute('detection_scope');
  }
  public set detectionScope(value: string[]) {
    this._detectionScope = value;
  }
  public resetDetectionScope() {
    this._detectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionScopeInput() {
    return this._detectionScope;
  }

  // pii_entities_configuration - computed: true, optional: true, required: false
  private _piiEntitiesConfiguration = new BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this, "pii_entities_configuration");
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
  public putPiiEntitiesConfiguration(value: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration) {
    this._piiEntitiesConfiguration.internalValue = value;
  }
  public resetPiiEntitiesConfiguration() {
    this._piiEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigurationInput() {
    return this._piiEntitiesConfiguration.internalValue;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#modality_processing BedrockDataAutomationProject#modality_processing}
  */
  readonly modalityProcessing?: BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#sensitive_data_configuration BedrockDataAutomationProject#sensitive_data_configuration}
  */
  readonly sensitiveDataConfiguration?: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration;
}

export function bedrockDataAutomationProjectOverrideConfigurationImageToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    modality_processing: bedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingToTerraform(struct!.modalityProcessing),
    sensitive_data_configuration: bedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationToTerraform(struct!.sensitiveDataConfiguration),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationImageToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    modality_processing: {
      value: bedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingToHclTerraform(struct!.modalityProcessing),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing",
    },
    sensitive_data_configuration: {
      value: bedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationToHclTerraform(struct!.sensitiveDataConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationImage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modalityProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
    }
    if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationImage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = undefined;
      this._sensitiveDataConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = value.modalityProcessing;
      this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
    }
  }

  // modality_processing - computed: true, optional: true, required: false
  private _modalityProcessing = new BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingOutputReference(this, "modality_processing");
  public get modalityProcessing() {
    return this._modalityProcessing;
  }
  public putModalityProcessing(value: BedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing) {
    this._modalityProcessing.internalValue = value;
  }
  public resetModalityProcessing() {
    this._modalityProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityProcessingInput() {
    return this._modalityProcessing.internalValue;
  }

  // sensitive_data_configuration - computed: true, optional: true, required: false
  private _sensitiveDataConfiguration = new BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationOutputReference(this, "sensitive_data_configuration");
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
  public putSensitiveDataConfiguration(value: BedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration) {
    this._sensitiveDataConfiguration.internalValue = value;
  }
  public resetSensitiveDataConfiguration() {
    this._sensitiveDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataConfigurationInput() {
    return this._sensitiveDataConfiguration.internalValue;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationModalityRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#jpeg BedrockDataAutomationProject#jpeg}
  */
  readonly jpeg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#mov BedrockDataAutomationProject#mov}
  */
  readonly mov?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#mp_4 BedrockDataAutomationProject#mp_4}
  */
  readonly mp4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#png BedrockDataAutomationProject#png}
  */
  readonly png?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationModalityRoutingToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationModalityRouting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    jpeg: cdktn.stringToTerraform(struct!.jpeg),
    mov: cdktn.stringToTerraform(struct!.mov),
    mp_4: cdktn.stringToTerraform(struct!.mp4),
    png: cdktn.stringToTerraform(struct!.png),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationModalityRoutingToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationModalityRouting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    jpeg: {
      value: cdktn.stringToHclTerraform(struct!.jpeg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mov: {
      value: cdktn.stringToHclTerraform(struct!.mov),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mp_4: {
      value: cdktn.stringToHclTerraform(struct!.mp4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    png: {
      value: cdktn.stringToHclTerraform(struct!.png),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationModalityRoutingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationModalityRouting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jpeg !== undefined) {
      hasAnyValues = true;
      internalValueResult.jpeg = this._jpeg;
    }
    if (this._mov !== undefined) {
      hasAnyValues = true;
      internalValueResult.mov = this._mov;
    }
    if (this._mp4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.mp4 = this._mp4;
    }
    if (this._png !== undefined) {
      hasAnyValues = true;
      internalValueResult.png = this._png;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationModalityRouting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jpeg = undefined;
      this._mov = undefined;
      this._mp4 = undefined;
      this._png = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jpeg = value.jpeg;
      this._mov = value.mov;
      this._mp4 = value.mp4;
      this._png = value.png;
    }
  }

  // jpeg - computed: true, optional: true, required: false
  private _jpeg?: string;
  public get jpeg() {
    return this.getStringAttribute('jpeg');
  }
  public set jpeg(value: string) {
    this._jpeg = value;
  }
  public resetJpeg() {
    this._jpeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jpegInput() {
    return this._jpeg;
  }

  // mov - computed: true, optional: true, required: false
  private _mov?: string;
  public get mov() {
    return this.getStringAttribute('mov');
  }
  public set mov(value: string) {
    this._mov = value;
  }
  public resetMov() {
    this._mov = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movInput() {
    return this._mov;
  }

  // mp_4 - computed: true, optional: true, required: false
  private _mp4?: string;
  public get mp4() {
    return this.getStringAttribute('mp_4');
  }
  public set mp4(value: string) {
    this._mp4 = value;
  }
  public resetMp4() {
    this._mp4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mp4Input() {
    return this._mp4;
  }

  // png - computed: true, optional: true, required: false
  private _png?: string;
  public get png() {
    return this.getStringAttribute('png');
  }
  public set png(value: string) {
    this._png = value;
  }
  public resetPng() {
    this._png = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pngInput() {
    return this._png;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#pii_entity_types BedrockDataAutomationProject#pii_entity_types}
  */
  readonly piiEntityTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#redaction_mask_mode BedrockDataAutomationProject#redaction_mask_mode}
  */
  readonly redactionMaskMode?: string;
}

export function bedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pii_entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.piiEntityTypes),
    redaction_mask_mode: cdktn.stringToTerraform(struct!.redactionMaskMode),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pii_entity_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.piiEntityTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redaction_mask_mode: {
      value: cdktn.stringToHclTerraform(struct!.redactionMaskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._redactionMaskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionMaskMode = this._redactionMaskMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._piiEntityTypes = undefined;
      this._redactionMaskMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._piiEntityTypes = value.piiEntityTypes;
      this._redactionMaskMode = value.redactionMaskMode;
    }
  }

  // pii_entity_types - computed: true, optional: true, required: false
  private _piiEntityTypes?: string[];
  public get piiEntityTypes() {
    return this.getListAttribute('pii_entity_types');
  }
  public set piiEntityTypes(value: string[]) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // redaction_mask_mode - computed: true, optional: true, required: false
  private _redactionMaskMode?: string;
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
  public set redactionMaskMode(value: string) {
    this._redactionMaskMode = value;
  }
  public resetRedactionMaskMode() {
    this._redactionMaskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionMaskModeInput() {
    return this._redactionMaskMode;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#detection_mode BedrockDataAutomationProject#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#detection_scope BedrockDataAutomationProject#detection_scope}
  */
  readonly detectionScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#pii_entities_configuration BedrockDataAutomationProject#pii_entities_configuration}
  */
  readonly piiEntitiesConfiguration?: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration;
}

export function bedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    detection_mode: cdktn.stringToTerraform(struct!.detectionMode),
    detection_scope: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.detectionScope),
    pii_entities_configuration: bedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct!.piiEntitiesConfiguration),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    detection_mode: {
      value: cdktn.stringToHclTerraform(struct!.detectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_scope: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.detectionScope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pii_entities_configuration: {
      value: bedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct!.piiEntitiesConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._detectionScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionScope = this._detectionScope;
    }
    if (this._piiEntitiesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntitiesConfiguration = this._piiEntitiesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectionMode = undefined;
      this._detectionScope = undefined;
      this._piiEntitiesConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectionMode = value.detectionMode;
      this._detectionScope = value.detectionScope;
      this._piiEntitiesConfiguration.internalValue = value.piiEntitiesConfiguration;
    }
  }

  // detection_mode - computed: true, optional: true, required: false
  private _detectionMode?: string;
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // detection_scope - computed: true, optional: true, required: false
  private _detectionScope?: string[];
  public get detectionScope() {
    return this.getListAttribute('detection_scope');
  }
  public set detectionScope(value: string[]) {
    this._detectionScope = value;
  }
  public resetDetectionScope() {
    this._detectionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionScopeInput() {
    return this._detectionScope;
  }

  // pii_entities_configuration - computed: true, optional: true, required: false
  private _piiEntitiesConfiguration = new BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this, "pii_entities_configuration");
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
  public putPiiEntitiesConfiguration(value: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration) {
    this._piiEntitiesConfiguration.internalValue = value;
  }
  public resetPiiEntitiesConfiguration() {
    this._piiEntitiesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntitiesConfigurationInput() {
    return this._piiEntitiesConfiguration.internalValue;
  }
}
export interface BedrockDataAutomationProjectOverrideConfigurationVideo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#modality_processing BedrockDataAutomationProject#modality_processing}
  */
  readonly modalityProcessing?: BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#sensitive_data_configuration BedrockDataAutomationProject#sensitive_data_configuration}
  */
  readonly sensitiveDataConfiguration?: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration;
}

export function bedrockDataAutomationProjectOverrideConfigurationVideoToTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    modality_processing: bedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingToTerraform(struct!.modalityProcessing),
    sensitive_data_configuration: bedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToTerraform(struct!.sensitiveDataConfiguration),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationVideoToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    modality_processing: {
      value: bedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingToHclTerraform(struct!.modalityProcessing),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing",
    },
    sensitive_data_configuration: {
      value: bedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToHclTerraform(struct!.sensitiveDataConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationVideoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfigurationVideo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modalityProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityProcessing = this._modalityProcessing?.internalValue;
    }
    if (this._sensitiveDataConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataConfiguration = this._sensitiveDataConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfigurationVideo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = undefined;
      this._sensitiveDataConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modalityProcessing.internalValue = value.modalityProcessing;
      this._sensitiveDataConfiguration.internalValue = value.sensitiveDataConfiguration;
    }
  }

  // modality_processing - computed: true, optional: true, required: false
  private _modalityProcessing = new BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingOutputReference(this, "modality_processing");
  public get modalityProcessing() {
    return this._modalityProcessing;
  }
  public putModalityProcessing(value: BedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing) {
    this._modalityProcessing.internalValue = value;
  }
  public resetModalityProcessing() {
    this._modalityProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityProcessingInput() {
    return this._modalityProcessing.internalValue;
  }

  // sensitive_data_configuration - computed: true, optional: true, required: false
  private _sensitiveDataConfiguration = new BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationOutputReference(this, "sensitive_data_configuration");
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
  public putSensitiveDataConfiguration(value: BedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration) {
    this._sensitiveDataConfiguration.internalValue = value;
  }
  public resetSensitiveDataConfiguration() {
    this._sensitiveDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataConfigurationInput() {
    return this._sensitiveDataConfiguration.internalValue;
  }
}
export interface BedrockDataAutomationProjectOverrideConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#audio BedrockDataAutomationProject#audio}
  */
  readonly audio?: BedrockDataAutomationProjectOverrideConfigurationAudio;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#document BedrockDataAutomationProject#document}
  */
  readonly document?: BedrockDataAutomationProjectOverrideConfigurationDocument;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#image BedrockDataAutomationProject#image}
  */
  readonly image?: BedrockDataAutomationProjectOverrideConfigurationImage;
  /**
  * Modality routing configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#modality_routing BedrockDataAutomationProject#modality_routing}
  */
  readonly modalityRouting?: BedrockDataAutomationProjectOverrideConfigurationModalityRouting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#video BedrockDataAutomationProject#video}
  */
  readonly video?: BedrockDataAutomationProjectOverrideConfigurationVideo;
}

export function bedrockDataAutomationProjectOverrideConfigurationToTerraform(struct?: BedrockDataAutomationProjectOverrideConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio: bedrockDataAutomationProjectOverrideConfigurationAudioToTerraform(struct!.audio),
    document: bedrockDataAutomationProjectOverrideConfigurationDocumentToTerraform(struct!.document),
    image: bedrockDataAutomationProjectOverrideConfigurationImageToTerraform(struct!.image),
    modality_routing: bedrockDataAutomationProjectOverrideConfigurationModalityRoutingToTerraform(struct!.modalityRouting),
    video: bedrockDataAutomationProjectOverrideConfigurationVideoToTerraform(struct!.video),
  }
}


export function bedrockDataAutomationProjectOverrideConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectOverrideConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio: {
      value: bedrockDataAutomationProjectOverrideConfigurationAudioToHclTerraform(struct!.audio),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationAudio",
    },
    document: {
      value: bedrockDataAutomationProjectOverrideConfigurationDocumentToHclTerraform(struct!.document),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationDocument",
    },
    image: {
      value: bedrockDataAutomationProjectOverrideConfigurationImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationImage",
    },
    modality_routing: {
      value: bedrockDataAutomationProjectOverrideConfigurationModalityRoutingToHclTerraform(struct!.modalityRouting),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationModalityRouting",
    },
    video: {
      value: bedrockDataAutomationProjectOverrideConfigurationVideoToHclTerraform(struct!.video),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectOverrideConfigurationVideo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectOverrideConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectOverrideConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio?.internalValue;
    }
    if (this._document?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._modalityRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modalityRouting = this._modalityRouting?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectOverrideConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audio.internalValue = undefined;
      this._document.internalValue = undefined;
      this._image.internalValue = undefined;
      this._modalityRouting.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audio.internalValue = value.audio;
      this._document.internalValue = value.document;
      this._image.internalValue = value.image;
      this._modalityRouting.internalValue = value.modalityRouting;
      this._video.internalValue = value.video;
    }
  }

  // audio - computed: true, optional: true, required: false
  private _audio = new BedrockDataAutomationProjectOverrideConfigurationAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: BedrockDataAutomationProjectOverrideConfigurationAudio) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // document - computed: true, optional: true, required: false
  private _document = new BedrockDataAutomationProjectOverrideConfigurationDocumentOutputReference(this, "document");
  public get document() {
    return this._document;
  }
  public putDocument(value: BedrockDataAutomationProjectOverrideConfigurationDocument) {
    this._document.internalValue = value;
  }
  public resetDocument() {
    this._document.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document.internalValue;
  }

  // image - computed: true, optional: true, required: false
  private _image = new BedrockDataAutomationProjectOverrideConfigurationImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: BedrockDataAutomationProjectOverrideConfigurationImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // modality_routing - computed: true, optional: true, required: false
  private _modalityRouting = new BedrockDataAutomationProjectOverrideConfigurationModalityRoutingOutputReference(this, "modality_routing");
  public get modalityRouting() {
    return this._modalityRouting;
  }
  public putModalityRouting(value: BedrockDataAutomationProjectOverrideConfigurationModalityRouting) {
    this._modalityRouting.internalValue = value;
  }
  public resetModalityRouting() {
    this._modalityRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityRoutingInput() {
    return this._modalityRouting.internalValue;
  }

  // video - computed: true, optional: true, required: false
  private _video = new BedrockDataAutomationProjectOverrideConfigurationVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: BedrockDataAutomationProjectOverrideConfigurationVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#channel_labeling BedrockDataAutomationProject#channel_labeling}
  */
  readonly channelLabeling?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#speaker_labeling BedrockDataAutomationProject#speaker_labeling}
  */
  readonly speakerLabeling?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_labeling: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToTerraform(struct!.channelLabeling),
    speaker_labeling: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToTerraform(struct!.speakerLabeling),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_labeling: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToHclTerraform(struct!.channelLabeling),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling",
    },
    speaker_labeling: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToHclTerraform(struct!.speakerLabeling),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelLabeling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelLabeling = this._channelLabeling?.internalValue;
    }
    if (this._speakerLabeling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakerLabeling = this._speakerLabeling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelLabeling.internalValue = undefined;
      this._speakerLabeling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelLabeling.internalValue = value.channelLabeling;
      this._speakerLabeling.internalValue = value.speakerLabeling;
    }
  }

  // channel_labeling - computed: true, optional: true, required: false
  private _channelLabeling = new BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingOutputReference(this, "channel_labeling");
  public get channelLabeling() {
    return this._channelLabeling;
  }
  public putChannelLabeling(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling) {
    this._channelLabeling.internalValue = value;
  }
  public resetChannelLabeling() {
    this._channelLabeling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelLabelingInput() {
    return this._channelLabeling.internalValue;
  }

  // speaker_labeling - computed: true, optional: true, required: false
  private _speakerLabeling = new BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingOutputReference(this, "speaker_labeling");
  public get speakerLabeling() {
    return this._speakerLabeling;
  }
  public putSpeakerLabeling(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling) {
    this._speakerLabeling.internalValue = value;
  }
  public resetSpeakerLabeling() {
    this._speakerLabeling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakerLabelingInput() {
    return this._speakerLabeling.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#transcript BedrockDataAutomationProject#transcript}
  */
  readonly transcript?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transcript: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToTerraform(struct!.transcript),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transcript: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToHclTerraform(struct!.transcript),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transcript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcript = this._transcript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transcript.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transcript.internalValue = value.transcript;
    }
  }

  // transcript - computed: true, optional: true, required: false
  private _transcript = new BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptOutputReference(this, "transcript");
  public get transcript() {
    return this._transcript;
  }
  public putTranscript(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript) {
    this._transcript.internalValue = value;
  }
  public resetTranscript() {
    this._transcript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcriptInput() {
    return this._transcript.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#type_configuration BedrockDataAutomationProject#type_configuration}
  */
  readonly typeConfiguration?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#types BedrockDataAutomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    type_configuration: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToTerraform(struct!.typeConfiguration),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_configuration: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToHclTerraform(struct!.typeConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._typeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeConfiguration = this._typeConfiguration?.internalValue;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._typeConfiguration.internalValue = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._typeConfiguration.internalValue = value.typeConfiguration;
      this._types = value.types;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type_configuration - computed: true, optional: true, required: false
  private _typeConfiguration = new BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationOutputReference(this, "type_configuration");
  public get typeConfiguration() {
    return this._typeConfiguration;
  }
  public putTypeConfiguration(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration) {
    this._typeConfiguration.internalValue = value;
  }
  public resetTypeConfiguration() {
    this._typeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeConfigurationInput() {
    return this._typeConfiguration.internalValue;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#category BedrockDataAutomationProject#category}
  */
  readonly category?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    category: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryToTerraform(struct!.category),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    category: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category.internalValue = value.category;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category = new BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#types BedrockDataAutomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationAudio {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#extraction BedrockDataAutomationProject#extraction}
  */
  readonly extraction?: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#generative_field BedrockDataAutomationProject#generative_field}
  */
  readonly generativeField?: BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationAudioToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionToTerraform(struct!.extraction),
    generative_field: bedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldToTerraform(struct!.generativeField),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationAudioToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationAudio | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionToHclTerraform(struct!.extraction),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction",
    },
    generative_field: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldToHclTerraform(struct!.generativeField),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationAudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationAudio | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._generativeField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeField = this._generativeField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationAudio | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraction.internalValue = undefined;
      this._generativeField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraction.internalValue = value.extraction;
      this._generativeField.internalValue = value.generativeField;
    }
  }

  // extraction - computed: true, optional: true, required: false
  private _extraction = new BedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // generative_field - computed: true, optional: true, required: false
  private _generativeField = new BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldOutputReference(this, "generative_field");
  public get generativeField() {
    return this._generativeField;
  }
  public putGenerativeField(value: BedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField) {
    this._generativeField.internalValue = value;
  }
  public resetGenerativeField() {
    this._generativeField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeFieldInput() {
    return this._generativeField.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#types BedrockDataAutomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._types = value.types;
    }
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#bounding_box BedrockDataAutomationProject#bounding_box}
  */
  readonly boundingBox?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#granularity BedrockDataAutomationProject#granularity}
  */
  readonly granularity?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bounding_box: bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToTerraform(struct!.boundingBox),
    granularity: bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityToTerraform(struct!.granularity),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bounding_box: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToHclTerraform(struct!.boundingBox),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox",
    },
    granularity: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityToHclTerraform(struct!.granularity),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundingBox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundingBox = this._boundingBox?.internalValue;
    }
    if (this._granularity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = undefined;
      this._granularity.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = value.boundingBox;
      this._granularity.internalValue = value.granularity;
    }
  }

  // bounding_box - computed: true, optional: true, required: false
  private _boundingBox = new BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxOutputReference(this, "bounding_box");
  public get boundingBox() {
    return this._boundingBox;
  }
  public putBoundingBox(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox) {
    this._boundingBox.internalValue = value;
  }
  public resetBoundingBox() {
    this._boundingBox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundingBoxInput() {
    return this._boundingBox.internalValue;
  }

  // granularity - computed: true, optional: true, required: false
  private _granularity = new BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityOutputReference(this, "granularity");
  public get granularity() {
    return this._granularity;
  }
  public putGranularity(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity) {
    this._granularity.internalValue = value;
  }
  public resetGranularity() {
    this._granularity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#types BedrockDataAutomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._types = value.types;
    }
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#additional_file_format BedrockDataAutomationProject#additional_file_format}
  */
  readonly additionalFileFormat?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#text_format BedrockDataAutomationProject#text_format}
  */
  readonly textFormat?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    additional_file_format: bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToTerraform(struct!.additionalFileFormat),
    text_format: bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToTerraform(struct!.textFormat),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    additional_file_format: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToHclTerraform(struct!.additionalFileFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat",
    },
    text_format: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToHclTerraform(struct!.textFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalFileFormat = this._additionalFileFormat?.internalValue;
    }
    if (this._textFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormat = this._textFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalFileFormat.internalValue = undefined;
      this._textFormat.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalFileFormat.internalValue = value.additionalFileFormat;
      this._textFormat.internalValue = value.textFormat;
    }
  }

  // additional_file_format - computed: true, optional: true, required: false
  private _additionalFileFormat = new BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatOutputReference(this, "additional_file_format");
  public get additionalFileFormat() {
    return this._additionalFileFormat;
  }
  public putAdditionalFileFormat(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat) {
    this._additionalFileFormat.internalValue = value;
  }
  public resetAdditionalFileFormat() {
    this._additionalFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalFileFormatInput() {
    return this._additionalFileFormat.internalValue;
  }

  // text_format - computed: true, optional: true, required: false
  private _textFormat = new BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatOutputReference(this, "text_format");
  public get textFormat() {
    return this._textFormat;
  }
  public putTextFormat(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat) {
    this._textFormat.internalValue = value;
  }
  public resetTextFormat() {
    this._textFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatInput() {
    return this._textFormat.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationDocument {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#extraction BedrockDataAutomationProject#extraction}
  */
  readonly extraction?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#generative_field BedrockDataAutomationProject#generative_field}
  */
  readonly generativeField?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#output_format BedrockDataAutomationProject#output_format}
  */
  readonly outputFormat?: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction: bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionToTerraform(struct!.extraction),
    generative_field: bedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldToTerraform(struct!.generativeField),
    output_format: bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatToTerraform(struct!.outputFormat),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationDocumentToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationDocument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionToHclTerraform(struct!.extraction),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction",
    },
    generative_field: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldToHclTerraform(struct!.generativeField),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField",
    },
    output_format: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatToHclTerraform(struct!.outputFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationDocument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._generativeField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeField = this._generativeField?.internalValue;
    }
    if (this._outputFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationDocument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraction.internalValue = undefined;
      this._generativeField.internalValue = undefined;
      this._outputFormat.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraction.internalValue = value.extraction;
      this._generativeField.internalValue = value.generativeField;
      this._outputFormat.internalValue = value.outputFormat;
    }
  }

  // extraction - computed: true, optional: true, required: false
  private _extraction = new BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // generative_field - computed: true, optional: true, required: false
  private _generativeField = new BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldOutputReference(this, "generative_field");
  public get generativeField() {
    return this._generativeField;
  }
  public putGenerativeField(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField) {
    this._generativeField.internalValue = value;
  }
  public resetGenerativeField() {
    this._generativeField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeFieldInput() {
    return this._generativeField.internalValue;
  }

  // output_format - computed: true, optional: true, required: false
  private _outputFormat = new BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatOutputReference(this, "output_format");
  public get outputFormat() {
    return this._outputFormat;
  }
  public putOutputFormat(value: BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat) {
    this._outputFormat.internalValue = value;
  }
  public resetOutputFormat() {
    this._outputFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#types BedrockDataAutomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationImageExtraction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#bounding_box BedrockDataAutomationProject#bounding_box}
  */
  readonly boundingBox?: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#category BedrockDataAutomationProject#category}
  */
  readonly category?: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImageExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bounding_box: bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToTerraform(struct!.boundingBox),
    category: bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryToTerraform(struct!.category),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImageExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bounding_box: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToHclTerraform(struct!.boundingBox),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox",
    },
    category: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationImageExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundingBox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundingBox = this._boundingBox?.internalValue;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationImageExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = value.boundingBox;
      this._category.internalValue = value.category;
    }
  }

  // bounding_box - computed: true, optional: true, required: false
  private _boundingBox = new BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxOutputReference(this, "bounding_box");
  public get boundingBox() {
    return this._boundingBox;
  }
  public putBoundingBox(value: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox) {
    this._boundingBox.internalValue = value;
  }
  public resetBoundingBox() {
    this._boundingBox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundingBoxInput() {
    return this._boundingBox.internalValue;
  }

  // category - computed: true, optional: true, required: false
  private _category = new BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#types BedrockDataAutomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#extraction BedrockDataAutomationProject#extraction}
  */
  readonly extraction?: BedrockDataAutomationProjectStandardOutputConfigurationImageExtraction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#generative_field BedrockDataAutomationProject#generative_field}
  */
  readonly generativeField?: BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationImageToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction: bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionToTerraform(struct!.extraction),
    generative_field: bedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldToTerraform(struct!.generativeField),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationImageToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationImage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationImageExtractionToHclTerraform(struct!.extraction),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationImageExtraction",
    },
    generative_field: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldToHclTerraform(struct!.generativeField),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationImage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._generativeField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeField = this._generativeField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationImage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraction.internalValue = undefined;
      this._generativeField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraction.internalValue = value.extraction;
      this._generativeField.internalValue = value.generativeField;
    }
  }

  // extraction - computed: true, optional: true, required: false
  private _extraction = new BedrockDataAutomationProjectStandardOutputConfigurationImageExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockDataAutomationProjectStandardOutputConfigurationImageExtraction) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // generative_field - computed: true, optional: true, required: false
  private _generativeField = new BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldOutputReference(this, "generative_field");
  public get generativeField() {
    return this._generativeField;
  }
  public putGenerativeField(value: BedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField) {
    this._generativeField.internalValue = value;
  }
  public resetGenerativeField() {
    this._generativeField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeFieldInput() {
    return this._generativeField.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#types BedrockDataAutomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#bounding_box BedrockDataAutomationProject#bounding_box}
  */
  readonly boundingBox?: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#category BedrockDataAutomationProject#category}
  */
  readonly category?: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bounding_box: bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToTerraform(struct!.boundingBox),
    category: bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryToTerraform(struct!.category),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bounding_box: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToHclTerraform(struct!.boundingBox),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox",
    },
    category: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundingBox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundingBox = this._boundingBox?.internalValue;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = undefined;
      this._category.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundingBox.internalValue = value.boundingBox;
      this._category.internalValue = value.category;
    }
  }

  // bounding_box - computed: true, optional: true, required: false
  private _boundingBox = new BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxOutputReference(this, "bounding_box");
  public get boundingBox() {
    return this._boundingBox;
  }
  public putBoundingBox(value: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox) {
    this._boundingBox.internalValue = value;
  }
  public resetBoundingBox() {
    this._boundingBox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundingBoxInput() {
    return this._boundingBox.internalValue;
  }

  // category - computed: true, optional: true, required: false
  private _category = new BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#state BedrockDataAutomationProject#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#types BedrockDataAutomationProject#types}
  */
  readonly types?: string[];
}

export function bedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    state: cdktn.stringToTerraform(struct!.state),
    types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._types = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._types = value.types;
    }
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[];
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfigurationVideo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#extraction BedrockDataAutomationProject#extraction}
  */
  readonly extraction?: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#generative_field BedrockDataAutomationProject#generative_field}
  */
  readonly generativeField?: BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationVideoToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    extraction: bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionToTerraform(struct!.extraction),
    generative_field: bedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldToTerraform(struct!.generativeField),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationVideoToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfigurationVideo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    extraction: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionToHclTerraform(struct!.extraction),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction",
    },
    generative_field: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldToHclTerraform(struct!.generativeField),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationVideoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfigurationVideo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraction = this._extraction?.internalValue;
    }
    if (this._generativeField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generativeField = this._generativeField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfigurationVideo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraction.internalValue = undefined;
      this._generativeField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraction.internalValue = value.extraction;
      this._generativeField.internalValue = value.generativeField;
    }
  }

  // extraction - computed: true, optional: true, required: false
  private _extraction = new BedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }
  public putExtraction(value: BedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction) {
    this._extraction.internalValue = value;
  }
  public resetExtraction() {
    this._extraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractionInput() {
    return this._extraction.internalValue;
  }

  // generative_field - computed: true, optional: true, required: false
  private _generativeField = new BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldOutputReference(this, "generative_field");
  public get generativeField() {
    return this._generativeField;
  }
  public putGenerativeField(value: BedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField) {
    this._generativeField.internalValue = value;
  }
  public resetGenerativeField() {
    this._generativeField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generativeFieldInput() {
    return this._generativeField.internalValue;
  }
}
export interface BedrockDataAutomationProjectStandardOutputConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#audio BedrockDataAutomationProject#audio}
  */
  readonly audio?: BedrockDataAutomationProjectStandardOutputConfigurationAudio;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#document BedrockDataAutomationProject#document}
  */
  readonly document?: BedrockDataAutomationProjectStandardOutputConfigurationDocument;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#image BedrockDataAutomationProject#image}
  */
  readonly image?: BedrockDataAutomationProjectStandardOutputConfigurationImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#video BedrockDataAutomationProject#video}
  */
  readonly video?: BedrockDataAutomationProjectStandardOutputConfigurationVideo;
}

export function bedrockDataAutomationProjectStandardOutputConfigurationToTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio: bedrockDataAutomationProjectStandardOutputConfigurationAudioToTerraform(struct!.audio),
    document: bedrockDataAutomationProjectStandardOutputConfigurationDocumentToTerraform(struct!.document),
    image: bedrockDataAutomationProjectStandardOutputConfigurationImageToTerraform(struct!.image),
    video: bedrockDataAutomationProjectStandardOutputConfigurationVideoToTerraform(struct!.video),
  }
}


export function bedrockDataAutomationProjectStandardOutputConfigurationToHclTerraform(struct?: BedrockDataAutomationProjectStandardOutputConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationAudioToHclTerraform(struct!.audio),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationAudio",
    },
    document: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationDocumentToHclTerraform(struct!.document),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationDocument",
    },
    image: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationImage",
    },
    video: {
      value: bedrockDataAutomationProjectStandardOutputConfigurationVideoToHclTerraform(struct!.video),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataAutomationProjectStandardOutputConfigurationVideo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataAutomationProjectStandardOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataAutomationProjectStandardOutputConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio?.internalValue;
    }
    if (this._document?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.document = this._document?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataAutomationProjectStandardOutputConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audio.internalValue = undefined;
      this._document.internalValue = undefined;
      this._image.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audio.internalValue = value.audio;
      this._document.internalValue = value.document;
      this._image.internalValue = value.image;
      this._video.internalValue = value.video;
    }
  }

  // audio - computed: true, optional: true, required: false
  private _audio = new BedrockDataAutomationProjectStandardOutputConfigurationAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }
  public putAudio(value: BedrockDataAutomationProjectStandardOutputConfigurationAudio) {
    this._audio.internalValue = value;
  }
  public resetAudio() {
    this._audio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio.internalValue;
  }

  // document - computed: true, optional: true, required: false
  private _document = new BedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputReference(this, "document");
  public get document() {
    return this._document;
  }
  public putDocument(value: BedrockDataAutomationProjectStandardOutputConfigurationDocument) {
    this._document.internalValue = value;
  }
  public resetDocument() {
    this._document.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentInput() {
    return this._document.internalValue;
  }

  // image - computed: true, optional: true, required: false
  private _image = new BedrockDataAutomationProjectStandardOutputConfigurationImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: BedrockDataAutomationProjectStandardOutputConfigurationImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // video - computed: true, optional: true, required: false
  private _video = new BedrockDataAutomationProjectStandardOutputConfigurationVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: BedrockDataAutomationProjectStandardOutputConfigurationVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}
export interface BedrockDataAutomationProjectTags {
  /**
  * Key for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#key BedrockDataAutomationProject#key}
  */
  readonly key?: string;
  /**
  * Value for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#value BedrockDataAutomationProject#value}
  */
  readonly value?: string;
}

export function bedrockDataAutomationProjectTagsToTerraform(struct?: BedrockDataAutomationProjectTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function bedrockDataAutomationProjectTagsToHclTerraform(struct?: BedrockDataAutomationProjectTags | cdktn.IResolvable): any {
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

export class BedrockDataAutomationProjectTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockDataAutomationProjectTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockDataAutomationProjectTags | cdktn.IResolvable | undefined) {
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

export class BedrockDataAutomationProjectTagsList extends cdktn.ComplexList {
  public internalValue? : BedrockDataAutomationProjectTags[] | cdktn.IResolvable

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
  public get(index: number): BedrockDataAutomationProjectTagsOutputReference {
    return new BedrockDataAutomationProjectTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project awscc_bedrock_data_automation_project}
*/
export class BedrockDataAutomationProject extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_data_automation_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockDataAutomationProject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockDataAutomationProject to import
  * @param importFromId The id of the existing BedrockDataAutomationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockDataAutomationProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_data_automation_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/bedrock_data_automation_project awscc_bedrock_data_automation_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockDataAutomationProjectConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockDataAutomationProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_data_automation_project',
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
    this._customOutputConfiguration.internalValue = config.customOutputConfiguration;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._kmsKeyId = config.kmsKeyId;
    this._overrideConfiguration.internalValue = config.overrideConfiguration;
    this._projectDescription = config.projectDescription;
    this._projectName = config.projectName;
    this._projectType = config.projectType;
    this._standardOutputConfiguration.internalValue = config.standardOutputConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // custom_output_configuration - computed: true, optional: true, required: false
  private _customOutputConfiguration = new BedrockDataAutomationProjectCustomOutputConfigurationOutputReference(this, "custom_output_configuration");
  public get customOutputConfiguration() {
    return this._customOutputConfiguration;
  }
  public putCustomOutputConfiguration(value: BedrockDataAutomationProjectCustomOutputConfiguration) {
    this._customOutputConfiguration.internalValue = value;
  }
  public resetCustomOutputConfiguration() {
    this._customOutputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOutputConfigurationInput() {
    return this._customOutputConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_encryption_context - computed: true, optional: true, required: false
  private _kmsEncryptionContext?: { [key: string]: string };
  public get kmsEncryptionContext() {
    return this.getStringMapAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: { [key: string]: string }) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // override_configuration - computed: true, optional: true, required: false
  private _overrideConfiguration = new BedrockDataAutomationProjectOverrideConfigurationOutputReference(this, "override_configuration");
  public get overrideConfiguration() {
    return this._overrideConfiguration;
  }
  public putOverrideConfiguration(value: BedrockDataAutomationProjectOverrideConfiguration) {
    this._overrideConfiguration.internalValue = value;
  }
  public resetOverrideConfiguration() {
    this._overrideConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideConfigurationInput() {
    return this._overrideConfiguration.internalValue;
  }

  // project_arn - computed: true, optional: false, required: false
  public get projectArn() {
    return this.getStringAttribute('project_arn');
  }

  // project_description - computed: true, optional: true, required: false
  private _projectDescription?: string;
  public get projectDescription() {
    return this.getStringAttribute('project_description');
  }
  public set projectDescription(value: string) {
    this._projectDescription = value;
  }
  public resetProjectDescription() {
    this._projectDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDescriptionInput() {
    return this._projectDescription;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string;
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // project_stage - computed: true, optional: false, required: false
  public get projectStage() {
    return this.getStringAttribute('project_stage');
  }

  // project_type - computed: true, optional: true, required: false
  private _projectType?: string;
  public get projectType() {
    return this.getStringAttribute('project_type');
  }
  public set projectType(value: string) {
    this._projectType = value;
  }
  public resetProjectType() {
    this._projectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectTypeInput() {
    return this._projectType;
  }

  // standard_output_configuration - computed: true, optional: true, required: false
  private _standardOutputConfiguration = new BedrockDataAutomationProjectStandardOutputConfigurationOutputReference(this, "standard_output_configuration");
  public get standardOutputConfiguration() {
    return this._standardOutputConfiguration;
  }
  public putStandardOutputConfiguration(value: BedrockDataAutomationProjectStandardOutputConfiguration) {
    this._standardOutputConfiguration.internalValue = value;
  }
  public resetStandardOutputConfiguration() {
    this._standardOutputConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardOutputConfigurationInput() {
    return this._standardOutputConfiguration.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new BedrockDataAutomationProjectTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: BedrockDataAutomationProjectTags[] | cdktn.IResolvable) {
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
      custom_output_configuration: bedrockDataAutomationProjectCustomOutputConfigurationToTerraform(this._customOutputConfiguration.internalValue),
      kms_encryption_context: cdktn.hashMapper(cdktn.stringToTerraform)(this._kmsEncryptionContext),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      override_configuration: bedrockDataAutomationProjectOverrideConfigurationToTerraform(this._overrideConfiguration.internalValue),
      project_description: cdktn.stringToTerraform(this._projectDescription),
      project_name: cdktn.stringToTerraform(this._projectName),
      project_type: cdktn.stringToTerraform(this._projectType),
      standard_output_configuration: bedrockDataAutomationProjectStandardOutputConfigurationToTerraform(this._standardOutputConfiguration.internalValue),
      tags: cdktn.listMapper(bedrockDataAutomationProjectTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_output_configuration: {
        value: bedrockDataAutomationProjectCustomOutputConfigurationToHclTerraform(this._customOutputConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockDataAutomationProjectCustomOutputConfiguration",
      },
      kms_encryption_context: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._kmsEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_configuration: {
        value: bedrockDataAutomationProjectOverrideConfigurationToHclTerraform(this._overrideConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockDataAutomationProjectOverrideConfiguration",
      },
      project_description: {
        value: cdktn.stringToHclTerraform(this._projectDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktn.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_type: {
        value: cdktn.stringToHclTerraform(this._projectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standard_output_configuration: {
        value: bedrockDataAutomationProjectStandardOutputConfigurationToHclTerraform(this._standardOutputConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockDataAutomationProjectStandardOutputConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(bedrockDataAutomationProjectTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockDataAutomationProjectTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
