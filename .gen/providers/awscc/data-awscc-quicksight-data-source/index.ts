// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQuicksightDataSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_data_source#id DataAwsccQuicksightDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_identity_propagation - computed: true, optional: false, required: false
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_center_configuration - computed: true, optional: false, required: false
  private _identityCenterConfiguration = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersDatabricksParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersDatabricksParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersDatabricksParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersDatabricksParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersDatabricksParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersDatabricksParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersDatabricksParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersDatabricksParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // sql_endpoint_path - computed: true, optional: false, required: false
  public get sqlEndpointPath() {
    return this.getStringAttribute('sql_endpoint_path');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // use_service_name - computed: true, optional: false, required: false
  public get useServiceName() {
    return this.getBooleanAttribute('use_service_name');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_create_database_user - computed: true, optional: false, required: false
  public get autoCreateDatabaseUser() {
    return this.getBooleanAttribute('auto_create_database_user');
  }

  // database_groups - computed: true, optional: false, required: false
  public get databaseGroups() {
    return this.getListAttribute('database_groups');
  }

  // database_user - computed: true, optional: false, required: false
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_identity_propagation - computed: true, optional: false, required: false
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // iam_parameters - computed: true, optional: false, required: false
  private _iamParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIamParametersOutputReference(this, "iam_parameters");
  public get iamParameters() {
    return this._iamParameters;
  }

  // identity_center_configuration - computed: true, optional: false, required: false
  private _identityCenterConfiguration = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manifest_file_location - computed: true, optional: false, required: false
  private _manifestFileLocation = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersManifestFileLocationOutputReference(this, "manifest_file_location");
  public get manifestFileLocation() {
    return this._manifestFileLocation;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3TablesParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3TablesParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3TablesParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersS3TablesParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3TablesParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3TablesParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3TablesParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3TablesParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_bucket_arn - computed: true, optional: false, required: false
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_connection_arn - computed: true, optional: false, required: false
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: false, required: false
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: false, required: false
  private _identityProviderVpcConnectionProperties = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }

  // o_auth_scope - computed: true, optional: false, required: false
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }

  // token_provider_url - computed: true, optional: false, required: false
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // database_access_control_role - computed: true, optional: false, required: false
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // o_auth_parameters - computed: true, optional: false, required: false
  private _oAuthParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_connection_arn - computed: true, optional: false, required: false
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: false, required: false
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: false, required: false
  private _identityProviderVpcConnectionProperties = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }

  // o_auth_scope - computed: true, optional: false, required: false
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }

  // token_provider_url - computed: true, optional: false, required: false
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // database_access_control_role - computed: true, optional: false, required: false
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // o_auth_parameters - computed: true, optional: false, required: false
  private _oAuthParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParametersTrinoParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersTrinoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersTrinoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersTrinoParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParametersTrinoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersTrinoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParametersTrinoParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParametersTrinoParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceAlternateDataSourceParameters {
}

