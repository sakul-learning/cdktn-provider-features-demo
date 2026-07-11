// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_crawler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGlueCrawlerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_crawler#id DataAwsccGlueCrawler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGlueCrawlerLakeFormationConfiguration {
}

export function dataAwsccGlueCrawlerLakeFormationConfigurationToTerraform(struct?: DataAwsccGlueCrawlerLakeFormationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerLakeFormationConfigurationToHclTerraform(struct?: DataAwsccGlueCrawlerLakeFormationConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueCrawlerLakeFormationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerLakeFormationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // use_lake_formation_credentials - computed: true, optional: false, required: false
  public get useLakeFormationCredentials() {
    return this.getBooleanAttribute('use_lake_formation_credentials');
  }
}
export interface DataAwsccGlueCrawlerRecrawlPolicy {
}

export function dataAwsccGlueCrawlerRecrawlPolicyToTerraform(struct?: DataAwsccGlueCrawlerRecrawlPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerRecrawlPolicyToHclTerraform(struct?: DataAwsccGlueCrawlerRecrawlPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerRecrawlPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueCrawlerRecrawlPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerRecrawlPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recrawl_behavior - computed: true, optional: false, required: false
  public get recrawlBehavior() {
    return this.getStringAttribute('recrawl_behavior');
  }
}
export interface DataAwsccGlueCrawlerSchedule {
}

export function dataAwsccGlueCrawlerScheduleToTerraform(struct?: DataAwsccGlueCrawlerSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerScheduleToHclTerraform(struct?: DataAwsccGlueCrawlerSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueCrawlerSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
}
export interface DataAwsccGlueCrawlerSchemaChangePolicy {
}

export function dataAwsccGlueCrawlerSchemaChangePolicyToTerraform(struct?: DataAwsccGlueCrawlerSchemaChangePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerSchemaChangePolicyToHclTerraform(struct?: DataAwsccGlueCrawlerSchemaChangePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerSchemaChangePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueCrawlerSchemaChangePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerSchemaChangePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_behavior - computed: true, optional: false, required: false
  public get deleteBehavior() {
    return this.getStringAttribute('delete_behavior');
  }

  // update_behavior - computed: true, optional: false, required: false
  public get updateBehavior() {
    return this.getStringAttribute('update_behavior');
  }
}
export interface DataAwsccGlueCrawlerTargetsCatalogTargets {
}

export function dataAwsccGlueCrawlerTargetsCatalogTargetsToTerraform(struct?: DataAwsccGlueCrawlerTargetsCatalogTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerTargetsCatalogTargetsToHclTerraform(struct?: DataAwsccGlueCrawlerTargetsCatalogTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueCrawlerTargetsCatalogTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerTargetsCatalogTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // dlq_event_queue_arn - computed: true, optional: false, required: false
  public get dlqEventQueueArn() {
    return this.getStringAttribute('dlq_event_queue_arn');
  }

  // event_queue_arn - computed: true, optional: false, required: false
  public get eventQueueArn() {
    return this.getStringAttribute('event_queue_arn');
  }

  // tables - computed: true, optional: false, required: false
  public get tables() {
    return this.getListAttribute('tables');
  }
}

export class DataAwsccGlueCrawlerTargetsCatalogTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference {
    return new DataAwsccGlueCrawlerTargetsCatalogTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueCrawlerTargetsDeltaTargets {
}

export function dataAwsccGlueCrawlerTargetsDeltaTargetsToTerraform(struct?: DataAwsccGlueCrawlerTargetsDeltaTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerTargetsDeltaTargetsToHclTerraform(struct?: DataAwsccGlueCrawlerTargetsDeltaTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueCrawlerTargetsDeltaTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerTargetsDeltaTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // create_native_delta_table - computed: true, optional: false, required: false
  public get createNativeDeltaTable() {
    return this.getBooleanAttribute('create_native_delta_table');
  }

  // delta_tables - computed: true, optional: false, required: false
  public get deltaTables() {
    return this.getListAttribute('delta_tables');
  }

  // write_manifest - computed: true, optional: false, required: false
  public get writeManifest() {
    return this.getBooleanAttribute('write_manifest');
  }
}

export class DataAwsccGlueCrawlerTargetsDeltaTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference {
    return new DataAwsccGlueCrawlerTargetsDeltaTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueCrawlerTargetsDynamoDbTargets {
}

export function dataAwsccGlueCrawlerTargetsDynamoDbTargetsToTerraform(struct?: DataAwsccGlueCrawlerTargetsDynamoDbTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerTargetsDynamoDbTargetsToHclTerraform(struct?: DataAwsccGlueCrawlerTargetsDynamoDbTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueCrawlerTargetsDynamoDbTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerTargetsDynamoDbTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // scan_all - computed: true, optional: false, required: false
  public get scanAll() {
    return this.getBooleanAttribute('scan_all');
  }

  // scan_rate - computed: true, optional: false, required: false
  public get scanRate() {
    return this.getNumberAttribute('scan_rate');
  }
}

export class DataAwsccGlueCrawlerTargetsDynamoDbTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference {
    return new DataAwsccGlueCrawlerTargetsDynamoDbTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueCrawlerTargetsHudiTargets {
}

export function dataAwsccGlueCrawlerTargetsHudiTargetsToTerraform(struct?: DataAwsccGlueCrawlerTargetsHudiTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerTargetsHudiTargetsToHclTerraform(struct?: DataAwsccGlueCrawlerTargetsHudiTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueCrawlerTargetsHudiTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerTargetsHudiTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // exclusions - computed: true, optional: false, required: false
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }

  // maximum_traversal_depth - computed: true, optional: false, required: false
  public get maximumTraversalDepth() {
    return this.getNumberAttribute('maximum_traversal_depth');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }
}

export class DataAwsccGlueCrawlerTargetsHudiTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference {
    return new DataAwsccGlueCrawlerTargetsHudiTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueCrawlerTargetsIcebergTargets {
}

export function dataAwsccGlueCrawlerTargetsIcebergTargetsToTerraform(struct?: DataAwsccGlueCrawlerTargetsIcebergTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerTargetsIcebergTargetsToHclTerraform(struct?: DataAwsccGlueCrawlerTargetsIcebergTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueCrawlerTargetsIcebergTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerTargetsIcebergTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // exclusions - computed: true, optional: false, required: false
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }

  // maximum_traversal_depth - computed: true, optional: false, required: false
  public get maximumTraversalDepth() {
    return this.getNumberAttribute('maximum_traversal_depth');
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return this.getListAttribute('paths');
  }
}

export class DataAwsccGlueCrawlerTargetsIcebergTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference {
    return new DataAwsccGlueCrawlerTargetsIcebergTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueCrawlerTargetsJdbcTargets {
}

export function dataAwsccGlueCrawlerTargetsJdbcTargetsToTerraform(struct?: DataAwsccGlueCrawlerTargetsJdbcTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerTargetsJdbcTargetsToHclTerraform(struct?: DataAwsccGlueCrawlerTargetsJdbcTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueCrawlerTargetsJdbcTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerTargetsJdbcTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // enable_additional_metadata - computed: true, optional: false, required: false
  public get enableAdditionalMetadata() {
    return this.getListAttribute('enable_additional_metadata');
  }

  // exclusions - computed: true, optional: false, required: false
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAwsccGlueCrawlerTargetsJdbcTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference {
    return new DataAwsccGlueCrawlerTargetsJdbcTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueCrawlerTargetsMongoDbTargets {
}

export function dataAwsccGlueCrawlerTargetsMongoDbTargetsToTerraform(struct?: DataAwsccGlueCrawlerTargetsMongoDbTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerTargetsMongoDbTargetsToHclTerraform(struct?: DataAwsccGlueCrawlerTargetsMongoDbTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueCrawlerTargetsMongoDbTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerTargetsMongoDbTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataAwsccGlueCrawlerTargetsMongoDbTargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference {
    return new DataAwsccGlueCrawlerTargetsMongoDbTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueCrawlerTargetsS3Targets {
}

export function dataAwsccGlueCrawlerTargetsS3TargetsToTerraform(struct?: DataAwsccGlueCrawlerTargetsS3Targets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerTargetsS3TargetsToHclTerraform(struct?: DataAwsccGlueCrawlerTargetsS3Targets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerTargetsS3TargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGlueCrawlerTargetsS3Targets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerTargetsS3Targets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // dlq_event_queue_arn - computed: true, optional: false, required: false
  public get dlqEventQueueArn() {
    return this.getStringAttribute('dlq_event_queue_arn');
  }

  // event_queue_arn - computed: true, optional: false, required: false
  public get eventQueueArn() {
    return this.getStringAttribute('event_queue_arn');
  }

  // exclusions - computed: true, optional: false, required: false
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // sample_size - computed: true, optional: false, required: false
  public get sampleSize() {
    return this.getNumberAttribute('sample_size');
  }
}

export class DataAwsccGlueCrawlerTargetsS3TargetsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGlueCrawlerTargetsS3TargetsOutputReference {
    return new DataAwsccGlueCrawlerTargetsS3TargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGlueCrawlerTargets {
}

export function dataAwsccGlueCrawlerTargetsToTerraform(struct?: DataAwsccGlueCrawlerTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGlueCrawlerTargetsToHclTerraform(struct?: DataAwsccGlueCrawlerTargets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGlueCrawlerTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGlueCrawlerTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGlueCrawlerTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_targets - computed: true, optional: false, required: false
  private _catalogTargets = new DataAwsccGlueCrawlerTargetsCatalogTargetsList(this, "catalog_targets", false);
  public get catalogTargets() {
    return this._catalogTargets;
  }

  // delta_targets - computed: true, optional: false, required: false
  private _deltaTargets = new DataAwsccGlueCrawlerTargetsDeltaTargetsList(this, "delta_targets", false);
  public get deltaTargets() {
    return this._deltaTargets;
  }

  // dynamo_db_targets - computed: true, optional: false, required: false
  private _dynamoDbTargets = new DataAwsccGlueCrawlerTargetsDynamoDbTargetsList(this, "dynamo_db_targets", false);
  public get dynamoDbTargets() {
    return this._dynamoDbTargets;
  }

  // hudi_targets - computed: true, optional: false, required: false
  private _hudiTargets = new DataAwsccGlueCrawlerTargetsHudiTargetsList(this, "hudi_targets", false);
  public get hudiTargets() {
    return this._hudiTargets;
  }

  // iceberg_targets - computed: true, optional: false, required: false
  private _icebergTargets = new DataAwsccGlueCrawlerTargetsIcebergTargetsList(this, "iceberg_targets", false);
  public get icebergTargets() {
    return this._icebergTargets;
  }

  // jdbc_targets - computed: true, optional: false, required: false
  private _jdbcTargets = new DataAwsccGlueCrawlerTargetsJdbcTargetsList(this, "jdbc_targets", false);
  public get jdbcTargets() {
    return this._jdbcTargets;
  }

  // mongo_db_targets - computed: true, optional: false, required: false
  private _mongoDbTargets = new DataAwsccGlueCrawlerTargetsMongoDbTargetsList(this, "mongo_db_targets", false);
  public get mongoDbTargets() {
    return this._mongoDbTargets;
  }

  // s3_targets - computed: true, optional: false, required: false
  private _s3Targets = new DataAwsccGlueCrawlerTargetsS3TargetsList(this, "s3_targets", false);
  public get s3Targets() {
    return this._s3Targets;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_crawler awscc_glue_crawler}
*/
export class DataAwsccGlueCrawler extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_glue_crawler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGlueCrawler resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGlueCrawler to import
  * @param importFromId The id of the existing DataAwsccGlueCrawler that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_crawler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGlueCrawler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_crawler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/glue_crawler awscc_glue_crawler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlueCrawlerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlueCrawlerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_crawler',
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

  // classifiers - computed: true, optional: false, required: false
  public get classifiers() {
    return this.getListAttribute('classifiers');
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // crawler_security_configuration - computed: true, optional: false, required: false
  public get crawlerSecurityConfiguration() {
    return this.getStringAttribute('crawler_security_configuration');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
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

  // lake_formation_configuration - computed: true, optional: false, required: false
  private _lakeFormationConfiguration = new DataAwsccGlueCrawlerLakeFormationConfigurationOutputReference(this, "lake_formation_configuration");
  public get lakeFormationConfiguration() {
    return this._lakeFormationConfiguration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recrawl_policy - computed: true, optional: false, required: false
  private _recrawlPolicy = new DataAwsccGlueCrawlerRecrawlPolicyOutputReference(this, "recrawl_policy");
  public get recrawlPolicy() {
    return this._recrawlPolicy;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAwsccGlueCrawlerScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // schema_change_policy - computed: true, optional: false, required: false
  private _schemaChangePolicy = new DataAwsccGlueCrawlerSchemaChangePolicyOutputReference(this, "schema_change_policy");
  public get schemaChangePolicy() {
    return this._schemaChangePolicy;
  }

  // table_prefix - computed: true, optional: false, required: false
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataAwsccGlueCrawlerTargetsOutputReference(this, "targets");
  public get targets() {
    return this._targets;
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
