// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CustomerprofilesIntegrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * The unique name of the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#domain_name CustomerprofilesIntegration#domain_name}
  */
  readonly domainName: string;
  /**
  * A list of unique names for active event triggers associated with the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#event_trigger_names CustomerprofilesIntegration#event_trigger_names}
  */
  readonly eventTriggerNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#flow_definition CustomerprofilesIntegration#flow_definition}
  */
  readonly flowDefinition?: CustomerprofilesIntegrationFlowDefinition;
  /**
  * The name of the ObjectType defined for the 3rd party data in Profile Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#object_type_name CustomerprofilesIntegration#object_type_name}
  */
  readonly objectTypeName?: string;
  /**
  * The mapping between 3rd party event types and ObjectType names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#object_type_names CustomerprofilesIntegration#object_type_names}
  */
  readonly objectTypeNames?: CustomerprofilesIntegrationObjectTypeNames[] | cdktn.IResolvable;
  /**
  * Scope of the integration, such as 'PROFILE' or 'DOMAIN'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#scope CustomerprofilesIntegration#scope}
  */
  readonly scope?: string;
  /**
  * The tags (keys and values) associated with the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#tags CustomerprofilesIntegration#tags}
  */
  readonly tags?: CustomerprofilesIntegrationTags[] | cdktn.IResolvable;
  /**
  * The URI of the S3 bucket or any other type of data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#uri CustomerprofilesIntegration#uri}
  */
  readonly uri?: string;
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#datetime_type_field_name CustomerprofilesIntegration#datetime_type_field_name}
  */
  readonly datetimeTypeFieldName?: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    datetime_type_field_name: cdktn.stringToTerraform(struct!.datetimeTypeFieldName),
  }
}


export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    datetime_type_field_name: {
      value: cdktn.stringToHclTerraform(struct!.datetimeTypeFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datetimeTypeFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetimeTypeFieldName = this._datetimeTypeFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datetimeTypeFieldName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datetimeTypeFieldName = value.datetimeTypeFieldName;
    }
  }

  // datetime_type_field_name - computed: true, optional: true, required: false
  private _datetimeTypeFieldName?: string; 
  public get datetimeTypeFieldName() {
    return this.getStringAttribute('datetime_type_field_name');
  }
  public set datetimeTypeFieldName(value: string) {
    this._datetimeTypeFieldName = value;
  }
  public resetDatetimeTypeFieldName() {
    this._datetimeTypeFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeTypeFieldNameInput() {
    return this._datetimeTypeFieldName;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}
  */
  readonly object?: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._object = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._object = value.object;
    }
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#bucket_name CustomerprofilesIntegration#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#bucket_prefix CustomerprofilesIntegration#bucket_prefix}
  */
  readonly bucketPrefix?: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
  }
}


export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
    }
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: true, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#enable_dynamic_field_update CustomerprofilesIntegration#enable_dynamic_field_update}
  */
  readonly enableDynamicFieldUpdate?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#include_deleted_records CustomerprofilesIntegration#include_deleted_records}
  */
  readonly includeDeletedRecords?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}
  */
  readonly object?: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_dynamic_field_update: cdktn.booleanToTerraform(struct!.enableDynamicFieldUpdate),
    include_deleted_records: cdktn.booleanToTerraform(struct!.includeDeletedRecords),
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_dynamic_field_update: {
      value: cdktn.booleanToHclTerraform(struct!.enableDynamicFieldUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_deleted_records: {
      value: cdktn.booleanToHclTerraform(struct!.includeDeletedRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableDynamicFieldUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDynamicFieldUpdate = this._enableDynamicFieldUpdate;
    }
    if (this._includeDeletedRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeletedRecords = this._includeDeletedRecords;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableDynamicFieldUpdate = undefined;
      this._includeDeletedRecords = undefined;
      this._object = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableDynamicFieldUpdate = value.enableDynamicFieldUpdate;
      this._includeDeletedRecords = value.includeDeletedRecords;
      this._object = value.object;
    }
  }

  // enable_dynamic_field_update - computed: true, optional: true, required: false
  private _enableDynamicFieldUpdate?: boolean | cdktn.IResolvable; 
  public get enableDynamicFieldUpdate() {
    return this.getBooleanAttribute('enable_dynamic_field_update');
  }
  public set enableDynamicFieldUpdate(value: boolean | cdktn.IResolvable) {
    this._enableDynamicFieldUpdate = value;
  }
  public resetEnableDynamicFieldUpdate() {
    this._enableDynamicFieldUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDynamicFieldUpdateInput() {
    return this._enableDynamicFieldUpdate;
  }

  // include_deleted_records - computed: true, optional: true, required: false
  private _includeDeletedRecords?: boolean | cdktn.IResolvable; 
  public get includeDeletedRecords() {
    return this.getBooleanAttribute('include_deleted_records');
  }
  public set includeDeletedRecords(value: boolean | cdktn.IResolvable) {
    this._includeDeletedRecords = value;
  }
  public resetIncludeDeletedRecords() {
    this._includeDeletedRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedRecordsInput() {
    return this._includeDeletedRecords;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}
  */
  readonly object?: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._object = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._object = value.object;
    }
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#object CustomerprofilesIntegration#object}
  */
  readonly object?: string;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    object: cdktn.stringToTerraform(struct!.object),
  }
}


export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    object: {
      value: cdktn.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._object = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._object = value.object;
    }
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}
  */
  readonly marketo?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}
  */
  readonly s3?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}
  */
  readonly salesforce?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}
  */
  readonly serviceNow?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}
  */
  readonly zendesk?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    marketo: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct!.marketo),
    s3: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct!.s3),
    salesforce: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct!.salesforce),
    service_now: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct!.serviceNow),
    zendesk: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct!.zendesk),
  }
}


