// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_event_source_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccLambdaEventSourceMappingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_event_source_mapping#id DataAwsccLambdaEventSourceMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs {
}

export function dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsToTerraform(struct?: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference {
    return new DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs {
}

export function dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsToTerraform(struct?: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}

export class DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference {
    return new DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig {
}

export function dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_configs - computed: true, optional: false, required: false
  private _accessConfigs = new DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList(this, "access_configs", false);
  public get accessConfigs() {
    return this._accessConfigs;
  }

  // event_record_format - computed: true, optional: false, required: false
  public get eventRecordFormat() {
    return this.getStringAttribute('event_record_format');
  }

  // schema_registry_uri - computed: true, optional: false, required: false
  public get schemaRegistryUri() {
    return this.getStringAttribute('schema_registry_uri');
  }

  // schema_validation_configs - computed: true, optional: false, required: false
  private _schemaValidationConfigs = new DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList(this, "schema_validation_configs", false);
  public get schemaValidationConfigs() {
    return this._schemaValidationConfigs;
  }
}
export interface DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig {
}

export function dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_group_id - computed: true, optional: false, required: false
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }

  // schema_registry_config - computed: true, optional: false, required: false
  private _schemaRegistryConfig = new DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(this, "schema_registry_config");
  public get schemaRegistryConfig() {
    return this._schemaRegistryConfig;
  }
}
export interface DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure {
}

export function dataAwsccLambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingDestinationConfigOnFailureToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }
}
export interface DataAwsccLambdaEventSourceMappingDestinationConfig {
}

export function dataAwsccLambdaEventSourceMappingDestinationConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingDestinationConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingDestinationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // on_failure - computed: true, optional: false, required: false
  private _onFailure = new DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
}
export interface DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig {
}

export function dataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection_name - computed: true, optional: false, required: false
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // full_document - computed: true, optional: false, required: false
  public get fullDocument() {
    return this.getStringAttribute('full_document');
  }
}
export interface DataAwsccLambdaEventSourceMappingFilterCriteriaFilters {
}

export function dataAwsccLambdaEventSourceMappingFilterCriteriaFiltersToTerraform(struct?: DataAwsccLambdaEventSourceMappingFilterCriteriaFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingFilterCriteriaFiltersToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingFilterCriteriaFilters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLambdaEventSourceMappingFilterCriteriaFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingFilterCriteriaFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference {
    return new DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLambdaEventSourceMappingFilterCriteria {
}

export function dataAwsccLambdaEventSourceMappingFilterCriteriaToTerraform(struct?: DataAwsccLambdaEventSourceMappingFilterCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingFilterCriteriaToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingFilterCriteria): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingFilterCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingFilterCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
}
export interface DataAwsccLambdaEventSourceMappingLoggingConfig {
}

export function dataAwsccLambdaEventSourceMappingLoggingConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingLoggingConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // system_log_level - computed: true, optional: false, required: false
  public get systemLogLevel() {
    return this.getStringAttribute('system_log_level');
  }
}
export interface DataAwsccLambdaEventSourceMappingMetricsConfig {
}

export function dataAwsccLambdaEventSourceMappingMetricsConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingMetricsConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingMetricsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }
}
export interface DataAwsccLambdaEventSourceMappingProvisionedPollerConfig {
}

export function dataAwsccLambdaEventSourceMappingProvisionedPollerConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingProvisionedPollerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingProvisionedPollerConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingProvisionedPollerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingProvisionedPollerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingProvisionedPollerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_pollers - computed: true, optional: false, required: false
  public get maximumPollers() {
    return this.getNumberAttribute('maximum_pollers');
  }

  // minimum_pollers - computed: true, optional: false, required: false
  public get minimumPollers() {
    return this.getNumberAttribute('minimum_pollers');
  }

  // poller_group_name - computed: true, optional: false, required: false
  public get pollerGroupName() {
    return this.getStringAttribute('poller_group_name');
  }
}
export interface DataAwsccLambdaEventSourceMappingScalingConfig {
}

export function dataAwsccLambdaEventSourceMappingScalingConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingScalingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingScalingConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingScalingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingScalingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_concurrency - computed: true, optional: false, required: false
  public get maximumConcurrency() {
    return this.getNumberAttribute('maximum_concurrency');
  }
}
export interface DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints {
}

export function dataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kafka_bootstrap_servers - computed: true, optional: false, required: false
  public get kafkaBootstrapServers() {
    return this.getListAttribute('kafka_bootstrap_servers');
  }
}
export interface DataAwsccLambdaEventSourceMappingSelfManagedEventSource {
}

export function dataAwsccLambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedEventSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingSelfManagedEventSourceToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedEventSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingSelfManagedEventSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingSelfManagedEventSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
}
export interface DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs {
}

export function dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference {
    return new DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs {
}

export function dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
}

export class DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference {
    return new DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig {
}

export function dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_configs - computed: true, optional: false, required: false
  private _accessConfigs = new DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList(this, "access_configs", false);
  public get accessConfigs() {
    return this._accessConfigs;
  }

  // event_record_format - computed: true, optional: false, required: false
  public get eventRecordFormat() {
    return this.getStringAttribute('event_record_format');
  }

  // schema_registry_uri - computed: true, optional: false, required: false
  public get schemaRegistryUri() {
    return this.getStringAttribute('schema_registry_uri');
  }

  // schema_validation_configs - computed: true, optional: false, required: false
  private _schemaValidationConfigs = new DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList(this, "schema_validation_configs", false);
  public get schemaValidationConfigs() {
    return this._schemaValidationConfigs;
  }
}
export interface DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig {
}