export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersToTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceAlternateDataSourceParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceAlternateDataSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSourceAlternateDataSourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceAlternateDataSourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amazon_elasticsearch_parameters - computed: true, optional: false, required: false
  private _amazonElasticsearchParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonElasticsearchParametersOutputReference(this, "amazon_elasticsearch_parameters");
  public get amazonElasticsearchParameters() {
    return this._amazonElasticsearchParameters;
  }

  // amazon_open_search_parameters - computed: true, optional: false, required: false
  private _amazonOpenSearchParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersAmazonOpenSearchParametersOutputReference(this, "amazon_open_search_parameters");
  public get amazonOpenSearchParameters() {
    return this._amazonOpenSearchParameters;
  }

  // athena_parameters - computed: true, optional: false, required: false
  private _athenaParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersAthenaParametersOutputReference(this, "athena_parameters");
  public get athenaParameters() {
    return this._athenaParameters;
  }

  // aurora_parameters - computed: true, optional: false, required: false
  private _auroraParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraParametersOutputReference(this, "aurora_parameters");
  public get auroraParameters() {
    return this._auroraParameters;
  }

  // aurora_postgre_sql_parameters - computed: true, optional: false, required: false
  private _auroraPostgreSqlParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersAuroraPostgreSqlParametersOutputReference(this, "aurora_postgre_sql_parameters");
  public get auroraPostgreSqlParameters() {
    return this._auroraPostgreSqlParameters;
  }

  // databricks_parameters - computed: true, optional: false, required: false
  private _databricksParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersDatabricksParametersOutputReference(this, "databricks_parameters");
  public get databricksParameters() {
    return this._databricksParameters;
  }

  // maria_db_parameters - computed: true, optional: false, required: false
  private _mariaDbParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersMariaDbParametersOutputReference(this, "maria_db_parameters");
  public get mariaDbParameters() {
    return this._mariaDbParameters;
  }

  // my_sql_parameters - computed: true, optional: false, required: false
  private _mySqlParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersMySqlParametersOutputReference(this, "my_sql_parameters");
  public get mySqlParameters() {
    return this._mySqlParameters;
  }

  // oracle_parameters - computed: true, optional: false, required: false
  private _oracleParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersOracleParametersOutputReference(this, "oracle_parameters");
  public get oracleParameters() {
    return this._oracleParameters;
  }

  // postgre_sql_parameters - computed: true, optional: false, required: false
  private _postgreSqlParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersPostgreSqlParametersOutputReference(this, "postgre_sql_parameters");
  public get postgreSqlParameters() {
    return this._postgreSqlParameters;
  }

  // presto_parameters - computed: true, optional: false, required: false
  private _prestoParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersPrestoParametersOutputReference(this, "presto_parameters");
  public get prestoParameters() {
    return this._prestoParameters;
  }

  // rds_parameters - computed: true, optional: false, required: false
  private _rdsParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersRdsParametersOutputReference(this, "rds_parameters");
  public get rdsParameters() {
    return this._rdsParameters;
  }

  // redshift_parameters - computed: true, optional: false, required: false
  private _redshiftParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersRedshiftParametersOutputReference(this, "redshift_parameters");
  public get redshiftParameters() {
    return this._redshiftParameters;
  }

  // s3_parameters - computed: true, optional: false, required: false
  private _s3Parameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3ParametersOutputReference(this, "s3_parameters");
  public get s3Parameters() {
    return this._s3Parameters;
  }

  // s3_tables_parameters - computed: true, optional: false, required: false
  private _s3TablesParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersS3TablesParametersOutputReference(this, "s3_tables_parameters");
  public get s3TablesParameters() {
    return this._s3TablesParameters;
  }

  // snowflake_parameters - computed: true, optional: false, required: false
  private _snowflakeParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersSnowflakeParametersOutputReference(this, "snowflake_parameters");
  public get snowflakeParameters() {
    return this._snowflakeParameters;
  }

  // spark_parameters - computed: true, optional: false, required: false
  private _sparkParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersSparkParametersOutputReference(this, "spark_parameters");
  public get sparkParameters() {
    return this._sparkParameters;
  }

  // sql_server_parameters - computed: true, optional: false, required: false
  private _sqlServerParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersSqlServerParametersOutputReference(this, "sql_server_parameters");
  public get sqlServerParameters() {
    return this._sqlServerParameters;
  }

  // starburst_parameters - computed: true, optional: false, required: false
  private _starburstParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersStarburstParametersOutputReference(this, "starburst_parameters");
  public get starburstParameters() {
    return this._starburstParameters;
  }

  // teradata_parameters - computed: true, optional: false, required: false
  private _teradataParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersTeradataParametersOutputReference(this, "teradata_parameters");
  public get teradataParameters() {
    return this._teradataParameters;
  }

  // trino_parameters - computed: true, optional: false, required: false
  private _trinoParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersTrinoParametersOutputReference(this, "trino_parameters");
  public get trinoParameters() {
    return this._trinoParameters;
  }
}

