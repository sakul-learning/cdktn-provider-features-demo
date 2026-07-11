// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CleanroomsmlConfiguredModelAlgorithmAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#configured_model_algorithm_arn CleanroomsmlConfiguredModelAlgorithmAssociation#configured_model_algorithm_arn}
  */
  readonly configuredModelAlgorithmArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#description CleanroomsmlConfiguredModelAlgorithmAssociation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#membership_identifier CleanroomsmlConfiguredModelAlgorithmAssociation#membership_identifier}
  */
  readonly membershipIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#name CleanroomsmlConfiguredModelAlgorithmAssociation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#privacy_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#privacy_configuration}
  */
  readonly privacyConfiguration?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration;
  /**
  * An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#tags CleanroomsmlConfiguredModelAlgorithmAssociation#tags}
  */
  readonly tags?: CleanroomsmlConfiguredModelAlgorithmAssociationTags[] | cdktn.IResolvable;
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}
  */
  readonly value?: number;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#files_to_export CleanroomsmlConfiguredModelAlgorithmAssociation#files_to_export}
  */
  readonly filesToExport?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_size}
  */
  readonly maxSize?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    files_to_export: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filesToExport),
    max_size: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeToTerraform(struct!.maxSize),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    files_to_export: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filesToExport),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_size: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeToHclTerraform(struct!.maxSize),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filesToExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesToExport = this._filesToExport;
    }
    if (this._maxSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filesToExport = undefined;
      this._maxSize.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filesToExport = value.filesToExport;
      this._maxSize.internalValue = value.maxSize;
    }
  }

  // files_to_export - computed: true, optional: true, required: false
  private _filesToExport?: string[]; 
  public get filesToExport() {
    return cdktn.Fn.tolist(this.getListAttribute('files_to_export'));
  }
  public set filesToExport(value: string[]) {
    this._filesToExport = value;
  }
  public resetFilesToExport() {
    this._filesToExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesToExportInput() {
    return this._filesToExport;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference(this, "max_size");
  public get maxSize() {
    return this._maxSize;
  }
  public putMaxSize(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize) {
    this._maxSize.internalValue = value;
  }
  public resetMaxSize() {
    this._maxSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize.internalValue;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}
  */
  readonly customDataIdentifiers?: string[];
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_data_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customDataIdentifiers),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_data_identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customDataIdentifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDataIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDataIdentifiers = this._customDataIdentifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customDataIdentifiers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customDataIdentifiers = value.customDataIdentifiers;
    }
  }

  // custom_data_identifiers - computed: true, optional: true, required: false
  private _customDataIdentifiers?: string[]; 
  public get customDataIdentifiers() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_data_identifiers'));
  }
  public set customDataIdentifiers(value: string[]) {
    this._customDataIdentifiers = value;
  }
  public resetCustomDataIdentifiers() {
    this._customDataIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataIdentifiersInput() {
    return this._customDataIdentifiers;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}
  */
  readonly customEntityConfig?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}
  */
  readonly entitiesToRedact?: string[];
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_entity_config: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigToTerraform(struct!.customEntityConfig),
    entities_to_redact: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entitiesToRedact),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_entity_config: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigToHclTerraform(struct!.customEntityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig",
    },
    entities_to_redact: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entitiesToRedact),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEntityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEntityConfig = this._customEntityConfig?.internalValue;
    }
    if (this._entitiesToRedact !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitiesToRedact = this._entitiesToRedact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEntityConfig.internalValue = undefined;
      this._entitiesToRedact = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEntityConfig.internalValue = value.customEntityConfig;
      this._entitiesToRedact = value.entitiesToRedact;
    }
  }

  // custom_entity_config - computed: true, optional: true, required: false
  private _customEntityConfig = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(this, "custom_entity_config");
  public get customEntityConfig() {
    return this._customEntityConfig;
  }
  public putCustomEntityConfig(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig) {
    this._customEntityConfig.internalValue = value;
  }
  public resetCustomEntityConfig() {
    this._customEntityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEntityConfigInput() {
    return this._customEntityConfig.internalValue;
  }

  // entities_to_redact - computed: true, optional: true, required: false
  private _entitiesToRedact?: string[]; 
  public get entitiesToRedact() {
    return cdktn.Fn.tolist(this.getListAttribute('entities_to_redact'));
  }
  public set entitiesToRedact(value: string[]) {
    this._entitiesToRedact = value;
  }
  public resetEntitiesToRedact() {
    this._entitiesToRedact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesToRedactInput() {
    return this._entitiesToRedact;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}
  */
  readonly filterPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}
  */
  readonly logRedactionConfiguration?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}
  */
  readonly logType?: string;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAccountIds),
    filter_pattern: cdktn.stringToTerraform(struct!.filterPattern),
    log_redaction_configuration: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationToTerraform(struct!.logRedactionConfiguration),
    log_type: cdktn.stringToTerraform(struct!.logType),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAccountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_pattern: {
      value: cdktn.stringToHclTerraform(struct!.filterPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_redaction_configuration: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationToHclTerraform(struct!.logRedactionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration",
    },
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAccountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAccountIds = this._allowedAccountIds;
    }
    if (this._filterPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPattern = this._filterPattern;
    }
    if (this._logRedactionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRedactionConfiguration = this._logRedactionConfiguration?.internalValue;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAccountIds = undefined;
      this._filterPattern = undefined;
      this._logRedactionConfiguration.internalValue = undefined;
      this._logType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAccountIds = value.allowedAccountIds;
      this._filterPattern = value.filterPattern;
      this._logRedactionConfiguration.internalValue = value.logRedactionConfiguration;
      this._logType = value.logType;
    }
  }

  // allowed_account_ids - computed: true, optional: true, required: false
  private _allowedAccountIds?: string[]; 
  public get allowedAccountIds() {
    return this.getListAttribute('allowed_account_ids');
  }
  public set allowedAccountIds(value: string[]) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds;
  }

  // filter_pattern - computed: true, optional: true, required: false
  private _filterPattern?: string; 
  public get filterPattern() {
    return this.getStringAttribute('filter_pattern');
  }
  public set filterPattern(value: string) {
    this._filterPattern = value;
  }
  public resetFilterPattern() {
    this._filterPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPatternInput() {
    return this._filterPattern;
  }

  // log_redaction_configuration - computed: true, optional: true, required: false
  private _logRedactionConfiguration = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference(this, "log_redaction_configuration");
  public get logRedactionConfiguration() {
    return this._logRedactionConfiguration;
  }
  public putLogRedactionConfiguration(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration) {
    this._logRedactionConfiguration.internalValue = value;
  }
  public resetLogRedactionConfiguration() {
    this._logRedactionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRedactionConfigurationInput() {
    return this._logRedactionConfiguration.internalValue;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList extends cdktn.ComplexList {
  public internalValue? : CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference {
    return new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}
  */
  readonly value?: number;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}
  */
  readonly containerLogs?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_output_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_output_size}
  */
  readonly maxOutputSize?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_logs: cdktn.listMapper(cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsToTerraform, false)(struct!.containerLogs),
    max_output_size: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeToTerraform(struct!.maxOutputSize),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_logs: {
      value: cdktn.listMapperHcl(cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsToHclTerraform, false)(struct!.containerLogs),
      isBlock: true,
      type: "set",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList",
    },
    max_output_size: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeToHclTerraform(struct!.maxOutputSize),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogs = this._containerLogs?.internalValue;
    }
    if (this._maxOutputSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOutputSize = this._maxOutputSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerLogs.internalValue = undefined;
      this._maxOutputSize.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerLogs.internalValue = value.containerLogs;
      this._maxOutputSize.internalValue = value.maxOutputSize;
    }
  }

  // container_logs - computed: true, optional: true, required: false
  private _containerLogs = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList(this, "container_logs", true);
  public get containerLogs() {
    return this._containerLogs;
  }
  public putContainerLogs(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[] | cdktn.IResolvable) {
    this._containerLogs.internalValue = value;
  }
  public resetContainerLogs() {
    this._containerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogsInput() {
    return this._containerLogs.internalValue;
  }

  // max_output_size - computed: true, optional: true, required: false
  private _maxOutputSize = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference(this, "max_output_size");
  public get maxOutputSize() {
    return this._maxOutputSize;
  }
  public putMaxOutputSize(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize) {
    this._maxOutputSize.internalValue = value;
  }
  public resetMaxOutputSize() {
    this._maxOutputSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutputSizeInput() {
    return this._maxOutputSize.internalValue;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}
  */
  readonly customDataIdentifiers?: string[];
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_data_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customDataIdentifiers),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_data_identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customDataIdentifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDataIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDataIdentifiers = this._customDataIdentifiers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customDataIdentifiers = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customDataIdentifiers = value.customDataIdentifiers;
    }
  }

  // custom_data_identifiers - computed: true, optional: true, required: false
  private _customDataIdentifiers?: string[]; 
  public get customDataIdentifiers() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_data_identifiers'));
  }
  public set customDataIdentifiers(value: string[]) {
    this._customDataIdentifiers = value;
  }
  public resetCustomDataIdentifiers() {
    this._customDataIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataIdentifiersInput() {
    return this._customDataIdentifiers;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}
  */
  readonly customEntityConfig?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}
  */
  readonly entitiesToRedact?: string[];
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_entity_config: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigToTerraform(struct!.customEntityConfig),
    entities_to_redact: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entitiesToRedact),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_entity_config: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigToHclTerraform(struct!.customEntityConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig",
    },
    entities_to_redact: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entitiesToRedact),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEntityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEntityConfig = this._customEntityConfig?.internalValue;
    }
    if (this._entitiesToRedact !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitiesToRedact = this._entitiesToRedact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEntityConfig.internalValue = undefined;
      this._entitiesToRedact = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEntityConfig.internalValue = value.customEntityConfig;
      this._entitiesToRedact = value.entitiesToRedact;
    }
  }

  // custom_entity_config - computed: true, optional: true, required: false
  private _customEntityConfig = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(this, "custom_entity_config");
  public get customEntityConfig() {
    return this._customEntityConfig;
  }
  public putCustomEntityConfig(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig) {
    this._customEntityConfig.internalValue = value;
  }
  public resetCustomEntityConfig() {
    this._customEntityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEntityConfigInput() {
    return this._customEntityConfig.internalValue;
  }

  // entities_to_redact - computed: true, optional: true, required: false
  private _entitiesToRedact?: string[]; 
  public get entitiesToRedact() {
    return cdktn.Fn.tolist(this.getListAttribute('entities_to_redact'));
  }
  public set entitiesToRedact(value: string[]) {
    this._entitiesToRedact = value;
  }
  public resetEntitiesToRedact() {
    this._entitiesToRedact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesToRedactInput() {
    return this._entitiesToRedact;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}
  */
  readonly filterPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}
  */
  readonly logRedactionConfiguration?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}
  */
  readonly logType?: string;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_account_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAccountIds),
    filter_pattern: cdktn.stringToTerraform(struct!.filterPattern),
    log_redaction_configuration: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationToTerraform(struct!.logRedactionConfiguration),
    log_type: cdktn.stringToTerraform(struct!.logType),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_account_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAccountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_pattern: {
      value: cdktn.stringToHclTerraform(struct!.filterPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_redaction_configuration: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationToHclTerraform(struct!.logRedactionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration",
    },
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAccountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAccountIds = this._allowedAccountIds;
    }
    if (this._filterPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPattern = this._filterPattern;
    }
    if (this._logRedactionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRedactionConfiguration = this._logRedactionConfiguration?.internalValue;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAccountIds = undefined;
      this._filterPattern = undefined;
      this._logRedactionConfiguration.internalValue = undefined;
      this._logType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAccountIds = value.allowedAccountIds;
      this._filterPattern = value.filterPattern;
      this._logRedactionConfiguration.internalValue = value.logRedactionConfiguration;
      this._logType = value.logType;
    }
  }

  // allowed_account_ids - computed: true, optional: true, required: false
  private _allowedAccountIds?: string[]; 
  public get allowedAccountIds() {
    return this.getListAttribute('allowed_account_ids');
  }
  public set allowedAccountIds(value: string[]) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds;
  }

  // filter_pattern - computed: true, optional: true, required: false
  private _filterPattern?: string; 
  public get filterPattern() {
    return this.getStringAttribute('filter_pattern');
  }
  public set filterPattern(value: string) {
    this._filterPattern = value;
  }
  public resetFilterPattern() {
    this._filterPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPatternInput() {
    return this._filterPattern;
  }

  // log_redaction_configuration - computed: true, optional: true, required: false
  private _logRedactionConfiguration = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference(this, "log_redaction_configuration");
  public get logRedactionConfiguration() {
    return this._logRedactionConfiguration;
  }
  public putLogRedactionConfiguration(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration) {
    this._logRedactionConfiguration.internalValue = value;
  }
  public resetLogRedactionConfiguration() {
    this._logRedactionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRedactionConfigurationInput() {
    return this._logRedactionConfiguration.internalValue;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList extends cdktn.ComplexList {
  public internalValue? : CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference {
    return new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#noise_level CleanroomsmlConfiguredModelAlgorithmAssociation#noise_level}
  */
  readonly noiseLevel?: string;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    noise_level: cdktn.stringToTerraform(struct!.noiseLevel),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    noise_level: {
      value: cdktn.stringToHclTerraform(struct!.noiseLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noiseLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.noiseLevel = this._noiseLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noiseLevel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noiseLevel = value.noiseLevel;
    }
  }

  // noise_level - computed: true, optional: true, required: false
  private _noiseLevel?: string; 
  public get noiseLevel() {
    return this.getStringAttribute('noise_level');
  }
  public set noiseLevel(value: string) {
    this._noiseLevel = value;
  }
  public resetNoiseLevel() {
    this._noiseLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noiseLevelInput() {
    return this._noiseLevel;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}
  */
  readonly value?: number;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: cdktn.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}
  */
  readonly containerLogs?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_metrics CleanroomsmlConfiguredModelAlgorithmAssociation#container_metrics}
  */
  readonly containerMetrics?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_artifact_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_artifact_size}
  */
  readonly maxArtifactSize?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container_logs: cdktn.listMapper(cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsToTerraform, false)(struct!.containerLogs),
    container_metrics: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsToTerraform(struct!.containerMetrics),
    max_artifact_size: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeToTerraform(struct!.maxArtifactSize),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container_logs: {
      value: cdktn.listMapperHcl(cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsToHclTerraform, false)(struct!.containerLogs),
      isBlock: true,
      type: "set",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList",
    },
    container_metrics: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsToHclTerraform(struct!.containerMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics",
    },
    max_artifact_size: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeToHclTerraform(struct!.maxArtifactSize),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogs = this._containerLogs?.internalValue;
    }
    if (this._containerMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerMetrics = this._containerMetrics?.internalValue;
    }
    if (this._maxArtifactSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxArtifactSize = this._maxArtifactSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerLogs.internalValue = undefined;
      this._containerMetrics.internalValue = undefined;
      this._maxArtifactSize.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerLogs.internalValue = value.containerLogs;
      this._containerMetrics.internalValue = value.containerMetrics;
      this._maxArtifactSize.internalValue = value.maxArtifactSize;
    }
  }

  // container_logs - computed: true, optional: true, required: false
  private _containerLogs = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList(this, "container_logs", true);
  public get containerLogs() {
    return this._containerLogs;
  }
  public putContainerLogs(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[] | cdktn.IResolvable) {
    this._containerLogs.internalValue = value;
  }
  public resetContainerLogs() {
    this._containerLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogsInput() {
    return this._containerLogs.internalValue;
  }

  // container_metrics - computed: true, optional: true, required: false
  private _containerMetrics = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference(this, "container_metrics");
  public get containerMetrics() {
    return this._containerMetrics;
  }
  public putContainerMetrics(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics) {
    this._containerMetrics.internalValue = value;
  }
  public resetContainerMetrics() {
    this._containerMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerMetricsInput() {
    return this._containerMetrics.internalValue;
  }

  // max_artifact_size - computed: true, optional: true, required: false
  private _maxArtifactSize = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference(this, "max_artifact_size");
  public get maxArtifactSize() {
    return this._maxArtifactSize;
  }
  public putMaxArtifactSize(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize) {
    this._maxArtifactSize.internalValue = value;
  }
  public resetMaxArtifactSize() {
    this._maxArtifactSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxArtifactSizeInput() {
    return this._maxArtifactSize.internalValue;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_exports CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_exports}
  */
  readonly trainedModelExports?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_inference_jobs CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_inference_jobs}
  */
  readonly trainedModelInferenceJobs?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_models CleanroomsmlConfiguredModelAlgorithmAssociation#trained_models}
  */
  readonly trainedModels?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trained_model_exports: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsToTerraform(struct!.trainedModelExports),
    trained_model_inference_jobs: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsToTerraform(struct!.trainedModelInferenceJobs),
    trained_models: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsToTerraform(struct!.trainedModels),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    trained_model_exports: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsToHclTerraform(struct!.trainedModelExports),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports",
    },
    trained_model_inference_jobs: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsToHclTerraform(struct!.trainedModelInferenceJobs),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs",
    },
    trained_models: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsToHclTerraform(struct!.trainedModels),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trainedModelExports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainedModelExports = this._trainedModelExports?.internalValue;
    }
    if (this._trainedModelInferenceJobs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainedModelInferenceJobs = this._trainedModelInferenceJobs?.internalValue;
    }
    if (this._trainedModels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainedModels = this._trainedModels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trainedModelExports.internalValue = undefined;
      this._trainedModelInferenceJobs.internalValue = undefined;
      this._trainedModels.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trainedModelExports.internalValue = value.trainedModelExports;
      this._trainedModelInferenceJobs.internalValue = value.trainedModelInferenceJobs;
      this._trainedModels.internalValue = value.trainedModels;
    }
  }

  // trained_model_exports - computed: true, optional: true, required: false
  private _trainedModelExports = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference(this, "trained_model_exports");
  public get trainedModelExports() {
    return this._trainedModelExports;
  }
  public putTrainedModelExports(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports) {
    this._trainedModelExports.internalValue = value;
  }
  public resetTrainedModelExports() {
    this._trainedModelExports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainedModelExportsInput() {
    return this._trainedModelExports.internalValue;
  }

  // trained_model_inference_jobs - computed: true, optional: true, required: false
  private _trainedModelInferenceJobs = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference(this, "trained_model_inference_jobs");
  public get trainedModelInferenceJobs() {
    return this._trainedModelInferenceJobs;
  }
  public putTrainedModelInferenceJobs(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs) {
    this._trainedModelInferenceJobs.internalValue = value;
  }
  public resetTrainedModelInferenceJobs() {
    this._trainedModelInferenceJobs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainedModelInferenceJobsInput() {
    return this._trainedModelInferenceJobs.internalValue;
  }

  // trained_models - computed: true, optional: true, required: false
  private _trainedModels = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference(this, "trained_models");
  public get trainedModels() {
    return this._trainedModels;
  }
  public putTrainedModels(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels) {
    this._trainedModels.internalValue = value;
  }
  public resetTrainedModels() {
    this._trainedModels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainedModelsInput() {
    return this._trainedModels.internalValue;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#policies CleanroomsmlConfiguredModelAlgorithmAssociation#policies}
  */
  readonly policies?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policies: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesToTerraform(struct!.policies),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policies: {
      value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "struct",
      storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policies.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: true, optional: true, required: false
  private _policies = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface CleanroomsmlConfiguredModelAlgorithmAssociationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#key CleanroomsmlConfiguredModelAlgorithmAssociation#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}
  */
  readonly value?: string;
}

export function cleanroomsmlConfiguredModelAlgorithmAssociationTagsToTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cleanroomsmlConfiguredModelAlgorithmAssociationTagsToHclTerraform(struct?: CleanroomsmlConfiguredModelAlgorithmAssociationTags | cdktn.IResolvable): any {
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

export class CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CleanroomsmlConfiguredModelAlgorithmAssociationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CleanroomsmlConfiguredModelAlgorithmAssociationTags | cdktn.IResolvable | undefined) {
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

export class CleanroomsmlConfiguredModelAlgorithmAssociationTagsList extends cdktn.ComplexList {
  public internalValue? : CleanroomsmlConfiguredModelAlgorithmAssociationTags[] | cdktn.IResolvable

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
  public get(index: number): CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference {
    return new CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association awscc_cleanroomsml_configured_model_algorithm_association}
*/
export class CleanroomsmlConfiguredModelAlgorithmAssociation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cleanroomsml_configured_model_algorithm_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithmAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CleanroomsmlConfiguredModelAlgorithmAssociation to import
  * @param importFromId The id of the existing CleanroomsmlConfiguredModelAlgorithmAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CleanroomsmlConfiguredModelAlgorithmAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanroomsml_configured_model_algorithm_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/cleanroomsml_configured_model_algorithm_association awscc_cleanroomsml_configured_model_algorithm_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CleanroomsmlConfiguredModelAlgorithmAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: CleanroomsmlConfiguredModelAlgorithmAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cleanroomsml_configured_model_algorithm_association',
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
    this._configuredModelAlgorithmArn = config.configuredModelAlgorithmArn;
    this._description = config.description;
    this._membershipIdentifier = config.membershipIdentifier;
    this._name = config.name;
    this._privacyConfiguration.internalValue = config.privacyConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collaboration_identifier - computed: true, optional: false, required: false
  public get collaborationIdentifier() {
    return this.getStringAttribute('collaboration_identifier');
  }

  // configured_model_algorithm_arn - computed: false, optional: false, required: true
  private _configuredModelAlgorithmArn?: string; 
  public get configuredModelAlgorithmArn() {
    return this.getStringAttribute('configured_model_algorithm_arn');
  }
  public set configuredModelAlgorithmArn(value: string) {
    this._configuredModelAlgorithmArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredModelAlgorithmArnInput() {
    return this._configuredModelAlgorithmArn;
  }

  // configured_model_algorithm_association_arn - computed: true, optional: false, required: false
  public get configuredModelAlgorithmAssociationArn() {
    return this.getStringAttribute('configured_model_algorithm_association_arn');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // membership_identifier - computed: false, optional: false, required: true
  private _membershipIdentifier?: string; 
  public get membershipIdentifier() {
    return this.getStringAttribute('membership_identifier');
  }
  public set membershipIdentifier(value: string) {
    this._membershipIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipIdentifierInput() {
    return this._membershipIdentifier;
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

  // privacy_configuration - computed: true, optional: true, required: false
  private _privacyConfiguration = new CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference(this, "privacy_configuration");
  public get privacyConfiguration() {
    return this._privacyConfiguration;
  }
  public putPrivacyConfiguration(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration) {
    this._privacyConfiguration.internalValue = value;
  }
  public resetPrivacyConfiguration() {
    this._privacyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyConfigurationInput() {
    return this._privacyConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CleanroomsmlConfiguredModelAlgorithmAssociationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CleanroomsmlConfiguredModelAlgorithmAssociationTags[] | cdktn.IResolvable) {
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
      configured_model_algorithm_arn: cdktn.stringToTerraform(this._configuredModelAlgorithmArn),
      description: cdktn.stringToTerraform(this._description),
      membership_identifier: cdktn.stringToTerraform(this._membershipIdentifier),
      name: cdktn.stringToTerraform(this._name),
      privacy_configuration: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationToTerraform(this._privacyConfiguration.internalValue),
      tags: cdktn.listMapper(cleanroomsmlConfiguredModelAlgorithmAssociationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configured_model_algorithm_arn: {
        value: cdktn.stringToHclTerraform(this._configuredModelAlgorithmArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_identifier: {
        value: cdktn.stringToHclTerraform(this._membershipIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_configuration: {
        value: cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationToHclTerraform(this._privacyConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(cleanroomsmlConfiguredModelAlgorithmAssociationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CleanroomsmlConfiguredModelAlgorithmAssociationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
