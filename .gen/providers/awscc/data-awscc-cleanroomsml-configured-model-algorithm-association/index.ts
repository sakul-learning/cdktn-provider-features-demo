// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanroomsml_configured_model_algorithm_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanroomsml_configured_model_algorithm_association#id DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // files_to_export - computed: true, optional: false, required: false
  public get filesToExport() {
    return cdktn.Fn.tolist(this.getListAttribute('files_to_export'));
  }

  // max_size - computed: true, optional: false, required: false
  private _maxSize = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference(this, "max_size");
  public get maxSize() {
    return this._maxSize;
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_data_identifiers - computed: true, optional: false, required: false
  public get customDataIdentifiers() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_data_identifiers'));
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_entity_config - computed: true, optional: false, required: false
  private _customEntityConfig = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(this, "custom_entity_config");
  public get customEntityConfig() {
    return this._customEntityConfig;
  }

  // entities_to_redact - computed: true, optional: false, required: false
  public get entitiesToRedact() {
    return cdktn.Fn.tolist(this.getListAttribute('entities_to_redact'));
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_account_ids - computed: true, optional: false, required: false
  public get allowedAccountIds() {
    return this.getListAttribute('allowed_account_ids');
  }

  // filter_pattern - computed: true, optional: false, required: false
  public get filterPattern() {
    return this.getStringAttribute('filter_pattern');
  }

  // log_redaction_configuration - computed: true, optional: false, required: false
  private _logRedactionConfiguration = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference(this, "log_redaction_configuration");
  public get logRedactionConfiguration() {
    return this._logRedactionConfiguration;
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference {
    return new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_logs - computed: true, optional: false, required: false
  private _containerLogs = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList(this, "container_logs", true);
  public get containerLogs() {
    return this._containerLogs;
  }

  // max_output_size - computed: true, optional: false, required: false
  private _maxOutputSize = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference(this, "max_output_size");
  public get maxOutputSize() {
    return this._maxOutputSize;
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_data_identifiers - computed: true, optional: false, required: false
  public get customDataIdentifiers() {
    return cdktn.Fn.tolist(this.getListAttribute('custom_data_identifiers'));
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_entity_config - computed: true, optional: false, required: false
  private _customEntityConfig = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(this, "custom_entity_config");
  public get customEntityConfig() {
    return this._customEntityConfig;
  }

  // entities_to_redact - computed: true, optional: false, required: false
  public get entitiesToRedact() {
    return cdktn.Fn.tolist(this.getListAttribute('entities_to_redact'));
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_account_ids - computed: true, optional: false, required: false
  public get allowedAccountIds() {
    return this.getListAttribute('allowed_account_ids');
  }

  // filter_pattern - computed: true, optional: false, required: false
  public get filterPattern() {
    return this.getStringAttribute('filter_pattern');
  }

  // log_redaction_configuration - computed: true, optional: false, required: false
  private _logRedactionConfiguration = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference(this, "log_redaction_configuration");
  public get logRedactionConfiguration() {
    return this._logRedactionConfiguration;
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference {
    return new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // noise_level - computed: true, optional: false, required: false
  public get noiseLevel() {
    return this.getStringAttribute('noise_level');
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_logs - computed: true, optional: false, required: false
  private _containerLogs = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList(this, "container_logs", true);
  public get containerLogs() {
    return this._containerLogs;
  }

  // container_metrics - computed: true, optional: false, required: false
  private _containerMetrics = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference(this, "container_metrics");
  public get containerMetrics() {
    return this._containerMetrics;
  }

  // max_artifact_size - computed: true, optional: false, required: false
  private _maxArtifactSize = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference(this, "max_artifact_size");
  public get maxArtifactSize() {
    return this._maxArtifactSize;
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trained_model_exports - computed: true, optional: false, required: false
  private _trainedModelExports = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference(this, "trained_model_exports");
  public get trainedModelExports() {
    return this._trainedModelExports;
  }

  // trained_model_inference_jobs - computed: true, optional: false, required: false
  private _trainedModelInferenceJobs = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference(this, "trained_model_inference_jobs");
  public get trainedModelInferenceJobs() {
    return this._trainedModelInferenceJobs;
  }

  // trained_models - computed: true, optional: false, required: false
  private _trainedModels = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference(this, "trained_models");
  public get trainedModels() {
    return this._trainedModels;
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
}
export interface DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags {
}

export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsToTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsToHclTerraform(struct?: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTags | undefined) {
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

export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference {
    return new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanroomsml_configured_model_algorithm_association awscc_cleanroomsml_configured_model_algorithm_association}
*/
export class DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cleanroomsml_configured_model_algorithm_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation to import
  * @param importFromId The id of the existing DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanroomsml_configured_model_algorithm_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanroomsml_configured_model_algorithm_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/cleanroomsml_configured_model_algorithm_association awscc_cleanroomsml_configured_model_algorithm_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collaboration_identifier - computed: true, optional: false, required: false
  public get collaborationIdentifier() {
    return this.getStringAttribute('collaboration_identifier');
  }

  // configured_model_algorithm_arn - computed: true, optional: false, required: false
  public get configuredModelAlgorithmArn() {
    return this.getStringAttribute('configured_model_algorithm_arn');
  }

  // configured_model_algorithm_association_arn - computed: true, optional: false, required: false
  public get configuredModelAlgorithmAssociationArn() {
    return this.getStringAttribute('configured_model_algorithm_association_arn');
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

  // membership_identifier - computed: true, optional: false, required: false
  public get membershipIdentifier() {
    return this.getStringAttribute('membership_identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_configuration - computed: true, optional: false, required: false
  private _privacyConfiguration = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference(this, "privacy_configuration");
  public get privacyConfiguration() {
    return this._privacyConfiguration;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCleanroomsmlConfiguredModelAlgorithmAssociationTagsList(this, "tags", true);
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
