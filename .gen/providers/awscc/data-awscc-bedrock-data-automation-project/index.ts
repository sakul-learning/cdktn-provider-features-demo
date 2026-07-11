// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_data_automation_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockDataAutomationProjectConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_data_automation_project#id DataAwsccBedrockDataAutomationProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprints {
}

export function dataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprintsToTerraform(struct?: DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprintsToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blueprint_arn - computed: true, optional: false, required: false
  public get blueprintArn() {
    return this.getStringAttribute('blueprint_arn');
  }

  // blueprint_stage - computed: true, optional: false, required: false
  public get blueprintStage() {
    return this.getStringAttribute('blueprint_stage');
  }

  // blueprint_version - computed: true, optional: false, required: false
  public get blueprintVersion() {
    return this.getStringAttribute('blueprint_version');
  }
}

export class DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprintsOutputReference {
    return new DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockDataAutomationProjectCustomOutputConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectCustomOutputConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectCustomOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectCustomOutputConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectCustomOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectCustomOutputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectCustomOutputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blueprints - computed: true, optional: false, required: false
  private _blueprints = new DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationBlueprintsList(this, "blueprints", false);
  public get blueprints() {
    return this._blueprints;
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generative_output_language - computed: true, optional: false, required: false
  public get generativeOutputLanguage() {
    return this.getStringAttribute('generative_output_language');
  }

  // identify_multiple_languages - computed: true, optional: false, required: false
  public get identifyMultipleLanguages() {
    return this.getBooleanAttribute('identify_multiple_languages');
  }

  // input_languages - computed: true, optional: false, required: false
  public get inputLanguages() {
    return this.getListAttribute('input_languages');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pii_entity_types - computed: true, optional: false, required: false
  public get piiEntityTypes() {
    return this.getListAttribute('pii_entity_types');
  }

  // redaction_mask_mode - computed: true, optional: false, required: false
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detection_mode - computed: true, optional: false, required: false
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }

  // detection_scope - computed: true, optional: false, required: false
  public get detectionScope() {
    return this.getListAttribute('detection_scope');
  }

  // pii_entities_configuration - computed: true, optional: false, required: false
  private _piiEntitiesConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this, "pii_entities_configuration");
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudio {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // language_configuration - computed: true, optional: false, required: false
  private _languageConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioLanguageConfigurationOutputReference(this, "language_configuration");
  public get languageConfiguration() {
    return this._languageConfiguration;
  }

  // modality_processing - computed: true, optional: false, required: false
  private _modalityProcessing = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioModalityProcessingOutputReference(this, "modality_processing");
  public get modalityProcessing() {
    return this._modalityProcessing;
  }

  // sensitive_data_configuration - computed: true, optional: false, required: false
  private _sensitiveDataConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioSensitiveDataConfigurationOutputReference(this, "sensitive_data_configuration");
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pii_entity_types - computed: true, optional: false, required: false
  public get piiEntityTypes() {
    return this.getListAttribute('pii_entity_types');
  }

  // redaction_mask_mode - computed: true, optional: false, required: false
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detection_mode - computed: true, optional: false, required: false
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }

  // detection_scope - computed: true, optional: false, required: false
  public get detectionScope() {
    return this.getListAttribute('detection_scope');
  }

