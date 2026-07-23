// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/bedrock_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBedrockDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/bedrock_data_source#id DataAwsccBedrockDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclusion_filters - computed: true, optional: false, required: false
  public get exclusionFilters() {
    return this.getListAttribute('exclusion_filters');
  }

  // inclusion_filters - computed: true, optional: false, required: false
  public get inclusionFilters() {
    return this.getListAttribute('inclusion_filters');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference {
    return new DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern_object_filter - computed: true, optional: false, required: false
  private _patternObjectFilter = new DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference(this, "pattern_object_filter");
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // credentials_secret_arn - computed: true, optional: false, required: false
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // host_url - computed: true, optional: false, required: false
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawler_configuration - computed: true, optional: false, required: false
  private _crawlerConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationOutputReference(this, "crawler_configuration");
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }

  // source_configuration - computed: true, optional: false, required: false
  private _sourceConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deletion_protection_status - computed: true, optional: false, required: false
  public get deletionProtectionStatus() {
    return this.getStringAttribute('deletion_protection_status');
  }

  // deletion_protection_threshold - computed: true, optional: false, required: false
  public get deletionProtectionThreshold() {
    return this.getNumberAttribute('deletion_protection_threshold');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_extraction_status - computed: true, optional: false, required: false
  public get audioExtractionStatus() {
    return this.getStringAttribute('audio_extraction_status');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_extraction_status - computed: true, optional: false, required: false
  public get imageExtractionStatus() {
    return this.getStringAttribute('image_extraction_status');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // video_extraction_status - computed: true, optional: false, required: false
  public get videoExtractionStatus() {
    return this.getStringAttribute('video_extraction_status');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_extraction_configuration - computed: true, optional: false, required: false
  private _audioExtractionConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(this, "audio_extraction_configuration");
  public get audioExtractionConfiguration() {
    return this._audioExtractionConfiguration;
  }

  // image_extraction_configuration - computed: true, optional: false, required: false
  private _imageExtractionConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationImageExtractionConfigurationOutputReference(this, "image_extraction_configuration");
  public get imageExtractionConfiguration() {
    return this._imageExtractionConfiguration;
  }

  // video_extraction_configuration - computed: true, optional: false, required: false
  private _videoExtractionConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(this, "video_extraction_configuration");
  public get videoExtractionConfiguration() {
    return this._videoExtractionConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_parameters - computed: true, optional: false, required: false
  public get connectorParameters() {
    return this.getStringAttribute('connector_parameters');
  }

  // deletion_protection_configuration - computed: true, optional: false, required: false
  private _deletionProtectionConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationDeletionProtectionConfigurationOutputReference(this, "deletion_protection_configuration");
  public get deletionProtectionConfiguration() {
    return this._deletionProtectionConfiguration;
  }

  // media_extraction_configuration - computed: true, optional: false, required: false
  private _mediaExtractionConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationMediaExtractionConfigurationOutputReference(this, "media_extraction_configuration");
  public get mediaExtractionConfiguration() {
    return this._mediaExtractionConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationS3Configuration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationS3ConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationS3Configuration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationS3ConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationS3Configuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationS3Configuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // bucket_owner_account_id - computed: true, optional: false, required: false
  public get bucketOwnerAccountId() {
    return this.getStringAttribute('bucket_owner_account_id');
  }

  // inclusion_prefixes - computed: true, optional: false, required: false
  public get inclusionPrefixes() {
    return this.getListAttribute('inclusion_prefixes');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclusion_filters - computed: true, optional: false, required: false
  public get exclusionFilters() {
    return this.getListAttribute('exclusion_filters');
  }

  // inclusion_filters - computed: true, optional: false, required: false
  public get inclusionFilters() {
    return this.getListAttribute('inclusion_filters');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference {
    return new DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern_object_filter - computed: true, optional: false, required: false
  private _patternObjectFilter = new DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference(this, "pattern_object_filter");
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // credentials_secret_arn - computed: true, optional: false, required: false
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }

  // host_url - computed: true, optional: false, required: false
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawler_configuration - computed: true, optional: false, required: false
  private _crawlerConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationOutputReference(this, "crawler_configuration");
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }

  // source_configuration - computed: true, optional: false, required: false
  private _sourceConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclusion_filters - computed: true, optional: false, required: false
  public get exclusionFilters() {
    return this.getListAttribute('exclusion_filters');
  }

  // inclusion_filters - computed: true, optional: false, required: false
  public get inclusionFilters() {
    return this.getListAttribute('inclusion_filters');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference {
    return new DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern_object_filter - computed: true, optional: false, required: false
  private _patternObjectFilter = new DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference(this, "pattern_object_filter");
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // credentials_secret_arn - computed: true, optional: false, required: false
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // site_urls - computed: true, optional: false, required: false
  public get siteUrls() {
    return this.getListAttribute('site_urls');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawler_configuration - computed: true, optional: false, required: false
  private _crawlerConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationOutputReference(this, "crawler_configuration");
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }

  // source_configuration - computed: true, optional: false, required: false
  private _sourceConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_pages - computed: true, optional: false, required: false
  public get maxPages() {
    return this.getNumberAttribute('max_pages');
  }

  // rate_limit - computed: true, optional: false, required: false
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawler_limits - computed: true, optional: false, required: false
  private _crawlerLimits = new DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsOutputReference(this, "crawler_limits");
  public get crawlerLimits() {
    return this._crawlerLimits;
  }

  // exclusion_filters - computed: true, optional: false, required: false
  public get exclusionFilters() {
    return this.getListAttribute('exclusion_filters');
  }

  // inclusion_filters - computed: true, optional: false, required: false
  public get inclusionFilters() {
    return this.getListAttribute('inclusion_filters');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // user_agent - computed: true, optional: false, required: false
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }

  // user_agent_header - computed: true, optional: false, required: false
  public get userAgentHeader() {
    return this.getStringAttribute('user_agent_header');
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference {
    return new DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // seed_urls - computed: true, optional: false, required: false
  private _seedUrls = new DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList(this, "seed_urls", false);
  public get seedUrls() {
    return this._seedUrls;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url_configuration - computed: true, optional: false, required: false
  private _urlConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationOutputReference(this, "url_configuration");
  public get urlConfiguration() {
    return this._urlConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfigurationWebConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfigurationWebConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfigurationWebConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawler_configuration - computed: true, optional: false, required: false
  private _crawlerConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationOutputReference(this, "crawler_configuration");
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }

  // source_configuration - computed: true, optional: false, required: false
  private _sourceConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceDataSourceConfiguration {
}

export function dataAwsccBedrockDataSourceDataSourceConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceDataSourceConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceDataSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceDataSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceDataSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceDataSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confluence_configuration - computed: true, optional: false, required: false
  private _confluenceConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference(this, "confluence_configuration");
  public get confluenceConfiguration() {
    return this._confluenceConfiguration;
  }

  // managed_knowledge_base_connector_configuration - computed: true, optional: false, required: false
  private _managedKnowledgeBaseConnectorConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationManagedKnowledgeBaseConnectorConfigurationOutputReference(this, "managed_knowledge_base_connector_configuration");
  public get managedKnowledgeBaseConnectorConfiguration() {
    return this._managedKnowledgeBaseConnectorConfiguration;
  }

  // s3_configuration - computed: true, optional: false, required: false
  private _s3Configuration = new DataAwsccBedrockDataSourceDataSourceConfigurationS3ConfigurationOutputReference(this, "s3_configuration");
  public get s3Configuration() {
    return this._s3Configuration;
  }

  // salesforce_configuration - computed: true, optional: false, required: false
  private _salesforceConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference(this, "salesforce_configuration");
  public get salesforceConfiguration() {
    return this._salesforceConfiguration;
  }

  // share_point_configuration - computed: true, optional: false, required: false
  private _sharePointConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationSharePointConfigurationOutputReference(this, "share_point_configuration");
  public get sharePointConfiguration() {
    return this._sharePointConfiguration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // web_configuration - computed: true, optional: false, required: false
  private _webConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationWebConfigurationOutputReference(this, "web_configuration");
  public get webConfiguration() {
    return this._webConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceServerSideEncryptionConfiguration {
}

export function dataAwsccBedrockDataSourceServerSideEncryptionConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceServerSideEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceServerSideEncryptionConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceServerSideEncryptionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceServerSideEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceServerSideEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceServerSideEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }

  // overlap_percentage - computed: true, optional: false, required: false
  public get overlapPercentage() {
    return this.getNumberAttribute('overlap_percentage');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference {
    return new DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level_configurations - computed: true, optional: false, required: false
  private _levelConfigurations = new DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList(this, "level_configurations", false);
  public get levelConfigurations() {
    return this._levelConfigurations;
  }

  // overlap_tokens - computed: true, optional: false, required: false
  public get overlapTokens() {
    return this.getNumberAttribute('overlap_tokens');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // breakpoint_percentile_threshold - computed: true, optional: false, required: false
  public get breakpointPercentileThreshold() {
    return this.getNumberAttribute('breakpoint_percentile_threshold');
  }

  // buffer_size - computed: true, optional: false, required: false
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }

  // max_tokens - computed: true, optional: false, required: false
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chunking_strategy - computed: true, optional: false, required: false
  public get chunkingStrategy() {
    return this.getStringAttribute('chunking_strategy');
  }

  // fixed_size_chunking_configuration - computed: true, optional: false, required: false
  private _fixedSizeChunkingConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference(this, "fixed_size_chunking_configuration");
  public get fixedSizeChunkingConfiguration() {
    return this._fixedSizeChunkingConfiguration;
  }

  // hierarchical_chunking_configuration - computed: true, optional: false, required: false
  private _hierarchicalChunkingConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference(this, "hierarchical_chunking_configuration");
  public get hierarchicalChunkingConfiguration() {
    return this._hierarchicalChunkingConfiguration;
  }

  // semantic_chunking_configuration - computed: true, optional: false, required: false
  private _semanticChunkingConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference(this, "semantic_chunking_configuration");
  public get semanticChunkingConfiguration() {
    return this._semanticChunkingConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enrichment_strategy_configuration - computed: true, optional: false, required: false
  private _enrichmentStrategyConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationEnrichmentStrategyConfigurationOutputReference(this, "enrichment_strategy_configuration");
  public get enrichmentStrategyConfiguration() {
    return this._enrichmentStrategyConfiguration;
  }

  // model_arn - computed: true, optional: false, required: false
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bedrock_foundation_model_configuration - computed: true, optional: false, required: false
  private _bedrockFoundationModelConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationBedrockFoundationModelConfigurationOutputReference(this, "bedrock_foundation_model_configuration");
  public get bedrockFoundationModelConfiguration() {
    return this._bedrockFoundationModelConfiguration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_location - computed: true, optional: false, required: false
  private _s3Location = new DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // transformation_lambda_configuration - computed: true, optional: false, required: false
  private _transformationLambdaConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionTransformationLambdaConfigurationOutputReference(this, "transformation_lambda_configuration");
  public get transformationLambdaConfiguration() {
    return this._transformationLambdaConfiguration;
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // step_to_apply - computed: true, optional: false, required: false
  public get stepToApply() {
    return this.getStringAttribute('step_to_apply');
  }

  // transformation_function - computed: true, optional: false, required: false
  private _transformationFunction = new DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsTransformationFunctionOutputReference(this, "transformation_function");
  public get transformationFunction() {
    return this._transformationFunction;
  }
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsOutputReference {
    return new DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intermediate_storage - computed: true, optional: false, required: false
  private _intermediateStorage = new DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageOutputReference(this, "intermediate_storage");
  public get intermediateStorage() {
    return this._intermediateStorage;
  }

  // transformations - computed: true, optional: false, required: false
  private _transformations = new DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parsing_modality - computed: true, optional: false, required: false
  public get parsingModality() {
    return this.getStringAttribute('parsing_modality');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parsing_prompt_text - computed: true, optional: false, required: false
  public get parsingPromptText() {
    return this.getStringAttribute('parsing_prompt_text');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // model_arn - computed: true, optional: false, required: false
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }

  // parsing_modality - computed: true, optional: false, required: false
  public get parsingModality() {
    return this.getStringAttribute('parsing_modality');
  }

  // parsing_prompt - computed: true, optional: false, required: false
  private _parsingPrompt = new DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference(this, "parsing_prompt");
  public get parsingPrompt() {
    return this._parsingPrompt;
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bedrock_data_automation_configuration - computed: true, optional: false, required: false
  private _bedrockDataAutomationConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockDataAutomationConfigurationOutputReference(this, "bedrock_data_automation_configuration");
  public get bedrockDataAutomationConfiguration() {
    return this._bedrockDataAutomationConfiguration;
  }

  // bedrock_foundation_model_configuration - computed: true, optional: false, required: false
  private _bedrockFoundationModelConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference(this, "bedrock_foundation_model_configuration");
  public get bedrockFoundationModelConfiguration() {
    return this._bedrockFoundationModelConfiguration;
  }

  // parsing_strategy - computed: true, optional: false, required: false
  public get parsingStrategy() {
    return this.getStringAttribute('parsing_strategy');
  }
}
export interface DataAwsccBedrockDataSourceVectorIngestionConfiguration {
}

export function dataAwsccBedrockDataSourceVectorIngestionConfigurationToTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBedrockDataSourceVectorIngestionConfigurationToHclTerraform(struct?: DataAwsccBedrockDataSourceVectorIngestionConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBedrockDataSourceVectorIngestionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBedrockDataSourceVectorIngestionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBedrockDataSourceVectorIngestionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chunking_configuration - computed: true, optional: false, required: false
  private _chunkingConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference(this, "chunking_configuration");
  public get chunkingConfiguration() {
    return this._chunkingConfiguration;
  }

  // context_enrichment_configuration - computed: true, optional: false, required: false
  private _contextEnrichmentConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationContextEnrichmentConfigurationOutputReference(this, "context_enrichment_configuration");
  public get contextEnrichmentConfiguration() {
    return this._contextEnrichmentConfiguration;
  }

  // custom_transformation_configuration - computed: true, optional: false, required: false
  private _customTransformationConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationCustomTransformationConfigurationOutputReference(this, "custom_transformation_configuration");
  public get customTransformationConfiguration() {
    return this._customTransformationConfiguration;
  }

  // parsing_configuration - computed: true, optional: false, required: false
  private _parsingConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationParsingConfigurationOutputReference(this, "parsing_configuration");
  public get parsingConfiguration() {
    return this._parsingConfiguration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/bedrock_data_source awscc_bedrock_data_source}
*/
export class DataAwsccBedrockDataSource extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_bedrock_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBedrockDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBedrockDataSource to import
  * @param importFromId The id of the existing DataAwsccBedrockDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/bedrock_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBedrockDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrock_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/bedrock_data_source awscc_bedrock_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBedrockDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBedrockDataSourceConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_deletion_policy - computed: true, optional: false, required: false
  public get dataDeletionPolicy() {
    return this.getStringAttribute('data_deletion_policy');
  }

  // data_source_configuration - computed: true, optional: false, required: false
  private _dataSourceConfiguration = new DataAwsccBedrockDataSourceDataSourceConfigurationOutputReference(this, "data_source_configuration");
  public get dataSourceConfiguration() {
    return this._dataSourceConfiguration;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // data_source_status - computed: true, optional: false, required: false
  public get dataSourceStatus() {
    return this.getStringAttribute('data_source_status');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // failure_reasons - computed: true, optional: false, required: false
  public get failureReasons() {
    return this.getListAttribute('failure_reasons');
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

  // knowledge_base_id - computed: true, optional: false, required: false
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server_side_encryption_configuration - computed: true, optional: false, required: false
  private _serverSideEncryptionConfiguration = new DataAwsccBedrockDataSourceServerSideEncryptionConfigurationOutputReference(this, "server_side_encryption_configuration");
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vector_ingestion_configuration - computed: true, optional: false, required: false
  private _vectorIngestionConfiguration = new DataAwsccBedrockDataSourceVectorIngestionConfigurationOutputReference(this, "vector_ingestion_configuration");
  public get vectorIngestionConfiguration() {
    return this._vectorIngestionConfiguration;
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
