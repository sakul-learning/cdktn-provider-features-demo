// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcrReplicationConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The replication configuration for a registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration#replication_configuration EcrReplicationConfiguration#replication_configuration}
  */
  readonly replicationConfiguration: EcrReplicationConfigurationReplicationConfiguration;
}
export interface EcrReplicationConfigurationReplicationConfigurationRulesDestinations {
  /**
  * The Region to replicate to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration#region EcrReplicationConfiguration#region}
  */
  readonly region: string;
  /**
  * The AWS account ID of the Amazon ECR private registry to replicate to. When configuring cross-Region replication within your own registry, specify your own account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}
  */
  readonly registryId: string;
}

export function ecrReplicationConfigurationReplicationConfigurationRulesDestinationsToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRulesDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    registry_id: cdktn.stringToTerraform(struct!.registryId),
  }
}


export function ecrReplicationConfigurationReplicationConfigurationRulesDestinationsToHclTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRulesDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_id: {
      value: cdktn.stringToHclTerraform(struct!.registryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrReplicationConfigurationReplicationConfigurationRulesDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._registryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryId = this._registryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrReplicationConfigurationReplicationConfigurationRulesDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._registryId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._registryId = value.registryId;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string;
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }
}

export class EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList extends cdktn.ComplexList {
  public internalValue? : EcrReplicationConfigurationReplicationConfigurationRulesDestinations[] | cdktn.IResolvable

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
  public get(index: number): EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference {
    return new EcrReplicationConfigurationReplicationConfigurationRulesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters {
  /**
  * The repository filter details. When the ``PREFIX_MATCH`` filter type is specified, this value is required and should be the repository name prefix to configure replication for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}
  */
  readonly filter?: string;
  /**
  * The repository filter type. The only supported value is ``PREFIX_MATCH``, which is a repository name prefix specified with the ``filter`` parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}
  */
  readonly filterType?: string;
}

export function ecrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
    filter_type: cdktn.stringToTerraform(struct!.filterType),
  }
}


export function ecrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersToHclTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktn.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._filterType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._filterType = value.filterType;
    }
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string;
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string;
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }
}

export class EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList extends cdktn.ComplexList {
  public internalValue? : EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters[] | cdktn.IResolvable

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
  public get(index: number): EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference {
    return new EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrReplicationConfigurationReplicationConfigurationRules {
  /**
  * An array of objects representing the destination for a replication rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration#destinations EcrReplicationConfiguration#destinations}
  */
  readonly destinations: EcrReplicationConfigurationReplicationConfigurationRulesDestinations[] | cdktn.IResolvable;
  /**
  * An array of objects representing the filters for a replication rule. Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration#repository_filters EcrReplicationConfiguration#repository_filters}
  */
  readonly repositoryFilters?: EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters[] | cdktn.IResolvable;
}

export function ecrReplicationConfigurationReplicationConfigurationRulesToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destinations: cdktn.listMapper(ecrReplicationConfigurationReplicationConfigurationRulesDestinationsToTerraform, false)(struct!.destinations),
    repository_filters: cdktn.listMapper(ecrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersToTerraform, false)(struct!.repositoryFilters),
  }
}


export function ecrReplicationConfigurationReplicationConfigurationRulesToHclTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destinations: {
      value: cdktn.listMapperHcl(ecrReplicationConfigurationReplicationConfigurationRulesDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList",
    },
    repository_filters: {
      value: cdktn.listMapperHcl(ecrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersToHclTerraform, false)(struct!.repositoryFilters),
      isBlock: true,
      type: "list",
      storageClassType: "EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrReplicationConfigurationReplicationConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrReplicationConfigurationReplicationConfigurationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._repositoryFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryFilters = this._repositoryFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrReplicationConfigurationReplicationConfigurationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
      this._repositoryFilters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
      this._repositoryFilters.internalValue = value.repositoryFilters;
    }
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new EcrReplicationConfigurationReplicationConfigurationRulesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: EcrReplicationConfigurationReplicationConfigurationRulesDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // repository_filters - computed: true, optional: true, required: false
  private _repositoryFilters = new EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFiltersList(this, "repository_filters", false);
  public get repositoryFilters() {
    return this._repositoryFilters;
  }
  public putRepositoryFilters(value: EcrReplicationConfigurationReplicationConfigurationRulesRepositoryFilters[] | cdktn.IResolvable) {
    this._repositoryFilters.internalValue = value;
  }
  public resetRepositoryFilters() {
    this._repositoryFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryFiltersInput() {
    return this._repositoryFilters.internalValue;
  }
}

export class EcrReplicationConfigurationReplicationConfigurationRulesList extends cdktn.ComplexList {
  public internalValue? : EcrReplicationConfigurationReplicationConfigurationRules[] | cdktn.IResolvable

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
  public get(index: number): EcrReplicationConfigurationReplicationConfigurationRulesOutputReference {
    return new EcrReplicationConfigurationReplicationConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrReplicationConfigurationReplicationConfiguration {
  /**
  * An array of objects representing the replication destinations and repository filters for a replication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration#rules EcrReplicationConfiguration#rules}
  */
  readonly rules: EcrReplicationConfigurationReplicationConfigurationRules[] | cdktn.IResolvable;
}

export function ecrReplicationConfigurationReplicationConfigurationToTerraform(struct?: EcrReplicationConfigurationReplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rules: cdktn.listMapper(ecrReplicationConfigurationReplicationConfigurationRulesToTerraform, false)(struct!.rules),
  }
}


export function ecrReplicationConfigurationReplicationConfigurationToHclTerraform(struct?: EcrReplicationConfigurationReplicationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rules: {
      value: cdktn.listMapperHcl(ecrReplicationConfigurationReplicationConfigurationRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "EcrReplicationConfigurationReplicationConfigurationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrReplicationConfigurationReplicationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcrReplicationConfigurationReplicationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrReplicationConfigurationReplicationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new EcrReplicationConfigurationReplicationConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EcrReplicationConfigurationReplicationConfigurationRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration awscc_ecr_replication_configuration}
*/
export class EcrReplicationConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecr_replication_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcrReplicationConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcrReplicationConfiguration to import
  * @param importFromId The id of the existing EcrReplicationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcrReplicationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_replication_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_replication_configuration awscc_ecr_replication_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrReplicationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EcrReplicationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecr_replication_configuration',
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
    this._replicationConfiguration.internalValue = config.replicationConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // replication_configuration - computed: false, optional: false, required: true
  private _replicationConfiguration = new EcrReplicationConfigurationReplicationConfigurationOutputReference(this, "replication_configuration");
  public get replicationConfiguration() {
    return this._replicationConfiguration;
  }
  public putReplicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration) {
    this._replicationConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      replication_configuration: ecrReplicationConfigurationReplicationConfigurationToTerraform(this._replicationConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      replication_configuration: {
        value: ecrReplicationConfigurationReplicationConfigurationToHclTerraform(this._replicationConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcrReplicationConfigurationReplicationConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
