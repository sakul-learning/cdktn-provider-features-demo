// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EntityresolutionIdMappingWorkflowConfig extends cdktn.TerraformMetaArguments {
  /**
  * The description of the IdMappingWorkflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#description EntityresolutionIdMappingWorkflow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_incremental_run_config EntityresolutionIdMappingWorkflow#id_mapping_incremental_run_config}
  */
  readonly idMappingIncrementalRunConfig?: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_techniques EntityresolutionIdMappingWorkflow#id_mapping_techniques}
  */
  readonly idMappingTechniques: EntityresolutionIdMappingWorkflowIdMappingTechniques;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#input_source_config EntityresolutionIdMappingWorkflow#input_source_config}
  */
  readonly inputSourceConfig: EntityresolutionIdMappingWorkflowInputSourceConfig[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#output_source_config EntityresolutionIdMappingWorkflow#output_source_config}
  */
  readonly outputSourceConfig?: EntityresolutionIdMappingWorkflowOutputSourceConfig[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#role_arn EntityresolutionIdMappingWorkflow#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#tags EntityresolutionIdMappingWorkflow#tags}
  */
  readonly tags?: EntityresolutionIdMappingWorkflowTags[] | cdktn.IResolvable;
  /**
  * The name of the IdMappingWorkflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#workflow_name EntityresolutionIdMappingWorkflow#workflow_name}
  */
  readonly workflowName: string;
}
export interface EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#incremental_run_type EntityresolutionIdMappingWorkflow#incremental_run_type}
  */
  readonly incrementalRunType?: string;
}

export function entityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigToTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    incremental_run_type: cdktn.stringToTerraform(struct!.incrementalRunType),
  }
}


export function entityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigToHclTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    incremental_run_type: {
      value: cdktn.stringToHclTerraform(struct!.incrementalRunType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incrementalRunType !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalRunType = this._incrementalRunType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._incrementalRunType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._incrementalRunType = value.incrementalRunType;
    }
  }

  // incremental_run_type - computed: true, optional: true, required: false
  private _incrementalRunType?: string; 
  public get incrementalRunType() {
    return this.getStringAttribute('incremental_run_type');
  }
  public set incrementalRunType(value: string) {
    this._incrementalRunType = value;
  }
  public resetIncrementalRunType() {
    this._incrementalRunType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalRunTypeInput() {
    return this._incrementalRunType;
  }
}
export interface EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration {
  /**
  * The s3 path that would be used to stage the intermediate data being generated during workflow execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_s3_path EntityresolutionIdMappingWorkflow#intermediate_s3_path}
  */
  readonly intermediateS3Path?: string;
}

export function entityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationToTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    intermediate_s3_path: cdktn.stringToTerraform(struct!.intermediateS3Path),
  }
}


export function entityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationToHclTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    intermediate_s3_path: {
      value: cdktn.stringToHclTerraform(struct!.intermediateS3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intermediateS3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateS3Path = this._intermediateS3Path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intermediateS3Path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intermediateS3Path = value.intermediateS3Path;
    }
  }

  // intermediate_s3_path - computed: true, optional: true, required: false
  private _intermediateS3Path?: string; 
  public get intermediateS3Path() {
    return this.getStringAttribute('intermediate_s3_path');
  }
  public set intermediateS3Path(value: string) {
    this._intermediateS3Path = value;
  }
  public resetIntermediateS3Path() {
    this._intermediateS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateS3PathInput() {
    return this._intermediateS3Path;
  }
}
export interface EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_source_configuration EntityresolutionIdMappingWorkflow#intermediate_source_configuration}
  */
  readonly intermediateSourceConfiguration?: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration;
  /**
  * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#provider_configuration EntityresolutionIdMappingWorkflow#provider_configuration}
  */
  readonly providerConfiguration?: { [key: string]: string };
  /**
  * Arn of the Provider Service being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#provider_service_arn EntityresolutionIdMappingWorkflow#provider_service_arn}
  */
  readonly providerServiceArn?: string;
}

export function entityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesToTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    intermediate_source_configuration: entityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationToTerraform(struct!.intermediateSourceConfiguration),
    provider_configuration: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.providerConfiguration),
    provider_service_arn: cdktn.stringToTerraform(struct!.providerServiceArn),
  }
}