export class DataAwsccQuicksightDataSourceAlternateDataSourceParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSourceAlternateDataSourceParametersOutputReference {
    return new DataAwsccQuicksightDataSourceAlternateDataSourceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_identity_propagation - computed: true, optional: false, required: false
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_center_configuration - computed: true, optional: false, required: false
  private _identityCenterConfiguration = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // sql_endpoint_path - computed: true, optional: false, required: false
  public get sqlEndpointPath() {
    return this.getStringAttribute('sql_endpoint_path');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // use_service_name - computed: true, optional: false, required: false
  public get useServiceName() {
    return this.getBooleanAttribute('use_service_name');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_create_database_user - computed: true, optional: false, required: false
  public get autoCreateDatabaseUser() {
    return this.getBooleanAttribute('auto_create_database_user');
  }

  // database_groups - computed: true, optional: false, required: false
  public get databaseGroups() {
    return this.getListAttribute('database_groups');
  }

  // database_user - computed: true, optional: false, required: false
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_identity_propagation - computed: true, optional: false, required: false
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // iam_parameters - computed: true, optional: false, required: false
  private _iamParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIamParametersOutputReference(this, "iam_parameters");
  public get iamParameters() {
    return this._iamParameters;
  }

  // identity_center_configuration - computed: true, optional: false, required: false
  private _identityCenterConfiguration = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manifest_file_location - computed: true, optional: false, required: false
  private _manifestFileLocation = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersManifestFileLocationOutputReference(this, "manifest_file_location");
  public get manifestFileLocation() {
    return this._manifestFileLocation;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_bucket_arn - computed: true, optional: false, required: false
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_connection_arn - computed: true, optional: false, required: false
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: false, required: false
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: false, required: false
  private _identityProviderVpcConnectionProperties = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }

  // o_auth_scope - computed: true, optional: false, required: false
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }

  // token_provider_url - computed: true, optional: false, required: false
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // database_access_control_role - computed: true, optional: false, required: false
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // o_auth_parameters - computed: true, optional: false, required: false
  private _oAuthParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_connection_arn - computed: true, optional: false, required: false
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: false, required: false
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: false, required: false
  private _identityProviderVpcConnectionProperties = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }

