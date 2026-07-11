// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface HealthlakeFhirDatastoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * The user-generated name for the Data Store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#datastore_name HealthlakeFhirDatastore#datastore_name}
  */
  readonly datastoreName?: string;
  /**
  * The FHIR version. Only R4 version data is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#datastore_type_version HealthlakeFhirDatastore#datastore_type_version}
  */
  readonly datastoreTypeVersion: string;
  /**
  * The identity provider configuration for the datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#identity_provider_configuration HealthlakeFhirDatastore#identity_provider_configuration}
  */
  readonly identityProviderConfiguration?: HealthlakeFhirDatastoreIdentityProviderConfiguration;
  /**
  * The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#preload_data_config HealthlakeFhirDatastore#preload_data_config}
  */
  readonly preloadDataConfig?: HealthlakeFhirDatastorePreloadDataConfig;
  /**
  * The server-side encryption key configuration for a customer provided encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#sse_configuration HealthlakeFhirDatastore#sse_configuration}
  */
  readonly sseConfiguration?: HealthlakeFhirDatastoreSseConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}
  */
  readonly tags?: HealthlakeFhirDatastoreTags[] | cdktn.IResolvable;
}
export interface HealthlakeFhirDatastoreCreatedAt {
}

export function healthlakeFhirDatastoreCreatedAtToTerraform(struct?: HealthlakeFhirDatastoreCreatedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function healthlakeFhirDatastoreCreatedAtToHclTerraform(struct?: HealthlakeFhirDatastoreCreatedAt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class HealthlakeFhirDatastoreCreatedAtOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthlakeFhirDatastoreCreatedAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthlakeFhirDatastoreCreatedAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
}
export interface HealthlakeFhirDatastoreIdentityProviderConfiguration {
  /**
  * Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#authorization_strategy HealthlakeFhirDatastore#authorization_strategy}
  */
  readonly authorizationStrategy?: string;
  /**
  * Flag to indicate if fine-grained authorization will be enabled for the datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#fine_grained_authorization_enabled HealthlakeFhirDatastore#fine_grained_authorization_enabled}
  */
  readonly fineGrainedAuthorizationEnabled?: boolean | cdktn.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#idp_lambda_arn HealthlakeFhirDatastore#idp_lambda_arn}
  */
  readonly idpLambdaArn?: string;
  /**
  * The JSON metadata elements for identity provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#metadata HealthlakeFhirDatastore#metadata}
  */
  readonly metadata?: string;
}

export function healthlakeFhirDatastoreIdentityProviderConfigurationToTerraform(struct?: HealthlakeFhirDatastoreIdentityProviderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorization_strategy: cdktn.stringToTerraform(struct!.authorizationStrategy),
    fine_grained_authorization_enabled: cdktn.booleanToTerraform(struct!.fineGrainedAuthorizationEnabled),
    idp_lambda_arn: cdktn.stringToTerraform(struct!.idpLambdaArn),
    metadata: cdktn.stringToTerraform(struct!.metadata),
  }
}