export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    marketo: {
      value: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoToHclTerraform(struct!.marketo),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo",
    },
    s3: {
      value: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3",
    },
    salesforce: {
      value: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce",
    },
    service_now: {
      value: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow",
    },
    zendesk: {
      value: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._marketo.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._marketo.internalValue = value.marketo;
      this._s3.internalValue = value.s3;
      this._salesforce.internalValue = value.salesforce;
      this._serviceNow.internalValue = value.serviceNow;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // marketo - computed: true, optional: true, required: false
  private _marketo = new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesMarketo) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3 = new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // salesforce - computed: true, optional: true, required: false
  private _salesforce = new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesSalesforce) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // service_now - computed: true, optional: true, required: false
  private _serviceNow = new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // zendesk - computed: true, optional: true, required: false
  private _zendesk = new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#connector_profile_name CustomerprofilesIntegration#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#connector_type CustomerprofilesIntegration#connector_type}
  */
  readonly connectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#incremental_pull_config CustomerprofilesIntegration#incremental_pull_config}
  */
  readonly incrementalPullConfig?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#source_connector_properties CustomerprofilesIntegration#source_connector_properties}
  */
  readonly sourceConnectorProperties?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties;
}

export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_profile_name: cdktn.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktn.stringToTerraform(struct!.connectorType),
    incremental_pull_config: customerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToTerraform(struct!.incrementalPullConfig),
    source_connector_properties: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToTerraform(struct!.sourceConnectorProperties),
  }
}


