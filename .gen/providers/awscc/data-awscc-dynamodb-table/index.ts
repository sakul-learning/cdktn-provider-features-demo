// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dynamodb_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDynamodbTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dynamodb_table#id DataAwsccDynamodbTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDynamodbTableAttributeDefinitions {
}

export function dataAwsccDynamodbTableAttributeDefinitionsToTerraform(struct?: DataAwsccDynamodbTableAttributeDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableAttributeDefinitionsToHclTerraform(struct?: DataAwsccDynamodbTableAttributeDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableAttributeDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDynamodbTableAttributeDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableAttributeDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
}

export class DataAwsccDynamodbTableAttributeDefinitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbTableAttributeDefinitionsOutputReference {
    return new DataAwsccDynamodbTableAttributeDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbTableContributorInsightsSpecification {
}

export function dataAwsccDynamodbTableContributorInsightsSpecificationToTerraform(struct?: DataAwsccDynamodbTableContributorInsightsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableContributorInsightsSpecificationToHclTerraform(struct?: DataAwsccDynamodbTableContributorInsightsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableContributorInsightsSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableContributorInsightsSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification {
}

export function dataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationToTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationToHclTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema {
}

export function dataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaToTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaToHclTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export class DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference {
    return new DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput {
}

export function dataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputToTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputToHclTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_read_request_units - computed: true, optional: false, required: false
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }

  // max_write_request_units - computed: true, optional: false, required: false
  public get maxWriteRequestUnits() {
    return this.getNumberAttribute('max_write_request_units');
  }
}
export interface DataAwsccDynamodbTableGlobalSecondaryIndexesProjection {
}

export function dataAwsccDynamodbTableGlobalSecondaryIndexesProjectionToTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableGlobalSecondaryIndexesProjectionToHclTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableGlobalSecondaryIndexesProjection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableGlobalSecondaryIndexesProjection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
}
export interface DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput {
}

export function dataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputToTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputToHclTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_capacity_units - computed: true, optional: false, required: false
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }

  // write_capacity_units - computed: true, optional: false, required: false
  public get writeCapacityUnits() {
    return this.getNumberAttribute('write_capacity_units');
  }
}
export interface DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput {
}

export function dataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputToTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputToHclTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_units_per_second - computed: true, optional: false, required: false
  public get readUnitsPerSecond() {
    return this.getNumberAttribute('read_units_per_second');
  }

  // write_units_per_second - computed: true, optional: false, required: false
  public get writeUnitsPerSecond() {
    return this.getNumberAttribute('write_units_per_second');
  }
}
export interface DataAwsccDynamodbTableGlobalSecondaryIndexes {
}

export function dataAwsccDynamodbTableGlobalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableGlobalSecondaryIndexesToHclTerraform(struct?: DataAwsccDynamodbTableGlobalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDynamodbTableGlobalSecondaryIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableGlobalSecondaryIndexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contributor_insights_specification - computed: true, optional: false, required: false
  private _contributorInsightsSpecification = new DataAwsccDynamodbTableGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(this, "contributor_insights_specification");
  public get contributorInsightsSpecification() {
    return this._contributorInsightsSpecification;
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // key_schema - computed: true, optional: false, required: false
  private _keySchema = new DataAwsccDynamodbTableGlobalSecondaryIndexesKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }

  // on_demand_throughput - computed: true, optional: false, required: false
  private _onDemandThroughput = new DataAwsccDynamodbTableGlobalSecondaryIndexesOnDemandThroughputOutputReference(this, "on_demand_throughput");
  public get onDemandThroughput() {
    return this._onDemandThroughput;
  }

  // projection - computed: true, optional: false, required: false
  private _projection = new DataAwsccDynamodbTableGlobalSecondaryIndexesProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }

  // provisioned_throughput - computed: true, optional: false, required: false
  private _provisionedThroughput = new DataAwsccDynamodbTableGlobalSecondaryIndexesProvisionedThroughputOutputReference(this, "provisioned_throughput");
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }

  // warm_throughput - computed: true, optional: false, required: false
  private _warmThroughput = new DataAwsccDynamodbTableGlobalSecondaryIndexesWarmThroughputOutputReference(this, "warm_throughput");
  public get warmThroughput() {
    return this._warmThroughput;
  }
}