export function healthlakeFhirDatastoreIdentityProviderConfigurationToHclTerraform(struct?: HealthlakeFhirDatastoreIdentityProviderConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorization_strategy: {
      value: cdktn.stringToHclTerraform(struct!.authorizationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grained_authorization_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.fineGrainedAuthorizationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_lambda_arn: {
      value: cdktn.stringToHclTerraform(struct!.idpLambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthlakeFhirDatastoreIdentityProviderConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationStrategy = this._authorizationStrategy;
    }
    if (this._fineGrainedAuthorizationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrainedAuthorizationEnabled = this._fineGrainedAuthorizationEnabled;
    }
    if (this._idpLambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpLambdaArn = this._idpLambdaArn;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthlakeFhirDatastoreIdentityProviderConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationStrategy = undefined;
      this._fineGrainedAuthorizationEnabled = undefined;
      this._idpLambdaArn = undefined;
      this._metadata = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationStrategy = value.authorizationStrategy;
      this._fineGrainedAuthorizationEnabled = value.fineGrainedAuthorizationEnabled;
      this._idpLambdaArn = value.idpLambdaArn;
      this._metadata = value.metadata;
    }
  }

  // authorization_strategy - computed: true, optional: true, required: false
  private _authorizationStrategy?: string; 
  public get authorizationStrategy() {
    return this.getStringAttribute('authorization_strategy');
  }
  public set authorizationStrategy(value: string) {
    this._authorizationStrategy = value;
  }
  public resetAuthorizationStrategy() {
    this._authorizationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationStrategyInput() {
    return this._authorizationStrategy;
  }

  // fine_grained_authorization_enabled - computed: true, optional: true, required: false
  private _fineGrainedAuthorizationEnabled?: boolean | cdktn.IResolvable; 
  public get fineGrainedAuthorizationEnabled() {
    return this.getBooleanAttribute('fine_grained_authorization_enabled');
  }
  public set fineGrainedAuthorizationEnabled(value: boolean | cdktn.IResolvable) {
    this._fineGrainedAuthorizationEnabled = value;
  }
  public resetFineGrainedAuthorizationEnabled() {
    this._fineGrainedAuthorizationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainedAuthorizationEnabledInput() {
    return this._fineGrainedAuthorizationEnabled;
  }

  // idp_lambda_arn - computed: true, optional: true, required: false
  private _idpLambdaArn?: string; 
  public get idpLambdaArn() {
    return this.getStringAttribute('idp_lambda_arn');
  }
  public set idpLambdaArn(value: string) {
    this._idpLambdaArn = value;
  }
  public resetIdpLambdaArn() {
    this._idpLambdaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpLambdaArnInput() {
    return this._idpLambdaArn;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface HealthlakeFhirDatastorePreloadDataConfig {
  /**
  * The type of preloaded data. Only Synthea preloaded data is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#preload_data_type HealthlakeFhirDatastore#preload_data_type}
  */
  readonly preloadDataType?: string;
}

export function healthlakeFhirDatastorePreloadDataConfigToTerraform(struct?: HealthlakeFhirDatastorePreloadDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preload_data_type: cdktn.stringToTerraform(struct!.preloadDataType),
  }
}


export function healthlakeFhirDatastorePreloadDataConfigToHclTerraform(struct?: HealthlakeFhirDatastorePreloadDataConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preload_data_type: {
      value: cdktn.stringToHclTerraform(struct!.preloadDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthlakeFhirDatastorePreloadDataConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthlakeFhirDatastorePreloadDataConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preloadDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.preloadDataType = this._preloadDataType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthlakeFhirDatastorePreloadDataConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preloadDataType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preloadDataType = value.preloadDataType;
    }
  }

  // preload_data_type - computed: true, optional: true, required: false
  private _preloadDataType?: string; 
  public get preloadDataType() {
    return this.getStringAttribute('preload_data_type');
  }
  public set preloadDataType(value: string) {
    this._preloadDataType = value;
  }
  public resetPreloadDataType() {
    this._preloadDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadDataTypeInput() {
    return this._preloadDataType;
  }
}
export interface HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig {
  /**
  * The type of customer-managed-key (CMK) used for encryption. The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#cmk_type HealthlakeFhirDatastore#cmk_type}
  */
  readonly cmkType?: string;
  /**
  * The KMS encryption key id/alias used to encrypt the Data Store contents at rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#kms_key_id HealthlakeFhirDatastore#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct?: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cmk_type: cdktn.stringToTerraform(struct!.cmkType),
    kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
  }
}


export function healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToHclTerraform(struct?: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cmk_type: {
      value: cdktn.stringToHclTerraform(struct!.cmkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmkType = this._cmkType;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmkType = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmkType = value.cmkType;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // cmk_type - computed: true, optional: true, required: false
  private _cmkType?: string; 
  public get cmkType() {
    return this.getStringAttribute('cmk_type');
  }
  public set cmkType(value: string) {
    this._cmkType = value;
  }
  public resetCmkType() {
    this._cmkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkTypeInput() {
    return this._cmkType;
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
export interface HealthlakeFhirDatastoreSseConfiguration {
  /**
  * The customer-managed-key (CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#kms_encryption_config HealthlakeFhirDatastore#kms_encryption_config}
  */
  readonly kmsEncryptionConfig?: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig;
}

export function healthlakeFhirDatastoreSseConfigurationToTerraform(struct?: HealthlakeFhirDatastoreSseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_encryption_config: healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
  }
}


export function healthlakeFhirDatastoreSseConfigurationToHclTerraform(struct?: HealthlakeFhirDatastoreSseConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_encryption_config: {
      value: healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToHclTerraform(struct!.kmsEncryptionConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthlakeFhirDatastoreSseConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HealthlakeFhirDatastoreSseConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsEncryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsEncryptionConfig = this._kmsEncryptionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthlakeFhirDatastoreSseConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsEncryptionConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsEncryptionConfig.internalValue = value.kmsEncryptionConfig;
    }
  }

  // kms_encryption_config - computed: true, optional: true, required: false
  private _kmsEncryptionConfig = new HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(this, "kms_encryption_config");
  public get kmsEncryptionConfig() {
    return this._kmsEncryptionConfig;
  }
  public putKmsEncryptionConfig(value: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig) {
    this._kmsEncryptionConfig.internalValue = value;
  }
  public resetKmsEncryptionConfig() {
    this._kmsEncryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionConfigInput() {
    return this._kmsEncryptionConfig.internalValue;
  }
}
export interface HealthlakeFhirDatastoreTags {
  /**
  * The key of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#key HealthlakeFhirDatastore#key}
  */
  readonly key?: string;
  /**
  * The value of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#value HealthlakeFhirDatastore#value}
  */
  readonly value?: string;
}

export function healthlakeFhirDatastoreTagsToTerraform(struct?: HealthlakeFhirDatastoreTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function healthlakeFhirDatastoreTagsToHclTerraform(struct?: HealthlakeFhirDatastoreTags | cdktn.IResolvable): any {
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

export class HealthlakeFhirDatastoreTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): HealthlakeFhirDatastoreTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: HealthlakeFhirDatastoreTags | cdktn.IResolvable | undefined) {
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

export class HealthlakeFhirDatastoreTagsList extends cdktn.ComplexList {
  public internalValue? : HealthlakeFhirDatastoreTags[] | cdktn.IResolvable

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
  public get(index: number): HealthlakeFhirDatastoreTagsOutputReference {
    return new HealthlakeFhirDatastoreTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}
*/
export class HealthlakeFhirDatastore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_healthlake_fhir_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a HealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthlakeFhirDatastore to import
  * @param importFromId The id of the existing HealthlakeFhirDatastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthlakeFhirDatastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_healthlake_fhir_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthlakeFhirDatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: HealthlakeFhirDatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_healthlake_fhir_datastore',
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
    this._datastoreName = config.datastoreName;
    this._datastoreTypeVersion = config.datastoreTypeVersion;
    this._identityProviderConfiguration.internalValue = config.identityProviderConfiguration;
    this._preloadDataConfig.internalValue = config.preloadDataConfig;
    this._sseConfiguration.internalValue = config.sseConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  private _createdAt = new HealthlakeFhirDatastoreCreatedAtOutputReference(this, "created_at");
  public get createdAt() {
    return this._createdAt;
  }

  // datastore_arn - computed: true, optional: false, required: false
  public get datastoreArn() {
    return this.getStringAttribute('datastore_arn');
  }

  // datastore_endpoint - computed: true, optional: false, required: false
  public get datastoreEndpoint() {
    return this.getStringAttribute('datastore_endpoint');
  }

  // datastore_id - computed: true, optional: false, required: false
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }

  // datastore_name - computed: true, optional: true, required: false
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  public resetDatastoreName() {
    this._datastoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
  }

  // datastore_status - computed: true, optional: false, required: false
  public get datastoreStatus() {
    return this.getStringAttribute('datastore_status');
  }

  // datastore_type_version - computed: false, optional: false, required: true
  private _datastoreTypeVersion?: string; 
  public get datastoreTypeVersion() {
    return this.getStringAttribute('datastore_type_version');
  }
  public set datastoreTypeVersion(value: string) {
    this._datastoreTypeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreTypeVersionInput() {
    return this._datastoreTypeVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_configuration - computed: true, optional: true, required: false
  private _identityProviderConfiguration = new HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(this, "identity_provider_configuration");
  public get identityProviderConfiguration() {
    return this._identityProviderConfiguration;
  }
  public putIdentityProviderConfiguration(value: HealthlakeFhirDatastoreIdentityProviderConfiguration) {
    this._identityProviderConfiguration.internalValue = value;
  }
  public resetIdentityProviderConfiguration() {
    this._identityProviderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderConfigurationInput() {
    return this._identityProviderConfiguration.internalValue;
  }

  // preload_data_config - computed: true, optional: true, required: false
  private _preloadDataConfig = new HealthlakeFhirDatastorePreloadDataConfigOutputReference(this, "preload_data_config");
  public get preloadDataConfig() {
    return this._preloadDataConfig;
  }
  public putPreloadDataConfig(value: HealthlakeFhirDatastorePreloadDataConfig) {
    this._preloadDataConfig.internalValue = value;
  }
  public resetPreloadDataConfig() {
    this._preloadDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadDataConfigInput() {
    return this._preloadDataConfig.internalValue;
  }

  // sse_configuration - computed: true, optional: true, required: false
  private _sseConfiguration = new HealthlakeFhirDatastoreSseConfigurationOutputReference(this, "sse_configuration");
  public get sseConfiguration() {
    return this._sseConfiguration;
  }
  public putSseConfiguration(value: HealthlakeFhirDatastoreSseConfiguration) {
    this._sseConfiguration.internalValue = value;
  }
  public resetSseConfiguration() {
    this._sseConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseConfigurationInput() {
    return this._sseConfiguration.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new HealthlakeFhirDatastoreTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: HealthlakeFhirDatastoreTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datastore_name: cdktn.stringToTerraform(this._datastoreName),
      datastore_type_version: cdktn.stringToTerraform(this._datastoreTypeVersion),
      identity_provider_configuration: healthlakeFhirDatastoreIdentityProviderConfigurationToTerraform(this._identityProviderConfiguration.internalValue),
      preload_data_config: healthlakeFhirDatastorePreloadDataConfigToTerraform(this._preloadDataConfig.internalValue),
      sse_configuration: healthlakeFhirDatastoreSseConfigurationToTerraform(this._sseConfiguration.internalValue),
      tags: cdktn.listMapper(healthlakeFhirDatastoreTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datastore_name: {
        value: cdktn.stringToHclTerraform(this._datastoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastore_type_version: {
        value: cdktn.stringToHclTerraform(this._datastoreTypeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_configuration: {
        value: healthlakeFhirDatastoreIdentityProviderConfigurationToHclTerraform(this._identityProviderConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HealthlakeFhirDatastoreIdentityProviderConfiguration",
      },
      preload_data_config: {
        value: healthlakeFhirDatastorePreloadDataConfigToHclTerraform(this._preloadDataConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HealthlakeFhirDatastorePreloadDataConfig",
      },
      sse_configuration: {
        value: healthlakeFhirDatastoreSseConfigurationToHclTerraform(this._sseConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HealthlakeFhirDatastoreSseConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(healthlakeFhirDatastoreTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthlakeFhirDatastoreTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
