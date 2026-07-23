// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WisdomKnowledgeBaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#description WisdomKnowledgeBase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#knowledge_base_type WisdomKnowledgeBase#knowledge_base_type}
  */
  readonly knowledgeBaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#name WisdomKnowledgeBase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#rendering_configuration WisdomKnowledgeBase#rendering_configuration}
  */
  readonly renderingConfiguration?: WisdomKnowledgeBaseRenderingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#server_side_encryption_configuration WisdomKnowledgeBase#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: WisdomKnowledgeBaseServerSideEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#source_configuration WisdomKnowledgeBase#source_configuration}
  */
  readonly sourceConfiguration?: WisdomKnowledgeBaseSourceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#tags WisdomKnowledgeBase#tags}
  */
  readonly tags?: WisdomKnowledgeBaseTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#vector_ingestion_configuration WisdomKnowledgeBase#vector_ingestion_configuration}
  */
  readonly vectorIngestionConfiguration?: WisdomKnowledgeBaseVectorIngestionConfiguration;
}
export interface WisdomKnowledgeBaseRenderingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#template_uri WisdomKnowledgeBase#template_uri}
  */
  readonly templateUri?: string;
}

export function wisdomKnowledgeBaseRenderingConfigurationToTerraform(struct?: WisdomKnowledgeBaseRenderingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    template_uri: cdktn.stringToTerraform(struct!.templateUri),
  }
}


export function wisdomKnowledgeBaseRenderingConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseRenderingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    template_uri: {
      value: cdktn.stringToHclTerraform(struct!.templateUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseRenderingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseRenderingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateUri = this._templateUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomKnowledgeBaseRenderingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._templateUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._templateUri = value.templateUri;
    }
  }

  // template_uri - computed: true, optional: true, required: false
  private _templateUri?: string; 
  public get templateUri() {
    return this.getStringAttribute('template_uri');
  }
  public set templateUri(value: string) {
    this._templateUri = value;
  }
  public resetTemplateUri() {
    this._templateUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUriInput() {
    return this._templateUri;
  }
}
export interface WisdomKnowledgeBaseServerSideEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#kms_key_id WisdomKnowledgeBase#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function wisdomKnowledgeBaseServerSideEncryptionConfigurationToTerraform(struct?: WisdomKnowledgeBaseServerSideEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function wisdomKnowledgeBaseServerSideEncryptionConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseServerSideEncryptionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseServerSideEncryptionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomKnowledgeBaseServerSideEncryptionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface WisdomKnowledgeBaseSourceConfigurationAppIntegrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#app_integration_arn WisdomKnowledgeBase#app_integration_arn}
  */
  readonly appIntegrationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#object_fields WisdomKnowledgeBase#object_fields}
  */
  readonly objectFields?: string[];
}

export function wisdomKnowledgeBaseSourceConfigurationAppIntegrationsToTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationAppIntegrations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_integration_arn: cdktn.stringToTerraform(struct!.appIntegrationArn),
    object_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.objectFields),
  }
}


export function wisdomKnowledgeBaseSourceConfigurationAppIntegrationsToHclTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationAppIntegrations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_integration_arn: {
      value: cdktn.stringToHclTerraform(struct!.appIntegrationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.objectFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseSourceConfigurationAppIntegrations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appIntegrationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIntegrationArn = this._appIntegrationArn;
    }
    if (this._objectFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectFields = this._objectFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomKnowledgeBaseSourceConfigurationAppIntegrations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appIntegrationArn = undefined;
      this._objectFields = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appIntegrationArn = value.appIntegrationArn;
      this._objectFields = value.objectFields;
    }
  }

  // app_integration_arn - computed: true, optional: true, required: false
  private _appIntegrationArn?: string; 
  public get appIntegrationArn() {
    return this.getStringAttribute('app_integration_arn');
  }
  public set appIntegrationArn(value: string) {
    this._appIntegrationArn = value;
  }
  public resetAppIntegrationArn() {
    this._appIntegrationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIntegrationArnInput() {
    return this._appIntegrationArn;
  }

  // object_fields - computed: true, optional: true, required: false
  private _objectFields?: string[]; 
  public get objectFields() {
    return this.getListAttribute('object_fields');
  }
  public set objectFields(value: string[]) {
    this._objectFields = value;
  }
  public resetObjectFields() {
    this._objectFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFieldsInput() {
    return this._objectFields;
  }
}
export interface WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#rate_limit WisdomKnowledgeBase#rate_limit}
  */
  readonly rateLimit?: number;
}