export function dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_group_id - computed: true, optional: false, required: false
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }

  // schema_registry_config - computed: true, optional: false, required: false
  private _schemaRegistryConfig = new DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(this, "schema_registry_config");
  public get schemaRegistryConfig() {
    return this._schemaRegistryConfig;
  }
}
export interface DataAwsccLambdaEventSourceMappingSourceAccessConfigurations {
}

export function dataAwsccLambdaEventSourceMappingSourceAccessConfigurationsToTerraform(struct?: DataAwsccLambdaEventSourceMappingSourceAccessConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingSourceAccessConfigurationsToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingSourceAccessConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLambdaEventSourceMappingSourceAccessConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingSourceAccessConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference {
    return new DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccLambdaEventSourceMappingTags {
}

export function dataAwsccLambdaEventSourceMappingTagsToTerraform(struct?: DataAwsccLambdaEventSourceMappingTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccLambdaEventSourceMappingTagsToHclTerraform(struct?: DataAwsccLambdaEventSourceMappingTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccLambdaEventSourceMappingTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccLambdaEventSourceMappingTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccLambdaEventSourceMappingTags | undefined) {
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

export class DataAwsccLambdaEventSourceMappingTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccLambdaEventSourceMappingTagsOutputReference {
    return new DataAwsccLambdaEventSourceMappingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_event_source_mapping awscc_lambda_event_source_mapping}
*/
export class DataAwsccLambdaEventSourceMapping extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_lambda_event_source_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccLambdaEventSourceMapping resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccLambdaEventSourceMapping to import
  * @param importFromId The id of the existing DataAwsccLambdaEventSourceMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccLambdaEventSourceMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_event_source_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/lambda_event_source_mapping awscc_lambda_event_source_mapping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLambdaEventSourceMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLambdaEventSourceMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_lambda_event_source_mapping',
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

  // amazon_managed_kafka_event_source_config - computed: true, optional: false, required: false
  private _amazonManagedKafkaEventSourceConfig = new DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference(this, "amazon_managed_kafka_event_source_config");
  public get amazonManagedKafkaEventSourceConfig() {
    return this._amazonManagedKafkaEventSourceConfig;
  }

  // batch_size - computed: true, optional: false, required: false
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }

  // bisect_batch_on_function_error - computed: true, optional: false, required: false
  public get bisectBatchOnFunctionError() {
    return this.getBooleanAttribute('bisect_batch_on_function_error');
  }

  // destination_config - computed: true, optional: false, required: false
  private _destinationConfig = new DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }

  // document_db_event_source_config - computed: true, optional: false, required: false
  private _documentDbEventSourceConfig = new DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference(this, "document_db_event_source_config");
  public get documentDbEventSourceConfig() {
    return this._documentDbEventSourceConfig;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // event_source_arn - computed: true, optional: false, required: false
  public get eventSourceArn() {
    return this.getStringAttribute('event_source_arn');
  }

  // event_source_mapping_arn - computed: true, optional: false, required: false
  public get eventSourceMappingArn() {
    return this.getStringAttribute('event_source_mapping_arn');
  }

  // event_source_mapping_id - computed: true, optional: false, required: false
  public get eventSourceMappingId() {
    return this.getStringAttribute('event_source_mapping_id');
  }

  // filter_criteria - computed: true, optional: false, required: false
  private _filterCriteria = new DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // function_response_types - computed: true, optional: false, required: false
  public get functionResponseTypes() {
    return this.getListAttribute('function_response_types');
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

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // logging_config - computed: true, optional: false, required: false
  private _loggingConfig = new DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }

  // maximum_batching_window_in_seconds - computed: true, optional: false, required: false
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }

  // maximum_record_age_in_seconds - computed: true, optional: false, required: false
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }

  // maximum_retry_attempts - computed: true, optional: false, required: false
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }

  // metrics_config - computed: true, optional: false, required: false
  private _metricsConfig = new DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference(this, "metrics_config");
  public get metricsConfig() {
    return this._metricsConfig;
  }

  // parallelization_factor - computed: true, optional: false, required: false
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }

  // provisioned_poller_config - computed: true, optional: false, required: false
  private _provisionedPollerConfig = new DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference(this, "provisioned_poller_config");
  public get provisionedPollerConfig() {
    return this._provisionedPollerConfig;
  }

  // queues - computed: true, optional: false, required: false
  public get queues() {
    return this.getListAttribute('queues');
  }

  // scaling_config - computed: true, optional: false, required: false
  private _scalingConfig = new DataAwsccLambdaEventSourceMappingScalingConfigOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }

  // self_managed_event_source - computed: true, optional: false, required: false
  private _selfManagedEventSource = new DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference(this, "self_managed_event_source");
  public get selfManagedEventSource() {
    return this._selfManagedEventSource;
  }

  // self_managed_kafka_event_source_config - computed: true, optional: false, required: false
  private _selfManagedKafkaEventSourceConfig = new DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference(this, "self_managed_kafka_event_source_config");
  public get selfManagedKafkaEventSourceConfig() {
    return this._selfManagedKafkaEventSourceConfig;
  }

  // source_access_configurations - computed: true, optional: false, required: false
  private _sourceAccessConfigurations = new DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList(this, "source_access_configurations", false);
  public get sourceAccessConfigurations() {
    return this._sourceAccessConfigurations;
  }

  // starting_position - computed: true, optional: false, required: false
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }

  // starting_position_timestamp - computed: true, optional: false, required: false
  public get startingPositionTimestamp() {
    return this.getNumberAttribute('starting_position_timestamp');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccLambdaEventSourceMappingTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return this.getListAttribute('topics');
  }

  // tumbling_window_in_seconds - computed: true, optional: false, required: false
  public get tumblingWindowInSeconds() {
    return this.getNumberAttribute('tumbling_window_in_seconds');
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
