// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_mapping_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEntityresolutionIdMappingWorkflowConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_mapping_workflow#id DataAwsccEntityresolutionIdMappingWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig {
}

export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigToTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigToHclTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // incremental_run_type - computed: true, optional: false, required: false
  public get incrementalRunType() {
    return this.getStringAttribute('incremental_run_type');
  }
}
export interface DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration {
}

export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationToTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationToHclTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intermediate_s3_path - computed: true, optional: false, required: false
  public get intermediateS3Path() {
    return this.getStringAttribute('intermediate_s3_path');
  }
}
export interface DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties {
}

export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesToTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesToHclTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intermediate_source_configuration - computed: true, optional: false, required: false
  private _intermediateSourceConfiguration = new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(this, "intermediate_source_configuration");
  public get intermediateSourceConfiguration() {
    return this._intermediateSourceConfiguration;
  }

  // provider_configuration - computed: true, optional: false, required: false
  private _providerConfiguration = new cdktn.StringMap(this, "provider_configuration");
  public get providerConfiguration() {
    return this._providerConfiguration;
  }

  // provider_service_arn - computed: true, optional: false, required: false
  public get providerServiceArn() {
    return this.getStringAttribute('provider_service_arn');
  }
}
export interface DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules {
}

export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesToTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesToHclTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // matching_keys - computed: true, optional: false, required: false
  public get matchingKeys() {
    return this.getListAttribute('matching_keys');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
}

export class DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference {
    return new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties {
}

export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesToTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesToHclTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_matching_model - computed: true, optional: false, required: false
  public get attributeMatchingModel() {
    return this.getStringAttribute('attribute_matching_model');
  }

  // record_matching_model - computed: true, optional: false, required: false
  public get recordMatchingModel() {
    return this.getStringAttribute('record_matching_model');
  }

  // rule_definition_type - computed: true, optional: false, required: false
  public get ruleDefinitionType() {
    return this.getStringAttribute('rule_definition_type');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques {
}

export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesToTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesToHclTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id_mapping_type - computed: true, optional: false, required: false
  public get idMappingType() {
    return this.getStringAttribute('id_mapping_type');
  }

  // normalization_version - computed: true, optional: false, required: false
  public get normalizationVersion() {
    return this.getStringAttribute('normalization_version');
  }

  // provider_properties - computed: true, optional: false, required: false
  private _providerProperties = new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference(this, "provider_properties");
  public get providerProperties() {
    return this._providerProperties;
  }

  // rule_based_properties - computed: true, optional: false, required: false
  private _ruleBasedProperties = new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference(this, "rule_based_properties");
  public get ruleBasedProperties() {
    return this._ruleBasedProperties;
  }
}
export interface DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig {
}

export function dataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigToTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigToHclTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_source_arn - computed: true, optional: false, required: false
  public get inputSourceArn() {
    return this.getStringAttribute('input_source_arn');
  }

  // schema_arn - computed: true, optional: false, required: false
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference {
    return new DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig {
}

export function dataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigToTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigToHclTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_arn - computed: true, optional: false, required: false
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }

  // output_s3_path - computed: true, optional: false, required: false
  public get outputS3Path() {
    return this.getStringAttribute('output_s3_path');
  }
}

export class DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference {
    return new DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionIdMappingWorkflowTags {
}

export function dataAwsccEntityresolutionIdMappingWorkflowTagsToTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdMappingWorkflowTagsToHclTerraform(struct?: DataAwsccEntityresolutionIdMappingWorkflowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionIdMappingWorkflowTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdMappingWorkflowTags | undefined) {
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

export class DataAwsccEntityresolutionIdMappingWorkflowTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference {
    return new DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow}
*/
export class DataAwsccEntityresolutionIdMappingWorkflow extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_entityresolution_id_mapping_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEntityresolutionIdMappingWorkflow to import
  * @param importFromId The id of the existing DataAwsccEntityresolutionIdMappingWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_mapping_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEntityresolutionIdMappingWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_entityresolution_id_mapping_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEntityresolutionIdMappingWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEntityresolutionIdMappingWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_entityresolution_id_mapping_workflow',
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // id_mapping_incremental_run_config - computed: true, optional: false, required: false
  private _idMappingIncrementalRunConfig = new DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference(this, "id_mapping_incremental_run_config");
  public get idMappingIncrementalRunConfig() {
    return this._idMappingIncrementalRunConfig;
  }

  // id_mapping_techniques - computed: true, optional: false, required: false
  private _idMappingTechniques = new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference(this, "id_mapping_techniques");
  public get idMappingTechniques() {
    return this._idMappingTechniques;
  }

  // input_source_config - computed: true, optional: false, required: false
  private _inputSourceConfig = new DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList(this, "input_source_config", false);
  public get inputSourceConfig() {
    return this._inputSourceConfig;
  }

  // output_source_config - computed: true, optional: false, required: false
  private _outputSourceConfig = new DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList(this, "output_source_config", false);
  public get outputSourceConfig() {
    return this._outputSourceConfig;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEntityresolutionIdMappingWorkflowTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workflow_arn - computed: true, optional: false, required: false
  public get workflowArn() {
    return this.getStringAttribute('workflow_arn');
  }

  // workflow_name - computed: true, optional: false, required: false
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
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
