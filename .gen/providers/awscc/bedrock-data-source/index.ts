// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * The deletion policy for the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#data_deletion_policy BedrockDataSource#data_deletion_policy}
  */
  readonly dataDeletionPolicy?: string;
  /**
  * Specifies a raw data source location to ingest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#data_source_configuration BedrockDataSource#data_source_configuration}
  */
  readonly dataSourceConfiguration: BedrockDataSourceDataSourceConfiguration;
  /**
  * Description of the Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#description BedrockDataSource#description}
  */
  readonly description?: string;
  /**
  * The unique identifier of the knowledge base to which to add the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#knowledge_base_id BedrockDataSource#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * The name of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#name BedrockDataSource#name}
  */
  readonly name: string;
  /**
  * Contains details about the server-side encryption for the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#server_side_encryption_configuration BedrockDataSource#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: BedrockDataSourceServerSideEncryptionConfiguration;
  /**
  * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#vector_ingestion_configuration BedrockDataSource#vector_ingestion_configuration}
  */
  readonly vectorIngestionConfiguration?: BedrockDataSourceVectorIngestionConfiguration;
}
export interface BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
  /**
  * A set of regular expression filter patterns for a type of object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#exclusion_filters BedrockDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * A set of regular expression filter patterns for a type of object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#inclusion_filters BedrockDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * The supported object type or content type of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#object_type BedrockDataSource#object_type}
  */
  readonly objectType?: string;
}

export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
    object_type: cdktn.stringToTerraform(struct!.objectType),
  }
}


export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktn.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._objectType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._objectType = value.objectType;
    }
  }

  // exclusion_filters - computed: true, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return this.getListAttribute('exclusion_filters');
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: true, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return this.getListAttribute('inclusion_filters');
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktn.ComplexList {
  public internalValue? : BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktn.IResolvable

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
  public get(index: number): BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference {
    return new BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
  /**
  * Contains information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#filters BedrockDataSource#filters}
  */
  readonly filters?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktn.IResolvable;
}

export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters: cdktn.listMapper(bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform, false)(struct!.filters),
  }
}


export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters: {
      value: cdktn.listMapperHcl(bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration {
  /**
  * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#pattern_object_filter BedrockDataSource#pattern_object_filter}
  */
  readonly patternObjectFilter?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter;
  /**
  * The crawl filter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#type BedrockDataSource#type}
  */
  readonly type?: string;
}

export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern_object_filter: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct!.patternObjectFilter),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern_object_filter: {
      value: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct!.patternObjectFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter",
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

export class BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patternObjectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patternObjectFilter.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patternObjectFilter.internalValue = value.patternObjectFilter;
      this._type = value.type;
    }
  }

  // pattern_object_filter - computed: true, optional: true, required: false
  private _patternObjectFilter = new BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference(this, "pattern_object_filter");
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }
  public putPatternObjectFilter(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter) {
    this._patternObjectFilter.internalValue = value;
  }
  public resetPatternObjectFilter() {
    this._patternObjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternObjectFilterInput() {
    return this._patternObjectFilter.internalValue;
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
export interface BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration {
  /**
  * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#filter_configuration BedrockDataSource#filter_configuration}
  */
  readonly filterConfiguration?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_configuration: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct!.filterConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_configuration: {
      value: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct!.filterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
    }
  }

  // filter_configuration - computed: true, optional: true, required: false
  private _filterConfiguration = new BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration {
  /**
  * The supported authentication type to authenticate and connect to your Confluence instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#auth_type BedrockDataSource#auth_type}
  */
  readonly authType?: string;
  /**
  * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Confluence connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#credentials_secret_arn BedrockDataSource#credentials_secret_arn}
  */
  readonly credentialsSecretArn?: string;
  /**
  * The supported host type, whether online/cloud or server/on-premises.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#host_type BedrockDataSource#host_type}
  */
  readonly hostType?: string;
  /**
  * The Confluence host URL or instance URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#host_url BedrockDataSource#host_url}
  */
  readonly hostUrl?: string;
}

export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    host_type: cdktn.stringToTerraform(struct!.hostType),
    host_url: cdktn.stringToTerraform(struct!.hostUrl),
  }
}


