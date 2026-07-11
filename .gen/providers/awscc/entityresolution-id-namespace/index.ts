// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EntityresolutionIdNamespaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#description EntityresolutionIdNamespace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#id_mapping_workflow_properties EntityresolutionIdNamespace#id_mapping_workflow_properties}
  */
  readonly idMappingWorkflowProperties?: EntityresolutionIdNamespaceIdMappingWorkflowProperties[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#id_namespace_name EntityresolutionIdNamespace#id_namespace_name}
  */
  readonly idNamespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#input_source_config EntityresolutionIdNamespace#input_source_config}
  */
  readonly inputSourceConfig?: EntityresolutionIdNamespaceInputSourceConfig[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#role_arn EntityresolutionIdNamespace#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#tags EntityresolutionIdNamespace#tags}
  */
  readonly tags?: EntityresolutionIdNamespaceTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#type EntityresolutionIdNamespace#type}
  */
  readonly type: string;
}
export interface EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties {
  /**
  * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#provider_configuration EntityresolutionIdNamespace#provider_configuration}
  */
  readonly providerConfiguration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#provider_service_arn EntityresolutionIdNamespace#provider_service_arn}
  */
  readonly providerServiceArn?: string;
}

export function entityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesToTerraform(struct?: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    provider_configuration: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.providerConfiguration),
    provider_service_arn: cdktn.stringToTerraform(struct!.providerServiceArn),
  }
}


export function entityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesToHclTerraform(struct?: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._providerConfiguration = value.providerConfiguration;
      this._providerServiceArn = value.providerServiceArn;
    }
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
export interface EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#matching_keys EntityresolutionIdNamespace#matching_keys}
  */
  readonly matchingKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#rule_name EntityresolutionIdNamespace#rule_name}
  */
  readonly ruleName?: string;
}

export function entityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesToTerraform(struct?: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    matching_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchingKeys),
    rule_name: cdktn.stringToTerraform(struct!.ruleName),
  }
}


export function entityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesToHclTerraform(struct?: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules | cdktn.IResolvable): any {
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

export class EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules | cdktn.IResolvable | undefined) {
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

export class EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList extends cdktn.ComplexList {
  public internalValue? : EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules[] | cdktn.IResolvable

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
  public get(index: number): EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference {
    return new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#attribute_matching_model EntityresolutionIdNamespace#attribute_matching_model}
  */
  readonly attributeMatchingModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#record_matching_models EntityresolutionIdNamespace#record_matching_models}
  */
  readonly recordMatchingModels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#rule_definition_types EntityresolutionIdNamespace#rule_definition_types}
  */
  readonly ruleDefinitionTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#rules EntityresolutionIdNamespace#rules}
  */
  readonly rules?: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules[] | cdktn.IResolvable;
}

export function entityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesToTerraform(struct?: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute_matching_model: cdktn.stringToTerraform(struct!.attributeMatchingModel),
    record_matching_models: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.recordMatchingModels),
    rule_definition_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ruleDefinitionTypes),
    rules: cdktn.listMapper(entityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesToTerraform, false)(struct!.rules),
  }
}