export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsToTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rate_limit: cdktn.numberToTerraform(struct!.rateLimit),
  }
}


export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsToHclTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rateLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rateLimit = value.rateLimit;
    }
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
export interface WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#url WisdomKnowledgeBase#url}
  */
  readonly url?: string;
}

export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsToTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsToHclTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls | cdktn.IResolvable): any {
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

export class WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls | cdktn.IResolvable | undefined) {
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

export class WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList extends cdktn.ComplexList {
  public internalValue? : WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls[] | cdktn.IResolvable

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
  public get(index: number): WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference {
    return new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#seed_urls WisdomKnowledgeBase#seed_urls}
  */
  readonly seedUrls?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls[] | cdktn.IResolvable;
}

export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationToTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    seed_urls: cdktn.listMapper(wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsToTerraform, false)(struct!.seedUrls),
  }
}


export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    seed_urls: {
      value: cdktn.listMapperHcl(wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsToHclTerraform, false)(struct!.seedUrls),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration | cdktn.IResolvable | undefined) {
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
  private _seedUrls = new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList(this, "seed_urls", false);
  public get seedUrls() {
    return this._seedUrls;
  }
  public putSeedUrls(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls[] | cdktn.IResolvable) {
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
export interface WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#crawler_limits WisdomKnowledgeBase#crawler_limits}
  */
  readonly crawlerLimits?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#exclusion_filters WisdomKnowledgeBase#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#inclusion_filters WisdomKnowledgeBase#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#scope WisdomKnowledgeBase#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#url_configuration WisdomKnowledgeBase#url_configuration}
  */
  readonly urlConfiguration?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration;
}

export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationToTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    crawler_limits: wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsToTerraform(struct!.crawlerLimits),
    exclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inclusionFilters),
    scope: cdktn.stringToTerraform(struct!.scope),
    url_configuration: wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationToTerraform(struct!.urlConfiguration),
  }
}


export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    crawler_limits: {
      value: wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsToHclTerraform(struct!.crawlerLimits),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits",
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
    url_configuration: {
      value: wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationToHclTerraform(struct!.urlConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration | cdktn.IResolvable | undefined {
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
    if (this._urlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlConfiguration = this._urlConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerLimits.internalValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._scope = undefined;
      this._urlConfiguration.internalValue = undefined;
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
      this._urlConfiguration.internalValue = value.urlConfiguration;
    }
  }

  // crawler_limits - computed: true, optional: true, required: false
  private _crawlerLimits = new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference(this, "crawler_limits");
  public get crawlerLimits() {
    return this._crawlerLimits;
  }
  public putCrawlerLimits(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits) {
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

  // url_configuration - computed: true, optional: true, required: false
  private _urlConfiguration = new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference(this, "url_configuration");
  public get urlConfiguration() {
    return this._urlConfiguration;
  }
  public putUrlConfiguration(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration) {
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
export interface WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#web_crawler_configuration WisdomKnowledgeBase#web_crawler_configuration}
  */
  readonly webCrawlerConfiguration?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration;
}

export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationToTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    web_crawler_configuration: wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationToTerraform(struct!.webCrawlerConfiguration),
  }
}


export function wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    web_crawler_configuration: {
      value: wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationToHclTerraform(struct!.webCrawlerConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webCrawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCrawlerConfiguration = this._webCrawlerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._webCrawlerConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._webCrawlerConfiguration.internalValue = value.webCrawlerConfiguration;
    }
  }

  // web_crawler_configuration - computed: true, optional: true, required: false
  private _webCrawlerConfiguration = new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference(this, "web_crawler_configuration");
  public get webCrawlerConfiguration() {
    return this._webCrawlerConfiguration;
  }
  public putWebCrawlerConfiguration(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration) {
    this._webCrawlerConfiguration.internalValue = value;
  }
  public resetWebCrawlerConfiguration() {
    this._webCrawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCrawlerConfigurationInput() {
    return this._webCrawlerConfiguration.internalValue;
  }
}
export interface WisdomKnowledgeBaseSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#app_integrations WisdomKnowledgeBase#app_integrations}
  */
  readonly appIntegrations?: WisdomKnowledgeBaseSourceConfigurationAppIntegrations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#managed_source_configuration WisdomKnowledgeBase#managed_source_configuration}
  */
  readonly managedSourceConfiguration?: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration;
}

export function wisdomKnowledgeBaseSourceConfigurationToTerraform(struct?: WisdomKnowledgeBaseSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_integrations: wisdomKnowledgeBaseSourceConfigurationAppIntegrationsToTerraform(struct!.appIntegrations),
    managed_source_configuration: wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationToTerraform(struct!.managedSourceConfiguration),
  }
}


export function wisdomKnowledgeBaseSourceConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_integrations: {
      value: wisdomKnowledgeBaseSourceConfigurationAppIntegrationsToHclTerraform(struct!.appIntegrations),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseSourceConfigurationAppIntegrations",
    },
    managed_source_configuration: {
      value: wisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationToHclTerraform(struct!.managedSourceConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appIntegrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIntegrations = this._appIntegrations?.internalValue;
    }
    if (this._managedSourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedSourceConfiguration = this._managedSourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomKnowledgeBaseSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appIntegrations.internalValue = undefined;
      this._managedSourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appIntegrations.internalValue = value.appIntegrations;
      this._managedSourceConfiguration.internalValue = value.managedSourceConfiguration;
    }
  }

  // app_integrations - computed: true, optional: true, required: false
  private _appIntegrations = new WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference(this, "app_integrations");
  public get appIntegrations() {
    return this._appIntegrations;
  }
  public putAppIntegrations(value: WisdomKnowledgeBaseSourceConfigurationAppIntegrations) {
    this._appIntegrations.internalValue = value;
  }
  public resetAppIntegrations() {
    this._appIntegrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIntegrationsInput() {
    return this._appIntegrations.internalValue;
  }

  // managed_source_configuration - computed: true, optional: true, required: false
  private _managedSourceConfiguration = new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference(this, "managed_source_configuration");
  public get managedSourceConfiguration() {
    return this._managedSourceConfiguration;
  }
  public putManagedSourceConfiguration(value: WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration) {
    this._managedSourceConfiguration.internalValue = value;
  }
  public resetManagedSourceConfiguration() {
    this._managedSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSourceConfigurationInput() {
    return this._managedSourceConfiguration.internalValue;
  }
}
export interface WisdomKnowledgeBaseTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#key WisdomKnowledgeBase#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#value WisdomKnowledgeBase#value}
  */
  readonly value?: string;
}

export function wisdomKnowledgeBaseTagsToTerraform(struct?: WisdomKnowledgeBaseTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function wisdomKnowledgeBaseTagsToHclTerraform(struct?: WisdomKnowledgeBaseTags | cdktn.IResolvable): any {
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

export class WisdomKnowledgeBaseTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomKnowledgeBaseTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomKnowledgeBaseTags | cdktn.IResolvable | undefined) {
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

export class WisdomKnowledgeBaseTagsList extends cdktn.ComplexList {
  public internalValue? : WisdomKnowledgeBaseTags[] | cdktn.IResolvable

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
  public get(index: number): WisdomKnowledgeBaseTagsOutputReference {
    return new WisdomKnowledgeBaseTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}
  */
  readonly maxTokens?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#overlap_percentage WisdomKnowledgeBase#overlap_percentage}
  */
  readonly overlapPercentage?: number;
}

export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
    overlap_percentage: cdktn.numberToTerraform(struct!.overlapPercentage),
  }
}


export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktn.IResolvable): any {
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

export class WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktn.IResolvable | undefined) {
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
export interface WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}
  */
  readonly maxTokens?: number;
}

export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_tokens: cdktn.numberToTerraform(struct!.maxTokens),
  }
}


export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToHclTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | cdktn.IResolvable): any {
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

export class WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations | cdktn.IResolvable | undefined) {
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

export class WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList extends cdktn.ComplexList {
  public internalValue? : WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] | cdktn.IResolvable

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
  public get(index: number): WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference {
    return new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#level_configurations WisdomKnowledgeBase#level_configurations}
  */
  readonly levelConfigurations?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#overlap_tokens WisdomKnowledgeBase#overlap_tokens}
  */
  readonly overlapTokens?: number;
}

export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    level_configurations: cdktn.listMapper(wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToTerraform, false)(struct!.levelConfigurations),
    overlap_tokens: cdktn.numberToTerraform(struct!.overlapTokens),
  }
}


