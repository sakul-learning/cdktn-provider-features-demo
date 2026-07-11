// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appflow_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccAppflowFlowConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appflow_flow#id DataAwsccAppflowFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig | undefined) {
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

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnector {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_properties - computed: true, optional: false, required: false
  private _customProperties = new cdktn.StringMap(this, "custom_properties");
  public get customProperties() {
    return this._customProperties;
  }

  // entity_name - computed: true, optional: false, required: false
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }

  // error_handling_config - computed: true, optional: false, required: false
  private _errorHandlingConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }

  // id_field_names - computed: true, optional: false, required: false
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }

  // write_operation_type - computed: true, optional: false, required: false
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig | undefined) {
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

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_handling_config - computed: true, optional: false, required: false
  private _errorHandlingConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics | undefined) {
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
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfig | undefined) {
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

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketo {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_handling_config - computed: true, optional: false, required: false
  private _errorHandlingConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig | undefined) {
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

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // error_handling_config - computed: true, optional: false, required: false
  private _errorHandlingConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }

  // intermediate_bucket_name - computed: true, optional: false, required: false
  public get intermediateBucketName() {
    return this.getStringAttribute('intermediate_bucket_name');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }

  // target_file_size - computed: true, optional: false, required: false
  public get targetFileSize() {
    return this.getNumberAttribute('target_file_size');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path_prefix_hierarchy - computed: true, optional: false, required: false
  public get pathPrefixHierarchy() {
    return this.getListAttribute('path_prefix_hierarchy');
  }

  // prefix_format - computed: true, optional: false, required: false
  public get prefixFormat() {
    return this.getStringAttribute('prefix_format');
  }

  // prefix_type - computed: true, optional: false, required: false
  public get prefixType() {
    return this.getStringAttribute('prefix_type');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_config - computed: true, optional: false, required: false
  private _aggregationConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference(this, "aggregation_config");
  public get aggregationConfig() {
    return this._aggregationConfig;
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // prefix_config - computed: true, optional: false, required: false
  private _prefixConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference(this, "prefix_config");
  public get prefixConfig() {
    return this._prefixConfig;
  }

  // preserve_source_data_typing - computed: true, optional: false, required: false
  public get preserveSourceDataTyping() {
    return this.getBooleanAttribute('preserve_source_data_typing');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 | undefined) {
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

  // s3_output_format_config - computed: true, optional: false, required: false
  private _s3OutputFormatConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference(this, "s3_output_format_config");
  public get s3OutputFormatConfig() {
    return this._s3OutputFormatConfig;
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig | undefined) {
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

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_transfer_api - computed: true, optional: false, required: false
  public get dataTransferApi() {
    return this.getStringAttribute('data_transfer_api');
  }

  // error_handling_config - computed: true, optional: false, required: false
  private _errorHandlingConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }

  // id_field_names - computed: true, optional: false, required: false
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // write_operation_type - computed: true, optional: false, required: false
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfig | undefined) {
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

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig | undefined) {
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
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoData {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_handling_config - computed: true, optional: false, required: false
  private _errorHandlingConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }

  // id_field_names - computed: true, optional: false, required: false
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }

  // object_path - computed: true, optional: false, required: false
  public get objectPath() {
    return this.getStringAttribute('object_path');
  }

  // success_response_handling_config - computed: true, optional: false, required: false
  private _successResponseHandlingConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference(this, "success_response_handling_config");
  public get successResponseHandlingConfig() {
    return this._successResponseHandlingConfig;
  }

  // write_operation_type - computed: true, optional: false, required: false
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig | undefined) {
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

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // error_handling_config - computed: true, optional: false, required: false
  private _errorHandlingConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }

  // intermediate_bucket_name - computed: true, optional: false, required: false
  public get intermediateBucketName() {
    return this.getStringAttribute('intermediate_bucket_name');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }

  // target_file_size - computed: true, optional: false, required: false
  public get targetFileSize() {
    return this.getNumberAttribute('target_file_size');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path_prefix_hierarchy - computed: true, optional: false, required: false
  public get pathPrefixHierarchy() {
    return this.getListAttribute('path_prefix_hierarchy');
  }

  // prefix_format - computed: true, optional: false, required: false
  public get prefixFormat() {
    return this.getStringAttribute('prefix_format');
  }

  // prefix_type - computed: true, optional: false, required: false
  public get prefixType() {
    return this.getStringAttribute('prefix_type');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_config - computed: true, optional: false, required: false
  private _aggregationConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference(this, "aggregation_config");
  public get aggregationConfig() {
    return this._aggregationConfig;
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // prefix_config - computed: true, optional: false, required: false
  private _prefixConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference(this, "prefix_config");
  public get prefixConfig() {
    return this._prefixConfig;
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver | undefined) {
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

  // s3_output_format_config - computed: true, optional: false, required: false
  private _s3OutputFormatConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference(this, "s3_output_format_config");
  public get s3OutputFormatConfig() {
    return this._s3OutputFormatConfig;
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig | undefined) {
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

  // fail_on_first_error - computed: true, optional: false, required: false
  public get failOnFirstError() {
    return this.getBooleanAttribute('fail_on_first_error');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_handling_config - computed: true, optional: false, required: false
  private _errorHandlingConfig = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }

  // id_field_names - computed: true, optional: false, required: false
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // write_operation_type - computed: true, optional: false, required: false
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_connector - computed: true, optional: false, required: false
  private _customConnector = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }

  // event_bridge - computed: true, optional: false, required: false
  private _eventBridge = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeOutputReference(this, "event_bridge");
  public get eventBridge() {
    return this._eventBridge;
  }

  // lookout_metrics - computed: true, optional: false, required: false
  private _lookoutMetrics = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsOutputReference(this, "lookout_metrics");
  public get lookoutMetrics() {
    return this._lookoutMetrics;
  }

  // marketo - computed: true, optional: false, required: false
  private _marketo = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }

  // redshift - computed: true, optional: false, required: false
  private _redshift = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // salesforce - computed: true, optional: false, required: false
  private _salesforce = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }

  // sapo_data - computed: true, optional: false, required: false
  private _sapoData = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }

  // snowflake - computed: true, optional: false, required: false
  private _snowflake = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }

  // upsolver - computed: true, optional: false, required: false
  private _upsolver = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverOutputReference(this, "upsolver");
  public get upsolver() {
    return this._upsolver;
  }

  // zendesk - computed: true, optional: false, required: false
  private _zendesk = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
}
export interface DataAwsccAppflowFlowDestinationFlowConfigListStruct {
}

export function dataAwsccAppflowFlowDestinationFlowConfigListStructToTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowDestinationFlowConfigListStructToHclTerraform(struct?: DataAwsccAppflowFlowDestinationFlowConfigListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowDestinationFlowConfigListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAppflowFlowDestinationFlowConfigListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowDestinationFlowConfigListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // connector_profile_name - computed: true, optional: false, required: false
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // destination_connector_properties - computed: true, optional: false, required: false
  private _destinationConnectorProperties = new DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesOutputReference(this, "destination_connector_properties");
  public get destinationConnectorProperties() {
    return this._destinationConnectorProperties;
  }
}

export class DataAwsccAppflowFlowDestinationFlowConfigListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppflowFlowDestinationFlowConfigListStructOutputReference {
    return new DataAwsccAppflowFlowDestinationFlowConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppflowFlowMetadataCatalogConfigGlueDataCatalog {
}

export function dataAwsccAppflowFlowMetadataCatalogConfigGlueDataCatalogToTerraform(struct?: DataAwsccAppflowFlowMetadataCatalogConfigGlueDataCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowMetadataCatalogConfigGlueDataCatalogToHclTerraform(struct?: DataAwsccAppflowFlowMetadataCatalogConfigGlueDataCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowMetadataCatalogConfigGlueDataCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowMetadataCatalogConfigGlueDataCatalog | undefined) {
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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_prefix - computed: true, optional: false, required: false
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
}
export interface DataAwsccAppflowFlowMetadataCatalogConfig {
}

export function dataAwsccAppflowFlowMetadataCatalogConfigToTerraform(struct?: DataAwsccAppflowFlowMetadataCatalogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowMetadataCatalogConfigToHclTerraform(struct?: DataAwsccAppflowFlowMetadataCatalogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowMetadataCatalogConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowMetadataCatalogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowMetadataCatalogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // glue_data_catalog - computed: true, optional: false, required: false
  private _glueDataCatalog = new DataAwsccAppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference(this, "glue_data_catalog");
  public get glueDataCatalog() {
    return this._glueDataCatalog;
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig {
}

export function dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorDataTransferApi {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorDataTransferApiToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorDataTransferApi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorDataTransferApiToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorDataTransferApi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorDataTransferApiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorDataTransferApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorDataTransferApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_properties - computed: true, optional: false, required: false
  private _customProperties = new cdktn.StringMap(this, "custom_properties");
  public get customProperties() {
    return this._customProperties;
  }

  // data_transfer_api - computed: true, optional: false, required: false
  private _dataTransferApi = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorDataTransferApiOutputReference(this, "data_transfer_api");
  public get dataTransferApi() {
    return this._dataTransferApi;
  }

  // entity_name - computed: true, optional: false, required: false
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesPardot {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesPardotToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesPardot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesPardotToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesPardot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesPardotOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesPardot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesPardot | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_input_file_type - computed: true, optional: false, required: false
  public get s3InputFileType() {
    return this.getStringAttribute('s3_input_file_type');
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 | undefined) {
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

  // s3_input_format_config - computed: true, optional: false, required: false
  private _s3InputFormatConfig = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference(this, "s3_input_format_config");
  public get s3InputFormatConfig() {
    return this._s3InputFormatConfig;
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_transfer_api - computed: true, optional: false, required: false
  public get dataTransferApi() {
    return this.getStringAttribute('data_transfer_api');
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_page_size - computed: true, optional: false, required: false
  public get maxPageSize() {
    return this.getNumberAttribute('max_page_size');
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_parallelism - computed: true, optional: false, required: false
  public get maxParallelism() {
    return this.getNumberAttribute('max_parallelism');
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_path - computed: true, optional: false, required: false
  public get objectPath() {
    return this.getStringAttribute('object_path');
  }

  // pagination_config - computed: true, optional: false, required: false
  private _paginationConfig = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference(this, "pagination_config");
  public get paginationConfig() {
    return this._paginationConfig;
  }

  // parallelism_config - computed: true, optional: false, required: false
  private _parallelismConfig = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference(this, "parallelism_config");
  public get parallelismConfig() {
    return this._parallelismConfig;
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // document_type - computed: true, optional: false, required: false
  public get documentType() {
    return this.getStringAttribute('document_type');
  }

  // include_all_versions - computed: true, optional: false, required: false
  public get includeAllVersions() {
    return this.getBooleanAttribute('include_all_versions');
  }

  // include_renditions - computed: true, optional: false, required: false
  public get includeRenditions() {
    return this.getBooleanAttribute('include_renditions');
  }

  // include_source_files - computed: true, optional: false, required: false
  public get includeSourceFiles() {
    return this.getBooleanAttribute('include_source_files');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk | undefined) {
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
export interface DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties {
}

export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amplitude - computed: true, optional: false, required: false
  private _amplitude = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference(this, "amplitude");
  public get amplitude() {
    return this._amplitude;
  }

  // custom_connector - computed: true, optional: false, required: false
  private _customConnector = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }

  // datadog - computed: true, optional: false, required: false
  private _datadog = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }

  // dynatrace - computed: true, optional: false, required: false
  private _dynatrace = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }

  // google_analytics - computed: true, optional: false, required: false
  private _googleAnalytics = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference(this, "google_analytics");
  public get googleAnalytics() {
    return this._googleAnalytics;
  }

  // infor_nexus - computed: true, optional: false, required: false
  private _inforNexus = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }

  // marketo - computed: true, optional: false, required: false
  private _marketo = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }

  // pardot - computed: true, optional: false, required: false
  private _pardot = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesPardotOutputReference(this, "pardot");
  public get pardot() {
    return this._pardot;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // salesforce - computed: true, optional: false, required: false
  private _salesforce = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }

  // sapo_data - computed: true, optional: false, required: false
  private _sapoData = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }

  // service_now - computed: true, optional: false, required: false
  private _serviceNow = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }

  // singular - computed: true, optional: false, required: false
  private _singular = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference(this, "singular");
  public get singular() {
    return this._singular;
  }

  // slack - computed: true, optional: false, required: false
  private _slack = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }

  // trendmicro - computed: true, optional: false, required: false
  private _trendmicro = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference(this, "trendmicro");
  public get trendmicro() {
    return this._trendmicro;
  }

  // veeva - computed: true, optional: false, required: false
  private _veeva = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }

  // zendesk - computed: true, optional: false, required: false
  private _zendesk = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
}
export interface DataAwsccAppflowFlowSourceFlowConfig {
}

export function dataAwsccAppflowFlowSourceFlowConfigToTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowSourceFlowConfigToHclTerraform(struct?: DataAwsccAppflowFlowSourceFlowConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowSourceFlowConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowSourceFlowConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowSourceFlowConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
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
  private _incrementalPullConfig = new DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference(this, "incremental_pull_config");
  public get incrementalPullConfig() {
    return this._incrementalPullConfig;
  }

  // source_connector_properties - computed: true, optional: false, required: false
  private _sourceConnectorProperties = new DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference(this, "source_connector_properties");
  public get sourceConnectorProperties() {
    return this._sourceConnectorProperties;
  }
}
export interface DataAwsccAppflowFlowTags {
}

export function dataAwsccAppflowFlowTagsToTerraform(struct?: DataAwsccAppflowFlowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowTagsToHclTerraform(struct?: DataAwsccAppflowFlowTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAppflowFlowTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowTags | undefined) {
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

export class DataAwsccAppflowFlowTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppflowFlowTagsOutputReference {
    return new DataAwsccAppflowFlowTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppflowFlowTasksConnectorOperator {
}

export function dataAwsccAppflowFlowTasksConnectorOperatorToTerraform(struct?: DataAwsccAppflowFlowTasksConnectorOperator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowTasksConnectorOperatorToHclTerraform(struct?: DataAwsccAppflowFlowTasksConnectorOperator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowTasksConnectorOperatorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowTasksConnectorOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowTasksConnectorOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amplitude - computed: true, optional: false, required: false
  public get amplitude() {
    return this.getStringAttribute('amplitude');
  }

  // custom_connector - computed: true, optional: false, required: false
  public get customConnector() {
    return this.getStringAttribute('custom_connector');
  }

  // datadog - computed: true, optional: false, required: false
  public get datadog() {
    return this.getStringAttribute('datadog');
  }

  // dynatrace - computed: true, optional: false, required: false
  public get dynatrace() {
    return this.getStringAttribute('dynatrace');
  }

  // google_analytics - computed: true, optional: false, required: false
  public get googleAnalytics() {
    return this.getStringAttribute('google_analytics');
  }

  // infor_nexus - computed: true, optional: false, required: false
  public get inforNexus() {
    return this.getStringAttribute('infor_nexus');
  }

  // marketo - computed: true, optional: false, required: false
  public get marketo() {
    return this.getStringAttribute('marketo');
  }

  // pardot - computed: true, optional: false, required: false
  public get pardot() {
    return this.getStringAttribute('pardot');
  }

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.getStringAttribute('s3');
  }

  // salesforce - computed: true, optional: false, required: false
  public get salesforce() {
    return this.getStringAttribute('salesforce');
  }

  // sapo_data - computed: true, optional: false, required: false
  public get sapoData() {
    return this.getStringAttribute('sapo_data');
  }

  // service_now - computed: true, optional: false, required: false
  public get serviceNow() {
    return this.getStringAttribute('service_now');
  }

  // singular - computed: true, optional: false, required: false
  public get singular() {
    return this.getStringAttribute('singular');
  }

  // slack - computed: true, optional: false, required: false
  public get slack() {
    return this.getStringAttribute('slack');
  }

  // trendmicro - computed: true, optional: false, required: false
  public get trendmicro() {
    return this.getStringAttribute('trendmicro');
  }

  // veeva - computed: true, optional: false, required: false
  public get veeva() {
    return this.getStringAttribute('veeva');
  }

  // zendesk - computed: true, optional: false, required: false
  public get zendesk() {
    return this.getStringAttribute('zendesk');
  }
}
export interface DataAwsccAppflowFlowTasksTaskProperties {
}

export function dataAwsccAppflowFlowTasksTaskPropertiesToTerraform(struct?: DataAwsccAppflowFlowTasksTaskProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowTasksTaskPropertiesToHclTerraform(struct?: DataAwsccAppflowFlowTasksTaskProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowTasksTaskPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAppflowFlowTasksTaskProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowTasksTaskProperties | undefined) {
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

export class DataAwsccAppflowFlowTasksTaskPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppflowFlowTasksTaskPropertiesOutputReference {
    return new DataAwsccAppflowFlowTasksTaskPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppflowFlowTasks {
}

export function dataAwsccAppflowFlowTasksToTerraform(struct?: DataAwsccAppflowFlowTasks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowTasksToHclTerraform(struct?: DataAwsccAppflowFlowTasks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccAppflowFlowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_operator - computed: true, optional: false, required: false
  private _connectorOperator = new DataAwsccAppflowFlowTasksConnectorOperatorOutputReference(this, "connector_operator");
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
  private _taskProperties = new DataAwsccAppflowFlowTasksTaskPropertiesList(this, "task_properties", false);
  public get taskProperties() {
    return this._taskProperties;
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
}

export class DataAwsccAppflowFlowTasksList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccAppflowFlowTasksOutputReference {
    return new DataAwsccAppflowFlowTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccAppflowFlowTriggerConfigTriggerProperties {
}

export function dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToTerraform(struct?: DataAwsccAppflowFlowTriggerConfigTriggerProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToHclTerraform(struct?: DataAwsccAppflowFlowTriggerConfigTriggerProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowTriggerConfigTriggerPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowTriggerConfigTriggerProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowTriggerConfigTriggerProperties | undefined) {
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

  // flow_error_deactivation_threshold - computed: true, optional: false, required: false
  public get flowErrorDeactivationThreshold() {
    return this.getNumberAttribute('flow_error_deactivation_threshold');
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

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}
export interface DataAwsccAppflowFlowTriggerConfig {
}

export function dataAwsccAppflowFlowTriggerConfigToTerraform(struct?: DataAwsccAppflowFlowTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccAppflowFlowTriggerConfigToHclTerraform(struct?: DataAwsccAppflowFlowTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccAppflowFlowTriggerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccAppflowFlowTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccAppflowFlowTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trigger_properties - computed: true, optional: false, required: false
  private _triggerProperties = new DataAwsccAppflowFlowTriggerConfigTriggerPropertiesOutputReference(this, "trigger_properties");
  public get triggerProperties() {
    return this._triggerProperties;
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appflow_flow awscc_appflow_flow}
*/
export class DataAwsccAppflowFlow extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_appflow_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccAppflowFlow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccAppflowFlow to import
  * @param importFromId The id of the existing DataAwsccAppflowFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appflow_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccAppflowFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appflow_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/appflow_flow awscc_appflow_flow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAppflowFlowConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAppflowFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appflow_flow',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_flow_config_list - computed: true, optional: false, required: false
  private _destinationFlowConfigList = new DataAwsccAppflowFlowDestinationFlowConfigListStructList(this, "destination_flow_config_list", false);
  public get destinationFlowConfigList() {
    return this._destinationFlowConfigList;
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_name - computed: true, optional: false, required: false
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }

  // flow_status - computed: true, optional: false, required: false
  public get flowStatus() {
    return this.getStringAttribute('flow_status');
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

  // kms_arn - computed: true, optional: false, required: false
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }

  // metadata_catalog_config - computed: true, optional: false, required: false
  private _metadataCatalogConfig = new DataAwsccAppflowFlowMetadataCatalogConfigOutputReference(this, "metadata_catalog_config");
  public get metadataCatalogConfig() {
    return this._metadataCatalogConfig;
  }

  // source_flow_config - computed: true, optional: false, required: false
  private _sourceFlowConfig = new DataAwsccAppflowFlowSourceFlowConfigOutputReference(this, "source_flow_config");
  public get sourceFlowConfig() {
    return this._sourceFlowConfig;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccAppflowFlowTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataAwsccAppflowFlowTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // trigger_config - computed: true, optional: false, required: false
  private _triggerConfig = new DataAwsccAppflowFlowTriggerConfigOutputReference(this, "trigger_config");
  public get triggerConfig() {
    return this._triggerConfig;
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
