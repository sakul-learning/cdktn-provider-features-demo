// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediatailorSourceLocationConfig extends cdktn.TerraformMetaArguments {
  /**
  * <p>Access configuration parameters.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#access_configuration MediatailorSourceLocation#access_configuration}
  */
  readonly accessConfiguration?: MediatailorSourceLocationAccessConfiguration;
  /**
  * <p>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#default_segment_delivery_configuration MediatailorSourceLocation#default_segment_delivery_configuration}
  */
  readonly defaultSegmentDeliveryConfiguration?: MediatailorSourceLocationDefaultSegmentDeliveryConfiguration;
  /**
  * <p>The HTTP configuration for the source location.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#http_configuration MediatailorSourceLocation#http_configuration}
  */
  readonly httpConfiguration: MediatailorSourceLocationHttpConfiguration;
  /**
  * <p>A list of the segment delivery configurations associated with this resource.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#segment_delivery_configurations MediatailorSourceLocation#segment_delivery_configurations}
  */
  readonly segmentDeliveryConfigurations?: MediatailorSourceLocationSegmentDeliveryConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}
  */
  readonly sourceLocationName: string;
  /**
  * The tags to assign to the source location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#tags MediatailorSourceLocation#tags}
  */
  readonly tags?: MediatailorSourceLocationTags[] | cdktn.IResolvable;
}
export interface MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration {
  /**
  * <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#header_name MediatailorSourceLocation#header_name}
  */
  readonly headerName?: string;
  /**
  * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#secret_arn MediatailorSourceLocation#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#secret_string_key MediatailorSourceLocation#secret_string_key}
  */
  readonly secretStringKey?: string;
}

export function mediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationToTerraform(struct?: MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
    secret_string_key: cdktn.stringToTerraform(struct!.secretStringKey),
  }
}


export function mediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationToHclTerraform(struct?: MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_string_key: {
      value: cdktn.stringToHclTerraform(struct!.secretStringKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._secretStringKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretStringKey = this._secretStringKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._secretArn = undefined;
      this._secretStringKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._secretArn = value.secretArn;
      this._secretStringKey = value.secretStringKey;
    }
  }

  // header_name - computed: true, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // secret_string_key - computed: true, optional: true, required: false
  private _secretStringKey?: string; 
  public get secretStringKey() {
    return this.getStringAttribute('secret_string_key');
  }
  public set secretStringKey(value: string) {
    this._secretStringKey = value;
  }
  public resetSecretStringKey() {
    this._secretStringKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringKeyInput() {
    return this._secretStringKey;
  }
}
export interface MediatailorSourceLocationAccessConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}
  */
  readonly accessType?: string;
  /**
  * <p>AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#secrets_manager_access_token_configuration MediatailorSourceLocation#secrets_manager_access_token_configuration}
  */
  readonly secretsManagerAccessTokenConfiguration?: MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration;
}

export function mediatailorSourceLocationAccessConfigurationToTerraform(struct?: MediatailorSourceLocationAccessConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_type: cdktn.stringToTerraform(struct!.accessType),
    secrets_manager_access_token_configuration: mediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationToTerraform(struct!.secretsManagerAccessTokenConfiguration),
  }
}


export function mediatailorSourceLocationAccessConfigurationToHclTerraform(struct?: MediatailorSourceLocationAccessConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_type: {
      value: cdktn.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_access_token_configuration: {
      value: mediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationToHclTerraform(struct!.secretsManagerAccessTokenConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorSourceLocationAccessConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorSourceLocationAccessConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._secretsManagerAccessTokenConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerAccessTokenConfiguration = this._secretsManagerAccessTokenConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorSourceLocationAccessConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessType = undefined;
      this._secretsManagerAccessTokenConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessType = value.accessType;
      this._secretsManagerAccessTokenConfiguration.internalValue = value.secretsManagerAccessTokenConfiguration;
    }
  }

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // secrets_manager_access_token_configuration - computed: true, optional: true, required: false
  private _secretsManagerAccessTokenConfiguration = new MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference(this, "secrets_manager_access_token_configuration");
  public get secretsManagerAccessTokenConfiguration() {
    return this._secretsManagerAccessTokenConfiguration;
  }
  public putSecretsManagerAccessTokenConfiguration(value: MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration) {
    this._secretsManagerAccessTokenConfiguration.internalValue = value;
  }
  public resetSecretsManagerAccessTokenConfiguration() {
    this._secretsManagerAccessTokenConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerAccessTokenConfigurationInput() {
    return this._secretsManagerAccessTokenConfiguration.internalValue;
  }
}
export interface MediatailorSourceLocationDefaultSegmentDeliveryConfiguration {
  /**
  * <p>The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}
  */
  readonly baseUrl?: string;
}

export function mediatailorSourceLocationDefaultSegmentDeliveryConfigurationToTerraform(struct?: MediatailorSourceLocationDefaultSegmentDeliveryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
  }
}


export function mediatailorSourceLocationDefaultSegmentDeliveryConfigurationToHclTerraform(struct?: MediatailorSourceLocationDefaultSegmentDeliveryConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorSourceLocationDefaultSegmentDeliveryConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorSourceLocationDefaultSegmentDeliveryConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
    }
  }

  // base_url - computed: true, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }
}
export interface MediatailorSourceLocationHttpConfiguration {
  /**
  * <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}
  */
  readonly baseUrl: string;
}

