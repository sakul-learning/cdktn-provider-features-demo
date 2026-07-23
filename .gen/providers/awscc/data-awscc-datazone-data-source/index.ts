// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatazoneDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_data_source#id DataAwsccDatazoneDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatazoneDataSourceAssetFormsInput {
}

export function dataAwsccDatazoneDataSourceAssetFormsInputToTerraform(struct?: DataAwsccDatazoneDataSourceAssetFormsInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceAssetFormsInputToHclTerraform(struct?: DataAwsccDatazoneDataSourceAssetFormsInput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceAssetFormsInputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneDataSourceAssetFormsInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceAssetFormsInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // form_name - computed: true, optional: false, required: false
  public get formName() {
    return this.getStringAttribute('form_name');
  }

  // type_identifier - computed: true, optional: false, required: false
  public get typeIdentifier() {
    return this.getStringAttribute('type_identifier');
  }

  // type_revision - computed: true, optional: false, required: false
  public get typeRevision() {
    return this.getStringAttribute('type_revision');
  }
}

export class DataAwsccDatazoneDataSourceAssetFormsInputList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneDataSourceAssetFormsInputOutputReference {
    return new DataAwsccDatazoneDataSourceAssetFormsInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions {
}

export function dataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference {
    return new DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations {
}

export function dataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // filter_expressions - computed: true, optional: false, required: false
  private _filterExpressions = new DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(this, "filter_expressions", false);
  public get filterExpressions() {
    return this._filterExpressions;
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference {
    return new DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration {
}

export function dataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationGlueRunConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_import_data_quality_result - computed: true, optional: false, required: false
  public get autoImportDataQualityResult() {
    return this.getBooleanAttribute('auto_import_data_quality_result');
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // data_access_role - computed: true, optional: false, required: false
  public get dataAccessRole() {
    return this.getStringAttribute('data_access_role');
  }

  // relational_filter_configurations - computed: true, optional: false, required: false
  private _relationalFilterConfigurations = new DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList(this, "relational_filter_configurations", false);
  public get relationalFilterConfigurations() {
    return this._relationalFilterConfigurations;
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration {
}

export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secret_manager_arn - computed: true, optional: false, required: false
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource {
}

export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource {
}

export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workgroup_name - computed: true, optional: false, required: false
  public get workgroupName() {
    return this.getStringAttribute('workgroup_name');
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage {
}

export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // redshift_cluster_source - computed: true, optional: false, required: false
  private _redshiftClusterSource = new DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference(this, "redshift_cluster_source");
  public get redshiftClusterSource() {
    return this._redshiftClusterSource;
  }

  // redshift_serverless_source - computed: true, optional: false, required: false
  private _redshiftServerlessSource = new DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference(this, "redshift_serverless_source");
  public get redshiftServerlessSource() {
    return this._redshiftServerlessSource;
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions {
}

export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference {
    return new DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations {
}

export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // filter_expressions - computed: true, optional: false, required: false
  private _filterExpressions = new DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(this, "filter_expressions", false);
  public get filterExpressions() {
    return this._filterExpressions;
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference {
    return new DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration {
}

export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_access_role - computed: true, optional: false, required: false
  public get dataAccessRole() {
    return this.getStringAttribute('data_access_role');
  }

  // redshift_credential_configuration - computed: true, optional: false, required: false
  private _redshiftCredentialConfiguration = new DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference(this, "redshift_credential_configuration");
  public get redshiftCredentialConfiguration() {
    return this._redshiftCredentialConfiguration;
  }

  // redshift_storage - computed: true, optional: false, required: false
  private _redshiftStorage = new DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference(this, "redshift_storage");
  public get redshiftStorage() {
    return this._redshiftStorage;
  }

  // relational_filter_configurations - computed: true, optional: false, required: false
  private _relationalFilterConfigurations = new DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList(this, "relational_filter_configurations", false);
  public get relationalFilterConfigurations() {
    return this._relationalFilterConfigurations;
  }
}
export interface DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration {
}

export function dataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationToTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tracking_assets - computed: true, optional: false, required: false
  private _trackingAssets = new cdktn.StringListMap(this, "tracking_assets");
  public get trackingAssets() {
    return this._trackingAssets;
  }
}
export interface DataAwsccDatazoneDataSourceConfiguration {
}

export function dataAwsccDatazoneDataSourceConfigurationToTerraform(struct?: DataAwsccDatazoneDataSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceConfigurationToHclTerraform(struct?: DataAwsccDatazoneDataSourceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // glue_run_configuration - computed: true, optional: false, required: false
  private _glueRunConfiguration = new DataAwsccDatazoneDataSourceConfigurationGlueRunConfigurationOutputReference(this, "glue_run_configuration");
  public get glueRunConfiguration() {
    return this._glueRunConfiguration;
  }

  // redshift_run_configuration - computed: true, optional: false, required: false
  private _redshiftRunConfiguration = new DataAwsccDatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference(this, "redshift_run_configuration");
  public get redshiftRunConfiguration() {
    return this._redshiftRunConfiguration;
  }

  // sage_maker_run_configuration - computed: true, optional: false, required: false
  private _sageMakerRunConfiguration = new DataAwsccDatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference(this, "sage_maker_run_configuration");
  public get sageMakerRunConfiguration() {
    return this._sageMakerRunConfiguration;
  }
}
export interface DataAwsccDatazoneDataSourceRecommendation {
}

export function dataAwsccDatazoneDataSourceRecommendationToTerraform(struct?: DataAwsccDatazoneDataSourceRecommendation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceRecommendationToHclTerraform(struct?: DataAwsccDatazoneDataSourceRecommendation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceRecommendationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceRecommendation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceRecommendation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_business_name_generation - computed: true, optional: false, required: false
  public get enableBusinessNameGeneration() {
    return this.getBooleanAttribute('enable_business_name_generation');
  }
}
export interface DataAwsccDatazoneDataSourceSchedule {
}

export function dataAwsccDatazoneDataSourceScheduleToTerraform(struct?: DataAwsccDatazoneDataSourceSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneDataSourceScheduleToHclTerraform(struct?: DataAwsccDatazoneDataSourceSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneDataSourceScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneDataSourceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneDataSourceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_data_source awscc_datazone_data_source}
*/
export class DataAwsccDatazoneDataSource extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatazoneDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatazoneDataSource to import
  * @param importFromId The id of the existing DataAwsccDatazoneDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatazoneDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_data_source awscc_datazone_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatazoneDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatazoneDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_data_source',
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

  // asset_forms_input - computed: true, optional: false, required: false
  private _assetFormsInput = new DataAwsccDatazoneDataSourceAssetFormsInputList(this, "asset_forms_input", false);
  public get assetFormsInput() {
    return this._assetFormsInput;
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccDatazoneDataSourceConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_identifier - computed: true, optional: false, required: false
  public get connectionIdentifier() {
    return this.getStringAttribute('connection_identifier');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_identifier - computed: true, optional: false, required: false
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }

  // enable_setting - computed: true, optional: false, required: false
  public get enableSetting() {
    return this.getStringAttribute('enable_setting');
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // environment_identifier - computed: true, optional: false, required: false
  public get environmentIdentifier() {
    return this.getStringAttribute('environment_identifier');
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

  // last_run_asset_count - computed: true, optional: false, required: false
  public get lastRunAssetCount() {
    return this.getNumberAttribute('last_run_asset_count');
  }

  // last_run_at - computed: true, optional: false, required: false
  public get lastRunAt() {
    return this.getStringAttribute('last_run_at');
  }

  // last_run_status - computed: true, optional: false, required: false
  public get lastRunStatus() {
    return this.getStringAttribute('last_run_status');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_identifier - computed: true, optional: false, required: false
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }

  // publish_on_import - computed: true, optional: false, required: false
  public get publishOnImport() {
    return this.getBooleanAttribute('publish_on_import');
  }

  // recommendation - computed: true, optional: false, required: false
  private _recommendation = new DataAwsccDatazoneDataSourceRecommendationOutputReference(this, "recommendation");
  public get recommendation() {
    return this._recommendation;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAwsccDatazoneDataSourceScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