export function entityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesToHclTerraform(struct?: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties | cdktn.IResolvable): any {
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
    record_matching_models: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.recordMatchingModels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_definition_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ruleDefinitionTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktn.listMapperHcl(entityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeMatchingModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMatchingModel = this._attributeMatchingModel;
    }
    if (this._recordMatchingModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordMatchingModels = this._recordMatchingModels;
    }
    if (this._ruleDefinitionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleDefinitionTypes = this._ruleDefinitionTypes;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeMatchingModel = undefined;
      this._recordMatchingModels = undefined;
      this._ruleDefinitionTypes = undefined;
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
      this._recordMatchingModels = value.recordMatchingModels;
      this._ruleDefinitionTypes = value.ruleDefinitionTypes;
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

  // record_matching_models - computed: true, optional: true, required: false
  private _recordMatchingModels?: string[]; 
  public get recordMatchingModels() {
    return this.getListAttribute('record_matching_models');
  }
  public set recordMatchingModels(value: string[]) {
    this._recordMatchingModels = value;
  }
  public resetRecordMatchingModels() {
    this._recordMatchingModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordMatchingModelsInput() {
    return this._recordMatchingModels;
  }

  // rule_definition_types - computed: true, optional: true, required: false
  private _ruleDefinitionTypes?: string[]; 
  public get ruleDefinitionTypes() {
    return this.getListAttribute('rule_definition_types');
  }
  public set ruleDefinitionTypes(value: string[]) {
    this._ruleDefinitionTypes = value;
  }
  public resetRuleDefinitionTypes() {
    this._ruleDefinitionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDefinitionTypesInput() {
    return this._ruleDefinitionTypes;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules[] | cdktn.IResolvable) {
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
export interface EntityresolutionIdNamespaceIdMappingWorkflowProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#id_mapping_type EntityresolutionIdNamespace#id_mapping_type}
  */
  readonly idMappingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#provider_properties EntityresolutionIdNamespace#provider_properties}
  */
  readonly providerProperties?: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#rule_based_properties EntityresolutionIdNamespace#rule_based_properties}
  */
  readonly ruleBasedProperties?: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties;
}

export function entityresolutionIdNamespaceIdMappingWorkflowPropertiesToTerraform(struct?: EntityresolutionIdNamespaceIdMappingWorkflowProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id_mapping_type: cdktn.stringToTerraform(struct!.idMappingType),
    provider_properties: entityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesToTerraform(struct!.providerProperties),
    rule_based_properties: entityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesToTerraform(struct!.ruleBasedProperties),
  }
}


export function entityresolutionIdNamespaceIdMappingWorkflowPropertiesToHclTerraform(struct?: EntityresolutionIdNamespaceIdMappingWorkflowProperties | cdktn.IResolvable): any {
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
    provider_properties: {
      value: entityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesToHclTerraform(struct!.providerProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties",
    },
    rule_based_properties: {
      value: entityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesToHclTerraform(struct!.ruleBasedProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EntityresolutionIdNamespaceIdMappingWorkflowProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idMappingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.idMappingType = this._idMappingType;
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

  public set internalValue(value: EntityresolutionIdNamespaceIdMappingWorkflowProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idMappingType = undefined;
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

  // provider_properties - computed: true, optional: true, required: false
  private _providerProperties = new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference(this, "provider_properties");
  public get providerProperties() {
    return this._providerProperties;
  }
  public putProviderProperties(value: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties) {
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
  private _ruleBasedProperties = new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference(this, "rule_based_properties");
  public get ruleBasedProperties() {
    return this._ruleBasedProperties;
  }
  public putRuleBasedProperties(value: EntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties) {
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

export class EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList extends cdktn.ComplexList {
  public internalValue? : EntityresolutionIdNamespaceIdMappingWorkflowProperties[] | cdktn.IResolvable

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
  public get(index: number): EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference {
    return new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EntityresolutionIdNamespaceInputSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#input_source_arn EntityresolutionIdNamespace#input_source_arn}
  */
  readonly inputSourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#schema_name EntityresolutionIdNamespace#schema_name}
  */
  readonly schemaName?: string;
}

export function entityresolutionIdNamespaceInputSourceConfigToTerraform(struct?: EntityresolutionIdNamespaceInputSourceConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    input_source_arn: cdktn.stringToTerraform(struct!.inputSourceArn),
    schema_name: cdktn.stringToTerraform(struct!.schemaName),
  }
}


export function entityresolutionIdNamespaceInputSourceConfigToHclTerraform(struct?: EntityresolutionIdNamespaceInputSourceConfig | cdktn.IResolvable): any {
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
    schema_name: {
      value: cdktn.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntityresolutionIdNamespaceInputSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EntityresolutionIdNamespaceInputSourceConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputSourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSourceArn = this._inputSourceArn;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntityresolutionIdNamespaceInputSourceConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputSourceArn = undefined;
      this._schemaName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputSourceArn = value.inputSourceArn;
      this._schemaName = value.schemaName;
    }
  }

  // input_source_arn - computed: true, optional: true, required: false
  private _inputSourceArn?: string; 
  public get inputSourceArn() {
    return this.getStringAttribute('input_source_arn');
  }
  public set inputSourceArn(value: string) {
    this._inputSourceArn = value;
  }
  public resetInputSourceArn() {
    this._inputSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSourceArnInput() {
    return this._inputSourceArn;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}

export class EntityresolutionIdNamespaceInputSourceConfigList extends cdktn.ComplexList {
  public internalValue? : EntityresolutionIdNamespaceInputSourceConfig[] | cdktn.IResolvable

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
  public get(index: number): EntityresolutionIdNamespaceInputSourceConfigOutputReference {
    return new EntityresolutionIdNamespaceInputSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EntityresolutionIdNamespaceTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#key EntityresolutionIdNamespace#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#value EntityresolutionIdNamespace#value}
  */
  readonly value?: string;
}

export function entityresolutionIdNamespaceTagsToTerraform(struct?: EntityresolutionIdNamespaceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function entityresolutionIdNamespaceTagsToHclTerraform(struct?: EntityresolutionIdNamespaceTags | cdktn.IResolvable): any {
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

export class EntityresolutionIdNamespaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EntityresolutionIdNamespaceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EntityresolutionIdNamespaceTags | cdktn.IResolvable | undefined) {
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

export class EntityresolutionIdNamespaceTagsList extends cdktn.ComplexList {
  public internalValue? : EntityresolutionIdNamespaceTags[] | cdktn.IResolvable

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
  public get(index: number): EntityresolutionIdNamespaceTagsOutputReference {
    return new EntityresolutionIdNamespaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace awscc_entityresolution_id_namespace}
*/
export class EntityresolutionIdNamespace extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_entityresolution_id_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntityresolutionIdNamespace to import
  * @param importFromId The id of the existing EntityresolutionIdNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntityresolutionIdNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_entityresolution_id_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/entityresolution_id_namespace awscc_entityresolution_id_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntityresolutionIdNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: EntityresolutionIdNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_entityresolution_id_namespace',
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
    this._description = config.description;
    this._idMappingWorkflowProperties.internalValue = config.idMappingWorkflowProperties;
    this._idNamespaceName = config.idNamespaceName;
    this._inputSourceConfig.internalValue = config.inputSourceConfig;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
    this._type = config.type;
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

  // id_mapping_workflow_properties - computed: true, optional: true, required: false
  private _idMappingWorkflowProperties = new EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList(this, "id_mapping_workflow_properties", false);
  public get idMappingWorkflowProperties() {
    return this._idMappingWorkflowProperties;
  }
  public putIdMappingWorkflowProperties(value: EntityresolutionIdNamespaceIdMappingWorkflowProperties[] | cdktn.IResolvable) {
    this._idMappingWorkflowProperties.internalValue = value;
  }
  public resetIdMappingWorkflowProperties() {
    this._idMappingWorkflowProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idMappingWorkflowPropertiesInput() {
    return this._idMappingWorkflowProperties.internalValue;
  }

  // id_namespace_arn - computed: true, optional: false, required: false
  public get idNamespaceArn() {
    return this.getStringAttribute('id_namespace_arn');
  }

  // id_namespace_name - computed: false, optional: false, required: true
  private _idNamespaceName?: string; 
  public get idNamespaceName() {
    return this.getStringAttribute('id_namespace_name');
  }
  public set idNamespaceName(value: string) {
    this._idNamespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idNamespaceNameInput() {
    return this._idNamespaceName;
  }

  // input_source_config - computed: true, optional: true, required: false
  private _inputSourceConfig = new EntityresolutionIdNamespaceInputSourceConfigList(this, "input_source_config", false);
  public get inputSourceConfig() {
    return this._inputSourceConfig;
  }
  public putInputSourceConfig(value: EntityresolutionIdNamespaceInputSourceConfig[] | cdktn.IResolvable) {
    this._inputSourceConfig.internalValue = value;
  }
  public resetInputSourceConfig() {
    this._inputSourceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSourceConfigInput() {
    return this._inputSourceConfig.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EntityresolutionIdNamespaceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EntityresolutionIdNamespaceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id_mapping_workflow_properties: cdktn.listMapper(entityresolutionIdNamespaceIdMappingWorkflowPropertiesToTerraform, false)(this._idMappingWorkflowProperties.internalValue),
      id_namespace_name: cdktn.stringToTerraform(this._idNamespaceName),
      input_source_config: cdktn.listMapper(entityresolutionIdNamespaceInputSourceConfigToTerraform, false)(this._inputSourceConfig.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(entityresolutionIdNamespaceTagsToTerraform, false)(this._tags.internalValue),
      type: cdktn.stringToTerraform(this._type),
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
      id_mapping_workflow_properties: {
        value: cdktn.listMapperHcl(entityresolutionIdNamespaceIdMappingWorkflowPropertiesToHclTerraform, false)(this._idMappingWorkflowProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EntityresolutionIdNamespaceIdMappingWorkflowPropertiesList",
      },
      id_namespace_name: {
        value: cdktn.stringToHclTerraform(this._idNamespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_source_config: {
        value: cdktn.listMapperHcl(entityresolutionIdNamespaceInputSourceConfigToHclTerraform, false)(this._inputSourceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EntityresolutionIdNamespaceInputSourceConfigList",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(entityresolutionIdNamespaceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EntityresolutionIdNamespaceTagsList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