export function mediatailorSourceLocationHttpConfigurationToTerraform(struct?: MediatailorSourceLocationHttpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
  }
}


export function mediatailorSourceLocationHttpConfigurationToHclTerraform(struct?: MediatailorSourceLocationHttpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorSourceLocationHttpConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediatailorSourceLocationHttpConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorSourceLocationHttpConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }
}
export interface MediatailorSourceLocationSegmentDeliveryConfigurations {
  /**
  * <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}
  */
  readonly baseUrl?: string;
  /**
  * <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#name MediatailorSourceLocation#name}
  */
  readonly name?: string;
}

export function mediatailorSourceLocationSegmentDeliveryConfigurationsToTerraform(struct?: MediatailorSourceLocationSegmentDeliveryConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function mediatailorSourceLocationSegmentDeliveryConfigurationsToHclTerraform(struct?: MediatailorSourceLocationSegmentDeliveryConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorSourceLocationSegmentDeliveryConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediatailorSourceLocationSegmentDeliveryConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._name = value.name;
    }
  }

  // base_url - computed: true, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class MediatailorSourceLocationSegmentDeliveryConfigurationsList extends cdktn.ComplexList {
  public internalValue? : MediatailorSourceLocationSegmentDeliveryConfigurations[] | cdktn.IResolvable

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
  public get(index: number): MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference {
    return new MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediatailorSourceLocationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#key MediatailorSourceLocation#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#value MediatailorSourceLocation#value}
  */
  readonly value?: string;
}

