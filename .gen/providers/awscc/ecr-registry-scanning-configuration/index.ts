// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EcrRegistryScanningConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The scanning rules associated with the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration#rules EcrRegistryScanningConfiguration#rules}
  */
  readonly rules: EcrRegistryScanningConfigurationRules[] | cdktn.IResolvable;
  /**
  * The type of scanning configured for the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}
  */
  readonly scanType: string;
}
export interface EcrRegistryScanningConfigurationRulesRepositoryFilters {
  /**
  * The filter to use when scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}
  */
  readonly filter: string;
  /**
  * The type associated with the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}
  */
  readonly filterType: string;
}

export function ecrRegistryScanningConfigurationRulesRepositoryFiltersToTerraform(struct?: EcrRegistryScanningConfigurationRulesRepositoryFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter: cdktn.stringToTerraform(struct!.filter),
    filter_type: cdktn.stringToTerraform(struct!.filterType),
  }
}


export function ecrRegistryScanningConfigurationRulesRepositoryFiltersToHclTerraform(struct?: EcrRegistryScanningConfigurationRulesRepositoryFilters | cdktn.IResolvable): any {
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

export class EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrRegistryScanningConfigurationRulesRepositoryFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EcrRegistryScanningConfigurationRulesRepositoryFilters | cdktn.IResolvable | undefined) {
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

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }
}

export class EcrRegistryScanningConfigurationRulesRepositoryFiltersList extends cdktn.ComplexList {
  public internalValue? : EcrRegistryScanningConfigurationRulesRepositoryFilters[] | cdktn.IResolvable

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
  public get(index: number): EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference {
    return new EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcrRegistryScanningConfigurationRules {
  /**
  * The details of a scanning repository filter. For more information on how to use filters, see [Using filters](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters) in the *Amazon Elastic Container Registry User Guide*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration#repository_filters EcrRegistryScanningConfiguration#repository_filters}
  */
  readonly repositoryFilters: EcrRegistryScanningConfigurationRulesRepositoryFilters[] | cdktn.IResolvable;
  /**
  * The frequency that scans are performed at for a private registry. When the ``ENHANCED`` scan type is specified, the supported scan frequencies are ``CONTINUOUS_SCAN`` and ``SCAN_ON_PUSH``. When the ``BASIC`` scan type is specified, the ``SCAN_ON_PUSH`` scan frequency is supported. If scan on push is not specified, then the ``MANUAL`` scan frequency is set by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}
  */
  readonly scanFrequency: string;
}

export function ecrRegistryScanningConfigurationRulesToTerraform(struct?: EcrRegistryScanningConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    repository_filters: cdktn.listMapper(ecrRegistryScanningConfigurationRulesRepositoryFiltersToTerraform, false)(struct!.repositoryFilters),
    scan_frequency: cdktn.stringToTerraform(struct!.scanFrequency),
  }
}


export function ecrRegistryScanningConfigurationRulesToHclTerraform(struct?: EcrRegistryScanningConfigurationRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    repository_filters: {
      value: cdktn.listMapperHcl(ecrRegistryScanningConfigurationRulesRepositoryFiltersToHclTerraform, false)(struct!.repositoryFilters),
      isBlock: true,
      type: "list",
      storageClassType: "EcrRegistryScanningConfigurationRulesRepositoryFiltersList",
    },
    scan_frequency: {
      value: cdktn.stringToHclTerraform(struct!.scanFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRegistryScanningConfigurationRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EcrRegistryScanningConfigurationRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryFilters = this._repositoryFilters?.internalValue;
    }
    if (this._scanFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanFrequency = this._scanFrequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRegistryScanningConfigurationRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryFilters.internalValue = undefined;
      this._scanFrequency = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryFilters.internalValue = value.repositoryFilters;
      this._scanFrequency = value.scanFrequency;
    }
  }

  // repository_filters - computed: false, optional: false, required: true
  private _repositoryFilters = new EcrRegistryScanningConfigurationRulesRepositoryFiltersList(this, "repository_filters", false);
  public get repositoryFilters() {
    return this._repositoryFilters;
  }
  public putRepositoryFilters(value: EcrRegistryScanningConfigurationRulesRepositoryFilters[] | cdktn.IResolvable) {
    this._repositoryFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryFiltersInput() {
    return this._repositoryFilters.internalValue;
  }

  // scan_frequency - computed: false, optional: false, required: true
  private _scanFrequency?: string; 
  public get scanFrequency() {
    return this.getStringAttribute('scan_frequency');
  }
  public set scanFrequency(value: string) {
    this._scanFrequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanFrequencyInput() {
    return this._scanFrequency;
  }
}

export class EcrRegistryScanningConfigurationRulesList extends cdktn.ComplexList {
  public internalValue? : EcrRegistryScanningConfigurationRules[] | cdktn.IResolvable

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
  public get(index: number): EcrRegistryScanningConfigurationRulesOutputReference {
    return new EcrRegistryScanningConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration awscc_ecr_registry_scanning_configuration}
*/
export class EcrRegistryScanningConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ecr_registry_scanning_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EcrRegistryScanningConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcrRegistryScanningConfiguration to import
  * @param importFromId The id of the existing EcrRegistryScanningConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcrRegistryScanningConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_registry_scanning_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/ecr_registry_scanning_configuration awscc_ecr_registry_scanning_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrRegistryScanningConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EcrRegistryScanningConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecr_registry_scanning_configuration',
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
    this._rules.internalValue = config.rules;
    this._scanType = config.scanType;
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

  // rules - computed: false, optional: false, required: true
  private _rules = new EcrRegistryScanningConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EcrRegistryScanningConfigurationRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // scan_type - computed: false, optional: false, required: true
  private _scanType?: string; 
  public get scanType() {
    return this.getStringAttribute('scan_type');
  }
  public set scanType(value: string) {
    this._scanType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanTypeInput() {
    return this._scanType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rules: cdktn.listMapper(ecrRegistryScanningConfigurationRulesToTerraform, false)(this._rules.internalValue),
      scan_type: cdktn.stringToTerraform(this._scanType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rules: {
        value: cdktn.listMapperHcl(ecrRegistryScanningConfigurationRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcrRegistryScanningConfigurationRulesList",
      },
      scan_type: {
        value: cdktn.stringToHclTerraform(this._scanType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
