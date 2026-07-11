// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccEntityresolutionIdNamespaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_namespace#id DataAwsccEntityresolutionIdNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties {
}

export function dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesToTerraform(struct?: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesToHclTerraform(struct?: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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
export interface DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules {
}

export function dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesToTerraform(struct?: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesToHclTerraform(struct?: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules | undefined) {
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

export class DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference {
    return new DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties {
}

export function dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesToTerraform(struct?: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesToHclTerraform(struct?: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties | undefined) {
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

  // record_matching_models - computed: true, optional: false, required: false
  public get recordMatchingModels() {
    return this.getListAttribute('record_matching_models');
  }

  // rule_definition_types - computed: true, optional: false, required: false
  public get ruleDefinitionTypes() {
    return this.getListAttribute('rule_definition_types');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties {
}

export function dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesToTerraform(struct?: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesToHclTerraform(struct?: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties | undefined) {
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

  // provider_properties - computed: true, optional: false, required: false
  private _providerProperties = new DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference(this, "provider_properties");
  public get providerProperties() {
    return this._providerProperties;
  }

  // rule_based_properties - computed: true, optional: false, required: false
  private _ruleBasedProperties = new DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference(this, "rule_based_properties");
  public get ruleBasedProperties() {
    return this._ruleBasedProperties;
  }
}

export class DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference {
    return new DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionIdNamespaceInputSourceConfig {
}

export function dataAwsccEntityresolutionIdNamespaceInputSourceConfigToTerraform(struct?: DataAwsccEntityresolutionIdNamespaceInputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdNamespaceInputSourceConfigToHclTerraform(struct?: DataAwsccEntityresolutionIdNamespaceInputSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionIdNamespaceInputSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdNamespaceInputSourceConfig | undefined) {
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

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataAwsccEntityresolutionIdNamespaceInputSourceConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference {
    return new DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccEntityresolutionIdNamespaceTags {
}

export function dataAwsccEntityresolutionIdNamespaceTagsToTerraform(struct?: DataAwsccEntityresolutionIdNamespaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccEntityresolutionIdNamespaceTagsToHclTerraform(struct?: DataAwsccEntityresolutionIdNamespaceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccEntityresolutionIdNamespaceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccEntityresolutionIdNamespaceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccEntityresolutionIdNamespaceTags | undefined) {
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

export class DataAwsccEntityresolutionIdNamespaceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccEntityresolutionIdNamespaceTagsOutputReference {
    return new DataAwsccEntityresolutionIdNamespaceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_namespace awscc_entityresolution_id_namespace}
*/
export class DataAwsccEntityresolutionIdNamespace extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_entityresolution_id_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccEntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccEntityresolutionIdNamespace to import
  * @param importFromId The id of the existing DataAwsccEntityresolutionIdNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccEntityresolutionIdNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_entityresolution_id_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/entityresolution_id_namespace awscc_entityresolution_id_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEntityresolutionIdNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEntityresolutionIdNamespaceConfig) {
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

  // id_mapping_workflow_properties - computed: true, optional: false, required: false
  private _idMappingWorkflowProperties = new DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList(this, "id_mapping_workflow_properties", false);
  public get idMappingWorkflowProperties() {
    return this._idMappingWorkflowProperties;
  }

  // id_namespace_arn - computed: true, optional: false, required: false
  public get idNamespaceArn() {
    return this.getStringAttribute('id_namespace_arn');
  }

  // id_namespace_name - computed: true, optional: false, required: false
  public get idNamespaceName() {
    return this.getStringAttribute('id_namespace_name');
  }

  // input_source_config - computed: true, optional: false, required: false
  private _inputSourceConfig = new DataAwsccEntityresolutionIdNamespaceInputSourceConfigList(this, "input_source_config", false);
  public get inputSourceConfig() {
    return this._inputSourceConfig;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccEntityresolutionIdNamespaceTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