export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    level_configurations: {
      value: cdktn.listMapperHcl(wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsToHclTerraform, false)(struct!.levelConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList",
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

export class WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktn.IResolvable | undefined) {
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
  private _levelConfigurations = new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList(this, "level_configurations", false);
  public get levelConfigurations() {
    return this._levelConfigurations;
  }
  public putLevelConfigurations(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] | cdktn.IResolvable) {
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
export interface WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#breakpoint_percentile_threshold WisdomKnowledgeBase#breakpoint_percentile_threshold}
  */
  readonly breakpointPercentileThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#buffer_size WisdomKnowledgeBase#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}
  */
  readonly maxTokens?: number;
}

export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktn.IResolvable): any {
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


export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktn.IResolvable): any {
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

export class WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktn.IResolvable | undefined) {
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
export interface WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#chunking_strategy WisdomKnowledgeBase#chunking_strategy}
  */
  readonly chunkingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#fixed_size_chunking_configuration WisdomKnowledgeBase#fixed_size_chunking_configuration}
  */
  readonly fixedSizeChunkingConfiguration?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#hierarchical_chunking_configuration WisdomKnowledgeBase#hierarchical_chunking_configuration}
  */
  readonly hierarchicalChunkingConfiguration?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#semantic_chunking_configuration WisdomKnowledgeBase#semantic_chunking_configuration}
  */
  readonly semanticChunkingConfiguration?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration;
}

export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationToTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chunking_strategy: cdktn.stringToTerraform(struct!.chunkingStrategy),
    fixed_size_chunking_configuration: wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToTerraform(struct!.fixedSizeChunkingConfiguration),
    hierarchical_chunking_configuration: wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToTerraform(struct!.hierarchicalChunkingConfiguration),
    semantic_chunking_configuration: wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToTerraform(struct!.semanticChunkingConfiguration),
  }
}


export function wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration | cdktn.IResolvable): any {
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
      value: wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToHclTerraform(struct!.fixedSizeChunkingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration",
    },
    hierarchical_chunking_configuration: {
      value: wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToHclTerraform(struct!.hierarchicalChunkingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration",
    },
    semantic_chunking_configuration: {
      value: wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToHclTerraform(struct!.semanticChunkingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration | cdktn.IResolvable | undefined) {
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
  private _fixedSizeChunkingConfiguration = new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference(this, "fixed_size_chunking_configuration");
  public get fixedSizeChunkingConfiguration() {
    return this._fixedSizeChunkingConfiguration;
  }
  public putFixedSizeChunkingConfiguration(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration) {
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
  private _hierarchicalChunkingConfiguration = new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference(this, "hierarchical_chunking_configuration");
  public get hierarchicalChunkingConfiguration() {
    return this._hierarchicalChunkingConfiguration;
  }
  public putHierarchicalChunkingConfiguration(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration) {
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
  private _semanticChunkingConfiguration = new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference(this, "semantic_chunking_configuration");
  public get semanticChunkingConfiguration() {
    return this._semanticChunkingConfiguration;
  }
  public putSemanticChunkingConfiguration(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration) {
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
export interface WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#parsing_prompt_text WisdomKnowledgeBase#parsing_prompt_text}
  */
  readonly parsingPromptText?: string;
}

export function wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parsing_prompt_text: cdktn.stringToTerraform(struct!.parsingPromptText),
  }
}


export function wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToHclTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktn.IResolvable): any {
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

export class WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktn.IResolvable | undefined) {
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
export interface WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#model_arn WisdomKnowledgeBase#model_arn}
  */
  readonly modelArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#parsing_prompt WisdomKnowledgeBase#parsing_prompt}
  */
  readonly parsingPrompt?: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt;
}

export function wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    model_arn: cdktn.stringToTerraform(struct!.modelArn),
    parsing_prompt: wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToTerraform(struct!.parsingPrompt),
  }
}


export function wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable): any {
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
    parsing_prompt: {
      value: wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToHclTerraform(struct!.parsingPrompt),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArn = this._modelArn;
    }
    if (this._parsingPrompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingPrompt = this._parsingPrompt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelArn = undefined;
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

  // parsing_prompt - computed: true, optional: true, required: false
  private _parsingPrompt = new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference(this, "parsing_prompt");
  public get parsingPrompt() {
    return this._parsingPrompt;
  }
  public putParsingPrompt(value: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt) {
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
export interface WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#bedrock_foundation_model_configuration WisdomKnowledgeBase#bedrock_foundation_model_configuration}
  */
  readonly bedrockFoundationModelConfiguration?: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#parsing_strategy WisdomKnowledgeBase#parsing_strategy}
  */
  readonly parsingStrategy?: string;
}

export function wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationToTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_foundation_model_configuration: wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToTerraform(struct!.bedrockFoundationModelConfiguration),
    parsing_strategy: cdktn.stringToTerraform(struct!.parsingStrategy),
  }
}