export function entityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesToHclTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    intermediate_source_configuration: {
      value: entityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationToHclTerraform(struct!.intermediateSourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration",
    },
    provider_configuration: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.providerConfiguration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    provider_service_arn: {
      value: cdktn.stringToHclTerraform(struct!.providerServiceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intermediateSourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateSourceConfiguration = this._intermediateSourceConfiguration?.internalValue;
    }
    if (this._providerConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfiguration = this._providerConfiguration;
    }
    if (this._providerServiceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerServiceArn = this._providerServiceArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intermediateSourceConfiguration.internalValue = undefined;
      this._providerConfiguration = undefined;
      this._providerServiceArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intermediateSourceConfiguration.internalValue = value.intermediateSourceConfiguration;
      this._providerConfiguration = value.providerConfiguration;
      this._providerServiceArn = value.providerServiceArn;
    }
  }

  // intermediate_source_configuration - computed: true, optional: true, required: false
  private _intermediateSourceConfiguration = new EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(this, "intermediate_source_configuration");
  public get intermediateSourceConfiguration() {
    return this._intermediateSourceConfiguration;
  }
  public putIntermediateSourceConfiguration(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration) {
    this._intermediateSourceConfiguration.internalValue = value;
  }
  public resetIntermediateSourceConfiguration() {
    this._intermediateSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateSourceConfigurationInput() {
    return this._intermediateSourceConfiguration.internalValue;
  }

  // provider_configuration - computed: true, optional: true, required: false
  private _providerConfiguration?: { [key: string]: string }; 
  public get providerConfiguration() {
    return this.getStringMapAttribute('provider_configuration');
  }
  public set providerConfiguration(value: { [key: string]: string }) {
    this._providerConfiguration = value;
  }
  public resetProviderConfiguration() {
    this._providerConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigurationInput() {
    return this._providerConfiguration;
  }

  // provider_service_arn - computed: true, optional: true, required: false
  private _providerServiceArn?: string; 
  public get providerServiceArn() {
    return this.getStringAttribute('provider_service_arn');
  }
  public set providerServiceArn(value: string) {
    this._providerServiceArn = value;
  }
  public resetProviderServiceArn() {
    this._providerServiceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerServiceArnInput() {
    return this._providerServiceArn;
  }
}
export interface EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#matching_keys EntityresolutionIdMappingWorkflow#matching_keys}
  */
  readonly matchingKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#rule_name EntityresolutionIdMappingWorkflow#rule_name}
  */
  readonly ruleName?: string;
}

export function entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesToTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchingKeys),
    rule_name: cdktn.stringToTerraform(struct!.ruleName),
  }
}


export function entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesToHclTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    matching_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchingKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingKeys = this._matchingKeys;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchingKeys = undefined;
      this._ruleName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchingKeys = value.matchingKeys;
      this._ruleName = value.ruleName;
    }
  }

  // matching_keys - computed: true, optional: true, required: false
  private _matchingKeys?: string[]; 
  public get matchingKeys() {
    return this.getListAttribute('matching_keys');
  }
  public set matchingKeys(value: string[]) {
    this._matchingKeys = value;
  }
  public resetMatchingKeys() {
    this._matchingKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingKeysInput() {
    return this._matchingKeys;
  }

  // rule_name - computed: true, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }
}

export class EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList extends cdktn.ComplexList {
  public internalValue? : EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[] | cdktn.IResolvable

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
  public get(index: number): EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference {
    return new EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#attribute_matching_model EntityresolutionIdMappingWorkflow#attribute_matching_model}
  */
  readonly attributeMatchingModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#record_matching_model EntityresolutionIdMappingWorkflow#record_matching_model}
  */
  readonly recordMatchingModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#rule_definition_type EntityresolutionIdMappingWorkflow#rule_definition_type}
  */
  readonly ruleDefinitionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#rules EntityresolutionIdMappingWorkflow#rules}
  */
  readonly rules?: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[] | cdktn.IResolvable;
}

export function entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesToTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_matching_model: cdktn.stringToTerraform(struct!.attributeMatchingModel),
    record_matching_model: cdktn.stringToTerraform(struct!.recordMatchingModel),
    rule_definition_type: cdktn.stringToTerraform(struct!.ruleDefinitionType),
    rules: cdktn.listMapper(entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesToTerraform, false)(struct!.rules),
  }
}