export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_type: {
      value: cdktn.stringToHclTerraform(struct!.hostType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_url: {
      value: cdktn.stringToHclTerraform(struct!.hostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._hostType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostType = this._hostType;
    }
    if (this._hostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUrl = this._hostUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._credentialsSecretArn = undefined;
      this._hostType = undefined;
      this._hostUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._hostType = value.hostType;
      this._hostUrl = value.hostUrl;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credentials_secret_arn - computed: true, optional: true, required: false
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  public resetCredentialsSecretArn() {
    this._credentialsSecretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // host_type - computed: true, optional: true, required: false
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  public resetHostType() {
    this._hostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
  }

  // host_url - computed: true, optional: true, required: false
  private _hostUrl?: string; 
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }
  public set hostUrl(value: string) {
    this._hostUrl = value;
  }
  public resetHostUrl() {
    this._hostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlInput() {
    return this._hostUrl;
  }
}
export interface BedrockDataSourceDataSourceConfigurationConfluenceConfiguration {
  /**
  * The configuration of the Confluence content. For example, configuring specific types of Confluence content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#crawler_configuration BedrockDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration;
  /**
  * The endpoint information to connect to your Confluence data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#source_configuration BedrockDataSource#source_configuration}
  */
  readonly sourceConfiguration?: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_configuration: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToTerraform(struct!.crawlerConfiguration),
    source_configuration: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToTerraform(struct!.sourceConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationConfluenceConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationConfluenceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_configuration: {
      value: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToHclTerraform(struct!.crawlerConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration",
    },
    source_configuration: {
      value: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToHclTerraform(struct!.sourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationConfluenceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationConfluenceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: true, optional: true, required: false
  private _crawlerConfiguration = new BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationOutputReference(this, "crawler_configuration");
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: true, optional: true, required: false
  private _sourceConfiguration = new BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: BedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration {
  /**
  * Indicates whether a feature is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#deletion_protection_status BedrockDataSource#deletion_protection_status}
  */
  readonly deletionProtectionStatus?: string;
  /**
  * Threshold for deletion protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#deletion_protection_threshold BedrockDataSource#deletion_protection_threshold}
  */
  readonly deletionProtectionThreshold?: number;
}

export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    deletion_protection_status: cdktn.stringToTerraform(struct!.deletionProtectionStatus),
    deletion_protection_threshold: cdktn.numberToTerraform(struct!.deletionProtectionThreshold),
  }
}


export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    deletion_protection_status: {
      value: cdktn.stringToHclTerraform(struct!.deletionProtectionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_protection_threshold: {
      value: cdktn.numberToHclTerraform(struct!.deletionProtectionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionProtectionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtectionStatus = this._deletionProtectionStatus;
    }
    if (this._deletionProtectionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtectionThreshold = this._deletionProtectionThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionProtectionStatus = undefined;
      this._deletionProtectionThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionProtectionStatus = value.deletionProtectionStatus;
      this._deletionProtectionThreshold = value.deletionProtectionThreshold;
    }
  }

  // deletion_protection_status - computed: true, optional: true, required: false
  private _deletionProtectionStatus?: string; 
  public get deletionProtectionStatus() {
    return this.getStringAttribute('deletion_protection_status');
  }
  public set deletionProtectionStatus(value: string) {
    this._deletionProtectionStatus = value;
  }
  public resetDeletionProtectionStatus() {
    this._deletionProtectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionStatusInput() {
    return this._deletionProtectionStatus;
  }

  // deletion_protection_threshold - computed: true, optional: true, required: false
  private _deletionProtectionThreshold?: number; 
  public get deletionProtectionThreshold() {
    return this.getNumberAttribute('deletion_protection_threshold');
  }
  public set deletionProtectionThreshold(value: number) {
    this._deletionProtectionThreshold = value;
  }
  public resetDeletionProtectionThreshold() {
    this._deletionProtectionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionThresholdInput() {
    return this._deletionProtectionThreshold;
  }
}
export interface BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration {
  /**
  * Indicates whether a feature is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#audio_extraction_status BedrockDataSource#audio_extraction_status}
  */
  readonly audioExtractionStatus?: string;
}

export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_extraction_status: cdktn.stringToTerraform(struct!.audioExtractionStatus),
  }
}


export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_extraction_status: {
      value: cdktn.stringToHclTerraform(struct!.audioExtractionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExtractionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExtractionStatus = this._audioExtractionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioExtractionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioExtractionStatus = value.audioExtractionStatus;
    }
  }

  // audio_extraction_status - computed: true, optional: true, required: false
  private _audioExtractionStatus?: string; 
  public get audioExtractionStatus() {
    return this.getStringAttribute('audio_extraction_status');
  }
  public set audioExtractionStatus(value: string) {
    this._audioExtractionStatus = value;
  }
  public resetAudioExtractionStatus() {
    this._audioExtractionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExtractionStatusInput() {
    return this._audioExtractionStatus;
  }
}
export interface BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration {
  /**
  * Indicates whether a feature is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#image_extraction_status BedrockDataSource#image_extraction_status}
  */
  readonly imageExtractionStatus?: string;
}

export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_extraction_status: cdktn.stringToTerraform(struct!.imageExtractionStatus),
  }
}


export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_extraction_status: {
      value: cdktn.stringToHclTerraform(struct!.imageExtractionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtractionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtractionStatus = this._imageExtractionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtractionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtractionStatus = value.imageExtractionStatus;
    }
  }

  // image_extraction_status - computed: true, optional: true, required: false
  private _imageExtractionStatus?: string; 
  public get imageExtractionStatus() {
    return this.getStringAttribute('image_extraction_status');
  }
  public set imageExtractionStatus(value: string) {
    this._imageExtractionStatus = value;
  }
  public resetImageExtractionStatus() {
    this._imageExtractionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtractionStatusInput() {
    return this._imageExtractionStatus;
  }
}
export interface BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration {
  /**
  * Indicates whether a feature is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#video_extraction_status BedrockDataSource#video_extraction_status}
  */
  readonly videoExtractionStatus?: string;
}

export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    video_extraction_status: cdktn.stringToTerraform(struct!.videoExtractionStatus),
  }
}


export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    video_extraction_status: {
      value: cdktn.stringToHclTerraform(struct!.videoExtractionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._videoExtractionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoExtractionStatus = this._videoExtractionStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._videoExtractionStatus = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._videoExtractionStatus = value.videoExtractionStatus;
    }
  }

  // video_extraction_status - computed: true, optional: true, required: false
  private _videoExtractionStatus?: string; 
  public get videoExtractionStatus() {
    return this.getStringAttribute('video_extraction_status');
  }
  public set videoExtractionStatus(value: string) {
    this._videoExtractionStatus = value;
  }
  public resetVideoExtractionStatus() {
    this._videoExtractionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoExtractionStatusInput() {
    return this._videoExtractionStatus;
  }
}
export interface BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration {
  /**
  * Configuration for audio extraction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#audio_extraction_configuration BedrockDataSource#audio_extraction_configuration}
  */
  readonly audioExtractionConfiguration?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration;
  /**
  * Configuration for image extraction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#image_extraction_configuration BedrockDataSource#image_extraction_configuration}
  */
  readonly imageExtractionConfiguration?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration;
  /**
  * Configuration for video extraction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#video_extraction_configuration BedrockDataSource#video_extraction_configuration}
  */
  readonly videoExtractionConfiguration?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_extraction_configuration: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationToTerraform(struct!.audioExtractionConfiguration),
    image_extraction_configuration: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationToTerraform(struct!.imageExtractionConfiguration),
    video_extraction_configuration: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationToTerraform(struct!.videoExtractionConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_extraction_configuration: {
      value: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationToHclTerraform(struct!.audioExtractionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration",
    },
    image_extraction_configuration: {
      value: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationToHclTerraform(struct!.imageExtractionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration",
    },
    video_extraction_configuration: {
      value: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationToHclTerraform(struct!.videoExtractionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExtractionConfiguration = this._audioExtractionConfiguration?.internalValue;
    }
    if (this._imageExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtractionConfiguration = this._imageExtractionConfiguration?.internalValue;
    }
    if (this._videoExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoExtractionConfiguration = this._videoExtractionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audioExtractionConfiguration.internalValue = undefined;
      this._imageExtractionConfiguration.internalValue = undefined;
      this._videoExtractionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audioExtractionConfiguration.internalValue = value.audioExtractionConfiguration;
      this._imageExtractionConfiguration.internalValue = value.imageExtractionConfiguration;
      this._videoExtractionConfiguration.internalValue = value.videoExtractionConfiguration;
    }
  }

  // audio_extraction_configuration - computed: true, optional: true, required: false
  private _audioExtractionConfiguration = new BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(this, "audio_extraction_configuration");
  public get audioExtractionConfiguration() {
    return this._audioExtractionConfiguration;
  }
  public putAudioExtractionConfiguration(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration) {
    this._audioExtractionConfiguration.internalValue = value;
  }
  public resetAudioExtractionConfiguration() {
    this._audioExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExtractionConfigurationInput() {
    return this._audioExtractionConfiguration.internalValue;
  }

  // image_extraction_configuration - computed: true, optional: true, required: false
  private _imageExtractionConfiguration = new BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationOutputReference(this, "image_extraction_configuration");
  public get imageExtractionConfiguration() {
    return this._imageExtractionConfiguration;
  }
  public putImageExtractionConfiguration(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration) {
    this._imageExtractionConfiguration.internalValue = value;
  }
  public resetImageExtractionConfiguration() {
    this._imageExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtractionConfigurationInput() {
    return this._imageExtractionConfiguration.internalValue;
  }

  // video_extraction_configuration - computed: true, optional: true, required: false
  private _videoExtractionConfiguration = new BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(this, "video_extraction_configuration");
  public get videoExtractionConfiguration() {
    return this._videoExtractionConfiguration;
  }
  public putVideoExtractionConfiguration(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration) {
    this._videoExtractionConfiguration.internalValue = value;
  }
  public resetVideoExtractionConfiguration() {
    this._videoExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoExtractionConfigurationInput() {
    return this._videoExtractionConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration {
  /**
  * Connector-specific parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#connector_parameters BedrockDataSource#connector_parameters}
  */
  readonly connectorParameters?: string;
  /**
  * Configuration for deletion protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#deletion_protection_configuration BedrockDataSource#deletion_protection_configuration}
  */
  readonly deletionProtectionConfiguration?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration;
  /**
  * Configuration for media extraction settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#media_extraction_configuration BedrockDataSource#media_extraction_configuration}
  */
  readonly mediaExtractionConfiguration?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_parameters: cdktn.stringToTerraform(struct!.connectorParameters),
    deletion_protection_configuration: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationToTerraform(struct!.deletionProtectionConfiguration),
    media_extraction_configuration: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationToTerraform(struct!.mediaExtractionConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_parameters: {
      value: cdktn.stringToHclTerraform(struct!.connectorParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_protection_configuration: {
      value: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationToHclTerraform(struct!.deletionProtectionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration",
    },
    media_extraction_configuration: {
      value: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationToHclTerraform(struct!.mediaExtractionConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorParameters = this._connectorParameters;
    }
    if (this._deletionProtectionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionProtectionConfiguration = this._deletionProtectionConfiguration?.internalValue;
    }
    if (this._mediaExtractionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaExtractionConfiguration = this._mediaExtractionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorParameters = undefined;
      this._deletionProtectionConfiguration.internalValue = undefined;
      this._mediaExtractionConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorParameters = value.connectorParameters;
      this._deletionProtectionConfiguration.internalValue = value.deletionProtectionConfiguration;
      this._mediaExtractionConfiguration.internalValue = value.mediaExtractionConfiguration;
    }
  }

  // connector_parameters - computed: true, optional: true, required: false
  private _connectorParameters?: string; 
  public get connectorParameters() {
    return this.getStringAttribute('connector_parameters');
  }
  public set connectorParameters(value: string) {
    this._connectorParameters = value;
  }
  public resetConnectorParameters() {
    this._connectorParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorParametersInput() {
    return this._connectorParameters;
  }

  // deletion_protection_configuration - computed: true, optional: true, required: false
  private _deletionProtectionConfiguration = new BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationOutputReference(this, "deletion_protection_configuration");
  public get deletionProtectionConfiguration() {
    return this._deletionProtectionConfiguration;
  }
  public putDeletionProtectionConfiguration(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration) {
    this._deletionProtectionConfiguration.internalValue = value;
  }
  public resetDeletionProtectionConfiguration() {
    this._deletionProtectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionConfigurationInput() {
    return this._deletionProtectionConfiguration.internalValue;
  }

  // media_extraction_configuration - computed: true, optional: true, required: false
  private _mediaExtractionConfiguration = new BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationOutputReference(this, "media_extraction_configuration");
  public get mediaExtractionConfiguration() {
    return this._mediaExtractionConfiguration;
  }
  public putMediaExtractionConfiguration(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration) {
    this._mediaExtractionConfiguration.internalValue = value;
  }
  public resetMediaExtractionConfiguration() {
    this._mediaExtractionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaExtractionConfigurationInput() {
    return this._mediaExtractionConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationS3Configuration {
  /**
  * The ARN of the bucket that contains the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#bucket_arn BedrockDataSource#bucket_arn}
  */
  readonly bucketArn?: string;
  /**
  * The account ID for the owner of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#bucket_owner_account_id BedrockDataSource#bucket_owner_account_id}
  */
  readonly bucketOwnerAccountId?: string;
  /**
  * A list of S3 prefixes that define the object containing the data sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#inclusion_prefixes BedrockDataSource#inclusion_prefixes}
  */
  readonly inclusionPrefixes?: string[];
}

export function bedrockDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationS3Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
    bucket_owner_account_id: cdktn.stringToTerraform(struct!.bucketOwnerAccountId),
    inclusion_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionPrefixes),
  }
}


export function bedrockDataSourceDataSourceConfigurationS3ConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationS3Configuration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner_account_id: {
      value: cdktn.stringToHclTerraform(struct!.bucketOwnerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inclusion_prefixes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationS3Configuration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bucketOwnerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccountId = this._bucketOwnerAccountId;
    }
    if (this._inclusionPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPrefixes = this._inclusionPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationS3Configuration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._bucketOwnerAccountId = undefined;
      this._inclusionPrefixes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._bucketOwnerAccountId = value.bucketOwnerAccountId;
      this._inclusionPrefixes = value.inclusionPrefixes;
    }
  }

  // bucket_arn - computed: true, optional: true, required: false
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  public resetBucketArn() {
    this._bucketArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // bucket_owner_account_id - computed: true, optional: true, required: false
  private _bucketOwnerAccountId?: string; 
  public get bucketOwnerAccountId() {
    return this.getStringAttribute('bucket_owner_account_id');
  }
  public set bucketOwnerAccountId(value: string) {
    this._bucketOwnerAccountId = value;
  }
  public resetBucketOwnerAccountId() {
    this._bucketOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccountIdInput() {
    return this._bucketOwnerAccountId;
  }

  // inclusion_prefixes - computed: true, optional: true, required: false
  private _inclusionPrefixes?: string[]; 
  public get inclusionPrefixes() {
    return this.getListAttribute('inclusion_prefixes');
  }
  public set inclusionPrefixes(value: string[]) {
    this._inclusionPrefixes = value;
  }
  public resetInclusionPrefixes() {
    this._inclusionPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPrefixesInput() {
    return this._inclusionPrefixes;
  }
}
export interface BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
  /**
  * A set of regular expression filter patterns for a type of object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#exclusion_filters BedrockDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * A set of regular expression filter patterns for a type of object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#inclusion_filters BedrockDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * The supported object type or content type of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#object_type BedrockDataSource#object_type}
  */
  readonly objectType?: string;
}

export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
    object_type: cdktn.stringToTerraform(struct!.objectType),
  }
}


export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktn.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._objectType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._objectType = value.objectType;
    }
  }

  // exclusion_filters - computed: true, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return this.getListAttribute('exclusion_filters');
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: true, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return this.getListAttribute('inclusion_filters');
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktn.ComplexList {
  public internalValue? : BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktn.IResolvable

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
  public get(index: number): BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference {
    return new BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
  /**
  * Contains information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#filters BedrockDataSource#filters}
  */
  readonly filters?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktn.IResolvable;
}

export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters: cdktn.listMapper(bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform, false)(struct!.filters),
  }
}


export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters: {
      value: cdktn.listMapperHcl(bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration {
  /**
  * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#pattern_object_filter BedrockDataSource#pattern_object_filter}
  */
  readonly patternObjectFilter?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter;
  /**
  * The crawl filter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#type BedrockDataSource#type}
  */
  readonly type?: string;
}

export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern_object_filter: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct!.patternObjectFilter),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern_object_filter: {
      value: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct!.patternObjectFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter",
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

export class BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patternObjectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patternObjectFilter.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patternObjectFilter.internalValue = value.patternObjectFilter;
      this._type = value.type;
    }
  }

  // pattern_object_filter - computed: true, optional: true, required: false
  private _patternObjectFilter = new BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference(this, "pattern_object_filter");
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }
  public putPatternObjectFilter(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter) {
    this._patternObjectFilter.internalValue = value;
  }
  public resetPatternObjectFilter() {
    this._patternObjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternObjectFilterInput() {
    return this._patternObjectFilter.internalValue;
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
export interface BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration {
  /**
  * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#filter_configuration BedrockDataSource#filter_configuration}
  */
  readonly filterConfiguration?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_configuration: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct!.filterConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_configuration: {
      value: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct!.filterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
    }
  }

  // filter_configuration - computed: true, optional: true, required: false
  private _filterConfiguration = new BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration {
  /**
  * The supported authentication type to authenticate and connect to your Salesforce instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#auth_type BedrockDataSource#auth_type}
  */
  readonly authType?: string;
  /**
  * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Salesforce connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#credentials_secret_arn BedrockDataSource#credentials_secret_arn}
  */
  readonly credentialsSecretArn?: string;
  /**
  * The Salesforce host URL or instance URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#host_url BedrockDataSource#host_url}
  */
  readonly hostUrl?: string;
}

export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    host_url: cdktn.stringToTerraform(struct!.hostUrl),
  }
}


export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_url: {
      value: cdktn.stringToHclTerraform(struct!.hostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._hostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUrl = this._hostUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._credentialsSecretArn = undefined;
      this._hostUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._hostUrl = value.hostUrl;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credentials_secret_arn - computed: true, optional: true, required: false
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  public resetCredentialsSecretArn() {
    this._credentialsSecretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // host_url - computed: true, optional: true, required: false
  private _hostUrl?: string; 
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }
  public set hostUrl(value: string) {
    this._hostUrl = value;
  }
  public resetHostUrl() {
    this._hostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlInput() {
    return this._hostUrl;
  }
}
export interface BedrockDataSourceDataSourceConfigurationSalesforceConfiguration {
  /**
  * The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#crawler_configuration BedrockDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration;
  /**
  * The endpoint information to connect to your Salesforce data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#source_configuration BedrockDataSource#source_configuration}
  */
  readonly sourceConfiguration?: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_configuration: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToTerraform(struct!.crawlerConfiguration),
    source_configuration: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToTerraform(struct!.sourceConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationSalesforceConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSalesforceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_configuration: {
      value: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToHclTerraform(struct!.crawlerConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration",
    },
    source_configuration: {
      value: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToHclTerraform(struct!.sourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSalesforceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSalesforceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: true, optional: true, required: false
  private _crawlerConfiguration = new BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationOutputReference(this, "crawler_configuration");
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: true, optional: true, required: false
  private _sourceConfiguration = new BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: BedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
  /**
  * A set of regular expression filter patterns for a type of object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#exclusion_filters BedrockDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * A set of regular expression filter patterns for a type of object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#inclusion_filters BedrockDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * The supported object type or content type of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#object_type BedrockDataSource#object_type}
  */
  readonly objectType?: string;
}

export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
    object_type: cdktn.stringToTerraform(struct!.objectType),
  }
}


export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktn.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._objectType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._objectType = value.objectType;
    }
  }

  // exclusion_filters - computed: true, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return this.getListAttribute('exclusion_filters');
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: true, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return this.getListAttribute('inclusion_filters');
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktn.ComplexList {
  public internalValue? : BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktn.IResolvable

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
  public get(index: number): BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference {
    return new BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
  /**
  * Contains information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#filters BedrockDataSource#filters}
  */
  readonly filters?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktn.IResolvable;
}

export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters: cdktn.listMapper(bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform, false)(struct!.filters),
  }
}


export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters: {
      value: cdktn.listMapperHcl(bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration {
  /**
  * The configuration of specific filters applied to your data source content. You can filter out or include certain content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#pattern_object_filter BedrockDataSource#pattern_object_filter}
  */
  readonly patternObjectFilter?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter;
  /**
  * The crawl filter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#type BedrockDataSource#type}
  */
  readonly type?: string;
}

export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pattern_object_filter: bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct!.patternObjectFilter),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pattern_object_filter: {
      value: bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct!.patternObjectFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter",
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

export class BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patternObjectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patternObjectFilter.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patternObjectFilter.internalValue = value.patternObjectFilter;
      this._type = value.type;
    }
  }

  // pattern_object_filter - computed: true, optional: true, required: false
  private _patternObjectFilter = new BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference(this, "pattern_object_filter");
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }
  public putPatternObjectFilter(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter) {
    this._patternObjectFilter.internalValue = value;
  }
  public resetPatternObjectFilter() {
    this._patternObjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternObjectFilterInput() {
    return this._patternObjectFilter.internalValue;
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
export interface BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration {
  /**
  * The type of filtering that you want to apply to certain objects or content of the data source. For example, the PATTERN type is regular expression patterns you can apply to filter your content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#filter_configuration BedrockDataSource#filter_configuration}
  */
  readonly filterConfiguration?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filter_configuration: bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct!.filterConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filter_configuration: {
      value: bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct!.filterConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
    }
  }

  // filter_configuration - computed: true, optional: true, required: false
  private _filterConfiguration = new BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration {
  /**
  * The supported authentication type to authenticate and connect to your SharePoint site/sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#auth_type BedrockDataSource#auth_type}
  */
  readonly authType?: string;
  /**
  * The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see SharePoint connection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#credentials_secret_arn BedrockDataSource#credentials_secret_arn}
  */
  readonly credentialsSecretArn?: string;
  /**
  * The domain of your SharePoint instance or site URL/URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#domain BedrockDataSource#domain}
  */
  readonly domain?: string;
  /**
  * The supported host type, whether online/cloud or server/on-premises.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#host_type BedrockDataSource#host_type}
  */
  readonly hostType?: string;
  /**
  * A list of one or more SharePoint site URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#site_urls BedrockDataSource#site_urls}
  */
  readonly siteUrls?: string[];
  /**
  * The identifier of your Microsoft 365 tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#tenant_id BedrockDataSource#tenant_id}
  */
  readonly tenantId?: string;
}

export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_type: cdktn.stringToTerraform(struct!.authType),
    credentials_secret_arn: cdktn.stringToTerraform(struct!.credentialsSecretArn),
    domain: cdktn.stringToTerraform(struct!.domain),
    host_type: cdktn.stringToTerraform(struct!.hostType),
    site_urls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.siteUrls),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_type: {
      value: cdktn.stringToHclTerraform(struct!.hostType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_urls: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.siteUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hostType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostType = this._hostType;
    }
    if (this._siteUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUrls = this._siteUrls;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._credentialsSecretArn = undefined;
      this._domain = undefined;
      this._hostType = undefined;
      this._siteUrls = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._domain = value.domain;
      this._hostType = value.hostType;
      this._siteUrls = value.siteUrls;
      this._tenantId = value.tenantId;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credentials_secret_arn - computed: true, optional: true, required: false
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  public resetCredentialsSecretArn() {
    this._credentialsSecretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // host_type - computed: true, optional: true, required: false
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  public resetHostType() {
    this._hostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
  }

  // site_urls - computed: true, optional: true, required: false
  private _siteUrls?: string[]; 
  public get siteUrls() {
    return this.getListAttribute('site_urls');
  }
  public set siteUrls(value: string[]) {
    this._siteUrls = value;
  }
  public resetSiteUrls() {
    this._siteUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUrlsInput() {
    return this._siteUrls;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface BedrockDataSourceDataSourceConfigurationSharePointConfiguration {
  /**
  * The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#crawler_configuration BedrockDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration;
  /**
  * The endpoint information to connect to your SharePoint data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#source_configuration BedrockDataSource#source_configuration}
  */
  readonly sourceConfiguration?: BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_configuration: bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToTerraform(struct!.crawlerConfiguration),
    source_configuration: bedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToTerraform(struct!.sourceConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationSharePointConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationSharePointConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_configuration: {
      value: bedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToHclTerraform(struct!.crawlerConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration",
    },
    source_configuration: {
      value: bedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToHclTerraform(struct!.sourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationSharePointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationSharePointConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationSharePointConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: true, optional: true, required: false
  private _crawlerConfiguration = new BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationOutputReference(this, "crawler_configuration");
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: true, optional: true, required: false
  private _sourceConfiguration = new BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: BedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits {
  /**
  * Maximum number of pages the crawler can crawl.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#max_pages BedrockDataSource#max_pages}
  */
  readonly maxPages?: number;
  /**
  * Rate of web URLs retrieved per minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#rate_limit BedrockDataSource#rate_limit}
  */
  readonly rateLimit?: number;
}

export function bedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_pages: cdktn.numberToTerraform(struct!.maxPages),
    rate_limit: cdktn.numberToTerraform(struct!.rateLimit),
  }
}


export function bedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_pages: {
      value: cdktn.numberToHclTerraform(struct!.maxPages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit: {
      value: cdktn.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPages = this._maxPages;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPages = undefined;
      this._rateLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPages = value.maxPages;
      this._rateLimit = value.rateLimit;
    }
  }

  // max_pages - computed: true, optional: true, required: false
  private _maxPages?: number; 
  public get maxPages() {
    return this.getNumberAttribute('max_pages');
  }
  public set maxPages(value: number) {
    this._maxPages = value;
  }
  public resetMaxPages() {
    this._maxPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPagesInput() {
    return this._maxPages;
  }

  // rate_limit - computed: true, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }
}
export interface BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration {
  /**
  * Limit settings for the web crawler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#crawler_limits BedrockDataSource#crawler_limits}
  */
  readonly crawlerLimits?: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits;
  /**
  * A set of regular expression filter patterns for a type of object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#exclusion_filters BedrockDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * A set of regular expression filter patterns for a type of object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#inclusion_filters BedrockDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * The scope that a web crawl job will be restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#scope BedrockDataSource#scope}
  */
  readonly scope?: string;
  /**
  * The suffix that will be included in the user agent header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#user_agent BedrockDataSource#user_agent}
  */
  readonly userAgent?: string;
}

export function bedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_limits: bedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToTerraform(struct!.crawlerLimits),
    exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
    scope: cdktn.stringToTerraform(struct!.scope),
    user_agent: cdktn.stringToTerraform(struct!.userAgent),
  }
}


export function bedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_limits: {
      value: bedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToHclTerraform(struct!.crawlerLimits),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits",
    },
    exclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_agent: {
      value: cdktn.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerLimits = this._crawlerLimits?.internalValue;
    }
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerLimits.internalValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._scope = undefined;
      this._userAgent = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerLimits.internalValue = value.crawlerLimits;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._scope = value.scope;
      this._userAgent = value.userAgent;
    }
  }

  // crawler_limits - computed: true, optional: true, required: false
  private _crawlerLimits = new BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsOutputReference(this, "crawler_limits");
  public get crawlerLimits() {
    return this._crawlerLimits;
  }
  public putCrawlerLimits(value: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits) {
    this._crawlerLimits.internalValue = value;
  }
  public resetCrawlerLimits() {
    this._crawlerLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerLimitsInput() {
    return this._crawlerLimits.internalValue;
  }

  // exclusion_filters - computed: true, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return this.getListAttribute('exclusion_filters');
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: true, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return this.getListAttribute('inclusion_filters');
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // user_agent - computed: true, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // user_agent_header - computed: true, optional: false, required: false
  public get userAgentHeader() {
    return this.getStringAttribute('user_agent_header');
  }
}
export interface BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls {
  /**
  * A web url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#url BedrockDataSource#url}
  */
  readonly url?: string;
}

export function bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList extends cdktn.ComplexList {
  public internalValue? : BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | cdktn.IResolvable

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
  public get(index: number): BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference {
    return new BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration {
  /**
  * A list of web urls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#seed_urls BedrockDataSource#seed_urls}
  */
  readonly seedUrls?: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | cdktn.IResolvable;
}

export function bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed_urls: cdktn.listMapper(bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToTerraform, false)(struct!.seedUrls),
  }
}


export function bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed_urls: {
      value: cdktn.listMapperHcl(bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToHclTerraform, false)(struct!.seedUrls),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seedUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedUrls = this._seedUrls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seedUrls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seedUrls.internalValue = value.seedUrls;
    }
  }

  // seed_urls - computed: true, optional: true, required: false
  private _seedUrls = new BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList(this, "seed_urls", false);
  public get seedUrls() {
    return this._seedUrls;
  }
  public putSeedUrls(value: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | cdktn.IResolvable) {
    this._seedUrls.internalValue = value;
  }
  public resetSeedUrls() {
    this._seedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedUrlsInput() {
    return this._seedUrls.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration {
  /**
  * A url configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#url_configuration BedrockDataSource#url_configuration}
  */
  readonly urlConfiguration?: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    url_configuration: bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToTerraform(struct!.urlConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    url_configuration: {
      value: bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToHclTerraform(struct!.urlConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlConfiguration = this._urlConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._urlConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._urlConfiguration.internalValue = value.urlConfiguration;
    }
  }

  // url_configuration - computed: true, optional: true, required: false
  private _urlConfiguration = new BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationOutputReference(this, "url_configuration");
  public get urlConfiguration() {
    return this._urlConfiguration;
  }
  public putUrlConfiguration(value: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration) {
    this._urlConfiguration.internalValue = value;
  }
  public resetUrlConfiguration() {
    this._urlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlConfigurationInput() {
    return this._urlConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfigurationWebConfiguration {
  /**
  * Configuration for the web crawler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#crawler_configuration BedrockDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration;
  /**
  * A web source configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#source_configuration BedrockDataSource#source_configuration}
  */
  readonly sourceConfiguration?: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationWebConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_configuration: bedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToTerraform(struct!.crawlerConfiguration),
    source_configuration: bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToTerraform(struct!.sourceConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationWebConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfigurationWebConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_configuration: {
      value: bedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToHclTerraform(struct!.crawlerConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration",
    },
    source_configuration: {
      value: bedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToHclTerraform(struct!.sourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationWebConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfigurationWebConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfigurationWebConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: true, optional: true, required: false
  private _crawlerConfiguration = new BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationOutputReference(this, "crawler_configuration");
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: BedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: true, optional: true, required: false
  private _sourceConfiguration = new BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: BedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}
export interface BedrockDataSourceDataSourceConfiguration {
  /**
  * The configuration information to connect to Confluence as your data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#confluence_configuration BedrockDataSource#confluence_configuration}
  */
  readonly confluenceConfiguration?: BedrockDataSourceDataSourceConfigurationConfluenceConfiguration;
  /**
  * Configuration for managed knowledge base connector data sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#managed_knowledge_base_connector_configuration BedrockDataSource#managed_knowledge_base_connector_configuration}
  */
  readonly managedKnowledgeBaseConnectorConfiguration?: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration;
  /**
  * The configuration information to connect to Amazon S3 as your data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#s3_configuration BedrockDataSource#s3_configuration}
  */
  readonly s3Configuration?: BedrockDataSourceDataSourceConfigurationS3Configuration;
  /**
  * The configuration information to connect to Salesforce as your data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#salesforce_configuration BedrockDataSource#salesforce_configuration}
  */
  readonly salesforceConfiguration?: BedrockDataSourceDataSourceConfigurationSalesforceConfiguration;
  /**
  * The configuration information to connect to SharePoint as your data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#share_point_configuration BedrockDataSource#share_point_configuration}
  */
  readonly sharePointConfiguration?: BedrockDataSourceDataSourceConfigurationSharePointConfiguration;
  /**
  * The type of the data source location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#type BedrockDataSource#type}
  */
  readonly type: string;
  /**
  * Configures a web data source location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#web_configuration BedrockDataSource#web_configuration}
  */
  readonly webConfiguration?: BedrockDataSourceDataSourceConfigurationWebConfiguration;
}

export function bedrockDataSourceDataSourceConfigurationToTerraform(struct?: BedrockDataSourceDataSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    confluence_configuration: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct!.confluenceConfiguration),
    managed_knowledge_base_connector_configuration: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationToTerraform(struct!.managedKnowledgeBaseConnectorConfiguration),
    s3_configuration: bedrockDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    salesforce_configuration: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct!.salesforceConfiguration),
    share_point_configuration: bedrockDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct!.sharePointConfiguration),
    type: cdktn.stringToTerraform(struct!.type),
    web_configuration: bedrockDataSourceDataSourceConfigurationWebConfigurationToTerraform(struct!.webConfiguration),
  }
}


export function bedrockDataSourceDataSourceConfigurationToHclTerraform(struct?: BedrockDataSourceDataSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    confluence_configuration: {
      value: bedrockDataSourceDataSourceConfigurationConfluenceConfigurationToHclTerraform(struct!.confluenceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationConfluenceConfiguration",
    },
    managed_knowledge_base_connector_configuration: {
      value: bedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationToHclTerraform(struct!.managedKnowledgeBaseConnectorConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration",
    },
    s3_configuration: {
      value: bedrockDataSourceDataSourceConfigurationS3ConfigurationToHclTerraform(struct!.s3Configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationS3Configuration",
    },
    salesforce_configuration: {
      value: bedrockDataSourceDataSourceConfigurationSalesforceConfigurationToHclTerraform(struct!.salesforceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSalesforceConfiguration",
    },
    share_point_configuration: {
      value: bedrockDataSourceDataSourceConfigurationSharePointConfigurationToHclTerraform(struct!.sharePointConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationSharePointConfiguration",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_configuration: {
      value: bedrockDataSourceDataSourceConfigurationWebConfigurationToHclTerraform(struct!.webConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceDataSourceConfigurationWebConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceDataSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceDataSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confluenceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluenceConfiguration = this._confluenceConfiguration?.internalValue;
    }
    if (this._managedKnowledgeBaseConnectorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedKnowledgeBaseConnectorConfiguration = this._managedKnowledgeBaseConnectorConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._salesforceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceConfiguration = this._salesforceConfiguration?.internalValue;
    }
    if (this._sharePointConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharePointConfiguration = this._sharePointConfiguration?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._webConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webConfiguration = this._webConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceDataSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confluenceConfiguration.internalValue = undefined;
      this._managedKnowledgeBaseConnectorConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._salesforceConfiguration.internalValue = undefined;
      this._sharePointConfiguration.internalValue = undefined;
      this._type = undefined;
      this._webConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confluenceConfiguration.internalValue = value.confluenceConfiguration;
      this._managedKnowledgeBaseConnectorConfiguration.internalValue = value.managedKnowledgeBaseConnectorConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._salesforceConfiguration.internalValue = value.salesforceConfiguration;
      this._sharePointConfiguration.internalValue = value.sharePointConfiguration;
      this._type = value.type;
      this._webConfiguration.internalValue = value.webConfiguration;
    }
  }

  // confluence_configuration - computed: true, optional: true, required: false
  private _confluenceConfiguration = new BedrockDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference(this, "confluence_configuration");
  public get confluenceConfiguration() {
    return this._confluenceConfiguration;
  }
  public putConfluenceConfiguration(value: BedrockDataSourceDataSourceConfigurationConfluenceConfiguration) {
    this._confluenceConfiguration.internalValue = value;
  }
  public resetConfluenceConfiguration() {
    this._confluenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluenceConfigurationInput() {
    return this._confluenceConfiguration.internalValue;
  }

  // managed_knowledge_base_connector_configuration - computed: true, optional: true, required: false
  private _managedKnowledgeBaseConnectorConfiguration = new BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationOutputReference(this, "managed_knowledge_base_connector_configuration");
  public get managedKnowledgeBaseConnectorConfiguration() {
    return this._managedKnowledgeBaseConnectorConfiguration;
  }
  public putManagedKnowledgeBaseConnectorConfiguration(value: BedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration) {
    this._managedKnowledgeBaseConnectorConfiguration.internalValue = value;
  }
  public resetManagedKnowledgeBaseConnectorConfiguration() {
    this._managedKnowledgeBaseConnectorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedKnowledgeBaseConnectorConfigurationInput() {
    return this._managedKnowledgeBaseConnectorConfiguration.internalValue;
  }

  // s3_configuration - computed: true, optional: true, required: false
  private _s3Configuration = new BedrockDataSourceDataSourceConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: BedrockDataSourceDataSourceConfigurationS3Configuration) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // salesforce_configuration - computed: true, optional: true, required: false
  private _salesforceConfiguration = new BedrockDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference(this, "salesforce_configuration");
  public get salesforceConfiguration() {
    return this._salesforceConfiguration;
  }
  public putSalesforceConfiguration(value: BedrockDataSourceDataSourceConfigurationSalesforceConfiguration) {
    this._salesforceConfiguration.internalValue = value;
  }
  public resetSalesforceConfiguration() {
    this._salesforceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceConfigurationInput() {
    return this._salesforceConfiguration.internalValue;
  }

  // share_point_configuration - computed: true, optional: true, required: false
  private _sharePointConfiguration = new BedrockDataSourceDataSourceConfigurationSharePointConfigurationOutputReference(this, "share_point_configuration");
  public get sharePointConfiguration() {
    return this._sharePointConfiguration;
  }
  public putSharePointConfiguration(value: BedrockDataSourceDataSourceConfigurationSharePointConfiguration) {
    this._sharePointConfiguration.internalValue = value;
  }
  public resetSharePointConfiguration() {
    this._sharePointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePointConfigurationInput() {
    return this._sharePointConfiguration.internalValue;
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

  // web_configuration - computed: true, optional: true, required: false
  private _webConfiguration = new BedrockDataSourceDataSourceConfigurationWebConfigurationOutputReference(this, "web_configuration");
  public get webConfiguration() {
    return this._webConfiguration;
  }
  public putWebConfiguration(value: BedrockDataSourceDataSourceConfigurationWebConfiguration) {
    this._webConfiguration.internalValue = value;
  }
  public resetWebConfiguration() {
    this._webConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webConfigurationInput() {
    return this._webConfiguration.internalValue;
  }
}
export interface BedrockDataSourceServerSideEncryptionConfiguration {
  /**
  * The ARN of the AWS KMS key used to encrypt the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#kms_key_arn BedrockDataSource#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function bedrockDataSourceServerSideEncryptionConfigurationToTerraform(struct?: BedrockDataSourceServerSideEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function bedrockDataSourceServerSideEncryptionConfigurationToHclTerraform(struct?: BedrockDataSourceServerSideEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceServerSideEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceServerSideEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceServerSideEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration {
  /**
  * The maximum number of tokens to include in a chunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#max_tokens BedrockDataSource#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * The percentage of overlap between adjacent chunks of a data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#overlap_percentage BedrockDataSource#overlap_percentage}
  */
  readonly overlapPercentage?: number;
}

export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    overlap_percentage: cdktn.numberToTerraform(struct!.overlapPercentage),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overlap_percentage: {
      value: cdktn.numberToHclTerraform(struct!.overlapPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._overlapPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapPercentage = this._overlapPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
      this._overlapPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
      this._overlapPercentage = value.overlapPercentage;
    }
  }

  // max_tokens - computed: true, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // overlap_percentage - computed: true, optional: true, required: false
  private _overlapPercentage?: number; 
  public get overlapPercentage() {
    return this.getNumberAttribute('overlap_percentage');
  }
  public set overlapPercentage(value: number) {
    this._overlapPercentage = value;
  }
  public resetOverlapPercentage() {
    this._overlapPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapPercentageInput() {
    return this._overlapPercentage;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations {
  /**
  * The maximum number of tokens that a chunk can contain in this layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#max_tokens BedrockDataSource#max_tokens}
  */
  readonly maxTokens?: number;
}

export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
    }
  }

  // max_tokens - computed: true, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }
}

export class BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList extends cdktn.ComplexList {
  public internalValue? : BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] | cdktn.IResolvable

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
  public get(index: number): BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference {
    return new BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration {
  /**
  * Token settings for each layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#level_configurations BedrockDataSource#level_configurations}
  */
  readonly levelConfigurations?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] | cdktn.IResolvable;
  /**
  * The number of tokens to repeat across chunks in the same layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#overlap_tokens BedrockDataSource#overlap_tokens}
  */
  readonly overlapTokens?: number;
}

export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    level_configurations: cdktn.listMapper(bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToTerraform, false)(struct!.levelConfigurations),
    overlap_tokens: cdktn.numberToTerraform(struct!.overlapTokens),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    level_configurations: {
      value: cdktn.listMapperHcl(bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToHclTerraform, false)(struct!.levelConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList",
    },
    overlap_tokens: {
      value: cdktn.numberToHclTerraform(struct!.overlapTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelConfigurations = this._levelConfigurations?.internalValue;
    }
    if (this._overlapTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapTokens = this._overlapTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelConfigurations.internalValue = undefined;
      this._overlapTokens = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelConfigurations.internalValue = value.levelConfigurations;
      this._overlapTokens = value.overlapTokens;
    }
  }

  // level_configurations - computed: true, optional: true, required: false
  private _levelConfigurations = new BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList(this, "level_configurations", false);
  public get levelConfigurations() {
    return this._levelConfigurations;
  }
  public putLevelConfigurations(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] | cdktn.IResolvable) {
    this._levelConfigurations.internalValue = value;
  }
  public resetLevelConfigurations() {
    this._levelConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelConfigurationsInput() {
    return this._levelConfigurations.internalValue;
  }

  // overlap_tokens - computed: true, optional: true, required: false
  private _overlapTokens?: number; 
  public get overlapTokens() {
    return this.getNumberAttribute('overlap_tokens');
  }
  public set overlapTokens(value: number) {
    this._overlapTokens = value;
  }
  public resetOverlapTokens() {
    this._overlapTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapTokensInput() {
    return this._overlapTokens;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration {
  /**
  * The dissimilarity threshold for splitting chunks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#breakpoint_percentile_threshold BedrockDataSource#breakpoint_percentile_threshold}
  */
  readonly breakpointPercentileThreshold?: number;
  /**
  * The buffer size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#buffer_size BedrockDataSource#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * The maximum number of tokens that a chunk can contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#max_tokens BedrockDataSource#max_tokens}
  */
  readonly maxTokens?: number;
}

export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    breakpoint_percentile_threshold: cdktn.numberToTerraform(struct!.breakpointPercentileThreshold),
    buffer_size: cdktn.numberToTerraform(struct!.bufferSize),
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    breakpoint_percentile_threshold: {
      value: cdktn.numberToHclTerraform(struct!.breakpointPercentileThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer_size: {
      value: cdktn.numberToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_tokens: {
      value: cdktn.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakpointPercentileThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakpointPercentileThreshold = this._breakpointPercentileThreshold;
    }
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakpointPercentileThreshold = undefined;
      this._bufferSize = undefined;
      this._maxTokens = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakpointPercentileThreshold = value.breakpointPercentileThreshold;
      this._bufferSize = value.bufferSize;
      this._maxTokens = value.maxTokens;
    }
  }

  // breakpoint_percentile_threshold - computed: true, optional: true, required: false
  private _breakpointPercentileThreshold?: number; 
  public get breakpointPercentileThreshold() {
    return this.getNumberAttribute('breakpoint_percentile_threshold');
  }
  public set breakpointPercentileThreshold(value: number) {
    this._breakpointPercentileThreshold = value;
  }
  public resetBreakpointPercentileThreshold() {
    this._breakpointPercentileThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakpointPercentileThresholdInput() {
    return this._breakpointPercentileThreshold;
  }

  // buffer_size - computed: true, optional: true, required: false
  private _bufferSize?: number; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // max_tokens - computed: true, optional: true, required: false
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  public resetMaxTokens() {
    this._maxTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationChunkingConfiguration {
  /**
  * Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for NONE, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#chunking_strategy BedrockDataSource#chunking_strategy}
  */
  readonly chunkingStrategy?: string;
  /**
  * Configurations for when you choose fixed-size chunking. If you set the chunkingStrategy as NONE, exclude this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#fixed_size_chunking_configuration BedrockDataSource#fixed_size_chunking_configuration}
  */
  readonly fixedSizeChunkingConfiguration?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration;
  /**
  * Configurations for when you choose hierarchical chunking. If you set the chunkingStrategy as NONE, exclude this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#hierarchical_chunking_configuration BedrockDataSource#hierarchical_chunking_configuration}
  */
  readonly hierarchicalChunkingConfiguration?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration;
  /**
  * Configurations for when you choose semantic chunking. If you set the chunkingStrategy as NONE, exclude this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#semantic_chunking_configuration BedrockDataSource#semantic_chunking_configuration}
  */
  readonly semanticChunkingConfiguration?: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration;
}

export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chunking_strategy: cdktn.stringToTerraform(struct!.chunkingStrategy),
    fixed_size_chunking_configuration: bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToTerraform(struct!.fixedSizeChunkingConfiguration),
    hierarchical_chunking_configuration: bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToTerraform(struct!.hierarchicalChunkingConfiguration),
    semantic_chunking_configuration: bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToTerraform(struct!.semanticChunkingConfiguration),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chunking_strategy: {
      value: cdktn.stringToHclTerraform(struct!.chunkingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_size_chunking_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToHclTerraform(struct!.fixedSizeChunkingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration",
    },
    hierarchical_chunking_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToHclTerraform(struct!.hierarchicalChunkingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration",
    },
    semantic_chunking_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToHclTerraform(struct!.semanticChunkingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkingStrategy = this._chunkingStrategy;
    }
    if (this._fixedSizeChunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedSizeChunkingConfiguration = this._fixedSizeChunkingConfiguration?.internalValue;
    }
    if (this._hierarchicalChunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchicalChunkingConfiguration = this._hierarchicalChunkingConfiguration?.internalValue;
    }
    if (this._semanticChunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticChunkingConfiguration = this._semanticChunkingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunkingStrategy = undefined;
      this._fixedSizeChunkingConfiguration.internalValue = undefined;
      this._hierarchicalChunkingConfiguration.internalValue = undefined;
      this._semanticChunkingConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chunkingStrategy = value.chunkingStrategy;
      this._fixedSizeChunkingConfiguration.internalValue = value.fixedSizeChunkingConfiguration;
      this._hierarchicalChunkingConfiguration.internalValue = value.hierarchicalChunkingConfiguration;
      this._semanticChunkingConfiguration.internalValue = value.semanticChunkingConfiguration;
    }
  }

  // chunking_strategy - computed: true, optional: true, required: false
  private _chunkingStrategy?: string; 
  public get chunkingStrategy() {
    return this.getStringAttribute('chunking_strategy');
  }
  public set chunkingStrategy(value: string) {
    this._chunkingStrategy = value;
  }
  public resetChunkingStrategy() {
    this._chunkingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingStrategyInput() {
    return this._chunkingStrategy;
  }

  // fixed_size_chunking_configuration - computed: true, optional: true, required: false
  private _fixedSizeChunkingConfiguration = new BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference(this, "fixed_size_chunking_configuration");
  public get fixedSizeChunkingConfiguration() {
    return this._fixedSizeChunkingConfiguration;
  }
  public putFixedSizeChunkingConfiguration(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration) {
    this._fixedSizeChunkingConfiguration.internalValue = value;
  }
  public resetFixedSizeChunkingConfiguration() {
    this._fixedSizeChunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSizeChunkingConfigurationInput() {
    return this._fixedSizeChunkingConfiguration.internalValue;
  }

  // hierarchical_chunking_configuration - computed: true, optional: true, required: false
  private _hierarchicalChunkingConfiguration = new BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference(this, "hierarchical_chunking_configuration");
  public get hierarchicalChunkingConfiguration() {
    return this._hierarchicalChunkingConfiguration;
  }
  public putHierarchicalChunkingConfiguration(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration) {
    this._hierarchicalChunkingConfiguration.internalValue = value;
  }
  public resetHierarchicalChunkingConfiguration() {
    this._hierarchicalChunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchicalChunkingConfigurationInput() {
    return this._hierarchicalChunkingConfiguration.internalValue;
  }

  // semantic_chunking_configuration - computed: true, optional: true, required: false
  private _semanticChunkingConfiguration = new BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference(this, "semantic_chunking_configuration");
  public get semanticChunkingConfiguration() {
    return this._semanticChunkingConfiguration;
  }
  public putSemanticChunkingConfiguration(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration) {
    this._semanticChunkingConfiguration.internalValue = value;
  }
  public resetSemanticChunkingConfiguration() {
    this._semanticChunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticChunkingConfigurationInput() {
    return this._semanticChunkingConfiguration.internalValue;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration {
  /**
  * Enrichment Strategy method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#method BedrockDataSource#method}
  */
  readonly method?: string;
}

export function bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
    }
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration {
  /**
  * Strategy to be used when using Bedrock Foundation Model for Context Enrichment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#enrichment_strategy_configuration BedrockDataSource#enrichment_strategy_configuration}
  */
  readonly enrichmentStrategyConfiguration?: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration;
  /**
  * The model's ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#model_arn BedrockDataSource#model_arn}
  */
  readonly modelArn?: string;
}

export function bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enrichment_strategy_configuration: bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationToTerraform(struct!.enrichmentStrategyConfiguration),
    model_arn: cdktn.stringToTerraform(struct!.modelArn),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enrichment_strategy_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationToHclTerraform(struct!.enrichmentStrategyConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration",
    },
    model_arn: {
      value: cdktn.stringToHclTerraform(struct!.modelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enrichmentStrategyConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichmentStrategyConfiguration = this._enrichmentStrategyConfiguration?.internalValue;
    }
    if (this._modelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArn = this._modelArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enrichmentStrategyConfiguration.internalValue = undefined;
      this._modelArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enrichmentStrategyConfiguration.internalValue = value.enrichmentStrategyConfiguration;
      this._modelArn = value.modelArn;
    }
  }

  // enrichment_strategy_configuration - computed: true, optional: true, required: false
  private _enrichmentStrategyConfiguration = new BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationOutputReference(this, "enrichment_strategy_configuration");
  public get enrichmentStrategyConfiguration() {
    return this._enrichmentStrategyConfiguration;
  }
  public putEnrichmentStrategyConfiguration(value: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration) {
    this._enrichmentStrategyConfiguration.internalValue = value;
  }
  public resetEnrichmentStrategyConfiguration() {
    this._enrichmentStrategyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentStrategyConfigurationInput() {
    return this._enrichmentStrategyConfiguration.internalValue;
  }

  // model_arn - computed: true, optional: true, required: false
  private _modelArn?: string; 
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
  public set modelArn(value: string) {
    this._modelArn = value;
  }
  public resetModelArn() {
    this._modelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArnInput() {
    return this._modelArn;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration {
  /**
  * Bedrock Foundation Model configuration to be used for Context Enrichment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#bedrock_foundation_model_configuration BedrockDataSource#bedrock_foundation_model_configuration}
  */
  readonly bedrockFoundationModelConfiguration?: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration;
  /**
  * Enrichment type to be used for the vector database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#type BedrockDataSource#type}
  */
  readonly type?: string;
}

export function bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_foundation_model_configuration: bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationToTerraform(struct!.bedrockFoundationModelConfiguration),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_foundation_model_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct!.bedrockFoundationModelConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration",
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

export class BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockFoundationModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockFoundationModelConfiguration = this._bedrockFoundationModelConfiguration?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockFoundationModelConfiguration.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockFoundationModelConfiguration.internalValue = value.bedrockFoundationModelConfiguration;
      this._type = value.type;
    }
  }

  // bedrock_foundation_model_configuration - computed: true, optional: true, required: false
  private _bedrockFoundationModelConfiguration = new BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationOutputReference(this, "bedrock_foundation_model_configuration");
  public get bedrockFoundationModelConfiguration() {
    return this._bedrockFoundationModelConfiguration;
  }
  public putBedrockFoundationModelConfiguration(value: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration) {
    this._bedrockFoundationModelConfiguration.internalValue = value;
  }
  public resetBedrockFoundationModelConfiguration() {
    this._bedrockFoundationModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockFoundationModelConfigurationInput() {
    return this._bedrockFoundationModelConfiguration.internalValue;
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
export interface BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location {
  /**
  * The location's URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#uri BedrockDataSource#uri}
  */
  readonly uri?: string;
}

export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage {
  /**
  * An Amazon S3 location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#s3_location BedrockDataSource#s3_location}
  */
  readonly s3Location?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location;
}

export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    s3_location: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToTerraform(struct!.s3Location),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    s3_location: {
      value: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToHclTerraform(struct!.s3Location),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = value.s3Location;
    }
  }

  // s3_location - computed: true, optional: true, required: false
  private _s3Location = new BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration {
  /**
  * The function's ARN identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#lambda_arn BedrockDataSource#lambda_arn}
  */
  readonly lambdaArn?: string;
}

export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_arn: cdktn.stringToTerraform(struct!.lambdaArn),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
    }
  }

  // lambda_arn - computed: true, optional: true, required: false
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  public resetLambdaArn() {
    this._lambdaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction {
  /**
  * A Lambda function that processes documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#transformation_lambda_configuration BedrockDataSource#transformation_lambda_configuration}
  */
  readonly transformationLambdaConfiguration?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration;
}

export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    transformation_lambda_configuration: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationToTerraform(struct!.transformationLambdaConfiguration),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    transformation_lambda_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationToHclTerraform(struct!.transformationLambdaConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformationLambdaConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationLambdaConfiguration = this._transformationLambdaConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transformationLambdaConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transformationLambdaConfiguration.internalValue = value.transformationLambdaConfiguration;
    }
  }

  // transformation_lambda_configuration - computed: true, optional: true, required: false
  private _transformationLambdaConfiguration = new BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationOutputReference(this, "transformation_lambda_configuration");
  public get transformationLambdaConfiguration() {
    return this._transformationLambdaConfiguration;
  }
  public putTransformationLambdaConfiguration(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration) {
    this._transformationLambdaConfiguration.internalValue = value;
  }
  public resetTransformationLambdaConfiguration() {
    this._transformationLambdaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationLambdaConfigurationInput() {
    return this._transformationLambdaConfiguration.internalValue;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations {
  /**
  * When the service applies the transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#step_to_apply BedrockDataSource#step_to_apply}
  */
  readonly stepToApply?: string;
  /**
  * A Lambda function that processes documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#transformation_function BedrockDataSource#transformation_function}
  */
  readonly transformationFunction?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction;
}

export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    step_to_apply: cdktn.stringToTerraform(struct!.stepToApply),
    transformation_function: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionToTerraform(struct!.transformationFunction),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    step_to_apply: {
      value: cdktn.stringToHclTerraform(struct!.stepToApply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_function: {
      value: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionToHclTerraform(struct!.transformationFunction),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepToApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepToApply = this._stepToApply;
    }
    if (this._transformationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationFunction = this._transformationFunction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepToApply = undefined;
      this._transformationFunction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepToApply = value.stepToApply;
      this._transformationFunction.internalValue = value.transformationFunction;
    }
  }

  // step_to_apply - computed: true, optional: true, required: false
  private _stepToApply?: string; 
  public get stepToApply() {
    return this.getStringAttribute('step_to_apply');
  }
  public set stepToApply(value: string) {
    this._stepToApply = value;
  }
  public resetStepToApply() {
    this._stepToApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepToApplyInput() {
    return this._stepToApply;
  }

  // transformation_function - computed: true, optional: true, required: false
  private _transformationFunction = new BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionOutputReference(this, "transformation_function");
  public get transformationFunction() {
    return this._transformationFunction;
  }
  public putTransformationFunction(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction) {
    this._transformationFunction.internalValue = value;
  }
  public resetTransformationFunction() {
    this._transformationFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationFunctionInput() {
    return this._transformationFunction.internalValue;
  }
}

export class BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsList extends cdktn.ComplexList {
  public internalValue? : BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations[] | cdktn.IResolvable

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
  public get(index: number): BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsOutputReference {
    return new BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration {
  /**
  * A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#intermediate_storage BedrockDataSource#intermediate_storage}
  */
  readonly intermediateStorage?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage;
  /**
  * A list of Lambda functions that process documents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#transformations BedrockDataSource#transformations}
  */
  readonly transformations?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations[] | cdktn.IResolvable;
}

export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    intermediate_storage: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToTerraform(struct!.intermediateStorage),
    transformations: cdktn.listMapper(bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsToTerraform, false)(struct!.transformations),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    intermediate_storage: {
      value: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToHclTerraform(struct!.intermediateStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage",
    },
    transformations: {
      value: cdktn.listMapperHcl(bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsToHclTerraform, false)(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intermediateStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateStorage = this._intermediateStorage?.internalValue;
    }
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intermediateStorage.internalValue = undefined;
      this._transformations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intermediateStorage.internalValue = value.intermediateStorage;
      this._transformations.internalValue = value.transformations;
    }
  }

  // intermediate_storage - computed: true, optional: true, required: false
  private _intermediateStorage = new BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageOutputReference(this, "intermediate_storage");
  public get intermediateStorage() {
    return this._intermediateStorage;
  }
  public putIntermediateStorage(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage) {
    this._intermediateStorage.internalValue = value;
  }
  public resetIntermediateStorage() {
    this._intermediateStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateStorageInput() {
    return this._intermediateStorage.internalValue;
  }

  // transformations - computed: true, optional: true, required: false
  private _transformations = new BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations[] | cdktn.IResolvable) {
    this._transformations.internalValue = value;
  }
  public resetTransformations() {
    this._transformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration {
  /**
  * Determine how will parsed content be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#parsing_modality BedrockDataSource#parsing_modality}
  */
  readonly parsingModality?: string;
}

export function bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parsing_modality: cdktn.stringToTerraform(struct!.parsingModality),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parsing_modality: {
      value: cdktn.stringToHclTerraform(struct!.parsingModality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parsingModality !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingModality = this._parsingModality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parsingModality = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parsingModality = value.parsingModality;
    }
  }

  // parsing_modality - computed: true, optional: true, required: false
  private _parsingModality?: string; 
  public get parsingModality() {
    return this.getStringAttribute('parsing_modality');
  }
  public set parsingModality(value: string) {
    this._parsingModality = value;
  }
  public resetParsingModality() {
    this._parsingModality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingModalityInput() {
    return this._parsingModality;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt {
  /**
  * Instructions for interpreting the contents of a document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#parsing_prompt_text BedrockDataSource#parsing_prompt_text}
  */
  readonly parsingPromptText?: string;
}

export function bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parsing_prompt_text: cdktn.stringToTerraform(struct!.parsingPromptText),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parsing_prompt_text: {
      value: cdktn.stringToHclTerraform(struct!.parsingPromptText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parsingPromptText !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingPromptText = this._parsingPromptText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parsingPromptText = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parsingPromptText = value.parsingPromptText;
    }
  }

  // parsing_prompt_text - computed: true, optional: true, required: false
  private _parsingPromptText?: string; 
  public get parsingPromptText() {
    return this.getStringAttribute('parsing_prompt_text');
  }
  public set parsingPromptText(value: string) {
    this._parsingPromptText = value;
  }
  public resetParsingPromptText() {
    this._parsingPromptText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingPromptTextInput() {
    return this._parsingPromptText;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration {
  /**
  * The model's ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#model_arn BedrockDataSource#model_arn}
  */
  readonly modelArn?: string;
  /**
  * Determine how will parsed content be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#parsing_modality BedrockDataSource#parsing_modality}
  */
  readonly parsingModality?: string;
  /**
  * Instructions for interpreting the contents of a document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#parsing_prompt BedrockDataSource#parsing_prompt}
  */
  readonly parsingPrompt?: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt;
}

export function bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_arn: cdktn.stringToTerraform(struct!.modelArn),
    parsing_modality: cdktn.stringToTerraform(struct!.parsingModality),
    parsing_prompt: bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToTerraform(struct!.parsingPrompt),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    model_arn: {
      value: cdktn.stringToHclTerraform(struct!.modelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parsing_modality: {
      value: cdktn.stringToHclTerraform(struct!.parsingModality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parsing_prompt: {
      value: bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToHclTerraform(struct!.parsingPrompt),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArn = this._modelArn;
    }
    if (this._parsingModality !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingModality = this._parsingModality;
    }
    if (this._parsingPrompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingPrompt = this._parsingPrompt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelArn = undefined;
      this._parsingModality = undefined;
      this._parsingPrompt.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelArn = value.modelArn;
      this._parsingModality = value.parsingModality;
      this._parsingPrompt.internalValue = value.parsingPrompt;
    }
  }

  // model_arn - computed: true, optional: true, required: false
  private _modelArn?: string; 
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
  public set modelArn(value: string) {
    this._modelArn = value;
  }
  public resetModelArn() {
    this._modelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArnInput() {
    return this._modelArn;
  }

  // parsing_modality - computed: true, optional: true, required: false
  private _parsingModality?: string; 
  public get parsingModality() {
    return this.getStringAttribute('parsing_modality');
  }
  public set parsingModality(value: string) {
    this._parsingModality = value;
  }
  public resetParsingModality() {
    this._parsingModality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingModalityInput() {
    return this._parsingModality;
  }

  // parsing_prompt - computed: true, optional: true, required: false
  private _parsingPrompt = new BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference(this, "parsing_prompt");
  public get parsingPrompt() {
    return this._parsingPrompt;
  }
  public putParsingPrompt(value: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt) {
    this._parsingPrompt.internalValue = value;
  }
  public resetParsingPrompt() {
    this._parsingPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingPromptInput() {
    return this._parsingPrompt.internalValue;
  }
}
export interface BedrockDataSourceVectorIngestionConfigurationParsingConfiguration {
  /**
  * Settings for a Bedrock Data Automation used to parse documents for a data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#bedrock_data_automation_configuration BedrockDataSource#bedrock_data_automation_configuration}
  */
  readonly bedrockDataAutomationConfiguration?: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration;
  /**
  * Settings for a foundation model used to parse documents for a data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#bedrock_foundation_model_configuration BedrockDataSource#bedrock_foundation_model_configuration}
  */
  readonly bedrockFoundationModelConfiguration?: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration;
  /**
  * The parsing strategy for the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#parsing_strategy BedrockDataSource#parsing_strategy}
  */
  readonly parsingStrategy?: string;
}

export function bedrockDataSourceVectorIngestionConfigurationParsingConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationParsingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_data_automation_configuration: bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationToTerraform(struct!.bedrockDataAutomationConfiguration),
    bedrock_foundation_model_configuration: bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToTerraform(struct!.bedrockFoundationModelConfiguration),
    parsing_strategy: cdktn.stringToTerraform(struct!.parsingStrategy),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationParsingConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfigurationParsingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_data_automation_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationToHclTerraform(struct!.bedrockDataAutomationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration",
    },
    bedrock_foundation_model_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct!.bedrockFoundationModelConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration",
    },
    parsing_strategy: {
      value: cdktn.stringToHclTerraform(struct!.parsingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationParsingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfigurationParsingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockDataAutomationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockDataAutomationConfiguration = this._bedrockDataAutomationConfiguration?.internalValue;
    }
    if (this._bedrockFoundationModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockFoundationModelConfiguration = this._bedrockFoundationModelConfiguration?.internalValue;
    }
    if (this._parsingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingStrategy = this._parsingStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfigurationParsingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockDataAutomationConfiguration.internalValue = undefined;
      this._bedrockFoundationModelConfiguration.internalValue = undefined;
      this._parsingStrategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockDataAutomationConfiguration.internalValue = value.bedrockDataAutomationConfiguration;
      this._bedrockFoundationModelConfiguration.internalValue = value.bedrockFoundationModelConfiguration;
      this._parsingStrategy = value.parsingStrategy;
    }
  }

  // bedrock_data_automation_configuration - computed: true, optional: true, required: false
  private _bedrockDataAutomationConfiguration = new BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationOutputReference(this, "bedrock_data_automation_configuration");
  public get bedrockDataAutomationConfiguration() {
    return this._bedrockDataAutomationConfiguration;
  }
  public putBedrockDataAutomationConfiguration(value: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration) {
    this._bedrockDataAutomationConfiguration.internalValue = value;
  }
  public resetBedrockDataAutomationConfiguration() {
    this._bedrockDataAutomationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockDataAutomationConfigurationInput() {
    return this._bedrockDataAutomationConfiguration.internalValue;
  }

  // bedrock_foundation_model_configuration - computed: true, optional: true, required: false
  private _bedrockFoundationModelConfiguration = new BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference(this, "bedrock_foundation_model_configuration");
  public get bedrockFoundationModelConfiguration() {
    return this._bedrockFoundationModelConfiguration;
  }
  public putBedrockFoundationModelConfiguration(value: BedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration) {
    this._bedrockFoundationModelConfiguration.internalValue = value;
  }
  public resetBedrockFoundationModelConfiguration() {
    this._bedrockFoundationModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockFoundationModelConfigurationInput() {
    return this._bedrockFoundationModelConfiguration.internalValue;
  }

  // parsing_strategy - computed: true, optional: true, required: false
  private _parsingStrategy?: string; 
  public get parsingStrategy() {
    return this.getStringAttribute('parsing_strategy');
  }
  public set parsingStrategy(value: string) {
    this._parsingStrategy = value;
  }
  public resetParsingStrategy() {
    this._parsingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingStrategyInput() {
    return this._parsingStrategy;
  }
}
export interface BedrockDataSourceVectorIngestionConfiguration {
  /**
  * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#chunking_configuration BedrockDataSource#chunking_configuration}
  */
  readonly chunkingConfiguration?: BedrockDataSourceVectorIngestionConfigurationChunkingConfiguration;
  /**
  * Additional Enrichment Configuration for example when using GraphRag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#context_enrichment_configuration BedrockDataSource#context_enrichment_configuration}
  */
  readonly contextEnrichmentConfiguration?: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration;
  /**
  * Settings for customizing steps in the data source content ingestion pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#custom_transformation_configuration BedrockDataSource#custom_transformation_configuration}
  */
  readonly customTransformationConfiguration?: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration;
  /**
  * Settings for parsing document contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#parsing_configuration BedrockDataSource#parsing_configuration}
  */
  readonly parsingConfiguration?: BedrockDataSourceVectorIngestionConfigurationParsingConfiguration;
}

export function bedrockDataSourceVectorIngestionConfigurationToTerraform(struct?: BedrockDataSourceVectorIngestionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chunking_configuration: bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationToTerraform(struct!.chunkingConfiguration),
    context_enrichment_configuration: bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationToTerraform(struct!.contextEnrichmentConfiguration),
    custom_transformation_configuration: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToTerraform(struct!.customTransformationConfiguration),
    parsing_configuration: bedrockDataSourceVectorIngestionConfigurationParsingConfigurationToTerraform(struct!.parsingConfiguration),
  }
}


export function bedrockDataSourceVectorIngestionConfigurationToHclTerraform(struct?: BedrockDataSourceVectorIngestionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chunking_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationChunkingConfigurationToHclTerraform(struct!.chunkingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationChunkingConfiguration",
    },
    context_enrichment_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationToHclTerraform(struct!.contextEnrichmentConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration",
    },
    custom_transformation_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToHclTerraform(struct!.customTransformationConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration",
    },
    parsing_configuration: {
      value: bedrockDataSourceVectorIngestionConfigurationParsingConfigurationToHclTerraform(struct!.parsingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "BedrockDataSourceVectorIngestionConfigurationParsingConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockDataSourceVectorIngestionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockDataSourceVectorIngestionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkingConfiguration = this._chunkingConfiguration?.internalValue;
    }
    if (this._contextEnrichmentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextEnrichmentConfiguration = this._contextEnrichmentConfiguration?.internalValue;
    }
    if (this._customTransformationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTransformationConfiguration = this._customTransformationConfiguration?.internalValue;
    }
    if (this._parsingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingConfiguration = this._parsingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockDataSourceVectorIngestionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunkingConfiguration.internalValue = undefined;
      this._contextEnrichmentConfiguration.internalValue = undefined;
      this._customTransformationConfiguration.internalValue = undefined;
      this._parsingConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chunkingConfiguration.internalValue = value.chunkingConfiguration;
      this._contextEnrichmentConfiguration.internalValue = value.contextEnrichmentConfiguration;
      this._customTransformationConfiguration.internalValue = value.customTransformationConfiguration;
      this._parsingConfiguration.internalValue = value.parsingConfiguration;
    }
  }

  // chunking_configuration - computed: true, optional: true, required: false
  private _chunkingConfiguration = new BedrockDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference(this, "chunking_configuration");
  public get chunkingConfiguration() {
    return this._chunkingConfiguration;
  }
  public putChunkingConfiguration(value: BedrockDataSourceVectorIngestionConfigurationChunkingConfiguration) {
    this._chunkingConfiguration.internalValue = value;
  }
  public resetChunkingConfiguration() {
    this._chunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingConfigurationInput() {
    return this._chunkingConfiguration.internalValue;
  }

  // context_enrichment_configuration - computed: true, optional: true, required: false
  private _contextEnrichmentConfiguration = new BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationOutputReference(this, "context_enrichment_configuration");
  public get contextEnrichmentConfiguration() {
    return this._contextEnrichmentConfiguration;
  }
  public putContextEnrichmentConfiguration(value: BedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration) {
    this._contextEnrichmentConfiguration.internalValue = value;
  }
  public resetContextEnrichmentConfiguration() {
    this._contextEnrichmentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextEnrichmentConfigurationInput() {
    return this._contextEnrichmentConfiguration.internalValue;
  }

  // custom_transformation_configuration - computed: true, optional: true, required: false
  private _customTransformationConfiguration = new BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationOutputReference(this, "custom_transformation_configuration");
  public get customTransformationConfiguration() {
    return this._customTransformationConfiguration;
  }
  public putCustomTransformationConfiguration(value: BedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration) {
    this._customTransformationConfiguration.internalValue = value;
  }
  public resetCustomTransformationConfiguration() {
    this._customTransformationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTransformationConfigurationInput() {
    return this._customTransformationConfiguration.internalValue;
  }

  // parsing_configuration - computed: true, optional: true, required: false
  private _parsingConfiguration = new BedrockDataSourceVectorIngestionConfigurationParsingConfigurationOutputReference(this, "parsing_configuration");
  public get parsingConfiguration() {
    return this._parsingConfiguration;
  }
  public putParsingConfiguration(value: BedrockDataSourceVectorIngestionConfigurationParsingConfiguration) {
    this._parsingConfiguration.internalValue = value;
  }
  public resetParsingConfiguration() {
    this._parsingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingConfigurationInput() {
    return this._parsingConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source awscc_bedrock_data_source}
*/
export class BedrockDataSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockDataSource to import
  * @param importFromId The id of the existing BedrockDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/bedrock_data_source awscc_bedrock_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_bedrock_data_source',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataDeletionPolicy = config.dataDeletionPolicy;
    this._dataSourceConfiguration.internalValue = config.dataSourceConfiguration;
    this._description = config.description;
    this._knowledgeBaseId = config.knowledgeBaseId;
    this._name = config.name;
    this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
    this._vectorIngestionConfiguration.internalValue = config.vectorIngestionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_deletion_policy - computed: true, optional: true, required: false
  private _dataDeletionPolicy?: string; 
  public get dataDeletionPolicy() {
    return this.getStringAttribute('data_deletion_policy');
  }
  public set dataDeletionPolicy(value: string) {
    this._dataDeletionPolicy = value;
  }
  public resetDataDeletionPolicy() {
    this._dataDeletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDeletionPolicyInput() {
    return this._dataDeletionPolicy;
  }

  // data_source_configuration - computed: false, optional: false, required: true
  private _dataSourceConfiguration = new BedrockDataSourceDataSourceConfigurationOutputReference(this, "data_source_configuration");
  public get dataSourceConfiguration() {
    return this._dataSourceConfiguration;
  }
  public putDataSourceConfiguration(value: BedrockDataSourceDataSourceConfiguration) {
    this._dataSourceConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceConfigurationInput() {
    return this._dataSourceConfiguration.internalValue;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // data_source_status - computed: true, optional: false, required: false
  public get dataSourceStatus() {
    return this.getStringAttribute('data_source_status');
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

  // failure_reasons - computed: true, optional: false, required: false
  public get failureReasons() {
    return this.getListAttribute('failure_reasons');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
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

  // server_side_encryption_configuration - computed: true, optional: true, required: false
  private _serverSideEncryptionConfiguration = new BedrockDataSourceServerSideEncryptionConfigurationOutputReference(this, "server_side_encryption_configuration");
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: BedrockDataSourceServerSideEncryptionConfiguration) {
    this._serverSideEncryptionConfiguration.internalValue = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vector_ingestion_configuration - computed: true, optional: true, required: false
  private _vectorIngestionConfiguration = new BedrockDataSourceVectorIngestionConfigurationOutputReference(this, "vector_ingestion_configuration");
  public get vectorIngestionConfiguration() {
    return this._vectorIngestionConfiguration;
  }
  public putVectorIngestionConfiguration(value: BedrockDataSourceVectorIngestionConfiguration) {
    this._vectorIngestionConfiguration.internalValue = value;
  }
  public resetVectorIngestionConfiguration() {
    this._vectorIngestionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIngestionConfigurationInput() {
    return this._vectorIngestionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_deletion_policy: cdktn.stringToTerraform(this._dataDeletionPolicy),
      data_source_configuration: bedrockDataSourceDataSourceConfigurationToTerraform(this._dataSourceConfiguration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      knowledge_base_id: cdktn.stringToTerraform(this._knowledgeBaseId),
      name: cdktn.stringToTerraform(this._name),
      server_side_encryption_configuration: bedrockDataSourceServerSideEncryptionConfigurationToTerraform(this._serverSideEncryptionConfiguration.internalValue),
      vector_ingestion_configuration: bedrockDataSourceVectorIngestionConfigurationToTerraform(this._vectorIngestionConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_deletion_policy: {
        value: cdktn.stringToHclTerraform(this._dataDeletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_configuration: {
        value: bedrockDataSourceDataSourceConfigurationToHclTerraform(this._dataSourceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockDataSourceDataSourceConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      knowledge_base_id: {
        value: cdktn.stringToHclTerraform(this._knowledgeBaseId),
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
      server_side_encryption_configuration: {
        value: bedrockDataSourceServerSideEncryptionConfigurationToHclTerraform(this._serverSideEncryptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockDataSourceServerSideEncryptionConfiguration",
      },
      vector_ingestion_configuration: {
        value: bedrockDataSourceVectorIngestionConfigurationToHclTerraform(this._vectorIngestionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockDataSourceVectorIngestionConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