export function wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_foundation_model_configuration: {
      value: wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct!.bedrockFoundationModelConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration",
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

export class WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._bedrockFoundationModelConfiguration.internalValue = value.bedrockFoundationModelConfiguration;
      this._parsingStrategy = value.parsingStrategy;
    }
  }

  // bedrock_foundation_model_configuration - computed: true, optional: true, required: false
  private _bedrockFoundationModelConfiguration = new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference(this, "bedrock_foundation_model_configuration");
  public get bedrockFoundationModelConfiguration() {
    return this._bedrockFoundationModelConfiguration;
  }
  public putBedrockFoundationModelConfiguration(value: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration) {
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
export interface WisdomKnowledgeBaseVectorIngestionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#chunking_configuration WisdomKnowledgeBase#chunking_configuration}
  */
  readonly chunkingConfiguration?: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#parsing_configuration WisdomKnowledgeBase#parsing_configuration}
  */
  readonly parsingConfiguration?: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration;
}

export function wisdomKnowledgeBaseVectorIngestionConfigurationToTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    chunking_configuration: wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationToTerraform(struct!.chunkingConfiguration),
    parsing_configuration: wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationToTerraform(struct!.parsingConfiguration),
  }
}


export function wisdomKnowledgeBaseVectorIngestionConfigurationToHclTerraform(struct?: WisdomKnowledgeBaseVectorIngestionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    chunking_configuration: {
      value: wisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationToHclTerraform(struct!.chunkingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration",
    },
    parsing_configuration: {
      value: wisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationToHclTerraform(struct!.parsingConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WisdomKnowledgeBaseVectorIngestionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkingConfiguration = this._chunkingConfiguration?.internalValue;
    }
    if (this._parsingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingConfiguration = this._parsingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WisdomKnowledgeBaseVectorIngestionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunkingConfiguration.internalValue = undefined;
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
      this._parsingConfiguration.internalValue = value.parsingConfiguration;
    }
  }

  // chunking_configuration - computed: true, optional: true, required: false
  private _chunkingConfiguration = new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference(this, "chunking_configuration");
  public get chunkingConfiguration() {
    return this._chunkingConfiguration;
  }
  public putChunkingConfiguration(value: WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration) {
    this._chunkingConfiguration.internalValue = value;
  }
  public resetChunkingConfiguration() {
    this._chunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingConfigurationInput() {
    return this._chunkingConfiguration.internalValue;
  }

  // parsing_configuration - computed: true, optional: true, required: false
  private _parsingConfiguration = new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference(this, "parsing_configuration");
  public get parsingConfiguration() {
    return this._parsingConfiguration;
  }
  public putParsingConfiguration(value: WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base awscc_wisdom_knowledge_base}
*/
export class WisdomKnowledgeBase extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_wisdom_knowledge_base";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WisdomKnowledgeBase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WisdomKnowledgeBase to import
  * @param importFromId The id of the existing WisdomKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WisdomKnowledgeBase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wisdom_knowledge_base", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/wisdom_knowledge_base awscc_wisdom_knowledge_base} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WisdomKnowledgeBaseConfig
  */
  public constructor(scope: Construct, id: string, config: WisdomKnowledgeBaseConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wisdom_knowledge_base',
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
    this._description = config.description;
    this._knowledgeBaseType = config.knowledgeBaseType;
    this._name = config.name;
    this._renderingConfiguration.internalValue = config.renderingConfiguration;
    this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
    this._sourceConfiguration.internalValue = config.sourceConfiguration;
    this._tags.internalValue = config.tags;
    this._vectorIngestionConfiguration.internalValue = config.vectorIngestionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // knowledge_base_arn - computed: true, optional: false, required: false
  public get knowledgeBaseArn() {
    return this.getStringAttribute('knowledge_base_arn');
  }

  // knowledge_base_id - computed: true, optional: false, required: false
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }

  // knowledge_base_type - computed: false, optional: false, required: true
  private _knowledgeBaseType?: string; 
  public get knowledgeBaseType() {
    return this.getStringAttribute('knowledge_base_type');
  }
  public set knowledgeBaseType(value: string) {
    this._knowledgeBaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseTypeInput() {
    return this._knowledgeBaseType;
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

  // rendering_configuration - computed: true, optional: true, required: false
  private _renderingConfiguration = new WisdomKnowledgeBaseRenderingConfigurationOutputReference(this, "rendering_configuration");
  public get renderingConfiguration() {
    return this._renderingConfiguration;
  }
  public putRenderingConfiguration(value: WisdomKnowledgeBaseRenderingConfiguration) {
    this._renderingConfiguration.internalValue = value;
  }
  public resetRenderingConfiguration() {
    this._renderingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderingConfigurationInput() {
    return this._renderingConfiguration.internalValue;
  }

  // server_side_encryption_configuration - computed: true, optional: true, required: false
  private _serverSideEncryptionConfiguration = new WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference(this, "server_side_encryption_configuration");
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: WisdomKnowledgeBaseServerSideEncryptionConfiguration) {
    this._serverSideEncryptionConfiguration.internalValue = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration.internalValue;
  }

  // source_configuration - computed: true, optional: true, required: false
  private _sourceConfiguration = new WisdomKnowledgeBaseSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: WisdomKnowledgeBaseSourceConfiguration) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new WisdomKnowledgeBaseTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: WisdomKnowledgeBaseTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vector_ingestion_configuration - computed: true, optional: true, required: false
  private _vectorIngestionConfiguration = new WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference(this, "vector_ingestion_configuration");
  public get vectorIngestionConfiguration() {
    return this._vectorIngestionConfiguration;
  }
  public putVectorIngestionConfiguration(value: WisdomKnowledgeBaseVectorIngestionConfiguration) {
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
      description: cdktn.stringToTerraform(this._description),
      knowledge_base_type: cdktn.stringToTerraform(this._knowledgeBaseType),
      name: cdktn.stringToTerraform(this._name),
      rendering_configuration: wisdomKnowledgeBaseRenderingConfigurationToTerraform(this._renderingConfiguration.internalValue),
      server_side_encryption_configuration: wisdomKnowledgeBaseServerSideEncryptionConfigurationToTerraform(this._serverSideEncryptionConfiguration.internalValue),
      source_configuration: wisdomKnowledgeBaseSourceConfigurationToTerraform(this._sourceConfiguration.internalValue),
      tags: cdktn.listMapper(wisdomKnowledgeBaseTagsToTerraform, false)(this._tags.internalValue),
      vector_ingestion_configuration: wisdomKnowledgeBaseVectorIngestionConfigurationToTerraform(this._vectorIngestionConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      knowledge_base_type: {
        value: cdktn.stringToHclTerraform(this._knowledgeBaseType),
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
      rendering_configuration: {
        value: wisdomKnowledgeBaseRenderingConfigurationToHclTerraform(this._renderingConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomKnowledgeBaseRenderingConfiguration",
      },
      server_side_encryption_configuration: {
        value: wisdomKnowledgeBaseServerSideEncryptionConfigurationToHclTerraform(this._serverSideEncryptionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomKnowledgeBaseServerSideEncryptionConfiguration",
      },
      source_configuration: {
        value: wisdomKnowledgeBaseSourceConfigurationToHclTerraform(this._sourceConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomKnowledgeBaseSourceConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(wisdomKnowledgeBaseTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WisdomKnowledgeBaseTagsList",
      },
      vector_ingestion_configuration: {
        value: wisdomKnowledgeBaseVectorIngestionConfigurationToHclTerraform(this._vectorIngestionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WisdomKnowledgeBaseVectorIngestionConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