export function entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesToHclTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute_matching_model: {
      value: cdktn.stringToHclTerraform(struct!.attributeMatchingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_matching_model: {
      value: cdktn.stringToHclTerraform(struct!.recordMatchingModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_definition_type: {
      value: cdktn.stringToHclTerraform(struct!.ruleDefinitionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktn.listMapperHcl(entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeMatchingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMatchingModel = this._attributeMatchingModel;
    }
    if (this._recordMatchingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordMatchingModel = this._recordMatchingModel;
    }
    if (this._ruleDefinitionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDefinitionType = this._ruleDefinitionType;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeMatchingModel = undefined;
      this._recordMatchingModel = undefined;
      this._ruleDefinitionType = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeMatchingModel = value.attributeMatchingModel;
      this._recordMatchingModel = value.recordMatchingModel;
      this._ruleDefinitionType = value.ruleDefinitionType;
      this._rules.internalValue = value.rules;
    }
  }

  // attribute_matching_model - computed: true, optional: true, required: false
  private _attributeMatchingModel?: string; 
  public get attributeMatchingModel() {
    return this.getStringAttribute('attribute_matching_model');
  }
  public set attributeMatchingModel(value: string) {
    this._attributeMatchingModel = value;
  }
  public resetAttributeMatchingModel() {
    this._attributeMatchingModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMatchingModelInput() {
    return this._attributeMatchingModel;
  }

  // record_matching_model - computed: true, optional: true, required: false
  private _recordMatchingModel?: string; 
  public get recordMatchingModel() {
    return this.getStringAttribute('record_matching_model');
  }
  public set recordMatchingModel(value: string) {
    this._recordMatchingModel = value;
  }
  public resetRecordMatchingModel() {
    this._recordMatchingModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordMatchingModelInput() {
    return this._recordMatchingModel;
  }

  // rule_definition_type - computed: true, optional: true, required: false
  private _ruleDefinitionType?: string; 
  public get ruleDefinitionType() {
    return this.getStringAttribute('rule_definition_type');
  }
  public set ruleDefinitionType(value: string) {
    this._ruleDefinitionType = value;
  }
  public resetRuleDefinitionType() {
    this._ruleDefinitionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDefinitionTypeInput() {
    return this._ruleDefinitionType;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface EntityresolutionIdMappingWorkflowIdMappingTechniques {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_type EntityresolutionIdMappingWorkflow#id_mapping_type}
  */
  readonly idMappingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#normalization_version EntityresolutionIdMappingWorkflow#normalization_version}
  */
  readonly normalizationVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#provider_properties EntityresolutionIdMappingWorkflow#provider_properties}
  */
  readonly providerProperties?: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#rule_based_properties EntityresolutionIdMappingWorkflow#rule_based_properties}
  */
  readonly ruleBasedProperties?: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties;
}

export function entityresolutionIdMappingWorkflowIdMappingTechniquesToTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniques | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id_mapping_type: cdktn.stringToTerraform(struct!.idMappingType),
    normalization_version: cdktn.stringToTerraform(struct!.normalizationVersion),
    provider_properties: entityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesToTerraform(struct!.providerProperties),
    rule_based_properties: entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesToTerraform(struct!.ruleBasedProperties),
  }
}


export function entityresolutionIdMappingWorkflowIdMappingTechniquesToHclTerraform(struct?: EntityresolutionIdMappingWorkflowIdMappingTechniques | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id_mapping_type: {
      value: cdktn.stringToHclTerraform(struct!.idMappingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normalization_version: {
      value: cdktn.stringToHclTerraform(struct!.normalizationVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_properties: {
      value: entityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesToHclTerraform(struct!.providerProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties",
    },
    rule_based_properties: {
      value: entityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesToHclTerraform(struct!.ruleBasedProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EntityresolutionIdMappingWorkflowIdMappingTechniques | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idMappingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.idMappingType = this._idMappingType;
    }
    if (this._normalizationVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalizationVersion = this._normalizationVersion;
    }
    if (this._providerProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerProperties = this._providerProperties?.internalValue;
    }
    if (this._ruleBasedProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleBasedProperties = this._ruleBasedProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdMappingWorkflowIdMappingTechniques | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idMappingType = undefined;
      this._normalizationVersion = undefined;
      this._providerProperties.internalValue = undefined;
      this._ruleBasedProperties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idMappingType = value.idMappingType;
      this._normalizationVersion = value.normalizationVersion;
      this._providerProperties.internalValue = value.providerProperties;
      this._ruleBasedProperties.internalValue = value.ruleBasedProperties;
    }
  }

  // id_mapping_type - computed: true, optional: true, required: false
  private _idMappingType?: string; 
  public get idMappingType() {
    return this.getStringAttribute('id_mapping_type');
  }
  public set idMappingType(value: string) {
    this._idMappingType = value;
  }
  public resetIdMappingType() {
    this._idMappingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idMappingTypeInput() {
    return this._idMappingType;
  }

  // normalization_version - computed: true, optional: true, required: false
  private _normalizationVersion?: string; 
  public get normalizationVersion() {
    return this.getStringAttribute('normalization_version');
  }
  public set normalizationVersion(value: string) {
    this._normalizationVersion = value;
  }
  public resetNormalizationVersion() {
    this._normalizationVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizationVersionInput() {
    return this._normalizationVersion;
  }

  // provider_properties - computed: true, optional: true, required: false
  private _providerProperties = new EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference(this, "provider_properties");
  public get providerProperties() {
    return this._providerProperties;
  }
  public putProviderProperties(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties) {
    this._providerProperties.internalValue = value;
  }
  public resetProviderProperties() {
    this._providerProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerPropertiesInput() {
    return this._providerProperties.internalValue;
  }

  // rule_based_properties - computed: true, optional: true, required: false
  private _ruleBasedProperties = new EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference(this, "rule_based_properties");
  public get ruleBasedProperties() {
    return this._ruleBasedProperties;
  }
  public putRuleBasedProperties(value: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties) {
    this._ruleBasedProperties.internalValue = value;
  }
  public resetRuleBasedProperties() {
    this._ruleBasedProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleBasedPropertiesInput() {
    return this._ruleBasedProperties.internalValue;
  }
}
export interface EntityresolutionIdMappingWorkflowInputSourceConfig {
  /**
  * An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#input_source_arn EntityresolutionIdMappingWorkflow#input_source_arn}
  */
  readonly inputSourceArn: string;
  /**
  * The SchemaMapping arn associated with the Schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#schema_arn EntityresolutionIdMappingWorkflow#schema_arn}
  */
  readonly schemaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#type EntityresolutionIdMappingWorkflow#type}
  */
  readonly type?: string;
}

export function entityresolutionIdMappingWorkflowInputSourceConfigToTerraform(struct?: EntityresolutionIdMappingWorkflowInputSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_source_arn: cdktn.stringToTerraform(struct!.inputSourceArn),
    schema_arn: cdktn.stringToTerraform(struct!.schemaArn),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function entityresolutionIdMappingWorkflowInputSourceConfigToHclTerraform(struct?: EntityresolutionIdMappingWorkflowInputSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    input_source_arn: {
      value: cdktn.stringToHclTerraform(struct!.inputSourceArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_arn: {
      value: cdktn.stringToHclTerraform(struct!.schemaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EntityresolutionIdMappingWorkflowInputSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSourceArn = this._inputSourceArn;
    }
    if (this._schemaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaArn = this._schemaArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdMappingWorkflowInputSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputSourceArn = undefined;
      this._schemaArn = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputSourceArn = value.inputSourceArn;
      this._schemaArn = value.schemaArn;
      this._type = value.type;
    }
  }

  // input_source_arn - computed: false, optional: false, required: true
  private _inputSourceArn?: string; 
  public get inputSourceArn() {
    return this.getStringAttribute('input_source_arn');
  }
  public set inputSourceArn(value: string) {
    this._inputSourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSourceArnInput() {
    return this._inputSourceArn;
  }

  // schema_arn - computed: true, optional: true, required: false
  private _schemaArn?: string; 
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }
  public set schemaArn(value: string) {
    this._schemaArn = value;
  }
  public resetSchemaArn() {
    this._schemaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaArnInput() {
    return this._schemaArn;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EntityresolutionIdMappingWorkflowInputSourceConfigList extends cdktn.ComplexList {
  public internalValue? : EntityresolutionIdMappingWorkflowInputSourceConfig[] | cdktn.IResolvable

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
  public get(index: number): EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference {
    return new EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EntityresolutionIdMappingWorkflowOutputSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#kms_arn EntityresolutionIdMappingWorkflow#kms_arn}
  */
  readonly kmsArn?: string;
  /**
  * The S3 path to which Entity Resolution will write the output table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#output_s3_path EntityresolutionIdMappingWorkflow#output_s3_path}
  */
  readonly outputS3Path?: string;
}

export function entityresolutionIdMappingWorkflowOutputSourceConfigToTerraform(struct?: EntityresolutionIdMappingWorkflowOutputSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_arn: cdktn.stringToTerraform(struct!.kmsArn),
    output_s3_path: cdktn.stringToTerraform(struct!.outputS3Path),
  }
}


export function entityresolutionIdMappingWorkflowOutputSourceConfigToHclTerraform(struct?: EntityresolutionIdMappingWorkflowOutputSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_s3_path: {
      value: cdktn.stringToHclTerraform(struct!.outputS3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EntityresolutionIdMappingWorkflowOutputSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsArn = this._kmsArn;
    }
    if (this._outputS3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3Path = this._outputS3Path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdMappingWorkflowOutputSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsArn = undefined;
      this._outputS3Path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsArn = value.kmsArn;
      this._outputS3Path = value.outputS3Path;
    }
  }

  // kms_arn - computed: true, optional: true, required: false
  private _kmsArn?: string; 
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }
  public set kmsArn(value: string) {
    this._kmsArn = value;
  }
  public resetKmsArn() {
    this._kmsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsArnInput() {
    return this._kmsArn;
  }

  // output_s3_path - computed: true, optional: true, required: false
  private _outputS3Path?: string; 
  public get outputS3Path() {
    return this.getStringAttribute('output_s3_path');
  }
  public set outputS3Path(value: string) {
    this._outputS3Path = value;
  }
  public resetOutputS3Path() {
    this._outputS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3PathInput() {
    return this._outputS3Path;
  }
}

export class EntityresolutionIdMappingWorkflowOutputSourceConfigList extends cdktn.ComplexList {
  public internalValue? : EntityresolutionIdMappingWorkflowOutputSourceConfig[] | cdktn.IResolvable

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
  public get(index: number): EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference {
    return new EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EntityresolutionIdMappingWorkflowTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#key EntityresolutionIdMappingWorkflow#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#value EntityresolutionIdMappingWorkflow#value}
  */
  readonly value?: string;
}

export function entityresolutionIdMappingWorkflowTagsToTerraform(struct?: EntityresolutionIdMappingWorkflowTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function entityresolutionIdMappingWorkflowTagsToHclTerraform(struct?: EntityresolutionIdMappingWorkflowTags | cdktn.IResolvable): any {
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

export class EntityresolutionIdMappingWorkflowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EntityresolutionIdMappingWorkflowTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EntityresolutionIdMappingWorkflowTags | cdktn.IResolvable | undefined) {
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

export class EntityresolutionIdMappingWorkflowTagsList extends cdktn.ComplexList {
  public internalValue? : EntityresolutionIdMappingWorkflowTags[] | cdktn.IResolvable

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
  public get(index: number): EntityresolutionIdMappingWorkflowTagsOutputReference {
    return new EntityresolutionIdMappingWorkflowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow}
*/
export class EntityresolutionIdMappingWorkflow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_entityresolution_id_mapping_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntityresolutionIdMappingWorkflow to import
  * @param importFromId The id of the existing EntityresolutionIdMappingWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntityresolutionIdMappingWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_entityresolution_id_mapping_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntityresolutionIdMappingWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: EntityresolutionIdMappingWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_entityresolution_id_mapping_workflow',
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
    this._description = config.description;
    this._idMappingIncrementalRunConfig.internalValue = config.idMappingIncrementalRunConfig;
    this._idMappingTechniques.internalValue = config.idMappingTechniques;
    this._inputSourceConfig.internalValue = config.inputSourceConfig;
    this._outputSourceConfig.internalValue = config.outputSourceConfig;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
    this._workflowName = config.workflowName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // id_mapping_incremental_run_config - computed: true, optional: true, required: false
  private _idMappingIncrementalRunConfig = new EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference(this, "id_mapping_incremental_run_config");
  public get idMappingIncrementalRunConfig() {
    return this._idMappingIncrementalRunConfig;
  }
  public putIdMappingIncrementalRunConfig(value: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig) {
    this._idMappingIncrementalRunConfig.internalValue = value;
  }
  public resetIdMappingIncrementalRunConfig() {
    this._idMappingIncrementalRunConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idMappingIncrementalRunConfigInput() {
    return this._idMappingIncrementalRunConfig.internalValue;
  }

  // id_mapping_techniques - computed: false, optional: false, required: true
  private _idMappingTechniques = new EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference(this, "id_mapping_techniques");
  public get idMappingTechniques() {
    return this._idMappingTechniques;
  }
  public putIdMappingTechniques(value: EntityresolutionIdMappingWorkflowIdMappingTechniques) {
    this._idMappingTechniques.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idMappingTechniquesInput() {
    return this._idMappingTechniques.internalValue;
  }

  // input_source_config - computed: false, optional: false, required: true
  private _inputSourceConfig = new EntityresolutionIdMappingWorkflowInputSourceConfigList(this, "input_source_config", false);
  public get inputSourceConfig() {
    return this._inputSourceConfig;
  }
  public putInputSourceConfig(value: EntityresolutionIdMappingWorkflowInputSourceConfig[] | cdktn.IResolvable) {
    this._inputSourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSourceConfigInput() {
    return this._inputSourceConfig.internalValue;
  }

  // output_source_config - computed: true, optional: true, required: false
  private _outputSourceConfig = new EntityresolutionIdMappingWorkflowOutputSourceConfigList(this, "output_source_config", false);
  public get outputSourceConfig() {
    return this._outputSourceConfig;
  }
  public putOutputSourceConfig(value: EntityresolutionIdMappingWorkflowOutputSourceConfig[] | cdktn.IResolvable) {
    this._outputSourceConfig.internalValue = value;
  }
  public resetOutputSourceConfig() {
    this._outputSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSourceConfigInput() {
    return this._outputSourceConfig.internalValue;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EntityresolutionIdMappingWorkflowTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EntityresolutionIdMappingWorkflowTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workflow_arn - computed: true, optional: false, required: false
  public get workflowArn() {
    return this.getStringAttribute('workflow_arn');
  }

  // workflow_name - computed: false, optional: false, required: true
  private _workflowName?: string; 
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
  public set workflowName(value: string) {
    this._workflowName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id_mapping_incremental_run_config: entityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigToTerraform(this._idMappingIncrementalRunConfig.internalValue),
      id_mapping_techniques: entityresolutionIdMappingWorkflowIdMappingTechniquesToTerraform(this._idMappingTechniques.internalValue),
      input_source_config: cdktn.listMapper(entityresolutionIdMappingWorkflowInputSourceConfigToTerraform, false)(this._inputSourceConfig.internalValue),
      output_source_config: cdktn.listMapper(entityresolutionIdMappingWorkflowOutputSourceConfigToTerraform, false)(this._outputSourceConfig.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(entityresolutionIdMappingWorkflowTagsToTerraform, false)(this._tags.internalValue),
      workflow_name: cdktn.stringToTerraform(this._workflowName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_mapping_incremental_run_config: {
        value: entityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigToHclTerraform(this._idMappingIncrementalRunConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig",
      },
      id_mapping_techniques: {
        value: entityresolutionIdMappingWorkflowIdMappingTechniquesToHclTerraform(this._idMappingTechniques.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EntityresolutionIdMappingWorkflowIdMappingTechniques",
      },
      input_source_config: {
        value: cdktn.listMapperHcl(entityresolutionIdMappingWorkflowInputSourceConfigToHclTerraform, false)(this._inputSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EntityresolutionIdMappingWorkflowInputSourceConfigList",
      },
      output_source_config: {
        value: cdktn.listMapperHcl(entityresolutionIdMappingWorkflowOutputSourceConfigToHclTerraform, false)(this._outputSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EntityresolutionIdMappingWorkflowOutputSourceConfigList",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(entityresolutionIdMappingWorkflowTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EntityresolutionIdMappingWorkflowTagsList",
      },
      workflow_name: {
        value: cdktn.stringToHclTerraform(this._workflowName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