  // pii_entities_configuration - computed: true, optional: false, required: false
  private _piiEntitiesConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this, "pii_entities_configuration");
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSplitter {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSplitterToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSplitter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSplitterToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSplitter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSplitterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSplitter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSplitter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocument {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modality_processing - computed: true, optional: false, required: false
  private _modalityProcessing = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentModalityProcessingOutputReference(this, "modality_processing");
  public get modalityProcessing() {
    return this._modalityProcessing;
  }

  // sensitive_data_configuration - computed: true, optional: false, required: false
  private _sensitiveDataConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSensitiveDataConfigurationOutputReference(this, "sensitive_data_configuration");
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }

  // splitter - computed: true, optional: false, required: false
  private _splitter = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentSplitterOutputReference(this, "splitter");
  public get splitter() {
    return this._splitter;
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageModalityProcessing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pii_entity_types - computed: true, optional: false, required: false
  public get piiEntityTypes() {
    return this.getListAttribute('pii_entity_types');
  }

  // redaction_mask_mode - computed: true, optional: false, required: false
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detection_mode - computed: true, optional: false, required: false
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }

  // detection_scope - computed: true, optional: false, required: false
  public get detectionScope() {
    return this.getListAttribute('detection_scope');
  }

  // pii_entities_configuration - computed: true, optional: false, required: false
  private _piiEntitiesConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this, "pii_entities_configuration");
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationImage {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationImageToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationImageToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modality_processing - computed: true, optional: false, required: false
  private _modalityProcessing = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageModalityProcessingOutputReference(this, "modality_processing");
  public get modalityProcessing() {
    return this._modalityProcessing;
  }

  // sensitive_data_configuration - computed: true, optional: false, required: false
  private _sensitiveDataConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageSensitiveDataConfigurationOutputReference(this, "sensitive_data_configuration");
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationModalityRouting {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationModalityRoutingToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationModalityRouting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationModalityRoutingToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationModalityRouting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationModalityRoutingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationModalityRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationModalityRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // jpeg - computed: true, optional: false, required: false
  public get jpeg() {
    return this.getStringAttribute('jpeg');
  }

  // mov - computed: true, optional: false, required: false
  public get mov() {
    return this.getStringAttribute('mov');
  }

  // mp_4 - computed: true, optional: false, required: false
  public get mp4() {
    return this.getStringAttribute('mp_4');
  }

  // png - computed: true, optional: false, required: false
  public get png() {
    return this.getStringAttribute('png');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pii_entity_types - computed: true, optional: false, required: false
  public get piiEntityTypes() {
    return this.getListAttribute('pii_entity_types');
  }

  // redaction_mask_mode - computed: true, optional: false, required: false
  public get redactionMaskMode() {
    return this.getStringAttribute('redaction_mask_mode');
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detection_mode - computed: true, optional: false, required: false
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }

  // detection_scope - computed: true, optional: false, required: false
  public get detectionScope() {
    return this.getListAttribute('detection_scope');
  }

  // pii_entities_configuration - computed: true, optional: false, required: false
  private _piiEntitiesConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationPiiEntitiesConfigurationOutputReference(this, "pii_entities_configuration");
  public get piiEntitiesConfiguration() {
    return this._piiEntitiesConfiguration;
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideo {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modality_processing - computed: true, optional: false, required: false
  private _modalityProcessing = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoModalityProcessingOutputReference(this, "modality_processing");
  public get modalityProcessing() {
    return this._modalityProcessing;
  }

  // sensitive_data_configuration - computed: true, optional: false, required: false
  private _sensitiveDataConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoSensitiveDataConfigurationOutputReference(this, "sensitive_data_configuration");
  public get sensitiveDataConfiguration() {
    return this._sensitiveDataConfiguration;
  }
}
export interface DataAwsccBedrockDataAutomationProjectOverrideConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectOverrideConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectOverrideConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectOverrideConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectOverrideConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectOverrideConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio - computed: true, optional: false, required: false
  private _audio = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }

  // document - computed: true, optional: false, required: false
  private _document = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationDocumentOutputReference(this, "document");
  public get document() {
    return this._document;
  }

  // image - computed: true, optional: false, required: false
  private _image = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }

  // modality_routing - computed: true, optional: false, required: false
  private _modalityRouting = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationModalityRoutingOutputReference(this, "modality_routing");
  public get modalityRouting() {
    return this._modalityRouting;
  }

  // video - computed: true, optional: false, required: false
  private _video = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabeling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabeling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_labeling - computed: true, optional: false, required: false
  private _channelLabeling = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptChannelLabelingOutputReference(this, "channel_labeling");
  public get channelLabeling() {
    return this._channelLabeling;
  }

  // speaker_labeling - computed: true, optional: false, required: false
  private _speakerLabeling = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptSpeakerLabelingOutputReference(this, "speaker_labeling");
  public get speakerLabeling() {
    return this._speakerLabeling;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // transcript - computed: true, optional: false, required: false
  private _transcript = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationTranscriptOutputReference(this, "transcript");
  public get transcript() {
    return this._transcript;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type_configuration - computed: true, optional: false, required: false
  private _typeConfiguration = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryTypeConfigurationOutputReference(this, "type_configuration");
  public get typeConfiguration() {
    return this._typeConfiguration;
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  private _category = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudio {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudio): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction - computed: true, optional: false, required: false
  private _extraction = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }

  // generative_field - computed: true, optional: false, required: false
  private _generativeField = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioGenerativeFieldOutputReference(this, "generative_field");
  public get generativeField() {
    return this._generativeField;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bounding_box - computed: true, optional: false, required: false
  private _boundingBox = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionBoundingBoxOutputReference(this, "bounding_box");
  public get boundingBox() {
    return this._boundingBox;
  }

  // granularity - computed: true, optional: false, required: false
  private _granularity = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionGranularityOutputReference(this, "granularity");
  public get granularity() {
    return this._granularity;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_file_format - computed: true, optional: false, required: false
  private _additionalFileFormat = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatAdditionalFileFormatOutputReference(this, "additional_file_format");
  public get additionalFileFormat() {
    return this._additionalFileFormat;
  }

  // text_format - computed: true, optional: false, required: false
  private _textFormat = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatTextFormatOutputReference(this, "text_format");
  public get textFormat() {
    return this._textFormat;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocument {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction - computed: true, optional: false, required: false
  private _extraction = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }

  // generative_field - computed: true, optional: false, required: false
  private _generativeField = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentGenerativeFieldOutputReference(this, "generative_field");
  public get generativeField() {
    return this._generativeField;
  }

  // output_format - computed: true, optional: false, required: false
  private _outputFormat = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputFormatOutputReference(this, "output_format");
  public get outputFormat() {
    return this._outputFormat;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtraction {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bounding_box - computed: true, optional: false, required: false
  private _boundingBox = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionBoundingBoxOutputReference(this, "bounding_box");
  public get boundingBox() {
    return this._boundingBox;
  }

  // category - computed: true, optional: false, required: false
  private _category = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImage {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction - computed: true, optional: false, required: false
  private _extraction = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }

  // generative_field - computed: true, optional: false, required: false
  private _generativeField = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageGenerativeFieldOutputReference(this, "generative_field");
  public get generativeField() {
    return this._generativeField;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bounding_box - computed: true, optional: false, required: false
  private _boundingBox = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionBoundingBoxOutputReference(this, "bounding_box");
  public get boundingBox() {
    return this._boundingBox;
  }

  // category - computed: true, optional: false, required: false
  private _category = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideo {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extraction - computed: true, optional: false, required: false
  private _extraction = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoExtractionOutputReference(this, "extraction");
  public get extraction() {
    return this._extraction;
  }

  // generative_field - computed: true, optional: false, required: false
  private _generativeField = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoGenerativeFieldOutputReference(this, "generative_field");
  public get generativeField() {
    return this._generativeField;
  }
}
export interface DataAwsccBedrockDataAutomationProjectStandardOutputConfiguration {
}

export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationToTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectStandardOutputConfigurationToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectStandardOutputConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataAutomationProjectStandardOutputConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectStandardOutputConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio - computed: true, optional: false, required: false
  private _audio = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationAudioOutputReference(this, "audio");
  public get audio() {
    return this._audio;
  }

  // document - computed: true, optional: false, required: false
  private _document = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationDocumentOutputReference(this, "document");
  public get document() {
    return this._document;
  }

  // image - computed: true, optional: false, required: false
  private _image = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }

  // video - computed: true, optional: false, required: false
  private _video = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
}
export interface DataAwsccBedrockDataAutomationProjectTags {
}

export function dataAwsccBedrockDataAutomationProjectTagsToTerraform(struct?: DataAwsccBedrockDataAutomationProjectTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataAutomationProjectTagsToHclTerraform(struct?: DataAwsccBedrockDataAutomationProjectTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataAutomationProjectTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockDataAutomationProjectTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataAutomationProjectTags | undefined) {
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

export class DataAwsccBedrockDataAutomationProjectTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockDataAutomationProjectTagsOutputReference {
    return new DataAwsccBedrockDataAutomationProjectTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_data_automation_project awscc_bedrock_data_automation_project}
*/
export class DataAwsccBedrockDataAutomationProject extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_data_automation_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockDataAutomationProject resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockDataAutomationProject to import
  * @param importFromId The id of the existing DataAwsccBedrockDataAutomationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_data_automation_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockDataAutomationProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_data_automation_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/bedrock_data_automation_project awscc_bedrock_data_automation_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockDataAutomationProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockDataAutomationProjectConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // custom_output_configuration - computed: true, optional: false, required: false
  private _customOutputConfiguration = new DataAwsccBedrockDataAutomationProjectCustomOutputConfigurationOutputReference(this, "custom_output_configuration");
  public get customOutputConfiguration() {
    return this._customOutputConfiguration;
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

  // kms_encryption_context - computed: true, optional: false, required: false
  private _kmsEncryptionContext = new cdktn.StringMap(this, "kms_encryption_context");
  public get kmsEncryptionContext() {
    return this._kmsEncryptionContext;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // override_configuration - computed: true, optional: false, required: false
  private _overrideConfiguration = new DataAwsccBedrockDataAutomationProjectOverrideConfigurationOutputReference(this, "override_configuration");
  public get overrideConfiguration() {
    return this._overrideConfiguration;
  }

  // project_arn - computed: true, optional: false, required: false
  public get projectArn() {
    return this.getStringAttribute('project_arn');
  }

  // project_description - computed: true, optional: false, required: false
  public get projectDescription() {
    return this.getStringAttribute('project_description');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_stage - computed: true, optional: false, required: false
  public get projectStage() {
    return this.getStringAttribute('project_stage');
  }

  // project_type - computed: true, optional: false, required: false
  public get projectType() {
    return this.getStringAttribute('project_type');
  }

  // standard_output_configuration - computed: true, optional: false, required: false
  private _standardOutputConfiguration = new DataAwsccBedrockDataAutomationProjectStandardOutputConfigurationOutputReference(this, "standard_output_configuration");
  public get standardOutputConfiguration() {
    return this._standardOutputConfiguration;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccBedrockDataAutomationProjectTagsList(this, "tags", false);
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
