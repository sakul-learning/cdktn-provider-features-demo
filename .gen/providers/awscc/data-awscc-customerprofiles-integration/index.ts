// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/customerprofiles_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccCustomerprofilesIntegrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/customerprofiles_integration#id DataAwsccCustomerprofilesIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datetime_type_field_name - computed: true, optional: false, required: false
  public get datetimeTypeFieldName() {
    return this.getStringAttribute('datetime_type_field_name');
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_dynamic_field_update - computed: true, optional: false, required: false
  public get enableDynamicFieldUpdate() {
    return this.getBooleanAttribute('enable_dynamic_field_update');
  }

  // include_deleted_records - computed: true, optional: false, required: false
  public get includeDeletedRecords() {
    return this.getBooleanAttribute('include_deleted_records');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // marketo - computed: true, optional: false, required: false
  private _marketo = new DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // salesforce - computed: true, optional: false, required: false
  private _salesforce = new DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }

  // service_now - computed: true, optional: false, required: false
  private _serviceNow = new DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }

  // zendesk - computed: true, optional: false, required: false
  private _zendesk = new DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_profile_name - computed: true, optional: false, required: false
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // incremental_pull_config - computed: true, optional: false, required: false
  private _incrementalPullConfig = new DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference(this, "incremental_pull_config");
  public get incrementalPullConfig() {
    return this._incrementalPullConfig;
  }

  // source_connector_properties - computed: true, optional: false, required: false
  private _sourceConnectorProperties = new DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference(this, "source_connector_properties");
  public get sourceConnectorProperties() {
    return this._sourceConnectorProperties;
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // marketo - computed: true, optional: false, required: false
  public get marketo() {
    return this.getStringAttribute('marketo');
  }

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.getStringAttribute('s3');
  }

  // salesforce - computed: true, optional: false, required: false
  public get salesforce() {
    return this.getStringAttribute('salesforce');
  }

  // service_now - computed: true, optional: false, required: false
  public get serviceNow() {
    return this.getStringAttribute('service_now');
  }

  // zendesk - computed: true, optional: false, required: false
  public get zendesk() {
    return this.getStringAttribute('zendesk');
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator_property_key - computed: true, optional: false, required: false
  public get operatorPropertyKey() {
    return this.getStringAttribute('operator_property_key');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference {
    return new DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTasksToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_operator - computed: true, optional: false, required: false
  private _connectorOperator = new DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference(this, "connector_operator");
  public get connectorOperator() {
    return this._connectorOperator;
  }

  // destination_field - computed: true, optional: false, required: false
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }

  // source_fields - computed: true, optional: false, required: false
  public get sourceFields() {
    return this.getListAttribute('source_fields');
  }

  // task_properties - computed: true, optional: false, required: false
  private _taskProperties = new DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList(this, "task_properties", false);
  public get taskProperties() {
    return this._taskProperties;
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference {
    return new DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_pull_mode - computed: true, optional: false, required: false
  public get dataPullMode() {
    return this.getStringAttribute('data_pull_mode');
  }

  // first_execution_from - computed: true, optional: false, required: false
  public get firstExecutionFrom() {
    return this.getNumberAttribute('first_execution_from');
  }

  // schedule_end_time - computed: true, optional: false, required: false
  public get scheduleEndTime() {
    return this.getNumberAttribute('schedule_end_time');
  }

  // schedule_expression - computed: true, optional: false, required: false
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }

  // schedule_offset - computed: true, optional: false, required: false
  public get scheduleOffset() {
    return this.getNumberAttribute('schedule_offset');
  }

  // schedule_start_time - computed: true, optional: false, required: false
  public get scheduleStartTime() {
    return this.getNumberAttribute('schedule_start_time');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scheduled - computed: true, optional: false, required: false
  private _scheduled = new DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference(this, "scheduled");
  public get scheduled() {
    return this._scheduled;
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trigger_properties - computed: true, optional: false, required: false
  private _triggerProperties = new DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference(this, "trigger_properties");
  public get triggerProperties() {
    return this._triggerProperties;
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
}
export interface DataAwsccCustomerprofilesIntegrationFlowDefinition {
}

export function dataAwsccCustomerprofilesIntegrationFlowDefinitionToTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationFlowDefinitionToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationFlowDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccCustomerprofilesIntegrationFlowDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationFlowDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // flow_name - computed: true, optional: false, required: false
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }

  // kms_arn - computed: true, optional: false, required: false
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }

  // source_flow_config - computed: true, optional: false, required: false
  private _sourceFlowConfig = new DataAwsccCustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference(this, "source_flow_config");
  public get sourceFlowConfig() {
    return this._sourceFlowConfig;
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataAwsccCustomerprofilesIntegrationFlowDefinitionTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // trigger_config - computed: true, optional: false, required: false
  private _triggerConfig = new DataAwsccCustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference(this, "trigger_config");
  public get triggerConfig() {
    return this._triggerConfig;
  }
}
export interface DataAwsccCustomerprofilesIntegrationObjectTypeNames {
}

export function dataAwsccCustomerprofilesIntegrationObjectTypeNamesToTerraform(struct?: DataAwsccCustomerprofilesIntegrationObjectTypeNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationObjectTypeNamesToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationObjectTypeNames): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesIntegrationObjectTypeNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationObjectTypeNames | undefined) {
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

export class DataAwsccCustomerprofilesIntegrationObjectTypeNamesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference {
    return new DataAwsccCustomerprofilesIntegrationObjectTypeNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccCustomerprofilesIntegrationTags {
}

export function dataAwsccCustomerprofilesIntegrationTagsToTerraform(struct?: DataAwsccCustomerprofilesIntegrationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccCustomerprofilesIntegrationTagsToHclTerraform(struct?: DataAwsccCustomerprofilesIntegrationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccCustomerprofilesIntegrationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccCustomerprofilesIntegrationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccCustomerprofilesIntegrationTags | undefined) {
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

export class DataAwsccCustomerprofilesIntegrationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccCustomerprofilesIntegrationTagsOutputReference {
    return new DataAwsccCustomerprofilesIntegrationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/customerprofiles_integration awscc_customerprofiles_integration}
*/
export class DataAwsccCustomerprofilesIntegration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccCustomerprofilesIntegration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccCustomerprofilesIntegration to import
  * @param importFromId The id of the existing DataAwsccCustomerprofilesIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/customerprofiles_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccCustomerprofilesIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/customerprofiles_integration awscc_customerprofiles_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCustomerprofilesIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_customerprofiles_integration',
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

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // event_trigger_names - computed: true, optional: false, required: false
  public get eventTriggerNames() {
    return this.getListAttribute('event_trigger_names');
  }

  // flow_definition - computed: true, optional: false, required: false
  private _flowDefinition = new DataAwsccCustomerprofilesIntegrationFlowDefinitionOutputReference(this, "flow_definition");
  public get flowDefinition() {
    return this._flowDefinition;
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // object_type_name - computed: true, optional: false, required: false
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }

  // object_type_names - computed: true, optional: false, required: false
  private _objectTypeNames = new DataAwsccCustomerprofilesIntegrationObjectTypeNamesList(this, "object_type_names", false);
  public get objectTypeNames() {
    return this._objectTypeNames;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccCustomerprofilesIntegrationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
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