export class DataAwsccDynamodbTableGlobalSecondaryIndexesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference {
    return new DataAwsccDynamodbTableGlobalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv {
}

export function dataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvToTerraform(struct?: DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvToHclTerraform(struct?: DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // header_list - computed: true, optional: false, required: false
  public get headerList() {
    return this.getListAttribute('header_list');
  }
}
export interface DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions {
}

export function dataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsToTerraform(struct?: DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsToHclTerraform(struct?: DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csv - computed: true, optional: false, required: false
  private _csv = new DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
}
export interface DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource {
}

export function dataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceToTerraform(struct?: DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceToHclTerraform(struct?: DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableImportSourceSpecificationS3BucketSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_bucket_owner - computed: true, optional: false, required: false
  public get s3BucketOwner() {
    return this.getStringAttribute('s3_bucket_owner');
  }

  // s3_key_prefix - computed: true, optional: false, required: false
  public get s3KeyPrefix() {
    return this.getStringAttribute('s3_key_prefix');
  }
}
export interface DataAwsccDynamodbTableImportSourceSpecification {
}

export function dataAwsccDynamodbTableImportSourceSpecificationToTerraform(struct?: DataAwsccDynamodbTableImportSourceSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableImportSourceSpecificationToHclTerraform(struct?: DataAwsccDynamodbTableImportSourceSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableImportSourceSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableImportSourceSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableImportSourceSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_compression_type - computed: true, optional: false, required: false
  public get inputCompressionType() {
    return this.getStringAttribute('input_compression_type');
  }

  // input_format - computed: true, optional: false, required: false
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }

  // input_format_options - computed: true, optional: false, required: false
  private _inputFormatOptions = new DataAwsccDynamodbTableImportSourceSpecificationInputFormatOptionsOutputReference(this, "input_format_options");
  public get inputFormatOptions() {
    return this._inputFormatOptions;
  }

  // s3_bucket_source - computed: true, optional: false, required: false
  private _s3BucketSource = new DataAwsccDynamodbTableImportSourceSpecificationS3BucketSourceOutputReference(this, "s3_bucket_source");
  public get s3BucketSource() {
    return this._s3BucketSource;
  }
}
export interface DataAwsccDynamodbTableKinesisStreamSpecification {
}

export function dataAwsccDynamodbTableKinesisStreamSpecificationToTerraform(struct?: DataAwsccDynamodbTableKinesisStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableKinesisStreamSpecificationToHclTerraform(struct?: DataAwsccDynamodbTableKinesisStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableKinesisStreamSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableKinesisStreamSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approximate_creation_date_time_precision - computed: true, optional: false, required: false
  public get approximateCreationDateTimePrecision() {
    return this.getStringAttribute('approximate_creation_date_time_precision');
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
}
export interface DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema {
}

export function dataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaToTerraform(struct?: DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaToHclTerraform(struct?: DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableLocalSecondaryIndexesKeySchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export class DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference {
    return new DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbTableLocalSecondaryIndexesProjection {
}

export function dataAwsccDynamodbTableLocalSecondaryIndexesProjectionToTerraform(struct?: DataAwsccDynamodbTableLocalSecondaryIndexesProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableLocalSecondaryIndexesProjectionToHclTerraform(struct?: DataAwsccDynamodbTableLocalSecondaryIndexesProjection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableLocalSecondaryIndexesProjection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableLocalSecondaryIndexesProjection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }
}
export interface DataAwsccDynamodbTableLocalSecondaryIndexes {
}

export function dataAwsccDynamodbTableLocalSecondaryIndexesToTerraform(struct?: DataAwsccDynamodbTableLocalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableLocalSecondaryIndexesToHclTerraform(struct?: DataAwsccDynamodbTableLocalSecondaryIndexes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDynamodbTableLocalSecondaryIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableLocalSecondaryIndexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // key_schema - computed: true, optional: false, required: false
  private _keySchema = new DataAwsccDynamodbTableLocalSecondaryIndexesKeySchemaList(this, "key_schema", false);
  public get keySchema() {
    return this._keySchema;
  }

  // projection - computed: true, optional: false, required: false
  private _projection = new DataAwsccDynamodbTableLocalSecondaryIndexesProjectionOutputReference(this, "projection");
  public get projection() {
    return this._projection;
  }
}

export class DataAwsccDynamodbTableLocalSecondaryIndexesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference {
    return new DataAwsccDynamodbTableLocalSecondaryIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbTableOnDemandThroughput {
}

export function dataAwsccDynamodbTableOnDemandThroughputToTerraform(struct?: DataAwsccDynamodbTableOnDemandThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableOnDemandThroughputToHclTerraform(struct?: DataAwsccDynamodbTableOnDemandThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableOnDemandThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableOnDemandThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableOnDemandThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_read_request_units - computed: true, optional: false, required: false
  public get maxReadRequestUnits() {
    return this.getNumberAttribute('max_read_request_units');
  }

  // max_write_request_units - computed: true, optional: false, required: false
  public get maxWriteRequestUnits() {
    return this.getNumberAttribute('max_write_request_units');
  }
}
export interface DataAwsccDynamodbTablePointInTimeRecoverySpecification {
}

export function dataAwsccDynamodbTablePointInTimeRecoverySpecificationToTerraform(struct?: DataAwsccDynamodbTablePointInTimeRecoverySpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTablePointInTimeRecoverySpecificationToHclTerraform(struct?: DataAwsccDynamodbTablePointInTimeRecoverySpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTablePointInTimeRecoverySpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTablePointInTimeRecoverySpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // point_in_time_recovery_enabled - computed: true, optional: false, required: false
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }

  // recovery_period_in_days - computed: true, optional: false, required: false
  public get recoveryPeriodInDays() {
    return this.getNumberAttribute('recovery_period_in_days');
  }
}
export interface DataAwsccDynamodbTableProvisionedThroughput {
}

export function dataAwsccDynamodbTableProvisionedThroughputToTerraform(struct?: DataAwsccDynamodbTableProvisionedThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableProvisionedThroughputToHclTerraform(struct?: DataAwsccDynamodbTableProvisionedThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableProvisionedThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableProvisionedThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableProvisionedThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_capacity_units - computed: true, optional: false, required: false
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }

  // write_capacity_units - computed: true, optional: false, required: false
  public get writeCapacityUnits() {
    return this.getNumberAttribute('write_capacity_units');
  }
}
export interface DataAwsccDynamodbTableResourcePolicy {
}

export function dataAwsccDynamodbTableResourcePolicyToTerraform(struct?: DataAwsccDynamodbTableResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableResourcePolicyToHclTerraform(struct?: DataAwsccDynamodbTableResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableResourcePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableResourcePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableResourcePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_document - computed: true, optional: false, required: false
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
}
export interface DataAwsccDynamodbTableSseSpecification {
}

export function dataAwsccDynamodbTableSseSpecificationToTerraform(struct?: DataAwsccDynamodbTableSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableSseSpecificationToHclTerraform(struct?: DataAwsccDynamodbTableSseSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableSseSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableSseSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableSseSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kms_master_key_id - computed: true, optional: false, required: false
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }

  // sse_enabled - computed: true, optional: false, required: false
  public get sseEnabled() {
    return this.getBooleanAttribute('sse_enabled');
  }

  // sse_type - computed: true, optional: false, required: false
  public get sseType() {
    return this.getStringAttribute('sse_type');
  }
}
export interface DataAwsccDynamodbTableStreamSpecificationResourcePolicy {
}

export function dataAwsccDynamodbTableStreamSpecificationResourcePolicyToTerraform(struct?: DataAwsccDynamodbTableStreamSpecificationResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableStreamSpecificationResourcePolicyToHclTerraform(struct?: DataAwsccDynamodbTableStreamSpecificationResourcePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableStreamSpecificationResourcePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableStreamSpecificationResourcePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_document - computed: true, optional: false, required: false
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
}
export interface DataAwsccDynamodbTableStreamSpecification {
}

export function dataAwsccDynamodbTableStreamSpecificationToTerraform(struct?: DataAwsccDynamodbTableStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableStreamSpecificationToHclTerraform(struct?: DataAwsccDynamodbTableStreamSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableStreamSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableStreamSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableStreamSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_policy - computed: true, optional: false, required: false
  private _resourcePolicy = new DataAwsccDynamodbTableStreamSpecificationResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }

  // stream_view_type - computed: true, optional: false, required: false
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
  }
}
export interface DataAwsccDynamodbTableTags {
}

export function dataAwsccDynamodbTableTagsToTerraform(struct?: DataAwsccDynamodbTableTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableTagsToHclTerraform(struct?: DataAwsccDynamodbTableTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDynamodbTableTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableTags | undefined) {
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

export class DataAwsccDynamodbTableTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDynamodbTableTagsOutputReference {
    return new DataAwsccDynamodbTableTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDynamodbTableTimeToLiveSpecification {
}

export function dataAwsccDynamodbTableTimeToLiveSpecificationToTerraform(struct?: DataAwsccDynamodbTableTimeToLiveSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableTimeToLiveSpecificationToHclTerraform(struct?: DataAwsccDynamodbTableTimeToLiveSpecification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableTimeToLiveSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableTimeToLiveSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsccDynamodbTableWarmThroughput {
}

export function dataAwsccDynamodbTableWarmThroughputToTerraform(struct?: DataAwsccDynamodbTableWarmThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDynamodbTableWarmThroughputToHclTerraform(struct?: DataAwsccDynamodbTableWarmThroughput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDynamodbTableWarmThroughputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDynamodbTableWarmThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDynamodbTableWarmThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_units_per_second - computed: true, optional: false, required: false
  public get readUnitsPerSecond() {
    return this.getNumberAttribute('read_units_per_second');
  }

  // write_units_per_second - computed: true, optional: false, required: false
  public get writeUnitsPerSecond() {
    return this.getNumberAttribute('write_units_per_second');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dynamodb_table awscc_dynamodb_table}
*/
export class DataAwsccDynamodbTable extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dynamodb_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDynamodbTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDynamodbTable to import
  * @param importFromId The id of the existing DataAwsccDynamodbTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dynamodb_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDynamodbTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dynamodb_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/dynamodb_table awscc_dynamodb_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDynamodbTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDynamodbTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dynamodb_table',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute_definitions - computed: true, optional: false, required: false
  private _attributeDefinitions = new DataAwsccDynamodbTableAttributeDefinitionsList(this, "attribute_definitions", false);
  public get attributeDefinitions() {
    return this._attributeDefinitions;
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }

  // contributor_insights_specification - computed: true, optional: false, required: false
  private _contributorInsightsSpecification = new DataAwsccDynamodbTableContributorInsightsSpecificationOutputReference(this, "contributor_insights_specification");
  public get contributorInsightsSpecification() {
    return this._contributorInsightsSpecification;
  }

  // deletion_protection_enabled - computed: true, optional: false, required: false
  public get deletionProtectionEnabled() {
    return this.getBooleanAttribute('deletion_protection_enabled');
  }

  // global_secondary_indexes - computed: true, optional: false, required: false
  private _globalSecondaryIndexes = new DataAwsccDynamodbTableGlobalSecondaryIndexesList(this, "global_secondary_indexes", false);
  public get globalSecondaryIndexes() {
    return this._globalSecondaryIndexes;
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

  // import_source_specification - computed: true, optional: false, required: false
  private _importSourceSpecification = new DataAwsccDynamodbTableImportSourceSpecificationOutputReference(this, "import_source_specification");
  public get importSourceSpecification() {
    return this._importSourceSpecification;
  }

  // key_schema - computed: true, optional: false, required: false
  public get keySchema() {
    return this.getStringAttribute('key_schema');
  }

  // kinesis_stream_specification - computed: true, optional: false, required: false
  private _kinesisStreamSpecification = new DataAwsccDynamodbTableKinesisStreamSpecificationOutputReference(this, "kinesis_stream_specification");
  public get kinesisStreamSpecification() {
    return this._kinesisStreamSpecification;
  }

  // local_secondary_indexes - computed: true, optional: false, required: false
  private _localSecondaryIndexes = new DataAwsccDynamodbTableLocalSecondaryIndexesList(this, "local_secondary_indexes", false);
  public get localSecondaryIndexes() {
    return this._localSecondaryIndexes;
  }

  // on_demand_throughput - computed: true, optional: false, required: false
  private _onDemandThroughput = new DataAwsccDynamodbTableOnDemandThroughputOutputReference(this, "on_demand_throughput");
  public get onDemandThroughput() {
    return this._onDemandThroughput;
  }

  // point_in_time_recovery_specification - computed: true, optional: false, required: false
  private _pointInTimeRecoverySpecification = new DataAwsccDynamodbTablePointInTimeRecoverySpecificationOutputReference(this, "point_in_time_recovery_specification");
  public get pointInTimeRecoverySpecification() {
    return this._pointInTimeRecoverySpecification;
  }

  // provisioned_throughput - computed: true, optional: false, required: false
  private _provisionedThroughput = new DataAwsccDynamodbTableProvisionedThroughputOutputReference(this, "provisioned_throughput");
  public get provisionedThroughput() {
    return this._provisionedThroughput;
  }

  // resource_policy - computed: true, optional: false, required: false
  private _resourcePolicy = new DataAwsccDynamodbTableResourcePolicyOutputReference(this, "resource_policy");
  public get resourcePolicy() {
    return this._resourcePolicy;
  }

  // sse_specification - computed: true, optional: false, required: false
  private _sseSpecification = new DataAwsccDynamodbTableSseSpecificationOutputReference(this, "sse_specification");
  public get sseSpecification() {
    return this._sseSpecification;
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_specification - computed: true, optional: false, required: false
  private _streamSpecification = new DataAwsccDynamodbTableStreamSpecificationOutputReference(this, "stream_specification");
  public get streamSpecification() {
    return this._streamSpecification;
  }

  // table_class - computed: true, optional: false, required: false
  public get tableClass() {
    return this.getStringAttribute('table_class');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccDynamodbTableTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // time_to_live_specification - computed: true, optional: false, required: false
  private _timeToLiveSpecification = new DataAwsccDynamodbTableTimeToLiveSpecificationOutputReference(this, "time_to_live_specification");
  public get timeToLiveSpecification() {
    return this._timeToLiveSpecification;
  }

  // warm_throughput - computed: true, optional: false, required: false
  private _warmThroughput = new DataAwsccDynamodbTableWarmThroughputOutputReference(this, "warm_throughput");
  public get warmThroughput() {
    return this._warmThroughput;
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