export function customerprofilesIntegrationFlowDefinitionSourceFlowConfigToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_profile_name: {
      value: cdktn.stringToHclTerraform(struct!.connectorProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktn.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incremental_pull_config: {
      value: customerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigToHclTerraform(struct!.incrementalPullConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig",
    },
    source_connector_properties: {
      value: customerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesToHclTerraform(struct!.sourceConnectorProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileName = this._connectorProfileName;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._incrementalPullConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalPullConfig = this._incrementalPullConfig?.internalValue;
    }
    if (this._sourceConnectorProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectorProperties = this._sourceConnectorProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorProfileName = undefined;
      this._connectorType = undefined;
      this._incrementalPullConfig.internalValue = undefined;
      this._sourceConnectorProperties.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorProfileName = value.connectorProfileName;
      this._connectorType = value.connectorType;
      this._incrementalPullConfig.internalValue = value.incrementalPullConfig;
      this._sourceConnectorProperties.internalValue = value.sourceConnectorProperties;
    }
  }

  // connector_profile_name - computed: true, optional: true, required: false
  private _connectorProfileName?: string; 
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }
  public set connectorProfileName(value: string) {
    this._connectorProfileName = value;
  }
  public resetConnectorProfileName() {
    this._connectorProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileNameInput() {
    return this._connectorProfileName;
  }

  // connector_type - computed: true, optional: true, required: false
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  public resetConnectorType() {
    this._connectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // incremental_pull_config - computed: true, optional: true, required: false
  private _incrementalPullConfig = new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfigOutputReference(this, "incremental_pull_config");
  public get incrementalPullConfig() {
    return this._incrementalPullConfig;
  }
  public putIncrementalPullConfig(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigIncrementalPullConfig) {
    this._incrementalPullConfig.internalValue = value;
  }
  public resetIncrementalPullConfig() {
    this._incrementalPullConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalPullConfigInput() {
    return this._incrementalPullConfig.internalValue;
  }

  // source_connector_properties - computed: true, optional: true, required: false
  private _sourceConnectorProperties = new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorPropertiesOutputReference(this, "source_connector_properties");
  public get sourceConnectorProperties() {
    return this._sourceConnectorProperties;
  }
  public putSourceConnectorProperties(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigSourceConnectorProperties) {
    this._sourceConnectorProperties.internalValue = value;
  }
  public resetSourceConnectorProperties() {
    this._sourceConnectorProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectorPropertiesInput() {
    return this._sourceConnectorProperties.internalValue;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#marketo CustomerprofilesIntegration#marketo}
  */
  readonly marketo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#s3 CustomerprofilesIntegration#s3}
  */
  readonly s3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#salesforce CustomerprofilesIntegration#salesforce}
  */
  readonly salesforce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#service_now CustomerprofilesIntegration#service_now}
  */
  readonly serviceNow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#zendesk CustomerprofilesIntegration#zendesk}
  */
  readonly zendesk?: string;
}

export function customerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    marketo: cdktn.stringToTerraform(struct!.marketo),
    s3: cdktn.stringToTerraform(struct!.s3),
    salesforce: cdktn.stringToTerraform(struct!.salesforce),
    service_now: cdktn.stringToTerraform(struct!.serviceNow),
    zendesk: cdktn.stringToTerraform(struct!.zendesk),
  }
}


export function customerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    marketo: {
      value: cdktn.stringToHclTerraform(struct!.marketo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktn.stringToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salesforce: {
      value: cdktn.stringToHclTerraform(struct!.salesforce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_now: {
      value: cdktn.stringToHclTerraform(struct!.serviceNow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zendesk: {
      value: cdktn.stringToHclTerraform(struct!.zendesk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._marketo !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo;
    }
    if (this._s3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3;
    }
    if (this._salesforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce;
    }
    if (this._serviceNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow;
    }
    if (this._zendesk !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._marketo = undefined;
      this._s3 = undefined;
      this._salesforce = undefined;
      this._serviceNow = undefined;
      this._zendesk = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._marketo = value.marketo;
      this._s3 = value.s3;
      this._salesforce = value.salesforce;
      this._serviceNow = value.serviceNow;
      this._zendesk = value.zendesk;
    }
  }

  // marketo - computed: true, optional: true, required: false
  private _marketo?: string; 
  public get marketo() {
    return this.getStringAttribute('marketo');
  }
  public set marketo(value: string) {
    this._marketo = value;
  }
  public resetMarketo() {
    this._marketo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo;
  }

  // s3 - computed: true, optional: true, required: false
  private _s3?: string; 
  public get s3() {
    return this.getStringAttribute('s3');
  }
  public set s3(value: string) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3;
  }

  // salesforce - computed: true, optional: true, required: false
  private _salesforce?: string; 
  public get salesforce() {
    return this.getStringAttribute('salesforce');
  }
  public set salesforce(value: string) {
    this._salesforce = value;
  }
  public resetSalesforce() {
    this._salesforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce;
  }

  // service_now - computed: true, optional: true, required: false
  private _serviceNow?: string; 
  public get serviceNow() {
    return this.getStringAttribute('service_now');
  }
  public set serviceNow(value: string) {
    this._serviceNow = value;
  }
  public resetServiceNow() {
    this._serviceNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow;
  }

  // zendesk - computed: true, optional: true, required: false
  private _zendesk?: string; 
  public get zendesk() {
    return this.getStringAttribute('zendesk');
  }
  public set zendesk(value: string) {
    this._zendesk = value;
  }
  public resetZendesk() {
    this._zendesk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#operator_property_key CustomerprofilesIntegration#operator_property_key}
  */
  readonly operatorPropertyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#property CustomerprofilesIntegration#property}
  */
  readonly property?: string;
}

export function customerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator_property_key: cdktn.stringToTerraform(struct!.operatorPropertyKey),
    property: cdktn.stringToTerraform(struct!.property),
  }
}


export function customerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator_property_key: {
      value: cdktn.stringToHclTerraform(struct!.operatorPropertyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktn.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operatorPropertyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorPropertyKey = this._operatorPropertyKey;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operatorPropertyKey = undefined;
      this._property = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operatorPropertyKey = value.operatorPropertyKey;
      this._property = value.property;
    }
  }

  // operator_property_key - computed: true, optional: true, required: false
  private _operatorPropertyKey?: string; 
  public get operatorPropertyKey() {
    return this.getStringAttribute('operator_property_key');
  }
  public set operatorPropertyKey(value: string) {
    this._operatorPropertyKey = value;
  }
  public resetOperatorPropertyKey() {
    this._operatorPropertyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorPropertyKeyInput() {
    return this._operatorPropertyKey;
  }

  // property - computed: true, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}

export class CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference {
    return new CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#connector_operator CustomerprofilesIntegration#connector_operator}
  */
  readonly connectorOperator?: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#destination_field CustomerprofilesIntegration#destination_field}
  */
  readonly destinationField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#source_fields CustomerprofilesIntegration#source_fields}
  */
  readonly sourceFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#task_properties CustomerprofilesIntegration#task_properties}
  */
  readonly taskProperties?: CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#task_type CustomerprofilesIntegration#task_type}
  */
  readonly taskType?: string;
}

export function customerprofilesIntegrationFlowDefinitionTasksToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_operator: customerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToTerraform(struct!.connectorOperator),
    destination_field: cdktn.stringToTerraform(struct!.destinationField),
    source_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceFields),
    task_properties: cdktn.listMapper(customerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToTerraform, false)(struct!.taskProperties),
    task_type: cdktn.stringToTerraform(struct!.taskType),
  }
}


export function customerprofilesIntegrationFlowDefinitionTasksToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTasks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_operator: {
      value: customerprofilesIntegrationFlowDefinitionTasksConnectorOperatorToHclTerraform(struct!.connectorOperator),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator",
    },
    destination_field: {
      value: cdktn.stringToHclTerraform(struct!.destinationField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task_properties: {
      value: cdktn.listMapperHcl(customerprofilesIntegrationFlowDefinitionTasksTaskPropertiesToHclTerraform, false)(struct!.taskProperties),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList",
    },
    task_type: {
      value: cdktn.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionTasksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionTasks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorOperator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOperator = this._connectorOperator?.internalValue;
    }
    if (this._destinationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationField = this._destinationField;
    }
    if (this._sourceFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFields = this._sourceFields;
    }
    if (this._taskProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskProperties = this._taskProperties?.internalValue;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionTasks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorOperator.internalValue = undefined;
      this._destinationField = undefined;
      this._sourceFields = undefined;
      this._taskProperties.internalValue = undefined;
      this._taskType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorOperator.internalValue = value.connectorOperator;
      this._destinationField = value.destinationField;
      this._sourceFields = value.sourceFields;
      this._taskProperties.internalValue = value.taskProperties;
      this._taskType = value.taskType;
    }
  }

  // connector_operator - computed: true, optional: true, required: false
  private _connectorOperator = new CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperatorOutputReference(this, "connector_operator");
  public get connectorOperator() {
    return this._connectorOperator;
  }
  public putConnectorOperator(value: CustomerprofilesIntegrationFlowDefinitionTasksConnectorOperator) {
    this._connectorOperator.internalValue = value;
  }
  public resetConnectorOperator() {
    this._connectorOperator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOperatorInput() {
    return this._connectorOperator.internalValue;
  }

  // destination_field - computed: true, optional: true, required: false
  private _destinationField?: string; 
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }
  public set destinationField(value: string) {
    this._destinationField = value;
  }
  public resetDestinationField() {
    this._destinationField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldInput() {
    return this._destinationField;
  }

  // source_fields - computed: true, optional: true, required: false
  private _sourceFields?: string[]; 
  public get sourceFields() {
    return this.getListAttribute('source_fields');
  }
  public set sourceFields(value: string[]) {
    this._sourceFields = value;
  }
  public resetSourceFields() {
    this._sourceFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldsInput() {
    return this._sourceFields;
  }

  // task_properties - computed: true, optional: true, required: false
  private _taskProperties = new CustomerprofilesIntegrationFlowDefinitionTasksTaskPropertiesList(this, "task_properties", false);
  public get taskProperties() {
    return this._taskProperties;
  }
  public putTaskProperties(value: CustomerprofilesIntegrationFlowDefinitionTasksTaskProperties[] | cdktn.IResolvable) {
    this._taskProperties.internalValue = value;
  }
  public resetTaskProperties() {
    this._taskProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskPropertiesInput() {
    return this._taskProperties.internalValue;
  }

  // task_type - computed: true, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }
}

export class CustomerprofilesIntegrationFlowDefinitionTasksList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesIntegrationFlowDefinitionTasks[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesIntegrationFlowDefinitionTasksOutputReference {
    return new CustomerprofilesIntegrationFlowDefinitionTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#data_pull_mode CustomerprofilesIntegration#data_pull_mode}
  */
  readonly dataPullMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#first_execution_from CustomerprofilesIntegration#first_execution_from}
  */
  readonly firstExecutionFrom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#schedule_end_time CustomerprofilesIntegration#schedule_end_time}
  */
  readonly scheduleEndTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#schedule_expression CustomerprofilesIntegration#schedule_expression}
  */
  readonly scheduleExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#schedule_offset CustomerprofilesIntegration#schedule_offset}
  */
  readonly scheduleOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#schedule_start_time CustomerprofilesIntegration#schedule_start_time}
  */
  readonly scheduleStartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#timezone CustomerprofilesIntegration#timezone}
  */
  readonly timezone?: string;
}

export function customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_pull_mode: cdktn.stringToTerraform(struct!.dataPullMode),
    first_execution_from: cdktn.numberToTerraform(struct!.firstExecutionFrom),
    schedule_end_time: cdktn.numberToTerraform(struct!.scheduleEndTime),
    schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    schedule_offset: cdktn.numberToTerraform(struct!.scheduleOffset),
    schedule_start_time: cdktn.numberToTerraform(struct!.scheduleStartTime),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_pull_mode: {
      value: cdktn.stringToHclTerraform(struct!.dataPullMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_execution_from: {
      value: cdktn.numberToHclTerraform(struct!.firstExecutionFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_end_time: {
      value: cdktn.numberToHclTerraform(struct!.scheduleEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_expression: {
      value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_offset: {
      value: cdktn.numberToHclTerraform(struct!.scheduleOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_start_time: {
      value: cdktn.numberToHclTerraform(struct!.scheduleStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPullMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPullMode = this._dataPullMode;
    }
    if (this._firstExecutionFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstExecutionFrom = this._firstExecutionFrom;
    }
    if (this._scheduleEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleEndTime = this._scheduleEndTime;
    }
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    if (this._scheduleOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleOffset = this._scheduleOffset;
    }
    if (this._scheduleStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleStartTime = this._scheduleStartTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPullMode = undefined;
      this._firstExecutionFrom = undefined;
      this._scheduleEndTime = undefined;
      this._scheduleExpression = undefined;
      this._scheduleOffset = undefined;
      this._scheduleStartTime = undefined;
      this._timezone = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPullMode = value.dataPullMode;
      this._firstExecutionFrom = value.firstExecutionFrom;
      this._scheduleEndTime = value.scheduleEndTime;
      this._scheduleExpression = value.scheduleExpression;
      this._scheduleOffset = value.scheduleOffset;
      this._scheduleStartTime = value.scheduleStartTime;
      this._timezone = value.timezone;
    }
  }

  // data_pull_mode - computed: true, optional: true, required: false
  private _dataPullMode?: string; 
  public get dataPullMode() {
    return this.getStringAttribute('data_pull_mode');
  }
  public set dataPullMode(value: string) {
    this._dataPullMode = value;
  }
  public resetDataPullMode() {
    this._dataPullMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPullModeInput() {
    return this._dataPullMode;
  }

  // first_execution_from - computed: true, optional: true, required: false
  private _firstExecutionFrom?: number; 
  public get firstExecutionFrom() {
    return this.getNumberAttribute('first_execution_from');
  }
  public set firstExecutionFrom(value: number) {
    this._firstExecutionFrom = value;
  }
  public resetFirstExecutionFrom() {
    this._firstExecutionFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstExecutionFromInput() {
    return this._firstExecutionFrom;
  }

  // schedule_end_time - computed: true, optional: true, required: false
  private _scheduleEndTime?: number; 
  public get scheduleEndTime() {
    return this.getNumberAttribute('schedule_end_time');
  }
  public set scheduleEndTime(value: number) {
    this._scheduleEndTime = value;
  }
  public resetScheduleEndTime() {
    this._scheduleEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleEndTimeInput() {
    return this._scheduleEndTime;
  }

  // schedule_expression - computed: true, optional: true, required: false
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  public resetScheduleExpression() {
    this._scheduleExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // schedule_offset - computed: true, optional: true, required: false
  private _scheduleOffset?: number; 
  public get scheduleOffset() {
    return this.getNumberAttribute('schedule_offset');
  }
  public set scheduleOffset(value: number) {
    this._scheduleOffset = value;
  }
  public resetScheduleOffset() {
    this._scheduleOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOffsetInput() {
    return this._scheduleOffset;
  }

  // schedule_start_time - computed: true, optional: true, required: false
  private _scheduleStartTime?: number; 
  public get scheduleStartTime() {
    return this.getNumberAttribute('schedule_start_time');
  }
  public set scheduleStartTime(value: number) {
    this._scheduleStartTime = value;
  }
  public resetScheduleStartTime() {
    this._scheduleStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleStartTimeInput() {
    return this._scheduleStartTime;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#scheduled CustomerprofilesIntegration#scheduled}
  */
  readonly scheduled?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled;
}

export function customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    scheduled: customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToTerraform(struct!.scheduled),
  }
}


export function customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    scheduled: {
      value: customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledToHclTerraform(struct!.scheduled),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduled = this._scheduled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduled.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduled.internalValue = value.scheduled;
    }
  }

  // scheduled - computed: true, optional: true, required: false
  private _scheduled = new CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduledOutputReference(this, "scheduled");
  public get scheduled() {
    return this._scheduled;
  }
  public putScheduled(value: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesScheduled) {
    this._scheduled.internalValue = value;
  }
  public resetScheduled() {
    this._scheduled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledInput() {
    return this._scheduled.internalValue;
  }
}
export interface CustomerprofilesIntegrationFlowDefinitionTriggerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#trigger_properties CustomerprofilesIntegration#trigger_properties}
  */
  readonly triggerProperties?: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#trigger_type CustomerprofilesIntegration#trigger_type}
  */
  readonly triggerType?: string;
}

export function customerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trigger_properties: customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToTerraform(struct!.triggerProperties),
    trigger_type: cdktn.stringToTerraform(struct!.triggerType),
  }
}


export function customerprofilesIntegrationFlowDefinitionTriggerConfigToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinitionTriggerConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    trigger_properties: {
      value: customerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesToHclTerraform(struct!.triggerProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties",
    },
    trigger_type: {
      value: cdktn.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinitionTriggerConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._triggerProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerProperties = this._triggerProperties?.internalValue;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinitionTriggerConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._triggerProperties.internalValue = undefined;
      this._triggerType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._triggerProperties.internalValue = value.triggerProperties;
      this._triggerType = value.triggerType;
    }
  }

  // trigger_properties - computed: true, optional: true, required: false
  private _triggerProperties = new CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerPropertiesOutputReference(this, "trigger_properties");
  public get triggerProperties() {
    return this._triggerProperties;
  }
  public putTriggerProperties(value: CustomerprofilesIntegrationFlowDefinitionTriggerConfigTriggerProperties) {
    this._triggerProperties.internalValue = value;
  }
  public resetTriggerProperties() {
    this._triggerProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPropertiesInput() {
    return this._triggerProperties.internalValue;
  }

  // trigger_type - computed: true, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }
}
export interface CustomerprofilesIntegrationFlowDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#description CustomerprofilesIntegration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#flow_name CustomerprofilesIntegration#flow_name}
  */
  readonly flowName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#kms_arn CustomerprofilesIntegration#kms_arn}
  */
  readonly kmsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#source_flow_config CustomerprofilesIntegration#source_flow_config}
  */
  readonly sourceFlowConfig?: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#tasks CustomerprofilesIntegration#tasks}
  */
  readonly tasks?: CustomerprofilesIntegrationFlowDefinitionTasks[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#trigger_config CustomerprofilesIntegration#trigger_config}
  */
  readonly triggerConfig?: CustomerprofilesIntegrationFlowDefinitionTriggerConfig;
}

export function customerprofilesIntegrationFlowDefinitionToTerraform(struct?: CustomerprofilesIntegrationFlowDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    flow_name: cdktn.stringToTerraform(struct!.flowName),
    kms_arn: cdktn.stringToTerraform(struct!.kmsArn),
    source_flow_config: customerprofilesIntegrationFlowDefinitionSourceFlowConfigToTerraform(struct!.sourceFlowConfig),
    tasks: cdktn.listMapper(customerprofilesIntegrationFlowDefinitionTasksToTerraform, false)(struct!.tasks),
    trigger_config: customerprofilesIntegrationFlowDefinitionTriggerConfigToTerraform(struct!.triggerConfig),
  }
}


export function customerprofilesIntegrationFlowDefinitionToHclTerraform(struct?: CustomerprofilesIntegrationFlowDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_name: {
      value: cdktn.stringToHclTerraform(struct!.flowName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_arn: {
      value: cdktn.stringToHclTerraform(struct!.kmsArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_flow_config: {
      value: customerprofilesIntegrationFlowDefinitionSourceFlowConfigToHclTerraform(struct!.sourceFlowConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig",
    },
    tasks: {
      value: cdktn.listMapperHcl(customerprofilesIntegrationFlowDefinitionTasksToHclTerraform, false)(struct!.tasks),
      isBlock: true,
      type: "list",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionTasksList",
    },
    trigger_config: {
      value: customerprofilesIntegrationFlowDefinitionTriggerConfigToHclTerraform(struct!.triggerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomerprofilesIntegrationFlowDefinitionTriggerConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationFlowDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomerprofilesIntegrationFlowDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._flowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowName = this._flowName;
    }
    if (this._kmsArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsArn = this._kmsArn;
    }
    if (this._sourceFlowConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFlowConfig = this._sourceFlowConfig?.internalValue;
    }
    if (this._tasks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks?.internalValue;
    }
    if (this._triggerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerConfig = this._triggerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationFlowDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._flowName = undefined;
      this._kmsArn = undefined;
      this._sourceFlowConfig.internalValue = undefined;
      this._tasks.internalValue = undefined;
      this._triggerConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._flowName = value.flowName;
      this._kmsArn = value.kmsArn;
      this._sourceFlowConfig.internalValue = value.sourceFlowConfig;
      this._tasks.internalValue = value.tasks;
      this._triggerConfig.internalValue = value.triggerConfig;
    }
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

  // flow_name - computed: true, optional: true, required: false
  private _flowName?: string; 
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }
  public set flowName(value: string) {
    this._flowName = value;
  }
  public resetFlowName() {
    this._flowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowNameInput() {
    return this._flowName;
  }

  // kms_arn - computed: true, optional: true, required: false
  private _kmsArn?: string; 
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }
  public set kmsArn(value: string) {
    this._kmsArn = value;
  }
  public resetKmsArn() {
    this._kmsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsArnInput() {
    return this._kmsArn;
  }

  // source_flow_config - computed: true, optional: true, required: false
  private _sourceFlowConfig = new CustomerprofilesIntegrationFlowDefinitionSourceFlowConfigOutputReference(this, "source_flow_config");
  public get sourceFlowConfig() {
    return this._sourceFlowConfig;
  }
  public putSourceFlowConfig(value: CustomerprofilesIntegrationFlowDefinitionSourceFlowConfig) {
    this._sourceFlowConfig.internalValue = value;
  }
  public resetSourceFlowConfig() {
    this._sourceFlowConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFlowConfigInput() {
    return this._sourceFlowConfig.internalValue;
  }

  // tasks - computed: true, optional: true, required: false
  private _tasks = new CustomerprofilesIntegrationFlowDefinitionTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: CustomerprofilesIntegrationFlowDefinitionTasks[] | cdktn.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // trigger_config - computed: true, optional: true, required: false
  private _triggerConfig = new CustomerprofilesIntegrationFlowDefinitionTriggerConfigOutputReference(this, "trigger_config");
  public get triggerConfig() {
    return this._triggerConfig;
  }
  public putTriggerConfig(value: CustomerprofilesIntegrationFlowDefinitionTriggerConfig) {
    this._triggerConfig.internalValue = value;
  }
  public resetTriggerConfig() {
    this._triggerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConfigInput() {
    return this._triggerConfig.internalValue;
  }
}
export interface CustomerprofilesIntegrationObjectTypeNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}
  */
  readonly value?: string;
}

export function customerprofilesIntegrationObjectTypeNamesToTerraform(struct?: CustomerprofilesIntegrationObjectTypeNames | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function customerprofilesIntegrationObjectTypeNamesToHclTerraform(struct?: CustomerprofilesIntegrationObjectTypeNames | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationObjectTypeNamesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesIntegrationObjectTypeNames | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationObjectTypeNames | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CustomerprofilesIntegrationObjectTypeNamesList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesIntegrationObjectTypeNames[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesIntegrationObjectTypeNamesOutputReference {
    return new CustomerprofilesIntegrationObjectTypeNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomerprofilesIntegrationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#key CustomerprofilesIntegration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#value CustomerprofilesIntegration#value}
  */
  readonly value?: string;
}

export function customerprofilesIntegrationTagsToTerraform(struct?: CustomerprofilesIntegrationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function customerprofilesIntegrationTagsToHclTerraform(struct?: CustomerprofilesIntegrationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomerprofilesIntegrationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CustomerprofilesIntegrationTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomerprofilesIntegrationTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CustomerprofilesIntegrationTagsList extends cdktn.ComplexList {
  public internalValue? : CustomerprofilesIntegrationTags[] | cdktn.IResolvable

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
  public get(index: number): CustomerprofilesIntegrationTagsOutputReference {
    return new CustomerprofilesIntegrationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration awscc_customerprofiles_integration}
*/
export class CustomerprofilesIntegration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_customerprofiles_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CustomerprofilesIntegration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomerprofilesIntegration to import
  * @param importFromId The id of the existing CustomerprofilesIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomerprofilesIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/customerprofiles_integration awscc_customerprofiles_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomerprofilesIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: CustomerprofilesIntegrationConfig) {
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
    this._domainName = config.domainName;
    this._eventTriggerNames = config.eventTriggerNames;
    this._flowDefinition.internalValue = config.flowDefinition;
    this._objectTypeName = config.objectTypeName;
    this._objectTypeNames.internalValue = config.objectTypeNames;
    this._scope = config.scope;
    this._tags.internalValue = config.tags;
    this._uri = config.uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // event_trigger_names - computed: true, optional: true, required: false
  private _eventTriggerNames?: string[]; 
  public get eventTriggerNames() {
    return this.getListAttribute('event_trigger_names');
  }
  public set eventTriggerNames(value: string[]) {
    this._eventTriggerNames = value;
  }
  public resetEventTriggerNames() {
    this._eventTriggerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerNamesInput() {
    return this._eventTriggerNames;
  }

  // flow_definition - computed: true, optional: true, required: false
  private _flowDefinition = new CustomerprofilesIntegrationFlowDefinitionOutputReference(this, "flow_definition");
  public get flowDefinition() {
    return this._flowDefinition;
  }
  public putFlowDefinition(value: CustomerprofilesIntegrationFlowDefinition) {
    this._flowDefinition.internalValue = value;
  }
  public resetFlowDefinition() {
    this._flowDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDefinitionInput() {
    return this._flowDefinition.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // object_type_name - computed: true, optional: true, required: false
  private _objectTypeName?: string; 
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }
  public set objectTypeName(value: string) {
    this._objectTypeName = value;
  }
  public resetObjectTypeName() {
    this._objectTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeNameInput() {
    return this._objectTypeName;
  }

  // object_type_names - computed: true, optional: true, required: false
  private _objectTypeNames = new CustomerprofilesIntegrationObjectTypeNamesList(this, "object_type_names", false);
  public get objectTypeNames() {
    return this._objectTypeNames;
  }
  public putObjectTypeNames(value: CustomerprofilesIntegrationObjectTypeNames[] | cdktn.IResolvable) {
    this._objectTypeNames.internalValue = value;
  }
  public resetObjectTypeNames() {
    this._objectTypeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeNamesInput() {
    return this._objectTypeNames.internalValue;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new CustomerprofilesIntegrationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CustomerprofilesIntegrationTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktn.stringToTerraform(this._domainName),
      event_trigger_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._eventTriggerNames),
      flow_definition: customerprofilesIntegrationFlowDefinitionToTerraform(this._flowDefinition.internalValue),
      object_type_name: cdktn.stringToTerraform(this._objectTypeName),
      object_type_names: cdktn.listMapper(customerprofilesIntegrationObjectTypeNamesToTerraform, false)(this._objectTypeNames.internalValue),
      scope: cdktn.stringToTerraform(this._scope),
      tags: cdktn.listMapper(customerprofilesIntegrationTagsToTerraform, false)(this._tags.internalValue),
      uri: cdktn.stringToTerraform(this._uri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktn.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_trigger_names: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._eventTriggerNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      flow_definition: {
        value: customerprofilesIntegrationFlowDefinitionToHclTerraform(this._flowDefinition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomerprofilesIntegrationFlowDefinition",
      },
      object_type_name: {
        value: cdktn.stringToHclTerraform(this._objectTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type_names: {
        value: cdktn.listMapperHcl(customerprofilesIntegrationObjectTypeNamesToHclTerraform, false)(this._objectTypeNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesIntegrationObjectTypeNamesList",
      },
      scope: {
        value: cdktn.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(customerprofilesIntegrationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomerprofilesIntegrationTagsList",
      },
      uri: {
        value: cdktn.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