export function mediatailorSourceLocationTagsToTerraform(struct?: MediatailorSourceLocationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediatailorSourceLocationTagsToHclTerraform(struct?: MediatailorSourceLocationTags | cdktn.IResolvable): any {
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

export class MediatailorSourceLocationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediatailorSourceLocationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediatailorSourceLocationTags | cdktn.IResolvable | undefined) {
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

export class MediatailorSourceLocationTagsList extends cdktn.ComplexList {
  public internalValue? : MediatailorSourceLocationTags[] | cdktn.IResolvable

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
  public get(index: number): MediatailorSourceLocationTagsOutputReference {
    return new MediatailorSourceLocationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location awscc_mediatailor_source_location}
*/
export class MediatailorSourceLocation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediatailor_source_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediatailorSourceLocation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediatailorSourceLocation to import
  * @param importFromId The id of the existing MediatailorSourceLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediatailorSourceLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_source_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/mediatailor_source_location awscc_mediatailor_source_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediatailorSourceLocationConfig
  */
  public constructor(scope: Construct, id: string, config: MediatailorSourceLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediatailor_source_location',
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
    this._accessConfiguration.internalValue = config.accessConfiguration;
    this._defaultSegmentDeliveryConfiguration.internalValue = config.defaultSegmentDeliveryConfiguration;
    this._httpConfiguration.internalValue = config.httpConfiguration;
    this._segmentDeliveryConfigurations.internalValue = config.segmentDeliveryConfigurations;
    this._sourceLocationName = config.sourceLocationName;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_configuration - computed: true, optional: true, required: false
  private _accessConfiguration = new MediatailorSourceLocationAccessConfigurationOutputReference(this, "access_configuration");
  public get accessConfiguration() {
    return this._accessConfiguration;
  }
  public putAccessConfiguration(value: MediatailorSourceLocationAccessConfiguration) {
    this._accessConfiguration.internalValue = value;
  }
  public resetAccessConfiguration() {
    this._accessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigurationInput() {
    return this._accessConfiguration.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_segment_delivery_configuration - computed: true, optional: true, required: false
  private _defaultSegmentDeliveryConfiguration = new MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference(this, "default_segment_delivery_configuration");
  public get defaultSegmentDeliveryConfiguration() {
    return this._defaultSegmentDeliveryConfiguration;
  }
  public putDefaultSegmentDeliveryConfiguration(value: MediatailorSourceLocationDefaultSegmentDeliveryConfiguration) {
    this._defaultSegmentDeliveryConfiguration.internalValue = value;
  }
  public resetDefaultSegmentDeliveryConfiguration() {
    this._defaultSegmentDeliveryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSegmentDeliveryConfigurationInput() {
    return this._defaultSegmentDeliveryConfiguration.internalValue;
  }

  // http_configuration - computed: false, optional: false, required: true
  private _httpConfiguration = new MediatailorSourceLocationHttpConfigurationOutputReference(this, "http_configuration");
  public get httpConfiguration() {
    return this._httpConfiguration;
  }
  public putHttpConfiguration(value: MediatailorSourceLocationHttpConfiguration) {
    this._httpConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigurationInput() {
    return this._httpConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // segment_delivery_configurations - computed: true, optional: true, required: false
  private _segmentDeliveryConfigurations = new MediatailorSourceLocationSegmentDeliveryConfigurationsList(this, "segment_delivery_configurations", false);
  public get segmentDeliveryConfigurations() {
    return this._segmentDeliveryConfigurations;
  }
  public putSegmentDeliveryConfigurations(value: MediatailorSourceLocationSegmentDeliveryConfigurations[] | cdktn.IResolvable) {
    this._segmentDeliveryConfigurations.internalValue = value;
  }
  public resetSegmentDeliveryConfigurations() {
    this._segmentDeliveryConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentDeliveryConfigurationsInput() {
    return this._segmentDeliveryConfigurations.internalValue;
  }

  // source_location_name - computed: false, optional: false, required: true
  private _sourceLocationName?: string; 
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }
  public set sourceLocationName(value: string) {
    this._sourceLocationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationNameInput() {
    return this._sourceLocationName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediatailorSourceLocationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediatailorSourceLocationTags[] | cdktn.IResolvable) {
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
      access_configuration: mediatailorSourceLocationAccessConfigurationToTerraform(this._accessConfiguration.internalValue),
      default_segment_delivery_configuration: mediatailorSourceLocationDefaultSegmentDeliveryConfigurationToTerraform(this._defaultSegmentDeliveryConfiguration.internalValue),
      http_configuration: mediatailorSourceLocationHttpConfigurationToTerraform(this._httpConfiguration.internalValue),
      segment_delivery_configurations: cdktn.listMapper(mediatailorSourceLocationSegmentDeliveryConfigurationsToTerraform, false)(this._segmentDeliveryConfigurations.internalValue),
      source_location_name: cdktn.stringToTerraform(this._sourceLocationName),
      tags: cdktn.listMapper(mediatailorSourceLocationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_configuration: {
        value: mediatailorSourceLocationAccessConfigurationToHclTerraform(this._accessConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediatailorSourceLocationAccessConfiguration",
      },
      default_segment_delivery_configuration: {
        value: mediatailorSourceLocationDefaultSegmentDeliveryConfigurationToHclTerraform(this._defaultSegmentDeliveryConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediatailorSourceLocationDefaultSegmentDeliveryConfiguration",
      },
      http_configuration: {
        value: mediatailorSourceLocationHttpConfigurationToHclTerraform(this._httpConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediatailorSourceLocationHttpConfiguration",
      },
      segment_delivery_configurations: {
        value: cdktn.listMapperHcl(mediatailorSourceLocationSegmentDeliveryConfigurationsToHclTerraform, false)(this._segmentDeliveryConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediatailorSourceLocationSegmentDeliveryConfigurationsList",
      },
      source_location_name: {
        value: cdktn.stringToHclTerraform(this._sourceLocationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(mediatailorSourceLocationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MediatailorSourceLocationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
