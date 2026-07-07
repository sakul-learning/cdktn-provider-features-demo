// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/entityresolution_matching_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEntityresolutionMatchingWorkflowConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/entityresolution_matching_workflow#id DataAwsccEntityresolutionMatchingWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig {
}

export function dataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfig | undefined) {
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
export interface DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig {
}

export function dataAwsccEntityresolutionMatchingWorkflowInputSourceConfigToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowInputSourceConfigToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowInputSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_normalization - computed: true, optional: false, required: false
  public get applyNormalization() {
    return this.getBooleanAttribute('apply_normalization');
  }

  // input_source_arn - computed: true, optional: false, required: false
  public get inputSourceArn() {
    return this.getStringAttribute('input_source_arn');
  }

  // schema_arn - computed: true, optional: false, required: false
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }
}

export class DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference {
    return new DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig {
}

export function dataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // object_type_arn - computed: true, optional: false, required: false
  public get objectTypeArn() {
    return this.getStringAttribute('object_type_arn');
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput {
}

export function dataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hashed - computed: true, optional: false, required: false
  public get hashed() {
    return this.getBooleanAttribute('hashed');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference {
    return new DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig {
}

export function dataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_normalization - computed: true, optional: false, required: false
  public get applyNormalization() {
    return this.getBooleanAttribute('apply_normalization');
  }

  // customer_profiles_integration_config - computed: true, optional: false, required: false
  private _customerProfilesIntegrationConfig = new DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigCustomerProfilesIntegrationConfigOutputReference(this, "customer_profiles_integration_config");
  public get customerProfilesIntegrationConfig() {
    return this._customerProfilesIntegrationConfig;
  }

  // kms_arn - computed: true, optional: false, required: false
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }

  // output - computed: true, optional: false, required: false
  private _output = new DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputList(this, "output", false);
  public get output() {
    return this._output;
  }

  // output_s3_path - computed: true, optional: false, required: false
  public get outputS3Path() {
    return this.getStringAttribute('output_s3_path');
  }
}

export class DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference {
    return new DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration {
}

export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfiguration | undefined) {
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
export interface DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties {
}

export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intermediate_source_configuration - computed: true, optional: false, required: false
  private _intermediateSourceConfiguration = new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(this, "intermediate_source_configuration");
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
export interface DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules {
}

export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRules | undefined) {
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

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference {
    return new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties {
}

export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedProperties | undefined) {
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

  // match_purpose - computed: true, optional: false, required: false
  public get matchPurpose() {
    return this.getStringAttribute('match_purpose');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig {
}

export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_transitive_matching - computed: true, optional: false, required: false
  public get enableTransitiveMatching() {
    return this.getBooleanAttribute('enable_transitive_matching');
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules {
}

export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
}

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference {
    return new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties {
}

export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // matching_config - computed: true, optional: false, required: false
  private _matchingConfig = new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesMatchingConfigOutputReference(this, "matching_config");
  public get matchingConfig() {
    return this._matchingConfig;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques {
}

export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowResolutionTechniques | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // provider_properties - computed: true, optional: false, required: false
  private _providerProperties = new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesProviderPropertiesOutputReference(this, "provider_properties");
  public get providerProperties() {
    return this._providerProperties;
  }

  // resolution_type - computed: true, optional: false, required: false
  public get resolutionType() {
    return this.getStringAttribute('resolution_type');
  }

  // rule_based_properties - computed: true, optional: false, required: false
  private _ruleBasedProperties = new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleBasedPropertiesOutputReference(this, "rule_based_properties");
  public get ruleBasedProperties() {
    return this._ruleBasedProperties;
  }

  // rule_condition_properties - computed: true, optional: false, required: false
  private _ruleConditionProperties = new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesRuleConditionPropertiesOutputReference(this, "rule_condition_properties");
  public get ruleConditionProperties() {
    return this._ruleConditionProperties;
  }
}
export interface DataAwsccEntityresolutionMatchingWorkflowTags {
}

export function dataAwsccEntityresolutionMatchingWorkflowTagsToTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionMatchingWorkflowTagsToHclTerraform(struct?: DataAwsccEntityresolutionMatchingWorkflowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionMatchingWorkflowTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionMatchingWorkflowTags | undefined) {
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

export class DataAwsccEntityresolutionMatchingWorkflowTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference {
    return new DataAwsccEntityresolutionMatchingWorkflowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/entityresolution_matching_workflow awscc_entityresolution_matching_workflow}
*/
export class DataAwsccEntityresolutionMatchingWorkflow extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_entityresolution_matching_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEntityresolutionMatchingWorkflow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEntityresolutionMatchingWorkflow to import
  * @param importFromId The id of the existing DataAwsccEntityresolutionMatchingWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/entityresolution_matching_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEntityresolutionMatchingWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_entityresolution_matching_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/entityresolution_matching_workflow awscc_entityresolution_matching_workflow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEntityresolutionMatchingWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEntityresolutionMatchingWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_entityresolution_matching_workflow',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
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

  // incremental_run_config - computed: true, optional: false, required: false
  private _incrementalRunConfig = new DataAwsccEntityresolutionMatchingWorkflowIncrementalRunConfigOutputReference(this, "incremental_run_config");
  public get incrementalRunConfig() {
    return this._incrementalRunConfig;
  }

  // input_source_config - computed: true, optional: false, required: false
  private _inputSourceConfig = new DataAwsccEntityresolutionMatchingWorkflowInputSourceConfigList(this, "input_source_config", false);
  public get inputSourceConfig() {
    return this._inputSourceConfig;
  }

  // output_source_config - computed: true, optional: false, required: false
  private _outputSourceConfig = new DataAwsccEntityresolutionMatchingWorkflowOutputSourceConfigList(this, "output_source_config", false);
  public get outputSourceConfig() {
    return this._outputSourceConfig;
  }

  // resolution_techniques - computed: true, optional: false, required: false
  private _resolutionTechniques = new DataAwsccEntityresolutionMatchingWorkflowResolutionTechniquesOutputReference(this, "resolution_techniques");
  public get resolutionTechniques() {
    return this._resolutionTechniques;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEntityresolutionMatchingWorkflowTagsList(this, "tags", true);
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