  // o_auth_scope - computed: true, optional: false, required: false
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }

  // token_provider_url - computed: true, optional: false, required: false
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // database_access_control_role - computed: true, optional: false, required: false
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // o_auth_parameters - computed: true, optional: false, required: false
  private _oAuthParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amazon_elasticsearch_parameters - computed: true, optional: false, required: false
  private _amazonElasticsearchParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonElasticsearchParametersOutputReference(this, "amazon_elasticsearch_parameters");
  public get amazonElasticsearchParameters() {
    return this._amazonElasticsearchParameters;
  }

  // amazon_open_search_parameters - computed: true, optional: false, required: false
  private _amazonOpenSearchParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAmazonOpenSearchParametersOutputReference(this, "amazon_open_search_parameters");
  public get amazonOpenSearchParameters() {
    return this._amazonOpenSearchParameters;
  }

  // athena_parameters - computed: true, optional: false, required: false
  private _athenaParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAthenaParametersOutputReference(this, "athena_parameters");
  public get athenaParameters() {
    return this._athenaParameters;
  }

  // aurora_parameters - computed: true, optional: false, required: false
  private _auroraParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraParametersOutputReference(this, "aurora_parameters");
  public get auroraParameters() {
    return this._auroraParameters;
  }

  // aurora_postgre_sql_parameters - computed: true, optional: false, required: false
  private _auroraPostgreSqlParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersAuroraPostgreSqlParametersOutputReference(this, "aurora_postgre_sql_parameters");
  public get auroraPostgreSqlParameters() {
    return this._auroraPostgreSqlParameters;
  }

  // databricks_parameters - computed: true, optional: false, required: false
  private _databricksParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersDatabricksParametersOutputReference(this, "databricks_parameters");
  public get databricksParameters() {
    return this._databricksParameters;
  }

  // maria_db_parameters - computed: true, optional: false, required: false
  private _mariaDbParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMariaDbParametersOutputReference(this, "maria_db_parameters");
  public get mariaDbParameters() {
    return this._mariaDbParameters;
  }

  // my_sql_parameters - computed: true, optional: false, required: false
  private _mySqlParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersMySqlParametersOutputReference(this, "my_sql_parameters");
  public get mySqlParameters() {
    return this._mySqlParameters;
  }

  // oracle_parameters - computed: true, optional: false, required: false
  private _oracleParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOracleParametersOutputReference(this, "oracle_parameters");
  public get oracleParameters() {
    return this._oracleParameters;
  }

  // postgre_sql_parameters - computed: true, optional: false, required: false
  private _postgreSqlParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPostgreSqlParametersOutputReference(this, "postgre_sql_parameters");
  public get postgreSqlParameters() {
    return this._postgreSqlParameters;
  }

  // presto_parameters - computed: true, optional: false, required: false
  private _prestoParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersPrestoParametersOutputReference(this, "presto_parameters");
  public get prestoParameters() {
    return this._prestoParameters;
  }

  // rds_parameters - computed: true, optional: false, required: false
  private _rdsParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRdsParametersOutputReference(this, "rds_parameters");
  public get rdsParameters() {
    return this._rdsParameters;
  }

  // redshift_parameters - computed: true, optional: false, required: false
  private _redshiftParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersRedshiftParametersOutputReference(this, "redshift_parameters");
  public get redshiftParameters() {
    return this._redshiftParameters;
  }

  // s3_parameters - computed: true, optional: false, required: false
  private _s3Parameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3ParametersOutputReference(this, "s3_parameters");
  public get s3Parameters() {
    return this._s3Parameters;
  }

  // s3_tables_parameters - computed: true, optional: false, required: false
  private _s3TablesParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersS3TablesParametersOutputReference(this, "s3_tables_parameters");
  public get s3TablesParameters() {
    return this._s3TablesParameters;
  }

  // snowflake_parameters - computed: true, optional: false, required: false
  private _snowflakeParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSnowflakeParametersOutputReference(this, "snowflake_parameters");
  public get snowflakeParameters() {
    return this._snowflakeParameters;
  }

  // spark_parameters - computed: true, optional: false, required: false
  private _sparkParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSparkParametersOutputReference(this, "spark_parameters");
  public get sparkParameters() {
    return this._sparkParameters;
  }

  // sql_server_parameters - computed: true, optional: false, required: false
  private _sqlServerParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersSqlServerParametersOutputReference(this, "sql_server_parameters");
  public get sqlServerParameters() {
    return this._sqlServerParameters;
  }

  // starburst_parameters - computed: true, optional: false, required: false
  private _starburstParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersStarburstParametersOutputReference(this, "starburst_parameters");
  public get starburstParameters() {
    return this._starburstParameters;
  }

  // teradata_parameters - computed: true, optional: false, required: false
  private _teradataParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTeradataParametersOutputReference(this, "teradata_parameters");
  public get teradataParameters() {
    return this._teradataParameters;
  }

  // trino_parameters - computed: true, optional: false, required: false
  private _trinoParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersTrinoParametersOutputReference(this, "trino_parameters");
  public get trinoParameters() {
    return this._trinoParameters;
  }
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOutputReference {
    return new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsCredentialPair {
}

export function dataAwsccQuicksightDataSourceCredentialsCredentialPairToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPair): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsCredentialPairToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsCredentialPair): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsCredentialPairOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsCredentialPair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsCredentialPair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alternate_data_source_parameters - computed: true, optional: false, required: false
  private _alternateDataSourceParameters = new DataAwsccQuicksightDataSourceCredentialsCredentialPairAlternateDataSourceParametersList(this, "alternate_data_source_parameters", false);
  public get alternateDataSourceParameters() {
    return this._alternateDataSourceParameters;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAwsccQuicksightDataSourceCredentialsKeyPairCredentials {
}

export function dataAwsccQuicksightDataSourceCredentialsKeyPairCredentialsToTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsKeyPairCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsKeyPairCredentialsToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentialsKeyPairCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsKeyPairCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentialsKeyPairCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentialsKeyPairCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_pair_username - computed: true, optional: false, required: false
  public get keyPairUsername() {
    return this.getStringAttribute('key_pair_username');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_passphrase - computed: true, optional: false, required: false
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
}
export interface DataAwsccQuicksightDataSourceCredentials {
}

export function dataAwsccQuicksightDataSourceCredentialsToTerraform(struct?: DataAwsccQuicksightDataSourceCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceCredentialsToHclTerraform(struct?: DataAwsccQuicksightDataSourceCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_source_arn - computed: true, optional: false, required: false
  public get copySourceArn() {
    return this.getStringAttribute('copy_source_arn');
  }

  // credential_pair - computed: true, optional: false, required: false
  private _credentialPair = new DataAwsccQuicksightDataSourceCredentialsCredentialPairOutputReference(this, "credential_pair");
  public get credentialPair() {
    return this._credentialPair;
  }

  // key_pair_credentials - computed: true, optional: false, required: false
  private _keyPairCredentials = new DataAwsccQuicksightDataSourceCredentialsKeyPairCredentialsOutputReference(this, "key_pair_credentials");
  public get keyPairCredentials() {
    return this._keyPairCredentials;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAmazonOpenSearchParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersAmazonOpenSearchParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAmazonOpenSearchParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersAmazonOpenSearchParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_identity_propagation - computed: true, optional: false, required: false
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersAthenaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_center_configuration - computed: true, optional: false, required: false
  private _identityCenterConfiguration = new DataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersAuroraParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersDatabricksParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersDatabricksParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersDatabricksParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersDatabricksParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersDatabricksParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersDatabricksParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersDatabricksParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersDatabricksParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // sql_endpoint_path - computed: true, optional: false, required: false
  public get sqlEndpointPath() {
    return this.getStringAttribute('sql_endpoint_path');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersMySqlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersOracleParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersOracleParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersOracleParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // use_service_name - computed: true, optional: false, required: false
  public get useServiceName() {
    return this.getBooleanAttribute('use_service_name');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersPrestoParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersRdsParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersRdsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersRdsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIamParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIamParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIamParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIamParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_create_database_user - computed: true, optional: false, required: false
  public get autoCreateDatabaseUser() {
    return this.getBooleanAttribute('auto_create_database_user');
  }

  // database_groups - computed: true, optional: false, required: false
  public get databaseGroups() {
    return this.getListAttribute('database_groups');
  }

  // database_user - computed: true, optional: false, required: false
  public get databaseUser() {
    return this.getStringAttribute('database_user');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_identity_propagation - computed: true, optional: false, required: false
  public get enableIdentityPropagation() {
    return this.getBooleanAttribute('enable_identity_propagation');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // iam_parameters - computed: true, optional: false, required: false
  private _iamParameters = new DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIamParametersOutputReference(this, "iam_parameters");
  public get iamParameters() {
    return this._iamParameters;
  }

  // identity_center_configuration - computed: true, optional: false, required: false
  private _identityCenterConfiguration = new DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersIdentityCenterConfigurationOutputReference(this, "identity_center_configuration");
  public get identityCenterConfiguration() {
    return this._identityCenterConfiguration;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersS3ParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersS3Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manifest_file_location - computed: true, optional: false, required: false
  private _manifestFileLocation = new DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersManifestFileLocationOutputReference(this, "manifest_file_location");
  public get manifestFileLocation() {
    return this._manifestFileLocation;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersS3TablesParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersS3TablesParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3TablesParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersS3TablesParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersS3TablesParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersS3TablesParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersS3TablesParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersS3TablesParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_bucket_arn - computed: true, optional: false, required: false
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_connection_arn - computed: true, optional: false, required: false
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: false, required: false
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: false, required: false
  private _identityProviderVpcConnectionProperties = new DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }

  // o_auth_scope - computed: true, optional: false, required: false
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }

  // token_provider_url - computed: true, optional: false, required: false
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // database_access_control_role - computed: true, optional: false, required: false
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // o_auth_parameters - computed: true, optional: false, required: false
  private _oAuthParameters = new DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersSparkParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersSparkParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersSparkParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_connection_arn - computed: true, optional: false, required: false
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider_resource_uri - computed: true, optional: false, required: false
  public get identityProviderResourceUri() {
    return this.getStringAttribute('identity_provider_resource_uri');
  }

  // identity_provider_vpc_connection_properties - computed: true, optional: false, required: false
  private _identityProviderVpcConnectionProperties = new DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersIdentityProviderVpcConnectionPropertiesOutputReference(this, "identity_provider_vpc_connection_properties");
  public get identityProviderVpcConnectionProperties() {
    return this._identityProviderVpcConnectionProperties;
  }

  // o_auth_scope - computed: true, optional: false, required: false
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }

  // token_provider_url - computed: true, optional: false, required: false
  public get tokenProviderUrl() {
    return this.getStringAttribute('token_provider_url');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersStarburstParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersStarburstParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersStarburstParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersStarburstParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersStarburstParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // database_access_control_role - computed: true, optional: false, required: false
  public get databaseAccessControlRole() {
    return this.getStringAttribute('database_access_control_role');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // o_auth_parameters - computed: true, optional: false, required: false
  private _oAuthParameters = new DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOAuthParametersOutputReference(this, "o_auth_parameters");
  public get oAuthParameters() {
    return this._oAuthParameters;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersTeradataParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParametersTrinoParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersTrinoParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersTrinoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersTrinoParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParametersTrinoParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersTrinoParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParametersTrinoParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParametersTrinoParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataAwsccQuicksightDataSourceDataSourceParameters {
}

export function dataAwsccQuicksightDataSourceDataSourceParametersToTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceDataSourceParametersToHclTerraform(struct?: DataAwsccQuicksightDataSourceDataSourceParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceDataSourceParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceDataSourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceDataSourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amazon_elasticsearch_parameters - computed: true, optional: false, required: false
  private _amazonElasticsearchParameters = new DataAwsccQuicksightDataSourceDataSourceParametersAmazonElasticsearchParametersOutputReference(this, "amazon_elasticsearch_parameters");
  public get amazonElasticsearchParameters() {
    return this._amazonElasticsearchParameters;
  }

  // amazon_open_search_parameters - computed: true, optional: false, required: false
  private _amazonOpenSearchParameters = new DataAwsccQuicksightDataSourceDataSourceParametersAmazonOpenSearchParametersOutputReference(this, "amazon_open_search_parameters");
  public get amazonOpenSearchParameters() {
    return this._amazonOpenSearchParameters;
  }

  // athena_parameters - computed: true, optional: false, required: false
  private _athenaParameters = new DataAwsccQuicksightDataSourceDataSourceParametersAthenaParametersOutputReference(this, "athena_parameters");
  public get athenaParameters() {
    return this._athenaParameters;
  }

  // aurora_parameters - computed: true, optional: false, required: false
  private _auroraParameters = new DataAwsccQuicksightDataSourceDataSourceParametersAuroraParametersOutputReference(this, "aurora_parameters");
  public get auroraParameters() {
    return this._auroraParameters;
  }

  // aurora_postgre_sql_parameters - computed: true, optional: false, required: false
  private _auroraPostgreSqlParameters = new DataAwsccQuicksightDataSourceDataSourceParametersAuroraPostgreSqlParametersOutputReference(this, "aurora_postgre_sql_parameters");
  public get auroraPostgreSqlParameters() {
    return this._auroraPostgreSqlParameters;
  }

  // databricks_parameters - computed: true, optional: false, required: false
  private _databricksParameters = new DataAwsccQuicksightDataSourceDataSourceParametersDatabricksParametersOutputReference(this, "databricks_parameters");
  public get databricksParameters() {
    return this._databricksParameters;
  }

  // maria_db_parameters - computed: true, optional: false, required: false
  private _mariaDbParameters = new DataAwsccQuicksightDataSourceDataSourceParametersMariaDbParametersOutputReference(this, "maria_db_parameters");
  public get mariaDbParameters() {
    return this._mariaDbParameters;
  }

  // my_sql_parameters - computed: true, optional: false, required: false
  private _mySqlParameters = new DataAwsccQuicksightDataSourceDataSourceParametersMySqlParametersOutputReference(this, "my_sql_parameters");
  public get mySqlParameters() {
    return this._mySqlParameters;
  }

  // oracle_parameters - computed: true, optional: false, required: false
  private _oracleParameters = new DataAwsccQuicksightDataSourceDataSourceParametersOracleParametersOutputReference(this, "oracle_parameters");
  public get oracleParameters() {
    return this._oracleParameters;
  }

  // postgre_sql_parameters - computed: true, optional: false, required: false
  private _postgreSqlParameters = new DataAwsccQuicksightDataSourceDataSourceParametersPostgreSqlParametersOutputReference(this, "postgre_sql_parameters");
  public get postgreSqlParameters() {
    return this._postgreSqlParameters;
  }

  // presto_parameters - computed: true, optional: false, required: false
  private _prestoParameters = new DataAwsccQuicksightDataSourceDataSourceParametersPrestoParametersOutputReference(this, "presto_parameters");
  public get prestoParameters() {
    return this._prestoParameters;
  }

  // rds_parameters - computed: true, optional: false, required: false
  private _rdsParameters = new DataAwsccQuicksightDataSourceDataSourceParametersRdsParametersOutputReference(this, "rds_parameters");
  public get rdsParameters() {
    return this._rdsParameters;
  }

  // redshift_parameters - computed: true, optional: false, required: false
  private _redshiftParameters = new DataAwsccQuicksightDataSourceDataSourceParametersRedshiftParametersOutputReference(this, "redshift_parameters");
  public get redshiftParameters() {
    return this._redshiftParameters;
  }

  // s3_parameters - computed: true, optional: false, required: false
  private _s3Parameters = new DataAwsccQuicksightDataSourceDataSourceParametersS3ParametersOutputReference(this, "s3_parameters");
  public get s3Parameters() {
    return this._s3Parameters;
  }

  // s3_tables_parameters - computed: true, optional: false, required: false
  private _s3TablesParameters = new DataAwsccQuicksightDataSourceDataSourceParametersS3TablesParametersOutputReference(this, "s3_tables_parameters");
  public get s3TablesParameters() {
    return this._s3TablesParameters;
  }

  // snowflake_parameters - computed: true, optional: false, required: false
  private _snowflakeParameters = new DataAwsccQuicksightDataSourceDataSourceParametersSnowflakeParametersOutputReference(this, "snowflake_parameters");
  public get snowflakeParameters() {
    return this._snowflakeParameters;
  }

  // spark_parameters - computed: true, optional: false, required: false
  private _sparkParameters = new DataAwsccQuicksightDataSourceDataSourceParametersSparkParametersOutputReference(this, "spark_parameters");
  public get sparkParameters() {
    return this._sparkParameters;
  }

  // sql_server_parameters - computed: true, optional: false, required: false
  private _sqlServerParameters = new DataAwsccQuicksightDataSourceDataSourceParametersSqlServerParametersOutputReference(this, "sql_server_parameters");
  public get sqlServerParameters() {
    return this._sqlServerParameters;
  }

  // starburst_parameters - computed: true, optional: false, required: false
  private _starburstParameters = new DataAwsccQuicksightDataSourceDataSourceParametersStarburstParametersOutputReference(this, "starburst_parameters");
  public get starburstParameters() {
    return this._starburstParameters;
  }

  // teradata_parameters - computed: true, optional: false, required: false
  private _teradataParameters = new DataAwsccQuicksightDataSourceDataSourceParametersTeradataParametersOutputReference(this, "teradata_parameters");
  public get teradataParameters() {
    return this._teradataParameters;
  }

  // trino_parameters - computed: true, optional: false, required: false
  private _trinoParameters = new DataAwsccQuicksightDataSourceDataSourceParametersTrinoParametersOutputReference(this, "trino_parameters");
  public get trinoParameters() {
    return this._trinoParameters;
  }
}
export interface DataAwsccQuicksightDataSourceErrorInfo {
}

export function dataAwsccQuicksightDataSourceErrorInfoToTerraform(struct?: DataAwsccQuicksightDataSourceErrorInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceErrorInfoToHclTerraform(struct?: DataAwsccQuicksightDataSourceErrorInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceErrorInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceErrorInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceErrorInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccQuicksightDataSourcePermissions {
}

export function dataAwsccQuicksightDataSourcePermissionsToTerraform(struct?: DataAwsccQuicksightDataSourcePermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourcePermissionsToHclTerraform(struct?: DataAwsccQuicksightDataSourcePermissions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourcePermissionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSourcePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourcePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}

export class DataAwsccQuicksightDataSourcePermissionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSourcePermissionsOutputReference {
    return new DataAwsccQuicksightDataSourcePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSourceSslProperties {
}

export function dataAwsccQuicksightDataSourceSslPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceSslProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceSslPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSourceSslProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceSslPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceSslProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceSslProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_ssl - computed: true, optional: false, required: false
  public get disableSsl() {
    return this.getBooleanAttribute('disable_ssl');
  }
}
export interface DataAwsccQuicksightDataSourceTags {
}

export function dataAwsccQuicksightDataSourceTagsToTerraform(struct?: DataAwsccQuicksightDataSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceTagsToHclTerraform(struct?: DataAwsccQuicksightDataSourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccQuicksightDataSourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceTags | undefined) {
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

export class DataAwsccQuicksightDataSourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccQuicksightDataSourceTagsOutputReference {
    return new DataAwsccQuicksightDataSourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccQuicksightDataSourceVpcConnectionProperties {
}

export function dataAwsccQuicksightDataSourceVpcConnectionPropertiesToTerraform(struct?: DataAwsccQuicksightDataSourceVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightDataSourceVpcConnectionPropertiesToHclTerraform(struct?: DataAwsccQuicksightDataSourceVpcConnectionProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightDataSourceVpcConnectionPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightDataSourceVpcConnectionProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightDataSourceVpcConnectionProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_connection_arn - computed: true, optional: false, required: false
  public get vpcConnectionArn() {
    return this.getStringAttribute('vpc_connection_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_data_source awscc_quicksight_data_source}
*/
export class DataAwsccQuicksightDataSource extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQuicksightDataSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQuicksightDataSource to import
  * @param importFromId The id of the existing DataAwsccQuicksightDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQuicksightDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/quicksight_data_source awscc_quicksight_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_data_source',
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

  // alternate_data_source_parameters - computed: true, optional: false, required: false
  private _alternateDataSourceParameters = new DataAwsccQuicksightDataSourceAlternateDataSourceParametersList(this, "alternate_data_source_parameters", false);
  public get alternateDataSourceParameters() {
    return this._alternateDataSourceParameters;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataAwsccQuicksightDataSourceCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // data_source_parameters - computed: true, optional: false, required: false
  private _dataSourceParameters = new DataAwsccQuicksightDataSourceDataSourceParametersOutputReference(this, "data_source_parameters");
  public get dataSourceParameters() {
    return this._dataSourceParameters;
  }

  // error_info - computed: true, optional: false, required: false
  private _errorInfo = new DataAwsccQuicksightDataSourceErrorInfoOutputReference(this, "error_info");
  public get errorInfo() {
    return this._errorInfo;
  }

  // folder_arns - computed: true, optional: false, required: false
  public get folderArns() {
    return this.getListAttribute('folder_arns');
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataAwsccQuicksightDataSourcePermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // ssl_properties - computed: true, optional: false, required: false
  private _sslProperties = new DataAwsccQuicksightDataSourceSslPropertiesOutputReference(this, "ssl_properties");
  public get sslProperties() {
    return this._sslProperties;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQuicksightDataSourceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_connection_properties - computed: true, optional: false, required: false
  private _vpcConnectionProperties = new DataAwsccQuicksightDataSourceVpcConnectionPropertiesOutputReference(this, "vpc_connection_properties");
  public get vpcConnectionProperties() {
    return this._vpcConnectionProperties;
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
